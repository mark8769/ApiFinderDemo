/*
script.js
Mark Ortega-Ponce
3/10/23
*/

window.addEventListener("DOMContentLoaded", main)

function main(){

    addCategories();
    addEventListeners();
}
function addEventListeners(){
    let submit = document.getElementById("submit");
    submit.addEventListener("click", apiCall);
}

function apiCall(){

    let description = document.getElementById("description").value;
    description = description.replace(" ", "+");
    let category = document.getElementById("category").value;
    let corsSupport = document.getElementById("corsSupported").value;

    let descParam = "";
    let categoryParam = "";
    let corsParam = "";
    let params = ""

    if (category !== "all"){
        categoryParam = `category=${category}`;
        params += categoryParam + "&";
    }
    if (corsSupport !== "all"){
        corsParam = `cors=${corsSupport}`;
        params += corsParam + "&";
    }
    if (description.length !== 0){
        descParam = `description=${description}`
        params += descParam + "&";
    }
    let endpoint = "https://api.publicapis.org/entries?";
    // At some point remove & from end of url, still works.
    endpoint += params;
    console.log(endpoint);
    let requestor = new XMLHttpRequest();
    // Load is handled when request is complete.
    requestor.addEventListener("load", apiCallHandler);
    // Initialize connection.
    requestor.open("GET", endpoint);
    // Send request.
    requestor.send();
}

function apiCallHandler(){

    // Check response was successful.
    if (this.status == 200){
        var json = JSON.parse(this.response);
    }else{
        alert("Api call failed");
    }

    entries = json.entries;
    let tbody = document.getElementById("results");
    let table = document.getElementById("table");
    tbody.innerHTML = "";
    let notFound = document.getElementById("notFound");

    if (entries == null){
        notFound.removeAttribute("hidden");
        table.setAttribute("hidden", true);
    }else{
        notFound.setAttribute("hidden", true);
        table.removeAttribute("hidden");
        for (let i=0; i < entries.length; i++){
            let e = entries[i]
            let row = "<tr>"
            row += `<td class="center">${e.API}</td>`
            row += `<td>${e.Description}</td>`
            row += `<td>${e.Auth}</td>`
            row += `<td>${e.HTTPS}</td>`
            row += `<td>${e.Cors}</td>`
            row += `<td><a href="${e.Link}">${e.API}</a></td>`
            row += `<td>${e.Category}</td>`
            row += "</tr>"
            tbody.innerHTML += row;
        }
    }
}

function addCategories(){
    let endpoint = "https://api.publicapis.org/categories"
    let requestor = new XMLHttpRequest();
    requestor.addEventListener("load", getCategories);
    // one or the other, I think i'd rather parse it, no wonder I forgot about this in class.
    //requestor.responseType = "json";
    requestor.open("GET", endpoint);
    requestor.send();
}

function getCategories(){

    if (this.status == 200){
        let selectElement = document.getElementById("category");
        let json = JSON.parse(this.response);
        let categoriesList = json.categories;
        for (let i = 0; i < categoriesList.length; i++){
            let category = json.categories[i];
            selectElement.innerHTML += `<option value="${category}">${category}</option>`;
        }
    }else{
        alert("API is down, come back later!");
        let alertDiv = document.getElementById("alert");
        alertDiv.innerHTML = "API is down, come back later!";
    }
}
