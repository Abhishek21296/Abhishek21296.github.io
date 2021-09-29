import { AfterContentInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import GitHubCalendar from 'github-calendar';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterContentInit {
  title = 'portfolio';
  loaded: boolean = false;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.loaded = true;
    GitHubCalendar('.calendar', 'Abhishek21296', { responsive: true });
    this.cd.detectChanges();
  }

}
