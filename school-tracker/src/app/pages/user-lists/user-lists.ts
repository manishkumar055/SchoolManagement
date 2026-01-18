import { CommonModule, Location } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedModule } from '../../common/shared.module';

interface User {
  id: number;
  name: string;
  role: string;
  class?: string;
  phone: string;
  status: 'ACTIVE' | 'INACTIVE';
  avatar?: string;
}


@Component({
  selector: 'app-user-lists',
  imports: [
    CommonModule,
    SharedModule
  ],
  templateUrl: './user-lists.html',
  styleUrl: './user-lists.scss',
})
export class UserLists {

    private location = inject(Location);


  private route = inject(ActivatedRoute);

  userType = signal<string>('student');
  users = signal<User[]>([]);

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const type = params.get('type') || 'student';
      this.userType.set(type);
      this.loadUsers(type);
    });
  }

  loadUsers(type: string) {

    const names = [
      'Rahul Sharma', 'Neha Verma', 'Amit Singh', 'Pooja Patel',
      'Rohit Kumar', 'Anjali Mehta', 'Suresh Yadav', 'Kiran Joshi',
      'Manish Gupta', 'Priya Singh', 'Vikas Malhotra', 'Sneha Iyer',
      'Arjun Rana', 'Nisha Kapoor', 'Deepak Chauhan', 'Ritu Saxena',
      'Mohit Bansal', 'Kavita Shah', 'Sanjay Mishra', 'Aarti Kulkarni'
    ];

    const users: any = Array.from({ length: 20 }).map((_, index) => ({
      id: index + 1,
      name: names[index],
      role: type,
      class: type === 'student'
        ? `${Math.floor(Math.random() * 4) + 6}${['A', 'B', 'C'][index % 3]}`
        : undefined,
      phone: `9${Math.floor(100000000 + Math.random() * 900000000)}`,
      status: index % 4 === 0 ? 'INACTIVE' : 'ACTIVE',
    }));

    this.users.set(users);
  }

  gotoUserDetailsPage(user: any) {
    
    // this.router.navigate([''])
    this.router.navigateByUrl(`admin/users/${this.userType()}/1`);
  }

  goBack() {
    this.location.back();
  }


}
