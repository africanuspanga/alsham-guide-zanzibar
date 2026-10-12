import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const fr = useLocale() === "fr";

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-24 text-center">
      <div className="max-w-md">
        <p className="text-brand-gold font-black text-6xl mb-4">404</p>
        <h1 className="text-3xl font-black text-brand-blue-dark mb-4">
          {fr ? "Page introuvable" : "Page not found"}
        </h1>
        <p className="text-gray-600 mb-8">
          {fr
            ? "Cette page n'existe pas ou a été déplacée. Découvrez nos excursions et safaris à Zanzibar."
            : "This page doesn't exist or has moved. Explore our Zanzibar excursions and safaris."}
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="bg-brand-gold text-white font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
            {fr ? "Retour à l'accueil" : "Back to home"}
          </Link>
          <Link href="/excursion" className="border-2 border-brand-blue-dark text-brand-blue-dark font-bold px-6 py-3 rounded-full hover:bg-brand-blue-dark hover:text-white transition-colors">
            {fr ? "Voir les excursions" : "See excursions"}
          </Link>
        </div>
      </div>
    </section>
  );
}
