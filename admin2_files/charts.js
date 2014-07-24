/*Sparklines */

/* Sparkline plugin Section starts */

$("#status1").sparkline([5,6,7,9,9,5,9,6,5,6,6,7,7,6,7,8,9,5 ], {
    type: 'line',
    width: '80',
    height: '20',
    lineColor: '#0ca5e7',
    fillColor: '#e5f3f9'});

$("#status2").sparkline([5,6,7,4,9,5,9,6,4,6,6,7,8,6,7,4,9,5 ], {
    type: 'line',
    width: '80',
    height: '20',
    lineColor: '#0ca5e7',
    fillColor: '#e5f3f9'});

$("#status3").sparkline([9,6,7,5,9,5,9,7,5,6,3,7,7,6,7,8,8,5 ], {
    type: 'line',
    width: '80',
    height: '20',
    lineColor: '#0ca5e7',
    fillColor: '#e5f3f9'});

$("#status4").sparkline([5,2,7,9,9,4,9,6,5,9,6,7,5,6,7,8,4,5 ], {
    type: 'line',
    width: '80',
    height: '20',
    lineColor: '#0ca5e7',
    fillColor: '#e5f3f9'});

$("#status5").sparkline([7,6,3,9,9,5,4,6,6,9,6,7,7,6,4,8,9,5 ], {
    type: 'line',
    width: '80',
    height: '20',
    lineColor: '#0ca5e7',
    fillColor: '#e5f3f9'});

$("#status6").sparkline([4,6,7,8,9,5,3,6,5,6,7,5,7,2,7,8,7,5 ], {
    type: 'line',
    width: '80',
    height: '20',
    lineColor: '#0ca5e7',
    fillColor: '#e5f3f9'});

$("#status7").sparkline([3,6,3,9,9,5,4,6,5,6,4,9,7,6,7,8,8,5 ], {
    type: 'line',
    width: '80',
    height: '20',
    lineColor: '#0ca5e7',
    fillColor: '#e5f3f9'});

$("#todayspark1").sparkline([8,11,9,12,10,9,13,11,12,11,10], {
    type: 'bar',
    height: '20',
    barWidth: 4,
    barColor: '#fff'});

$("#todayspark2").sparkline([7,11,9,12,8,9,14,11,10,12,10], {
    type: 'bar',
    height: '20',
    barWidth: 4,
    barColor: '#fff'});

$("#todayspark3").sparkline([3,6,3,9,9,5,4,6,5,6,4,9,4,6,3,7,8,9,7,5,8,9,5,7,8,8,5 ], {
    type: 'line',
    width: '170',
    height: '50',
    lineColor: '#fff',
    fillColor: '#ddd'});

$("#todayspark4").sparkline([3,6,-3,9,5,-2,-6,5,-6,-2,-7,6,4,6,5,6,-4,9,4,-9,-6,6,5,-8,9,5,7,-9,4,8,-9,8,5 ], {
    type: 'bar',
    height: '60',
    barWidth: 6,
    barColor: '#67b1d3',
    negBarColor: '#ed5f60'});

$("#todayspark5").sparkline([6,4,-2,5,7,6,-5,3,-8,2,-3,6,9,-6,5,6,-4,9,4,-6,-6,6,5,-3,9,5,5,5,4,-5,-9,4,6 ], {
    type: 'bar',
    height: '60',
    barWidth: 6,
    barColor: '#55aa51',
    negBarColor: '#9647b0'});

$("#sparklines1").sparkline([16,12,13,4,13,12,1,15,7,9,15,6 ], {
    type: 'bar',
    height: '38',
    barWidth: 5,
    barColor: '#E25856'});

$("#sparklines2").sparkline([12,13,12,1,15,7,9,15,6,13,14,13,2,9 ], {
    type: 'bar',
    height: '38',
    barWidth: 5,
    barColor: '#94B86E'});

$('.sparklines').sparkline('html', {
    enableTagOptions: true,
    height: '35px',
    barWidth: '5px',
    barSpacing: '2px'
});
$("#sparkline-user").sparkline([0,500,600,700,900,1300,580,903,1002,1200,1400,600], {
    type: 'line',
    width: '200',
    height: '200',
    lineColor: '#54728c',
    fillColor: '#cfd7df',
    lineWidth: 3,
    chartRangeMin: 0,
    chartRangeMax: 2000,
    chartRangeMinX: 0,
    chartRangeMaxX: 12,
    normalRangeMin: NaN,
    normalRangeMax: NaN,
    drawNormalOnTop: false});
/* Sparkline plugin section ends */




