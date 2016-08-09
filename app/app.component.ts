import {Component} from 'angular2/core';
import {AboutComponent} from './about/about.component'
import {SkillsComponent} from './skills/skills.component'

@Component({
    selector: 'app',
    templateUrl: './app/app.html',
    directives: [AboutComponent, SkillsComponent]
})

export class AppComponent { }