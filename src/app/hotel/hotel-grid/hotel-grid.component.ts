import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hotel-grid',
  templateUrl: './hotel-grid.component.html',
  styleUrls: ['./hotel-grid.component.css']
})
export class HotelGridComponent implements OnInit {

  hotels= [
    {
      "address": "200 Union Place, Colombo 02",
      "email": "hilton@example.com",
      "id": 1,
      "imgPath": "../assets/img/image1.jpg",
      "location": "colombo",
      "name": "Hilton Colombo",
      "price": 300,
      "rooms": [
        {
          "description": "130 sq. meters, kitchen, living/dining/laundry areas, bathtub",
          "facilities": [
            "Free WiFi",
            "Air conditioning",
            "Refrigerator",
            "Minibar",
            "Bathrobes",
            "Telephone"
          ],
          "id": 1,
          "imgPath": "../assets/img/image11.jpg",
          "name": "2 Bed Room Suite",
          "price": "150",
          "roomBasis": [
            "Room only"
          ]
        },
        {
          "description": "130 sq. meters, high floor, full kitchen, living/dining/",
          "facilities": [
            "Telephone",
            "Club Access",
            "Laundry",
            "Parking",
            "Pool",
            "Spa Access"
          ],
          "id": 2,
          "imgPath": "../assets/img/image12.jpg",
          "name": "2 Bed Deluxe Suite",
          "price": "165",
          "roomBasis": [
            "Bed and Breakfast"
          ]
        },
        {
          "description": "158 sq. meters, kitchen, living/dining/laundry areas, bathtub",
          "facilities": [
            "Telephone",
            "Club Access",
            "Laundry",
            "Parking",
            "Pool",
            "Spa Access"
          ],
          "id": 3,
          "imgPath": "../assets/img/image13.jpg",
          "name": "3 Bed Room Suite",
          "price": "170",
          "roomBasis": [
            "Half Board"
          ]
        },
        {
          "description": "Complimentary mini bar, open plan kitchen, whirlpool bathtub",
          "facilities": [
            "Telephone",
            "Club Access",
            "Laundry",
            "Parking",
            "Pool",
            "Spa Access"
          ],
          "id": 4,
          "imgPath": "../assets/img/image14.jpg",
          "name": "Superior Suite",
          "price": "180",
          "roomBasis": [
            "Full Board"
          ]
        }
      ],
      "travellers": [
        {
          "age": 35,
          "firstName": "John",
          "gender": "Male",
          "id": 1,
          "lastName": "Doe",
          "title": "Mr",
          "type": "Adult"
        },
        {
          "age": 30,
          "firstName": "Lisa",
          "gender": "Female",
          "id": 2,
          "lastName": "Doe",
          "title": "Mrs",
          "type": "Adult"
        },
        {
          "age": 12,
          "firstName": "Mark",
          "gender": "Male",
          "id": 3,
          "lastName": "Doe",
          "title": "Mr.",
          "type": "Child"
        }
      ]
    },
    {
      "address": "64 Lotus Rd, Colombo 00100",
      "email": "galadari@example.com",
      "id": 2,
      "imgPath": "../assets/img/image2.jpg",
      "location": "colombo",
      "name": "Galadari Colombo",
      "price": 400,
      "rooms": [
        {
          "description": "300 square feet, 1 Double Bed, Room sleeps 3 guests up to 1 children",
          "facilities": [
            "Free WiFi",
            "LCD TV",
            "Refrigerator",
            "Minibar",
            "Bathrobes"
          ],
          "id": 1,
          "imgPath": "../assets/img/image11.jpg",
          "name": "Superior Suite",
          "price": "150",
          "roomBasis": [
            "Room only"
          ]
        },
        {
          "description": "484 square feet, 1 Double Bed, Room sleeps 3 guests up to 1 children",
          "facilities": [
            "Free WiFi",
            "LCD TV",
            "Refrigerator",
            "Minibar",
            "Bathrobes"
          ],
          "id": 2,
          "imgPath": "../assets/img/image12.jpg",
          "name": "Diplomatic suite",
          "price": "165",
          "roomBasis": [
            "Bed and Breakfast"
          ]
        },
        {
          "description": "600 square feet, 1 King Bed, Room sleeps 2 guests up to 1 children",
          "facilities": [
            "Free WiFi",
            "LCD TV",
            "Refrigerator",
            "Minibar",
            "Bathrobes"
          ],
          "id": 3,
          "imgPath": "../assets/img/image13.jpg",
          "name": "Executive Suite",
          "price": "170",
          "roomBasis": [
            "Half Board"
          ]
        },
        {
          "description": "431 square feet, 1 Double Bed, Room sleeps 3 guests up to 2 children",
          "facilities": [
            "Free WiFi",
            "LCD TV",
            "Refrigerator",
            "Minibar",
            "Bathrobes"
          ],
          "id": 4,
          "imgPath": "../assets/img/image14.jpg",
          "name": "Royal Suite",
          "price": "180",
          "roomBasis": [
            "Full Board"
          ]
        },
        {
          "description": "500 square feet, 1 King Bed, Room sleeps 2 guests up to 1 children",
          "facilities": [
            "Free WiFi",
            "LCD TV",
            "Refrigerator",
            "Minibar",
            "Bathrobes"
          ],
          "id": 5,
          "imgPath": "../assets/img/image15.jpg",
          "name": "Presidential Room",
          "price": "200",
          "roomBasis": [
            "Full Board"
          ]
        }
      ],
      "travellers": [
        {
          "age": 21,
          "firstName": "James",
          "gender": "Male",
          "id": 1,
          "lastName": "Miller",
          "title": "Mr.",
          "type": "Adult"
        },
        {
          "age": 24,
          "firstName": "Paul",
          "gender": "Male",
          "id": 2,
          "lastName": "Miller",
          "title": "Mr.",
          "type": "Adult"
        },
        {
          "age": 28,
          "firstName": "Jeniffer",
          "gender": "Female",
          "id": 3,
          "lastName": "Miller",
          "title": "Mrs.",
          "type": "Adult"
        },
        {
          "-KuxcKCYfrQSY_thl3rm": {
            "age": 28,
            "firstName": "Jeniffer",
            "gender": "Female",
            "id": 3,
            "lastName": "Miller",
            "title": "Mrs.",
            "type": "Adult"
          }
        }
      ]
    },
    {
      "address": "77 Galle Rd, Colombo 00300",
      "email": "cinnamongrand@example.com",
      "id": 3,
      "imgPath": "../assets/img/image3.jpg",
      "location": "colombo",
      "name": "Cinnamon Grand Hotel",
      "price": 350,
      "rooms": [
        {
          "description": "300 square feet, 1 Double Bed, Room sleeps 3 guests up to 1 children",
          "facilities": [
            "Free WiFi",
            "LCD TV",
            "Refrigerator",
            "Minibar",
            "Bathrobes"
          ],
          "id": 1,
          "imgPath": "../assets/img/image11.jpg",
          "name": "Superior Suite",
          "price": "150",
          "roomBasis": [
            "Room only"
          ]
        },
        {
          "description": "484 square feet, 1 Double Bed, Room sleeps 3 guests up to 1 children",
          "facilities": [
            "Free WiFi",
            "LCD TV",
            "Refrigerator",
            "Minibar",
            "Bathrobes"
          ],
          "id": 2,
          "imgPath": "../assets/img/image12.jpg",
          "name": "Diplomatic suite",
          "price": "165",
          "roomBasis": [
            "Bed and Breakfast"
          ]
        },
        {
          "description": "600 square feet, 1 King Bed, Room sleeps 2 guests up to 1 children",
          "facilities": [
            "Free WiFi",
            "LCD TV",
            "Refrigerator",
            "Minibar",
            "Bathrobes"
          ],
          "id": 3,
          "imgPath": "../assets/img/image13.jpg",
          "name": "Executive Suite",
          "price": "170",
          "roomBasis": [
            "Half Board"
          ]
        },
        {
          "description": "431 square feet, 1 Double Bed, Room sleeps 3 guests up to 2 children",
          "facilities": [
            "Free WiFi",
            "LCD TV",
            "Refrigerator",
            "Minibar",
            "Bathrobes"
          ],
          "id": 4,
          "imgPath": "../assets/img/image14.jpg",
          "name": "Royal Suite",
          "price": "180",
          "roomBasis": [
            "Full Board"
          ]
        },
        {
          "description": "500 square feet, 1 King Bed, Room sleeps 2 guests up to 1 children",
          "facilities": [
            "Free WiFi",
            "LCD TV",
            "Refrigerator",
            "Minibar",
            "Bathrobes"
          ],
          "id": 5,
          "imgPath": "../assets/img/image15.jpg",
          "name": "Presidential Room",
          "price": "200",
          "roomBasis": [
            "Full Board"
          ]
        }
      ],
      "travellers": [
        {
          "age": 21,
          "firstName": "James",
          "gender": "Male",
          "id": 1,
          "lastName": "Miller",
          "title": "Mr.",
          "type": "Adult"
        },
        {
          "age": 24,
          "firstName": "Paul",
          "gender": "Male",
          "id": 2,
          "lastName": "Miller",
          "title": "Mr.",
          "type": "Adult"
        },
        {
          "age": 28,
          "firstName": "Jeniffer",
          "gender": "Female",
          "id": 3,
          "lastName": "Miller",
          "title": "Mrs.",
          "type": "Adult"
        }
      ]
    },
    {
      "address": "Narigama, Hikkaduwa",
      "email": "avenra@example.com",
      "id": 4,
      "imgPath": "../assets/img/image4.jpg",
      "location": "hikkaduwa",
      "name": "Avenra Beach Hotel",
      "price": 250,
      "rooms": [
        {
          "description": "300 square feet, 1 Double Bed, Room sleeps 3 guests up to 1 children",
          "facilities": [
            "Free WiFi",
            "LCD TV",
            "Refrigerator",
            "Minibar",
            "Bathrobes"
          ],
          "id": 1,
          "imgPath": "../assets/img/image11.jpg",
          "name": "Superior Suite",
          "price": "150",
          "roomBasis": [
            "Room only"
          ]
        },
        {
          "description": "484 square feet, 1 Double Bed, Room sleeps 3 guests up to 1 children",
          "facilities": [
            "Free WiFi",
            "LCD TV",
            "Refrigerator",
            "Minibar",
            "Bathrobes"
          ],
          "id": 2,
          "imgPath": "../assets/img/image12.jpg",
          "name": "Diplomatic suite",
          "price": "165",
          "roomBasis": [
            "Bed and Breakfast"
          ]
        },
        {
          "description": "600 square feet, 1 King Bed, Room sleeps 2 guests up to 1 children",
          "facilities": [
            "Free WiFi",
            "LCD TV",
            "Refrigerator",
            "Minibar",
            "Bathrobes"
          ],
          "id": 3,
          "imgPath": "../assets/img/image13.jpg",
          "name": "Executive Suite",
          "price": "170",
          "roomBasis": [
            "Half Board"
          ]
        },
        {
          "description": "431 square feet, 1 Double Bed, Room sleeps 3 guests up to 2 children",
          "facilities": [
            "Free WiFi",
            "LCD TV",
            "Refrigerator",
            "Minibar",
            "Bathrobes"
          ],
          "id": 4,
          "imgPath": "../assets/img/image14.jpg",
          "name": "Royal Suite",
          "price": "180",
          "roomBasis": [
            "Full Board"
          ]
        },
        {
          "description": "500 square feet, 1 King Bed, Room sleeps 2 guests up to 1 children",
          "facilities": [
            "Free WiFi",
            "LCD TV",
            "Refrigerator",
            "Minibar",
            "Bathrobes"
          ],
          "id": 5,
          "imgPath": "../assets/img/image15.jpg",
          "name": "Presidential Room",
          "price": "200",
          "roomBasis": [
            "Full Board"
          ]
        }
      ],
      "travellers": {
        "0": {
          "age": 45,
          "firstName": "Brian",
          "gender": "Male",
          "id": 1,
          "lastName": "Collins",
          "title": "Mr",
          "type": "Adult"
        },
        "1": {
          "age": 25,
          "firstName": "Hellen",
          "gender": "Female",
          "id": 2,
          "lastName": "Collins",
          "title": "Miss",
          "type": "Adult"
        },
        "2": {
          "age": 8,
          "firstName": "Lisa",
          "gender": "Female",
          "id": 3,
          "lastName": "Collins",
          "title": "Miss",
          "type": "Child"
        },
        "-KuwrqJwOpffhY2deMTW": {
          "age": "1",
          "firstName": "John",
          "gender": "male",
          "id": 4,
          "lastName": "Collins",
          "title": "Mr",
          "type": "Infant"
        }
      }
    },
    {
      "address": "Samanthara Road, Kuda Waskaduwa",
      "email": "citrus@example.com",
      "id": 5,
      "imgPath": "../assets/img/image5.jpg",
      "location": "waskaduwa",
      "name": "Citrus Beach Hotel",
      "price": 230,
      "rooms": [
        {
          "description": "300 square feet, 1 Double Bed, Room sleeps 3 guests up to 1 children",
          "facilities": [
            "Free WiFi",
            "LCD TV",
            "Refrigerator",
            "Minibar",
            "Bathrobes"
          ],
          "id": 1,
          "imgPath": "../assets/img/image11.jpg",
          "name": "Superior Suite",
          "price": "150",
          "roomBasis": [
            "Room only"
          ]
        },
        {
          "description": "484 square feet, 1 Double Bed, Room sleeps 3 guests up to 1 children",
          "facilities": [
            "Free WiFi",
            "LCD TV",
            "Refrigerator",
            "Minibar",
            "Bathrobes"
          ],
          "id": 2,
          "imgPath": "../assets/img/image12.jpg",
          "name": "Diplomatic suite",
          "price": "165",
          "roomBasis": [
            "Bed and Breakfast"
          ]
        },
        {
          "description": "600 square feet, 1 King Bed, Room sleeps 2 guests up to 1 children",
          "facilities": [
            "Free WiFi",
            "LCD TV",
            "Refrigerator",
            "Minibar",
            "Bathrobes"
          ],
          "id": 3,
          "imgPath": "../assets/img/image13.jpg",
          "name": "Executive Suite",
          "price": "170",
          "roomBasis": [
            "Half Board"
          ]
        },
        {
          "description": "431 square feet, 1 Double Bed, Room sleeps 3 guests up to 2 children",
          "facilities": [
            "Free WiFi",
            "LCD TV",
            "Refrigerator",
            "Minibar",
            "Bathrobes"
          ],
          "id": 4,
          "imgPath": "../assets/img/image14.jpg",
          "name": "Royal Suite",
          "price": "180",
          "roomBasis": [
            "Full Board"
          ]
        },
        {
          "description": "500 square feet, 1 King Bed, Room sleeps 2 guests up to 1 children",
          "facilities": [
            "Free WiFi",
            "LCD TV",
            "Refrigerator",
            "Minibar",
            "Bathrobes"
          ],
          "id": 5,
          "imgPath": "../assets/img/image15.jpg",
          "name": "Presidential Room",
          "price": "200",
          "roomBasis": [
            "Full Board"
          ]
        }
      ],
      "travellers": [
        {
          "age": 48,
          "firstName": "Rose",
          "gender": "Female",
          "id": 1,
          "lastName": "Doe",
          "title": "Mrs",
          "type": "Adult"
        },
        {
          "age": 21,
          "firstName": "Jenny",
          "gender": "Female",
          "id": 2,
          "lastName": "Doe",
          "title": "Miss",
          "type": "Adult"
        },
        {
          "age": 1,
          "firstName": "Jack",
          "gender": "Male",
          "id": 3,
          "lastName": "Doe",
          "title": "Mr",
          "type": "Infant"
        }
      ]
    },
    {
      "address": "Audangawa, Sigiriya 21120",
      "email": "aliyaresort@example.com",
      "id": 6,
      "imgPath": "../assets/img/image6.jpg",
      "location": "sigiriya",
      "name": "Aliya resort",
      "price": 340,
      "rooms": [
        {
          "description": "300 square feet, 1 Double Bed, Room sleeps 3 guests up to 1 children",
          "facilities": [
            "Free WiFi",
            "LCD TV",
            "Refrigerator",
            "Minibar",
            "Bathrobes"
          ],
          "id": 1,
          "imgPath": "../assets/img/image11.jpg",
          "name": "Superior Suite",
          "price": "150",
          "roomBasis": [
            "Room only"
          ]
        },
        {
          "description": "484 square feet, 1 Double Bed, Room sleeps 3 guests up to 1 children",
          "facilities": [
            "Free WiFi",
            "LCD TV",
            "Refrigerator",
            "Minibar",
            "Bathrobes"
          ],
          "id": 2,
          "imgPath": "../assets/img/image12.jpg",
          "name": "Diplomatic suite",
          "price": "165",
          "roomBasis": [
            "Bed and Breakfast"
          ]
        },
        {
          "description": "600 square feet, 1 King Bed, Room sleeps 2 guests up to 1 children",
          "facilities": [
            "Free WiFi",
            "LCD TV",
            "Refrigerator",
            "Minibar",
            "Bathrobes"
          ],
          "id": 3,
          "imgPath": "../assets/img/image13.jpg",
          "name": "Executive Suite",
          "price": "170",
          "roomBasis": [
            "Half Board"
          ]
        },
        {
          "description": "431 square feet, 1 Double Bed, Room sleeps 3 guests up to 2 children",
          "facilities": [
            "Free WiFi",
            "LCD TV",
            "Refrigerator",
            "Minibar",
            "Bathrobes"
          ],
          "id": 4,
          "imgPath": "../assets/img/image14.jpg",
          "name": "Royal Suite",
          "price": "180",
          "roomBasis": [
            "Full Board"
          ]
        },
        {
          "description": "500 square feet, 1 King Bed, Room sleeps 2 guests up to 1 children",
          "facilities": [
            "Free WiFi",
            "LCD TV",
            "Refrigerator",
            "Minibar",
            "Bathrobes"
          ],
          "id": 5,
          "imgPath": "../assets/img/image15.jpg",
          "name": "Presidential Room",
          "price": "200",
          "roomBasis": [
            "Full Board"
          ]
        }
      ],
      "travellers": [
        {
          "age": 48,
          "firstName": "Rose",
          "gender": "Female",
          "id": 1,
          "lastName": "Doe",
          "title": "Mrs",
          "type": "Adult"
        },
        {
          "age": 21,
          "firstName": "Jenny",
          "gender": "Female",
          "id": 2,
          "lastName": "Doe",
          "title": "Miss",
          "type": "Adult"
        },
        {
          "age": 1,
          "firstName": "Jack",
          "gender": "Male",
          "id": 3,
          "lastName": "Doe",
          "title": "Mr",
          "type": "Infant"
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
