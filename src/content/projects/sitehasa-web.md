---
title: "SITEHASA - Administración Web"
description: "Panel de administración y monitoreo en tiempo real para la red de distribución de agua potable de SITEHASA, gestionando válvulas, operadores y consumos."
tags: ["Laravel", "Filament PHP", "Tailwind CSS", "MySQL", "Livewire"]
gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)"
image: "/projects/sitehasa-web/preview.webp"
gallery:
  - "/projects/sitehasa-web/preview.webp"
features:
  - "Monitoreo en tiempo real de despachos de agua mediante WebSockets (Laravel Reverb)"
  - "Panel de administración modular construido con Filament PHP v5 y Livewire v4"
  - "Gestión completa de usuarios, operadores de pipas y roles del sistema"
  - "Control, registro y configuración de estado de válvulas y estaciones de distribución"
  - "Configuración dinámica de tarifas por metro cúbico (m³)"
  - "Exportación de reportes detallados de consumo y auditoría"
---

El **Panel de Administración Web de SITEHASA** es el centro de control para la gestión de la red de distribución de agua potable. Diseñado para ofrecer una administración ágil, segura y reactiva, el panel unifica todos los componentes del sistema SITEHASA.

### Arquitectura y Desarrollo

El sistema está construido sobre el framework **Laravel 12** y utiliza **Filament PHP v5**, lo que permite una creación de interfaces de administración robustas a gran velocidad sin sacrificar la personalización. La reactividad en tiempo real se logra integrando **Livewire v4** y **Laravel Reverb**, asegurando que los administradores visualicen los despachos de agua y los consumos en el mismo instante en que ocurren.

### Funcionalidades Clave

1. **Gestión de Recursos**: Control total del catálogo de Válvulas, Estaciones y Pipas, permitiendo activar o desactivar tomas de agua de manera remota e inmediata.
2. **Control Tarifario**: Módulo dinámico para actualizar los precios por metro cúbico (m³), asegurando consistencia con los cobros mínimos aplicados en la aplicación móvil.
3. **Monitoreo y Auditoría**: Registro centralizado ("Despachos") que detalla la cantidad de agua surtida, la válvula utilizada, el operador responsable y el costo total de la transacción.
