import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  currCategory = 'headshots';

  constructor(public photoService: PhotosService) {
  }

  ngOnInit() {

  }
}
