import {HtmlEscapedString, div} from "npm:structr-composer";
import cn from "./utils/cn.ts";

export default function Stack(
  props: {[x: string]: string} & {direction: "column" | "row"},
  ...children: HtmlEscapedString[]
) {
  return div(
    {
      ...props,
      class: cn([
        "flex",
        {column: "flex-col", row: "flex-row"}[props?.direction],
        props?.class,
      ]),
    },
    ...children
  );
}
