const person = {
    fname: 'Shahbaz',
    lname: 'Shahbaz',
    walk() {
        console.log("Lets start walking");
    },
    Talk() {
        console.log("nothing to talk");
    }
}
const credential = 'fname';
person[credential] = "Muhammad";
console.log(person[credential] + " " + person['lname']);
const walk = person.walk;
walk();