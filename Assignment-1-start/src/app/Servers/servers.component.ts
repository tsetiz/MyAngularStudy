import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls : ['servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'Server is not created';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer','TestServer 2'];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server is created ! Name is ' + this.serverName;
  }

  updateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
