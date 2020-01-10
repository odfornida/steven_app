import { PhotosService } from './../photos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currCategory = '';

  constructor(public photoService: PhotosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const categoryParam: string = params.get('category');
      if (categoryParam !== '' && categoryParam != null) {
        this.photoService.getCategories().forEach((cat: string) => {
          if (categoryParam === cat) {
            this.currCategory = categoryParam;
          }
        });
      }
    });
  }
}
