"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Sun, Moon, Menu, X, Search } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const NavItems = () => (
    <>
      <Link href="/" className="hover:text-primary">Home</Link>
      <Link href="/shop" className="hover:text-primary">Shop</Link>
      <Link href="/blog" className="hover:text-primary">Blog</Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetTitle>Navigation</SheetTitle>
              <nav className="flex flex-col gap-4">
                <NavItems />
              </nav>
            </SheetContent>
          </Sheet>
          
          <Link href="/" className="text-xl font-bold">
            ShopBlog
          </Link>
          
          <nav className="hidden lg:flex items-center gap-6">
            <NavItems />
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {isSearchOpen ? (
            <div className="relative">
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] sm:w-[300px]"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
          )}
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}