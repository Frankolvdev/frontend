import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <main className="auth-page">
      <section className="auth-shell auth-shell--single">
        <form className="auth-card">
          <div>
            <span>Recuperación</span>
            <h1>Restablece tu acceso</h1>
            <p>Ingresa tu correo para continuar con el proceso de recuperación.</p>
          </div>
          <label>
            Correo electrónico
            <input type="email" name="email" placeholder="nombre@empresa.com" autoComplete="email" required />
          </label>
          <button className="ui-button ui-button--primary ui-button--large" type="submit">
            Continuar
          </button>
          <p className="auth-card__footer">
            <Link href="/login">Volver a iniciar sesión</Link>
          </p>
        </form>
      </section>
    </main>
  );
}
