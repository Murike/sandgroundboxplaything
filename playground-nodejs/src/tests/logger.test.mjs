import { expect, describe, test } from '@jest/globals';
import logger from '../utils/logger.js';

describe('Logging basics', () => {
    test('Correct logging prefix for info', () => {
        expect(logger.info('test')).toBe('[INFO] test')
    });
    
    test('Correct logging prefix for error', () => {
        expect(logger.error('test')).toBe('[ERROR] test')
    });

})