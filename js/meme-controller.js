'use strict';

onRenderGallery();

function onTxtChange() {
    const idx = getCurrLineIdx()
    var changedTxt = document.querySelector('#add-txt').value;
    gMeme.lines[idx].txt = changedTxt.toUpperCase();
    drawMeme();
}

function onCreateNewLine() {
    createNewLine();
    drawMeme();
}

function onDeleteLine() {
    deleteLine();
    drawMeme();
}

function onChangeTxtSize(val) {
    changeTxtSize(val);
    drawMeme();
}

function onMoveTxt(val) {
    moveTxt(val);
    drawMeme();
}

function onTxtChange(id, val) {
    txtChange(id, val);
    drawMeme();
}

function onChangeImg(imgId) {
    changeCurrImg(imgId);
    drawMeme();
    document.querySelector('.editor-modal').classList.toggle('modal-open');
    document.querySelector('#gallery-section').classList.toggle('modal-open');
}

function onChangeFocus(val) {
    changeFocus(val);
    document.querySelector('#add-txt').value = '';
    drawMeme();
}

function onToggleMenu() {
    document.querySelector('.nav').classList.toggle('menu-open');
    document.querySelector('.menu-icon').classList.toggle('menu-open');
}

function onRenderGallery() {
    var imgs = getImgs();
    var strHtmls = imgs.map((img) => {
        return `
        <img src="${img.url}" class="gallery-img" id="${img.id}" onclick="onChangeImg('${img.id}')">
        `;
    });
    document.querySelector('.gallery').innerHTML = strHtmls.join('');
}

