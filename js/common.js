/** 互动游戏共用js   */



/** 今日次数用完了弹框，关闭弹窗 */
$("#recommend-modal").on("click", ".close",function() {
       $("#recommend-modal").hide();
});

/** 根据id显示弹窗 */
function showModal(id){
	$("#"+id).show();
}

/** 规则 */
var description = null, probability = null;
$(".rule").on("click",function() {
	$(".rule-modal").show(),
	description = new IScroll(".description", {
		mouseWheel: !0,
		scrollbars: !0,
		shrinkScrollbars: "scale",
		click: !0
	}),
	$("#db-content").addClass("filter"),
	document.ontouchmove = function(e) {
		e.preventDefault();
	}
});
$(".rule-modal .close").on("click",function() {
	$(".rule-modal").hide(),
	$("#db-content").removeClass("filter"),
	document.ontouchmove = null,
	description.destroy(),
	$(".probability").hasClass("active") && ($(".probability").removeClass("active"), probability.destroy());
});

$(".probability .nav").on("click",function() {
	$(".probability").toggleClass("active"),
	$(".probability").hasClass("active") ? probability = new IScroll(".probability-wrapper", {
		mouseWheel: !0,
		scrollbars: !0,
		shrinkScrollbars: "scale",
		click: !0
	}) : probability.destroy(),
	$(".description .iScrollVerticalScrollbar").toggleClass("fade");
});

/** 写死的奖品详情 */
var priceDetail = [
  				 {
  				     "title": "特等奖奖品",
  				     "description": "<p><span style=\"font-size: 10.5pt;\">苹果7一台！</span></p><p><span style=\"font-size: 10.5pt;\">&nbsp;</span></p><p><span style=\"font-size: 10.5pt;\"><font>【领取说明】</font></span></p><p><span style=\"font-size: 10.5pt;\"><font>中奖后，请详细填写有效的手机号，我们会在</font></span><span style=\"font-size: 10.5pt;\">5-10个工作日</span><span style=\"font-size: 10.5pt;\"><font>内</font></span><span style=\"font-size: 10.5pt;\"><font>联系您</font></span></p><p><span style=\"font-size: 10.5pt;\">&nbsp;</span></p><p><span style=\"font-size: 10.5pt;\"><font>【特别说明】</font></span></p><p><span style=\"font-size: 10.5pt;\"><font>请仔细阅读领奖流程，若有疑问，可直接联系客服专线：</font></span><span style=\"font-size: 10.5pt;\">4000-1314-00或客服QQ：4000131400</span></p>",
  				     "img": "img/awardDetail200.jpg",
  				     "valiDate": null
  				 },{
  				     "title": "一等奖奖品",
  				     "description": "<p><span style=\"font-size: 10.5pt;\">苹果平板一台！</span></p><p><span style=\"font-size: 10.5pt;\">&nbsp;</span></p><p><span style=\"font-size: 10.5pt;\"><font>【领取说明】</font></span></p><p><span style=\"font-size: 10.5pt;\"><font>中奖后，请详细填写有效的手机号，我们会在</font></span><span style=\"font-size: 10.5pt;\">5-10个工作日</span><span style=\"font-size: 10.5pt;\"><font>内</font></span><span style=\"font-size: 10.5pt;\"><font>联系您</font></span></p><p><span style=\"font-size: 10.5pt;\">&nbsp;</span></p><p><span style=\"font-size: 10.5pt;\"><font>【特别说明】</font></span></p><p><span style=\"font-size: 10.5pt;\"><font>请仔细阅读领奖流程，若有疑问，可直接联系客服专线：</font></span><span style=\"font-size: 10.5pt;\">4000-1314-00或客服QQ：4000131400</span></p>",
  				     "img": "img/awardDetail100.jpg",
  				     "valiDate": null
  				 },{
  				     "title": "二等奖奖品",
  				     "description": "<p><span style=\"font-size: 10.5pt;\">现金500元！</span></p><p><span style=\"font-size: 10.5pt;\">&nbsp;</span></p><p><span style=\"font-size: 10.5pt;\"><font>【领取说明】</font></span></p><p><span style=\"font-size: 10.5pt;\"><font>中奖后，请详细填写有效的手机号，我们会在</font></span><span style=\"font-size: 10.5pt;\">5-10个工作日</span><span style=\"font-size: 10.5pt;\"><font>内</font></span><span style=\"font-size: 10.5pt;\"><font>联系您</font></span></p><p><span style=\"font-size: 10.5pt;\">&nbsp;</span></p><p><span style=\"font-size: 10.5pt;\"><font>【特别说明】</font></span></p><p><span style=\"font-size: 10.5pt;\"><font>请仔细阅读领奖流程，若有疑问，可直接联系客服专线：</font></span><span style=\"font-size: 10.5pt;\">4000-1314-00或客服QQ：4000131400</span></p>",
  				     "img": "img/awardDetail10.jpg",
  				     "valiDate": null
  				 },{
  				     "title": "三等奖奖品",
  				     "description": "<p>【商品详情】</p><p>电影折扣券</p><p><br></p><p>【领取说明】</p><p>获奖后，请详细填写个人手机号，我们会在5-10个工作日内联系您</p><p><br></p><p>【特别说明】</p><p>请仔细阅读领奖流程，若有疑问，可直接联系客服专线：400-080-6659或客服QQ：4000806659（工作日9:00至18:00）</p>",
  				     "img": "img/awardDetail2g.jpg",
  				     "valiDate": null
  				 }
  ];

