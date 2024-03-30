 const availableKeywords = [ 
    " paracetamol -5gh cedis",
    "metronidazole(fragile) - 5gh cedis", 
    "triple action - 10gh cedis",
    "Lydia post-pill- 10gh cedis",
    "malaria drug(Lonart)  - 35gh",
    "artemether- lumefantrine(Coartem)  - 30gh",
    "Ceftriaxone  - 25gh",
    "Mouthwash  - 25gh",
    "Mallox  - 4gh",
    "Chocho cream  - 12gh",
    "Colgate toothpaste - 15gh",
    "Pepsodent toothpaste - 12gh",
    "Close-up toothpaste - 12gh",
    "Ebony Condom- 12gh",
    "Cetirizine tablet  - 25gh",
    "Jarifan blood tonic  - 30gh",
    " Fine Life - 25gh",
    "Cetirizine tablet  - 25gh",
    "Gebedol - 15gh",
    "Panadol - 15gh",
    "Ibuprofen - 15gh",
    " Aspirin- 15gh",
    "Coloduim- 15gh",
    "Fiesta Condom - 10gh",
    " Zubes cough mixture - 15gh",
    "Foligrow syrup - 35gh",
    "Foligrow tablet - 20gh",
    "Zincovit tablet - 20gh",
    "Polyfer syrup - 35gh",
    "Mercy cream - 10gh",
    "Nugel - 30gh",
    "Omeperazole - 15gh",
    "Amoxacillin - 10gh",
    " Procold - 15gh",
    "levothyroxine - 80gh",
    "Mycolex - 30gh",
    
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        const result = availableKeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
        display(result)
       

        if(!result.length){
            resultsBox.innerHTML = '';
        }
    }
};

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });
    resultsBox.innerHTML = "<ul>" + content.join('') + " </ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = ''; 
}




const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('#nav-menu');
const navLogo = document.querySelector('#navbar_logo');

//Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

};

menu.addEventListener('click', mobileMenu);


// show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    let scrollPos = window.scrollY

    //adds 'highlight' class to my menu items
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 2600 ) {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 3600 ) {
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight')

    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)


// Hide moble menu when clicking on the menu
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

