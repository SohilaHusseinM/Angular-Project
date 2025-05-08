import { Routes } from '@angular/router';
import { HomeComponent } from './Component/Day5/home/home.component';
import { AboutComponent } from './Component/Day5/about/about.component';
import { LoginComponent } from './Component/Day5/login/login.component';
import { ProductComponent } from './Component/Day5/product/product.component';
import { RegisterComponent } from './Component/Day5/register/register.component';
import { NotFoundComponent } from './Component/Day5/not-found/not-found.component';
import { SecondComponent } from './Component/Day2/second/second.component';
import { DatatableComponent } from './Component/Day5/datatable/datatable.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent,title:'Home',children:[
        {path:'',redirectTo:'slideshow',pathMatch:'prefix'},
        {path:'slideshow',component:SecondComponent,pathMatch:'prefix'},
        {path:'data-table',component:DatatableComponent,pathMatch:'prefix'}
    ]},
    {path:'about',component:AboutComponent,title:'About'},
    {path:'login',loadComponent:()=>import("./Component/Day5/login/login.component").then((x)=>x.LoginComponent),title:'Login'},
    {path:'register',loadComponent:()=>import("./Component/Day5/register/register.component").then((x)=>x.RegisterComponent),title:'Register'},
    {path:'product',component:ProductComponent,title:'Product'},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'**',component:NotFoundComponent,title:'Not Found'}
];
