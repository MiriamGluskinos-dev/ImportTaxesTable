import { Component, Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from "@angular/platform-browser";
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './services/config.service';
import { PrimeNGConfig } from 'primeng/api';

@Directive({
  selector: "[appHtmlreaderHeader]"
})
export class HtmlreaderDirectiveHeader {
  headerUrl: any;
  private data: any;
  constructor(
    el: ElementRef,
    renderer: Renderer2,
    http: HttpClient,
    private configService: ConfigService
  ) {
    this.headerUrl = this.configService.getConfiguration().headerUrl;
    http.get(this.headerUrl, { responseType: "text" }).subscribe(res => {
      this.data = res;
      renderer.setProperty(el.nativeElement, "innerHTML", this.data);
    });
  }
}


@Directive({
  selector: "[appHtmlreaderFooter]"
})
export class HtmlreaderDirectiveFooter {
  footerUrl: any;
  private data: any;
  constructor(
    el: ElementRef,
    renderer: Renderer2,
    http: HttpClient,
    private configService: ConfigService
  ) {
    this.footerUrl = this.configService.getConfiguration().footerUrl;
    http.get(this.footerUrl, { responseType: "text" }).subscribe(res => {
      this.data = res;
      renderer.setProperty(el.nativeElement, "innerHTML", this.data);
    });
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../styles.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
    private config: PrimeNGConfig,
  ) { }

  ngOnInit() {
    this.config.setTranslation({
      dayNames: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
      dayNamesShort: ["א", "ב", "ג", "ד", "ה", "ו", "ש"],
      dayNamesMin: ["א", "ב", "ג", "ד", "ה", "ו", "ש"],
      monthNames: [
        "ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני",
        "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"
      ],
      monthNamesShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"],
      today: "היום",
      clear: "נקה",
      weekHeader: "שבוע"
    });
  }
  title: string = '';
  descriptionLines: string[] = [];

  // constructor() { }

  onActivate(event: any) {
    this.title = event.title;
    this.descriptionLines = event.descriptionLines;
    this.titleService.setTitle(event.title == undefined ? 'רשות המסים בישראל' : event.title);

  }
}
