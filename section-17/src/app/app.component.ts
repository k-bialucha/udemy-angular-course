import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017),
    },
  ];

  filterKey = '';

  appStatus = new Promise(resolve => {
    setTimeout(() => {
      resolve('good');
    }, 999);
  });

  getStatusClasses(server: {
    instanceType: string;
    name: string;
    status: string;
    started: Date;
  }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical',
    };
  }

  addServer() {
    const firstWords = ['Dude', 'Some', 'Zyron'];
    const firstWordIndex = Math.floor(firstWords.length * Math.random());

    const types = ['small', 'medium', 'large'];
    const typeIndex = Math.floor(firstWords.length * Math.random());

    const statuses = ['stable', 'offline', 'critical'];
    const statusIndex = (firstWordIndex + typeIndex) % statuses.length;

    this.servers.push({
      name: `${firstWords[firstWordIndex]} Servver X33 Medium Pro`,
      status: statuses[statusIndex],
      instanceType: types[typeIndex],
      started: new Date(29, 7, 1994),
    });
    // updates the filtered list of servers in 'pure' pipe
    // this.servers = [
    //   ...this.servers,
    //   {
    //     name: 'Some Servver X33 Medium Pro',
    //     status: 'stable',
    //     instanceType: 'small',
    //     started: new Date(29, 7, 1994),
    //   },
    // ];
  }
}
