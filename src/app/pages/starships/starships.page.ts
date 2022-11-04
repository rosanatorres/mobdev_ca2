import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-starships',
  templateUrl: './starships.page.html',
  styleUrls: ['./starships.page.scss'],
})
export class StarshipsPage implements OnInit {

  starships: Observable<any>;
 
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.starships = this.http.get('https://swapi.dev/api/starships');
  }
 
  openDetails(starship) {
    let split = starship.url.split('/');
    let starshipId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/starships/${starshipId}`);
  }

}
