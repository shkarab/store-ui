import {Component,OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'sh-menu',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./shMenu.scss'],
  templateUrl: './shMenu.html'
})
export class ShMenu implements OnInit{
@Input() categories: any;

ngOnInit() {
  console.log("categories",this.categories);
  }
}
