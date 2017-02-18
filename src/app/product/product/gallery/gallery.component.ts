import { Component, OnInit ,Input} from '@angular/core';
import { ImageService } from './image.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
 @Input('flexBorderSize') providedImageMargin: number = 3
 @Input('flexImageSize') providedImageSize: number = 7
 private gallery: any[] = []
  constructor(private ImageService: ImageService) { }

  ngOnInit() {
  }

}
