import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {  Bell, CreditCard, Globe, Lock, User } from "lucide-react";

export default function Settings() {
  const { t } = useTranslation();

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      <Helmet title={t("settings.title")} />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">{t("settings.title")}</h1>
      </div>

      <div className="grid gap-6">
        {/* Account Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              {t("settings.account")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t("settings.name")}</Label>
              <Input id="name" defaultValue="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t("settings.email")}</Label>
              <Input id="email" type="email" defaultValue="john@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{t("settings.phone")}</Label>
              <Input id="phone" type="tel" defaultValue="+1 (555) 000-0000" />
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              {t("settings.notifications")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>{t("settings.emailNotifications")}</Label>
                <p className="text-sm text-muted-foreground">
                  {t("settings.emailNotificationsDescription")}
                </p>
              </div>
              {/* <Switch defaultChecked /> */}
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>{t("settings.pushNotifications")}</Label>
                <p className="text-sm text-muted-foreground">
                  {t("settings.pushNotificationsDescription")}
                </p>
              </div>
              {/* <Switch defaultChecked /> */}
            </div>
          </CardContent>
        </Card>

        {/* Payment Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              {t("settings.payment")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currency">{t("settings.currency")}</Label>
              <Select defaultValue="usd">
                <SelectTrigger>
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD ($)</SelectItem>
                  <SelectItem value="eur">EUR (€)</SelectItem>
                  <SelectItem value="brl">BRL (R$)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="payment-method">{t("settings.paymentMethod")}</Label>
              <Select defaultValue="credit-card">
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="credit-card">Credit Card</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              {t("settings.security")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">{t("settings.currentPassword")}</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">{t("settings.newPassword")}</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">{t("settings.confirmPassword")}</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <Button>{t("settings.updatePassword")}</Button>
          </CardContent>
        </Card>

        {/* Language & Region */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              {t("settings.languageAndRegion")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="language">{t("settings.language")}</Label>
              <Select defaultValue="en">
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="pt">Português</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">{t("settings.timezone")}</Label>
              <Select defaultValue="utc">
                <SelectTrigger>
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="utc">UTC</SelectItem>
                  <SelectItem value="est">EST</SelectItem>
                  <SelectItem value="pst">PST</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 