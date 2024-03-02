// select_bagban
// select_gassap

$(".select_bagban").click(function (e) {
	console.log("click1");
	$(".me_gassap_tabs").hide("fast");
	$(".me_bagban_tabs").show("slow");
});

$(".select_gassap").click(function (e) {
	console.log("click2");
	$(".me_bagban_tabs").hide("fast");
	$(".me_gassap_tabs").show("slow");
});

// .me_product_name_mod
// .me_product_img_mod
// .me_product_category_mod
// me_product_price_mod
