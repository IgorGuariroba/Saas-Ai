"use client"

import {
    ArrowRight,
    VideoIcon,
    ImageIcon,
    Music,
    Code2Icon,
    MessageSquare
} from "lucide-react";
import {Card} from "@/components/ui/card";
import {cn} from "@/lib/utils";

const tools = [
    {
        label: "Conversar",
        icon: MessageSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        href: "/conversation"
    },
    {
        label: "Gerar Imagem",
        icon: ImageIcon,
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
        href: "/image"
    },
    {
        label: "Criar Video",
        icon: VideoIcon,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        href: "/video"
    },
    {
        label: "Criar Musica",
        icon: Music,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        href: "/image"
    },
    {
        label: "Gerar Código",
        icon: Code2Icon,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        href: "/image"
    },
]
const DashboardPage = () => {
    return (
        <div>
            <div className="mb-8 space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-center">
                    Explore o poder da Mente Digital
                </h2>
                <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                    converse com IA - Experimente o seu poder
                </p>
            </div>
            <div className="px-4 md:px-20 lg:px-32 space-y-4">
                {tools.map((tool) =>  (
                    <Card key={tool.href+tool.label}
                          className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
                    >
                        <div className=" flex items-center gap-x-4">
                            <div className={cn("p-2 w-fit rounded-md",
                                tool.bgColor)}>
                                <tool.icon className={cn("w-8 h-8", tool.color)}/>
                            </div>
                            <div className="font-semibold">
                                {tool.label}
                            </div>
                        </div>

                        <ArrowRight className="w-5 h-5"/>
                    </Card>
                ))}
            </div>
        </div>
    )
}


export default DashboardPage