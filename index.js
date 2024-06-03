let myLinks = []

const inputEl = document.querySelector("#input-el")
const inputbtn = document.querySelector('#input-btn')
const ulEl = document.querySelector("#ul-el")
const deletebtn = document.querySelector("#delete-btn")

const stored_links = JSON.parse(localStorage.getItem("myLinks"))

if (stored_links) {
    myLinks = stored_links
    renderLinks(myLinks)
}

inputbtn.addEventListener("click", function() {
    myLinks.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLinks", JSON.stringify(myLinks))
    renderLinks(myLinks)
    console.log(localStorage.getItem("myLinks"));
})

// console.log(localStorage.getItem("myLinks"));
// local storage only stores strings
// therefore we have to convert the array into strings using JSON.stringify()
// to fatch data from the storage, use JSON.parse(localStorage.getItem(key))

function renderLinks(links) {
    let listItems = ""
    
    for (let i = 0; i < links.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${links[i]}'>
                    ${links[i]}
                </a>
            </li>`
        /*  
        adding by creating a new element and then set text content, then append it to ul.
        
        const li = document.createElement("li")
        li.textContent = myLinks[i];
        ulEl.append(li)
        */
    }
    
    ulEl.innerHTML = listItems
    
}

deletebtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLinks = []
    renderLinks(myLinks)
})