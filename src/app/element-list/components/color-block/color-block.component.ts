import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ColorPickService } from '../../services/color-pick.service';
import { ColorTooltipComponent } from '../color-pick-tt/color-tooltip.component';

@Component({
    selector: 'color-section',
    templateUrl: './color-section.template.html',
    styleUrls: ['color-section.scss'],
})
export class ColorBlockComponent {

    @Input() public singleColorSection;
    @Output() public elementClick: EventEmitter<object> = new EventEmitter<object>();

    constructor(
        private colorPicker: ColorPickService,
    ) { }

    public handleElementClick(evt) {
        const currentColor = this.singleColorSection.color;
        const positionTop = evt.target.offsetTop;
        const positionLeft = evt.target.offsetLeft + evt.target.offsetWidth;
        const infoObj = {
            color: currentColor,
            position: {
                top: positionTop,
                left: positionLeft,
            }
        };
        this.elementClick.emit(infoObj);
    }

}
