import { Component } from '@angular/core';
import { TopbarComponent } from "../shared/topbar/topbar.component";
import { RouterOutlet } from '@angular/router';
import { LiveComponent } from './live/live.component';
import { UserRegisterComponent } from './user-register/user-register.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [TopbarComponent, RouterOutlet, LiveComponent, UserRegisterComponent]
})
export class HomeComponent {

}
