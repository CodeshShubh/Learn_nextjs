export default async function blogs({params}:{params:Promise<{slug:string[]}>}) {

    const {slug} = await params;

    if(slug?.length==2){
        return <div>first params-{slug[0]},,, second params -{slug[1]}</div>
    }

     return (
        <div>EveryTime rendring using ...slug no matter what is the url</div>
    );

}