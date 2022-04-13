$(document).ready(function () {

    $('iframe').each(function () {
        var src = $(this).attr('src');

        if ( src !== undefined ) {
            if ( ~src.indexOf('youtube.com') || ~src.indexOf('vimeo.com') ) { // Add any domain you wish!
                var width  = $(this).width(),
                    height = $(this).height(),
                    ratio  = ( (height/width) * 100 ).toFixed(2);

                $(this).removeAttr('width height');
                $(this).wrap('<div class="video-wrap" style="padding-bottom: ' + ratio + '%;"></div>');
            }
        }
    });

});