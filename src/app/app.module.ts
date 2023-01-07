import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componente/menu/menu.component';
import { TituloComponent } from './componente/titulo/titulo.component';
import { CartaoComponent } from './componente/cartao/cartao.component';
import { CartaComponent } from './componente/carta/carta.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TituloComponent,
    CartaoComponent,
    CartaComponent,
    HomeComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
