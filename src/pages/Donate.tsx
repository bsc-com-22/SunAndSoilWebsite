import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Droplets, Sprout, CheckCircle, CreditCard, Building2, Smartphone, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const Donate = () => {
    const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
    const [customAmount, setCustomAmount] = useState('');
    const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');

    const presetAmounts = [25, 50, 100, 250, 500, 1000];

    const impactAreas = [
        { icon: Droplets, title: 'Solar Irrigation', desc: '$500 provides a complete solar pump system', color: 'text-blue-500', bg: 'bg-blue-50' },
        { icon: Sprout, title: 'Training Programs', desc: '$100 trains 5 farmers in climate-smart ag', color: 'text-primary', bg: 'bg-primary/5' },
        { icon: Users, title: 'Women Empowerment', desc: '$250 supports a women\'s cooperative', color: 'text-solar-dark', bg: 'bg-solar/10' },
        { icon: Heart, title: 'General Fund', desc: 'Support where needed most', color: 'text-red-500', bg: 'bg-red-50' }
    ];

    return (
        <div className="flex flex-col">
            {/* Header */}
            <section className="relative pt-48 pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 blur-[120px] rounded-full"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-solar/10 blur-[120px] rounded-full"></div>
                </div>
                <div className="container relative z-10 text-center">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl flex items-center justify-center mx-auto mb-10"
                    >
                        <Heart className="h-10 w-10 text-solar fill-current animate-pulse" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white mb-8"
                    >
                        Make a <span className="gradient-text">Difference</span> Today
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
                    >
                        Your donation helps us bring sustainable solutions to rural communities across Malawi. Every contribution creates lasting change.
                    </motion.p>
                </div>
            </section>

            {/* Donation Form Section */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-dark/5 to-transparent"></div>
                <div className="container relative z-10">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-20">

                        {/* Left: Impact Info */}
                        <div className="lg:col-span-2 space-y-12">
                            <div>
                                <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Your Impact</span>
                                <h2 className="text-4xl font-bold mb-8">Where Your Money Goes</h2>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    We are committed to full transparency. 100% of your donation goes directly to our field programs.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {impactAreas.map((area, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-6 p-8 bg-gray-50 rounded-[2rem] border border-transparent hover:border-primary/10 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group"
                                    >
                                        <div className={`${area.bg} w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                            <area.icon className={`h-8 w-8 ${area.color}`} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h4>
                                            <p className="text-sm text-gray-500 leading-relaxed">{area.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="p-10 bg-gray-900 rounded-[2.5rem] text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full group-hover:scale-110 transition-transform"></div>
                                <div className="flex items-center gap-5 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                                        <ShieldCheck className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold">Secure Donation</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Your donation is encrypted and processed securely. We never store your credit card information.
                                </p>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3 bg-white p-10 md:p-16 rounded-[3rem] border border-gray-100 shadow-2xl shadow-primary/5"
                        >
                            {/* Type Toggle */}
                            <div className="flex bg-gray-50 p-2 rounded-2xl mb-12">
                                <button
                                    onClick={() => setDonationType('one-time')}
                                    className={`flex-1 py-4 rounded-xl text-lg font-bold transition-all ${donationType === 'one-time' ? 'bg-white shadow-xl text-primary' : 'text-gray-400 hover:text-gray-600'}`}
                                >
                                    One-Time
                                </button>
                                <button
                                    onClick={() => setDonationType('monthly')}
                                    className={`flex-1 py-4 rounded-xl text-lg font-bold transition-all ${donationType === 'monthly' ? 'bg-white shadow-xl text-primary' : 'text-gray-400 hover:text-gray-600'}`}
                                >
                                    Monthly
                                </button>
                            </div>

                            {/* Amount Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
                                {presetAmounts.map((amount) => (
                                    <button
                                        key={amount}
                                        onClick={() => { setSelectedAmount(amount); setCustomAmount(''); }}
                                        className={`py-6 rounded-2xl font-bold text-xl border-2 transition-all duration-300 ${selectedAmount === amount ? 'border-primary bg-primary/5 text-primary shadow-lg shadow-primary/10' : 'border-gray-100 text-gray-400 hover:border-gray-200 hover:text-gray-600'}`}
                                    >
                                        ${amount}
                                    </button>
                                ))}
                            </div>

                            {/* Custom Amount */}
                            <div className="mb-12">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 block ml-2">Custom Amount</label>
                                <div className="relative">
                                    <span className="absolute left-8 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-300">$</span>
                                    <input
                                        type="number"
                                        value={customAmount}
                                        onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                                        className="w-full pl-14 pr-8 py-6 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all text-2xl font-bold"
                                        placeholder="0.00"
                                    />
                                </div>
                            </div>

                            {/* Payment Methods */}
                            <div className="space-y-6 mb-12">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block ml-2">Payment Method</label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {[
                                        { icon: CreditCard, name: 'Card' },
                                        { icon: Building2, name: 'Bank' },
                                        { icon: Smartphone, name: 'Mobile' }
                                    ].map((m, i) => (
                                        <button key={i} className="flex items-center justify-center gap-3 p-5 border-2 border-gray-100 rounded-2xl hover:border-primary hover:bg-primary/5 transition-all text-sm font-bold text-gray-600 group">
                                            <m.icon className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                                            {m.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button className="btn btn-primary w-full py-6 text-xl group shadow-2xl shadow-primary/20">
                                Complete Donation
                                <Heart className="ml-3 h-6 w-6 fill-current group-hover:scale-125 transition-transform" />
                            </button>

                            <div className="mt-10 flex items-center justify-center gap-8 text-gray-400">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="h-4 w-4" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Secure</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Zap className="h-4 w-4" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Tax-Deductible</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Support Section */}
            <section className="section-padding bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skew-x-12 transform translate-x-1/2"></div>
                <div className="container relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Why Support Us</span>
                        <h2 className="mb-8">Your Trust is Our Priority</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Direct Impact", desc: "100% of your donation goes directly to field programs and beneficiaries." },
                            { title: "Transparency", desc: "Regular reports and updates on how your contribution is making a difference." },
                            { title: "Sustainability", desc: "We focus on long-term solutions that create lasting self-sufficiency." },
                            { title: "Proven Results", desc: "Our programs have a track record of increasing yields and incomes." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                                    <CheckCircle className="h-6 w-6 text-primary group-hover:text-white" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-4">{item.title}</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Donate;
