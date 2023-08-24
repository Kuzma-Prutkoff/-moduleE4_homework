function fun(obj) {
  for (let key in obj) {
    if(obj.hasOwnProperty(key)) {
      console.log(key, obj[key])
    }
  }
}
const oppa = {city: 1, color: 2}
fun(oppa)			//"city" 1 "color" 2