import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Discover our curated collection of products and insightful articles. Your one-stop destination for shopping and reading.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/shop" className="hover:text-primary">Shop</Link></li>
              <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/faq" className="hover:text-primary">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-primary">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:text-primary">Returns</Link></li>
              <li><Link href="/track-order" className="hover:text-primary">Track Order</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold">Newsletter</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Subscribe to get special offers, free giveaways, and updates.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ShopBlog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}