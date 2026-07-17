export const siteConfig = {
  name: "AI Virtual Try-On",
  shortName: "Try-On",
  description:
    "Plataforma profesional de prueba virtual de ropa impulsada por inteligencia artificial.",
  locale: "es-MX",
  navigation: [
    { label: "Producto", href: "/#product" },
    { label: "Cómo funciona", href: "/#how-it-works" },
    { label: "Precios", href: "/#pricing" },
    { label: "API", href: "/#api" },
  ],
  actions: {
    signIn: "/login",
    getStarted: "/register",
  },
  legal: [
    { label: "Privacidad", href: "/privacy" },
    { label: "Términos", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ],
} as const;
