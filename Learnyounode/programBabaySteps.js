var arraycontent = process.argv;
b = 0
var nlen = arraycontent.length;
for (i = 2; i < nlen; i++) {   
var a = Number(arraycontent[i]);
var b = a + b;
};
console.log(b);






