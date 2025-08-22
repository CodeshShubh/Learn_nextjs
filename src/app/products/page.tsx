import { Metadata } from "next";

export const metadata:Metadata = {
    title:'products Page',
    description:'Product description'
}
export default async function Products() {

     await new Promise((resolve)=>{
         setTimeout(()=>{
       resolve('intentially delay')
         },2000)
     })
    return (
        <div>
            
            <h1>page List</h1>
            <p> where user click on product so redirect on that perticuler product</p>
        </div>
    );
}