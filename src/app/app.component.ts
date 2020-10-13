import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WorldWarAngular';
  mode = 'industry';

  //Create the global storage variables for future use
  leaderInputName: string;
  selectedCountry: string;
  startingLumber: string;
  startingSteel: string;
  startingGunpowder: string;
  startingFuel: string;


  /**
   *
   */
  constructor() {
  }

  showMode(nextMode: string): void {
    this.mode = nextMode;
    console.log('mode set to ' + this.mode);
  }

  //---------------------COUNTRY SELECTOR BUTTONS----------------------------


  selectAmerica() {
    this.selectCountry('America');
  }
  selectChina() {
    this.selectCountry('China');
  }
  selectRussia() {
    this.selectCountry('Russia');
  }

  selectCountry(selectedCountry: string) {
    //Change global variable for selected country
    this.selectedCountry = selectedCountry;

    console.log(this.selectedCountry + ' selected');
  }

  // SUBMIT COUNTRY DATA TO LOCAL STORAGE
  loadCountryDataToLocalStorage(): void {
    let startingLumber = 0;
    let startingSteel = 0;
    let startingGunpowder = 0;
    let startingFuel = 0;

    // this.leaderInputName = document.getElementById("leaderInputBox").value;
    // alert(leaderInputName)

    // Creating local storage values for now and future use
    localStorage.setItem('WWi-A1-leadername', this.leaderInputName);
    localStorage.setItem('WWi-A1-selectedcountry', this.selectedCountry);
    if (this.selectedCountry == 'America') {
      startingLumber = 100;
      startingSteel = 300;
      startingGunpowder = 200;
      startingFuel = 100;
    }
    if (this.selectedCountry == 'China') {
      startingLumber = 200;
      startingSteel = 100;
      startingGunpowder = 400;
      startingFuel = 100;
    }
    if (this.selectedCountry == 'Russia') {
      startingLumber = 300;
      startingSteel = 100;
      startingGunpowder = 100;
      startingFuel = 300;
    }

    // Refinery counts in local storage
    localStorage.setItem('WWi-A1-lumbermillcount', '0');
    localStorage.setItem('WWi-A1-steelminecount', '0');
    localStorage.setItem('WWi-A1-gunpowderplantcount', '0');
    localStorage.setItem('WWi-A1-fuelplantcount', '0');

    // Unit counts in local storage
    localStorage.setItem('WWi-A1-unitsoldiercount', '0');
    localStorage.setItem('WWi-A1-unitapccount', '0');
    localStorage.setItem('WWi-A1-unittankcount', '0');
    localStorage.setItem('WWi-A1-unitjetcount', '0');

    // Resource counts in local storage
    localStorage.setItem('WWi-A1-lumberresourcecount', startingLumber.toString());
    localStorage.setItem('WWi-A1-steelresourcecount', startingSteel.toString());
    localStorage.setItem('WWi-A1-gunpowderresourcecount', startingGunpowder.toString());
    localStorage.setItem('WWi-A1-fuelresourcecount', startingFuel.toString());

    // continue doin stuff
    // var mainApp = document.getElementById("main-app-container")
    // var creatorApp = document.getElementById("country-creator-splash")
    // creatorApp.style.display = "none";
    // mainApp.style.display = "block";

    // var industryContainer = document.getElementById("Industry-Container");
    // var trainingContainer = document.getElementById("Training-Container");
    // var operationsContainer = document.getElementById("Operations-Container");
    // var statisticsContainer = document.getElementById("Statistics-Container");
    // industryContainer.style.display = "block";
    // trainingContainer.style.display = "none";
    // operationsContainer.style.display = "none";
    // statisticsContainer.style.display = "none";
  }

  // Populate current amounts in html
  public popCurrentAmmounts(): void {
    // Populate Current Amounts for refineries in industry tab
    this.getCurrentAmount('WWi-A1-lumbermillcount', 'lumberMillCurrentCount');
    this.getCurrentAmount('WWi-A1-steelminecount', 'steelMineCurrentCount');;
    this.getCurrentAmount('WWi-A1-gunpowderplantcount', 'gunpowderPlantCurrentCount');
    this.getCurrentAmount('WWi-A1-fuelplantcount', 'fuelPlantCurrentCount');

    // Populate Current Ammounts for units in training tab
    this.getCurrentAmount('WWi-A1-unitsolidercount', 'unitsoldierCurrentCount');
    this.getCurrentAmount('WWi-A1-unitapccount', 'unitapcCurrentCount');
    this.getCurrentAmount('WWi-A1-unittankcount', 'unittankCurrentCount');
    this.getCurrentAmount('WWi-A1-unitjetcount', 'unitjetCurrentCount');
  }

  // INCREMENTING INDUSTRY VALUES
  public onClick_createIndustryObject(x): void {
    let currentResourceCount = +localStorage.getItem(x);
    currentResourceCount += 1;
    localStorage.setItem(x, currentResourceCount.toString());
  }

  // INCREMENT UNIT VALUES
  public onClick_createUnitObject(x): void {
    let currentUnitCount = +localStorage.getItem(x);
    currentUnitCount += 1;
    localStorage.setItem(x, currentUnitCount.toString());
  }

  // GET CURRENT VALUES FOR CARD
  getCurrentAmount(x, y): void {
    const storageamount = localStorage.getItem(x);
    document.getElementById(y).innerHTML = 'Current Amount: ' + storageamount;
  }


}
