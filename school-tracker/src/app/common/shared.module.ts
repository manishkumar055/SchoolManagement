import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { HttpInterceptService } from '../interceptor/http-intercept-service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        RouterModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        RouterModule,
    ],
    providers: []
})
export class SharedModule { }
