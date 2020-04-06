function Sum(a, b)
{
	return a + b;
}

function Step(a, b)
{
	return Math.pow(a, b); //stepen
}

let res = Sum(2, 3) + "," + Step(2, 4);

document.write(res);
