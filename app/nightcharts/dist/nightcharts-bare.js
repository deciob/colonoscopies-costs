'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

nightcharts.config = {

  axisMaxTxtDensity /*per 100px of width*/: { width: 15, height: 12 },
  //TODO: remove useBaselineInDomain from rest of code

  // brushing... TODO: move to its own config object
  // false or object {slider: true, snapToDataPoints: true, lollyRadius: 20}
  // TODO: change name to avoid confusion with d3.brush in code
  brush: false,
  brushSelections /*undefined || {}*/: void 0,

  // clipping... TODO: move to its own config object
  clip: { vOffset: 20 },
  clipIdKey: void 0,

  devMode: false,
  divergingGraph: false,
  duration: 700,
  ease: 'linear',
  graphType: void 0,
  height: 100,
  id: void 0,
  invertOrientation: false,
  margin: { 'top': 10, 'right': 20, 'bottom': 30, 'left': 30 },

  // new tooltips... TODO: move to its own config object
  tip /*false || {}*/: false,

  titleLabel: false,

  // old tooltips
  tooltip: false,

  useViewBox: true,
  width: 200,
  xAccessor: function xAccessor(d, i) {
    return d[0];
  },

  // xAxis... TODO: move to its own config object
  xAxis: void 0,
  xAxisDataAccessor: function xAxisDataAccessor(data) {
    return [data];
  },
  xAxisLabel /*{text: 'Hello label!'}*/: false,
  xAxisOrient: 'bottom',
  xAxisShow: true,

  xDomain: void 0,
  xMarkers: { useInDomain: true, data /*[]*/: void 0, prevPos /*[]*/: void 0 },

  /*duration*/ // offset the graph along the x axis:
  xOffset: 0,

  xScaleType: 'ordinal',

  // xAxis...
  xTickValues: void 0,

  yAccessor: function yAccessor(d, i) {
    return d[1];
  },

  // yAxis... TODO: move to its own config object
  yAxis: void 0,
  yAxisLabel: false,
  yAxisOrient: 'left',
  yAxisShow: true,
  yDomain: void 0,
  yMarkers: { useInDomain: true, data /*[]*/: void 0, prevPos /*[]*/: void 0 },

  /*duration*/ // offset the graph over the x axis:
  yOffset: 0,

  yScaleType: 'linear'
};

nightcharts.lineConfig = {
  area: false,
  areaY0Accessor: function areaY0Accessor(d) {
    return d.min;
  },
  areaY1Accessor: function areaY1Accessor(d) {
    return d.max;
  },

  // An extra graph at the base, just above the axis, to add some binary data
  binaryBaseline: false,

  // If the data that generates a line has a property, use it to set an additional class name
  // Example: classSetterOnData: 'id'
  classSetterOnData: void 0,

  lineInterpolation: 'linear',
  listenToBrushEvents: false,

  // Max can be calculated in many ways, in this case we are forcing a minimum max value
  // on the y axis, but if the domain in bigger, then the max value will be taken from the
  // domain instead.
  minYMax: 0,

  // TODO: should not need to explicitly declare a symbol for every line!
  // [d3.svg.symbol().type('circle')]
  symbols: false,
  symbolClassSetter: void 0
};

nightcharts.barConfig = {
  barBackground: false,
  barClassSetter: void 0,
  barWidth: void 0,

  // Set > 0 to round bar corners
  rx: 0,
  ry: 0,

  slideBars: false,
  timeUnit: void 0
};

