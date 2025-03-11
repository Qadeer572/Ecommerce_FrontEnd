import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

// This would normally fetch from your API
const posts = [
  {
    id: "1",
    title: "The Future of E-commerce",
    content: `
      The landscape of online retail is rapidly evolving, driven by technological advancements and changing consumer behaviors. From AI-powered recommendations to augmented reality try-ons, the future of e-commerce promises to be more immersive and personalized than ever before.

      ## The Rise of AI in E-commerce

      Artificial Intelligence is revolutionizing how we shop online. Smart algorithms analyze shopping patterns, predict trends, and offer personalized recommendations that feel surprisingly human. This technology isn't just improving the shopping experience – it's fundamentally changing how retailers understand and serve their customers.

      ## Augmented Reality: Try Before You Buy

      One of the biggest challenges in online shopping has always been the inability to try products before purchasing. Augmented Reality (AR) is changing this paradigm. Retailers are now offering virtual try-ons for everything from sunglasses to furniture, significantly reducing return rates and increasing customer satisfaction.

      ## The Social Commerce Revolution

      Social media platforms are becoming powerful shopping destinations. The integration of e-commerce features into social platforms is creating seamless shopping experiences where discovery, consideration, and purchase happen in the same place.

      ## Sustainability in E-commerce

      As environmental consciousness grows, sustainable practices in e-commerce are becoming not just nice-to-have but essential. From eco-friendly packaging to carbon-neutral shipping options, retailers are finding innovative ways to reduce their environmental impact.
    `,
    excerpt: "Discover the latest trends shaping online retail and how they're transforming the way we shop. From AI-powered recommendations to augmented reality try-ons...",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    category: "E-commerce",
    author: "Sarah Johnson",
    readTime: "5 min read",
    date: "2024-03-20"
  },
  {
    id: "2",
    title: "Sustainable Fashion Guide",
    content: `
      Building an eco-friendly wardrobe doesn't mean compromising on style. In this comprehensive guide, we explore how to make sustainable fashion choices that look good and feel good.

      ## Understanding Sustainable Materials

      From organic cotton to recycled polyester, we break down the most sustainable fabric choices and their environmental impact. Learn how to identify truly eco-friendly materials and avoid greenwashing.

      ## Ethical Brands to Watch

      Discover brands that are leading the way in sustainable fashion. We highlight companies that prioritize fair labor practices, use sustainable materials, and maintain transparent supply chains.

      ## Building a Capsule Wardrobe

      Learn how to create a versatile, sustainable wardrobe with fewer, better-quality pieces. We provide practical tips for selecting timeless items that work together seamlessly.

      ## Care and Maintenance

      Extend the life of your clothing with proper care techniques. From washing to storage, we share best practices for maintaining your sustainable fashion pieces.
    `,
    excerpt: "Learn how to build an eco-friendly wardrobe that doesn't compromise on style. We explore sustainable materials, ethical brands, and conscious consumption...",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80",
    category: "Fashion",
    author: "Michael Chen",
    readTime: "7 min read",
    date: "2024-03-18"
  },
  {
    id: "3",
    title: "Tech Gadgets Review 2024",
    content: `
      Stay ahead of the curve with our comprehensive review of the most innovative tech gadgets of 2024. From smart home devices to wearable technology, we cover everything you need to know.

      ## Smart Home Innovation

      Explore the latest advancements in smart home technology, including AI-powered assistants, security systems, and energy management solutions.

      ## Wearable Technology

      From fitness trackers to augmented reality glasses, discover how wearable tech is evolving and improving our daily lives.

      ## Sustainable Tech

      Learn about eco-friendly gadgets and how technology companies are working to reduce their environmental impact.

      ## Future Trends

      Get a glimpse of upcoming technology trends and how they might shape our future.
    `,
    excerpt: "Our comprehensive review of the most innovative tech gadgets of 2024. From smart home devices to wearable technology, we cover everything you need to know...",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    category: "Technology",
    author: "David Smith",
    readTime: "10 min read",
    date: "2024-03-15"
  },
  {
    id: "4",
    title: "Digital Marketing Strategies",
    content: `
      Master the art of digital marketing with our comprehensive guide to modern strategies and best practices.

      ## Social Media Marketing

      Learn how to leverage different social media platforms effectively for your business, including content strategy and engagement techniques.

      ## SEO Fundamentals

      Understand the basics of search engine optimization and how to improve your website's visibility in search results.

      ## Content Marketing

      Discover how to create valuable content that attracts and retains customers while building brand authority.

      ## Analytics and Measurement

      Learn how to track and measure the success of your digital marketing efforts using various analytics tools.
    `,
    excerpt: "Effective digital marketing strategies for modern businesses. Learn about SEO, social media marketing, content creation, and customer engagement...",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "Marketing",
    author: "Emma Wilson",
    readTime: "8 min read",
    date: "2024-03-12"
  }
];

export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === params.id);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts.filter(p => p.id !== params.id).slice(0, 2);

  return (
    <div className="container py-8">
      {/* Article Header */}
      <div className="mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="aspect-video w-full rounded-lg object-cover"
        />
        <div className="mt-6">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold">{post.title}</h1>
          <div className="mt-4 flex items-center gap-4">
            <div>
              <p className="font-medium">By {post.author}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="prose prose-lg dark:prose-invert mx-auto max-w-4xl">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Related Posts */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Related Articles</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {relatedPosts.map((relatedPost) => (
            <Card key={relatedPost.id}>
              <CardContent className="p-4">
                <img
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  className="aspect-video w-full rounded-lg object-cover"
                />
                <div className="mt-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{relatedPost.category}</span>
                    <span>•</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold">{relatedPost.title}</h3>
                  <p className="mt-2 text-muted-foreground">{relatedPost.excerpt}</p>
                  <Button asChild variant="outline" className="mt-4">
                    <Link href={`/blog/${relatedPost.id}`}>Read More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}