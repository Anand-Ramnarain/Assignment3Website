const container = document.querySelector('.blogs-containers')
const sec =document.querySelector('.blogs1')

for(var i = 2; i<=7;i++){
    const newb = document.createElement('DIV')
    newb.className = 'blogs-boxs'
    const iImg = document.createElement('I')
    iImg.className = 'bx bx-code-alt'
    const newh3 = document.createElement('H3')
    newh3.innerText = 'Week ' + i
    const newp = document.createElement('P')
    const newBtn = document.createElement('button')
    newBtn.className = 'btn'
    newBtn.innerHTML ='Read More'
    container.appendChild(newb)
    newb.appendChild(iImg)
    newb.appendChild(newh3)
    newb.appendChild(newp) 
    newb.appendChild(newBtn)
}

var sum = document.getElementsByTagName("P")

sum[0].textContent = "description1"
sum[1].textContent = "description2"

var link = document.getElementsByTagName("button")

link[0].innerText = "o"
link[0].onclick= function(){
    window.open(linksToB[1])
}


var linksToB = [
    '<a href = "week1.html"></a>',
    'https://anand-ramnarain.github.io/MyWebsite/Week1blog.html'
]






