"use client"
import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react"

export default function Error({
     error,
     reset
}: {
     error: Error & { digest?: string },
     reset: () => void
}) {

    //  useEffect(() => {
    //      console.error(error)
    //  },[error])

    const router = useRouter();

    const reload = ()=>{
        startTransition(()=>{
            router.refresh();
            reset()
        })
    }

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={reload}>
                 Try again
            </button>
        </div>
    );
}




