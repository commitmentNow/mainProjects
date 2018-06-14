// creates the overlay, and gets the high resolution version from the thumbnail name
var pixgrid = function() {
    function centerImage(theImage) {
        var myDifX = (window.innerWidth - theImage.width) / 2, myDifY = (window.innerHeight - theImage.height) / 2;
        return theImage.style.top = myDifY + "px", theImage.style.left = myDifX + "px", 
        theImage;
    }
    var myNodes = document.querySelectorAll(".pixgrid");
    for (var i=0; i<myNodes.length; i++) {
        myNodes[i].addEventListener("click", function(e) {
            if ("IMG" === e.target.tagName) {
                var myOverlay = document.createElement("div");
                myOverlay.id = "overlay", document.body.appendChild(myOverlay), myOverlay.style.position = "absolute", 
                myOverlay.style.top = 0, myOverlay.style.backgroundColor = "rgba(0,0,0,0.7)", myOverlay.style.cursor = "pointer", 
                myOverlay.style.width = window.innerWidth + "px", myOverlay.style.height = window.innerHeight + "px", 
                myOverlay.style.top = window.pageYOffset + "px", myOverlay.style.left = window.pageXOffset + "px";
                var imageSrc = e.target.src, largeImage = document.createElement("img");
                largeImage.id = "largeImage", largeImage.src = imageSrc.substr(0, imageSrc.length - 7) + ".jpg", 
                largeImage.style.display = "block", largeImage.style.position = "absolute", largeImage.addEventListener("load", function() {
                    this.height > window.innerHeight && (this.ratio = window.innerHeight / this.height, 
                    this.height = this.height * this.ratio, this.width = this.width * this.ratio), this.width > window.innerWidth && (this.ratio = window.innerWidth / this.width, 
                    this.height = this.height * this.ratio, this.width = this.width * this.ratio), centerImage(this), 
                    myOverlay.appendChild(largeImage);
                }), largeImage.addEventListener("click", function() {
                    myOverlay && (window.removeEventListener("resize", window, !1), window.removeEventListener("scroll", window, !1), 
                    myOverlay.parentNode.removeChild(myOverlay));
                }, !1), window.addEventListener("scroll", function() {
                    myOverlay && (myOverlay.style.top = window.pageYOffset + "px", myOverlay.style.left = window.pageXOffset + "px");
                }, !1), window.addEventListener("resize", function() {
                    myOverlay && (myOverlay.style.width = window.innerWidth + "px", myOverlay.style.height = window.innerHeight + "px", 
                    myOverlay.style.top = window.pageYOffset + "px", myOverlay.style.left = window.pageXOffset + "px", 
                    centerImage(largeImage));
                }, !1);
            }
        }, !1);
    }
}();
var fill;

(fill = function(item) {
  return $('.tagline').append(`${item}`);
})('Trying out coffeeeeee');

fill;

// this script is grabbing the data from this JSON file and merging it with the template, it places all of that into this speakers id.
$(function () {
    var Mustache = require('mustache');

    $.getJSON('js/data.json', function (data) { //data.json -> builds/dev/js/data.json
        var template = $('#speakerstpl').html(); //speakerstpl is a template in index.html -> at the bottom of the page
        var html = Mustache.to_html(template, data);
        $('#speakers').html(html);
    }); //getJSON

});