export default async function Reviews({params}:{params:Promise<{productId:string , reviewId:string}>}) {
         const {productId, reviewId} = await params
    return (
        <div>
            {productId} ----{reviewId}
        </div>
    );
}