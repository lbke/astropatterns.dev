import { CurrentLocale } from "@/components/CurrentLocale";
import { I18nContextProvider } from "@/components/I18nContext";

export function MyApp() {
    return (
        <I18nContextProvider locale="French">
            <CurrentLocale />
        </I18nContextProvider>
    )
}