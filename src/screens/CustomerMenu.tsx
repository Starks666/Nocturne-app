import React from 'react';
import { DISHES } from '@/src/constants';
import { Search, Plus } from 'lucide-react';

export default function CustomerMenu() {
  return (
    <div className="space-y-8">
      {/* Search */}
      <section>
        <div className="relative group active:scale-[0.98] transition-all">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-on-surface-variant group-focus-within:text-secondary transition-colors" />
          </div>
          <input
            className="w-full bg-surface-container-lowest border-none rounded-xl py-5 pl-14 pr-6 text-on-surface placeholder:text-on-surface-variant focus:ring-0 focus:outline-none transition-all"
            placeholder="Search the collection..."
            type="text"
          />
          <div className="absolute inset-0 rounded-xl border border-outline-variant/15 pointer-events-none group-focus-within:border-secondary transition-all duration-500"></div>
        </div>
      </section>

      {/* Categories */}
      <section>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
          {['Appetizers', 'Main Course', 'Drinks', 'Desserts'].map((cat, i) => (
            <button
              key={cat}
              className={`flex-none px-8 py-3 rounded-full font-label font-bold text-[10px] tracking-widest uppercase transition-all active:scale-95 ${
                i === 0 ? 'bg-primary text-on-primary-container shadow-[0_0_15px_rgba(199,153,255,0.3)]' : 'bg-surface-container-high border border-outline-variant/10 text-on-surface-variant hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Menu Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {DISHES.map((dish) => (
          <div key={dish.id} className="glass-panel rounded-xl p-5 relative group mt-10">
            <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 -mt-10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img alt={dish.name} className="w-full h-full object-cover" src={dish.image} />
            </div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-headline text-2xl font-bold tracking-tight text-white uppercase">{dish.name}</h3>
              <span className="font-label text-secondary font-bold text-sm tracking-wider">${dish.price.toFixed(2)}</span>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-body">{dish.description}</p>
            <div className="flex justify-between items-center">
              <span className="label-md font-bold text-[10px] tracking-widest uppercase text-tertiary px-3 py-1 bg-tertiary/10 rounded-full">
                {dish.tags?.[0] || 'Signature'}
              </span>
              <button className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-tertiary-container flex items-center justify-center text-on-primary-container shadow-[0_0_15px_rgba(199,153,255,0.4)] active:scale-90 transition-all">
                <Plus className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
