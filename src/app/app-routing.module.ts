import { HomepageComponent } from './homepage/homepage.component';
import { POSComponent } from './pos/pos.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { combineLatest } from 'rxjs';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { SampleComponent } from './sample/sample.component';
import { ManageSalaryComponent } from './manage-salary/manage-salary.component';
import { EditSalaryComponent } from './edit-salary/edit-salary.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SalesDataComponent } from './sales-data/sales-data.component';
import { SalesReportComponent } from './sales-report/sales-report.component';




const routes: Routes = [

  {
    path: '',
    component: HomepageComponent,
  },

  {
    path: 'POS',
    component: POSComponent, //name: 'POS',
  },

{
  path: 'employee',
  component: EmployeeManagementComponent
},
{
  path: 'employee/manage-staff',
  component: ManageStaffComponent
},
{
  path: 'sample',
  component: SampleComponent
},
{
  path: 'employee/manage-salary',
  component: ManageSalaryComponent
},
  {
    path: 'sales-report',
    component: SalesReportComponent, //name: 'Sales Report'
  },

  {
    path: 'product-list',
    component: ProductManagementComponent, //name: 'Product List',
  },

  {
    path: 'transactions',
    component: TransactionsComponent, //name: 'Transactions',
  },

  {
    path: 'employee',
    component: EmployeeManagementComponent
  },

  {
  path: 'product',
  component: ProductManagementComponent
  },

  {
  path: 'productlist',
  component: ProductListComponent
  },

  {
  path: 'addNewCategory',
  component: AddCategoryComponent
  },

  {
  path: 'categorylist',
  component: CategoryListComponent
  },

  {
    path: 'addcategory',
    component: AddCategoryComponent
  },

  {
    path: 'addproduct',
    component: AddProductComponent
  },

  {
    path: 'employee/manage-staff',
    component: ManageStaffComponent
  },

  {
    path: 'sample',
    component: SampleComponent
  },

  {
    path: 'employee/manage-salary',
    component: ManageSalaryComponent
  },

  {
    path: 'employee/edit-salary',
    component: EditSalaryComponent
  }

  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
