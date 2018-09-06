function show(num) {
var txt = document.getElementById("txt"+num);
txt.style.display="block";
}
function remove(num) {
var txt = document.getElementById("txt"+num);
txt.style.display="none";
}

function spoiler(a) {
    if (a.parentNode.getElementsByTagName("div")[0].style.display != "") {
    a.parentNode.getElementsByTagName("div")[0].style.display = "";
    a.innerHTML = "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; скрыть";
    }
else {
    a.parentNode.getElementsByTagName("div")[0].style.display = "none";
    a.innerText = "... читать далее";
    }
    }

function spoiler1(a) {
    if (a.parentNode.getElementsByTagName("div")[0].style.display != "") {
    a.parentNode.getElementsByTagName("div")[0].style.display = "";
    a.innerText = " . . . скрыть";
    }
else {
    a.parentNode.getElementsByTagName("div")[0].style.display = "none";
    a.innerText = "... показать";
    }
    }

function onlyClick(num) {
   var ref = document.getElementById("link_"+num);
   ref.innerText = "    вернуться";
   ref.style.display = "block";
   ref.parentNode.getElementsByTagName("div")[0].style.display = "";
   ref.parentNode.getElementsByTagName("a")[0].style.display = "none";
   ref.href = "#closure0";
 }

function mouseout(a) {
// alert(a.innerHTML +'  '+ a.href);
    a.parentNode.getElementsByTagName("div")[0].style.display = "none"
    a.parentNode.getElementsByTagName("a")[0].style.display = "block"
    a.href = "#closure";
    a.style.display = "none";
        }

 // функция удаления всплывающей подсказки по наведению
function hide(){
if(!document.getElementById('floatTip'));
else document.body.removeChild(document.getElementById('floatTip'));}
 // функция удаления всплывающей подсказки по клику
function hideClick(){
if(!document.getElementById('floatTipClick'));
else document.body.removeChild(document.getElementById('floatTipClick'));}

 // функция показа всплывающей подсказки по наведению
function show(a) {
hideClick();
var d = document.createElement('div');
d.className='floatTip';
d.id='floatTip';
d.innerHTML = a;
document.body.appendChild(d);
var ww = d.getBoundingClientRect().right - d.getBoundingClientRect().left;
var hh = d.getBoundingClientRect().bottom - d.getBoundingClientRect().top;
document.onmouseover=mouseover;
function mouseover(event) {
event = event || window.event;
var x = 0;
var y = 0;
x = event.clientX;
y = event.clientY;
if (x <= document.body.scrollLeft + ww/2) {
 d.style.left = document.body.scrollLeft + 'px'; }
else if (x >= document.body.scrollLeft + document.body.clientWidth - ww) {
d.style.left = document.body.scrollLeft + document.body.clientWidth - ww + 'px';}
else {
    d.style.left = x + document.body.scrollLeft - ww/2 + 'px';
  }
if (y <= hh + 10) {
d.style.top = y + document.body.scrollTop + 10 + 'px';
} else {
d.style.top = y + document.body.scrollTop - hh - 10 + 'px';
}
}
d.style.opacity='0.9';
d.style.filter='alpha(opacity=90)';
}

 // функция показа всплывающей подсказки по клику
function showClick(a) {
hideClick();
hide();
var d = document.createElement('div');
d.className='floatTipClick';
d.id='floatTipClick';
d.innerHTML = a;
document.body.appendChild(d);
var ww = d.getBoundingClientRect().right - d.getBoundingClientRect().left;
var hh = d.getBoundingClientRect().bottom - d.getBoundingClientRect().top;
document.onclick=mouseclick;
function mouseclick(event) {
event = event || window.event;
var x = 0;
var y = 0;
x = event.clientX;
y = event.clientY;
if (x <= document.body.scrollLeft + ww/2) {
 d.style.left = document.body.scrollLeft + 'px'; }
else if (x >= document.body.scrollLeft + document.body.clientWidth - ww) {
d.style.left = document.body.scrollLeft + document.body.clientWidth - ww + 'px';}
else {
    d.style.left = x + document.body.scrollLeft - ww/2 + 'px';
  }
if (y <= hh + 10) {
d.style.top = y + document.body.scrollTop + 10 + 'px';
} else {
d.style.top = y + document.body.scrollTop - hh - 10 + 'px';
}
}
d.style.opacity='0.9';
d.style.filter='alpha(opacity=90)'; // для IE9-
}


