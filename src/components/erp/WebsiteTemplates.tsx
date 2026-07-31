"use client";

import { useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Palette,
  Store,
  Briefcase,
  Camera,
  Utensils,
  Heart,
  Wrench,
  Eye,
  Check,
  Settings,
} from "lucide-react";

interface Template {
  id: string;
  name: string;
  category:
    | "ecommerce"
    | "business"
    | "portfolio"
    | "restaurant"
    | "health"
    | "services"
    | "education";
  description: string;
  features: string[];
  preview: string;
  icon: React.ElementType;
  price: "free" | "premium";
}

const templates: Template[] = [
  {
    id: "modern-store",
    name: "Modern Store",
    category: "ecommerce",
    description:
      "Clean and modern e-commerce template with product catalog and shopping cart",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Payment Integration",
      "Inventory Sync",
    ],
    preview: "/api/placeholder/400/300",
    icon: Store,
    price: "free",
  },
  {
    id: "business-pro",
    name: "Business Pro",
    category: "business",
    description:
      "Professional business template with services showcase and contact forms",
    features: [
      "Service Pages",
      "Contact Forms",
      "Team Showcase",
      "Testimonials",
    ],
    preview: "/api/placeholder/400/300",
    icon: Briefcase,
    price: "premium",
  },
  {
    id: "portfolio-creative",
    name: "Creative Portfolio",
    category: "portfolio",
    description: "Stunning portfolio template for creative professionals",
    features: ["Gallery", "Project Showcase", "About Section", "Contact Form"],
    preview: "/api/placeholder/400/300",
    icon: Camera,
    price: "free",
  },
  {
    id: "restaurant-deluxe",
    name: "Restaurant Deluxe",
    category: "restaurant",
    description:
      "Beautiful restaurant template with menu and reservation system",
    features: ["Digital Menu", "Reservations", "Gallery", "Location Map"],
    preview: "/api/placeholder/400/300",
    icon: Utensils,
    price: "premium",
  },
  {
    id: "health-care",
    name: "Health Care",
    category: "health",
    description: "Medical and healthcare template with appointment booking",
    features: [
      "Appointment Booking",
      "Service Pages",
      "Doctor Profiles",
      "Contact Forms",
    ],
    preview: "/api/placeholder/400/300",
    icon: Heart,
    price: "premium",
  },
  {
    id: "service-master",
    name: "Service Master",
    category: "services",
    description: "Service-based business template with booking and quotes",
    features: ["Service Booking", "Quote Requests", "Portfolio", "Reviews"],
    preview: "/api/placeholder/400/300",
    icon: Wrench,
    price: "free",
  },
];

export const WebsiteTemplates = () => {
  const selectedTemplateRef = useRef<string | null>(null);
  const [activeTemplate, setActiveTemplate] = useState<string>("modern-store");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { value: "all", label: "All Templates" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "business", label: "Business" },
    { value: "portfolio", label: "Portfolio" },
    { value: "restaurant", label: "Restaurant" },
    { value: "health", label: "Healthcare" },
    { value: "services", label: "Services" },
    { value: "education", label: "Education" },
  ];

  const filteredTemplates = templates.filter((template) => {
    const matchesCategory =
      filterCategory === "all" || template.category === filterCategory;
    const matchesSearch =
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSelectTemplate = (templateId: string) => {
    setActiveTemplate(templateId);
  };

  const handleCustomizeTemplate = (templateId: string) => {
    selectedTemplateRef.current = templateId;
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Website Templates
          </h1>
          <p className="text-gray-600 mt-2">
            Choose and customize templates for your public website
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            Preview Live Site
          </Button>
          <Button>
            <Settings className="w-4 h-4 mr-2" />
            Template Settings
          </Button>
        </div>
      </div>

      {/* Current Active Template */}
      <Card className="border-2 border-blue-200 bg-blue-50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">
                Currently Active Template
              </CardTitle>
              <CardDescription>
                This template is live on your website
              </CardDescription>
            </div>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
              <Check className="w-3 h-3 mr-1" />
              Active
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          {(() => {
            const active = templates.find((t) => t.id === activeTemplate);
            const Icon = active?.icon || Store;
            return (
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white rounded-lg">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{active?.name}</h3>
                  <p className="text-gray-600">{active?.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {active?.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={() => handleCustomizeTemplate(activeTemplate)}
                >
                  Customize
                </Button>
              </div>
            );
          })()}
        </CardContent>
      </Card>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Label htmlFor="search">Search Templates</Label>
          <Input
            id="search"
            placeholder="Search by name or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-1"
          />
        </div>
        <div className="sm:w-48">
          <Label htmlFor="category">Filter by Category</Label>
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Template Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => {
          const Icon = template.icon;
          const isActive = template.id === activeTemplate;

          return (
            <Card
              key={template.id}
              className={`relative overflow-hidden transition-all hover:shadow-lg ${
                isActive ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {template.price === "premium" && (
                <Badge className="absolute top-3 right-3 z-10 bg-amber-500 hover:bg-amber-600">
                  Premium
                </Badge>
              )}
              {isActive && (
                <Badge className="absolute top-3 left-3 z-10 bg-green-500 hover:bg-green-600">
                  <Check className="w-3 h-3 mr-1" />
                  Active
                </Badge>
              )}

              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <Icon className="w-16 h-16 text-gray-400" />
              </div>

              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <Badge variant="outline" className="text-xs capitalize">
                    {template.category}
                  </Badge>
                </div>
                <CardDescription className="text-sm">
                  {template.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {template.features.slice(0, 3).map((feature, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                    {template.features.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{template.features.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="w-4 h-4 mr-1" />
                          Preview
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <DialogHeader>
                          <DialogTitle>{template.name} Preview</DialogTitle>
                          <DialogDescription>
                            Preview of the {template.name} template
                          </DialogDescription>
                        </DialogHeader>
                        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-24 h-24 text-gray-400" />
                        </div>
                      </DialogContent>
                    </Dialog>

                    {!isActive ? (
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() => handleSelectTemplate(template.id)}
                      >
                        <Palette className="w-4 h-4 mr-1" />
                        Use Template
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => handleCustomizeTemplate(template.id)}
                      >
                        <Settings className="w-4 h-4 mr-1" />
                        Customize
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <Palette className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No templates found
          </h3>
          <p className="text-gray-500">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
    </div>
  );
};
