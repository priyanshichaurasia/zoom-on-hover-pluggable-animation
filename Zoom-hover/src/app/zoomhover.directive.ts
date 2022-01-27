import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomhover]'
})
export class ZoomhoverDirective {

  constructor(private el:ElementRef) { }
@HostListener('mouseenter') onMouseEnter()
{
  this.highlight('30px',' 0,0,10px,20px','transform .10s','auto','auto','scale(1.5)');
}

@HostListener('mouseleave') onMouseLeave()
{
  this.highlight('30px',' 20px 50px','transform .10s','auto','auto','');
}



private highlight(padding:string,margin:string,transition:string,width:string,height:string,transform:string){
  this.el.nativeElement.style.padding=padding;
  this.el.nativeElement.style.margin=margin;
  this.el.nativeElement.style.transition=transition;
  this.el.nativeElement.style.width=width;
  this.el.nativeElement.style.height=height;
  this.el.nativeElement.style.transform=transform;
}

}
