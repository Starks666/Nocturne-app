import React from 'react';
import { X, Minus, Plus, CreditCard, Wallet } from 'lucide-react';

export default function CustomerCart() {
  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-white">Your Selection</h2>
          <span className="font-label text-sm tracking-widest text-on-surface-variant uppercase">3 ITEMS</span>
        </div>
        <div className="space-y-6">
          {[
            { name: 'Midnight Ribeye', desc: 'Truffle butter finish', price: 42.00, qty: 1, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDReWfTrlG54Og8l0M52ILKqaWyX3T64_-3nRVYWzRQ3ZtBqc92OJANftfP8g6JsDcWnV0iwhXsP3w17U-_lzr_zDOrIuRNHrH1ZuBM0qGnq78DbmvtM955bQeU6TeiYj3EJQ4nQBen2YXt7zfLWtuNyDyWCE4CPHGSm98KE0RH-0TMHNncgSIuR22OR8YjLIW1LBSA5os26u_Fjzoy_rGhHFzN1_NO0RogU6Rkt8mTiDLP8SCLmeOw6ottVQ5Vsx8_xwtRDvcBcyoS' },
            { name: 'Obsidian Mousse', desc: '70% Dark cocoa', price: 14.00, qty: 2, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZCY7Yobr0z5yGek7fEcWum7tdmlTka9myXUjwowqKdn0639RY6ca2P2x2WqFazNmT3d2Ej74L3AriYlgQwZ6uLu4cjHtk235h1A0DKuYZOeGUnzanMJdfq-bob49JVrka3vVSlFU6hjywpUIRCFNK02S-PLTj9TAT3-dZx2BYRAkpXFpLl5VFYCPuYITOj-tjfRcxk3IH4PRdvburtnH75bFyNshYIJqx8onBMniv8nDRyKuE56S1rWlnUIRB_tyDnb3cPWfGrmM4' }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-center bg-surface-container rounded-xl p-4 group transition-all">
              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={item.img} alt={item.name} />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline text-lg font-bold text-white">{item.name}</h3>
                  <button className="text-on-surface-variant hover:text-error transition-colors active:scale-95">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-on-surface-variant text-sm mb-3">{item.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold font-headline">${item.price.toFixed(2)}</span>
                  <div className="flex items-center gap-4 bg-surface-container-highest rounded-full px-3 py-1">
                    <button className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-surface-bright transition-colors active:scale-95">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-headline font-bold text-sm text-white">{item.qty}</span>
                    <button className="w-6 h-6 flex items-center justify-center rounded-full bg-primary text-on-primary shadow-sm active:scale-90 transition-all">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-white">Delivery Details</h2>
        <div className="space-y-4">
          <div className="relative">
            <label className="absolute -top-2 left-4 px-2 bg-surface text-xs font-label tracking-widest text-primary uppercase z-10">Full Name</label>
            <input className="w-full bg-surface-container-lowest border-0 ring-1 ring-outline-variant/30 focus:ring-2 focus:ring-secondary rounded-xl py-4 px-6 text-on-surface transition-all outline-none" placeholder="Enter your name" type="text" />
          </div>
          <div className="relative">
            <label className="absolute -top-2 left-4 px-2 bg-surface text-xs font-label tracking-widest text-primary uppercase z-10">Phone Number</label>
            <input className="w-full bg-surface-container-lowest border-0 ring-1 ring-outline-variant/30 focus:ring-2 focus:ring-secondary rounded-xl py-4 px-6 text-on-surface transition-all outline-none" placeholder="+880 1XXX XXXXXX" type="tel" />
          </div>
          <div className="relative">
            <label className="absolute -top-2 left-4 px-2 bg-surface text-xs font-label tracking-widest text-primary uppercase z-10">Delivery Address</label>
            <textarea className="w-full bg-surface-container-lowest border-0 ring-1 ring-outline-variant/30 focus:ring-2 focus:ring-secondary rounded-xl py-4 px-6 text-on-surface transition-all outline-none resize-none" placeholder="Street address, building, apartment..." rows={3}></textarea>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-white">Payment method</h2>
        <div className="grid grid-cols-1 gap-4">
          <label className="relative flex items-center p-4 bg-surface-container rounded-xl cursor-pointer border border-transparent has-[:checked]:border-primary/50 transition-all active:scale-[0.98]">
            <input checked name="payment" type="radio" className="hidden peer" />
            <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center mr-4">
              <CreditCard className="text-primary w-6 h-6" />
            </div>
            <div className="flex-grow">
              <p className="font-bold text-lg text-white">Cash on Delivery</p>
              <p className="text-on-surface-variant text-sm">Pay when you receive</p>
            </div>
            <div className="w-6 h-6 rounded-full border-2 border-outline-variant peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center transition-all">
              <div className="w-2 h-2 rounded-full bg-on-primary opacity-0 peer-checked:opacity-100"></div>
            </div>
          </label>
          <div className="bg-surface-container rounded-xl p-4 space-y-4">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center mr-4">
                <Wallet className="text-secondary w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-lg text-white">Mobile Banking</p>
                <p className="text-on-surface-variant text-sm">bKash, Nagad, Rocket</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center justify-center p-3 rounded-lg bg-surface-container-low border border-outline-variant/20 hover:bg-secondary/10 transition-all active:scale-95">
                <span className="font-headline font-bold text-sm tracking-widest text-[#d12053]">BKASH</span>
              </button>
              <button className="flex flex-col items-center justify-center p-3 rounded-lg bg-surface-container-low border border-outline-variant/20 hover:bg-secondary/10 transition-all active:scale-95">
                <span className="font-headline font-bold text-sm tracking-widest text-[#f6921e]">NAGAD</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="glass-panel p-8 rounded-xl border border-white/5 space-y-4">
        <div className="flex justify-between text-on-surface-variant">
          <span>Subtotal</span>
          <span className="font-headline font-bold text-white">$70.00</span>
        </div>
        <div className="flex justify-between text-on-surface-variant">
          <span>Service Fee</span>
          <span className="font-headline font-bold text-white">$4.50</span>
        </div>
        <div className="flex justify-between text-on-surface-variant">
          <span>Delivery</span>
          <span className="font-headline font-bold text-secondary">FREE</span>
        </div>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent my-4"></div>
        <div className="flex justify-between items-center pb-2">
          <span className="text-xl font-bold text-white">Total Amount</span>
          <span className="text-3xl font-headline font-black text-primary neon-text-glow">$74.50</span>
        </div>
        <button className="w-full bg-gradient-to-tr from-primary to-tertiary-container text-on-primary py-5 rounded-full font-headline font-bold uppercase tracking-widest shadow-[0_10px_30px_rgba(199,153,255,0.3)] hover:shadow-[0_0_20px_rgba(199,153,255,0.5)] active:scale-95 transition-all">
          Confirm Order
        </button>
      </section>
    </div>
  );
}
