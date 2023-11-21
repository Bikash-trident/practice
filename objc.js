
const isfunction=(obj1,obj2)=>{
  const obj1key=Object.keys(obj1)
  const obj2key=Object.keys(obj2)
  if(obj1key.length !== obj2key.length){
    return false
  }
  for(let objkey of obj1key){
    if(obj1[objkey]!==obj2[objkey]){
        return false;
    }
  }
return true
}

const obj1={
    name:"kristine",
    age:14,
}
const obj2={
    name:"kristine",
    age:14,
}
console.log(isfunction(obj1,obj2));

// console.log(JSON. stringify(obj1)===JSON.stringify(obj2))


