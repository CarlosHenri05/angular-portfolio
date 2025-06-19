import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-main-page',
  imports: [MatCardModule, MatIconModule, MatChipsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  longText: string =
    'Sou um desenvolvedor web full-stack apaixonado por criar soluções digitais inovadoras e eficientes. Com habilidades técnicas tanto no front-end quanto no back-end, meu objetivo é construir aplicações robustas, intuitivas, escaláveis e com boa manuntebilidade, com foco em gerar valor real com o código. Estou sempre em busca de novos desafios e oportunidades para aplicar minhas habilidades e aprender novas tecnologias.';

  resumeText: string = 'Algumas tecnologias de referência:';
}
