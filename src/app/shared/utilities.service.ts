import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  private _storage: Storage | null = null;

  constructor(public storage: Storage) {
    this.init();
  }

  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any){
      this._storage?.set(key, value);
  }


}