var priceDetail2 = [
                   {
                       "title": "300元话费",
                       "description": "<p><span style=\"font-size: 10.5pt;\">300元手机话费，支付宝直充你手机账户，随你用！</span></p><p><span style=\"font-size: 10.5pt;\">&nbsp;</span></p><p><span style=\"font-size: 10.5pt;\"><font>【领取说明】</font></span></p><p><span style=\"font-size: 10.5pt;\"><font>中奖后，请详细填写有效的手机号（将作为话费充值号码），我们会在</font></span><span style=\"font-size: 10.5pt;\">5-10个工作日</span><span style=\"font-size: 10.5pt;\"><font>内</font></span><span style=\"font-size: 10.5pt;\"><font>为您充值，若应个人原因导致号码错误、误充错充，不会进行补充，敬请谅解</font></span></p><p><span style=\"font-size: 10.5pt;\">&nbsp;</span></p><p><span style=\"font-size: 10.5pt;\"><font>【特别说明】</font></span></p><p><span style=\"font-size: 10.5pt;\"><font>请仔细阅读领奖流程，若有疑问，可直接联系客服专线：</font></span><span style=\"font-size: 10.5pt;\">4000-1314-00或客服QQ：4000131400</span></p>",
                       "img": "img/awardDetail300.jpg",
                       "valiDate": null
                   },{
                       "title": "6G流量包",
                       "description": "<p>【商品详情】</p><p>商品名称：全国6G流量包</p><p><br></p><p>【领取说明】</p><p>获奖后，请详细填写个人手机号（将作为流量充值号码），我们会在5-10个工作日内为您充值，若应个人原因导致号码错误、误充错充，不会进行补充，敬请谅解</p><p><br></p><p>【特别说明】</p><p>请仔细阅读领奖流程，若有疑问，可直接联系客服专线：400-080-6659或客服QQ：4000806659（工作日9:00至18:00）</p>",
                       "img": "img/awardDetail6g.jpg",
                       "valiDate": null
                   },{
                       "title": "100元话费",
                       "description": "<p><span style=\"font-size: 10.5pt;\">100元手机话费，支付宝直充你手机账户，随你用！</span></p><p><span style=\"font-size: 10.5pt;\">&nbsp;</span></p><p><span style=\"font-size: 10.5pt;\"><font>【领取说明】</font></span></p><p><span style=\"font-size: 10.5pt;\"><font>中奖后，请详细填写有效的手机号（将作为话费充值号码），我们会在</font></span><span style=\"font-size: 10.5pt;\">5-10个工作日</span><span style=\"font-size: 10.5pt;\"><font>内</font></span><span style=\"font-size: 10.5pt;\"><font>为您充值，若应个人原因导致号码错误、误充错充，不会进行补充，敬请谅解</font></span></p><p><span style=\"font-size: 10.5pt;\">&nbsp;</span></p><p><span style=\"font-size: 10.5pt;\"><font>【特别说明】</font></span></p><p><span style=\"font-size: 10.5pt;\"><font>请仔细阅读领奖流程，若有疑问，可直接联系客服专线：</font></span><span style=\"font-size: 10.5pt;\">4000-1314-00或客服QQ：4000131400</span></p>",
                       "img": "img/awardDetail1001.jpg",
                       "valiDate": null
                   },{
                       "title": "4G流量包",
                       "description": "<p>【商品详情】</p><p>商品名称：全国4G流量包</p><p><br></p><p>【领取说明】</p><p>获奖后，请详细填写个人手机号（将作为流量充值号码），我们会在5-10个工作日内为您充值，若应个人原因导致号码错误、误充错充，不会进行补充，敬请谅解</p><p><br></p><p>【特别说明】</p><p>请仔细阅读领奖流程，若有疑问，可直接联系客服专线：400-080-6659或客服QQ：4000806659（工作日9:00至18:00）</p>",
                       "img": "img/awardDetail4g.jpg",
                       "valiDate": null
                   },{
                       "title": "10元话费",
                       "description": "<p><span style=\"font-size: 10.5pt;\">10元手机话费，支付宝直充你手机账户，随你用！</span></p><p><span style=\"font-size: 10.5pt;\">&nbsp;</span></p><p><span style=\"font-size: 10.5pt;\"><font>【领取说明】</font></span></p><p><span style=\"font-size: 10.5pt;\"><font>中奖后，请详细填写有效的手机号（将作为话费充值号码），我们会在</font></span><span style=\"font-size: 10.5pt;\">5-10个工作日</span><span style=\"font-size: 10.5pt;\"><font>内</font></span><span style=\"font-size: 10.5pt;\"><font>为您充值，若应个人原因导致号码错误、误充错充，不会进行补充，敬请谅解</font></span></p><p><span style=\"font-size: 10.5pt;\">&nbsp;</span></p><p><span style=\"font-size: 10.5pt;\"><font>【特别说明】</font></span></p><p><span style=\"font-size: 10.5pt;\"><font>请仔细阅读领奖流程，若有疑问，可直接联系客服专线：</font></span><span style=\"font-size: 10.5pt;\">4000-1314-00或客服QQ：4000131400</span></p>",
                       "img": "img/awardDetail101.jpg",
                       "valiDate": null
                   }
];
/* 翻牌 */
var priceDetail3 = [
                     {
  				     "title": "特等奖奖品",
  				     "description": "<p><span style=\"font-size: 10.5pt;\">苹果7一台！</span></p><p><span style=\"font-size: 10.5pt;\">&nbsp;</span></p><p><span style=\"font-size: 10.5pt;\"><font>【领取说明】</font></span></p><p><span style=\"font-size: 10.5pt;\"><font>中奖后，请详细填写有效的手机号，我们会在</font></span><span style=\"font-size: 10.5pt;\">5-10个工作日</span><span style=\"font-size: 10.5pt;\"><font>内</font></span><span style=\"font-size: 10.5pt;\"><font>联系您</font></span></p><p><span style=\"font-size: 10.5pt;\">&nbsp;</span></p><p><span style=\"font-size: 10.5pt;\"><font>【特别说明】</font></span></p><p><span style=\"font-size: 10.5pt;\"><font>请仔细阅读领奖流程，若有疑问，可直接联系客服专线：</font></span><span style=\"font-size: 10.5pt;\">4000-1314-00或客服QQ：4000131400</span></p>",
  				     "img": "img/awardDetail200.jpg",
  				     "valiDate": null
  				   },{
  				     "title": "一等奖奖品",
  				     "description": "<p><span style=\"font-size: 10.5pt;\">苹果平板一台！</span></p><p><span style=\"font-size: 10.5pt;\">&nbsp;</span></p><p><span style=\"font-size: 10.5pt;\"><font>【领取说明】</font></span></p><p><span style=\"font-size: 10.5pt;\"><font>中奖后，请详细填写有效的手机号，我们会在</font></span><span style=\"font-size: 10.5pt;\">5-10个工作日</span><span style=\"font-size: 10.5pt;\"><font>内</font></span><span style=\"font-size: 10.5pt;\"><font>联系您</font></span></p><p><span style=\"font-size: 10.5pt;\">&nbsp;</span></p><p><span style=\"font-size: 10.5pt;\"><font>【特别说明】</font></span></p><p><span style=\"font-size: 10.5pt;\"><font>请仔细阅读领奖流程，若有疑问，可直接联系客服专线：</font></span><span style=\"font-size: 10.5pt;\">4000-1314-00或客服QQ：4000131400</span></p>",
  				     "img": "img/awardDetail100.jpg",
  				     "valiDate": null
  				   },{
  				     "title": "二等奖奖品",
  				     "description": "<p><span style=\"font-size: 10.5pt;\">iWatch一个！</span></p><p><span style=\"font-size: 10.5pt;\">&nbsp;</span></p><p><span style=\"font-size: 10.5pt;\"><font>【领取说明】</font></span></p><p><span style=\"font-size: 10.5pt;\"><font>中奖后，请详细填写有效的手机号，我们会在</font></span><span style=\"font-size: 10.5pt;\">5-10个工作日</span><span style=\"font-size: 10.5pt;\"><font>内</font></span><span style=\"font-size: 10.5pt;\"><font>联系您</font></span></p><p><span style=\"font-size: 10.5pt;\">&nbsp;</span></p><p><span style=\"font-size: 10.5pt;\"><font>【特别说明】</font></span></p><p><span style=\"font-size: 10.5pt;\"><font>请仔细阅读领奖流程，若有疑问，可直接联系客服专线：</font></span><span style=\"font-size: 10.5pt;\">4000-1314-00或客服QQ：4000131400</span></p>",
  				     "img": "",
  				     "valiDate": null
  				   },{
  				     "title": "三等奖奖品",
  				     "description": "<p><span style=\"font-size: 10.5pt;\">2-200元红包！</span></p><p><br></p><p>【领取说明】</p><p>获奖后，请详细填写个人手机号，我们会在5-10个工作日内联系您</p><p><br></p><p>【特别说明】</p><p>请仔细阅读领奖流程，若有疑问，可直接联系客服专线：400-080-6659或客服QQ：4000806659（工作日9:00至18:00）</p>",
  				     "img": "",
  				     "valiDate": null
  				   }
 ];
