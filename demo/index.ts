'use strict';
/**
 * ----------------------------------------------------------------------------
 * index.ts
 * ----------------------------------------------------------------------------
 *
 * This file is part of ng2-colorpicker Project.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @license MIT
 */
import {bootstrap} from 'angular2/bootstrap';
import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';

// import {TableSection} from './components/table-section';

let gettingStarted = require('./getting-started.md');

@Component({
  selector: 'app',
  template: `
  <main class="bd-pageheader">
    <div class="container">
      <h1>ng2-colorpicker</h1>
      <p>Native Angular2 directives for Color Picker</p>
      <a class="btn btn-primary" href="https://github.com/valor-software/ng2-table">View on GitHub</a>
      <div class="row">
       <div class="col-lg-1"><iframe src="https://ghbtns.com/github-btn.html?user=valor-software&repo=ng2-table&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe></div>
        <div class="col-lg-1"><iframe src="https://ghbtns.com/github-btn.html?user=valor-software&repo=ng2-table&type=fork&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe></div>
      </div>
    </div>
  </main>

  <div class="container">
    <section id="getting-started">${gettingStarted}</section>

    <!--<table-section class="col-md-12"></table-section>-->
  </div>

  <footer class="footer">
    <div class="container">
      <p class="text-muted text-center"><a href="https://github.com/valor-software/ng2-table">ng2-table</a> is maintained by <a href="https://github.com/valor-software">valor-software</a>.</p>
    </div>
  </footer>
  `,
  directives: [
    NgClass,
  ],
})
export class Demo {
}

bootstrap(Demo);
