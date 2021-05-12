import { Application, Router } from "https://deno.land/x/oak@v7.4.0";

import { home } from "./routes.ts";

const app = Application();

const router = Router();

router.get('/', home)

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({port: 80});
console.log("Server is up and running on port 80");