function MrMeeseeks ()  {
    function createInstance() {
        var object = new Object(getName());
        speakOnCreate();
        return object;
    }

    function getName() {
        return "MrMeeseeks_" + (Math.random().toString(36).substr(2, 9)).toLocaleUpperCase();
    }

    function speakOnCreate() {
        console.log("["+getName()+"] I'm Mr. Meeseeks! Look at me!")
    }

    function makeRequest(whatDo, whereDo) {
        console.log("Hacer "+whatDo+ " en "+whereDo);
    }


    return {
        create: function () {
            return createInstance();
        },
        makeRequest : function(a, b) {
            return makeRequest(a,b);
        }
    }
};

exports.MrMeeseeks = function() {
    return MrMeeseeks();
};
