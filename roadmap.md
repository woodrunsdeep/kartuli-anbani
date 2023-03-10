# Roadmap

## Страница проекта

[woodrunsdeep-kartuli.netlify.app](https://woodrunsdeep-kartuli.netlify.app)

## Дизайн

[Текущий макет в Figma](https://www.figma.com/file/FHXOeUyNNRua8XiVWvHxjI/kartuli-ena?t=MwFNNMKe6XJMDYIK-0)

## Цель

Переписать на Реакт

## Причина

Применение теоретический знаний о Реакте на практике

## Задачи

Основные:

1. [ ] На собственном приложении понять, как работает Реакт
2. [ ] Правильно выстроить архитектуру приложения
3. [ ] Потренироваться разбитию интерфейса на компоненты
4. [ ] Обеспечить возможность добавлять новые фичи безболезненно
5. [ ] Настроить сборку проекта
6. [ ] Следить за перформансом

Дополнительные:

1. [ ] Сделать интерфейс адаптивным
2. [ ] Использовать анимации
3. [ ] Обеспечить доступ с клавиатуры

## Потенциальные проблемы

1. Разграничение ответственности между компонентами
2. Корректное распределение данных между компонентами

## Данные

1. **Алфавит** - иммутабельный массив с буквами алфавита. Каждая буква содержит: написание на грузинском, английском и русском, а также транскрипцию
2. **Текущая сессия игры** - перемешанный алфавит. Инициализируется при первой загрузке страницы, по нажатию кнопки `Начать игру` - удаление текущей сессии и создание новой
3. **Результаты ответов** - изначально пустой массив. После каждого ответа результат записывается в массив
4. **Варианты ответов** - массив из правильной буквы + n кол-во неверных выбранных рандомно
5. **Количество оставшихся попыток** - по умолчанию дается 3 попытки на каждую букву
6. **Общее количество попыток** - общий счетчик совершенных попыток
7. **Язык ввода** - английский или русский. Изначальное значение `navigator.language`. Предусмотреть ручное изменение
8. **Режим квиза/изучения** - изучение представляет собой слайдер без формы ввода ответа. Клик по карточке вызывает ее переворот

## Состояния

1. Карточка:
    - Текущая карточка - `transform: scale(1.1)` - на 10% больше остальных карточек
    - Перевернута - видна оборотная сторона с ответом
    - Ответ (не)верный - перевернута, цвет (не)верного ответа

## Компоненты

- Слайдер
- Карточка - состоит из двух сторон: лицевая (буква на грузинском), оборотная - вся инфо по букве, включая ответ
- Форма ввода ответа
- Кнопка с вариантом ответа
- Поле с вводом текста
- Кнопка  `Ответить`
- Кнопка  `Начать заново`
- Счетчик номера текущей буквы
- Страница `О проекте`
- Результаты игры (кол-во попыток, (не) угаданных букв, общее затраченное время). Вывод в виде модального окна
- Онбординг с инструкцией к игре

## Идеи по развитию проекта

Фичи, которые планирую добавить в будущем:

1. Возможность изучать числительные и произвольный набор слов
2. Личный кабинет
3. Хранение статистики обучения
4. Построение графика истории обучения
5. Настройки сложности игры (кол-во попыток, вариантов ответа, определенное время на ответ)
6. Оффлайн режим
7. PWA
8. Произношение носителем языка
