import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  features: string[];
}

export function Pricing() {
  const { t } = useTranslation();
  const ref = useRef(null);

  const getFeatures = (planKey: string): string[] => {
    const features = t(`pricing.plans.${planKey}.features`, { returnObjects: true });
    return Array.isArray(features) ? features : [];
  };

  const pricingPlans: PricingPlan[] = [
    {
      name: t("pricing.plans.starter.name"),
      description: t("pricing.plans.starter.description"),
      price: t("pricing.plans.starter.price"),
      features: getFeatures("starter"),
    },
    {
      name: t("pricing.plans.super.name"),
      description: t("pricing.plans.super.description"),
      price: t("pricing.plans.super.price"),
      features: getFeatures("super"),
    },
    {
      name: t("pricing.plans.rich.name"),
      description: t("pricing.plans.rich.description"),
      price: t("pricing.plans.rich.price"),
      features: getFeatures("rich"),
    }
  ];

  return (
    <section
      id="pricing"
      className="py-32"
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight relative inline-block">
            {t("pricing.title")}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </motion.div>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="relative"
            >
              {plan.name === t("pricing.plans.rich.name") && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg"
                >
                  {t("pricing.recommended")}
                </motion.div>
              )}
              <Card
                className={cn(
                  "h-full flex flex-col transition-all duration-300",
                  plan.name === t("pricing.plans.rich.name")
                    ? "bg-gray-900 text-white hover:shadow-2xl hover:shadow-blue-500/20" 
                    : "hover:shadow-xl hover:shadow-gray-200"
                )}
              >
                <CardHeader className="p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <CardTitle className={cn(
                      "text-2xl font-bold mb-2",
                      plan.name === t("pricing.plans.rich.name") ? "text-white" : "text-gray-900"
                    )}>
                      {plan.name}
                    </CardTitle>
                    <div className="flex items-baseline mb-4">
                      <span className={cn(
                        "text-5xl font-extrabold",
                        plan.name === t("pricing.plans.rich.name") ? "text-white" : "text-gray-900"
                      )}>
                        {plan.price}
                      </span>
                      <span className={cn(
                        "text-xl font-semibold ml-2",
                        plan.name === t("pricing.plans.rich.name") ? "text-gray-300" : "text-gray-500"
                      )}>
                        /mês
                      </span>
                    </div>
                    <p className={cn(
                      "text-sm",
                      plan.name === t("pricing.plans.rich.name") ? "text-gray-300" : "text-gray-600"
                    )}>
                      {plan.description}
                    </p>
                  </motion.div>
                </CardHeader>
                <CardContent className="p-8 pt-0 flex-grow flex flex-col">
                  <motion.ul 
                    className="space-y-3 mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.5 + index * 0.2 + featureIndex * 0.1 
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        className={cn(
                          "flex items-center transition-transform duration-200",
                          plan.name === t("pricing.plans.rich.name") ? "text-gray-300" : "text-gray-600"
                        )}
                      >
                        <motion.svg
                          className={cn(
                            "w-5 h-5 mr-3 flex-shrink-0",
                            plan.name === t("pricing.plans.rich.name") ? "text-blue-400" : "text-blue-500"
                          )}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </motion.svg>
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>
                  <motion.div 
                    className="mt-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Button
                      variant={plan.name === t("pricing.plans.rich.name") ? "default" : "outline"}
                      className={cn(
                        "w-full rounded-3xl transition-all duration-300",
                        plan.name === t("pricing.plans.rich.name")
                          ? "bg-blue-600 hover:bg-blue-700 hover:scale-105" 
                          : "hover:bg-blue-50 hover:scale-105"
                      )}
                    >
                      {t("pricing.button")}
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
