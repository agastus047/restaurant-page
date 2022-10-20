function homeReload() {
    const contentBody = document.querySelector('.content-body');
    contentBody.textContent = '';
    const homeContent = document.createElement('div');
    homeContent.classList.add('home-content');
    contentBody.appendChild(homeContent);
    const bgImage = document.createElement('img');
    bgImage.setAttribute('src','./pics/jay-wennington-N_Y88TWmGwA-unsplash.jpg');
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

export {homeReload};