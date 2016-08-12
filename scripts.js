function setIframeHeight(iframe) {
	if (iframe) {
		var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
		if (iframeWin.document.body) {
			iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
		}
	}
};

$(document).ready(function(){

  var exit = '<div id="exit"><i class="fa fa-times-circle" aria-hidden="true"></i></div>';

  $('.navigation li a').on('click', function(){
		$('#frame').removeClass('hidden');
    $('#frame').html(exit + '<iframe class="' + this.id + '" src="http://localhost/FreeCodeCamp/' + this.id + '"></iframe>');
    setIframeHeight(document.getElementById('#frame'));

		$('#exit').on('click', function(){
			$('#frame').addClass('hidden');
		});
  });



});
