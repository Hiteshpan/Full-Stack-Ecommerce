// components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#232f3e] text-white text-sm">
            <div className="max-w-screen-xl mx-auto py-10 px-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 leading-loose">
                    <div>
                        <h3 className="font-bold mb-4 text-base">Get to Know Us</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                            <li><a href="#" className="hover:underline">Press Releases</a></li>
                            <li><a href="#" className="hover:underline">Amazon Cares</a></li>
                            <li><a href="#" className="hover:underline">Gift a Smile</a></li>
                            <li><a href="#" className="hover:underline">Amazon Science</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4 text-base">Connect with Us</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Facebook</a></li>
                            <li><a href="#" className="hover:underline">Twitter</a></li>
                            <li><a href="#" className="hover:underline">Instagram</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-base mb-4">Make Money with Us</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Sell on Amazon</a></li>
                            <li><a href="#" className="hover:underline">Sell under Amazon Accelerator</a></li>
                            <li><a href="#" className="hover:underline">Amazon Global Selling</a></li>
                            <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
                            <li><a href="#" className="hover:underline">Fulfilment by Amazon</a></li>
                            <li><a href="#" className="hover:underline">Advertise Your Products</a></li>
                            <li><a href="#" className="hover:underline">Amazon Pay on Merchants</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4 text-base">Let Us Help You</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">COVID-19 and Amazon</a></li>
                            <li><a href="#" className="hover:underline">Your Account</a></li>
                            <li><a href="#" className="hover:underline">Returns Centre</a></li>
                            <li><a href="#" className="hover:underline">100% Purchase Protection</a></li>
                            <li><a href="#" className="hover:underline">Amazon App Download</a></li>
                            <li><a href="#" className="hover:underline">Amazon Assistant Download</a></li>
                            <li><a href="#" className="hover:underline">Help</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4 text-base">Useful Links</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Amazon Business</a></li>
                            <li><a href="#" className="hover:underline">Amazon Web Services</a></li>
                            <li><a href="#" className="hover:underline">Audible</a></li>
                            <li><a href="#" className="hover:underline">DPReview</a></li>
                            <li><a href="#" className="hover:underline">IMDb</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-[#131a22] text-center py-4">
                <p className="text-gray-400 text-xs">© 2024, Amazon.com, Inc. or its affiliates</p>
            </div>
        </footer>

    );
};

export default Footer;
