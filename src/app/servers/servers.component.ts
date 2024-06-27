import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onRelod() {
    this.router.navigate( // Unlike the router link, the navigate method does not know what route we're currently on. The routerlink sits in the components template and always knows where it is.
      ['servers'], 
    {relativeTo: this.route}); // This will navigate to the specified route, then resolve any routes that we have defined in the array above
  }

}
