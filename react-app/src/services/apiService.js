// import axios from "axios";

//DUMMY BEFORE API IS BULT

const tyres = [
    {
        id: 1,
        brand: "pirelli",
        size: 10
    },
    {
        id: 2,
        brand: "firestone",
        size: 12
    },
    {
        id: 3,
        brand: "pirelli",
        size: 15
    },
    {
        id: 4,
        brand: "avon",
        size: 11
    },
    {
        id: 5,
        brand: "michelin",
        size: 17
    },
    {
        id: 6,
        brand: "goodYear",
        size: 18
    }
]


export const getTyres = (searchStr,page=1) => {
    const response = new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(tyres.slice((page*3)-3,page*3))
        },2000)
    })
    return response;
    
}
