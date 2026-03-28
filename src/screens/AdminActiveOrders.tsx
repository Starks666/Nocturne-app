import React from 'react';
import { ORDERS } from '@/src/constants';
import { Search, Filter, Download, Clock, Truck } from 'lucide-react';

export default function AdminActiveOrders() {
  return (
    <div className="space-y-10">
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-2 block">Management</span>
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight text-white">Active Orders</h2>
          <p className="text-on-surface-variant mt-2 max-w-lg">Manage real-time guest requests and kitchen workflow from the central hub.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-surface-container-high px-6 py-3 rounded-full border border-white/5 flex items-center gap-2 hover:bg-surface-bright transition-all active:scale-95">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium font-label">Filter</span>
          </button>
          <button className="bg-gradient-to-r from-primary to-tertiary-container text-on-primary-container px-8 py-3 rounded-full font-label font-bold text-sm uppercase tracking-wider shadow-[0_10px_20px_rgba(199,153,255,0.2)] hover:scale-105 active:scale-95 transition-all">
            <Download className="w-4 h-4 mr-2 inline" />
            Download CSV
          </button>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
        <div className="lg:col-span-2 relative group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-secondary transition-colors w-5 h-5" />
          <input
            className="w-full bg-surface-container-lowest border-0 rounded-xl py-4 pl-14 pr-6 focus:ring-1 focus:ring-secondary/50 text-white placeholder:text-on-surface-variant/50 transition-all"
            placeholder="Search by Order ID or Customer Name..."
            type="text"
          />
        </div>
        <div className="bg-surface-container-low rounded-xl p-5 border border-white/5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
            <Clock className="text-secondary w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-on-surface-variant">Pending</p>
            <p className="text-xl font-headline font-bold text-white">24 Orders</p>
          </div>
        </div>
        <div className="bg-surface-container-low rounded-xl p-5 border border-white/5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Truck className="text-primary w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-on-surface-variant">In Transit</p>
            <p className="text-xl font-headline font-bold text-white">12 Orders</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {ORDERS.map((order) => (
          <div key={order.id} className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all group">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">{order.id}</span>
                  <span className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant">{order.time}</span>
                </div>
                <h3 className="text-xl font-headline font-bold text-white mb-1">{order.guest}</h3>
                <p className="text-sm text-on-surface-variant font-label">{order.items}</p>
              </div>
              <div className="flex flex-wrap items-center gap-8 lg:gap-12">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Total</span>
                  <span className="text-2xl font-headline font-bold text-white">${order.amount.toFixed(2)}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Status</span>
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full border ${
                    order.status === 'PREPARING' ? 'bg-secondary/10 border-secondary/20 text-secondary' :
                    order.status === 'DELIVERED' ? 'bg-white/5 border-white/10 text-white/60' :
                    'bg-primary/10 border-primary/20 text-primary'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${order.status === 'PREPARING' ? 'bg-secondary animate-pulse' : order.status === 'DELIVERED' ? 'bg-white/40' : 'bg-primary'}`}></span>
                    <span className="text-[10px] font-bold uppercase tracking-wider">{order.status}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 w-full lg:w-auto mt-4 lg:mt-0">
                  <button className="flex-1 lg:flex-none px-6 py-2.5 rounded-full border border-white/10 hover:bg-white/5 text-sm font-medium transition-colors active:scale-95">
                    View Details
                  </button>
                  <button className="flex-1 lg:flex-none px-6 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-primary transition-all active:scale-95">
                    Update Status
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
