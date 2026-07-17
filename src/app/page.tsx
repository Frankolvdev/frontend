import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <main className="shell">
      <section className="hero-placeholder" aria-labelledby="page-title">
        <span className="eyebrow">Frontend público</span>
        <h1 id="page-title">{siteConfig.name}</h1>
        <p>
          La base visual está lista. La navegación, el hero y las secciones
          comerciales se incorporarán en los siguientes módulos.
        </p>
      </section>
    </main>
  );
}
