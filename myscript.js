function validation(){
	var user = document.getElementById('user').value;
	var emails = document.getElementById('emails').value;
	var pass = document.getElementById('pass').value;
 	var conpass = document.getElementById('conpass').value;
	var mobileNumber = document.getElementById('mobileNumber').value;
	var datepicker = document.getElementById('datepicker').value;



	if(user == ""){
		document.getElementById('name').innerHTML = "** Please fill the name";
        return false;
	}
    if(user.match(/[A-Z]/))
    	true;
    else{
    	document.getElementById('name').innerHTML = '** Please enter only uppercase characters';
    	return false;
    }


	if(emails == ""){
		document.getElementById('emailids').innerHTML = "** Please fill the email id";
        return false;
	}

	if(emails.indexOf('@') <= 0){
		document.getElementById('emailids').innerHTML="**@ is at Invalid position";
		return false;
	}
	if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
		document.getElementById('emailids').innerHTML="**Dot(.) is at Invalid position";
		return false;
	} 




	if(pass == ""){
		document.getElementById('pass1').innerHTML = "** Please fill the password";
        return false;
	}

	if((pass.length <= 5) || (pass.length > 10)) {
		document.getElementById('pass1').innerHTML="**Password must be in between 5 and 10";
		return false;
	}




	if(conpass == ""){
		document.getElementById('confrmpass').innerHTML = "** Please re-enter the password";
        return false;
	}

	if(pass!=conpass){
		document.getElementById('confrmpass').innerHTML="**Passwords are not matching";
		return false;
	}





	if(mobileNumber == ""){
		document.getElementById('mobileno').innerHTML = "** Please fill the mobile number";
        return false;
	}

	if(isNaN(mobileNumber)){
		document.getElementById('mobileno').innerHTML="**Please enter a number only not characters";
		return false;
	}
	if(mobileNumber.length!=10){
		document.getElementById('mobileno').innerHTML="**Mobile number must be of 10 digits only";
		return false;
	}



	if(datepicker == ""){
		document.getElementById('dates').innerHTML = "** Please choose the date";
        return false;
	}




}