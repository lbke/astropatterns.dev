import { useI18n } from './I18nContext';

export function CurrentLocale() {
    // Gets the current locale from context
    // (we expect an I18nContextProvider to exists upper in the React component tree)
    const { locale } = useI18n();
    return <div>Current locale is "{locale}"</div>;
}
