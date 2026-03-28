import React from 'react';
import { User, Mail, Lock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CustomerSignup() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Hero Background Section */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-surface via-surface-container-low to-primary/10 opacity-60"></div>
        <img className="w-full h-full object-cover opacity-30 grayscale mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0blXon3ZtS58a_Z4xukQuEdeLxKGJYyu47xr3dIDnGgk5MsEL-IaD6pUtygs7LCi3VvMcKC60ctN-nFbLnInhN_PrD-pea-KlTX-5OGvjLtELj3JnrRNDUqJHO3ycp_wyCVetdji7nVOAXXfpxaS4nG6ce9NZ6FjvVIDcJFThnPkoOXc6qFMv57cbVJA7WexkCkdq2zJKNorfqXq5xhZcI30jmqR_38fNpZAH2SuWdZILMqvI_Pf2GUrS0me0xzkOkkTA3kYJ6f7m" alt="Background" />
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-tertiary-container/20 blur-[100px] rounded-full"></div>
      </div>

      <main className="relative z-10 w-full max-w-xl">
        <header className="mb-12 text-center">
          <div className="inline-block mb-6">
            <span className="font-headline font-black tracking-[0.3em] text-3xl text-white neon-text-glow">NOCTURNE</span>
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-4">Create Account</h1>
          <p className="text-on-surface-variant font-body text-lg max-w-md mx-auto leading-relaxed">Join the Nocturne collective for an immersive dining experience.</p>
        </header>

        <div className="glass-panel border border-outline-variant/15 p-8 md:p-12 rounded-xl shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="group">
              <label className="block text-[10px] font-bold tracking-[0.15em] uppercase text-primary mb-3 ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-secondary transition-colors w-5 h-5" />
                <input className="w-full bg-surface-container-lowest border-none rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-secondary/50 transition-all outline-none" placeholder="Elias Vance" type="text" />
              </div>
            </div>

            <div className="group">
              <label className="block text-[10px] font-bold tracking-[0.15em] uppercase text-primary mb-3 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-secondary transition-colors w-5 h-5" />
                <input className="w-full bg-surface-container-lowest border-none rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-secondary/50 transition-all outline-none" placeholder="vance@collective.net" type="email" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-[10px] font-bold tracking-[0.15em] uppercase text-primary mb-3 ml-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-secondary transition-colors w-5 h-5" />
                  <input className="w-full bg-surface-container-lowest border-none rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-secondary/50 transition-all outline-none" placeholder="••••••••" type="password" />
                </div>
              </div>
              <div className="group">
                <label className="block text-[10px] font-bold tracking-[0.15em] uppercase text-primary mb-3 ml-1">Confirm Password</label>
                <div className="relative">
                  <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-secondary transition-colors w-5 h-5" />
                  <input className="w-full bg-surface-container-lowest border-none rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-secondary/50 transition-all outline-none" placeholder="••••••••" type="password" />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 py-2">
              <input className="h-5 w-5 rounded bg-surface-container-lowest border-outline-variant/30 text-secondary focus:ring-secondary cursor-pointer" type="checkbox" id="terms" />
              <label className="text-sm text-on-surface-variant leading-tight cursor-pointer select-none" htmlFor="terms">
                I agree to the <span className="text-secondary font-semibold">Terms and Conditions</span> and the processing of my culinary preferences.
              </label>
            </div>

            <button className="group relative w-full overflow-hidden rounded-full py-5 bg-gradient-to-tr from-primary to-tertiary-container text-on-primary-container font-headline font-bold uppercase tracking-widest text-sm shadow-[0_10px_30px_rgba(199,153,255,0.3)] hover:scale-[1.02] active:scale-95 transition-all">
              <span className="relative z-10">Sign Up</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-outline-variant/10 text-center">
            <p className="text-on-surface-variant text-sm font-medium">
              Already a member? 
              <Link to="/login" className="text-primary font-bold ml-2 hover:text-secondary transition-colors underline underline-offset-8 decoration-primary/30">Log In</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
