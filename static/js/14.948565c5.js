(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{225:function(t,a,s){"use strict";s.r(a);var v=s(0),r=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("In addition to the settings on this page, it is also affected by the [Options] configuration. For this section, please refer to the option configuration.")])]),t._v(" "),s("h2",{attrs:{id:"Domain name restrictions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#Domain name restrictions"}},[t._v("#")]),t._v(" Domain name restrictions")]),t._v(" "),s("ul",[s("li",[t._v("(Required) The download range is limited to this domain name by default. Of Doc, you can add a domain name.")]),t._v(" "),s("li",[t._v("Multiple domain names are separated by "|", indicating an "or" relationship.")])]),t._v(" "),s("h2",{attrs:{id:"Link contains"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#Link contains"}},[t._v("#")]),t._v(" Link contains")]),t._v(" "),s("ul",[s("li",[t._v("(选填)Link contains输入的字符串才被下载，当然默认空不做限制。")]),t._v(" "),s("li",[t._v("多个使用“|”分隔，表示“或”的关系。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("举个例子")]),t._v(" "),s("p",[t._v("网站地址"),s("code",[t._v("/product/index.html")]),t._v("和"),s("code",[t._v("/404.html")]),t._v("，只想要product目录下的页面，输入“/product/”后只下载带有"),s("code",[t._v("/product/")]),t._v("字符串的链接。")])]),t._v(" "),s("h2",{attrs:{id:"Exclude directory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#Exclude directory"}},[t._v("#")]),t._v(" Exclude directory")]),t._v(" "),s("ul",[s("li",[t._v("(选填)此处与Link contains意思相反。")])]),t._v(" "),s("h2",{attrs:{id:"Maximum depth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#Maximum depth"}},[t._v("#")]),t._v(" Maximum depth")]),t._v(" "),s("ul",[s("li",[t._v("(必填)下载页面的深度，超过指定深度后的页面不再被下载。")]),t._v(" "),s("li",[t._v("输入下载的网址深度为1，这个网址html代码的链接深度为2，深度为2页面的链接深度为3，依次类推。")])]),t._v(" "),s("h2",{attrs:{id:"Most pages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#Most pages"}},[t._v("#")]),t._v(" Most pages")]),t._v(" "),s("ul",[s("li",[t._v("(必填)下载Most pages数量，超过指定页面数量不再被下载。")])]),t._v(" "),s("h2",{attrs:{id:"Page structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#Page structure"}},[t._v("#")]),t._v(" Page structure")]),t._v(" "),s("ul",[s("li",[t._v("指的是html页面保存目录结构。")]),t._v(" "),s("li",[t._v("与原站一致：原站页面保存在A目录，下载后就保存在A目录下。")]),t._v(" "),s("li",[t._v("保存到根目录：所有页面都保存在根目录。")])]),t._v(" "),s("h2",{attrs:{id:"File structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#File structure"}},[t._v("#")]),t._v(" File structure")]),t._v(" "),s("ul",[s("li",[t._v("这里指的是除html页面以外的所有资源文件，例如js、css、image、font、file等。")])]),t._v(" "),s("h2",{attrs:{id:"Change the code to"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#Change the code to"}},[t._v("#")]),t._v(" Change the code to")]),t._v(" "),s("ul",[s("li",[t._v("下载后自动将编码修改为指定的编码。")]),t._v(" "),s("li",[t._v("现在大多数网站采用utf-8编码，少数网站采用gbk编码，我们软件能99.99%正确识别网站编码（包含一站多编码的页面），软件自动删除和修改代码里的编码，包含html代码charset编码css代码charset编码。")])]),t._v(" "),s("h2",{attrs:{id:"Download timeout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#Download timeout"}},[t._v("#")]),t._v(" Download timeout")]),t._v(" "),s("ul",[s("li",[t._v("下载一个请求超时时间，第一次超时软件会重试一次，所以如果一个非常慢的链接，第一次请求失败后再次请求失败，等待时间为设置的2倍。")]),t._v(" "),s("li",[t._v("建议：网站很快可以设置时间短些，以减少等待时间；网站很慢或下载大文件，必须设置超时时间大些，不然这些慢页面和大文件都会下载失败。")]),t._v(" "),s("li",[t._v("软件默认为30秒，这个不是越长越好，也不是越短越好。")])]),t._v(" "),s("h2",{attrs:{id:"Keep off-site links"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#Keep off-site links"}},[t._v("#")]),t._v(" Keep off-site links")]),t._v(" "),s("ul",[s("li",[t._v("勾上时，对失效链接或超过设置深度或超过设置数量的页面，软件采用JavaScript:windown.open('原地址链接')的方式打开原站链接;")]),t._v(" "),s("li",[t._v("这一项一般是不需要勾选的。")])]),t._v(" "),s("h2",{attrs:{id:"Download hyperlink attachment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#Download hyperlink attachment"}},[t._v("#")]),t._v(" Download hyperlink attachment")]),t._v(" "),s("ul",[s("li",[t._v("超链接指向的不是一个页面或图片，而是一个下载附件或压缩包zip/rar，对于这类是否需要下载。")])]),t._v(" "),s("h2",{attrs:{id:"cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" Cookie")]),t._v(" "),s("ul",[s("li",[t._v("一般为登录页面才需要用到，参考网址："),s("a",{attrs:{href:"/news/jiaocheng/cookie-useragent.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("/news/jiaocheng/cookie-useragent.html"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"useragent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#useragent"}},[t._v("#")]),t._v(" UserAgent")]),t._v(" "),s("ul",[s("li",[t._v("服务器使用此值识别用户使用的是电脑端还是手机端。")]),t._v(" "),s("li",[t._v("自定义设置参考上面Cookie链接里的方法打开控制台后可以看到有个叫User-Agent的，就是它，复制值到文本框即可。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);