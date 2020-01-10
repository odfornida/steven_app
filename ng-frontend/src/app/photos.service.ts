import { Injectable, getDebugNode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  photoApi = 'localhost:3000';
  public photos: {};
  public hoveredNavCategory: string = null;

  db = {
    'headshots': [
      {
        'name': "B&W",
        'desc': "black and white headshot of a man",
        'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
    },
    {
        'name': "Lion",
        'desc': "headshot of lion",
        'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
    },
    {
        'name': "sunset",
        'desc': "headshot of a girl at sunset",
        'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
    },
    {
        'name': "profile",
        'desc': "headshot of a man in profile view",
        'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
    },
    {
      'name': "B&W",
      'desc': "black and white headshot of a man",
      'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
  },
  {
      'name': "Lion",
      'desc': "headshot of lion",
      'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
  },
  {
      'name': "sunset",
      'desc': "headshot of a girl at sunset",
      'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
  },
  {
      'name': "profile",
      'desc': "headshot of a man in profile view",
      'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
  },
  {
    'name': "B&W",
    'desc': "black and white headshot of a man",
    'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
},
{
    'name': "Lion",
    'desc': "headshot of lion",
    'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
},
{
    'name': "sunset",
    'desc': "headshot of a girl at sunset",
    'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
},
{
    'name': "profile",
    'desc': "headshot of a man in profile view",
    'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
},
{
  'name': "B&W",
  'desc': "black and white headshot of a man",
  'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
},
{
  'name': "Lion",
  'desc': "headshot of lion",
  'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
},
{
  'name': "sunset",
  'desc': "headshot of a girl at sunset",
  'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
},
{
  'name': "profile",
  'desc': "headshot of a man in profile view",
  'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
},
{
'name': "B&W",
'desc': "black and white headshot of a man",
'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
},
{
'name': "Lion",
'desc': "headshot of lion",
'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
},
{
'name': "sunset",
'desc': "headshot of a girl at sunset",
'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
},
{
'name': "profile",
'desc': "headshot of a man in profile view",
'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
},
    ],
    'dating profiles': [
        {
            'name': "accordion",
            'desc': "man playing accordion B&W",
            'url': "http://vickmark.com/wp-content/uploads/2011/03/12-704-page/ato-headshot(pp_w1251_h834).jpg",
        },
        {
            'name': "in-the-crowd",
            'desc': "man with mic in middle of a crowd",
            'url': "http://vickmark.com/wp-content/uploads/2011/03/12-704-page/ato-headshot(pp_w1251_h834).jpg",
        },
        {
            'name': "DJ",
            'desc': "DJ at a festival B&W",
            'url': "http://vickmark.com/wp-content/uploads/2011/03/12-704-page/ato-headshot(pp_w1251_h834).jpg",
        },
        {
            'name': "smoking",
            'desc': "man smoking cigarette",
            'url': "http://vickmark.com/wp-content/uploads/2011/03/12-704-page/ato-headshot(pp_w1251_h834).jpg",
        },
    ],
    'landscapes': [
        {
            'name': "ballo0n",
            'desc': "hot-air balloons in front of sunset",
            'url': "https://miro.medium.com/max/4320/0*QNdQhs_T3ffa6B0m.jpeg",
        },
        {
            'name': "purple-haze",
            'desc': "lavender bushes",
            'url': "https://miro.medium.com/max/4320/0*QNdQhs_T3ffa6B0m.jpeg",
        },
        {
            'name': "body of water",
            'desc': "bust in a pool",
            'url': "https://miro.medium.com/max/4320/0*QNdQhs_T3ffa6B0m.jpeg",
        },
        {
            'name': "pines",
            'desc': "green forest and fog",
            'url': "https://miro.medium.com/max/4320/0*QNdQhs_T3ffa6B0m.jpeg",
        },
    ]
  };

  constructor(private http: HttpClient) {
    this.getPhotos();
    this.setHoveredNavCategory(null);
  }

  getCategories(): string[] {
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
    // this.http.get<any>(this.photoApi + 'images').toPromise().then(data =>
    // {
    //   this.photos = data;
    //   console.log(this.photos);
    // });
    this.photos = this.db;
    return this.photos;
  }

}
