// Action = POST endpoint tied to a specific webpage
// totally obfuscate the actual post request
// https://astro.build/blog/astro-480/#experimental-astro-actions
// https://github.com/withastro/roadmap/blob/actions/proposals/0046-actions.md
import { defineAction, ActionError } from "astro:actions";
import { z } from 'astro:schema';
import { db } from "@/db/mongo";

export const server = {
    subscribe: defineAction({
        // so you can pass FormData
        accept: "form",
        // z = zod schema definition
        // https://zod.dev/
        input: z.object({
            email: z.string().email(),
            // where the subscription comes from
            from: z.string().optional()
        }),
        handler: async ({ email, from }) => {
            // store email in mongo database
            // /!\ Data are already validated by Astro (contrary to Astro server actions)
            try {
                const subscriptions = db.collection("subscriptions")
                const subscriber: any = {
                    email: email,
                    from: from,
                    createdAt: new Date()
                }
                /*if (from) {
                    maybeSub.from = from
                }*/
                const existingSub = await subscriptions.findOne({ email })
                if (existingSub) {
                    console.log("Already subscribed", email)
                    // redirect("?subscribed=1")
                    return { message: "You already subscribed with this email" }
                }
                await subscriptions.insertOne(subscriber)
                console.log("Subscribed user", email)
                // redirect("?subscribed=1")
                return { message: "Thanks for subscribing!", success: true }
            } catch (err) {
                /*if (isRedirectError(err)) {
                    throw err
                }*/
                console.error("Can't subscribe " + email, err)
                throw new ActionError({ code: "INTERNAL_SERVER_ERROR", message: "Can't subscribe" })
            };
        },
    }),
};