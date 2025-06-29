import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  Bot,
  Search,
  FileText,
  Target,
  TrendingUp,
  Globe,
  Zap,
  Settings,
  CheckCircle,
  AlertCircle,
  Brain,
  Sparkles,
} from "lucide-react";

export const AIContentSEO = () => {
  const contentSuggestions = [
    { title: "Product Descriptions", status: "ready", count: 12 },
    { title: "Blog Post Ideas", status: "generating", count: 8 },
    { title: "Social Media Posts", status: "ready", count: 25 },
    { title: "Email Templates", status: "ready", count: 6 },
  ];

  const seoMetrics = [
    { metric: "SEO Score", value: "87/100", trend: "up" },
    { metric: "Keywords Ranking", value: "45", trend: "up" },
    { metric: "Content Quality", value: "92%", trend: "stable" },
    { metric: "Page Speed", value: "94", trend: "up" },
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AI Content & SEO</h1>
          <p className="text-gray-600 mt-1">
            AI-powered content creation and SEO optimization
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="flex items-center space-x-2">
            <Settings className="w-4 h-4" />
            <span>AI Settings</span>
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 flex items-center space-x-2">
            <Sparkles className="w-4 h-4" />
            <span>Generate Content</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* AI Content Generation */}
        <div className="lg:col-span-2 space-y-6">
          {/* Content Generator */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bot className="w-5 h-5 text-blue-600" />
                <span>AI Content Generator</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="content-type">Content Type</Label>
                  <select
                    id="content-type"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Product Description</option>
                    <option>Blog Post</option>
                    <option>Social Media Post</option>
                    <option>Email Template</option>
                    <option>Meta Description</option>
                    <option>Landing Page Copy</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tone">Tone & Style</Label>
                  <select
                    id="tone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Professional</option>
                    <option>Casual</option>
                    <option>Friendly</option>
                    <option>Formal</option>
                    <option>Creative</option>
                    <option>Technical</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content-prompt">Content Brief</Label>
                <Textarea
                  id="content-prompt"
                  placeholder="Describe what you want to create. Include key points, target audience, and specific requirements..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="keywords">Target Keywords</Label>
                  <Input
                    id="keywords"
                    placeholder="keyword1, keyword2, keyword3"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="word-count">Word Count</Label>
                  <select
                    id="word-count"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Short (50-150 words)</option>
                    <option>Medium (150-500 words)</option>
                    <option>Long (500-1000 words)</option>
                    <option>Extended (1000+ words)</option>
                  </select>
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Generate Content with AI
              </Button>
            </CardContent>
          </Card>

          {/* Content Suggestions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-green-600" />
                <span>Generated Content</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contentSuggestions.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          item.status === "ready"
                            ? "bg-green-500"
                            : item.status === "generating"
                            ? "bg-yellow-500"
                            : "bg-gray-300"
                        }`}
                      />
                      <span className="font-medium">{item.title}</span>
                      <Badge variant="secondary">{item.count} items</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      {item.status === "ready" && (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      )}
                      {item.status === "generating" && (
                        <AlertCircle className="w-4 h-4 text-yellow-500" />
                      )}
                      <Button variant="outline" size="sm">
                        {item.status === "ready" ? "View" : "Check Status"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* SEO Optimization */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="w-5 h-5 text-purple-600" />
                <span>SEO Optimization</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">SEO Analysis</h4>
                  {seoMetrics.map((metric, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm text-gray-600">
                        {metric.metric}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{metric.value}</span>
                        <TrendingUp
                          className={`w-4 h-4 ${
                            metric.trend === "up"
                              ? "text-green-500"
                              : metric.trend === "down"
                              ? "text-red-500"
                              : "text-gray-400"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Quick Actions</h4>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Target className="w-4 h-4 mr-2" />
                      Keyword Research
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      Content Audit
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Globe className="w-4 h-4 mr-2" />
                      Site Speed Check
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Settings & Configuration */}
        <div className="space-y-6">
          {/* AI Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-indigo-600" />
                <span>AI Configuration</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>AI Content Generation</Label>
                    <p className="text-xs text-gray-600">
                      Enable AI-powered content creation
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Auto SEO Optimization</Label>
                    <p className="text-xs text-gray-600">
                      Automatically optimize content for SEO
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Content Scheduling</Label>
                    <p className="text-xs text-gray-600">
                      Schedule content publication
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Smart Suggestions</Label>
                    <p className="text-xs text-gray-600">
                      Get AI-powered content suggestions
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="ai-model">AI Model</Label>
                <select
                  id="ai-model"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>GPT-4 (Premium)</option>
                  <option>GPT-3.5 (Standard)</option>
                  <option>Claude (Alternative)</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="creativity">Creativity Level</Label>
                <select
                  id="creativity"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Conservative</option>
                  <option>Balanced</option>
                  <option>Creative</option>
                  <option>Experimental</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Usage Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Usage Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Content Generated</span>
                  <span className="font-medium">847 this month</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "67%" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>AI Credits Used</span>
                  <span className="font-medium">2,340 / 5,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: "47%" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>SEO Score Improvement</span>
                  <span className="font-medium text-green-600">+23%</span>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <Zap className="w-4 h-4 mr-2" />
                Upgrade Plan
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
