

export default async function ProductDetils({params}:{params:Promise<{productId :string}>}) {

      const productId = (await params).productId
    return (
        <div>{productId}</div>
    );
}