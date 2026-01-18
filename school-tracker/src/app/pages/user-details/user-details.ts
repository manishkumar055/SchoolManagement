import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { SharedModule } from '../../common/shared.module';


@Component({
  selector: 'app-user-details',
  imports: [
    CommonModule,
    SharedModule
  ],
  templateUrl: './user-details.html',
  styleUrl: './user-details.scss',
})
export class UserDetails {

  private route = inject(ActivatedRoute);
  private location = inject(Location);

  user: any;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const type = this.route.snapshot.paramMap.get('type');

    // Mock data (replace later with API)
    this.user = {
      id,
      name: 'Rahul Sharma',
      role: type,
      class: type === 'student' ? '8A' : null,
      phone: '9876543210',
      status: 'ACTIVE'
    };
  }

  goBack() {
    this.location.back();
  }

}
