TShop.Balcony.registerCajoledMods("322601270","{  ___.loadModule({      'instantiate': function (___, IMPORTS___) {        return ___.prepareModule({            'instantiate': function (___, IMPORTS___) {              var dis___ = IMPORTS___;              var moduleResult___, x0___, x1___, x2___, x3___, x4___, x5___,              x6___, x7___, x8___;              moduleResult___ = ___.NO_RESULT;              try {                {                  {                    function sort(el, childTagName) {                      var h, box, minH, x0___, boxW, x1___, n, x2___, x3___,                      x4___, i, boxh, x5___, x6___, x7___, x8___, x9___,                      x10___, x11___, x12___, minKey, x13___, x14___, x15___,                      x16___, x17___, x18___, maxH, x19___, maxKey, x20___,                      x21___, i, x22___, x23___;                      h = [ ];                      box = el.getElementsByTagName_m___?                        el.getElementsByTagName(childTagName):                      el.m___('getElementsByTagName', [ childTagName ]);                      minH = (x0___ = box[ +0 ], x0___.offsetHeight_v___?                        x0___.offsetHeight: x0___.v___('offsetHeight'));                      boxW = (x1___ = box[ +0 ], x1___.offsetWidth_v___?                        x1___.offsetWidth: x1___.v___('offsetWidth')) +                        (IMPORTS___.margin_v___? IMPORTS___.margin:                        ___.ri(IMPORTS___, 'margin'));                      n = 680 / boxW | 0;                      x2___ = el.style_v___? el.style: el.v___('style'), x3___                        = n * boxW - (IMPORTS___.margin_v___?                        IMPORTS___.margin: ___.ri(IMPORTS___, 'margin')) +                        'px', x2___.width_w___ === x2___? (x2___.width = x3___)                        : x2___.w___('width', x3___);                      x4___ = IMPORTS___.DOM_v___? IMPORTS___.DOM:                      ___.ri(IMPORTS___, 'DOM'), x4___.addClass_m___?                        x4___.addClass(el, 'isVisble'): x4___.m___('addClass',                        [ el, 'isVisble' ]);                      for (i = 0; i < box.length; i++) {                        boxh = (x5___ = box[ +i ], x5___.offsetHeight_v___?                          x5___.offsetHeight: x5___.v___('offsetHeight'));                        if (i < n) {                          h.NUM____w___ === h? (h[ +i ] = boxh): h.w___(+i,                            boxh);                          x7___ = (x6___ = box[ +i ], x6___.style_v___?                            x6___.style: x6___.v___('style')), x8___ = 0 +                            'px', x7___.top_w___ === x7___? (x7___.top = x8___)                            : x7___.w___('top', x8___);                          x10___ = (x9___ = box[ +i ], x9___.style_v___?                            x9___.style: x9___.v___('style')), x11___ = i *                            boxW + 'px', x10___.left_w___ === x10___?                            (x10___.left = x11___): x10___.w___('left', x11___)                            ;                        } else {                          minH = (x12___ = IMPORTS___.Array_v___?                            IMPORTS___.Array: ___.ri(IMPORTS___, 'Array'),                            x12___.min_m___? x12___.min(h): x12___.m___('min',                              [ h ]));                          minKey = (IMPORTS___.getarraykey_v___?                            IMPORTS___.getarraykey: ___.ri(IMPORTS___,                              'getarraykey')).i___(h, minH);                          h.w___(minKey, h.v___(minKey) + (boxh +                              (IMPORTS___.margin_v___? IMPORTS___.margin:                               ___.ri(IMPORTS___, 'margin'))));                          x14___ = (x13___ = box[ +i ], x13___.style_v___?                            x13___.style: x13___.v___('style')), x15___ = minH                            + (IMPORTS___.margin_v___? IMPORTS___.margin:                            ___.ri(IMPORTS___, 'margin')) + 'px',                          x14___.top_w___ === x14___? (x14___.top = x15___):                          x14___.w___('top', x15___);                          x17___ = (x16___ = box[ +i ], x16___.style_v___?                            x16___.style: x16___.v___('style')), x18___ =                            minKey * boxW + 'px', x17___.left_w___ === x17___?                            (x17___.left = x18___): x17___.w___('left', x18___)                            ;                        }                        maxH = (x19___ = IMPORTS___.Array_v___?                          IMPORTS___.Array: ___.ri(IMPORTS___, 'Array'),                          x19___.max_m___? x19___.max(h): x19___.m___('max', [                              h ]));                        maxKey = (IMPORTS___.getarraykey_v___?                          IMPORTS___.getarraykey: ___.ri(IMPORTS___,                            'getarraykey')).i___(h, maxH);                        x20___ = el.style_v___? el.style: el.v___('style'),                        x21___ = h.v___(maxKey) + 'px', x20___.height_w___ ===                          x20___? (x20___.height = x21___):                        x20___.w___('height', x21___);                      }                      for (i = 0; i < box.length; i++) {                        x22___ = IMPORTS___.DOM_v___? IMPORTS___.DOM:                        ___.ri(IMPORTS___, 'DOM'), x23___ = box[ +i ],                        x22___.addClass_m___? x22___.addClass(x23___,                          'isVisble'): x22___.m___('addClass', [ x23___,                            'isVisble' ]);                      }                    }                    IMPORTS___.w___('sort', ___.f(sort, 'sort'));                  }                  {                    function getarraykey(s, v) {                      var k, x0___, x1___, x2___;                      k = null;                      {                        x2___ = Object(s).e___();                        for (x1___ in x2___) {                          if (typeof x1___ === 'number' || '' + +x1___ ===                            x1___) { k = x1___; } else {                            if (/^NUM___/.test(x1___) && /__$/.test(x1___)) {                              continue; }                            x0___ = x1___.match(/([\\s\\S]*)_e___$/);                            if (!x0___ || !x2___[ x1___ ]) { continue; }                            k = x0___[ 1 ];                          }                          {                            if (s.v___(k) == v) { return k; }                          }                        }                      }                    }                    IMPORTS___.w___('getarraykey', ___.f(getarraykey,                        'getarraykey'));                  }                  IMPORTS___.w___('DOM', (x0___ = IMPORTS___.KISSY_v___?                      IMPORTS___.KISSY: ___.ri(IMPORTS___, 'KISSY'),                      x0___.DOM_v___? x0___.DOM: x0___.v___('DOM')));                  IMPORTS___.w___('Anim', (x1___ = IMPORTS___.KISSY_v___?                      IMPORTS___.KISSY: ___.ri(IMPORTS___, 'KISSY'),                      x1___.Anim_v___? x1___.Anim: x1___.v___('Anim')));                  IMPORTS___.w___('SWTICH', ___.f(function () {                        var id, each, fadeIn, fadeOut;                        {                          function id(name) {                            var x0___, x1___;                            return (x0___ = IMPORTS___.DOM_v___?                              IMPORTS___.DOM: ___.ri(IMPORTS___, 'DOM'), x1___                              = '.' + name, x0___.query_m___?                              x0___.query(x1___): x0___.m___('query', [ x1___ ]                              ))[ +0 ];                          }                          ___.f(id, 'id');                        }                        {                          function each(arr, callback, thisp) {                            var i, len, x0___;                            if (arr.forEach_v___? arr.forEach:                              arr.v___('forEach')) {                              arr.forEach_m___? arr.forEach(callback, thisp):                              arr.m___('forEach', [ callback, thisp ]);                            } else {                              for (i = 0, len = arr.length; i < len; i++) x0___                                = arr[ +i ], callback.call_m___?                                callback.call(thisp, x0___, i, arr):                              callback.m___('call', [ thisp, x0___, i, arr ]);                            }                          }                          ___.f(each, 'each');                        }                        {                          function fadeIn(elem) {                            var x0___, anim;                            x0___ = IMPORTS___.DOM_v___? IMPORTS___.DOM:                            ___.ri(IMPORTS___, 'DOM'), x0___.removeClass_m___?                              x0___.removeClass(elem, 'in'):                            x0___.m___('removeClass', [ elem, 'in' ]);                            if (anim) {                              anim.stop_m___? anim.stop(): anim.m___('stop', [                                ]);                            }                            anim = (IMPORTS___.Anim_v___? IMPORTS___.Anim:                              ___.ri(IMPORTS___, 'Anim')).i___(elem, ___.iM([                                  'filter', 'alpha(opacity=1)', 'opacity', '1'                                ]));                            anim.run_m___? anim.run(): anim.m___('run', [ ]);                          }                          ___.f(fadeIn, 'fadeIn');                        }                        {                          function fadeOut(elem) {                            var anim, x0___;                            if (anim) {                              anim.stop_m___? anim.stop(): anim.m___('stop', [                                ]);                            }                            anim = (IMPORTS___.Anim_v___? IMPORTS___.Anim:                              ___.ri(IMPORTS___, 'Anim')).i___(elem, ___.iM([                                  'filter', 'alpha(opacity=0)', 'opacity', '0'                                ]));                            anim.run_m___? anim.run(): anim.m___('run', [ ]);                            x0___ = IMPORTS___.DOM_v___? IMPORTS___.DOM:                            ___.ri(IMPORTS___, 'DOM'), x0___.addClass_m___?                              x0___.addClass(elem, 'in'):                            x0___.m___('addClass', [ elem, 'in' ]);                          }                          ___.f(fadeOut, 'fadeOut');                        }                        return ___.iM([ 'scroll', (function () {                                function scroll$_lit(count, wrapId, ulId,                                  infoId, stopTime) {                                  var dis___ = this && this.___? void 0: this;                                  var self, targetIdx, curIndex, frag, x0___,                                  x1___, x2___, i, x3___, x4___, x5___, x6___,                                  x7___, x8___, x9___, x10___, x11___, x12___,                                  banAnim, itv, x13___, x14___, x15___, x16___;                                  self = dis___;                                  targetIdx = 0;                                  curIndex = 0;                                  frag = (x0___ = IMPORTS___.document_v___?                                    IMPORTS___.document: ___.ri(IMPORTS___,                                      'document'),                                    x0___.createDocumentFragment_m___?                                    x0___.createDocumentFragment():                                    x0___.m___('createDocumentFragment', [ ]));                                  x1___ = [ ], dis___.num_w___ === dis___?                                    (dis___.num = x1___): dis___.w___('num',                                    x1___);                                  x2___ = id.i___(infoId), dis___.info_w___ ===                                    dis___? (dis___.info = x2___):                                  dis___.w___('info', x2___);                                  for (i = 0; i < count; i++) {                                    x7___ = (x3___ = dis___.num_v___?                                      dis___.num: dis___.v___('num'), x6___ =                                      (x5___ = (x4___ =                                         IMPORTS___.document_v___?                                         IMPORTS___.document:                                         ___.ri(IMPORTS___, 'document'),                                         x4___.createElement_m___?                                         x4___.createElement('li'):                                         x4___.m___('createElement', [ 'li' ]))                                       , frag.appendChild_m___?                                       frag.appendChild(x5___):                                       frag.m___('appendChild', [ x5___ ])),                                      x3___.NUM____w___ === x3___? (x3___[ +i ]                                          = x6___): x3___.w___(+i, x6___)),                                    x8___ = i + 1, x7___.innerHTML_w___ ===                                      x7___? (x7___.innerHTML = x8___):                                    x7___.w___('innerHTML', x8___);                                  }                                  x9___ = id.i___(ulId),                                  x9___.appendChild_m___?                                    x9___.appendChild(frag):                                  x9___.m___('appendChild', [ frag ]);                                  x11___ = (x10___ = id.i___(wrapId),                                    x10___.getElementsByTagName_m___?                                    x10___.getElementsByTagName('a'):                                    x10___.m___('getElementsByTagName', [ 'a' ]                                    )), dis___.img_w___ === dis___? (dis___.img                                    = x11___): dis___.w___('img', x11___);                                  x12___ = (dis___.num_v___? dis___.num:                                    dis___.v___('num'))[ +0 ],                                  x12___.className_w___ === x12___?                                    (x12___.className = 'on'):                                  x12___.w___('className', 'on');                                  banAnim = (IMPORTS___.Anim_v___?                                    IMPORTS___.Anim: ___.ri(IMPORTS___, 'Anim')                                  ).i___(id.i___('banner_bg'), ___.iM([                                        'filter', 'alpha(opacity=0.3)',                                        'opacity', '0.3' ]), 0.01);                                  banAnim.run_m___? banAnim.run():                                  banAnim.m___('run', [ ]);                                  each.i___(dis___.img_v___? dis___.img:                                    dis___.v___('img'), ___.f(function (elem,                                        idx, arr) {                                        var x0___, anim, x1___;                                        if (idx != 0) {                                          x0___ = IMPORTS___.DOM_v___?                                            IMPORTS___.DOM: ___.ri(IMPORTS___,                                            'DOM'), x0___.addClass_m___?                                            x0___.addClass(elem, 'in'):                                          x0___.m___('addClass', [ elem, 'in' ]                                          );                                          if (anim) {                                            anim.stop_m___? anim.stop():                                            anim.m___('stop', [ ]);                                          }                                          anim = (IMPORTS___.Anim_v___?                                            IMPORTS___.Anim: ___.ri(IMPORTS___,                                              'Anim')).i___(elem, ___.iM([                                                'filter', 'alpha(opacity=0)',                                                'opacity', '0' ]), 0.01);                                          anim.run_m___? anim.run():                                          anim.m___('run', [ ]);                                          x1___ = IMPORTS___.DOM_v___?                                            IMPORTS___.DOM: ___.ri(IMPORTS___,                                            'DOM'), x1___.addClass_m___?                                            x1___.addClass(elem, 'in'):                                          x1___.m___('addClass', [ elem, 'in' ]                                          );                                        }                                      }));                                  each.i___(dis___.num_v___? dis___.num:                                    dis___.v___('num'), ___.f(function (elem,                                        idx, arr) {                                        var x0___;                                        x0___ = (function () {                                            function onclick$_meth() {                                              self.fade_m___? self.fade(idx,                                                curIndex): self.m___('fade', [                                                  idx, curIndex ]);                                              curIndex = idx;                                              targetIdx = idx;                                            }                                            return ___.f(onclick$_meth,                                              'onclick$_meth');                                          })(), elem.onclick_w___ === elem?                                          (elem.onclick = x0___):                                        elem.w___('onclick', x0___);                                      }));                                  itv = (IMPORTS___.setInterval_v___?                                    IMPORTS___.setInterval: ___.ri(IMPORTS___,                                      'setInterval')).i___(___.f(function () {                                        if (targetIdx < (self.num_v___?                                            self.num: self.v___('num')).length                                          - 1) { targetIdx++; } else {                                          targetIdx = 0; }                                        self.fade_m___? self.fade(targetIdx,                                          curIndex): self.m___('fade', [                                            targetIdx, curIndex ]);                                        curIndex = targetIdx;                                      }), stopTime);                                  x13___ = id.i___(ulId), x14___ = (function ()                                      {                                      function onmouseover$_meth() {                                        (IMPORTS___.clearInterval_v___?                                         IMPORTS___.clearInterval:                                         ___.ri(IMPORTS___, 'clearInterval'))                                        .i___(itv);                                      }                                      return ___.f(onmouseover$_meth,                                        'onmouseover$_meth');                                    })(), x13___.onmouseover_w___ === x13___?                                    (x13___.onmouseover = x14___):                                  x13___.w___('onmouseover', x14___);                                  x15___ = id.i___(ulId), x16___ = (function ()                                    {                                      function onmouseout$_meth() {                                        itv = (IMPORTS___.setInterval_v___?                                          IMPORTS___.setInterval:                                          ___.ri(IMPORTS___, 'setInterval'))                                          .i___(___.f(function () {                                              if (targetIdx < (self.num_v___?                                                  self.num: self.v___('num'))                                                .length - 1) { targetIdx++; }                                              else { targetIdx = 0; }                                              self.fade_m___?                                                self.fade(targetIdx, curIndex):                                              self.m___('fade', [ targetIdx,                                                  curIndex ]);                                              curIndex = targetIdx;                                            }), stopTime);                                      }                                      return ___.f(onmouseout$_meth,                                        'onmouseout$_meth');                                    })(), x15___.onmouseout_w___ === x15___?                                    (x15___.onmouseout = x16___):                                  x15___.w___('onmouseout', x16___);                                }                                return ___.f(scroll$_lit, 'scroll$_lit');                              })(), 'fade', (function () {                                function fade$_lit(idx, lastIdx) {                                  var dis___ = this && this.___? void 0: this;                                  var self;                                  if (idx == lastIdx) return;                                  self = dis___;                                  fadeOut.i___((self.img_v___? self.img:                                      self.v___('img')).v___(lastIdx));                                  fadeIn.i___((self.img_v___? self.img:                                      self.v___('img')).v___(idx));                                  each.i___(self.num_v___? self.num:                                    self.v___('num'), ___.f(function (elem,                                        elemidx, arr) {                                        var x0___, x1___, x2___, x3___;                                        if (elemidx != idx) {                                          x0___ = (self.num_v___? self.num:                                            self.v___('num')).v___(elemidx),                                          x0___.className_w___ === x0___?                                            (x0___.className = ''):                                          x0___.w___('className', '');                                        } else {                                          x2___ = (x1___ = id.i___('list'),                                            x1___.style_v___? x1___.style:                                            x1___.v___('style')),                                          x2___.background_w___ === x2___?                                            (x2___.background = ''):                                          x2___.w___('background', '');                                          x3___ = (self.num_v___? self.num:                                            self.v___('num')).v___(elemidx),                                          x3___.className_w___ === x3___?                                            (x3___.className = 'on'):                                          x3___.w___('className', 'on');                                        }                                      }));                                }                                return ___.f(fade$_lit, 'fade$_lit');                              })() ]);                      }).i___());                  if ((x2___ = IMPORTS___.DOM_v___? IMPORTS___.DOM:                      ___.ri(IMPORTS___, 'DOM'), x2___.query_m___?                      x2___.query('.banner_list'): x2___.m___('query', [                          '.banner_list' ])).length > 0) {                    x3___ = IMPORTS___.SWTICH_v___? IMPORTS___.SWTICH:                    ___.ri(IMPORTS___, 'SWTICH'), x3___.scroll_m___?                      x3___.scroll(3, 'banner_list', 'list', 'banner_info',                      4000): x3___.m___('scroll', [ 3, 'banner_list', 'list',                        'banner_info', 4000 ]);                  }                  IMPORTS___.w___('DOM', (x4___ = IMPORTS___.KISSY_v___?                      IMPORTS___.KISSY: ___.ri(IMPORTS___, 'KISSY'),                      x4___.DOM_v___? x4___.DOM: x4___.v___('DOM')));                  IMPORTS___.w___('$id', (function () {                        function $id$_var(o) {                          var x0___, x1___;                          return (x0___ = IMPORTS___.DOM_v___? IMPORTS___.DOM:                            ___.ri(IMPORTS___, 'DOM'), x1___ = '.' + o,                            x0___.query_m___? x0___.query(x1___):                            x0___.m___('query', [ x1___ ]))[ +0 ];                        }                        return ___.f($id$_var, '$id$_var');                      })());                  IMPORTS___.w___('warpWidth', 210);                  IMPORTS___.w___('margin', 10);                  x5___ = IMPORTS___.Array_v___? IMPORTS___.Array:                  ___.ri(IMPORTS___, 'Array'), x6___ = (function () {                      function min$_meth(array) {                        var x0___, x1___, x2___;                        return x1___ = (x0___ = IMPORTS___.Math_v___?                          IMPORTS___.Math: ___.ri(IMPORTS___, 'Math'),                          x0___.min_v___? x0___.min: x0___.v___('min')), x2___                          = IMPORTS___.Math_v___? IMPORTS___.Math:                        ___.ri(IMPORTS___, 'Math'), x1___.apply_m___?                          x1___.apply(x2___, array): x1___.m___('apply', [                            x2___, array ]);                      }                      return ___.f(min$_meth, 'min$_meth');                    })(), x5___.min_w___ === x5___? (x5___.min = x6___):                  x5___.w___('min', x6___);                  x7___ = IMPORTS___.Array_v___? IMPORTS___.Array:                  ___.ri(IMPORTS___, 'Array'), x8___ = (function () {                      function max$_meth(array) {                        var x0___, x1___, x2___;                        return x1___ = (x0___ = IMPORTS___.Math_v___?                          IMPORTS___.Math: ___.ri(IMPORTS___, 'Math'),                          x0___.max_v___? x0___.max: x0___.v___('max')), x2___                          = IMPORTS___.Math_v___? IMPORTS___.Math:                        ___.ri(IMPORTS___, 'Math'), x1___.apply_m___?                          x1___.apply(x2___, array): x1___.m___('apply', [                            x2___, array ]);                      }                      return ___.f(max$_meth, 'max$_meth');                    })(), x7___.max_w___ === x7___? (x7___.max = x8___):                  x7___.w___('max', x8___);                  moduleResult___ = (IMPORTS___.sort_v___? IMPORTS___.sort:                    ___.ri(IMPORTS___, 'sort')).i___((IMPORTS___.$id_v___?                      IMPORTS___.$id: ___.ri(IMPORTS___, '$id')).i___('wrap'),                    'div');                }              } catch (ex___) {                ___.getNewModuleHandler().handleUncaughtException(ex___,                  IMPORTS___.onerror_v___? IMPORTS___.onerror:                  ___.ri(IMPORTS___, 'onerror'), 'module.js', '10');              }              return moduleResult___;            },            'cajolerName': 'com.google.caja',            'cajolerVersion': '\\x3cunknown\\x3e',            'cajoledDate': 1375327350390          }).instantiate___(___, IMPORTS___), ___.prepareModule({            'instantiate': function (___, IMPORTS___) {              var dis___ = IMPORTS___;              var moduleResult___;              moduleResult___ = ___.NO_RESULT;              {                IMPORTS___.htmlEmitter___.signalLoaded();              }              return moduleResult___;            },            'cajolerName': 'com.google.caja',            'cajolerVersion': '\\x3cunknown\\x3e',            'cajoledDate': 1375327350468          }).instantiate___(___, IMPORTS___);      },      'cajolerName': 'com.google.caja',      'cajolerVersion': '\\x3cunknown\\x3e','cajoledDate': 1375327350468});}")