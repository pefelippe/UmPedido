import { useTranslation } from "react-i18next";

export function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">{t("404.title")}</h1>
      <p className="text-accent-foreground">
        {t("404.backMessage")}
      </p>
    </div>
  );
}
