import {HtmlEscapedString, div, escHtml, p} from "npm:structr-composer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../Card.ts";

const BellIcon = escHtml`<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`;
const UserIcon = escHtml`<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
const HideIcon = escHtml`<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`;
export default function () {
  return Card(
    {class: "h-fit"},
    CardHeader(
      {},
      CardTitle({class: ""}, escHtml`Notifications`),
      CardDescription({}, escHtml`Choose what you want to be notified about.`)
    ),
    CardContent(
      {class: "space-y-1"},
      NotificationsItem({
        title: "Everything",
        description: "Email digest, mentions & all activity.",
        icon: BellIcon,
        selected: false,
      }),
      NotificationsItem({
        title: "Available",
        description: "Only mentions and comments.",
        icon: UserIcon,
        selected: true,
      }),
      NotificationsItem({
        title: "Ignoring",
        description: "Turn off all notifications.",
        icon: HideIcon,
        selected: false,
      })
    )
  );
}

function NotificationsItem({
  description,
  selected,
  title,
  icon,
}: {
  icon: HtmlEscapedString;
  description: string;
  selected: boolean;
  title: string;
}) {
  return div(
    {
      class:
        "flex flex-row space-x-4 items-center cursor-pointer hover:bg-muted p-2 px-3 rounded-md",
      ":class": `{'bg-muted':${selected}}`,
    },
    div(icon),
    div(
      {class: "flex flex-col"},
      p({class: "text-sm font-medium"}, escHtml`${title}`),
      p({class: "text-sm text-muted-foreground"}, escHtml`${description}`)
    )
  );
}
