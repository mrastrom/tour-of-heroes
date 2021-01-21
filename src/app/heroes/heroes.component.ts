import { Component, Input, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Hero[];
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

 selectedHero: Hero;

  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes():void {
    this.heroService.getHeroes().subscribe( heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


}
