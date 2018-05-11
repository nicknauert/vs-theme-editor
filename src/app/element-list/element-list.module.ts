import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementListComponent } from './element-list.component';
import { ColorBlockComponent } from './components/color-block/color-block.component';
import { ColorTooltipComponent } from './components/color-pick-tt/color-tooltip.component';

@NgModule({
    declarations: [
        ElementListComponent,
        ColorBlockComponent,
        ColorTooltipComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ElementListComponent,
        ColorBlockComponent,
        ColorTooltipComponent,
    ]
})
export class ElementListModule { }
