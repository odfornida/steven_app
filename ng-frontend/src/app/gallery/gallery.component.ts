import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  photo_type : string = 'headshots';
  photo_name : string;
  photo_desc : string;
  photo_url : string;

  constructor(private photoService: PhotosService) { }

  ngOnInit() {

  }

  setPhotoType(photo_category : string)
  {
      this.photo_type = photo_category;
  }

  get_images()
  {

  }
}
