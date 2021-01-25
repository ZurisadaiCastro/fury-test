import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { FileUploadModule } from 'ng2-file-upload';

@Component({
  selector: 'fury-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  // animations:[
  //   trigger{'fadeInOut',[
  //     state{'in', style{[ opacity:100]}},

  //   ]}

  // ]
})
export class FileUploadComponent implements OnInit {

  // @Input() text = 'Upload';
  // @Input() param = 'file';
  // @Input() target = 'https://file.io';
  // @Input() accept = 'text/*';

  // @Output() complete = new EventEmitter<string>();
  // fileInformation: any;
  // private files: Array<FileUploadModule> = [];

  // constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }

}
