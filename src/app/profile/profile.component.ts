import { Component } from '@angular/core';
import {NgxCroppedEvent, NgxPhotoEditorService} from "ngx-photo-editor";
import {EditorConfig, ST_BUTTONS} from 'ngx-simple-text-editor';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  
})
export class ProfileComponent {
 
   constructor(private service: NgxPhotoEditorService ) {}
  
   output?: NgxCroppedEvent;
  // fileChangeHandler($event: any) {
  //   this.service.open($event, {
  //     aspectRatio: 4 / 3,
  //     autoCropArea: 1
  //   }).subscribe((data: any) => {
  //     this.output = data;
  //   });
  // }
  
  imageSource(){
    window.open("assets/caroline.jpeg");
        }
        content = '';
        config: EditorConfig = {
          placeholder: 'Type something...',
          buttons: ST_BUTTONS,
        };

        
      

          formData = {
            fname: '',
            lname: '',
             age:'',
            email: '',
            country: ''
          };
        
          fileChangeHandler(formData: any) {
            this.service.open(formData, {
                  aspectRatio: 4 / 3,
                  autoCropArea: 1
                }).subscribe((data: any) => {
                  this.output = data;
                });
          }
        
          editProfile() {
            // Implement edit profile functionality
          }
        
          submit() {
            alert("submitted!")
          }
 
}