import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


const ANGULAR_MATERIAL = [
  MatButtonModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatInputModule,
  MatDatepickerModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
]


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    LayoutModule,
    ...ANGULAR_MATERIAL,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    ...ANGULAR_MATERIAL,
    NavbarComponent,
  ],
})
export class CoreModule {
}
