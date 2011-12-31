function mobile_detect(mobile,tablet,mobile_redirect,tablet_redirect,debug) {
	var ismobile = (/iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(navigator.userAgent.toLowerCase()));
	var istablet = (/ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(navigator.userAgent.toLowerCase()));

	if (debug == true) {
		alert(navigator.userAgent);
	}

	if (ismobile && mobile==true) {
		if (debug == true) {
			alert("Mobile Browser");
		}
		window.location = mobile_redirect;
	} else if (istablet && tablet==true) {
		if (debug == true) {
			alert("Tablet Browser");
		}
		window.location = tablet_redirect;
	}
}
