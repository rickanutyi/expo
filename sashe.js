//
//  ГЛАВНАЯ СТРАНИЦА
//  LOGO = НАВЕРНОЕ БУДЕТ ОТДЕТ ОТДЕЛЬНАЯ ТАБЛИЦА С ЛОГОТИПАМИ ДЛЯ ВЫСТАВОК. Т.Е. ОДНА ТАБЛИЦА ГДЕ ВСЕ ЛОГО
//         ВНУТРИ ЛОГО ТЕКСТ ТАК ЧТО ЭТО ДУТЕЛ ВЫГДЯДЕТЬ ТАКИМ ОБРАЗОМ
//         ЛИСТ ИЗ ЛОГО = [ { "lending": 'medexpo', img: img, lang: 'ru' }, { "lending": 'medexpo', img: img, lang: 'eng' }, { "lending": 'dent', img: img, lang: 'eng' } ]
//         но получить я дрлжен конкретный. примерный endpoint = 
//         ПЕРВЫЙ ВАРИАНТ ВСЕ ВЫСЫЛАЮ В ПАРАМЕТРАХ ЗАПРОСА = GET https://medexpo.com/api/logos?lending={nameOflending}&lang={lang}
//         ВТОРОЙ ВАРИАНТ ВСЕ ВЫСЫЛАЮ В БАДИ = POST https://medexpo.com/api/logos body={lang: 'ru', lending: 'medexpo'}
//         
//         эти два варианта касаются всего что есть ниже. сам выбери как тебе легче, с бади брать или с параметров


// блок со спонсорами 
// ТАБЛИЦА С ИКОНКАМИ
// блоки с офиц-я поддержка, инфо-я поддержка похожи, так что их тоже давай в этой же таблице хранить

// interface Image = {
//      img: img,
//      href: 'ссылка на спонсора, поле может быть пустым',
//      lang: насчет этого не уверен, нужно ли на каждый язык картики менять,
// }

// interface Type =  String = 'sponsors' или 'info' или 'official' // что - то вроде этого

// ЛИСТ = [ { landing: 'medexpo', images: [ Image, Image, Image ] , type: Type},  { landing: 'dent', images: [ Image, Image, Image ] } ]

// запрос примерно такой post = https://medexpo.com/api/тут ты уже сам эндпоинт придумай       body={type: Type, lending: 'medexpo'}


// основной партнер = хуй знает куда его вставить. просто картинка




// видосики
// 2 дидео
// ЛИСТ = [ { video: 'ссылка на ютуб(или нет)', img: 'картика для видосика', text: 'какойто текст' } ]



// РАЗДЕЛЫ ВЫСТАВКИ
// ЛИСТ = [ { title: 'text' , descrip: ['string'] , lang: 'ru' } ]



// ОФИЦИАЛЬНАЯ ПОДДЕРЖКА
// ЛИСТ = КАК И СО СПОНСОРАМИ



// БЛОК МЫ СТРОИМ БУДУЩЕЕ
// Лист = [ { title: 'text' , descrp: 'text', percent: '50%', lang: 'ru' } ]



// БЛОК ПРОГРАММА МЕРОПРИЯТИЙ 
// ЛИСТ = [ { title: text, descrp: text, lang: ru, landing: 'medexpo' } ]

// нижний блок
// контактные данные { email: 'text', phone: 'text', website: text }