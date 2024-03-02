import { hello, ValorColor, CombinarColores } from '../src/colores';

test('says hello world', () => {
    expect(hello()).toEqual('Hello, World')
});




describe('Función ValorColor', () => {
    test('devolviendo sel valor de un color', () => {
        expect(ValorColor('Red')).toEqual('2');
        expect(ValorColor('Blue')).toEqual('6');
    });

    test('"Error: Color no válido" en caso de que no haya colores', () => {
        expect(ValorColor('Magenta')).toEqual("Error: Color no válido");
    });
});


describe('Función CombinarColores', () => {
    test('combina valores de colores', () => {
        expect(CombinarColores(['Red', 'Blue'])).toEqual(26);
        expect(CombinarColores(['Green', 'Violet'])).toEqual(57);
    });

    test('colores no validos', () => {
        
        expect(CombinarColores(['Red', 'Magenta'])).toBeNaN();
    });
});
