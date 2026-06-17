'use client';

import './AnimatedBackground.css';

export default function AnimatedBackground() {
    return (
        <div className="animated-bg-container">
            {/* Sun/Moon */}
            <div className="sun-layer"></div>

            {/* Far Mountains */}
            <div className="mountain-layer layer-3">
                <svg viewBox="0 0 1000 200" preserveAspectRatio="none">
                    <path d="M0,200 L0,50 Q100,100 200,60 T400,80 T600,40 T800,90 T1000,50 L1000,200 Z" fill="rgba(80, 20, 20, 0.4)" />
                </svg>
            </div>

            {/* Mid Mountains */}
            <div className="mountain-layer layer-2">
                <svg viewBox="0 0 1000 200" preserveAspectRatio="none">
                    <path d="M0,200 L0,90 Q150,40 300,100 T600,60 T900,110 T1000,70 L1000,200 Z" fill="rgba(60, 15, 15, 0.6)" />
                </svg>
            </div>

            {/* Near Mountains */}
            <div className="mountain-layer layer-1">
                <svg viewBox="0 0 1000 200" preserveAspectRatio="none">
                    <path d="M0,200 L0,140 Q200,80 400,150 T800,100 T1000,160 L1000,200 Z" fill="rgba(35, 8, 8, 0.9)" />
                </svg>
            </div>

            {/* Bamboo/Trees Overlay */}
            <div className="tree-layer">
                {/* Tree left */}
                <div className="branch branch-1" style={{ left: '5%', bottom: '20%' }}>
                    <svg viewBox="0 0 100 200">
                        <path d="M50,200 Q40,100 80,0 Q60,80 45,200" fill="none" stroke="rgba(20, 5, 5, 0.8)" strokeWidth="4" />
                        <path d="M60,100 Q80,80 100,120 Q80,100  ৬0,100" fill="rgba(40, 10, 10, 0.8)" />
                        <path d="M70,50 Q90,30 100,70 Q80,60 70,50" fill="rgba(40, 10, 10, 0.8)" />
                    </svg>
                </div>
                {/* Tree right */}
                <div className="branch branch-2" style={{ right: '5%', bottom: '15%', transform: 'scaleX(-1)' }}>
                    <svg viewBox="0 0 100 200">
                        <path d="M50,200 Q40,100 80,0 Q60,80 45,200" fill="none" stroke="rgba(20, 5, 5, 0.8)" strokeWidth="5" />
                        <path d="M60,100 Q80,80 100,120 Q80,100 60,100" fill="rgba(40, 10, 10, 0.8)" />
                        <path d="M70,40 Q90,20 100,60 Q80,50 70,40" fill="rgba(40, 10, 10, 0.8)" />
                        <path d="M55,140 Q75,120 90,160 Q70,145 55,140" fill="rgba(40, 10, 10, 0.8)" />
                    </svg>
                </div>
            </div>

            {/* Mist particles */}
            <div className="mist mist-1"></div>
            <div className="mist mist-2"></div>
        </div>
    );
}
