var person= {
firstName: "Faizan",
lastName: "Dhankwala",
fullName: function(){'use strict';
return this.firstName +' '+ this.lastName;
}
};

var calculator={
 operand01:'-1',
 operand02:'-1',
  x = 5,
  y= 5,        
 z = x + y,
 z= y - x,
};
calculator.operand01 = person.firstName.length;




console.log(calculator.operand01);
console.log(calculator.operand02);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());



divider('Calculator');
console.log('operand01 =', calculator.operand01);


function divider(title) {
    console.log("\n====================================");
    console.log(title);
    console.log("====================================\n");
}