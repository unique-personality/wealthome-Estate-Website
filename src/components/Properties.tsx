
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const properties = [
  {
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    title: "Modern Downtown Apartment",
    price: "$850,000",
    location: "Downtown District"
  },
  {
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    title: "Luxury Office Space",
    price: "$2,100,000",
    location: "Business Center"
  },
  {
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    title: "Waterfront Villa",
    price: "$3,500,000",
    location: "Coastal Area"
  }
];

const Properties = () => {
  return (
    <section id="properties" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our exclusive selection of premium properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-2">{property.location}</p>
                <p className="text-2xl font-bold text-blue-600 mb-4">{property.price}</p>
                <Button className="w-full">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;

