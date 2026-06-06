export function getStreams(id, type, season, episode) {
    return new Promise(function(resolve, reject) {
        try {
            var eklentiMetni = (season && episode) ? (" (S" + season + " E" + episode + ")") : "";
            
            var streams = [
                {
                    name: "SelcukFlix" + eklentiMetni,
                    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                    quality: "1080p",
                    format: "mp4"
                },
                {
                    name: "RecTV" + eklentiMetni,
                    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                    quality: "720p",
                    format: "mp4"
                },
                {
                    name: "AnimeciX" + eklentiMetni,
                    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
                    quality: "1080p",
                    format: "mp4"
                },
                {
                    name: "Animeler" + eklentiMetni,
                    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
                    quality: "720p",
                    format: "mp4"
                },
                {
                    name: "Anizium" + eklentiMetni,
                    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                    quality: "1080p",
                    format: "mp4"
                },
                {
                    name: "BelgeselX" + eklentiMetni,
                    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    quality: "1080p",
                    format: "mp4"
                }
            ];
            
            resolve(streams);
        } catch (error) {
            resolve([]);
        }
    });
}
