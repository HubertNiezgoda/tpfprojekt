import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cards3',
  templateUrl: './cards3.component.html',
  styleUrls: ['./cards3.component.scss']
})
export class Cards3Component implements OnInit {

  constructor(public authService: AuthService, public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

}
