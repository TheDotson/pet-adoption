const pets = [
  {
    image: 'https://bit.ly/3bAKaW9',
    name: 'Rocky',
    color: 'Golden',
    specialSkill: 'Surfing',
    typeOfPet: 'dog',
  },
  {
    image: 'https://bit.ly/2VRPNst',
    name: 'Ivan',
    color: 'Gray',
    specialSkill: 'Nihilism',
    typeOfPet: 'cat',
  },
  {
    image: 'https://bit.ly/3eScQw7',
    name: 'Rex',
    color: 'Red/Brown',
    specialSkill: 'Existing in the year 2020',
    typeOfPet: 'dino',
  },
  {
    image: 'https://bit.ly/2Ktv491',
    name: 'Godiva',
    color: 'Chocolate',
    specialSkill: 'Good Boy',
    typeOfPet: 'dog',
  },
  {
    image: 'https://bit.ly/3eGufrr',
    name: 'Claire',
    color: 'Orange',
    specialSkill: 'Staring into corners as if something only they could see were there',
    typeOfPet: 'cat',
  },
  {
    image: 'https://bit.ly/2S54Y0h',
    name: 'Stampy',
    color: 'Gray',
    specialSkill: 'Seriously, how are dinosaurs alive?!',
    typeOfPet: 'dino',
  },
];

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildPetCards = (adoptions) => {
  let domString = '';

  for (let i = 0; i < adoptions.length; i++) {
    domString += `<div class="${adoptions[i].typeOfPet} petCard">`
    domString += `<header class="name"><h2>${adoptions[i].name}</h2></header>`;
    domString += `<img src="${adoptions[i].image}" alt="">`
    domString += `<div class="color">Color: ${adoptions[i].color}</div>`
    domString += `<div class="skill">Special Skill: ${adoptions[i].specialSkill}</div>`
    domString += `<footer>${adoptions[i].typeOfPet}</footer>`
    domString += '</div>';
  }

  printToDom('#kennel', domString);
}

const filterPetEvent = (event) => {
  const buttonId = event.target.id;
  const tempPetCollection = [];

  if (buttonId === 'all') {
    buildPetCards(pets);
    return;
  }

  for (let i = 0; i < pets.length; i++) {
    if (pets[i].typeOfPet === buttonId) {
      tempPetCollection.push(pets[i]);
    }
  }
  buildPetCards(tempPetCollection);
}

const clickEvents = () => {
  document.querySelector('#dog').addEventListener('click', filterPetEvent);
  document.querySelector('#cat').addEventListener('click', filterPetEvent);
  document.querySelector('#dino').addEventListener('click', filterPetEvent);
  document.querySelector('#all').addEventListener('click', filterPetEvent);
}

const init = () => {
  buildPetCards(pets);
  clickEvents();
}

init();
