/* For creating an angular component, we need to follow 3 steps--?
    i.) import 'angular component' module in this file.
    ii.) import 'Component' module
    iii.) Create 'Component Class'
*/
// 'angular/core' package is present in node_modules



import {Component} from '@angular/core';

@Component({
    selector: "app-navbar",
    standalone: true,
    templateUrl: "./navbar.component.html",
    styleUrl: "./navbar.component.css",
})

export class AppNavbar { 

}