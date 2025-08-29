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
      name: 'Arthur!',
      subtitle: 'Sou um estudante de Engenharia de Software.',
      presentation: 'Estudante de Engenharia de Software na PUC Minas com formação técnica em Eletrônica pela UFMG, tenho paixão por tecnologia, desenvolvimento de sistemas e resolução de problemas. Atuo com Java, Spring Boot, Laravel, JavaScript, React e SQL, sempre buscando aprender mais e aplicar esse conhecimento em projetos reais. Gosto de entender o funcionamento das coisas, estudar temas diversos e encarar desafios que me tirem da zona de conforto. Acredito que tecnologia é uma ferramenta poderosa para transformar realidades — e é nisso que quero focar minha carreira.',
      buttonWork: 'Conheça mais sobre meu trabalho',
      buttonCV: 'Baixar CV',
      sectionTitle: 'Sobre mim'
    },
    en: {
      title: 'Hi, I am',
      name: 'Arthur!',
      subtitle: 'I am a Software Engineering student.',
      presentation: 'A Software Engineering student at PUC Minas with a technical degree in Electronics from UFMG, I am passionate about technology, systems development, and problem-solving. I work with Java, Spring Boot, Laravel, JavaScript, React, and SQL, always seeking to learn more and apply this knowledge to real-world projects. I enjoy understanding how things work, studying diverse topics, and tackling challenges that push me beyond my comfort zone. I believe that technology is my powerful tool for transforming realities—and that is what I want to focus on in my career.',
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
