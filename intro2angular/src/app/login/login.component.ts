import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  allowedServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated = false;

  constructor() { 
    setTimeout(() => {
      this.allowedServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
    this.serverCreated = true;
    // console.log('nome',this.serverName);
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
