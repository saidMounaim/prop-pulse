import Link from "next/link";
import Image from "next/image";
import SignInForm from "@/components/shared/forms/sign-in-form";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) redirect("/");

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>

          <SignInForm />

          <div className="mt-4 text-center text-sm">
            {"Don't have an account?"}{" "}
            <Link
              href="/signup"
              className="underline font-medium text-primary hover:text-primary/80"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden bg-muted lg:block relative h-full max-h-screen overflow-hidden">
        <Image
          src="/signin-image.avif"
          alt="Luxury Real Estate"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute bottom-10 left-10 right-10 text-white z-10">
          <blockquote className="space-y-2">
            <p className="text-lg font-medium leading-relaxed">
              &ldquo;Proppulse helped me find not just a house, but a home where
              my family could grow. The process was seamless.&rdquo;
            </p>
            <footer className="text-sm opacity-80">
              — Sofia Davis, Homeowner
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
