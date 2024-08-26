export async function getAnimePersonByAnime(id){
    return await fetch(`https://shikimori.one/api/animes/${id}/roles `,{
        method: 'GET'
    }).then(result => result.json())
        .then(data=>{

            return data;
        })
}