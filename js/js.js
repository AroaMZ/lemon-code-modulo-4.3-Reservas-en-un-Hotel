//función para saber el precio de la habitación según el tipo.
function typeRoom() {
    var e = document.getElementById("room");
    var value = e.options[e.selectedIndex].value;
    return value;
}
function priceTypeRoom(roomType) {
    var roomPrice;
    if (roomType == "standard") {
        roomPrice = 100;
    } else if (roomType == "junior") {
        roomPrice = 120;
    } else if (roomType == "suite") {
        roomPrice = 150;
    }
    return roomPrice;
}
//función para saber el coste del uso del SPA en caso de uso.
function spaPrice() {
    var spa = 0;
    if (document.getElementById("spa").checked) {
        spa = 20;
        return spa;
    } else {
        return spa
    }
}
//función de suma del tipo de habitación y el uso o no del SPA
function prePrice() {
    let room_type = typeRoom()
    night = document.getElementById("night").value;
    if(night<0){
        night = 0
    } else {
        night = parseFloat(night);
    }
    night = night * (priceTypeRoom(room_type) + spaPrice());
    return night;
}
//función para ver el tipo de uso de la habitación
function useRoom() {
    var e = document.getElementById("occupation");
    var value = e.options[e.selectedIndex].value;
    return value;
}
//función para calcular el coste dependiendo del uso de la habitación (indivicual -25%, doble igual, triple +25%)
function occupationPrice(occupation) {
    if (occupation == "individual") {
        roomPrice = 0.75;
    } else if (occupation == "doble") {
        roomPrice = 1;
    } else if (occupation == "triple") {
        roomPrice = 1.25;
    }
    return roomPrice;
}
function prePrice2() {
    let useRooms = useRoom();
    var pricePre = occupationPrice(useRooms) * prePrice();
    return pricePre;
}
//función para calcular el coste del parking dependiendo del numero de noches.
function parkingPrice(parking) {
    parking = document.getElementById("parking").value;
    if(parking<0){
        parking = 0;
    }else{
        parking = parseFloat(parking);
    }
    park = parking * 10;
    return park;
}
//función para el precio final de la estancia.
function finalPrice() {
    let parking = parkingPrice();
    var totalPrice;
    totalPrice = prePrice2() + parking;
    document.getElementById("temporary").innerHTML = "El precio de tu reserva va por: " + totalPrice + " euros";
    return totalPrice;
}
document.getElementById('result').onclick = function () {
   

    document.getElementById("definitive").innerHTML = "El precio definitivo de tu reserva es " + finalPrice() + " euros";
}

