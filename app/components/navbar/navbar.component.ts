import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent {
    private pagetitle: string;
    private homepage: string;
    private aboutpage: string;
    
    constructor() {
        this.pagetitle = "Angular 2 is Awesome!";
        this.homepage = "Home";
        this.aboutpage = "About";
    }
}