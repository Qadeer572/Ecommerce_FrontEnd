export default function AboutPage() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold">About ShopBlog</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Your one-stop destination for shopping and staying informed about the latest trends.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="mt-4 text-muted-foreground">
            Founded in 2024, ShopBlog was born from a simple idea: to create a space where shopping
            and learning go hand in hand. We believe that informed consumers make better choices,
            which is why we combine our carefully curated product selection with in-depth articles
            and guides.
          </p>
        </section>

        {/* Our Mission */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="mt-4 text-muted-foreground">
            We're on a mission to revolutionize the way people shop online by providing not just
            products, but the knowledge and context needed to make informed purchasing decisions.
            Through our blog, we share insights, trends, and expert opinions that help our
            customers understand the products they're interested in.
          </p>
        </section>

        {/* What Sets Us Apart */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold">What Sets Us Apart</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold">Curated Selection</h3>
              <p className="mt-2 text-muted-foreground">
                Every product in our store is carefully selected for quality, value, and
                sustainability.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold">Expert Content</h3>
              <p className="mt-2 text-muted-foreground">
                Our blog features articles written by industry experts and passionate enthusiasts.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold">Community Focus</h3>
              <p className="mt-2 text-muted-foreground">
                We build and nurture a community of like-minded individuals who share our passion.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold">Sustainable Practices</h3>
              <p className="mt-2 text-muted-foreground">
                We're committed to reducing our environmental impact through eco-friendly
                practices.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold">Our Team</h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
              },
              {
                name: "Michael Chen",
                role: "Head of Content",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
              },
              {
                name: "Emma Wilson",
                role: "Product Curator",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
              }
            ].map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto h-32 w-32 rounded-full object-cover"
                />
                <h3 className="mt-4 font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="mt-4 text-muted-foreground">
            Have questions or feedback? We'd love to hear from you. Reach out to us at{" "}
            <a href="mailto:contact@shopblog.com" className="text-primary hover:underline">
              contact@shopblog.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}