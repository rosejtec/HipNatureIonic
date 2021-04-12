import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
     canActivate:[AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'view-all-plans',
    loadChildren: () => import('./pages/view-all-plans/view-all-plans.module').then( m => m.ViewAllPlansPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'view-all-classes',
    loadChildren: () => import('./pages/view-all-classes/view-all-classes.module').then( m => m.ViewAllClassesPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'view-class-details/:classId',
    loadChildren: () => import('./pages/view-class-details/view-class-details.module').then( m => m.ViewClassDetailsPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'view-aclass-sessions/:classId',
    loadChildren: () => import('./pages/view-aclass-sessions/view-aclass-sessions.module').then( m => m.ViewAClassSessionsPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'add-credit-card',
    loadChildren: () => import('./pages/add-credit-card/add-credit-card.module').then( m => m.AddCreditCardPageModule)
  },
  {
    path: 'cart-modal',
    loadChildren: () => import('./pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
