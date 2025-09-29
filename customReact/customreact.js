const myRoot = document.querySelector("#root");

let elements = {
    tagName: 'a',
    attributes: {
        href: 'https://google.com',
        target: '_blank'
    },
    para: "Click me"
}

function myElements (elements, container){
    let domElement = document.createElement(elements.tagName);
    domElement.innerHTML = elements.para;
    for(attr in elements.attributes){
        domElement.setAttribute(attr, elements.attributes[attr]);
    }
    container.appendChild(domElement)
}

myElements(elements, myRoot)