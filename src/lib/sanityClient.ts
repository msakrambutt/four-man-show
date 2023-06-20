import { createClient } from "next-sanity";

import { apiVersion,dataset,projectId,useCdn } from "sanity/env";



export const client=createClient({
    token:process.env.SANITY_ACCESS_TOKEN,
    apiVersion:"2023-06-18",
    dataset:"production",
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn:true,
})
