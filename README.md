
Интернет-магазин одежды
Этот проект представляет собой интернет-магазин одежды с функционалом добавления товаров в корзину, фильтрации по размерам и оформления заказа.
Технологии
React: Библиотека для создания пользовательского интерфейса.
Axios: Для отправки HTTP-запросов (используется для оформления заказа).
Styled Components: Для стилизации компонентов.
React Hooks: Для управления состоянием и жизненным циклом компонентов.
Установка и запуск
Для запуска проекта на вашем компьютере, выполните следующие шаги:
1. Клонирование репозитория
Перейдите в папку проекта:
cd название-репозитория
2. Установка зависимостей
Установите все необходимые зависимости с помощью npm или yarn:
npm install
yarn install
3. Запуск сервера для разработки
Запустите проект в режиме разработки:
npm start
После этого проект будет доступен по адресу: http://localhost:3000.
4. Для запуска сайта используй:
npx nodemon server.js

Структура проекта
src/components/: Содержит все React-компоненты.
Cart/: Компонент корзины.
Filters/: Компонент фильтров по размерам.
ProductCard/: Компонент карточки товара.
ProductList/: Компонент списка товаров.
src/data/: Содержит данные о товарах (например, products.js).
src/App.styles.js: Стили для основного компонента App.
src/App.js: Основной компонент приложения.
server/: Папка с серверным кодом для обработки заказов.
#   s h o p  
 