function f(x, y, z) 
{
	//проверка ,правильное ли количство аргументов передано
	if (arguments.length != 3)
	{
		document.write("<p><b style='color:red;'>ERROR:</b> <em>Требуется три аргумента при вызове функции. Функция вызвана с " + arguments.length + " параметрами!</em>");
	} else {
		document.write("<p><b style='color:green;'>Правильный вызов функции.</b> Аргументы: ");
		for (let i = 0; i < arguments.length; i++)
			document.write(arguments[i] + ", ");
	}
}
f(1, 2, 3, 4); //больше 3-ошибка
f(1, 2, 3);
f(1, 2); //меньше 3 -ошибка