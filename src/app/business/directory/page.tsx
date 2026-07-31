// app/business-directory/page.tsx
//
// Placeholder directory. This previously generated its rows with faker at
// module scope inside a "use client" component, so the server and client
// produced different data on every render and React reported a hydration
// mismatch. The data is now static and the page renders on the server.

import React from "react";

type Business = {
  id: string;
  name: string;
  initials: string;
  description: string;
  category: string;
  website: string;
  location: string;
};

const businesses: Business[] = [
  {
    id: "fb-01",
    name: "Harborline Coffee Roasters",
    initials: "HC",
    description: "Small-batch roasting for cafés and offices.",
    category: "Food & Beverage",
    website: "https://example.com/harborline",
    location: "Portland, Maine",
  },
  {
    id: "fb-02",
    name: "Cedar & Salt Provisions",
    initials: "CS",
    description: "Regional pantry goods and wholesale catering.",
    category: "Food & Beverage",
    website: "https://example.com/cedar-salt",
    location: "Savannah, Georgia",
  },
  {
    id: "fb-03",
    name: "Northfield Bakehouse",
    initials: "NB",
    description: "Daily breads and pastries for local grocers.",
    category: "Food & Beverage",
    website: "https://example.com/northfield",
    location: "Madison, Wisconsin",
  },
  {
    id: "mk-01",
    name: "Bright Anchor Marketing",
    initials: "BA",
    description: "Brand strategy and campaign management.",
    category: "Marketing",
    website: "https://example.com/bright-anchor",
    location: "Austin, Texas",
  },
  {
    id: "mk-02",
    name: "Quarry Creative Group",
    initials: "QC",
    description: "Content production for regional retailers.",
    category: "Marketing",
    website: "https://example.com/quarry",
    location: "Denver, Colorado",
  },
  {
    id: "mk-03",
    name: "Signal & Story",
    initials: "SS",
    description: "Analytics-led media buying for growing brands.",
    category: "Marketing",
    website: "https://example.com/signal-story",
    location: "Nashville, Tennessee",
  },
  {
    id: "au-01",
    name: "Ridgeway Auto Works",
    initials: "RA",
    description: "Fleet maintenance and commercial servicing.",
    category: "Auto Services",
    website: "https://example.com/ridgeway",
    location: "Columbus, Ohio",
  },
  {
    id: "au-02",
    name: "Summit Collision Center",
    initials: "SC",
    description: "Certified body repair and refinishing.",
    category: "Auto Services",
    website: "https://example.com/summit-collision",
    location: "Boise, Idaho",
  },
  {
    id: "au-03",
    name: "Fairmount Tire & Service",
    initials: "FT",
    description: "Tire supply and scheduled maintenance.",
    category: "Auto Services",
    website: "https://example.com/fairmount",
    location: "Richmond, Virginia",
  },
  {
    id: "tc-01",
    name: "Lattice Systems",
    initials: "LS",
    description: "Managed infrastructure for mid-market teams.",
    category: "Technology",
    website: "https://example.com/lattice",
    location: "Raleigh, North Carolina",
  },
  {
    id: "tc-02",
    name: "Bluepoint Data",
    initials: "BD",
    description: "Reporting pipelines and warehouse migrations.",
    category: "Technology",
    website: "https://example.com/bluepoint",
    location: "Seattle, Washington",
  },
  {
    id: "tc-03",
    name: "Ironwood Software",
    initials: "IS",
    description: "Custom integrations for distribution networks.",
    category: "Technology",
    website: "https://example.com/ironwood",
    location: "Pittsburgh, Pennsylvania",
  },
  {
    id: "hs-01",
    name: "Copperfield Home Services",
    initials: "CH",
    description: "HVAC installation and preventative service plans.",
    category: "Home Services",
    website: "https://example.com/copperfield",
    location: "Kansas City, Missouri",
  },
  {
    id: "hs-02",
    name: "Talbot Electric",
    initials: "TE",
    description: "Residential and light commercial electrical work.",
    category: "Home Services",
    website: "https://example.com/talbot",
    location: "Charleston, South Carolina",
  },
  {
    id: "hs-03",
    name: "Meridian Landscaping",
    initials: "ML",
    description: "Grounds maintenance for property managers.",
    category: "Home Services",
    website: "https://example.com/meridian",
    location: "Scottsdale, Arizona",
  },
  {
    id: "rt-01",
    name: "Willow & Vine Home Goods",
    initials: "WV",
    description: "Independent home and gift retailer.",
    category: "Retail",
    website: "https://example.com/willow-vine",
    location: "Burlington, Vermont",
  },
  {
    id: "rt-02",
    name: "Anchor Point Outfitters",
    initials: "AP",
    description: "Outdoor equipment and seasonal rentals.",
    category: "Retail",
    website: "https://example.com/anchor-point",
    location: "Bend, Oregon",
  },
  {
    id: "rt-03",
    name: "Marchant Supply Co.",
    initials: "MS",
    description: "Workwear and jobsite supply for trades.",
    category: "Retail",
    website: "https://example.com/marchant",
    location: "Omaha, Nebraska",
  },
];

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
                    <div
                      aria-hidden="true"
                      className="h-12 w-12 rounded-full bg-blue-50 text-blue-700 font-semibold flex items-center justify-center mb-4"
                    >
                      {biz.initials}
                    </div>
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
