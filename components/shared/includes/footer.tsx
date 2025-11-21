import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-background py-6 md:py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-foreground">Proppulse</span>. All
          rights reserved.
        </p>

        <div className="flex items-center gap-4 text-muted-foreground">
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5 hover:text-foreground transition-colors" />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Instagram className="h-5 w-5 hover:text-foreground transition-colors" />
          </Link>
          <Link href="#" aria-label="Facebook">
            <Facebook className="h-5 w-5 hover:text-foreground transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
