import Header from "@/components/shared/includes/header";
import Footer from "@/components/shared/includes/footer";

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  );
}
