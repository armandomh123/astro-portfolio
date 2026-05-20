// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const NAME = "Jesús Manjarrez";
export const SITE_TITLE = "Jesús Manjarrez";
export const SITE_DESCRIPTION =
	"Ingeniero en desarrollo y gestión de software con enfoque en el desarrollo web fullstack.";

export const SOCIAL_LINKS = {
	github: "https://github.com/armandomh123",
	linkedin: "https://www.linkedin.com/in/jesusmanjarrez/",
	email: "mailto:amanjarrezh19@gmail.com",
};

export const NAV_ITEMS = [
	{ label: "Inicio", href: "/#hero" },
	{ label: "Sobre mí", href: "/#about" },
	{ label: "Proyectos", href: "/#projects" },
	{ label: "Contacto", href: "/#contact" },
];

export const PROJECTS = [
	{
		slug: "e-commerce-platform",
		title: "E-Commerce Platform",
		description:
			"Plataforma de comercio electrónico moderna con carrito de compras, pasarela de pagos y panel de administración.",
		tags: ["Astro", "TypeScript", "Stripe"],
		gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
		longDescription: "Una plataforma completa de comercio electrónico diseñada para alto rendimiento y conversión. Cuenta con pasarela de pagos integrada mediante Stripe, carrito de compras reactivo y un panel de administración completo para gestionar productos, pedidos y stock en tiempo real.",
		features: ["Carrito de compras en tiempo real", "Integración con Stripe API para pagos seguros", "Panel de control administrativo", "Diseño responsivo móvil y desktop", "Optimización SEO y Lighthouse 100/100"],
	},
	{
		slug: "task-manager-app",
		title: "Task Manager App",
		description:
			"Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real y notificaciones.",
		tags: ["React", "Node.js", "Socket.io"],
		gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
		longDescription: "Una herramienta colaborativa para la gestión de proyectos y tareas individuales. Permite crear tableros Kanban interactivos utilizando tecnología de arrastrar y soltar, salas de chat integradas, asignación de tareas compartidas y actualizaciones de estado en tiempo real gracias a WebSocket.",
		features: ["Tablero Kanban con soporte drag & drop", "Colaboración y edición en tiempo real", "Sistema de chat y comentarios internos", "Notificaciones push integradas", "Gestión avanzada de permisos y roles"],
	},
	{
		slug: "analytics-dashboard",
		title: "Analytics Dashboard",
		description:
			"Dashboard interactivo de analíticas con gráficos dinámicos, filtros avanzados y exportación de reportes.",
		tags: ["Vue.js", "D3.js", "Python"],
		gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
		longDescription: "Un panel de analíticas avanzado capaz de procesar e interpretar grandes volúmenes de datos comerciales. Utiliza visualizaciones interactivas de alta fidelidad, generación automatizada de reportes en PDF/CSV, y algoritmos sencillos de predicción para análisis de tendencias de negocio.",
		features: ["Gráficos interactivos dinámicos", "Filtros multidimensionales avanzados", "Exportación de reportes programada", "Procesamiento de datos en tiempo real", "Predicción estadística de tendencias"],
	},
	{
		slug: "social-media-api",
		title: "Social Media API",
		description:
			"API RESTful para red social con autenticación JWT, upload de medios y sistema de followers.",
		tags: ["Express", "MongoDB", "Redis"],
		gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
		longDescription: "El motor backend escalable para una red social moderna. Soporta autenticación segura con JWT, encriptación hash de contraseñas, almacenamiento eficiente de imágenes, y caching en memoria caché distribuida con Redis para listados rápidos de feeds de usuarios.",
		features: ["Autenticación JWT y sistema de roles", "Base de datos NoSQL optimizada", "Caché de consultas rápidas con Redis", "Upload seguro de archivos multimedia", "Relaciones dinámicas (followers/follows)"],
	},
	{
		slug: "astro-portfolio",
		title: "Astro Portfolio",
		description:
			"Este mismo sitio web. Un portafolio digital minimalista, ultra-rápido y con animaciones de última generación.",
		tags: ["Astro", "TypeScript", "CSS3"],
		gradient: "linear-gradient(135deg, #02aab0 0%, #00cdac 100%)",
		image: "/projects/astro-portfolio/preview.webp",
		gallery: [
			"/projects/astro-portfolio/preview.webp",
			"/projects/astro-portfolio/about-me.webp",
			"/projects/astro-portfolio/projects.webp",
			"/projects/astro-portfolio/contact.webp",
		],
		longDescription: "Mi portafolio personal construido con enfoque en la experiencia de usuario y rendimiento web impecable. Utiliza compilación estática (SSG) nativa de Astro, logrando tiempos de carga instantáneos, e incorpora transiciones de páginas (View Transitions) e iconos vectorizados inlined para eliminar cualquier sobrecarga de JavaScript al cliente.",
		features: ["Cero JavaScript innecesario en cliente", "Animaciones premium y transiciones nativas (ClientRouter)", "Tema oscuro y claro dinámico con efecto de revelado circular", "Iconos vectoriales en línea ultra-optimizados", "Estructura semántica preparada para SEO"],
	}
];

export const SKILLS = [
	"JavaScript",
	"TypeScript",
	"Astro",
	"Node.js",
	"Python",
	"PHP",
	"Laravel",
	"CSS",
	"Git",
	"Github",
	"Linux",
	"Tailwind",
	"MySQL",
	"PostgreSQL",
];