let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));

// Add start
document.querySelector("#header-bt").addEventListener("click" , function(){
    text = document.querySelector("#header-input").value
    itemsArray.push(text);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    add(text);
    document.querySelector("#header-input").value = ""
    window.location.reload()
});
function add(text){
    let containerDiv = document.createElement("div")
        let subDiv1 = document.createElement("div")
        let subDiv2 = document.createElement("div")
        let toDo = document.createElement("p")
        let subButton1 = document.createElement("button")
        let subButton2 = document.createElement("button")
        let containerText = document.createTextNode(text);
        let del = document.createTextNode("delete");
        subButton1.setAttribute("onclick","del(event)")
        let edit = document.createTextNode("edit");
        toDo.appendChild(containerText)
        subButton1.appendChild(del)
        subButton2.appendChild(edit)
        containerDiv.appendChild(subDiv1)
        containerDiv.appendChild(subDiv2)
        subDiv1.appendChild(toDo)
        subDiv2.appendChild(subButton1)
        subDiv2.appendChild(subButton2)
        document.querySelector(".app-container").appendChild(containerDiv)
   }   
itemsArray.forEach(function(item){
    add(item)
});

// Add end

