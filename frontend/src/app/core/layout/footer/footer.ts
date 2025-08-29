import { Component } from '@angular/core';
import {FooterItem} from '../../../shared/models/footerItem.model';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  public items: FooterItem[] = [
    {
      "iconPath": "assets/icons/footer/x.png",
      "url": ""
    },
    {
      "iconPath": "assets/icons/footer/linkedin.png",
      "url": "https://www.linkedin.com/in/gabriel-nogueira-vieira-resende/"
    },
    {
      "iconPath": "assets/icons/footer/youtube.png",
      "url": "https://www.youtube.com/@gnvr-zb7tw"
    },
    {
      "iconPath": "assets/icons/footer/instagram.png",
      "url": "https://www.instagram.com/gabriel_nvresende/"
    }
  ];
}