nightcharts.histoBarConfig = {
  bins: 10,
  barClassSetter: void 0,
  containerCssClass: 'foreground',
  dataTransform: function dataTransform(data) {
    return data;
  },
  histFormatCount: d3.format(',.0f'),
  histShowTxt: false,
  roundBins: false
};
//http://ramdajs.com/0.17/index.html
nightcharts.R = function () {
  'use strict';

  // jshint unused:vars
  var _arity = function _arity(n, fn) {
    // jshint unused:vars
    switch (n) {
      case 0:
        return function () {
          return fn.apply(this, arguments);
        };
      case 1:
        return function (a0) {
          return fn.apply(this, arguments);
        };
      case 2:
        return function (a0, a1) {
          return fn.apply(this, arguments);
        };
      case 3:
        return function (a0, a1, a2) {
          return fn.apply(this, arguments);
        };
      case 4:
        return function (a0, a1, a2, a3) {
          return fn.apply(this, arguments);
        };
      case 5:
        return function (a0, a1, a2, a3, a4) {
          return fn.apply(this, arguments);
        };
      case 6:
        return function (a0, a1, a2, a3, a4, a5) {
          return fn.apply(this, arguments);
        };
      case 7:
        return function (a0, a1, a2, a3, a4, a5, a6) {
          return fn.apply(this, arguments);
        };
      case 8:
        return function (a0, a1, a2, a3, a4, a5, a6, a7) {
          return fn.apply(this, arguments);
        };
      case 9:
        return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
          return fn.apply(this, arguments);
        };
      case 10:
        return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
          return fn.apply(this, arguments);
        };
      default:
        throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
    }
  };

  var _curry1 = function _curry1(fn) {
    return function f1(a) {
      if (arguments.length === 0) {
        return f1;
      } else if (a != null && a['@@functional/placeholder'] === true) {
        return f1;
      } else {
        return fn.apply(this, arguments);
      }
    };
  };

  var _curry2 = function _curry2(fn) {
    return function f2(a, b) {
      var n = arguments.length;
      if (n === 0) {
        return f2;
      } else if (n === 1 && a != null && a['@@functional/placeholder'] === true) {
        return f2;
      } else if (n === 1) {
        return _curry1(function (b) {
          return fn(a, b);
        });
      } else if (n === 2 && a != null && a['@@functional/placeholder'] === true && b != null && b['@@functional/placeholder'] === true) {
        return f2;
      } else if (n === 2 && a != null && a['@@functional/placeholder'] === true) {
        return _curry1(function (a) {
          return fn(a, b);
        });
      } else if (n === 2 && b != null && b['@@functional/placeholder'] === true) {
        return _curry1(function (b) {
          return fn(a, b);
        });
      } else {
        return fn(a, b);
      }
    };
  };

  var _curry3 = function _curry3(fn) {
    return function f3(a, b, c) {
      var n = arguments.length;
      if (n === 0) {
        return f3;
      } else if (n === 1 && a != null && a['@@functional/placeholder'] === true) {
        return f3;
      } else if (n === 1) {
        return _curry2(function (b, c) {
          return fn(a, b, c);
        });
      } else if (n === 2 && a != null && a['@@functional/placeholder'] === true && b != null && b['@@functional/placeholder'] === true) {
        return f3;
      } else if (n === 2 && a != null && a['@@functional/placeholder'] === true) {
        return _curry2(function (a, c) {
          return fn(a, b, c);
        });
      } else if (n === 2 && b != null && b['@@functional/placeholder'] === true) {
        return _curry2(function (b, c) {
          return fn(a, b, c);
        });
      } else if (n === 2) {
        return _curry1(function (c) {
          return fn(a, b, c);
        });
      } else if (n === 3 && a != null && a['@@functional/placeholder'] === true && b != null && b['@@functional/placeholder'] === true && c != null && c['@@functional/placeholder'] === true) {
        return f3;
      } else if (n === 3 && a != null && a['@@functional/placeholder'] === true && b != null && b['@@functional/placeholder'] === true) {
        return _curry2(function (a, b) {
          return fn(a, b, c);
        });
      } else if (n === 3 && a != null && a['@@functional/placeholder'] === true && c != null && c['@@functional/placeholder'] === true) {
        return _curry2(function (a, c) {
          return fn(a, b, c);
        });
      } else if (n === 3 && b != null && b['@@functional/placeholder'] === true && c != null && c['@@functional/placeholder'] === true) {
        return _curry2(function (b, c) {
          return fn(a, b, c);
        });
      } else if (n === 3 && a != null && a['@@functional/placeholder'] === true) {
        return _curry1(function (a) {
          return fn(a, b, c);
        });
      } else if (n === 3 && b != null && b['@@functional/placeholder'] === true) {
        return _curry1(function (b) {
          return fn(a, b, c);
        });
      } else if (n === 3 && c != null && c['@@functional/placeholder'] === true) {
        return _curry1(function (c) {
          return fn(a, b, c);
        });
      } else {
        return fn(a, b, c);
      }
    };
  };

  var _curryN = function _curryN(length, received, fn) {
    return function () {
      var combined = [];
      var argsIdx = 0;
      var left = length;
      var combinedIdx = 0;
      while (combinedIdx < received.length || argsIdx < arguments.length) {
        var result;
        if (combinedIdx < received.length && (received[combinedIdx] == null || received[combinedIdx]['@@functional/placeholder'] !== true || argsIdx >= arguments.length)) {
          result = received[combinedIdx];
        } else {
          result = arguments[argsIdx];
          argsIdx += 1;
        }
        combined[combinedIdx] = result;
        if (result == null || result['@@functional/placeholder'] !== true) {
          left -= 1;
        }
        combinedIdx += 1;
      }
      return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
    };
  };

  var _isArray = Array.isArray || function _isArray(val) {
    return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
  };

  var _pipe = function _pipe(f, g) {
    return function () {
      return g.call(this, f.apply(this, arguments));
    };
  };

  var _slice = function _slice(_x, _x2, _x3) {
    var _arguments = arguments;
    var _again = true;

    _function: while (_again) {
      var args = _x,
          from = _x2,
          to = _x3;
      list = idx = len = undefined;
      _again = false;

      switch (_arguments.length) {
        case 1:
          _arguments = [_x = args, _x2 = 0, _x3 = args.length];
          _again = true;
          continue _function;

        case 2:
          _arguments = [_x = args, _x2 = from, _x3 = args.length];
          _again = true;
          continue _function;

        default:
          var list = [];
          var idx = 0;
          var len = Math.max(0, Math.min(args.length, to) - from);
          while (idx < len) {
            list[idx] = args[from + idx];
            idx += 1;
          }
          return list;
      }
    }
  };

  var _xwrap = (function () {
    function XWrap(fn) {
      this.f = fn;
    }
    XWrap.prototype['@@transducer/init'] = function () {
      throw new Error('init not implemented on XWrap');
    };
    XWrap.prototype['@@transducer/result'] = function (acc) {
      return acc;
    };
    XWrap.prototype['@@transducer/step'] = function (acc, x) {
      return this.f(acc, x);
    };
    return function _xwrap(fn) {
      return new XWrap(fn);
    };
  })();

  var bind = _curry2(function bind(fn, thisObj) {
    return _arity(fn.length, function () {
      return fn.apply(thisObj, arguments);
    });
  });

  var curryN = _curry2(function curryN(length, fn) {
    if (length === 1) {
      return _curry1(fn);
    }
    return _arity(length, _curryN(length, [], fn));
  });

  var isArrayLike = _curry1(function isArrayLike(x) {
    if (_isArray(x)) {
      return true;
    }
    if (!x) {
      return false;
    }
    if (typeof x !== 'object') {
      return false;
    }
    if (x instanceof String) {
      return false;
    }
    if (x.nodeType === 1) {
      return !!x.length;
    }
    if (x.length === 0) {
      return true;
    }
    if (x.length > 0) {
      return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
    }
    return false;
  });

  var reverse = _curry1(function reverse(list) {
    return _slice(list).reverse();
  });

  var _checkForMethod = function _checkForMethod(methodname, fn) {
    return function () {
      var length = arguments.length;
      if (length === 0) {
        return fn();
      }
      var obj = arguments[length - 1];
      return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, _slice(arguments, 0, length - 1));
    };
  };

  var _reduce = (function () {
    function _arrayReduce(xf, acc, list) {
      var idx = 0,
          len = list.length;
      while (idx < len) {
        acc = xf['@@transducer/step'](acc, list[idx]);
        if (acc && acc['@@transducer/reduced']) {
          acc = acc['@@transducer/value'];
          break;
        }
        idx += 1;
      }
      return xf['@@transducer/result'](acc);
    }
    function _iterableReduce(xf, acc, iter) {
      var step = iter.next();
      while (!step.done) {
        acc = xf['@@transducer/step'](acc, step.value);
        if (acc && acc['@@transducer/reduced']) {
          acc = acc['@@transducer/value'];
          break;
        }
        step = iter.next();
      }
      return xf['@@transducer/result'](acc);
    }
    function _methodReduce(xf, acc, obj) {
      return xf['@@transducer/result'](obj.reduce(bind(xf['@@transducer/step'], xf), acc));
    }
    var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
    return function _reduce(fn, acc, list) {
      if (typeof fn === 'function') {
        fn = _xwrap(fn);
      }
      if (isArrayLike(list)) {
        return _arrayReduce(fn, acc, list);
      }
      if (typeof list.reduce === 'function') {
        return _methodReduce(fn, acc, list);
      }
      if (list[symIterator] != null) {
        return _iterableReduce(fn, acc, list[symIterator]());
      }
      if (typeof list.next === 'function') {
        return _iterableReduce(fn, acc, list);
      }
      throw new TypeError('reduce: list must be array or iterable');
    };
  })();

  var curry = _curry1(function curry(fn) {
    return curryN(fn.length, fn);
  });

  var reduce = _curry3(_reduce);

  var slice = _curry3(_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
    return Array.prototype.slice.call(list, fromIndex, toIndex);
  }));

  var tail = _checkForMethod('tail', slice(1, Infinity));

  var pipe = function pipe() {
    if (arguments.length === 0) {
      throw new Error('pipe requires at least one argument');
    }
    return curryN(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
  };

  var compose = function compose() {
    if (arguments.length === 0) {
      throw new Error('compose requires at least one argument');
    }
    return pipe.apply(this, reverse(arguments));
  };

  return {
    compose: compose,
    curry: curry
  };
};
nightcharts.utils = function () {
  'use strict';

  var R = nightcharts.R();
  var curry = R.curry;
  var compose = R.compose;

  // http://stackoverflow.com/questions/9407892/how-to-generate-random-sha1-hash-to-use-as-id-in-node-js
  // str generateId(int len);
  // len - must be an even number (default: 40)
  var generateRandStr = function generateRandStr(len) {
    var arrL = Math.floor((len || 40) / 2),
        arr = new Uint8Array(arrL);
    window.crypto.getRandomValues(arr);
    return 'i' + [].map.call(arr, function (n) {
      return n.toString(16);
    }).join("");
  };

  function isObject(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
  }

  var clone = function clone(obj) {
    if (null === obj || "object" != typeof obj) return obj;
    //WARNING: will fail with angular Resources, call toJSON first!
    var copy = obj.constructor();
    if (!copy) {
      var attrs = Object.keys(obj).map(function (o) {
        return o;
      }).join(', ');
      throw new Error('TODO: config Object with attibutes: "' + attrs + '" is not overridable');
    }
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        copy[attr] = obj[attr];
      }
    }
    return copy;
  };

  // extend target with source
  function extend(target, source, options) {
    if (!isObject(target) || !isObject(source)) {
      throw new Error('extend only accepts objects');
    }
    var use_clone = !options || options.use_clone === undefined ? true : options.use_clone;
    // not_override (target) defaults to false.
    var not_override = options && options.not_override === undefined || !options ? false : options.not_override;
    var target_clone = use_clone ? clone(target) : target;
    for (var prop in source) {
      if (not_override) {
        target_clone[prop] = target_clone[prop] ? target_clone[prop] : source[prop];
      } else {
        target_clone[prop] = source[prop];
      }
    }
    return target_clone;
  }

  /**
   * getset()
   * For each attribute in `state` it sets a getter-setter function on `obj`.
   * Accepts one level nested `state` objects.
   *
   * @param {object || function} obj (usually the exports function)
   * @param {object || function} state (usually the options to set on the exports function)
   * @return obj
   */
  var getset = function getset(obj, state) {
    d3.entries(state).forEach(function (o) {
      obj[o.key] = function (x) {
        if (!arguments.length) return state[o.key];
        if (isObject(o.value)) {
          state[o.key] = extend(o.value, x);
        } else {
          state[o.key] = x;
        }
        return obj;
      };
    });
    return obj;
  };

  // This makes few assumptions.
  // We expect a consistent array of arrays, objects or primitive values.
  // TEST!
  var isNestedDataObj = function isNestedDataObj(data) {
    if (data.constructor !== Array) {
      throw new Error("data must be an array of something!");
    }
    // TODO: workaround for angular resources! Test!
    if (typeof data[0] === "object" && data[0].constructor !== Array) return false;
    if (data.length === 0) return false;
    if (data[0].constructor === Object) return false;
    if (data[0].constructor === Array && typeof data[0][0] !== 'object') return false;
    return true;
  };

  var max = function max(data, accessor, _buffer) {
    var nested = isNestedDataObj(data),
        buffer = _buffer === undefined ? false : _buffer,
        max;
    if (nested) {
      max = d3.max(data, function (d) {
        return d3.max(d, accessor);
      });
    } else {
      max = d3.max(data, accessor);
    }
    if (buffer) {
      // TODO: this buffer stuff should be in a separate function!!!!
      max = max + max * 0.05;
    }
    return max;
  };

  var min = function min(data, accessor, _buffer) {
    var nested = isNestedDataObj(data),
        buffer = _buffer === undefined ? false : _buffer,
        min;
    if (nested) {
      min = d3.min(data, function (d) {
        return d3.min(d, accessor);
      });
    } else {
      min = d3.min(data, accessor);
    }
    if (buffer) {
      min = min - min * 0.05;
    }
    return min;
  };

  var getLongerArr = function getLongerArr(data) {
    var nested = isNestedDataObj(data),
        n = 0,
        idx,
        arr;
    if (nested) {
      data.forEach(function (d, i) {
        if (d.length > n) {
          idx = i;
          n = d.length;
        }
      });
      return data[idx];
    } else {
      return data;
    }
  };

  var getChartWidth = function getChartWidth(config) {
    var xOffset = config.xOffset || 0;
    return config.width - config.margin.left - config.margin.right - xOffset;
  };

  var getChartHeight = function getChartHeight(config) {
    var yOffset = config.yOffset || 0;
    return config.height - config.margin.top - config.margin.bottom - yOffset;
  };

  function getXRange(config) {
    var chartW = getChartWidth(config);
    var chartH = getChartHeight(config);
    return config.invertOrientation ? [chartH, 0] : [0, chartW];
  }

  function getYRange(config) {
    var chartW = getChartWidth(config);
    var chartH = getChartHeight(config);
    return config.invertOrientation ? [0, chartW] : [chartH, 0];
  }

  /**
   * snapToValue() returns a selected value from arr
   * that better fits val
   *
   * @param {Array of numbers} arr
   * @param {Number} value
   * @return {Number} selected
   */
  var snapToValue = function snapToValue(_x4, _x5) {
    var _again2 = true;

    _function2: while (_again2) {
      var arr = _x4,
          value = _x5;
      middleValIdx = middleVal = undefined;
      _again2 = false;

      var middleValIdx = Math.floor(arr.length / 2);
      var middleVal = arr[middleValIdx];
      if (value === middleVal) {
        return value;
      } else if (arr.length > 2 && value < middleVal) {
        _x4 = arr.slice(0, middleValIdx + 1);
        _x5 = value;
        _again2 = true;
        continue _function2;
      } else if (arr.length > 2 && value > middleVal) {
        _x4 = arr.slice(middleValIdx);
        _x5 = value;
        _again2 = true;
        continue _function2;
      } else if (arr.length == 2) {
        return value - arr[0] > arr[1] - value ? arr[1] : arr[0];
      }
    }
  };

  // Fires a callback when all transitions of a chart have ended.
  // The solution is inspired from a reply in
  // [Single event at end of transition?](https://groups.google.com/forum/#!msg/d3-js/WC_7Xi6VV50/j1HK0vIWI-EJ).
  // The original suggestion assumes the data length never changes, this
  // instead also accounts for `exits` during the transition.
  function endall(elements_in_transition, data, callback) {
    var n = data.length;
    elements_in_transition.each("end", function () {
      if (! --n) {
        callback.apply(this, arguments);
      }
    });
  }

  // http://stackoverflow.com/questions/6660977/convert-hyphens-to-camel-case-camelcase
  function hyphenToCamelCase(string) {
    return string.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
  }

  function checkForData(config, data) {
    if (!data) {
      if (config.devMode) {
        console.warn('baseSvg - no data');
      }
      return false;
    } else {
      if (config.lineInterpolation /*proxy for line graph*/) {
          // every dataBlock is a line...
          var longerDataBlock = getLongerArr(data);
          if (longerDataBlock.length < 2) {
            if (config.devMode) {
              console.warn('lineData has less than 2 dat points');
            }
            return false;
          }
        }
      return true;
    }
  }

  function getXDomain(config, data) {
    var xDomain;
    if (!config.xDomain && config.xScaleType == 'ordinal') {
      xDomain = data.map(config.xAccessor);
    } else if (!config.xDomain && config.xScaleType != 'ordinal') {
      xDomain = [min(data, config.xAccessor), max(data, config.xAccessor)];
    } else {
      xDomain = config.xDomain;
    }
    return xDomain;
  }

  function getXScale(config, domain, range, data) {
    var xScale;
    var xScaleType = config.xScaleType;
    if (xScaleType == 'ordinal') {
      xScale = d3.scale[xScaleType]().domain(domain).rangeRoundBands(range, 0.1);
    } else if (config.xScaleType == 'time') {
      xScale = d3.time.scale().domain(domain).range(range);
    } else {
      xScale = d3.scale[xScaleType]().domain(domain).range(range);
    }
    return xScale;
  }

  function getYDomain(config, data) {
    var yDomain;
    var yMin = min(data, config.yAccessor);
    var yMax = max(data, config.yAccessor);
    if (!config.yDomain && yMin <= 0) {
      yDomain = [yMin, yMax];
    } else if (!config.yDomain && yMin > 0) {
      yDomain = [0, yMax];
    } else {
      yDomain = config.yDomain;
    }
    return yDomain;
  }

  function getYScale(config, domain, range, data) {
    var yScale;
    var yScaleType = config.yScaleType;
    if (config.yScaleType == 'time') {
      yScale = d3.time.scale().domain(domain).range(range);
    } else {
      yScale = d3.scale[yScaleType]().domain(domain).range(range);
    }
    return yScale;
  }

  function setConfig(_config, componentConfigName) {
    _config = _config ? _config : clone(d3.nightcharts.config);
    var componentConfig = d3.nightcharts[componentConfigName] || {};
    return extend(componentConfig, _config, { use_clone: true });
  }

  function getNormalilzedYValue(config, value) {
    if (config.yScaleType == 'log' && value === 0) {
      return 1;
    } else {
      return value;
    }
  }

  function getTimespan(t1, t2) {
    if (t1 instanceof Date) {
      return t2 - t1;
    } else {
      return new Date(t2).getTime() - new Date(t1).getTime();
    }
  }

  function adjustDomainForBarOnTimescale(xDomain, config, data) {
    var adjustedDomain = [];
    var timeSpan = getTimespan(xDomain[0], xDomain[1]);
    var timeUnit = config.timeUnit || Math.round(timeSpan / (data.length - 1));
    var t1 = xDomain[0] instanceof Date ? xDomain[0].getTime() : xDomain[0];
    var t2 = xDomain[1] instanceof Date ? xDomain[1].getTime() : xDomain[1];
    //console.log(new Date(xDomain[0]), new Date(t1 - Math.round(timeUnit/2)) );
    adjustedDomain.push(t1 - Math.round(timeUnit / 2));
    adjustedDomain.push(t2 + Math.round(timeUnit / 2));
    //xScale.domain(xDomain);
    return adjustedDomain;
  }

  function getSvgBasics(config, data) {
    var chartW = getChartWidth(config);
    var chartH = getChartHeight(config);
    var invertOrientation = config.invertOrientation;
    var xRange = getXRange(config);
    var yRange = getYRange(config);
    var xDomain = getXDomain(config, data);
    var yDomain = getYDomain(config, data);
    var xScale = getXScale(config, xDomain, xRange, data);
    var yScale = getYScale(config, yDomain, yRange, data);

    return [chartW, chartH, invertOrientation, xRange, yRange, xDomain, yDomain, xScale, yScale];
  }

  var getYMax = function getYMax(data, config) {
    // TODO: buffer is not used with minYMax option!!!!
    var yMax = d3.max([max(data, config.area ? config.areaY1Accessor : config.yAccessor, true), config.minYMax]);
    var tmp;
    if (d3.keys(config.baselines).length > 0 && config.useBaselineInDomain) {
      tmp = d3.values(config.baselines);
      tmp.push(yMax);
      yMax = d3.max(tmp);
    }
    return yMax;
  };

  var regroupData = function regroupData(config, data) {
    var groupedData = [];
    var dataGroup = [];
    var prev = true;
    data.forEach(function (d) {
      if (config.yAccessor(d) !== undefined && prev) {
        dataGroup.push(d);
      } else if (config.yAccessor(d) !== undefined && !prev) {
        groupedData.push(dataGroup);
        dataGroup = [];
        dataGroup.push(d);
        prev = true;
      } else if (config.yAccessor(d) === undefined) {
        prev = false;
      }
    });
    if (groupedData.length === 0 || dataGroup.length !== 0) {
      groupedData.push(dataGroup);
    }
    return groupedData;
  };

  var sparseData = function sparseData(_data) {
    return _data.filter(function (d, i) {
      return i % 2;
    });
  };

  var getTxtDensity = function getTxtDensity(config, data, dimension) {
    if (data.length === 0) {
      return 0;
    }
    var totalTxt = data.reduce(function (prev, current) {
      return '' + prev + ('' + current);
    }).length;
    return totalTxt / (config[dimension] / 100);
  };

  var reduceAxisDensity = function reduceAxisDensity(_x6, _x7, _x8) {
    var _again3 = true;

    _function3: while (_again3) {
      var config = _x6,
          data = _x7,
          _dimension = _x8;
      dimension = txtDensity = undefined;
      _again3 = false;

      var dimension = _dimension || 'width';
      var txtDensity = getTxtDensity(config, data, dimension);
      if (txtDensity > config.axisMaxTxtDensity[dimension]) {
        data = sparseData(data);
      }
      txtDensity = getTxtDensity(config, data, dimension);
      if (txtDensity > config.axisMaxTxtDensity[dimension]) {
        _x6 = config;
        _x7 = data;
        _x8 = dimension;
        _again3 = true;
        continue _function3;
      } else {
        return data;
      }
    }
  };

  function validateDimensions(config) {
    if (config.width === 0 || config.height === 0) {
      if (config.devMode) {
        console.warn("width or height is zero!");
      }
      return false;
    } else {
      return true;
    }
  }

  function getLineGenerator(x, y, config, yAccessor, xAccessor) {
    return d3.svg.line().interpolate(config.lineInterpolation).x(function (d, i) {
      var path = x(xAccessor ? xAccessor(d) : config.xAccessor(d));
      if (isNaN(path)) {
        if (config.devMode) {
          console.error('lineUtils.getLineGenerator x error');
        }
        return '';
      }
      return path;
    }).y(function (d, i) {
      var path = y(yAccessor ? yAccessor(d) : config.yAccessor(d));
      if (isNaN(path)) {
        if (config.devMode) {
          console.error('lineUtils.getLineGenerator y error');
        }
        return '';
      }
      return path;
    });
  }

  function getAreaGenerator(x, y, config) {
    return d3.svg.area().interpolate(config.lineInterpolation).x(function (d, i) {
      return x(config.xAccessor(d));
    }).y0(function (d, i) {
      return y(config.areaY0Accessor(d));
    }).y1(function (d, i) {
      return y(config.areaY1Accessor(d));
    });
  }

  // flattenArray :: [a] -> [b]
  function flattenArray(arr) {
    //TODO: this check might not always be correct.
    if (!isNestedDataObj(arr)) {
      return arr.map(function (d, i) {
        d.idx = '0-' + i;
        return d;
      });
    }
    return arr.reduce(function (_a, _b, idx, arr) {
      var a = _a.map(function (d, i) {
        if (!d.idx) {
          d.idx = idx - 1 + '-' + i;
        }
        return d;
      });
      var b = _b.map(function (d, i) {
        d.idx = idx + '-' + i;
        return d;
      });
      return a.concat(b);
    }, []);
  }

  return {
    curry: curry,
    compose: compose,
    generateRandStr: generateRandStr,
    clone: clone,
    extend: extend,
    isObject: isObject,
    getset: getset,
    isNestedDataObj: isNestedDataObj,
    max: max,
    min: min,
    getLongerArr: getLongerArr,
    getChartWidth: getChartWidth,
    getChartHeight: getChartHeight,
    getXRange: getXRange,
    getYRange: getYRange,
    snapToValue: snapToValue,
    endall: endall,
    hyphenToCamelCase: hyphenToCamelCase,
    getXDomain: getXDomain,
    getXScale: getXScale,
    getYDomain: getYDomain,
    getYScale: getYScale,
    setConfig: setConfig,
    getNormalilzedYValue: getNormalilzedYValue,
    getTimespan: getTimespan,
    adjustDomainForBarOnTimescale: adjustDomainForBarOnTimescale,
    getSvgBasics: getSvgBasics,
    getYMax: getYMax,
    checkForData: checkForData,
    regroupData: regroupData,
    reduceAxisDensity: reduceAxisDensity,
    validateDimensions: validateDimensions,
    getLineGenerator: getLineGenerator,
    getAreaGenerator: getAreaGenerator,
    flattenArray: flattenArray
  };
};
nightcharts.domHelpers = function () {
  'use strict';

  var utils = d3.nightcharts.utils();
  var labels = d3.nightcharts.domLabelHelpers();
  var bushInitialized = false;

  var setChartGroupsContainer = function setChartGroupsContainer(g, data, clipId, cssClass) {
    // Mostly for angular related apps:
    var isBaseInHead = d3.select('base')[0][0];
    var urlBase = isBaseInHead ? document.location.href : '';
    var container = g.selectAll(cssClass ? ".chart-groups." + cssClass : ".chart-groups").data([data]);
    container.enter().append("g").attr("class", cssClass ? "chart-groups " + cssClass : "chart-groups").attr("clip-path", "url(" + urlBase + "#" + (clipId || 'xxx') + ")");
    return container;
  };

  var setNoDataWarning = function setNoDataWarning(container, config) {
    return;
    var noData = container.select('.no-data');
    var msg;
    if (!noData[0][0]) {
      var width = utils.getChartWidth(config);
      var height = utils.getChartHeight(config);
      noData = container.append('svg')
      //.attr('width', width)
      //.attr('height', height)
      .attr('class', 'no-data');
      msg = noData.append('text').attr('x', Math.round(width / 2)).attr('y', Math.round(height / 2)).attr('text-anchor', 'middle').text('No Data');
    }
  };

  function setMarkers(container, _config, graphData, type) {
    if (!type) {
      throw new Error('setMarkers type must be correctly defined');
    }

    var config = utils.clone(_config);

    var iO = config.invertOrientation;
    var markerKey = type == 'x' ? 'xMarkers' : 'yMarkers';
    var xRange = utils.getXRange(config);
    var yRange = utils.getYRange(config);
    var data = config[markerKey].data;

    var xDomain;
    var yDomain;

    if (type == 'x') {
      xDomain = utils.getXDomain(config, graphData);
      yDomain = [0, 1];
      if (config.yScaleType == 'ordinal') {
        config.yScaleType = 'linear';
      }
    } else {
      xDomain = [0, 1];
      yDomain = utils.getYDomain(config, graphData);
      if (config.xScaleType == 'ordinal') {
        config.xScaleType = 'linear';
      }
    }

    var xScale;
    var yScale;

    if (type == 'x') {
      xScale = utils.getXScale(config, xDomain, xRange, data);
      yScale = utils.getYScale(config, yDomain, yRange, yDomain);
    } else {
      //             getXScale(config, domain, range, data)
      xScale = utils.getXScale(config, xDomain, xRange, xDomain);
      yScale = utils.getYScale(config, yDomain, yRange, data);
    }

    config[markerKey].prevPos = config[markerKey].data.map(function (d) {
      return void 0;
    });

    var markerG = container.select('.nc-' + type + '-markers-grp');
    if (!markerG[0][0]) {
      markerG = container.insert('g', 'g').attr('class', 'nc-' + type + '-markers-grp');
    }

    var markers = markerG.selectAll('.nc-' + type + '-marker').data(data);

    markers.enter().append('line').attr('class', function (d) {
      if (d.key) {
        return 'nc-' + type + '-marker nc-marker line ' + d.key;
      }
      return 'nc-' + type + '-marker nc-marker line';
    });

    if (type == 'x') {
      markers.attr('y1', iO ? function (d) {
        return Math.round(xScale(d));
      } : yScale(yDomain[0])).attr('y2', iO ? function (d) {
        return Math.round(xScale(d));
      } : yScale(yDomain[1])).attr('x1', iO ? yScale(yDomain[0]) : function (d) {
        return Math.round(xScale(d));
      }).attr("x2", iO ? yScale(yDomain[1]) : function (d) {
        return Math.round(xScale(d));
      });
    } else {
      markers.attr('x1', function (d) {
        return iO ? Math.round(yScale(d)) : xScale(xDomain[0]);
      }).attr('y1', function (d) {
        return iO ? yScale(yDomain[0]) : Math.round(yScale(d));
      }).attr('x2', function (d) {
        return iO ? Math.round(yScale(d)) : xScale(xDomain[1]);
      }).attr('y2', function (d) {
        return iO ? yScale(yDomain[1]) : Math.round(yScale(d));
      });
    }

    markers.exit().remove();

    markers.each(function (d, i) {
      if (!config[markerKey].prevPos[i]) {
        var _type = undefined;
        if (iO) {
          if (type == 'x') {
            _type = 'y';
          }
          if (type == 'y') {
            _type = 'x';
          }
        } else {
          _type = type;
        }
        config[markerKey].prevPos[i] = +this.attributes[_type + '1'].value;
      }
    });

    markers.transition().duration(function (d, i) {
      return config.xMarkers.duration || config.duration;
    }).attr("transform", function (d, i) {
      var scalePrev = Math.round(config[markerKey].prevPos[i], 1);
      var scaleVal = Math.round(type == 'x' ? xScale(d) : yScale(d), 1);
      var val = scaleVal - scalePrev;
      config[markerKey].prevPos[i] = scaleVal;
      return 'translate(' + val + ')';
    });

    return markerG;
  }

  function setXMarkers(container, config, graphData) {
    if (!config.xMarkers.data || config.xMarkers.data.length === 0) {
      return;
    }

    return setMarkers(container, config, graphData, 'x');
  };

  function setYMarkers(container, config, graphData) {
    if (!config.yMarkers.data || config.yMarkers.data.length === 0) {
      return;
    }

    return setMarkers(container, config, graphData, 'y');
  };

  //TODO: lots of arguments here!
  var setSymbol = function setSymbol(className, config, data, yScale, xScale, xAccessor, symbol, _duration, idx) {
    if (!symbol) {
      throw new Error('Symbol is undefined!');
    }
    var duration = _duration !== undefined ? _duration : config.duration;
    var container = d3.select(this);
    var dotsG = container.selectAll('g.' + className).data([data]);
    dotsG.enter().append("g").classed(className, true);
    dotsG.exit().remove();

    var dots = dotsG.selectAll("path").data(data);
    dots.enter().append("path").attr("transform", function (d) {
      var x = xAccessor(d);
      var y = config.yAccessor(d);
      if (x !== undefined && y !== undefined) {
        return "translate(" + xScale(x) + "," + yScale(y) + ")";
      } else {
        return null;
      }
    }).attr("class", function (d, i) {
      var cssClass;
      if (config.symbolClassSetter && config.yAccessor(d) !== undefined) {
        cssClass = config.symbolClassSetter.call(this, d);
      } else {
        cssClass = '';
      }
      if (idx !== undefined) {
        cssClass = cssClass + ' tip-' + idx + '-' + i;
      }
      return cssClass;
    }).attr("d", function (d) {
      if (config.yAccessor(d) !== undefined) {
        return symbol.call(this);
      }
    });
    dots.exit().remove();

    // Updates based on config, not data.
    dotsG.selectAll('g.' + className + ' path').transition().duration(duration).ease(config.ease).attr("transform", function (d) {
      var x = xAccessor(d);
      var y = config.yAccessor(d);
      if (x !== undefined && y !== undefined) {
        return "translate(" + xScale(x) + "," + yScale(y) + ")";
      } else {
        return null;
      }
    });

    return dotsG;
  };

  function setLine(config, data, lineGenerator, setSymbol, _duration) {
    var duration = _duration !== undefined ? _duration : config.duration;
    var container = d3.select(this);
    var line = container.selectAll('path.line').data(data);
    line.enter().insert("path", 'g.dots').classed('line', function (d) {
      return true;
    });
    line.exit().remove();
    // Updates based on config, not data.
    container.selectAll('path.line').transition().duration(duration).ease(config.ease).attr("d", lineGenerator).each("end", setSymbol);
    return line;
  }

  return {
    setChartGroupsContainer: setChartGroupsContainer,
    setNoDataWarning: setNoDataWarning,
    setXMarkers: setXMarkers,
    setYMarkers: setYMarkers,
    setSymbol: setSymbol,
    setLine: setLine
  };
};
nightcharts.domLabelHelpers = function () {
  'use strict';

  var utils = d3.nightcharts.utils();
  var curry = utils.curry;
  var compose = utils.compose;

  // Copyed from: http://bl.ocks.org/mbostock/7555321
  function wrapLabel(text, width) {
    text.each(function () {
      var text = d3.select(this),
          words = text.text().split(/\s+/).reverse(),
          word,
          line = [],
          lineNumber = 0,
          lineHeight = 1.1,
          // ems
      y = text.attr("y"),
          dy = parseFloat(text.attr("dy")),
          tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
        }
      }
    });
  };

  var initLabel = function initLabel(cssClass, config, container) {
    var labelKey = utils.hyphenToCamelCase(cssClass);
    var label = container.selectAll('.' + cssClass).data([config[labelKey]], function (d) {
      return d.text ? d.text.length : 0;
    });
    return label;
  };

  var enterLabelCurr = curry(function (rotate, anchor, cssClass, config, container, label) {
    label.enter().append("text").classed(cssClass, true).attr("transform", 'rotate(' + rotate + ')').attr("dy", "1em").style("text-anchor", anchor).text(function (d) {
      return d.text;
    });
    return label;
  });

  var updateXAxisLabelCurr = curry(function (cssClass, config, container, label) {
    container.selectAll('.' + cssClass).attr("x", utils.getChartWidth(config)).attr("y", config.margin.bottom / 2);
    return label;
  });

  var updateYAxisLabelCurr = curry(function (cssClass, config, container, label) {
    container.selectAll('.' + cssClass).attr("y", -Math.round(config.margin.left / 2 + config.margin.left / 4, 0));
    return label;
  });

  var updateTitleLabelCurr = curry(function (cssClass, config, container, label) {
    var marginLeft = config.titleLabel.margin ? config.titleLabel.margin.left : config.margin.left - config.xOffset;
    container.selectAll('.' + cssClass).attr("x", marginLeft).attr("y", 0);
    return label;
  });

  var exitLabelCurr = curry(function (config, container, label) {
    label.exit().remove();
    return label;
  });

  function setXaxisLabel(container, config) {
    if (!config.xAxisLabel) {
      return container;
    }
    var textAnchor = config.xAxisLabel.textAnchor || 'end';
    var cssClass = 'x-axis-label';
    var label = initLabel(cssClass, config, container);
    var enterLabel = enterLabelCurr('0', textAnchor, cssClass, config, container);
    var updateLabel = updateXAxisLabelCurr(cssClass, config, container);
    var exitLabel = exitLabelCurr(config, container);
    var setLabel = compose(exitLabel, updateLabel, enterLabel);
    return setLabel(label);
  }

  function setYaxisLabel(container, config) {
    if (!config.yAxisLabel) {
      return container;
    }
    var textAnchor = config.yAxisLabel.textAnchor || 'end';
    var cssClass = 'y-axis-label';
    var label = initLabel(cssClass, config, container);
    var enterLabel = enterLabelCurr('-90', textAnchor, cssClass, config, container);
    var updateLabel = updateYAxisLabelCurr(cssClass, config, container);
    var exitLabel = exitLabelCurr(config, container);
    var setLabel = compose(exitLabel, updateLabel, enterLabel);
    return setLabel(label);
  }

  function setTitleLabel(container, config) {
    if (!config.titleLabel) {
      return container;
    }
    var textAnchor = config.titleLabel.textAnchor || 'start';
    var cssClass = 'title-label';
    var label = initLabel(cssClass, config, container);
    var enterLabel = enterLabelCurr('0', textAnchor, cssClass, config, container);
    var updateLabel = updateTitleLabelCurr(cssClass, config, container);
    var exitLabel = exitLabelCurr(config, container);
    var setLabel = compose(exitLabel, updateLabel, enterLabel);
    return setLabel(label);
  }

  return {
    wrapLabel: wrapLabel,
    setYaxisLabel: setYaxisLabel,
    setXaxisLabel: setXaxisLabel,
    setTitleLabel: setTitleLabel
  };
};
nightcharts.barComponentHelpers = function () {
  'use strict';

  var utils = d3.nightcharts.utils();

  function getBarWidth(config, data, xScale, _spaceInBetween) {
    var barW;
    if (config.barWidth) {
      barW = config.barWidth;
    } else if (config.xScaleType == 'ordinal') {
      barW = xScale.rangeBand();
    } else if (config.xScaleType == 'time') {
      var _chartW = utils.getChartWidth(config);
      var xDomain = utils.getXDomain(config, data);
      var spaceInBetween = _spaceInBetween || 0;
      var originalChartWidth = _chartW - config.xOffset;
      if (data.length == 1) {
        barW = originalChartWidth - spaceInBetween;
      } else {
        var timeSpan = utils.getTimespan(xDomain[0], xDomain[1]);
        var timeUnit = config.timeUnit || Math.round(timeSpan / (data.length - 1));
        var timeInstances = Math.round(timeSpan / timeUnit);
        barW = Math.round((originalChartWidth - (timeInstances + 1) * spaceInBetween) / (timeInstances + 1));
      }
    } else {
      throw new Error('getBarWidth only supports ordinal or time scales');
    }
    if (barW < 1) {
      barW = 1;
    }
    return barW;
  }

  //TESTME
  function getBarRange(config, data, xScale, barW, _spaceInBetween) {
    var barRange;
    if (config.xScaleType == 'ordinal') {
      barRange = xScale.range();
    } else if (config.xScaleType == 'time') {
      var spaceInBetween = _spaceInBetween || 0;
      if (data.length == 1) {
        //TMP, FIX xScale(config.xAccessor(d)))
        barRange = [Math.round(spaceInBetween / 2)];
      } else {
        barRange = data.map(function (d) {
          return Math.floor(xScale(config.xAccessor(d))) - Math.round(barW / 2);
        });
      }
    } else {
      throw new Error('getBarRange only supports ordinal or time scales');
    }
    return barRange;
  }

  return {
    getBarWidth: getBarWidth,
    getBarRange: getBarRange
  };
};
nightcharts.baseSvg = function (_config) {
  'use strict';

  var utils = d3.nightcharts.utils();
  var helpers = utils.extend(d3.nightcharts.domLabelHelpers(), d3.nightcharts.domHelpers());
  var config = utils.extend(d3.nightcharts.config, _config, { use_clone: true });

  function exports(_selection) {
    var data = _selection.datum();
    if (!utils.checkForData(config, data)) {
      return;
    }

    var svg = this.selectAll('svg').data([data]);

    svg.enter().append('svg').classed('chart', true);

    if (config.useViewBox) {
      svg.attr({
        viewBox: '0 0 ' + config.width + ' ' + config.height,
        preserveAspectRatio: 'xMinYMin meet'
      });
    } else {
      svg.attr({ width: config.width, height: config.height });
    }

    if (config.titleLabel) {
      helpers.setTitleLabel(svg, config);
    }

    var wrapper = svg.selectAll('g.wrapper').data([data]);

    wrapper.enter().append('g').classed('wrapper', true).attr('transform', 'translate(' + config.margin.left + ', ' + config.margin.top + ')');

    var container = wrapper.selectAll("g.container").data([data]);

    container.enter().append("g").classed("container", true);
  }

  utils.getset(exports, config);

  exports.config = config;

  return exports;
};
//TODO: all this might not be necessary, move into brushComponent

