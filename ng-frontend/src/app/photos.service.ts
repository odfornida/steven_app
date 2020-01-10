import { Injectable, getDebugNode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  photoApi = 'localhost:3000';
  public photos: {};

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
            'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
        },
        {
            'name': "in-the-crowd",
            'desc': "man with mic in middle of a crowd",
            'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
        },
        {
            'name': "DJ",
            'desc': "DJ at a festival B&W",
            'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
        },
        {
            'name': "smoking",
            'desc': "man smoking cigarette",
            'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
        },
    ],
    'landscapes': [
        {
            'name': "ballo0n",
            'desc': "hot-air balloons in front of sunset",
            'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
        },
        {
            'name': "purple-haze",
            'desc': "lavender bushes",
            'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
        },
        {
            'name': "body of water",
            'desc': "bust in a pool",
            'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
        },
        {
            'name': "pines",
            'desc': "green forest and fog",
            'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
        },
    ]
  }

  constructor(private http: HttpClient) {
    this.getPhotos();
  }

  getCategories(): string[] {
    return Object.keys(this.photos);
  }

  getPhotosForCategory(cat: string) {
    console.log(`photoService getting photos for category ${cat}`, this.photos[cat]);
    return this.photos[cat];
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
