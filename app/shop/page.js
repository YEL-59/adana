import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star } from "lucide-react";
import Image from "next/image";

export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: "HairiSafe Premium Shampoo",
      description: "Gentle, sulfate-free formula with natural ingredients",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=400&q=80",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Natural Hair Conditioner",
      description: "Deep conditioning treatment with argan oil and keratin",
      price: "$28.99",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Protective Hair Serum",
      description: "Heat protection and shine serum with natural oils",
      price: "$32.99",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&q=80",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Hair Growth Oil",
      description: "Nourishing blend of castor, jojoba, and rosemary oil",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80",
      rating: 4.6,
    },
    {
      id: 5,
      name: "Moisturizing Hair Mask",
      description: "Weekly treatment with shea butter and coconut oil",
      price: "$26.99",
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&q=80",
      rating: 4.8,
    },
    {
      id: 6,
      name: "Detangling Spray",
      description: "Lightweight spray for easy detangling and manageability",
      price: "$18.99",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&q=80",
      rating: 4.5,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="bg-background py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
                Shop Safe Hair Products
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover our curated selection of hair products with transparent, safe ingredients
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-8 sm:py-12 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative w-full aspect-square overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-muted-foreground">{product.rating}</span>
                      </div>
                    </div>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">{product.price}</span>
                    <Button className="bg-[#5C4033] text-white hover:bg-[#4a3328]">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

