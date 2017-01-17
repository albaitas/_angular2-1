
import {Component} from '@angular/core';

@Component({
    selector: 'reddit',
    styleUrls: ["./reddit.css"],
    template: `
    <form class="ui large form segment">
     <h3 class="ui header">Prideti dar viena nuoroda</h3>

     <div class="field">
      <label for="title">Pavadinimas</label>
      <input type="text" name="title" #newtitle>
     </div>
     <div class="field">
      <label for="link">Nuoroda</label>
      <input type="text" name="link" #newlink>
     </div>
     <button class="ui positive right floated button" (click)="addArticle(newtitle, newlink)">
     Siusti
     </button>
    </form>
   `
})
export class RedditAppComponent {
    addArticle(newtitle: HTMLInputElement, newlink: HTMLInputElement){
        console.log("Pavadinimas: "+ newtitle.value);
        console.log("Nuoroda: "+ newlink.value);
        return false;
    }
}