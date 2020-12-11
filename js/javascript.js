/*Переменные для изменения текста */

// наш изменяемый текст
let changeText = document.querySelector('.wrapper__text');
// input для изменения fontSize
let fontSize = document.querySelector('.setting-px');
// input для изменения color
let colorText = document.querySelector('.setting-color');
// input для изменения жирности
let fontWeightText = document.querySelector('.setting-font-weight');
// input для изменения начертания
let fontStyleText = document.querySelector('.setting-font-type');
// input для изменения межбуквенного
let letterSpacingText = document.querySelector('.setting-letter-spacing');
// input для изменения межстрочного
let lineHeightText = document.querySelector('.setting-line-height');
// =================================================== 

//при загрузке берем значение из localStorage 
changeText.style.fontSize = localStorage.getItem('size') + "px";

function changeFontSize() {
   let size = fontSize.value;
   // заносим введенные значения в хранилище
   localStorage.setItem('size', size);
   // присваиваем значение стилю 
   changeText.style.fontSize = localStorage.getItem('size') + "px";
}
//обработчик событий для постоянного изменения стилей текста
fontSize.addEventListener("input", changeFontSize);
// =====================================================

//при загрузке берем значение из localStorage 
changeText.style.color = localStorage.getItem('color');

function changeColor() {
   let color = colorText.value;
   // заносим введенные значения в хранилище
   localStorage.setItem('color', color);
   // присваиваем значение стилю в css
   changeText.style.color = localStorage.getItem('color');
}
//обработчик событий для постоянного изменения стилей текста
colorText.addEventListener("input", changeColor);
// =====================================================

//при загрузке берем значение из localStorage 
changeText.style.fontWeight = localStorage.getItem('fontWeight');

// изменение жирности
function changeFw() {
   let fontWeight = fontWeightText.value;
   // заносим введенные значения в хранилище
   localStorage.setItem('fontWeight', fontWeight);
   // присваиваем значение стилю в css
   changeText.style.fontWeight = localStorage.getItem('fontWeight');
}
//обработчик событий для постоянного изменения стилей текста
fontWeightText.addEventListener("input", changeFw);
// =====================================================
//при загрузке берем значение из localStorage 
changeText.style.fontStyle = localStorage.getItem('fontStyle');

// изменение Начертания
function changeFontStyle() {
   let fontStyle = fontStyleText.value;
   // заносим введенные значения в хранилище
   localStorage.setItem('fontStyle', fontStyle);
   // присваиваем значение стилю в css
   changeText.style.fontStyle = localStorage.getItem('fontStyle');
}
//обработчик событий для постоянного изменения стилей текста
fontStyleText.addEventListener("input", changeFontStyle);
// =====================================================
//при загрузке берем значение из localStorage 
changeText.style.letterSpacing = localStorage.getItem('letterSpace') + 'px';
// изменение Межбуквенного интервала

function changeLs() {
   let letterSpace = letterSpacingText.value;
   // заносим введенные значения в хранилище
   localStorage.setItem('letterSpace', letterSpace);
   // присваиваем значение стилю в css
   changeText.style.letterSpacing = localStorage.getItem('letterSpace') + 'px';
}
//обработчик событий для постоянного изменения стилей текста
letterSpacingText.addEventListener("input", changeLs);
// =====================================================

//при загрузке берем значение из localStorage 
changeText.style.lineHeight = localStorage.getItem('lineHeight');

// изменение Межстрочного интервала
function changeLh() {
   let lineHeight = lineHeightText.value;
   // заносим введенные значения в хранилище
   localStorage.setItem('lineHeight', lineHeight);
   // присваиваем значение стилю в css
   changeText.style.lineHeight = localStorage.getItem('lineHeight');
}
//обработчик событий для постоянного изменения стилей текста
lineHeightText.addEventListener("input", changeLh);
// =====================================================

// сброс до исходного состояния  - RESET 
document.querySelector('.wrapper__setting-reset').onclick = reset;

function reset() {
   localStorage.clear();
   changeText.style.fontSize = null;
   changeText.style.color = null;
   changeText.style.fontWeight = null;
   changeText.style.fontStyle = null;
   changeText.style.letterSpacing = null;
   changeText.style.lineHeight = null;
}

