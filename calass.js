
//This function calculates addition
function calculate_all (){
    let check_1= document.getElementById("num_a").value;
    let check_2= document.getElementById("num_b").value;
    check_1=Number(check_1)
    check_2=Number(check_2)
    Result=check_1 + check_2
    document.getElementById('equal_sign').innerHTML= Result
}

//This function calculates subtraction
function calculate_diff (){
    let check_1= document.getElementById("num_c").value;
    let check_2= document.getElementById("num_d").value;
    check_1=Number(check_1)
    check_2=Number(check_2)
    Result=check_1 - check_2
    document.getElementById('display_1').innerHTML= Result
}

//This function calculates multiplication
function calculate_sum (){
    let check_1= document.getElementById("num_e").value;
    let check_2= document.getElementById("num_f").value;
    check_1=Number(check_1)
    check_2=Number(check_2)
    Result=check_1 * check_2
    document.getElementById('equal_sign2').innerHTML= Result
}

//This function calculates division
function calculate_of (){
    let check_1= document.getElementById("num_g").value;
    let check_2= document.getElementById("num_h").value;
    check_1=Number(check_1)
    check_2=Number(check_2)
    Result=check_1 / check_2
    document.getElementById('display_2').innerHTML= Result
}

//This function changes the font color of the header.
function change(){
    document.getElementById("try_me").style.color="blue";
}