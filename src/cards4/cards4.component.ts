import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cards4',
  templateUrl: './cards4.component.html',
  styleUrls: ['./cards4.component.scss']
})
export class Cards4Component implements OnInit {

  constructor(public authService: AuthService, public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

}
