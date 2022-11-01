

function createMenu (){

    const menuTitle = document.createElement('div');
    menuTitle.classList.add('menuTitle');
    menuTitle.textContent = 'Menu';
    content.appendChild(menuTitle);

    //double double container
    const doubledoubleContainer = document.createElement('div');
    doubledoubleContainer.classList.add('doubledoubleContainer');
    content.appendChild(doubledoubleContainer);

    const doubledoubleImageContainer = document.createElement('div');
    doubledoubleImageContainer.classList.add('doubledoubleImageContainer');
    doubledoubleContainer.appendChild(doubledoubleImageContainer);

    const doubledoubleImage = document.createElement('img');
    doubledoubleImage.classList.add('doubledoubleImage');
    doubledoubleImage.src = '../src/double-double.png';
    doubledoubleImageContainer.appendChild(doubledoubleImage);

    const doubledoubleTextContainer = document.createElement('div');
    doubledoubleTextContainer.classList.add('doubledoubleTextContainer');
    doubledoubleContainer.appendChild(doubledoubleTextContainer);

    const doubledoubleTextTitle = document.createElement('div');
    doubledoubleTextTitle.classList.add('doubledoubleTextTitle');
    doubledoubleTextTitle.textContent = 'Double-Double Combo';
    doubledoubleTextContainer.appendChild(doubledoubleTextTitle);

    const doubledoubleTextPrice = document.createElement('div');
    doubledoubleTextPrice.classList.add('doubledoubleTextPrice');
    doubledoubleTextPrice.textContent = '$7.89'
    doubledoubleTextContainer.appendChild(doubledoubleTextPrice);
    




}

export default createMenu;