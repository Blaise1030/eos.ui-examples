import {
  HtmlEscapedString,
  br,
  div,
  escHtml,
  li,
  ol,
  p,
} from "npm:structr-composer";
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

const CardIcon = escHtml`<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`;
const PaypalIcon = escHtml`<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-paypal h-6 w-6" viewBox="0 0 16 16">
<path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32.845-5.214Z"/>
</svg>`;
const AppleIcon = escHtml`<svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
<path d="M14.537 10.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.339.025-1.769-.794-3.3-.794s-2.009.769-3.275.82c-1.316.049-2.317-1.318-3.158-2.532C1.323 14.984.01 10.451 1.772 7.391a4.9 4.9 0 0 1 4.139-2.507c1.292-.025 2.511.869 3.3.869.789 0 2.271-1.075 3.828-.917A4.67 4.67 0 0 1 16.7 6.82a4.524 4.524 0 0 0-2.161 3.805M12.02 3.193A4.4 4.4 0 0 0 13.06 0a4.482 4.482 0 0 0-2.946 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z"/>
</svg>`;

export default function LoginCard() {
  return Card(
    {class: "h-fit"},
    CardHeader(
      {},
      CardTitle({}, escHtml`Payment Method`),
      CardDescription({}, escHtml`Add a new payment method to your account.`)
    ),
    CardContent(
      {class: "", "x-data": "{selected:'Card'}"},
      ol(
        {class: "grid grid-cols-3 gap-2"},
        PaymentSelection({title: "Card", id: "Card", icon: CardIcon}),
        PaymentSelection({title: "Paypal", id: "Paypal", icon: PaypalIcon}),
        PaymentSelection({title: "Apple", id: "Apple", icon: AppleIcon})
      ),
      div(
        {
          class: "grid grid-cols-3 gap-2",
          "x-show": "selected === 'Card'",
          "x-collapse": "",
        },
        br(),
        div(
          {class: "space-y-1 col-span-3"},
          Label({}, escHtml`Name`),
          Input({placeholder: "e.g. John Doe"})
        ),
        div(
          {class: "space-y-1 col-span-3"},
          Label({}, escHtml`Card number`),
          Input({placeholder: "4111 1111 1111 1111"})
        ),
        div(
          {class: "space-y-1"},
          Label({}, escHtml`Expires`),
          Input({placeholder: "Expiry"})
        ),
        div(
          {class: "space-y-1"},
          Label({}, escHtml`Year`),
          Input({placeholder: "Year"})
        ),
        div(
          {class: "space-y-1"},
          Label({}, escHtml`CVC`),
          Input({placeholder: "CVC"})
        )
      )
    ),
    CardFooter(
      {},
      Button({variant: "default", class: "w-full"}, escHtml`Continue`)
    )
  );
}

function PaymentSelection({
  title,
  icon,
  id,
}: {
  icon: HtmlEscapedString;
  title: string;
  id: string;
}) {
  return li(
    Card(
      {
        class:
          "p-3 flex flex-col items-center space-y-1 cursor-pointer hover:bg-muted",
        ":class": `{'border-foreground':selected==='${id}'}`,
        "@click": `selected = '${id}'`,
      },
      icon,
      p({class: "text-center text-xs"}, escHtml`${title}`)
    )
  );
}
