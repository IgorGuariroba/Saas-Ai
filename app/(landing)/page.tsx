"use client"

import {LandingNavbar} from "@/components/landing-navbar/landing-navbar";
import {LandingHero} from "@/components/landing-hero/landing-hero";
import {LandingContent} from "@/components/landing-content/landing-content";
import SeoLayout from "@/components/seo-layout/seo-layout";

const LandingPage = () => {
    return (
        <SeoLayout
            title="TecnoMente"
            description="Pensado em te apoiar nas novas descobertas do mundo"
            url="https://tecnomente.onrender.com"
            imageUrl="/logo.png"
        >
            <div className="h-full">
                <LandingNavbar />
                <LandingHero />
                <LandingContent />
            </div>
        </SeoLayout>
    );
};

export default LandingPage;