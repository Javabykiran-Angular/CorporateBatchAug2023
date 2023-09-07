//json
// it store data is in key & value format



let jsonObj={
    id:0,
    "fname":'Sumit',
    lname:'Raokhande'
}
// 1 dot operator
// 2 square operator

// 1 dot operator
// console.log(`
//         ID          :: ${jsonObj.id}
//         First name  :: ${jsonObj.fname}
//         Last Name   :: ${jsonObj.lname}
// `);

// 2 square operator

// console.log(`
//         ID          :: ${jsonObj["id"]}
//         First name  :: ${jsonObj['fname']}
//         Last name   :: ${jsonObj["lname"]}
// `);

//Array of Object 
let arrObj=[
    {
        id:9,
        "fname":'Sumit',
        lname:'Raokhande',
        country:{
            cid:1,
            cname:'India'
        },
        month:["Jan","May","Dec"],
        result:[
            {
               subj:"M1",
               marks:40
            },
            {
                subj:"M2",
                marks:45 
             },
             {
                subj:"M3",
                marks:55 
             }
        ]

    },
    {
        id:6,
        "fname":'Kiran',
        lname:'Raokhande',
        country:{
            cid:2,
            cname:'US'
        },
        month:["Feb","March","Aug"],
        result:[
            {
               subj:"M1",
               marks:55 
            },
            {
                subj:"M2",
                marks:65 
             },
             {
                subj:"M3",
                marks:85 
             }
        ]
    },
    {
        id:3,
        "fname":'Spruha',
        lname:'Raokhande',
        country:{
            cid:3,
            cname:'Japan'
        },
        month:["April","July","Nov"],
        result:[
            {
               subj:"M1",
               marks:65 
            },
            {
                subj:"M2",
                marks:75 
             },
             {
                subj:"M3",
                marks:95 
             }
        ]
    }
];



for(let i=0;i<arrObj.length;i++){

    console.log(`
        Id          :: ${arrObj[i].id}
        First Name  :: ${arrObj[i].fname}
        Last name   :: ${arrObj[i].lname}
        Country     :: ${arrObj[i].country.cname}
        Month       :: ${arrObj[i].month.join(" ")}
        ----------Result-------------

    `);

    // for(let j=0;j<arrObj[i].result.length;j++){
    //     console.log(`
    //             Subject:: ${arrObj[i].result[j].subj}
    //             Marks  :: ${arrObj[i].result[j].marks}
    //     `)
    // }

    arrObj[i].result.forEach((item)=>{
            console.log(`
                Subject:: ${item.subj}
                Marks  :: ${item.marks}
            `)
    });



}


