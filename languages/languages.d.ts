// languages/languages.d.ts
declare module "*.json" {
  const value: { [key: string]: string };
  export default value;
}

// Augment i18n-js types directly
declare module "i18n-js" {
  interface I18n {
    translations: { [locale: string]: { [key: string]: string } };
    fallbacks: boolean;
    locale: string;
  }

  const i18n: I18n;
  export default i18n;
}
