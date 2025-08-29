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
      "iconPath": "assets/icons/footer/linkedin.png",
      "url": "https://www.linkedin.com/in/arthurbacelete/"
    },
    {
      "iconPath": "assets/icons/footer/instagram.png",
      "url": "https://www.instagram.com/arthurbacelete/"
    }
  ];
}
