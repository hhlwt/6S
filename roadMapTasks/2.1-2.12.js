'use strict';

{
    // Преобразование типов 2.7

    String(true) // 'true'
    String(null) // 'null'
    String(5) // '5'

    Number('555') // 555
    Number('  555  ') // 555
    Number('a555') // NaN
    Number(undefined) // NaN
    Number(null) // 0
    Number(true) // 1
    Number(false) // 0

    Boolean(0) // false (null, undefined, NaN, "")
    Boolean(1) // true
    Boolean('something') // true
}

{
    // Базовые операторы 2.8

    console.log(3 + 10 + '%') // '13%'
    console.log(3 + 10 - '%') // NaN
    console.log(5 ** '2') // 25
    console.log('20' / '2') // 10

    console.log(+false) // 0
    console.log(+undefined) // NaN

    let subValue1;
    const value1 = ('3' + '2') / 4 * (subValue1 = (+'4') ** 1/2)
    console.log(value1) // 16

    let counter1 = 10
    let counter2 = 5
    let subValue2 = 20
    let value2 = counter1++ + +'10' + 10 + ++counter2 - (subValue2 *= 10 / '20')
    console.log(--value2) // 25

    const value3 = (-'4' * 3, '5' + 10 / 'two', null / 0) ** +''
    console.log(value3) // 1
}

{
    // Операторы сравнения

    console.log('abc' > 'abb') // true
    console.log('w' > 'abc') // true
    console.log('a' > 'ABC') // true

    console.log(null == undefined) // true
    console.log(null === undefined) // false
    console.log(null == +'') // false
    console.log(null >= +'') // true
}

{
    // Условное ветвление

    if ('90' / 2 - '10n'**Number('') === 44) { // do something
        console.log('do something');
    } else {
        console.log('do nothing');
    }

    const value = '90' / 2 - '10n'**Number('') === 44 ? 'correct' : 'wrong';
    console.log(value) // correct
}

{
    // Логические операторы

    console.log(null || 1 || 0 || undefined) // 1
    console.log('some' || '' || 0 || undefined) // some
    console.log(NaN || '' || 0) // 0
    console.log(NaN || '' || 0 || 'default') // default

    let value = '';
    value ||= 'result';
    console.log(value) // result
    value ||= 'anotherResult'
    console.log(value) // result

    console.log(true && 1 && 0 && 'some') // 0
    console.log('some' && '' && 0) // ''
    console.log('some' && 'another' && 'default') // default

    let value2 = 'my ';
    value2 &&= value2 + 'result';
    console.log(value2) // my result
    value2 &&= ''
    console.log(value2) // ''

    console.log(!value) // false
    console.log(!!value2) // false
}

{
    // Операторы нулевого слияния и присваивания

    console.log(null ?? NaN ?? 'some') // NaN
    console.log(undefined ?? 0 ?? 'some') // 0

    let value = 0;
    value ??= 'result'
    value ||= 'some';
    console.log(value) // some
    value &&= null;
    value ??= 'another';
    console.log(value) // another
}