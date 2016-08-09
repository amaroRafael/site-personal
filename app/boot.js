System.register(['angular2/platform/browser', "angular2/core", './app.component'], function(exports_1) {
    var browser_1, core_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map