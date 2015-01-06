Smalltalk createPackage: 'AmberVideo'!
Object subclass: #AmberVideo
	instanceVariableNames: 'cssId videoElement playAudio'
	package: 'AmberVideo'!

!AmberVideo methodsFor: 'starting'!

autoplay: aBool

 	self videoElement at: 'autoplay' put: aBool
!

configureVideo
	
	
  (navigator at: 'mozGetUserMedia') ifNil:[self halt].
  
   navigator mozGetUserMedia: #{'video' -> true.  'audio' -> self playAudio} success: self videoProcess error: self errorCallback
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

setSrcObject: aStream

	self videoElement mozSrcObject: aStream.
!

showControls: aBool

 	self videoElement at: 'controls' put: aBool
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
			self setSrcObject: stream.
			self play
       ]
! !

!AmberVideo class methodsFor: 'starting'!

onCssId: anId 

	^self new cssId: anId
!

start

	AmberVideoTest start
! !

