const catagoryLoadData = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCatagoryData(data.data.news_category))
};
const displayCatagoryData = data => {
    const newField = document.getElementById('ul-field');
    data.forEach((catagories) => {
        const li = document.createElement('span');
        li.innerHTML = `
        <span class="btn " onclick="categoriesNews('${catagories.category_id}')">${catagories.category_name} </span>
`;
        newField.appendChild(li)
    });
}

const categoriesNews = (post) => {
    const url = (`https://openapi.programming-hero.com/api/news/category/${post}`);
    fetch(url)
        .then(res => res.json())
        .then(data => showCatagories(data.data))
};

const showCatagories = (detail) => {
    const catagoriesLength = detail.length;
    const number = document.getElementById('numberOfNews')
    number.innerText = catagoriesLength;

    const newsDetails = document.getElementById('news-details');
    newsDetails.innerHTML = '';
    detail.forEach(details => {

        // console.log(details);
        const div = document.createElement('div');
        div.innerHTML = `

        <div class="row g-0 mt-5">
        <div class="col-md-4">
            <img src="${details.image_url}" class="img-fluid rounded-start" alt="...">
        </div>
         <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${details.title}</h5>
                <p class="card-text">${details.details.slice(0, 200) + '.....'}</p>
                <div class="container text-center">
                    <div class="row">
                        <div class="col-sm-4">
                            <img class="img-fluid rounded-circle text-start" height="40px" width="40px"
                                src="${details.author.img}" alt=""><span>${details.author.name}</span>
                        </div>
                        <div class="col-sm-2">
                            <i class="fa-sharp fa-solid fa-eye"><span>${details.total_view}</span></i>
                        </div>
                        <div class="col-sm-4">
                            <i class="fa-solid text-warning fa-star"></i>
                            <i class="fa-solid text-warning fa-star"></i>
                            <i class="fa-solid text-warning fa-star"></i>
                            <i class="fa-solid text-warning fa-star"></i>
                            <i class="fa-solid text-dark fa-star"> ${details.rating.number}</i>
                        </div>
                        <div class="col-sm-2">
                            <i onclick="modalsDetails()" class="fa-solid fs-4 fa-arrow-right" data-bs-toggle="modal" data-bs-target="#detailsModal"> </i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

 `;
        newsDetails.appendChild(div)
    });
}



catagoryLoadData();

