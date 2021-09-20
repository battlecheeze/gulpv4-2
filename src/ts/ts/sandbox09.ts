type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum};
/*
const logDetails = (uid: string | number, item: string) => {
   console.log('${item} has a uid of ${uid}');
}

const greet1 = (user: {name: string, uid: string | number}) => {
   console.log('${user.name} says hello');
}
const logDetails = (uid: StringOrNum, item: string) => {
   console.log('${item} has a uid of ${uid}');
}

const greet1 = (user: {name: string, uid: StringOrNum}) => {
   console.log('${user.name} says hello');
}
*/

const greet1 = (user: objWithName) => {
console.log('${user.name} says hello');
}
