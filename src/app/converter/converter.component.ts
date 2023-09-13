import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent {
  selectedMetric: string;
  selectedUnitFrom: string;
  selectedUnitTo: string;
  valueToConvert: number;
  calculatedResult: number = 0;
  result: number = 0;
  metrics: string[] = ['Jarak', 'Berat'];
  units: any = {
    Jarak: ['Meter', 'Centimeter', 'Kilometer'],
    Berat: ['Kilogram', 'Gram', 'Pound']
  };

  constructor() {
    this.selectedMetric = this.metrics[0];
    this.selectedUnitFrom = this.units[this.selectedMetric][0];
    this.selectedUnitTo = this.units[this.selectedMetric][1];
    this.valueToConvert = 1;
  }

  convert() {
    // Konversi berdasarkan metrik yang dipilih
    if (this.selectedMetric === 'Jarak') {
      this.convertLength();
    } else if (this.selectedMetric === 'Berat') {
      this.convertWeight();
    }
  }

  convertLength() {
    const unitFrom = this.selectedUnitFrom;
    const unitTo = this.selectedUnitTo;
    const value = this.valueToConvert;

    // Konversi dari meter ke meter
    if (unitFrom === unitTo) {
      this.result = value;
    }
    // Konversi dari meter ke centimeter
    else if (unitFrom === 'Meter' && unitTo === 'Centimeter') {
      this.result = value * 100;
    }

    // Konversi dari meter ke kilometer
    else if (unitFrom === 'Meter' && unitTo === 'Kilometer') {
      this.result = value / 1000;
    }
    
    // Konversi dari centimeter ke meter
    else if (unitFrom === 'Centimeter' && unitTo === 'Meter') {
      this.result = value / 100;
    }

    // Konversi dari centimeter ke kilometer
    else if (unitFrom === 'Centimeter' && unitTo === 'Kilometer') {
      this.result = value / 100000;
    }

    // Konversi dari kilometer ke meter
    else if (unitFrom === 'Kilometer' && unitTo === 'Meter') {
      this.result = value * 1000;
    }

    // Konversi dari kilometer ke centimeter
    else if (unitFrom === 'Kilometer' && unitTo === 'Centimeter') {
      this.result = value * 100000;
    }
  }

  convertWeight() {
    const unitFrom = this.selectedUnitFrom;
    const unitTo = this.selectedUnitTo;
    const value = this.valueToConvert;
  
    if (unitFrom === unitTo) {
      this.result = value;
    } else if (unitFrom === 'Kilogram' && unitTo === 'Gram') {
      this.result = value * 1000;
    } else if (unitFrom === 'Kilogram' && unitTo === 'Pound') {
      this.result = value * 2.20462;
    } else if (unitFrom === 'Gram' && unitTo === 'Kilogram') {
      this.result = value / 1000;
    } else if (unitFrom === 'Gram' && unitTo === 'Pound') {
      this.result = value / 453.592;
    } else if (unitFrom === 'Pound' && unitTo === 'Kilogram') {
      this.result = value / 2.20462;
    } else if (unitFrom === 'Pound' && unitTo === 'Gram') {
      this.result = value * 453.592;
    }
  }
  
}
