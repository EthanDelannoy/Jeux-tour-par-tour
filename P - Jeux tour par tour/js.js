// -----------------------------------------------------MODAL TUTORIEL---------------------------------------------------------------
const ouvrirmodal = document.getElementById("tutoriel");


ouvrirmodal.addEventListener('click', () => {
    let modal = document.getElementById("ouvertureModal");
    modal.style.display ='block'
})

modalEnd.addEventListener('click', () => {
    const modalEnd = document.getElementById("modalEnd");
    let modal = document.getElementById("ouvertureModal");
    modal.style.display = 'none'
})

// --------------------------------------------CHANGEMENT DE PAGE ACCUEIL VERS SELECTION PERSO---------------------------------------

const jouer = document.getElementById("jouer")


jouer.addEventListener('click', () => {
    const accueil = document.getElementById('accueil')
    accueil.style.display = 'none';

    const combat = document.getElementById('combat')
    combat.style.display = 'none'

    const personnage = document.getElementById('personnage')
    personnage.style.display = 'block'
})

// ------------------------------------------------------CARROUSEL AVEC PERSO J1-------------------------------------------------------
let slideIndex = 0;


let persochoisij1 = slideIndex

let imgjoueur1 = document.getElementById('imgjoueur1');
let barrehp = document.getElementById('barreHp');
let btnSoin = document.getElementById('btnSoin');
let selectPlayer1;
let selectPlayer2;

function moveSlide1(n) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  slideIndex = (slideIndex + n + totalSlides) % totalSlides;
  const offset = -slideIndex * 100;
  document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;

  persochoisij1 = slideIndex

  
  switch (persochoisij1) {
    case 0:
      selectPlayer1  = Object.assign({}, tab[0])
      imgjoueur1.style.backgroundImage = "url('./image/iop 1.svg')";
      barrehp.textContent = selectPlayer1.pdv + "/5000";
      btnSoin.textContent = "Soins"
      break;
    case 1:
      selectPlayer1 = Object.assign({}, tab[1])
      imgjoueur1.style.backgroundImage = "url('./image/eni (2).png')";
      barrehp.textContent = selectPlayer1.pdv + "/4500";
      btnSoin.textContent = "Soins"
      break;
    case 2:
      selectPlayer1 = Object.assign({}, tab[2])
      imgjoueur1.style.backgroundImage = "url('./image/huppeer 1.svg')";
      barrehp.textContent = selectPlayer1.pdv +"/4000";
      btnSoin.textContent = "Soins"
      break;
    case 3:
      selectPlayer1 = Object.assign({}, tab[3])
      imgjoueur1.style.backgroundImage = "url('./image/cra 1.svg')";
      barrehp.textContent =  selectPlayer1.pdv + "/3000";
      btnSoin.textContent = "Soins"
      break;
  }
}

const tab = [
  
  {
    nom: "Iop",
    pdv: 5000,
    pdvmax : 5000,
    pa: 10,
    atk: 600,
    pvr: 100,
},
{
  nom: "Eniripsa",
  pdv: 4500,
  pdvmax : 4500,
  pa: 11,
  atk: 300,
  pvr: 500,
},
{
  nom: "Huppermage",
  pdv: 4000,
  pdvmax : 4000,
  pa: 12,
  atk: 400,
  pvr: 400,
},
{
  nom: "Cra",
  pdv: 3000,
  pdvmax : 3000,
  pa: 10,
  atk: 800,
  pvr : 100
}
];


const boutonatk = document.getElementById('btnAtk')
let barrehp2 = document.getElementById('barreHp2');

// --------------------------------------------------------CARROUSEL AVEC PERSO J2------------------------------------------------------

let slidesIndex = 0;
let persochoisij2 = slidesIndex

