
	
		//функция проверки, является ли элемент простым числом
function isPrime (num){
	console.log("num " + num);
	if(num < 2) return false;
	for(var i = 2; i < num; i++){
		if(num % i == 0){
			console.log(false);
			return false;
		}
		console.log(true);
		return true;
	}	
};
	
function f(value){
	
	//код минимален, обработку неверно введенных значений, возможных ошибок и исключений я не реализовывала
	

	var d = value - 0;
	
	//очистить таблицу
	$('#tableID tr').remove();
	

	//вывод результата
	if(d > 1){
		for(var i=2; i<d+1;i++){		
			if(isPrime(i)){	
				
			//$("#tableID").append("<tr><td>"+j+"</td><td>"+i+"</td></tr>");
				//console.log(i);
				//console.log('here');
			}		
		}
	}
	else{
		var c = alert('Вы ввели некорректное число!');		
	}	
	$('#tableID').show();
}
