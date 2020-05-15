import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.scss'],
})

/**
 * Consulting product page component
 */
export class ConsultingComponent implements OnInit {
  // Browser title
  title: string = 'Myma ~ Consulting';

  /**
   * ConsultingComponent constructor
   * @param titleService Injects the TitleService in the component
   */
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    // Sets the browser title
    this.titleService.setTitle(this.title);
  }
}
