export function templateReplace(text: string, obj: { [keys: string]: string }) {
  let modText = text;
  for (const [key, value] of Object.entries(obj)) {
    const re = new RegExp(key, "g");
    modText = modText.replace(re, value);
  }
  return modText;
}
