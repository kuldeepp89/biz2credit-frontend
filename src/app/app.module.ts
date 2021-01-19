import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from "@angular/material/snack-bar";

import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
  BsDropdownModule,
  PopoverModule,
  PaginationModule,
  TooltipModule,
  DatepickerModule,
  ModalModule,
  AlertModule,
} from "ngx-bootstrap";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { AvatarModule } from 'ngx-avatar';

import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy,
} from "@angular/common";

import {
  MatTabsModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatCardModule,
  MatListModule,
  MatExpansionModule,
  MatChipsModule} from "@angular/material";

import { NgbModalModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { MessagesModule } from "primeng/primeng";
import { HttpClientModule } from "@angular/common/http";

import { MatRadioModule } from "@angular/material/radio";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// import { PdfViewerModule } from 'ng-pdf-view-annotation';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { HeaderComponent } from "./modules/core/header/header.component";
import { ServiceProviderComponent } from "./modules/service-provider/service-provider.component";
import { ServiceProviderDetailsComponent } from "./modules/service-provider-details/service-provider-details.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServiceProviderComponent,
    ServiceProviderDetailsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    NgbModalModule,
    ServiceWorkerModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    PaginationModule,
    TooltipModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatChipsModule,
    MatRadioModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientModule,
    MatSnackBarModule,
    NgxUiLoaderModule,
    AvatarModule
  ],

  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    }  ],
  entryComponents: [
    
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
