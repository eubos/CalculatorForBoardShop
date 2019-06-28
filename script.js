const arr = {
    firstSlider : [
    {Imp:"5'0\"", Metr: 152.4},
    {Imp:"5'1\"", Metr: 155.0},
    {Imp:"5'2\"", Metr: 157.5},
    {Imp:"5'3\"", Metr: 160.0},
    {Imp:"5'4\"", Metr: 162.5},
    {Imp:"5'5\"", Metr: 165.0},
    {Imp:"5'6\"", Metr: 167.6},
    {Imp:"5'7\"", Metr: 170.0},
    {Imp:"5'8\"", Metr: 172.7},
    {Imp:"5'9\"", Metr: 175.3},
    {Imp:"6'0\"", Metr: 183.0},
    {Imp:"6'1\"", Metr: 185.4},
    {Imp:"6'2\"", Metr: 188.0},
    {Imp:"6'3\"", Metr: 190.5},
    {Imp:"6'4\"", Metr: 193.0},
    {Imp:"6'5\"", Metr: 195.6},
    {Imp:"6'6\"", Metr: 198.0},
    {Imp:"6'7\"", Metr: 200.7},
    {Imp:"6'8\"", Metr: 203.2},
    {Imp:"6'9\"", Metr: 205.7},
    {Imp:"7'0\"", Metr: 213.4},
    {Imp:"7'1\"", Metr: 215.9},
    {Imp:"7'2\"", Metr: 218.4},
    {Imp:"7'3\"", Metr: 220.1},
    {Imp:"7'4\"", Metr: 223.5},
    {Imp:"7'5\"", Metr: 226.0},
    {Imp:"7'6\"", Metr: 228.6},
    {Imp:"7'7\"", Metr: 231.1},
    {Imp:"7'8\"", Metr: 233.7},
    {Imp:"7'9\"", Metr: 236.2},
    {Imp:"8'0\"", Metr: 243.8},
],
secondSlider : [
    {Imp:`17"`, Metr: 43.1},
    {Imp:`17 ½"`, Metr: 44.4},
    {Imp:`18"`, Metr: 45.7},
    {Imp:`18 ½"`, Metr: 47.0},
    {Imp:`19 "`, Metr: 48.2},
    {Imp:`19 ½"`, Metr: 49.5},
    {Imp:`20 "`, Metr: 50.8},
    {Imp:`20 ½"`, Metr: 52.1},
    {Imp:`21 "`, Metr: 53.3},
    {Imp:`21 ½"`, Metr: 54.6},
    {Imp:`22 "`, Metr: 55.9},
    {Imp:`22 ½"`, Metr: 57.1},
    {Imp:`23 "`, Metr: 58.4},
    {Imp:`23 ½"`, Metr: 59.7},
    {Imp:`24 "`, Metr: 60.1},
],
thirdSlider : [
    {Imp:`2"`, Metr: 5.0},
    {Imp:`2 ¼"`, Metr: 5.7},
    {Imp:`2 ⅜"`, Metr: 6.0},
    {Imp:`2 ½"`, Metr: 6.3},
    {Imp:`2 ⅝"`, Metr: 6.6},
    {Imp:`2 ¾"`, Metr: 6.9},
    {Imp:`2 ⅞"`, Metr: 7.3},
    {Imp:`3"`, Metr: 7.6},
    {Imp:`3 ¼"`, Metr: 8.2},
    {Imp:`3 ⅜"`, Metr: 8.6},
    {Imp:`3 ½"`, Metr: 8.9},
    {Imp:`3 ⅝"`, Metr: 9.2},
    {Imp:`3 ¾"`, Metr: 9.5},
    {Imp:`3 ⅞"`, Metr: 9.8},
    
],
fourthSlider :[
    {val:0.54},
    {val:0.56},
    {val:0.58}
]
}
const currentValue = {
    firstSlider: {Imp: "6'5\"", Metr: 195.6},
    secondSlider: {Imp: "21 \"", Metr: 53.3},
    thirdSlider: {Imp: "3\"", Metr: 7.6},
    fourthSlider: {val:0.56}
}
const cont = document.getElementById('wrap')
cont.oninput = function (event) {
    let id = event.target.id;
    console.log(id);
    let val = event.target.value;
    console.log(val);
    currentValue[id] = arr[id][val];
    if (event.target.id !== 'fourthSlider'){
    event.target.previousSibling.previousSibling.lastElementChild.innerHTML = currentValue[id].Imp;
    }
    total(currentValue.firstSlider, currentValue.secondSlider, currentValue.thirdSlider, currentValue.fourthSlider);
}
function total(first, second, third, coeff){
    let ttl=document.getElementById('total');
    ttl.innerHTML = Math.floor((first.Metr * second.Metr * third.Metr * coeff.val)/100)/10 + ' LITERS';
}


