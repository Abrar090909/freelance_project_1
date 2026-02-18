
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Dumbbell,
  ChevronRight,
  Check,
  Menu,
  X,
  Instagram,
  Twitter,
  Facebook,
  Play,
  ArrowRight,
  MapPin,
  Send,
  Calendar,
  User,
  Phone,
  Mail,
  Zap,
  Activity,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Theme Constants ---
const COLORS = {
  primaryBg: '#1B1D23',
  secondaryBg: '#23262F',
  accent: '#5A189A', // High-impact Purple
  hover: '#7B2CBF',   // Hover Purple
  textPrimary: '#F2F2F2',
  textSecondary: '#B0B3BB',
};

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// --- Components ---

const LeadFormModal = ({ isOpen, onClose, type }: { isOpen: boolean, onClose: () => void, type: 'join' | 'tour' }) => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) setSubmitted(false);
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-lg bg-[#1B1D23] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors z-10"
          >
            <X size={24} />
          </button>

          <div className="p-10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-[#5A189A] rounded-full flex items-center justify-center mx-auto mb-8">
                  <Check className="text-white" size={40} />
                </div>
                <h2 className="text-4xl font-display text-white uppercase mb-4 tracking-tighter">SUCCESS!</h2>
                <p className="text-gray-400 font-bold mb-8 uppercase text-xs tracking-widest">Our head coach will contact you within 24 hours.</p>
                <button
                  onClick={onClose}
                  className="px-10 py-4 border border-white/10 rounded-full text-white font-bold text-[10px] tracking-widest uppercase hover:bg-white/5 transition-all"
                >
                  Close Window
                </button>
              </motion.div>
            ) : (
              <>
                <div className="mb-10 text-center">
                  <span className="text-[#5A189A] font-bold text-xs tracking-[0.4em] uppercase mb-3 block">
                    {type === 'join' ? 'Secure Your Spot' : 'Exclusive Access'}
                  </span>
                  <h2 className="text-5xl font-display text-white uppercase tracking-tight leading-none">
                    {type === 'join' ? 'START YOUR' : 'BOOK A FREE'}<br />
                    <span className="text-[#5A189A]">{type === 'join' ? 'EVOLUTION' : 'FACILITY TOUR'}</span>
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#5A189A] transition-colors" size={18} />
                    <input
                      required
                      type="text"
                      placeholder="FULL NAME"
                      className="w-full bg-[#23262F] border border-white/5 rounded-lg pl-12 pr-6 py-5 text-white font-bold text-xs uppercase tracking-widest outline-none focus:border-[#5A189A] transition-all"
                    />
                  </div>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#5A189A] transition-colors" size={18} />
                    <input
                      required
                      type="email"
                      placeholder="EMAIL ADDRESS"
                      className="w-full bg-[#23262F] border border-white/5 rounded-lg pl-12 pr-6 py-5 text-white font-bold text-xs uppercase tracking-widest outline-none focus:border-[#5A189A] transition-all"
                    />
                  </div>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#5A189A] transition-colors" size={18} />
                    <input
                      required
                      type="tel"
                      placeholder="PHONE NUMBER"
                      className="w-full bg-[#23262F] border border-white/5 rounded-lg pl-12 pr-6 py-5 text-white font-bold text-xs uppercase tracking-widest outline-none focus:border-[#5A189A] transition-all"
                    />
                  </div>

                  {type === 'join' ? (
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase text-gray-500 tracking-[0.2em] ml-2">Preferred Program</label>
                      <select className="w-full bg-[#23262F] border border-white/5 rounded-lg px-6 py-5 text-white font-bold text-xs uppercase tracking-widest outline-none focus:border-[#5A189A] transition-all appearance-none">
                        <option>Combat Arts (MMA)</option>
                        <option>Power Lifting</option>
                        <option>Body Sculpting</option>
                        <option>General Fitness</option>
                      </select>
                    </div>
                  ) : (
                    <div className="relative group">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#5A189A] transition-colors" size={18} />
                      <input
                        required
                        type="date"
                        className="w-full bg-[#23262F] border border-white/5 rounded-lg pl-12 pr-6 py-5 text-white font-bold text-xs uppercase tracking-widest outline-none focus:border-[#5A189A] transition-all"
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-[#5A189A] hover:bg-[#7B2CBF] py-6 rounded-lg text-white font-display text-lg uppercase tracking-[0.1em] transition-all shadow-xl shadow-purple-900/30 flex items-center justify-center gap-3 active:scale-95"
                  >
                    Send Request <Send size={16} />
                  </button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Navbar = ({ currentPage, setPage, openModal }: { currentPage: string, setPage: (page: string) => void, openModal: (type: 'join' | 'tour') => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'About Us', id: 'about' },
  ];

  return (
    <div className="fixed w-full z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-500 ease-in-out flex items-center justify-between px-6 py-3 rounded-full border border-white/10 shadow-2xl backdrop-blur-xl bg-[#1B1D23]/80 ${isScrolled ? 'w-full max-w-4xl' : 'w-full max-w-6xl'
          }`}
      >
        <button onClick={() => setPage('home')} className="flex items-center gap-2 group shrink-0">
          <div className="w-9 h-9 bg-[#5A189A] flex items-center justify-center rounded-full group-hover:rotate-12 transition-all shadow-lg shadow-purple-900/20">
            <Dumbbell className="text-white w-5 h-5" />
          </div>
          <span className="font-display text-2xl tracking-tight uppercase text-white">FYRON<span className="text-[#5A189A]">FITNESS</span></span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setPage(link.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`font-display text-lg tracking-[0.1em] uppercase transition-colors ${currentPage === link.id ? 'text-[#5A189A]' : 'text-[#B0B3BB] hover:text-[#5A189A]'
                }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => openModal('join')}
            className="bg-[#5A189A] text-white px-6 py-2 rounded-full font-display text-lg tracking-wider transition-all hover:bg-[#7B2CBF] active:scale-95 shadow-xl shadow-purple-900/30"
          >
            JOIN NOW ↗
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-[#1B1D23] border border-white/10 rounded-2xl p-6 flex flex-col gap-6 md:hidden shadow-2xl pointer-events-auto"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`text-left text-2xl font-display uppercase tracking-wider ${currentPage === link.id ? 'text-[#5A189A]' : 'text-[#B0B3BB]'}`}
                onClick={() => {
                  setPage(link.id);
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => { openModal('join'); setIsOpen(false); }}
              className="bg-[#5A189A] text-white py-4 rounded-xl font-display text-xl uppercase tracking-widest"
            >
              Join Vizag's Best
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Hero = ({ openModal }: { openModal: (type: 'join' | 'tour') => void }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B1D23] via-[#1B1D23]/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-20 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#5A189A] font-bold tracking-[0.4em] text-xs uppercase flex items-center gap-2 bg-black/40 backdrop-blur-md py-2 px-4 rounded-full border border-white/10">
              <MapPin size={14} /> VIZAG'S BIGGEST GYM IS NOW OPEN ≫≫≫
            </span>
          </div>
          <h1 className="text-6xl md:text-[140px] font-display leading-[0.8] mb-8 uppercase tracking-tight text-white">
            <span className="text-[#5A189A]">FORGE</span> YOUR<br />
            <span className="text-white/20 stroke-text">DESTINY</span>
          </h1>
          <p className="text-lg md:text-xl text-[#B0B3BB] max-w-xl mb-12 leading-relaxed font-bold">
            Experience 35,000 sq.ft of pure performance. Located in the heart of Vizag, we've redefined the iron standard with elite coaching and world-class equipment.
          </p>
          <div className="flex flex-wrap gap-6">
            <button
              onClick={() => openModal('join')}
              className="px-12 py-6 bg-[#5A189A] hover:bg-[#7B2CBF] text-white font-display text-xl uppercase tracking-widest rounded transition-all shadow-2xl shadow-purple-900/40 active:scale-95"
            >
              Start Your Evolution
            </button>
            <button
              onClick={() => openModal('tour')}
              className="px-12 py-6 border-2 border-white/20 hover:bg-white/10 text-white font-display text-xl uppercase tracking-widest rounded transition-all active:scale-95"
            >
              Book A Free Tour
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1B1D23] to-transparent z-20" />
    </section>
  );
};

const Services = () => {
  const categories = [
    { title: "Combat Arts", description: "Master the art of striking and defense with our elite MMA and Boxing protocols.", img: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1374&auto=format&fit=crop" },
    { title: "Power Lifting", description: "Break your PRs on professional olympic platforms with premium calibrated plates.", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop" },
    { title: "Body Sculpting", description: "Hypertrophy-focused training using city's widest range of Hammer Strength machines.", img: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=1474&auto=format&fit=crop" },
    { title: "Cardio Zone", description: "High-performance metabolic conditioning area with air-bikes and curved treadmills.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" },
    { title: "Yoga & Flow", description: "Balance the fire with recovery-focused mobility and traditional yoga sessions.", img: "https://images.unsplash.com/photo-1518611012118-2969c636020a?q=80&w=1470&auto=format&fit=crop" },
    { title: "Personal Training", description: "1-on-1 guidance from international certified coaches for targeted results.", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop" },
  ];

  return (
    <section id="services" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <span className="text-[#5A189A] font-bold text-sm tracking-[0.3em] uppercase mb-4 block">World Class Training</span>
          <h2 className="text-6xl font-display uppercase tracking-tight text-black">THE <span className="text-[#5A189A]">FYRON</span> EDGE</h2>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-lg font-bold">
            Unrivaled facilities and scientific training methodologies designed for Vizag's elite.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-gray-50 rounded-lg overflow-hidden group border border-gray-100 hover:border-[#5A189A]/30 transition-all duration-500 shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all" />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-display uppercase text-black mb-3 group-hover:text-[#5A189A] transition-colors">{cat.title}</h3>
                <p className="text-sm text-gray-500 font-bold leading-relaxed mb-6">{cat.description}</p>
                <button className="text-[#5A189A] font-display uppercase tracking-widest text-lg flex items-center gap-2 group-hover:gap-4 transition-all">
                  Explore More <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#23262F] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 relative">
            <span className="text-[#5A189A] font-bold text-sm tracking-widest uppercase mb-4 block">Built for Excellence</span>
            <h2 className="text-6xl font-display mb-8 leading-none uppercase">VIZAG'S <span className="text-[#5A189A]">STRONGEST</span> COMMUNITY</h2>
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-2xl group">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" alt="Athlete" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#5A189A]/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-12">
              <div>
                <h3 className="text-4xl font-display mb-6 uppercase flex items-center gap-3">
                  Our Philosophy <div className="h-1 w-12 bg-[#5A189A]" />
                </h3>
                <p className="text-gray-400 leading-relaxed font-bold text-xl">
                  Fyron Fitness isn't just about weight lifting; it's about lifting the standard of your life. We believe in high-performance living, where discipline in the gym translates to success in the world.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#1B1D23] p-8 rounded-lg border-l-4 border-[#5A189A]">
                  <h4 className="text-2xl font-display uppercase mb-3">Science Driven</h4>
                  <p className="text-sm text-gray-500 font-bold">Every program is backed by sports science and biomechanical data to ensure peak efficiency.</p>
                </div>
                <div className="bg-[#1B1D23] p-8 rounded-lg border-l-4 border-[#5A189A]">
                  <h4 className="text-2xl font-display uppercase mb-3">Elite Coaches</h4>
                  <p className="text-sm text-gray-500 font-bold">Our trainers aren't just staff; they are athletes and certified professionals with international credentials.</p>
                </div>
                <div className="bg-[#1B1D23] p-8 rounded-lg border-l-4 border-[#5A189A]">
                  <h4 className="text-2xl font-display uppercase mb-3">Recovery Protocols</h4>
                  <p className="text-sm text-gray-500 font-bold">Advanced percussion therapy and ice bath facilities available for total nervous system reset.</p>
                </div>
                <div className="bg-[#1B1D23] p-8 rounded-lg border-l-4 border-[#5A189A]">
                  <h4 className="text-2xl font-display uppercase mb-3">Nutritional Blueprints</h4>
                  <p className="text-sm text-gray-500 font-bold">Bio-individual meal protocols designed to fuel your specific metabolic and performance needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculate = () => {
    if (height && weight) {
      const h = parseFloat(height) / 100;
      const w = parseFloat(weight);
      if (h > 0 && w > 0) {
        const val = w / (h * h);
        setBmi(parseFloat(val.toFixed(1)));
      }
    }
  };

  const getStatus = (val: number) => {
    if (val < 18.5) return 'Underweight';
    if (val < 25) return 'Normal';
    if (val < 30) return 'Overweight';
    return 'Obese';
  };

  return (
    <section id="bmi" className="py-32 px-6 bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-[#5A189A] font-bold text-sm tracking-widest uppercase mb-4 block">Performance Check</span>
          <h2 className="text-6xl font-display text-black uppercase mb-8 leading-tight tracking-tighter">BMI <span className="text-[#5A189A]">CALCULATOR</span></h2>
          <div className="space-y-6 max-w-md">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Height / CM</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="eg: 175"
                  className="w-full bg-gray-50 border-2 border-gray-100 p-5 rounded-lg focus:ring-2 focus:ring-[#5A189A] focus:border-[#5A189A] outline-none font-bold text-black placeholder-gray-400 transition-all shadow-sm"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Weight / KG</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="eg: 78"
                  className="w-full bg-gray-50 border-2 border-gray-100 p-5 rounded-lg focus:ring-2 focus:ring-[#5A189A] focus:border-[#5A189A] outline-none font-bold text-black placeholder-gray-400 transition-all shadow-sm"
                />
              </div>
            </div>
            <button
              onClick={calculate}
              className="w-full bg-[#5A189A] text-white py-6 font-display text-2xl uppercase tracking-[0.1em] hover:bg-[#7B2CBF] transition-all shadow-2xl shadow-purple-900/40 rounded-lg group flex items-center justify-center gap-3"
            >
              Calculate Result <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </button>
          </div>

          <AnimatePresence>
            {bmi && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="mt-10 p-8 bg-gray-50 text-black rounded-xl shadow-xl border border-[#5A189A]/10 relative overflow-hidden group"
              >
                <div className="flex justify-between items-center relative z-10">
                  <div>
                    <p className="text-xs font-bold text-[#5A189A] uppercase mb-2 tracking-[0.2em]">Body Mass Index</p>
                    <h3 className="text-7xl font-display text-black">{bmi}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Status</p>
                    <p className={`text-4xl font-display uppercase tracking-tighter ${getStatus(bmi) === 'Normal' ? 'text-green-500' : 'text-[#5A189A]'
                      }`}>{getStatus(bmi)}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop" className="w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-700" />
        </motion.div>
      </div>
    </section>
  );
};

const Pricing = ({ openModal }: { openModal: (type: 'join' | 'tour') => void }) => {
  const plans = [
    {
      id: "01",
      name: "Starter Pack",
      tagline: "Build The Base",
      price: "2,499",
      features: ["24/7 Floor Access", "Standard Lockers", "Free Guest Pass (1/mo)", "Mobile App Access", "Water Fountain Access"],
      accent: false
    },
    {
      id: "02",
      name: "Fyron Prime",
      tagline: "Total Dominance",
      price: "4,999",
      features: ["All Starter Perks", "Personalized Workout Map", "Nutrition Support", "Premium Steam & Ice", "Priority Booking", "Recovery Zone Access"],
      accent: true
    },
    {
      id: "03",
      name: "Alpha Elite",
      tagline: "Ultimate Status",
      price: "9,999",
      features: ["Unlimited PT Access", "In-Body Biometrics", "Private Dressing Suite", "Daily Protein Shake", "VVIP Event Invites", "Family Discount Pass"],
      accent: false
    },
  ];

  return (
    <section id="pricing" className="py-32 bg-[#1B1D23] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-[#5A189A] font-bold text-sm tracking-[0.5em] uppercase mb-4 block underline underline-offset-8 decoration-white/10">Access Levels</span>
          <h2 className="text-7xl font-display text-white uppercase mb-6 tracking-tighter">SELECT YOUR <span className="text-[#5A189A]">LEVEL</span></h2>
          <p className="text-gray-400 font-bold max-w-lg mx-auto uppercase text-xs tracking-widest mt-4">Transparent pricing. Unmatched value. No hidden fees.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -20, scale: 1.02 }}
              className={`group p-10 rounded-2xl border-t-8 transition-all duration-500 relative flex flex-col bg-[#23262F] shadow-2xl overflow-hidden ${plan.accent ? 'border-[#5A189A] shadow-purple-900/30 ring-1 ring-[#5A189A]/20' : 'border-white/5 hover:border-[#5A189A]/40'}`}
            >
              {/* Background Number */}
              <div className="absolute top-4 right-4 text-[120px] font-impact stroke-text opacity-5 select-none leading-none z-0">
                {plan.id}
              </div>

              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-4xl font-display uppercase text-white tracking-tight leading-none mb-1">{plan.name}</h3>
                  <p className="text-[#5A189A] font-bold text-[10px] uppercase tracking-[0.3em]">{plan.tagline}</p>
                </div>

                <div className="flex items-baseline mb-10 bg-[#1B1D23] rounded-xl p-6 border border-white/5">
                  <span className="text-2xl font-display text-gray-500 uppercase mr-1">₹</span>
                  <span className="text-6xl font-impact text-white tracking-tighter">{plan.price}</span>
                  <span className="text-gray-600 font-bold ml-2 tracking-widest uppercase text-[10px]">/ mo</span>
                </div>

                <div className="space-y-5 mb-12 flex-grow">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 border-b border-white/5 pb-2">Benefits Included</p>
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-300 font-bold text-[11px] uppercase leading-tight list-none">
                      <Check className="text-[#5A189A] w-4 h-4 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </div>

                <button
                  onClick={() => openModal('join')}
                  className={`w-full py-5 font-display text-xl uppercase tracking-widest rounded transition-all active:scale-95 flex items-center justify-center gap-2 ${plan.accent ? 'bg-[#5A189A] text-white hover:bg-[#7B2CBF] shadow-xl shadow-purple-900/40' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}
                >
                  GET STARTED <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoHighlight = () => {
  return (
    <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
      <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover brightness-50" />
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 text-center px-6">
        <span className="text-[#5A189A] font-bold text-sm tracking-[0.4em] uppercase mb-8 block">Iron Mindset Only</span>
        <h2 className="text-7xl md:text-9xl font-display text-white uppercase mb-12 tracking-tight">FUEL THE <span className="text-[#5A189A]">FYRE</span></h2>
        <button className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full border-2 border-white/20 flex items-center justify-center hover:scale-110 hover:bg-[#5A189A] transition-all group shadow-2xl shadow-purple-900/50">
          <Play className="text-white fill-white group-hover:fill-white ml-1" size={32} />
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#1B1D23] pt-32 pb-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 mb-10 group">
              <div className="w-10 h-10 bg-[#5A189A] flex items-center justify-center rounded group-hover:rotate-12 transition-all">
                <Dumbbell className="text-white w-6 h-6" />
              </div>
              <span className="font-display text-3xl tracking-tight text-white uppercase">FYRON<span className="text-[#5A189A]">FITNESS</span></span>
            </button>
            <p className="text-gray-500 mb-10 leading-relaxed font-bold">
              Establishing the new frontier of elite performance in Vizag. We provide the equipment, you provide the will.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded bg-white/5 flex items-center justify-center hover:bg-[#5A189A] transition-all text-white"><Instagram size={22} /></a>
              <a href="#" className="w-12 h-12 rounded bg-white/5 flex items-center justify-center hover:bg-[#5A189A] transition-all text-white"><Twitter size={22} /></a>
              <a href="#" className="w-12 h-12 rounded bg-white/5 flex items-center justify-center hover:bg-[#5A189A] transition-all text-white"><Facebook size={22} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-2xl mb-10 uppercase text-[#5A189A]">Quick Access</h4>
            <ul className="space-y-4 text-gray-500 font-bold uppercase text-[12px] tracking-[0.2em]">
              <li><button onClick={() => window.scrollTo({ top: 0 })} className="hover:text-white transition-colors">Home Page</button></li>
              <li><button onClick={() => window.scrollTo({ top: 0 })} className="hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => window.scrollTo({ top: 0 })} className="hover:text-white transition-colors">Pricing Plans</button></li>
              <li><button onClick={() => window.scrollTo({ top: 0 })} className="hover:text-white transition-colors">About Fyron</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-2xl mb-10 uppercase text-[#5A189A]">The Hub</h4>
            <ul className="space-y-4 text-gray-500 font-bold text-[12px] uppercase tracking-[0.1em]">
              <li className="flex items-center gap-3"><MapPin size={14} className="text-[#5A189A]" /> MVP Colony, Vizag</li>
              <li>Andhra Pradesh - 530017</li>
              <li>hello@fyron.in</li>
              <li>+91 888 777 6655</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-2xl mb-10 uppercase text-white tracking-widest">Subscribe</h4>
            <p className="text-gray-500 mb-6 text-sm font-bold uppercase leading-relaxed">Join 500+ Alphas receiving weekly performance blueprints.</p>
            <div className="relative">
              <input type="email" placeholder="YOUR EMAIL" className="w-full bg-[#23262F] border border-white/5 px-6 py-5 rounded-lg focus:outline-none focus:border-[#5A189A] text-white text-xs font-bold uppercase tracking-widest shadow-inner" />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5A189A] hover:text-white transition-colors"><ArrowRight size={22} /></button>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.3em]">© 2024 FYRON FITNESS VIZAG // ENGINEERED BY THE DESTINY</p>
          <div className="flex gap-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#5A189A]">Performance</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">Discipline</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#5A189A]">Result</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [currentPage, setPage] = useState('home');
  const [modalState, setModalState] = useState<{ open: boolean, type: 'join' | 'tour' }>({ open: false, type: 'join' });

  const openModal = (type: 'join' | 'tour') => {
    setModalState({ open: true, type });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, open: false }));
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'services':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="pt-40 pb-16 bg-[#23262F] text-center border-b border-white/5">
              <h1 className="text-7xl md:text-9xl font-display text-white uppercase tracking-tighter">OUR <span className="text-[#5A189A]">SERVICES</span></h1>
            </div>
            <Services />
            <BMICalculator />
          </motion.div>
        );
      case 'pricing':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="pt-40 pb-16 bg-[#23262F] text-center border-b border-white/5">
              <h1 className="text-7xl md:text-9xl font-display text-white uppercase tracking-tighter">PLAN YOUR <span className="text-[#5A189A]">EVOLUTION</span></h1>
            </div>
            <Pricing openModal={openModal} />
          </motion.div>
        );
      case 'about':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="pt-40 pb-16 bg-[#23262F] text-center border-b border-white/5">
              <h1 className="text-7xl md:text-9xl font-display text-white uppercase tracking-tighter">ABOUT <span className="text-[#5A189A]">FYRON</span></h1>
            </div>
            <AboutUs />
          </motion.div>
        );
      default:
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Hero openModal={openModal} />
            <Services />
            <AboutUs />
            <BMICalculator />
            <Pricing openModal={openModal} />
            <VideoHighlight />
          </motion.div>
        );
    }
  };

  return (
    <div className="bg-[#1B1D23] selection:bg-[#5A189A] selection:text-white min-h-screen">
      <Navbar currentPage={currentPage} setPage={setPage} openModal={openModal} />
      <AnimatePresence mode="wait">
        <div key={currentPage}>
          {renderContent()}
        </div>
      </AnimatePresence>
      <Footer />
      <LeadFormModal
        isOpen={modalState.open}
        onClose={closeModal}
        type={modalState.type}
      />
    </div>
  );
};

// --- Style Injection ---
const style = document.createElement('style');
style.textContent = `
  .stroke-text {
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
    color: transparent;
  }
`;
document.head.appendChild(style);

// --- Render ---
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
