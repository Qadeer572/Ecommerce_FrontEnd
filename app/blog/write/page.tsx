"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from 'next/navigation';

export default function WriteBlogPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    image: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real application, this would be an API call to save the blog post
      console.log('Blog post data:', formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to blog listing page after successful submission
      router.push('/blog');
    } catch (error) {
      console.error('Error submitting blog post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-8">
      <Card>
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold mb-8">Write a New Blog Post</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-2">
                Title
              </label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter blog title"
                required
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium mb-2">
                Category
              </label>
              <Input
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="E.g., Technology, Fashion, Marketing"
                required
              />
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium mb-2">
                Cover Image URL
              </label>
              <Input
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Enter image URL"
                required
              />
            </div>

            <div>
              <label htmlFor="excerpt" className="block text-sm font-medium mb-2">
                Excerpt
              </label>
              <Textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                placeholder="Write a brief summary of your blog post"
                rows={3}
                required
              />
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium mb-2">
                Content
              </label>
              <Textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Write your blog post content here..."
                rows={15}
                required
              />
            </div>

            <div className="flex gap-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Publishing...' : 'Publish Post'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push('/blog')}
                className="w-full"
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}