"use client";

import { TopBar } from "@/components/layout/TopBar";
import { Calendar as CalendarIcon, Clock, Share2, Camera, BookOpen, CheckCircle2 } from "lucide-react";

export default function CalendarPage() {
  // Mock data for the calendar UI with static dates to keep render pure
  const scheduledPosts = [
    {
      id: "1",
      date: "7/1/2026",
      time: "10:00 AM",
      platform: "LinkedIn",
      title: "5 Tips for Remote Work (PDF Carousel)",
      status: "Scheduled",
      icon: <BookOpen className="h-4 w-4 text-blue-600" />,
    },
    {
      id: "2",
      date: "7/2/2026",
      time: "02:30 PM",
      platform: "Instagram",
      title: "UI Design Trends 2026",
      status: "Scheduled",
      icon: <Camera className="h-4 w-4 text-pink-600" />,
    },
    {
      id: "3",
      date: "6/29/2026",
      time: "09:15 AM",
      platform: "LinkedIn",
      title: "My Journey to $10k MRR",
      status: "Published",
      icon: <CheckCircle2 className="h-4 w-4 text-green-500" />,
    }
  ];

  return (
    <div className="h-full flex flex-col">
      <TopBar />
      <main className="flex-1 overflow-y-auto p-6 max-w-5xl mx-auto w-full">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <CalendarIcon className="h-6 w-6 text-accent" />
              Content Calendar
            </h1>
            <p className="text-muted-foreground mt-1 text-sm">
              Schedule and manage your social media publications
            </p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-accent text-white rounded-md text-sm font-medium hover:bg-accent/90 transition-colors flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              Connect Accounts
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="bg-surface border border-border rounded-xl p-6 shadow-sm min-h-[400px] flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <CalendarIcon className="h-12 w-12 mx-auto mb-3 opacity-20" />
                <p>Full visual calendar view coming soon.</p>
                <p className="text-xs mt-1">Powered by React Big Calendar or FullCalendar.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg border-b border-border pb-2">Upcoming & Recent</h3>
            {scheduledPosts.map((post) => (
              <div key={post.id} className="bg-surface border border-border p-4 rounded-lg hover:border-accent/50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-1.5">
                    {post.icon}
                    <span className="text-xs font-semibold">{post.platform}</span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${post.status === 'Published' ? 'bg-green-500/10 text-green-500' : 'bg-blue-500/10 text-blue-500'}`}>
                    {post.status}
                  </span>
                </div>
                <h4 className="font-medium text-sm truncate">{post.title}</h4>
                <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <CalendarIcon className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
