import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    public translate: TranslateService
  ){
    // Register translation languages
    translate.addLangs(['EN', 'ES', 'NL']);
    // Set default language
    translate.setDefaultLang('EN');
  } 

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

  goToLink(url: string){
  window.open(url, "_blank");
}
}
