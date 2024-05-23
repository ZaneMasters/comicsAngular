
import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../services/marvel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.css']
})
export class SuperheroesComponent implements OnInit {
  
  public superhero: any[] = [];
  public filteredHeroes: any[] = [];
  public page!: number;
  public searchTerm: string = '';

  constructor(private marvel: MarvelService, private router: Router) {}

  ngOnInit(): void {
    this.mostrarHeroes();
  }

  mostrarHeroes(): void {
    this.marvel.getSuperHeroes().subscribe((respuesta: any) => {
      this.superhero = respuesta.data.results;
      this.filteredHeroes = this.superhero;
    });
  }

  searchHeroes(): void {
    if (this.searchTerm) {
      this.filteredHeroes = this.superhero.filter(heroe =>
        heroe.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredHeroes = this.superhero;
    }
  }

  comics(id: string): void {
    console.log(id);
    this.router.navigate(['/comics', id]);
  }
}
