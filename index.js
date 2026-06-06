// Nuvio'nun dogrudan tanidigi fonksiyon yapisi
this.getStreams = function(id, type, season, episode) {
    var eklentiMetni = (season && episode) ? (" (S" + season + " E" + episode + ")") : "";
    
    return [
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
        }
    ];
};
