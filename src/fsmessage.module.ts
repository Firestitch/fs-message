import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { MatDialogModule, MatIconModule, MatButtonModule } from '@angular/material';

import { FsMessage } from './fsmessage.service';
import { FsMessageDialogComponent } from './components/fsmessagedialog/fsmessagedialog.component';
import { FsMessagesComponent } from './components/fsmessages/fsmessages.component';
import { FsMessageComponent } from './components/fsmessage/fsmessage.component';

@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot({ preventDuplicates: true }),
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    FsMessagesComponent,
    FsMessageComponent
  ],
  entryComponents: [
    FsMessageDialogComponent
  ],
  declarations: [
    FsMessagesComponent,
    FsMessageComponent,
    FsMessageDialogComponent
  ],
  providers: [
    FsMessage,
    ToastrService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FsMessageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsMessageModule,
      providers: [FsMessage]
    };
  }
}