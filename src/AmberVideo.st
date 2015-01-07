Smalltalk createPackage: 'AmberVideo'!
Object subclass: #AmberVideo
	instanceVariableNames: 'cssId videoElement playAudio'
	package: 'AmberVideo'!

!AmberVideo methodsFor: 'starting'!

autobuffer: aBool

	self videoElement autobuffer: aBool
!

autoplay: aBool

	 self videoElement autoplay: aBool
!

configureForBrowser

	"specify the browser specific functionalities for further usage"

	#( 'getUserMedia' 'webkitGetUserMedia' 'mozGetUserMedia' 'msGetUserMedia') 
		do:[:each | 	
			navigator at: each ifPresent:[:block | navigator at: 'getUserMedia' put: block ].
  		].
	
   #( 'URL' 'webkitURL' 'mozURL' 'msURL') 
		do:[:each | 
			window at: each ifPresent:[ :block | block basicAt: 'klass' put: nil asJSON.
																	^window at: 'URL' put: block ].
  		].
!

configureVideo
	
   navigator at: 'getUserMedia' ifAbsent:[^self]. "you must specify the right method for your browser"
  
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

	self videoElement controls: aBool
!

src: aStreamOrURL

	self videoElement at: 'mozSrcObject' ifPresent:[ ^self videoElement mozSrcObject: aStreamOrURL ]. 
	
	(PlatformInterface existsGlobal: 'URL' ) ifFalse: [^self].
	
  	(PlatformInterface globals URL createObjectURL: aStreamOrURL)
            ifNil: [ self videoElement src: aStreamOrURL ]
            ifNotNil: [ :streamObj | self videoElement src: streamObj ]
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

	"AmberSimpleWebCamTest start."
	AmberResizeableWebCamTest start.
! !

