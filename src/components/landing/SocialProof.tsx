import React from "react";
import { Star } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Industries",
      role: "CEO",
      content:
        "OnTarget Smart AI ERP transformed our multi-company operations. The AI-powered insights have increased our efficiency by 45%.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Global Retail Solutions",
      role: "Operations Director",
      content:
        "The integrated online store builder with AI content generation saved us months of development time. Outstanding platform!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Manufacturing Plus",
      role: "CFO",
      content:
        "Financial management and inventory control features are exceptional. Real-time reporting has revolutionized our decision-making.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600">
            See what our customers are saying about OnTarget Smart AI ERP
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
