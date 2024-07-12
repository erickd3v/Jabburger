import express from "express";

// Primero, ejecuta el comando `pnpm build` en la línea de comandos para construir el proyecto Astro
// Esto generará el directorio `dist` con los archivos necesarios para el Server-Side Rendering (SSR)
// Luego, importa el manejador SSR desde el archivo generado en `dist/server/entry.mjs`
import { handler as ssrHandler } from "../dist/server/entry.mjs";

const app = express();

const port = process.env.PORT || 4322;

const base = "/";

app.use(base, express.static("dist/client"));
app.use(ssrHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
