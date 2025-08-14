import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Sparkles, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContentGeneratorProps {
  onContentGenerated?: (content: string) => void;
}

const ContentGenerator = ({ onContentGenerated }: ContentGeneratorProps) => {
  const [prompt, setPrompt] = useState('');
  const [contentType, setContentType] = useState('general');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const generateContent = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter a prompt",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      // Simulate content generation with sample responses based on content type
      let generatedText = '';
      
      // Add a small delay to simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      switch(contentType) {
        case 'product-description':
          generatedText = `Our premium ${prompt} are crafted with the finest materials, ensuring exceptional quality and comfort. Designed for durability and style, these products meet international standards and are perfect for export markets. Each item undergoes rigorous quality control to guarantee customer satisfaction.`;
          break;
        case 'buyer-content':
          generatedText = `The market for ${prompt} continues to grow globally, with significant interest from European and North American buyers. Recent trends show increased demand for sustainable and ethically produced textiles, creating new opportunities for manufacturers who prioritize environmental responsibility.`;
          break;
        case 'company-updates':
          generatedText = `We're excited to announce our recent developments regarding ${prompt}. This strategic initiative aligns with our company's commitment to innovation and quality excellence. Our team has worked diligently to ensure that this update meets the highest industry standards.`;
          break;
        default:
          generatedText = `${prompt} represents an important aspect of the textile industry. With our expertise and dedication to quality, we continue to provide exceptional products and services to our clients worldwide. Our commitment to excellence drives everything we do.`;
      }
      
      setGeneratedContent(generatedText);
      onContentGenerated?.(generatedText);
      toast({
        title: "Content Generated",
        description: "Successfully generated sample content",
      });
    } catch (error) {
      console.error('Error generating content:', error);
      toast({
        title: "Error",
        description: "Failed to generate content.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Copied",
        description: "Content copied to clipboard",
      });
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Content Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Content Type</label>
            <Select value={contentType} onValueChange={setContentType}>
              <SelectTrigger>
                <SelectValue placeholder="Select content type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Content</SelectItem>
                <SelectItem value="product-description">Product Description</SelectItem>
                <SelectItem value="buyer-content">Buyer Content</SelectItem>
                <SelectItem value="company-updates">Company Updates</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Prompt</label>
            <Textarea
              placeholder="Enter your prompt for content generation..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={4}
            />
          </div>

          <Button
            onClick={generateContent}
            disabled={isLoading || !prompt.trim()}
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Generate Content
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {generatedContent && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Generated Content
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                className="ml-2"
              >
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg">
              <pre className="whitespace-pre-wrap font-sans text-sm">
                {generatedContent}
              </pre>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ContentGenerator;