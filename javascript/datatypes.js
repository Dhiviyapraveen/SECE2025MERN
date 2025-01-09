//primitive
//a="SECE"
//console.log(a)
//b=true
//console.log(typeof(b))

//secondary datatypes(object)
//array object
//a=[1,'a',"ani"]
//console.log(typeof(a))

//object 1 st way of declaring
//obj={
//    firstname: 'John',lastname: 'Smith'
//}
//console.log(obj)
//console.log(typeof(obj))
//console.log(obj.firstname)
//console.log(obj["lastname"])

//object 2 st way of declaring
//obj1={}
//obj1["firstname"]="John"
//console.log(obj1)

//object 3 st way of declaring
//obj2=new Object()
//obj2["firstname"]="John"
//obj2.count=90
//obj2.abs=1
//console.log(obj2)

//set
set= new Set(["hello",1,2,"SECE","44","hello","sece",5])
//console.log(typeof(set))
//console.log(set);
//console.log(set[0])
//set.add(20)
//console.log(set)

/*method 1
for (const item of set) {
    console.log(item); 
  }
*/
/*method 2
const arrayFormat = [...set];
console.log(arrayFormat[3]);
*/
/*method 3
const iterator = set.values();
console.log(iterator.next().value); 
*/