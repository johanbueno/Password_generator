

        var passwordOptions = {
            passLenght : 0,
            specialCharacters: true,
            numericCharacters: true,
            lowercaseCharacters: true,
            uppercaseCharacters: true,
           
        }

        function password() {
            var passCharacters = "";
            lowerCase = "abcdefghijklmnopqrstuvwxyz";
            numeric = '0123456789';
            special = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
            uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            userPassword = "";

            var mustOne = 0;

            var userlength = parseInt(prompt("How many Character Do you want on your Password"));
            // user pick a password from 8 to 128 
            if (userlength > 7 && userlength < 129) {
                passwordOptions.passLength = userlength;
                // assigned the user entry to new variable
            }
            else {
                alert("you must enter a password lenght from 8 to 128");
                return;
            }
            // if the user click ok will pass the numeric values
            var userNumber = confirm("Click OK If you want Numbers");
            if (userNumber === true) {
                passwordOptions.numericCharacters = true;
                mustOne = mustOne + 1;
                passCharacters += numeric;
            }
            else {
                passwordOptions.numericCharacters = false;

            }

            var userLower = confirm("Would you like LowerCase");
            if (userLower === true) {
                passwordOptions.lowercaseCharacters = true;
                mustOne = mustOne + 1;
                passCharacters += lowerCase;
            }
            else {
                passwordOptions.lowercaseCharacters = false;
            }
            var userUpperCase = confirm ("Would you like UpperCase")
            if (userUpperCase === true){
                passwordOptions.uppercaseCharacters=true;
                mustOne =mustOne +1;
                passCharacters += uppercase;
            }
            else {
                passwordOptions.uppercaseCharacters = false;
            }
           var userSpecialC = confirm ("Would you like Special Characters")
           if (userSpecialC === true){
               passwordOptions.specialCharacters= true;
               mustOne = mustOne +1;
               passCharacters += special;
           }
           else {
               passwordOptions.specialCharacters = false
           }

           if (mustOne>1) {
               mustOne =0;
           }
           else {
               alert ("Please pick one variable")
           }
          
           for (var i = 0; i < passwordOptions.passLength; i++) {
               var result = passCharacters[Math.floor(Math.random() * passCharacters.length)];
               userPassword += result;
           }
           document.getElementById("passwordResult").innerHTML = userPassword;
        };
        
        function clipBoard() {
  var copyText = document.getElementById("passwordResult");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}