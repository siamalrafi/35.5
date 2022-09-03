const catagoryLoadData = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCatagoryData(data.data.news_category))
};

const displayCatagoryData = data => {
    const newField = document.getElementById('ul-field');
    data.forEach((catagories) => {
        const li = document.createElement('li');
        li.innerHTML = `
<p onclick="categoriesNews('${catagories.category_id}')">${catagories.category_name}</p>`;
        newField.appendChild(li)
    });
}

const categoriesNews = (post) => {
    const url = (`https://openapi.programming-hero.com/api/news/category/${post}`);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCatagoryDetails(data.data))
};

const displayCatagoryDetails = (detail) => {
    const newsDetails = document.getElementById('news-details');
    newsDetails.innerHTML = '';
    detail.forEach(details => {
        console.log(details);
        const div = document.createElement('div');
        div.innerHTML = `
 <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${details.thumbnail_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${details.title}</h5>
        <p class="card-text">${details.details.slice(0, 100)}</p>
      </div>
    </div>
  </div>
</div>





 `;
        newsDetails.appendChild(div)
    });
}



catagoryLoadData();

