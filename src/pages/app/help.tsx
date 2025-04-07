import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, BookOpen, Video, Phone } from "lucide-react";

export default function Help() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Help Center</h1>
        <p className="text-gray-500">Get support and learn how to use our platform</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <MessageSquare className="h-5 w-5 text-gray-500" />
            </div>
            <CardTitle>Live Chat</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              Chat with our support team in real-time for immediate assistance.
            </p>
            <Button className="w-full">Start Chat</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <BookOpen className="h-5 w-5 text-gray-500" />
            </div>
            <CardTitle>Documentation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              Browse our comprehensive guides and documentation.
            </p>
            <Button variant="outline" className="w-full">View Docs</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <Video className="h-5 w-5 text-gray-500" />
            </div>
            <CardTitle>Video Tutorials</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              Watch step-by-step video tutorials to learn the platform.
            </p>
            <Button variant="outline" className="w-full">Watch Videos</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <Phone className="h-5 w-5 text-gray-500" />
            </div>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              Need more help? Reach out to our support team.
            </p>
            <Button variant="outline" className="w-full">Contact Support</Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                question: "How do I add a new product to my menu?",
                answer: "To add a new product, go to the Products page and click the 'Add Product' button. Fill in the required information and save your changes.",
              },
              {
                question: "How can I track my orders?",
                answer: "You can track all your orders in the Orders section. Each order will show its current status and details.",
              },
              {
                question: "How do I update my store information?",
                answer: "Visit the Store page to update your store details, including name, address, and business hours.",
              },
              {
                question: "How can I generate reports?",
                answer: "Go to the Reports section to access various report types. You can customize and download reports as needed.",
              },
            ].map((faq, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-500">{faq.answer}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 