import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Plus, ShoppingCart, Clock, CheckCircle, XCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data
const mockOrders = [
  {
    id: "ORD001",
    placedTime: "15 minutos",
    status: "pending",
    customer: "Pedro Felippe Domingos Fernandes",
    totalPrice: 190.0,
  },
  {
    id: "ORD002",
    placedTime: "1 hora",
    status: "processing",
    customer: "Maria Silva",
    totalPrice: 150.5,
  },
  {
    id: "ORD003",
    placedTime: "30 minutos",
    status: "delivered",
    customer: "João Santos",
    totalPrice: 85.75,
  },
  {
    id: "ORD004",
    placedTime: "2 horas",
    status: "canceled",
    customer: "Ana Oliveira",
    totalPrice: 120.0,
  },
  {
    id: "ORD005",
    placedTime: "45 minutos",
    status: "delivering",
    customer: "Carlos Ferreira",
    totalPrice: 200.25,
  },
];

// Generate 35 more mock orders
for (let i = 6; i <= 40; i++) {
  const statuses = [
    "pending",
    "processing",
    "delivering",
    "delivered",
    "canceled",
  ];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  const randomPrice = parseFloat((Math.random() * 300 + 50).toFixed(2));
  const randomMinutes = Math.floor(Math.random() * 180) + 1;

  mockOrders.push({
    id: `ORD${i.toString().padStart(3, "0")}`,
    placedTime: `${randomMinutes} ${
      randomMinutes === 1 ? "minuto" : "minutos"
    }`,
    status: randomStatus,
    customer: `Cliente ${i}`,
    totalPrice: randomPrice,
  });
}

export function OrderDetails({ order }: { order: any }) {
  const { t } = useTranslation();

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          {t("orderDetails.order")}: {order.id}
        </DialogTitle>
        <DialogDescription>{t("orderDetails.details")}</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">
                {t("orderDetails.status")}
              </TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">
                    {t(`orderDetails.${order.status}`)}
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                {t("orderDetails.customer")}
              </TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">
                    {order.customer}
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                {t("orderDetails.phone")}
              </TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">
                    (75) 99999-9994
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                {t("orderDetails.email")}
              </TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">
                    pedfelippe@gmail.com
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                {t("orderDetails.placed")}
              </TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">
                    {order.placedTime}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t("orderDetails.product")}</TableHead>
              <TableHead>{t("orderDetails.quantity")}</TableHead>
              <TableHead>{t("orderDetails.price")}</TableHead>
              <TableHead>{t("orderDetails.subtotal")}</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Pizza Peperroni - G</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$69,99</TableCell>
              <TableCell className="text-right">R$139,80</TableCell>
            </TableRow>
          </TableBody>

          <TableBody>
            <TableRow>
              <TableCell>Pizza Mussarela - G</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$69,99</TableCell>
              <TableCell className="text-right">R$139,80</TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableCell colSpan={3}>{t("orderDetails.total")}</TableCell>
            <TableCell className="txt-right font-medium">R$259,60</TableCell>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  );
}

export function OrderTableRecents() {
  return (
    <TableRow className="relative flex justify-between w-full text-sm items-center h-14">
      <span className="font-medium px-1">Pedro Felippe</span>
      <TableCell className="font-light text-lg">+R$ 190,00</TableCell>
    </TableRow>
  );
}

function Orders() {
  const { t } = useTranslation();
  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      <Helmet title={t("orders.title")} />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">{t("orders.title")}</h1>
          <p className="text-muted-foreground">{t("orders.description")}</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          {t("orders.newOrder")}
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t("orders.totalOrders")}
            </CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t("orders.pending")}
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              Orders waiting
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t("orders.completed")}
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">145</div>
            <p className="text-xs text-muted-foreground">
              Orders delivered
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t("orders.cancelled")}
            </CardTitle>
            <XCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Cancelled orders
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t("orders.search")}
            className="pl-8"
          />
        </div>
        <Button variant="outline">{t("orders.filter")}</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t("orders.recentOrders")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((order) => (
              <div key={order} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <ShoppingCart className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Order #{order}</p>
                    <p className="text-sm text-muted-foreground">Customer {order}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    {t("orders.viewDetails")}
                  </Button>
                  <Button variant="outline" size="sm">
                    {t("orders.edit")}
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

export default Orders;
