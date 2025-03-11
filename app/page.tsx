import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  // Placeholder data (in real app, this would be fetched from Python API)
  const featuredProducts = [
    {
      id: 1,
      title: "Premium Leather Bag",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80"
    },
    {
      id: 2,
      title: "Wireless Headphones",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
    },
    {
      id: 3,
      title: "Smart Watch",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
    }
  ];

  const latestPosts = [
    {
      id: 1,
      title: "The Future of E-commerce",
      excerpt: "Discover the latest trends shaping online retail...",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
    },
    {
      id: 2,
      title: "Sustainable Fashion Guide",
      excerpt: "Learn how to build an eco-friendly wardrobe...",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80"
    }
  ];

  return (
    <div className="flex flex-col gap-16 py-8">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"
            alt="Hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative flex h-full items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold leading-tight">
              Discover Your Style, Read Your Stories
            </h1>
            <p className="mt-4 text-xl">
              Shop the latest trends and explore insightful articles curated just for you.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg">
                <Link href="/shop">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/blog">Read Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Button asChild variant="ghost">
            <Link href="/shop" className="group">
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="aspect-square w-full rounded-lg object-cover"
                />
                <h3 className="mt-4 text-lg font-semibold">{product.title}</h3>
                <p className="text-xl font-bold text-primary">${product.price}</p>
                <Button className="mt-4 w-full">Add to Cart</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="container">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Latest Articles</h2>
          <Button asChild variant="ghost">
            <Link href="/blog" className="group">
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {latestPosts.map((post) => (
            <Card key={post.id}>
              <CardContent className="p-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-video w-full rounded-lg object-cover"
                />
                <h3 className="mt-4 text-xl font-semibold">{post.title}</h3>
                <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                <Button asChild variant="outline" className="mt-4">
                  <Link href={`/blog/${post.id}`}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-muted py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">Stay Updated</h2>
          <p className="mt-4 text-muted-foreground">
            Subscribe to our newsletter for the latest products and blog posts.
          </p>
          <form className="mx-auto mt-8 flex max-w-md gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md border bg-background px-4 py-2"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}