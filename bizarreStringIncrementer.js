// Start your implementation here
const bizarreStringIncrementer = (arg) => {
  let regexp = /\d+$/g;
  if (arg.match(regexp)) {
    let number = parseInt(arg.match(regexp)[0]);
    number += 1;
    arg = arg.replace(/\d+$/g, "");
    arg += number;
  } else {
    arg += "1";
  }
  return arg;
};

console.log(bizarreStringIncrementer("foo"));
console.log(bizarreStringIncrementer("foo23"));
console.log(bizarreStringIncrementer("foo0041"));
console.log(bizarreStringIncrementer("foo9"));
console.log(bizarreStringIncrementer("foo099"));
console.log(bizarreStringIncrementer("f99oo"));
console.log(bizarreStringIncrementer("f99oo23"));
console.log(bizarreStringIncrementer("f99oo099"));
console.log(bizarreStringIncrementer("f99oo0099"));