function moveSlide2(n) {
  const slides = document.querySelectorAll('.slide2');
  const totalSlides = slides.length;
  slidesIndex = (slidesIndex + n + totalSlides) % totalSlides;
  const offset = -slidesIndex * 100;
  document.querySelector('.carousel-container2').style.transform = `translateX(${offset}%)`;


  persochoisij2 = slidesIndex

  let imgjoueur2 = document.getElementById('imgjoueur2');
  let barrehp2 = document.getElementById('barreHp2');
  let btnSoin2 = document.getElementById('btnSoin2');
  
  switch (persochoisij2) {
    case 0:
    selectPlayer2 = Object.assign({}, tab[0])
      imgjoueur2.style.backgroundImage = "url('./image/iop 1.svg')";
      barrehp2.textContent =  selectPlayer2.pdv + "/5000";
      btnSoin2.textContent = "Soins"
      break;
    case 1:
      selectPlayer2  = Object.assign({}, tab[1])
      imgjoueur2.style.backgroundImage = "url('./image/eni (2).png')";
      barrehp2.textContent = selectPlayer2.pdv +"/4500";
      btnSoin2.textContent = "Soins"
      break;
    case 2:
      selectPlayer2  = Object.assign({}, tab[2])
      imgjoueur2.style.backgroundImage = "url('./image/huppeer 1.svg')";
      barrehp2.textContent = selectPlayer2.pdv + "/4000";
      btnSoin2.textContent = "Soins"
      break;
    case 3:
      selectPlayer2  = Object.assign({}, tab[3])
      imgjoueur2.style.backgroundImage = "url('./image/cra 1.svg')";
      barrehp2.textContent = selectPlayer2.pdv +"/3000";
      btnSoin2.textContent = "Soins"
      break;
  }
}

const boutonatk2 = document.getElementById('btnAtk2')
let barreHp = document.getElementById('barreHp');


function updateDisplay() {
  if (tourJoueur1) {
    boutonatk.style.display = 'block';
    btnSoin.style.display = 'block';
    boutonatk2.style.display = 'none';
    btnSoin2.style.display = 'none';
  } else {
    boutonatk.style.display = 'none';
    btnSoin.style.display = 'none';
    boutonatk2.style.display = 'block';
    btnSoin2.style.display = 'block';
  }
}

let modalFin = document.getElementById('ouvertureModalFin')
let pModalFin = document.getElementById('pModalFin')
let hptransparent2 = document.getElementById('hptransparent2')
let hptransparent = document.getElementById('hptransparent')

boutonatk.addEventListener('click', () => {
  selectPlayer2.pdv = selectPlayer2.pdv - selectPlayer1.atk;
  barrehp2.textContent = selectPlayer2.pdv;
  hptransparent2.style.width = (selectPlayer2.pdv / selectPlayer2.pdvmax * 100) + '%';
  console.log(hptransparent2);
  if (selectPlayer2.pdv <= 0) {
    setTimeout(function() {
    modalFin.style.display ='block'
  }, 300); 
  pModalFin.innerHTML = 'Le joueur 1 à gagner !<br> Bravo à toi jeune gerrier. Tu fais honneur à Bonta. Remettras-tu ton titre et ton honneur en jeux ? Brakmar saura te faire plier !';
  }
  tourJoueur1 = false;
  updateDisplay();
});

boutonatk2.addEventListener('click', () => {
  selectPlayer1.pdv = selectPlayer1.pdv - selectPlayer2.atk;
  barreHp.textContent = selectPlayer1.pdv;
  hptransparent.style.width = (selectPlayer1.pdv / selectPlayer1.pdvmax * 100) + '%';
  if (selectPlayer1.pdv <= 0) {
    setTimeout(function() {
    modalFin.style.display ='block'
  }, 300); 
    pModalFin.innerHTML = 'Le joueur 2 à gagner !Bravo à toi jeune gerrier. Tu fais honneur à Brakmar. Remettras-tu ton titre et ton honneur en jeux ? Bonta saura te faire plier ! '
  }
  tourJoueur1 = true;
  updateDisplay();
});

let btnSoins = document.getElementById('btnSoin')
let btnSoins2 = document.getElementById('btnSoin2')

btnSoins.addEventListener('click', () => {
  selectPlayer1.pdv = selectPlayer1.pdv + selectPlayer1.pvr;
  barrehp.textContent = selectPlayer1.pdv;
  hptransparent.style.width = (selectPlayer1.pdv / selectPlayer1.pdvmax * 100) + '%';
  tourJoueur1 = false;
  updateDisplay();
})

btnSoins2.addEventListener('click', () => {
  selectPlayer2.pdv = selectPlayer2.pdv + selectPlayer2.pvr;
  barrehp2.textContent = selectPlayer2.pdv;
  hptransparent2.style.width = (selectPlayer2.pdv / selectPlayer2.pdvmax * 100) + '%';
  tourJoueur1 = true;
  updateDisplay();
})

