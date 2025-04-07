import { useTranslation } from "react-i18next";
import { PricingCard } from "./pricing-card";

export function PricingSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t("pricing.title")}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t("pricing.introduction")}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            {t("pricing.noCreditCard")}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <PricingCard plan="free" />
          <PricingCard plan="basic" isPopular />
          <PricingCard plan="professional" />
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            {t("pricing.needHelp")}{" "}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              {t("pricing.contactUs")}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
} 