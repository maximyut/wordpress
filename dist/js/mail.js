// Shpagin Kirill 

// Объявления
var msg = document.querySelector(".msg");
var arrInput = document.querySelectorAll('.aInput');

// Функция отправки сообщения
function send(event, php) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    for (var i = 0, count = arrInput.length; i < count; i++) {
        arrInput[i].classList.remove("errorInput");
    }
    event.target.querySelector("button").disabled = true;
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function () {
        event.target.querySelector("button").disabled = false;
        if (req.status >= 200 && req.status < 400) {
            json = JSON.parse(this.response); // Ебанный internet explorer 11
            console.log(json);

            // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
            if (json.result == "success") {
                // если сообщение отправлено
                console.log("Сообщение отправлено");
                event.target.reset();
                // modal.classList.remove('visible');
            } else if (json.result == "email") {
                // Если указан неверный email
                console.log("Ошибка. Неверно указан Email");
                document.querySelector("#email").classList.add("inputerror");
            } else {
                // Если произошла ошибка
                console.log("Ошибка. Сообщение не отправлено");
            }

            // Если не удалось связаться с php файлом
        } else {
        }
    };

    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function () {
    };
    req.send(new FormData(event.target));
}
