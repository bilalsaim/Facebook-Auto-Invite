var inputs = document.getElementsByClassName('_42ft _4jy0 _4jy3 _517h _51sy');
var scrool = document.getElementsByClassName('uiScrollableAreaWrap');
var i = 2;
//Bazı durumlarda i değerini 17 den başlatmak daha mantıklı çünkü sayfa editörüyse başka yerlere tıklayabiliyor

var say=0
var check = function(){
    if(i<inputs.length)
	{
		say = 0
		inputs[i].click();
		i++;
		console.log(i+". Davet Edildi");
	}
	else
	{
		//Facebook diliniz ingilizce is "See More" ile metin değirini değiştirin
		var metin = "Devamını Gör";
		var devami = document.evaluate('//*[contains(@id,"reaction_profile_pager")]//*[ contains(text(),"'+metin+'")]' ,document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue;
		
		devami.click();	
		inputs = document.getElementsByClassName('_42ft _4jy0 _4jy3 _517h _51sy');
		scrool[4].scrollTop = scrool[4].scrollHeight;
		
		 say++;
		if(say>120)
		{
			alert("Bitti!");
			clearInterval(yenile)
		}
		console.log("Devamını Gör araştırılıyor");
		
	}
}

//3000 değeri 3 saniyede bir yeni kişi davet edileceğini belirtiyor saniyeyi isteğe göre değiştirebilirsiniz
var yenile = setInterval(check, 3000); 