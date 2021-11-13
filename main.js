"use strict"

/** @brief webapp using spa framework
 *  @author Sarah Rosanna Busch
 */

var main = (function() {
    var that = {}; //public methods
    var vars = {}; //variables 'public' to all functions in main
    var elem = {}; // store dom elems once on load for efficiency

    that.init = function() {
        elem.header = f.html.getElem('header');
        elem.main = f.html.getElem('main');
        elem.footer = f.html.getElem('footer');
    }

    that.nav = function() {
        f.http.get('pages/htmlTags.html', function(pageData) {
            elem.main.innerHTML = pageData;
        });
    }

    return that;
}());