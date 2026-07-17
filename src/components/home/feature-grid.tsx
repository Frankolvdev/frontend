import { Container } from "@/components/ui/container";
import {
  SparklesIcon,
  UploadIcon,
  WandIcon,
} from "@/components/icons/product-icons";

const features = [
  {
    icon: SparklesIcon,
    eyebrow: "Precisión visual",
    title: "Resultados diseñados para vender",
    text: "Preserva pose, identidad, iluminación y proporciones para producir imágenes listas para catálogo.",
  },
  {
    icon: WandIcon,
    eyebrow: "Control creativo",
    title: "Más que un cambio de ropa",
    text: "Ajusta tipo de prenda, caída, volumen, calzado y nivel de calidad desde una sola experiencia.",
  },
  {
    icon: UploadIcon,
    eyebrow: "Flujo profesional",
    title: "De la carga al resultado",
    text: "Sube recursos, procesa trabajos, revisa historial y descarga resultados sin salir de la plataforma.",
  },
];

export function FeatureGrid() {
  return (
    <section className="marketing-section" id="features">
      <Container>
        <div className="section-heading">
          <span>Plataforma completa</span>
          <h2>Un estudio de moda impulsado por IA.</h2>
          <p>
            No es una demo aislada: es una experiencia preparada para creadores,
            marcas, agencias y equipos de comercio electrónico.
          </p>
        </div>

        <div className="feature-grid">
          {features.map(({ icon: Icon, eyebrow, title, text }) => (
            <article className="feature-card" key={title}>
              <div className="feature-card__icon">
                <Icon />
              </div>
              <span>{eyebrow}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
