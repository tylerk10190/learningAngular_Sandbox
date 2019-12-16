import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styles: [`
    .white-text{
      color: white;
    }
    `]
})

export class Assignment3Component{
  secretMessage: string = 'Secret Password: tuna';
  showMessage: boolean = false;
  log = [];

  onToggleDetails(){
    this.showMessage = !this.showMessage;
    // this.log.push(this.log.length + 1);
    this.log.push(this.log.length + 1);
  }
}
