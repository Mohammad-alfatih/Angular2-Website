import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: 'jumbotron.component.html'
})

export class JumbotronComponent {
    private jbtHeading: string;
    private jbtText: string;
    private jbtBtnText: string;
    private jbtBtnLink: string;

    constructor() {
        this.jbtHeading = "Does my Angular App Work?";
        this.jbtText = "Well, Hello There!";
        this.jbtBtnText = "Learn More";
        this.jbtBtnUrl = "/about";
    }
}