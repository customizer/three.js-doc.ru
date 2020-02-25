var input,search,pr,result,result_arr, locale_HTML, result_store;

function func() {
 	locale_HTML = document.body.innerHTML;   // сохраняем в переменную весь body (Первоначальный)
}
setTimeout(func, 1000);  //ждем подгрузки Json'a и выполняем

function findOnPage(name, status) {

	input = document.getElementById(name).value; //получаем значение из поля в html

	if(input.length<3&&status==true)
	{
		alert('Для поиска вы должны ввести три или более символов');
		function findOnPageBack() { document.body.innerHTML = locale_HTML; }
	}

	if(input.length>=3)
	{
		function findOnPageGo() {

			search = '/'+input+'/g';  //делаем из строки регулярное выражение
			pr = document.body.innerHTML;   // сохраняем в переменную весь body
			result = pr.match(/>(.*?)</g);  //отсекаем все теги и получаем только текст
			result_arr = [];   //в этом массиве будем хранить результат работы (подсветку)

			var warning = true;
			for(var i=0;i<result.length;i++) {
				if(result[i].match(eval(search))!=null) {
					warning = false;
				}
			}
			if(warning == true) {
				alert('Не найдено ни одного совпадения');
			}

			for(var i=0; i<result.length;i++) {
				result_arr[i] = result[i].replace(eval(search), '<span style="background-color:yellow;">'+input+'</span>'); //находим нужные элементы, задаем стиль и сохраняем в новый массив
			}
			for(var i=0; i<result.length;i++) {
				pr=pr.replace(result[i],result_arr[i])  //заменяем в переменной с html текст на новый из нового массива
			}
			document.body.innerHTML = pr;  //заменяем html код
		}
	}
	function findOnPageBack() { document.body.innerHTML = locale_HTML; }
	if(status) { findOnPageBack(); findOnPageGo(); } //чистим прошлое и Выделяем найденное
	if(!status) { findOnPageBack(); } //Снимаем выделение
}

function replaceBtn() {
    if (document.getElementById("start").style.display == "inline") {
    document.getElementById("start").style.display = "none";
    document.getElementById("note").style.display = "none";
    document.getElementById("cancel").style.display = "inline";
    }
else {
    document.getElementById("start").style.display = "inline";
    document.getElementById("note").style.display = "block";
    document.getElementById("cancel").style.display = "none";
    }
    }










