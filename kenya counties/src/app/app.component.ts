import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as L from "leaflet";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
	constructor(private http: HttpClient) { }

	ngOnInit() {
		let map: L.Map;
		let geojson: L.GeoJSON;

		map = L.map("map").setView([0.1769, 37.9083], 6.5);//map = L.map("map").setView([47.482019, -2], 7.5);

		L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
			id: "mapbox.light",
			attribution: "SOS"
		}).addTo(map);

		let info;

		info = new L.Control();

		info.onAdd = function () {
			this._div = L.DomUtil.create("div", "info");
			this.update();
			return this._div;
		};

		info.update = function (props: any) {
			this._div.innerHTML =
				"<h4>Selected County</h4>" +
				(props ? "<b>County Name :</b>" + props.COUNTY + "<br />" : "") +
				(props ? "<b>County Capital :</b>" + props.capital + "<br />" : "") +
				(props ? "<b>County Code :</b>" + props.code + "<br />" : "");


		};

		info.addTo(map);

		function resetHighlight(e) {
			geojson.resetStyle(e.target);
			info.update();
		}

		function zoomToFeature(e) {
			map.fitBounds(e.target.getBounds());
		}

		function highlightFeature(e) {
			const layer = e.target;

			layer.setStyle({
				weight: 5,
				color: "#22222",
				dashArray: "",
				fillOpacity: 0.9
			});

			if (!L.Browser.ie && !L.Browser.edge) {
				layer.bringToFront();
			}

			info.update(layer.feature.properties);
		}

		this.http.get("assets/departements.json").subscribe((json: any) => {
			geojson = L.geoJSON(json, {
				style: function (feature) {
					switch (feature.properties.code) {
						case "1":
							return {
								color: "white",
								fillColor: "yellow",
								fillOpacity: 0.99
							};
						case "2":
							return {
								color: "white",
								fillColor: "orange",
								fillOpacity: 0.99
							};
						case "3":
							return {
								color: "white",
								fillColor: "green",
								fillOpacity: 0.99
							};
						case "4":
							return {
								color: "white",
								fillColor: "blue",
								fillOpacity: 0.99
							};
						case "5":
							return {
								color: "white",
								fillColor: "yellow",
								fillOpacity: 0.99
							};
						case "6":
							return {
								color: "white",
								fillColor: "pink",
								fillOpacity: 0.99
							};

						case "44":
							return {
								color: "red",
								fillColor: "white",
								fillOpacity: 0.99
							};
					}
				},
				onEachFeature: function onEachFeature(feature, layer: L.Layer) {
					layer.on({
						mouseover: highlightFeature,
						mouseout: resetHighlight,
						click: zoomToFeature
					});
				}
			}).addTo(map);
		});
	}
}
