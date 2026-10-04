"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Modal } from "@/components/ui/Modal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import {
  LayoutDashboard,
  FileText,
  Users,
  CreditCard,
  FolderOpen,
  Bell,
  Settings,
  LogOut,
  Search,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Clock,
  Eye,
  Plus,
  Edit,
  Trash2,
  TrendingUp,
  ShieldCheck,
  Building2,
  Filter,
  ArrowUpDown,
  GraduationCap,
  Sparkles,
  UserCheck,
} from "lucide-react";

type AdminTab =
  | "dashboard"
  | "applications"
  | "students"
  | "payments"
  | "documents"
  | "notices"
  | "settings";

type StatusType = "Submitted" | "Under Review" | "Documents Required" | "Approved" | "Rejected";

interface ApplicationRecord {
  id: string;
  studentName: string;
  grade: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  address: string;
  date: string;
  paymentStatus: string;
  amount: string;
  paymentId: string;
  status: StatusType;
}

interface NoticeRecord {
  id: string;
  title: string;
  category: string;
  date: string;
  target: string;
  published: boolean;
}

const initialApplications: ApplicationRecord[] = [
  {
    id: "SCH-2027-000123",
    studentName: "Aarav Sharma",
    grade: "Class XI Science",
    parentName: "Vikram Sharma",
    parentPhone: "+91 98765 43210",
    parentEmail: "vikram.sharma@example.com",
    address: "Sector 18, Dwarka, New Delhi",
    date: "2026-10-04",
    paymentStatus: "Paid",
    amount: "₹500.00",
    paymentId: "PAY-2027-89102",
    status: "Under Review",
  },
  {
    id: "SCH-2027-000456",
    studentName: "Ananya Sen",
    grade: "Class I (Primary)",
    parentName: "Rohan Sen",
    parentPhone: "+91 98111 22334",
    parentEmail: "rohan.sen@example.com",
    address: "Vasant Kunj, New Delhi",
    date: "2026-09-28",
    paymentStatus: "Paid",
    amount: "₹500.00",
    paymentId: "PAY-2027-89103",
    status: "Approved",
  },
  {
    id: "SCH-2027-000789",
    studentName: "Rohan Verma",
    grade: "Class VI (Middle)",
    parentName: "Sunil Verma",
    parentPhone: "+91 99887 76655",
    parentEmail: "sunil.verma@example.com",
    address: "Janakpuri, New Delhi",
    date: "2026-10-01",
    paymentStatus: "Paid",
    amount: "₹500.00",
    paymentId: "PAY-2027-89104",
    status: "Documents Required",
  },
  {
    id: "SCH-2027-000999",
    studentName: "Vikram Malhotra",
    grade: "Class IX (Secondary)",
    parentName: "Sanjay Malhotra",
    parentPhone: "+91 98777 66554",
    parentEmail: "sanjay.m@example.com",
    address: "Saket, New Delhi",
    date: "2026-09-15",
    paymentStatus: "Paid",
    amount: "₹500.00",
    paymentId: "PAY-2027-89105",
    status: "Rejected",
  },
  {
    id: "SCH-2027-001020",
    studentName: "Kavya Iyer",
    grade: "Nursery",
    parentName: "Prakash Iyer",
    parentPhone: "+91 97111 88990",
    parentEmail: "prakash.iyer@example.com",
    address: "Greater Kailash, New Delhi",
    date: "2026-10-03",
    paymentStatus: "Paid",
    amount: "₹500.00",
    paymentId: "PAY-2027-89106",
    status: "Submitted",
  },
];

const initialNotices: NoticeRecord[] = [
  { id: "n-1", title: "CBSE Class X & XII Mid-Term Date Sheet 2026", category: "Exams", date: "Oct 02, 2026", target: "Students", published: true },
  { id: "n-2", title: "Admissions Entrance Assessment Schedule 2027-28", category: "Admissions", date: "Sep 28, 2026", target: "Applicants", published: true },
  { id: "n-3", title: "Inter-School Swimming Trials", category: "Sports", date: "Sep 25, 2026", target: "Cadets", published: true },
  { id: "n-4", title: "Dussehra & Autumn Break Holidays", category: "Holidays", date: "Sep 20, 2026", target: "All Staff", published: false },
];

