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
            imageUrl="https://www.fundacaotelefonicavivo.org.br/wp-content/uploads/2022/05/unesco-acredita-que-o-uso-de-inteligencia-artificial-em-educacao-pode-ampliar-a-inclusao-de-grupos-vulneraveis-1200x630-2.png?x65901"
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