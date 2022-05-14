let map;

var countryArray = ["canada", "united states", "mexico", "guatemala", "belize", "el salvador", "honduras", "nicaragua", "costa rica", "panama", "bahamas", "cuba", "haiti", "dominican republic", "jamaica", "st lucia", "st kitts and nevis", "st vincent", "dominica", "grenada", "trinidad and tobago", "barbados", "antigua and barbuda", "colombia", "venezuela", "argentina", "ecuador", "brazil", "chile", "guyana", "suriname", "peru", "bolivia", "uruguay", "paraguay", "iceland", "norway", "finland", "sweden", "denmark", "czechia", "romania", "ukraine", "belarus", "bulgaria", "moldova", "croatia", "north macedonia", "bosnia and herzegovina", "luxembourg", "liechtenstein", "albania", "serbia", "kosovo", "san marino", "andorra", "united kingdom", "estonia", "latvia", "lithuania", "spain", "france", "portugal", "netherlands", "belgium", "switzerland", "hungary", "germany", "austria", "poland", "turkey", "vatican", "italy", "montenegro", "monaco", "greece", "malta", "cyprus", "slovakia", "ireland", "slovenia", "timor leste", "malaysia", "indonesia", "brunei", "singapore", "philippines", "taiwan", "china", "russia", "mongolia", "bhutan", "india", "sri lanka", "bangladesh", "pakistan", "afghanistan", "uzbekistan", "tajikistan", "turkmenistan", "kyrgyzstan", "kazakhstan", "azerbaijan", "armenia", "georgia", "jordan", "syria", "kuwait", "qatar", "united arab emirates", "yemen", "oman", "saudi arabia", "iraq", "nepal", "iran", "israel", "maldives", "lebanon", "palestine", "north korea", "south korea", "japan", "vietnam", "bahrain", "thailand", "cambodia", "myanmar", "laos", "djibouti", "eritrea", "egypt", "chad", "sudan", "south sudan", "mozambique", "malawi", "somalia", "senegal", "ghana", "guinea", "guinea bissau", "burkina faso", "democratic republic of the congo", "republic of the congo", "central african republic", "uganda", "rwanda", "burundi", "tanzania", "kenya", "zambia", "zimbabwe", "south africa", "eswatini", "lesotho", "namibia", "botswana", "ivory coast", "angola", "seychelles", "sierra leone", "morocco", "algeria", "libya", "tunisia", "sao tome and principe", "mali", "nigeria", "niger", "mauritania", "comoros", "madagascar", "gambia", "liberia", "equatorial guinea", "cape verde", "mauritius", "ethiopia", "gabon", "cameroon", "benin", "togo", "nauru", "palau", "new zealand", "australia", "solomon islands", "marshall islands", "papua new guinea", "vanuatu", "micronesia", "fiji", "samoa", "tuvalu", "kiribati", "tonga"]

