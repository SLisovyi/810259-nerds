var link = document.querySelector(".button-write-us"); // в переменную link вписали ксс класс .button-write-us

var popup = document.querySelector(".modal-contact");
var close = document.querySelector(".modal-close");

var login = popup.querySelector("[name=login]");


link.addEventListener("click", function (evt) {   // добавили link действие нажатия мыши
	evt.preventDefault();						// отменили действие по умолчанию
	console.log("Click on write us buton");
	popup.classList.remove("visually-hidden"); 			// добавили класс
	login.focus(); 								// ставим курсор в поле ввода после открытия попапа
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("visually-hidden");
});


function validateForm() {
    var x = document.forms["contact-form"]["name"].value;
    if (x == "") {
		document.forms["contact-form"]["name"].classList.add("error");
        return false;
    }
} 
