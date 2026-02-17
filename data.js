/* ===============================
EDUSTREAMIX - B.Com Semester 4
================================= */

/* ---------- COMMON LANGUAGES ---------- */

const commonLanguages = [
{
name:"English",
channels:[
{name:"English by Nisa",links:[
"https://youtube.com/playlist?list=PLUJXB7al70IAIbiajs7JqxrGqctgi80j"
]},
{name:"Sara’s Learning Point",links:[
"https://youtube.com/playlist?list=PLjNdhMBtsxpz5BYkI4eiiYQahD7GroZy0"
]},
{name:"Dandu Venkatramulu",links:[
"https://youtube.com/playlist?list=PLyjVm5GfnmY4rC5wuA6SmhHh0NyVL9TOX"
]},
{name:"Educare",links:[
"https://youtube.com/playlist?list=PLbBCm7TkLCKJvY6pKiQCJctXF4Pq8k7G5"
]},
{name:"PCV English",links:[
"https://youtube.com/playlist?list=PLldWy7gu4R77UUt2vuS2n3pEkb3oHOLot"
]}
]
},
{
name:"Telugu",
channels:[
{name:"Dandu Venkatramulu",links:[
"https://youtube.com/playlist?list=PLyjVm5GfnmY5y3l69NvP0rfdM3PIr1YTn"
]},
{name:"Matrubhasha",links:[
"https://youtube.com/playlist?list=PL7noKDJp4ZRJJaH6RJ4OBogQ1myEbTDUW"
]}
]
},
{
name:"Hindi",
channels:[
{name:"Disha Hindi Classes",links:[
"https://youtube.com/playlist?list=PLsTBUOfP6EhcuFUYcKCOXmNCleQZQxANC"
]}
]
},
{
name:"Sanskrit",
channels:[
{name:"My Teaching Talkies",links:[
"https://youtube.com/playlist?list=PLc1Q__0qOGApo_XRmsLci0RnIznyHUsY"
]},
{name:"Dr. Pusapati Ravikantha Reddy",links:[
"https://youtube.com/playlist?list=PLiOV0508aWZuNdSe92CCsP1bYS63RccOc"
]}
]
}
];


/* ---------- SEMESTER 4 CORE SUBJECTS ---------- */

const sem4Core = [

{
name:"Corporate Accounting",
channels:[
{name:"Hasham Ali Khan",links:[
"https://youtube.com/playlist?list=PLWJDzVuPkXAlXTMbitIZDjiAmi7M8Zww"
]},
{name:"Devika’s Commerce",links:[
"https://youtube.com/playlist?list=PL32yVakBnz3KJkri5LmhkNdFuPeTmyWlt"
]}
]
},

{
name:"Business Statistics – 2",
channels:[
{name:"Hasham Ali Khan",links:[
"https://youtube.com/playlist?list=PLWJDzVuPkXAk3twapgb0DQ9MyaQ24V4JS"
]},
{name:"Devika’s Commerce",links:[
"https://youtube.com/playlist?list=PLLhSIFfDZcUUatEzYCA8xH02JR_GlLjMA"
]}
]
},

{
name:"Income Tax",
channels:[
{name:"Devika’s Commerce",links:[
"https://youtube.com/playlist?list=PLP6CJ8yrRpA3_WbjoudHcT10AxY3Tut1B"
]},
{name:"Hasham Ali Khan",links:[
"https://youtube.com/playlist?list=PLWJDzVuPkXAkJ5jwa5w815ComHmCzYzwb"
]}
]
},

{
name:"Universal Human Values",
channels:[
{name:"Tegron Learning Hub",links:[
"https://youtu.be/PZQCoQdLJmw"
]}
]
},

{
name:"Practice of Life and General Insurance",
channels:[
{name:"Dwivedi Guidance",links:[
"https://youtube.com/playlist?list=PLsh2FvSr3n7cD0F2FSjBVWWrVF6cR8Pla"
]}
]
}

];


/* ---------- FINAL GROUP STRUCTURE ---------- */

const data = {

"B.Com General - Semester 4":[
...commonLanguages,
...sem4Core
],

"B.Com Honors - Semester 4":[
...commonLanguages,
{
name:"Human Resource Management",
channels:[
{name:"Devika’s Commerce",links:[
"https://youtube.com/playlist?list=PLLhSIFfDZcUUelovQsfQHrCg3ZPujMzrh"
]}
]
},
...sem4Core
],

"B.Com Computer Applications - Semester 4":[
...commonLanguages,
...sem4Core,
{
name:"Web Technologies",
channels:[
{name:"Fazil Khan Tutorial",links:[
"https://youtube.com/playlist?list=PL0IHN5oTE2R7ekgSTUPkwILoqK7oAoExo"
]},
{name:"Education Point Online",links:[
"https://youtube.com/playlist?list=PLg2LVpcRrOF4if66PQvjYK5nIGJamDfhC"
]}
]
}
],

"B.Com Business Analytics - Semester 4":[
...commonLanguages,
...sem4Core,
{
name:"Forecasting and Predictive Analysis",
channels:[
{name:"(Add Playlist Here)",links:["#"]}
]
}
]

};
