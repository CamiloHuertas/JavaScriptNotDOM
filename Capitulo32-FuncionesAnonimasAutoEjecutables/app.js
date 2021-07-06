//Funcion anonima autoejecutable

(function (){
  console.log('IIFE');
})
();


(function (d,w,c){
  console.log('Mi segunda IIFE');
  console.log(d);
  console.log(w);
  console.log(c);
})
(document, window, console);

//Formas de escribir funciones anonimas autoejecutables

(function(){
  console.log('Version Clasica');
})
();

//La crockford (JS the good parts)
(( function (){
  console.log('Version crockford');
})());

//Unaria
+function (){
  console.log('Version Unaria');
}();

//Facebook
!function (){
  console.log('Version Facebook');
}();
































