import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Utensils, Clock, Star } from "lucide-react";

export default function Menu() {
  const { t } = useTranslation();

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      <Helmet title={t("menu.title")} />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">{t("menu.title")}</h1>
          <p className="text-muted-foreground">{t("menu.description")}</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          {t("menu.addItem")}
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t("menu.totalItems")}
            </CardTitle>
            <Utensils className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">
              Active menu items
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t("menu.averagePrepTime")}
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15 min</div>
            <p className="text-xs text-muted-foreground">
              Average preparation time
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t("menu.popularItems")}
            </CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              Most ordered items
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t("menu.search")}
            className="pl-8"
          />
        </div>
        <Button variant="outline">{t("menu.filter")}</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t("menu.categories")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {["Appetizers", "Main Courses", "Desserts", "Drinks"].map((category) => (
              <div key={category} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Utensils className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{category}</p>
                    <p className="text-sm text-muted-foreground">12 items</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    {t("menu.viewItems")}
                  </Button>
                  <Button variant="outline" size="sm">
                    {t("menu.edit")}
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