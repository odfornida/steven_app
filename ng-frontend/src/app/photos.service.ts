import { Injectable, getDebugNode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  photo_api = 'localhost:3000';
  photos : [];
  constructor(private http: HttpClient) {}
  get_images()
    {
      this.http.get<any>(this.photo_api + 'images').toPromise().then(data => 
      {
        this.photos = data;
        console.log(this.photos);
      });
      return this.photos;
    }

}