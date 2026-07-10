// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-bg flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold text-brand-text mb-2">
        Profile or Page Not Found
      </h2>
      <p className="text-brand-text/60 mb-6">
        The barber or link you are looking for does not exist on this campus
        branch.
      </p>
      <Link
        href="/barbers"
        className="px-5 py-2.5 bg-brand-accent text-brand-bg font-bold rounded-lg transition-transform hover:scale-105"
      >
        Return to Roster
      </Link>
    </main>
  );
}
