import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-sm text-muted-foreground">
                      123 Shopping Street
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a
                      href="mailto:contact@shopblog.com"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      contact@shopblog.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="rounded-lg border p-6">
              <h3 className="font-semibold">Business Hours</h3>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold">Send us a Message</h2>
              <form className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" className="mt-1" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" className="mt-1" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" className="mt-1" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" className="mt-1" rows={5} />
                </div>

                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <div className="mt-12">
          <Card>
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564756836!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}