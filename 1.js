// сокращение для document.getElementById
var $ = function(id) {return document.getElementById(id);};

// function contentLight(id) {
// var parent = document.body.children[4];
// alert(parent);
// $(id).style.backgroundColor="#000099";
// }

function openSpoiler1(id) {$(id).children[2].style.display = "block";
$(id).children[1].innerText = " . . . скрыть";}

function show_txt(obj) {
var x = obj.parentNode.getElementsByTagName("div")[0];
if(x.style.display == "none") {x.style.display = "block";}
else {x.style.display = "none"; obj.parentNode.scrollIntoView();
// код ниже для совместимости с IE 7
var scrollTop = document.documentElement.scrollTop || document.body && document.body.scrollTop || 0;
scrollTop -= document.documentElement.clientTop;
window.scrollTo(0, scrollTop);}}

function no_js(event) {
var event = event || window.event;
if (event.stopPropagation) {event.stopPropagation()}
  else event.cancelBubble = true;}

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
    if (a.parentNode.getElementsByTagName("div")[0].style.display == "none") {
    a.parentNode.getElementsByTagName("div")[0].style.display = "block";
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

// переменные с описанием типа аргументов
var type_void = "тип значения <tt>void</tt>, т.е. у функции нет возвращаемого значения<br>или возвращается пустой список параметров (void - пустой)"
var type_string = "тип значения <tt>string</tt> - строка"
var type_this = "значением должен быть вызывающий объект"
var type_float = "тип значения <tt>float</tt> - число<br>с плавающей запятой"
var type_int = "тип значения <tt>integer</tt> - целое число"
var type_number = "тип значения <tt>number</tt> - число"
var type_array = "тип значения <tt>array</tt> - массив"
var type_typearray = "тип значения <tt>TypedArray</tt><br>(типизированный массив)"
var type_bool = "тип значения <tt>boolean</tt> - логический тип<br>(либо <tt>true</tt>, либо <tt>false</tt>)"
var type_func = "тип значения <tt>function</tt> - т.е. значением<br>аргумента должна быть функция"
var type_null = "тип значения <tt>null</tt> - т.е.<br>значение неизвестно"
var type_obj = "тип значения <tt>object</tt> - т.е.<br>аргумент является объектом"
var type_const = "это константа - т.е.<br>значение не изменяется"
var type_vector3 = "значение должно быть<br>трехмерным вектором"
var type_vector2 = "значение должно быть<br>двухмерным вектором"
var type_hashmap = "значение должно быть<br>хеш-картой (хеш-таблицей)"
var type_color = "значение может быть шестнадцатиричным<br>значением цвета или названием цвета<br>согласно CSS"
var type_hex = "значение должно быть шестнадцатиричным<br>значением цвета"
var type_float32array = "тип значения Float32Array - типизированый<br>массив 32-разрядных чисел с плавающей запятой"
var type_rad = "значение угла в радианах"
var type_uint8array = "тип значения Uint8Array - типизированный массив<br>беззнаковых восьмиразрядных целых чисел"
var type_uint16array = "тип значения Uint16Array - типизированный массив<br>беззнаковых шестнадцатиразрядных целых чисел"

// переменные часто встречающегося текста
var prop_1 = "<h4>Свойства</h4><br>Любой из параметров конструктора доступен в качестве свойства с тем же самым именем. После создания экземпляра, любые изменения этих свойств не изменяют геометрии.<br><br>"

var note_0 = '<div class=list><tt>parameters</tt> - объект с одним или несколькими свойствами, определяющими внешний вид материала (дополнительный, необязательный параметр). Здесь можно передать любое свойство материала (включая любое свойство унаследованное от <a href="#3" onmouseover="show(\'Material\')" onmouseout="hide()">Material</a>).</div>'
var note_01 = 'Исключением является свойство <tt><span onclick="showClick(type_hex)"><a href="#" onclick="return false" onblur="hideClick()" onmouseover="show(\'Color.<br>color - цвет\')" onmouseout="hide()">color</a></span></tt>, значение которого можно передать как шестнадцатиричную строку и по умолчанию равно <tt>0xffffff</tt> (белый цвет). Метод <tt><a href="math.htm#3set" onmouseover="show(\'Color.set\')" onmouseout="hide()">Color.set( color )</a></tt> вызывается внутренне.'
var note_1 = 'Данное свойство соответствует свойству <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin" target="_blank"><tt>lineJoin</tt> в 2D Canvas</a> и игнорируется <a href="renderers.htm#1.1" onmouseover="show(\'WebGLRenderer\')" onmouseout="hide()">WebGL</a> визуализатором (рендерером). Вот эта <a href="https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/lineJoin" target="_blank">статья о <tt>lineJoin</tt></a> на русском языке.'
// var note_2 = '<br>При работе с некоторыми визуализаторами, данная настройка может не иметь никакого влияния. Например, она игнорируется рендерером <a href="renderers.htm#1.1" onmouseover="show(\'CanvasRenderer\')" onmouseout="hide()">Canvas</a>, но работает с рендерером <a href="renderers.htm#1.2" onmouseover="show(\'WebGLRenderer\')" onmouseout="hide()">WebGL</a>.<br>'
var note_3 = '<br>Из-за ограничений в <a href="https://code.google.com/p/angleproject" target="_blank">слое ANGLE</a> с визуализатором (рендерером) <a href="renderers.htm#1.1" onmouseover="show(\'WebGLRenderer\')" onmouseout="hide()">WebGL</a> в операционных системах на основе Windows толщина линии (т.е. значение параметра <tt>linewidth</tt>) всегда будет равна <tt>1</tt>, независимо от установленного значения.'
+'<div class=note_trans><b>Примечание переводчика:</b> ANGLE (Almost Native Graphics Layer Engine - практически встроенный движок графического слоя, а перевод самой аббревиатуры ANGLE - угол) это графический движок слоя абстракций, разработанный компанией Google, с открытым исходным кодом под лицензией BSD.'
+'Этот API в основном предназначен для обеспечения высокопроизводительной совместимости OpenGL с компьютерами Windows и веб-браузерами вроде Chromium, путем перевода вызовов OpenGL в Direct3D, который гораздо лучше поддерживается драйверами. Для ANGLE существует два внутренних визуализатора: самый старый использует Direct3D 9.0c, в то время как новый использует Direct3D 11.<br><br>'
+'<span style="float:right; margin-top:-16px; background-color:#ffffe8;"><i>из статьи англ. Википедии о <a href="https://en.wikipedia.org/wiki/ANGLE_(software)" target="_blank">ANGLE</a>, перевод мой.</i></span></div>'
var note_4 = '<div class=note_trans><b>Примечание переводчика:</b> вот немножко подробнее о "запекании" освещения. <a class="link" onclick="javascript:spoiler(this)">... читать далее</a>'
+'<div style="display:none;">При "запекании" карты освещения (lightmap), вычисляются эффекты освещения статических объектов на сцене и результаты этих расчетов записываются в текстуры, которые накладываются поверх геометрических элементов сцены для воссоздания эффектов освещения.<br>'
+'Эти карты освещения могут включать как прямое освещение, которое падает на поверхности объектов, так и рассеянное освещение, получающееся при отражении света от других объектов или поверхностей внутри сцены. Данная текстура освещения может использоваться вместе со сведениями о поверхности, такими как цвет (альбедо) и рельеф (нормали), шейдером, связанным с материалом объекта.<br>'
+'С "запеченным" освещением, эти текстуры освещения (lightmaps - карты освещения) не могут изменяться во время процесса компьютерной игры и поэтому называются статическими (static). В реальном времени освещение может дополнительно накладываться и использоваться поверх карты освещения сцены, но собственно сами карты освещения интерактивно изменяться не могут.<br>'
+'При таком подходе появляется возможность привносить освещение в процесс игр для потенциального повышения производительности, подходящий к менее мощному оборудованию, такому как платформы мобильных устройств.<br><br>'
+'"Запеченное" освещение нагружает оперативную память и жесткий диск, а освещение реального времени, особенно общее (глобальное) освещение, нагружает процессор видеокарты и, иногда, центральный процессор.<br><br>'
+'"Запеченный" свет, позволяющий упаковывать освещение объектов в специальные текстуры - карты освещения (lightmap), неплохо смотрится до тех пор, пока мы не решим переместить один из таких игровых объектов. Поскольку карты освещения - всего лишь текстуры, то сразу все становится неправильным.<br>'
+'И весь процесс «запекания освещения» требуется снова запустить, чтобы устранить этот неправильный внешний вид, и возникает вопрос, почему бы для верности не сбрасывать эти карты освещения и использовать глобальное освещение в реальном времени?<br>'
+'А вот это может быть очень затратно, и игроку понадобится мощная видеокарта для правильного отображения красивого освещения в реальном времени.<br>'
+'Карты освещения, с другой стороны, просто требуют от разработчиков вычислить все освещение заранее, сохраняя его в текстурах карты освещения (lightmap). Затем, во время игры, компьютер игрока должен будет рисовать только несколько дополнительных текстур (что намного быстрее, чем вычисление глобального освещения в реальном времени).<br><br>'
+'"Запеченное" освещение рассчитывается предварительно и экономит производительность компьютера при работе с тенями на сцене. Поэтому, если имеется статический источник света и статические объекты (т.е. они не перемещаются), тогда используйте "запекание".<br>'
+'Освещение в реальном времени это именно то, что написано,- освещение, рассчитанное в реальном времени. Это довольно затратно по производительности и если в игре не все объекты движущиеся, следует научиться "запекать" освещение и использовать зонды освещения и отражения.</div></div><br>'
