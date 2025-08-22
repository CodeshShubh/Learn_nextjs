// 'use client';
// // import { Metadata } from "next";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

import { ErrorWrapper } from "./error-wrapper";

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

     function randomValue(val:number){
        return Math.floor((Math.random()*val))
     }

     const count = randomValue(2)

     if(count==1){
        throw new Error('this error in root layout')
     }
      
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
                        
                   <ErrorWrapper>
                        {children}
                   </ErrorWrapper>
                
            </body>
        </html>
    );
}





