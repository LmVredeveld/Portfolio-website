import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
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
    //open resume in new page
  goToLink(url: string){
    window.open(url, "_blank");
  }
}
