import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AddComponent} from "./add.component";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AddComponent]
})
export class AddModule { }
