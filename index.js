let firstelement= document.createElement('p');
let child=[
    'first element',
    'second element',
    'third element',
]
for (let index = 0; index < child.length; index++) {
    const element = document.createElement('p');
    const text = document.createTextNode(child[index]);
    element.appendChild(text)
    element.style.backgroundColor='green';
    element.style.color='black';
    element.style.padding='20px';
    element.style.textAlign='center'
    const ourdiv= document.querySelector('our-text');
    ourdiv.appendChild(element);
}

