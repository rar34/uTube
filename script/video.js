// convert time
function getTimeString(time) {
    const hours = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
    return `${hours} hours ${minute} minutes ago`
}


const loadCategories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
    const data = await res.json();
    displayCategories(data.categories)
}

const getVideoByCategory = (id) =>{
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data =>displayVideos(data.category))
}

const loadVideos = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos');
    const data = await res.json();
    displayVideos(data.videos)
}

const displayCategories = (data) => {
    data.map(item => {
        const categoriesContainer = document.getElementById('category-container');

        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
            <button class="btn" onclick="getVideoByCategory(${item.category_id})">${item.category}</button>
        `;
        categoriesContainer.append(categoryDiv)
    })
}



const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos');
    videoContainer.innerHTML=""

    if(videos.length == 0){
        videoContainer.innerHTML = `
        <div class="col-span-full mt-4 md:mt-14 text-center">
            <div class="flex flex-col items-center justify-center">
                <img class="w-[150px] mb-6" src="../assets/Icon.png" />
                <p class="text-center text-2xl font-bold">Oops!! Sorry, There is no content here.</p>
            </div>
        </div>
        `;
        return;
    }
    // console.log(videos);
    videos.map(video => {
        const card = document.createElement('div');
        card.classList = 'card bg-base-100';
        card.innerHTML = `
        
        <figure class="h-[200px] relative">
        <img class="w-full h-full object-cover rounded-t-xl"
        src=${video.thumbnail}
        alt=${video.title} />
        <span>${video.others.posted_date == "" ? "" : `<span class="absolute right-3 bottom-3 bg-black p-1 text-xs text-white rounded">${getTimeString(video.others.posted_date)}</span>`}</span>
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