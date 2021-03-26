let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));

// Add start
document.querySelector("#header-bt").addEventListener("click" , function(){
    text = document.querySelector("#header-input").value
    if(text == ""){
        alert("please add something")
    }
    else{
        itemsArray.push(text);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        add(text);
        document.querySelector("#header-input").value = ""
        window.location.reload()
    }
});

function add(text) {

    let containerDiv = document.createElement("div")
    containerDiv.setAttribute("class","container-div")
<<<<<<< HEAD

    let subDiv1 = document.createElement("div")
    subDiv1.setAttribute("class","sub-div1")

    let subDiv2 = document.createElement("div")
    subDiv2.setAttribute("class","sub-div2")

    let toDo = document.createElement("p")
    toDo.setAttribute("class","paragraph")

    let subButton1 = document.createElement("button")
    subButton1.setAttribute("class","bt1")

    let subButton2 = document.createElement("button")
    subButton2.setAttribute("class","bt2")

    let containerText = document.createTextNode(text);
    let del = document.createTextNode("delete");


=======
    let subDiv1 = document.createElement("div")
    subDiv1.setAttribute("class","sub-div1")
    let subDiv2 = document.createElement("div")
    subDiv2.setAttribute("class","sub-div2")
    let toDo = document.createElement("p")
    toDo.setAttribute("class","paragraph")
    let subButton1 = document.createElement("button")
    subButton1.setAttribute("class","bt1")
    let subButton2 = document.createElement("button")
    subButton2.setAttribute("class","bt2")
    let containerText = document.createTextNode(text);
    let del = document.createTextNode("delete");
>>>>>>> 9a3ed1b138472fc8bb129f9e3dd5b1155a052308
    subButton1.setAttribute("onclick","del(event)")
    subButton2.setAttribute("onclick","edit(event)")
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
<<<<<<< HEAD
   }
=======
   }   
   
>>>>>>> 9a3ed1b138472fc8bb129f9e3dd5b1155a052308
itemsArray.forEach(function(item){
    add(item)
});

// Add end

// Delete start 

function del(event){
    let value = event.target.parentNode.parentNode.firstChild.textContent
    itemsArray.splice(itemsArray.indexOf(value), 1); 
    localStorage.setItem('items',JSON.stringify(itemsArray))
    event.target.parentNode.parentNode.remove()
    window.location.reload()
}

// Delete End 


//  edit start
function edit(event){
    let value = event.target.parentNode.parentNode.firstChild.textContent
    window.value = value
    event.target.parentNode.parentNode.firstChild.firstChild.setAttribute("contenteditable","true")
    let check = document.createElement("i")
    event.target.parentNode.parentNode.firstChild.appendChild(check)
    check.setAttribute("class","fas fa-check")

    check.setAttribute("onclick","submit(event)")

}
function submit (event){
    event.target.parentNode.parentNode.firstChild.firstChild.setAttribute("contenteditable","false")
    text = event.target.parentNode.parentNode.firstChild.textContent
    itemsArray.splice(itemsArray.indexOf(value), 1,text); 
    localStorage.setItem('items', JSON.stringify(itemsArray));
    console.log(value)
    event.target.remove()
    }
    
// edit end

