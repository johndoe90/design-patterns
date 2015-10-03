var Singleton = (function () {
    function Singleton() {
        if (Singleton._instance)
            throw new Error('This class is a singleton and must not be newd');
        Singleton._instance = this;
    }
    Singleton.prototype.getInstance = function () {
        if (!Singleton._instance)
            Singleton._instance = new Singleton();
        return Singleton._instance;
    };
    return Singleton;
})();
