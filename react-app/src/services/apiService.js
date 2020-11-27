// import axios from "axios";

//DUMMY BEFORE API IS BULT

const tyres = [
    {
        brand: "pirelli",
        size: 10
    },
    {
        brand: "firestone",
        size: 12
    },
    {
        brand: "pirelli",
        size: 15
    }
]


export const getTyres = (searchStr,page) => {
    const response = new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(tyres)
        },2000)
    })
    return response;
    
}
