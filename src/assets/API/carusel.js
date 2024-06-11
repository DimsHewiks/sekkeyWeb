export async function carusel(limit = 5, status = 'ongoing',kind = 'tv', order='popularity', season='2024'){
    const params = new URLSearchParams({
        limit,
        status,
        kind,
        order,
        season
    })

    return fetch(`https://shikimori.one/api/animes?${params.toString()}`,{
        method: 'GET'
    }).then(result =>result.json())
        .then(data =>{
           
            return data;
            
        })
        
}