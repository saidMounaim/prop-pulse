import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { PropertyType } from "./generated/prisma/enums";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getUserInitials(name: string = "") {
  const trimmedName = name.trim();
  const nameParts = trimmedName.split(" ");

  if (nameParts.length > 1) {
    return `${nameParts[0].charAt(0)}${nameParts[1].charAt(0)}`;
  } else {
    return trimmedName.substring(0, 2);
  }
}

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

export function formatType(type: string) {
  return type === "FOR_SALE" ? "For Sale" : "For Rent";
}
