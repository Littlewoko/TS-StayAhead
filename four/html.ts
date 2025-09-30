function createElement<T extends {key: string, value: string}>(tag: string, innerText: string, ...attributes: T[]) {
    var element = document.createElement(tag);
    element.innerText = innerText;
    attributes.forEach(({key, value}) => element.setAttribute(key, value));
    return element;
}