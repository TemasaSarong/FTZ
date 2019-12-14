// JavaScript Document
function addcars(){
			var data = ["Volkswagen Golf VI","1,4 TSI 122 Highline Variant DSG 5d", "Modelår: 2012", "166.551 km, 122 hk / 200 Nm"];
			if (document.getElementById("test").innerHTML != null) {
					document.getElementById("info").innerHTML = data;
					}
					else {
					alert ("That doesn't seem right");
					}
					}