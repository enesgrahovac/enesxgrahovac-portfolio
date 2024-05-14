import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import PageLayout from "@/components/PageLayout/PageLayout";
import { AppProvider } from "@/contexts/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Enes Grahovac",
    description: "Portfolio website for Enes Grahovac",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                    <AppProvider>
                        <PageLayout showStaticHeader={true} >
                            {children}
                            <Analytics />
                        </PageLayout>
                    </AppProvider>
                </body>

        </html>
    );
}
