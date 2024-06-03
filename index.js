let myLinks = []

const inputEl = document.querySelector("#input-el")
const inputbtn = document.querySelector('#input-btn')
const ulEl = document.querySelector("#ul-el")

let stored_links = JSON.parse(localStorage.getItem("myLinks"))

if (stored_links) {
    myLinks = stored_links
    renderCode()
}

inputbtn.addEventListener("click", function() {
    myLinks.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLinks", JSON.stringify(myLinks))
    renderCode()
    console.log(localStorage.getItem("myLinks"));
})

// console.log(localStorage.getItem("myLinks"));
// local storage only stores strings
// therefore we have to convert the array into strings using JSON.stringify()
// to fatch data from the storage, use JSON.parse(localStorage.getItem(key))

function renderCode() {
    let listItems = ""
    
    for (let i = 0; i < myLinks.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLinks[i]}'>
                    ${myLinks[i]}
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
