console.log('pet adoptions')

const pets = [
  {
    image: 'https://bit.ly/3bAKaW9',
    name: 'Rocky',
    color: 'Golden',
    specialSkill: 'Surfing',
    typeOfPet: 'Dog',
  },
  {
    image: 'https://bit.ly/2VRPNst',
    name: 'Ivan',
    color: 'Gray',
    specialSkill: 'Nihilism',
    typeOfPet: 'Cat',
  },
  {
    image: 'https://bit.ly/3eScQw7',
    name: 'Rex',
    color: 'Red/Brown',
    specialSkill: 'Existing in the year 2020',
    typeOfPet: 'Dino',
  },
  {
    image: 'https://bit.ly/2Ktv491',
    name: 'Godiva',
    color: 'Chocolate',
    specialSkill: 'Good Boy',
    typeOfPet: 'Dog',
  },
  {
    image: 'https://bit.ly/3eGufrr',
    name: 'Claire',
    color: 'Orange',
    specialSkill: 'Staring into corners as if something only they could see were there',
    typeOfPet: 'Cat',
  },
  {
    image: 'https://bit.ly/2S54Y0h',
    name: 'Stampy',
    color: 'Gray',
    specialSkill: 'Seriously, how are dinosaurs alive?!',
    typeOfPet: 'Dino',
  },
];

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildPetCards = (adoptions) => {
  let domString = '';

  for (let i = 0; i < adoptions.length; i++) {
    domString += '<div class="pet">';
    domString += `<img src="${adoptions[i].image}" alt="">`
    domString += `<header class="name"><h2>${adoptions[i].name}</h2></header>`;
    domString += `<div class="color">Color: ${adoptions[i].color}</div>`
    domString += `<div class="skill">Special Skill: ${adoptions[i].specialSkill}</div>`
    domString += '</div>';
  }

  printToDom('#kennel', domString);
}

const init = () => {
  buildPetCards(pets);
}

init();
