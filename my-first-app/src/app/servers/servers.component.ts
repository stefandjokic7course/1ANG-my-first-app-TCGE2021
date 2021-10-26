import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers'
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server is created';
  serverName: string = '';
  username: string;
  servernameEntered: boolean = false;
  servers = ['ServerTest1', 'ServerTest2'];
  isSecretPasswordVisible: boolean = true;
  clicks: number[] = [];
  counter: number = 1;
 
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onAddNewServer() {
    this.servernameEntered = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "You have just created the server! Server name is:" + this.serverName!;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onDisplayDetails() {
    this.isSecretPasswordVisible = this.isSecretPasswordVisible === true ? false : true;
    this.clicks.length === 0 ? this.clicks.push(1): this.clicks.push(this.counter);
    this.counter ++;
    console.log(this.clicks);
    
  }

  getColor() {
    return this.clicks.length >=5 ? 'blue' : 'white';
  }
}
