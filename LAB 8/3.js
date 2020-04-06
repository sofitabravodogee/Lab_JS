document.title = "Масссивы в JavaScript";
let person = {
	firstName: "Jim",
	lastName: "Rainbow",
	age: 30,
	occupation: "Web Developer",
	skill: "JavaScript"
};
//обращаемся к свойствам обьекта
document.write("<p>" + person.firstName + " " + person.lastName);
document.write("<p>Язык: " + person.skill);
//изменение знач св-в обьекта
person.age = 25;
document.write("<p>Возраст: " + person.age + " лет.");
