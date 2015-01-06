Smalltalk createPackage: 'AmberVideo-Tests'!
Widget subclass: #AmberVideoTest
	instanceVariableNames: 'videoController'
	package: 'AmberVideo-Tests'!

!AmberVideoTest methodsFor: 'not yet classified'!

ensureVideo
	self videoController playAudio: false.
	self videoController configureVideo
!

initialize

	super initialize.
	videoController := AmberVideo onCssId: 'videoTest'
!

renderOn: html

	html  video class: 'view';
						style: 'display:block';
						id: self videoController cssId.
	
	self ensureVideo
!

videoController

	^videoController
! !

!AmberVideoTest class methodsFor: 'not yet classified'!

start
	self new appendToJQuery: 'body' asJQuery
! !

