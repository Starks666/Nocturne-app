import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutGrid, ReceiptText, UtensilsCrossed, BarChart3, Bell, User } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutGrid },
    { name: 'Orders', path: '/admin/orders', icon: ReceiptText },
    { name: 'Menu', path: '/admin/menu', icon: UtensilsCrossed },
    { name: 'Analytics', path: '/admin/analytics', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-surface">
      {/* Top Bar */}
      <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-8 h-20 shadow-[0_4px_30px_rgba(199,153,255,0.06)]">
        <div className="flex items-center gap-4">
          <LayoutGrid className="text-primary w-6 h-6" />
          <h1 className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary-container font-headline">
            NEON NOCTURNE ADMIN
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6 mr-8 font-headline font-medium text-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "transition-colors cursor-pointer",
                  location.pathname === item.path ? "text-primary" : "text-on-surface-variant hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container-highest border border-white/10 overflow-hidden">
            <img
              alt="Admin Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7WHlRHgk3u2LdXE5O0xXCFS47r_ooKLq0yJgc9WGRC8y3ryNNmkrn6jAXPc7XsalGIrlOtqdKx6MMft9-3tGtmioXzw6dRbVuwT61R_F57iyGpHjyMdu2Z3YTIbbN8Z2ITwNnCTYdFlvic7tVXm9Lc-FtnMFOheArAT8k_CkSZev4CMhyaa8jKk37DN2yWALJBuLzcvVn6DyxmZfAhTWve7p9MKNB5EikoiIZfZPOsBXr9EsjbqS7mb1cwjpZi85k8nRE5kp1r2vy"
            />
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-72 bg-surface border-r border-white/5 flex-col pt-24 z-40">
        <div className="px-6 py-8 flex items-center gap-4 border-b border-white/5 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
            <User className="text-primary w-6 h-6" />
          </div>
          <div>
            <p className="font-headline font-bold text-white leading-tight">System Admin</p>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Global Controller</p>
          </div>
        </div>
        <nav className="flex-1 flex flex-col font-headline font-medium text-sm">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex items-center gap-4 px-6 py-4 transition-all",
                location.pathname === item.path
                  ? "bg-gradient-to-r from-primary/20 to-transparent text-primary border-l-4 border-primary"
                  : "text-on-surface-variant hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="p-6">
          <div className="p-4 rounded-xl bg-surface-container-low border border-white/5">
            <p className="text-xs text-on-surface-variant mb-2">Cloud Status</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(74,248,227,0.6)]"></div>
              <span className="text-xs font-medium text-secondary">System Online</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="pt-28 pb-32 px-6 md:pl-80 md:pr-12 max-w-[1600px] mx-auto">
        {children}
      </main>
    </div>
  );
}

export function CustomerLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'Menu', path: '/menu', icon: 'restaurant' },
    { name: 'Cart', path: '/cart', icon: 'shopping_bag' },
    { name: 'Bookings', path: '/booking', icon: 'confirmation_number' },
  ];

  return (
    <div className="min-h-screen bg-surface overflow-x-hidden">
      {/* Top Bar */}
      <header className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
        <div className="flex justify-between items-center px-6 py-4 w-full">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden border border-white/10">
              <img
                alt="User"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCONR3jujH89bAJpXI_HEX5F5MhV0ZYxWmNr50xnRse25m7yezcptnQ0ykFHmXA9kuqfh4t_sJ6t2x9_a3gQRSgRaB3MSmvS6v0tNR-jfTWEgtF3zvWwQiWDiVBkq8opvKiTnKSQpQDZmdvslZuT4o9GoTw2h6cFeiWdMku5TQjgWLItswM9EnwH0vi9cmEYNnjqLshM3M4zM36NqqLnl1q7KuIfD0LwIseJwnMCF3aQLzmCIevLa_-D4Rhl8-FfpobO9BY50eCNOhf"
              />
            </div>
            <h1 className="font-headline font-bold tracking-tighter uppercase text-xl font-black tracking-widest text-white">
              NOCTURNE
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-primary hover:text-secondary transition-colors duration-300 active:scale-95">
              <Bell className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-b from-primary/10 to-transparent h-[1px] w-full absolute bottom-0"></div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-32 px-6 max-w-2xl mx-auto">
        {children}
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50 flex justify-around items-center px-4 py-2 bg-surface-container/60 backdrop-blur-3xl rounded-full border border-white/5 shadow-[0_0_40px_rgba(199,153,255,0.08)]">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center p-3 transition-all active:scale-90",
              location.pathname === item.path
                ? "bg-gradient-to-tr from-primary to-tertiary-container text-white rounded-full shadow-[0_0_15px_rgba(199,153,255,0.4)]"
                : "text-zinc-500 hover:text-white"
            )}
          >
            <span className="material-symbols-outlined mb-1">{item.icon}</span>
            <span className="font-inter text-[10px] font-bold tracking-widest uppercase mt-1 hidden md:block">
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
