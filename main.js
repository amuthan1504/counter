var increment1=document.getElementById('add1');
var increment2=document.getElementById('add2');
var increment3=document.getElementById('add3');
var decrement1=document.getElementById('sub1');
var decrement2=document.getElementById('sub2');
var decrement3=document.getElementById('sub3');
var res1=document.getElementById('ans1');
var res2=document.getElementById('ans2');
var res3=document.getElementById('ans3');
let count1=0;
let count2=0;
let count3=0;
increment1.addEventListener('click',function()
{
    count1=count1+1;
    res1.innerHTML=count1;
}
);
decrement1.addEventListener('click',function()
{
    count1=count1-1;
    res1.innerHTML=count1;
}
);
increment2.addEventListener('click',function()
{
    count2=count2+1;
    res2.innerHTML=count2;
}
);
decrement2.addEventListener('click',function()
{
    count2=count2-1;
    res2.innerHTML=count2;
}
);
increment3.addEventListener('click',function()
{
    count3=count3+1;
    res3.innerHTML=count3;
}
);
decrement3.addEventListener('click',function()
{
    count3=count3-1;
    res3.innerHTML=count3;
}
);