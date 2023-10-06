"use client"

import { useEffect} from "react";
import { Crisp} from "crisp-sdk-web"

export const CrispChat =  () => {
    useEffect(() => {
        Crisp.configure("ed1fadd1-07ea-4b3d-9382-4d7081f32e99")
    }, []);

    return null
}