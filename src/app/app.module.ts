import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { Error404Component } from './error404/error404.component';
import { InterceptorService } from './jwt/interceptor.service';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './partials/header/header.component';
import { EntidadComponent } from './entidad/entidad.component';
import { TipoDocumentoComponent } from './documento/tipo-documento.component';
import { TipoContribuyenteComponent } from './contribuyente/tipo-contribuyente.component';
import { GeneralDocumentoComponent } from './documento/general-documento/general-documento.component';
import { GeneralContribuyenteComponent } from './contribuyente/general-contribuyente/general-contribuyente.component';
import { GeneralEntidadComponent } from './entidad/general-entidad/general-entidad.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    Error404Component,
    SidebarComponent,
    HomeComponent,
    HeaderComponent,
    EntidadComponent,
    TipoDocumentoComponent,
    TipoContribuyenteComponent,
    GeneralDocumentoComponent,
    GeneralContribuyenteComponent,
    GeneralEntidadComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }