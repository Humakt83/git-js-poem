var poemArray = [
    { poem: 'A vast ocean of darkness', transition: function() {} },
    { poem: 'A shining ligth', transition: shiningLight },
    { poem: 'Illuminates the ocean below', transition: illuminateOcean}
];

initialize();

function initialize() {
    nextPoem(0);
}

function nextPoem(poemId) {
    changePoem(poemArray[poemId].poem);
    poemArray[poemId].transition();
    setTimeout(function() {
        if (poemArray.length > poemId + 1) nextPoem(++poemId);   
    }, 3000);
}

function changePoem(poem) {
    d3.select('#poem').html(poem);
}

function shiningLight() {
    d3.select('#background').attr('class', 'shiningLight');    
}

function illuminateOcean() {
    var waves = d3.select('#background')
    .append('div')
    .attr('class', 'illuminateOcean')
    .append('div')
    .attr('class', 'waves');
    for (var i = 0; i < 20; i++) {
        var positionLeft = i === 0 ? '0%': ((i / 20) * 100) + '%';
        waves.append('div')
        .attr('class', 'waveElement')
        .style('left', positionLeft);
        if (i > 0) {
            var positionLeftNegative = ((i / 20) * -100) + '%';
            waves.append('div')
            .attr('class', 'waveElement')
            .style('left', positionLeftNegative);
        }
    }
}
