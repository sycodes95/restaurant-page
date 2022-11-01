function createContact (){

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer');
    content.appendChild(contactContainer);

    const contactText = document.createElement('div');
    contactText.classList.add('contactText');
    contactText.textContent = 'Contact Us!'
    contactContainer.appendChild(contactText);

    const contactPhone = document.createElement('p');
    contactPhone.classList.add('contactPhone');
    contactPhone.textContent = '213-420-6969';
    contactContainer.appendChild(contactPhone);

    const contactEmail = document.createElement('p');
    contactEmail.classList.add('contactEmail');
    contactEmail.textContent = 'emaildeeznutz@nice.com';
    contactContainer.appendChild(contactEmail);





    
    




}

export default createContact;