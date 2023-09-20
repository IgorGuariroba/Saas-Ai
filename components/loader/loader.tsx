import Image from "next/image";

const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="w-10  h-10 relative animate-spin">
                    <Image
                        fill
                        sizes="(max-width: 500px)"
                        src="/logo-v.png"
                        alt="logo"
                    />
            </div>
            <p className="text-sm text-muted-foreground">
                Escrevendo...
            </p>
        </div>
    )
}

export default Loader