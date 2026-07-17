import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function PricingPreview() {
  return (
    <section className="marketing-section" id="pricing">
      <Container>
        <div className="section-heading section-heading--center">
          <span>Modelo flexible</span>
          <h2>Paga por lo que realmente generas.</h2>
          <p>
            La plataforma utilizará tokens para que cada usuario controle su
            consumo sin compromisos innecesarios.
          </p>
        </div>

        <div className="pricing-grid">
          <article className="pricing-card">
            <span className="pricing-card__eyebrow">Inicio</span>
            <h3>Explora la plataforma</h3>
            <p>Para usuarios que quieren probar el flujo de Virtual Try-On.</p>
            <ul>
              <li>Cuenta personal</li>
              <li>Historial de trabajos</li>
              <li>Compra de tokens</li>
            </ul>
            <Button href="/register" variant="secondary">Crear cuenta</Button>
          </article>

          <article className="pricing-card pricing-card--featured">
            <span className="pricing-card__badge">RECOMENDADO</span>
            <span className="pricing-card__eyebrow">Profesional</span>
            <h3>Genera a mayor escala</h3>
            <p>Para creadores, tiendas y equipos con volumen constante.</p>
            <ul>
              <li>Mayor capacidad de generación</li>
              <li>Prioridad de procesamiento</li>
              <li>Herramientas profesionales</li>
            </ul>
            <Button href="/register">Comenzar ahora</Button>
          </article>

          <article className="pricing-card">
            <span className="pricing-card__eyebrow">Empresas</span>
            <h3>Integra tu operación</h3>
            <p>Para negocios que necesitan flujos personalizados y API.</p>
            <ul>
              <li>Integración técnica</li>
              <li>Volumen personalizado</li>
              <li>Soporte especializado</li>
            </ul>
            <Button href="/contact" variant="secondary">Hablar con ventas</Button>
          </article>
        </div>
      </Container>
    </section>
  );
}
