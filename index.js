let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputbtn = document.querySelector('#input-btn')
const ulEl = document.querySelector("#ul-el")

inputbtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderCode()
})

function renderCode() {
    let listItems = ""
    
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>`
        /*  
        adding by creating a new element and then set text content, then append it to ul.
        
        const li = document.createElement("li")
        li.textContent = myLeads[i];
        ulEl.append(li)
        */
    }
    
    ulEl.innerHTML = listItems
    
}
