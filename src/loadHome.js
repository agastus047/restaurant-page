function initialLoad() {
    const content = document.querySelector('#content');
    const header = document.createElement('div');
    header.classList.add('header');
    content.appendChild(header);
    const title = document.createElement('h1');
    title.textContent = "MILANO CAFE";
    header.appendChild(title);
    const link1 = document.createElement('a');
    link1.setAttribute('href','');
    link1.textContent = "Home";
    link1.classList.add('home');
    header.appendChild(link1);
    const link2 = document.createElement('a');
    link2.setAttribute('href','');
    link2.textContent = "Menu";
    link2.classList.add('menu');
    header.appendChild(link2);
    const link3 = document.createElement('a');
    link3.setAttribute('href','');
    link3.textContent = "Contact";
    link3.classList.add('contact');
    header.appendChild(link3);
    const contentBody = document.createElement('div');
    contentBody.classList.add('content-body');
    content.appendChild(contentBody);
    const homeContent = document.createElement('div');
    homeContent.classList.add('home-content');
    contentBody.appendChild(homeContent);
    const bgImage = document.createElement('img');
    bgImage.setAttribute('src','../src/pics/jay-wennington-N_Y88TWmGwA-unsplash.jpg');
    bgImage.classList.add('home-image');
    homeContent.appendChild(bgImage);
    const infoText = document.createElement('h2');
    infoText.textContent = "As good as it gets!";
    homeContent.appendChild(infoText);
    const credits = document.createElement('div');
    credits.classList.add('credits');
    credits.innerHTML = '<p>Photo by <a href="https://unsplash.com/@jaywennington?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jay Wennington</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>';
    contentBody.appendChild(credits);
}

export {initialLoad};