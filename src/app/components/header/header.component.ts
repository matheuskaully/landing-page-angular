import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideLayoutDashboard } from '@ng-icons/lucide';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIconComponent,
    NgOptimizedImage
  ],
  viewProviders: [provideIcons({
    lucideLayoutDashboard,
  })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
