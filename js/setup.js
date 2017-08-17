// Файл setup.js
'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['Да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

// не понял прицнип работы рандомного получения элемента массива

var getRandomWizardName = function (randWizardNameInner) {
	return WIZARD_NAMES[Math.floor(Math.random()*(WIZARD_NAMES.length))];	
}

var getRandomWizardSurname = function (randWizardSurnameInner) {
	return WIZARD_SURNAMES[Math.floor(Math.random()*(WIZARD_SURNAMES.length))];	
}

var getRandomWizardCoatColor = function (randWizardCoatColorInner) {
	return COAT_COLOR[Math.floor(Math.random()*(COAT_COLOR.length))];	
}

var getRandomWizarEyeColor = function (randWizardEyeColorInner) {
	return EYE_COLOR[Math.floor(Math.random()*(EYE_COLOR.length))];	
}

// var randWizardName = WIZARD_NAMES[Math.floor(Math.random()*(WIZARD_NAMES.length))];
// var randWizardSurname = WIZARD_SURNAMES[Math.floor(Math.random()*(WIZARD_SURNAMES.length))];
// var randWizardCoatColor = COAT_COLOR[Math.floor(Math.random()*(COAT_COLOR.length))];
// var randWizardEyeColor = EYE_COLOR[Math.floor(Math.random()*(EYE_COLOR.length))];


var wizards = [
  {
    name: getRandomWizardName() + " " + getRandomWizardSurname(),
    coatColor: getRandomWizardCoatColor(),
    eyesColor: getRandomWizarEyeColor()
  },
  {
    name: getRandomWizardName() + " " + getRandomWizardSurname(),
    coatColor: getRandomWizardCoatColor(),
    eyesColor: getRandomWizarEyeColor()
  },
  {
    name: getRandomWizardName() + " " + getRandomWizardSurname(),
    coatColor: getRandomWizardCoatColor(),
    eyesColor: getRandomWizarEyeColor()
  },
  {
    name: getRandomWizardName() + " " + getRandomWizardSurname(),
    coatColor: getRandomWizardCoatColor(),
    eyesColor: getRandomWizarEyeColor()
  }
];




var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {

  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
