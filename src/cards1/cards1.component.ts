import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cards1',
  templateUrl: './cards1.component.html',
  styleUrls: ['./cards1.component.scss']
})
export class Cards1Component implements OnInit {

  constructor(public authService: AuthService, public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

}
