import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nimap_assessment';
  // register box

  
  url: any; 
	msg = "";
	
	
	selectFile(event: any) { 
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result; 
		}
	}
  formData: any = {}; 
  calculateProgress(): number {
    // Adjust the maximum age as needed
    const maxAge = 100;
    
    // Calculate the progress percentage based on the entered age
    return (this.formData.age / maxAge) * 100;
  }
 
  subscribeToNewsletter: boolean = false;
  
  onSubmit() {
   
    console.log('Form submitted:', this.formData);
  }

  submit(){
	alert('submitted')
  }
  cancel(){
	alert('cancelled....')
  }
  

}
