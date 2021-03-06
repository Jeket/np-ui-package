import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpRichTextComponent } from './np-rich-text.component';
import { NpUtilityModule } from '../np-utility/np-utility.module';
import { FormsModule } from '@angular/forms';
import { NpColorPickerModule } from '../np-color-picker/np-color-picker.module';
import { NpPopoverModule } from '../np-popover/np-popover.module';
import { NpTranslationsModule } from '../np-translations/np-tranlations.module';

@NgModule({
  declarations: [NpRichTextComponent],
  imports: [
    CommonModule,
    NpUtilityModule,
    FormsModule,
    NpUtilityModule,
    NpColorPickerModule,
    NpPopoverModule,
    NpTranslationsModule
  ],
  exports: [NpRichTextComponent]
})
export class NpRichTextModule { }
