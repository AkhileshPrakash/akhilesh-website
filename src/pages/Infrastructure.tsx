import Layout from '../components/Layout';
import { Factory, Cog, Users, TrendingUp, Clock, Shield } from 'lucide-react';
import infrastructureImage from '../assets/infrastructure.jpg';

const Infrastructure = () => {
  const capabilities = [
    {
      icon: <Factory className="w-8 h-8 text-primary" />,
      title: "Modern Manufacturing Facility",
      description: "State-of-the-art production facility equipped with latest machinery and technology."
    },
    {
      icon: <Cog className="w-8 h-8 text-secondary" />,
      title: "Advanced Machinery",
      description: "High-speed knitting machines and computerized cutting systems for precision manufacturing."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Skilled Workforce",
      description: "Experienced team of professionals ensuring quality at every stage of production."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-secondary" />,
      title: "Production Capacity",
      description: "High-volume production capabilities to meet large order requirements efficiently."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Timely Delivery",
      description: "Streamlined processes ensuring on-time delivery for all customer orders."
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: "Quality Control",
      description: "Rigorous quality control systems at every stage of the manufacturing process."
    }
  ];

  const stats = [
    { number: "50,000+", label: "Sq Ft Factory Space" },
    { number: "100+", label: "Skilled Workers" },
    { number: "150000+ pcs", label: "Month" },
    { number: "24/7", label: "Quality Monitoring" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={infrastructureImage} 
            alt="Manufacturing Infrastructure" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold font-poppins mb-6 text-white animate-fade-up">
            Our Infrastructure
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-up" style={{animationDelay: '0.2s'}}>
            World-class manufacturing facility equipped with modern technology and skilled professionals 
            to deliver excellence in every garment we produce.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={stat.label} className="animate-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl font-bold text-accent-foreground font-poppins mb-2">
                  {stat.number}
                </div>
                <div className="text-accent-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground font-poppins mb-4">
              Manufacturing Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our infrastructure is designed to support high-quality manufacturing while maintaining 
              efficiency and sustainability standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div 
                key={capability.title}
                className="feature-card animate-fade-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-poppins">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Infrastructure */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-in">
              <h2 className="text-4xl font-bold text-foreground font-poppins mb-6">
                Production Facilities
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Knitting Department</h3>
                  <p className="text-muted-foreground">
                    Advanced circular knitting machines capable of producing various fabric weights 
                    and textures for different garment types.
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Cutting Section</h3>
                  <p className="text-muted-foreground">
                    Computerized cutting systems ensuring precision and minimal fabric waste, 
                    optimizing material utilization.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Stitching Unit</h3>
                  <p className="text-muted-foreground">
                    Modern sewing machines and overlock systems operated by skilled tailors 
                    ensuring perfect finishing.
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Finishing Department</h3>
                  <p className="text-muted-foreground">
                    Complete finishing line including pressing, packaging, and quality inspection 
                    before final dispatch.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-fade-up">
              <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-elegant)]">
                <h3 className="text-2xl font-bold text-foreground font-poppins mb-6">
                  Quality Assurance
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Incoming Material Inspection</h4>
                      <p className="text-muted-foreground text-sm">Thorough checking of all raw materials before production</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-secondary-foreground rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">In-Process Quality Control</h4>
                      <p className="text-muted-foreground text-sm">Continuous monitoring during manufacturing stages</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Final Product Inspection</h4>
                      <p className="text-muted-foreground text-sm">Complete quality check before packaging and dispatch</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-secondary-foreground rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Testing Laboratory</h4>
                      <p className="text-muted-foreground text-sm">In-house testing for fabric quality and garment specifications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground font-poppins mb-6">
            Technology & Innovation
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            We continuously invest in technology and innovation to improve our manufacturing 
            processes and product quality.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="feature-card">
              <h3 className="text-xl font-bold text-foreground font-poppins mb-4">
                Sustainable Practices
              </h3>
              <p className="text-muted-foreground">
                Environment-friendly manufacturing processes with focus on reducing waste 
                and energy consumption while maintaining quality standards.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="text-xl font-bold text-foreground font-poppins mb-4">
                Continuous Improvement
              </h3>
              <p className="text-muted-foreground">
                Regular upgrades to machinery and processes to stay ahead in technology 
                and maintain competitive advantage in the market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Infrastructure;