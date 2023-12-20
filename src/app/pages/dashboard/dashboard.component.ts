import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  menuItems: any[];

  constructor() {
    this.menuItems = [
      { label: 'Dashboard', icon: 'pi pi-home', routerLink: '/dashboard' },
      {
        label: 'Nasabah/Admin', icon: 'pi pi-users',
        items: [
          { label: 'Nasabah', icon: 'pi pi-user', routerLink: '/nasabah' },
          { label: 'Admin', icon: 'pi pi-user-plus', routerLink: '/admin' },
        ]
      },
      { label: 'Transaksi', icon: 'pi pi-dollar', routerLink: '/transaksi' },
      { label: 'Info Akun', icon: 'pi pi-info', routerLink: '/info-akun' },
      { label: 'Logout', icon: 'pi pi-sign-out', routerLink: '/logout' },
    ];
  }
}
