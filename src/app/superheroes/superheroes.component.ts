import { Component, OnInit, inject } from '@angular/core';
import { MarvelService } from '../services/marvel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.css']
})
export class SuperheroesComponent implements OnInit {
  
  private marvel = inject(MarvelService);
  private router = inject(Router);

  superhero: any[] = [];
  public page!: number;
  
  ngOnInit(): void {

    this.mostrarHeroes();
  }


  mostrarHeroes(){
    this.marvel.getSuperHeroes().subscribe((respuesta: any) =>{

      this.superhero = respuesta.data.results;

    })
  }

  comics(id: string){
    console.log(id);
    this.router.navigate(['/comics', id]);
  }


}
