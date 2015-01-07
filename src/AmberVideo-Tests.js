define("amber-video/AmberVideo-Tests", ["amber/boot", "amber_core/Web"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('AmberVideo-Tests');
$core.packages["AmberVideo-Tests"].transport = {"type":"amd","amdNamespace":"amber-video"};

$core.addClass('AmberVideoTest', $globals.Widget, ['videoController'], 'AmberVideo-Tests');
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
$recv($2)._showControls_(true);
$recv(self._videoController())._configureVideo();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ensureVideo",{},$globals.AmberVideoTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ensureVideo\x0a\x09self videoController playAudio: false.\x0a\x09self videoController showControls: true.\x0a\x09self videoController configureVideo",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["playAudio:", "videoController", "showControls:", "configureVideo"]
}),
$globals.AmberVideoTest);

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
$globals.AmberVideoTest.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@videoController"]=$recv($AmberVideo())._onCssId_("videoTest");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.AmberVideoTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09videoController := AmberVideo onCssId: 'videoTest'",
referencedClasses: ["AmberVideo"],
//>>excludeEnd("ide");
messageSends: ["initialize", "onCssId:"]
}),
$globals.AmberVideoTest);

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
$1=$recv(html)._video();
$recv($1)._class_("view");
$recv($1)._style_("display:block");
$2=$recv($1)._id_($recv(self._videoController())._cssId());
self._ensureVideo();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.AmberVideoTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x0a\x09html  video class: 'view';\x0a\x09\x09\x09\x09\x09\x09style: 'display:block';\x0a\x09\x09\x09\x09\x09\x09id: self videoController cssId.\x0a\x09\x0a\x09self ensureVideo\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "video", "style:", "id:", "cssId", "videoController", "ensureVideo"]
}),
$globals.AmberVideoTest);

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
$globals.AmberVideoTest);


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
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.AmberVideoTest.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new appendToJQuery: 'body' asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "new", "asJQuery"]
}),
$globals.AmberVideoTest.klass);

});
