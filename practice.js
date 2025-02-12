// let ipt=document.querySelector("input");
// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");

// btn.addEventListener("click",function(){
// let item=document.createElement("li");
// item.innerText=ipt.value;
// ul.appendChild(item);
// let delBtn=document.createElement("button");
// delBtn.innerText="delete";
// delBtn.classList.add("delete");
// item.appendChild(delBtn);
// ipt.value=" ";
// });
// btn.addEventListener("click",addTask);

// ipt.addEventListener("keyup",function(event){
//     if(event.key==="Enter"){
//         addTask();
//     }
// });
// ul.addEventListener("click",function(event){
//        if(event.target.nodeName=="BUTTON"){
//         let listItem=event.target.parentElement;
//         listItem.remove();
//         console.log("DELETED");
//     }
//   });

let ipt = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

function addTask() {
    if (ipt.value.trim() === "") return;

    let item = document.createElement("li");
    item.innerText = ipt.value;
    
    let delBtn = document.createElement("button");
    delBtn.innerHTML = '<i class="fa fa-close"></i>'; // Add cross icon
    delBtn.classList.add("delete");
    
    item.appendChild(delBtn);
    ul.appendChild(item);
    ipt.value = "";
}btn.addEventListener("click", addTask);

ipt.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {  
        event.preventDefault();  
        addTask();
    }
});

ul.addEventListener("click", function(event) {
    if (event.target.closest("button")) { // Check if a button or its child (icon) was clicked
        let listItem = event.target.closest("li"); // Get the parent <li>
        listItem.remove();
        console.log("DELETED");
    }
});