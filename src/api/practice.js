const  axios  =  require('axios')

const url = 'https://nepalcorona.info/api/v1/data/nepal'
const dailyUrl = 'https://data.nepalcorona.info/api/v1/covid/timeline'
const district ='https://data.nepalcorona.info/api/v1/districts'
const districtId = 'https://data.nepalcorona.info/api/v1/districts/'


 const fetchData = async() =>{

    try{
        const { data : {tested_positive , tested_negative ,tested_total , in_isolation , quarantined , tested_rdt , recovered , deaths  }} = await axios.get(url)
        const modData ={
            tested_positive,
            tested_negative,
            tested_total,
            in_isolation,
            quarantined,
            tested_rdt,
            recovered,
            deaths

        }
        
      //  return(modData)

    }
    catch(error){
        console.log(error)
    }


    

}


 const fetchDailyData = async() =>{

    try{
        const dataa = []
        const { data  } = await axios.get(dailyUrl)
       // data.splice(-1,1)
        data.splice(-1,1)

        let modData =data.map(daily =>({
            cases: daily.totalCases,
            recovery:daily.totalRecoveries,
            deaths:daily.totalDeaths,
            date: daily.date,
            newCases: daily.newCases,
            newRecovery: daily.newRecoveries,
            newDeaths: daily.newDeaths,

        }))

        
       

        
        //return(modData)

    }
    catch(error){
        console.log(error)
    }
    
   
}


 const fetchDistrictData = async() =>{

    try{
        const { data  } = await axios.get(district)
        const modData =data.map(daily =>({
           district: daily.title,
           id: daily.id
        }))
        function compare(a, b) {
            // Use toUpperCase() to ignore character casing
            const bandA = a.district.toUpperCase();
            const bandB = b.district.toUpperCase();
          
            let comparison = 0;
            if (bandA > bandB) {
              comparison = 1;
            } else if (bandA < bandB) {
              comparison = -1;
            }
            return comparison;
          }
          
          modData.sort(compare);

       //   districtId(modData);


       const idd = modData.map(id => id.district)

     //  fetchparticularDistrictData( modData)

       let obj = []
                
       modData.forEach( async function (arrayItem) {
                 var id = arrayItem.id;
                 var district = arrayItem.district;
                 const { data  } = await axios.get(districtId + id)
                 var cases = data.covid_cases.length;
                 
                 var newObj = {
                     district : district,
                     cases : cases
                 }
                 
                 obj.push(newObj)
                
                 
                 //console.log('shah')
             });



     //   return obj;
        
   // console.log( modData )
    }
    catch(error){
        console.log(error)
    }
    
   
}

 const fetchTableData = async() =>{

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
            //console.log(disData)
            let arr2=[]
            let arr3=[]
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
          console.log(arr2.length)

  

            let arr = []
            let confirmed = 0
            let active = 0
            let recovered = 0
            let deaths = 0


            for( let i = 1 ; i<= 7 ; i++){
            
            let province = i;

            if(data.province.cases.find(dat => dat.province === i) !== undefined){
              confirmed = (data.province.cases.find(dat => dat.province === i).count)
            }else{
                confirmed = 0
            }
            if (data.province.active.find(dat => dat.province === i) === undefined) {
                active = 0;
            } else {
                active = (data.province.active.find(dat => dat.province === i).count)
                
            }
            if ((data.province.recovered.find(dat => dat.province === i) === undefined)) {

                recovered = 0;
                
            } else {
                recovered = (data.province.recovered.find(dat => dat.province === i).count)
                
            }
            if ((data.province.deaths.find(dat => dat.province === i) === undefined)) {

                deaths = 0;
                
            } else {
                deaths = (data.province.deaths.find(dat => dat.province === i).count)
            }

            let obj ={
                 province ,
                 confirmed ,
                 active ,
                 recovered ,
                 deaths ,
                 districs: arr2[i-1]
            }

            arr.push(obj)

               
            
           


            }
         //  return (arr); 

        
        





        //const result = modData.filter(data => data.Status === 'active'  )
        
           // console.log(province)
    }
    catch(error){
        console.log(error)
    }
    
   
}


fetchTableData();












