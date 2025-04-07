import { Check, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  plan: "free" | "basic" | "professional";
  isPopular?: boolean;
}

export function PricingCard({ plan, isPopular = false }: PricingCardProps) {
  const { t } = useTranslation();

  const planData = t(`pricing.plans.${plan}`, { returnObjects: true });

  return (
    <div
      className={cn(
        "relative flex flex-col p-8 bg-white rounded-2xl border border-gray-200 shadow-sm",
        isPopular && "border-blue-500 ring-2 ring-blue-500 shadow-lg"
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-1 px-4 py-1 text-sm font-medium text-white bg-blue-500 rounded-full">
            <Zap className="h-4 w-4" />
            {t("pricing.mostPopular")}
          </div>
        </div>
      )}
      
      <div className="flex flex-col items-center pb-8 border-b border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900">{planData.name}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-5xl font-bold text-gray-900">{planData.price}</span>
          <span className="text-gray-500 ml-1">{t("pricing.perMonth")}</span>
        </div>
        <p className="mt-4 text-gray-500 text-center">{planData.description}</p>
      </div>

      <ul className="mt-8 space-y-4">
        {planData.features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="ml-3 text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button
          variant={isPopular ? "default" : "outline"}
          className={cn(
            "w-full",
            isPopular && "bg-blue-600 hover:bg-blue-700"
          )}
          size="lg"
        >
          {planData.buttonText}
        </Button>
      </div>
    </div>
  );
} 