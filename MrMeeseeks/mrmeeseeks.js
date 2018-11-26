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

    return {
        getInstance: function () {
            return createInstance();
        }


    }
};

exports.MrMeeseeks = function() {
    return MrMeeseeks();
};
