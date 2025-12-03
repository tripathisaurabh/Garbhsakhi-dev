"use client";
import Image from "next/image";
import MotionWrapper from "./MotionWrapper";

export default function WhyUs() {
    return (
        <section className="w-full py-11 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">

                {/* MOBILE VIEW */}
                <div className="md:hidden flex flex-col items-center">

                    {/* Title */}
                    <h2 className="text-3xl font-bold text-center mb-4">
                        What Makes Us Unique?
                    </h2>

                    {/* Description Text */}
                    <p className="text-gray-600 text-center text-sm leading-relaxed mb-12 max-w-md px-4">
                        GarbhSakhi empowers healthcare providers to deliver smarter, safer pregnancy care with AI-driven monitoring and timely interventions.
                    </p>

                    {/* Circle + Curve + Icons */}
                    <div className="relative w-full max-w-[min(100vw,500px)] overflow-hidden" style={{ height: 'clamp(350px, 100vw, 430px)', marginLeft: 'clamp(-40px, -10vw, -10px)' }}>

                        {/* Pink Circle (reduced diameter) */}
                        <div className="absolute top-1/2 -translate-y-1/2 rounded-full bg-[#FFF2F2] shadow-xl border-2 border-gray-100 flex items-center justify-center z-10"
                            style={{
                                left: 'clamp(10px, 2vw, 16px)',
                                width: 'clamp(140px, 41vw, 164px)',
                                height: 'clamp(140px, 41vw, 164px)'
                            }}>
                            <h3 className="font-semibold text-center leading-tight text-black" style={{ fontSize: 'clamp(16px, 5vw, 20px)' }}>
                                <span className="font-extrabold">WHY</span> <br /> CHOOSE <br /> US ?
                            </h3>
                        </div>

                        {/* Dotted Curve (reduced size + moved closer) */}
                        <svg
                            className="absolute top-1/2 -translate-y-1/2"
                            style={{
                                left: 'clamp(-9px, -2vw, -9px)',
                                width: 'clamp(320px, 95vw, 380px)',
                                height: 'clamp(320px, 95vw, 380px)'
                            }}
                            viewBox="0 0 380 380"
                            fill="none"
                        >
                            <path
                                d="M 190 90 A 110 110 0 0 1 190 290"
                                stroke="#E0E0E0"
                                strokeWidth="2"
                                strokeDasharray="5,5"
                                fill="none"
                            />
                        </svg>

                        {/* Top Icon Circle */}
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-xl border-2 border-blue-100 flex items-center justify-center z-20"
                            style={{
                                left: 'clamp(150px, 45vw, 180px)',
                                top: 'clamp(80px, 23vw, 100px)',
                                width: 'clamp(56px, 16vw, 64px)',
                                height: 'clamp(56px, 16vw, 64px)'
                            }}>
                            <Image src="/icons/ai.png" alt="AI icon" width={32} height={32} style={{ width: '50%', height: '50%' }} />
                        </div>

                        {/* Top Text */}
                        <div className="absolute -translate-y-1/2 z-20" style={{ left: 'clamp(200px, 60vw, 240px)', top: 'clamp(80px, 23vw, 100px)', maxWidth: 'clamp(130px, 37.5vw, 150px)' }}>
                            <h4 className="font-bold text-black mb-1" style={{ fontSize: 'clamp(12px, 3.5vw, 14px)' }}>AI-Guided Care</h4>
                            <p className="text-gray-600 leading-relaxed" style={{ fontSize: 'clamp(10px, 3vw, 12px)' }}>
                                Real-time insights and predictive alerts.
                            </p>
                        </div>

                        {/* Middle WhatsApp Icon */}
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-xl border-2 border-green-100 flex items-center justify-center z-20"
                            style={{
                                left: 'clamp(210px, 62.5vw, 250px)',
                                top: '50%',
                                width: 'clamp(56px, 16vw, 64px)',
                                height: 'clamp(56px, 16vw, 64px)'
                            }}>
                            <Image src="/icons/whatsapp.png" alt="WhatsApp icon" width={32} height={32} style={{ width: '50%', height: '50%' }} />
                        </div>

                        {/* Middle Icon Text */}
                        <div className="absolute -translate-y-1/2 z-20" style={{ left: 'clamp(250px, 75vw, 300px)', top: '50%', maxWidth: 'clamp(130px, 37.5vw, 150px)' }}>
                            <h4 className="font-bold text-black mb-1" style={{ fontSize: 'clamp(12px, 3.5vw, 14px)' }}>Seamless WhatsApp Integration</h4>
                            <p className="text-gray-600 leading-relaxed" style={{ fontSize: 'clamp(10px, 3vw, 12px)' }}>WhatsApp-based reminders and alerts for mothers.</p>
                        </div>

                        {/* Bottom Icon */}
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-xl border-2 border-blue-100 flex items-center justify-center z-20"
                            style={{
                                left: 'clamp(150px, 45vw, 180px)',
                                top: 'clamp(270px, 77vw, 330px)',
                                width: 'clamp(56px, 16vw, 64px)',
                                height: 'clamp(56px, 16vw, 64px)'
                            }}>
                            <Image src="/icons/lock.png" alt="Lock icon" width={32} height={32} style={{ width: '50%', height: '50%' }} />
                        </div>

                        {/* Bottom Icon Text */}
                        <div className="absolute -translate-y-1/2 z-20" style={{ left: 'clamp(200px, 60vw, 240px)', top: 'clamp(270px, 77vw, 330px)', maxWidth: 'clamp(130px, 37.5vw, 150px)' }}>
                            <h4 className="font-bold text-black mb-1" style={{ fontSize: 'clamp(12px, 3.5vw, 14px)' }}>Privacy & Compliance</h4>
                            <p className="text-gray-600 leading-relaxed" style={{ fontSize: 'clamp(10px, 3vw, 12px)' }}>
                                Fully compliant with DPDP and ABDM for complete data protection.
                            </p>
                        </div>

                    </div>
                </div>

                {/* DESKTOP VIEW */}
                <div className="hidden md:block">
                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-12">
                        What Makes Us Unique?
                    </h2>

                    <div className="flex flex-col md:flex-row items-center gap-10 pl-8 md:pl-16">

                        {/* LEFT SIDE */}
                        <div className="relative flex items-center">

                            <div className="w-[420px] h-[420px] bg-[#E6F1FF] rounded-full border border-gray-200 flex items-center justify-end pr-12 pl-32 shadow-xl">
                                <p className="text-gray-700 text-[15px] leading-relaxed">
                                    GarbhSakhi empowers healthcare providers to deliver smarter, safer, and more compassionate pregnancy care. Our AI-driven platform simplifies monitoring, ensures timely interventions, and keeps mothers connected to their doctors — every step of the way.
                                </p>
                            </div>

                            <div className="absolute -left-28 top-1/2 -translate-y-1/2 w-52 h-52 rounded-full bg-[#FFF2F2] shadow-2xl border-2 border-gray-100 flex items-center justify-center">
                                <h2 className="text-3xl font-semibold text-center leading-tight text-black">
                                    <span className="font-extrabold">WHY</span> <br /> CHOOSE <br /> US ?
                                </h2>
                            </div>

                            <div className="absolute left-[85%] -translate-x-1/2 top-4 w-20 h-20 rounded-full bg-white shadow-2xl border-2 border-blue-100 flex items-center justify-center z-10">
                                <Image src="/icons/ai.png" alt="AI icon" width={44} height={44} />
                            </div>

                            <div className="absolute left-[90%] top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white shadow-2xl border-2 border-green-100 flex items-center justify-center z-10">
                                <Image src="/icons/whatsapp.png" alt="WhatsApp icon" width={44} height={44} />
                            </div>

                            <div className="absolute left-[85%] -translate-x-1/2 bottom-4 w-20 h-20 rounded-full bg-white shadow-2xl border-2 border-blue-100 flex items-center justify-center z-10">
                                <Image src="/icons/lock.png" alt="Lock icon" width={44} height={44} />
                            </div>

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="flex flex-col gap-16 ">

                            <MotionWrapper delay={0.2} direction="right">
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-black mb-2">AI-Guided Care</h3>
                                    <p className="text-gray-600 text-[15px] max-w-md leading-relaxed">
                                        Real-time insights and predictive alerts that help doctors make faster, data-driven decisions.
                                    </p>
                                </div>
                            </MotionWrapper>

                            <MotionWrapper delay={0.4} direction="right">
                                <div className="flex flex-col pl-10">
                                    <h3 className="text-xl font-bold text-black mb-2">Seamless WhatsApp Integration</h3>
                                    <p className="text-gray-600 text-[15px] max-w-md leading-relaxed">
                                        Mothers receive reminders, advice, and emergency alerts — all on WhatsApp, no app required.
                                    </p>
                                </div>
                            </MotionWrapper>

                            <MotionWrapper delay={0.6} direction="right">
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-black mb-2">Privacy & Compliance</h3>
                                    <p className="text-gray-600 text-[15px] max-w-md leading-relaxed">
                                        Built to meet India's DPDP Act and ABDM standards, ensuring complete data protection for every mother.
                                    </p>
                                </div>
                            </MotionWrapper>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
