
# Java Script 
# EX 01, 02
# Do you notice a difference between the 2 ex? 

* I Noticed that in the first one the document is wroten on the head 
and in the second one is wroten in the body with js*
## Why does it both show as header ???

*Beacuse when you put document.write in front of a tag talks to the body.*
*The write method in HTML is used to write some content or JavaScript code in a Document.*
# EX 03
The result of this ex it will be 10. 
# WHY is 10? 
* Is 10 because  the const amount is 10 and the i is a smaller nr than 10 , we can give 9 for example. *
* So 1+9=10 

const amount = 10;

for (let i = 0; i < 10; i++) {
  console.log(i);
  document.write(`<p>${i + 1}</p>`);
}
# EX 04 

document.write(`<ol>`);
for (let i = 0; i < movies.length; i++) {
  document.write(`<li>${movies[i]}</li>`);
}
document.write(`</ol>`);
* The answer to that will be 
