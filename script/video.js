const loadCategories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
    const data = await res.json();
    displayCategories(data.categories)
}


const loadVideos = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos');
    const data = await res.json();
    displayVideos(data.videos)
}

const displayCategories = (data) => {
    data.map(item => {
        const categoriesContainer = document.getElementById('category-container');

        const button = document.createElement('button');
        button.classList = 'btn';
        button.innerText = item.category;

        categoriesContainer.append(button)
    })
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos');
    console.log(videos);
    videos.map(video => {
        const card = document.createElement('div');
        card.classList = 'card w-96 bg-base-100';
        card.innerHTML = `
        
        <figure>
        <img class="w-[400px] h-[200px]"
        src=${video.thumbnail}
        alt=${video.title} />
        </figure>
        <div class="flex gap-4">
           
            <img class="w-10 h-10 rounded-full mt-5" src=${video.authors[0].profile_picture} alt="" />
           
            <div class="space-y-2 my-4">
                <h2 class="card-title">${video.title}</h2>
                <p class="flex items-center gap-3"><span>${video.authors[0].profile_name}</span> <span>${video.authors[0].verified ? `<img src=${'https://i.ibb.co/7JL7yWG1/verified.png'}>` : ''}</span></p>
                <p>${video.others.views} views</p>
            
        </div>
        </div>
        </div>

        `;
        videoContainer.append(card);
    })
}

loadCategories();
loadVideos();