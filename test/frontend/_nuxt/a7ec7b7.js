(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{300:function(t,e,o){"use strict";o.r(e);var n={props:{value:String,label:String,options:Array}},d=(o(523),o(7)),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"select-box"},[void 0!==t.label?o("label",{staticClass:"label"},[t._v(" "+t._s(t.label)+" ")]):t._e(),t._v(" "),o("select",{staticClass:"select shadow",domProps:{value:t.value},on:{change:function(e){return t.$emit("input",e.target.value)}}},t._l(t.options,(function(option,e){return o("option",{key:e,domProps:{value:option.value}},[t._v(" "+t._s(option.name)+" ")])})),0)])}),[],!1,null,"541cffe5",null);e.default=component.exports},305:function(t,e,o){"use strict";o.r(e);o(32);var n=o(3),d=o(28),r=o(525),l=o.n(r),c={props:{headings:{type:Array,default:function(){return[]}},list:{type:Array,default:function(){return[{}]}},custom_css:{type:String,default:""},model:{type:String,default:""}},data:function(){return{selected:null,loading:!1}},computed:{columns:function(){for(var t=this.headings.length,e="auto",i=1;i<t;)e+=" auto",i++;return e}},methods:{optimizeValue:function(t){return console.log(Object(d.a)(t)),"boolean"==typeof t?t?"Active":"Inactive":t},isSelected:function(t){return this.selected===t},select:function(t,e){var o=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o.selected=e,o.loading=!0,n.next=4,o.$fetchDocument(o.model,t._id);case 4:if(d=n.sent,o.loading=!1,d.fetched){n.next=8;break}return n.abrupt("return");case 8:o.$emit("documentFetched",d.doc);case 9:case"end":return n.stop()}}),n)})))()},setClasses:function(t,e){var o=[],n=this.headings[t],d=l()(n,{lower:!0});return o.push(d),o},adjustItem:function(){return""!==this.custom_css?{"grid-template-columns":this.custom_css}:{"grid-template-columns":this.columns}}}},f=(o(526),o(7)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"list"},[o("div",{staticClass:"item shadow heading",style:t.adjustItem()},t._l(t.headings,(function(e,n){return o("span",{key:n},[t._v(" "+t._s(e)+" ")])})),0),t._v(" "),t._l(t.list,(function(e,n){return o("div",{key:n,staticClass:"item shadow",class:{selected:t.isSelected(n)},style:t.adjustItem(),on:{click:function(o){return t.select(e,n)}}},t._l(Object.values(e),(function(e,n){return o("span",{key:n,class:t.setClasses(n,e)},[t._v(" "+t._s(t.optimizeValue(e))+" ")])})),0)}))],2)}),[],!1,null,"67d2d64c",null);e.default=component.exports},306:function(t,e,o){"use strict";o.r(e);var n={props:{label:String,value:String,placeholder:{type:String,default:""},type:{type:String,default:"text"},disabled:{type:Boolean,default:!1}}},d=(o(530),o(7)),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"input-box"},[o("label",{staticClass:"label"},[t._v(" "+t._s(t.label)+" ")]),t._v(" "),o("input",{staticClass:"input-box",attrs:{type:t.type,placeholder:t.placeholder,disabled:t.disabled},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])}),[],!1,null,"3951c99b",null);e.default=component.exports},307:function(t,e,o){"use strict";o.r(e);var n={props:{label:String,value:Boolean,activeText:{type:String,default:"Active"},inactiveText:{type:String,default:"Inactive"},disabled:{type:Boolean,default:!1}},data:function(){return{toggleOn:!1}},methods:{toggleState:function(){this.toggleOn=!this.value,this.$emit("input",this.toggleOn)}}},d=(o(534),o(7)),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"input-box"},[o("label",{staticClass:"label"},[t._v(" "+t._s(t.label)+" ")]),t._v(" "),o("div",{staticClass:"switch-box center",class:{on:t.value},on:{click:t.toggleState}},[o("div",{staticClass:"toggle center",class:{on:t.value}},[o("div",{staticClass:"circle"})]),t._v(" "),o("span",{class:{on:t.value}},[t._v(" "+t._s(t.value?t.activeText:t.inactiveText)+" ")])])])}),[],!1,null,"98efa804",null);e.default=component.exports},386:function(t,e,o){var content=o(524);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("2190a411",content,!0,{sourceMap:!1})},387:function(t,e,o){var content=o(527);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("244e6a3a",content,!0,{sourceMap:!1})},389:function(t,e,o){var content=o(531);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("3c0a5fb9",content,!0,{sourceMap:!1})},391:function(t,e,o){var content=o(535);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("11979325",content,!0,{sourceMap:!1})},523:function(t,e,o){"use strict";o(386)},524:function(t,e,o){var n=o(19),d=o(39),r=o(40),l=o(41),c=o(42),f=o(43),m=o(44),v=o(45);e=n(!1);var h=d(r),x=d(l),y=d(c),w=d(f),k=d(m),S=d(v);e.push([t.i,'@font-face{font-family:"SF-Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+h+') format("truetype")}@font-face{font-family:"SF-Pro SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+x+') format("truetype")}@font-face{font-family:"SF-Pro Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+y+') format("truetype")}@font-face{font-family:"Poppins";font-style:normal;font-weight:400;font-display:swap;src:url('+w+') format("truetype")}@font-face{font-family:"Poppins SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+k+') format("truetype")}@font-face{font-family:"Poppins Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+S+') format("truetype")}body[data-v-541cffe5]{margin:0!important;padding:0}*[data-v-541cffe5]{font-family:"Poppins";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-541cffe5]{padding:6%}button[data-v-541cffe5]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-541cffe5]{width:7%}button.action[data-v-541cffe5]{background-color:#333;color:#fff;font-family:"Poppins SemiBold";font-size:16px;text-transform:uppercase}@media (max-width:768px){button.action[data-v-541cffe5]{padding:2% 5%;width:100%}}button.action.delete[data-v-541cffe5]{background-color:#9d2424;font-size:10px}button.clear[data-v-541cffe5]{background:transparent;padding:2% 5%}h1[data-v-541cffe5],h2[data-v-541cffe5],h3[data-v-541cffe5],h4[data-v-541cffe5],h5[data-v-541cffe5],h6[data-v-541cffe5],p[data-v-541cffe5],span[data-v-541cffe5]{margin:0;padding:0;color:#333}.page[data-v-541cffe5]{padding:5%;margin-top:8vh}@media (max-width:768px){.page[data-v-541cffe5]{padding:7%;margin-top:10vh}}.page.-wh[data-v-541cffe5]{padding:0 0 5%}.page .page-header[data-v-541cffe5]{width:100%;height:8vh;margin-bottom:20px}@media (max-width:768px){.page .page-header[data-v-541cffe5]{height:10vw}}.page .page-header .title[data-v-541cffe5]{color:#333;font-family:"SF-Pro SemiBold";text-transform:uppercase;font-size:1.4vw}@media (max-width:768px){.page .page-header .title[data-v-541cffe5]{font-size:5.4vw}}.page .side-pad[data-v-541cffe5]{padding:0 5%}@media (max-width:768px){.page .side-pad[data-v-541cffe5]{padding:0 10%}}.center[data-v-541cffe5],.center-col[data-v-541cffe5]{display:flex;justify-content:center;align-items:center}.center-col[data-v-541cffe5]{flex-direction:column}.center-space[data-v-541cffe5]{display:flex;justify-content:space-around;align-items:center}.white[data-v-541cffe5]{color:#fff}.scrollable-list[data-v-541cffe5]{display:flex;overflow-x:auto;padding:10px}@media screen and (min-width:768px){.scrollable-list[data-v-541cffe5]{justify-content:center}}.scrollable-list[data-v-541cffe5]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-541cffe5]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-541cffe5]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-541cffe5]{margin-top:10px;width:50px}[data-v-541cffe5]::-webkit-scrollbar{display:none}.form-container[data-v-541cffe5]{display:flex;flex-direction:column;box-sizing:border-box;padding:2%;width:100%}.select-box[data-v-541cffe5]{display:flex;justify-content:space-between;align-items:center}.select-box .label[data-v-541cffe5]{font-family:"SF-Pro Bold";color:#7f7f7f;text-transform:uppercase;font-size:10px;padding:1%;margin-left:5px;font-weight:900}.select-box select[data-v-541cffe5]{background:#fff;border:none;border-radius:5px;padding:10px 15px;margin:3px;font-size:11px;color:#464646}',""]),t.exports=e},525:function(t,e,o){var n;n=function(){var t=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\"","”":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}'),e=JSON.parse('{"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"vi":{"Đ":"D","đ":"d"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"}}');function o(o,n){if("string"!=typeof o)throw new Error("slugify: string argument expected");var d=e[(n="string"==typeof n?{replacement:n}:n||{}).locale]||{},r=void 0===n.replacement?"-":n.replacement,l=o.split("").reduce((function(e,o){return e+(d[o]||t[o]||o).replace(n.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"").trim().replace(new RegExp("[\\s"+r+"]+","g"),r);return n.lower&&(l=l.toLowerCase()),n.strict&&(l=l.replace(new RegExp("[^a-zA-Z0-9"+r+"]","g"),"").replace(new RegExp("[\\s"+r+"]+","g"),r)),l}return o.extend=function(e){for(var o in e)t[o]=e[o]},o},t.exports=n(),t.exports.default=n()},526:function(t,e,o){"use strict";o(387)},527:function(t,e,o){var n=o(19),d=o(39),r=o(40),l=o(41),c=o(42),f=o(43),m=o(44),v=o(45);e=n(!1);var h=d(r),x=d(l),y=d(c),w=d(f),k=d(m),S=d(v);e.push([t.i,'@font-face{font-family:"SF-Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+h+') format("truetype")}@font-face{font-family:"SF-Pro SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+x+') format("truetype")}@font-face{font-family:"SF-Pro Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+y+') format("truetype")}@font-face{font-family:"Poppins";font-style:normal;font-weight:400;font-display:swap;src:url('+w+') format("truetype")}@font-face{font-family:"Poppins SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+k+') format("truetype")}@font-face{font-family:"Poppins Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+S+') format("truetype")}body[data-v-67d2d64c]{margin:0!important;padding:0}*[data-v-67d2d64c]{font-family:"Poppins";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-67d2d64c]{padding:6%}button[data-v-67d2d64c]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-67d2d64c]{width:7%}button.action[data-v-67d2d64c]{background-color:#333;color:#fff;font-family:"Poppins SemiBold";font-size:16px;text-transform:uppercase}@media (max-width:768px){button.action[data-v-67d2d64c]{padding:2% 5%;width:100%}}button.action.delete[data-v-67d2d64c]{background-color:#9d2424;font-size:10px}button.clear[data-v-67d2d64c]{background:transparent;padding:2% 5%}h1[data-v-67d2d64c],h2[data-v-67d2d64c],h3[data-v-67d2d64c],h4[data-v-67d2d64c],h5[data-v-67d2d64c],h6[data-v-67d2d64c],p[data-v-67d2d64c],span[data-v-67d2d64c]{margin:0;padding:0;color:#333}.page[data-v-67d2d64c]{padding:5%;margin-top:8vh}@media (max-width:768px){.page[data-v-67d2d64c]{padding:7%;margin-top:10vh}}.page.-wh[data-v-67d2d64c]{padding:0 0 5%}.page .page-header[data-v-67d2d64c]{width:100%;height:8vh;margin-bottom:20px}@media (max-width:768px){.page .page-header[data-v-67d2d64c]{height:10vw}}.page .page-header .title[data-v-67d2d64c]{color:#333;font-family:"SF-Pro SemiBold";text-transform:uppercase;font-size:1.4vw}@media (max-width:768px){.page .page-header .title[data-v-67d2d64c]{font-size:5.4vw}}.page .side-pad[data-v-67d2d64c]{padding:0 5%}@media (max-width:768px){.page .side-pad[data-v-67d2d64c]{padding:0 10%}}.center[data-v-67d2d64c],.center-col[data-v-67d2d64c]{display:flex;justify-content:center;align-items:center}.center-col[data-v-67d2d64c]{flex-direction:column}.center-space[data-v-67d2d64c]{display:flex;justify-content:space-around;align-items:center}.white[data-v-67d2d64c]{color:#fff}.scrollable-list[data-v-67d2d64c]{display:flex;overflow-x:auto;padding:10px}@media screen and (min-width:768px){.scrollable-list[data-v-67d2d64c]{justify-content:center}}.scrollable-list[data-v-67d2d64c]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-67d2d64c]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-67d2d64c]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-67d2d64c]{margin-top:10px;width:50px}[data-v-67d2d64c]::-webkit-scrollbar{display:none}.item[data-v-67d2d64c]{margin:10px 0;display:grid;transition:all .3s ease-in-out;cursor:pointer}.item.selected[data-v-67d2d64c]{background-color:#23945c!important}.item.selected span[data-v-67d2d64c]{color:#fff}.item.heading[data-v-67d2d64c]{background-color:#492727}.item.heading span[data-v-67d2d64c]{color:#efefef;font-weight:900;font-family:"Poppins";text-transform:uppercase}.item.heading[data-v-67d2d64c]:hover{background-color:#492727;transform:translateX(0)}.item[data-v-67d2d64c]:hover{background-color:#606060;transform:translateX(4px)}.item:hover span[data-v-67d2d64c]{color:#fff}.item span[data-v-67d2d64c]{transition:all .3s ease-in-out;border-right:1px solid #cbcbcb;overflow:hidden;font-size:13px;padding:5px;font-family:"SF-Pro"}.item span._id[data-v-67d2d64c]{font-size:8px;word-wrap:break-word}.item span.status[data-v-67d2d64c]{border-right:none}.item span.status.live[data-v-67d2d64c]{background-color:green}.item span.status.not-live[data-v-67d2d64c]{background-color:#9a3808}',""]),t.exports=e},530:function(t,e,o){"use strict";o(389)},531:function(t,e,o){var n=o(19),d=o(39),r=o(40),l=o(41),c=o(42),f=o(43),m=o(44),v=o(45);e=n(!1);var h=d(r),x=d(l),y=d(c),w=d(f),k=d(m),S=d(v);e.push([t.i,'@font-face{font-family:"SF-Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+h+') format("truetype")}@font-face{font-family:"SF-Pro SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+x+') format("truetype")}@font-face{font-family:"SF-Pro Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+y+') format("truetype")}@font-face{font-family:"Poppins";font-style:normal;font-weight:400;font-display:swap;src:url('+w+') format("truetype")}@font-face{font-family:"Poppins SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+k+') format("truetype")}@font-face{font-family:"Poppins Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+S+') format("truetype")}body[data-v-3951c99b]{margin:0!important;padding:0}*[data-v-3951c99b]{font-family:"Poppins";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-3951c99b]{padding:6%}button[data-v-3951c99b]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-3951c99b]{width:7%}button.action[data-v-3951c99b]{background-color:#333;color:#fff;font-family:"Poppins SemiBold";font-size:16px;text-transform:uppercase}@media (max-width:768px){button.action[data-v-3951c99b]{padding:2% 5%;width:100%}}button.action.delete[data-v-3951c99b]{background-color:#9d2424;font-size:10px}button.clear[data-v-3951c99b]{background:transparent;padding:2% 5%}h1[data-v-3951c99b],h2[data-v-3951c99b],h3[data-v-3951c99b],h4[data-v-3951c99b],h5[data-v-3951c99b],h6[data-v-3951c99b],p[data-v-3951c99b],span[data-v-3951c99b]{margin:0;padding:0;color:#333}.page[data-v-3951c99b]{padding:5%;margin-top:8vh}@media (max-width:768px){.page[data-v-3951c99b]{padding:7%;margin-top:10vh}}.page.-wh[data-v-3951c99b]{padding:0 0 5%}.page .page-header[data-v-3951c99b]{width:100%;height:8vh;margin-bottom:20px}@media (max-width:768px){.page .page-header[data-v-3951c99b]{height:10vw}}.page .page-header .title[data-v-3951c99b]{color:#333;font-family:"SF-Pro SemiBold";text-transform:uppercase;font-size:1.4vw}@media (max-width:768px){.page .page-header .title[data-v-3951c99b]{font-size:5.4vw}}.page .side-pad[data-v-3951c99b]{padding:0 5%}@media (max-width:768px){.page .side-pad[data-v-3951c99b]{padding:0 10%}}.center[data-v-3951c99b],.center-col[data-v-3951c99b]{display:flex;justify-content:center;align-items:center}.center-col[data-v-3951c99b]{flex-direction:column}.center-space[data-v-3951c99b]{display:flex;justify-content:space-around;align-items:center}.white[data-v-3951c99b]{color:#fff}.scrollable-list[data-v-3951c99b]{display:flex;overflow-x:auto;padding:10px}@media screen and (min-width:768px){.scrollable-list[data-v-3951c99b]{justify-content:center}}.scrollable-list[data-v-3951c99b]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-3951c99b]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-3951c99b]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-3951c99b]{margin-top:10px;width:50px}[data-v-3951c99b]::-webkit-scrollbar{display:none}.input-box[data-v-3951c99b]{display:flex;flex-direction:column;box-sizing:border-box;padding:2%;width:100%}.input-box .label[data-v-3951c99b]{font-family:"SF-Pro Bold";color:#7f7f7f;text-transform:uppercase;font-size:9px;padding:2%;margin-left:5px;font-weight:900}.input-box .input-box[data-v-3951c99b]{padding:10px;border:none;-webkit-appearance:none;box-shadow:0 2px 10px rgba(0,0,0,.16);color:#7f7f7f;font-family:"SF-Pro";font-size:11px;letter-spacing:.5px}.input-box .input-box[data-v-3951c99b]::-moz-placeholder{font-size:11px;opacity:.6}.input-box .input-box[data-v-3951c99b]:-ms-input-placeholder{font-size:11px;opacity:.6}.input-box .input-box[data-v-3951c99b]::placeholder{font-size:11px;opacity:.6}',""]),t.exports=e},534:function(t,e,o){"use strict";o(391)},535:function(t,e,o){var n=o(19),d=o(39),r=o(40),l=o(41),c=o(42),f=o(43),m=o(44),v=o(45);e=n(!1);var h=d(r),x=d(l),y=d(c),w=d(f),k=d(m),S=d(v);e.push([t.i,'@font-face{font-family:"SF-Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+h+') format("truetype")}@font-face{font-family:"SF-Pro SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+x+') format("truetype")}@font-face{font-family:"SF-Pro Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+y+') format("truetype")}@font-face{font-family:"Poppins";font-style:normal;font-weight:400;font-display:swap;src:url('+w+') format("truetype")}@font-face{font-family:"Poppins SemiBold";font-style:normal;font-weight:700;font-display:swap;src:url('+k+') format("truetype")}@font-face{font-family:"Poppins Bold";font-style:normal;font-weight:900;font-display:swap;src:url('+S+') format("truetype")}body[data-v-98efa804]{margin:0!important;padding:0}*[data-v-98efa804]{font-family:"Poppins";outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}.pad-10[data-v-98efa804]{padding:6%}button[data-v-98efa804]{cursor:pointer;border:none;padding:1% 3%}button .icon[data-v-98efa804]{width:7%}button.action[data-v-98efa804]{background-color:#333;color:#fff;font-family:"Poppins SemiBold";font-size:16px;text-transform:uppercase}@media (max-width:768px){button.action[data-v-98efa804]{padding:2% 5%;width:100%}}button.action.delete[data-v-98efa804]{background-color:#9d2424;font-size:10px}button.clear[data-v-98efa804]{background:transparent;padding:2% 5%}h1[data-v-98efa804],h2[data-v-98efa804],h3[data-v-98efa804],h4[data-v-98efa804],h5[data-v-98efa804],h6[data-v-98efa804],p[data-v-98efa804],span[data-v-98efa804]{margin:0;padding:0;color:#333}.page[data-v-98efa804]{padding:5%;margin-top:8vh}@media (max-width:768px){.page[data-v-98efa804]{padding:7%;margin-top:10vh}}.page.-wh[data-v-98efa804]{padding:0 0 5%}.page .page-header[data-v-98efa804]{width:100%;height:8vh;margin-bottom:20px}@media (max-width:768px){.page .page-header[data-v-98efa804]{height:10vw}}.page .page-header .title[data-v-98efa804]{color:#333;font-family:"SF-Pro SemiBold";text-transform:uppercase;font-size:1.4vw}@media (max-width:768px){.page .page-header .title[data-v-98efa804]{font-size:5.4vw}}.page .side-pad[data-v-98efa804]{padding:0 5%}@media (max-width:768px){.page .side-pad[data-v-98efa804]{padding:0 10%}}.center[data-v-98efa804],.center-col[data-v-98efa804]{display:flex;justify-content:center;align-items:center}.center-col[data-v-98efa804]{flex-direction:column}.center-space[data-v-98efa804]{display:flex;justify-content:space-around;align-items:center}.white[data-v-98efa804]{color:#fff}.scrollable-list[data-v-98efa804]{display:flex;overflow-x:auto;padding:10px}@media screen and (min-width:768px){.scrollable-list[data-v-98efa804]{justify-content:center}}.scrollable-list[data-v-98efa804]::-webkit-scrollbar{display:none}.scrollable-list .list[data-v-98efa804]{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.shadow[data-v-98efa804]{box-shadow:1px 1px 15px rgba(0,0,0,.16)}.action-complete[data-v-98efa804]{margin-top:10px;width:50px}[data-v-98efa804]::-webkit-scrollbar{display:none}.input-box[data-v-98efa804]{display:flex;justify-content:flex-start;align-items:center;box-sizing:border-box;padding:2%;width:100%}.input-box .switch-box[data-v-98efa804]{box-shadow:1px 1px 15px rgba(0,0,0,.16);display:flex;transition:all .3s ease-in-out;position:relative;background:#be4f4f;border-radius:3px;width:120px;cursor:pointer;padding:5px}.input-box .switch-box.on[data-v-98efa804]{background:#41a641;transform:translateZ(10px)}.input-box .switch-box .toggle[data-v-98efa804]{position:absolute;top:0;left:0;width:22%;height:100%;transition:all .15s ease-in-out}.input-box .switch-box .toggle .circle[data-v-98efa804]{background:#fff;width:12px;height:12px}.input-box .switch-box .toggle.on[data-v-98efa804]{left:78%}.input-box .switch-box .toggle.on .circle[data-v-98efa804]{background:#fff;width:13px;height:13px;border-radius:50%}.input-box .switch-box span[data-v-98efa804]{color:#fff;font-size:13px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:all .15s ease-in-out;margin-left:15px}.input-box .switch-box span.on[data-v-98efa804]{margin-right:25px}',""]),t.exports=e}}]);