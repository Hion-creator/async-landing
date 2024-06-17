const API = 'https://tiktok-api6.p.rapidapi.com/user/videos?username=andressalazar501';

const content = null|| document.getElementById('content');
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '904422cf2bmshc263889a395f91ap1f73dajsna6b352a9262a',
		'x-rapidapi-host': 'tiktok-api6.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const response = await fetchData(API);

        if (response.videos && Array.isArray(response.videos)) {
            const videos = response.videos;
            let view = `${videos.map(video => `
                <div class="group relative">
                    <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.cover}" alt="" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${video.description || 'Sin descripción'}
                        </h3>
                    </div>
                </div>`
            ).slice(0, 4).join('')}`;
            content.innerHTML = view;
        } else {
            console.error('No hay videos disponibles');
        }
    } catch (error) {
        console.log(error);
    }
})();