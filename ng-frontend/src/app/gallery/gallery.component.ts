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
  active: number; // Index of currently expanded image, if any
  expanded = false;

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

  getPhotos() {
    return this.photoService.getPhotosForCategory(this.currCategory);
  }

  next() {
    if (this.active < this.getPhotos().length - 1) {
      this.active++;
    } else if (this.getPhotos().length !== 0) {
      this.active = 0;
    }
  }

  prev() {
    if (this.active === 0) {
      this.active = this.getPhotos().length - 1;
    } else {
      this.active--;
    }
  }

  closeExpandedView() {
    this.expanded = false;
  }
}
