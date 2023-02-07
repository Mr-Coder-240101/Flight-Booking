import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropdown',
})
export class DropdownDirective {
  public isOpen: boolean;

  constructor() {
    this.isOpen = false;
  }

  @HostListener('click') toggle() {
    this.isOpen = !this.isOpen;
  }
}
