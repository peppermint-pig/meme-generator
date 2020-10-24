'use strict';

onRenderGallery();

function onTxtChange() {
    const idx = getCurrLineIdx()
    var changedTxt = document.querySelector('#add-txt').value;
    gMeme.lines[idx].txt = changedTxt.toUpperCase();
    drawImg();
}

function onCreateNewLine() {
    createNewLine();
    drawImg();
}

function onDeleteLine() {
    deleteLine();
    drawImg();
}

function onChangeTxtSize(val) {
    changeTxtSize(val);
    drawImg();
}

function onMoveTxt(val) {
    moveTxt(val);
    drawImg();
}

function onTxtChange(id, val) {
    txtChange(id, val);
    drawImg();
}

function onChangeImg(imgId) {
    document.querySelector('.editor-modal').classList.toggle('modal-open');
    document.querySelector('#gallery-section').classList.toggle('modal-open');
    document.querySelector('.main footer').classList.toggle('modal-open');
    changeCurrImg(imgId);
    drawImg();
}

function onChangeFocus(val) {
    changeFocus(val);
    document.querySelector('#add-txt').value = '';
    drawImg();
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

