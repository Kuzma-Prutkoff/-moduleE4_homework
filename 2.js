function fun(a,b) {
  console.log('tutu' in obj)
}

const a = 'string2'
const obj = {tutu: 'tiket', dudu: '12345'}
fun(a, obj)   //true