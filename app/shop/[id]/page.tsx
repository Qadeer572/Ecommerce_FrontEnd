import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

// This would normally fetch from your API
const products = [
  {
    id: "1",
    title: "Premium Leather Bag",
    price: 199.99,
    description: "Handcrafted from genuine leather, this premium bag combines style with functionality. Perfect for everyday use or special occasions.",
    features: [
      "100% Genuine Leather",
      "Adjustable Shoulder Strap",
      "Multiple Interior Compartments",
      "Brass Hardware",
      "Water-Resistant Lining"
    ],
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80",
    category: "Accessories",
    specs: {
      dimensions: "12\" x 16\" x 4\"",
      weight: "2.5 lbs",
      material: "Full-grain leather",
      warranty: "1 year"
    }
  }
];

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(p => p.id !== params.id).slice(0, 3);

  return (
    <div className="container py-8">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="mt-2 text-2xl font-bold text-primary">${product.price}</p>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="space-y-4">
            <h3 className="font-semibold">Key Features:</h3>
            <ul className="list-inside list-disc space-y-2">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Specifications:</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key}>
                  <dt className="text-sm text-muted-foreground">{key}</dt>
                  <dd className="font-medium">{value}</dd>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <Button size="lg" className="flex-1">Add to Cart</Button>
            <Button size="lg" variant="outline">Add to Wishlist</Button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Related Products</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedProducts.map((relatedProduct) => (
            <Card key={relatedProduct.id}>
              <CardContent className="p-4">
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.title}
                  className="aspect-square w-full rounded-lg object-cover"
                />
                <h3 className="mt-4 text-lg font-semibold">{relatedProduct.title}</h3>
                <p className="text-xl font-bold text-primary">${relatedProduct.price}</p>
                <Button asChild className="mt-4 w-full">
                  <Link href={`/shop/${relatedProduct.id}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}