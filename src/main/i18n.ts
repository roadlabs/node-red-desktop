import i18n from "i18n";
import path from "path";

const locales = ["en-US", "zh-CN"];
i18n.configure({
  locales: locales,
  defaultLocale: "zh-CN",
  directory: path.join(__dirname, "..", "locales"),
  objectNotation: true
});

export default i18n;
