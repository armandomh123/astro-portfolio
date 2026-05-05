// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const NAME = "Jesús Manjarrez";
export const SITE_TITLE = "Jesús Manjarrez";
export const SITE_DESCRIPTION =
	"Desarrollador web apasionado por crear experiencias digitales modernas y funcionales.";

export const SOCIAL_LINKS = {
	github: "https://github.com/",
	linkedin: "https://linkedin.com/in/",
	twitter: "https://x.com/",
	email: "mailto:contacto@example.com",
};

export const NAV_ITEMS = [
	{ label: "Inicio", href: "/#hero" },
	{ label: "Sobre mí", href: "/#about" },
	{ label: "Proyectos", href: "/#projects" },
	{ label: "Contacto", href: "/#contact" },
	{ label: "Blog", href: "/blog" },
];

export const PROJECTS = [
	{
		title: "E-Commerce Platform",
		description:
			"Plataforma de comercio electrónico moderna con carrito de compras, pasarela de pagos y panel de administración.",
		tags: ["Astro", "TypeScript", "Stripe"],
		link: "#",
		gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
	},
	{
		title: "Task Manager App",
		description:
			"Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real y notificaciones.",
		tags: ["React", "Node.js", "Socket.io"],
		link: "#",
		gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
	},
	{
		title: "Analytics Dashboard",
		description:
			"Dashboard interactivo de analíticas con gráficos dinámicos, filtros avanzados y exportación de reportes.",
		tags: ["Vue.js", "D3.js", "Python"],
		link: "#",
		gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
	},
	{
		title: "Social Media API",
		description:
			"API RESTful para red social con autenticación JWT, upload de medios y sistema de followers.",
		tags: ["Express", "MongoDB", "Redis"],
		link: "#",
		gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
	},
];

export const SKILLS = [
	"JavaScript",
	"TypeScript",
	"React",
	"Astro",
	"Node.js",
	"Python",
	"CSS",
	"Git",
];