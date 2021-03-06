define("amber-video/AmberVideo", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('AmberVideo');
$core.packages["AmberVideo"].transport = {"type":"amd","amdNamespace":"amber-video"};

$core.addClass('AmberVideo', $globals.Object, ['cssId', 'videoElement', 'playAudio'], 'AmberVideo');
$core.addMethod(
$core.method({
selector: "autobuffer:",
protocol: 'starting',
fn: function (aBool){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._videoElement())._autobuffer_(aBool);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"autobuffer:",{aBool:aBool},$globals.AmberVideo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBool"],
source: "autobuffer: aBool\x0a\x0a\x09self videoElement autobuffer: aBool",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["autobuffer:", "videoElement"]
}),
$globals.AmberVideo);

$core.addMethod(
$core.method({
selector: "autoplay:",
protocol: 'starting',
fn: function (aBool){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._videoElement())._autoplay_(aBool);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"autoplay:",{aBool:aBool},$globals.AmberVideo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBool"],
source: "autoplay: aBool\x0a\x0a\x09 self videoElement autoplay: aBool",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["autoplay:", "videoElement"]
}),
$globals.AmberVideo);

$core.addMethod(
$core.method({
selector: "configureForBrowser",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
["getUserMedia", "webkitGetUserMedia", "mozGetUserMedia", "msGetUserMedia"]._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(navigator)._at_ifPresent_(each,(function(block){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(navigator)._at_put_("getUserMedia",block);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({block:block},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:ifPresent:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
["URL", "webkitURL", "mozURL", "msURL"]._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(window)._at_ifPresent_(each,(function(block){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(block)._basicAt_put_("klass",nil._asJSON());
$1=$recv(window)._at_put_("URL",block);
throw $early=[$1];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({block:block},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"configureForBrowser",{},$globals.AmberVideo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "configureForBrowser\x0a\x0a\x09\x22specify the browser specific functionalities for further usage\x22\x0a\x0a\x09#( 'getUserMedia' 'webkitGetUserMedia' 'mozGetUserMedia' 'msGetUserMedia') \x0a\x09\x09do:[:each | \x09\x0a\x09\x09\x09navigator at: each ifPresent:[:block | navigator at: 'getUserMedia' put: block ].\x0a  \x09\x09].\x0a\x09\x0a   #( 'URL' 'webkitURL' 'mozURL' 'msURL') \x0a\x09\x09do:[:each | \x0a\x09\x09\x09window at: each ifPresent:[ :block | block basicAt: 'klass' put: nil asJSON.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09^window at: 'URL' put: block ].\x0a  \x09\x09].\x0a\x09\x0a  ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "at:ifPresent:", "at:put:", "basicAt:put:", "asJSON"]
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
var $early={};
try {
$recv(navigator)._at_ifAbsent_("getUserMedia",(function(){
throw $early=[self];

}));
$recv(navigator)._getUserMedia_success_error_($globals.HashedCollection._newFromPairs_(["video",true,"audio",self._playAudio()]),self._videoProcess(),self._errorCallback());
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"configureVideo",{},$globals.AmberVideo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "configureVideo\x0a\x09\x0a   navigator at: 'getUserMedia' ifAbsent:[^self]. \x22you must specify the right method for your browser\x22\x0a  \x0a   navigator getUserMedia: #{'video' -> true.  'audio' -> self playAudio} success: self videoProcess error: self errorCallback",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "getUserMedia:success:error:", "playAudio", "videoProcess", "errorCallback"]
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
selector: "height:",
protocol: 'starting',
fn: function (anInt){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._videoElement())._height_(anInt);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"height:",{anInt:anInt},$globals.AmberVideo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInt"],
source: "height: anInt\x0a\x0a\x09self videoElement height: anInt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["height:", "videoElement"]
}),
$globals.AmberVideo);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.AmberVideo.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._configureForBrowser();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.AmberVideo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x0a\x09super initialize.\x0a\x09self configureForBrowser.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "configureForBrowser"]
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
selector: "poster:",
protocol: 'starting',
fn: function (aPicURL){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._videoElement())._poster_(aPicURL);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"poster:",{aPicURL:aPicURL},$globals.AmberVideo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPicURL"],
source: "poster: aPicURL\x0a\x0a\x09self videoElement poster: aPicURL",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["poster:", "videoElement"]
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
selector: "showControls:",
protocol: 'starting',
fn: function (aBool){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._videoElement())._controls_(aBool);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showControls:",{aBool:aBool},$globals.AmberVideo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBool"],
source: "showControls: aBool\x0a\x0a\x09self videoElement controls: aBool",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["controls:", "videoElement"]
}),
$globals.AmberVideo);

$core.addMethod(
$core.method({
selector: "src:",
protocol: 'starting',
fn: function (aStreamOrURL){
var self=this;
function $PlatformInterface(){return $globals.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$5,$6,$receiver;
var $early={};
try {
$1=self._videoElement();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["videoElement"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_ifPresent_("mozSrcObject",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=self._videoElement();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["videoElement"]=2;
//>>excludeEnd("ctx");
$2=$recv($3)._mozSrcObject_(aStreamOrURL);
throw $early=[$2];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$4=$recv($PlatformInterface())._existsGlobal_("URL");
if(!$core.assert($4)){
return self;
};
$5=$recv($recv($recv($PlatformInterface())._globals())._URL())._createObjectURL_(aStreamOrURL);
if(($receiver = $5) == null || $receiver.isNil){
$6=self._videoElement();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["videoElement"]=3;
//>>excludeEnd("ctx");
$recv($6)._src_(aStreamOrURL);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["src:"]=1;
//>>excludeEnd("ctx");
} else {
var streamObj;
streamObj=$receiver;
$recv(self._videoElement())._src_(streamObj);
};
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"src:",{aStreamOrURL:aStreamOrURL},$globals.AmberVideo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStreamOrURL"],
source: "src: aStreamOrURL\x0a\x0a\x09self videoElement at: 'mozSrcObject' ifPresent:[ ^self videoElement mozSrcObject: aStreamOrURL ]. \x0a\x09\x0a\x09(PlatformInterface existsGlobal: 'URL' ) ifFalse: [^self].\x0a\x09\x0a  \x09(PlatformInterface globals URL createObjectURL: aStreamOrURL)\x0a            ifNil: [ self videoElement src: aStreamOrURL ]\x0a            ifNotNil: [ :streamObj | self videoElement src: streamObj ]\x0a\x09",
referencedClasses: ["PlatformInterface"],
//>>excludeEnd("ide");
messageSends: ["at:ifPresent:", "videoElement", "mozSrcObject:", "ifFalse:", "existsGlobal:", "ifNil:ifNotNil:", "createObjectURL:", "URL", "globals", "src:"]
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
self._src_(stream);
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
source: "videoProcess\x0a\x0a\x09^ [ :stream | \x0a\x09\x09\x09self src: stream.\x0a\x09\x09\x09self play\x0a       ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["src:", "play"]
}),
$globals.AmberVideo);

$core.addMethod(
$core.method({
selector: "width:",
protocol: 'starting',
fn: function (anInt){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._videoElement())._width_(anInt);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"width:",{anInt:anInt},$globals.AmberVideo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInt"],
source: "width: anInt\x0a\x0a\x09self videoElement width: anInt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width:", "videoElement"]
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
function $AmberResizeableWebCamTest(){return $globals.AmberResizeableWebCamTest||(typeof AmberResizeableWebCamTest=="undefined"?nil:AmberResizeableWebCamTest)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($AmberResizeableWebCamTest())._start();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.AmberVideo.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x0a\x09\x22AmberSimpleWebCamTest start.\x22\x0a\x09AmberResizeableWebCamTest start.",
referencedClasses: ["AmberResizeableWebCamTest"],
//>>excludeEnd("ide");
messageSends: ["start"]
}),
$globals.AmberVideo.klass);

});
