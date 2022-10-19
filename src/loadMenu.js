function menuLoad() {
    const contentBody = document.querySelector('.content-body');
    contentBody.textContent = '';
    const element1 = document.createElement('div');
    element1.classList.add('element');
    contentBody.appendChild(element1);
    const bfImage = document.createElement('img');
    bfImage.setAttribute('src','../src/pics/breakfast.jpg');
    bfImage.classList.add('breakfast-image');
    element1.appendChild(bfImage);
}

export {menuLoad};