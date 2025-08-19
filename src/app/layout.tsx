import { Metadata } from "next";

export const metadata:Metadata = {
    title:'Home',
    description:'Home Description'
}
export default function registerLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body>
                <main>

                    {children}
                    
                </main>
                
            </body>
        </html>
    );
}