var SB = (function(){
    var that = {};
    
    that.js = (function(){
        var that = {};
        
        return that;
    }());

    that.html = (function(){
        var that = {};

        that.getElem = function(query, parent = document){
            return parent.querySelector(query);
        }

        that.getElems = function(query, parent = document){
            return parent.querySelectorAll(query);
        }

        that.spawn = function(parentElem, childType) {
            var child = document.createElement(childType);
            parentElem.appendChild(child);
            return child;
        }

        return that;
    }());

    that.css = (function(){
        var that = {};
        
        return that;
    }());

    return that;
}());