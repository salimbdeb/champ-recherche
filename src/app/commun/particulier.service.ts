import { Injectable } from '@angular/core';
import { PARTICULIERS } from './mock-particuliers';
import { Particulier } from './particulier';

@Injectable({
  providedIn: 'root'
})
export class ParticulierService {

  constructor() { }

  getParticuliers(): Particulier[] {
    return PARTICULIERS;
  }

obtenirParticulier(code:number):Particulier{ 
  return PARTICULIERS.find(particulier => particulier.id == code);
}

}
