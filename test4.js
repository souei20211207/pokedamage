var moti=[];
moti[0]="いのちのたま";
moti[1]="こだわりハチマキ";
moti[2]="こだわりメガネ";
moti[3]="こだわりスカーフ";
moti[4]="タイプ強化系アイテム";
moti[5]="たつじんのおび";
moti[6]="ちからのハチマキ";
moti[7]="ものしりメガネ";
moti[8]="ノーマルジュエル";
moti[9]="メトロノーム";
moti[10]="ふうせん";
moti[11]="ねらいのまと";
moti[12]="ふといほね";
moti[13]="でんきだま";
moti[14]="パンチグローブ";
moti[15]="いしづえのめん";
moti[16]="いどのめん";
moti[17]="かまどのめん";
moti[18]="しんかのきせき";
moti[19]="とつげきチョッキ";
moti[20]="半減きのみ";
moti[21]="ホズのみ";
moti[22]="かるいし";
moti[23]="パワー系アイテム";
moti[24]="くろいてっきゅう";
moti[25]="こんごうだま";
moti[26]="しらたま";
moti[27]="はっきんだま";
moti[28]="こころのしずく";
moti[29]="ばんのうがさ";
moti.unshift("なし");

var lm=moti.length;

function AllMotimono(){
	newArr="";
	for(i=0;i<lm;i++){
		newArr=newArr+'<option value="'+moti[i]+'">'+moti[i]+'</option>';
	}
	motimono.innerHTML=newArr;
}

function sAllMotimono(){
	newArr="";
	for(i=0;i<lm;i++){
		newArr=newArr+'<option value="'+moti[i]+'">'+moti[i]+'</option>';
	}
	smotimono.innerHTML=newArr;
}
