import { Injectable, OnInit } from '@angular/core';
import { demoTheme } from '../../assets/demo/theme';


@Injectable()
export class ControlHandlerService {

    public controlObject = demoTheme;
    private themeAsArray: Array<any>;
    private colorGroups: Array<any>;
    private themeAsJson;

    constructor() {
        this.themeAsArray = this.createArrayFromTheme(this.controlObject.colors);
        this.themeAsJson = JSON.stringify(this.createThemeFromArray(this.themeAsArray));
        this.makeArrayDividedByColor();
        console.log(this.controlObject, this.colorGroups);
    }

    public get currentTheme() {
        return this.controlObject;
    }

    public get themeArray() {
        return this.colorGroups;
    }

    public makeArrayDividedByColor() {

        const array = this.createArrayFromTheme(this.controlObject.colors);
        const hash = {};
        const reducedArray = [];

        array.forEach(obj => {
            if (!hash[obj.color]) {

                hash[obj.color] = true;
                reducedArray.push(obj);

            } else {

                reducedArray.map( item => {
                    if (item.color === obj.color) {
                        item.elements.push(obj.elements[0]);
                    }
                });
            }
        });
        this.colorGroups = reducedArray;
    }

    public createArrayFromTheme(obj) {
        const tmpArray = [];
        Object.keys(obj).forEach( key => {
            const tmp = {elements: [], color: ''};
            tmp.elements.push(key);
            tmp.color = obj[key];
            tmpArray.push(tmp);
        });
        return tmpArray;
    }

    // TODO: This needs to build the JSON obj from the reduced array, not the full array;
    // TODO: remember the use case for this...
    public createThemeFromArray(array) {
        const tempObj = {};
        array.forEach( item => {
            console.log();
            tempObj[item.name] = item.color;
        });
        return tempObj;
    }
}
