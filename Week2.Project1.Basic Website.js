

<a href="https://bryanuniversity.edu/">Bryan University</a>  //navbar with links

var h1Element = document.querySelector('h1'); //h1 tag
h1Element.innerText = 'Week 2 - Project 1';

var newP = document.createElement('p') //p tag
newP.textContent = 'Basic Website using JS'
document.body.appendChild(newP)

var newListItem = document.createElement('li')  //A list
var myList = document.getElementById('my-list')
myList.appendChild(newListItem)      



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