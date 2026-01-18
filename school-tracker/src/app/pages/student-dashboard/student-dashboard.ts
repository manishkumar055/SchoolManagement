import { CommonModule } from '@angular/common';
import { Component, signal, ViewChild, ElementRef } from '@angular/core';
import { SharedModule } from '../../common/shared.module';
import { AppHeader } from '../../shared/components/app-header/app-header';


@Component({
  selector: 'app-student-dashboard',
  imports: [
    CommonModule,
    SharedModule,
    AppHeader
  ],
  templateUrl: './student-dashboard.html',
  styleUrl: './student-dashboard.scss',
})
export class StudentDashboard {

  

  today = signal({
    entry: '08:45 AM',
    exit: '--'
  });

  taskOfTheDay = [
    {
      time: '08:20 AM - 09:05 AM',
      task: 'English',
      status: 'ATTENDED'
    },
    {
      time: '09:20 AM - 10:05 AM',
      task: 'Mathematics',
      status: 'PENDING'
    },
    {
      time: '10:20 AM - 11:05 AM',
      task: 'Science',
      status: 'PENDING'
    },
    {
      time: '11:20 AM - 12:05 PM',
      task: 'Social Studies',
      status: 'ABSENT'
    },
    {
      time: '12:20 PM - 01:05 PM',
      task: 'Hindi',
      status: 'PENDING'
    }
  ];

  schoolEvents = [
    {
      date: '2026-01-20',
      title: 'Annual Sports Day',
      description: 'Inter-house sports competitions including races, cricket, and football.',
      type: 'Sports'
    },
    {
      date: '2026-01-25',
      title: 'Science Exhibition',
      description: 'Students display innovative science projects in the school hall.',
      type: 'Academic'
    },
    {
      date: '2026-02-01',
      title: 'Cultural Fest',
      description: 'Dance, music, and drama performances by students.',
      type: 'Cultural'
    },
    {
      date: '2026-02-10',
      title: 'Parent-Teacher Meeting',
      description: 'Discuss academic progress and future plans with teachers.',
      type: 'Meeting'
    },
    {
      date: '2026-02-15',
      title: 'Annual Day Celebration',
      description: 'School awards ceremony and performances by students.',
      type: 'Celebration'
    }
  ];

  

  





}
