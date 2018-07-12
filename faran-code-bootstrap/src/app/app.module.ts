import { ModalServiceService } from './modal-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [ModalServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
