'use strict';

onRenderGallery();

function onTxtChange() {
    var changedTxt = document.querySelector('#add-txt').value;
    gMeme.lines[0].txt = changedTxt.toUpperCase();
    changedTxt = '';
    drawImg(gCurrImgId);
}

function onChangeImg(imgId) {
    drawImg(imgId);
    changeCurrImg(imgId);
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

