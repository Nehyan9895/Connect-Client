import { CommonModule } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

function randomID(len: number) {
  let result = '';
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

@Component({
  selector: 'app-video-call',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './video-call.component.html',
  styleUrls: ['./video-call.component.scss']
})
export class VideoCallComponent {
  @ViewChild('root') root!: ElementRef;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private route: ActivatedRoute
  ) {}

  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const roomID = getUrlParams().get('roomID') as string;

      try {
        // Dynamically import the ZegoUIKitPrebuilt library
        const { ZegoUIKitPrebuilt } = await import('@zegocloud/zego-uikit-prebuilt');
        
        if (ZegoUIKitPrebuilt && ZegoUIKitPrebuilt.create) {
          // Generate Kit Token
          const appID = 1251187934;
          const serverSecret = "fe08cd51dd52b9562b35016a17b5c3f6";
          const kitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction(appID, serverSecret, roomID, randomID(5), 'Muhammed Nehyan');

          // Create instance object from Kit Token
          const zp = ZegoUIKitPrebuilt.create(kitToken);

          // Start a call
          zp.joinRoom({
            container: this.root.nativeElement,
            sharedLinks: [
              {
                name: 'Personal link',
                url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}`,
              },
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            turnOnMicrophoneWhenJoining: true,
            turnOnCameraWhenJoining: true,
            showPreJoinView: false,
          });
        } else {
          console.error('ZegoUIKitPrebuilt or required methods are not available');
        }
      } catch (error) {
        console.error('Error loading ZegoUIKitPrebuilt:', error);
      }
    }
  }
}
