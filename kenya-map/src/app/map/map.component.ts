import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';
import { MapCounty } from './mapCounty';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent  implements OnChanges, OnInit { 
  @Input()
  ids: any;
  @Input()
  enableTooltip!: boolean;
  @Input()
  toolTipObject: any;
  @Input()
  colors:any = {
    unfill: '#b6b6b6',
    fill: '#518a38'
  }
  showToolTip!: boolean;
  change: any;
  constructor(public mapStates: MapCounty){}
  ngOnInit(){ 
  }
  ngOnChanges(changes: SimpleChanges){
    this.setUnfillColor();
    this.change = JSON.parse(JSON.stringify(changes.ids)) 
    this.change.currentValue.forEach(data => {
      document.getElementById(data.code).style.fill = this.colors.fill; 
    }); 
  } 
  setUnfillColor(){ 
    Object.keys(this.mapStates.countylist).forEach(id => { 
      document.getElementById(id).style.fill = this.colors.unfill; 
    }); 
  }
  mouseEnter(ttid, e, id){ 
      document.getElementById(id).style['stroke-width']= "1.999999";  
      if(this.enableTooltip){ 
        this.toolTipObject = this.createToolTipData(event, id);
        this.positionToolTip(e, ttid); 
      }
  }
  mouseLeave(ttid, e, id){
      document.getElementById(id).style['stroke-width']= "0.970631";  
      if(this.enableTooltip){
        this.showToolTip = false;
        this.toolTipObject = {};
      }
  }
  createToolTipData(event,id){ 
      let selectedstate  = JSON.parse(JSON.stringify(this.change.currentValue));
      selectedstate = selectedstate.filter(data => {
              return data.code === id
            })[0]; 
      if(selectedstate && selectedstate.code === id){
        this.showToolTip = true;
        selectedstate['state'] = this.mapStates.countylist[id];
        delete selectedstate.code;
        return Object.keys(selectedstate).map((key, value) => {
          return [key, selectedstate[key]]; 
        });
      } 
  }
  positionToolTip(e, ttid){ 
    document.getElementById(ttid).style.left = `${e.clientX+2}px`; 
    document.getElementById(ttid).style.top = `${e.clientY+2}px`;  
  }
}
// #518a38 fill
// #e2e2e2 unfill