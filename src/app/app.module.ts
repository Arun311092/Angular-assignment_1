import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentdetailinputComponent } from './studentdetailinput/studentdetailinput.component';
import { StudentdetailoutputComponent } from './studentdetailoutput/studentdetailoutput.component';
import { DetailproviderService } from './detailprovider.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    StudentdetailinputComponent,
    StudentdetailoutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path : 'input' , component : StudentdetailinputComponent},
      {path : 'output', component : StudentdetailoutputComponent}
    ])
  ],
  providers: [DetailproviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
