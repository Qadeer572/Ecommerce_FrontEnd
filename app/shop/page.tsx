import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ShopPage() {
  // Placeholder data (in real app, this would be fetched from Python API)
  const products = [
    {
      id: 1,
      title: "Premium Leather Bag",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80",
      category: "Accessories"
    },
    {
      id: 2,
      title: "Wireless Headphones",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      category: "Electronics"
    },
    {
      id: 3,
      title: "Smart Watch",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      category: "Electronics"
    },
    {
      id: 4,
      title: "Classic White Sneakers",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
      category: "Footwear"
    },
    {
      id: 5,
      title: "Denim Jacket",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=800&q=80",
      category: "Clothing"
    },
    {
      id: 6,
      title: "Sunglasses",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
      category: "Accessories"
    }
  ];

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Shop</h1>
        <div className="flex items-center gap-4">
          <select className="rounded-md border bg-background px-4 py-2">
            <option value="">All Categories</option>
            <option value="clothing">Clothing</option>
            <option value="accessories">Accessories</option>
            <option value="electronics">Electronics</option>
            <option value="footwear">Footwear</option>
          </select>
          <select className="rounded-md border bg-background px-4 py-2">
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id}>
            <CardContent className="p-4">
              <img
                src={product.image}
                alt={product.title}
                className="aspect-square w-full rounded-lg object-cover"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm text-muted-foreground">{product.category}</p>
                <p className="mt-2 text-xl font-bold text-primary">
                  ${product.price}
                </p>
                <div className="mt-4 flex gap-2">
                  <Button asChild variant="outline" className="flex-1">
                    <Link href={`/shop/${product.id}`}>View Details</Link>
                  </Button>
                  <Button className="flex-1">Add to Cart</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}