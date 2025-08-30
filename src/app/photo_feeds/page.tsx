import Image from "next/image";
import {  photosArray } from "./_photos/photo";
import Link from "next/link";


export default function PhotoLists() {
    return (
        <div>
             {
                photosArray.map((itm,i)=>(

                        <Link href={`/photo_feeds/${itm.id}`} key={i}>
                        <Image src={itm.image} alt={itm.name} width={300} height={200}/>
                        </Link>
                ))
             }
        
        </div>
    );
}