const _getElemById = id => {
    return document.getElementById(id);
}

export const getAllElemsById = (listOfId) => {
    const viewElem = {};

    for(let id of listOfId) {
        viewElem[id] = _getElemById(id);
    }

    return viewElem;
}

export const renderTagElem = (tagName, className, innerText, src) => {
    const tag = document.createElement(tagName);
    tag.classList.add(className);
    if(innerText)  tag.innerText = innerText;
    if(src) tag.src = src;
    return tag;
}