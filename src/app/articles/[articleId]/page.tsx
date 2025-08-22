import Link from "next/link";

export default async function newsArticles({ params, searchParams }: { params: Promise<{ articleId: string }>, searchParams: Promise<{ lang?: "en" | "hindi" | "fr" }> }) {

       const {articleId} = await params;

       const {lang = 'en'} = await searchParams; // initially

          function randomValue(val:number){
           return Math.floor((Math.random()*val))
          }

          const count =  randomValue(2)

           if(count==1){
             throw new Error('custom Error')
           }

    return (
        <div>
            <h1>newsArticle Name - {articleId}</h1>
            <h4>Article Laguage - {lang}</h4>
            <div>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link href={`/articles/${articleId}?lang=hindi`}>Hindi</Link>
                <Link href={`/articles/n${articleId}?lang=fr`}>Freanch</Link>
            </div>
        </div>
    )

}