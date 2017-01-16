import{Component, NgModule} from '@angular/core';
import{BrowserModule} from '@angular/platform-browser';
import{platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
    selector: 'hello-angular',   //* pakeicia DOM struktura(ciklas for)
    template: `
      <ul>
       <li *ngFor="let name of names">Hello {{name}}</li>
      </ul>
    `
})
class HelloAngular {
    names: string[];

    constructor(){
        this.names = ["Jonas", "Petras", "Linas", "Rytis"];
    }
}

@NgModule({
    imports: [BrowserModule],
    declarations: [HelloAngular],
    bootstrap: [HelloAngular]
})
class HelloAngularAppModule {}

platformBrowserDynamic().bootstrapModule(HelloAngularAppModule);