import { ElementRef, Directive, OnInit } from "@angular/core";
import { PlatformDetectorService } from "../../../core/plataform-detector/platform-detector.service";

@Directive({
    selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {

    constructor(
        private element: ElementRef<any>,
        private platformDetector: PlatformDetectorService) { }

    ngOnInit(): void {
        this.platformDetector.isPlatformBrowser &&
            this.element.nativeElement.click(); 
    }
}