import {div, escHtml, hr, p} from "npm:structr-composer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../Card.ts";
import Input from "../Input.ts";
import Button from "../Button.ts";
import CopyToClipboard from "../CopyToClipboard.ts";
import TeammemberItem from "./teammember-item.ts";

export default function ShareDocument() {
  return CopyToClipboard(
    {content: "docsSite"},
    Card(
      {},
      CardHeader(
        {},
        CardTitle({}, escHtml`Share this document`),
        CardDescription(
          {},
          escHtml`Anyone with the link can view this document.`
        )
      ),
      CardContent(
        {class: "space-y-4"},
        div(
          {class: "flex flex-row space-x-2"},
          Input({
            value: "https://eosui.netlify.app/#/docs/introduction",
            disabled: "",
          }),
          div(
            {id: "docsSite", class: "hidden"},
            escHtml`https://eosui.netlify.app/#/docs/introduction`
          ),
          Button(
            {
              ":disabled": "copyNotification",
              "@click": "copyToClipboard()",
              variant: "secondary",
              size: "sm",
              "x-text": `copyNotification?'✔ Copied':'Copy Link'`,
            },
            escHtml``
          )
        ),
        hr({class: "border-border"}),
        div(
          {class: "flex flex-col space-y-4"},
          p({class: "font-medium text-sm"}, escHtml`Members with access`),

          TeammemberItem({
            favicon: "https://ui.shadcn.com/avatars/01.png",
            email: "m@example.com",
            title: "Sofia Davis",
            defaultRole: "Owner",
          }),
          TeammemberItem({
            favicon: "https://ui.shadcn.com/avatars/02.png",
            email: "p@example.com",
            defaultRole: "Frontend",
            title: "Jackson Lee",
          }),
          TeammemberItem({
            favicon: "https://ui.shadcn.com/avatars/03.png",
            email: "o@example.com",
            title: "Olivia Martin",
            defaultRole: "Frontend",
          })
        )
      )
    )
  );
}
