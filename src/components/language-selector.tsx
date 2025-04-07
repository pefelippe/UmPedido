import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface LanguageSelectorProps {
  className?: string;
}

export function LanguageSelector({ className = "" }: LanguageSelectorProps) {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Select
      value={i18n.language || "pt-BR"}
      onValueChange={handleLanguageChange}
      defaultValue="pt-BR"
    >
      <SelectTrigger className={cn(
        "bg-transparent border-0 hover:bg-white/10 w-fit px-2 h-8 max-w-[70px]",
        className
      )}>
        <span className="text-2xl">
          {i18n.language === "pt-BR" ? "🇧🇷" : "🇺🇸"}
        </span>
      </SelectTrigger>
      <SelectContent className="bg-white" position="popper" sideOffset={5}>
        <SelectItem value="pt-BR">
          <div className="flex items-center gap-2">
            Português
          </div>
        </SelectItem>
        <SelectItem value="en-US">
          <div className="flex items-center gap-2">
            English
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
} 