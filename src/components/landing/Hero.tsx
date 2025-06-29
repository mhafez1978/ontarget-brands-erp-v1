import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-gray-700">
            AI-Powered Business Intelligence
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 animate-fade-in">
          On-Target Brands
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ai Powered ERP
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in">
          Transform your business with our comprehensive AI-powered ERP
          solution. Streamline operations, and boost productivity with
          intelligent data analytics.
        </p>

        {/* Feature Pills */}
        <div className="max-w-xl mx-auto flex flex-wrap justify-center gap-3 mb-10">
          {[
            "Multi-Company SaaS",
            "AI Content Generation",
            "CRM & HR",
            "Financial Management",
            "Inventory Control",
            "Online Store Builder",
          ].map((feature, index) => (
            <span
              key={feature}
              className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white/90 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Zap className="w-3 h-3 text-blue-500" />
              {feature}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 animate-scale-in"
          >
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-gray-300 hover:border-blue-500 px-8 py-6 rounded-full text-lg font-semibold bg-white/70 backdrop-blur-sm hover:bg-white transition-all duration-300 animate-scale-in"
          >
            <Play className="mr-2 w-5 h-5" />
            Watch Demo
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="text-sm text-gray-500 animate-fade-in">
          <p className="mb-2">Trusted by 10,000+ businesses worldwide</p>
          <p>
            ✅ No credit card required • ✅ 14-day free trial • ✅ Cancel
            anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
