import { Directive, ElementRef, input, OnInit } from '@angular/core';
type LinkTypes = 'primary' | 'secondary' | 'warning';
@Directive({
  standalone: true,
  selector: 'a[appLink]',
})
export class LinkDirective implements OnInit {
  constructor(private el: ElementRef<HTMLAnchorElement>) {}
  intent = input<LinkTypes>('primary');
  ngOnInit(): void {
    this.el.nativeElement.classList.add(...['link', `link-${this.intent()}`]);
  }
}
