import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, BarChart2, PieChart, LineChart } from "lucide-react";

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Reports</h1>
          <p className="text-gray-500">View and download business reports</p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export All
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Sales Report</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-[200px] bg-gray-100 rounded-md flex items-center justify-center text-gray-500">
              <BarChart2 className="h-8 w-8" />
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Last 30 days</span>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Product Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-[200px] bg-gray-100 rounded-md flex items-center justify-center text-gray-500">
              <PieChart className="h-8 w-8" />
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Top selling items</span>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-[200px] bg-gray-100 rounded-md flex items-center justify-center text-gray-500">
              <LineChart className="h-8 w-8" />
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Monthly comparison</span>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Custom Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "Customer Analysis", description: "Detailed customer behavior and preferences" },
              { name: "Inventory Report", description: "Current stock levels and turnover rates" },
              { name: "Employee Performance", description: "Staff productivity and sales metrics" },
            ].map((report) => (
              <div key={report.name} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{report.name}</h3>
                  <p className="text-sm text-gray-500">{report.description}</p>
                </div>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Generate
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 