var data = '{"canada": {"lat": "56.130366","lng": "-106.346771"},"united states": {"lat": "37.09024","lng": "-95.712891"},"mexico": {"lat": "23.634501","lng": "-102.552784"},"guatemala": { "lat": "15.783471","lng": "-90.230759"},"belize": {"lat": "17.189877","lng": "-88.49765"}, "el salvador": {"lat": "13.794185","lng": "-88.89653"},"honduras": {"lat": "15.199999","lng": "-86.241905"}, "nicaragua": {"lat": "12.865416","lng": "-85.207229"}, "costa rica": {"lat": "9.748917","lng": "-83.753428"}, "panama": {"lat": "8.537981", "lng": "-80.782127"}, "bahamas": {"lat": "25.03428","lng": "-77.39628"}, "cuba": {"lat": "21.521757","lng": "-77.781167"}, "haiti": {"lat": "18.971187","lng": "-72.285215"}, "dominican republic": {"lat": "18.735693","lng": "-70.162651"}, "jamaica": {"lat": "18.109581","lng": "-77.297508"}, "st lucia": {"lat": "13.909444","lng": "-60.978893"}, "st kitts and nevis": {"lat": "17.357822","lng": "-62.782998"}, "st vincent": {"lat": "12.984305","lng": "-61.287228"}, "dominica": {"lat": "15.414999","lng": "-61.370976"}, "grenada": {"lat": "12.262776","lng": "-61.604171"}, "trinidad and tobago": {"lat": "10.691803","lng": "-61.222503"}, "barbados": { "lat": "13.193887","lng": "-59.543198"}, "antigua and barbuda": { "lat": "17.060816","lng": "-61.796428"}, "colombia": {"lat": "4.570868", "lng": "-74.297333"}, "venezuela": { "lat": "6.42375", "lng": "-66.58973"}, "argentina": {"lat": "-38.416097","lng": "-63.616672" }, "ecuador": {"lat": "-1.831239","lng": "-78.183406"}, "brazil": {"lat": "-14.235004", "lng": "-51.92528"}, "chile": {"lat": "-35.675147", "lng": "-71.542969" }, "guyana": {"lat": "4.860416","lng": "31.354676"}, "suriname": {"lat": "3.919305","lng": "-56.027783"}, "peru": {"lat": "-9.189967","lng": "-75.015152"}, "bolivia": {"lat": "-16.290154","lng": "-63.588653"}, "uruguay": { "lat": "-32.522779","lng": "-55.765835"}, "paraguay": {"lat": "-23.442503","lng": "-58.443832"}, "iceland": {"lat": "64.963051","lng": "-19.020835" }, "norway": { "lat": "60.472024","lng": "8.468946"}, "finland": {"lat": "61.92411","lng": "25.748151"}, "sweden": { "lat": "60.128161", "lng": "18.643501"}, "denmark": { "lat": "56.26392", "lng": "9.501785" }, "czechia": { "lat": "49.817492","lng": "15.472962"}, "romania": { "lat": "45.943161","lng": "24.96676" }, "ukraine": { "lat": "48.379433", "lng": "31.16558"}, "belarus": { "lat": "53.709807","lng": "27.953389"}, "bulgaria": { "lat": "42.733883","lng": "25.48583"}, "moldova": { "lat": "47.411631", "lng": "28.369885"}, "croatia": { "lat": "45.1", "lng": "15.2" }, "north macedonia": { "lat": "41.608635", "lng": "21.745275"}, "bosnia and herzegovina": { "lat": "43.915886", "lng": "17.679076" }, "luxembourg": { "lat": "49.815273","lng": "6.129583"}, "liechtenstein": {"lat": "47.166", "lng": "9.555373"}, "albania": { "lat": "41.153332", "lng": "20.168331" }, "serbia": { "lat": "44.016521","lng": "21.005859" }, "kosovo": { "lat": "42.602636", "lng": "20.902977"}, "san marino": { "lat": "43.94236", "lng": "12.457777"}, "andorra": {"lat": "42.546245", "lng": "1.601554"}, "united kingdom": { "lat": "55.378051", "lng": "-3.435973" }, "estonia": {"lat": "58.595272","lng": "25.013607"}, "latvia": {"lat": "56.879635", "lng": "24.603189" }, "lithuania": { "lat": "55.169438", "lng": "23.881275"}, "spain": { "lat": "40.463667", "lng": "-3.74922" }, "france": { "lat": "46.227638","lng": "2.213749"}, "portugal": {"lat": "39.399872", "lng": "-8.224454" }, "netherlands": {"lat": "52.132633","lng": "5.291266" }, "belgium": { "lat": "50.503887", "lng": "4.469936"}, "switzerland": {"lat": "46.818188", "lng": "8.227512" }, "hungary": {"lat": "47.162494", "lng": "19.503304"}, "germany": { "lat": "51.165691","lng": "10.451526"}, "austria": { "lat": "47.516231","lng": "14.550072"}, "poland": {"lat": "51.919438","lng": "19.145136" }, "turkey": { "lat": "38.963745", "lng": "35.243322" }, "vatican": { "lat": "41.902916", "lng": "12.453389" }, "italy": { "lat": "41.87194", "lng": "12.56738" }, "montenegro": { "lat": "42.708678", "lng": "19.37439" }, "monaco": { "lat": "43.750298", "lng": "7.412841" }, "greece": { "lat": "39.074208", "lng": "21.824312" }, "malta": { "lat": "35.937496", "lng": "14.375416" }, "cyprus": { "lat": "35.126413", "lng": "33.429859" }, "slovakia": { "lat": "48.669026", "lng": "19.699024" }, "ireland": { "lat": "53.41291", "lng": "-8.24389" }, "slovenia": { "lat": "46.151241", "lng": "14.995463" }, "timor leste": { "lat": "-8.874217", "lng": "125.727539" }, "malaysia": { "lat": "4.210484", "lng": "101.975766" }, "indonesia": { "lat": "-0.789275", "lng": "113.921327" }, "brunei": { "lat": "4.535277", "lng": "114.727669" }, "singapore": { "lat": "1.352083", "lng": "103.819836" }, "philippines": { "lat": "12.879721", "lng": "121.774017" }, "taiwan": { "lat": "23.69781", "lng": "120.960515" }, "china": { "lat": "35.86166", "lng": "104.195397" }, "russia": { "lat": "61.52401", "lng": "105.318756" }, "mongolia": { "lat": "46.862496", "lng": "103.846656" }, "bhutan": { "lat": "27.514162", "lng": "90.433601" }, "india": { "lat": "20.593684", "lng": "78.96288" }, "sri lanka": { "lat": "7.873054", "lng": "80.771797" }, "bangladesh": { "lat": "23.684994", "lng": "90.356331" }, "pakistan": { "lat": "30.375321", "lng": "69.345116" }, "afghanistan": { "lat": "33.93911", "lng": "67.709953" }, "uzbekistan": { "lat": "41.377491", "lng": "64.585262" }, "tajikistan": { "lat": "38.861034", "lng": "71.276093" }, "turkmenistan": { "lat": "38.969719", "lng": "59.556278" }, "kyrgyzstan": { "lat": "41.20438", "lng": "74.766098" }, "kazakhstan": { "lat": "48.019573", "lng": "66.923684" }, "azerbaijan": { "lat": "40.143105", "lng": "47.576927" }, "armenia": { "lat": "40.069099", "lng": "45.038189" }, "georgia": { "lat": "42.315407", "lng": "43.356892" }, "jordan": { "lat": "30.585164", "lng": "36.238414" }, "syria": { "lat": "34.802075", "lng": "38.996815" }, "kuwait": { "lat": "29.31166", "lng": "47.481766" }, "qatar": { "lat": "25.354826", "lng": "51.183884" }, "united arab emirates": { "lat": "23.424076", "lng": "53.847818" }, "yemen": { "lat": "15.552727", "lng": "48.516388" }, "oman": { "lat": "21.512583", "lng": "55.923255" }, "saudi arabia": { "lat": "23.885942", "lng": "45.079162" }, "iraq": { "lat": "33.223191", "lng": "43.679291" }, "nepal": { "lat": "28.394857", "lng": "84.124008" }, "iran": { "lat": "32.427908", "lng": "53.688046" }, "israel": { "lat": "31.046051", "lng": "34.851612" }, "maldives": { "lat": "3.202778", "lng": "73.22068" }, "lebanon": { "lat": "33.854721", "lng": "35.862285" }, "palestine": { "lat": "31.952162", "lng": "35.233154" }, "north korea": { "lat": "40.339852", "lng": "127.510093" }, "south korea": { "lat": "35.907757", "lng": "127.766922" }, "japan": { "lat": "36.204824", "lng": "138.252924" }, "vietnam": { "lat": "14.058324", "lng": "108.277199" }, "bahrain": { "lat": "25.930414", "lng": "25.930414" }, "thailand": { "lat": "15.870032", "lng": "100.992541" }, "cambodia": { "lat": "12.565679", "lng": "104.990963" }, "myanmar": { "lat": "21.913965", "lng": "95.956223" }, "laos": { "lat": "19.85627", "lng": "102.495496" }, "djibouti": { "lat": "11.825138", "lng": "42.590275" }, "eritrea": { "lat": "15.179384", "lng": "39.782334" }, "egypt": { "lat": "26.820553", "lng": "30.802498" }, "chad": { "lat": "15.454166", "lng": "18.732207" }, "sudan": { "lat": "30.187525", "lng": "15.734439" }, "south sudan": { "lat": "30.597103", "lng": "7.033207" }, "mozambique": { "lat": "-18.665695", "lng": "35.529562" }, "malawi": { "lat": "-13.254308", "lng": "34.301525" }, "somalia": { "lat": "5.152149", "lng": "46.199616" }, "senegal": { "lat": "14.497401", "lng": "-14.452362" }, "ghana": { "lat": "7.946527", "lng": "-1.023194" }, "guinea": { "lat": "9.945587", "lng": "-9.696645" }, "guinea bissau": { "lat": "11.803749", "lng": "-15.180413" }, "burkina faso": { "lat": "12.238333", "lng": "-1.561593" }, "democratic republic of the congo": { "lat": "-4.038333", "lng": "21.758664" }, "republic of the congo": { "lat": "-0.228021", "lng": "15.827659" }, "central african republic": { "lat": "6.611111", "lng": "20.939444" }, "uganda": { "lat": "1.373333", "lng": "32.290275" }, "rwanda": { "lat": "-1.940278", "lng": "29.873888" }, "burundi": { "lat": "-3.373056", "lng": "29.918886" }, "tanzania": { "lat": "-6.369028", "lng": "34.888822" }, "kenya": { "lat": "-0.023559", "lng": "37.906193" }, "zambia": { "lat": "-13.133897", "lng": "27.849332" }, "zimbabwe": { "lat": "-19.015438", "lng": "29.154857" }, "south africa": { "lat": "-30.559482", "lng": "22.937506" }, "eswatini": { "lat": "-26.522503", "lng": "31.465866" }, "lesotho": { "lat": "-29.609988", "lng": "28.233608" }, "namibia": { "lat": "-22.95764", "lng": "18.49041" }, "botswana": { "lat": "-22.328474", "lng": "24.684866" }, "ivory coast": { "lat": "7.539989", "lng": "-5.54708" }, "angola": { "lat": "-11.202692", "lng": "17.873887" }, "seychelles": { "lat": "-4.679574", "lng": "55.491977" }, "sierra leone": { "lat": "8.460555", "lng": "-11.779889" }, "morocco": { "lat": "31.791702", "lng": "-7.09262" }, "algeria": { "lat": "28.033886","lng": "1.659626" }, "libya": {"lat": "26.3351","lng": "17.228331" }, "tunisia": { "lat": "33.886917", "lng": "9.537499" }, "sao tome and principe": { "lat": "0.18636", "lng": "6.613081" }, "mali": { "lat": "17.570692", "lng": "-3.996166"}, "nigeria": {"lat": "9.081999", "lng": "8.675277" }, "niger": {"lat": "17.607789", "lng": "8.081666" }, "mauritania": { "lat": "21.00789","lng": "-10.940835"}, "comoros": {"lat": "-11.875001", "lng": "43.872219" }, "madagascar": { "lat": "-18.766947", "lng": "46.869107" }, "gambia": { "lat": "13.443182", "lng": "-15.310139"}, "liberia": {"lat": "6.428055", "lng": "-9.429499" }, "equatorial guinea": { "lat": "1.650801","lng": "10.267895"}, "cape verde": {"lat": "16.002082","lng": "-24.013197"}, "mauritius": {"lat": "-20.348404","lng": "57.552152" }, "ethiopia": {"lat": "9.145","lng": "40.489673"},"gabon": {"lat": "-0.803689","lng": "11.609444"}, "cameroon": { "lat": "7.369722", "lng": "12.354722" }, "benin": { "lat": "9.30769", "lng": "2.315834" }, "togo": { "lat": "8.619543", "lng": "0.824782" }, "nauru": { "lat": "-0.522778", "lng": "166.931503" }, "palau": { "lat": "7.51498", "lng": "134.58252" }, "new zealand": { "lat": "-40.900557", "lng": "174.885971" }, "australia": { "lat": "-25.274398", "lng": "133.775136" }, "solomon islands": { "lat": "-9.64571","lng": "160.156194"}, "marshall islands": { "lat": "7.131474","lng": "171.184478" }, "papua new guinea": { "lat": "-6.314993","lng": "143.95555"}, "vanuatu": {"lat": "-15.376706","lng": "166.959158"}, "micronesia": {"lat": "7.425554","lng": "150.550812"}, "fiji": { "lat": "-16.578193","lng": "179.414413"}, "samoa": { "lat": "-13.759029", "lng": "-172.104629"}, "tuvalu": { "lat": "-7.109535", "lng": "177.64933"}, "kiribati": {"lat": "-3.370417","lng": "-168.734039"}, "tonga": { "lat": "-21.178986", "lng": "-175.198242"}}';

