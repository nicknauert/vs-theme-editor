import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'color-tooltip',
    templateUrl: './color-tooltip.tpl.html',
    styleUrls: ['color-tooltip.scss'],
})
export class ColorTooltipComponent {

    @Input() public currentColor;
    @Input() public set position(newPosition) {
        if (newPosition) {
            newPosition.left += 25;
            this._left = newPosition.left.toString().concat('px');
            this._top = newPosition.top.toString().concat('px');
        }
    }

    public isVisible = false;
    private _top = '0px';
    private _left = '0px';

    public get top(): string {
        return this._top;
    }

    public get left(): string {
        return this._left;
    }
 }