nightcharts.brushComponentHelpers = function () {
  'use strict';

  var utils = d3.nightcharts.utils();

  function updateSlider(x, y) {
    var gStick = this.select(".g-stick");
    var stick = this.select(".stick");
    var lolly = this.select(".lolly");
    gStick.style("visibility", "visible");
    gStick.attr('transform', 'translate(' + x + ',0)');
    stick.attr('y1', y);
    lolly.attr('transform', 'translate(0,' + y + ')');
  }

  function hideSliderStick() {
    this.select(".g-stick").style("visibility", "hidden");
  }

  function setSlider(container, data, config, brush, xScale, yScale, dispatch) {
    var gSlider;
    var handle;
    var gStick;
    var stick;
    var lolly;
    var chartH = utils.getChartHeight(config);
    if (brush && config.xScaleType == 'ordinal') {
      throw new Error('TODO: slider does not support ordinal scales.');
    }
    if (brush) {
      gSlider = container.selectAll(".slider").data([[]]);
      gSlider.enter().append("g").attr("class", "slider").call(brush).call(brush.event);
      gSlider.selectAll(".extent,.resize").remove();
      gSlider.select(".background").attr("height", chartH + config.yOffset + (config.brush.heightBuffer || 0));
      gStick = gSlider.selectAll(".g-stick").data([[]]);
      gStick.enter().append("g").attr("class", "g-stick");
      stick = gStick.selectAll(".stick").data([[]]);
      stick.enter().append("line").attr("class", "stick").attr('y1', 0).attr('y2', chartH + config.yOffset);
      lolly = gStick.selectAll(".lolly").data([[]]);
      lolly.enter().append("circle").attr("class", "lolly").attr("r", config.brush.lollyRadius || 5);
      handle = gSlider.selectAll(".handle").data([[]]);
      handle.enter().append("circle").attr("class", "handle").attr("transform", "translate(0," + (chartH + config.yOffset) + ")").attr("r", config.brush.handleRadius || 9);
      // FIXME: this is soooooo dangerous!!!
      var d;
      if (config.brush.extent) {
        d = data[0].filter(function (d) {
          return config.xAccessor(d) === config.brush.extent[0];
        })[0];
      } else {
        d = data[0][data[0].length - 1];
      }
      var x = xScale(brush.extent()[0]);
      var y = yScale(config.yAccessor(d));
      gSlider.call(brush.extent(config.brush.extent || [config.xAccessor(d), config.xAccessor(d)])).call(brush.event);
      updateSlider.call(container, x, y);
      dispatch.filter(brush.extent()[0], config.id);
    }
  }

  //FIXME: possible bug when no snap needed!
  function _snapToDataPoints(brush, xScale, config, options) {
    var callbacks = options.callbacks;
    var extent = brush.extent();
    var data = options.data.reduce(function (prev, current) {
      return prev.concat(current.map(config.xAccessor));
    }, []);
    var newExtent;
    var value;
    if (brush.empty()) {
      value = utils.snapToValue(data, extent[0]);
      newExtent = [value, value];
    } else {
      newExtent = [utils.snapToValue(data, extent[0]), utils.snapToValue(data, extent[1])];
    }
    var handle = d3.select(this).select('.handle');
    if (handle[0][0]) {
      brush.extent(newExtent);
      handle.transition().duration(config.duration).attr("cx", xScale(newExtent[0])).each("end", function (d) {
        if (callbacks && callbacks.snapend) {
          callbacks.snapend.call(this, brush);
        }
      });
    } else {
      d3.select(this).transition().duration(config.duration).call(brush.extent(newExtent)).call(brush.event);
    }
  }

  function snapToBins(brush, bins, config) {
    var extent = brush.extent();
    var newExtent = [utils.snapToValue(bins, extent[0]), utils.snapToValue(bins, extent[1])];
    d3.select(this).transition().duration(config.duration).call(brush.extent(newExtent)).call(brush.event);
  }

  function _setHandle(brush, xScale) {
    var value = brush.extent()[0];
    var handle = d3.select(this).select('.handle');
    if (!handle[0][0]) {
      return;
    }
    if (d3.event.sourceEvent) {
      // not a programmatic event
      value = xScale.invert(d3.mouse(this)[0]);
      brush.extent([value, value]);
    }
    handle.attr("cx", xScale(value));
  }

  function initializeBrush(extent, options, xScale, dispatch, config) {
    var callbacks = options.callbacks;
    var bins = options.bins;
    var brush = d3.svg.brush().x(xScale).on("brush", function () {
      _setHandle.call(this, brush, xScale);
      // internal
      if (callbacks && callbacks.brush) {
        callbacks.brush.call(this, brush);
      }
      // external
      dispatch.brush.call(this, brush, xScale, config.id);
    }).on("brushend", function () {
      if (!d3.event.sourceEvent) return; // only transition after input
      if (config.brush.snapToAxisTicks) {
        snapToBins.call(this, brush, bins, config);
      }
      if (config.brush.snapToDataPoints) {
        _snapToDataPoints.call(this, brush, xScale, config, options);
      }
      // internal
      if (callbacks && callbacks.brushend) {
        callbacks.brushend.call(this, brush);
      }
      // external
      dispatch.brushend.call(this, brush, xScale, config.id, bins);
    });
    if (extent) {
      brush.extent(extent);
    }
    return brush;
  }

  return {
    hideSliderStick: hideSliderStick,
    updateSlider: updateSlider,
    setSlider: setSlider,
    snapToBins: snapToBins,
    initializeBrush: initializeBrush
  };
};
nightcharts.brushComponent = function (_config) {
  'use strict';

  var utils = d3.nightcharts.utils();
  var domHelpers = utils.extend(d3.nightcharts.domLabelHelpers(), d3.nightcharts.domHelpers());
  var helpers = d3.nightcharts.brushComponentHelpers();
  var config = utils.setConfig(_config);

  var dispatch = d3.nightcharts.brushComponent.properties.dispatch;

  // storing the brush extent state.
  var brushExtent = void 0;

  function exports(_selection) {

    var _data = _selection.datum();
    var bushInitialized;

    if (!utils.checkForData(config, _data)) {
      return;
    }
    if (!config.brush) {
      return;
    }

    function setBrush(container, data, config, brush) {
      var id = 'brush-pattern';
      var gBrush;
      // copied from: http://square.github.io/crossfilter/
      function resizePath(d) {
        var e = +(d == "e"),
            x = e ? 1 : -1,
            y = (config.height - config.margin.bottom) / 3;
        return "M" + 0.5 * x + "," + y + "A6,6 0 0 " + e + " " + 6.5 * x + "," + (y + 6) + "V" + (2 * y - 6) + "A6,6 0 0 " + e + " " + 0.5 * x + "," + 2 * y + "Z" + "M" + 2.5 * x + "," + (y + 8) + "V" + (2 * y - 8) + "M" + 4.5 * x + "," + (y + 8) + "V" + (2 * y - 8);
      }
      if (brush) {
        gBrush = container.selectAll(".brush").data([[]]);
        gBrush.enter().append("g").attr("class", "brush").call(brush).call(brush.event);

        gBrush.call(brush);

        gBrush.selectAll("rect").attr("y", -config.margin.top).attr("height", config.height - config.margin.bottom);

        if (!bushInitialized) {
          bushInitialized = true;
          gBrush.selectAll(".resize").append("path").attr("d", resizePath);
        }
      }
      return gBrush;
    }

    function onSnapEnd(brush) {
      if (!config.brush && !config.brush.slider) {
        return;
      }
      var x = xScale(brush.extent()[0]);
      // TODO: well... nothing easier?
      var d = _data.reduce(function (prev, current) {
        return prev.concat(current);
      }, []).filter(function (d) {
        if (config.xAccessor(d) instanceof Date) {
          return config.xAccessor(d).getTime() === brush.extent()[0].getTime();
        }
        return config.xAccessor(d) === brush.extent()[0];
      })[0];
      var y = yScale(config.yAccessor(d));
      dispatch.filter(brush.extent()[0], config.id);
      helpers.updateSlider.call(_selection, x, y);
    }

    function onBrushend(brush) {
      brushExtent = brush.extent();
      dispatch.filter(brushExtent, config.id);
    }

    function onBrush(brush) {
      helpers.hideSliderStick.call(_selection);
    }

    var svgBasics = utils.getSvgBasics(config, _data);

    var _svgBasics = _slicedToArray(svgBasics, 9);

    var chartW = _svgBasics[0];
    var chartH = _svgBasics[1];
    var invertOrientation = _svgBasics[2];
    var xRange = _svgBasics[3];
    var yRange = _svgBasics[4];
    var xDomain = _svgBasics[5];
    var yDomain = _svgBasics[6];
    var xScale = _svgBasics[7];
    var yScale = _svgBasics[8];

    var xMin = utils.min(_data, config.xAccessor);
    var xMax = utils.max(_data, config.xAccessor);

    var brushOptions = { data: _data, callbacks: {}, bins: config.bins };
    var extent;
    var brush;
    var slider;

    if (config.brush.slider) {
      brushOptions.callbacks.snapend = onSnapEnd;
      brushOptions.callbacks.brush = onBrush;
      extent = brushExtent ? brushExtent : config.brush.extent ? config.brush.extent : [xMax, xMax];
      slider = helpers.initializeBrush.call(this, extent, brushOptions, xScale, dispatch, config);
      // Important, setting the shared brushSelection for related charts...
      if (config.brushSelections && config.brushSelections[config.id]) {
        config.brushSelections[config.id].brush = slider;
        config.brushSelections[config.id].id = config.id;
      }
      if (config.xScaleType != 'time' && config.xScaleType != 'ordinal') {
        xScale.clamp(true);
      }
      dispatch.sliderInitialized.call(this, slider, xScale, config.id);
      brush = void 0;
    } else {
      brushOptions.callbacks.brushend = onBrushend;
      if (brushExtent) {
        extent = brushExtent;
      } else if (config.brush.extent) {
        extent = config.brush.extent === 'full' ? [xMin, xMax] : config.brush.extent;
      } else {
        null;
      }
      brush = helpers.initializeBrush.call(this, extent, brushOptions, xScale, dispatch, config);
    }
    var gBrush = setBrush(_selection, _data, config, brush);
    var gSlider = helpers.setSlider.call(this, _selection, _data, config, slider, xScale, yScale, dispatch);

    //dispatch.on('filter', function(extent, filter))

    exports.properties.brush = brush;
    Object.freeze(exports.properties);
  }

  utils.getset(exports, config);

  //TODO: do we need this, as everything should already be exposed on exports after getset.
  exports.config = config;

  // These are `instance` properties
  exports.properties = {};

  return d3.rebind(exports, dispatch, 'on');
};

