var MrMeeseeks = require('./mrmeeseeks');

function Box ()  {
    let instance;

    function createInstance() {
        var object = new Object(getName());
        console.log("Usando caja " + object);
        return object;
    }

    function getName() {
        return "Box_" + (Math.random().toString(36).substr(2, 9)).toLocaleUpperCase();
    }

    function createMrMeeseeks() {
        var caja = importaBox.Box().getInstance();
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
        createMrMeeseek : function () {
            return new MrMeeseeks.MrMeeseeks().getInstance();
        }


    }
};

exports.Box = function() {
    return Box();
};

