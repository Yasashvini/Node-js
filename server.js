var http=require('http');
var url=require('url');

var file=require('./file1');
var a={};
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var queryData=url.parse(req.url,true).query;
    queryData.airport="\""+queryData.airport+"\"";
    function display(a)
    {
        res.write("<b>airport found in the list</b><br>");
        res.write("Airport ID:"+a.airportid+"<br>");
        res.end("Airport Name:"+a.airportname);
    }
    a=file.search(queryData.airport,display);
                
           
    }).listen(8083);