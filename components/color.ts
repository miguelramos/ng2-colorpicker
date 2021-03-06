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

export interface IConvertFormat {
  match: Array<any>;
  type: string;
  color: any;
  format?: any;
}

export const CSS_COLORS = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '0ff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '00f',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  burntsienna: 'ea7e5d',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '0ff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'f0f',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '663399',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32',
};

export class Color {
  private _color: any = null;

  static helpers = {
    pad(c: any): string {
      return c.length === 1 ? '0' + c : '' + c;
    },
    convertHexToDecimal(hex: string): number {
      return (this.parseIntFromHex(hex) / 255);
    },
    parseIntFromHex(val: string): number {
      return parseInt(val, 16);
    },
    convertDecimalToHex(dec: string): string {
      return Math.round(parseFloat(dec) * 255).toString(16);
    },
    isPercentage(n: string): boolean {
      return (n.indexOf('%') !== -1);
    },
    isOnePointZero(n: string): boolean {
      return !!(n.indexOf('.') !== -1 && parseFloat(n) === 1);
    },
    bound(n: string, max: number): number {
      if (this.isOnePointZero(n)) {
        n = '100%';
      }

      let processPercent: boolean = this.isPercentage(n);
      let num = +Math.min(max, Math.max(0, parseFloat(n)));
      // Automatically convert percentage into number
      if (processPercent) {
        num = (parseInt(n, 10) * max) / 100;
      }

      // Handle floating point rounding errors
      if ((Math.abs(num - max) < 0.000001)) {
        return 1;
      }

      // Convert into [0, 1] range if it isn't already
      return <number>(num % max) / parseFloat(max.toString());
    },
    clamp(val: number): number {
      return Math.min(1, Math.max(0, val));
    },
    rgbaToHex(r: number, g: number, b: number, a: string): string {

      let hex: Array<string> = [
        this.pad(this.convertDecimalToHex(a)),
        this.pad(Math.round(g).toString(16)),
        this.pad(Math.round(b).toString(16)),
        this.pad(Math.round(r).toString(16)),
      ];

      return hex.join('');
    },
  };

  /**
   * Regex expressions to match color.
   *
   * @returns {IMatcher}
   */
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

  /**
   * Check color unit is supported by css.
   *
   * @param color
   * @returns {boolean}
   */
  static isValidCss(color: any): boolean {
    if (CSS_COLORS.hasOwnProperty(color)) {
      return true;
    }
    return !!Color.match().unit.exec(color);
  }

  /**
   *
   * @param color
   */
  static converter(color: any) {
    // trim left and right spaces
    color = color.replace(/^\s+/, '').replace(/\s+$/, '').toLowerCase();
    if (CSS_COLORS.hasOwnProperty(color)) {
      color = CSS_COLORS[color];
    }

    let matching: Function = () => {
      let matcher: IMatcher = Color.match();

      for (let key in matcher) {
        if (key !== 'unit' && matcher.hasOwnProperty(key)) {
          let match = matcher[key].exec(color);
          if (match) {
            return <IConvertFormat>{match: match, type: key, color: color};
          }
        }
      }

      return <IConvertFormat>{match: [], type: 'none', color: 'none'};
    };

    let format: IConvertFormat = matching();

    return Color.formatter(format);
  }

  static formatter(formatLog: IConvertFormat): IConvertFormat {
    switch (formatLog.type) {
      case 'hex3':
        formatLog.format = {
          r: Color.helpers.parseIntFromHex(formatLog.match[1] + '' + formatLog.match[1]),
          g: Color.helpers.parseIntFromHex(formatLog.match[2] + '' + formatLog.match[2]),
          b: Color.helpers.parseIntFromHex(formatLog.match[3] + '' + formatLog.match[3]),
        };
      break;
      case 'hex6':
        formatLog.format = {
          r: Color.helpers.parseIntFromHex(formatLog.match[1]),
          g: Color.helpers.parseIntFromHex(formatLog.match[2]),
          b: Color.helpers.parseIntFromHex(formatLog.match[3]),
        };
      break;
      case 'hex8':
        formatLog.format = {
          a: Color.helpers.convertHexToDecimal(formatLog.match[1]),
          r: Color.helpers.parseIntFromHex(formatLog.match[2]),
          g: Color.helpers.parseIntFromHex(formatLog.match[3]),
          b: Color.helpers.parseIntFromHex(formatLog.match[4]),
        };
      break;
      case 'rgb':
      break;
      case 'rgba':
      break;
      case 'hsl':
      break;
      case 'hsla':
      break;
      case 'hsv':
      break;
      default:
    }

    return formatLog;
  }

  /**
   * Color setter.
   *
   * @param color
   */
  set color(color: any) {
     if (Color.isValidCss(color)) {
       // TODO: Conversion color
       this._color = color;
     }
  }

  /**
   * Color getter.
   *
   * @returns {any}
   */
  get color(): any {
    return this._color;
  }
}
