import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsMapComponent } from './components/-musap/us-map.component';
import { MapStates } from './components/us-map/map.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsMapComponent],
  exports: [UsMapComponent],
  providers: [MapStates],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SlMapModule { }