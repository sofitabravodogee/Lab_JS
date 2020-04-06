document.title = "Конструктор Object()";
let point = new Object();//создаем обьект point
//обращение к св-ву х обьекта поинт
//если св-во нет то оно создается автоматически и присваеват ему значение
point.x = 10;
//присваеваем к новому св-ву у
point.y = 15;
//добавляем к обьекту етод
point.f = function () {
	document.write("<p>x = " + point.x + "<p>y = " + point.y);
};
point.f();
