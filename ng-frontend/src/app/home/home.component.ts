import { PhotosService } from './../photos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public photoService: PhotosService) { }

  ngOnInit() {
  }

}
