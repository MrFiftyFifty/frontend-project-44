[![Actions Status](https://github.com/MrFiftyFifty/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/MrFiftyFifty/frontend-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/5822c9e7c8bbdccc5109/maintainability)](https://codeclimate.com/github/MrFiftyFifty/frontend-project-44/maintainability)

# Игры разума (JavaScript)

«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново. 

Игры:
- Проверка на четность. Определение четного числа.
- Калькулятор. Арифметические выражения, которые необходимо вычислить.
- НОД. Найти наибольший общий делитель.
- Прогрессия. Поиск пропущенных чисел в последовательности чисел.

## Установка

```
$ sudo npm link 
```

## Игра: "Проверка на четность"

Суть игры: игроку показывается случайное число. Ему нужно ответить **yes**, если число чётное, или **no** — если нечётное.

#### Запуск игры

```
$ brain-even
```  

#### Пример игры

[![asciicast](https://asciinema.org/a/w0Mls5es0IbIO7NvQGy5F6EGX.svg)](https://asciinema.org/a/w0Mls5es0IbIO7NvQGy5F6EGX)

## Игра: "Калькулятор"

Суть игры: игроку показывается случайное математическое выражение, например **35 + 16**, которое нужно вычислить и записать правильный ответ.

#### Запуск игры

```
$ brain-calc
```  

#### Пример игры

[![asciicast](https://asciinema.org/a/bYNnpPLeYu68QrJlRL3TW3g5y.svg)](https://asciinema.org/a/bYNnpPLeYu68QrJlRL3TW3g5y)

## Игра: "НОД"

Суть игры: игроку показывается два случайных числа, например, **25 50**. Игрок должен вычислить и ввести наибольший общий делитель этих чисел.

#### Запуск игры

```
$ brain-gcd
```  

#### Пример игры

[![asciicast](https://asciinema.org/a/fjJfQBTzRKttaKRbZ4ufuf9eU.svg)](https://asciinema.org/a/fjJfQBTzRKttaKRbZ4ufuf9eU)

## Игра: "Арифметическая прогрессия"

Суть игры: игроку показывается ряд чисел, образующий арифметическую прогрессию. Игрок должен отгадать число, которое находится за точками.

#### Запуск игры

```
$ brain-progression
```  

#### Пример игры

[![asciicast](https://asciinema.org/a/HLVeseVRQ6JSPkPbUxTqW7vjy.svg)](https://asciinema.org/a/HLVeseVRQ6JSPkPbUxTqW7vjy)
