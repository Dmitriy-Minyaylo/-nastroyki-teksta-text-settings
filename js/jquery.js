$(document).ready(function () {
   // вытягиваем значение с localStorage и устанавливаем бегунки
   $(".setting-jquery-px").val(localStorage.getItem('jquery-size'));
   $(".setting-jquery-color").val(localStorage.getItem("jquery-color"));
   $(".setting-jquery-font-weight").val(localStorage.getItem('jquery-fontWeight'));
   $(".setting-jquery-font-type").val(localStorage.getItem('jquery-fontStyle'));
   $(".setting-jquery-letter-spacing").val(localStorage.getItem("jquery-letterSpace"));
   $(".setting-jquery-line-height").val(localStorage.getItem("jquery-lineHeight"));

   //задаем данные из localStorage
   $(".wrapper__text").css({
      'font-size': localStorage.getItem('jquery-size') + "px",
      "color": localStorage.getItem('jquery-color'),
      "font-weight": localStorage.getItem('jquery-fontWeight'),
      "font-style": localStorage.getItem("jquery-fontStyle"),
      "letter-spacing": localStorage.getItem("jquery-letter-spacing") + "px",
      "line-height": localStorage.getItem("jquery-lineHeight"),
   });

   // =============== изменяем регулятор значения стилей css ======================
   $(".setting-jquery-px").on('input', changeFontSize);
   function changeFontSize() {
      //передаем в localStorage значение полученное с input
      localStorage.setItem('jquery-size', $(".setting-jquery-px").val());
      //устанавливаем свойство css с Storage
      $(".wrapper__text").css('font-size', localStorage.getItem('jquery-size') + "px");
   }

   // =============== изменяем регулятор значения стилей css ======================
   $(".setting-jquery-color").on('input', changeColor);
   function changeColor() {
      //передаем в localStorage значение полученное с input
      localStorage.setItem('jquery-color', $(".setting-jquery-color").val());
      //устанавливаем свойство css с Storage
      $(".wrapper__text").css('color', localStorage.getItem('jquery-color'));
   }

   // =============== изменяем регулятор значения стилей css ======================
   $(".setting-jquery-font-weight").on('input', changeFontWeight);
   function changeFontWeight() {
      //передаем в localStorage значение полученное с input
      localStorage.setItem('jquery-fontWeight', $(".setting-jquery-font-weight").val());
      //устанавливаем свойство css с Storage
      $(".wrapper__text").css('font-weight', localStorage.getItem('jquery-fontWeight'));
   }

   // =============== изменяем регулятор значения стилей css ======================
   $(".setting-jquery-font-type").on('input', changeFontStyle);
   function changeFontStyle() {
      //передаем в localStorage значение полученное с input
      localStorage.setItem('jquery-fontStyle', $(".setting-jquery-font-type").val());
      //устанавливаем свойство css с Storage
      $(".wrapper__text").css('font-style', localStorage.getItem('jquery-fontStyle'));
   }

   // =============== изменяем регулятор значения стилей css ======================
   $(".setting-jquery-letter-spacing").on('input', changeLetterSpacing);
   function changeLetterSpacing() {
      //передаем в localStorage значение полученное с input
      localStorage.setItem('jquery-letter-spacing', $(".setting-jquery-letter-spacing").val());
      //устанавливаем свойство css с Storage
      $(".wrapper__text").css('letter-spacing', localStorage.getItem('jquery-letter-spacing') + 'px');
   }
   // =============== изменяем регулятор значения стилей css ======================
   $(".setting-jquery-line-height").on('input', changeLineHeight);
   function changeLineHeight() {
      //передаем в localStorage значение полученное с input
      localStorage.setItem('jquery-lineHeight', $(".setting-jquery-line-height").val());
      //устанавливаем свойство css с Storage
      $(".wrapper__text").css('line-height', localStorage.getItem('jquery-lineHeight'));
   }

   // сброс до исходного состояния  - RESET 
   $('.wrapper__setting-jquery-reset').click(function () {
      localStorage.clear();
      $('.wrapper__text').css('font-size', "")
      $('.wrapper__text').css('color', "")
      $('.wrapper__text').css('font-style', "")
      $('.wrapper__text').css('font-weight', "")
      $('.wrapper__text').css('letter-spacing', "")
      $('.wrapper__text').css('line-height', "")
   })
});
