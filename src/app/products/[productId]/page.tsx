import { Metadata } from "next";



type Props = {
    params: {productId:string}
}

export async function  generateMetadata({params}:Props):Promise<Metadata>{
  const {productId} = params;

      const description = await new Promise<string>((resolve)=>{
         setTimeout(()=>{
          resolve(`product iphone description`)
         },1000)
      })


    return {
        title:`product ${productId}`,
        description,
    }

}

export default async function ProductDetils({params}:Props) {

      const productId = (await params).productId
    return (
        <div>{productId}</div>
    );
}