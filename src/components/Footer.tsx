// src/components/Footer.tsx
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import useStaticJSONFetch from "@/hooks/useStaticJSONFetch"; // Ensure correct path

interface FooterData {
  leyend: string;
  members: { name: string; role: string; socials: { linkedin?: string; twitter?: string } }[];
  Enterprise: { name: string; address: string; contact: { email?: string } };
  help: { numbers: { name: string; number: string }[] };
  partners: { name: string; logo: string; website: string }[];
}

export default function Footer() {
  const { data, loading, error } = useStaticJSONFetch<FooterData>("/footer.json");

  if (loading) return <footer className="w-full mt-10 py-4 text-center">Cargando pie de página...</footer>; // Spanish text
  if (error) return <footer className="w-full mt-10 py-4 text-center text-red-600">Error al cargar el pie de página.</footer>; // Spanish text
  if (!data) return null; // No data to display

  return (
    <footer className="w-full mt-10 border-t border-border bg-card text-card-foreground">
      <div className="w-full bg-[var(--my-mind-p1-green-color)] text-center py-2 text-sm font-semibold">
        {data.leyend}
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-muted">
          <CardContent className="py-4">
            <h3 className="font-bold text-base mb-2">Partners</h3>
            <div className="flex flex-wrap gap-4 justify-start">
              {data.partners.map((p) => (
                <a
                  key={p.website}
                  href={p.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                  aria-label={`Visitar sitio de ${p.name}`}
                >
                  <img src={p.logo} alt={p.name} className="h-10 w-auto object-contain" />
                  <span className="text-sm font-medium">{p.name}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted">
          <CardContent className="py-4">
            <h3 className="font-bold text-base mb-2">Números de ayuda</h3>
            <ul className="text-sm space-y-1">
              {data.help.numbers.map((n) => (
                <li key={n.name}>
                  <span className="font-semibold">{n.name}:</span> {n.number}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-4" />

      <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-muted">
          <CardContent className="py-4">
            <h3 className="font-bold text-base mb-2">Acerca del proyecto</h3>
            <p className="text-sm">
              {data.Enterprise.name} - {data.Enterprise.address}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-muted">
          <CardContent className="py-4">
            <h3 className="font-bold text-base mb-2">Integrantes</h3>
            <ul className="text-sm space-y-1">
              {data.members.map((m) => (
                <li key={m.name}>
                  <span className="font-semibold">{m.name}</span>{" "}
                  <span className="text-xs">({m.role})</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="w-full text-center py-3 text-xs bg-[var(--my-mind-p2-melon-color)] border-t border-border">
        &copy; {new Date().getFullYear()} {data.Enterprise.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
