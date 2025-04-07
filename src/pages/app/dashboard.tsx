import { DollarSign, ShoppingCart, AlertTriangle, TrendingUp, Edit } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import CardInfo from "../../components/cardInfo";
import { RecentSales } from "../../components/RecentSales";
import { RevenueChart } from "../../components/RevenueChart";
import { useTranslation } from "react-i18next";

function Dashboard() {
  const { t } = useTranslation();

  const cardInfoData = [
    {
      title: "dashboard.totalRevenue",
      diff: "dashboard.diffComparedToLastMonth",
      value: "R$ 3.000,00",
      icon: <DollarSign className="h-4 w-4 text-green-500" />,
      diffValue: "+2%"
    },
    {
      title: "dashboard.ordersToday",
      diff: "dashboard.diffComparedToLastMonth",
      value: "12",
      icon: <ShoppingCart className="h-4 w-4 text-blue-500" />,
      diffValue: "+2%"
    },
    {
      title: "dashboard.canceledOrdersToday",
      diff: "dashboard.diffComparedToLastMonth",
      value: "3",
      icon: <AlertTriangle className="h-4 w-4 text-red-500" />,
      diffValue: "+2%"
    },
    {
      title: "dashboard.averageOrderValue",
      diff: "dashboard.diffComparedToLastMonth",
      value: "R$ 250,00",
      icon: <TrendingUp className="h-4 w-4 text-purple-500" />,
      diffValue: "+5%"
    }
  ];

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      <Helmet title={t("dashboard.title")} />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">{t("dashboard.title")}</h1>
        <Button variant="outline">
          <Edit className="mr-2 h-4 w-4" />
          {t("dashboard.manage")}
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-8">
        <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full">
          {cardInfoData.map((card, index) => (
            <CardInfo
              key={index}
              title={t(card.title)}
              diff={`${card.diffValue} ${t(card.diff)}`}
              value={card.value}
              icon={card.icon}
            />
          ))}
          <div className="col-span-1 sm:col-span-2 xl:col-span-4">
            <RevenueChart />
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <RecentSales />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
