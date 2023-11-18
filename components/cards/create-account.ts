import Button from "../Button.ts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../Card.ts";
import Input from "../Input.ts";
import Label from "../Label.ts";
import {div, escHtml} from "npm:structr-composer";

export default function CardDemo() {
  return Card(
    {class: "h-fit"},
    CardHeader(
      {},
      CardTitle({class: "text-2xl"}, escHtml`Create an account`),
      CardDescription(
        {},
        escHtml`Enter your email below to create your account.`
      )
    ),
    CardContent(
      {class: "space-y-2"},
      div(
        {class: "space-y-1"},
        Label({}, escHtml`Email`),
        Input({placeholder: "m@example.com"})
      ),
      div(
        {class: "space-y-1"},
        Label({}, escHtml`Password`),
        Input({placeholder: "P@ssword"})
      )
    ),
    CardFooter(
      {},
      Button({variant: "default", class: "w-full"}, escHtml`Create account`)
    )
  );
}
