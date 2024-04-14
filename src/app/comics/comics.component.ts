import { Component, OnInit, inject } from '@angular/core';
import { MarvelService } from '../services/marvel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {


  private marvel = inject(MarvelService);
  private route = inject(ActivatedRoute);

  comics: any[] = [];
  creadores: any[] =[];
  personajes: any[] =[];

  public page!: number;

  ngOnInit(): void {
    const id =this.route.snapshot.params['id'];
    this.mostrarComics(id);
  }



  mostrarComics(id:string){
    this.marvel.getComics(id).subscribe((respuesta: any) =>{

      this.comics = respuesta.data.results;
      this.creadores = respuesta.data.results.creators;


      

      console.log("respuesta: ",this.comics);
    })
  }

}
