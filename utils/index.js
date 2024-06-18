import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const slugify = (str) =>
  str
    ?.normalize("NFD") // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, "") // convert accented letters from uppercase to llowercase
    ?.toLowerCase() //lowercase whole string
    .replace(/^\s+|\s+$/g, "") // trim
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars like '/' '?' etc
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes into single -

export const shareOnSocialMedia = (platform, blogTitle) => {
  let shareUrl = "";
  switch (platform) {
    case "facebook":
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}`;
      break;
    case "twitter":
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        blogTitle
      )}&url=${encodeURIComponent(window.location.href)}`;
      break;
    case "linkedin":
      shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        window.location.href
      )}`;
      break;
    default:
      return;
  }
  window.open(shareUrl, "_blank");
};

export const trimDescription = (description, maxChars = 66) => {
  if (description?.length <= maxChars) {
    return description;
  } else {
    return `${description?.slice(0, maxChars)}...`;
  }
};



export const trimDescription1 = (description, maxChars = 60) => {
  if (description?.length <= maxChars) {
    return description;
  } else {
    return `${description?.slice(0, maxChars)}...`;
  }
};