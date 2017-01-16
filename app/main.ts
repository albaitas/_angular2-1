import{Component, NgModule} from '@angular/core';          // importuojame komponent� ir modul�
import{BrowserModule} from '@angular/platform-browser';   // naudosime brauseryje
import{platformBrowserDynamic} from '@angular/platform-browser-dynamic';    // dinami�kai paleisime brauseryje

@Component({                   // komponentas ir klase
    selector: 'hello-angular', // b�simo tego pavadinimas
    template: `
      <div>
        Hello Angular 2
      </div>
    `
})
class HelloAngular {}         // klas�s pavadinimas

@NgModule({
    imports: [BrowserModule],      // importuoti kit� modul�
    declarations: [HelloAngular],  // paskelbiame komponent�
    bootstrap: [HelloAngular]      // paleid�iame bootstrape
})
class HelloAngularAppModule {}

platformBrowserDynamic().bootstrapModule(HelloAngularAppModule);