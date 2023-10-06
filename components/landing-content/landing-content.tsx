"use client"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export const LandingContent = () => {
    const testimonials = [
        {
            name: "João",
            avatar: "J",
            title: "Analista de Sistemas",
            description: "Usar este aplicativo tem sido uma experiência excepcional!"
        },{
            name: "Mariana",
            avatar: "M",
            title: "Gerente de Projetos",
            description: "Este aplicativo transformou positivamente a maneira como gerencio meus projetos!"
        },{
            name: "Carlos",
            avatar: "C",
            title: "Desenvolvedor Full Stack",
            description: "Impressionante! Este aplicativo melhorou minha produtividade em dobro!"
        },{
            name: "Ana",
            avatar: "A",
            title: "Consultora de TI",
            description: "Nunca imaginei que um aplicativo pudesse fazer tanta diferença em meu trabalho, estou maravilhada!"
        },{
            name: "Pedro",
            avatar: "P",
            title: "Especialista em UI/UX",
            description: "A experiência do usuário neste aplicativo é incomparável. Excelente!"
        },{
            name: "Carlos",
            avatar: "C",
            title: "Programador de Software",
            description: "Este aplicativo elevou meus projetos a um outro nível!"
        },{
            name: "Ana",
            avatar: "A",
            title: "Engenheira de Sistemas",
            description: "Nunca vi nada como este aplicativo antes, é incrível!"
        },{
            name: "Pedro",
            avatar: "P",
            title: "Especialista em Software",
            description: "Esse aplicativo superou todas as minhas expectativas!"
        },
    ]
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Elogios dos fãs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card
                        key={item.description}
                        className="bg-[#192339] border-none text-white"
                    >
                    <CardHeader>
                        <CardTitle className="flex items-center gap-x-2" >
                            <div>
                                <p className="text-lg">{item.name}</p>
                                <p className="text-zinc-400 text-sm">{item.title}</p>
                            </div>
                        </CardTitle>
                        <CardContent className="pt-4 px-0">
                            {item.description}
                        </CardContent>
                    </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}