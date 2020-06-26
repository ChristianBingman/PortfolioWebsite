import { Component, OnInit } from '@angular/core';

export class CardObj {
  imgSrc: String;
  imgTxt: String;
  imgHd:  String;
  imgLn:  String;
  constructor(imgS: String, imgH: String, imgT: String, imgL: String) {
    this.imgSrc = imgS;
    this.imgTxt = imgT;
    this.imgHd  = imgH;
    this.imgLn  = imgL;
  }
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  cardsFeatured: CardObj[] = [
    new CardObj("../../assets/terminalSample.png", "Mini-Blockchain", "A blockchain class written in C++ with block and blockchain verification", "https://github.com/ChristianBingman/Mini-Blockchain"),
    new CardObj("../../assets/terminalSample.png", "Graph Class", "A graph class used to create undirected graphs in C++ with weighted edges", "https://github.com/ChristianBingman/BasicGraph"),
    new CardObj("../../assets/terminalSample.png", "Sorting Visualizer", "Visualizes several sorting algorithms in the terminal", "https://github.com/ChristianBingman/Sorting-Visualizer"),
    new CardObj("../../assets/terminalSample.png", "UBIF Portal CSV Creator", "Uses your portal cookies to grab all workorders by the created by date and puts the data into a CSV", "https://github.com/ChristianBingman/UBIFtoCSV"),
  ];

  cardsAll: CardObj[] = [
    new CardObj("../../assets/terminalSample.png", "Mini-Blockchain", "A blockchain class written in C++ with block and blockchain verification", "https://github.com/ChristianBingman/Mini-Blockchain"),
    new CardObj("../../assets/terminalSample.png", "Graph Class", "A graph class used to create undirected graphs in C++ with weighted edges", "https://github.com/ChristianBingman/BasicGraph"),
    new CardObj("../../assets/terminalSample.png", "Sorting Visualizer", "Visualizes several sorting algorithms in the terminal", "https://github.com/ChristianBingman/Sorting-Visualizer"),
    new CardObj("../../assets/terminalSample.png", "UBIF Portal CSV Creator", "Uses your portal cookies to grab all workorders by the created by date and puts the data into a CSV", "https://github.com/ChristianBingman/UBIFtoCSV"),
    new CardObj("../../assets/terminalSample.png", "Hashing", "Imports a CSV file and uses a hashtable to store the data to be able to easily sort through", "https://github.com/ChristianBingman/BasicHashing"),
    new CardObj("../../assets/terminalSample.png", "Work-Play", "A program that finds possible conversions from one word to another using a dictionary from CS141", "https://github.com/ChristianBingman/Work-Play"),
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
