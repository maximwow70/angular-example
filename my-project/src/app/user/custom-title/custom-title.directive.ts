import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appCustomTitle]'
})
export class CustomTitleDirective implements AfterViewInit {

  // tslint:disable-next-line: no-input-rename
  @Input('appCustomTitleValue')
  public title: string = 'my-custom-title';


  constructor(
    private _elementRef: ElementRef
  ) {}

  ngAfterViewInit() {
    if (this.title) {
      this._elementRef.nativeElement.title = this.title;
    }
    this._elementRef.nativeElement.classList.add('my-custom-title');
  }

}
