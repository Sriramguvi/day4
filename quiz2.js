var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    
   
   // var data1=data.filter((element)=>element.region==="Asia");
   // console.log(data1);
  for(i=0;i<data.length;i++){
  console.log(`${data[i].flag}`)
  }
}