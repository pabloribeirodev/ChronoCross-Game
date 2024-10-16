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

  // imageDescp: string = 'https://i0.wp.com/ovicio.com.br/wp-content/uploads/2021/12/20211204-20211204_092226.jpg?fit=1200%2C630&ssl=1'

  imageDescp: string = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjw7qAvONY2unv0MWNM-LGIXJ9FMqvzcdfp80T3_2v8JMrDyF8dAgkgPinOnEdgpc6IdFlBRzriLnW9QLwWBv0-HNvq44ahfOIegtC42AvFSL4apD_PCPU_wbIjunKp6CYeZjcDVtgm877hr9gS8V69FPbZfB4z2HjzR0seC55RAPCX2NIq4FD7LCkYew/s3030/chrono-cross-radical-dreamers-edition-capa.jpg'

  produtos = [
    {
      id: 1,
      nome: 'Standart Edition',
      preco: 100.00,
      descricao: 'Versão Basica do jogo.',
      imagem: 'https://assetsio.gnwcdn.com/b95000f7_19e6_4d17_b39e_9bef21839d29.jpeg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
      comprar: 'comprar'
    },
    {
      id: 2,
      nome: 'Gold Edition',
      preco: 180.00,
      descricao: 'Versão com todas as dlcs',
      imagem: 'https://i.ytimg.com/vi/QoPxmdzHaJQ/maxresdefault.jpg',
      comprar: 'comprar'
    },
    {
      id: 3,
      nome: 'Chrono x Eden Teaser Demo',
      gratuito: 'Gratuito (demo)',
      descricao: 'Beginning Hour',
      imagem: 'https://projectn.com.br/wp-content/uploads/2022/04/Remaster-de-Chrono-Cross.jpg',
      baixar: 'baixar'
    }
   ]
}
