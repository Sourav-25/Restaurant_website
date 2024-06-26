var b=document.getElementById('btns')
b.addEventListener('click',validateform)

function validateform()
{
    var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    let x=document.forms["myForm"]["name"].value;
    let y=document.forms["myForm"]["email"].value;
    let z=document.forms["myForm"]["text"].value;
    let z1=document.forms["myForm"]["texts"].value;
    


    if(x=="")
        {
            alert('Name must be filled');
        }
        else if(!y.match(validRegex))
            {
            alert('Please Enter a Valid email');
            }
        else if(z=="")
            {
                alert('Subject must be filled');
            }
            else if(z1=="")
                {
                    alert('Message should not be empty');
                }
            
                else

            alert('Form submitted')
        }



