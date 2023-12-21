/*
В каждой задаче нужно оставлять короткие комментарии, которые описывают смысл вашего кода - это обязательно

Задачи:

1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). 
Эта функция принимает в себя целое число со значением длины ребра куба. 
Ответ выведите в формате строки, который изображен в примерах.
Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

Примеры:

calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'
calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'
calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'
*/
const a = 'lil'//создала для проверок при других типах данных
function calculateVolumeAndArea (length) {
    if (length < 0 || typeof length != 'number') {
        console.log('При вычислении произошла ошибка') //отсекаем значения ребра меньше 0 и аргументы с другими видами данных 
    } else {
        console.log('Объем куба: ', length ** 3, ', площадь всей поверхности: ', length * length * 6)
    }
}
calculateVolumeAndArea(a) //вызов функции

/*
2) Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Функция принимает только целое число от 1 до 36.
Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение: "Ошибка. Проверьте правильность введенного номера места"
Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

Пример:
getCoupeNumber(33)  => 9
getCoupeNumber(7)  => 2
getCoupeNumber(300)  => "Таких мест в вагоне не существует"
getCoupeNumber(0)  => "Таких мест в вагоне не существует"
getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"
getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"
getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"
*/
function getCoupeNumber (seat) {
    if (typeof seat != 'number' || seat < 0 || Number.isInteger(seat) === false) { //отсекаем значения bool и sring, меньше нуля и дробные 
        console.log('Ошибка. Проверьте правильность введенного номера места')
    }
    else if (seat === 0 || seat > 36) { //отсекаем несуществующие места 
        console.log("Таких мест в вагоне не существует")
    } else {
        console.log(Math.ceil(seat / 4)) //считаем, округляя до большего (Math.ceil нашла в интернетике)
    }
}

getCoupeNumber(33)
/*
3) Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
Для определения типа данных используйте typeof();
Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]
*/
function changeMassive (mass) {
    for (let i = 0; i < mass.length; i++) { //цикл для каждого элемента в массиве 
        if (typeof mass[i] === 'number') { //если число то умножаем 
            mass[i] *= 2
        } else { mass[i] += '- done'} //иначе прибавляем подпись 
    }
    console.log(mass)
}

changeMassive([ 5, 10, 'Shopping', 20, 'Homework' ])
/*
4) Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
ВАЖНО: нельзя использовать функцию reverse у массива
*/
 
function newReverseMassive (data) {
    const result = [] //создали массив для записи
    for (let i = data.length - 1; i >= 0; i--) { //цикл идет с обратного конца (длина массива на 1 больше индекса последнего элемента, поэтому вычиаем единичку)
        result.push(data[i])//запихиваем крайний элемент в начало нового массива
    }
    console.log(result)
}

newReverseMassive([ 5, 10, 'Shopping', 20, 'Homework'])
/*
5) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'
*/

function showFamily (family) {
    if (family == '') {     //условия для пустого массива 
        console.log('Семья пуста')
    } else {
        console.log('Семья состоит из: ', ...family) //используем spread оператор 
    }
}

showFamily(['Katya', 'Yasya', 'Kostya'])
/*
6) Задания на поиск ошибок в коде
У вас есть объект с данными о ресторане. Начинающий разработчик создал несколько функций, которые работают неправильно и он не может понять почему. 
Нужно исправить функции так, чтобы они давали всегда правильный результат. Все функции и объект написаны ниже

    6.1) Функция isOpen не хочет правильно работать. Что мы уже не пробовали подставлять в неё - результат все время неправильный. 
    Необходимо найти причины, написать причины в виде комментария и исправить их.

    6.2) Функция isAverageLunchPriceTrue должна брать цены двух любых блюд из меню, складывать их и сравнивать с средним чеком (averageLunchPrice).
        Сейчас функция работает, но постоянно выдает неправильный результат. 
        Ведь из представленного меню сумма двух любых цен всегда будет больше 20. Необходимо найти причины, написать причины в виде комментария и исправить их.


*** Усложненная задача - необязательная задача, но дающая сверху 1 балл к оценке за решение
Это одна из классических задач в программировании на формирование самых разных фигур при помощи кода.
Сейчас вам необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

     *
    ***
   *****
  *******
 *********
***********

Количество звездочек можете задаватьь напрямую в коде или через дополнительную переменную - не столь важно.
(Подсказка: в конце фигуры есть перенос строки \n, который тоже учитывается в тестах. 
    В КОНЦЕ КАЖДОЙ СТРОКИ НЕТ ПРОБЕЛОВ, ТОЛЬКО ПЕРЕНОС - это будет проверяться)
*/

function starsFigure (numb) {
    let newFigure = ''//создаем элемент, куда будем записывать
    for (let i = 1; i <= numb; i+=2) {// перебираем количество звездочек, оно всегда нечетное 
        let space = (numb - i) / 2 //так вычисляется количество пробелов в начале строки 
        for (space; space > 0; space--) {//цикл для записи пробелов
            newFigure += ' '
        }
        for (let stars = i; stars > 0; stars--) {//цикл для записи звездочек
            newFigure += '*'
        }
        newFigure += '\n'//перенос на след строку 
    }
    console.log(newFigure)
}
console.log(starsFigure(7))//в функцию передается значение максимального количества звездочек в строчке т.е. сколько в последней
// Задание 6
const restorantData = {
    menu: [
      {
        name: 'Salad Caesar',
        price: '14$',
      },
      {
        name: 'Pizza Diavola',
        price: '9$',
      },
      {
        name: 'Beefsteak',
        price: '17$',
      },
      {
        name: 'Napoleon',
        price: '7$',
      },
    ],
    waitors: [
      { name: 'Alice', age: 22 },
      { name: 'John', age: 24 },
    ],
    averageLunchPrice: '20$',
    openNow: true,
  }
  
  function isOpen(prop) {
    let answer = ''
    prop ? (answer = 'Открыто') : (answer = 'Закрыто')//я не знаю, ошибка ли это, но просто логически получается несоответствие переводов: openNow: true в нашем случае - это Закрыто.. я исправлю на всякий случай
  
    return answer
  }
  // синтаксическая ошибка "anwser" и "answer"
  console.log(isOpen(restorantData.openNow)) //не обратились к самому объекту, ключ без объекта не работает 
  
  function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (Number(fDish.price.slice(0, -1)) + Number(sDish.price.slice(0, -1)) < average) {//у нас складываются строки,а не числа и сравниваются с числом и у второго блюда тогда надо тоже убрать $
      return 'Цена ниже средней'
    } else {
      return 'Цена выше средней'
    }
   }
 
  console.log(
    isAverageLunchPriceTrue(
      restorantData.menu[0],
      restorantData.menu[1],
      restorantData.averageLunchPrice
    )
  )
  
  function transferWaitors(data) {//тут, вроде, нет задания уже
    const copy = Object.assign({}, data)
  
    copy.waitors[0] = { name: 'Mike', age: 32 }
    console.log(copy)
  }
  
  transferWaitors(restorantData)