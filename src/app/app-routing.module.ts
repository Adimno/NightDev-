import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'cart-modal',
    loadChildren: () => import('./pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  },
  {
    path: 'apple',
    loadChildren: () => import('./pages/apple/apple.module').then( m => m.ApplePageModule)
  },
  {
    path: 'brands',
    loadChildren: () => import('./pages/brands/brands.module').then( m => m.BrandsPageModule)
  },
  {
    path: 'samsung',
    loadChildren: () => import('./pages/samsung/samsung.module').then( m => m.SamsungPageModule)
  },

  {
    path: 'brand-edit/:id',
    loadChildren: () => import('./brand-edit/brand-edit.module').then( m => m.BrandEditPageModule)
  },
  {
    path: 'brand-list',
    loadChildren: () => import('./brand-list/brand-list.module').then( m => m.BrandListPageModule)
  },

  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'brand-create',
    loadChildren: () => import('./brand-create/brand-create.module').then( m => m.BrandCreatePageModule) 
  
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) 
  
  },
  {
    path: 'allproducts',
    loadChildren: () => import('./pages/allproducts/allproducts.module').then( m => m.AllproductsPageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
