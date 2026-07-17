import { ArrowRightIcon, SparklesIcon, UploadIcon, WandIcon } from "@/components/icons/product-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const steps = [
  {
    icon: UploadIcon,
    title: "Sube una fotografía",
    description: "Carga una imagen de la persona y selecciona la prenda.",
  },
  {
    icon: WandIcon,
    title: "Procesa con IA",
    description: "Nuestro motor adapta forma, pose, iluminación y caída.",
  },
  {
    icon: SparklesIcon,
    title: "Obtén el resultado",
    description: "Descarga una visualización lista para revisar o compartir.",
  },
];

export function Hero() {
  return (
    <section className="premium-hero">
      <div className="premium-hero__ambient" aria-hidden="true" />
      <Container className="premium-hero__grid">
        <div className="premium-hero__copy">
          <Badge>
            <SparklesIcon />
            Virtual Try-On de nueva generación
          </Badge>

          <h1>
            Convierte una foto en una
            <span> experiencia de moda.</span>
          </h1>

          <p>
            Prueba ropa y calzado sobre cualquier persona con resultados
            profesionales, control de ajuste y procesamiento seguro.
          </p>

          <div className="premium-hero__actions">
            <Button href="/register" size="large">
              Comenzar gratis
              <ArrowRightIcon />
            </Button>
            <Button href="#how-it-works" variant="secondary" size="large">
              Ver cómo funciona
            </Button>
          </div>

          <div className="premium-hero__trust">
            <span>Sin tarjeta para comenzar</span>
            <span>Procesamiento privado</span>
            <span>API para equipos</span>
          </div>
        </div>

        <div className="product-visual" aria-label="Vista previa del producto">
          <div className="product-visual__window">
            <div className="product-visual__toolbar">
              <span />
              <span />
              <span />
              <strong>Try-On Studio</strong>
            </div>

            <div className="product-visual__canvas">
              <div className="product-visual__subject">
                <div className="product-visual__head" />
                <div className="product-visual__body" />
                <div className="product-visual__garment" />
              </div>

              <div className="product-visual__panel">
                <span className="product-visual__label">Prenda seleccionada</span>
                <div className="product-visual__swatch" />
                <strong>Vestido editorial</strong>
                <small>Ajuste natural · Alta calidad</small>
                <div className="product-visual__progress">
                  <span />
                </div>
                <span className="product-visual__status">
                  <i />
                  Resultado listo
                </span>
              </div>
            </div>
          </div>

          <div className="product-visual__floating product-visual__floating--top">
            <SparklesIcon />
            Calidad profesional
          </div>

          <div className="product-visual__floating product-visual__floating--bottom">
            <strong>12.4 s</strong>
            <span>Tiempo de generación</span>
          </div>
        </div>
      </Container>

      <Container className="workflow-strip" id="how-it-works">
        {steps.map(({ icon: Icon, title, description }, index) => (
          <article className="workflow-step" key={title}>
            <div className="workflow-step__number">0{index + 1}</div>
            <Icon />
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </Container>
    </section>
  );
}
