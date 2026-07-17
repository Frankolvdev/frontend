
import Link from "next/link";

export function Hero(){
 return (
<section className="hero">
<img className="hero-bg" src="/assets/hero-grid.svg" alt="" />
<div className="site-container hero-inner">
<div className="hero-copy">
<span className="eyebrow">AI VIRTUAL TRY-ON</span>
<h1>Transforma cualquier fotografía en segundos.</h1>
<p>Prueba ropa y calzado con IA de calidad profesional.</p>
<div className="hero-actions">
<Link className="button button--primary" href="/register">Comenzar gratis</Link>
<Link className="button button--secondary" href="#demo">Ver demostración</Link>
</div>
</div>
<div className="hero-card">
<img src="/assets/logo-mark.svg" width="96" height="96" alt="Logo"/>
<h3>Próximamente</h3>
<p>Comparador antes/después, API, historial y panel profesional.</p>
</div>
</div>
</section>);
}
