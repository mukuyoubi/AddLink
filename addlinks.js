var d1=$("iframe");
var d2=d1.contents().find("iframe");
var t = d2.contents().find("#pagedTable");
var trs =t.find("tr").length;
var warp;
var url=document.domain
for (var i=1; i <= trs-1; i++) {
	var urls ="http://"+url+"/node/"+t.find("tr:eq("+i+") td:eq(2)").text()+".jspx";
	var tag =document.createElement("a");
	var node=document.createTextNode("点击打开");
	tag.appendChild(node);
	tag.href=urls;
	tag.target="_blank";
	tag.style.background="#66ccff";
	tag.style.color="#fff";
	tag.style.marginLeft="5px";
	warp=t.find("tr:eq("+i+") td:eq(3)");
	warp.append(tag);
}