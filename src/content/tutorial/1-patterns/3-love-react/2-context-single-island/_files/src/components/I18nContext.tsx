// This is just a React context as usual
import React, { createContext, useContext } from 'react';
interface I18nContextType {
    locale: string;
}

const defaultContext = { locale: 'English (default)' };

// Initialize a context
export const I18nContext = createContext<I18nContextType>(defaultContext);

// Setup the context to be consumed by child or grand-child
export const I18nContextProvider = ({ locale, children }: I18nContextType & { children: React.ReactNode }) => {
    return (
        <I18nContext.Provider value={{ locale }}>{children}</I18nContext.Provider>
    );
};

// Consume the context from a child or grand-child
export const useI18n = () => {
    return useContext(I18nContext);
};
