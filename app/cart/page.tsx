import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, X } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  // This would normally fetch from your API
  const cartItems = [
    {
      id: 1,
      title: "Premium Leather Bag",
      price: 199.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80"
    },
    {
      id: 2,
      title: "Wireless Headphones",
      price: 149.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 9.99;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="flex items-center gap-4 p-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-24 w-24 rounded-lg object-cover"
                    />
                    <div className="flex flex-1 items-center gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-lg font-bold text-primary">
                          ${item.price}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon">
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button variant="outline" size="icon">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button variant="ghost" size="icon">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">Your cart is empty</p>
                <Button asChild className="mt-4">
                  <Link href="/shop">Continue Shopping</Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold">Order Summary</h2>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <Button className="mt-6 w-full">Proceed to Checkout</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}