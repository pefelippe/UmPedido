import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";

export default function Customers() {
  const { t } = useTranslation();

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      <Helmet title={t("customers.title")} />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">{t("customers.title")}</h1>
          <p className="text-muted-foreground">{t("customers.description")}</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          {t("customers.addCustomer")}
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t("customers.search")}
            className="pl-8"
          />
        </div>
        <Button variant="outline">{t("customers.filter")}</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t("customers.recentCustomers")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((customer) => (
              <div key={customer} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">JD</span>
                  </div>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    {t("customers.viewDetails")}
                  </Button>
                  <Button variant="outline" size="sm">
                    {t("customers.edit")}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 