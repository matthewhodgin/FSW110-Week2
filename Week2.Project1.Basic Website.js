

var nav = document.createElement('nav') //navbar with link
var a1 = document.createElement('a')
a1.href = "https://bryanuniversity.edu/" 
a1.textContent = 'Bryan University'
document.body.append(nav)  
nav.append(a1) 

var h1Element = document.createElement('h1') //h1 tag
h1Element.innerText = 'Week 2 - Project 1'
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

var footer = document.createElement('footer') //footer
footer.textContent = 'bryan@bryanuniversity.edu'
document.body.appendChild(footer)


    