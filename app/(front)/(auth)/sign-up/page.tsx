import Link from "next/link";
import Image from "next/image";
import SignUpForm from "@/components/shared/forms/sign-up-form";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) redirect("/");

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-balance text-muted-foreground">
              Enter your information to start your property journey
            </p>
          </div>

          <SignUpForm />

          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="underline font-medium text-primary hover:text-primary/80"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>

      {/* --- RIGHT: IMAGE SECTION --- */}
      <div className="hidden bg-muted lg:block relative h-full max-h-screen overflow-hidden">
        <Image
          src="/signup-image.avif"
          alt="Modern Architecture"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute bottom-10 left-10 right-10 text-white z-10">
          <h2 className="text-2xl font-bold mb-2">
            Join 10,000+ Agents & Buyers
          </h2>
          <p className="text-white/80">
            Access exclusive off-market listings and AI-powered valuation tools
            today.
          </p>
        </div>
      </div>
    </div>
  );
}
