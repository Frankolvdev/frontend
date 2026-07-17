import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="auth-page">
      <section className="auth-shell">
        <div className="auth-copy">
          <span>TRYON PLATFORM</span>
          <h1>Vuelve a tu estudio.</h1>
          <p>Accede a tus generaciones, tokens, historial y configuración.</p>
        </div>

        <form className="auth-card">
          <div>
            <span>Bienvenido</span>
            <h2>Iniciar sesión</h2>
          </div>
          <label>
            Correo electrónico
            <input type="email" name="email" placeholder="nombre@empresa.com" autoComplete="email" required />
          </label>
          <label>
            Contraseña
            <input type="password" name="password" placeholder="••••••••" autoComplete="current-password" required />
          </label>
          <div className="auth-card__row">
            <label className="auth-check"><input type="checkbox" /> Recordarme</label>
            <Link href="/forgot-password">Olvidé mi contraseña</Link>
          </div>
          <button className="ui-button ui-button--primary ui-button--large" type="submit">
            Entrar
          </button>
          <p className="auth-card__footer">
            ¿Aún no tienes cuenta? <Link href="/register">Crear cuenta</Link>
          </p>
        </form>
      </section>
    </main>
  );
}
