document.title = "Обьекты";
//cоздаем обьектч через блок иниц
let instance = { propertyA: 222, propertyB: 444 };

//вывод знач свв
document.write("<p>instance.propertyA = " + instance.propertyA);
document.write("<p>instance.propertyB = " + instance.propertyB);
document.write("<hr/>");
//присваиваем
instance.propertyA = 333; 
instance["propertyB"] = 555;  
//вывод знач обьектов
document.write("<p>instance.propertyA = " + instance.propertyA);
document.write("<p>instance.propertyB = " + instance.propertyB);
document.write("<hr/>");
document.write("<p>instance = " + instance);
