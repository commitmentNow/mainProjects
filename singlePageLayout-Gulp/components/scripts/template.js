// this script is grabbing the data from this JSON file and merging it with the template, it places all of that into this speakers id.
$(function () {
    var Mustache = require('mustache');

    $.getJSON('js/data.json', function (data) { //data.json -> builds/dev/js/data.json
        var template = $('#speakerstpl').html(); //speakerstpl is a template in index.html -> at the bottom of the page
        var html = Mustache.to_html(template, data);
        $('#speakers').html(html);
    }); //getJSON

});