var json = JSON.parse(data);

var targetCountry = countryArray[Math.floor(Math.random() * 197)];
console.log(targetCountry);
//var targetCountry = "el salvador";

var count = 0;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 2.3,
      center: { lat: 30, lng: 0 },
    });

  }

  function checkInput(){
      var guess = document.getElementById("guess").value.toLowerCase();
      for(var i=0; i<countryArray.length; i++){
          if(guess == countryArray[i]){
            document.getElementById("guess").value = null;
            countryArray.splice(i, 1);
            calculateDistance(guess);
              
          }
      }
  }

  function calculateDistance(guess){
    var correctLat = json[targetCountry].lat;
    var correctLng = json[targetCountry].lng;
    var guessedLat = json[guess].lat;
    var guessedLng = json[guess].lng;

    var distance = getDistance(guessedLat, guessedLng, correctLat, correctLng);

    addRow(guess, distance);
    addToMap(guess);

    if(distance ==0){
        winGame();
    }
  }

  function addRow(guess, distance){
      var tr = document.createElement("tr");
      var th1 = document.createElement("th");
      th1.innerHTML = guess;
      tr.appendChild(th1);
      var th2 = document.createElement("th");
      th2.innerHTML = distance+ " km";
      tr.appendChild(th2);
      document.getElementById("guessTable").appendChild(tr);
  
      count ++;

    }

  function addToMap(guess){

    //var color = pickColor(guess, targetCountry);

    map.data.loadGeoJson('geojsons/'+guess+'.geojson');
    map.data.setStyle({
        fillColor: "#ff009d",
        strokeColor: "#ff009d",
        fillOpacity:  1
      });
    
  }

  function getDistance(lat1, lng1, lat2, lng2){
    var R = 6371; // Radius of the earth in km
    var dLat = (lat2-lat1) * (Math.PI/180);
    var dLon = (lng2-lng1) * (Math.PI/180);
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1* (Math.PI/180)) * Math.cos(lat2* (Math.PI/180)) * Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return Math.round(d);
  }

  function winGame(){

    var element = document.getElementById("headingDiv");
    element.parentNode.removeChild(guess);

    const start = () => {
        setTimeout(function() {
            confetti.start()
        }, 100);
    };
    const stop = () => {
        setTimeout(function() {
            confetti.stop()
        }, 30000);
    };
    start();
    stop();

    var thecount = document.createElement("h4");
    thecount.innerHTML = "Total Guesses: "+count;
    document.getElementById("content").appendChild(thecount);
}