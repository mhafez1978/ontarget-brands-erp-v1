import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const Benefits02 = () => {
  const benefits = [
    "Reduce operational costs by up to 40%",
    "Increase productivity with automated workflows",
    "Make data-driven decisions with real-time analytics",
    "Scale your business across multiple companies",
    "Improve customer satisfaction with integrated CRM",
    "Boost online sales with AI-powered e-commerce tools",
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Transform Your Business Operations
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join thousands of companies that have revolutionized their
              operations with OnTarget Smart AI ERP.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg text-white">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                alt="Business Analytics Dashboard"
                width={600}
                height={400}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits02;
