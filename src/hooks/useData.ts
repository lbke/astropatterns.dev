import { useEffect, useState } from "react";

export function useData<TData = unknown>(url: string, opts?: RequestInit) {
    const [data, setData] = useState<TData | null>(null);
    useEffect(() => {
        if (!url) return false
        let ignore = false;
        fetch(url, opts)
            .then(response => response.json())
            .then(json => {
                if (!ignore) {
                    setData(json);
                }
            });
        return () => {
            ignore = true;
        };
    }, [url]);
    return data;
}