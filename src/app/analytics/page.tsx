"use client";

import { TopBar } from "@/components/layout/TopBar";
import { BarChart3, TrendingUp, Users, Eye, Heart, Share2 } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const performanceData = [
  { name: "Mon", views: 4000, likes: 240, shares: 45 },
  { name: "Tue", views: 3000, likes: 139, shares: 22 },
  { name: "Wed", views: 2000, likes: 980, shares: 120 },
  { name: "Thu", views: 2780, likes: 390, shares: 55 },
  { name: "Fri", views: 1890, likes: 480, shares: 60 },
  { name: "Sat", views: 2390, likes: 380, shares: 40 },
  { name: "Sun", views: 3490, likes: 430, shares: 80 },
];

const themePerformance = [
  { name: "Glass Panel Dark", engagement: 8.5 },
  { name: "Spatial Depth", engagement: 7.2 },
  { name: "Midnight Luxe", engagement: 6.8 },
  { name: "Neon Tube", engagement: 6.1 },
  { name: "Corporate Blue", engagement: 3.4 },
];

export default function AnalyticsPage() {
  return (
    <div className="h-full flex flex-col">
      <TopBar />
      <main className="flex-1 overflow-y-auto p-6 max-w-5xl mx-auto w-full">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-accent" />
              Analytics & Insights
            </h1>
            <p className="text-muted-foreground mt-1 text-sm">
              Track your carousel performance and discover what resonates.
            </p>
          </div>
          <select className="bg-surface border border-border rounded-md px-3 py-1.5 text-sm">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>All Time</option>
          </select>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-surface border border-border p-4 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Total Views</span>
              <Eye className="h-4 w-4 text-accent" />
            </div>
            <div className="text-2xl font-bold">19,550</div>
            <div className="text-xs text-green-500 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" /> +14.5%
            </div>
          </div>
          
          <div className="bg-surface border border-border p-4 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Total Likes</span>
              <Heart className="h-4 w-4 text-pink-500" />
            </div>
            <div className="text-2xl font-bold">3,039</div>
            <div className="text-xs text-green-500 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" /> +22.1%
            </div>
          </div>
          
          <div className="bg-surface border border-border p-4 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Total Shares</span>
              <Share2 className="h-4 w-4 text-blue-500" />
            </div>
            <div className="text-2xl font-bold">422</div>
            <div className="text-xs text-green-500 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" /> +8.2%
            </div>
          </div>

          <div className="bg-surface border border-border p-4 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Followers Gained</span>
              <Users className="h-4 w-4 text-orange-500" />
            </div>
            <div className="text-2xl font-bold">185</div>
            <div className="text-xs text-green-500 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" /> +12.4%
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-surface border border-border p-5 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-4">Engagement Overview</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.2} />
                  <XAxis dataKey="name" stroke="#888" fontSize={12} />
                  <YAxis stroke="#888" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }}
                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Line type="monotone" dataKey="views" stroke="#0ea5e9" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="likes" stroke="#ec4899" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Theme Performance */}
          <div className="bg-surface border border-border p-5 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-4 text-sm flex items-center gap-2">
              Top Performing Themes
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={themePerformance} layout="vertical" margin={{ left: 30, right: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#333" opacity={0.1} />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" stroke="#888" fontSize={11} width={80} />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }}
                  />
                  <Bar dataKey="engagement" fill="#8b5cf6" radius={[0, 4, 4, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Engagement rate (%) by Theme
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}
