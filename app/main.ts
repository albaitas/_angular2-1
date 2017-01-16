import{Component, NgModule} from '@angular/core';          // importuojame komponentà ir modulá
import{BrowserModule} from '@angular/platform-browser';   // naudosime brauseryje
import{platformBrowserDynamic} from '@angular/platform-browser-dynamic';    // dinamiðkai paleisime brauseryje

@Component({                   // komponentas ir klase
    selector: 'hello-angular', // bûsimo tego pavadinimas
    template: `
      <div>
        Hello Angular 2
      </div>
    `
})
class HelloAngular {}         // klasës pavadinimas

@NgModule({
    imports: [BrowserModule],      // importuoti kità modulá
    declarations: [HelloAngular],  // paskelbiame komponentà
    bootstrap: [HelloAngular]      // paleidþiame bootstrape
})
class HelloAngularAppModule {}

platformBrowserDynamic().bootstrapModule(HelloAngularAppModule);