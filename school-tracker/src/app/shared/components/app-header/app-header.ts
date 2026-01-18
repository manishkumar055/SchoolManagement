import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { SharedModule } from '../../../common/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-header',
  imports: [
    CommonModule,
    SharedModule
  ],
  templateUrl: './app-header.html',
  styleUrl: './app-header.scss',
})
export class AppHeader {

  student = signal({
    name: 'Rahul Sharma',
    class: '5A',
    roll: '23',
    status: 'INSIDE',
    photoUrl: ''
  });
  openCameraTOClickPicture = true;

  @ViewChild('video') videoRef!: ElementRef<HTMLVideoElement>;
  studentPhoto: string | null = null;
  photoCaptured = false;
  private stream: MediaStream | null = null;

  async ngOnInit() {
    // await this.startCamera();
  }

  async startCamera() {
    try {
      this.photoCaptured = false;
      this.photoConfirmed = false;
      this.openCameraTOClickPicture = false;
      setTimeout(async() => {
        this.stream = await navigator.mediaDevices.getUserMedia({ video: true });
        this.videoRef.nativeElement.srcObject = this.stream;
        
      }, 50);
    } catch (err) {
      console.error('Camera access error:', err);
      alert('Camera not available or access denied.');
    }
  }

  capturePhoto() {
    if (!this.videoRef) return;

    const video = this.videoRef.nativeElement;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext('2d');
    if (context) {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      this.studentPhoto = canvas.toDataURL('image/png'); // base64 photo
    }

    // Stop camera after capture
    this.stopCamera();
    this.photoCaptured = true;
    this.openCameraTOClickPicture = false;
  }

  photoConfirmed = false;
  confirmPhoto() {
    this.photoConfirmed = true;
    // Save this.studentPhoto to backend here
  }

  stopCamera() {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
    }
  }

  ngOnDestroy() {
    this.stopCamera();
  }

}
