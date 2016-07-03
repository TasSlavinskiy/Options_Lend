function getURLParameter(name) {
	return decodeURI(
		(RegExp(name + '=' + '(.*?)(&|$)').exec(location.search)||[,null])[1]
	);
}

function mobiliOs() {
		ga('send', 'event', 'WebSite', 'Mobile_App_Popup', 'Store_Button', 'iOS');

		var aff = getURLParameter('aff'), afftrack = getURLParameter('afftrack');

		if (aff == 'null' && afftrack == 'null') {
			aff = '';
			afftrack = '';
		}
		if (aff != '' && afftrack == 'null') {
			afftrack = '';
		}
		location.href = 'http://app.appsflyer.com/id871125783?pid=' + aff + '&c=' + afftrack;
	}
	function mobilAndroid() {
		ga('send', 'event', 'WebSite', 'Mobile_App_Popup', 'Store_Button', 'Android');

		var aff = getURLParameter('aff'), afftrack = getURLParameter('afftrack');

		if (aff == 'null' && afftrack == 'null') {
			aff = '';
			afftrack = '';
		}
		if (aff != '' && afftrack == 'null') {
			afftrack = '';
		}

		location.href = 'http://app.appsflyer.com/com.iqoption?pid=' + aff + '&c=' + afftrack;
	}

// куки

$(document).ready(function() {
	var aff = getURLParameter('aff_id'), afftrack = getURLParameter('aff_track'), retrack = getURLParameter('retrack'), subid = getURLParameter('subid'), ref = getURLParameter('ref');

	if (ref && ref != 'null') {
		$.cookie('ref', ref, {path: '/', expires: 1, domain: '.' + window.location.host.replace(/^(m\.){1}/, '')});
		$.cookie('aff', null, {path: '/', expires: 30, domain: '.' + window.location.host.replace(/^(m\.){1}/, '')});
		$.cookie('afftrack', null, {
			path: '/',
			expires: 30,
			domain: '.' + window.location.host.replace(/^(m\.){1}/, '')
		});
	} else {
		if (aff == 'null') {
			aff = getURLParameter('aff');
		}
		if (afftrack == 'null') {
			afftrack = getURLParameter('afftrack') == 'null' ? '' : getURLParameter('afftrack');
		}
		if (getURLParameter('clickid') != 'null') {
			afftrack += '__clickid-' + getURLParameter('clickid');
		}
		if (getURLParameter('offerid') != 'null') {
			afftrack += '__offerid-' + getURLParameter('offerid');
		}
		if (aff != 'null' && !window.noCookie && !window.isFramed) {
			$.cookie('aff', aff, {path: '/', expires: 30, domain: '.' + window.location.host.replace(/^(m\.){1}/, '')});
		}
		if (aff != 'null' && window.noCookie) {
			window.aff = aff;
		}
		if (afftrack != 'null' && afftrack != '' && !window.noCookie && !window.isFramed) {
			$.cookie('afftrack', afftrack, {
				path: '/',
				expires: 30,
				domain: '.' + window.location.host.replace(/^(m\.){1}/, '')
			});
		}
		if (afftrack != 'null' && afftrack != '' && window.noCookie) {
			window.afftrack = afftrack;
		}
		if (aff != 'null' && afftrack == '' && !window.noCookie && !window.isFramed) {
			$.cookie('afftrack', '', {
				path: '/',
				expires: 30,
				domain: '.' + window.location.host.replace(/^(m\.){1}/, '')
			});
		}
		if (aff != 'null' && afftrack == '' && window.noCookie) {
			window.afftrack = '';
		}
	}

	if (aff != 'null' || ref != 'null') $('head').append('<meta name="robots" content="noindex"/>');

	var expTrack = false;
	['exp-bo-new3', 'exp-bo-old2'].forEach(function (el) {
		if ($.cookie("retrack") === el) expTrack = true;
	});

	if (retrack != 'null' && !expTrack) {
		$.cookie('retrack', retrack, {
			path: '/',
			expires: 30,
			domain: '.' + window.location.host.replace(/^(m\.){1}/, '')
		});
	}

	if (subid != 'null' && !window.noCookie) {
		$.cookie('subid', subid, {path: '/', expires: 30, domain: '.' + window.location.host.replace(/^(m\.){1}/, '')});
	}

	if (!$.cookie('referrer')) {
		$.cookie('referrer', document.referrer, {
			path: '/',
			expires: 30,
			domain: '.' + window.location.host.replace(/^(m\.){1}/, '')
		});
	}

});
