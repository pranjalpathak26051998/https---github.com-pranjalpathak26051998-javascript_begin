function numtoword(num)
{
i=0
word=" "
while(num%10)
{
    i=num%10;
    switch(i)
{
    case 0:
        word="Zero"+ " "+word
        break;

        case 1:
        word="One"+ " "+word
        break;

        case 2:
        word="two"+ " "+word
        break;

        case 3:
        word="three"+ " "+word
        break;

        case 4:
        word="four"+ " "+word  
        break;

        case 5:
        word="five"+ " "+word
        break;

        case 6:
        word="six"+ " "+word
        break;

        case 7:
        word="seven"+ " "+word
        break;

        case 8:
        word="eight"+ " "+word
        break;
        case 9:
            word="nine"+ " "+word  
            break;
}
num =parseInt(num/10)
}
return  word;      
}
function reverseDigit(num)
            {             
            i=0;
            rev=0;
            while(num>0)
            {
                i=num%10
                rev=rev*10+i
                num=parseInt(num/10)
                add=j+ rev
            }
            return rev
            }