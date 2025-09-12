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

    videos.map(video => {
        const card = document.createElement('div');
        card.classList = 'card bg-base-100';
        card.innerHTML = `
        
        <figure>
        <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">Card Title</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
        </div>
        </div>

        `;
        videoContainer.append(card);
    })
}

loadCategories();
loadVideos();