import { useTranslation } from "react-i18next";
import { AuthGoogleContext } from "@/context/AuthGoogleContext";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { LanguageSelector } from "@/components/language-selector";

export function Login() {
  const { t } = useTranslation();
  const { signInGoogle } = useContext(AuthGoogleContext);

  return (
    <>
      <Helmet title={t("login.title")} />
      <div className="min-h-screen flex">
        {/* Left side - Blue gradient with logo and text */}
        <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 to-blue-500 p-12 flex-col">
          <div className="flex-1 flex items-center justify-center">
            <div className="max-w-3xl flex flex-col gap-4">
              <p className="text-white/90 font-medium text-6xl">
                {t("hero.title")}
              </p>
              <p className="text-white/80 text-2xl">
                {t("hero.description")}
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="flex-1 bg-[#121212] flex flex-col">
          <div className="flex justify-between items-center p-4">
            <div className="lg:hidden">
              <img
                src="/logo-white.svg"
                alt="MyStore"
                className="h-8"
              />
            </div>
            <div className="flex items-center gap-4">
              <LanguageSelector className="text-white" />
              <a href="/" className="text-white hover:text-white/80 text-sm font-medium">
                {t("header.home")}
              </a>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center p-8">
            <div className="w-full max-w-md space-y-8">
              <div className="text-center">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold text-white mb-2"
                >
                  {t("login.title")}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-gray-400"
                >
                  {t("login.subtitle")}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4"
              >
                <button
                  onClick={signInGoogle}
                  className="w-full bg-white text-gray-900 rounded-md py-3 px-4 flex items-center justify-center gap-3 font-medium hover:bg-gray-100 transition-colors"
                >
                  <img
                    src="/google-color-icon.svg"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  {t("login.signInGoogle")}
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
