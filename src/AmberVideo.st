Smalltalk createPackage: 'AmberVideo'!
Object subclass: #AmberVideo
	instanceVariableNames: 'cssId videoElement playAudio'
	package: 'AmberVideo'!

!AmberVideo methodsFor: 'starting'!

autobuffer: aBool

	self videoElement autobuffer: aBool
!

autoplay: aBool

 	self videoElement at: 'autoplay' put: aBool
!

configureForBrowser

	#( 'getUserMedia' 'webkitGetUserMedia' 'mozGetUserMedia' 'msGetUserMedia') 
		do:[:each | 	| getUserMediaBlock |
			(getUserMediaBlock := navigator at: each)	
					ifNotNil:[ navigator at: 'getUserMedia' put: getUserMediaBlock ].
  		].
	
   #( 'URL' 'webkitURL' 'mozURL' 'msURL') 
		do:[:each | 	| urlBlock |
			(urlBlock := window at: each)	
					ifNotNil:[ ^window at: 'URL' put: urlBlock ].
  		].
!

configureVideo
	
  (navigator at: 'getUserMedia') ifNil:[^self]. "you must specify the right method for your browser"
  
   navigator getUserMedia: #{'video' -> true.  'audio' -> self playAudio} success: self videoProcess error: self errorCallback
!

cssId

	^cssId
!

cssId: anId

	cssId := anId
!

errorCallback

	^ [ :sig | self halt ]
!

height: anInt

	self videoElement height: anInt
!

initialize


	super initialize.
	self configureForBrowser.
!

mute

	self videoElement muted: true
!

play

	self videoElement play
!

playAudio

 	^playAudio ifNil:[playAudio:= true]
!

playAudio: aBool

 	playAudio:= aBool
!

poster: aPicURL

	self videoElement poster: aPicURL
!

renderOn: html

	self cssId: 'videoOutput'.

	html  video class: 'view';
						style: 'display:block';
						id: self cssId.
	
	self configureVideo
!

reset

	self setSrcObject: nil
!

showControls: aBool

 	self videoElement at: 'controls' put: aBool
!

src: aStreamOrURL

	| streamObj |

	self videoElement at: 'mozSrcObject' ifPresent:[ ^self videoElement mozSrcObject: aStreamOrURL ]. 
	
	window at: 'URL' ifAbsent:[^self]. "not supported in this browser"
	
	(streamObj :=  window URL: aStreamOrURL ) ifNil:[  ^self videoElement src: aStreamOrURL ].
	
	self videoElement src: streamObj
!

stop

	self videoElement  mozSrcObject stop
!

unmute

	self videoElement muted: false
!

video

	^video ifNil:[video := true].
!

video: aBool

	video := aBool
!

videoElement

	^videoElement ifNil: [ videoElement := document getElementById: self cssId]
!

videoProcess

	^ [ :stream | 
			self src: stream.
			self play
       ]
!

width: anInt

	self videoElement width: anInt
! !

!AmberVideo class methodsFor: 'starting'!

onCssId: anId 

	^self new cssId: anId
!

start

	AmberVideoTest start
! !

