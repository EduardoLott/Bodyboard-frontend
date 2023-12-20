import { Component } from '@angular/core';
import { TopbarComponent } from "../shared/topbar/topbar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [TopbarComponent]
})
export class HomeComponent {

}
