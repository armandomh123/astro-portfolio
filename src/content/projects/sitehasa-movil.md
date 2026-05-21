---
title: "SITEHASA - Aplicación Móvil de Pipas"
description: "Aplicación móvil para operadores de pipas de agua que permite controlar, abrir y cerrar válvulas de distribución de forma remota, calculando volumen y tarifas."
tags: ["React Native", "Expo", "TypeScript"]
gradient: "linear-gradient(135deg, #0f1f3d 0%, #1e293b 100%)"
image: "/projects/sitehasa-movil/preview.webp"
gallery:
  - "/projects/sitehasa-movil/preview.webp"
features:
  - "Autenticación segura para choferes y operadores autorizados"
  - "Selección inteligente de válvulas de carga operativas"
  - "Activación y control remoto de válvulas de distribución de agua"
  - "Cálculo en tiempo real de volumen despachado (m³) y tarifas (MXN)"
  - "Historial integrado de despachos del operador"
  - "Animaciones nativas fluidas con React Native Reanimated"
---

La **Aplicación Móvil de SITEHASA** es la herramienta clave para los operadores de pipas en campo. Permite agilizar la carga y distribución de agua potable conectando los dispositivos móviles de los conductores directamente con el sistema de válvulas físicas de las estaciones de SITEHASA.

### Desarrollo y Experiencia de Usuario

La aplicación está desarrollada con **React Native** usando **Expo** y escrita completamente en **TypeScript**. El enrutamiento se gestiona a través de **Expo Router**, proporcionando una experiencia fluida basada en pestañas. La aplicación cuenta con micro-interacciones y animaciones de entrada fluidas utilizando **React Native Reanimated**, lo que garantiza una interfaz premium y agradable de usar bajo cualquier condición en campo.

### Flujo de Operación

1. **Inicio de Sesión**: Los operadores ingresan con sus credenciales autorizadas desde el panel web.
2. **Selección de Válvula**: La app muestra un listado dinámico de las válvulas disponibles junto con su estado actual (Operativa o Inactiva) y la tarifa por m³ configurada.
3. **Carga y Despacho**: El operador indica el volumen de agua requerido en metros cúbicos (m³). La app realiza la validación de cobro mínimo y envía la solicitud para abrir la válvula seleccionada.
4. **Historial de Despachos**: Pantalla dedicada a mostrar un desglose histórico de todas las cargas realizadas por el operador logueado.
