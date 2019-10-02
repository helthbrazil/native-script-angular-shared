import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepServiceService {

  readonly URL_BUSCA_CEP = 'https://viacep.com.br/ws/:CEP/json/';

  constructor(private http: HttpClient) { }

  buscarCep(cep: string): Observable<any>{
    let url = this.URL_BUSCA_CEP.replace(':CEP', cep);
    return this.http.get(url);
  }

}
