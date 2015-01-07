define("amber-video/AmberVideo-Tests", ["amber/boot", "amber_core/Web"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('AmberVideo-Tests');
$core.packages["AmberVideo-Tests"].transport = {"type":"amd","amdNamespace":"amber-video"};

$core.addClass('AmberResizeableWebCamTest', $globals.Widget, ['videoController'], 'AmberVideo-Tests');
$core.addMethod(
$core.method({
selector: "ensureVideo",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=self._videoController();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["videoController"]=1;
//>>excludeEnd("ctx");
$recv($1)._playAudio_(false);
$2=self._videoController();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["videoController"]=2;
//>>excludeEnd("ctx");
$recv($2)._showControls_(false);
$3=self._videoController();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["videoController"]=3;
//>>excludeEnd("ctx");
$recv($3)._width_((320));
$4=self._videoController();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["videoController"]=4;
//>>excludeEnd("ctx");
$recv($4)._height_((240));
$recv(self._videoController())._configureVideo();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ensureVideo",{},$globals.AmberResizeableWebCamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ensureVideo\x0a\x09self videoController playAudio: false.\x0a\x09self videoController showControls: false.\x0a\x09self videoController width: 320.\x0a\x09self videoController height: 240.\x0a\x09self videoController configureVideo.\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["playAudio:", "videoController", "showControls:", "width:", "height:", "configureVideo"]
}),
$globals.AmberResizeableWebCamTest);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $AmberVideo(){return $globals.AmberVideo||(typeof AmberVideo=="undefined"?nil:AmberVideo)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.AmberResizeableWebCamTest.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@videoController"]=$recv($AmberVideo())._onCssId_("videoTest");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.AmberResizeableWebCamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09videoController := AmberVideo onCssId: 'videoTest'",
referencedClasses: ["AmberVideo"],
//>>excludeEnd("ide");
messageSends: ["initialize", "onCssId:"]
}),
$globals.AmberResizeableWebCamTest);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._class_("wrapper");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._renderSliderOn_(html);
$recv(html)._br();
return $recv($recv(html)._video())._id_($recv(self._videoController())._cssId());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._ensureVideo();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.AmberResizeableWebCamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x0a html div class: 'wrapper';\x0a \x09with:[ \x0a\x09\x09self renderSliderOn: html.\x0a\x09\x09html br.\x0a\x09\x09html  video id: self videoController cssId.\x0a\x09\x09\x0a\x09].\x0a\x0a\x09self ensureVideo\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "renderSliderOn:", "br", "id:", "video", "cssId", "videoController", "ensureVideo"]
}),
$globals.AmberResizeableWebCamTest);

$core.addMethod(
$core.method({
selector: "renderSliderOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._input();
$recv($1)._type_("range");
$recv($1)._at_put_("min","100");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("max","500");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($1)._at_put_("step","50");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv($1)._id_("videoSizeSlider");
$recv($1)._at_put_("value","0");
$2=$recv($1)._onChange_((function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._videoController())._width_($recv("#videoSizeSlider"._asJQuery())._val());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSliderOn:",{html:html},$globals.AmberResizeableWebCamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSliderOn: html\x0a\x0a\x09html input \x0a\x09\x09type: 'range'; \x0a\x09\x09at: 'min' put: '100'; \x0a\x09\x09at: 'max' put: '500'; \x0a\x09\x09at: 'step' put:'50'; \x0a\x09\x09id: 'videoSizeSlider'; \x0a\x09\x09at: 'value' put:'0'; \x0a\x09\x09onChange: [:event | self videoController width: '#videoSizeSlider' asJQuery val] ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["type:", "input", "at:put:", "id:", "onChange:", "width:", "videoController", "val", "asJQuery"]
}),
$globals.AmberResizeableWebCamTest);

$core.addMethod(
$core.method({
selector: "videoController",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@videoController"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "videoController\x0a\x0a\x09^videoController",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AmberResizeableWebCamTest);


$core.addMethod(
$core.method({
selector: "start",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._appendToJQuery_("body"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.AmberResizeableWebCamTest.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new appendToJQuery: 'body' asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "new", "asJQuery"]
}),
$globals.AmberResizeableWebCamTest.klass);


$core.addClass('AmberSimpleWebCamTest', $globals.Widget, ['videoController'], 'AmberVideo-Tests');
$core.addMethod(
$core.method({
selector: "ensureVideo",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=self._videoController();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["videoController"]=1;
//>>excludeEnd("ctx");
$recv($1)._playAudio_(false);
$2=self._videoController();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["videoController"]=2;
//>>excludeEnd("ctx");
$recv($2)._showControls_(false);
$recv(self._videoController())._configureVideo();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ensureVideo",{},$globals.AmberSimpleWebCamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ensureVideo\x0a\x09self videoController playAudio: false.\x0a\x09self videoController showControls: false.\x0a\x09self videoController configureVideo.\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["playAudio:", "videoController", "showControls:", "configureVideo"]
}),
$globals.AmberSimpleWebCamTest);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $AmberVideo(){return $globals.AmberVideo||(typeof AmberVideo=="undefined"?nil:AmberVideo)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.AmberSimpleWebCamTest.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@videoController"]=$recv($AmberVideo())._onCssId_("videoTest");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.AmberSimpleWebCamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09videoController := AmberVideo onCssId: 'videoTest'",
referencedClasses: ["AmberVideo"],
//>>excludeEnd("ide");
messageSends: ["initialize", "onCssId:"]
}),
$globals.AmberSimpleWebCamTest);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("wrapper");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($1)._style_("width: 800px; height: 800px;");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["style:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._div();
$recv($3)._class_("videocontent");
$recv($3)._style_("width: 30%; max-width: 640px;");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(html)._video())._id_($recv(self._videoController())._cssId());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
self._ensureVideo();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.AmberSimpleWebCamTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x0a html div class: 'wrapper'; style:'width: 800px; height: 800px;'; \x0a \x09with:[\x0a\x09\x09html div class:'videocontent'; style:'width: 30%; max-width: 640px;';\x0a\x09\x09\x09with:[\x0a\x09\x09\x09\x09html  video id: self videoController cssId.\x0a\x09\x09\x09].\x09\x0a\x09].\x0a\x09\x0a\x09self ensureVideo\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "style:", "with:", "id:", "video", "cssId", "videoController", "ensureVideo"]
}),
$globals.AmberSimpleWebCamTest);

$core.addMethod(
$core.method({
selector: "videoController",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@videoController"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "videoController\x0a\x0a\x09^videoController",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AmberSimpleWebCamTest);


$core.addMethod(
$core.method({
selector: "start",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._appendToJQuery_("body"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.AmberSimpleWebCamTest.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new appendToJQuery: 'body' asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "new", "asJQuery"]
}),
$globals.AmberSimpleWebCamTest.klass);

});
