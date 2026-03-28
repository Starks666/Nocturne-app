import React from 'react';
import { DISHES } from '@/src/constants';
import { Search, Bell, ShoppingBag } from 'lucide-react';

export default function CustomerHome() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section>
        <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden group">
          <img
            alt="Signature Dish"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXv8-MMJEfntbI1BtFGHUYDqY7v8i-9GVpgVyi5IGnLjNkNHqo8OWRrXrniZG4clbmSgal3VkRWEnv3CF6Mj6tW1_N7LLu-x1COOHc_7H2I7ThGgT3ZyOhwIlgl0a5Er__h2sLgUGAVqbq9rjgmWpTPhMOATMiZYeMpVyJgbhsn7xRukguXwruu7x8DykJe3sP49uGcYVxhg05vlyy0qvpZ2k6qnsO1Sny5i7Lx1xcmpoW-_WgGW1YmqIMoDYcMM1yQ7NzAtqO0A12"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-6 right-6">
            <span className="font-label text-[10px] font-bold tracking-[0.2em] text-secondary uppercase mb-2 block neon-text-glow">Chef's Selection</span>
            <h2 className="font-headline text-4xl font-extrabold tracking-tighter text-white mb-4 leading-none">VIOLET <br /> TRUFFLE LINGUINE</h2>
            <div className="flex gap-3">
              <button className="flex-1 bg-gradient-to-tr from-primary to-tertiary-container text-on-primary-container font-label text-xs font-bold uppercase py-4 rounded-full shadow-[0_0_20px_rgba(199,153,255,0.4)] active:scale-95 transition-all">
                Order Now
              </button>
              <button className="flex-1 bg-surface-container-high/40 backdrop-blur-md border border-white/10 text-white font-label text-xs font-bold uppercase py-4 rounded-full active:scale-95 transition-all">
                Book a Table
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section>
        <div className="flex overflow-x-auto gap-4 no-scrollbar">
          {['All', 'Entrées', 'Main Course', 'Cocktails', 'Vegan'].map((cat, i) => (
            <button
              key={cat}
              className={`flex-shrink-0 px-6 py-2 rounded-full text-xs font-bold uppercase font-label tracking-widest transition-all active:scale-95 ${
                i === 0 ? 'bg-primary text-on-primary-container' : 'bg-surface-container-high border border-white/5 text-on-surface-variant hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Popular Pulse */}
      <section>
        <div className="flex justify-between items-end mb-8">
          <div>
            <h3 className="font-headline text-2xl font-bold tracking-tight text-white">The Popular Pulse</h3>
            <p className="font-body text-sm text-on-surface-variant">Most ordered by the Nocturne collective</p>
          </div>
          <button className="text-secondary text-xs font-bold uppercase tracking-widest font-label transition-opacity hover:opacity-70 active:scale-95">View All</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 glass-panel rounded-lg p-6 relative overflow-hidden flex flex-col justify-end min-h-[220px] cursor-pointer active:scale-[0.98] transition-all hover:border-primary/30">
            <img
              alt="Gyoza"
              className="absolute top-0 right-0 w-1/2 h-full object-cover rounded-l-xl opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0MR4Ys4bAYn7JlPgdWQVcnnEwD9kq9uQZERcGucOlErxokPh7iZbjljH4jAtA8lN9EboSxGCkyi-VeM3uzqnf-VslRN_P1A5ywSQftuNTaDA2itlIr8HZvpVr4NK7EUEUoEaKGBA4aR1BUhtSdAkM4IUqhvBEWQ7dmrhqS2uGOB7yjseuW5uPeiqmm_E2MiMcPM3mo7pMZLeU0Uhu5NGQKzQZpPJVWXumtlqOqXsSM-TVXbw7Uwh7Ok6MnZyjfqftSarsJUpo1lRd"
            />
            <div className="relative z-10 w-1/2">
              <span className="font-label text-[10px] font-bold text-primary tracking-widest uppercase block mb-1">Entrée</span>
              <h4 className="font-headline text-xl font-bold mb-2">NEON DUMPLINGS</h4>
              <p className="font-body text-xs text-on-surface-variant mb-4">Wagyu beef, black garlic, infused chili oil.</p>
              <span className="text-lg font-bold text-white font-headline">$24.00</span>
            </div>
          </div>
          
          <div className="glass-panel rounded-lg p-4 flex flex-col gap-3 cursor-pointer active:scale-[0.98] transition-all hover:border-primary/30">
            <div className="w-full aspect-square rounded-md overflow-hidden">
              <img
                alt="Cocktail"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRPzKbzkxBsDRPwmlKlS6pvMwOfFOFdbsNCWgj4kDjEM8M07A0yoi9M45BgE7auOJ5vUF9-IVQMMU-bv_HSlVSGlizsOwPOtm97GYjp3PXXGs52cMabzyw17YOKfeHr97TEVcSzhh1mBtpnSkUua0OzbujVY0mD2mameTHo0x0SV6LniuWZ09nOBszp28R-mDk8nkitXMi8AGnWTzdRPKxZnl0P-3oKsHK-XrbndFZI2ucGpOYog-clk5jfG54qU8y0n-8GbUqFmVY"
              />
            </div>
            <div>
              <h4 className="font-headline text-sm font-bold uppercase tracking-tight">Cyber-Sling</h4>
              <span className="text-sm font-bold text-secondary font-headline">$18</span>
            </div>
          </div>

          <div className="glass-panel rounded-lg p-4 flex flex-col gap-3 cursor-pointer active:scale-[0.98] transition-all hover:border-primary/30">
            <div className="w-full aspect-square rounded-md overflow-hidden">
              <img
                alt="Dessert"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT6RaMPY3AIogLgizO9zEbfjrYxPyj3zyrvf-Y_T5ZV0oEegNsaECC1B2INoKTT8I8i1CqENvyxrF8RYP4z2O1wrHAamqTQTYPXU_OeMiE4KY1yJ2R-GsWXCdUYRiU8KDAu-rxB7R7Me37-WpDxybiLRUiPTvvA-82FhHTS1N7Bp6muXUeG2nCp5hTjudrMigZcNBuDJacO6YaOfPzAp8UH9q54bECjp-zwkmYwEDDS19s8Hbns4-at812APQx-nraUYVAnjj7L3gB"
              />
            </div>
            <div>
              <h4 className="font-headline text-sm font-bold uppercase tracking-tight">Eclipse Sphere</h4>
              <span className="text-sm font-bold text-secondary font-headline">$16</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vault Dining */}
      <section>
        <div className="w-full bg-surface-container-low rounded-xl p-8 border border-white/5 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-headline text-2xl font-bold mb-2">The Vault Dining</h3>
            <p className="font-body text-sm text-on-surface-variant mb-6 leading-relaxed">Exclusive underground dining experience. Limited to 8 guests per night. Fully immersive sensory journey.</p>
            <button className="text-white border-b-2 border-primary pb-1 text-sm font-bold font-label uppercase tracking-widest transition-all active:scale-95 hover:text-primary">Inquire Availability</button>
          </div>
          <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
}
