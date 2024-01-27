import { Component, HostListener, Renderer2 } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('menuAnimation', [
      state('void', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('void => visible', animate('200ms ease-in')),
      transition('visible => void', animate('200ms ease-out'))
    ]),
    trigger('buttonAnimation', [
      state('normal', style({
        filter: 'none',
        transform: 'scale(1)'
      })),
      state('rotate', style({
        filter: 'opacity(50%)',
        transform: 'scale(1.2)'
      })),
      transition('normal => rotate', animate('200ms ease-in')),
      transition('rotate => normal', animate('200ms ease-out'))
    ])
  ]
})


export class HeaderComponent {

  constructor(private renderer: Renderer2, private router: Router) {}
  
  isMenuOpen: boolean = false;
  menuState: 'void' | 'visible' = 'void';
  imageState: 'normal' | 'rotate' = 'normal';

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    if (this.isMenuOpen) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuState = this.menuState === 'visible' ? 'void' : 'visible';
    this.imageState = this.imageState === 'normal' ? 'rotate' : 'normal';
    this.toggleScrollLock();
  }

  private toggleScrollLock(): void {
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  scrollToElement(targetId: string): void {
    const targetElement = document.getElementById(targetId);
    const headerHeight = 70;

    if (targetElement) {
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

  public async navigateToSection(sectionId: string): Promise<void> {
    await this.router.navigate(['/main']);
    this.scrollToElement(sectionId);
    this.toggleMenu();
  }
}
