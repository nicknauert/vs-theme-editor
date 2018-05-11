import { Injectable, OnInit } from '@angular/core';
import { demoTheme } from '../../../assets/demo/theme';
import { ControlHandlerService } from '../../control-handler-service/control-handler.service';


@Injectable()
export class ColorPickService {

    public theme;

    constructor(
        private controlHandler: ControlHandlerService,
    ) {
        this.theme = this.controlHandler.currentTheme;
    }

    getElementColor(elementName) {
        console.log('Current Color >', this.theme.colors[elementName]);
        return this.theme.colors[elementName];

    }

}
