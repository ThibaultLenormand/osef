import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacesetCreateComponent } from './component/faceset-create/faceset-create.component';
import { FacesetAddFaceComponent } from './component/faceset-add-face/faceset-add-face.component';
import { FacesetRemoveFaceComponent } from './component/faceset-remove-face/faceset-remove-face.component';
import { FacesetUpdateComponent } from './component/faceset-update/faceset-update.component';
import { FacesetGetDetailComponent } from './component/faceset-get-detail/faceset-get-detail.component';
import { FacesetDeleteComponent } from './component/faceset-delete/faceset-delete.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FacesetCreateComponent, FacesetAddFaceComponent, FacesetRemoveFaceComponent, FacesetUpdateComponent, FacesetGetDetailComponent, FacesetDeleteComponent]
})
export class FacesetModule { }
