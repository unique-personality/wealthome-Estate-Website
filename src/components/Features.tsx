
import { Card, CardContent } from "@/components/ui/card";
import { Layout, Users, Calendar, Search } from "lucide-react";

const features = [
  {
    icon: Layout,
    title: "Smart Integration",
    description: "Seamlessly connect your real estate operations with our intelligent platform."
  },
  {
    icon: Users,
    title: "Partner Network",
    description: "Access a vast network of real estate professionals and service providers."
  },
  {
    icon: Calendar,
    title: "Automated Scheduling",
    description: "Streamline property viewings and meetings with smart scheduling."
  },
  {
    icon: Search,
    title: "Market Intelligence",
    description: "Get real-time insights and analytics about your market."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Your Business
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage and grow your real estate business in one platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

