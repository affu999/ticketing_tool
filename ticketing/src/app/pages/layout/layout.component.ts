import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeModel } from '../../core/models/API.model';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {

  employeeModel: EmployeeModel = new EmployeeModel();

  ngOnInit() {
    this.navbarSettings();
    let localData: any = localStorage.getItem('loginData');
    this.employeeModel = JSON.parse(localData);
  }

  navbarSettings() {
    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");
    let searchBtn = document.querySelector(".bx-search");
    let navList = document.querySelector(".nav-list");

    closeBtn?.addEventListener("click", () => {
      sidebar?.classList.toggle("open"); 
      navList?.classList.toggle("scroll"); 
      menuBtnChange(); 
    });
    
    searchBtn?.addEventListener("click", () => {
      sidebar?.classList.toggle("open");
      navList?.classList.toggle("scroll");
      menuBtnChange(); 
    });

    function menuBtnChange() {
      if (sidebar?.classList.contains("open")) {
        closeBtn?.classList.replace("bx-menu", "bx-menu-alt-right"); // Change icon to indicate closing
      } else {
        closeBtn?.classList.replace("bx-menu-alt-right", "bx-menu"); // Change icon to indicate opening
      }
    }
  }

  
}
