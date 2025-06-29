import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Settings as SettingsIcon,
  Bell,
  Shield,
  Database,
  Mail,
  Globe,
  CreditCard,
  Users,
  Package,
} from "lucide-react";

export const Settings = () => {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">
            Manage your ERP system configuration
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Settings Navigation */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Settings Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                { icon: SettingsIcon, label: "General", active: true },
                { icon: Bell, label: "Notifications" },
                { icon: Shield, label: "Security" },
                { icon: Users, label: "User Management" },
                { icon: Package, label: "Inventory" },
                { icon: CreditCard, label: "Billing & Payments" },
                { icon: Mail, label: "Email Templates" },
                { icon: Database, label: "Data & Backup" },
                { icon: Globe, label: "API & Integrations" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors text-left ${
                      item.active
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* General Settings */}
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" defaultValue="Acme Corporation" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-email">Company Email</Label>
                  <Input
                    id="company-email"
                    type="email"
                    defaultValue="admin@acme.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company-address">Company Address</Label>
                <Input
                  id="company-address"
                  defaultValue="123 Business St, City, State 12345"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <select
                    id="timezone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>UTC-8 (Pacific Time)</option>
                    <option>UTC-5 (Eastern Time)</option>
                    <option>UTC+0 (GMT)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Default Currency</Label>
                  <select
                    id="currency"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                    <option>GBP (£)</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                {
                  id: "email-orders",
                  label: "Email notifications for new orders",
                  defaultChecked: true,
                },
                {
                  id: "email-inventory",
                  label: "Low inventory alerts",
                  defaultChecked: true,
                },
                {
                  id: "email-reports",
                  label: "Daily/Weekly reports",
                  defaultChecked: false,
                },
                {
                  id: "push-notifications",
                  label: "Browser push notifications",
                  defaultChecked: true,
                },
              ].map((setting) => (
                <div
                  key={setting.id}
                  className="flex items-center justify-between"
                >
                  <div className="space-y-0.5">
                    <Label htmlFor={setting.id}>{setting.label}</Label>
                  </div>
                  <Switch
                    id={setting.id}
                    defaultChecked={setting.defaultChecked}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Security & Access</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-gray-600">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-800">Enabled</Badge>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Password Requirements</h4>
                <div className="space-y-3">
                  {[
                    { label: "Minimum 8 characters", enabled: true },
                    { label: "Require uppercase letters", enabled: true },
                    { label: "Require numbers", enabled: true },
                    { label: "Require special characters", enabled: false },
                  ].map((req, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm">{req.label}</span>
                      <Switch defaultChecked={req.enabled} />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Status */}
          <Card>
            <CardHeader>
              <CardTitle>System Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { service: "Database", status: "operational", uptime: "99.9%" },
                {
                  service: "Payment Gateway",
                  status: "operational",
                  uptime: "99.8%",
                },
                {
                  service: "Email Service",
                  status: "operational",
                  uptime: "99.5%",
                },
                {
                  service: "Backup System",
                  status: "maintenance",
                  uptime: "95.2%",
                },
              ].map((item) => (
                <div
                  key={item.service}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        item.status === "operational"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    />
                    <span className="font-medium">{item.service}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge
                      variant={
                        item.status === "operational" ? "default" : "secondary"
                      }
                    >
                      {item.status}
                    </Badge>
                    <span className="text-sm text-gray-600">
                      {item.uptime} uptime
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
