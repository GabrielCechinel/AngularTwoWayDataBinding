import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public peso: number = 0; // atributo de classe  - two way data binding - mapeamento de duas tecnologias

  public resposta: string = '';

  exibir() {
    this.resposta = 'Peso: ' + this.peso + 'Kg';
  }

  limpar() {
    this.resposta = '';
  }
}
