import { Injectable, getDebugNode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'url';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  photoApi = 'http://localhost:3200/';
  public photos: {};
  public hoveredNavCategory: string = null;

  constructor(private http: HttpClient) {
    this.getPhotos();
    this.setHoveredNavCategory(null);
  }

  getCategories(): string[] {
    console.log('getCategories', this.photos);
    return Object.keys(this.photos);
  }

  getPhotosForCategory(cat: string) {
    //console.log(`photoService getting photos for category ${cat}`, this.photos[cat]);
    return this.photos[cat];
  }

  getCategoryPreviewPhoto() {
    let catPhotos;
    if (this.hoveredNavCategory == null) {
      catPhotos = this.getPhotosForCategory(this.getCategories()[0]);
    } else {
      catPhotos = this.getPhotosForCategory(this.hoveredNavCategory);
    }
    return catPhotos[0]; // Select photo from array
  }

  setHoveredNavCategory(e) {
    if (e != null) {
      this.hoveredNavCategory = e.toElement.text;
    }
  }

  private getPhotos() {
    return this.http.get<any>(this.photoApi + 'images').toPromise().then(data => {
      this.photos = data;
      console.log('getPhotos:', this.photos);
    });

    //return this.photos;
  }

}
