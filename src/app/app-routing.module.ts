import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { PetComponent } from './pet/pet.component';
import { ProductComponent } from './product/product.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  { path: 'font', component:FontSizeEditorComponent },
  { path: 'pet', component:PetComponent },
  { path: 'product', component:ProductComponent },
  { path: 'calculator', component:CalculatorComponent },
  { path: 'colorpicker', component:ColorPickerComponent },
  { path: 'hackernews', component:ArticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
