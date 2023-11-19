import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
   
  
      {
        path:'apple',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/apple/apple.module').then( m => m.ApplePageModule)
          }
        ]
      },

      {
        path:'samsung',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/samsung/samsung.module').then( m => m.SamsungPageModule)
          }
        ]
      },

      {
        path:'brands',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/brands/brands.module').then( m => m.BrandsPageModule)
          }
        ]
      },
      
      
      {
      path:'',
      redirectTo:'background',
      pathMatch:'full'
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
