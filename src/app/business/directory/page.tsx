// app/business-directory/page.tsx

"use client";

import React from "react";
import { faker } from "@faker-js/faker";

type Business = {
  id: string;
  name: string;
  logoUrl: string;
  description: string;
  category: string;
  website: string;
  location: string;
};

const categories = [
  "Food & Beverage",
  "Marketing",
  "Auto Services",
  "Technology",
  "Home Services",
  "Retail",
];

function generateFakeBusinesses(count = 18): Business[] {
  return Array.from({ length: count }).map(() => ({
    id: faker.string.uuid(),
    name: faker.company.name(),
    logoUrl: faker.image.avatar(),
    description: faker.company.catchPhrase(),
    category: faker.helpers.arrayElement(categories),
    website: faker.internet.url(),
    location: `${faker.location.city()}, ${faker.location.state()}`,
  }));
}

const businesses = generateFakeBusinesses();

const grouped = businesses.reduce((acc, biz) => {
  if (!acc[biz.category]) acc[biz.category] = [];
  acc[biz.category].push(biz);
  return acc;
}, {} as Record<string, Business[]>);

export default function BusinessDirectoryPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">
        🏢 OnTarget Business Directory
      </h1>
      <p className="text-center text-gray-500 mb-12 text-md max-w-xl mx-auto">
        Explore real businesses powered by the OnTarget ERP platform — organized
        by industry category.
      </p>

      <div className="space-y-16">
        {Object.entries(grouped).map(([category, group]) => (
          <section key={category}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {group.map((biz) => (
                <div
                  key={biz.id}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition p-6 flex flex-col justify-between"
                >
                  <div>
                    <img
                      src={biz.logoUrl}
                      alt={biz.name}
                      className="h-12 w-12 rounded-full object-cover mb-4"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {biz.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {biz.description}
                    </p>
                    <p className="text-xs text-gray-400">{biz.location}</p>
                  </div>
                  <div className="mt-4">
                    <a
                      href={biz.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm hover:underline"
                    >
                      Visit Website →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
