// app/layout.tsx
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Royal Touch | Campus Luxury Home-Service Barbers",
  description:
    "Premium on-demand grooming delivered straight to your hostel door.",
  icons: {
    icon: "/icon.svg", // If using a PNG, simply change this string path to "/icon.png"
  },
};

// app/layout.tsx
// ... rest of your imports stay the same ...

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* The ?v=2 forces your browser to drop the cached white icon immediately */}
        <link rel="icon" href="/icon.svg?v=2" type="image/svg+xml" sizes="any" />
      </head>
      <body className="antialiased selection:bg-brand-accent selection:text-brand-bg">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
