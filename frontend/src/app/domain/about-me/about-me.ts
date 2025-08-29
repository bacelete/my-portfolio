import { Component } from '@angular/core';
import 'animate.css';
import { ButtonComponent } from '../../core/layout/button/button.component';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-about-me',
  imports: [ButtonComponent, MatButton],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})

export class AboutMe {

  lang: 'pt' | 'en' = 'pt';

  texts = {
    pt: {
      title: 'Olá, eu sou o',
      name: 'Arthur',
      subtitle: 'Sou um estudante de Engenharia de Software!',
      presentation: 'Estudante de Engenharia de Software na PUC Minas com formação técnica em Eletrônica pela UFMG, tenho paixão por tecnologia, desenvolvimento de sistemas e resolução de problemas. Atuo com Java, Spring Boot, Laravel, JavaScript, React e SQL, sempre buscando aprender mais e aplicar esse conhecimento em projetos reais.Gosto de entender o funcionamento das coisas, estudar temas diversos e encarar desafios que me tirem da zona de conforto. Acredito que tecnologia é uma ferramenta poderosa para transformar realidades — e é nisso que quero focar minha carreira.',
      buttonWork: 'Conheça mais sobre meu trabalho',
      buttonCV: 'Baixar CV',
      sectionTitle: 'Sobre mim'
    },
    en: {
      title: 'Hi, I am',
      name: 'Arthur',
      subtitle: 'I am a Software Engineering student!',
      presentation: 'Hello! I\'m a software engineering student with one year of experience as a QA and currently a software engineering intern at Hotmart, in addition to participating in the WebTech extension project at PUC Minas. I study cybersecurity and DevOps, but I also have extensive development knowledge.',
      buttonWork: 'Check out my work',
      buttonCV: 'Download CV',
      sectionTitle: 'About Me'
    }
  };

  constructor(private router: Router) { }

  handleButtonClick() {
    this.router.navigate(['/projects']);
  }

  // Troca de idioma
  changeLanguage(lang: 'pt' | 'en') {
    this.lang = lang;
  }
}
