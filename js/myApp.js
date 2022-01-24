
var questions = [

    'Hallo aku Joko, nama kamu siapa?',

    'Tinggal dimana?',
         
    'Kalau umur?',

    

     
    'Okeh, sampai jumpa :)'

];

var number=0
var output = document.querySelector('#result');
output.innerHTML = questions[0]
var inputBox=document.querySelector('#ans');
var chatBox = document.querySelector('#chatbox');

function showResponse(){
	var input = inputBox.value;
	if(inputBox.value===""){
		alert("Ketik sesuatu")
	}else{
		if(number===0){
			output.innerHTML=`<p>Wuih ${input}  kamu keren juga.</p>`
			inputBox.value=""
			inputBox.setAttribute("placeholder", "Joko ngetik..");
			number++
			setTimeout(changeQuestion, 4000)
		}else if(number===1){
			output.innerHTML=`<p>${input} Adalah tempat yang GG geming</p>`
			inputBox.value=""
			inputBox.setAttribute("placeholder", "Joko ngetik...");
			++number
			setTimeout(changeQuestion, 4000)

		}else if(number===2){
			output.innerHTML=`<p>Berarti kamu lahir tahun ${2020-input}</p>`
			inputBox.value=""
			inputBox.setAttribute("placeholder", "Joko ngetik...");
			++number
			setTimeout(changeQuestion, 4000)

		}
	}
}
function changeQuestion(){
	inputBox.setAttribute("placeholder", "Ketik untuk merespon");
	output.innerHTML=questions[number];
	if(number===3){
		output.innerHTML=`Oke, sekarang kamu saya culig 😈`;
		inputBox.value="";
		document.querySelector(".input").style.display="none"
	}
}
 function submitMessage(){
 	showResponse();
 }
 