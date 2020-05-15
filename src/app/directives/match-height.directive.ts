import {
  Directive,
  AfterViewChecked,
  Input,
  ElementRef,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[myMatchHeight]',
})

/**
 * Directive used to make elements of a class the same height as the tallest element in this div
 */
export class MatchHeightDirective implements AfterViewChecked {
  // Class name to match height
  @Input() myMatchHeight: string;

  constructor(private el: ElementRef) {}

  ngAfterViewChecked() {
    // Calls the matchHeight function to set the height of each element properly
    this.matchHeight(this.el.nativeElement, this.myMatchHeight);
  }

  /**
   * Updates the height of each element of the given class name, so that they have the height of the tallest element
   * @param parent The element in which are contained the elements we want to update the height
   * @param className Class name to match height
   */
  matchHeight(parent: HTMLElement, className: string) {
    if (!parent) return;

    // Finds all the child elements with the selected class name
    const children = parent.getElementsByClassName(className);

    if (!children) return;

    // Resets the height of each child
    Array.from(children).forEach((x: HTMLElement) => {
      x.style.height = 'initial';
    });

    // Gets all the child elements heights
    const itemHeights = Array.from(children).map(
      (x) => x.getBoundingClientRect().height
    );

    // Finds out the tallest element
    const maxHeight = itemHeights.reduce((prev, curr) => {
      return curr > prev ? curr : prev;
    }, 0);

    // Updates all the child elements to the tallest height
    Array.from(children).forEach(
      (x: HTMLElement) => (x.style.height = `${maxHeight}px`)
    );
  }

  /**
   * Handles resizing the window
   * **
   * When the window is resized, the height of the tallest element might change
   * **
   * Updates the height of the elements when the window is resized
   */
  @HostListener('window:resize')
  onResize() {
    // Calls the matchHeight function to set the height of each element properly
    this.matchHeight(this.el.nativeElement, this.myMatchHeight);
  }
}
