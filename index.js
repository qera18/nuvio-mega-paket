/**
 * Nuvio - Coklu Platform Saglayici Motoru
 * (SelcukFlix, RecTV, AnimeciX, Animeler, Anizium, BelgeselX)
 */
const Provider = {
    getStreams: function(query) {
        return new Promise(function(resolve, reject) {
            try {
                const icerikAdi = query.title || "Icerik";
                let eklentiMetni = "";
                if (query.season && query.episode) {
                    eklentiMetni = " (S" + query.season + " E" + query.episode + ")";
                }

                // Nuvio ekraninda alt alta cikacak olan platformlar (Hata vermemesi icin tamamen Ingilizce karakterli)
                const streams = [
                    {
                        name: "SelcukFlix [1080p] - " + icerikAdi + eklentiMetni,
                        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                        quality: "1080p",
                        type: "url"
                    },
                    {
                        name: "RecTV [720p] - " + icerikAdi + eklentiMetni,
                        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                        quality: "720p",
                        type: "url"
                    },
                    {
                        name: "AnimeciX [1080p] - " + icerikAdi + eklentiMetni,
                        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
                        quality: "1080p",
                        type: "url"
                    },
                    {
                        name: "Animeler [720p] - " + icerikAdi + eklentiMetni,
                        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
                        quality: "720p",
                        type: "url"
                    },
                    {
                        name: "Anizium [1080p] - " + icerikAdi + eklentiMetni,
                        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                        quality: "1080p",
                        type: "url"
                    },
                    {
                        name: "BelgeselX [1080p] - " + icerikAdi + eklentiMetni,
                        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                        quality: "1080p",
                        type: "url"
                    }
                ];

                resolve(streams);
            } catch (error) {
                console.log("Hata: " + error.message);
                resolve([]);
            }
        });
    }
};

export default Provider;
