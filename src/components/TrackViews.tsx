import { useData } from "@hooks/useData";

/**
 * TODO: create corresponding API endpoint;
 * filter pathname that matches an existing lesson
 */
export function TrackViews() {
    useData(`/api/track-views/${window?.location?.pathname}`, {
        method: "POST"
    })
}