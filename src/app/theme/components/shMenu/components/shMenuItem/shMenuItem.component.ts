import {Component,OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';

// interface MenuItem{
//   menu: {
//             title: string,
//             icon: string,
//             selected: boolean,
//             expanded: boolean,
//             order: number,
//   };
        
//         children: MenuItem[];
// }
interface MenuItem{
  name: String,
  description: String,
  category:String,
  icon:String,
  selected: Boolean,
  expanded: Boolean,
  children:MenuItem[],
  parent:String
}
@Component({
  selector: 'sh-menu-item',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./shMenuItem.scss'],
  templateUrl: './shMenuItem.html'
})
export class ShMenuItem implements OnInit{
@Input() menuItem: MenuItem;

ngOnInit() {
  

  }

  onToggleSubMenu($event,menuItem:MenuItem):void{
    if(menuItem.children){
      $event.menuItem=menuItem;
      console.log("menuItem",menuItem);
      if(menuItem!=null && menuItem.expanded!=null){
      $event.menuItem.expanded=!menuItem.expanded;
      console.log("menuItem2",$event.menuItem.expanded);
      }
    }
  }
}
