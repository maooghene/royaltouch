// app/layout.tsx
import "@/app/globals.css";

export const metadata = {
  title: "Royal Touch | Campus Luxury Home-Service Barbers",
  description:
    "Premium on-demand grooming delivered directly to your hostel room.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-brand-accent selection:text-brand-bg">
        {/* You can instantly drop your global <Navbar /> here later */}
        {children}
        {/* You can instantly drop your global <Footer /> here later */}
      </body>
    </html>
  );
}
