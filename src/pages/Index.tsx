import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Palette, Zap } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <nav className="flex items-center justify-between mb-20">
          <img src={logoFull} alt="Connexo" className="h-10" />
          <Link to="/auth">
            <Button>Get Started</Button>
          </Link>
        </nav>

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight">
            Your Links,{" "}
            <span className="text-primary">Elevated</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            The premium link-in-bio platform with powerful analytics and unlimited customization
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/auth">
              <Button size="lg" className="gap-2">
                Create Your Profile
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-32">
          <div className="text-center space-y-4 p-6 rounded-lg bg-card border border-border">
            <div className="inline-flex p-3 rounded-lg bg-primary/10">
              <Palette className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Visual Editor</h3>
            <p className="text-muted-foreground">
              Customize every aspect of your profile with our intuitive visual editor
            </p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-lg bg-card border border-border">
            <div className="inline-flex p-3 rounded-lg bg-primary/10">
              <BarChart3 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Powerful Analytics</h3>
            <p className="text-muted-foreground">
              Track your performance with detailed insights and engagement metrics
            </p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-lg bg-card border border-border">
            <div className="inline-flex p-3 rounded-lg bg-primary/10">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Optimized performance ensures your profile loads instantly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
