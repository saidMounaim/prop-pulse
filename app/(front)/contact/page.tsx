import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import ContactForm from "@/components/shared/forms/contact-form";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-lg">
            Have a question about a property or want to list your home? Our team
            is ready to help you 24/7.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Headquarters</h3>
                  <p className="text-muted-foreground mt-1">
                    123 Innovation Blvd,
                    <br />
                    Tech District, CA 90210
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-muted-foreground mt-1">
                    +1 (555) 000-0000
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Mon-Fri from 8am to 6pm
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground mt-1">
                    hello@proppulse.com
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    support@proppulse.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
