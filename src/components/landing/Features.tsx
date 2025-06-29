import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Building2,
  Brain,
  Users,
  DollarSign,
  Package,
  ShoppingBag,
  BarChart3,
  Shield,
  Globe,
  Zap,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Building2,
      title: "Multi-Company Management",
      description:
        "Manage multiple companies from a single dashboard with role-based access control and company-specific configurations.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Brain,
      title: "AI Content Generation",
      description:
        "Leverage advanced AI to generate marketing content, product descriptions, reports, and business insights automatically.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Integrated CRM & HR",
      description:
        "Streamline customer relationships and human resources with unified contact management and employee lifecycle tools.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: DollarSign,
      title: "Financial Management",
      description:
        "Complete accounting suite with invoicing, expense tracking, financial reporting, and multi-currency support.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Package,
      title: "Smart Inventory Control",
      description:
        "Real-time inventory tracking with automated reordering, warehouse management, and supply chain optimization.",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: ShoppingBag,
      title: "Online Store Builder",
      description:
        "Create and manage e-commerce stores with integrated payment processing and order management.",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "AI-powered business intelligence with predictive analytics and customizable dashboards.",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level security with data encryption, compliance tools, and audit trails.",
      gradient: "from-gray-600 to-gray-800",
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description:
        "Built for international businesses with multi-language support and regional compliance.",
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">
              Powerful Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything Your Business Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            OnTarget Smart AI ERP combines all essential business functions into
            one intelligent platform, powered by artificial intelligence to
            drive growth and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
