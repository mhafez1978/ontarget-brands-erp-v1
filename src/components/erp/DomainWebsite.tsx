import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  Globe,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Copy,
  Eye,
  Zap,
  Shield,
  BarChart3,
  Palette,
  ShoppingCart,
} from "lucide-react";

export const DomainWebsite = () => {
  const domainStatus = {
    connected: true,
    domain: "mycompany.com",
    ssl: true,
    dns: "configured",
  };

  const websiteStats = [
    { label: "Monthly Visitors", value: "12,485", change: "+18%" },
    { label: "Page Views", value: "43,290", change: "+25%" },
    { label: "Bounce Rate", value: "32%", change: "-8%" },
    { label: "Conversion Rate", value: "3.2%", change: "+12%" },
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Domain & Website</h1>
          <p className="text-gray-600 mt-1">
            Manage your public website and domain configuration
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="flex items-center space-x-2">
            <Eye className="w-4 h-4" />
            <span>Preview Site</span>
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 flex items-center space-x-2">
            <Globe className="w-4 h-4" />
            <span>Launch Website</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Domain Configuration */}
        <div className="lg:col-span-2 space-y-6">
          {/* Domain Setup */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-blue-600" />
                <span>Domain Configuration</span>
                {domainStatus.connected && (
                  <Badge className="bg-green-100 text-green-800">
                    Connected
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="domain">Your Domain</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="domain"
                      defaultValue={domainStatus.domain}
                      placeholder="yourdomain.com"
                    />
                    <Button variant="outline">
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span className="font-medium">SSL Certificate</span>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                      Your site is secured with HTTPS
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="font-medium">DNS Status</span>
                      <Badge variant="secondary">Configured</Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                      DNS records are properly set
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">DNS Configuration</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-medium">A Record</span>
                      <p className="text-sm text-gray-600">192.168.1.100</p>
                    </div>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-medium">CNAME Record</span>
                      <p className="text-sm text-gray-600">www.mycompany.com</p>
                    </div>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-medium">MX Record</span>
                      <p className="text-sm text-gray-600">
                        mail.mycompany.com
                      </p>
                    </div>
                    <AlertCircle className="w-4 h-4 text-yellow-500" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Website Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Palette className="w-5 h-5 text-purple-600" />
                <span>Website Configuration</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="site-title">Site Title</Label>
                  <Input id="site-title" defaultValue="My Company Store" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site-tagline">Tagline</Label>
                  <Input
                    id="site-tagline"
                    defaultValue="Quality products for everyone"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="site-description">Site Description</Label>
                <Input
                  id="site-description"
                  defaultValue="We provide high-quality products and exceptional service to customers worldwide."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="theme">Website Theme</Label>
                  <select
                    id="theme"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Modern Business</option>
                    <option>E-commerce Classic</option>
                    <option>Minimalist</option>
                    <option>Corporate</option>
                    <option>Creative</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="color-scheme">Color Scheme</Label>
                  <select
                    id="color-scheme"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Blue & White</option>
                    <option>Green & Gray</option>
                    <option>Purple & Black</option>
                    <option>Custom Colors</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Online Store</Label>
                      <p className="text-xs text-gray-600">
                        Enable e-commerce functionality
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Customer Accounts</Label>
                      <p className="text-xs text-gray-600">
                        Allow customer registration
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Live Chat</Label>
                      <p className="text-xs text-gray-600">
                        Customer support chat
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Blog Section</Label>
                      <p className="text-xs text-gray-600">
                        Content management
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Website Analytics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-green-600" />
                <span>Website Analytics</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {websiteStats.map((stat, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                    <div
                      className={`text-xs font-medium ${
                        stat.change.startsWith("+")
                          ? "text-green-600"
                          : stat.change.startsWith("-")
                          ? "text-red-600"
                          : "text-gray-600"
                      }`}
                    >
                      {stat.change} from last month
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions & Status */}
        <div className="space-y-6">
          {/* Website Status */}
          <Card>
            <CardHeader>
              <CardTitle>Website Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Website Status</span>
                <Badge className="bg-green-100 text-green-800">Live</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Last Updated</span>
                <span className="text-sm font-medium">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Uptime</span>
                <span className="text-sm font-medium">99.9%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Page Speed</span>
                <span className="text-sm font-medium">95/100</span>
              </div>

              <Separator />

              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Eye className="w-4 h-4 mr-2" />
                  View Live Site
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in New Tab
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Setup */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Setup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Domain Connected</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">SSL Certificate</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">Email Setup</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Setup
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Analytics</span>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Configure Store
              </Button>
            </CardContent>
          </Card>

          {/* Domain Management */}
          <Card>
            <CardHeader>
              <CardTitle>Domain Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Current Plan</Label>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Professional</span>
                  <Badge variant="secondary">Active</Badge>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Domain Renewal</Label>
                <span className="text-sm text-gray-600">
                  Expires: Dec 15, 2024
                </span>
              </div>

              <Button variant="outline" className="w-full">
                <Zap className="w-4 h-4 mr-2" />
                Manage Billing
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
