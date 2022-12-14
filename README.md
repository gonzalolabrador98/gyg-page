# PRIMERA ENTREGA DEL PROYECTO FINAL - G&G PAGE

Página web e-commerce que creada con React y Vite. Podes ver un catálogo de todos los productos, como también ver los productos individualmente con su respectivos datos. Al seleccionar un producto tenes la opción de agregar al carrito por si deseas seguir comprando o comprar ese solo producto directamente.

## Inicialización

```bash
npm start
```

## Dependencias usadas con su respectiva instalación:

[React Router Dom V6](https://reactrouter.com/en/v6.3.0/getting-started/overview)
```bash
npm install react-router-dom@6
```

[Tailwind](https://tailwindcss.com/docs/guides/create-react-app)
```bash
npm install -D tailwindcss postcss autoprefixer
```

[HeadlessUi](https://www.npmjs.com/package/@headlessui/react)
```bash
npm install @headlessui/react
```

[HeadlessUi/HeroIcons](https://www.npmjs.com/package/@heroicons/react)
```bash
npm install @headlessui/react
```

## Package.json

```bash
{
  "name": "my-project",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "start": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@headlessui/react": "^1.6.6",
    "@heroicons/react": "^1.0.6",
    "headless": "^1.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.3.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.17",
    "@types/react-dom": "^18.0.6",
    "@vitejs/plugin-react": "^2.0.1",
    "autoprefixer": "^10.4.8",
    "postcss": "^8.4.16",
    "tailwindcss": "^3.1.8",
    "vite": "^3.0.7"
  }
}
```

Creado por [Gonzalo Labrador](https://github.com/gonzalolabrador98)