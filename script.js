
document.addEventListener("DOMContentLoaded", function() {
    const staffData = {
        "staff": [
            {
                "name": "Чарльз Коулман",
                "position": "Главный секретарь, был исполнительным директором корпорации «Амбрелла» в 1998 году.",
                "phone": "",
                "photo": "фото не доступно",
                "office_hours": "Понедельник — пятница с 08.00 до 16.30",
                "image": "1.png"
            },
            {
                "name": "Акитака Игараси",
                "position": "Управляющий директор, был президентом Umbrella Japan Corp., Ltd. и членом совета директоров.",
                "phone": "",
                "photo": "фото не доступно",
                "office_hours": "Понедельник — пятница с 08.00 до 16.30",
                "image": "1.png"
            },
            {
                "name": "Джоэл Оллман",
                "position": "Вице-президенто «Амбреллы» в США.",
                "phone": "",
                "photo": "фото не доступно",
                "office_hours": "Понедельник — пятница с 08.00 до 16.30",
                "image": "1.png"
            },
            {
                "name": "Джеймс Маркус",
                "position": "Был вирусологом, который вёл исследования вирусного оружия в XX веке. Он был одним из основателей Umbrella Pharmaceuticals.",
                "phone": "",
                "photo": "",
                "office_hours": "Понедельник — пятница с 08.00 до 16.30",
                "image": "2.png"
            },
            {
                "name": "Брэндон Бейли",
                "position": "Был вирусологом и протеже доктора Джеймса Маркуса, став одним из основателей Umbrella Pharmaceuticals.",
                "phone": "9",
                "photo": "фото не доступно",
                "office_hours": "Понедельник — пятница с 08.00 до 16.30",
                "image": "1.png"
            },
            {
                "name": "Дуглас Лопер",
                "position": "Был главой североамериканского подразделения компании Umbrella Medical Equipment.",
                "phone": "",
                "photo": "фото не доступно",
                "office_hours": "",
                "image": "1.png"
            },
            {
                "name": "Морфей Д. Дюваль",
                "position": "Был биотеррористом, ранее занимавшим руководящую должность в Корпорации Амбрелла.",
                "phone": "",
                "photo": "",
                "office_hours": "",
                "image": "3.png"
            },
            {
                "name": "О'Нил",
                "position": "Был высокопоставленным чиновником Umbrella, возглавлявшим Отдел международных расследований из штаб-квартиры Umbrella.",
                "phone": "",
                "photo": "фото не доступно",
                "office_hours": "",
                "image": "1.png"
            },
            {
                "name": "Фрост",
                "position": "Был исследователем «Амбреллы США», которого направили в комплекс «Гнездо» на окраине Раккун-Сити.",
                "phone": "",
                "photo": "",
                "office_hours": "",
                "image": "4.png"
            },
            {
                "name": "Майкл Дженкинс",
                "position": "Был исследователем «Амбреллы», работавшим в Научно-исследовательском центре «Амбреллы» в Раккун-Сити. ",
                "phone": "",
                "photo": "фото не доступно",
                "office_hours": "",
                "image": "1.png"
            },
            {
                "name": "Кит Арвинг",
                "position": "Был руководителем отдела визуальных данных в лаборатории Арклей",
                "phone": "",
                "photo": "фото не доступно",
                "office_hours": "фото не доступно",
                "image": "1.png"
            },
            {
                "name": "Элиас",
                "position": "Был сотрудником Службы безопасности «Амбрелла», которого направили в секретную патрульную группу лаборатории Арклей.",
                "phone": "",
                "photo": "фото не доступно",
                "office_hours": "",
                "image": "1.png"
            },
            {
                "name": "Аннет Биркин",
                "position": "Была вирусологом, работавшим на Umbrella U.S.A., и одним из администраторов их объекта NEST на окраине Раккун-Сити.",
                "phone": "",
                "photo": "",
                "office_hours": "",
                "image": "8.png"
            },
            {
                "name": "Уильям Биркин",
                "position": "был вирусологом, работавшим в Umbrella Pharmaceuticals в 1970–1990-х годах. Один из ведущих учёных, создавших t-вирус, и первооткрыватель вируса Голгофа.",
                "phone": "",
                "photo": "фото не доступно",
                "office_hours": "",
                "image": "9.png"
            },
            {
                "name": "Грег Мюллер",
                "position": "Был исследователем «Амбреллы».",
                "subjects": "Иностранный язык",
                "phone": "",
                "photo": "",
                "office_hours": "",
                "image": "10.png"
            },
            {
                "name": "Картер",
                "position": "Работал исследователем в Umbrella Pharmaceuticals в Центре разработки Umbrella Corp.",
                "subjects": "Изобразительное искусство",
                "phone": "",
                "photo": "",
                "office_hours": "",
                "image": "11.png"
            },
            {
                "name": "Линда Болдуин",
                "position": "Работала исследователем в Umbrella Pharmaceuticals в Umbrella's Corp.",
                "phone": "",
                "photo": "",
                "office_hours": "",
                "image": "12.png"
            }
        ]
    };

    const sliderContainer = document.getElementById('slider-container');
    staffData.staff.forEach(worker => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.innerHTML = `
            <img src="./img/${worker.image}" alt="${worker.name}, ${worker.photo}">
            <div class="text-overlay">
                <p class="worker-name">${worker.name}</p>
                <p class="worker-position">${worker.position}</p>
                <p class="worker-photo">${worker.photo}</p>
            </div>
        `;
        sliderContainer.appendChild(slide);
    });

    sliderContainer.addEventListener('wheel', function(event) {
        event.preventDefault();
        sliderContainer.scrollLeft += event.deltaY * 3;
    });
});
