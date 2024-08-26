export async function getFranchiseById(id){

    return await fetch(`https://shikimori.one/api/animes/${id}/franchise`,{
        method: 'GET',
    }).then(result => result.json())
        .then(data =>{
            console.log(data)
            return data;
        })
}