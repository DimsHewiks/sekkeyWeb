export async function getAnimeById (id, signal){
    console.log(id)
    return fetch(`https://shikimori.one/api/animes/${id}`,{
        method : "GET",
        signal: signal,
    }).then(result => result.json())
        .then(data =>{
            return data;
        })
}