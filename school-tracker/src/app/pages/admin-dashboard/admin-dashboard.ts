import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../common/shared.module';
import { AppHeader } from '../../shared/components/app-header/app-header';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [
    CommonModule,
    SharedModule,
    // AppHeader
  ],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss',
})
export class AdminDashboard {

  constructor(private router: Router) {}

  dashboardCards = [
    { title: 'Students', icon: '🎓', value: 420, route: 'admin/users/students' },
    { title: 'Teachers', icon: '👩‍🏫', value: 35, route: 'admin/users/teachers' },
    { title: 'Staff', icon: '🧑‍💼', value: 18, route: 'admin/users/staff' },
    { title: 'Library', icon: '📚', value: '1200 Books', route: '/admin/library' },
    { title: 'Holidays', icon: '🏖️', value: '3 Upcoming', route: '/admin/holidays' },
    { title: 'Attendance', icon: '📊', value: '92%', route: '/admin/attendance' },
    { title: 'Exam Toppers', icon: '🏆', value: 'Top 5', route: '/admin/toppers' },
  ];

  growthStats = [
  { label: 'Fees', value: 35 },
  { label: 'Donation', value: 61 },
  { label: 'Income', value: 87 },
  { label: 'Expense', value: 42 }
];


  navigateUserList(route: string) {
    this.router.navigateByUrl(route);
  }
}
