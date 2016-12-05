$(function () {
    /* Me+ Banners */
    var banner1 = $('div#convatec_me_article').closest('.container');
    banner1.css('padding-right', '0').css('padding-left', '0').css('width', '100%').css('overflow-x', 'hidden');
    var banner2 = $('div#me-plus-banner').closest('.container');
    banner2.css('padding-right', '0').css('padding-left', '0').css('width', '100%').css('overflow-x', 'hidden');

    /* intro (image/text) match height - replaces lr hero */
    if (typeof matchHeight !== 'undefined') { // not currently in use
        $('.article_products_header.vertical-align-text .image-col, .article_products_header.vertical-align-text .text-col').matchHeight({ mq: "(min-width: 768px)" });
    }
});

// Checkbox Validation
$.validator.addMethod("checkboxChecked", function (value, element) {
    var checked = false;
    checked = $(element).is(':checked');

    return checked;
}, '');

//Add our custom adapter
$.validator.unobtrusive.adapters.addBool("mustbetrue", "required");

$.validator.setDefaults({
    ignore: ":hidden:not(:visible > .validate-hidden)"
});



/* product sub navigation */
//$('.subnav-category-container select').on('change', function () {
//    var selected = $(this).val();
//    if (selected.length > 0) {
//        window.location.href = selected;
//    }
//});


//this is needed for Google Tag Manager goals
function trackFormSubmit(formName) {
    if (typeof dataLayer !== 'undefined') {
        dataLayer.push({
            'event': formName
        });
    }
}


//endsWith polyfill
//taken from: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (searchString, position) {
        var subjectString = this.toString();
        if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}







