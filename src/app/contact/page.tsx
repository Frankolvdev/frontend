import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="auth-page">
      <section className="auth-shell auth-shell--single">
        <div className="auth-card">
          <span>EMPRESAS</span>
          <h1>Construyamos tu flujo de Try-On.</h1>
          <p>La sección comercial se conectará al canal definitivo de contacto antes del lanzamiento.</p>
          <Link className="ui-button ui-button--primary ui-button--large" href="/">
            Volver al inicio
          </Link>
        </div>
      </section>
    </main>
  );
}
