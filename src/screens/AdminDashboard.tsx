import React from 'react';
import { DISHES, ORDERS } from '@/src/constants';
import { DollarSign, ShoppingBag, Armchair, ArrowUpRight, Plus } from 'lucide-react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';

const chartData = [
  { time: '18:00', value: 40 },
  { time: '19:00', value: 60 },
  { time: '20:00', value: 30 },
  { time: '21:00', value: 80 },
  { time: '22:00', value: 95 },
  { time: '23:00', value: 70 },
  { time: '00:00', value: 50 },
  { time: '01:00', value: 40 },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-12">
      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel rounded-xl p-6 hover:border-primary/30 transition-all cursor-pointer group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <DollarSign className="w-6 h-6" />
            </div>
            <span className="text-secondary text-xs font-bold font-headline">+12% vs LY</span>
          </div>
          <h3 className="text-on-surface-variant text-xs font-headline tracking-widest uppercase mb-1">Total Revenue</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-white font-headline tracking-tight">$12,450</span>
            <span className="text-xs text-on-surface-variant font-body">USD</span>
          </div>
          <div className="mt-4 w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-tertiary-container w-[75%]"></div>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6 hover:border-primary/30 transition-all cursor-pointer group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <span className="text-secondary text-xs font-bold font-headline">+5.2%</span>
          </div>
          <h3 className="text-on-surface-variant text-xs font-headline tracking-widest uppercase mb-1">Total Orders</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-white font-headline tracking-tight">184</span>
            <span className="text-xs text-on-surface-variant font-body">Daily</span>
          </div>
          <div className="mt-4 w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-indigo-500 to-primary w-[60%]"></div>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6 hover:border-primary/30 transition-all cursor-pointer group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
              <Armchair className="w-6 h-6" />
            </div>
            <span className="text-primary text-xs font-bold font-headline">Live Now</span>
          </div>
          <h3 className="text-on-surface-variant text-xs font-headline tracking-widest uppercase mb-1">Active Bookings</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-white font-headline tracking-tight">12</span>
            <span className="text-xs text-on-surface-variant font-body">Tables</span>
          </div>
          <div className="mt-4 w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-secondary to-indigo-400 w-[40%]"></div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Recent Orders */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold font-headline text-white tracking-tight">Recent Orders</h2>
            <button className="text-primary text-xs font-headline uppercase tracking-widest hover:brightness-125 transition-all">View All</button>
          </div>
          <div className="glass-panel rounded-xl overflow-hidden">
            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-left">
                <thead className="bg-surface-container-high/50 text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-headline border-b border-white/5">
                  <tr>
                    <th className="px-6 py-4">Order ID</th>
                    <th className="px-6 py-4">Guest</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  {ORDERS.map((order) => (
                    <tr key={order.id} className="hover:bg-white/5 transition-colors group">
                      <td className="px-6 py-5 font-headline font-bold text-white">{order.id}</td>
                      <td className="px-6 py-5 text-on-surface-variant">{order.guest}</td>
                      <td className="px-6 py-5">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                          order.status === 'PREPARING' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                          order.status === 'DELIVERED' ? 'bg-secondary/10 text-secondary border-secondary/20' :
                          'bg-primary/10 text-primary border-primary/20'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right font-headline font-bold text-white">${order.amount.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Top Dishes & Stats */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <h2 className="text-xl font-bold font-headline text-white tracking-tight">Top Dishes</h2>
          <div className="glass-panel rounded-xl p-6 flex flex-col gap-6">
            {DISHES.filter(d => d.ordersToday).map((dish) => (
              <div key={dish.id} className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden border border-white/10 shrink-0">
                  <img alt={dish.name} className="w-full h-full object-cover" src={dish.image} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-white truncate font-headline">{dish.name}</h4>
                  <p className="text-xs text-on-surface-variant mb-2">{dish.ordersToday} orders today</p>
                  <div className="w-full h-1 bg-white/5 rounded-full">
                    <div className="h-full bg-primary shadow-[0_0_8px_rgba(199,153,255,0.4)]" style={{ width: `${(dish.ordersToday || 0) * 2}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
            <button className="w-full mt-2 py-4 rounded-full bg-surface-container-highest border border-white/5 text-xs font-headline uppercase tracking-widest hover:bg-white/10 transition-all font-bold text-white">
              Full Report
            </button>
          </div>

          <div className="glass-panel rounded-xl p-6 bg-gradient-to-br from-primary/10 to-indigo-500/10">
            <h3 className="text-xs font-headline tracking-widest text-on-surface-variant uppercase mb-4">Live Performance</h3>
            <div className="h-32 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={index === 3 || index === 4 ? '#c799ff' : index === 5 ? '#4af8e3' : 'rgba(255,255,255,0.1)'} 
                        fillOpacity={index === 3 || index === 4 || index === 5 ? 0.4 : 1}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between mt-4 text-[10px] text-on-surface-variant font-headline uppercase">
              <span>18:00</span>
              <span>20:00</span>
              <span>22:00</span>
              <span>00:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAB */}
      <div className="fixed bottom-12 right-12 z-40">
        <button className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-tertiary-container text-on-primary-container shadow-[0_10px_25px_rgba(199,153,255,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
          <Plus className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
