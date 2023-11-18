import TeamMembersCard from "../components/cards/team-members.ts";
import CreateAccount from "../components/cards/create-account.ts";
import {div} from "npm:structr-composer";
import ReportIssue from "../components/cards/report-issue.ts";
import PaymentMethod from "../components/cards/payment-method.ts";
import ShareDocument from "../components/cards/share-document.ts";
import NotificationCard from "../components/cards/notification-card.ts";
import CookiesSettings from "../components/cards/cookies-settings.ts";

export default function () {
  const pageStyle =
    "bg-background grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4";
  return div(
    {class: pageStyle},
    div({class: "grid gap-4 h-fit"}, CreateAccount(), PaymentMethod()),
    div(
      {class: "grid gap-4 h-fit"},
      TeamMembersCard(),
      ShareDocument(),
      NotificationCard()
    ),
    div({class: "grid gap-4 h-fit"}, ReportIssue(), CookiesSettings())
  );
}
