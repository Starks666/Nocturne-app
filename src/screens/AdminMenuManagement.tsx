import React from 'react';
import { DISHES } from '@/src/constants';
import { Plus, Edit2, Trash2 } from 'lucide-react';

export default function AdminMenuManagement() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2 block">Catalog Management</span>
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter text-white">Menu Items</h2>
        </div>
        <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-tertiary-container text-on-primary-container px-8 py-4 rounded-full font-headline font-bold uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(199,153,255,0.4)] hover:shadow-[0_0_45px_rgba(199,153,255,0.6)] active:scale-95 transition-all">
          <Plus className="w-5 h-5" />
          Add New Item
        </button>
      </div>

      <div className="flex overflow-x-auto gap-3 pb-6 no-scrollbar">
        {['All Items', 'Appetizers', 'Main Courses', 'Signature Cocktails', 'Desserts'].map((cat, i) => (
          <button
            key={cat}
            className={`whitespace-nowrap px-6 py-2.5 rounded-full font-medium text-sm transition-all active:scale-95 ${
              i === 0 ? 'bg-primary text-on-primary-container' : 'bg-surface-container-high text-on-surface-variant border border-white/5 hover:bg-surface-bright'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {['Appetizers', 'Main Courses'].map((category) => (
        <section key={category} className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl font-headline font-bold text-white tracking-tight">{category}</h3>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DISHES.filter(d => d.category === category).map((dish) => (
              <div key={dish.id} className="glass-panel rounded-xl overflow-hidden group border border-white/5 transition-all hover:border-primary/30">
                <div className="relative h-48 overflow-hidden">
                  <img alt={dish.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={dish.image} />
                  {dish.isBestSeller && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-secondary font-bold text-xs border border-secondary/20">
                      BEST SELLER
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-headline font-bold text-white">{dish.name}</h4>
                    <span className="text-primary font-bold font-headline">${dish.price.toFixed(2)}</span>
                  </div>
                  <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">{dish.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      {dish.tags?.map(tag => (
                        <span key={tag} className="px-2 py-1 rounded-md bg-white/5 text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-1">
                      <button className="p-2 rounded-full hover:bg-white/5 text-secondary transition-colors active:scale-90" title="Edit">
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button className="p-2 rounded-full hover:bg-white/5 text-error transition-colors active:scale-90" title="Delete">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
