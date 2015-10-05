function InputFieldValidator(inputFieldName){
    this.inputFieldName = inputFieldName;
    this.inputField = document.getElementById(this.inputFieldName);
    if(this.inputField === 'undefined'){
        alert('No input field: ' + this.inputFieldName);
    }
}

InputFieldValidator.prototype.validate = function(){
    if(this.inputField.value === ''){
        alert('Please enter valid text for input field: ' + this.inputFieldName);
    }
};

window.onload = function(){
    var fNameValidator = new InputFieldValidator('fName'),
        lNameValidator = new InputFieldValidator('lName'),
        submitButton = document.getElementById('submit');

    submitButton.addEventListener('click', function (){
        fNameValidator.validate();
        lNameValidator.validate();
    });
};