import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className=" flex  items-center justify-center  text-center text-md">
          <p>
            &copy; {new Date().getFullYear()} {t("footer.companyName")}.{" "}
            {t("footer.allRightsReserved")}
          </p>

        </div>
      </div>
    </footer>
  );
}
