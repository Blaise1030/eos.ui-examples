import {Hono} from "https://deno.land/x/hono@v3.10.0/mod.ts";
import {pageTemplate} from "./components/pageTemplate.ts";
import LoginPage from "./pages/login-page.ts";
import CardsPage from "./pages/cards.ts";

const app = new Hono();

app.get("example/login", (c) => c.html(pageTemplate(LoginPage())));
app.get("example/cards", (c) => c.html(pageTemplate(CardsPage())));

Deno.serve(app.fetch);
