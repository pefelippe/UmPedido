import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Check, X, Settings } from "lucide-react";

export default function Notifications() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Notifications</h1>
          <p className="text-gray-500">Manage your notifications and alerts</p>
        </div>
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </div>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Recent Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  type: "order",
                  title: "New Order Received",
                  message: "Order #12345 has been placed",
                  time: "2 minutes ago",
                  read: false,
                },
                {
                  type: "payment",
                  title: "Payment Successful",
                  message: "Payment for Order #12344 has been processed",
                  time: "1 hour ago",
                  read: true,
                },
                {
                  type: "inventory",
                  title: "Low Stock Alert",
                  message: "Product 'Margherita Pizza' is running low",
                  time: "3 hours ago",
                  read: false,
                },
                {
                  type: "system",
                  title: "System Update",
                  message: "New features have been added to your dashboard",
                  time: "1 day ago",
                  read: true,
                },
              ].map((notification, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 p-4 rounded-lg ${
                    notification.read ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Bell className="h-5 w-5 text-gray-500" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{notification.title}</h3>
                      <span className="text-sm text-gray-500">{notification.time}</span>
                    </div>
                    <p className="text-sm text-gray-500">{notification.message}</p>
                  </div>
                  <div className="flex space-x-2">
                    {!notification.read && (
                      <Button variant="outline" size="sm">
                        <Check className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button variant="outline">View All Notifications</Button>
        </div>
      </div>
    </div>
  );
} 