import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Edit } from "lucide-react";

export default function Store() {
  const { t } = useTranslation();

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      <Helmet title={t("store.title")} />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">{t("store.title")}</h1>
        <Button>
          <Edit className="mr-2 h-4 w-4" />
          {t("store.edit")}
        </Button>
      </div>

      <div className="grid gap-6">
        {/* Store Information */}
        <Card>
          <CardHeader>
            <CardTitle>{t("store.information")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
              <div>
                <p className="font-medium">Rua das Flores, 123</p>
                <p className="text-sm text-muted-foreground">Centro, São Paulo - SP</p>
                <p className="text-sm text-muted-foreground">CEP: 01234-567</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <p className="font-medium">(11) 99999-9999</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <p className="font-medium">contato@minhaloja.com</p>
            </div>
          </CardContent>
        </Card>

        {/* Business Hours */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              {t("store.businessHours")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t("store.monday")}</span>
              <span className="font-medium">09:00 - 18:00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t("store.tuesday")}</span>
              <span className="font-medium">09:00 - 18:00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t("store.wednesday")}</span>
              <span className="font-medium">09:00 - 18:00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t("store.thursday")}</span>
              <span className="font-medium">09:00 - 18:00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t("store.friday")}</span>
              <span className="font-medium">09:00 - 18:00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t("store.saturday")}</span>
              <span className="font-medium">09:00 - 14:00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t("store.sunday")}</span>
              <span className="font-medium text-muted-foreground">{t("store.closed")}</span>
            </div>
          </CardContent>
        </Card>

        {/* Store Description */}
        <Card>
          <CardHeader>
            <CardTitle>{t("store.description")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {t("store.descriptionText")}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 