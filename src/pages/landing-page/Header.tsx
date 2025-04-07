import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import { LanguageSelector } from "@/components/language-selector";

export function HeaderLandingPage() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white border-b border-gray-200' : 'bg-transparent'
    }`}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 w-full">
          <div className="flex justify-start items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-900">My Store</span>
          </div>
          <nav className="hidden md:flex space-x-10">
            <ScrollLink
              to="#services"
              smooth={true}
              duration={500}
              className="text-lg font-medium cursor-pointer text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t("header.services")}
            </ScrollLink>
            <ScrollLink
              to="#pricing"
              smooth={true}
              duration={500}
              className="text-lg font-medium cursor-pointer text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t("header.pricing")}
            </ScrollLink>
            <ScrollLink
              to="#faq"
              smooth={true}
              duration={500}
              className="text-lg font-medium cursor-pointer text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t("header.faq")}
            </ScrollLink>
          </nav>
          <div className="hidden md:flex items-center gap-6">
            <LanguageSelector className="w-[120px]" />
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white py-6 px-5 text-md rounded-xl">
              <Link
                to="/app/login"
                className="flex items-center justify-center"
                onClick={toggleMenu}
              >
                {t("header.accessPanel")} →
              </Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} className="text-gray-700">
              <Menu />
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="p-6 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-gray-900">My Store</span>
              </div>
              <Button
                variant="ghost"
                onClick={toggleMenu}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </Button>
            </div>
            <nav className="px-6 py-8 space-y-10">
              <ScrollLink
                to="#services"
                smooth={true}
                duration={500}
                className="block text-lg text-gray-700 hover:text-blue-700 hover:bg-blue-50 font-medium transition-colors duration-200 p-2 rounded"
                onClick={toggleMenu}
              >
                {t("header.services")}
              </ScrollLink>
              <ScrollLink
                to="#pricing"
                smooth={true}
                duration={500}
                className="block text-lg text-gray-700 hover:text-blue-700 hover:bg-blue-50 font-medium transition-colors duration-200 p-2 rounded"
                onClick={toggleMenu}
              >
                {t("header.pricing")}
              </ScrollLink>
              <ScrollLink
                to="#faq"
                smooth={true}
                duration={500}
                className="block text-lg text-gray-700 hover:text-blue-700 hover:bg-blue-50 font-medium transition-colors duration-200 p-2 rounded"
                onClick={toggleMenu}
              >
                {t("header.faq")}
              </ScrollLink>
              <div className="pt-6 border-t border-gray-200 space-y-4">
                <LanguageSelector className="w-full" />
                <Button
                  variant="default"
                  className="w-full bg-blue-600 text-white py-8 text-2xl hover:bg-blue-700"
                >
                  <Link
                    to="/app/login"
                    className="flex items-center justify-center text-2xl"
                    onClick={toggleMenu}
                  >
                    {t("header.accessPanel")}
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
