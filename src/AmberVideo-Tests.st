Smalltalk createPackage: 'AmberVideo-Tests'!
Widget subclass: #AmberResizeableWebCamTest
	instanceVariableNames: 'videoController'
	package: 'AmberVideo-Tests'!

!AmberResizeableWebCamTest methodsFor: 'not yet classified'!

ensureVideo
	self videoController playAudio: false.
	self videoController showControls: false.
	self videoController width: 320.
	self videoController height: 240.
	self videoController configureVideo.
!

initialize

	super initialize.
	videoController := AmberVideo onCssId: 'videoTest'
!

renderOn: html

 html div class: 'wrapper';
 	with:[ 
		self renderSliderOn: html.
		html br.
		html  video id: self videoController cssId.
		
	].

	self ensureVideo
!

renderSliderOn: html

	html input 
		type: 'range'; 
		at: 'min' put: '100'; 
		at: 'max' put: '500'; 
		at: 'step' put:'50'; 
		id: 'videoSizeSlider'; 
		at: 'value' put:'0'; 
		onChange: [:event | self videoController width: '#videoSizeSlider' asJQuery val]
!

videoController

	^videoController
! !

!AmberResizeableWebCamTest class methodsFor: 'not yet classified'!

start
	self new appendToJQuery: 'body' asJQuery
! !

Widget subclass: #AmberSimpleWebCamTest
	instanceVariableNames: 'videoController'
	package: 'AmberVideo-Tests'!

!AmberSimpleWebCamTest methodsFor: 'not yet classified'!

ensureVideo
	self videoController playAudio: false.
	self videoController showControls: false.
	self videoController configureVideo.
!

initialize

	super initialize.
	videoController := AmberVideo onCssId: 'videoTest'
!

renderOn: html

 html div class: 'wrapper'; style:'width: 800px; height: 800px;'; 
 	with:[
		html div class:'videocontent'; style:'width: 30%; max-width: 640px;';
			with:[
				html  video id: self videoController cssId.
			].	
	].
	
	self ensureVideo
!

videoController

	^videoController
! !

!AmberSimpleWebCamTest class methodsFor: 'not yet classified'!

start
	self new appendToJQuery: 'body' asJQuery
! !

