import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Mail, Phone } from 'lucide-react';

const UnderConstruction = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 p-4">
      <div className="max-w-3xl w-full bg-background rounded-2xl shadow-[var(--shadow-elegant)] p-8 md:p-12 text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
          <Clock className="w-10 h-10 text-primary" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-foreground">
          Coming Soon
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8">
          Our new website is under construction. We're working hard to give you the best experience.
        </p>
        
        <div className="h-2 w-full bg-muted rounded-full mb-8 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full w-3/4 animate-pulse"></div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:info@akhileshexports.in" 
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span>info@akhileshexports.in</span>
            </a>
            <a 
              href="tel:+919791902550" 
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-5 h-5 text-secondary" />
              <span>+91 9791902550</span>
            </a>
          </div>
        </div>
        
        <div className="text-sm text-muted-foreground">
          <p>74, Palani Andavar Nagar, K.Chettipalayam, Saravana Mahal,</p>
          <p>Dharapuram Road, Tirupur 641608, INDIA</p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;