export function searchList(search ='', limit = 50, order = 'popularity'){
    const urlParams = new URLSearchParams({
        search,
        limit
    })
    return fetch(`https://shikimori.one/api/animes?${urlParams.toString()}`,{
        method : "GET"
    }).then(result=> result.json())
    .then(data =>{
        console.log(data)
        return data;
    })
    
    

}