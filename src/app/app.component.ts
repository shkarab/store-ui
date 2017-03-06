import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { FormControl } from '@angular/forms';
import { ProductService } from './product/product.service';
import { Category } from './product/shared/Category';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
   encapsulation: ViewEncapsulation.None
  
})
export class AppComponent {
  categories: Category[];
  languages = [];
  currentLang: string;
   isDarkTheme:boolean;

  constructor(private translate: TranslateService,public authService: AuthService) {
    // translate.addLangs(["en", "fa"]);
    // translate.setDefaultLang('en');

    // let browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|fa/) ? browserLang : 'en');

  }

  ngOnInit() {
// this.isDarkTheme=false;
//     //get left side categories
//     this.getCategories();

//     this.languages = [
//       { name: "English", value: "en" },
//       { name: "Persian", value: "fa" }
//     ]


  }


//getting all of main categories
  // getCategories() {
    
  //   this._homeService.getCategoryByName("%2F").subscribe(res =>
  //   {
      
  //      this.categories =  res.children;
      
  //   }
  //   );
  // }

  //is used to changing languages
  // changeLanguage(lang) {

  //   console.log("currentLang", lang);
  //   this.translate.use(lang.value);

  // }


}



