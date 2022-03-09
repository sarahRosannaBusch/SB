"use strict"

/** @brief webapp using spa framework
 *  @author Sarah Rosanna Busch
 *  @date 8 March 2022
 */

var main = (function() {
    var that = {}; //public methods
    var vars = {}; //variables global to main
    var elem = {}; //store dom elems once on load for efficiency

    //called on page load
    that.init = function() {
        elem.header = f.html.getElem('header');
        elem.main = f.html.getElem('main');
        elem.footer = f.html.getElem('footer');
    }

    //request and render only the portion of the page that's new
    that.nav = function() {
        f.http.get('pages/htmlTags.html', function(pageData) {
            elem.main.innerHTML = pageData;
        });
    }

    return that;
}());
