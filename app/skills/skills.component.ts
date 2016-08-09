import {Component} from 'angular2/core';
import {Skill} from './skill'

@Component({
    selector: 'skills',
    templateUrl: './app/skills/skills.html',
    //input: ['skill']
})
export class SkillsComponent {
    public skillsColumnA = SkillsColumnA
}

var SkillsColumnA: Skill[] = [
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