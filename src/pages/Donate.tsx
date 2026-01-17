import React, { useState } from 'react';
import { Heart, Users, Droplets, Sprout, CheckCircle, CreditCard, Building2, Smartphone } from 'lucide-react';

const Donate = () => {
    const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
    const [customAmount, setCustomAmount] = useState('');
    const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');

    const presetAmounts = [25, 50, 100, 250, 500, 1000];

    const impactAreas = [
        { icon: Droplets, title: 'Solar Irrigation', desc: '$500 provides a complete solar pump system' },
        { icon: Sprout, title: 'Training Programs', desc: '$100 trains 5 farmers in climate-smart ag' },
        { icon: Users, title: 'Women Empowerment', desc: '$250 supports a women\'s cooperative' },
        { icon: Heart, title: 'General Fund', desc: 'Support where needed most' }
    ];

    return (
        <div className="flex flex-col">
            {/* Header */}
            <section className="relative pt-40 pb-24 bg-primary-dark text-white text-center overflow-hidden">
                <div className="container relative z-10">
                    <Heart className="h-12 w-12 mx-auto mb-6 text-solar" />
                    <h1 className="text-white mb-6">Make a Difference Today</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
                        Your donation helps us bring sustainable solutions to rural communities across Malawi.
                    </p>
                </div>
            </section>

            {/* Donation Form */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

                        {/* Left: Impact Info */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Your Impact</h2>
                                <p className="text-gray-600 text-sm">Every contribution creates lasting change for farmers and their families.</p>
                            </div>
                            <div className="space-y-4">
                                {impactAreas.map((area, i) => (
                                    <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                        <area.icon className="h-5 w-5 text-primary shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-sm">{area.title}</h4>
                                            <p className="text-xs text-gray-500">{area.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="lg:col-span-3 card p-6 md:p-10">
                            <div className="flex bg-gray-50 p-1 rounded-xl mb-8">
                                <button
                                    onClick={() => setDonationType('one-time')}
                                    className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${donationType === 'one-time' ? 'bg-white shadow-sm text-primary' : 'text-gray-500'}`}
                                >
                                    One-Time
                                </button>
                                <button
                                    onClick={() => setDonationType('monthly')}
                                    className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${donationType === 'monthly' ? 'bg-white shadow-sm text-primary' : 'text-gray-500'}`}
                                >
                                    Monthly
                                </button>
                            </div>

                            <div className="grid grid-cols-3 gap-3 mb-6">
                                {presetAmounts.map((amount) => (
                                    <button
                                        key={amount}
                                        onClick={() => { setSelectedAmount(amount); setCustomAmount(''); }}
                                        className={`py-3 rounded-xl font-bold border-2 transition-all ${selectedAmount === amount ? 'border-primary bg-primary/5 text-primary' : 'border-gray-100 text-gray-600 hover:border-gray-200'}`}
                                    >
                                        ${amount}
                                    </button>
                                ))}
                            </div>

                            <div className="mb-8">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Custom Amount</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                                    <input
                                        type="number"
                                        value={customAmount}
                                        onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                                        className="w-full pl-8 pr-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:border-primary focus:bg-white outline-none transition-all"
                                        placeholder="Enter amount"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block">Payment Method</label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {[
                                        { icon: CreditCard, name: 'Card' },
                                        { icon: Building2, name: 'Bank' },
                                        { icon: Smartphone, name: 'Mobile' }
                                    ].map((m, i) => (
                                        <button key={i} className="flex items-center justify-center gap-2 p-3 border border-gray-100 rounded-xl hover:border-primary transition-colors text-sm font-medium text-gray-700">
                                            <m.icon className="h-4 w-4" />
                                            {m.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button className="btn btn-primary w-full py-4">
                                Complete Donation
                            </button>
                            <p className="text-center text-[10px] text-gray-400 mt-4">Secure & Tax-Deductible</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Support */}
            <section className="section-padding bg-gray-50">
                <div className="container">
                    <h2 className="text-2xl font-bold text-center mb-12">Why Your Support Matters</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Direct Impact", desc: "100% goes to programs." },
                            { title: "Transparency", desc: "Regular impact updates." },
                            { title: "Sustainability", desc: "Long-term solutions." },
                            { title: "Proven Results", desc: "Measurable change." }
                        ].map((item, i) => (
                            <div key={i} className="card p-6">
                                <CheckCircle className="h-5 w-5 text-primary mb-4" />
                                <h4 className="font-bold text-sm mb-2">{item.title}</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Donate;
