import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import { platformBrowserDynamic }
    from '@angular/platform-browser-dynamic';

import {AppModule} from './components/appMain/appMain.module';

platformBrowserDynamic().bootstrapModule(AppModule);