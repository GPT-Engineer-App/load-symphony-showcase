import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Heart, Paw } from "lucide-react";

const dogBreeds = [
  { name: "Labrador Retriever", image: "https://images.unsplash.com/photo-1579213838058-7a3094967f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  { name: "German Shepherd", image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  { name: "Golden Retriever", image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  { name: "French Bulldog", image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  { name: "Bulldog", image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
];

const Index = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 text-blue-800">Pawsome Pals</h1>
          <p className="text-xl text-gray-600">Discover the wonderful world of dogs!</p>
        </div>

        <div className="mb-16 relative">
          <img 
            src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Happy dogs" 
            className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg flex items-end justify-start p-8">
            <h2 className="text-4xl font-bold text-white">Man's Best Friend</h2>
          </div>
        </div>

        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-3xl">What are Dogs?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">Dogs are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated. Their loyalty, playfulness, and unconditional love make them beloved companions worldwide.</p>
          </CardContent>
        </Card>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Dog Breeds</h2>
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {dogBreeds.map((breed, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="text-center">
                          <img src={breed.image} alt={breed.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                          <h3 className="font-semibold">{breed.name}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-3xl">Characteristics of Dogs</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-4">
              <li className="flex items-center"><Paw className="mr-2 text-blue-500" /> Loyal and affectionate companions</li>
              <li className="flex items-center"><Paw className="mr-2 text-blue-500" /> Highly intelligent and trainable</li>
              <li className="flex items-center"><Paw className="mr-2 text-blue-500" /> Wide variety of breeds, sizes, and colors</li>
              <li className="flex items-center"><Paw className="mr-2 text-blue-500" /> Excellent sense of smell and hearing</li>
              <li className="flex items-center"><Paw className="mr-2 text-blue-500" /> Require regular exercise and mental stimulation</li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={() => setLikes(likes + 1)}
            className="group"
          >
            <Heart className="mr-2 h-6 w-6 group-hover:text-red-500 transition-colors" />
            Show some love! ({likes})
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
