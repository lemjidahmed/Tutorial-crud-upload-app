import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddUploadService {

  private data: any;

  constructor() { }

  setData(data: any) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}
