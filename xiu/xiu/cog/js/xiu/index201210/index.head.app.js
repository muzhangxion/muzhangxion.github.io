/*! power by xiu front end team  build by grunt   */
function dropMenu(a) {
	$(a).each(function() {
		var a = $(this),
			b = a.find(".submenu"),
			c = b.height() + 10;
		a.hover(function() {
			$(this).addClass("selected"), b.stop().show().animate({
				height: c,
				opacity: 1
			}, 0), $.fn.bgIframe && b.bgIframe()
		}, function() {
			$(this).removeClass("selected"), b.stop().animate({
				opacity: 0
			}, 0, function() {
				$(this).css({
					display: "none"
				})
			})
		})
	}), bindEcodeEvent()
}

function dropMenuHeight(a) {
	var b = !1,
		c = $(a).find(".submenu"),
		d = c.height();
	if($("#navbox").hasClass("fixed-top2")) {
		var e = $(window).height() - $("#zd_top").height() - $("#navbox").height();
		e = e > 300 ? e : 300, d > e && (d = e, b = !0, c.css({
			height: d
		}), c.css("overflow-y", "scroll"))
	} else c.css("overflow-y", "auto")
}

function addfavorite(a, b) {
	var c = a || "http://www.xiu.com",
		d = b || "走秀网";
	document.all ? window.external.addFavorite(c, d) : window.sidebar ? window.sidebar.addPanel(d, c, "") : window.MessageEvent && !document.getBoxObjectFor && alert("对不起，您的浏览器不支持此操作!\n请您使用菜单栏或Ctrl+D收藏本站。")
}

function bindEcodeEvent() {
	$(".sm_xiu").on("mouseenter", function(a) {
		$(this).children("a").attr("class", "up"), $(".sm_ercode").show()
	}).on("mouseleave", function(a) {
		$(this).children("a").attr("class", "down"), $(".sm_ercode").hide()
	}), $(".sm_ercode").on("mouseenter", function(a) {
		$(this).show(), $(".sm_xiu").children("a").attr("class", "up")
	}).on("mouseleave", function(a) {
		$(this).hide(), $(".sm_xiu").children("a").attr("class", "down")
	})
}

function headerScrollHandler() {
	$(window).scrollTop() > 48 ? ($("#navbox").addClass("fixed-top2"), $("#zd_top").show(), $(".topMain_warp").css({
		opacity: 0
	}), $("body").css("padding-top", "44px")) : ($("#navbox").removeClass("fixed-top2"), $("#zd_top").hide(), $(".topMain_warp").css({
		opacity: 1
	}), $("body").css("padding-top", "0")), dropMenuHeight("#navbox .selected")
}
try {
	document.execCommand("BackgroundImageCache", !1, !0)
} catch(e) {}
$("#mine").hover(function(a) {
	var b = $(this);
	this.pointer && clearTimeout(this.pointer), this.pointer = setTimeout(function() {
		b.addClass("relax").find("a:first").attr("class", "up hover"), $("#my_xiu").show()
	}, 200), a.stopImmediatePropagation()
}, function(a) {
	var b = $(this);
	this.pointer && clearTimeout(this.pointer), b.removeClass("relax").find("a:first").attr("class", "down"), $("#my_xiu").hide(), a.stopImmediatePropagation()
}), $(".customer_service").hover(function(a) {
	var b = $(this);
	this.pointer && clearTimeout(this.pointer), this.pointer = setTimeout(function() {
		b.addClass("relax").find("a:first").attr("class", "up hover"), $(".customer_service_menu").show()
	}, 200)
}, function(a) {
	var b = $(this);
	this.pointer && clearTimeout(this.pointer), b.removeClass("relax").find("a:first").attr("class", "down"), $(".customer_service_menu").hide()
}), $("#bag").hover(function() {
	this.pointer && clearTimeout(this.pointer), this.pointer = setTimeout(function() {
		var a = $("#bag");
		0 != a.has("#my_bag").length && 0 != a.has(".down").length || $._xiu_login.showCard(), a.children("a").attr("class", "up hover"), $("#my_bag").show()
	}, 200)
}, function() {
	this.pointer && clearTimeout(this.pointer), $("#bag").children("a").attr("class", "down"), $("#my_bag").hide()
}), "undefined" == typeof LEON && (LEON = {}), LEON.searchTerm ? $("#J_searchTerm").val(LEON.searchTerm) : $("#J_search_welcome").show(), LEON.lastinput = "", LEON.searchSubmit = function() {
	var a = $.trim($("#J_searchTerm").val());
	return a && "" != a || ($("#J_search_welcome").hide(), a = $("#J_defaultKw").val(), $("#J_searchTerm").attr("value", a)), LEON.lastinput !== a ? $("#J_st_oclass_id").val("").attr("disabled", "disabled") : $("#J_st_oclass_id").removeAttr("disabled"), !0
}, $("#J_searchTerm").XAutoSuggest({
	url: "http://search.xiu.com/ajax/autocomplete.htm?jsoncallback=?",
	params: {
		mkt: "xiu"
	},
	width: 232,
	result: function(a) {
		a.oclassId && (LEON.lastinput = a.display, $("#J_st_oclass_id").val(a.oclassId).removeAttr("disabled")), $("#J_sourcesInput").val("s_" + (a._index || 0)), $("#J_searchForm").submit()
	}
}), dropMenu(".drop-menu-effect"), $(".sub").hover(function(a) {
	$(this).find("a:first").addClass("curr").end().find(".subNav:first").show(), a.stopImmediatePropagation()
}, function(a) {
	$(this).find("a:first").removeClass("curr").end().find(".subNav:first").hide(), a.stopImmediatePropagation()
}), $(document).ready(function() {
	$._xiu_login.loginCMS(), $._xiu_login.showCard(), $("#navbagNum").hover(function() {
		$._xiu_login.showCard()
	}, function() {}), $(window).bind("scroll", headerScrollHandler)
});