import Image from "next/image";

interface EmptyProps {
    label: String
}

export const Empty = ({label}: EmptyProps) => {
    return (
        <div className="h-full p-2 flex flex-col items-center justify-center">
            <div className=" relative h-52 w-52 ">
                <Image
                    fill
                    sizes="(max-width: 500px)"
                    src="/empty.png"
                    alt="Vazio"
                    className="fill-teal-900"
                />
            </div>
            <p className="text-muted-foreground text-sm text-center">
                {label}
            </p>
        </div>
    )
}

