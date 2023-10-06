"use client"
import {useAuth} from "@clerk/nextjs"
import TypewriteComponent from "typewriter-effect"
import Link from "next/link";
import {Button} from "@/components/ui/button";

export const LandingHero = () => {
    const {isSignedIn} = useAuth()
    return (
        <div className="text-white font-bold py-36 text-center space-y-5">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
                <h1>O campeão de ferramentas de IA para</h1>
                <div className="text-transparent bg-clip-text border-gray-50 bg-gradient-to-r
                from-purple-400 to-pink-600
                ">
                    <TypewriteComponent options={{
                        strings: [
                            "Comunicação Natural.",
                            "Geração de Imagens.",
                            "Criação de Musica.",
                            "Geração de Código.",
                            "Criação de Video.",
                        ],
                        autoStart: true,
                        loop: true
                    }}/>
                </div>
            </div>
            <div className="text-sm md:text-xl font-light text-zinc-400">
                <p>Crie conteúdo 10 vezes mais rápido!</p>
            </div>
            <div>
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
                        Comece a criar totalmente de Graça
                    </Button>
                </Link>
            </div>
            <div className="text-zinc-400 text-xs md:tetxt-sm font-normal">
                Não precisa de cartão de credito.
            </div>
        </div>
    )
}