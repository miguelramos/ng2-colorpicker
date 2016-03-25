'use strict';
/**
 * ----------------------------------------------------------------------------
 * ng-color.ts
 * ----------------------------------------------------------------------------
 *
 * This file is part of angular2-components Project.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @license MIT
 */
export interface IMatcher {
  unit: RegExp;
  rgb: RegExp;
  rgba: RegExp;
  hsl: RegExp;
  hsla: RegExp;
  hsv: RegExp;
  hsva: RegExp;
  hex3: RegExp;
  hex6: RegExp;
  hex8: RegExp;
}

export class Color {
  static match(): IMatcher {
    // <http://www.w3.org/TR/css3-values/#integers>
    let CSS_INTEGER: string = '[-\\+]?\\d+%?';

    // <http://www.w3.org/TR/css3-values/#number-value>
    let CSS_NUMBER: string = '[-\\+]?\\d*\\.\\d+%?';

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    let CSS_UNIT: string = '(?:' + CSS_NUMBER + ')|(?:' + CSS_INTEGER + ')';

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    let PERMISSIVE_MATCH3: string = '[\\s|\\(]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')\\s*\\)?';
    let PERMISSIVE_MATCH4: string = '[\\s|\\(]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')\\s*\\)?';

    return <IMatcher>{
      unit: new RegExp(CSS_UNIT),
      rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
      rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
      hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
      hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
      hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
      hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    };
  }

  static isValidCss(color: any): boolean {
    return !!Color.match().unit.exec(color);
  }
}
