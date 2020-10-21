'use strict';

var gImgs = [
    {id: 1,
    url: 'img/meme-imgs (square)/1.jpg'}, 
    {id: 2,
    url: 'img/meme-imgs (square)/1.jpg'}
];
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
        txt: 'First line first',
        size: 20,
        align: 'center',
        color: 'white'
    }]
};
var gCanvas;
var gCtx;

Init(2);

function Init(imgId) {
    gCanvas = document.querySelector('#meme-canvas');
    gCtx = gCanvas.getContext('2d');
    drawImg(imgId);
} 

function drawImg(imgId) {
    var img = new Image();
    img.src = '../img/meme-imgs (square)/'+imgId+'.jpg';
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        drawTxt(gMeme.lines[0].txt);
    };
}

function drawTxt(txt, x = 250, y = 50) {
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.lineWidth = '2';
    gCtx.font = '50px Impact';
    gCtx.textAlign = 'center';
    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)
}