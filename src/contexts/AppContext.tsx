"use client"
import { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type AppContextType = {
    isMobileDevice: boolean;
    setIsMobileDevice: (value: boolean) => void;
};

const defaultAppContext: AppContextType = {
    isMobileDevice: false,
    setIsMobileDevice: () => {},
};

export const AppContext = createContext<AppContextType>(defaultAppContext);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
    // Initialize state with local storage value if it exists
    const [isMobileDevice, setIsMobileDevice] = useState<boolean>(() => {
        if (typeof window !== "undefined") {
            const savedShowMenu = localStorage.getItem('isMobileDevice');
            return savedShowMenu !== null ? JSON.parse(savedShowMenu) : false;
        }
        return false;
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = () => {
                const shouldShowMenu = window.innerWidth <= 800;
                setIsMobileDevice(shouldShowMenu);
                localStorage.setItem('isMobileDevice', JSON.stringify(shouldShowMenu));
            };

            window.addEventListener("resize", handleResize);

            // Initial check
            handleResize();

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem('isMobileDevice', JSON.stringify(isMobileDevice));
        }
    }, [isMobileDevice]);

    return (
        <AppContext.Provider value={{ isMobileDevice, setIsMobileDevice }}>
            {children}
        </AppContext.Provider>
    );
};
