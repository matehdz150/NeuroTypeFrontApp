import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  isLogged : boolean = false;

    constructor(private authService: AuthService){}

    ngOnInit(): void {
      this.isLogged = this.authService.isLoggedIn();

      this.authService.token$.subscribe((token)=>{
        this.isLogged = !!token;
        if(!this.isLogged){
          console.log('usuario no autenticado');
        }else{
          console.log('usuario autenticado')
        }
      })
    }
}
