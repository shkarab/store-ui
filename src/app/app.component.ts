import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { FormControl } from '@angular/forms';
import { AuthService } from './shared/auth.service';
import { HomeService } from './shared/home.service';
import { Category } from './shared/Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
   encapsulation: ViewEncapsulation.None
  
})
export class AppComponent {
  categories: Category[]
  languages = [];
  currentLang: string;
  //currentLang:Object;
  constructor(private translate: TranslateService, private authService: AuthService, private _homeService: HomeService) {
    translate.addLangs(["en", "fa"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fa/) ? browserLang : 'en');

  }

  ngOnInit() {
    this.getCategories();

    this.languages = [
      { name: "English", value: "en" },
      { name: "Persian", value: "fa" }
    ]


  }


  getCategories() {
    this._homeService.getCategories().subscribe(res => this.categories = res);
  }
  changeLanguage(lang) {

    console.log("currentLang", lang);
    this.translate.use(lang.value);

  }


}



