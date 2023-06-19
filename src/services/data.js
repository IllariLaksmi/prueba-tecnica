export const getData = () => {

    return new Promise((resolve, reject) => {
        const dataCacheMap = new Map();

        if (dataCacheMap.get("date") > new Date() || !dataCacheMap.has("data")) {
            dataCacheMap.set("data", getPodcasts());
            dataCacheMap.set("date", new Date());
        }
        resolve(dataCacheMap.get("data"))
    })
}
const getPodcasts = () => {
    const url = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

    return fetch(url).then((response) => response.json())
        .then((actualData) => {
            return actualData
        })

}

const getPodcastById = () => {

}

const getEpisode = () => {
    
}