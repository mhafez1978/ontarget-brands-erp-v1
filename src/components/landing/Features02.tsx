import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building2,
  Users,
  DollarSign,
  Package,
  ShoppingCart,
  Brain,
  BarChart3,
  Shield,
} from "lucide-react";

const Features02 = () => {
  const features = [
    {
      icon: Building2,
      title: "Multi-Company Management",
      description:
        "Manage multiple companies and subsidiaries from a single dashboard with complete data separation.",
    },
    {
      icon: Users,
      title: "Comprehensive CRM",
      description:
        "Track leads, manage customers, and automate sales processes with powerful relationship management tools.",
    },
    {
      icon: DollarSign,
      title: "Financial Management",
      description:
        "Complete accounting, invoicing, reporting, and financial analytics with real-time insights.",
    },
    {
      icon: Package,
      title: "Inventory Control",
      description:
        "Real-time inventory tracking, automated reordering, and warehouse management across locations.",
    },
    {
      icon: ShoppingCart,
      title: "Online Store Builder",
      description:
        "Create and manage e-commerce stores for each company with integrated payment processing.",
    },
    {
      icon: Brain,
      title: "AI Content Generation",
      description:
        "Automatically generate product descriptions, marketing content, and business documents using AI.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Comprehensive reporting and business intelligence with customizable dashboards and KPIs.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level security with role-based access control and data encryption at rest and in transit.",
    },
  ];

  return (
    <section className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything Your Business Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines all essential business tools
            into one powerful, AI-enhanced solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features02;
