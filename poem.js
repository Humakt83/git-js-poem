var poemArray = [
    { poem: 'A vast ocean of darkness', transition: function() {} },
    { poem: 'A shining ligth', transition: shiningLight }
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