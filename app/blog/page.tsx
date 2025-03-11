import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function BlogPage() {
  // Placeholder data (in real app, this would be fetched from Python API)
  const posts = [
    {
      id: 1,
      title: "The Future of E-commerce",
      excerpt: "Discover the latest trends shaping online retail and how they're transforming the way we shop. From AI-powered recommendations to augmented reality try-ons...",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      category: "E-commerce",
      author: "Sarah Johnson",
      readTime: "5 min read",
      date: "2024-03-20"
    },
    {
      id: 2,
      title: "Sustainable Fashion Guide",
      excerpt: "Learn how to build an eco-friendly wardrobe that doesn't compromise on style. We explore sustainable materials, ethical brands, and conscious consumption...",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80",
      category: "Fashion",
      author: "Michael Chen",
      readTime: "7 min read",
      date: "2024-03-18"
    },
    {
      id: 3,
      title: "Tech Gadgets Review 2024",
      excerpt: "Our comprehensive review of the most innovative tech gadgets of 2024. From smart home devices to wearable technology, we cover everything you need to know...",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
      category: "Technology",
      author: "David Smith",
      readTime: "10 min read",
      date: "2024-03-15"
    },
    {
      id: 4,
      title: "Digital Marketing Strategies",
      excerpt: "Effective digital marketing strategies for modern businesses. Learn about SEO, social media marketing, content creation, and customer engagement...",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      category: "Marketing",
      author: "Emma Wilson",
      readTime: "8 min read",
      date: "2024-03-12"
    }
  ];

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Blog</h1>
        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="/blog/write" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Write Blog
            </Link>
          </Button>
          <select className="rounded-md border bg-background px-4 py-2">
            <option value="">All Categories</option>
            <option value="e-commerce">E-commerce</option>
            <option value="fashion">Fashion</option>
            <option value="technology">Technology</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <CardContent className="p-0">
              <img
                src={post.image}
                alt={post.title}
                className="aspect-video w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold">{post.title}</h2>
                <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-medium">By {post.author}</span>
                  <Button asChild variant="outline">
                    <Link href={`/blog/${post.id}`}>Read More</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}