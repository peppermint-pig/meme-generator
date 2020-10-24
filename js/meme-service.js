'use strict';

var gCanvas;
var gCtx;
var gImgs = [];
var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [{
        txt: 'FIRST LINE\'S FIRST',
        font: 'Impact',
        size: 48,
        align: 'center',
        fillColor: 'white',
        strokeColor: 'black',
        lineWidth: '2',
        x: 250,
        y: 50
    },
{
    txt: 'A GREAT PUNCHLINE',
    font: 'Impact',
    size: 48,
    align: 'center',
    fillColor: 'white',
    strokeColor: 'black',
    lineWidth: '2',
    x: 250,
    y: 450
}]
};


init(gMeme.selectedImgId);

function init() {
    createImg()
    gCanvas = document.querySelector('#meme-canvas');
    gCtx = gCanvas.getContext('2d');
    drawImg();
} 

function drawImg() {
    var img = new Image();
    img.src = `img/meme-imgs (square)/${gMeme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        drawTxt();
        markFocusedLine();
    };
}

function changeCurrImg(imgId) {
    gMeme.selectedImgId = imgId;
}

function drawTxt() {
    const lines = gMeme.lines;
    lines.forEach((line) => {
        gCtx.strokeStyle = line.strokeColor;
        gCtx.fillStyle = line.fillColor;
        gCtx.lineWidth = line.lineWidth;
        gCtx.font = `${line.size}px ${line.font}`;
        gCtx.textAlign = line.align;
        gCtx.fillText(line.txt, line.x, line.y);
        gCtx.strokeText(line.txt, line.x, line.y);
    });
    
}

function createNewLine() {
    gMeme.lines.push({
    txt: 'YOUR TEXT GOES HERE',
    font: 'Impact',
    size: 48,
    align: 'center',
    fillColor: 'white',
    strokeColor: 'black',
    lineWidth: '2',
    x: 250,
    y: 250
    });
    gMeme.selectedLineIdx = (gMeme.lines.length - 1);
}

function deleteLine() {
    const lineIdx = getCurrLineIdx();
    gMeme.lines.splice(lineIdx, 1);
    gMeme.selectedLineIdx = 0;
}

function changeTxtSize(val) {
    const idx = getCurrLineIdx();
    if (val === 'plus') gMeme.lines[idx].size += 2;
    if (val === 'minus') gMeme.lines[idx].size -= 2;
}

function  moveTxt(val) {
    const idx = getCurrLineIdx();
    if (val === 'up') gMeme.lines[idx].y -= 2;
    if (val === 'down') gMeme.lines[idx].y += 2;
    if (val === 'left') gMeme.lines[idx].x -= 2;
    if (val === 'right') gMeme.lines[idx].x += 2;
}

function txtChange(id, val) {
    const idx = getCurrLineIdx();
    let currLine = gMeme.lines[idx];
    switch (id) {
        case 'fill-color':
           currLine.fillColor = val 
           break;
        case 'stroke-color':
            currLine.strokeColor = val
            break;
        case 'txt-font':
            currLine.font = val;
            break;
        case 'align-left':
        case 'align-center':
        case 'align-right':
            currLine.align = val;
            break;
        case 'add-txt':
            currLine.txt = val;
    }
}

function changeFocus(val) {
    const lineIdx = getCurrLineIdx();
    if (val === 'older') {
        if (lineIdx === 0) gMeme.selectedLineIdx = (gMeme.lines.length - 1);
        else (gMeme.selectedLineIdx--);
    } 
    if (val === 'newer') {
        if (lineIdx === (gMeme.lines.length - 1)) gMeme.selectedLineIdx = 0;
        else (gMeme.selectedLineIdx++);
    }

    if (val === 'none') gMeme.selectedLineIdx = -1;
}

function markFocusedLine() {
    const lineIdx = getCurrLineIdx();
    const txt = gMeme.lines[lineIdx].txt;
    const txtWidth = gCtx.measureText(txt).width + 40;
    const txtHeight = gMeme.lines[lineIdx].size +40;
    const txtX = gMeme.lines[lineIdx].x;
    const txtY = gMeme.lines[lineIdx].y
    drawRect((txtX - (txtWidth / 2)), (txtY - (txtHeight / 1.5)), txtWidth, txtHeight);

}

function drawRect(x, y, width, height) {
    gCtx.beginPath();
    gCtx.rect(x, y, width, height); 
    gCtx.fillStyle = 'rgba(255,255,255,.4)';
    gCtx.fillRect(x, y, width, height);
}

function getImgs() {
    return gImgs;
}

function getCurrLineIdx() {
    return gMeme.selectedLineIdx;
}

function createImg() {
    for (let i = 1; i <= 18; i++) {
       gImgs.push({id: i,
        url: `img/meme-imgs (square)/${i}.jpg`});
    }
}