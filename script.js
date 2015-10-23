// JavaScript File
var alrick = {
firstName: "Alrick",
lastName: "Brown",
phoneNumber: "(876) 999-9999",
email: "alrick.brown@email.com"
};

var jodi = {
firstName: "Jodi",
lastName: "Mason",
phoneNumber: "(876) 999-9999",
email: "jodi.mason@email.com"
};

var contacts = [alrick, jodi];

function printPerson(person) {
    document.write(person.firstName + " " + person.lastName);
}


function list() {
var contactsLength = contacts.length;
for (var i = 0; i < contactsLength; i++) {
printPerson(contacts[i]);
}
};

function search (lastName) {
var contactsLength = contacts.length;
for(var i=0; i<contactsLength; i++){
if(contacts[i].lastName === lastName){
printPerson(contacts[i]);
}
}
};

var add= function(firstName, lastName, phoneNumber, email){
contacts[contacts.length] = {
firstName: firstName,
lastName: lastName,
phoneNumber: phoneNumber,
email: email
}
};
add("ade", "omo", "(650) 888-888", "andela@gmail.com");

list("ade");




function StaffMember(name, discountPercent){
this.name = name;
this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

// Create yourself again as 'me' with a staff discount of 20%
var me = new StaffMember("Mo", 20);

var cashRegister = {
total:0,
lastTransactionAmount: 0,
add: function(itemCost){
this.total += (itemCost || 0);
this.lastTransactionAmount = itemCost;
},
scan: function(item,quantity){
switch (item){
case "eggs": this.add(0.98 * quantity); break;
case "milk": this.add(1.23 * quantity); break;
case "magazine": this.add(4.99 * quantity); break;
case "chocolate": this.add(0.45 * quantity); break;
}
return true;
},
voidLastTransaction: function(){
this.total -= this.lastTransactionAmount;
this.lastTransactionAmount = 0;
},
// Create a new method applyStaffDiscount here
applyStaffDiscount : function(employee){
this.total -= this.total * (employee.discountPercent/100);
}
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object
// to applyStaffDiscount

cashRegister.applyStaffDiscount(me);
// Show the total bill
document.write('Your bill is '+ cashRegister.total.toFixed(2));
