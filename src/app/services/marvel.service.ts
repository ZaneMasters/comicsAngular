import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const urlBase ='https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=6c19114ab54c49e301b33c2c2d5c1612&hash=acdba71ed50254ef9c1f2f82cf94eeac';

const key='ts=1&apikey=6c19114ab54c49e301b33c2c2d5c1612&hash=acdba71ed50254ef9c1f2f82cf94eeac';

const urlComics ='https://gateway.marvel.com:443/v1/public/characters/1011334/comics?';
const urlHero ='https://gateway.marvel.com:443/v1/public/characters';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private http: HttpClient) { }



  getSuperHeroes(){
   // return this.http.get(urlBase);
   const url = `${ urlHero }?${ key }`;
   return this.http.get(url);
  }

  getComics(id: any){
    const url = `${ urlHero }/${ id }/comics?${ key }`;
    return this.http.get(url);
  }
}
