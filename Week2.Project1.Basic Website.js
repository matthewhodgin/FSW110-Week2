

//<a href="https://bryanuniversity.edu/">Bryan University</a>  //navbar with links

var h1Element = document.createElement('h1'); //h1 tag
h1Element.innerText = 'Week 2 - Project 1';
document.body.append(h1Element)

var newP = document.createElement('p') //p tag
newP.textContent = 'Basic Website using JS'
document.body.appendChild(newP)

var myList = document.createElement('ul') //A list
document.body.appendChild(myList)

var newListItem = document.createElement('li')  
myList.appendChild(newListItem)
newListItem.textContent = 'Practice'    

var newListItem = document.createElement('li')  
myList.appendChild(newListItem)
newListItem.textContent = 'Practice again'   

var newListItem = document.createElement('li')  
myList.appendChild(newListItem)
newListItem.textContent = 'Practice some more'    


//<ul id="my-list">
//<li>Practice</li>
//<li>Practice again</li>
//<li>Practice some more</li>
//</ul>

function myFunction() { //Footer
    var x = document.createElement("FOOTER");
    x.setAttribute("id", "myFooter");
    document.body.appendChild(x);

    var y = document.createElement("P"); 
    var t = document.createTextNode("This is a p element in a footer element.");
    y.appendChild(t);

    document.getElementById("myFooter").appendChild(y);
}


           

//HTML 
//<script>
//   document.getElementsByTagName('li');
//</script>