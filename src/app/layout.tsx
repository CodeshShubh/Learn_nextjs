// 'use client';
// // import { Metadata } from "next";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export const metadata:Metadata = {
//     title:'Home',
//     description:'Home Description'
// }

// const navLinks  = [
//     {name:"forgot-password" , href:'/forgot-password'},
//     {name:'login', href:'/login'},
//     {name:'register', href:'/register'},
//     {name:'about', href:'/about'},
//     {name:'contact', href:'/contact'},
//     {name:'products', href:'/products'},
// ]

export default function registerLayout({children}: {children: React.ReactNode}) {
    //  const pathName = usePathname()
    //   console.log(pathName)
      
    return (
        <html lang="en">
            <body>
                     {/* {
                         navLinks.map((itm,i)=>{
                              const isActive = pathName === itm.href ||(pathName.startsWith(itm.href) && itm.href!=='/')
                            return (
                                    
                                 <div key={i} >
                                      <Link href={itm.href} style={isActive ? {color:"red"}: {color:'blue'}}>{itm.name}</Link>
                                 </div>
                            )
                         })
                     } */}
                    {children}
                
            </body>
        </html>
    );
}





