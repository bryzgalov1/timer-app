# Тестовое задание в компанию "Социальные Цифровые Платформы"

## Интерфейс:

![Interface](/interface.png)

## Логика:

1. Наверху расположены 4 кнопки с нумерацией (начиная с 1) При нажатии на
   кнопку должен запускаться таймер с задержкой в секундах, равной номеру кнопки.
2. Таймер следующей нажатой кнопки должен запускаться только после завершения предыдущего.
   Пример: Нажата кнопка “Таймер 3” и следом “Таймер 2”. Запускается таймер (3 секунды), после его прохождения записывается сообщение в логи (п.3) и запускается следующий таймер (2 секунды)...

3. По завершению отсчета таймера, в блок “Логи” добавляется запись в следующем формате: "\${время вывода строки в лог}: \${номер кнопки} / \${время нажатия кнопки}"

4. Записи в логе должны следовать в порядке нажатия кнопок.

5. Также есть кнопка "Сбросить”, по нажатию на которую состояние приложения должно возвращаться к исходному.

## Требования:

1. Приложение должно быть написано на React
2. Компоненты должны быть функциональными
3. Должна быть возможность переиспользования компонентов
4. Приложение должно поддерживать следующие npm-скрипты:

<p>a). start - запускается в режиме для разработки</p>
<p>b). build - собирается в продакшен-билд</p>

5. Для запуска приложения должно быть достаточно выполнить: npm i && npm
   start

## Результат:

<https://bryzgalov1.github.io/timer-app/> 
