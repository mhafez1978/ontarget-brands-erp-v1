import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Clock, Shield } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Revenue by 40%",
      description:
        "AI-driven insights and automation help businesses boost their revenue significantly",
      stat: "40%",
      color: "text-green-600",
    },
    {
      icon: Clock,
      title: "Save 25 Hours Per Week",
      description:
        "Automate repetitive tasks and streamline workflows to free up valuable time",
      stat: "25h",
      color: "text-blue-600",
    },
    {
      icon: Shield,
      title: "99.9% Uptime Guarantee",
      description:
        "Enterprise-grade infrastructure ensures your business never stops running",
      stat: "99.9%",
      color: "text-purple-600",
    },
    {
      icon: CheckCircle,
      title: "ROI in 3 Months",
      description:
        "Most customers see return on investment within the first quarter",
      stat: "3mo",
      color: "text-orange-600",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Measurable Business Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of companies that have transformed their operations
            with OnTarget Smart AI ERP
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className="text-center p-8 hover:shadow-xl transition-all duration-300 bg-white border-0 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                </div>
                <div className={`text-4xl font-bold ${benefit.color} mb-2`}>
                  {benefit.stat}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
