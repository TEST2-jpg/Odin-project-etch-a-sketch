function newGrid(){
    let gridPrompt2 = prompt('How many grids? (1-100 grids)' , "16");
    while (gridPrompt2 > 100){
        gridPrompt2 = prompt('How many grids? (1-100 grids)' , "16");
    }
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild)
    }
    gridNum = gridPrompt2**2;
    for (let i = 1; i <= gridNum; i++) {
        const divs = document.createElement('div');
        divs.style.cssText = `background: white; width: ${(960/gridPrompt2)}px; height: ${(960/gridPrompt2)}px;`
        container.appendChild(divs);
        divs.addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = 'black';
        })
        
    }
}

const container = document.querySelector('#container');

let gridPrompt = 16;
gridNum = gridPrompt**2;

for (let i = 1; i <= gridNum; i++) {
    const divs = document.createElement('div');
    divs.style.cssText = `background: white; width: ${(960/gridPrompt)}px; height: ${(960/gridPrompt)}px;`
    container.appendChild(divs);
    divs.addEventListener('mouseover', function(e){
        e.target.style.backgroundColor = 'black';
    })
    
}

const button = document.querySelector('#Prompt');
button.addEventListener('click', newGrid);

