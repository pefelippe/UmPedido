import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { t } = useTranslation();
  return (
    <div className="relative flex flex-col justify-center md:justify-between min-h-[60vh]  mx-auto pt-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cffafe_1px,transparent_1px),linear-gradient(to_bottom,#cffafe_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
        <div className="absolute inset-0 bg-blue-50/20"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center pt-10 md:pt-48 relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-6 md:space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
          >
            {t(
              "hero.title",
              "Automatize suas vendas, obtenha insights e ganhe mais dinheiro.",
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl max-w-3xl mx-auto"
          >
            {t(
              "hero.description",
              "Ofereça um atendimento rápido, prático e lucrativo, gerindo pedidos, automatizando vendas e muito mais.",
            )}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <Button className="rounded-3xl px-8 py-6 text-lg bg-blue-600 hover:bg-blue-700">
              {t("hero.tryFree")}
            </Button>
            <Button 
              variant="outline" 
              className="rounded-3xl px-8 py-6 text-lg border-gray-300 hover:bg-gray-50" 
              disabled
            >
              {t("hero.seeDemo")}
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="max-w-screen-2xl mx-auto px-4 sm:px-6 mt-20 "
      >
        <img
          alt="Platform Screenshot"
          className="w-full h-auto max-w-full object-cover rounded-t-3xl shadow-2xl min-h-[260px]
          border-t-4 sm:border-t-8 border-r-4 sm:border-r-8 border-l-4 sm:border-l-8 border-gray-800"
          loading="lazy"
          src="/public/orders.png"
        />
      </motion.div>
    </div>
  );
}
