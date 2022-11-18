const COORDINATES = [59.937511252406686, 30.322611701832432];
const ZOOM = 16;

const yandexMap = () => {
  if (document.getElementById('map')) {
    const map = new ymaps.Map('map', {
      center: COORDINATES,
      zoom: ZOOM,
    });

    const pin = new ymaps.Placemark(COORDINATES, {}, {
      iconLayout: 'default#image',
      iconImageHref: './../img/sprite/map-pin.svg',
      iconImageSize: [18, 22],
      iconImageOffset: [0, -20],
    });

    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(pin);
  }
};

export {yandexMap};
