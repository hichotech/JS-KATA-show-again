// cite Mario - Jeron



const parentelement = document.querySelector('.katas-list')
//kata 1
const kata1heading = document.createElement('h2')   
const kata1result = document.createElement('h4')

parentelement.append(kata1heading)
kata1heading.append('KATA 1')


for (counter1 = 1; counter1 <= 20;counter1+= 1) {
    
    
    kata1result.append(counter1 +',')
   }
   parentelement.append(kata1result)
   


// kata 2
const kata2heading = document.createElement('h2')   
const kata2result = document.createElement('h4')
parentelement.append(kata2heading)
kata2heading.append('KATA 2')


  for(counter2 = 2;counter2 <= 20; counter2+= 2) {
    
    
    kata2result.append(counter2 +',')
   }

   parentelement.append(kata2result)
//////////////////////////////////////////////////
  //KATA 3
  const kata3heading = document.createElement('h2')   
  const kata3result = document.createElement('h4')
  parentelement.append(kata3heading)
  kata3heading.append('KATA 3')

  for (counter3 =1;counter3<=20;counter3+=2){

    kata3result.append(counter3 +',')
}
parentelement.append(kata3result)

///////////////////////////////////////////////
//KATA 4
const kata4heading = document.createElement('h2')   
const kata4result = document.createElement('h4')
parentelement.append(kata4heading)
kata4heading.append('KATA 4')

for (counter4 = 5; counter4<= 100 ;counter4 += 5){
    kata4result.append(counter4 +',')
} 

parentelement.append(kata4result)

/////////////////////////////////////////////////
//kata5
const kata5heading = document.createElement('h2')   
const kata5result = document.createElement('h4')
parentelement.append(kata5heading)
kata5heading.append('KATA 5') 

   for (counter5 =1 ;counter5 <= 100;counter5 += 1){
     const count5isperfectsquare =Number.isInteger(Math.sqrt(counter5))
    if (count5isperfectsquare){
        kata5result.append(counter5 +',')
}
   }

   parentelement.append(kata5result)


////////////////////////////////////////////////////
//KATA 6   
const kata6heading = document.createElement('h2')   
const kata6result = document.createElement('h4')
parentelement.append(kata6heading)
kata6heading.append('KATA 6') 

for ( counter6 = 20;counter6 >= 1;counter6 -= 1) {
    
    kata6result.append(counter6 +',')
   }
   parentelement.append(kata6result)
     

/////////////////////////////////////////////////////////////
//KATA 7
const kata7heading = document.createElement('h2')   
const kata7result = document.createElement('h4')
parentelement.append(kata7heading)
kata7heading.append('KATA 7') 



for (counter7 = 20;counter7 >= 1; counter7 -= 2) {
  
 kata7result.append(counter7 +',')
 }
 parentelement.append(kata7result)

 //////////////////////////////////////////////////////////
 //kata 8
 const kata8heading = document.createElement('h2')   
const kata8result = document.createElement('h4')
parentelement.append(kata8heading)
kata8heading.append('KATA 8')

 for (counter8 = 19;counter8 >= 1;counter8 -= 2) {
   
   kata8result.append(counter8 +',')
  }
  parentelement.append(kata8result) 

  /////////////////////////////////////////////////////////
  //KATA 9

  const kata9heading = document.createElement('h2')   
  const kata9result = document.createElement('h4')
  parentelement.append(kata9heading)
  kata9heading.append('KATA 9')
  
   for (counter9 = 100;counter9 >= 1;counter9 -= 5) {
     
     kata9result.append(counter9 +',')
    }
    parentelement.append(kata9result) 

    ////////////////////////////////////////////////////////
    //KATA 10

    const kata10heading = document.createElement('h2')   
    const kata10result = document.createElement('h4')
    parentelement.append(kata10heading)
    kata10heading.append('KATA 10')
    
    for (counter10 =100 ;counter10 >= 1;counter10 -= 1 ){
        const count10isperfectsquare =Number.isInteger(Math.sqrt(counter10))
       if (count10isperfectsquare){
           kata10result.append(counter10 +',')
   }
      }
      parentelement.append(kata10result) 

      /////////////////////////////////////////////////////////////
      //KATA 11
      const kata11heading = document.createElement('h2')   
      const kata11result = document.createElement('h4')
      parentelement.append(kata11heading)
      kata11heading.append('KATA 11')

      const sampleArray = [
        469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
        456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
    ];

    for (counter11= 0;counter11<sampleArray.length;counter11+=1){
        kata11result.append(sampleArray[counter11]+',')
    }
    parentelement.append(kata11result) 

    ////////////////////////////////////////////////////////
    //KATA 12
    const kata12heading = document.createElement('h2')   
      const kata12result = document.createElement('h4')
      parentelement.append(kata12heading)
      kata12heading.append('KATA 12')

      
    for (counter12= 0;counter12<sampleArray.length;counter12+=1){
        if (sampleArray[counter12]%2==0){
        kata12result.append(sampleArray[counter12]+',')
    }}
    parentelement.append(kata12result) 

    /////////////////////////////////
    //KATA 13
    const kata13heading = document.createElement('h2')   
      const kata13result = document.createElement('h4')
      parentelement.append(kata13heading)
      kata13heading.append('KATA 13')

      
    for (counter13= 0;counter13<sampleArray.length;counter13+=1){
        if (sampleArray[counter13]%2!==0){
        kata13result.append(sampleArray[counter13]+',')
    }}
    parentelement.append(kata13result) 
    //////////////////////////////////////////////////////
    // KATA 14
    const kata14heading = document.createElement('h2')   
      const kata14result = document.createElement('h4')
      parentelement.append(kata14heading)
      kata14heading.append('KATA 14')


    for (counter14 =0; counter14 <sampleArray.length ;counter14 +=1){
      kata14result.append(sampleArray[counter14]*sampleArray[counter14]+',')


    }
    parentelement.append(kata14result) 
    ///////////////////////////////////////////////////////
    //KATA 15 

    const kata15heading = document.createElement('h2')   
      const kata15result = document.createElement('h4')
      parentelement.append(kata15heading)
      kata15heading.append('KATA 15')
      let sum=0

    for (counter15 =0; counter15 <=20 ;counter15 +=1){
      sum=sum+counter15
    
    }
    parentelement.append(kata15result) 
    kata15result.append(sum)
     ///////////////////////////////////////////////////////
    //KATA 16

    const kata16heading = document.createElement('h2')   
      const kata16result = document.createElement('h4')
      parentelement.append(kata16heading)
      kata16heading.append('KATA 16')
    let sumarray = 0

    for (counter16 =0; counter16 <sampleArray.length ;counter16 +=1){

        sumarray=sampleArray[counter16]+sumarray
      

    }
    parentelement.append(kata16result) 
    kata16result.append(sumarray)

     ///////////////////////////////////////////////////////
    //KATA 17

    const kata17heading = document.createElement('h2')   
      const kata17result = document.createElement('h4')
      parentelement.append(kata17heading)
      kata17heading.append('KATA 17')
      let min = Math.min(...sampleArray)
     

    parentelement.append(min) 

     ///////////////////////////////////////////////////////
    //KATA 18

    const kata18heading = document.createElement('h2')   
      const kata18result = document.createElement('h4')
      parentelement.append(kata18heading)
      kata18heading.append('KATA 18')

      let max = Math.max(...sampleArray)
    


  
    parentelement.append(max) 


    




