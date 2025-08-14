import Layout from '@/components/Layout';
import ContentGenerator from '@/components/ContentGenerator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Image, Users, Building } from 'lucide-react';

const ContentManager = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">Content Manager</h1>
            <p className="text-muted-foreground text-lg">
              Generate and update content for your website
            </p>
          </div>

          <Tabs defaultValue="general" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="general" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                General
              </TabsTrigger>
              <TabsTrigger value="products" className="flex items-center gap-2">
                <Image className="w-4 h-4" />
                Products
              </TabsTrigger>
              <TabsTrigger value="buyers" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Buyers
              </TabsTrigger>
              <TabsTrigger value="company" className="flex items-center gap-2">
                <Building className="w-4 h-4" />
                Company
              </TabsTrigger>
            </TabsList>

            <TabsContent value="general">
              <Card>
                <CardHeader>
                  <CardTitle>General Content Generation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContentGenerator />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="products">
              <Card>
                <CardHeader>
                  <CardTitle>Product Descriptions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold mb-2">Example Prompts:</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• "Write a description for premium cotton t-shirts for international markets"</li>
                      <li>• "Create content for export-quality polo shirts with moisture-wicking features"</li>
                      <li>• "Generate product specs for organic cotton hoodies for European buyers"</li>
                    </ul>
                  </div>
                  <ContentGenerator />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="buyers">
              <Card>
                <CardHeader>
                  <CardTitle>Buyer & Market Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold mb-2">Example Prompts:</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• "Write about textile market trends in Europe for 2024"</li>
                      <li>• "Create content about sustainable fashion buyers in North America"</li>
                      <li>• "Generate information about fast fashion retailers in Asia"</li>
                    </ul>
                  </div>
                  <ContentGenerator />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="company">
              <Card>
                <CardHeader>
                  <CardTitle>Company Updates & News</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold mb-2">Example Prompts:</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• "Write a company announcement about new sustainable manufacturing processes"</li>
                      <li>• "Create content about achieving new quality certifications"</li>
                      <li>• "Generate a press release about expanding to new international markets"</li>
                    </ul>
                  </div>
                  <ContentGenerator />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default ContentManager;