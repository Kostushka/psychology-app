# 🔰 Psychology Application

## 🐇 Links

-   `Project` https://kostushka.github.io/psychology-app
-   `Repository` https://github.com/Kostushka/psychology-app
-   `StoryBook` https://kostushka.github.io/psychology-app/storybook

## 🐀 Available Scripts and Commands

```bash
# Install
npm i                    # install dependencies
```

```bash
# General
npm run start            # run app in the development mode
npm run storybook        # run storybook
npm run deploy           # deploy app on Github Pages
```

```bash
# Deploy (part of "deploy" script)
npm run build            # builds the app for production
npm run build-storybook  # storybook build
npm run build-gh-pages   # deploy on Github Pages
```

## 🐕 Technologies

### React.js

-   Использование `create-react-app` для разворачивания приложения
-   Хук `useState` - состояние в функциональных компонентах
-   Хук `useEffect` для side effects в функциональных компонентах
-   Context API (хук `useContext`) - для смены темы
-   Рефы и DOM (хук `useRef`) - для изменения скорости видео
-   Создание собственного хука - для получения id из url
-   Фрагменты - для использования обертки без создания узла в DOM
-   Паттерн `Higher-Order Component` - для повторного использования логики в разных компонентах (в проекте : обработка ошибки запроса)
-   Обработка событий
-   Подключение CSS : `css-modules`, библиотека `classnames` для добавления нескольких стилей к элементу
-   Списки и ключи, `Reconciliation Algorithm`
-   Отложенная загрузка компонентов `React.lazy()`
-   Библиотека `prop-types` - для валидации props

### React Router

-   Базовый роутинг (библиотеки `react-router`, `react-router-dom`) : `BrowserRouter`, `Route`, `NavLink`, `Switch`
-   Обработка страницы 404 (Not Found)
-   Хук `useLocation` - для определения url, который забивает пользователь (в проекте : показываем для какого url совпадений не найдено)
-   Хук `useHistory` - для перемещения по истории браузера (в проекте : кнопка "назад")

### Redux

-   Хук `useSelector` - для получения данных из store (в проекте : для просмотра данных в избранном)
-   Хук `useDispatch` - для добавления данных в store (в проекте : для добавления данных в избранное)
-   Отслеживание состояния store с `redux-devtools-extension`

### General

-   Задание Alias (библиотека `react-app-rewire-alias`) - псевдонимы для путей
-   Деплой приложения на GitHub Pages (библиотека `gh-pages`)
-   Создание Ui-Kit, публикация в `@storybook` - для визуальных компонентов, которые можно переиспользовать
-   Библиотека `lodash` с готовыми функциями - для удаления объекта из state (функция omit)

### JavaScript

-   Методы работы с массивами: `map`, `filter`, `forEach`
-   Асинхронность : `Async Functions`
-   Деструктуризация массивов и объектов
-   Тернарные операторы
-   Работа с Local Storage - для сохранения данных в избранном при перезагрузке страницы
-   Работа с API с использованием `axios, axios.create()`
