import React from 'react';
import { Mail, Lock, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CustomerLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-tertiary-container/10 blur-[100px] rounded-full"></div>

      <main className="w-full max-w-[480px] relative z-10">
        <header className="flex flex-col items-center mb-12 text-center">
          <div className="mb-6">
            <h1 className="font-headline font-black text-3xl tracking-[0.2em] text-white">NOCTURNE</h1>
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-2"></div>
          </div>
          <h2 className="font-headline font-extrabold text-4xl tracking-tighter text-white mb-3">Welcome Back</h2>
          <p className="text-on-surface-variant font-body max-w-[320px] leading-relaxed">Enter your credentials to continue your culinary journey.</p>
        </header>

        <div className="glass-panel p-8 md:p-12 rounded-xl shadow-[0_40px_80px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="block text-[10px] font-bold tracking-[0.15em] uppercase text-on-surface-variant ml-4">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors w-5 h-5" />
                <input
                  className="w-full bg-surface-container-lowest border border-white/5 rounded-full py-4 pl-14 pr-6 text-on-surface placeholder:text-outline/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                  placeholder="name@example.com"
                  type="email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-4">
                <label className="block text-[10px] font-bold tracking-[0.15em] uppercase text-on-surface-variant">Password</label>
                <button className="text-[10px] font-bold tracking-[0.1em] uppercase text-primary hover:text-secondary transition-colors">Forgot Password?</button>
              </div>
              <div className="relative group">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors w-5 h-5" />
                <input
                  className="w-full bg-surface-container-lowest border border-white/5 rounded-full py-4 pl-14 pr-14 text-on-surface placeholder:text-outline/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                  placeholder="••••••••"
                  type="password"
                />
                <button className="absolute right-5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-white">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>

            <button className="w-full bg-gradient-to-tr from-primary to-tertiary-container text-on-primary-container font-headline font-bold uppercase tracking-widest py-5 rounded-full shadow-[0_10px_30px_rgba(199,153,255,0.25)] hover:shadow-[0_15px_40px_rgba(199,153,255,0.4)] transition-all mt-4 active:scale-95">
              Login
            </button>

            <div className="flex items-center gap-4 py-4">
              <div className="h-[1px] flex-1 bg-white/5"></div>
              <span className="text-[10px] font-bold tracking-widest text-outline uppercase">Or login with</span>
              <div className="h-[1px] flex-1 bg-white/5"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 bg-surface-container-high border border-white/5 py-4 rounded-full hover:bg-surface-bright transition-colors group active:scale-95">
                <svg className="w-5 h-5 fill-white/80 group-hover:fill-white" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.909 3.16-1.91 4.17-1.01 1.01-2.58 2.01-5.93 2.01-5.41 0-9.82-4.39-9.82-9.8 0-5.41 4.41-9.8 9.82-9.8 2.92 0 5.11 1.14 6.89 2.76l2.3-2.3C19.46 1.03 16.32 0 12.48 0 5.61 0 0 5.61 0 12.5s5.61 12.5 12.48 12.5c3.75 0 6.6-1.24 8.9-3.64 2.3-2.3 3-5.54 3-8.16 0-.6-.05-1.17-.16-1.68h-11.74z" />
                </svg>
                <span className="text-[10px] font-bold tracking-widest uppercase text-white">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 bg-surface-container-high border border-white/5 py-4 rounded-full hover:bg-surface-bright transition-colors group active:scale-95">
                <svg className="w-5 h-5 fill-white/80 group-hover:fill-white" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.96.95-2.21 1.72-3.71 1.72-1.47 0-2.39-.81-3.69-.81-1.31 0-2.43.78-3.69.78-1.42 0-2.67-.78-3.61-1.74-2.14-2.18-2.14-6.32 0-8.5 1.01-1.02 2.37-1.63 3.61-1.63 1.34 0 2.18.79 3.69.79 1.48 0 2.27-.79 3.69-.79 1.25 0 2.45.58 3.39 1.5-2.61 1.48-2.18 5.4.33 6.68-.49 1.48-1.01 2.5-2.01 3.5zm-3.05-15.28c.84-1.03 1.41-2.46 1.41-3.89 0-.19-.02-.38-.06-.57-1.34.05-2.95.89-3.91 2.02-.81.94-1.37 2.34-1.37 3.75 0 .21.03.41.07.56 1.48.11 2.97-.84 3.86-1.87z" />
                </svg>
                <span className="text-[10px] font-bold tracking-widest uppercase text-white">Apple</span>
              </button>
            </div>
          </form>
        </div>

        <p className="text-center mt-8 text-on-surface-variant font-body">
          New to Nocturne? 
          <Link to="/signup" className="text-secondary font-bold hover:text-primary ml-2 transition-colors underline underline-offset-4">Create an Account</Link>
        </p>
      </main>
    </div>
  );
}
