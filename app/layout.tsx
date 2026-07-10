// app/layout.tsx
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Royal Touch | Campus Luxury Home-Service Barbers",
  description:
    "Premium on-demand grooming delivered straight to your hostel door.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-brand-accent selection:text-brand-bg">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
