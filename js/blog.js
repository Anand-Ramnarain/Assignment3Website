const container = document.querySelector('.blogs-containers')

for(var i = 2; i<=7;i++){
    const newDiv = document.createElement('DIV')
    newDiv.className = 'blogs-boxs'
    const iImg = document.createElement('I')
    iImg.className = 'bx bx-code-alt'
    const newH3 = document.createElement('H3')
    newH3.innerText = 'Week ' + i
    const newP = document.createElement('P')
    const newBtn = document.createElement('A')
    newBtn.className = 'btn'
    newBtn.innerText ='Read More'
    container.appendChild(newDiv)
    newDiv.appendChild(iImg)
    newDiv.appendChild(newH3)
    newDiv.appendChild(newP) 
    newDiv.appendChild(newBtn)
}

const containers = document.querySelector('#container')

for(var i = 9; i<=13;i++){
    const newDiv = document.createElement('DIV')
    newDiv.className = 'blogs-boxs'
    const iImg = document.createElement('I')
    iImg.className = 'bx bx-code-alt'
    const newH3 = document.createElement('H3')
    newH3.innerText = 'Week ' + i
    const newP = document.createElement('P')
    const newBtn = document.createElement('A')
    newBtn.className = 'btn'
    newBtn.innerText ='Read More'
    containers.appendChild(newDiv)
    newDiv.appendChild(iImg)
    newDiv.appendChild(newH3)
    newDiv.appendChild(newP) 
    newDiv.appendChild(newBtn)
}