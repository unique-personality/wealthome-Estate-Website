
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
          alt="Luxury Real Estate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Integrate Your Real Estate Business
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
          Streamline your operations, connect with partners, and grow your real estate empire with our comprehensive business integration platform.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

