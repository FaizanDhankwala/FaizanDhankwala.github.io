var person= {
firstName: "Faizan",
lastName: "Dhankwala",
fullName: function(){'use strict';
return this.firstName +' '+ this.lastName;
}
};

var calculator={
    operand: 1,
    operand:2,
    addMe: function(){
        return this.operand +this.operand;
    }

}
console.log(myObject01.firstName);
console.log(myObject01.lastName);
console.log(myObject02.fullName());
console.log(myObject03.addMe());