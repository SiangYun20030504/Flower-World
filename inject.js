/** -------------------- jAGlobals ---------------- **/
var jAGlobals = (function(){

	/* global skin variables */
	var dataTree = {"path":"%E8%8A%B1%E8%8A%B1%E4%B8%96%E7%95%8C","counters":{"total":19,"images":19,"files":19},"thumb":{"path":"thumbs\/%E7%B2%89%E8%89%B2%E5%B0%91%E5%A5%B3.jpg","width":270,"height":480},"objects":[{"path":"%E7%B2%89%E8%89%B2%E5%B0%91%E5%A5%B3.jpg","image":{"path":"slides\/%E7%B2%89%E8%89%B2%E5%B0%91%E5%A5%B3.jpg","width":960,"height":1707},"thumb":{"path":"thumbs\/%E7%B2%89%E8%89%B2%E5%B0%91%E5%A5%B3.jpg","width":270,"height":480},"fileSize":98681,"name":"粉色少女.jpg","comment":"拍攝地點：新社古堡\n粉色的花充滿了少女心，當微風吹過，就好像少女的裙子在飄逸。\n","fileDate":"2023-04-18T10:38:51.878Z","category":"image","title":"粉色少女","camera":{"originalDate":"2023-04-18T10:38:51.878Z"}},{"path":"%E7%B4%85%E7%82%AE%E8%BF%8E%E6%98%A5.jpg","image":{"path":"slides\/%E7%B4%85%E7%82%AE%E8%BF%8E%E6%98%A5.jpg","width":1109,"height":1479},"thumb":{"path":"thumbs\/%E7%B4%85%E7%82%AE%E8%BF%8E%E6%98%A5.jpg","width":360,"height":480},"fileSize":242908,"name":"紅炮迎春.jpg","comment":"拍攝地點：彰化田尾公路花園\n春節期間拍攝的紅色九重葛喜氣洋洋，像一串鞭炮。","fileDate":"2023-04-18T10:38:53.141Z","category":"image","title":"紅炮迎春","camera":{"originalDate":"2023-04-18T10:38:53.141Z"}},{"path":"%E7%B4%AB%E8%89%B2%E9%A2%A8%E9%88%B4.jpg","image":{"path":"slides\/%E7%B4%AB%E8%89%B2%E9%A2%A8%E9%88%B4.jpg","width":1109,"height":1479},"thumb":{"path":"thumbs\/%E7%B4%AB%E8%89%B2%E9%A2%A8%E9%88%B4.jpg","width":360,"height":480},"fileSize":225340,"name":"紫色風鈴.jpg","comment":"拍攝地點：彰化田尾公路花園\n微風吹過，風鈴草像風鈴一樣擺動，好像在演奏著風鈴交響樂。","fileDate":"2023-04-18T10:38:54.295Z","category":"image","title":"紫色風鈴","camera":{"originalDate":"2023-04-18T10:38:54.295Z"}},{"path":"%E5%BF%83%E6%83%B3%E4%BA%8B%E6%A9%99.jpg","image":{"path":"slides\/%E5%BF%83%E6%83%B3%E4%BA%8B%E6%A9%99.jpg","width":1109,"height":1479},"thumb":{"path":"thumbs\/%E5%BF%83%E6%83%B3%E4%BA%8B%E6%A9%99.jpg","width":360,"height":480},"fileSize":148941,"name":"心想事橙.jpg","comment":"拍攝地點：路邊\n天空&橘色的九重葛，望著天空看著橙色的九重葛，希望心想事橙。","fileDate":"2023-04-18T10:38:56.448Z","category":"image","title":"心想事橙","camera":{"originalDate":"2023-04-18T10:38:56.448Z"}},{"path":"%E7%B4%AB%E8%89%B2%E5%A6%96%E7%B2%BE.jpg","image":{"path":"slides\/%E7%B4%AB%E8%89%B2%E5%A6%96%E7%B2%BE.jpg","width":1920,"height":1271},"thumb":{"path":"thumbs\/%E7%B4%AB%E8%89%B2%E5%A6%96%E7%B2%BE.jpg","width":480,"height":318},"fileSize":174573,"name":"紫色妖精.jpg","comment":"拍攝地點:南投梅峰農場\n不規則的花瓣，就好像妖精揮動著翅膀在跳舞。","fileDate":"2023-04-18T10:39:22.848Z","category":"image","title":"紫色妖精","camera":{"originalDate":"2023-04-18T10:39:22.848Z"}},{"path":"5.jpg","image":{"path":"slides\/5.jpg","width":960,"height":1707},"thumb":{"path":"thumbs\/5.jpg","width":270,"height":480},"fileSize":181011,"name":"5.jpg","comment":"拍攝地點 :大尖山\n盛開的櫻花伴隨著含苞未開的櫻花，生長在同一個枝幹上，反映出春天剛來臨的感覺。","fileDate":"2023-04-18T10:39:47.473Z","category":"image","title":"含苞待放","camera":{"originalDate":"2023-04-18T10:39:47.473Z"}},{"path":"%E8%96%B0%E8%A1%A3%E8%8D%89%E6%A3%AE%E6%9E%97.jpg","image":{"path":"slides\/%E8%96%B0%E8%A1%A3%E8%8D%89%E6%A3%AE%E6%9E%97.jpg","width":1479,"height":1109},"thumb":{"path":"thumbs\/%E8%96%B0%E8%A1%A3%E8%8D%89%E6%A3%AE%E6%9E%97.jpg","width":480,"height":360},"fileSize":412699,"name":"薰衣草森林.jpg","comment":"拍攝地點 :南投杉林溪\n望眼過去皆是薰衣草，在陽光的照耀下促成了薰衣草的成長，彷彿一塊土地大豐收。","fileDate":"2023-04-18T10:40:04.177Z","category":"image","title":"薰衣草森林","camera":{"originalDate":"2023-04-18T10:40:04.177Z"}},{"path":"%E6%95%B8%E5%A4%A7%E4%BE%BF%E6%98%AF%E7%BE%8E.jpg","image":{"path":"slides\/%E6%95%B8%E5%A4%A7%E4%BE%BF%E6%98%AF%E7%BE%8E.jpg","width":1920,"height":1271},"thumb":{"path":"thumbs\/%E6%95%B8%E5%A4%A7%E4%BE%BF%E6%98%AF%E7%BE%8E.jpg","width":480,"height":318},"fileSize":217412,"name":"數大便是美.jpg","comment":"拍攝地點 :南投梅峰農場\n櫻花同時間盛開，並長滿了整個枝幹，畫面美感隨之進入眼簾。","fileDate":"2023-04-18T10:40:05.591Z","category":"image","title":"數大便是美","camera":{"originalDate":"2023-04-18T10:40:05.591Z"}},{"path":"%E8%8A%B1%E5%8F%A2.jpg","image":{"path":"slides\/%E8%8A%B1%E5%8F%A2.jpg","width":1109,"height":1479},"thumb":{"path":"thumbs\/%E8%8A%B1%E5%8F%A2.jpg","width":360,"height":480},"fileSize":309404,"name":"花叢.jpg","comment":"拍攝地點：彰化田尾公路花園\n花就像樹叢，從原本的幾朵花經過時間的淬鍊，接連長滿了整個花盆，猶如花叢一般。","fileDate":"2023-04-18T10:40:30.474Z","category":"image","title":"花叢","camera":{"originalDate":"2023-04-18T10:40:30.474Z"}},{"path":"%E8%BF%BD%E9%9A%A8.jpg","image":{"path":"slides\/%E8%BF%BD%E9%9A%A8.jpg","width":1707,"height":960},"thumb":{"path":"thumbs\/%E8%BF%BD%E9%9A%A8.jpg","width":480,"height":270},"fileSize":154230,"name":"追隨.jpg","comment":"在朵朵花草中最能凸顯自己的關鍵就在於盛開的那一刻，我們追隨著自己最想要的目標，那是多麼特別的。","fileDate":"2023-04-18T10:41:30.261Z","category":"image","title":"追隨","camera":{"originalDate":"2023-04-18T10:41:30.261Z"}},{"path":"7.jpg","image":{"path":"slides\/7.jpg","width":1109,"height":1479},"thumb":{"path":"thumbs\/7.jpg","width":360,"height":480},"fileSize":172050,"name":"7.jpg","comment":"拍攝地點 :潭陽國小校門口\n櫻花總是在春天出現，春天總是如此的美好，櫻花就如同夢境一般的出現在人們的眼中。","fileDate":"2023-04-18T10:41:31.342Z","category":"image","title":"櫻夢","camera":{"originalDate":"2023-04-18T10:41:31.342Z"}},{"path":"8.jpg","image":{"path":"slides\/8.jpg","width":1109,"height":1479},"thumb":{"path":"thumbs\/8.jpg","width":360,"height":480},"fileSize":164400,"name":"8.jpg","comment":"拍攝地點 :潭陽國小校門口\n櫻花是人們最喜歡的花之一，因為他迷人的顏色讓世人都很喜愛櫻花的美。","fileDate":"2023-04-18T10:41:40.669Z","category":"image","title":"美麗可人","camera":{"originalDate":"2023-04-18T10:41:40.669Z"}},{"path":"11.jpg","image":{"path":"slides\/11.jpg","width":1109,"height":1479},"thumb":{"path":"thumbs\/11.jpg","width":360,"height":480},"fileSize":249935,"name":"11.jpg","comment":"拍攝地點 :北屯好市多\n好市多裡有賣各式各樣的花，到了要關門打烊時剩餘的花還是依舊的美。","fileDate":"2023-04-18T10:41:48.256Z","category":"image","title":"漏網之魚","camera":{"originalDate":"2023-04-18T10:41:48.256Z"}},{"path":"13.jpg","image":{"path":"slides\/13.jpg","width":1920,"height":1271},"thumb":{"path":"thumbs\/13.jpg","width":480,"height":318},"fileSize":113030,"name":"13.jpg","comment":"拍攝地點 :南投梅峰農場\n在我還是國小的時候我會去搜集很多這種花，捧在手心然後再一次往天空灑！這就是我童年最喜歡的一個活動。","fileDate":"2023-04-18T10:42:03.49Z","category":"image","title":"花童","camera":{"originalDate":"2023-04-18T10:42:03.49Z"}},{"path":"19.jpg","image":{"path":"slides\/19.jpg","width":1479,"height":1109},"thumb":{"path":"thumbs\/19.jpg","width":480,"height":360},"fileSize":97131,"name":"19.jpg","comment":"一年四季可見的馬櫻丹時刻散發出鮮活的生命能量。","fileDate":"2023-04-18T10:44:55.480Z","category":"image","title":"四季皆開的馬櫻丹","camera":{"originalDate":"2023-04-18T10:44:55.480Z"}},{"path":"17.jpg","image":{"path":"slides\/17.jpg","width":1134,"height":638},"thumb":{"path":"thumbs\/17.jpg","width":480,"height":270},"fileSize":196855,"name":"17.jpg","comment":"紅色的鮮花盛開，和四周的綠植形成顏色對比。對比的效果使綠植看起來富有生機。","fileDate":"2023-04-18T10:45:28.152Z","category":"image","title":"綠意盎然","camera":{"originalDate":"2023-04-18T10:45:28.152Z"}},{"path":"16.jpg","image":{"path":"slides\/16.jpg","width":1280,"height":1280},"thumb":{"path":"thumbs\/16.jpg","width":480,"height":480},"fileSize":151085,"name":"16.jpg","comment":"在櫻花的花語中，不僅有高雅、美麗，也有純潔的涵意。","fileDate":"2023-04-18T10:45:44.146Z","category":"image","title":"高雅的她","camera":{"originalDate":"2023-04-18T10:45:44.146Z"}},{"path":"15.jpg","image":{"path":"slides\/15.jpg","width":1920,"height":1271},"thumb":{"path":"thumbs\/15.jpg","width":480,"height":318},"fileSize":213124,"name":"15.jpg","comment":"愛與美是紫羅蘭的花語之一。也有不同地區的人認為紫羅蘭象徵著忠誠，有著永不背叛的涵意。","fileDate":"2023-04-18T10:45:56.279Z","category":"image","title":"愛與美","camera":{"originalDate":"2023-04-18T10:45:56.279Z"}},{"path":"14.jpg","image":{"path":"slides\/14.jpg","width":1920,"height":1271},"thumb":{"path":"thumbs\/14.jpg","width":480,"height":318},"fileSize":180277,"name":"14.jpg","comment":"橘色鬱金香的花語是歷久彌新、美好回憶。","fileDate":"2023-04-18T10:42:10.246Z","category":"image","title":"回憶湧現","camera":{"originalDate":"2023-04-18T10:42:10.246Z"}}],"name":"花花世界","comment":"大自然中的美麗","fileDate":"2023-04-18T11:16:27.586Z"};
	var albumTitle = "花花世界";
	var albumURL = getAlbumURL();
	var rootPath = "";
	var stylePath = "";
	var style = "light.css";
	var skin = "Sprint";
	var online = isOnline();
	var pageName = "index";
	var pageExtension = ".html";
	var homepageLinkText = "";
	var homepageAddress = "";

	/* get current used url by of album made by skin */
	function getAlbumURL(){
		var url = document.getElementById('jASkin').src;
		return url.substring(0, url.lastIndexOf("/") + 1);
	}

	/* check if skin viewed online or in file system */
	function isOnline(){
		switch(window.location.protocol) {
		   case 'http:': return true;
		   case 'https:': return true;
		   case 'file:': return false;
		   default: return true;
		}
	}

	/* return public variables and functions */
	return {
		dataTree:dataTree,
		albumTitle: albumTitle,
		albumURL: albumURL,
		rootPath: rootPath,
		stylePath: stylePath,
		style: style,
		skin: skin,
		online: online,
		pageName: pageName,
		pageExtension: pageExtension,
		homepageLinkText: homepageLinkText,
		homepageAddress: homepageAddress
	}

})();
/** jAGlobals end **/


/** -------------------- jAInject ----------------- **/
var jAInject = (function(){

	/* store url temporary */
	var url = jAGlobals.albumURL;

	/* inject website */
	inj('<script src="' + url + 'res/controller/js/jquery-2.2.0.min.js"></script>'); // embets jQuery library
	inj('<script src="' + url + 'res/controller/js/script.js"></script>'); // embets jQuery library

	/** injects html code at embedded position **/
	function inj(html){
		document.write(html);
	}

})();
/** jAInject end **/
