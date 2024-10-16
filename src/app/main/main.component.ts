import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  imagemPath: string = 'https://www.omegascopio.com.br/wp-content/uploads/2021/12/maxresdefault.jpg';

  produtos = [
    {
      id: 1,
      nome: 'Standart Edition',
      preco: 100.00,
      descricao: 'Versão Basica do jogo.',
      imagem: 'https://assetsio.gnwcdn.com/b95000f7_19e6_4d17_b39e_9bef21839d29.jpeg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp'
    },
    {
      id: 2,
      nome: 'Gold Edition',
      preco: 180.00,
      descricao: 'Versão com todas as Dlcs',
      imagem: 'https://i.ytimg.com/vi/QoPxmdzHaJQ/maxresdefault.jpg'
    }
   ]
}
