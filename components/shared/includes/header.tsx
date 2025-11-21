import { Button } from "@/components/ui/button";
import { HomeIcon, Menu } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">Proppulse</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link
            href="/properties"
            className="hover:text-primary transition-colors"
          >
            Properties
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:flex">
            Sign In
          </Button>
          <Button className="hidden sm:flex">Get Started</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
