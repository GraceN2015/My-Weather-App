    Event.preventDefault();
    let searchInput=document.querySelector("search-form-input");
    let cityElement=document.querySelector("city");
    cityElement.innerHTML=searchInput.value;

}
let searchFormElement=document.querySelector("search-form");
searchFormElement.addEventListerner("submit",handSearchSubmit);
