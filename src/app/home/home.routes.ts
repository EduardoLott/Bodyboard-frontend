import { Routes, RouterModule } from '@angular/router';
import { LiveComponent } from './live/live.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { JuryScreenComponent } from './jury-screen/jury-screen.component';



export const homeRoutes: Routes = [

    {
        path: '',
        redirectTo: 'live',
        pathMatch: 'full'
    },
    {
        path: 'live',
        component: LiveComponent
    },
    {
        path: 'register',
        component: UserRegisterComponent
    },
    {
        path: 'jury',
        component: JuryScreenComponent
    }
];
