import Heading from "@/components/heading/heading";
import {Settings} from "lucide-react";
import {checkSubscription} from "@/lib/subscription";
import {SubscriptionButton} from "@/components/subscription-button/subscription-button";

const SettingsPage = async () => {

    const isPro = await checkSubscription()

    return (
        <div>
            <Heading
                title={'Configurações'}
                description={'Configurações da conta'}
                icon={Settings}
                iconColor="text-gray-700"
                bgColor="bg-gray-700/10"
            />
            <div className="px-4 lg:px-8 space-y-4">
                <div className="text-muted-foreground text-sm">
                    {isPro ? "Seu plano atual é pro" : "Seu plano atual é gratuito"}
                </div>
                <SubscriptionButton isPro={isPro}/>
            </div>
        </div>
    )
}


export default SettingsPage