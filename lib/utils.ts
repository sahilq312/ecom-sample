import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getFirstThreeWords(str : string){
  if (!str) {
    return "";
  }
  const word = str.split(' ');
  const getFirstThreeWords = word.slice(0,3);
  return getFirstThreeWords.join(' ');
}
