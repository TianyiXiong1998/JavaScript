let salaries = {
    John:100,
    Ann:160,
    Pete:130
}
function Sum(salaries)
{
    let sum = 0;
    for(let key in salaries)
    {
        sum += salaries[key];
    }
    return  sum;

}
let result = Sum(salaries)
console.log(result) // 390

letmenu = {width: 200,height: 300,title: "My menu"};
function multiplyNumeric(obj)
{
    for(let item in obj)
    {
        if(item == 'width')
        {
            obj[item]*=2;
        }
        if (item == 'height')
        {
            obj[item]*=2;
        }
    }
    return obj;
}

let menu = multiplyNumeric(letmenu);// after the call menu = {width: 400,height: 600,title: "My menu"};
console.log(menu)

function testEmailId(email)
{
   let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(email);
}

function truncate(str,index)
{
    let strArr = [];
    strArr = str.split('');
    if(index>strArr.length)
    {
        return strArr;
    }
    if(index<=strArr.length)
    {
        return strArr.slice(0,index);
    }
}

let arr = truncate("hello",1);
console.log(arr);