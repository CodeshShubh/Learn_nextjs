export default function registerLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body>
                {children}
                <footer style={{backgroundColor:'black'}}>
                 <h2 style={{ margin:'0 auto', textAlign:'center', width:'150px', backgroundColor:'black', color:'white'}}>This is footer</h2>
               </footer>
                
            </body>
        </html>
    );
}