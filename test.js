function findEvenIndex(arr)
{ 
  //Code goes here!
  const newarray=[]
  total=0;
  let finalnumber=0
  for(let i=total;i<arr.length-1;i++)
  {
   let sum=0
     for(let m=i+2;m<arr.length;m++)
     {
      
      sum+=arr[m]
      if(arr[i]===sum)
      {
       newarray.push(i+1)
       
      
      }
     }
      total=arr[i]+arr[i+1]
 }
 if(newarray.length==0)
 {
   return -1
 }
 else
  return newarray[0]
}
