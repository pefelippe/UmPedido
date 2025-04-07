import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useTranslation();
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const faqItems = [
    {
      question: t("faq.howItWorks"),
      answer: t("faq.howItWorksAnswer"),
    },
    {
      question: t("faq.integrationPOS"),
      answer: t("faq.integrationPOSAnswer"),
    },
    {
      question: t("faq.customization"),
      answer: t("faq.customizationAnswer"),
    },
    {
      question: t("faq.dataAnalytics"),
      answer: t("faq.dataAnalyticsAnswer"),
    },
    {
      question: t("faq.support"),
      answer: t("faq.supportAnswer"),
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="#faq" className="bg-gray-100 py-32" ref={ref}>
      <motion.div
        className="max-w-7xl mx-auto px-4"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-2/4">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight relative inline-block">
              {t("faq.title")}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></span>
            </h2>
            <p className="mb-8 text-base">{t("faq.description")}</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
              {t("faq.contactUs")}
            </button>
          </div>
          <div className="md:w-2/4 space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md"
              >
                <button
                  className="w-full text-left p-4 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{item.question}</span>
                    <motion.span
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openIndex === index ? "−" : "+"}
                    </motion.span>
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 pt-0"
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