// -----------------------------------------------------BOUTON SELECT PERSO JOUEUR 1 --------------------------------------------------

const selec = document.getElementById("validPerso1")

selec.addEventListener('click', () => {
    const croco = document.getElementById('croco')
    croco.style.display = 'inline';
    checkDisplay();
});

// -----------------------------------------------------BOUTON SELECT PERSO JOUEUR 2 --------------------------------------------------


const select = document.getElementById("validPerso2")

select.addEventListener('click', () => {
    const shushu = document.getElementById('shushu')
    shushu.style.display = 'inline';
    checkDisplay();
});

// -----------------------------------------------------BOUTON COMMENCEZ LA PARTIE --------------------------------------------------


function checkDisplay() {
    const croco = document.getElementById('croco');
    const shushu = document.getElementById('shushu');
    const game = document.getElementById('game');

    if (croco.style.display === 'inline' && shushu.style.display === 'inline') {
      setTimeout(function() {
        game.style.display = 'inline';
    }, 1500); // 
}
}
// ---------------------------------------------------------------SECTION COMBAT---------------------------------------------------

const game = document.getElementById("game")


game.addEventListener('click', () => {
    const personnage = document.getElementById('personnage')
    personnage.style.display = 'none';

    const accueil = document.getElementById('accueil')
    accueil.style.display = 'none';

    const combat = document.getElementById('combat')
    combat.style.display = 'block'
});

// -------------------------------------------------------------MODAL DE FIN-----------------------------------------------------------
const modalFinAccueil = document.getElementById("modalFinAccueil")


modalFinAccueil.addEventListener('click', () => {
    const personnage = document.getElementById('personnage')
    personnage.style.display = 'none';
    modalFin.style.display = 'none';
    selectPlayer1 = ''
    selectPlayer2 = ''


    const accueil = document.getElementById('accueil')
    accueil.style.display = 'block';
    modalFin.style.display = 'none';
    selectPlayer1 = ''
    selectPlayer2 = ''

    const combat = document.getElementById('combat')
    combat.style.display = 'none'
    modalFin.style.display = 'none';
    selectPlayer1 = ''
    selectPlayer2 = ''


  });

  const modalFinPersonnage = document.getElementById("modalFinPersonnage")


  modalFinPersonnage.addEventListener('click', () => {
    const personnage = document.getElementById('personnage')
    personnage.style.display = 'block';
    modalFin.style.display = 'none';
    selectPlayer1 = ''
    selectPlayer2 = ''

    const accueil = document.getElementById('accueil')
    accueil.style.display = 'none';
    modalFin.style.display = 'none';
    selectPlayer1 = ''
    selectPlayer2 = ''


    const combat = document.getElementById('combat')
    combat.style.display = 'none'
    modalFin.style.display = 'none';
    selectPlayer1 = ''
    selectPlayer2 = ''
  });

  const modalFinRecommencer = document.getElementById("modalFinRecommencer")


  modalFinRecommencer.addEventListener('click', () => {
    const personnage = document.getElementById('personnage')
    personnage.style.display = 'none';
    modalFin.style.display = 'none';
    selectPlayer1 = ''
    selectPlayer2 = ''


    const accueil = document.getElementById('accueil')
    accueil.style.display = 'none';
    modalFin.style.display = 'none';
    selectPlayer1 = ''
    selectPlayer2 = ''


    const combat = document.getElementById('combat')
    combat.style.display = 'block'
    modalFin.style.display = 'none';
    selectPlayer1 = ''
    selectPlayer2 = ''
  });

  // ------------------------------------------------------------------PSEUDO--------------------------------------------------------

  let inputPseudo1 = document.getElementById('pseudo1');
  let buttonValider1 = document.querySelector('.valider1');
  let j1pseudo = document.querySelector('.j1pseudo')
  
    buttonValider1.addEventListener('click', () => {
      let pseudoJoueur1 = inputPseudo1.value;
      j1pseudo.textContent = pseudoJoueur1
  });

  let inputPseudo2 = document.getElementById('pseudo2');
  let buttonValider2 = document.querySelector('.valider2');
  let j2pseudo = document.querySelector('.j2pseudo')
  
    buttonValider2.addEventListener('click', () => {
      let pseudoJoueur2 = inputPseudo2.value;
      j2pseudo.textContent = pseudoJoueur2
  });

  // -------------------------------------------------------------BARRE DE VIE ----------------------------------------------------

