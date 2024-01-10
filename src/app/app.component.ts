import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from "./shared/topbar/topbar.component";
import { CarouselModule } from '@coreui/angular';
import { AlertModule } from '@coreui/angular';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, TopbarComponent, CarouselModule]
})
export class AppComponent {
  title = 'bodyboard';
}
