'use strict';

window.renderStatistics = function(ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; // black;
  ctx.strokeRect(110, 20, 520, 280);
  ctx.fillRect(110, 20, 520, 280);
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)'; // white;
  ctx.strokeRect(100, 10, 520, 280);
  ctx.fillRect(100, 10, 520, 280);
  ctx.fillStyle = '#000'; // black;
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов!', 120, 60);
  var max = -1;
  var maxIndex = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }
  // getMaxArrayElement = function(maxIndex) {
  // 	return names[maxIndex];
  //   console.log(getMaxArrayElement);
  // }
  // console.log(getMaxArrayElement()); 
  var histogramWidth = 40; // px;
  var histogramHeight = 140; // px;
  var step = histogramHeight / (max - 0); // px;
  // var playerHistogramColor = rgba(255, 0, 0, 1);
  // var arrayHistogramColor = rgba(0, 0, 255, Math.random());
  ctx.fillText('Худшее время: ' + max.toFixed(2) + 'мс у игрока ' + names[maxIndex], 120, 80);
  var barHeigth = 150; // px; 
  var indent = 80; // px; было 50;
  var initialX = 120; // px;
  var initialY = 250; // px;
  var randomColorSaturation = Math.random();
  // почему возвращает черный цвет??
  var getRandomBlueColor = function(randomColorSaturation) {
    return rgba(0, 0, 255, randomColorSaturation);
  };
  ctx.textBaseline = 'top'; // положение надписи от левого верхнего угла
  var getHistorgamAndName = function (initialX, initialY, histogramWidth, step, indent) {
    for (var i = 0; i < times.length; i++) {
      if (names[i] === 'Вы') {
        ctx.fillStyle = '#FF0000';
      } else {
        // ctx.fillStyle=histogramBlueColor();
        ctx.fillStyle = 'getRandomBlueColor()';
      }
      ctx.fillRect(initialX + indent * i, initialY, histogramWidth, times[i] * (-step));
      ctx.fillText(names[i], initialX + indent * i, initialY + 10);
    }
  };
  getHistorgamAndName(initialX, initialY, histogramWidth, step, indent);
};
