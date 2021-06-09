import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title) {
    }

    ngOnInit(): void {
        this.setPageTitle();
    }

    private setPageTitle(appName: string = 'Alurapic') {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .pipe(map(() => this.activatedRoute))
            .pipe(map(route => {
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }))
            .pipe(switchMap(route => route.data))
            .subscribe(data => this.titleService.setTitle(!data.title ? appName : appName + ' - ' + data.title));
    }

}
