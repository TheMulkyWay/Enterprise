import { CommonModule } from '@angular/common';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule,
    MatButtonModule, MatRadioModule,
    MatSliderModule,
    MatTooltipModule,
    MatTabsModule,
    MatInputModule, MatBottomSheetModule,
    MatSnackBarModule, MatSidenavModule, MatCardModule, MatTableModule,
    MatIconModule, MatListModule, MatPaginatorModule,
    MatFormFieldModule, MatCheckboxModule,
    MatSortModule, MatDialogModule,
    MatSlideToggleModule],
  exports: [CommonModule,
    MatButtonModule,
    MatSliderModule,
    MatTooltipModule,
    MatTabsModule,
    MatInputModule, MatRadioModule, MatBottomSheetModule,
    MatSnackBarModule, MatSidenavModule, MatCardModule,
    MatTableModule, MatIconModule, MatListModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule, MatDialogModule, MatCheckboxModule,
    MatSlideToggleModule]
})

export class UImaterialmodule { }
