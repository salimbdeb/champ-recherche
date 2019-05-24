import { Component, OnInit } from '@angular/core';
import { ParticulierService } from '../commun/particulier.service';
import { Particulier } from '../commun/particulier';

@Component({
  selector: 'app-recherche-particulier',
  templateUrl: './recherche-particulier.component.html',
  styleUrls: ['./recherche-particulier.component.css']
})
export class RechercheParticulierComponent implements OnInit {

  private particulier: Particulier;
  public get Particulier(): Particulier {
    return this.particulier;
  }
  public set Particulier(value: Particulier) {
    this.particulier = value;
  }
  
  constructor(private particulirService: ParticulierService) { }

  chercherParticulier(code:number){
    this.particulier = this.particulirService.obtenirParticulier(code);
    console.log('Nom 2 : ' + this.particulier.nom);
   }
  ngOnInit() {
    this.particulier = this.particulirService.obtenirParticulier(1111);
    console.log('Nom 1 : ' + this.particulier.nom);
  }


}
