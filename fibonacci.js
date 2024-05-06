function fib(n){
    let array=[];
    for(let i=0;i<n;i++){
        if(array.length>1){
        array.push(array[i-1]+array[i-2])
        }else{
        array.push(i)
        }
    }
   return array
}



function fibRecurse(n){
    if(n==0){return []
    }else if(n==1){return [0]
    }else if(n==2){return[0,1]
    }else{
        let s=fibRecurse(n-1)
        console.log(s)
        s.push(s[s.length-1]+s[s.length-2]);
        
        return s.slice(0,n)

    }

}
console.log(fibRecurse(4))
