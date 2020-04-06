function max(a, b, c) //вызывает макс значение аргумента который передан при вызове
{
	console.log(arguments);
	let maxValue = Number.NEGATIVE_INFINITY;//Возвращает значение, которое меньше любого отрицательного числа,
	document.write("<p>Number.NEGATIVE_INFINITY = " + maxValue + "<hr/>");
	for (let i = 0; i < arguments.length; i++)  //перебираем циклом аргументы
	
		if (arguments[i] > maxValue) maxValue = arguments[i];
	
	return maxValue;
}
let res = max(-33, 33, 777, -666, -22, 888);
document.write("<p>Максимальное значение одного из аргументов функции = " + res);
