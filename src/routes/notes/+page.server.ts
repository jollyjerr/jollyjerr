import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async () => {
    return {
        notes: [
            {title: "one"},
            {title: "two"}
        ]
    }
}
