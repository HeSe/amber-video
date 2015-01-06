define("amber-video/AmberVideo", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('AmberVideo');
$core.packages["AmberVideo"].transport = {"type":"amd","amdNamespace":"amber-video"};

$core.addClass('AmberVideo', $globals.Object, ['cssId', 'videoElement', 'playAudio'], 'AmberVideo');
$core.addMethod(
$core.method({
selector: "autoplay:",
protocol: 'starting',
fn: function (aBool){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._videoElement())._at_put_("autoplay",aBool);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"autoplay:",{aBool:aBool},$globals.AmberVideo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBool"],
source: "autoplay: aBool\x0a\x0a \x09self videoElement at: 'autoplay' put: aBool",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "videoElement"]
}),
$globals.AmberVideo);

$core.addMethod(
$core.method({
selector: "configureVideo",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$recv(navigator)._at_("mozGetUserMedia");
if(($receiver = $1) == null || $receiver.isNil){
self._halt();
} else {
$1;
};
$recv(navigator)._mozGetUserMedia_success_error_($globals.HashedCollection._newFromPairs_(["video",true,"audio",self._playAudio()]),self._videoProcess(),self._errorCallback());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"configureVideo",{},$globals.AmberVideo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "configureVideo\x0a\x09\x0a\x09\x0a  (navigator at: 'mozGetUserMedia') ifNil:[self halt].\x0a  \x0a   navigator mozGetUserMedia: #{'video' -> true.  'audio' -> self playAudio} success: self videoProcess error: self errorCallback",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "at:", "halt", "mozGetUserMedia:success:error:", "playAudio", "videoProcess", "errorCallback"]
}),
$globals.AmberVideo);

