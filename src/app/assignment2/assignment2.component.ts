import {Component} from '@angular/core';

@Component ({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html'
})

export class Assignment2Component{
  userName: string = '';
  emptyString = true;

  updateUserName(event: any){
    this.userName = event.target.value;
    this.emptyString = false;
  }

  resetUserName(event: click){
    this.userName = '';
    this.emptyString = true;
  }

}
