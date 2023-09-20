"use client"
import * as z from "zod";
import Heading from "@/components/heading/heading";
import {MessageSquareIcon} from "lucide-react";
import {useForm} from "react-hook-form";

import {formSchema} from "./constants"
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {useState} from "react";
import axios from "axios";
import {ChatCompletionMessage} from "@/node_modules/openai/src/resources/chat";

const Conversation = () => {
    const router = useRouter()
    const [messagens, setMessages] = useState<ChatCompletionMessage[]>([])
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    })

    const isLoading = form.formState.isSubmitting
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const userMessage: ChatCompletionMessage = {
                role: "user",
                content: values.prompt,
            };
            const newMessages = [...messagens, userMessage]

            const response = await axios.post("/api/conversation", {
                messages: newMessages,
            })

            setMessages((current) => [...current, userMessage, response.data])

            form.reset()
        } catch (error: any) {
            console.log(error)
        } finally {
            router.refresh()
        }
    }

    return (
        <div>
            <Heading
                title="Conversar"
                description="Nosso mais avançado modelo de conversação"
                icon={MessageSquareIcon}
                iconColor="text-violet-500"
                bgColor="bg-violet-500/10"
            />
            <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="
                            rounded-lg
                            border
                            w-full
                            p-4
                            px-3
                            md:px-6
                            focus-within:shadow-sm
                            grid
                            grid-cols-12
                            gap-2
                            "
                        >
                            <FormField
                                name="prompt"
                                render={({field}) => (
                                    <FormItem className="col-span-12 lg:col-span-10">
                                        <FormControl className="m-0 p-0">
                                            <Input
                                                className="border-0 outline-none
                                                    focus-visible:ring-0
                                                    focus-visible:ring-transparent"
                                                disabled={isLoading}
                                                placeholder="Qual é a distância entre o Sol e o primeiro planeta?"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>
                                Enviar
                            </Button>
                        </form>
                    </Form>
                </div>
                <div className="space-y-4 mt-4">
                    {messagens.length === 0 && !isLoading && (
                        <div>
                            Empty!
                        </div>
                    )}
                    <div className="flex flex-col-reverse gap-y-4">
                        {messagens.map((message) =>(
                            <div key={message.content}>
                                {message.content}
                            </div>
                        ))

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conversation