import { Container } from "@/components/ui/container";

const cases = [
  ["01", "E-commerce", "Genera visuales para fichas de producto, campañas y pruebas de colección."],
  ["02", "Creadores", "Explora nuevos vestuarios sin repetir sesiones fotográficas completas."],
  ["03", "Agencias", "Entrega propuestas visuales rápidas con una experiencia centralizada."],
  ["04", "Equipos API", "Integra generación y seguimiento en flujos internos cuando la API esté habilitada."],
];

export function UseCases() {
  return (
    <section className="marketing-section marketing-section--dense" id="use-cases">
      <Container className="use-cases">
        <div className="use-cases__visual">
          <div className="use-cases__halo" />
          <div className="use-cases__device">
            <div className="use-cases__device-top">
              <span />
              <strong>Campaign Studio</strong>
            </div>
            <div className="use-cases__canvas">
              <div className="use-cases__model" />
              <div className="use-cases__dress" />
              <div className="use-cases__tag">READY</div>
            </div>
          </div>
        </div>

        <div className="use-cases__content">
          <span className="section-kicker">Casos de uso</span>
          <h2>Una sola plataforma para múltiples flujos.</h2>
          <div className="use-case-list">
            {cases.map(([number, title, text]) => (
              <article key={title}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
