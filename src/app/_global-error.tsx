"use client"


export default function GlobalError({
     error,
     reset
}: {
     error: Error & { digest?: string },
     reset: () => void
}) {

    return (
        <html>
            <body>
                <h2>Something went wrong in root layout!</h2>
                <button onClick={()=>window.location.reload()}>
                     Try again
                </button>
            </body>
        </html>
    );
}