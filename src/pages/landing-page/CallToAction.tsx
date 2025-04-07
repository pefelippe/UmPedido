import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function CallToAction() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={hasAnimated ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="text-white"
    >
      <div className="px-32 mx-auto text-center bg-primary py-48 flex flex-col">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          {t("callToAction.title")}
        </motion.h2>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-6 text-lg"
        >
          {t("callToAction.description")}
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={hasAnimated ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button
            variant="secondary"
            size="lg"
            className="max-w-sm mx-auto rounded-xl text-md transition-colors duration-300"
          >
            <Link to="painel/login">{t("callToAction.buttonText")}</Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
