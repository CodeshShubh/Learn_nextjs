export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body>
                <header>
                    <h1 style={{backgroundColor:'black', color:'white'}}>this is Header</h1>
                </header>
                    {children}
               <footer style={{backgroundColor:'black'}}>
                 <h2 style={{ margin:'0 auto', textAlign:'center', width:'150px', backgroundColor:'black', color:'white'}}>This is footer</h2>
               </footer>
            </body>
        </html>
    );
}