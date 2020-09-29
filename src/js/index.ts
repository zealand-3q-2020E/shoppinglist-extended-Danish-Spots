//Write your Typescript code here
document.getElementById("newItemBtn").addEventListener("click", addItem);
document.getElementById("unhide").addEventListener("click", unHide);
let inputField = document.getElementById("newItemInput");
let sList: HTMLUListElement = <HTMLUListElement> document.getElementById("list");



function addItem(){
    //Getting the last child's id for making a new item
    let lastChild: HTMLLIElement = <HTMLLIElement> sList.lastElementChild;
    let lastChildId: number =  +lastChild.getAttribute("id");
    let newItemId: number = lastChildId + 1;

    

    //making a new item
    let newItem: HTMLLIElement = document.createElement("li");
    let inputText = (<HTMLInputElement>inputField).value;
    let newItemText: Text = document.createTextNode(inputText);
    newItem.setAttribute("id", newItemId.toString());
    newItem.appendChild(newItemText);

    //Getting the health choice
    let selector: HTMLSelectElement = <HTMLSelectElement> document.getElementById("healthChoice");
    let sel: number = selector.selectedIndex;
    let option: HTMLOptionElement = selector.options[sel];
    if (option.getAttribute("id") == "Healthy"){
        newItem.setAttribute("class", "healthy");
    }
    else{
        newItem.setAttribute("class", "unhealthy");
    }

    //adding new item to the list
    sList.appendChild(newItem);
}

//Function for hiding elements, mostly created by looking at the solution
sList.addEventListener("click", function(element){
    let clickedElement = <HTMLInputElement>element.target;

    if (element.target && clickedElement.nodeName == "LI"){
        clickedElement.setAttribute("hidden",  "true");
    }
});


function unHide(){
    let allListElements: HTMLCollectionOf<HTMLLIElement> = <HTMLCollectionOf<HTMLLIElement>> sList.children

    for(let i=0; i < allListElements.length; i++){
        let hiddenElement = allListElements[i].getAttribute("hidden");
        if (hiddenElement == "true"){
            allListElements[i].removeAttribute("hidden");
        }
    }
}