// Определяем переменную map
var map = document.querySelector('#map');

// Функция initMap которая отрисует карту на странице
function initMap() {

    // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
    map = new google.maps.Map(document.getElementById('map'), {
        // При создании объекта карты необходимо указать его свойства
        // center - определяем точку на которой карта будет центрироваться
        center: {lat: 50.396405, lng: 30.616343},
        // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
        zoom: 16,

        // Добавляем свои стили для отображения карты
        styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#e2e2e2"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#000000"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#ffffff"},{"visibility":"on"}]}]
    });

    // Создаем маркер на карте
    var marker = new google.maps.Marker({

        // Определяем позицию маркера
        position: {lat: 50.396205, lng: 30.616143},

        // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
        map: map,

        // Пишем название маркера - появится если навести на него курсор и немного подождать
        title: 'Наш маркер: Большой театр'
    });

    // Создаем маркер на карте
    var marker2 = new google.maps.Marker({

        // Определяем позицию маркера
        position: {lat: 50.396105, lng: 30.614143},

        // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
        map: map,

        // Пишем название маркера - появится если навести на него курсор и немного подождать
        title: ': Большой театр'
    });
}

// kiev
// lat: 50.4500336, lng: 30.5241361


// AIzaSyDFVkq7-veu-nWfDKRmLRSHdijV3l8bFpg