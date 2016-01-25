System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SkillsComponent, SkillsColumnA;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SkillsComponent = (function () {
                function SkillsComponent() {
                    this.skillsColumnA = SkillsColumnA;
                }
                SkillsComponent = __decorate([
                    core_1.Component({
                        selector: 'skills',
                        templateUrl: './app/skills/skills.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], SkillsComponent);
                return SkillsComponent;
            })();
            exports_1("SkillsComponent", SkillsComponent);
            SkillsColumnA = [
                { "name": "iOS" },
                { "name": "Swift" },
                { "name": "Objective-C" },
                { "name": "iOS CoreData" },
                { "name": "Android" },
                { "name": "Java" },
                { "name": ".Net" },
                { "name": "C#" },
                { "name": "Entity Framework" },
                { "name": "ASP.NET MVC" },
                { "name": "ASP.NET" },
                { "name": "WCF Services" },
                { "name": "WPF" },
                { "name": "XAML" },
                { "name": "Silverlight" },
                { "name": "Visual Studio" },
                { "name": "AngularJS" },
                { "name": "TypeScript" },
                { "name": "HTML" },
                { "name": "JavaScript" },
                { "name": "PHP" },
                { "name": "Laravel" },
                { "name": "Zend" },
                { "name": "OOP" },
                { "name": "Clean Architecture" },
                { "name": "Clean Code" },
                { "name": "MVC Architecture" },
                { "name": "Design patterns" },
                { "name": "MVVM Architecture" },
                { "name": "Scrum" },
                { "name": "JSon" },
                { "name": "XML" },
            ];
        }
    }
});
//# sourceMappingURL=skills.component.js.map