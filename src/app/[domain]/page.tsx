import { notFound } from "next/navigation";
import subdomains from "@/subdomains.json";

export default async function DomainPage({
  params,
}: {
  params: Promise<{ domain: string }>;
}) {
  const resolvedParams = await params;
  const isKnown = subdomains.some((d) => d.subdomain === resolvedParams.domain);
  if (!isKnown) {
    notFound(); // triggers Next.js 404
  }

  return (
    <>
      <main className="min-h-screen bg-white text-gray-900">
        {/* Hero */}
        <section
          id="hero"
          className="bg-gray-50 py-24 px-6 text-center min-h-[80vh] flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl font-bold sm:text-5xl">
            Welcome to,{" "}
            <span className="text-sky-600 capitalize">
              {resolvedParams.domain}
            </span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-lg text-gray-600">
            company slogan from db and/or taglines go here.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="/signup"
              className="px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800"
            >
              Call to Action 1
            </a>
            <a
              href="#features"
              className="px-6 py-3 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-100"
            >
              Call to Action 2
            </a>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Pinned Product/Service 1
              </h3>
              <p className="text-gray-600">
                from db details on product or service 1 that is pinned.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Pinned Product/Service 2
              </h3>
              <p className="text-gray-600">
                from db details on product or service 2 that is pinned.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Pinned Product/Service 3
              </h3>
              <p className="text-gray-600">
                from db details on product or service 3 that is pinned.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 py-20 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 mb-8">
            We will automate collection of reviews for our ERP customers
          </p>
          <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700 italic">
                “OnTarget streamlined our operations. We spend less time on
                admin and more time growing the business.”
              </p>
              <p className="mt-4 font-semibold">
                — Olivia K., Marketing Agency
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700 italic">
                “Everything from CRM to invoicing in one place. It's a game
                changer.”
              </p>
              <p className="mt-4 font-semibold">— Raj P., Consulting Firm</p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-6 bg-white text-center">
          <h2 className="text-3xl font-bold mb-8">Simple Pricing</h2>
          <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "$29/mo",
                features: ["1 Admin", "Up to 10 Projects", "Basic CRM"],
              },
              {
                name: "Growth",
                price: "$79/mo",
                features: [
                  "3 Admins",
                  "Unlimited Projects",
                  "Invoicing & Tasks",
                ],
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: [
                  "Unlimited Admins",
                  "Priority Support",
                  "Custom Setup",
                ],
              },
            ].map(({ name, price, features, highlight }) => (
              <div
                key={name}
                className={`border p-6 rounded-xl ${
                  highlight ? "bg-gray-50 border-black" : "bg-white"
                }`}
              >
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-3xl font-bold mb-4">{price}</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  {features.map((f) => (
                    <li key={f}>✓ {f}</li>
                  ))}
                </ul>
                <a
                  href="/signup"
                  className="inline-block px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                >
                  Choose Plan
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 px-6 bg-gray-50 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            Email us at{" "}
            <a
              href="mailto:support@ontargeterp.com"
              className="underline text-black"
            >
              support@{resolvedParams.domain}.com
            </a>{" "}
            or schedule a demo today.
          </p>
          <a
            href={`mailto:sales@${resolvedParams.domain}.com`}
            className="px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800"
          >
            Book a Demo
          </a>
        </section>
      </main>
    </>
  );
}
