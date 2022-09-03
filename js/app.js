const loadData = async id => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/category/01');
    const data = await res.json();
    displayData(data.data);
}
const displayData = (data) => {
    const bookContainer = document.getElementById('book-container')
    for (const book of data) {
        const bookDiv = document.createElement('div');
        bookDiv.innerHTML = `
        <div class="row g-0">
        <div class="col-md-4">
            <img src="${book.image_url}" class="img-fluid rounded-start" alt="...">
        </div>
         <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">${book.details.slice(0, 195)}</p>
                <div class="container text-center">
                    <div class="row">
                        <div class="col-sm-4">
                            <img class="img-fluid rounded-circle text-start" height="40px" width="40px"
                                src="${book.author.img}" alt=""><span>${book.author.name}</span>
                        </div>
                        <div class="col-sm-2">
                            <i class="fa-sharp fa-solid fa-eye"><span>${book.total_view}</span></i>
                        </div>
                        <div class="col-sm-4">
                            <i class="fa-solid text-warning fa-star"></i>
                            <i class="fa-solid text-warning fa-star"></i>
                            <i class="fa-solid text-warning fa-star"></i>
                            <i class="fa-solid text-warning fa-star"></i>
                            <i class="fa-solid text-dark fa-star"> ${book.rating.number}</i>
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
        bookContainer.appendChild(bookDiv);
        const detailsDiv = document.getElementById('modalTaitle');
        detailsDiv.innerHTML = `
        <h4>Title ${book.title}</h4>
        <br>
        <h4>Catagory Id ${book.category_id}</h4>
        <h4>Rating ${book.rating.number}</h4>
        <h4>Badge ${book.rating.badge}</h4>
        <h4>Published Date${book.author.published_date}</h4>
`;
    }
}
loadData();
// blog section

// document.getElementById('blog').addEventListener('click', function () {
// const blogContainer = document.getElementById('blog-container');
// blogContainer.innerHTML = `


// `


// })