export default function AdminDashboardPage({ defaultTab = "dashboard" }: { defaultTab?: AdminTab } = {}) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<AdminTab>(defaultTab);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  // Application State
  const [applications, setApplications] = useState<ApplicationRecord[]>(initialApplications);
  const [selectedApplication, setSelectedApplication] = useState<ApplicationRecord | null>(null);

  // Application Filters & Search
  const [appSearch, setAppSearch] = useState<string>("");
  const [appStatusFilter, setAppStatusFilter] = useState<string>("All");
  const [appSortField, setAppSortField] = useState<string>("date");

  // Notice State
  const [notices, setNotices] = useState<NoticeRecord[]>(initialNotices);
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState<boolean>(false);
  const [editingNotice, setEditingNotice] = useState<NoticeRecord | null>(null);
  const [noticeForm, setNoticeForm] = useState({ title: "", category: "Exams", target: "Students" });

  // Handle Application Status Change (Approve, Reject, Request Docs)
  const handleUpdateStatus = (appId: string, newStatus: StatusType) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === appId ? { ...app, status: newStatus } : app))
    );
    if (selectedApplication && selectedApplication.id === appId) {
      setSelectedApplication({ ...selectedApplication, status: newStatus });
    }
  };

  // Notice Management Handlers
  const handleSaveNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingNotice) {
      setNotices((prev) =>
        prev.map((n) =>
          n.id === editingNotice.id
            ? { ...n, title: noticeForm.title, category: noticeForm.category, target: noticeForm.target }
            : n
        )
      );
    } else {
      const newNotice: NoticeRecord = {
        id: `n-${Date.now()}`,
        title: noticeForm.title,
        category: noticeForm.category,
        date: "Today",
        target: noticeForm.target,
        published: true,
      };
      setNotices((prev) => [newNotice, ...prev]);
    }
    setIsNoticeModalOpen(false);
    setEditingNotice(null);
    setNoticeForm({ title: "", category: "Exams", target: "Students" });
  };

  const handleTogglePublish = (noticeId: string) => {
    setNotices((prev) =>
      prev.map((n) => (n.id === noticeId ? { ...n, published: !n.published } : n))
    );
  };

  const handleDeleteNotice = (noticeId: string) => {
    setNotices((prev) => prev.filter((n) => n.id !== noticeId));
  };

  const handleLogout = () => {
    router.push("/");
  };

  // Filtered Applications List
  const filteredApps = applications.filter((app) => {
    const matchesSearch =
      app.studentName.toLowerCase().includes(appSearch.toLowerCase()) ||
      app.id.toLowerCase().includes(appSearch.toLowerCase()) ||
      app.parentName.toLowerCase().includes(appSearch.toLowerCase());
    const matchesStatus = appStatusFilter === "All" || app.status === appStatusFilter;
    return matchesSearch && matchesStatus;
  });

  // Derived Stats
  const totalAppsCount = applications.length;
  const pendingCount = applications.filter((a) => a.status === "Under Review" || a.status === "Submitted" || a.status === "Documents Required").length;
  const approvedCount = applications.filter((a) => a.status === "Approved").length;
  const rejectedCount = applications.filter((a) => a.status === "Rejected").length;
  const totalPaymentsAmount = `₹${(applications.length * 500).toLocaleString()}`;

  return (
    <div className="min-h-screen flex bg-slate-950 text-slate-100 font-sans">
      {/* ========================================================= */}
      {/* SIDEBAR NAVIGATION */}
      {/* ========================================================= */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col shrink-0 min-h-screen">
        {/* Admin Brand */}
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-yellow-400 flex items-center justify-center text-slate-950 font-bold">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-heading font-extrabold text-base tracking-tight text-white">
              DELHI HERITAGE
            </h1>
            <span className="text-[10px] text-amber-400 font-bold tracking-widest uppercase block">
              ADMIN CONTROL PORTAL
            </span>
          </div>
        </div>

        {/* Sidebar Tabs */}
        <nav className="p-4 space-y-1.5 flex-1">
          {[
            { id: "dashboard", label: "Dashboard Overview", icon: <LayoutDashboard className="w-4 h-4" /> },
            { id: "applications", label: "Applications", icon: <FileText className="w-4 h-4" />, badge: totalAppsCount },
            { id: "students", label: "Enrolled Students", icon: <Users className="w-4 h-4" /> },
            { id: "payments", label: "Payments History", icon: <CreditCard className="w-4 h-4" /> },
            { id: "documents", label: "Verification Docs", icon: <FolderOpen className="w-4 h-4" /> },
            { id: "notices", label: "Manage Notices", icon: <Bell className="w-4 h-4" /> },
            { id: "settings", label: "Portal Settings", icon: <Settings className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as AdminTab)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                {tab.icon}
                <span>{tab.label}</span>
              </div>
              {tab.badge !== undefined && (
                <span className="bg-slate-800 text-amber-400 text-[10px] px-2 py-0.5 rounded-full font-bold border border-slate-700">
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Admin Logout */}
        <div className="p-4 border-t border-slate-800">
          <Button
            variant="outline"
            size="sm"
            fullWidth
            className="text-slate-300 border-slate-700 hover:bg-rose-950 hover:text-rose-300 hover:border-rose-700"
            leftIcon={<LogOut className="w-4 h-4" />}
            onClick={handleLogout}
          >
            Logout Admin Portal
          </Button>
        </div>
      </aside>

      {/* ========================================================= */}
      {/* MAIN ADMIN CONTENT AREA */}
      {/* ========================================================= */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Admin Header */}
        <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 p-4 px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <Badge variant="gold" size="sm" className="bg-amber-500/20 text-amber-300 border-amber-500/40">
              FRONTEND PROTOTYPE DEMO
            </Badge>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Session 2027-28 Admission Desk
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/" target="_blank">
              <Button variant="outline" size="sm" className="text-xs text-slate-300 border-slate-700">
                Preview Live Site ↗
              </Button>
            </Link>
            <div className="flex items-center gap-2 text-xs font-bold text-white bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
              <UserCheck className="w-4 h-4 text-amber-400" />
              <span>Admin Desk (Demo)</span>
            </div>
          </div>
        </header>

        {/* TAB 1: DASHBOARD OVERVIEW */}
        {activeTab === "dashboard" && (
          <div className="p-8 space-y-8 animate-in fade-in">
            <div>
              <h2 className="text-2xl font-bold font-heading text-white">Dashboard Overview</h2>
              <p className="text-xs text-slate-400">Real-time statistics, application metrics, and fee collection summaries.</p>
            </div>

            {/* Statistic Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400 font-medium">Total Applications</span>
                <div className="text-3xl font-extrabold font-heading text-white">{totalAppsCount}</div>
                <span className="text-[11px] text-amber-400 font-semibold">100% System Intake</span>
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400 font-medium">Pending Review</span>
                <div className="text-3xl font-extrabold font-heading text-amber-400">{pendingCount}</div>
                <span className="text-[11px] text-amber-300">Action Required</span>
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400 font-medium">Approved</span>
                <div className="text-3xl font-extrabold font-heading text-emerald-400">{approvedCount}</div>
                <span className="text-[11px] text-emerald-400">Seats Confirmed</span>
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400 font-medium">Rejected</span>
                <div className="text-3xl font-extrabold font-heading text-rose-400">{rejectedCount}</div>
                <span className="text-[11px] text-rose-400">Seats Full</span>
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400 font-medium">Total Payments</span>
                <div className="text-2xl font-extrabold font-heading text-emerald-400">{totalPaymentsAmount}</div>
                <span className="text-[11px] text-slate-400">₹500 / Registration</span>
              </div>
            </div>

            {/* Application Growth Chart Visualization */}
            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-base font-bold font-heading text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-amber-400" /> Application Inflow Trend (2026-27 Session)
                </h3>
                <span className="text-xs text-slate-400 font-semibold">Weekly Registration Metric</span>
              </div>

              <div className="h-48 flex items-end justify-between gap-4 pt-6 px-4 border-b border-slate-800">
                {[
                  { month: "Week 1", count: 40, label: "120 Apps" },
                  { month: "Week 2", count: 65, label: "240 Apps" },
                  { month: "Week 3", count: 85, label: "380 Apps" },
                  { month: "Week 4", count: 50, label: "210 Apps" },
                  { month: "Week 5", count: 95, label: "490 Apps" },
                  { month: "Week 6", count: 75, label: "310 Apps" },
                ].map((bar, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                    <span className="text-[10px] text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                      {bar.label}
                    </span>
                    <div
                      className="w-full bg-gradient-to-t from-amber-600 via-amber-500 to-yellow-400 rounded-t-xl transition-all group-hover:brightness-125"
                      style={{ height: `${bar.count}%` }}
                    />
                    <span className="text-[11px] text-slate-400 font-semibold">{bar.month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Applications & Payments Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Applications */}
              <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="text-base font-bold font-heading text-white">Recent Applications</h3>
                  <button
                    onClick={() => setActiveTab("applications")}
                    className="text-xs text-amber-400 font-bold hover:underline"
                  >
                    View All →
                  </button>
                </div>

                <div className="space-y-2">
                  {applications.slice(0, 3).map((app) => (
                    <div
                      key={app.id}
                      className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="font-bold text-white">{app.studentName}</div>
                        <div className="text-slate-400 text-[11px]">{app.id} • {app.grade}</div>
                      </div>
                      <Badge variant="gold" size="sm">
                        {app.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Payments */}
              <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="text-base font-bold font-heading text-white">Recent Payments</h3>
                  <button
                    onClick={() => setActiveTab("payments")}
                    className="text-xs text-amber-400 font-bold hover:underline"
                  >
                    View All →
                  </button>
                </div>

                <div className="space-y-2">
                  {applications.slice(0, 3).map((app) => (
                    <div
                      key={app.id}
                      className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="font-bold text-emerald-400">{app.amount}</div>
                        <div className="text-slate-400 text-[11px]">{app.paymentId} • {app.studentName}</div>
                      </div>
                      <Badge variant="emerald" size="sm">
                        Paid
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: APPLICATIONS DATA TABLE */}
        {activeTab === "applications" && (
          <div className="p-8 space-y-6 animate-in fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold font-heading text-white">Applications Management</h2>
                <p className="text-xs text-slate-400">Search, filter, sort, and update student admission statuses.</p>
              </div>
            </div>

            {/* Filter Controls Bar */}
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full md:w-72">
                <Input
                  placeholder="Search student, ID, or parent..."
                  leftIcon={<Search className="w-4 h-4 text-slate-400" />}
                  value={appSearch}
                  onChange={(e) => setAppSearch(e.target.value)}
                  className="bg-slate-950 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400 font-semibold mr-1">Status Filter:</span>
                {["All", "Under Review", "Approved", "Documents Required", "Rejected"].map((st) => (
                  <button
                    key={st}
                    onClick={() => setAppStatusFilter(st)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                      appStatusFilter === st
                        ? "bg-amber-500 text-slate-950"
                        : "bg-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Data Table */}
            <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left text-slate-300">
                  <thead className="text-[11px] uppercase bg-slate-950 text-slate-400 font-bold border-b border-slate-800">
                    <tr>
                      <th className="px-6 py-4">App ID</th>
                      <th className="px-6 py-4">Student Name</th>
                      <th className="px-6 py-4">Class</th>
                      <th className="px-6 py-4">Parent / Phone</th>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4">Payment</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {filteredApps.map((app) => (
                      <tr key={app.id} className="hover:bg-slate-800/50">
                        <td className="px-6 py-4 font-mono font-bold text-white">{app.id}</td>
                        <td className="px-6 py-4 font-bold text-slate-100">{app.studentName}</td>
                        <td className="px-6 py-4 text-slate-300">{app.grade}</td>
                        <td className="px-6 py-4">
                          <div>{app.parentName}</div>
                          <div className="text-[10px] text-slate-500">{app.parentPhone}</div>
                        </td>
                        <td className="px-6 py-4 text-slate-400">{app.date}</td>
                        <td className="px-6 py-4 text-emerald-400 font-bold">{app.paymentStatus}</td>
                        <td className="px-6 py-4">
                          <Badge
                            variant={
                              app.status === "Approved"
                                ? "emerald"
                                : app.status === "Rejected"
                                ? "danger"
                                : "gold"
                            }
                            size="sm"
                          >
                            {app.status}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            leftIcon={<Eye className="w-3.5 h-3.5" />}
                            onClick={() => setSelectedApplication(app)}
                            className="text-amber-400 hover:text-amber-300 hover:bg-slate-800"
                          >
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: STUDENTS */}
        {activeTab === "students" && (
          <div className="p-8 space-y-6 animate-in fade-in">
            <h2 className="text-2xl font-bold font-heading text-white">Enrolled Students Roster</h2>
            <p className="text-xs text-slate-400">Mock student database index (Frontend Demo).</p>

            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {applications
                  .filter((a) => a.status === "Approved")
                  .map((stu) => (
                    <div key={stu.id} className="p-4 bg-slate-800/80 rounded-xl border border-slate-700 space-y-2">
                      <Badge variant="emerald" size="sm">Active Student</Badge>
                      <h4 className="text-base font-bold text-white">{stu.studentName}</h4>
                      <p className="text-xs text-slate-400">{stu.grade} • ID: {stu.id}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: PAYMENTS TABLE */}
        {activeTab === "payments" && (
          <div className="p-8 space-y-6 animate-in fade-in">
            <h2 className="text-2xl font-bold font-heading text-white">Payment Collections</h2>
            <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
              <table className="w-full text-xs text-left text-slate-300">
                <thead className="text-[11px] uppercase bg-slate-950 text-slate-400 font-bold border-b border-slate-800">
                  <tr>
                    <th className="px-6 py-4">Payment ID</th>
                    <th className="px-6 py-4">Application ID</th>
                    <th className="px-6 py-4">Student</th>
                    <th className="px-6 py-4">Amount</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {applications.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-800/50">
                      <td className="px-6 py-4 font-mono font-bold text-slate-100">{p.paymentId}</td>
                      <td className="px-6 py-4 font-mono text-slate-400">{p.id}</td>
                      <td className="px-6 py-4 font-bold text-slate-200">{p.studentName}</td>
                      <td className="px-6 py-4 font-bold text-emerald-400">{p.amount}</td>
                      <td className="px-6 py-4 text-slate-400">{p.date}</td>
                      <td className="px-6 py-4 text-right">
                        <Badge variant="emerald" size="sm">Completed</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 5: DOCUMENTS */}
        {activeTab === "documents" && (
          <div className="p-8 space-y-6 animate-in fade-in">
            <h2 className="text-2xl font-bold font-heading text-white">Verification Documents Matrix</h2>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {applications.map((a) => (
                  <div key={a.id} className="p-4 bg-slate-800/60 rounded-xl border border-slate-700 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-white text-sm">{a.studentName}</span>
                      <Badge variant="gold" size="sm">{a.id}</Badge>
                    </div>
                    <div className="text-xs text-slate-400 space-y-1">
                      <div>✓ Photograph: Verified</div>
                      <div>✓ Birth Certificate: Verified</div>
                      <div>✓ Previous Marksheet: Verified</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: NOTICES MANAGEMENT */}
        {activeTab === "notices" && (
          <div className="p-8 space-y-6 animate-in fade-in">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-2xl font-bold font-heading text-white">Notice Board Management</h2>
                <p className="text-xs text-slate-400">Add, edit, publish/unpublish, and delete public school circulars.</p>
              </div>
              <Button
                variant="gold"
                size="md"
                leftIcon={<Plus className="w-4 h-4" />}
                onClick={() => {
                  setEditingNotice(null);
                  setNoticeForm({ title: "", category: "Exams", target: "Students" });
                  setIsNoticeModalOpen(true);
                }}
              >
                Add New Notice
              </Button>
            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
              <table className="w-full text-xs text-left text-slate-300">
                <thead className="text-[11px] uppercase bg-slate-950 text-slate-400 font-bold border-b border-slate-800">
                  <tr>
                    <th className="px-6 py-4">Title</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Target Audience</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Publish State</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {notices.map((n) => (
                    <tr key={n.id} className="hover:bg-slate-800/50">
                      <td className="px-6 py-4 font-bold text-slate-100">{n.title}</td>
                      <td className="px-6 py-4"><Badge variant="gold" size="sm">{n.category}</Badge></td>
                      <td className="px-6 py-4 text-slate-400">{n.target}</td>
                      <td className="px-6 py-4 text-slate-400">{n.date}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleTogglePublish(n.id)}
                          className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                            n.published ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40" : "bg-slate-800 text-slate-400 border border-slate-700"
                          }`}
                        >
                          {n.published ? "Published" : "Draft"}
                        </button>
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <button
                          onClick={() => {
                            setEditingNotice(n);
                            setNoticeForm({ title: n.title, category: n.category, target: n.target });
                            setIsNoticeModalOpen(true);
                          }}
                          className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-amber-400"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteNotice(n.id)}
                          className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-rose-400"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 7: SETTINGS */}
        {activeTab === "settings" && (
          <div className="p-8 space-y-6 animate-in fade-in">
            <h2 className="text-2xl font-bold font-heading text-white">Portal Configuration Settings</h2>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4 max-w-xl">
              <Input label="School Name" defaultValue="Delhi Heritage World School" />
              <Input label="Session Year" defaultValue="2027-2028" />
              <Input label="Application Registration Fee (INR)" defaultValue="500" />
              <Button variant="gold" size="md" onClick={() => alert("Settings saved (Demo)")}>Save Settings</Button>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* DETAILED APPLICATION VIEW MODAL */}
      {/* ========================================================= */}
      {selectedApplication && (
        <Modal
          isOpen={!!selectedApplication}
          onClose={() => setSelectedApplication(null)}
          title={`Application Details: ${selectedApplication.id}`}
          description="Inspect student & parent details and update admission status."
          size="lg"
        >
          <div className="space-y-6 text-slate-800">
            {/* Status Bar */}
            <div className="p-4 bg-slate-100 rounded-2xl flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase">Current Status</span>
              <Badge
                variant={
                  selectedApplication.status === "Approved"
                    ? "emerald"
                    : selectedApplication.status === "Rejected"
                    ? "danger"
                    : "gold"
                }
                size="md"
              >
                {selectedApplication.status}
              </Badge>
            </div>

            {/* Student Info */}
            <div className="space-y-2">
              <h4 className="font-bold font-heading text-slate-900 text-sm">Student Information</h4>
              <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div><span className="text-slate-500">Name:</span> <strong>{selectedApplication.studentName}</strong></div>
                <div><span className="text-slate-500">Seeking Class:</span> <strong>{selectedApplication.grade}</strong></div>
                <div><span className="text-slate-500">App Date:</span> <strong>{selectedApplication.date}</strong></div>
                <div><span className="text-slate-500">Payment:</span> <strong className="text-emerald-700">{selectedApplication.paymentStatus} ({selectedApplication.amount})</strong></div>
              </div>
            </div>

            {/* Parent Info & Address */}
            <div className="space-y-2">
              <h4 className="font-bold font-heading text-slate-900 text-sm">Parent & Contact Details</h4>
              <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div><span className="text-slate-500">Parent Name:</span> <strong>{selectedApplication.parentName}</strong></div>
                <div><span className="text-slate-500">Phone:</span> <strong>{selectedApplication.parentPhone}</strong></div>
                <div><span className="text-slate-500">Email:</span> <strong>{selectedApplication.parentEmail}</strong></div>
                <div><span className="text-slate-500">Residence:</span> <strong>{selectedApplication.address}</strong></div>
              </div>
            </div>

            {/* ACTION BUTTONS: APPROVE, REJECT, REQUEST DOCUMENTS */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-end gap-3">
              <Button
                variant="secondary"
                size="sm"
                leftIcon={<CheckCircle2 className="w-4 h-4" />}
                onClick={() => handleUpdateStatus(selectedApplication.id, "Approved")}
              >
                Approve Application
              </Button>

              <Button
                variant="outline"
                size="sm"
                leftIcon={<AlertCircle className="w-4 h-4" />}
                onClick={() => handleUpdateStatus(selectedApplication.id, "Documents Required")}
              >
                Request Documents
              </Button>

              <Button
                variant="danger"
                size="sm"
                leftIcon={<XCircle className="w-4 h-4" />}
                onClick={() => handleUpdateStatus(selectedApplication.id, "Rejected")}
              >
                Reject Application
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* NOTICE ADD/EDIT MODAL */}
      {isNoticeModalOpen && (
        <Modal
          isOpen={isNoticeModalOpen}
          onClose={() => setIsNoticeModalOpen(false)}
          title={editingNotice ? "Edit Notice" : "Add New Notice"}
          description="Create or edit public circular."
        >
          <form onSubmit={handleSaveNotice} className="space-y-4">
            <Input
              label="Notice Title"
              required
              value={noticeForm.title}
              onChange={(e) => setNoticeForm({ ...noticeForm, title: e.target.value })}
            />
            <Select
              label="Category"
              value={noticeForm.category}
              onChange={(e) => setNoticeForm({ ...noticeForm, category: e.target.value })}
              options={[
                { label: "Exams", value: "Exams" },
                { label: "Admissions", value: "Admissions" },
                { label: "Sports", value: "Sports" },
                { label: "Holidays", value: "Holidays" },
              ]}
            />
            <Input
              label="Target Audience"
              value={noticeForm.target}
              onChange={(e) => setNoticeForm({ ...noticeForm, target: e.target.value })}
            />
            <Button type="submit" variant="gold" fullWidth>
              {editingNotice ? "Update Notice" : "Publish Notice"}
            </Button>
          </form>
        </Modal>
      )}
    </div>
  );
}
