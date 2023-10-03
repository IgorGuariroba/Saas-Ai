import Stripe from "stripe"

export const stripe = new Stripe(process.env.KEY_STRIPE_SECRET!,{
    apiVersion: "2023-08-16",
    typescript: true,
})