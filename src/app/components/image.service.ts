import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface ImageInfo {
  title: string;
  description: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})

export class ImageService {
  private images: object[] = [];
  private url: string = 'https://api.imgur.com/3/image';
  private clientId: string = 'bb422113e578142';
  private accessToken: string = "6cdcf1163583b6539f5fb8c92c8fd379061cc1c9";
  imageLink: any;


  constructor(private http: HttpClient) { }

  async uploadImage(imageFile: File, infoObject: {}) {
    let formData = new FormData();
    formData.append('image', imageFile, imageFile.name);
    // com id cliente
    // let header = new HttpHeaders({
    //   "authorization": 'Client-ID '+this.clientId
    // });

    // token
    let header = new HttpHeaders({
      "authorization": 'Bearer ' + this.accessToken
    });

    const imageData = await this.http.post(this.url, formData, { headers: header }).toPromise();
    // this.imageLink = imageData['data'].link;

    // let newImageObject: ImageInfo = {
    //   title: infoObject["title"],
    //   description: infoObject["description"],
    //   link: this.imageLink
    // };

    // this.images.unshift(newImageObject);

    // console.log("newImageObject: ", newImageObject)
    // console.log("imageData: ", imageData)

    return imageData;
  }

  getImages() {
    return this.images;
  }
}
