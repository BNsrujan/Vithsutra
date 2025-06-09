'use client';
import React, { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup';

const QuickFacts = () => {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-black" ref={sectionRef}>
            <h1 className="text-4xl text-center pt-5 pb-10 text-white">Quick Facts</h1>
            <div className="flex flex-col sm:flex-row justify-evenly text-center text-white pb-10 space-y-5 sm:space-y-0">
                <div>
                    <h1 className="text-3xl font-bold">
                        {inView && <CountUp end={1000} duration={2} />}+
                    </h1>
                    <h1>Telephone Units Dispatched</h1>
                </div>
                <div>
                    <h1 className="text-3xl font-bold">
                        {inView && <CountUp end={500} duration={2} />}+
                    </h1>
                    <h1>Educated Under Robotics</h1>
                </div>
                <div>
                    <h1 className="text-3xl font-bold">
                        {inView && <CountUp end={200} duration={2} />}+
                    </h1>
                    <h1>BioMetric Units Deployed</h1>
                </div>
            </div>
        </div>
    );
};

export default QuickFacts;
