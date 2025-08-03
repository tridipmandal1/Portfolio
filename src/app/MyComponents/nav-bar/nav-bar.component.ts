import {Component, ElementRef, EventEmitter, HostListener, Output, Renderer2, ViewChild} from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    NgClass
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  currentTab: string = 'home';
  @Output() tab = new EventEmitter<string>();


  constructor( private router: Router,
               private renderer: Renderer2,
               private eRef: ElementRef) {

  }

  ngOnInit(): void {
  }

  changeTab(tab: string) {
    this.currentTab = tab;
    this.closeNavbar();
    this.tab.emit(tab);
  }

  closeNavbar() {
    const navbarCollapse = this.eRef.nativeElement.querySelector('#navbarSupportedContent');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      this.renderer.removeClass(navbarCollapse, 'show');
    }
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: any) {
    const clickedInside = this.eRef.nativeElement.contains(targetElement);
    const navbarCollapse = this.eRef.nativeElement.querySelector('#navbarSupportedContent');
    const isExpanded = navbarCollapse?.classList.contains('show');

    if (!clickedInside && isExpanded) {
      this.renderer.removeClass(navbarCollapse, 'show');
    }
  }
}
