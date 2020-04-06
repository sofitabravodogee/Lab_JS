function plus()
{
	let num1, num2, result;
	num1 = document.getElementById("n1").value;
	num1 = parseInt(num1);
	
	num2 = document.getElementById("n2").value;
	num2 = parseInt(num2);

	result = num1 + num2;
	document.getElementById("out").innerHTML = "Результат: " + result;
}

function minus()
{
	let num1, num2, result;
	num1 = document.getElementById("n1").value;
	num1 = parseInt(num1);
	
	num2 = document.getElementById("n2").value;
	num2 = parseInt(num2);

	result = num1 - num2;
	document.getElementById("out").innerHTML = "Результат: " + result;
}
/*getElementById-Если у элемента есть атрибут id, то мы можем получить его вызовом document.getElementById(id), где бы он ни находился.
parseInt-принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления.
innerHTML-устанавливает или получает HTML или XML разметку дочерних элементов.
*/
