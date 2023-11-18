import {type ClassValue, clsx} from "npm:clsx";
import {twMerge} from "npm:tailwind-merge";

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
