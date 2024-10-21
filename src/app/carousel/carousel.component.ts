import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
  public personagemSelecionado:any;
  public currentIndex=0
  public personagens :any;
  constructor(){
    this.personagens = [
      {
        nome: 'SERGE',
        img: 'https://i.ytimg.com/vi/UQBJTUxCNsI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBy7GHvEbzhF-AtqKQlZ1vDcpfjGg',
        descricao: 'O Protagonista, Nascido de Marge e Wazuki da vila de pescadores de Arni no arquipélago de El Nido, a existência de Serge é uma contradição entre as dimensões.'
      },
      {
        nome: 'KID',
        img: 'https://assets1.ignimgs.com/thumbs/userUploaded/2021/12/2/chronocrossxanotheredencollaborationtrailerignblogroll-1638476069385.jpg',
        descricao: 'O Protagonista, Nascido de Marge e Wazuki da vila de pescadores de Arni no arquipélago de El Nido, a existência de Serge é uma contradição entre as dimensões.'
      },
      {
        nome: 'Lynx',
        img: 'https://www.supersoluce.com/sites/default/files/logo1/vignette-chrono-cross-histoire-principale.jpg',
        descricao: 'O Protagonista, Nascido de Marge e Wazuki da vila de pescadores de Arni no arquipélago de El Nido, a existência de Serge é uma contradição entre as dimensões.'
      }
      
      ]
  }

  public ngOnInit(): void {
    this.updatePersonagemSelecionado();
  }
   
  nextPersonagem() {
    // Avança para o próximo personagem
    if (this.currentIndex < this.personagens.length - 1) {
      this.currentIndex++;
    } else {
      // Reinicia o carrossel ao chegar no final
      this.currentIndex = 0;
    }
    this.updatePersonagemSelecionado();
  }

  prevPersonagem() {
    // Volta para o personagem anterior
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      // Volta para o último personagem se estiver no primeiro
      this.currentIndex = this.personagens.length - 1;
    }
    this.updatePersonagemSelecionado();
  }


updatePersonagemSelecionado() {
    // Atualiza o personagem selecionado com base no índice atual
    this.personagemSelecionado = this.personagens[this.currentIndex];

}
}