$core.addMethod(
$core.method({
selector: "cssId",
protocol: 'starting',
fn: function (){
var self=this;
var $1;
$1=self["@cssId"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cssId\x0a\x0a\x09^cssId",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AmberVideo);

$core.addMethod(
$core.method({
selector: "cssId:",
protocol: 'starting',
fn: function (anId){
var self=this;
self["@cssId"]=anId;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anId"],
source: "cssId: anId\x0a\x0a\x09cssId := anId",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AmberVideo);

$core.addMethod(
$core.method({
selector: "errorCallback",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=(function(sig){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._halt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({sig:sig},$ctx1,1)});
//>>excludeEnd("ctx");
});
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"errorCallback",{},$globals.AmberVideo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "errorCallback\x0a\x0a\x09^ [ :sig | self halt ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["halt"]
}),
$globals.AmberVideo);

$core.addMethod(
$core.method({
selector: "mute",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._videoElement())._muted_(true);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mute",{},$globals.AmberVideo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mute\x0a\x0a\x09self videoElement muted: true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["muted:", "videoElement"]
}),
$globals.AmberVideo);

$core.addMethod(
$core.method({
selector: "play",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._videoElement())._play();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"play",{},$globals.AmberVideo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "play\x0a\x0a\x09self videoElement play",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["play", "videoElement"]
}),
$globals.AmberVideo);

$core.addMethod(
$core.method({
selector: "playAudio",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@playAudio"];
if(($receiver = $2) == null || $receiver.isNil){
self["@playAudio"]=true;
$1=self["@playAudio"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"playAudio",{},$globals.AmberVideo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "playAudio\x0a\x0a \x09^playAudio ifNil:[playAudio:= true]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.AmberVideo);

$core.addMethod(
$core.method({
selector: "playAudio:",
protocol: 'starting',
fn: function (aBool){
var self=this;
self["@playAudio"]=aBool;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBool"],
source: "playAudio: aBool\x0a\x0a \x09playAudio:= aBool",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AmberVideo);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'starting',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
self._cssId_("videoOutput");
$1=$recv(html)._video();
$recv($1)._class_("view");
$recv($1)._style_("display:block");
$2=$recv($1)._id_(self._cssId());
self._configureVideo();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.AmberVideo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x0a\x09self cssId: 'videoOutput'.\x0a\x0a\x09html  video class: 'view';\x0a\x09\x09\x09\x09\x09\x09style: 'display:block';\x0a\x09\x09\x09\x09\x09\x09id: self cssId.\x0a\x09\x0a\x09self configureVideo\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["cssId:", "class:", "video", "style:", "id:", "cssId", "configureVideo"]
}),
$globals.AmberVideo);

$core.addMethod(
$core.method({
selector: "reset",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._setSrcObject_(nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reset",{},$globals.AmberVideo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reset\x0a\x0a\x09self setSrcObject: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setSrcObject:"]
}),
$globals.AmberVideo);

$core.addMethod(
$core.method({
selector: "setSrcObject:",
protocol: 'starting',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._videoElement())._mozSrcObject_(aStream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setSrcObject:",{aStream:aStream},$globals.AmberVideo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "setSrcObject: aStream\x0a\x0a\x09self videoElement mozSrcObject: aStream.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["mozSrcObject:", "videoElement"]
}),
$globals.AmberVideo);

$core.addMethod(
$core.method({
selector: "showControls:",
protocol: 'starting',
fn: function (aBool){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._videoElement())._at_put_("controls",aBool);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showControls:",{aBool:aBool},$globals.AmberVideo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBool"],
source: "showControls: aBool\x0a\x0a \x09self videoElement at: 'controls' put: aBool",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "videoElement"]
}),
$globals.AmberVideo);

$core.addMethod(
$core.method({
selector: "stop",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self._videoElement())._mozSrcObject())._stop();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stop",{},$globals.AmberVideo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stop\x0a\x0a\x09self videoElement  mozSrcObject stop",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["stop", "mozSrcObject", "videoElement"]
}),
$globals.AmberVideo);

$core.addMethod(
$core.method({
selector: "unmute",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._videoElement())._muted_(false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unmute",{},$globals.AmberVideo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unmute\x0a\x0a\x09self videoElement muted: false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["muted:", "videoElement"]
}),
$globals.AmberVideo);

$core.addMethod(
$core.method({
selector: "video",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@video"];
if(($receiver = $2) == null || $receiver.isNil){
self["@video"]=true;
$1=self["@video"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"video",{},$globals.AmberVideo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "video\x0a\x0a\x09^video ifNil:[video := true].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.AmberVideo);

$core.addMethod(
$core.method({
selector: "video:",
protocol: 'starting',
fn: function (aBool){
var self=this;
self["@video"]=aBool;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBool"],
source: "video: aBool\x0a\x0a\x09video := aBool",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AmberVideo);

$core.addMethod(
$core.method({
selector: "videoElement",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@videoElement"];
if(($receiver = $2) == null || $receiver.isNil){
self["@videoElement"]=$recv(document)._getElementById_(self._cssId());
$1=self["@videoElement"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"videoElement",{},$globals.AmberVideo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "videoElement\x0a\x0a\x09^videoElement ifNil: [ videoElement := document getElementById: self cssId]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "getElementById:", "cssId"]
}),
$globals.AmberVideo);

$core.addMethod(
$core.method({
selector: "videoProcess",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=(function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._setSrcObject_(stream);
return self._play();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
});
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"videoProcess",{},$globals.AmberVideo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "videoProcess\x0a\x0a\x09^ [ :stream | \x0a\x09\x09\x09self setSrcObject: stream.\x0a\x09\x09\x09self play\x0a       ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setSrcObject:", "play"]
}),
$globals.AmberVideo);


$core.addMethod(
$core.method({
selector: "onCssId:",
protocol: 'starting',
fn: function (anId){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._new())._cssId_(anId);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onCssId:",{anId:anId},$globals.AmberVideo.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anId"],
source: "onCssId: anId \x0a\x0a\x09^self new cssId: anId",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["cssId:", "new"]
}),
$globals.AmberVideo.klass);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
var self=this;
function $AmberVideoTest(){return $globals.AmberVideoTest||(typeof AmberVideoTest=="undefined"?nil:AmberVideoTest)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($AmberVideoTest())._start();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.AmberVideo.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x0a\x09AmberVideoTest start",
referencedClasses: ["AmberVideoTest"],
//>>excludeEnd("ide");
messageSends: ["start"]
}),
$globals.AmberVideo.klass);

});
