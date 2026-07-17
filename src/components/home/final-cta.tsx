import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="final-cta">
      <Container>
        <div className="final-cta__panel">
          <div>
            <span>Tu próximo look comienza aquí</span>
            <h2>Convierte ideas en imágenes que parecen producciones reales.</h2>
          </div>
          <div className="final-cta__actions">
            <Button href="/register" size="large">Crear cuenta gratis</Button>
            <Button href="/login" variant="secondary" size="large">Iniciar sesión</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
