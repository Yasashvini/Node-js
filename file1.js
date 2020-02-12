var fs=require('fs');


var arr;val=0;
let airports = [];
var airport={};
function search(name,callback)
{
fs.readFile('a1.txt',function(err,data)
{
    arr = (data.toString()).split("\n");//arr contains lines from a1.txt file
    var i;
    //console.log(process.argv.slice(2));
    
    for(i=0;i<arr.length;i++)
    {
       var arr1= arr[i].split(',');//split line using delimiter ,
        airport=
        {
            airportid:arr1[0], //airport id
            airportname:arr1[1]//airport name
        }
       // console.log(myArgs[0]);
        if(name==airport.airportname)
       {  
         callback(airport);
       }
        
       
    }

    
  });
  
}
function sort1()
{
  fs.readFile('a1.txt',function(err,data)
{
    arr = (data.toString()).split("\n");//arr contains lines from a1.txt file
    var i;
    for(i=0;i<arr.length;i++)
    {
       var arr1= arr[i].split(',');//split line using delimiter ,
        var airport=
        {
            airportid:arr1[0], //airport id
            airportname:arr1[1]//airport name
        }
        airports.push(airport);
    }
    airports.sort(function(a, b){
      var nameA=a.airportname.toLowerCase(), nameB=b.airportname.toLowerCase()
      if (nameA < nameB) //sort string ascending
          return -1 
      if (nameA > nameB)
          return 1
      return 0 //default return value (no sorting)
  });
   console.log(airports);
  });
  
}


exports.search=search;
exports.sort1=sort1;




