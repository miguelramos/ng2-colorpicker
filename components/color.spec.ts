'use strict';
/**
 * ----------------------------------------------------------------------------
 * color.spec.ts
 * ----------------------------------------------------------------------------
 *
 * This file is part of angular2-components Project.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @license MIT
 */
import {it, xit} from 'angular2/testing';
import {Color, CSS_COLORS} from './color';

describe('Color Picker', () => {
  let possibilities: Array<string> = [
    'red',
    '#f00',
    'f00',
    '#ff0000',
    'ff0000',
    '#ff000000',
    'ff000000',
    'rgb 255 0 0',
    'rgb (255, 0, 0)',
    'rgb 1.0 0 0',
    'rgb (1, 0, 0)',
    'rgba (255, 0, 0, 1)',
    'rgba 255, 0, 0, 1',
    'rgba (1.0, 0, 0, 1)',
    'rgba 1.0, 0, 0, 1',
    'hsl(0, 100%, 50%)',
    'hsl 0 100% 50%',
    'hsla(0, 100%, 50%, 1)',
    'hsla 0 100% 50%, 1',
    'hsv(0, 100%, 100%)',
    'hsv 0 100% 100%',
  ];
  xit('Possibilities should be CSS readable.', () => {
    possibilities.map((color: string) => {
      expect(Color.isValidCss(color)).toBeTruthy();
    });
  });
  it('...', () => {
    possibilities.map((color: string) => {
      console.log(Color.converter(color));
    });
  });
  xit('Static helpers', () => {
      Color.helpers.bound('32', 255);
  });
});
