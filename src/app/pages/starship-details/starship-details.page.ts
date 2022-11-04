import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.page.html',
  styleUrls: ['./starship-details.page.scss'],
})
export class StarshipDetailsPage implements OnInit {
	
  starship: any;
 
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }
 
  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(`https://swapi.dev/api/starships/${id}`).subscribe(res => {
      this.starship = res;
    });
  }

}
