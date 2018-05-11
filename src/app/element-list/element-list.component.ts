import { Component, OnInit } from '@angular/core';

import { demoTheme } from '../../assets/demo/theme';
import { ControlHandlerService } from '../control-handler-service/control-handler.service';

@Component({
    selector: 'element-list',
    templateUrl: './element-list.template.html'
})
export class ElementListComponent implements OnInit {

    public themeArray;
    public currentColorSelection;
    public tooltipPosition;

    constructor(
        private ctrlHandler: ControlHandlerService,
    ) { }

    ngOnInit() {
        this.themeArray = this.ctrlHandler.themeArray;
    }

    handleElementClick(payload) {
        console.log('In ElementList component', payload);
        this.currentColorSelection = payload.color;
        this.tooltipPosition = payload.position;
    }
}
