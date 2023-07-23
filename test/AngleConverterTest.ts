import assert from 'assert';
import { deg2Rad, rad2Deg } from '../lib/AngleConverter';

describe('AngleConverter', () => {

    it('should convert degrees to radians', () => {
        const angleInDegrees = 90;
        const convertedToRadians = deg2Rad(angleInDegrees);
        assert.strictEqual(convertedToRadians, Math.PI / 2);
    });

    it('should convert radians to degrees', () => {
        const angleInRadians = Math.PI;
        const convertedToDegrees = rad2Deg(angleInRadians);
        assert.strictEqual(convertedToDegrees, 180);
    });

});
