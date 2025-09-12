const loadCategories = async() =>{
const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
const data = await res.json();
displayCategories(data.categories)
}


const loadVideos = async() =>{
const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos');
const data = await res.json();
displayVideos(data.videos)
}

const displayCategories = (data) =>{
    data.map(item =>{
        const categoriesContainer = document.getElementById('category-container');

        const button = document.createElement('button');
        button.classList = 'btn';
        button.innerText = item.category;

        categoriesContainer.append(button)
    })
}

const displayVideos = (videos) => {
    console.log(videos)
}

loadCategories();
loadVideos();