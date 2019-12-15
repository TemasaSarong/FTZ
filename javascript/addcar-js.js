// JavaScript Document
function addcars(){
			var data = ["Volkswagen Golf VI","1,4 TSI 122 Highline Variant DSG 5d", "Modelår: 2012", "166.551 km, 122 hk / 200 Nm"];
			var string_value = document.getElementById('test').value;
			if (string_value.length <= 4) {
					document.getElementById("error").innerHTML = "Prøv at tilføje flere cifre";
					document.getElementById("info").innerHTML = "";
					}
					else {
					document.getElementById("info").innerHTML = data;
					document.getElementById("error").innerHTML = "";
					}
					}