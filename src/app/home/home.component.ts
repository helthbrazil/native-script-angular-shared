import { Component, OnInit } from '@angular/core';
import { CepServiceService } from '../services/cep-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Hebert';
  cep: string = '';
  dados: any;
  showLoading: boolean = false;

  constructor(private cepService: CepServiceService) { }

  ngOnInit() {
  }

  buscarCep() {
    this.showLoading = true;
    setTimeout(() => {
      if (this.cep && this.cep.trim().length > 1) {
        this.cepService.buscarCep(this.cep).subscribe(res => {
          this.dados = res;
          this.showLoading = false;
        }, err => {
          this.showLoading = false;
          console.error(`Error: ${err}`);
        });
      }
    }, 2000);
  }

}
