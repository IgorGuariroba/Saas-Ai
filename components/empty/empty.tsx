import Image from "next/image";

interface EmptyProps {
    label: String
}

export const Empty = ({label}: EmptyProps) => {
    return (
        <div className="h-full p-2 flex flex-col items-center justify-center">
            <div className=" relative h-72 w-72 ">
                <Image
                    fill
                    src="/logo.png"
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

