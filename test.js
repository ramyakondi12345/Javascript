const coordinates=[
    {x:1,y:2},
    {x:2,y:3},
    {x:3,y:4}
];

const ress=coordinates.reduce((val,acc)=>{
    return val.x+acc
},0)

