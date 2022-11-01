


function createHome (){
    const intro = document.createElement('div');
    intro.classList.add('intro');
    content.appendChild(intro);
    intro.textContent = 'Habit?... Pfft, Five guys? Don\'t make me laugh... What a burger?... More like what a disgrace... In-n-out has been and always will be the best burger chain in all of america. We own this shit, this is what we do. Glory to In-n-out... Long live the burger motherland.'

    const introHours = document.createElement('div');
    introHours.classList.add('introHours');
    content.appendChild(introHours);

    const hours = document.createElement('div');
    hours.classList.add('hours');
    hours.textContent = 'Hours:';
    introHours.appendChild(hours);
    
    const sunday = document.createElement('p');
    sunday.classList.add('sunday');
    sunday.textContent = 'Sunday: 9:00 AM - 2:00 AM';
    introHours.appendChild(sunday);

    const monday = document.createElement('p');
    monday.classList.add('monday');
    monday.textContent = 'Monday: 9:00 AM - 2:00 AM'
    introHours.appendChild(monday);

    const tuesday = document.createElement('p');
    tuesday.classList.add('tuesday');
    tuesday.textContent = 'Tuesday: 9:00 AM - 2:00 AM'
    introHours.appendChild(tuesday);

    const wednesday = document.createElement('p');
    wednesday.classList.add('wednesday');
    wednesday.textContent = 'Wednesday: 9:00 AM - 2:00 AM'
    introHours.appendChild(wednesday);

    const thursday = document.createElement('p');
    thursday.classList.add('thursday');
    thursday.textContent = 'Thursday: 9:00 AM - 2:00 AM'
    introHours.appendChild(thursday);

    const friday = document.createElement('p');
    friday.classList.add('friday');
    friday.textContent = 'Friday: 9:00 AM - 2:00 AM'
    introHours.appendChild(friday);

    const saturday = document.createElement('p');
    saturday.classList.add('saturday');
    saturday.textContent = 'Saturday: 9:00 AM - 2:00 AM'
    introHours.appendChild(saturday);
    

    const introPicture = document.createElement('img');
    introPicture.classList.add('introPicture');
    introPicture.src = '../src/INNOUTART.jpg';
    content.appendChild(introPicture)

    const imgCredits = document.createElement('div');
    imgCredits.classList.add('imgCredits');
    imgCredits.textContent = 'Art credits to \"Mike Rider\"';
    content.appendChild(imgCredits);

}
export default createHome

