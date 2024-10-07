/** From LBKE-websites */

/** YYYY-MM-DD => Date object */
export function parseDate(dateStr: string): Date {
    const parsed = dateStr.split("-").map((n) => parseInt(n, 10))
    if (parsed.length !== 3) throw new Error("Invalide date " + dateStr)
    const date = new Date(parsed[0], parsed[1] - 1, parsed[2])
    return date
}


/**
 * Supports future dates
 * @param date 
 * @param locale 
 * @returns 
 */
export function formatDate(date: string, locale: "en" | "fr" = "en") {
    const rtf = new Intl.RelativeTimeFormat(locale, {
        localeMatcher: "best fit", // other values: "lookup"
        numeric: "auto", // other values: "alwas"
        style: "long", // other values: "short" or "narrow"
    });
    let currentDate = new Date();
    if (!date.includes("T")) {
        date = `${date}T00:00:00`;
    }
    let targetDate = new Date(date);

    let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
    let monthsAgo = currentDate.getMonth() - targetDate.getMonth(); // considering we are in the same year
    let daysAgo = currentDate.getDate() - targetDate.getDate(); // considering we are in the same month

    let formattedDate = "";

    if (targetDate.getTime() > currentDate.getTime()) {
        const daysAhead = Math.ceil((targetDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)) // total days ahead (including if not in same month)
        formattedDate = rtf.format(daysAhead, "days")//"";
    } else if (yearsAgo > 0) {
        formattedDate = rtf.format(-yearsAgo, "year")
        //formattedDate = `${yearsAgo}y ago`;
    } else if (monthsAgo > 0) {
        formattedDate = rtf.format(-monthsAgo, "month")
        // formattedDate = `${monthsAgo}mo ago`;
    } else {
        // formattedDate = `${daysAgo}d ago`;
        formattedDate = rtf.format(-daysAgo, "days")
    }

    let fullDate = targetDate.toLocaleString(locale, {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return `${fullDate} (${formattedDate})`;
}

/**
 * 
 * @param publishedAt YYYY-MM-DD
 * @returns 
 */
export function isNotFuture(publishedAt: string) {
    return publishedAt <= new Date().toISOString().slice(0, 10);
}