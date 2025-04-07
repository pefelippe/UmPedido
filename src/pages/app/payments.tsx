import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, DollarSign, Calendar } from "lucide-react";

export default function Payments() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Payments</h1>
        <p className="text-gray-500">Manage your payments and transactions</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-gray-500">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
            <CreditCard className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,234.56</div>
            <p className="text-xs text-gray-500">5 pending transactions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <Calendar className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,345.67</div>
            <p className="text-xs text-gray-500">Current month's revenue</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Transaction #{i}</h3>
                    <p className="text-sm text-gray-500">Order #12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-medium">$99.99</span>
                  <Button variant="outline" size="sm">Details</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button>View All Transactions</Button>
      </div>
    </div>
  );
} 