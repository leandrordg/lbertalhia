export function getFormatedLocale() {
  const locale = navigator.language;
  if (locale !== "pt-BR") return "en";
  return locale.replace("-", "_");
}