// These are `class` properties
// TODO: would it work once moved on the instance?
nightcharts.brushComponent.properties = {
  dispatch: d3.dispatch('brush', 'brushend', 'filter', 'nativeEvent', 'sliderInitialized')
};

Object.freeze(nightcharts.brushComponent.properties);

nightcharts.clipComponent = function (_config) {
  'use strict';

  var utils = d3.nightcharts.utils();
  var config = utils.setConfig(_config);

  function exports(_selection) {

    var _data = _selection.datum();
    var chartW = utils.getChartWidth(config);
    var chartH = utils.getChartHeight(config);
    var xDomain = utils.getXDomain(config, _data);
    var xRange = config.invertOrientation ? [chartH, 0] : [0, chartW];
    var xScale = utils.getXScale(config, xDomain, xRange, _data);

    if (!utils.checkForData(config, _data)) {
      return;
    }

    var clipId = utils.generateRandStr(9);

    var selector = config.clipIdKey ? '.clip.' + config.clipIdKey : '.clip.front';
    var clip = _selection.selectAll(selector).data([clipId]);

    clip.enter().append("defs").classed("clip", true).classed(config.clipIdKey, config.clipIdKey !== undefined).classed('front', config.clipIdKey === undefined).append("clipPath").attr("id", function (d) {
      return d;
    }).append("rect");

    clip.exit().remove();

    var vOffset = config.clip.vOffset + config.yOffset;
    _selection.selectAll(".clip rect").attr("x", 0).attr("width", chartW + config.xOffset + 2).attr("height", chartH + vOffset).attr("transform", "translate(" + Math.floor(-config.xOffset / 2) + "," + Math.floor(-vOffset / 2) + ")");

    exports.properties.clipId = clipId;
    Object.freeze(exports.properties);
  }

  utils.getset(exports, config);

  exports.config = config;

  // These are `instance` properties
  exports.properties = {};

  return exports;
};
//http://bl.ocks.org/nbremer/c0ffc07b23b1c556a66b
nightcharts.tipComponent = function (_config) {
  'use strict';

  var utils = d3.nightcharts.utils();
  var barHelpers = d3.nightcharts.barComponentHelpers();
  var config = utils.setConfig(_config);
  var dispatch = d3.dispatch('rolloverShow', 'rolloverHide');

  //Show the tooltip on the hovered over circle
  function showTip(selection, config, yScale, xScale, d, i) {
    var element = selection.selectAll('.tip-' + d.idx);
    var args = {};
    var lineLabel;

    element.classed('active', true);

    if (config.graphType == 'line') {
      lineLabel = selection.datum()[+d.idx.split('-')[0]].label;
      var circle = selection.select('.nc-tip-rollover-circle-wrapper').append('circle').classed('tip-rollover-circle', true).attr({
        'cx': xScale(config.xAccessor(d)),
        'cy': yScale(config.yAccessor(d)),
        'r': config.tip.rolloverCircleR ? config.tip.rolloverCircleR : 6
      });
    }

    if (utils.isObject(d)) {
      //FIXME: angular customizations!!!
      args = utils.extend(d.toJSON ? d.toJSON() : d, { lineLabel: lineLabel, element: element });
    } else {
      args.x = config.xAccessor(d);
      args.y = config.yAccessor(d);
      args.lineLabel = lineLabel;
      args.element = element;
    }

    dispatch.rolloverShow(args);
  }

  //Hide the tooltip when the mouse moves away
  function removeTip(selection, d, i) {
    selection.selectAll('.tip-rollover-circle').remove();
    var element = selection.selectAll('.tip-' + d.idx);

    element.classed('active', false);

    dispatch.rolloverHide();
  }

  function exports(_selection) {

    // Flatten the data and set an idx property on each data point.
    var _data = utils.flattenArray(_selection.datum());
    var svgBasics = utils.getSvgBasics(config, _data);

    var _svgBasics2 = _slicedToArray(svgBasics, 9);

    var chartW = _svgBasics2[0];
    var chartH = _svgBasics2[1];
    var invertOrientation = _svgBasics2[2];
    var xRange = _svgBasics2[3];
    var yRange = _svgBasics2[4];
    var xDomain = _svgBasics2[5];
    var yDomain = _svgBasics2[6];
    var xScale = _svgBasics2[7];
    var yScale = _svgBasics2[8];

    if (!utils.checkForData(config, _data)) {
      if (config.devMove) {
        console.warn('No data for tooltip.');
      }
      return;
    }

    var voronoiGroup = _selection.select('.nc-tip-voronoi-wrapper');
    var rectGroup = _selection.select('.nc-tip-rect-wrapper');

    var curriedShowTip = utils.curry(showTip);
    var partAppliedShowTip = curriedShowTip(_selection, config, yScale, xScale);
    var curriedRemoveTip = utils.curry(removeTip);
    var partAppliedRemoveTip = curriedRemoveTip(_selection);

    var rolloverCircleWrapper = _selection.select('.nc-tip-rollover-circle-wrapper')[0][0] ? _selection.select('.nc-tip-rollover-circle-wrapper') : _selection.append('g').attr('class', 'nc-tip-rollover-circle-wrapper');

    var brushComponentDispatch = d3.nightcharts.brushComponent.properties.dispatch;

    if (config.tip && config.tip.rollover == 'voronoi') {
      (function () {
        //Initiate the voronoi function
        //Use the same variables of the data in the .x and .y as used in the cx and cy of the circle call
        //The clip extent will make the boundaries end nicely along the chart area instead of splitting up the entire SVG
        //(if you do not do this it would mean that you already see a tooltip when your mouse is still in the axis area, which is confusing)
        var voronoi = d3.geom.voronoi().x(function (d) {
          return xScale(config.xAccessor(d));
        }).y(function (d) {
          return yScale(config.yAccessor(d));
        }).clipExtent([[0, 0], [chartW, chartH]]);

        //If not existent, initiate a group element to place the voronoi diagram in.
        voronoiGroup = voronoiGroup[0][0] ? voronoiGroup : _selection.append('g').attr('class', 'nc-tip-voronoi-wrapper');

        var setVoronoiPath = function setVoronoiPath(d, i) {
          //TODO: FIXME
          if (!d || d.length === 0) {
            return;
          }
          return 'M' + d.join('L') + 'Z';
        };

        var setVoronoiDatum = function setVoronoiDatum(d, i) {
          //TODO: FIXME
          if (!d) {
            return;
          }
          return d.point;
        };

        var voronois = voronoiGroup.selectAll('path').data(voronoi(_data)); //Use vononoi() with your dataset inside
        voronois.enter().append('path').attr('d', setVoronoiPath).datum(setVoronoiDatum)
        //Give each cell a unique class where the unique part corresponds to the circle classes
        .attr('class', function (d, i) {
          return 'voronoi ' + i;
        }).style('stroke', config.devMode ? '#8A203E' : 'none').style('opacity', 0.1).style('fill', 'none').style('pointer-events', 'all').on('mouseover', partAppliedShowTip).on('mouseout', partAppliedRemoveTip);
        voronois.exit().remove();

        brushComponentDispatch.on('brush.' + config.id + 'tip', function (brush, masterXScale, id) {
          if (config.listenToBrushEvents && id !== config.id) {
            var _xDomain = brush.empty() ? masterXScale.domain() : brush.extent();
            xScale = utils.getXScale(config, _xDomain, xRange, _data);
            partAppliedShowTip = curriedShowTip(_selection, config, yScale, xScale);

            voronois = voronoiGroup.selectAll('path').data(voronoi(_data)).attr('d', setVoronoiPath).datum(setVoronoiDatum).on('mouseover', partAppliedShowTip);
          }
        });
      })();
    } else if (config.tip && config.tip.rollover == 'rect') {
      (function () {
        //These are good for barcharts, single lines, grouped tips on multiple lines.
        rectGroup = rectGroup[0][0] ? rectGroup : _selection.append('g').attr('class', 'nc-tip-rect-wrapper');

        var invertOrientation = config.invertOrientation;
        var chartH = utils.getChartHeight(config);
        var xDomain = utils.getXDomain(config, _data);
        var xRange = invertOrientation ? [chartH, 0] : [0, chartW];
        var xScale = utils.getXScale(config, xDomain, xRange, _data);

        if (config.graphType == 'bar' && config.xScaleType == 'time') {
          var adjustedXDomain = utils.adjustDomainForBarOnTimescale(xDomain, config, _data);
          var adjustedXScale = utils.getXScale(config, adjustedXDomain, xRange, _data);
          partAppliedShowTip = curriedShowTip(_selection, config, yScale, adjustedXScale);
        } else {
          partAppliedShowTip = curriedShowTip(_selection, config, yScale, xScale);
        }

        var barW = barHelpers.getBarWidth(config, _data, xScale);
        var barRange = barHelpers.getBarRange(config, _data, xScale, barW);

        var setRectAttr = function setRectAttr(invertOrientation, chartH, barRange, barW) {
          return {
            x: function x(d, i) {
              if (invertOrientation) {
                return 0;
              }
              return barRange[i];
            },
            y: function y(d, i) {
              if (invertOrientation) {
                return barRange[i];
              }
              return 0;
            },
            width: function width(d, i) {
              if (invertOrientation) {
                chartH;
              }
              return barW;
            },
            height: function height(d, i) {
              if (invertOrientation) {
                return barW;
              }
              return chartH;
            }
          };
        };

        var curriedSetRectAttr = utils.curry(setRectAttr);
        var partAppliedSetRectAttr = curriedSetRectAttr(invertOrientation, chartH);

        var rects = rectGroup.selectAll('rect').data(_data);
        rects.enter().append("rect").attr(partAppliedSetRectAttr(barRange, barW));
        rects.exit().remove();

        rects.style('stroke', config.devMode ? '#8A203E' : 'none').style('opacity', 0.1).style('fill', config.devMode ? 'pink' : 'none').style('pointer-events', 'all').on('mouseover', partAppliedShowTip).on('mouseout', partAppliedRemoveTip);

        brushComponentDispatch.on('brush.' + config.id + 'tip', function (brush, masterXScale, id) {
          if (config.listenToBrushEvents && id !== config.id) {

            var _xDomain2 = brush.empty() ? masterXScale.domain() : brush.extent();
            var _xScale = utils.getXScale(config, _xDomain2, xRange, _data);

            if (config.graphType == 'bar' && config.xScaleType == 'time') {
              var adjustedXDomain = utils.adjustDomainForBarOnTimescale(_xDomain2, config, _data);
              var adjustedXScale = utils.getXScale(config, adjustedXDomain, xRange, _data);
              partAppliedShowTip = curriedShowTip(_selection, config, yScale, adjustedXScale);
            } else {
              partAppliedShowTip = curriedShowTip(_selection, config, yScale, _xScale);
            }

            var _barW = barHelpers.getBarWidth(config, _data, _xScale);
            var _barRange = barHelpers.getBarRange(config, _data, _xScale, _barW);

            rects.attr(partAppliedSetRectAttr(_barRange, _barW)).on('mouseover', partAppliedShowTip);
          }
        });
      })();
    }
  }

  utils.getset(exports, config);

  exports.config = config;

  return d3.rebind(exports, dispatch, 'on');
};
nightcharts.barComponent = function (_config) {
  'use strict';

  var utils = d3.nightcharts.utils();
  var helpers = utils.extend(d3.nightcharts.domLabelHelpers(), d3.nightcharts.domHelpers());
  var barHelpers = d3.nightcharts.barComponentHelpers();
  var config = utils.setConfig(_config, 'barConfig');
  var dispatch = d3.dispatch('customHover', 'barComponentEnterTransitionEnd');

  function exports(_selection) {

    var _data = _selection.datum();

    if (!utils.checkForData(config, _data)) {
      return;
    }

    //TODO: stacked bars not yet supported.
    function drawBars(bars, classAttr) {
      bars.enter().append('rect').classed('diverging', function (d) {
        if (config.divergingGraph) return true;
      }).attr({
        x: function x(d, i) {
          return invertOrientation ? 0 : chartW;
        },
        y: function y(d, i) {
          if (invertOrientation && config.slideBars) {
            return 0;
          } else if (invertOrientation) {
            return barRange[i];
          } else {
            return yScale(config.yAccessor(d));
          }
        },
        rx: config.rx,
        ry: config.ry,
        width: function width(d, i) {
          return invertOrientation ? yScale(config.yAccessor(d)) : barW;
        },
        height: function height(d, i) {
          return invertOrientation ? barW : chartH - yScale(config.yAccessor(d));
        }
      }).on('mouseover', dispatch.customHover);

      // For diverging bars see: http://bl.ocks.org/mbostock/2368837
      bars.transition().duration(config.duration)
      // need some end transition notification?
      //.call(utils.endall, _data, dispatch.barComponentEnterTransitionEnd)
      .ease(config.ease).attr({
        'class': function _class(d, i) {
          var custom = '';
          if (config.barClassSetter) {
            custom = config.barClassSetter.call(_data, d);
          }
          return classAttr + ' ' + classAttr + i + ' tip-0-' + i + ' ' + custom;
        },
        x: function x(d, i) {
          if (invertOrientation) {
            return yScale(Math.min(barOrigin, config.yAccessor(d))); // + yOffset;
          }
          return barRange[i];
        },
        y: function y(d, i) {
          if (invertOrientation) {
            return barRange[i];
          }
          return yScale(Math.max(barOrigin, config.yAccessor(d))) - 0;
        },
        width: function width(d, i) {
          if (invertOrientation) {
            return Math.abs(yScale(config.yAccessor(d)) - yScale(barOrigin));
          }
          return barW;
        },
        height: function height(d, i) {
          if (invertOrientation) {
            return barW;
          }
          return Math.abs(yScale(config.yAccessor(d)) - yScale(barOrigin));
        }
      });

      bars.exit().transition().duration(config.duration).ease(config.ease).style({ opacity: 0 }).remove();
    }

    var yOffset = config.yOffset;
    var xOffset = config.xOffset;
    var chartW = utils.getChartWidth(config);
    var chartH = utils.getChartHeight(config);
    var invertOrientation = config.invertOrientation;
    var xRange = utils.getXRange(config);
    var yRange = utils.getYRange(config);
    var xDomain = utils.getXDomain(config, _data);
    var yDomain = utils.getYDomain(config, _data);
    var barOrigin = config.divergingGraph ? 0 : yDomain[0];
    var xScale = utils.getXScale(config, xDomain, xRange, _data);
    var yScale = d3.scale[config.yScaleType]().domain(yDomain).range(yRange);

    if (config.xScaleType == 'time') {
      var adjustedXDomain = utils.adjustDomainForBarOnTimescale(xDomain, config, _data);
      xScale.domain(adjustedXDomain);
    }

    var clipId = config.listenToBrushEvents ? _data.clipId : void 0;
    var container = helpers.setChartGroupsContainer(_selection, _data, clipId);
    var bars = _selection.select('.chart-groups').selectAll('.bar').data(_data, config.xAccessor);
    // TMP, TODO better implementation
    var spaceInBetween = Math.max(Math.round(chartW * 0.2 / _data.length), 1);
    var barW = barHelpers.getBarWidth(config, _data, xScale, spaceInBetween);
    var barRange = barHelpers.getBarRange(config, _data, xScale, barW, spaceInBetween);

    if (config.barBackground) {
      var backData = _data.map(function (_d) {
        var d = utils.clone(_d);
        var yKey = d[config.yAccessor(d)];
        if (yKey) {
          d[yKey] = yDomain[1];
        } else {
          d[1] = yDomain[1];
        }
        return d;
      });
      var backs = _selection.select('.chart-groups').selectAll('.bar-back').data(backData);
      drawBars(backs, 'bar-back');
    }

    drawBars(bars, 'bar');

    _selection.selectAll('.bar').each(function (d) {
      d3.select(this).classed('negative', function (d) {
        if (!config.divergingGraph) return false;
        if (Math.min(barOrigin, config.yAccessor(d)) < 0) {
          return true;
        } else {
          return false;
        }
      });
    });

    var xMarkers = helpers.setXMarkers(container, config, _data);
    var yMarkers = helpers.setYMarkers(container, config, _data);
  }

  utils.getset(exports, config);

  exports.config = config;

  return d3.rebind(exports, dispatch, 'on');
};
d3.nightcharts.histoBarComponent = function (_config) {
  'use strict';

  var utils = d3.nightcharts.utils();
  var helpers = utils.extend(d3.nightcharts.domLabelHelpers(), d3.nightcharts.domHelpers());
  var config = utils.setConfig(_config, 'histoBarConfig');
  var curry = utils.curry;

  var dispatch = d3.nightcharts.histoBarComponent.properties.dispatch;

  var getXRange = function getXRange() {
    return [0, utils.getChartWidth(config)];
  };

  var histogram = {
    // If log scale min value cannot be 0!
    getYValue: curry(function (config, value) {
      if (config.yScaleType == 'log' && value === 0) {
        return 1;
      } else {
        return value;
      }
    }),
    calculateBins: function calculateBins(n) {
      var dataWidth;
      if (config.roundBins) {
        dataWidth = Math.round((Math.abs(config.xDomain[0]) + Math.abs(config.xDomain[1])) / n, 0);
      } else {
        dataWidth = (Math.abs(config.xDomain[0]) + Math.abs(config.xDomain[1])) / n;
      }
      return d3.range(config.xDomain[0], config.xDomain[1] + dataWidth, dataWidth);
    }
  };

  function exports(_selection) {
    _selection.each(function (_data) {
      if (!_data) {
        return;
      }
      if (!config.xDomain) {
        throw new Error('histoBarComponent needs the xDomain property to be set in advance.');
      }

      var data;
      var extent;
      config.bins = Array.isArray(config.bins) ? config.bins : histogram.calculateBins(config.bins);
      var bars;
      var getYValue = histogram.getYValue(config);

      data = config.dataTransform(d3.layout.histogram().bins(config.bins).value(config.xAccessor)(_data));

      var yOffset = config.yOffset,
          xOffset = config.xOffset;
      var chartW = utils.getChartWidth(config);
      var chartH = utils.getChartHeight(config);
      config.xTickValues = config.axisMaxTxtDensity.width ? utils.reduceAxisDensity(config, config.bins) : config.bins;

      var brushOptions = { data: _data };
      var yOffset = config.yOffset,
          xOffset = config.xOffset;
      var chartW = utils.getChartWidth(config);
      var chartH = utils.getChartHeight(config);

      var xScale = d3.scale.linear().domain(config.xDomain).range(getXRange()).clamp(true);

      var yDomain = config.yDomain || [getYValue(0), d3.max(data, function (d) {
        return d.y;
      })];
      config.yDomain = yDomain;
      var yRange = [chartH, 0];
      var yScale = d3.scale[config.yScaleType]().domain(yDomain).range(yRange);

      if (!utils.validateDimensions(config)) {
        return;
      }

      // SVG scaffolding
      if (config.width === 0 || config.height === 0) {
        if (config.devMode) {
          console.warn("width or height is zero!");
        }
        return;
      }
      var clipId = _data.clipId;
      //var clipIdBack = _data.clipIdBack;
      //var backContainer = helpers.setChartGroupsContainer(_selection, _data, clipIdBack, 'background');
      var container = helpers.setChartGroupsContainer(_selection, _data, clipId, config.containerCssClass);
      dispatch.containerReady.call(container, data, config);

      // TODO: this, in case of many charts interacting, can get called many times.
      // Id does not seem to create problems, but test for performance issues!
      var drawBars = function drawBars(container, data, cssClass) {
        var bars;
        bars = container.selectAll('.' + cssClass).data(data);

        bars.enter().append('g').attr('class', 'bar ' + cssClass).attr('transform', function (d) {
          return 'translate(' + xScale(d.x) + ',' + yScale(getYValue(d.y)) + ')';
        });

        bars.exit().remove();

        bars.each(function (d) {
          var barTxt;
          var barRect;
          var root = d3.select(this);

          barRect = root.selectAll('.bar-rect').data([d]);
          barRect.enter().append('rect').classed('bar-rect', true).attr('x', 1);
          barRect.exit().remove();

          root.selectAll('.bar-rect').attr('class', function (d) {
            var c = 'bar-rect ';
            if (config.barClassSetter) {
              c += config.barClassSetter.call(this, d);
            }
            return c;
          });

          if (cssClass == 'foreground' && config.histShowTxt) {
            barTxt = d3.select(this).selectAll('.bar-txt').data([d]);
            barTxt.enter().append('text').attr('class', 'bar-txt').attr('dy', '.75em').attr('y', 6).attr('text-anchor', 'middle');
            barTxt.exit().remove();
          }
        });
        return bars;
      };

      var foregroundBars = drawBars(container, data, config.containerCssClass);
      [container].forEach(function (container) {
        container.selectAll('.bar').transition().duration(config.duration).ease(config.ease).attr('transform', function (d) {
          return 'translate(' + xScale(d.x) + ',' + yScale(getYValue(d.y)) + ')';
        });

        container.selectAll('.bar-rect').attr('width', xScale(config.xDomain[0] + data[0].dx) - 1).attr('height', function (d) {
          return chartH - yScale(getYValue(d.y));
        });

        container.selectAll('.bar-txt').attr('x', xScale(config.xDomain[0] + data[0].dx) / 2).text(function (d) {
          return config.histFormatCount(getYValue(d.y));
        });
      });

      var xMarkers = helpers.setXMarkers(container, config);
    });
  }

  utils.getset(exports, config);

  exports.config = config;

  d3.rebind(exports, histogram, 'getYValue');
  d3.rebind(exports, histogram, 'calculateBins');

  return d3.rebind(exports, dispatch, 'on');
  //return exports;
};

