"use client"

import { useRouter } from "next/navigation";
import { startTransition } from "react";


export default function Error({
     error,
     reset
}: {
     error: Error & { digest?: string },
     reset: () => void
}) {

    const router = useRouter()

    function reloading(){
        startTransition(()=>{
          router.refresh()
          reset()
        })
    }
    

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={reloading}>
                 Try again
            </button>
        </div>
    );
}