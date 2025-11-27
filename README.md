# 🚀 Portafolio Personal - Full Stack Developer (Backend Focus)

Este proyecto es un portafolio personal de alto impacto diseñado para destacar habilidades en desarrollo Backend, arquitectura de software y el uso de Inteligencia Artificial. Construido con un diseño "Cyber-Clean" y animaciones fluidas para transmitir profesionalismo y dominio técnico.

## ✨ Características Principales

*   **Diseño Cyber-Clean**: Estética moderna con modo oscuro profundo (`#050505`) y acentos neón (Cyan, Verde, Violeta).
*   **Animaciones Fluidas**: Transiciones suaves y efectos de entrada al hacer scroll utilizando **Framer Motion**.
*   **Galería Interactiva**: Tarjetas de proyectos que se expanden suavemente (layout animations) para mostrar detalles profundos sin recargar la página.
*   **UI Reactiva**: Componentes modulares y totalmente responsivos para móviles y escritorio.
*   **Tipografía Monospace**: Uso de fuentes tipo código ('JetBrains Mono') en todo el sitio para reforzar la identidad de desarrollador.
*   **Formulario Terminal**: Sección de contacto estilizada como una consola de comandos.

## 🛠️ Stack Tecnológico

Este proyecto utiliza las últimas tecnologías del ecosistema React:

*   **Framework**: [React](https://react.dev/) (v18) inicializado con [Vite](https://vitejs.dev/) para máxima velocidad.
*   **Estilos**: [Tailwind CSS](https://tailwindcss.com/) para un sistema de diseño utilitario y consistente.
*   **Animaciones**: [Framer Motion](https://www.framer.com/motion/) para gestos complejos y animaciones de layout.
*   **Iconos**: [Lucide React](https://lucide.dev/) para iconografía ligera y moderna.
*   **Fuentes**: Google Fonts (JetBrains Mono).

## 📦 Instalación y Uso

Sigue estos pasos para ejecutar el proyecto localmente:

1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/jonass-git/Portfolio.git
    cd Portfolio
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Iniciar servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    El sitio estará disponible en `http://localhost:5173`.

4.  **Construir para producción**:
    ```bash
    npm run build
    ```

## 📂 Estructura del Proyecto

El código está organizado para ser escalable y fácil de mantener:

```text
src/
├── components/
│   ├── Header.jsx       # Navegación sticky con efecto glassmorphism
│   ├── Hero.jsx         # Sección principal con animación de entrada
│   ├── About.jsx        # Propuesta de valor y soft skills
│   ├── Stack.jsx        # Grid de tecnologías con efectos neón
│   ├── Projects.jsx     # Galería compleja con expansión de tarjetas
│   ├── Testimonials.jsx # Prueba social
│   ├── Blog.jsx         # Lista de artículos recientes
│   ├── Contact.jsx      # Formulario estilo terminal
│   └── Footer.jsx       # Enlaces y descarga de CV
├── index.css            # Estilos globales y configuración de Tailwind
├── main.jsx             # Punto de entrada
└── App.jsx              # Layout principal y orquestación
```

## 🎨 Guía de Personalización

### Colores Neón
Los colores principales están definidos en `tailwind.config.js`. Puedes cambiar el tema modificando estos valores:

```javascript
colors: {
  neon: {
    cyan: '#00f3ff',   // Color primario
    green: '#00ff94',  // Acentos de éxito/solución
    violet: '#b026ff', // Acentos secundarios
  },
  dark: {
    bg: '#050505',     // Fondo principal
    card: '#0a0a0a',   // Fondo de tarjetas
  }
}
```

### Datos y Contenido
El contenido no está hardcodeado en el HTML, sino en arrays de objetos dentro de cada componente.
*   Para cambiar los **Proyectos**, edita el array `projects` en `src/components/Projects.jsx`.
*   Para cambiar el **Stack**, edita el array `technologies` en `src/components/Stack.jsx`.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.
