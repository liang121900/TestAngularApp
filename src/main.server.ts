import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

if (environment.environment=='prod') {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
