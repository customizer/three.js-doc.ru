function hide_content() {
var hide = document.getElementById("hide");
var hide1 = document.getElementById("hide1");
var content = document.getElementById('content');
var tabButton = document.getElementById("tabButton");
var tabButton1 = document.getElementById("tabButton1");
var main = document.getElementById("main");
 if(hide.innerHTML=="&nbsp;&nbsp;Скрыть&nbsp;") {content.style.width="0%"; main.style.width="100%"; hide1.style.display="block"; hide.style.display="none"; tabButton1.style.display="none"; tabButton.style.display="none";}}

function hide_content1() {
var hide = document.getElementById("hide");
var hide1 = document.getElementById("hide1");
var content = document.getElementById('content');
var tabButton = document.getElementById("tabButton");
var tabButton1 = document.getElementById("tabButton1");
var main = document.getElementById("main");
 if(hide1.innerHTML=="Показать") {content.style.width="15%"; main.style.width="85%"; hide.style.display="block"; hide1.style.display="none"; tabButton.style.display="block";}}

function tab_search() {
var hide = document.getElementById("hide");
var hide1 = document.getElementById("hide1");
var tabButton = document.getElementById("tabButton");
var tabButton1 = document.getElementById("tabButton1");
var content = document.getElementById('content');
var search = document.getElementById("search");
 if(tabButton.innerHTML=="Поиск&nbsp;&nbsp;&nbsp;") {content.style.display="none"; search.style.display="block"; tabButton1.style.display="block"; tabButton.style.display="none"; hide.style.display="none"; hide1.style.display="none";}}
function tab_search1() {
var hide = document.getElementById("hide");
var hide1 = document.getElementById("hide1");
var tabButton = document.getElementById("tabButton");
var tabButton1 = document.getElementById("tabButton1");
var content = document.getElementById('content');
var search = document.getElementById("search");
 if(tabButton1.innerHTML=="Справка&nbsp;") {content.style.display="block"; search.style.display="none"; tabButton.style.display="block"; tabButton1.style.display="none"; hide.style.display="block";}}





function fontPlus() {
var body = document.getElementsByTagName("body")[0];
var style = window.getComputedStyle(body, null).getPropertyValue('font-size');
var fontSize = parseFloat(style);
// теперь есть размер шрифта в виде числа с плавающей запятой (это может быть число с плавающей запятой, а не просто целое число)
body.style.fontSize = (fontSize+1)+'px';}

function fontMinus() {
var body = document.getElementsByTagName("body")[0];
var style = window.getComputedStyle(body, null).getPropertyValue('font-size');
var fontSize = parseFloat(style);
// теперь есть размер шрифта в виде числа с плавающей запятой (это может быть число с плавающей запятой, а не просто целое число)
body.style.fontSize = (fontSize-1)+'px';}



