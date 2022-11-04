import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-specimen-details',
  templateUrl: './specimen-details.page.html',
  styleUrls: ['./specimen-details.page.scss'],
})
export class SpecimenDetailsPage implements OnInit {
	
  specimen: any;
 
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }
 
  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(`https://swapi.dev/api/species/${id}`).subscribe(res => {
      this.specimen = res;
    });
  }

}
