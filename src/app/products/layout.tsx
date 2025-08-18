export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body>
                <header>
                    <h1 style={{backgroundColor:'black', color:'white'}}>this is Header</h1>
                </header>
                    {children}
            </body>
        </html>
    );
}