"use client";

import React, { useState } from "react";

export const CreateCustomerLandingContent = () => {
  const [formData, setFormData] = useState({
    heroTitle: "",
    heroDescription: "",
    cta1: "",
    cta2: "",
    pinned: [
      { name: "", description: "" },
      { name: "", description: "" },
      { name: "", description: "" },
    ],
    testimonialSection: {
      title: "",
      description: "",
    },
    testimonials: [
      { author: "", text: "" },
      { author: "", text: "" },
    ],
    contactSection: {
      title: "",
      description: "",
    },
  });

  const handleChange = (path: string[], value: unknown) => {
    setFormData((prev) => {
      const updated: Record<string, unknown> = { ...prev };
      let ref: Record<string, unknown> = updated;
      for (let i = 0; i < path.length - 1; i++) {
        ref = ref[path[i]] as Record<string, unknown>;
      }
      ref[path[path.length - 1]] = value;
      return updated as typeof prev;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //console.log(JSON.stringify(formData, null, 2));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Hero Section */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Hero Section</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Hero Title</label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full"
            value={formData.heroTitle}
            onChange={(e) => handleChange(["heroTitle"], e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Hero Description
          </label>
          <textarea
            className="border border-gray-300 p-2 w-full"
            value={formData.heroDescription}
            onChange={(e) => handleChange(["heroDescription"], e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Call to Action 1
          </label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full"
            value={formData.cta1}
            onChange={(e) => handleChange(["cta1"], e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Call to Action 2
          </label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full"
            value={formData.cta2}
            onChange={(e) => handleChange(["cta2"], e.target.value)}
          />
        </div>
      </div>

      {/* Pinned Products/Services */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Pinned Products/Services</h3>
        {formData.pinned.map((item, index) => (
          <div key={index} className="mb-4 space-y-2">
            <label className="block text-sm font-medium">
              Product/Service {index + 1} Name
            </label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full"
              value={item.name}
              onChange={(e) => {
                const updated = [...formData.pinned];
                updated[index].name = e.target.value;
                handleChange(["pinned"], updated);
              }}
            />
            <label className="block text-sm font-medium">
              Product/Service {index + 1} Description
            </label>
            <textarea
              className="border border-gray-300 p-2 w-full"
              value={item.description}
              onChange={(e) => {
                const updated = [...formData.pinned];
                updated[index].description = e.target.value;
                handleChange(["pinned"], updated);
              }}
            />
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Testimonials Section</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Section Title
          </label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full"
            value={formData.testimonialSection.title}
            onChange={(e) =>
              handleChange(["testimonialSection", "title"], e.target.value)
            }
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Section Description
          </label>
          <textarea
            className="border border-gray-300 p-2 w-full"
            value={formData.testimonialSection.description}
            onChange={(e) =>
              handleChange(
                ["testimonialSection", "description"],
                e.target.value
              )
            }
          />
        </div>

        {formData.testimonials.map((testimonial, index) => (
          <div key={index} className="mb-4 space-y-2">
            <label className="block text-sm font-medium">
              Testimonial {index + 1} Author
            </label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full"
              value={testimonial.author}
              onChange={(e) => {
                const updated = [...formData.testimonials];
                updated[index].author = e.target.value;
                handleChange(["testimonials"], updated);
              }}
            />
            <label className="block text-sm font-medium">
              Testimonial {index + 1} Text
            </label>
            <textarea
              className="border border-gray-300 p-2 w-full"
              value={testimonial.text}
              onChange={(e) => {
                const updated = [...formData.testimonials];
                updated[index].text = e.target.value;
                handleChange(["testimonials"], updated);
              }}
            />
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Contact Section</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Section Title
          </label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full"
            value={formData.contactSection.title}
            onChange={(e) =>
              handleChange(["contactSection", "title"], e.target.value)
            }
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Section Description
          </label>
          <textarea
            className="border border-gray-300 p-2 w-full"
            value={formData.contactSection.description}
            onChange={(e) =>
              handleChange(["contactSection", "description"], e.target.value)
            }
          />
        </div>
      </div>

      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Save Changes
      </button>
    </form>
  );
};
