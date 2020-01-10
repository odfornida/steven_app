import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  currCategory = 'headshots';


  constructor(public photoService: PhotosService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const categoryParam: string = params.get('category');
      this.photoService.getCategories().forEach((cat: string) => {
        if (categoryParam === cat) {
          this.currCategory = categoryParam;
        }
      });
    });
  }
}
