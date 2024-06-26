/*
 ****** catch all route
 any url can catch that contain /docs/* 
 length 2 means 2 segments in the URL
 catch all route [...slug]
 captures all the segments in the URL , this is usefull for creating a documentation site.

 multiple variations of the URL can be captured by a single file.
 http://localhost:3000/docs/feature1/concept1/example1
 http://localhost:3000/docs/feature1/concept1

*/

export default function Docs({ params }: {
    params: {
        slug: string[]
    }
}) {
    if(params.slug.length === 2) {
        return <h1>
            Docs home page feature2 {params.slug[0]} concept {params.slug[1]}
        </h1>
    } else if(params.slug.length === 1) {
        return <h1>
            Docs home page feature1 {params.slug[0]}
        </h1>
    }
    return (
        <h1>Docs home page</h1>
    )
}