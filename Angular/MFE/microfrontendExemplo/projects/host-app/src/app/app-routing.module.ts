import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', loadChildren: () => 
    loadRemoteModule({
      remoteEntry: 'http://localhost:4300/remoteEntry.js', // URL do mfe app
      remoteName: 'mfeApp', // nome do mfe app
      exposedModule: './ProfileModule' // nome do mfe module
    }).then((m) => m.ProfileModule).catch(err => console.error('Error loading remote module', err))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
