app.factory('MapFilter', function () {
    "use strict";
    var Service = {};
    var hidden = {};
    
    Service.hide = function (id) {
        hidden[id] = true;
    }
    
    Service.show = function (id) {
        try{
            hidden[id] = false;
        } catch (e) {
            console.log("Nothing to hide: " + e);
        }
    }
    
    Service.resetHidden = function () {
        hidden = {};
    }
    
    Service.getHidden = function () {
        return hidden;
    }
    
    return Service;
});