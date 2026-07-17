import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="auth-page">
      <section className="auth-shell">
        <div className="auth-copy">
          <span>CREA. PRUEBA. PUBLICA.</span>
          <h1>Tu estudio virtual empieza hoy.</h1>
          <p>Crea una cuenta para comenzar a construir tus primeras generaciones.</p>
        </div>

        <form className="auth-card">
          <div>
            <span>Nueva cuenta</span>
            <h2>Registrarse</h2>
          </div>
          <label>
            Nombre
            <input type="text" name="name" placeholder="Tu nombre" autoComplete="name" required />
          </label>
          <label>
            Correo electrónico
            <input type="email" name="email" placeholder="nombre@empresa.com" autoComplete="email" required />
          </label>
          <label>
            Contraseña
            <input type="password" name="password" placeholder="Mínimo 8 caracteres" autoComplete="new-password" required />
          </label>
          <label className="auth-check">
            <input type="checkbox" required />
            Acepto los términos y la política de privacidad.
          </label>
          <button className="ui-button ui-button--primary ui-button--large" type="submit">
            Crear cuenta
          </button>
          <p className="auth-card__footer">
            ¿Ya tienes cuenta? <Link href="/login">Iniciar sesión</Link>
          </p>
        </form>
      </section>
    </main>
  );
}
