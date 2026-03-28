import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Info } from 'lucide-react';

export default function CustomerBooking() {
  const [guests, setGuests] = useState(3);

  return (
    <div className="space-y-12">
      <section>
        <div className="relative h-64 rounded-xl overflow-hidden mb-8">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJucaO9X_C3hAuDl5RyUzbSd2fciDfuB3cxhPGV1nvmYqmgiFkAzLs5EjyJHGGKfb6htmHpHniiUUNQiqDqjn48QXbCKLKWsGxQm25gKRv8tW-WLx5b_z-uqAGoGMdTiSF3rSTbTkLlb1tp90wfPEKYb4kSlxksw3pn9SSQlJnFFwbvWHA_4xThIOs_CdCKWwUF2BSsJZIc8am2yQfYlH7ti7xx_vq6QPKMSwHuurPROtTKkPtQZKsT6ajQau_5dWWMuqGP8VoKsWH"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6">
            <span className="bg-secondary/20 text-secondary border border-secondary/30 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-2 inline-block">Exclusive Lounge</span>
            <h2 className="text-3xl font-headline font-extrabold tracking-tighter text-white">Secure Your Table</h2>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-surface-container-low rounded-lg border border-white/5 mb-8">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
          </div>
          <p className="text-sm font-medium text-on-surface-variant">Live Status: <span className="text-on-surface font-bold">12 tables available</span> for tonight</p>
        </div>
      </section>

      <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block font-headline font-bold text-xs tracking-widest uppercase text-primary mb-6">Number of Guests</label>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setGuests(num)}
                className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all active:scale-95 ${
                  guests === num
                    ? 'bg-primary text-on-primary shadow-[0_0_15px_rgba(199,153,255,0.4)]'
                    : 'border border-outline-variant/30 text-on-surface-variant hover:border-primary hover:text-primary'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block font-headline font-bold text-xs tracking-widest uppercase text-primary mb-4">Date</label>
            <div className="relative group active:scale-[0.98] transition-all rounded-xl">
              <input
                className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-5 py-4 text-on-surface focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all cursor-pointer outline-none"
                readOnly
                type="text"
                value="Friday, Oct 24"
              />
              <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-hover:text-secondary transition-colors w-5 h-5" />
            </div>
          </div>
          <div>
            <label className="block font-headline font-bold text-xs tracking-widest uppercase text-primary mb-4">Time</label>
            <div className="relative group active:scale-[0.98] transition-all rounded-xl">
              <select className="w-full appearance-none bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-5 py-4 text-on-surface focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all cursor-pointer outline-none">
                <option>19:30 PM</option>
                <option>20:00 PM</option>
                <option>20:30 PM</option>
                <option>21:00 PM</option>
                <option>21:30 PM</option>
              </select>
              <Clock className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-hover:text-secondary pointer-events-none transition-colors w-5 h-5" />
            </div>
          </div>
        </div>

        <div>
          <label className="block font-headline font-bold text-xs tracking-widest uppercase text-primary mb-4">Special Requests</label>
          <textarea
            className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-5 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all resize-none outline-none"
            placeholder="Allergies, birthday celebration, or preferred window seating..."
            rows={4}
          ></textarea>
        </div>

        <div className="glass-panel p-6 rounded-xl border border-white/5 space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-on-surface-variant">Table for {guests}</span>
            <span className="text-on-surface font-bold tracking-tight">Fri, Oct 24 @ 19:30</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-on-surface-variant">Location</span>
            <span className="text-on-surface font-bold tracking-tight">Main Dining Hall</span>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent"></div>
          <div className="flex justify-between items-center">
            <span className="text-on-surface-variant text-sm">Booking Fee</span>
            <span className="text-secondary font-headline font-extrabold">$0.00</span>
          </div>
        </div>

        <button className="w-full bg-gradient-to-tr from-primary to-tertiary-container text-on-primary-container py-5 rounded-full font-headline font-black text-xs tracking-[0.2em] uppercase shadow-[0_10px_30px_rgba(199,153,255,0.3)] hover:shadow-[0_15px_40px_rgba(199,153,255,0.5)] active:scale-95 transition-all">
          Confirm Reservation
        </button>
      </form>
    </div>
  );
}
