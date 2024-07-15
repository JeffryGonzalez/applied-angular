import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { SignalsComponent } from './students/signals/signals.component';

export const routes: Routes = [
    {
        path: 'students',
        component: StudentsComponent,
        children: [
            {
                path: 'signals',
                component: SignalsComponent
            }
        ]
    }
];
