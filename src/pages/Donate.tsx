import React, { useState } from 'react';
import { Heart, Users, Droplets, Sprout, CheckCircle, CreditCard, Building2, Smartphone } from 'lucide-react';

const Donate = () => {
    const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
    const [customAmount, setCustomAmount] = useState('');
    const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');

    const presetAmounts = [25, 50, 100, 250, 500, 1000];

    const impactAreas = [
        {
            icon: <Droplets className="h-8 w-8 text-white" />,
            title: 'Solar Irrigation',
            color: 'bg-solar',
            description: 'Fund solar pump installations',
            impact: '$500 provides a complete solar pump system'
        },
        {
            icon: <Sprout className="h-8 w-8 text-white" />,
            title: 'Training Programs',
            color: 'bg-primary',
            description: 'Support farmer education',
            impact: '$100 trains 5 farmers in climate-smart agriculture'
        },
        {
            icon: <Users className="h-8 w-8 text-white" />,
            title: 'Women Empowerment',
            color: 'bg-earth',
            description: 'Empower women farmers',
            impact: '$250 supports a women\'s cooperative for 3 months'
        },
        {
            icon: <Heart className="h-8 w-8 text-white" />,
            title: 'General Fund',
            color: 'bg-primary-dark',
            description: 'Support where needed most',
            impact: 'Your gift makes an immediate impact'
        }
    ];

    const paymentMethods = [
        { icon: <CreditCard className="h-6 w-6" />, name: 'Credit/Debit Card' },
        { icon: <Building2 className="h-6 w-6" />, name: 'Bank Transfer' },
        { icon: <Smartphone className="h-6 w-6" />, name: 'Mobile Money' }
    ];

    return (
        <div className="flex flex-col">
            {/* Header */}
            <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <Heart className="h-16 w-16 mx-auto mb-6 animate-pulse" />
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Make a Difference Today</h1>
                    <p className="text-xl max-w-3xl mx-auto text-gray-100">
                        Your donation helps us bring sustainable solutions to rural communities across Malawi.
                    </p>
                    <p className="text-lg max-w-2xl mx-auto text-gray-200 mt-4">
                        Every contribution, no matter the size, creates lasting change for farmers and their families.
                    </p>
                </div>
            </section>

            {/* Impact Areas */}
            <section className="py-20 bg-neutral-light">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-heading font-bold text-gray-800 mb-4">Where Your Donation Goes</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Choose an area to support or contribute to our general fund for maximum flexibility.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {impactAreas.map((area, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className={`${area.color} p-6 flex justify-center`}>
                                    {area.icon}
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{area.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{area.description}</p>
                                    <div className="pt-4 border-t border-gray-100">
                                        <p className="text-sm text-primary font-medium">{area.impact}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Donation Form */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                            {/* Donation Type Toggle */}
                            <div className="bg-neutral-light p-6 border-b border-gray-200">
                                <div className="flex justify-center gap-4">
                                    <button
                                        onClick={() => setDonationType('one-time')}
                                        className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${donationType === 'one-time'
                                                ? 'bg-primary text-white shadow-lg'
                                                : 'bg-white text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        One-Time Gift
                                    </button>
                                    <button
                                        onClick={() => setDonationType('monthly')}
                                        className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${donationType === 'monthly'
                                                ? 'bg-primary text-white shadow-lg'
                                                : 'bg-white text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        Monthly Giving
                                    </button>
                                </div>
                                {donationType === 'monthly' && (
                                    <p className="text-center text-sm text-gray-600 mt-4">
                                        Monthly donors provide sustainable support that helps us plan long-term projects
                                    </p>
                                )}
                            </div>

                            {/* Amount Selection */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Select Your Donation Amount</h3>

                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    {presetAmounts.map((amount) => (
                                        <button
                                            key={amount}
                                            onClick={() => {
                                                setSelectedAmount(amount);
                                                setCustomAmount('');
                                            }}
                                            className={`py-4 rounded-lg font-bold text-lg transition-all duration-300 ${selectedAmount === amount
                                                    ? 'bg-primary text-white shadow-lg scale-105'
                                                    : 'bg-neutral-light text-gray-700 hover:bg-gray-200'
                                                }`}
                                        >
                                            ${amount}
                                        </button>
                                    ))}
                                </div>

                                <div className="mb-8">
                                    <label className="block text-gray-700 font-medium mb-2">Or enter a custom amount:</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl">$</span>
                                        <input
                                            type="number"
                                            value={customAmount}
                                            onChange={(e) => {
                                                setCustomAmount(e.target.value);
                                                setSelectedAmount(null);
                                            }}
                                            placeholder="Enter amount"
                                            className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none text-lg"
                                        />
                                    </div>
                                </div>

                                {/* Payment Methods */}
                                <div className="mb-8">
                                    <h4 className="text-lg font-bold text-gray-800 mb-4">Payment Method</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {paymentMethods.map((method, index) => (
                                            <button
                                                key={index}
                                                className="flex items-center justify-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300"
                                            >
                                                {method.icon}
                                                <span className="font-medium text-gray-700">{method.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Donor Information */}
                                <div className="mb-8">
                                    <h4 className="text-lg font-bold text-gray-800 mb-4">Your Information</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none md:col-span-2"
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button className="w-full bg-primary text-white font-bold py-4 px-8 rounded-lg hover:bg-primary-dark transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                                    <Heart className="h-6 w-6" />
                                    Complete Donation
                                </button>

                                <p className="text-center text-sm text-gray-500 mt-6">
                                    Your donation is secure and tax-deductible. You will receive a receipt via email.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Donate Section */}
            <section className="py-20 bg-neutral-light">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold text-gray-800 mb-8 text-center">Why Your Support Matters</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <CheckCircle className="h-8 w-8 text-primary mb-4" />
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Direct Impact</h3>
                                <p className="text-gray-600">
                                    100% of your donation goes directly to programs. Our operational costs are covered by grants and partnerships.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <CheckCircle className="h-8 w-8 text-primary mb-4" />
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Transparent Reporting</h3>
                                <p className="text-gray-600">
                                    We provide regular updates on how your donation is being used and the impact it's creating.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <CheckCircle className="h-8 w-8 text-primary mb-4" />
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Sustainable Solutions</h3>
                                <p className="text-gray-600">
                                    Your gift funds long-term solutions that empower communities to become self-sufficient.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <CheckCircle className="h-8 w-8 text-primary mb-4" />
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Proven Results</h3>
                                <p className="text-gray-600">
                                    Our programs have helped hundreds of farmers increase yields and improve their livelihoods.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Ways to Give */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-heading font-bold text-gray-800 mb-8">Other Ways to Support</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary transition-colors">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Corporate Partnership</h3>
                                <p className="text-gray-600 mb-4">
                                    Partner with us for CSR initiatives and ESG alignment.
                                </p>
                                <button className="text-primary font-bold hover:underline">Learn More →</button>
                            </div>

                            <div className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary transition-colors">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Volunteer</h3>
                                <p className="text-gray-600 mb-4">
                                    Share your skills and expertise with our team and beneficiaries.
                                </p>
                                <button className="text-primary font-bold hover:underline">Get Involved →</button>
                            </div>

                            <div className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary transition-colors">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Legacy Giving</h3>
                                <p className="text-gray-600 mb-4">
                                    Include Sun & Soil in your estate planning for lasting impact.
                                </p>
                                <button className="text-primary font-bold hover:underline">Contact Us →</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Donate;
