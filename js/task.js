var fireballSize = 22;
// заменил тернарным условием
  // var getFireballSpeed = function(left) {
  //   if (left) {
  //     return getFireballSpeed = 5;
  //   } else {
  //     return getFireballSpeed = -2;
  //   }
  // }
  var getFireballSpeed = function(left) {
    return left ? 5 : 2;
  }
  var wizardSpeed = 3;
  var wizardWidth = 70;
  var getWizardHeight = function(wizardWidth) {
    return (wizardWidth * 1.337);
  }
  console.log(getWizardHeight);
  var getWizardX = function(width) {
    return width/2 - wizardWidth/2;
  }
  var getWizardY = function(height) {
    return height/3 - getWizardHeight(wizardWidth)/2;
  }
