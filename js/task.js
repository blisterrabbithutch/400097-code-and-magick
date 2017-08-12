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
    return wizardWidth * 1.337;
  }
  // var getWizardX = function(width) {

  // }
  // var getWizardY = function(width) {
  	
  // }


//   var buySomeBread = function(eggs) {
//   return eggs ? 10 : 1;
// };

// console.log(buySomeBread(true));