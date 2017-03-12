import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { TextboxComponent } from './rendered/controls/textbox.component';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  public config = [
    {
      id: 'textbox',
      name: TextboxComponent,
      inputs: [{ name: 'text', value: ''}, { name: 'placeholder', value: 'Type text' }]
    }
  ];

  public componentsConfig = [
    {
      type: 'text',
      value: 'Some'
    },
    {
      type: 'checkbox',
      value: true
    }
  ];

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
