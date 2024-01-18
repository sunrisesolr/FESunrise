import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrl:'./landing.component.scss'
})
export class LandingComponent {

    constructor(public layoutService: LayoutService, public router: Router, private el: ElementRef) { }
    scrollToSection(section: string): void {
        const element = this.el.nativeElement.querySelector(`#${section}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
    } 
     
}
