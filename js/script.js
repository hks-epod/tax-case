// All below is cobbled together from StackOverflow

$(function () {
	$('[data-toggle="popover"]').popover()
});

$('[data-toggle="popover"]').popover({
    container: 'body'
});

$('body').scrollspy({ target: '#scrolled' })


$('body').on('click', function (e) {
    $('[data-toggle="popover"]').each(function () {
        //the 'is' for buttons that trigger popups
        //the 'has' for icons within a button that triggers a popup
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});
