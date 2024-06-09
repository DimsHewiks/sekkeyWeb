export async function getAnimeByType(type){
    let urlType = ''
    function GetParams(type){
        switch (type){
            case 'season':
                urlType = new URLSearchParams({
                    "season" : 'spring_2024',
                    "limit" : '20',
                    "order" : 'random',
                })
                return urlType.toString();
            case 'film_Top':
                urlType = new  URLSearchParams({
                    "limit" : '20',
                    "kind" : 'movie',
                    "order": 'popularity'
                })
                return urlType.toString();

            case 'trand':
                urlType = new URLSearchParams({
                    "limit" : '20',
                    "order": 'popularity'
                })
                return urlType.toString();
        }
    }
    const params = GetParams(type);
    return fetch(`https://shikimori.one/api/animes?${params}`,{
        method: "GET"
    }).then(result => result.json())
        .then(data =>{
            return data;
        })



}