
var button=document.getElementById('button');
var city=document.getElementById('city');
var temp=document.getElementById('temp');
var desp=document.getElementById('desp');
var img=document.getElementById('img');
var country=document.getElementById('country');



function myAPI()
{
    document.getElementById('C').style.display = 'block';
    var inputvalue=document.getElementById('inputvalue').value;   
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue+',&appid=c1e05aacb93d6a9573639643712b4075',{method:'GET'})
.then(response => response.json())
.then(data =>{
    var cityvalue = data['name'];
    var tempvalue = data['main']['temp'] ;
    var despvalue = data['weather'][0]['description']; 
    var countryvalue = data['sys']['country'] ;
    var imgvalue = data['weather'][0]['icon'];
    
    var tempincelcius=tempvalue-273.15;
    var temptwodigit=parseInt(tempincelcius);
    



    

    city.innerHTML=cityvalue;
    temp.innerHTML=temptwodigit;
    desp.innerHTML=despvalue;
    img.innerHTML='<img src="http://openweathermap.org/img/w/'+imgvalue+'.png" alt="" width="auto" height="80px">';
    country.innerHTML=countryvalue;
     
})



.catch(err => alert('wrong city name'))


}


