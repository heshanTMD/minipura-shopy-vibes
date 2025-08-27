import { Button } from "@/components/ui/button";
import { ShoppingBag, Truck, Shield, Star } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[500px] bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple/20" />
      
      <div className="container relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Minipura.Com
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 max-w-xl">
                Discover amazing products at unbeatable prices. Fast delivery, secure payments, and quality guaranteed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-strong">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Browse Categories
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center space-y-2">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 w-fit mx-auto">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-white/90">Free Delivery</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 w-fit mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-white/90">Secure Payment</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 w-fit mx-auto">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-white/90">Top Quality</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={heroBanner}
                alt="Shopping Experience"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground p-4 rounded-full shadow-medium animate-bounce">
              <ShoppingBag className="w-6 h-6" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground p-4 rounded-full shadow-medium">
              <Star className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;