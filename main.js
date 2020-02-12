var file=require('./file1');
var a={};
function display(a)
{
  console.log("Found:"+a);
}
var myArgs=process.argv.slice(2);
myArgs[0]="\""+myArgs[0]+"\"";
a=file.search(myArgs[0],display);
file.sort1();