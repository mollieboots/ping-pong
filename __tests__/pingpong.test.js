import { pingPong } from './../src/ping-pong.js';
import { TestScheduler } from 'jest';

describe('pingPong', () => {

    test('should create an array from the user input containing all numbers from one(1) to the inputted number', () => {
        expect(pingPong(2)).toEqual([1,2])
    });

    test('should replace numbers divisible by three(3) with the string "ping"', () => {
        expect(pingPong(3)).toEqual([1,2,'ping']);
    });

    test('should replace numbers divisible by five(5) with the string "pong"', () => {
        expect(pingPong(5)).toEqual([1,2,'ping',4,'pong']);
    });

    test('should replace numbers divisible by fifteen(15) with the string "ping-pong"', () => {
        expect(pingPong(15)).toEqual([1,2,'ping',4,'pong','ping',7,8,'ping','pong',11,'ping',13,14,'ping-pong']);
    });
});