console.log(Date);
console.log(Date());

let fecha = new Date();
//Get date sirve para agarrar el dia del mes
console.log(fecha.getDate());
//Get day sirve para poner el dia de la semana en forma de arreglo
console.log(fecha.getDay());
//Get month obtiene el numero del mes en forma de arreglo
console.log(fecha.getMonth());
//Get fullYear obtiene el anio
console.log(fecha.getFullYear());
//Get hours obtiene las horas
console.log(fecha.getHours());
//Get minutes obtiene los minutos
console.log(fecha.getMinutes());
//get second obtiene los segundos
console.log(fecha.getSeconds());
//get milliseconds 
console.log(fecha.getMilliseconds());
//ToDateString solo obtiene la fecha
console.log(fecha.toDateString());
//ToLocalString nos da la hora y fecha local
console.log(fecha.toLocaleString());
//ToLocaleDateString nos da solo la fecha local, no la hora
console.log(fecha.toLocaleDateString());
//ToLocaleTimeString nos da solo la hora local, no la fecha
console.log(fecha.toLocaleTimeString());



