function render() {
	permsAll.forEach(function(e) {
		var n =
			'<label class="label cbcontainer"><input class="cbox" type="checkbox" id="' +
			e +
			'" onchange="handleCheckBoxChange(this)"/><span class="cbcustom"></span>' +
			e
				.split('_')
				.map(function(e) {
					return e[0] + e.slice(1).toLowerCase();
				})
				.join(' ') +
			'</label>';
		if (permsText.includes(e)) document.getElementById('text').innerHTML += n;
		else if (permsVoice.includes(e)) document.getElementById('voice').innerHTML += n;
		else document.getElementById('general').innerHTML += n;
	});
	(function setDate() {
		document.getElementById('copyright').innerHTML = document
			.getElementById('copyright')
			.innerHTML.replace('{year}', new Date().getFullYear());
	})();
	setInterval(setDate(), 60000);
}

function handleCheckBoxChange(e) {
	var val = +document.getElementById('bitfield').value;
	document.getElementById('bitfield').value = e.checked ? val + permsBitwise[e.id] : val - permsBitwise[e.id];
}

function handleTextChange(e) {
	var val = e.value;
	if (/[^\d]/g.test(val)) return (e.value = val.replace(/[^\d]+/g, ''));
	if (e.id == 'id') {
		document.getElementById('id').classList.remove('input__incorect');
		document.getElementById('id').classList.remove('input__corect');
		if (val.length == 18) {
			document.getElementById('id').classList.remove('input__incorect');
			document.getElementById('id').classList.add('input__corect');
		}
		if (val.length > 18) {
			e.value = val.substring(0, 18);
		}
		return;
	}
	if (+val > 2146958847) {
		e.value = 2146958847;
		val = 2146958847;
	}
	permsAll.forEach(function(e) {
		var i = document.getElementById(e);
		i.checked = (val & permsBitwise[i.id]) == permsBitwise[i.id];
	});
}

function copy() {
	var text = document.getElementById('bitfield');
	text.select();
	document.execCommand('copy');
}

function useInvite() {
	var id = document.getElementById('id');
	if (id.value.length < 18) {
		id.select();
		document.getElementById('id').classList.add('input__incorect');
		return;
	}
	var bitfield = document.getElementById('bitfield').value;
	var code = document.getElementById('code').value;
	var scope = document.getElementById('scope').value;
	var redirect = document.getElementById('redirect').value;
	var invite = 'https://discordapp.com/api/oauth2/authorize?client_id=' + id.value + '&permissions=' + bitfield;
	invite += scope ? '&scope=' + scope : '&scope=bot';
	if (redirect) invite += '&redirect_uri=' + redirect;
	if (code) invite += '&response_type=code';
	window.open(invite, '_blank');
}

function fixNumber(e) {
	if (e.value === '') e.value = 0;
}

function maxmin() {
	var someChecked = permsAll.some(function(e) {
		return !document.getElementById(e).checked;
	});
	if (someChecked) document.getElementById('bitfield').value = '2146958847';
	else document.getElementById('bitfield').value = '0';
	handleTextChange(document.getElementById('bitfield'));
}

function selectGroup(htmlElem) {
	switch (htmlElem.value[0].toLowerCase()) {
		case 't':
			arr = permsText;
			break;
		case 'v':
			arr = permsVoice;
			break;
		default:
			arr = permsGeneral;
			break;
	}
	var checked = arr.every(function(e) {
		return document.getElementById(e).checked;
	});
	if (checked)
		arr.forEach(function(e) {
			document.getElementById(e).checked = false;
			handleCheckBoxChange(document.getElementById(e));
		});
	else
		arr.forEach(function(e) {
			if (document.getElementById(e).checked) return;
			document.getElementById(e).checked = true;
			handleCheckBoxChange(document.getElementById(e));
		});
}
