function tipCalculate(){
	var totalBill = document.getElementById('bill').value;

	var percBtns = document.getElementsByClassName('tip-btn');

	for(var i = 0 ; i<percBtns.length; i++){
		if(percBtns[i].checked){
			var tipPerc = percBtns[i].value;
		}
	}

	var tipTotal = totalBill * tipPerc;

	var tipBox = document.getElementById('tipamount');
	tipBox.innerHTML = '$' + tipTotal;
}
function resetCalculator(){
	var totalBill = document.getElementById('bill').value;

	var percBtns = document.getElementsByClassName('tip-btn');

	for (var i = 0 ; i<percBtns.length; i++){
		if(percBtns[i].checked){
			percBtns[i].checked = false;
		}
	}

	var tipBox = document.getElementById('tipamount');
	tipBox.innerHTML = '$0.00';

	var totalBill = document.getElementById('bill').value = 0;


}