# Progress

Круговой индикатор для мобильного веб-приложения. Без библиотек и сборки.

## Результат

- `Value` задаёт прогресс от 0 до 100; дуга начинается сверху и растёт по часовой стрелке.
- `Animate` включает вращение, `Hide` скрывает индикатор.
- Интерфейс адаптируется к портретной и альбомной ориентации.

## Локальный запуск

В каталоге проекта выполните:

```powershell
python -m http.server 8000
```

Откройте <http://localhost:8000/>. Локальный сервер нужен для загрузки JS-модулей.

## Повторное использование

Подключите только стили и скрипт компонента:

```html
<link rel="stylesheet" href="./progress-ring.css" />
<script type="module" src="./progress-ring.js"></script>
<progress-ring value="60" aria-label="Прогресс"></progress-ring>
```

Свойства `value`, `animated` и `hidden` доступны из JavaScript:

```js
const progress = document.querySelector("progress-ring");
progress.value = 75;
progress.animated = true;
progress.hidden = true;
```

`value` ограничивается диапазоном 0–100.