d3.nightcharts.histoBarComponent.properties = {
  dispatch: d3.dispatch('containerReady', 'filter')
};

Object.freeze(d3.nightcharts.histoBarComponent.properties);
nightcharts.lineComponent = function (_config) {
  'use strict';

  var utils = d3.nightcharts.utils();
  var helpers = utils.extend(d3.nightcharts.domLabelHelpers(), d3.nightcharts.domHelpers());
  var config = utils.setConfig(_config, 'lineConfig');
  var dispatch = d3.dispatch('customHover', 'filter', 'nativeEvent');

  // do not return 0 with log scale
  var getYValue = utils.curry(utils.getNormalilzedYValue)(config);

  function exports(_selection) {

    var _data = _selection.datum();

    if (!utils.checkForData(config, _data)) {
      return;
    }

    function updateLines(_d, i, duration) {
      var setSymbol;
      var symbol;
      if (config.symbols) {
        symbol = config.symbols[i];
        setSymbol = helpers.setSymbol.bind(this, 'dots', config, _d, yScale, xScale, config.xAccessor, symbol, duration, i);
        setSymbol();
      }

      var groupedData = utils.regroupData(config, _d);
      var setSymbol;
      helpers.setLine.call(this, config, groupedData, utils.getLineGenerator(xScale, yScale, config), null, duration);
    };

    var clipId = config.listenToBrushEvents ? _data.clipId : void 0;
    var container = helpers.setChartGroupsContainer(_selection, _data, clipId);

    var svgBasics = utils.getSvgBasics(config, _data);

    var _svgBasics3 = _slicedToArray(svgBasics, 9);

    var chartW = _svgBasics3[0];
    var chartH = _svgBasics3[1];
    var invertOrientation = _svgBasics3[2];
    var xRange = _svgBasics3[3];
    var yRange = _svgBasics3[4];
    var xDomain = _svgBasics3[5];
    var yDomain = _svgBasics3[6];
    var xScale = _svgBasics3[7];
    var yScale = _svgBasics3[8];

    xScale.domain(xDomain).range([0, chartW]);

    var yMin = utils.min(_data, config.area ? config.areaY0Accessor : config.yAccessor);
    var yMax = utils.getYMax(_data, config);
    if (yMin === undefined || yMax === undefined) {
      helpers.setNoDataWarning(d3.select(this), config);
      return;
    }

    if (config.binaryBaseline) {
      var data = config.binaryBaseline.data;
      var symbol = config.binaryBaseline.symbol;
      helpers.setSymbol.call(container[0][0], 'binary-squares', config, data, yScale, xScale, config.xAccessor, symbol);
    }

    var lines = container.selectAll('.data-line').data(_data, function (d, i) {
      // TODO: this data accessor could be dangerous, needs some testing.
      if (d[config.classSetterOnData]) {
        return d[config.classSetterOnData];
      } else {
        return i;
      }
    });

    lines.enter().append('g').attr('class', function (d, i) {
      if (d[config.classSetterOnData]) {
        return 'data-line line line' + i + ' ' + d[config.classSetterOnData];
      }
      return 'data-line line line' + i;
    });

    lines.exit().transition().duration(config.duration).ease(config.ease).style({ opacity: 0 }).remove();

    lines.each(function (d, i) {
      updateLines.call(this, d, i);
    });

    var xMarkers = helpers.setXMarkers(container, config, _data);
    var yMarkers = helpers.setYMarkers(container, config, _data);

    var brushComponentDispatch = d3.nightcharts.brushComponent.properties.dispatch;
    brushComponentDispatch.on('brush.' + config.id + 'line', function (brush, masterXScale, id) {
      if (config.listenToBrushEvents && id !== config.id) {
        xScale.domain(brush.empty() ? masterXScale.domain() : brush.extent());
        lines.each(function (d, i) {
          updateLines.call(this, d, i, 0);
        });
      } else {
        //This is the native event, the one fired from the user interacting with the app!
        //dispatch.nativeEvent(id);
      }
    });
  }

  utils.getset(exports, config);

  return d3.rebind(exports, dispatch, 'on');
};
nightcharts.xAxisComponent = function (_config) {
  'use strict';

  var utils = d3.nightcharts.utils();
  var helpers = utils.extend(d3.nightcharts.domLabelHelpers(), d3.nightcharts.domHelpers());
  var config = utils.setConfig(_config);

  function exports(_selection) {

    var _data = _selection.datum();

    if (!utils.checkForData(config, _data)) {
      return;
    }
    if (!config.xAxisShow) {
      return;
    }

    var yOffset = config.yOffset;
    var xOffset = config.xOffset;
    var chartW = utils.getChartWidth(config);
    var chartH = utils.getChartHeight(config);
    var invertOrientation = config.invertOrientation;
    var xRange = invertOrientation ? [chartH, 0] : [0, chartW];
    var xDomain = utils.getXDomain(config, _data);
    var xScale = utils.getXScale(config, xDomain, xRange, _data);

    var xAxis = (config.xAxis || d3.svg.axis()).scale(xScale).orient(config.xAxisOrient);

    if (config.xTickValues) {
      xAxis.tickValues(config.xTickValues);
    }

    var xAxisContainer = _selection.selectAll(".x-axis-group").data(config.xAxisDataAccessor(_data));
    xAxisContainer.enter().append("g").classed("x-axis-group axis", true);
    xAxisContainer.exit().remove();

    if (config.xAxisLabel) {
      helpers.setXaxisLabel(xAxisContainer, config);
    }

    //  |
    //  |
    //  |
    //
    //
    //  yOffset (pushes down the xAxis along the y line)
    //  ____________
    //
    var tx = invertOrientation ? -yOffset : 0;
    var ty = invertOrientation ? 0 : chartH + yOffset;
    _selection.select('.x-axis-group.axis').transition().duration(config.duration).ease(config.ease).attr('transform', 'translate(' + tx + ', ' + ty + ')').call(xAxis);

    var brushComponentDispatch = d3.nightcharts.brushComponent.properties.dispatch;
    brushComponentDispatch.on('brush.' + config.id + 'xaxis', function (brush, masterXScale, id) {
      if (config.listenToBrushEvents && id !== config.id) {
        xScale.domain(brush.empty() ? masterXScale.domain() : brush.extent());
        _selection.select('.x-axis-group.axis').call(xAxis);
      } else {
        //This is the native event, the one fired from the user interacting with the app!
        //dispatch.nativeEvent(id);
      }
    });
  }

  utils.getset(exports, config);

  exports.config = config;

  return exports;
};
nightcharts.yAxisComponent = function (_config) {
  'use strict';

  var utils = d3.nightcharts.utils();
  var helpers = utils.extend(d3.nightcharts.domLabelHelpers(), d3.nightcharts.domHelpers());
  var config = utils.setConfig(_config);

  function exports(_selection) {

    var _data = _selection.datum();

    if (!utils.checkForData(config, _data)) {
      return;
    }
    if (!config.yAxisShow) {
      return;
    }

    var yOffset = config.yOffset;
    var xOffset = config.xOffset;
    var chartW = utils.getChartWidth(config);
    var chartH = utils.getChartHeight(config);
    var invertOrientation = config.invertOrientation;
    var yRange = invertOrientation ? [0, chartW] : [chartH, 0];
    var yDomain = utils.getYDomain(config, _data);
    var yScale = d3.scale[config.yScaleType]().domain(yDomain).range(yRange);

    var yAxis = (config.yAxis || d3.svg.axis()).scale(yScale).orient(config.yAxisOrient);

    var yAxisContainer = _selection.selectAll(".y-axis-group").data([_data]);
    yAxisContainer.enter().append("g").classed("y-axis-group axis", true);
    yAxisContainer.exit().remove();

    if (config.yAxisLabel) {
      helpers.setYaxisLabel(yAxisContainer, config);
    }

    //  |
    //  |
    //  | xOffset (pushes left the yAxis along the x line)  _____________
    //
    var tx = invertOrientation ? 0 : -xOffset;
    var ty = invertOrientation ? chartH : 0;
    _selection.select('.y-axis-group.axis').transition().duration(config.duration).ease(config.ease).attr('transform', 'translate(' + tx + ', ' + ty + ')').call(yAxis);
  }

  utils.getset(exports, config);

  exports.config = config;

  return exports;
};
nightcharts.bar = function () {
  'use strict';

  var utils = d3.nightcharts.utils();
  var helpers = utils.extend(d3.nightcharts.domLabelHelpers(), d3.nightcharts.domHelpers());
  var config = utils.extend(d3.nightcharts.config, d3.nightcharts.barConfig, { use_clone: true });
  config.graphType = 'bar';

  function exports(_selection) {
    var baseSvg = d3.nightcharts.baseSvg(config);
    var xAxisComponent = d3.nightcharts.xAxisComponent(config);
    var yAxisComponent = d3.nightcharts.yAxisComponent(config);
    var barComponent = d3.nightcharts.barComponent(config);
    var brushComponent = d3.nightcharts.brushComponent(exports.config);
    var tipComponent = d3.nightcharts.tipComponent(exports.config);

    _selection.each(function (_data) {
      if (!utils.checkForData(config, _data)) {
        return;
      }
      if (exports.config.xScaleType == 'time') {
        var xDomain = utils.getXDomain(config, _data);
        var adjustedXDomain = utils.adjustDomainForBarOnTimescale(xDomain, config, _data);
        xAxisComponent.xDomain(adjustedXDomain);
      }

      var svgContainer = d3.select(this);
      svgContainer.datum(_data).call(baseSvg);

      var chartContainer = svgContainer.select('svg .container');
      chartContainer.datum(_data).call(xAxisComponent);
      chartContainer.datum(_data).call(yAxisComponent);
      chartContainer.datum(_data).call(barComponent);

      if (config.tip) {
        if (!config.tip.rollover) {
          tipComponent.tip({ rollover: 'rect' });
        }
        chartContainer.datum(_data).call(tipComponent);
      }

      chartContainer.datum(_data).call(brushComponent);
    });

    // expose individual components
    exports.brushComponent = brushComponent;
    exports.tipComponent = tipComponent;
  }

  utils.getset(exports, config);

  exports.config = config;

  return exports;
};
d3.nightcharts.histoBar = function () {
  'use strict';

  var utils = d3.nightcharts.utils();
  var curry = utils.curry;
  var compose = utils.compose;
  var helpers = utils.extend(d3.nightcharts.domLabelHelpers(), d3.nightcharts.domHelpers());
  var config = utils.extend(d3.nightcharts.config, d3.nightcharts.histoBarConfig, { use_clone: true });

  config.xScaleType = 'linear';

  var baseSvgFactory = compose(d3.nightcharts.baseSvg, utils.clone);
  var xAxisComponentFactory = compose(d3.nightcharts.xAxisComponent, utils.clone);
  var yAxisComponentFactory = compose(d3.nightcharts.yAxisComponent, utils.clone);
  var histoBarComponentFactory = compose(d3.nightcharts.histoBarComponent, utils.clone);
  var clipComponentFactory = compose(d3.nightcharts.clipComponent, utils.clone);
  var brushComponentFactory = compose(d3.nightcharts.brushComponent, utils.clone);

  //TODO....
  var dispatch = d3.nightcharts.brushComponent.properties.dispatch;

  function exports(_selection) {

    var rawData = _selection.datum();
    if (!utils.checkForData(config, rawData)) {
      return;
    }

    var baseSvg = baseSvgFactory(config);
    var xAxisComponent = xAxisComponentFactory(config);
    var yAxisComponent = yAxisComponentFactory(config);
    var histoBarComponentBack = histoBarComponentFactory(config);
    var histoBarComponent = histoBarComponentFactory(config);
    var clipComponent = clipComponentFactory(config);
    var clipComponentBack = clipComponentFactory(config);
    var brushComponent = brushComponentFactory(config);

    histoBarComponentBack.containerCssClass('background');

    histoBarComponent.on('containerReady', function (processedData, config) {
      if (config.containerCssClass == 'background') {
        return;
      }
      var tickValues = histoBarComponent.xTickValues();
      var yDomain = histoBarComponent.yDomain();
      var bins = histoBarComponent.bins();

      xAxisComponent.xTickValues(tickValues);
      chartContainer.datum(processedData).call(xAxisComponent);

      yAxisComponent.yDomain(yDomain);
      chartContainer.datum(processedData).call(yAxisComponent);

      brushComponent.yDomain(yDomain);
      brushComponent.bins(bins);
      chartContainer.datum(processedData).call(brushComponent);
    });

    this.datum(rawData).call(baseSvg);

    var chartContainer = this.select('svg .container');

    clipComponentBack.clipIdKey('clipBack');
    chartContainer.datum(rawData).call(clipComponentBack);
    chartContainer.datum(rawData).call(clipComponent);

    chartContainer.datum(rawData).call(histoBarComponentBack);
    chartContainer.datum(rawData).call(histoBarComponent);

    // expose individual components
    exports.histoBarComponent = histoBarComponent;
    exports.brushComponent = brushComponent;
  }

  utils.getset(exports, config);

  exports.config = config;

  return d3.rebind(exports, dispatch, 'on');
};
nightcharts.line = function () {
  'use strict';

  var utils = d3.nightcharts.utils();
  var helpers = utils.extend(d3.nightcharts.domLabelHelpers(), d3.nightcharts.domHelpers());
  var config = utils.extend(d3.nightcharts.config, d3.nightcharts.lineConfig, { use_clone: true });
  config.graphType = 'line';

  function exports(_selection) {

    var baseSvg = d3.nightcharts.baseSvg(exports.config);
    var xAxisComponent = d3.nightcharts.xAxisComponent(exports.config);
    var yAxisComponent = d3.nightcharts.yAxisComponent(exports.config);
    var clipComponent = d3.nightcharts.clipComponent(exports.config);
    var lineComponent = d3.nightcharts.lineComponent(exports.config);
    var brushComponent = d3.nightcharts.brushComponent(exports.config);
    var tipComponent = d3.nightcharts.tipComponent(exports.config);

    _selection.each(function (_data) {
      if (!utils.checkForData(config, _data)) {
        return;
      }
      var svgBasics = utils.getSvgBasics(config, _data);

      var _svgBasics4 = _slicedToArray(svgBasics, 9);

      var chartW = _svgBasics4[0];
      var chartH = _svgBasics4[1];
      var invertOrientation = _svgBasics4[2];
      var xRange = _svgBasics4[3];
      var yRange = _svgBasics4[4];
      var xDomain = _svgBasics4[5];
      var yDomain = _svgBasics4[6];
      var xScale = _svgBasics4[7];
      var yScale = _svgBasics4[8];

      var svgContainer = d3.select(this);
      svgContainer.datum(_data).call(baseSvg);

      var chartContainer = svgContainer.select('svg .container');

      chartContainer.datum(_data).call(xAxisComponent);
      chartContainer.datum(_data).call(yAxisComponent);

      if (config.listenToBrushEvents) {
        chartContainer.datum(_data).call(clipComponent);
        _data.clipId = clipComponent.properties.clipId;
      }

      chartContainer.datum(_data).call(lineComponent);

      if (config.tip) {
        var dataLength = _data.length;
        if (!config.tip.rollover && dataLength > 1) {
          tipComponent.tip({ rollover: 'voronoi' });
        } else if (!config.tip.rollover && dataLength == 1) {
          tipComponent.tip({ rollover: 'rect' });
        }
        chartContainer.datum(_data).call(tipComponent);
      }

      chartContainer.datum(_data).call(brushComponent);
    });

    // expose individual components
    exports.brushComponent = brushComponent;
    exports.tipComponent = tipComponent;
  }

  utils.getset(exports, config);

  exports.config = config;

  return exports;
};

//# sourceMappingURL=nightcharts-bare.js.map