

 // שמתי += כדי שהמחשבון יקלוט כמה מספרים ולא רק מספר אחד  

  function click1(clc1) {
    document.getElementById('input').value += clc1;
}
// הפונקציה הזאת שכאשר ילחץ C
// המחשבון יתאפס

function click2(clc2) {
    document.getElementById('input').value = clc2; 
}
// פה השתמשתי ב eval כדי שיחשב את התשובה

function click3() {
    let result = eval(document.getElementById('input').value);
	document.getElementById('input').value = result;
}







