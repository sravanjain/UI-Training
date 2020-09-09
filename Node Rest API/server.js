const express = require('express');
const { ROUTE_CONTSTANTS } = require('./helpers/route_constant');
const app = express();
var bodyParser=require('body-parser');
//route, callback function.
app.get(ROUTE_CONTSTANTS.DEFAULT,function (req,res){
    res.send("<h1>Welcome");
});

app.get(ROUTE_CONTSTANTS.GET_LOGIN,function (req,res){
    res.sendFile(__dirname+'/pages/my.html')
});

app.get(ROUTE_CONTSTANTS.GET_REGISTER,function (req,res){
    res.sendFile(__dirname+'/pages/register.html')
});
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.post(ROUTE_CONTSTANTS.POST_REGISTER,function (req,res){
    console.log(req.body);
    res.send("Suucesfully registered")
});

app.get(ROUTE_CONTSTANTS.GET_PRODUCTS,function (req,res){
    const productsData=[
        {
          "_id": "5f5861e253d86023542ed238",
          "index": 0,
          "guid": "ecd60506-4aa4-42ae-a00d-9f62bc32b079",
          "isActive": false,
          "balance": "$2,803.11",
          "picture": "http://placehold.it/32x32",
          "age": 31,
          "eyeColor": "green",
          "name": "Alvarado Robertson",
          "gender": "male",
          "company": "GALLAXIA",
          "email": "alvaradorobertson@gallaxia.com",
          "phone": "+1 (902) 600-3782",
          "address": "440 Bleecker Street, Elrama, Oregon, 2468",
          "about": "Ex duis nisi laboris occaecat. Elit excepteur ad enim elit est in dolore eu aute eu commodo ad reprehenderit. Non id pariatur anim qui.\r\n",
          "registered": "2015-09-16T06:57:55 -06:-30",
          "latitude": -44.147449,
          "longitude": 85.994271,
          "tags": [
            "ex",
            "aliquip",
            "voluptate",
            "nostrud",
            "nostrud",
            "deserunt",
            "magna"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Mavis Spencer"
            },
            {
              "id": 1,
              "name": "Paul Whitfield"
            },
            {
              "id": 2,
              "name": "Patricia Vinson"
            }
          ],
          "greeting": "Hello, Alvarado Robertson! You have 8 unread messages.",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "5f5861e266887dccd8a9688d",
          "index": 1,
          "guid": "730f7448-fb6d-49a8-bcf5-f9791dbc4842",
          "isActive": true,
          "balance": "$3,045.75",
          "picture": "http://placehold.it/32x32",
          "age": 29,
          "eyeColor": "blue",
          "name": "Hill Knox",
          "gender": "male",
          "company": "HANDSHAKE",
          "email": "hillknox@handshake.com",
          "phone": "+1 (911) 445-3741",
          "address": "322 Dikeman Street, Norris, West Virginia, 5347",
          "about": "Consequat aute laboris cupidatat officia excepteur incididunt occaecat exercitation excepteur culpa sunt ut. Quis do exercitation fugiat ex non minim cillum consectetur irure velit ipsum ad. Adipisicing enim ea cupidatat laboris reprehenderit ullamco dolor esse id duis nulla id laborum. Qui sit excepteur occaecat labore excepteur ex minim consectetur cupidatat adipisicing. Dolor incididunt culpa excepteur fugiat. Labore reprehenderit commodo duis irure nulla officia minim amet sint ipsum. Aute incididunt anim elit mollit dolor Lorem.\r\n",
          "registered": "2017-09-05T02:27:57 -06:-30",
          "latitude": 87.439176,
          "longitude": 88.226815,
          "tags": [
            "et",
            "est",
            "reprehenderit",
            "commodo",
            "enim",
            "nostrud",
            "magna"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Camille Henson"
            },
            {
              "id": 1,
              "name": "Laurie Bailey"
            },
            {
              "id": 2,
              "name": "Maldonado Howell"
            }
          ],
          "greeting": "Hello, Hill Knox! You have 9 unread messages.",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "5f5861e207a0c2deb86bdd65",
          "index": 2,
          "guid": "c285bcbd-d1d1-4b3c-836a-c0190b7fe395",
          "isActive": false,
          "balance": "$3,775.59",
          "picture": "http://placehold.it/32x32",
          "age": 37,
          "eyeColor": "brown",
          "name": "Althea Simpson",
          "gender": "female",
          "company": "GEEKETRON",
          "email": "altheasimpson@geeketron.com",
          "phone": "+1 (839) 448-2509",
          "address": "496 Delmonico Place, Rivereno, Federated States Of Micronesia, 802",
          "about": "Id voluptate excepteur minim commodo cillum cupidatat esse reprehenderit sit quis reprehenderit eu laborum. Aliqua eiusmod velit incididunt nisi nostrud voluptate quis tempor laboris. In dolore magna sunt amet et proident nulla ut dolor duis labore. Excepteur ipsum tempor nostrud ipsum ea consequat deserunt eiusmod ex. Occaecat voluptate irure duis cillum ex.\r\n",
          "registered": "2018-02-26T05:12:12 -06:-30",
          "latitude": -71.019684,
          "longitude": 0.607252,
          "tags": [
            "in",
            "deserunt",
            "tempor",
            "enim",
            "et",
            "labore",
            "ipsum"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Vicki Young"
            },
            {
              "id": 1,
              "name": "Malone Nolan"
            },
            {
              "id": 2,
              "name": "Frank Harper"
            }
          ],
          "greeting": "Hello, Althea Simpson! You have 2 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "5f5861e24c84e61be3acd2ad",
          "index": 3,
          "guid": "b90bab76-8422-4848-933a-be146c79723e",
          "isActive": false,
          "balance": "$2,877.07",
          "picture": "http://placehold.it/32x32",
          "age": 22,
          "eyeColor": "blue",
          "name": "Zimmerman Santana",
          "gender": "male",
          "company": "GEOLOGIX",
          "email": "zimmermansantana@geologix.com",
          "phone": "+1 (852) 591-2201",
          "address": "543 Harway Avenue, Lumberton, Delaware, 6574",
          "about": "Eu enim officia dolor aliquip ad occaecat laboris eu magna ipsum culpa anim sit ullamco. Ea minim sit non incididunt. Sit consequat ipsum velit pariatur quis aliquip.\r\n",
          "registered": "2014-03-08T09:04:05 -06:-30",
          "latitude": 49.701951,
          "longitude": 47.620985,
          "tags": [
            "nostrud",
            "aute",
            "excepteur",
            "aliqua",
            "est",
            "consectetur",
            "labore"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Padilla Kaufman"
            },
            {
              "id": 1,
              "name": "Nell Gamble"
            },
            {
              "id": 2,
              "name": "Lyons Bradshaw"
            }
          ],
          "greeting": "Hello, Zimmerman Santana! You have 2 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "5f5861e2cdd77f142f532cd7",
          "index": 4,
          "guid": "eb18ebf2-0c7f-469f-a8bc-ae1a73d759a4",
          "isActive": true,
          "balance": "$3,875.12",
          "picture": "http://placehold.it/32x32",
          "age": 30,
          "eyeColor": "green",
          "name": "Hunter Salazar",
          "gender": "male",
          "company": "PROFLEX",
          "email": "huntersalazar@proflex.com",
          "phone": "+1 (837) 550-2530",
          "address": "129 Arkansas Drive, Driftwood, Illinois, 2431",
          "about": "Pariatur non enim minim adipisicing enim deserunt. Nisi eiusmod officia Lorem laboris Lorem minim labore tempor sit id magna officia dolor. Consectetur ea aliqua officia fugiat eiusmod esse ullamco nulla aliqua qui amet. Eiusmod deserunt pariatur cillum sint dolore commodo adipisicing consectetur incididunt qui. Laboris incididunt ad in incididunt ex ex deserunt mollit ut in commodo ut tempor mollit.\r\n",
          "registered": "2016-12-02T01:15:53 -06:-30",
          "latitude": 71.310478,
          "longitude": -83.517775,
          "tags": [
            "minim",
            "sit",
            "Lorem",
            "sunt",
            "elit",
            "eiusmod",
            "cillum"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Kerry Cross"
            },
            {
              "id": 1,
              "name": "Brittney Mack"
            },
            {
              "id": 2,
              "name": "Frazier Burris"
            }
          ],
          "greeting": "Hello, Hunter Salazar! You have 4 unread messages.",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "5f5861e2bc8c185e7756fa87",
          "index": 5,
          "guid": "7926527e-28ef-491a-989f-5ce556564d93",
          "isActive": true,
          "balance": "$2,572.17",
          "picture": "http://placehold.it/32x32",
          "age": 36,
          "eyeColor": "brown",
          "name": "Alyssa Pittman",
          "gender": "female",
          "company": "SEQUITUR",
          "email": "alyssapittman@sequitur.com",
          "phone": "+1 (884) 510-2863",
          "address": "231 Miller Avenue, Brazos, Montana, 7753",
          "about": "Sit aliqua consequat consequat proident adipisicing enim incididunt culpa exercitation eiusmod elit ex do aliquip. Lorem voluptate nulla ipsum pariatur tempor sunt. Amet anim aliqua veniam tempor proident aute est in cillum culpa. Qui incididunt laborum sit ipsum velit incididunt do mollit. Nulla amet ea consectetur nisi adipisicing veniam sunt nostrud amet culpa. Non eu cillum culpa occaecat aliqua id cupidatat pariatur.\r\n",
          "registered": "2018-02-08T07:05:14 -06:-30",
          "latitude": 17.283356,
          "longitude": -128.569904,
          "tags": [
            "non",
            "dolor",
            "irure",
            "voluptate",
            "ea",
            "occaecat",
            "veniam"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Cooley Ochoa"
            },
            {
              "id": 1,
              "name": "Miller Duke"
            },
            {
              "id": 2,
              "name": "Lilian Livingston"
            }
          ],
          "greeting": "Hello, Alyssa Pittman! You have 8 unread messages.",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "5f5861e2f40855482b00788d",
          "index": 6,
          "guid": "9ed9fb72-201d-4888-a20d-eee7d52c9705",
          "isActive": true,
          "balance": "$3,769.24",
          "picture": "http://placehold.it/32x32",
          "age": 39,
          "eyeColor": "brown",
          "name": "Suzanne Lawson",
          "gender": "female",
          "company": "APEXTRI",
          "email": "suzannelawson@apextri.com",
          "phone": "+1 (834) 423-2335",
          "address": "272 Eaton Court, Matheny, Connecticut, 6982",
          "about": "Amet ipsum esse in cillum magna exercitation anim pariatur. Deserunt sit id sunt officia ad. Culpa culpa reprehenderit eu deserunt et veniam deserunt. Culpa commodo quis est eu aute minim id proident.\r\n",
          "registered": "2016-10-01T03:02:34 -06:-30",
          "latitude": 84.803625,
          "longitude": -55.82356,
          "tags": [
            "deserunt",
            "eiusmod",
            "est",
            "veniam",
            "nostrud",
            "fugiat",
            "amet"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Courtney Larsen"
            },
            {
              "id": 1,
              "name": "Lydia Brown"
            },
            {
              "id": 2,
              "name": "Christi Hampton"
            }
          ],
          "greeting": "Hello, Suzanne Lawson! You have 2 unread messages.",
          "favoriteFruit": "apple"
        }
      ]
    res.json(productsData)
});
app.get(ROUTE_CONTSTANTS.GET_FILES,function (req,res){
    res.sendFile(__dirname+'/files/Oneplus.pdf')
})
app.listen(3000);