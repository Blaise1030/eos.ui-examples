import {
  HtmlEscapedString,
  link,
  html,
  head,
  meta,
  title,
  script,
  body,
  escHtml,
  style,
  div,
  p,
} from "npm:structr-composer";
import DarkModeToggle from "./DarkModeToggle.ts";
import Button from "./Button.ts";

const externalLink = escHtml`<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>`;

export const pageTemplate = (children: HtmlEscapedString) =>
  `<!DOCTYPE html>
  ${html(
    {lang: "en"},
    head(
      meta({charset: "UTF-8"}),
      link({rel: "icon", type: "image/svg+xml", href: "/vite.svg"}),
      meta({
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      }),
      meta({name: "description", content: "alpine-comp"}),
      link({
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@unocss/reset/tailwind.min.css",
      }),
      title({}, escHtml`Vite + TS`),
      script({
        src: "https://cdn.jsdelivr.net/npm/@alpinejs/collapse@3.x.x/dist/cdn.min.js",
        defer: "",
      }),
      script({
        src: "https://cdn.jsdelivr.net/npm/@alpinejs/focus@3.x.x/dist/cdn.min.js",
        defer: "",
      }),
      script({
        src: "https://unpkg.com/alpinejs@3.13.2/dist/cdn.min.js",
        defer: "",
      }),
      style(escHtml`[un-cloak] {
        opacity: 0;
      }
  
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      body {
        --background: 0 0% 100%;
        --foreground: 222.2 84% 4.9%;
        --card: 0 0% 100%;
        --card-foreground: 222.2 84% 4.9%;
        --popover: 0 0% 100%;
        --popover-foreground: 222.2 84% 4.9%;
        --primary: 222.2 47.4% 11.2%;
        --primary-foreground: 210 40% 98%;
        --secondary: 210 40% 96.1%;
        --secondary-foreground: 222.2 47.4% 11.2%;
        --muted: 210 40% 96.1%;
        --muted-foreground: 215.4 16.3% 46.9%;
        --accent: 210 40% 96.1%;
        --accent-foreground: 222.2 47.4% 11.2%;
        --destructive: 0 84.2% 60.2%;
        --destructive-foreground: 210 40% 98%;
        --border: 214.3 31.8% 91.4%;
        --input: 214.3 31.8% 91.4%;
        --ring: 222.2 84% 4.9%;
        --radius: 0.5rem;
        --glass: rgba(255, 255, 255, 0.09);
      }
  
      body[data-theme="dark"] {
        --background: 222.2 84% 4.9%;
        --foreground: 210 40% 98%;
        --card: 222.2 84% 4.9%;
        --card-foreground: 210 40% 98%;
        --popover: 222.2 84% 4.9%;
        --popover-foreground: 210 40% 98%;
        --primary: 210 40% 98%;
        --primary-foreground: 222.2 47.4% 11.2%;
        --secondary: 217.2 32.6% 17.5%;
        --secondary-foreground: 210 40% 98%;
        --muted: 217.2 32.6% 17.5%;
        --muted-foreground: 215 20.2% 65.1%;
        --accent: 217.2 32.6% 17.5%;
        --accent-foreground: 210 40% 98%;
        --destructive: 0 62.8% 30.6%;
        --destructive-foreground: 210 40% 98%;
        --border: 217.2 32.6% 17.5%;
        --input: 217.2 32.6% 17.5%;
        --ring: 212.7 26.8% 83.9%;
        --glass: rgba(0, 0, 0, 0.09);
      }`)
    ),
    body(
      {
        class:
          "bg-background text-foreground border-border scroll-smooth overflow-hidden",
        "x-bind:class": "currentColorMode",
        "x-init": "setTheme(theme)",
        "x-bind:data-theme": "currentColorMode",
        "un-cloak": "",
        "x-data": `{
          theme: localStorage.getItem('theme') || localStorage.setItem('theme', 'system'),
          currentColorMode: '',
          setTheme(t){            
            this.theme = t;
            this.currentColorMode = (this.theme === 'dark' || Boolean(this.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) ?'dark':'light'
            localStorage.setItem('theme', t);      
          }
        }`,
      },
      children,
      div(
        {
          class:
            "bg-background absolute top-2 right-2 py-1 px-2 flex flex-row space-x-2 shadow rounded-lg border-border border items-center",
        },
        p({class: "ml-2 text-sm text-muted-foreground"}, escHtml`Dark Mode`),
        DarkModeToggle()
      ),
      script(escHtml`window.__unocss = {
        theme: {
          colors: {
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: {
              DEFAULT: "hsl(var(--primary))",
              foreground: "hsl(var(--primary-foreground))",
            },
            secondary: {
              DEFAULT: "hsl(var(--secondary))",
              foreground: "hsl(var(--secondary-foreground))",
            },
            destructive: {
              DEFAULT: "hsl(var(--destructive))",
              foreground: "hsl(var(--destructive-foreground))",
            },
            muted: {
              DEFAULT: "hsl(var(--muted))",
              foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
              DEFAULT: "hsl(var(--accent))",
              foreground: "hsl(var(--accent-foreground))",
            },
            popover: {
              DEFAULT: "hsl(var(--popover))",
              foreground: "hsl(var(--popover-foreground))",
            },
            card: {
              DEFAULT: "hsl(var(--card))",
              foreground: "hsl(var(--card-foreground))",
            },
          },
        },
      };`),
      script({src: "https://cdn.jsdelivr.net/npm/@unocss/runtime"})
    )
  )}`;
