const loadCategories = async() =>{
const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
const data = await res.json();
displayCatogories(data.categories)
}

const displayCatogories = (data) =>{
    console.log(data);
}

loadCategories();