import React from 'react'
import axios from 'axios'

export const fetchTableData = async() =>{

    try{
        const district = []
        const province = []
   

            const dataD  = await axios.get('https://data.nepalcorona.info/api/v1/districts');
            
            const disData = dataD.data.map(daily =>({
                district: daily.title,
                id: daily.id,
                province: daily.province
            }));
             function compare(a, b) {
            // Use toUpperCase() to ignore character casing
            const bandA = a.id;
            const bandB = b.id;
          
            let comparison = 0;
            if (bandA > bandB) {
              comparison = 1;
            } else if (bandA < bandB) {
              comparison = -1;
            }
            return comparison;
          }
          
          disData.sort(compare);
          

            disData.forEach(distric => district.push(distric.district));
            disData.forEach(prov => province.push(prov.province));

            const { data  } = await axios.get('https://data.nepalcorona.info/api/v1/covid/summary')
            console.log("disdata  ", disData)

            //return disData
            let arr2=[]
            for(let k = 1 ; k <=7 ; k++){
  
              let name = disData.filter( dat => dat.province === k )
              name.forEach(function (element) {
                  if ((data.district.cases.find(dat => dat.district === element.id) !== undefined )) {
                      
                      let disCases =  (data.district.cases.find(dat => dat.district === element.id).count)
                      element.cases = disCases
                     // console.log(disCases)
                 
                    } else {
                      
                     // console.log('0')
                      element.cases = 0

                  }
                  if ((data.district.active.find(dat => dat.district === element.id) !== undefined )) {
                      
                      let disActive =  (data.district.active.find(dat => dat.district === element.id).count)
                      element.active = disActive
                     // console.log(disCases)
                 
                    } else {
                      
                     // console.log('0')
                      element.active = 0

                  }
                  if ((data.district.recovered.find(dat => dat.district === element.id) !== undefined )) {
                      
                      let disRecovered =  (data.district.recovered.find(dat => dat.district === element.id).count)
                      element.recovered = disRecovered
                     // console.log(disCases)
                 
                    } else {
                      
                     // console.log('0')
                      element.recovered = 0

                  }
                  if ((data.district.deaths.find(dat => dat.district === element.id) !== undefined )) {
                      
                      let disDeaths =  (data.district.deaths.find(dat => dat.district === element.id).count)
                      element.deaths = disDeaths
                     // console.log(disCases)
                    } else {
                      
                     // console.log('0')
                      element.deaths = 0

                  }
              })
             // console.log(name)
              arr2 = arr2.concat(name);


              
            }

            console.log( 'array 2  ' , arr2)
            return arr2

  
    }
    catch(error){
        console.log(error)
    }
    
   
}











