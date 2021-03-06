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
    path: 'cart-modal',
    loadChildren: () => import('./pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'payment-modal',
    loadChildren: () => import('./pages/payment-modal/payment-modal.module').then( m => m.PaymentModalPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'view-my-credit-cards',
    loadChildren: () => import('./pages/view-my-credit-cards/view-my-credit-cards.module').then( m => m.ViewMyCreditCardsPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'addcredit-card-modal',
    loadChildren: () => import('./pages/addcredit-card-modal/addcredit-card-modal.module').then( m => m.AddcreditCardModalPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'view-my-bookings',
    loadChildren: () => import('./pages/view-my-bookings/view-my-bookings.module').then( m => m.ViewMyBookingsPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'view-anything-tabs',
    loadChildren: () => import('./pages/view-anything-tabs/view-anything-tabs.module').then( m => m.ViewAnythingTabsPageModule)
  },
  {
    path: 'view-my-past-bookings',
    loadChildren: () => import('./pages/view-my-past-bookings/view-my-past-bookings.module').then( m => m.ViewMyPastBookingsPageModule)
  },
  {
    path: 'my-transaction-history',
    loadChildren: () => import('./pages/my-transaction-history/my-transaction-history.module').then( m => m.MyTransactionHistoryPageModule)
  },
  {
    path: 'view-booking-detail-modal',
    loadChildren: () => import('./pages/view-booking-detail-modal/view-booking-detail-modal.module').then( m => m.ViewBookingDetailModalPageModule)
  },
  {
    path: 'view-my-bookings',
    loadChildren: () => import('./pages/view-my-bookings/view-my-bookings.module').then( m => m.ViewMyBookingsPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'view-my-profile',
    loadChildren: () => import('./pages/view-my-profile/view-my-profile.module').then( m => m.ViewMyProfilePageModule)
  },
  {
    path: 'refund-modal',
    loadChildren: () => import('./pages/refund-modal/refund-modal.module').then( m => m.RefundModalPageModule)
  },  {
    path: 'update-my-profile',
    loadChildren: () => import('./pages/update-my-profile/update-my-profile.module').then( m => m.UpdateMyProfilePageModule)
  },
  {
    path: 'view-refund-details-modal',
    loadChildren: () => import('./pages/view-refund-details-modal/view-refund-details-modal.module').then( m => m.ViewRefundDetailsModalPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
