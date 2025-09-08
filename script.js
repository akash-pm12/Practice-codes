function deletecontent(event){
    event.target.parentElement.remove()
}

var disp=document.querySelector(".popup")
function show(event){
    event.preventDefault()
    disp.style.display="flex"
}

function cancel(event){
    event.preventDefault()
    disp.style.display="none"
    event.target.closest("form").reset()
}

var add=document.querySelector(".addbutton")
add.addEventListener("click",function(event){
    event.preventDefault();
    var name=document.getElementById("bookname").value
    var author=document.getElementById("authorname").value
    var des=document.getElementById("descrip").value
    var cr=document.createElement("div")
    cr.setAttribute("class","book")
    cr.innerHTML=`<h1 class='title'>${name}</h1>
    <h3 class='author'>${author}</h3>
    <p class='description'>${des}</p>
    <button class='deletebutton' onclick='deletecontent(event)'>Delete</button>`
    var bb=document.querySelector(".bookbox")
    bb.append(cr)
    cancel(event)
    event.target.closest("form").reset()
})