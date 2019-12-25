// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Main.elm":[function(require,module,exports) {
(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEBUG mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word >= 0
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_enqueueEffects(managers, result.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});




// HELPERS


function _Debugger_unsafeCoerce(value)
{
	return value;
}



// PROGRAMS


var _Debugger_element = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		A3($elm$browser$Debugger$Main$wrapInit, _Json_wrap(debugMetadata), _Debugger_popout(), impl.init),
		$elm$browser$Debugger$Main$wrapUpdate(impl.update),
		$elm$browser$Debugger$Main$wrapSubs(impl.subscriptions),
		function(sendToApp, initialModel)
		{
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			var currNode = _VirtualDom_virtualize(domNode);
			var currBlocker = $elm$browser$Debugger$Main$toBlockerType(initialModel);
			var currPopout;

			var cornerNode = _VirtualDom_doc.createElement('div');
			domNode.parentNode.insertBefore(cornerNode, domNode.nextSibling);
			var cornerCurr = _VirtualDom_virtualize(cornerNode);

			initialModel.popout.a = sendToApp;

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = A2(_VirtualDom_map, $elm$browser$Debugger$Main$UserMsg, view($elm$browser$Debugger$Main$getUserModel(model)));
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;

				// update blocker

				var nextBlocker = $elm$browser$Debugger$Main$toBlockerType(model);
				_Debugger_updateBlocker(currBlocker, nextBlocker);
				currBlocker = nextBlocker;

				// view corner

				var cornerNext = $elm$browser$Debugger$Main$cornerView(model);
				var cornerPatches = _VirtualDom_diff(cornerCurr, cornerNext);
				cornerNode = _VirtualDom_applyPatches(cornerNode, cornerCurr, cornerPatches, sendToApp);
				cornerCurr = cornerNext;

				if (!model.popout.b)
				{
					currPopout = undefined;
					return;
				}

				// view popout

				_VirtualDom_doc = model.popout.b; // SWITCH TO POPOUT DOC
				currPopout || (currPopout = _VirtualDom_virtualize(model.popout.b));
				var nextPopout = $elm$browser$Debugger$Main$popoutView(model);
				var popoutPatches = _VirtualDom_diff(currPopout, nextPopout);
				_VirtualDom_applyPatches(model.popout.b.body, currPopout, popoutPatches, sendToApp);
				currPopout = nextPopout;
				_VirtualDom_doc = document; // SWITCH BACK TO NORMAL DOC
			});
		}
	);
});


var _Debugger_document = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		A3($elm$browser$Debugger$Main$wrapInit, _Json_wrap(debugMetadata), _Debugger_popout(), impl.init),
		$elm$browser$Debugger$Main$wrapUpdate(impl.update),
		$elm$browser$Debugger$Main$wrapSubs(impl.subscriptions),
		function(sendToApp, initialModel)
		{
			var divertHrefToApp = impl.setup && impl.setup(function(x) { return sendToApp($elm$browser$Debugger$Main$UserMsg(x)); });
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			var currBlocker = $elm$browser$Debugger$Main$toBlockerType(initialModel);
			var currPopout;

			initialModel.popout.a = sendToApp;

			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view($elm$browser$Debugger$Main$getUserModel(model));
				var nextNode = _VirtualDom_node('body')(_List_Nil)(
					_Utils_ap(
						A2($elm$core$List$map, _VirtualDom_map($elm$browser$Debugger$Main$UserMsg), doc.body),
						_List_Cons($elm$browser$Debugger$Main$cornerView(model), _List_Nil)
					)
				);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);

				// update blocker

				var nextBlocker = $elm$browser$Debugger$Main$toBlockerType(model);
				_Debugger_updateBlocker(currBlocker, nextBlocker);
				currBlocker = nextBlocker;

				// view popout

				if (!model.popout.b) { currPopout = undefined; return; }

				_VirtualDom_doc = model.popout.b; // SWITCH TO POPOUT DOC
				currPopout || (currPopout = _VirtualDom_virtualize(model.popout.b));
				var nextPopout = $elm$browser$Debugger$Main$popoutView(model);
				var popoutPatches = _VirtualDom_diff(currPopout, nextPopout);
				_VirtualDom_applyPatches(model.popout.b.body, currPopout, popoutPatches, sendToApp);
				currPopout = nextPopout;
				_VirtualDom_doc = document; // SWITCH BACK TO NORMAL DOC
			});
		}
	);
});


function _Debugger_popout()
{
	return {
		b: undefined,
		a: undefined
	};
}

function _Debugger_isOpen(popout)
{
	return !!popout.b;
}

function _Debugger_open(popout)
{
	return _Scheduler_binding(function(callback)
	{
		_Debugger_openWindow(popout);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}

function _Debugger_openWindow(popout)
{
	var w = $elm$browser$Debugger$Main$initialWindowWidth,
		h = $elm$browser$Debugger$Main$initialWindowHeight,
	 	x = screen.width - w,
		y = screen.height - h;

	var debuggerWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);
	var doc = debuggerWindow.document;
	doc.title = 'Elm Debugger';

	// handle arrow keys
	doc.addEventListener('keydown', function(event) {
		event.metaKey && event.which === 82 && window.location.reload();
		event.key === 'ArrowUp'   && (popout.a($elm$browser$Debugger$Main$Up  ), event.preventDefault());
		event.key === 'ArrowDown' && (popout.a($elm$browser$Debugger$Main$Down), event.preventDefault());
	});

	// handle window close
	window.addEventListener('unload', close);
	debuggerWindow.addEventListener('unload', function() {
		popout.b = undefined;
		popout.a($elm$browser$Debugger$Main$NoOp);
		window.removeEventListener('unload', close);
	});

	function close() {
		popout.b = undefined;
		popout.a($elm$browser$Debugger$Main$NoOp);
		debuggerWindow.close();
	}

	// register new window
	popout.b = doc;
}



// SCROLL


function _Debugger_scroll(popout)
{
	return _Scheduler_binding(function(callback)
	{
		if (popout.b)
		{
			var msgs = popout.b.getElementById('elm-debugger-sidebar');
			if (msgs && msgs.scrollTop !== 0)
			{
				msgs.scrollTop = 0;
			}
		}
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


var _Debugger_scrollTo = F2(function(id, popout)
{
	return _Scheduler_binding(function(callback)
	{
		if (popout.b)
		{
			var msg = popout.b.getElementById(id);
			if (msg)
			{
				msg.scrollIntoView(false);
			}
		}
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});



// UPLOAD


function _Debugger_upload(popout)
{
	return _Scheduler_binding(function(callback)
	{
		var doc = popout.b || document;
		var element = doc.createElement('input');
		element.setAttribute('type', 'file');
		element.setAttribute('accept', 'text/json');
		element.style.display = 'none';
		element.addEventListener('change', function(event)
		{
			var fileReader = new FileReader();
			fileReader.onload = function(e)
			{
				callback(_Scheduler_succeed(e.target.result));
			};
			fileReader.readAsText(event.target.files[0]);
			doc.body.removeChild(element);
		});
		doc.body.appendChild(element);
		element.click();
	});
}



// DOWNLOAD


var _Debugger_download = F2(function(historyLength, json)
{
	return _Scheduler_binding(function(callback)
	{
		var fileName = 'history-' + historyLength + '.txt';
		var jsonString = JSON.stringify(json);
		var mime = 'text/plain;charset=utf-8';
		var done = _Scheduler_succeed(_Utils_Tuple0);

		// for IE10+
		if (navigator.msSaveBlob)
		{
			navigator.msSaveBlob(new Blob([jsonString], {type: mime}), fileName);
			return callback(done);
		}

		// for HTML5
		var element = document.createElement('a');
		element.setAttribute('href', 'data:' + mime + ',' + encodeURIComponent(jsonString));
		element.setAttribute('download', fileName);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
		callback(done);
	});
});



// POPOUT CONTENT


function _Debugger_messageToString(value)
{
	if (typeof value === 'boolean')
	{
		return value ? 'True' : 'False';
	}

	if (typeof value === 'number')
	{
		return value + '';
	}

	if (typeof value === 'string')
	{
		return '"' + _Debugger_addSlashes(value, false) + '"';
	}

	if (value instanceof String)
	{
		return "'" + _Debugger_addSlashes(value, true) + "'";
	}

	if (typeof value !== 'object' || value === null || !('$' in value))
	{
		return '…';
	}

	if (typeof value.$ === 'number')
	{
		return '…';
	}

	var code = value.$.charCodeAt(0);
	if (code === 0x23 /* # */ || /* a */ 0x61 <= code && code <= 0x7A /* z */)
	{
		return '…';
	}

	if (['Array_elm_builtin', 'Set_elm_builtin', 'RBNode_elm_builtin', 'RBEmpty_elm_builtin'].indexOf(value.$) >= 0)
	{
		return '…';
	}

	var keys = Object.keys(value);
	switch (keys.length)
	{
		case 1:
			return value.$;
		case 2:
			return value.$ + ' ' + _Debugger_messageToString(value.a);
		default:
			return value.$ + ' … ' + _Debugger_messageToString(value[keys[keys.length - 1]]);
	}
}


function _Debugger_init(value)
{
	if (typeof value === 'boolean')
	{
		return A3($elm$browser$Debugger$Expando$Constructor, $elm$core$Maybe$Just(value ? 'True' : 'False'), true, _List_Nil);
	}

	if (typeof value === 'number')
	{
		return $elm$browser$Debugger$Expando$Primitive(value + '');
	}

	if (typeof value === 'string')
	{
		return $elm$browser$Debugger$Expando$S('"' + _Debugger_addSlashes(value, false) + '"');
	}

	if (value instanceof String)
	{
		return $elm$browser$Debugger$Expando$S("'" + _Debugger_addSlashes(value, true) + "'");
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (tag === '::' || tag === '[]')
		{
			return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$ListSeq, true,
				A2($elm$core$List$map, _Debugger_init, value)
			);
		}

		if (tag === 'Set_elm_builtin')
		{
			return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$SetSeq, true,
				A3($elm$core$Set$foldr, _Debugger_initCons, _List_Nil, value)
			);
		}

		if (tag === 'RBNode_elm_builtin' || tag == 'RBEmpty_elm_builtin')
		{
			return A2($elm$browser$Debugger$Expando$Dictionary, true,
				A3($elm$core$Dict$foldr, _Debugger_initKeyValueCons, _List_Nil, value)
			);
		}

		if (tag === 'Array_elm_builtin')
		{
			return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$ArraySeq, true,
				A3($elm$core$Array$foldr, _Debugger_initCons, _List_Nil, value)
			);
		}

		if (typeof tag === 'number')
		{
			return $elm$browser$Debugger$Expando$Primitive('<internals>');
		}

		var char = tag.charCodeAt(0);
		if (char === 35 || 65 <= char && char <= 90)
		{
			var list = _List_Nil;
			for (var i in value)
			{
				if (i === '$') continue;
				list = _List_Cons(_Debugger_init(value[i]), list);
			}
			return A3($elm$browser$Debugger$Expando$Constructor, char === 35 ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(tag), true, $elm$core$List$reverse(list));
		}

		return $elm$browser$Debugger$Expando$Primitive('<internals>');
	}

	if (typeof value === 'object')
	{
		var dict = $elm$core$Dict$empty;
		for (var i in value)
		{
			dict = A3($elm$core$Dict$insert, i, _Debugger_init(value[i]), dict);
		}
		return A2($elm$browser$Debugger$Expando$Record, true, dict);
	}

	return $elm$browser$Debugger$Expando$Primitive('<internals>');
}

var _Debugger_initCons = F2(function initConsHelp(value, list)
{
	return _List_Cons(_Debugger_init(value), list);
});

var _Debugger_initKeyValueCons = F3(function(key, value, list)
{
	return _List_Cons(
		_Utils_Tuple2(_Debugger_init(key), _Debugger_init(value)),
		list
	);
});

function _Debugger_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}



// BLOCK EVENTS


function _Debugger_updateBlocker(oldBlocker, newBlocker)
{
	if (oldBlocker === newBlocker) return;

	var oldEvents = _Debugger_blockerToEvents(oldBlocker);
	var newEvents = _Debugger_blockerToEvents(newBlocker);

	// remove old blockers
	for (var i = 0; i < oldEvents.length; i++)
	{
		document.removeEventListener(oldEvents[i], _Debugger_blocker, true);
	}

	// add new blockers
	for (var i = 0; i < newEvents.length; i++)
	{
		document.addEventListener(newEvents[i], _Debugger_blocker, true);
	}
}


function _Debugger_blocker(event)
{
	if (event.type === 'keydown' && event.metaKey && event.which === 82)
	{
		return;
	}

	var isScroll = event.type === 'scroll' || event.type === 'wheel';
	for (var node = event.target; node; node = node.parentNode)
	{
		if (isScroll ? node.id === 'elm-debugger-details' : node.id === 'elm-debugger-overlay')
		{
			return;
		}
	}

	event.stopPropagation();
	event.preventDefault();
}

function _Debugger_blockerToEvents(blocker)
{
	return blocker === $elm$browser$Debugger$Overlay$BlockNone
		? []
		: blocker === $elm$browser$Debugger$Overlay$BlockMost
			? _Debugger_mostEvents
			: _Debugger_allEvents;
}

var _Debugger_mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var _Debugger_allEvents = _Debugger_mostEvents.concat('wheel', 'scroll');




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2($elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$List$cons = _List_cons;
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Debugger$Expando$ArraySeq = {$: 'ArraySeq'};
var $elm$browser$Debugger$Overlay$BlockMost = {$: 'BlockMost'};
var $elm$browser$Debugger$Overlay$BlockNone = {$: 'BlockNone'};
var $elm$browser$Debugger$Expando$Constructor = F3(
	function (a, b, c) {
		return {$: 'Constructor', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Expando$Dictionary = F2(
	function (a, b) {
		return {$: 'Dictionary', a: a, b: b};
	});
var $elm$browser$Debugger$Main$Down = {$: 'Down'};
var $elm$browser$Debugger$Expando$ListSeq = {$: 'ListSeq'};
var $elm$browser$Debugger$Main$NoOp = {$: 'NoOp'};
var $elm$browser$Debugger$Expando$Primitive = function (a) {
	return {$: 'Primitive', a: a};
};
var $elm$browser$Debugger$Expando$Record = F2(
	function (a, b) {
		return {$: 'Record', a: a, b: b};
	});
var $elm$browser$Debugger$Expando$S = function (a) {
	return {$: 'S', a: a};
};
var $elm$browser$Debugger$Expando$Sequence = F3(
	function (a, b, c) {
		return {$: 'Sequence', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Expando$SetSeq = {$: 'SetSeq'};
var $elm$browser$Debugger$Main$Up = {$: 'Up'};
var $elm$browser$Debugger$Main$UserMsg = function (a) {
	return {$: 'UserMsg', a: a};
};
var $elm$browser$Debugger$Main$Export = {$: 'Export'};
var $elm$browser$Debugger$Main$Import = {$: 'Import'};
var $elm$browser$Debugger$Main$Open = {$: 'Open'};
var $elm$browser$Debugger$Main$OverlayMsg = function (a) {
	return {$: 'OverlayMsg', a: a};
};
var $elm$browser$Debugger$Main$Resume = {$: 'Resume'};
var $elm$browser$Debugger$Main$isPaused = function (state) {
	if (state.$ === 'Running') {
		return false;
	} else {
		return true;
	}
};
var $elm$browser$Debugger$History$size = function (history) {
	return history.numMessages;
};
var $elm$browser$Debugger$Overlay$Accept = function (a) {
	return {$: 'Accept', a: a};
};
var $elm$browser$Debugger$Overlay$Choose = F2(
	function (a, b) {
		return {$: 'Choose', a: a, b: b};
	});
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$span = _VirtualDom_node('span');
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $elm$html$Html$a = _VirtualDom_node('a');
var $elm$browser$Debugger$Overlay$goodNews1 = '\nThe good news is that having values like this in your message type is not\nso great in the long run. You are better off using simpler data, like\n';
var $elm$browser$Debugger$Overlay$goodNews2 = '\nfunction can pattern match on that data and call whatever functions, JSON\ndecoders, etc. you need. This makes the code much more explicit and easy to\nfollow for other readers (or you in a few months!)\n';
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$html$Html$ul = _VirtualDom_node('ul');
var $elm$html$Html$code = _VirtualDom_node('code');
var $elm$browser$Debugger$Overlay$viewCode = function (name) {
	return A2(
		$elm$html$Html$code,
		_List_Nil,
		_List_fromArray(
			[
				$elm$html$Html$text(name)
			]));
};
var $elm$browser$Debugger$Overlay$addCommas = function (items) {
	if (!items.b) {
		return '';
	} else {
		if (!items.b.b) {
			var item = items.a;
			return item;
		} else {
			if (!items.b.b.b) {
				var item1 = items.a;
				var _v1 = items.b;
				var item2 = _v1.a;
				return item1 + (' and ' + item2);
			} else {
				var lastItem = items.a;
				var otherItems = items.b;
				return A2(
					$elm$core$String$join,
					', ',
					_Utils_ap(
						otherItems,
						_List_fromArray(
							[' and ' + lastItem])));
			}
		}
	}
};
var $elm$html$Html$li = _VirtualDom_node('li');
var $elm$browser$Debugger$Overlay$problemToString = function (problem) {
	switch (problem.$) {
		case 'Function':
			return 'functions';
		case 'Decoder':
			return 'JSON decoders';
		case 'Task':
			return 'tasks';
		case 'Process':
			return 'processes';
		case 'Socket':
			return 'web sockets';
		case 'Request':
			return 'HTTP requests';
		case 'Program':
			return 'programs';
		default:
			return 'virtual DOM values';
	}
};
var $elm$browser$Debugger$Overlay$viewProblemType = function (_v0) {
	var name = _v0.name;
	var problems = _v0.problems;
	return A2(
		$elm$html$Html$li,
		_List_Nil,
		_List_fromArray(
			[
				$elm$browser$Debugger$Overlay$viewCode(name),
				$elm$html$Html$text(
				' can contain ' + ($elm$browser$Debugger$Overlay$addCommas(
					A2($elm$core$List$map, $elm$browser$Debugger$Overlay$problemToString, problems)) + '.'))
			]));
};
var $elm$browser$Debugger$Overlay$viewBadMetadata = function (_v0) {
	var message = _v0.message;
	var problems = _v0.problems;
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('The '),
					$elm$browser$Debugger$Overlay$viewCode(message),
					$elm$html$Html$text(' type of your program cannot be reliably serialized for history files.')
				])),
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('Functions cannot be serialized, nor can values that contain functions. This is a problem in these places:')
				])),
			A2(
			$elm$html$Html$ul,
			_List_Nil,
			A2($elm$core$List$map, $elm$browser$Debugger$Overlay$viewProblemType, problems)),
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text($elm$browser$Debugger$Overlay$goodNews1),
					A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href('https://guide.elm-lang.org/types/custom_types.html')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('custom types')
						])),
					$elm$html$Html$text(', in your messages. From there, your '),
					$elm$browser$Debugger$Overlay$viewCode('update'),
					$elm$html$Html$text($elm$browser$Debugger$Overlay$goodNews2)
				]))
		]);
};
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $elm$browser$Debugger$Overlay$Cancel = {$: 'Cancel'};
var $elm$browser$Debugger$Overlay$Proceed = {$: 'Proceed'};
var $elm$html$Html$button = _VirtualDom_node('button');
var $elm$browser$Debugger$Overlay$viewButtons = function (buttons) {
	var btn = F2(
		function (msg, string) {
			return A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'margin-right', '20px'),
						$elm$html$Html$Events$onClick(msg)
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(string)
					]));
		});
	var buttonNodes = function () {
		if (buttons.$ === 'Accept') {
			var proceed = buttons.a;
			return _List_fromArray(
				[
					A2(btn, $elm$browser$Debugger$Overlay$Proceed, proceed)
				]);
		} else {
			var cancel = buttons.a;
			var proceed = buttons.b;
			return _List_fromArray(
				[
					A2(btn, $elm$browser$Debugger$Overlay$Cancel, cancel),
					A2(btn, $elm$browser$Debugger$Overlay$Proceed, proceed)
				]);
		}
	}();
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'height', '60px'),
				A2($elm$html$Html$Attributes$style, 'line-height', '60px'),
				A2($elm$html$Html$Attributes$style, 'text-align', 'right'),
				A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
			]),
		buttonNodes);
};
var $elm$browser$Debugger$Overlay$viewMessage = F4(
	function (config, title, details, buttons) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('elm-debugger-overlay'),
					A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
					A2($elm$html$Html$Attributes$style, 'top', '0'),
					A2($elm$html$Html$Attributes$style, 'left', '0'),
					A2($elm$html$Html$Attributes$style, 'width', '100vw'),
					A2($elm$html$Html$Attributes$style, 'height', '100vh'),
					A2($elm$html$Html$Attributes$style, 'color', 'white'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', 'none'),
					A2($elm$html$Html$Attributes$style, 'font-family', '\'Trebuchet MS\', \'Lucida Grande\', \'Bitstream Vera Sans\', \'Helvetica Neue\', sans-serif'),
					A2($elm$html$Html$Attributes$style, 'z-index', '2147483647')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
							A2($elm$html$Html$Attributes$style, 'width', '600px'),
							A2($elm$html$Html$Attributes$style, 'height', '100vh'),
							A2($elm$html$Html$Attributes$style, 'padding-left', 'calc(50% - 300px)'),
							A2($elm$html$Html$Attributes$style, 'padding-right', 'calc(50% - 300px)'),
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgba(200, 200, 200, 0.7)'),
							A2($elm$html$Html$Attributes$style, 'pointer-events', 'auto')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'font-size', '36px'),
									A2($elm$html$Html$Attributes$style, 'height', '80px'),
									A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)'),
									A2($elm$html$Html$Attributes$style, 'padding-left', '22px'),
									A2($elm$html$Html$Attributes$style, 'vertical-align', 'middle'),
									A2($elm$html$Html$Attributes$style, 'line-height', '80px')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(title)
								])),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$id('elm-debugger-details'),
									A2($elm$html$Html$Attributes$style, 'padding', ' 8px 20px'),
									A2($elm$html$Html$Attributes$style, 'overflow-y', 'auto'),
									A2($elm$html$Html$Attributes$style, 'max-height', 'calc(100vh - 156px)'),
									A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(61, 61, 61)')
								]),
							details),
							A2(
							$elm$html$Html$map,
							config.wrap,
							$elm$browser$Debugger$Overlay$viewButtons(buttons))
						]))
				]));
	});
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$virtual_dom$VirtualDom$nodeNS = function (tag) {
	return _VirtualDom_nodeNS(
		_VirtualDom_noScript(tag));
};
var $elm$core$String$fromFloat = _String_fromNumber;
var $elm$browser$Debugger$Overlay$viewShape = F4(
	function (x, y, angle, coordinates) {
		return A4(
			$elm$virtual_dom$VirtualDom$nodeNS,
			'http://www.w3.org/2000/svg',
			'polygon',
			_List_fromArray(
				[
					A2($elm$virtual_dom$VirtualDom$attribute, 'points', coordinates),
					A2(
					$elm$virtual_dom$VirtualDom$attribute,
					'transform',
					'translate(' + ($elm$core$String$fromFloat(x) + (' ' + ($elm$core$String$fromFloat(y) + (') rotate(' + ($elm$core$String$fromFloat(-angle) + ')'))))))
				]),
			_List_Nil);
	});
var $elm$browser$Debugger$Overlay$elmLogo = A4(
	$elm$virtual_dom$VirtualDom$nodeNS,
	'http://www.w3.org/2000/svg',
	'svg',
	_List_fromArray(
		[
			A2($elm$virtual_dom$VirtualDom$attribute, 'viewBox', '-300 -300 600 600'),
			A2($elm$virtual_dom$VirtualDom$attribute, 'xmlns', 'http://www.w3.org/2000/svg'),
			A2($elm$virtual_dom$VirtualDom$attribute, 'fill', 'currentColor'),
			A2($elm$virtual_dom$VirtualDom$attribute, 'width', '24px'),
			A2($elm$virtual_dom$VirtualDom$attribute, 'height', '24px')
		]),
	_List_fromArray(
		[
			A4(
			$elm$virtual_dom$VirtualDom$nodeNS,
			'http://www.w3.org/2000/svg',
			'g',
			_List_fromArray(
				[
					A2($elm$virtual_dom$VirtualDom$attribute, 'transform', 'scale(1 -1)')
				]),
			_List_fromArray(
				[
					A4($elm$browser$Debugger$Overlay$viewShape, 0, -210, 0, '-280,-90 0,190 280,-90'),
					A4($elm$browser$Debugger$Overlay$viewShape, -210, 0, 90, '-280,-90 0,190 280,-90'),
					A4($elm$browser$Debugger$Overlay$viewShape, 207, 207, 45, '-198,-66 0,132 198,-66'),
					A4($elm$browser$Debugger$Overlay$viewShape, 150, 0, 0, '-130,0 0,-130 130,0 0,130'),
					A4($elm$browser$Debugger$Overlay$viewShape, -89, 239, 0, '-191,61 69,61 191,-61 -69,-61'),
					A4($elm$browser$Debugger$Overlay$viewShape, 0, 106, 180, '-130,-44 0,86  130,-44'),
					A4($elm$browser$Debugger$Overlay$viewShape, 256, -150, 270, '-130,-44 0,86  130,-44')
				]))
		]));
var $elm$core$String$length = _String_length;
var $elm$browser$Debugger$Overlay$viewMiniControls = F2(
	function (config, numMsgs) {
		var string = $elm$core$String$fromInt(numMsgs);
		var width = $elm$core$String$fromInt(
			2 + $elm$core$String$length(string));
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
					A2($elm$html$Html$Attributes$style, 'bottom', '2em'),
					A2($elm$html$Html$Attributes$style, 'right', '2em'),
					A2($elm$html$Html$Attributes$style, 'width', 'calc(42px + ' + (width + 'ch)')),
					A2($elm$html$Html$Attributes$style, 'height', '36px'),
					A2($elm$html$Html$Attributes$style, 'background-color', '#1293D8'),
					A2($elm$html$Html$Attributes$style, 'color', 'white'),
					A2($elm$html$Html$Attributes$style, 'font-family', 'monospace'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', 'auto'),
					A2($elm$html$Html$Attributes$style, 'z-index', '2147483647'),
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'justify-content', 'center'),
					A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
					A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
					$elm$html$Html$Events$onClick(config.open)
				]),
			_List_fromArray(
				[
					$elm$browser$Debugger$Overlay$elmLogo,
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'padding-left', 'calc(1ch + 6px)'),
							A2($elm$html$Html$Attributes$style, 'padding-right', '1ch')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(string)
						]))
				]));
	});
var $elm$browser$Debugger$Overlay$explanationBad = '\nThe messages in this history do not match the messages handled by your\nprogram. I noticed changes in the following types:\n';
var $elm$browser$Debugger$Overlay$explanationRisky = '\nThis history seems old. It will work with this program, but some\nmessages have been added since the history was created:\n';
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $elm$browser$Debugger$Overlay$viewMention = F2(
	function (tags, verbed) {
		var _v0 = A2(
			$elm$core$List$map,
			$elm$browser$Debugger$Overlay$viewCode,
			$elm$core$List$reverse(tags));
		if (!_v0.b) {
			return $elm$html$Html$text('');
		} else {
			if (!_v0.b.b) {
				var tag = _v0.a;
				return A2(
					$elm$html$Html$li,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(verbed),
							tag,
							$elm$html$Html$text('.')
						]));
			} else {
				if (!_v0.b.b.b) {
					var tag2 = _v0.a;
					var _v1 = _v0.b;
					var tag1 = _v1.a;
					return A2(
						$elm$html$Html$li,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(verbed),
								tag1,
								$elm$html$Html$text(' and '),
								tag2,
								$elm$html$Html$text('.')
							]));
				} else {
					var lastTag = _v0.a;
					var otherTags = _v0.b;
					return A2(
						$elm$html$Html$li,
						_List_Nil,
						A2(
							$elm$core$List$cons,
							$elm$html$Html$text(verbed),
							_Utils_ap(
								A2(
									$elm$core$List$intersperse,
									$elm$html$Html$text(', '),
									$elm$core$List$reverse(otherTags)),
								_List_fromArray(
									[
										$elm$html$Html$text(', and '),
										lastTag,
										$elm$html$Html$text('.')
									]))));
				}
			}
		}
	});
var $elm$browser$Debugger$Overlay$viewChange = function (change) {
	return A2(
		$elm$html$Html$li,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'margin', '8px 0')
			]),
		function () {
			if (change.$ === 'AliasChange') {
				var name = change.a;
				return _List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'font-size', '1.5em')
							]),
						_List_fromArray(
							[
								$elm$browser$Debugger$Overlay$viewCode(name)
							]))
					]);
			} else {
				var name = change.a;
				var removed = change.b.removed;
				var changed = change.b.changed;
				var added = change.b.added;
				var argsMatch = change.b.argsMatch;
				return _List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'font-size', '1.5em')
							]),
						_List_fromArray(
							[
								$elm$browser$Debugger$Overlay$viewCode(name)
							])),
						A2(
						$elm$html$Html$ul,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'list-style-type', 'disc'),
								A2($elm$html$Html$Attributes$style, 'padding-left', '2em')
							]),
						_List_fromArray(
							[
								A2($elm$browser$Debugger$Overlay$viewMention, removed, 'Removed '),
								A2($elm$browser$Debugger$Overlay$viewMention, changed, 'Changed '),
								A2($elm$browser$Debugger$Overlay$viewMention, added, 'Added ')
							])),
						argsMatch ? $elm$html$Html$text('') : $elm$html$Html$text('This may be due to the fact that the type variable names changed.')
					]);
			}
		}());
};
var $elm$browser$Debugger$Overlay$viewReport = F2(
	function (isBad, report) {
		switch (report.$) {
			case 'CorruptHistory':
				return _List_fromArray(
					[
						$elm$html$Html$text('Looks like this history file is corrupt. I cannot understand it.')
					]);
			case 'VersionChanged':
				var old = report.a;
				var _new = report.b;
				return _List_fromArray(
					[
						$elm$html$Html$text('This history was created with Elm ' + (old + (', but you are using Elm ' + (_new + ' right now.'))))
					]);
			case 'MessageChanged':
				var old = report.a;
				var _new = report.b;
				return _List_fromArray(
					[
						$elm$html$Html$text('To import some other history, the overall message type must' + ' be the same. The old history has '),
						$elm$browser$Debugger$Overlay$viewCode(old),
						$elm$html$Html$text(' messages, but the new program works with '),
						$elm$browser$Debugger$Overlay$viewCode(_new),
						$elm$html$Html$text(' messages.')
					]);
			default:
				var changes = report.a;
				return _List_fromArray(
					[
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								isBad ? $elm$browser$Debugger$Overlay$explanationBad : $elm$browser$Debugger$Overlay$explanationRisky)
							])),
						A2(
						$elm$html$Html$ul,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'list-style-type', 'none'),
								A2($elm$html$Html$Attributes$style, 'padding-left', '20px')
							]),
						A2($elm$core$List$map, $elm$browser$Debugger$Overlay$viewChange, changes))
					]);
		}
	});
var $elm$browser$Debugger$Overlay$view = F5(
	function (config, isPaused, isOpen, numMsgs, state) {
		switch (state.$) {
			case 'None':
				return isOpen ? $elm$html$Html$text('') : (isPaused ? A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id('elm-debugger-overlay'),
							A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
							A2($elm$html$Html$Attributes$style, 'top', '0'),
							A2($elm$html$Html$Attributes$style, 'left', '0'),
							A2($elm$html$Html$Attributes$style, 'width', '100vw'),
							A2($elm$html$Html$Attributes$style, 'height', '100vh'),
							A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
							A2($elm$html$Html$Attributes$style, 'display', 'flex'),
							A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
							A2($elm$html$Html$Attributes$style, 'justify-content', 'center'),
							A2($elm$html$Html$Attributes$style, 'pointer-events', 'auto'),
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgba(200, 200, 200, 0.7)'),
							A2($elm$html$Html$Attributes$style, 'color', 'white'),
							A2($elm$html$Html$Attributes$style, 'font-family', '\'Trebuchet MS\', \'Lucida Grande\', \'Bitstream Vera Sans\', \'Helvetica Neue\', sans-serif'),
							A2($elm$html$Html$Attributes$style, 'z-index', '2147483646'),
							$elm$html$Html$Events$onClick(config.resume)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'font-size', '80px')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Click to Resume')
								])),
							A2($elm$browser$Debugger$Overlay$viewMiniControls, config, numMsgs)
						])) : A2($elm$browser$Debugger$Overlay$viewMiniControls, config, numMsgs));
			case 'BadMetadata':
				var badMetadata_ = state.a;
				return A4(
					$elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Cannot use Import or Export',
					$elm$browser$Debugger$Overlay$viewBadMetadata(badMetadata_),
					$elm$browser$Debugger$Overlay$Accept('Ok'));
			case 'BadImport':
				var report = state.a;
				return A4(
					$elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Cannot Import History',
					A2($elm$browser$Debugger$Overlay$viewReport, true, report),
					$elm$browser$Debugger$Overlay$Accept('Ok'));
			default:
				var report = state.a;
				return A4(
					$elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Warning',
					A2($elm$browser$Debugger$Overlay$viewReport, false, report),
					A2($elm$browser$Debugger$Overlay$Choose, 'Cancel', 'Import Anyway'));
		}
	});
var $elm$browser$Debugger$Main$cornerView = function (model) {
	return A5(
		$elm$browser$Debugger$Overlay$view,
		{exportHistory: $elm$browser$Debugger$Main$Export, importHistory: $elm$browser$Debugger$Main$Import, open: $elm$browser$Debugger$Main$Open, resume: $elm$browser$Debugger$Main$Resume, wrap: $elm$browser$Debugger$Main$OverlayMsg},
		$elm$browser$Debugger$Main$isPaused(model.state),
		_Debugger_isOpen(model.popout),
		$elm$browser$Debugger$History$size(model.history),
		model.overlay);
};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Set$foldr = F3(
	function (func, initialState, _v0) {
		var dict = _v0.a;
		return A3(
			$elm$core$Dict$foldr,
			F3(
				function (key, _v1, state) {
					return A2(func, key, state);
				}),
			initialState,
			dict);
	});
var $elm$browser$Debugger$Main$getCurrentModel = function (state) {
	if (state.$ === 'Running') {
		var model = state.a;
		return model;
	} else {
		var model = state.b;
		return model;
	}
};
var $elm$browser$Debugger$Main$getUserModel = function (model) {
	return $elm$browser$Debugger$Main$getCurrentModel(model.state);
};
var $elm$browser$Debugger$Main$initialWindowHeight = 420;
var $elm$browser$Debugger$Main$initialWindowWidth = 900;
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$browser$Debugger$Main$cachedHistory = function (model) {
	var _v0 = model.state;
	if (_v0.$ === 'Running') {
		return model.history;
	} else {
		var history = _v0.e;
		return history;
	}
};
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $elm$browser$Debugger$Main$DragEnd = {$: 'DragEnd'};
var $elm$browser$Debugger$Main$getDragStatus = function (layout) {
	if (layout.$ === 'Horizontal') {
		var status = layout.a;
		return status;
	} else {
		var status = layout.a;
		return status;
	}
};
var $elm$browser$Debugger$Main$Drag = function (a) {
	return {$: 'Drag', a: a};
};
var $elm$browser$Debugger$Main$DragInfo = F5(
	function (x, y, down, width, height) {
		return {down: down, height: height, width: width, x: x, y: y};
	});
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$browser$Debugger$Main$decodeDimension = function (field) {
	return A2(
		$elm$json$Json$Decode$at,
		_List_fromArray(
			['currentTarget', 'ownerDocument', 'defaultView', field]),
		$elm$json$Json$Decode$float);
};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$json$Json$Decode$map5 = _Json_map5;
var $elm$browser$Debugger$Main$onMouseMove = A2(
	$elm$html$Html$Events$on,
	'mousemove',
	A2(
		$elm$json$Json$Decode$map,
		$elm$browser$Debugger$Main$Drag,
		A6(
			$elm$json$Json$Decode$map5,
			$elm$browser$Debugger$Main$DragInfo,
			A2($elm$json$Json$Decode$field, 'pageX', $elm$json$Json$Decode$float),
			A2($elm$json$Json$Decode$field, 'pageY', $elm$json$Json$Decode$float),
			A2(
				$elm$json$Json$Decode$field,
				'buttons',
				A2(
					$elm$json$Json$Decode$map,
					function (v) {
						return v === 1;
					},
					$elm$json$Json$Decode$int)),
			$elm$browser$Debugger$Main$decodeDimension('innerWidth'),
			$elm$browser$Debugger$Main$decodeDimension('innerHeight'))));
var $elm$html$Html$Events$onMouseUp = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseup',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$browser$Debugger$Main$toDragListeners = function (layout) {
	var _v0 = $elm$browser$Debugger$Main$getDragStatus(layout);
	if (_v0.$ === 'Static') {
		return _List_Nil;
	} else {
		return _List_fromArray(
			[
				$elm$browser$Debugger$Main$onMouseMove,
				$elm$html$Html$Events$onMouseUp($elm$browser$Debugger$Main$DragEnd)
			]);
	}
};
var $elm$browser$Debugger$Main$toFlexDirection = function (layout) {
	if (layout.$ === 'Horizontal') {
		return 'row';
	} else {
		return 'column-reverse';
	}
};
var $elm$browser$Debugger$Main$DragStart = {$: 'DragStart'};
var $elm$html$Html$Events$onMouseDown = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mousedown',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$browser$Debugger$Main$toPercent = function (fraction) {
	return $elm$core$String$fromFloat(100 * fraction) + '%';
};
var $elm$browser$Debugger$Main$viewDragZone = function (layout) {
	if (layout.$ === 'Horizontal') {
		var x = layout.b;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
					A2($elm$html$Html$Attributes$style, 'top', '0'),
					A2(
					$elm$html$Html$Attributes$style,
					'left',
					$elm$browser$Debugger$Main$toPercent(x)),
					A2($elm$html$Html$Attributes$style, 'margin-left', '-5px'),
					A2($elm$html$Html$Attributes$style, 'width', '10px'),
					A2($elm$html$Html$Attributes$style, 'height', '100%'),
					A2($elm$html$Html$Attributes$style, 'cursor', 'col-resize'),
					$elm$html$Html$Events$onMouseDown($elm$browser$Debugger$Main$DragStart)
				]),
			_List_Nil);
	} else {
		var y = layout.c;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
					A2(
					$elm$html$Html$Attributes$style,
					'top',
					$elm$browser$Debugger$Main$toPercent(y)),
					A2($elm$html$Html$Attributes$style, 'left', '0'),
					A2($elm$html$Html$Attributes$style, 'margin-top', '-5px'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'height', '10px'),
					A2($elm$html$Html$Attributes$style, 'cursor', 'row-resize'),
					$elm$html$Html$Events$onMouseDown($elm$browser$Debugger$Main$DragStart)
				]),
			_List_Nil);
	}
};
var $elm$browser$Debugger$Main$TweakExpandoModel = function (a) {
	return {$: 'TweakExpandoModel', a: a};
};
var $elm$browser$Debugger$Main$TweakExpandoMsg = function (a) {
	return {$: 'TweakExpandoMsg', a: a};
};
var $elm$browser$Debugger$Main$toExpandoPercents = function (layout) {
	if (layout.$ === 'Horizontal') {
		var x = layout.b;
		return _Utils_Tuple2(
			$elm$browser$Debugger$Main$toPercent(1 - x),
			'100%');
	} else {
		var y = layout.c;
		return _Utils_Tuple2(
			'100%',
			$elm$browser$Debugger$Main$toPercent(y));
	}
};
var $elm$browser$Debugger$Main$toMouseBlocker = function (layout) {
	var _v0 = $elm$browser$Debugger$Main$getDragStatus(layout);
	if (_v0.$ === 'Static') {
		return 'auto';
	} else {
		return 'none';
	}
};
var $elm$browser$Debugger$Expando$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$browser$Debugger$Expando$Index = F3(
	function (a, b, c) {
		return {$: 'Index', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Expando$Key = {$: 'Key'};
var $elm$browser$Debugger$Expando$None = {$: 'None'};
var $elm$browser$Debugger$Expando$Toggle = {$: 'Toggle'};
var $elm$browser$Debugger$Expando$Value = {$: 'Value'};
var $elm$browser$Debugger$Expando$blue = A2($elm$html$Html$Attributes$style, 'color', 'rgb(28, 0, 207)');
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$browser$Debugger$Expando$leftPad = function (maybeKey) {
	if (maybeKey.$ === 'Nothing') {
		return _List_Nil;
	} else {
		return _List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'padding-left', '4ch')
			]);
	}
};
var $elm$browser$Debugger$Expando$makeArrow = function (arrow) {
	return A2(
		$elm$html$Html$span,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'color', '#777'),
				A2($elm$html$Html$Attributes$style, 'padding-left', '2ch'),
				A2($elm$html$Html$Attributes$style, 'width', '2ch'),
				A2($elm$html$Html$Attributes$style, 'display', 'inline-block')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(arrow)
			]));
};
var $elm$browser$Debugger$Expando$purple = A2($elm$html$Html$Attributes$style, 'color', 'rgb(136, 19, 145)');
var $elm$browser$Debugger$Expando$lineStarter = F3(
	function (maybeKey, maybeIsClosed, description) {
		var arrow = function () {
			if (maybeIsClosed.$ === 'Nothing') {
				return $elm$browser$Debugger$Expando$makeArrow('');
			} else {
				if (maybeIsClosed.a) {
					return $elm$browser$Debugger$Expando$makeArrow('▸');
				} else {
					return $elm$browser$Debugger$Expando$makeArrow('▾');
				}
			}
		}();
		if (maybeKey.$ === 'Nothing') {
			return A2($elm$core$List$cons, arrow, description);
		} else {
			var key = maybeKey.a;
			return A2(
				$elm$core$List$cons,
				arrow,
				A2(
					$elm$core$List$cons,
					A2(
						$elm$html$Html$span,
						_List_fromArray(
							[$elm$browser$Debugger$Expando$purple]),
						_List_fromArray(
							[
								$elm$html$Html$text(key)
							])),
					A2(
						$elm$core$List$cons,
						$elm$html$Html$text(' = '),
						description)));
		}
	});
var $elm$browser$Debugger$Expando$red = A2($elm$html$Html$Attributes$style, 'color', 'rgb(196, 26, 22)');
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $elm$browser$Debugger$Expando$seqTypeToString = F2(
	function (n, seqType) {
		switch (seqType.$) {
			case 'ListSeq':
				return 'List(' + ($elm$core$String$fromInt(n) + ')');
			case 'SetSeq':
				return 'Set(' + ($elm$core$String$fromInt(n) + ')');
			default:
				return 'Array(' + ($elm$core$String$fromInt(n) + ')');
		}
	});
var $elm$core$String$slice = _String_slice;
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			$elm$core$String$slice,
			-n,
			$elm$core$String$length(string),
			string);
	});
var $elm$browser$Debugger$Expando$elideMiddle = function (str) {
	return ($elm$core$String$length(str) <= 18) ? str : (A2($elm$core$String$left, 8, str) + ('...' + A2($elm$core$String$right, 8, str)));
};
var $elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === 'RBEmpty_elm_builtin') {
		return true;
	} else {
		return false;
	}
};
var $elm$browser$Debugger$Expando$viewExtraTinyRecord = F3(
	function (length, starter, entries) {
		if (!entries.b) {
			return _Utils_Tuple2(
				length + 1,
				_List_fromArray(
					[
						$elm$html$Html$text('}')
					]));
		} else {
			var field = entries.a;
			var rest = entries.b;
			var nextLength = (length + $elm$core$String$length(field)) + 1;
			if (nextLength > 18) {
				return _Utils_Tuple2(
					length + 2,
					_List_fromArray(
						[
							$elm$html$Html$text('…}')
						]));
			} else {
				var _v1 = A3($elm$browser$Debugger$Expando$viewExtraTinyRecord, nextLength, ',', rest);
				var finalLength = _v1.a;
				var otherHtmls = _v1.b;
				return _Utils_Tuple2(
					finalLength,
					A2(
						$elm$core$List$cons,
						$elm$html$Html$text(starter),
						A2(
							$elm$core$List$cons,
							A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$purple]),
								_List_fromArray(
									[
										$elm$html$Html$text(field)
									])),
							otherHtmls)));
			}
		}
	});
var $elm$browser$Debugger$Expando$viewTinyHelp = function (str) {
	return _Utils_Tuple2(
		$elm$core$String$length(str),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $elm$browser$Debugger$Expando$viewExtraTiny = function (value) {
	if (value.$ === 'Record') {
		var record = value.b;
		return A3(
			$elm$browser$Debugger$Expando$viewExtraTinyRecord,
			0,
			'{',
			$elm$core$Dict$keys(record));
	} else {
		return $elm$browser$Debugger$Expando$viewTiny(value);
	}
};
var $elm$browser$Debugger$Expando$viewTiny = function (value) {
	switch (value.$) {
		case 'S':
			var stringRep = value.a;
			var str = $elm$browser$Debugger$Expando$elideMiddle(stringRep);
			return _Utils_Tuple2(
				$elm$core$String$length(str),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[$elm$browser$Debugger$Expando$red]),
						_List_fromArray(
							[
								$elm$html$Html$text(str)
							]))
					]));
		case 'Primitive':
			var stringRep = value.a;
			return _Utils_Tuple2(
				$elm$core$String$length(stringRep),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[$elm$browser$Debugger$Expando$blue]),
						_List_fromArray(
							[
								$elm$html$Html$text(stringRep)
							]))
					]));
		case 'Sequence':
			var seqType = value.a;
			var valueList = value.c;
			return $elm$browser$Debugger$Expando$viewTinyHelp(
				A2(
					$elm$browser$Debugger$Expando$seqTypeToString,
					$elm$core$List$length(valueList),
					seqType));
		case 'Dictionary':
			var keyValuePairs = value.b;
			return $elm$browser$Debugger$Expando$viewTinyHelp(
				'Dict(' + ($elm$core$String$fromInt(
					$elm$core$List$length(keyValuePairs)) + ')'));
		case 'Record':
			var record = value.b;
			return $elm$browser$Debugger$Expando$viewTinyRecord(record);
		default:
			if (!value.c.b) {
				var maybeName = value.a;
				return $elm$browser$Debugger$Expando$viewTinyHelp(
					A2($elm$core$Maybe$withDefault, 'Unit', maybeName));
			} else {
				var maybeName = value.a;
				var valueList = value.c;
				return $elm$browser$Debugger$Expando$viewTinyHelp(
					function () {
						if (maybeName.$ === 'Nothing') {
							return 'Tuple(' + ($elm$core$String$fromInt(
								$elm$core$List$length(valueList)) + ')');
						} else {
							var name = maybeName.a;
							return name + ' …';
						}
					}());
			}
	}
};
var $elm$browser$Debugger$Expando$viewTinyRecord = function (record) {
	return $elm$core$Dict$isEmpty(record) ? _Utils_Tuple2(
		2,
		_List_fromArray(
			[
				$elm$html$Html$text('{}')
			])) : A3(
		$elm$browser$Debugger$Expando$viewTinyRecordHelp,
		0,
		'{ ',
		$elm$core$Dict$toList(record));
};
var $elm$browser$Debugger$Expando$viewTinyRecordHelp = F3(
	function (length, starter, entries) {
		if (!entries.b) {
			return _Utils_Tuple2(
				length + 2,
				_List_fromArray(
					[
						$elm$html$Html$text(' }')
					]));
		} else {
			var _v1 = entries.a;
			var field = _v1.a;
			var value = _v1.b;
			var rest = entries.b;
			var fieldLen = $elm$core$String$length(field);
			var _v2 = $elm$browser$Debugger$Expando$viewExtraTiny(value);
			var valueLen = _v2.a;
			var valueHtmls = _v2.b;
			var newLength = ((length + fieldLen) + valueLen) + 5;
			if (newLength > 60) {
				return _Utils_Tuple2(
					length + 4,
					_List_fromArray(
						[
							$elm$html$Html$text(', … }')
						]));
			} else {
				var _v3 = A3($elm$browser$Debugger$Expando$viewTinyRecordHelp, newLength, ', ', rest);
				var finalLength = _v3.a;
				var otherHtmls = _v3.b;
				return _Utils_Tuple2(
					finalLength,
					A2(
						$elm$core$List$cons,
						$elm$html$Html$text(starter),
						A2(
							$elm$core$List$cons,
							A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$purple]),
								_List_fromArray(
									[
										$elm$html$Html$text(field)
									])),
							A2(
								$elm$core$List$cons,
								$elm$html$Html$text(' = '),
								A2(
									$elm$core$List$cons,
									A2($elm$html$Html$span, _List_Nil, valueHtmls),
									otherHtmls)))));
			}
		}
	});
var $elm$browser$Debugger$Expando$view = F2(
	function (maybeKey, expando) {
		switch (expando.$) {
			case 'S':
				var stringRep = expando.a;
				return A2(
					$elm$html$Html$div,
					$elm$browser$Debugger$Expando$leftPad(maybeKey),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Nothing,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$red]),
								_List_fromArray(
									[
										$elm$html$Html$text(stringRep)
									]))
							])));
			case 'Primitive':
				var stringRep = expando.a;
				return A2(
					$elm$html$Html$div,
					$elm$browser$Debugger$Expando$leftPad(maybeKey),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Nothing,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$blue]),
								_List_fromArray(
									[
										$elm$html$Html$text(stringRep)
									]))
							])));
			case 'Sequence':
				var seqType = expando.a;
				var isClosed = expando.b;
				var valueList = expando.c;
				return A4($elm$browser$Debugger$Expando$viewSequence, maybeKey, seqType, isClosed, valueList);
			case 'Dictionary':
				var isClosed = expando.a;
				var keyValuePairs = expando.b;
				return A3($elm$browser$Debugger$Expando$viewDictionary, maybeKey, isClosed, keyValuePairs);
			case 'Record':
				var isClosed = expando.a;
				var valueDict = expando.b;
				return A3($elm$browser$Debugger$Expando$viewRecord, maybeKey, isClosed, valueDict);
			default:
				var maybeName = expando.a;
				var isClosed = expando.b;
				var valueList = expando.c;
				return A4($elm$browser$Debugger$Expando$viewConstructor, maybeKey, maybeName, isClosed, valueList);
		}
	});
var $elm$browser$Debugger$Expando$viewConstructor = F4(
	function (maybeKey, maybeName, isClosed, valueList) {
		var tinyArgs = A2(
			$elm$core$List$map,
			A2($elm$core$Basics$composeL, $elm$core$Tuple$second, $elm$browser$Debugger$Expando$viewExtraTiny),
			valueList);
		var description = function () {
			var _v7 = _Utils_Tuple2(maybeName, tinyArgs);
			if (_v7.a.$ === 'Nothing') {
				if (!_v7.b.b) {
					var _v8 = _v7.a;
					return _List_fromArray(
						[
							$elm$html$Html$text('()')
						]);
				} else {
					var _v9 = _v7.a;
					var _v10 = _v7.b;
					var x = _v10.a;
					var xs = _v10.b;
					return A2(
						$elm$core$List$cons,
						$elm$html$Html$text('( '),
						A2(
							$elm$core$List$cons,
							A2($elm$html$Html$span, _List_Nil, x),
							A3(
								$elm$core$List$foldr,
								F2(
									function (args, rest) {
										return A2(
											$elm$core$List$cons,
											$elm$html$Html$text(', '),
											A2(
												$elm$core$List$cons,
												A2($elm$html$Html$span, _List_Nil, args),
												rest));
									}),
								_List_fromArray(
									[
										$elm$html$Html$text(' )')
									]),
								xs)));
				}
			} else {
				if (!_v7.b.b) {
					var name = _v7.a.a;
					return _List_fromArray(
						[
							$elm$html$Html$text(name)
						]);
				} else {
					var name = _v7.a.a;
					var _v11 = _v7.b;
					var x = _v11.a;
					var xs = _v11.b;
					return A2(
						$elm$core$List$cons,
						$elm$html$Html$text(name + ' '),
						A2(
							$elm$core$List$cons,
							A2($elm$html$Html$span, _List_Nil, x),
							A3(
								$elm$core$List$foldr,
								F2(
									function (args, rest) {
										return A2(
											$elm$core$List$cons,
											$elm$html$Html$text(' '),
											A2(
												$elm$core$List$cons,
												A2($elm$html$Html$span, _List_Nil, args),
												rest));
									}),
								_List_Nil,
								xs)));
				}
			}
		}();
		var _v4 = function () {
			if (!valueList.b) {
				return _Utils_Tuple2(
					$elm$core$Maybe$Nothing,
					A2($elm$html$Html$div, _List_Nil, _List_Nil));
			} else {
				if (!valueList.b.b) {
					var entry = valueList.a;
					switch (entry.$) {
						case 'S':
							return _Utils_Tuple2(
								$elm$core$Maybe$Nothing,
								A2($elm$html$Html$div, _List_Nil, _List_Nil));
						case 'Primitive':
							return _Utils_Tuple2(
								$elm$core$Maybe$Nothing,
								A2($elm$html$Html$div, _List_Nil, _List_Nil));
						case 'Sequence':
							var subValueList = entry.c;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewSequenceOpen(subValueList)));
						case 'Dictionary':
							var keyValuePairs = entry.b;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewDictionaryOpen(keyValuePairs)));
						case 'Record':
							var record = entry.b;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewRecordOpen(record)));
						default:
							var subValueList = entry.c;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewConstructorOpen(subValueList)));
					}
				} else {
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(isClosed),
						isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : $elm$browser$Debugger$Expando$viewConstructorOpen(valueList));
				}
			}
		}();
		var maybeIsClosed = _v4.a;
		var openHtml = _v4.b;
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3($elm$browser$Debugger$Expando$lineStarter, maybeKey, maybeIsClosed, description)),
					openHtml
				]));
	});
var $elm$browser$Debugger$Expando$viewConstructorEntry = F2(
	function (index, value) {
		return A2(
			$elm$html$Html$map,
			A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, index),
			A2(
				$elm$browser$Debugger$Expando$view,
				$elm$core$Maybe$Just(
					$elm$core$String$fromInt(index)),
				value));
	});
var $elm$browser$Debugger$Expando$viewConstructorOpen = function (valueList) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewConstructorEntry, valueList));
};
var $elm$browser$Debugger$Expando$viewDictionary = F3(
	function (maybeKey, isClosed, keyValuePairs) {
		var starter = 'Dict(' + ($elm$core$String$fromInt(
			$elm$core$List$length(keyValuePairs)) + ')');
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Just(isClosed),
						_List_fromArray(
							[
								$elm$html$Html$text(starter)
							]))),
					isClosed ? $elm$html$Html$text('') : $elm$browser$Debugger$Expando$viewDictionaryOpen(keyValuePairs)
				]));
	});
var $elm$browser$Debugger$Expando$viewDictionaryEntry = F2(
	function (index, _v2) {
		var key = _v2.a;
		var value = _v2.b;
		switch (key.$) {
			case 'S':
				var stringRep = key.a;
				return A2(
					$elm$html$Html$map,
					A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index),
					A2(
						$elm$browser$Debugger$Expando$view,
						$elm$core$Maybe$Just(stringRep),
						value));
			case 'Primitive':
				var stringRep = key.a;
				return A2(
					$elm$html$Html$map,
					A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index),
					A2(
						$elm$browser$Debugger$Expando$view,
						$elm$core$Maybe$Just(stringRep),
						value));
			default:
				return A2(
					$elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$map,
							A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Key, index),
							A2(
								$elm$browser$Debugger$Expando$view,
								$elm$core$Maybe$Just('key'),
								key)),
							A2(
							$elm$html$Html$map,
							A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index),
							A2(
								$elm$browser$Debugger$Expando$view,
								$elm$core$Maybe$Just('value'),
								value))
						]));
		}
	});
var $elm$browser$Debugger$Expando$viewDictionaryOpen = function (keyValuePairs) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewDictionaryEntry, keyValuePairs));
};
var $elm$browser$Debugger$Expando$viewRecord = F3(
	function (maybeKey, isClosed, record) {
		var _v1 = isClosed ? _Utils_Tuple3(
			$elm$browser$Debugger$Expando$viewTinyRecord(record).b,
			$elm$html$Html$text(''),
			$elm$html$Html$text('')) : _Utils_Tuple3(
			_List_fromArray(
				[
					$elm$html$Html$text('{')
				]),
			$elm$browser$Debugger$Expando$viewRecordOpen(record),
			A2(
				$elm$html$Html$div,
				$elm$browser$Debugger$Expando$leftPad(
					$elm$core$Maybe$Just(_Utils_Tuple0)),
				_List_fromArray(
					[
						$elm$html$Html$text('}')
					])));
		var start = _v1.a;
		var middle = _v1.b;
		var end = _v1.c;
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Just(isClosed),
						start)),
					middle,
					end
				]));
	});
var $elm$browser$Debugger$Expando$viewRecordEntry = function (_v0) {
	var field = _v0.a;
	var value = _v0.b;
	return A2(
		$elm$html$Html$map,
		$elm$browser$Debugger$Expando$Field(field),
		A2(
			$elm$browser$Debugger$Expando$view,
			$elm$core$Maybe$Just(field),
			value));
};
var $elm$browser$Debugger$Expando$viewRecordOpen = function (record) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2(
			$elm$core$List$map,
			$elm$browser$Debugger$Expando$viewRecordEntry,
			$elm$core$Dict$toList(record)));
};
var $elm$browser$Debugger$Expando$viewSequence = F4(
	function (maybeKey, seqType, isClosed, valueList) {
		var starter = A2(
			$elm$browser$Debugger$Expando$seqTypeToString,
			$elm$core$List$length(valueList),
			seqType);
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Just(isClosed),
						_List_fromArray(
							[
								$elm$html$Html$text(starter)
							]))),
					isClosed ? $elm$html$Html$text('') : $elm$browser$Debugger$Expando$viewSequenceOpen(valueList)
				]));
	});
var $elm$browser$Debugger$Expando$viewSequenceOpen = function (values) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewConstructorEntry, values));
};
var $elm$browser$Debugger$Main$viewExpando = F3(
	function (expandoMsg, expandoModel, layout) {
		var block = $elm$browser$Debugger$Main$toMouseBlocker(layout);
		var _v0 = $elm$browser$Debugger$Main$toExpandoPercents(layout);
		var w = _v0.a;
		var h = _v0.b;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'block'),
					A2($elm$html$Html$Attributes$style, 'width', 'calc(' + (w + ' - 4em)')),
					A2($elm$html$Html$Attributes$style, 'height', 'calc(' + (h + ' - 4em)')),
					A2($elm$html$Html$Attributes$style, 'padding', '2em'),
					A2($elm$html$Html$Attributes$style, 'margin', '0'),
					A2($elm$html$Html$Attributes$style, 'overflow', 'auto'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', block),
					A2($elm$html$Html$Attributes$style, '-webkit-user-select', block),
					A2($elm$html$Html$Attributes$style, '-moz-user-select', block),
					A2($elm$html$Html$Attributes$style, '-ms-user-select', block),
					A2($elm$html$Html$Attributes$style, 'user-select', block)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'color', '#ccc'),
							A2($elm$html$Html$Attributes$style, 'padding', '0 0 1em 0')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('-- MESSAGE')
						])),
					A2(
					$elm$html$Html$map,
					$elm$browser$Debugger$Main$TweakExpandoMsg,
					A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Nothing, expandoMsg)),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'color', '#ccc'),
							A2($elm$html$Html$Attributes$style, 'padding', '1em 0')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('-- MODEL')
						])),
					A2(
					$elm$html$Html$map,
					$elm$browser$Debugger$Main$TweakExpandoModel,
					A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Nothing, expandoModel))
				]));
	});
var $elm$browser$Debugger$Main$Jump = function (a) {
	return {$: 'Jump', a: a};
};
var $elm$virtual_dom$VirtualDom$lazy = _VirtualDom_lazy;
var $elm$html$Html$Lazy$lazy = $elm$virtual_dom$VirtualDom$lazy;
var $elm$browser$Debugger$Main$toHistoryPercents = function (layout) {
	if (layout.$ === 'Horizontal') {
		var x = layout.b;
		return _Utils_Tuple2(
			$elm$browser$Debugger$Main$toPercent(x),
			'100%');
	} else {
		var y = layout.c;
		return _Utils_Tuple2(
			'100%',
			$elm$browser$Debugger$Main$toPercent(1 - y));
	}
};
var $elm$virtual_dom$VirtualDom$lazy3 = _VirtualDom_lazy3;
var $elm$html$Html$Lazy$lazy3 = $elm$virtual_dom$VirtualDom$lazy3;
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$browser$Debugger$History$idForMessageIndex = function (index) {
	return 'msg-' + $elm$core$String$fromInt(index);
};
var $elm$html$Html$Attributes$title = $elm$html$Html$Attributes$stringProperty('title');
var $elm$browser$Debugger$History$viewMessage = F3(
	function (currentIndex, index, msg) {
		var messageName = _Debugger_messageToString(msg);
		var className = _Utils_eq(currentIndex, index) ? 'elm-debugger-entry elm-debugger-entry-selected' : 'elm-debugger-entry';
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id(
					$elm$browser$Debugger$History$idForMessageIndex(index)),
					$elm$html$Html$Attributes$class(className),
					$elm$html$Html$Events$onClick(index)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$title(messageName),
							$elm$html$Html$Attributes$class('elm-debugger-entry-content')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(messageName)
						])),
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('elm-debugger-entry-index')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							$elm$core$String$fromInt(index))
						]))
				]));
	});
var $elm$browser$Debugger$History$consMsg = F3(
	function (currentIndex, msg, _v0) {
		var index = _v0.a;
		var rest = _v0.b;
		return _Utils_Tuple2(
			index + 1,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$elm$core$String$fromInt(index),
					A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewMessage, currentIndex, index, msg)),
				rest));
	});
var $elm$core$Array$length = function (_v0) {
	var len = _v0.a;
	return len;
};
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
var $elm$browser$Debugger$History$maxSnapshotSize = 31;
var $elm$browser$Debugger$History$showMoreButton = function (numMessages) {
	var nextIndex = (numMessages - 1) - ($elm$browser$Debugger$History$maxSnapshotSize * 2);
	var labelText = 'View more messages';
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('elm-debugger-entry'),
				$elm$html$Html$Events$onClick(nextIndex)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$title(labelText),
						$elm$html$Html$Attributes$class('elm-debugger-entry-content')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(labelText)
					])),
				A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('elm-debugger-entry-index')
					]),
				_List_Nil)
			]));
};
var $elm$browser$Debugger$History$styles = A3(
	$elm$html$Html$node,
	'style',
	_List_Nil,
	_List_fromArray(
		[
			$elm$html$Html$text('\n\n.elm-debugger-entry {\n  cursor: pointer;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 8px;\n}\n\n.elm-debugger-entry:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.elm-debugger-entry-selected, .elm-debugger-entry-selected:hover {\n  background-color: rgb(10, 10, 10);\n}\n\n.elm-debugger-entry-content {\n  width: calc(100% - 40px);\n  padding: 0 5px;\n  box-sizing: border-box;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.elm-debugger-entry-index {\n  color: #666;\n  width: 40px;\n  text-align: right;\n  display: block;\n  float: right;\n}\n\n')
		]));
var $elm$core$Basics$ge = _Utils_ge;
var $elm$browser$Debugger$History$viewSnapshot = F3(
	function (selectedIndex, index, _v0) {
		var messages = _v0.messages;
		return A3(
			$elm$html$Html$Keyed$node,
			'div',
			_List_Nil,
			A3(
				$elm$core$Array$foldr,
				$elm$browser$Debugger$History$consMsg(selectedIndex),
				_Utils_Tuple2(index, _List_Nil),
				messages).b);
	});
var $elm$browser$Debugger$History$consSnapshot = F3(
	function (selectedIndex, snapshot, _v0) {
		var index = _v0.a;
		var rest = _v0.b;
		var nextIndex = index + $elm$core$Array$length(snapshot.messages);
		var selectedIndexHelp = ((_Utils_cmp(nextIndex, selectedIndex) > 0) && (_Utils_cmp(selectedIndex, index) > -1)) ? selectedIndex : (-1);
		return _Utils_Tuple2(
			nextIndex,
			A2(
				$elm$core$List$cons,
				A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewSnapshot, selectedIndexHelp, index, snapshot),
				rest));
	});
var $elm$core$Elm$JsArray$foldl = _JsArray_foldl;
var $elm$core$Array$foldl = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldl, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldl, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldl,
			func,
			A3($elm$core$Elm$JsArray$foldl, helper, baseCase, tree),
			tail);
	});
var $elm$browser$Debugger$History$viewAllSnapshots = F3(
	function (selectedIndex, startIndex, snapshots) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			A3(
				$elm$core$Array$foldl,
				$elm$browser$Debugger$History$consSnapshot(selectedIndex),
				_Utils_Tuple2(startIndex, _List_Nil),
				snapshots).b);
	});
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $elm$core$Elm$JsArray$appendN = _JsArray_appendN;
var $elm$core$Elm$JsArray$slice = _JsArray_slice;
var $elm$core$Array$appendHelpBuilder = F2(
	function (tail, builder) {
		var tailLen = $elm$core$Elm$JsArray$length(tail);
		var notAppended = ($elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(builder.tail)) - tailLen;
		var appended = A3($elm$core$Elm$JsArray$appendN, $elm$core$Array$branchFactor, builder.tail, tail);
		return (notAppended < 0) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: A3($elm$core$Elm$JsArray$slice, notAppended, tailLen, tail)
		} : ((!notAppended) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: $elm$core$Elm$JsArray$empty
		} : {nodeList: builder.nodeList, nodeListSize: builder.nodeListSize, tail: appended});
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$Array$sliceLeft = F2(
	function (from, array) {
		var len = array.a;
		var tree = array.c;
		var tail = array.d;
		if (!from) {
			return array;
		} else {
			if (_Utils_cmp(
				from,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					len - from,
					$elm$core$Array$shiftStep,
					$elm$core$Elm$JsArray$empty,
					A3(
						$elm$core$Elm$JsArray$slice,
						from - $elm$core$Array$tailIndex(len),
						$elm$core$Elm$JsArray$length(tail),
						tail));
			} else {
				var skipNodes = (from / $elm$core$Array$branchFactor) | 0;
				var helper = F2(
					function (node, acc) {
						if (node.$ === 'SubTree') {
							var subTree = node.a;
							return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
						} else {
							var leaf = node.a;
							return A2($elm$core$List$cons, leaf, acc);
						}
					});
				var leafNodes = A3(
					$elm$core$Elm$JsArray$foldr,
					helper,
					_List_fromArray(
						[tail]),
					tree);
				var nodesToInsert = A2($elm$core$List$drop, skipNodes, leafNodes);
				if (!nodesToInsert.b) {
					return $elm$core$Array$empty;
				} else {
					var head = nodesToInsert.a;
					var rest = nodesToInsert.b;
					var firstSlice = from - (skipNodes * $elm$core$Array$branchFactor);
					var initialBuilder = {
						nodeList: _List_Nil,
						nodeListSize: 0,
						tail: A3(
							$elm$core$Elm$JsArray$slice,
							firstSlice,
							$elm$core$Elm$JsArray$length(head),
							head)
					};
					return A2(
						$elm$core$Array$builderToArray,
						true,
						A3($elm$core$List$foldl, $elm$core$Array$appendHelpBuilder, initialBuilder, rest));
				}
			}
		}
	});
var $elm$core$Array$fetchNewTail = F4(
	function (shift, end, treeEnd, tree) {
		fetchNewTail:
		while (true) {
			var pos = $elm$core$Array$bitMask & (treeEnd >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var sub = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$end = end,
					$temp$treeEnd = treeEnd,
					$temp$tree = sub;
				shift = $temp$shift;
				end = $temp$end;
				treeEnd = $temp$treeEnd;
				tree = $temp$tree;
				continue fetchNewTail;
			} else {
				var values = _v0.a;
				return A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, values);
			}
		}
	});
var $elm$core$Array$hoistTree = F3(
	function (oldShift, newShift, tree) {
		hoistTree:
		while (true) {
			if ((_Utils_cmp(oldShift, newShift) < 1) || (!$elm$core$Elm$JsArray$length(tree))) {
				return tree;
			} else {
				var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, 0, tree);
				if (_v0.$ === 'SubTree') {
					var sub = _v0.a;
					var $temp$oldShift = oldShift - $elm$core$Array$shiftStep,
						$temp$newShift = newShift,
						$temp$tree = sub;
					oldShift = $temp$oldShift;
					newShift = $temp$newShift;
					tree = $temp$tree;
					continue hoistTree;
				} else {
					return tree;
				}
			}
		}
	});
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$sliceTree = F3(
	function (shift, endIdx, tree) {
		var lastPos = $elm$core$Array$bitMask & (endIdx >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, lastPos, tree);
		if (_v0.$ === 'SubTree') {
			var sub = _v0.a;
			var newSub = A3($elm$core$Array$sliceTree, shift - $elm$core$Array$shiftStep, endIdx, sub);
			return (!$elm$core$Elm$JsArray$length(newSub)) ? A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree) : A3(
				$elm$core$Elm$JsArray$unsafeSet,
				lastPos,
				$elm$core$Array$SubTree(newSub),
				A3($elm$core$Elm$JsArray$slice, 0, lastPos + 1, tree));
		} else {
			return A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree);
		}
	});
var $elm$core$Array$sliceRight = F2(
	function (end, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		if (_Utils_eq(end, len)) {
			return array;
		} else {
			if (_Utils_cmp(
				end,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					startShift,
					tree,
					A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, tail));
			} else {
				var endIdx = $elm$core$Array$tailIndex(end);
				var depth = $elm$core$Basics$floor(
					A2(
						$elm$core$Basics$logBase,
						$elm$core$Array$branchFactor,
						A2($elm$core$Basics$max, 1, endIdx - 1)));
				var newShift = A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep);
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					newShift,
					A3(
						$elm$core$Array$hoistTree,
						startShift,
						newShift,
						A3($elm$core$Array$sliceTree, startShift, endIdx, tree)),
					A4($elm$core$Array$fetchNewTail, startShift, end, endIdx, tree));
			}
		}
	});
var $elm$core$Array$translateIndex = F2(
	function (index, _v0) {
		var len = _v0.a;
		var posIndex = (index < 0) ? (len + index) : index;
		return (posIndex < 0) ? 0 : ((_Utils_cmp(posIndex, len) > 0) ? len : posIndex);
	});
var $elm$core$Array$slice = F3(
	function (from, to, array) {
		var correctTo = A2($elm$core$Array$translateIndex, to, array);
		var correctFrom = A2($elm$core$Array$translateIndex, from, array);
		return (_Utils_cmp(correctFrom, correctTo) > 0) ? $elm$core$Array$empty : A2(
			$elm$core$Array$sliceLeft,
			correctFrom,
			A2($elm$core$Array$sliceRight, correctTo, array));
	});
var $elm$browser$Debugger$History$viewRecentSnapshots = F3(
	function (selectedIndex, recentMessagesNum, snapshots) {
		var messagesToFill = $elm$browser$Debugger$History$maxSnapshotSize - recentMessagesNum;
		var arrayLength = $elm$core$Array$length(snapshots);
		var snapshotsToRender = function () {
			var _v0 = _Utils_Tuple2(
				A2($elm$core$Array$get, arrayLength - 2, snapshots),
				A2($elm$core$Array$get, arrayLength - 1, snapshots));
			if ((_v0.a.$ === 'Just') && (_v0.b.$ === 'Just')) {
				var fillerSnapshot = _v0.a.a;
				var recentSnapshot = _v0.b.a;
				return $elm$core$Array$fromList(
					_List_fromArray(
						[
							{
							messages: A3($elm$core$Array$slice, 0, messagesToFill, fillerSnapshot.messages),
							model: fillerSnapshot.model
						},
							recentSnapshot
						]));
			} else {
				return snapshots;
			}
		}();
		var startingIndex = ((arrayLength * $elm$browser$Debugger$History$maxSnapshotSize) - $elm$browser$Debugger$History$maxSnapshotSize) - messagesToFill;
		return A3($elm$browser$Debugger$History$viewAllSnapshots, selectedIndex, startingIndex, snapshotsToRender);
	});
var $elm$browser$Debugger$History$view = F2(
	function (maybeIndex, _v0) {
		var snapshots = _v0.snapshots;
		var recent = _v0.recent;
		var numMessages = _v0.numMessages;
		var recentMessageStartIndex = numMessages - recent.numMessages;
		var index = A2($elm$core$Maybe$withDefault, -1, maybeIndex);
		var newStuff = A3(
			$elm$html$Html$Keyed$node,
			'div',
			_List_Nil,
			A3(
				$elm$core$List$foldr,
				$elm$browser$Debugger$History$consMsg(index),
				_Utils_Tuple2(recentMessageStartIndex, _List_Nil),
				recent.messages).b);
		var onlyRenderRecentMessages = (!_Utils_eq(index, -1)) || ($elm$core$Array$length(snapshots) < 2);
		var oldStuff = onlyRenderRecentMessages ? A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewAllSnapshots, index, 0, snapshots) : A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewRecentSnapshots, index, recent.numMessages, snapshots);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('elm-debugger-sidebar'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'overflow-y', 'auto'),
					A2($elm$html$Html$Attributes$style, 'height', 'calc(100% - 72px)')
				]),
			A2(
				$elm$core$List$cons,
				$elm$browser$Debugger$History$styles,
				A2(
					$elm$core$List$cons,
					newStuff,
					A2(
						$elm$core$List$cons,
						oldStuff,
						onlyRenderRecentMessages ? _List_Nil : _List_fromArray(
							[
								$elm$browser$Debugger$History$showMoreButton(numMessages)
							])))));
	});
var $elm$browser$Debugger$Main$SwapLayout = {$: 'SwapLayout'};
var $elm$browser$Debugger$Main$toHistoryIcon = function (layout) {
	if (layout.$ === 'Horizontal') {
		return 'M13 1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M13 3h-10a1 1 0 0 0-1 1v5h12v-5a1 1 0 0 0-1-1z M14 10h-12v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z';
	} else {
		return 'M0 4a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3z M2 4v8a1 1 0 0 0 1 1h2v-10h-2a1 1 0 0 0-1 1z M6 3v10h7a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z';
	}
};
var $elm$browser$Debugger$Main$icon = function (path) {
	return A4(
		$elm$virtual_dom$VirtualDom$nodeNS,
		'http://www.w3.org/2000/svg',
		'svg',
		_List_fromArray(
			[
				A2($elm$virtual_dom$VirtualDom$attribute, 'viewBox', '0 0 16 16'),
				A2($elm$virtual_dom$VirtualDom$attribute, 'xmlns', 'http://www.w3.org/2000/svg'),
				A2($elm$virtual_dom$VirtualDom$attribute, 'fill', 'currentColor'),
				A2($elm$virtual_dom$VirtualDom$attribute, 'width', '16px'),
				A2($elm$virtual_dom$VirtualDom$attribute, 'height', '16px')
			]),
		_List_fromArray(
			[
				A4(
				$elm$virtual_dom$VirtualDom$nodeNS,
				'http://www.w3.org/2000/svg',
				'path',
				_List_fromArray(
					[
						A2($elm$virtual_dom$VirtualDom$attribute, 'd', path)
					]),
				_List_Nil)
			]));
};
var $elm$browser$Debugger$Main$viewHistoryButton = F3(
	function (label, msg, path) {
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
					A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
					A2($elm$html$Html$Attributes$style, 'background', 'none'),
					A2($elm$html$Html$Attributes$style, 'border', 'none'),
					A2($elm$html$Html$Attributes$style, 'color', 'inherit'),
					A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
					$elm$html$Html$Events$onClick(msg)
				]),
			_List_fromArray(
				[
					$elm$browser$Debugger$Main$icon(path),
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'padding-left', '6px')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(label)
						]))
				]));
	});
var $elm$browser$Debugger$Main$viewHistoryOptions = function (layout) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'width', '100%'),
				A2($elm$html$Html$Attributes$style, 'height', '36px'),
				A2($elm$html$Html$Attributes$style, 'display', 'flex'),
				A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
				A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
				A2($elm$html$Html$Attributes$style, 'justify-content', 'space-between'),
				A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
			]),
		_List_fromArray(
			[
				A3(
				$elm$browser$Debugger$Main$viewHistoryButton,
				'Swap Layout',
				$elm$browser$Debugger$Main$SwapLayout,
				$elm$browser$Debugger$Main$toHistoryIcon(layout)),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'display', 'flex'),
						A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
						A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
						A2($elm$html$Html$Attributes$style, 'justify-content', 'space-between')
					]),
				_List_fromArray(
					[
						A3($elm$browser$Debugger$Main$viewHistoryButton, 'Import', $elm$browser$Debugger$Main$Import, 'M5 1a1 1 0 0 1 0 2h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1a1 1 0 0 1 2 0a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M10 2a1 1 0 0 0 -2 0v6a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2h-3.586l4.293-4.293a1 1 0 0 0-1.414-1.414l-4.293 4.293z'),
						A3($elm$browser$Debugger$Main$viewHistoryButton, 'Export', $elm$browser$Debugger$Main$Export, 'M5 1a1 1 0 0 1 0 2h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1 a1 1 0 0 1 2 0a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M9 3a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-3.586l-5.293 5.293 a1 1 0 0 1-1.414-1.414l5.293 -5.293z')
					]))
			]));
};
var $elm$browser$Debugger$Main$SliderJump = function (a) {
	return {$: 'SliderJump', a: a};
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$html$Html$input = _VirtualDom_node('input');
var $elm$browser$Debugger$Main$isPlaying = function (maybeIndex) {
	if (maybeIndex.$ === 'Nothing') {
		return true;
	} else {
		return false;
	}
};
var $elm$html$Html$Attributes$max = $elm$html$Html$Attributes$stringProperty('max');
var $elm$html$Html$Attributes$min = $elm$html$Html$Attributes$stringProperty('min');
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$json$Json$Decode$string = _Json_decodeString;
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $elm$core$String$toInt = _String_toInt;
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $elm$browser$Debugger$Main$viewPlayButton = function (playing) {
	return A2(
		$elm$html$Html$button,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'background', '#1293D8'),
				A2($elm$html$Html$Attributes$style, 'border', 'none'),
				A2($elm$html$Html$Attributes$style, 'color', 'white'),
				A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
				A2($elm$html$Html$Attributes$style, 'width', '36px'),
				A2($elm$html$Html$Attributes$style, 'height', '36px'),
				$elm$html$Html$Events$onClick($elm$browser$Debugger$Main$Resume)
			]),
		_List_fromArray(
			[
				playing ? $elm$browser$Debugger$Main$icon('M2 2h4v12h-4v-12z M10 2h4v12h-4v-12z') : $elm$browser$Debugger$Main$icon('M2 2l12 7l-12 7z')
			]));
};
var $elm$browser$Debugger$Main$viewHistorySlider = F2(
	function (history, maybeIndex) {
		var lastIndex = $elm$browser$Debugger$History$size(history) - 1;
		var selectedIndex = A2($elm$core$Maybe$withDefault, lastIndex, maybeIndex);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
					A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'height', '36px'),
					A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$Lazy$lazy,
					$elm$browser$Debugger$Main$viewPlayButton,
					$elm$browser$Debugger$Main$isPlaying(maybeIndex)),
					A2(
					$elm$html$Html$input,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('range'),
							A2($elm$html$Html$Attributes$style, 'width', 'calc(100% - 56px)'),
							A2($elm$html$Html$Attributes$style, 'height', '36px'),
							A2($elm$html$Html$Attributes$style, 'margin', '0 10px'),
							$elm$html$Html$Attributes$min('0'),
							$elm$html$Html$Attributes$max(
							$elm$core$String$fromInt(lastIndex)),
							$elm$html$Html$Attributes$value(
							$elm$core$String$fromInt(selectedIndex)),
							$elm$html$Html$Events$onInput(
							A2(
								$elm$core$Basics$composeR,
								$elm$core$String$toInt,
								A2(
									$elm$core$Basics$composeR,
									$elm$core$Maybe$withDefault(lastIndex),
									$elm$browser$Debugger$Main$SliderJump)))
						]),
					_List_Nil)
				]));
	});
var $elm$browser$Debugger$Main$viewHistory = F3(
	function (maybeIndex, history, layout) {
		var block = $elm$browser$Debugger$Main$toMouseBlocker(layout);
		var _v0 = $elm$browser$Debugger$Main$toHistoryPercents(layout);
		var w = _v0.a;
		var h = _v0.b;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'width', w),
					A2($elm$html$Html$Attributes$style, 'height', h),
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'flex-direction', 'column'),
					A2($elm$html$Html$Attributes$style, 'color', '#DDDDDD'),
					A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(61, 61, 61)'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', block),
					A2($elm$html$Html$Attributes$style, 'user-select', block)
				]),
			_List_fromArray(
				[
					A2($elm$browser$Debugger$Main$viewHistorySlider, history, maybeIndex),
					A2(
					$elm$html$Html$map,
					$elm$browser$Debugger$Main$Jump,
					A2($elm$browser$Debugger$History$view, maybeIndex, history)),
					A2($elm$html$Html$Lazy$lazy, $elm$browser$Debugger$Main$viewHistoryOptions, layout)
				]));
	});
var $elm$browser$Debugger$Main$popoutView = function (model) {
	var maybeIndex = function () {
		var _v0 = model.state;
		if (_v0.$ === 'Running') {
			return $elm$core$Maybe$Nothing;
		} else {
			var index = _v0.a;
			return $elm$core$Maybe$Just(index);
		}
	}();
	var historyToRender = $elm$browser$Debugger$Main$cachedHistory(model);
	return A3(
		$elm$html$Html$node,
		'body',
		_Utils_ap(
			$elm$browser$Debugger$Main$toDragListeners(model.layout),
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin', '0'),
					A2($elm$html$Html$Attributes$style, 'padding', '0'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'height', '100%'),
					A2($elm$html$Html$Attributes$style, 'font-family', 'monospace'),
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2(
					$elm$html$Html$Attributes$style,
					'flex-direction',
					$elm$browser$Debugger$Main$toFlexDirection(model.layout))
				])),
		_List_fromArray(
			[
				A3($elm$browser$Debugger$Main$viewHistory, maybeIndex, historyToRender, model.layout),
				$elm$browser$Debugger$Main$viewDragZone(model.layout),
				A3($elm$browser$Debugger$Main$viewExpando, model.expandoMsg, model.expandoModel, model.layout)
			]));
};
var $elm$browser$Debugger$Overlay$BlockAll = {$: 'BlockAll'};
var $elm$browser$Debugger$Overlay$toBlockerType = F2(
	function (isPaused, state) {
		switch (state.$) {
			case 'None':
				return isPaused ? $elm$browser$Debugger$Overlay$BlockAll : $elm$browser$Debugger$Overlay$BlockNone;
			case 'BadMetadata':
				return $elm$browser$Debugger$Overlay$BlockMost;
			case 'BadImport':
				return $elm$browser$Debugger$Overlay$BlockMost;
			default:
				return $elm$browser$Debugger$Overlay$BlockMost;
		}
	});
var $elm$browser$Debugger$Main$toBlockerType = function (model) {
	return A2(
		$elm$browser$Debugger$Overlay$toBlockerType,
		$elm$browser$Debugger$Main$isPaused(model.state),
		model.overlay);
};
var $elm$browser$Debugger$Main$Horizontal = F3(
	function (a, b, c) {
		return {$: 'Horizontal', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Main$Running = function (a) {
	return {$: 'Running', a: a};
};
var $elm$browser$Debugger$Main$Static = {$: 'Static'};
var $elm$browser$Debugger$Metadata$Error = F2(
	function (message, problems) {
		return {message: message, problems: problems};
	});
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $elm$browser$Debugger$Metadata$Metadata = F2(
	function (versions, types) {
		return {types: types, versions: versions};
	});
var $elm$browser$Debugger$Metadata$Types = F3(
	function (message, aliases, unions) {
		return {aliases: aliases, message: message, unions: unions};
	});
var $elm$browser$Debugger$Metadata$Alias = F2(
	function (args, tipe) {
		return {args: args, tipe: tipe};
	});
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$browser$Debugger$Metadata$decodeAlias = A3(
	$elm$json$Json$Decode$map2,
	$elm$browser$Debugger$Metadata$Alias,
	A2(
		$elm$json$Json$Decode$field,
		'args',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2($elm$json$Json$Decode$field, 'type', $elm$json$Json$Decode$string));
var $elm$browser$Debugger$Metadata$Union = F2(
	function (args, tags) {
		return {args: args, tags: tags};
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var $elm$json$Json$Decode$dict = function (decoder) {
	return A2(
		$elm$json$Json$Decode$map,
		$elm$core$Dict$fromList,
		$elm$json$Json$Decode$keyValuePairs(decoder));
};
var $elm$browser$Debugger$Metadata$decodeUnion = A3(
	$elm$json$Json$Decode$map2,
	$elm$browser$Debugger$Metadata$Union,
	A2(
		$elm$json$Json$Decode$field,
		'args',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2(
		$elm$json$Json$Decode$field,
		'tags',
		$elm$json$Json$Decode$dict(
			$elm$json$Json$Decode$list($elm$json$Json$Decode$string))));
var $elm$json$Json$Decode$map3 = _Json_map3;
var $elm$browser$Debugger$Metadata$decodeTypes = A4(
	$elm$json$Json$Decode$map3,
	$elm$browser$Debugger$Metadata$Types,
	A2($elm$json$Json$Decode$field, 'message', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'aliases',
		$elm$json$Json$Decode$dict($elm$browser$Debugger$Metadata$decodeAlias)),
	A2(
		$elm$json$Json$Decode$field,
		'unions',
		$elm$json$Json$Decode$dict($elm$browser$Debugger$Metadata$decodeUnion)));
var $elm$browser$Debugger$Metadata$Versions = function (elm) {
	return {elm: elm};
};
var $elm$browser$Debugger$Metadata$decodeVersions = A2(
	$elm$json$Json$Decode$map,
	$elm$browser$Debugger$Metadata$Versions,
	A2($elm$json$Json$Decode$field, 'elm', $elm$json$Json$Decode$string));
var $elm$browser$Debugger$Metadata$decoder = A3(
	$elm$json$Json$Decode$map2,
	$elm$browser$Debugger$Metadata$Metadata,
	A2($elm$json$Json$Decode$field, 'versions', $elm$browser$Debugger$Metadata$decodeVersions),
	A2($elm$json$Json$Decode$field, 'types', $elm$browser$Debugger$Metadata$decodeTypes));
var $elm$browser$Debugger$Metadata$ProblemType = F2(
	function (name, problems) {
		return {name: name, problems: problems};
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$core$String$contains = _String_contains;
var $elm$browser$Debugger$Metadata$hasProblem = F2(
	function (tipe, _v0) {
		var problem = _v0.a;
		var token = _v0.b;
		return A2($elm$core$String$contains, token, tipe) ? $elm$core$Maybe$Just(problem) : $elm$core$Maybe$Nothing;
	});
var $elm$browser$Debugger$Metadata$Decoder = {$: 'Decoder'};
var $elm$browser$Debugger$Metadata$Function = {$: 'Function'};
var $elm$browser$Debugger$Metadata$Process = {$: 'Process'};
var $elm$browser$Debugger$Metadata$Program = {$: 'Program'};
var $elm$browser$Debugger$Metadata$Request = {$: 'Request'};
var $elm$browser$Debugger$Metadata$Socket = {$: 'Socket'};
var $elm$browser$Debugger$Metadata$Task = {$: 'Task'};
var $elm$browser$Debugger$Metadata$VirtualDom = {$: 'VirtualDom'};
var $elm$browser$Debugger$Metadata$problemTable = _List_fromArray(
	[
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Function, '->'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Decoder, 'Json.Decode.Decoder'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Task, 'Task.Task'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Process, 'Process.Id'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Socket, 'WebSocket.LowLevel.WebSocket'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Request, 'Http.Request'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Program, 'Platform.Program'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$VirtualDom, 'VirtualDom.Node'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$VirtualDom, 'VirtualDom.Attribute')
	]);
var $elm$browser$Debugger$Metadata$findProblems = function (tipe) {
	return A2(
		$elm$core$List$filterMap,
		$elm$browser$Debugger$Metadata$hasProblem(tipe),
		$elm$browser$Debugger$Metadata$problemTable);
};
var $elm$browser$Debugger$Metadata$collectBadAliases = F3(
	function (name, _v0, list) {
		var tipe = _v0.tipe;
		var _v1 = $elm$browser$Debugger$Metadata$findProblems(tipe);
		if (!_v1.b) {
			return list;
		} else {
			var problems = _v1;
			return A2(
				$elm$core$List$cons,
				A2($elm$browser$Debugger$Metadata$ProblemType, name, problems),
				list);
		}
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $elm$core$Dict$values = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2($elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var $elm$browser$Debugger$Metadata$collectBadUnions = F3(
	function (name, _v0, list) {
		var tags = _v0.tags;
		var _v1 = A2(
			$elm$core$List$concatMap,
			$elm$browser$Debugger$Metadata$findProblems,
			$elm$core$List$concat(
				$elm$core$Dict$values(tags)));
		if (!_v1.b) {
			return list;
		} else {
			var problems = _v1;
			return A2(
				$elm$core$List$cons,
				A2($elm$browser$Debugger$Metadata$ProblemType, name, problems),
				list);
		}
	});
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$browser$Debugger$Metadata$isPortable = function (_v0) {
	var types = _v0.types;
	var badAliases = A3($elm$core$Dict$foldl, $elm$browser$Debugger$Metadata$collectBadAliases, _List_Nil, types.aliases);
	var _v1 = A3($elm$core$Dict$foldl, $elm$browser$Debugger$Metadata$collectBadUnions, badAliases, types.unions);
	if (!_v1.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var problems = _v1;
		return $elm$core$Maybe$Just(
			A2($elm$browser$Debugger$Metadata$Error, types.message, problems));
	}
};
var $elm$browser$Debugger$Metadata$decode = function (value) {
	var _v0 = A2($elm$json$Json$Decode$decodeValue, $elm$browser$Debugger$Metadata$decoder, value);
	if (_v0.$ === 'Err') {
		return $elm$core$Result$Err(
			A2($elm$browser$Debugger$Metadata$Error, 'The compiler is generating bad metadata. This is a compiler bug!', _List_Nil));
	} else {
		var metadata = _v0.a;
		var _v1 = $elm$browser$Debugger$Metadata$isPortable(metadata);
		if (_v1.$ === 'Nothing') {
			return $elm$core$Result$Ok(metadata);
		} else {
			var error = _v1.a;
			return $elm$core$Result$Err(error);
		}
	}
};
var $elm$browser$Debugger$History$History = F3(
	function (snapshots, recent, numMessages) {
		return {numMessages: numMessages, recent: recent, snapshots: snapshots};
	});
var $elm$browser$Debugger$History$RecentHistory = F3(
	function (model, messages, numMessages) {
		return {messages: messages, model: model, numMessages: numMessages};
	});
var $elm$browser$Debugger$History$empty = function (model) {
	return A3(
		$elm$browser$Debugger$History$History,
		$elm$core$Array$empty,
		A3($elm$browser$Debugger$History$RecentHistory, model, _List_Nil, 0),
		0);
};
var $elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2($elm$core$Dict$map, func, left),
				A2($elm$core$Dict$map, func, right));
		}
	});
var $elm$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var left = dict.d;
				var right = dict.e;
				var $temp$n = A2($elm$core$Dict$sizeHelp, n + 1, right),
					$temp$dict = left;
				n = $temp$n;
				dict = $temp$dict;
				continue sizeHelp;
			}
		}
	});
var $elm$core$Dict$size = function (dict) {
	return A2($elm$core$Dict$sizeHelp, 0, dict);
};
var $elm$browser$Debugger$Expando$initHelp = F2(
	function (isOuter, expando) {
		switch (expando.$) {
			case 'S':
				return expando;
			case 'Primitive':
				return expando;
			case 'Sequence':
				var seqType = expando.a;
				var isClosed = expando.b;
				var items = expando.c;
				return isOuter ? A3(
					$elm$browser$Debugger$Expando$Sequence,
					seqType,
					false,
					A2(
						$elm$core$List$map,
						$elm$browser$Debugger$Expando$initHelp(false),
						items)) : (($elm$core$List$length(items) <= 8) ? A3($elm$browser$Debugger$Expando$Sequence, seqType, false, items) : expando);
			case 'Dictionary':
				var isClosed = expando.a;
				var keyValuePairs = expando.b;
				return isOuter ? A2(
					$elm$browser$Debugger$Expando$Dictionary,
					false,
					A2(
						$elm$core$List$map,
						function (_v1) {
							var k = _v1.a;
							var v = _v1.b;
							return _Utils_Tuple2(
								k,
								A2($elm$browser$Debugger$Expando$initHelp, false, v));
						},
						keyValuePairs)) : (($elm$core$List$length(keyValuePairs) <= 8) ? A2($elm$browser$Debugger$Expando$Dictionary, false, keyValuePairs) : expando);
			case 'Record':
				var isClosed = expando.a;
				var entries = expando.b;
				return isOuter ? A2(
					$elm$browser$Debugger$Expando$Record,
					false,
					A2(
						$elm$core$Dict$map,
						F2(
							function (_v2, v) {
								return A2($elm$browser$Debugger$Expando$initHelp, false, v);
							}),
						entries)) : (($elm$core$Dict$size(entries) <= 4) ? A2($elm$browser$Debugger$Expando$Record, false, entries) : expando);
			default:
				var maybeName = expando.a;
				var isClosed = expando.b;
				var args = expando.c;
				return isOuter ? A3(
					$elm$browser$Debugger$Expando$Constructor,
					maybeName,
					false,
					A2(
						$elm$core$List$map,
						$elm$browser$Debugger$Expando$initHelp(false),
						args)) : (($elm$core$List$length(args) <= 4) ? A3($elm$browser$Debugger$Expando$Constructor, maybeName, false, args) : expando);
		}
	});
var $elm$browser$Debugger$Expando$init = function (value) {
	return A2(
		$elm$browser$Debugger$Expando$initHelp,
		true,
		_Debugger_init(value));
};
var $elm$core$Platform$Cmd$map = _Platform_map;
var $elm$browser$Debugger$Overlay$None = {$: 'None'};
var $elm$browser$Debugger$Overlay$none = $elm$browser$Debugger$Overlay$None;
var $elm$browser$Debugger$Main$wrapInit = F4(
	function (metadata, popout, init, flags) {
		var _v0 = init(flags);
		var userModel = _v0.a;
		var userCommands = _v0.b;
		return _Utils_Tuple2(
			{
				expandoModel: $elm$browser$Debugger$Expando$init(userModel),
				expandoMsg: $elm$browser$Debugger$Expando$init(_Utils_Tuple0),
				history: $elm$browser$Debugger$History$empty(userModel),
				layout: A3($elm$browser$Debugger$Main$Horizontal, $elm$browser$Debugger$Main$Static, 0.3, 0.5),
				metadata: $elm$browser$Debugger$Metadata$decode(metadata),
				overlay: $elm$browser$Debugger$Overlay$none,
				popout: popout,
				state: $elm$browser$Debugger$Main$Running(userModel)
			},
			A2($elm$core$Platform$Cmd$map, $elm$browser$Debugger$Main$UserMsg, userCommands));
	});
var $elm$browser$Debugger$Main$getLatestModel = function (state) {
	if (state.$ === 'Running') {
		var model = state.a;
		return model;
	} else {
		var model = state.c;
		return model;
	}
};
var $elm$core$Platform$Sub$map = _Platform_map;
var $elm$browser$Debugger$Main$wrapSubs = F2(
	function (subscriptions, model) {
		return A2(
			$elm$core$Platform$Sub$map,
			$elm$browser$Debugger$Main$UserMsg,
			subscriptions(
				$elm$browser$Debugger$Main$getLatestModel(model.state)));
	});
var $elm$browser$Debugger$Main$Moving = {$: 'Moving'};
var $elm$browser$Debugger$Main$Paused = F5(
	function (a, b, c, d, e) {
		return {$: 'Paused', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$browser$Debugger$History$Snapshot = F2(
	function (model, messages) {
		return {messages: messages, model: model};
	});
var $elm$browser$Debugger$History$addRecent = F3(
	function (msg, newModel, _v0) {
		var model = _v0.model;
		var messages = _v0.messages;
		var numMessages = _v0.numMessages;
		return _Utils_eq(numMessages, $elm$browser$Debugger$History$maxSnapshotSize) ? _Utils_Tuple2(
			$elm$core$Maybe$Just(
				A2(
					$elm$browser$Debugger$History$Snapshot,
					model,
					$elm$core$Array$fromList(messages))),
			A3(
				$elm$browser$Debugger$History$RecentHistory,
				newModel,
				_List_fromArray(
					[msg]),
				1)) : _Utils_Tuple2(
			$elm$core$Maybe$Nothing,
			A3(
				$elm$browser$Debugger$History$RecentHistory,
				model,
				A2($elm$core$List$cons, msg, messages),
				numMessages + 1));
	});
var $elm$core$Elm$JsArray$push = _JsArray_push;
var $elm$core$Elm$JsArray$singleton = _JsArray_singleton;
var $elm$core$Array$insertTailInTree = F4(
	function (shift, index, tail, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		if (_Utils_cmp(
			pos,
			$elm$core$Elm$JsArray$length(tree)) > -1) {
			if (shift === 5) {
				return A2(
					$elm$core$Elm$JsArray$push,
					$elm$core$Array$Leaf(tail),
					tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, $elm$core$Elm$JsArray$empty));
				return A2($elm$core$Elm$JsArray$push, newSub, tree);
			}
		} else {
			var value = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (value.$ === 'SubTree') {
				var subTree = value.a;
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, subTree));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4(
						$elm$core$Array$insertTailInTree,
						shift - $elm$core$Array$shiftStep,
						index,
						tail,
						$elm$core$Elm$JsArray$singleton(value)));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			}
		}
	});
var $elm$core$Array$unsafeReplaceTail = F2(
	function (newTail, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		var originalTailLen = $elm$core$Elm$JsArray$length(tail);
		var newTailLen = $elm$core$Elm$JsArray$length(newTail);
		var newArrayLen = len + (newTailLen - originalTailLen);
		if (_Utils_eq(newTailLen, $elm$core$Array$branchFactor)) {
			var overflow = _Utils_cmp(newArrayLen >>> $elm$core$Array$shiftStep, 1 << startShift) > 0;
			if (overflow) {
				var newShift = startShift + $elm$core$Array$shiftStep;
				var newTree = A4(
					$elm$core$Array$insertTailInTree,
					newShift,
					len,
					newTail,
					$elm$core$Elm$JsArray$singleton(
						$elm$core$Array$SubTree(tree)));
				return A4($elm$core$Array$Array_elm_builtin, newArrayLen, newShift, newTree, $elm$core$Elm$JsArray$empty);
			} else {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					newArrayLen,
					startShift,
					A4($elm$core$Array$insertTailInTree, startShift, len, newTail, tree),
					$elm$core$Elm$JsArray$empty);
			}
		} else {
			return A4($elm$core$Array$Array_elm_builtin, newArrayLen, startShift, tree, newTail);
		}
	});
var $elm$core$Array$push = F2(
	function (a, array) {
		var tail = array.d;
		return A2(
			$elm$core$Array$unsafeReplaceTail,
			A2($elm$core$Elm$JsArray$push, a, tail),
			array);
	});
var $elm$browser$Debugger$History$add = F3(
	function (msg, model, _v0) {
		var snapshots = _v0.snapshots;
		var recent = _v0.recent;
		var numMessages = _v0.numMessages;
		var _v1 = A3($elm$browser$Debugger$History$addRecent, msg, model, recent);
		if (_v1.a.$ === 'Just') {
			var snapshot = _v1.a.a;
			var newRecent = _v1.b;
			return A3(
				$elm$browser$Debugger$History$History,
				A2($elm$core$Array$push, snapshot, snapshots),
				newRecent,
				numMessages + 1);
		} else {
			var _v2 = _v1.a;
			var newRecent = _v1.b;
			return A3($elm$browser$Debugger$History$History, snapshots, newRecent, numMessages + 1);
		}
	});
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$browser$Debugger$Overlay$BadImport = function (a) {
	return {$: 'BadImport', a: a};
};
var $elm$browser$Debugger$Overlay$RiskyImport = F2(
	function (a, b) {
		return {$: 'RiskyImport', a: a, b: b};
	});
var $elm$browser$Debugger$Report$VersionChanged = F2(
	function (a, b) {
		return {$: 'VersionChanged', a: a, b: b};
	});
var $elm$browser$Debugger$Report$MessageChanged = F2(
	function (a, b) {
		return {$: 'MessageChanged', a: a, b: b};
	});
var $elm$browser$Debugger$Report$SomethingChanged = function (a) {
	return {$: 'SomethingChanged', a: a};
};
var $elm$browser$Debugger$Report$AliasChange = function (a) {
	return {$: 'AliasChange', a: a};
};
var $elm$browser$Debugger$Metadata$checkAlias = F4(
	function (name, old, _new, changes) {
		return (_Utils_eq(old.tipe, _new.tipe) && _Utils_eq(old.args, _new.args)) ? changes : A2(
			$elm$core$List$cons,
			$elm$browser$Debugger$Report$AliasChange(name),
			changes);
	});
var $elm$browser$Debugger$Report$UnionChange = F2(
	function (a, b) {
		return {$: 'UnionChange', a: a, b: b};
	});
var $elm$browser$Debugger$Metadata$addTag = F3(
	function (tag, _v0, changes) {
		return _Utils_update(
			changes,
			{
				added: A2($elm$core$List$cons, tag, changes.added)
			});
	});
var $elm$browser$Debugger$Metadata$checkTag = F4(
	function (tag, old, _new, changes) {
		return _Utils_eq(old, _new) ? changes : _Utils_update(
			changes,
			{
				changed: A2($elm$core$List$cons, tag, changes.changed)
			});
	});
var $elm$browser$Debugger$Report$TagChanges = F4(
	function (removed, changed, added, argsMatch) {
		return {added: added, argsMatch: argsMatch, changed: changed, removed: removed};
	});
var $elm$browser$Debugger$Report$emptyTagChanges = function (argsMatch) {
	return A4($elm$browser$Debugger$Report$TagChanges, _List_Nil, _List_Nil, _List_Nil, argsMatch);
};
var $elm$browser$Debugger$Report$hasTagChanges = function (tagChanges) {
	return _Utils_eq(
		tagChanges,
		A4($elm$browser$Debugger$Report$TagChanges, _List_Nil, _List_Nil, _List_Nil, true));
};
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$browser$Debugger$Metadata$removeTag = F3(
	function (tag, _v0, changes) {
		return _Utils_update(
			changes,
			{
				removed: A2($elm$core$List$cons, tag, changes.removed)
			});
	});
var $elm$browser$Debugger$Metadata$checkUnion = F4(
	function (name, old, _new, changes) {
		var tagChanges = A6(
			$elm$core$Dict$merge,
			$elm$browser$Debugger$Metadata$removeTag,
			$elm$browser$Debugger$Metadata$checkTag,
			$elm$browser$Debugger$Metadata$addTag,
			old.tags,
			_new.tags,
			$elm$browser$Debugger$Report$emptyTagChanges(
				_Utils_eq(old.args, _new.args)));
		return $elm$browser$Debugger$Report$hasTagChanges(tagChanges) ? changes : A2(
			$elm$core$List$cons,
			A2($elm$browser$Debugger$Report$UnionChange, name, tagChanges),
			changes);
	});
var $elm$browser$Debugger$Metadata$ignore = F3(
	function (key, value, report) {
		return report;
	});
var $elm$browser$Debugger$Metadata$checkTypes = F2(
	function (old, _new) {
		return (!_Utils_eq(old.message, _new.message)) ? A2($elm$browser$Debugger$Report$MessageChanged, old.message, _new.message) : $elm$browser$Debugger$Report$SomethingChanged(
			A6(
				$elm$core$Dict$merge,
				$elm$browser$Debugger$Metadata$ignore,
				$elm$browser$Debugger$Metadata$checkUnion,
				$elm$browser$Debugger$Metadata$ignore,
				old.unions,
				_new.unions,
				A6($elm$core$Dict$merge, $elm$browser$Debugger$Metadata$ignore, $elm$browser$Debugger$Metadata$checkAlias, $elm$browser$Debugger$Metadata$ignore, old.aliases, _new.aliases, _List_Nil)));
	});
var $elm$browser$Debugger$Metadata$check = F2(
	function (old, _new) {
		return (!_Utils_eq(old.versions.elm, _new.versions.elm)) ? A2($elm$browser$Debugger$Report$VersionChanged, old.versions.elm, _new.versions.elm) : A2($elm$browser$Debugger$Metadata$checkTypes, old.types, _new.types);
	});
var $elm$browser$Debugger$Report$CorruptHistory = {$: 'CorruptHistory'};
var $elm$browser$Debugger$Overlay$corruptImport = $elm$browser$Debugger$Overlay$BadImport($elm$browser$Debugger$Report$CorruptHistory);
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$browser$Debugger$Report$Fine = {$: 'Fine'};
var $elm$browser$Debugger$Report$Impossible = {$: 'Impossible'};
var $elm$browser$Debugger$Report$Risky = {$: 'Risky'};
var $elm$core$Basics$not = _Basics_not;
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$browser$Debugger$Report$some = function (list) {
	return !$elm$core$List$isEmpty(list);
};
var $elm$browser$Debugger$Report$evaluateChange = function (change) {
	if (change.$ === 'AliasChange') {
		return $elm$browser$Debugger$Report$Impossible;
	} else {
		var removed = change.b.removed;
		var changed = change.b.changed;
		var added = change.b.added;
		var argsMatch = change.b.argsMatch;
		return ((!argsMatch) || ($elm$browser$Debugger$Report$some(changed) || $elm$browser$Debugger$Report$some(removed))) ? $elm$browser$Debugger$Report$Impossible : ($elm$browser$Debugger$Report$some(added) ? $elm$browser$Debugger$Report$Risky : $elm$browser$Debugger$Report$Fine);
	}
};
var $elm$browser$Debugger$Report$worstCase = F2(
	function (status, statusList) {
		worstCase:
		while (true) {
			if (!statusList.b) {
				return status;
			} else {
				switch (statusList.a.$) {
					case 'Impossible':
						var _v1 = statusList.a;
						return $elm$browser$Debugger$Report$Impossible;
					case 'Risky':
						var _v2 = statusList.a;
						var rest = statusList.b;
						var $temp$status = $elm$browser$Debugger$Report$Risky,
							$temp$statusList = rest;
						status = $temp$status;
						statusList = $temp$statusList;
						continue worstCase;
					default:
						var _v3 = statusList.a;
						var rest = statusList.b;
						var $temp$status = status,
							$temp$statusList = rest;
						status = $temp$status;
						statusList = $temp$statusList;
						continue worstCase;
				}
			}
		}
	});
var $elm$browser$Debugger$Report$evaluate = function (report) {
	switch (report.$) {
		case 'CorruptHistory':
			return $elm$browser$Debugger$Report$Impossible;
		case 'VersionChanged':
			return $elm$browser$Debugger$Report$Impossible;
		case 'MessageChanged':
			return $elm$browser$Debugger$Report$Impossible;
		default:
			var changes = report.a;
			return A2(
				$elm$browser$Debugger$Report$worstCase,
				$elm$browser$Debugger$Report$Fine,
				A2($elm$core$List$map, $elm$browser$Debugger$Report$evaluateChange, changes));
	}
};
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $elm$browser$Debugger$Overlay$uploadDecoder = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (x, y) {
			return _Utils_Tuple2(x, y);
		}),
	A2($elm$json$Json$Decode$field, 'metadata', $elm$browser$Debugger$Metadata$decoder),
	A2($elm$json$Json$Decode$field, 'history', $elm$json$Json$Decode$value));
var $elm$browser$Debugger$Overlay$assessImport = F2(
	function (metadata, jsonString) {
		var _v0 = A2($elm$json$Json$Decode$decodeString, $elm$browser$Debugger$Overlay$uploadDecoder, jsonString);
		if (_v0.$ === 'Err') {
			return $elm$core$Result$Err($elm$browser$Debugger$Overlay$corruptImport);
		} else {
			var _v1 = _v0.a;
			var foreignMetadata = _v1.a;
			var rawHistory = _v1.b;
			var report = A2($elm$browser$Debugger$Metadata$check, foreignMetadata, metadata);
			var _v2 = $elm$browser$Debugger$Report$evaluate(report);
			switch (_v2.$) {
				case 'Impossible':
					return $elm$core$Result$Err(
						$elm$browser$Debugger$Overlay$BadImport(report));
				case 'Risky':
					return $elm$core$Result$Err(
						A2($elm$browser$Debugger$Overlay$RiskyImport, report, rawHistory));
				default:
					return $elm$core$Result$Ok(rawHistory);
			}
		}
	});
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$browser$Debugger$Overlay$close = F2(
	function (msg, state) {
		switch (state.$) {
			case 'None':
				return $elm$core$Maybe$Nothing;
			case 'BadMetadata':
				return $elm$core$Maybe$Nothing;
			case 'BadImport':
				return $elm$core$Maybe$Nothing;
			default:
				var rawHistory = state.b;
				if (msg.$ === 'Cancel') {
					return $elm$core$Maybe$Nothing;
				} else {
					return $elm$core$Maybe$Just(rawHistory);
				}
		}
	});
var $elm$browser$Debugger$History$elmToJs = A2($elm$core$Basics$composeR, _Json_wrap, _Debugger_unsafeCoerce);
var $elm$browser$Debugger$History$encodeHelp = F2(
	function (snapshot, allMessages) {
		return A3($elm$core$Array$foldl, $elm$core$List$cons, allMessages, snapshot.messages);
	});
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $elm$browser$Debugger$History$encode = function (_v0) {
	var snapshots = _v0.snapshots;
	var recent = _v0.recent;
	return A2(
		$elm$json$Json$Encode$list,
		$elm$browser$Debugger$History$elmToJs,
		A3(
			$elm$core$Array$foldr,
			$elm$browser$Debugger$History$encodeHelp,
			$elm$core$List$reverse(recent.messages),
			snapshots));
};
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $elm$browser$Debugger$Metadata$encodeAlias = function (_v0) {
	var args = _v0.args;
	var tipe = _v0.tipe;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'args',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, args)),
				_Utils_Tuple2(
				'type',
				$elm$json$Json$Encode$string(tipe))
			]));
};
var $elm$browser$Debugger$Metadata$encodeDict = F2(
	function (f, dict) {
		return $elm$json$Json$Encode$object(
			$elm$core$Dict$toList(
				A2(
					$elm$core$Dict$map,
					F2(
						function (key, value) {
							return f(value);
						}),
					dict)));
	});
var $elm$browser$Debugger$Metadata$encodeUnion = function (_v0) {
	var args = _v0.args;
	var tags = _v0.tags;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'args',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, args)),
				_Utils_Tuple2(
				'tags',
				A2(
					$elm$browser$Debugger$Metadata$encodeDict,
					$elm$json$Json$Encode$list($elm$json$Json$Encode$string),
					tags))
			]));
};
var $elm$browser$Debugger$Metadata$encodeTypes = function (_v0) {
	var message = _v0.message;
	var unions = _v0.unions;
	var aliases = _v0.aliases;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'message',
				$elm$json$Json$Encode$string(message)),
				_Utils_Tuple2(
				'aliases',
				A2($elm$browser$Debugger$Metadata$encodeDict, $elm$browser$Debugger$Metadata$encodeAlias, aliases)),
				_Utils_Tuple2(
				'unions',
				A2($elm$browser$Debugger$Metadata$encodeDict, $elm$browser$Debugger$Metadata$encodeUnion, unions))
			]));
};
var $elm$browser$Debugger$Metadata$encodeVersions = function (_v0) {
	var elm = _v0.elm;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'elm',
				$elm$json$Json$Encode$string(elm))
			]));
};
var $elm$browser$Debugger$Metadata$encode = function (_v0) {
	var versions = _v0.versions;
	var types = _v0.types;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'versions',
				$elm$browser$Debugger$Metadata$encodeVersions(versions)),
				_Utils_Tuple2(
				'types',
				$elm$browser$Debugger$Metadata$encodeTypes(types))
			]));
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Debugger$Main$download = F2(
	function (metadata, history) {
		var historyLength = $elm$browser$Debugger$History$size(history);
		return A2(
			$elm$core$Task$perform,
			function (_v0) {
				return $elm$browser$Debugger$Main$NoOp;
			},
			A2(
				_Debugger_download,
				historyLength,
				_Json_unwrap(
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'metadata',
								$elm$browser$Debugger$Metadata$encode(metadata)),
								_Utils_Tuple2(
								'history',
								$elm$browser$Debugger$History$encode(history))
							])))));
	});
var $elm$browser$Debugger$Main$Vertical = F3(
	function (a, b, c) {
		return {$: 'Vertical', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Main$drag = F2(
	function (info, layout) {
		if (layout.$ === 'Horizontal') {
			var status = layout.a;
			var y = layout.c;
			return A3($elm$browser$Debugger$Main$Horizontal, status, info.x / info.width, y);
		} else {
			var status = layout.a;
			var x = layout.b;
			return A3($elm$browser$Debugger$Main$Vertical, status, x, info.y / info.height);
		}
	});
var $elm$browser$Debugger$History$Stepping = F2(
	function (a, b) {
		return {$: 'Stepping', a: a, b: b};
	});
var $elm$browser$Debugger$History$Done = F2(
	function (a, b) {
		return {$: 'Done', a: a, b: b};
	});
var $elm$browser$Debugger$History$getHelp = F3(
	function (update, msg, getResult) {
		if (getResult.$ === 'Done') {
			return getResult;
		} else {
			var n = getResult.a;
			var model = getResult.b;
			return (!n) ? A2(
				$elm$browser$Debugger$History$Done,
				msg,
				A2(update, msg, model).a) : A2(
				$elm$browser$Debugger$History$Stepping,
				n - 1,
				A2(update, msg, model).a);
		}
	});
var $elm$browser$Debugger$History$undone = function (getResult) {
	undone:
	while (true) {
		if (getResult.$ === 'Done') {
			var msg = getResult.a;
			var model = getResult.b;
			return _Utils_Tuple2(model, msg);
		} else {
			var $temp$getResult = getResult;
			getResult = $temp$getResult;
			continue undone;
		}
	}
};
var $elm$browser$Debugger$History$get = F3(
	function (update, index, history) {
		get:
		while (true) {
			var recent = history.recent;
			var snapshotMax = history.numMessages - recent.numMessages;
			if (_Utils_cmp(index, snapshotMax) > -1) {
				return $elm$browser$Debugger$History$undone(
					A3(
						$elm$core$List$foldr,
						$elm$browser$Debugger$History$getHelp(update),
						A2($elm$browser$Debugger$History$Stepping, index - snapshotMax, recent.model),
						recent.messages));
			} else {
				var _v0 = A2($elm$core$Array$get, (index / $elm$browser$Debugger$History$maxSnapshotSize) | 0, history.snapshots);
				if (_v0.$ === 'Nothing') {
					var $temp$update = update,
						$temp$index = index,
						$temp$history = history;
					update = $temp$update;
					index = $temp$index;
					history = $temp$history;
					continue get;
				} else {
					var model = _v0.a.model;
					var messages = _v0.a.messages;
					return $elm$browser$Debugger$History$undone(
						A3(
							$elm$core$Array$foldr,
							$elm$browser$Debugger$History$getHelp(update),
							A2($elm$browser$Debugger$History$Stepping, index % $elm$browser$Debugger$History$maxSnapshotSize, model),
							messages));
				}
			}
		}
	});
var $elm$browser$Debugger$History$getRecentMsg = function (history) {
	getRecentMsg:
	while (true) {
		var _v0 = history.recent.messages;
		if (!_v0.b) {
			var $temp$history = history;
			history = $temp$history;
			continue getRecentMsg;
		} else {
			var first = _v0.a;
			return first;
		}
	}
};
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$browser$Debugger$Expando$mergeDictHelp = F3(
	function (oldDict, key, value) {
		var _v12 = A2($elm$core$Dict$get, key, oldDict);
		if (_v12.$ === 'Nothing') {
			return value;
		} else {
			var oldValue = _v12.a;
			return A2($elm$browser$Debugger$Expando$mergeHelp, oldValue, value);
		}
	});
var $elm$browser$Debugger$Expando$mergeHelp = F2(
	function (old, _new) {
		var _v3 = _Utils_Tuple2(old, _new);
		_v3$6:
		while (true) {
			switch (_v3.b.$) {
				case 'S':
					return _new;
				case 'Primitive':
					return _new;
				case 'Sequence':
					if (_v3.a.$ === 'Sequence') {
						var _v4 = _v3.a;
						var isClosed = _v4.b;
						var oldValues = _v4.c;
						var _v5 = _v3.b;
						var seqType = _v5.a;
						var newValues = _v5.c;
						return A3(
							$elm$browser$Debugger$Expando$Sequence,
							seqType,
							isClosed,
							A2($elm$browser$Debugger$Expando$mergeListHelp, oldValues, newValues));
					} else {
						break _v3$6;
					}
				case 'Dictionary':
					if (_v3.a.$ === 'Dictionary') {
						var _v6 = _v3.a;
						var isClosed = _v6.a;
						var _v7 = _v3.b;
						var keyValuePairs = _v7.b;
						return A2($elm$browser$Debugger$Expando$Dictionary, isClosed, keyValuePairs);
					} else {
						break _v3$6;
					}
				case 'Record':
					if (_v3.a.$ === 'Record') {
						var _v8 = _v3.a;
						var isClosed = _v8.a;
						var oldDict = _v8.b;
						var _v9 = _v3.b;
						var newDict = _v9.b;
						return A2(
							$elm$browser$Debugger$Expando$Record,
							isClosed,
							A2(
								$elm$core$Dict$map,
								$elm$browser$Debugger$Expando$mergeDictHelp(oldDict),
								newDict));
					} else {
						break _v3$6;
					}
				default:
					if (_v3.a.$ === 'Constructor') {
						var _v10 = _v3.a;
						var isClosed = _v10.b;
						var oldValues = _v10.c;
						var _v11 = _v3.b;
						var maybeName = _v11.a;
						var newValues = _v11.c;
						return A3(
							$elm$browser$Debugger$Expando$Constructor,
							maybeName,
							isClosed,
							A2($elm$browser$Debugger$Expando$mergeListHelp, oldValues, newValues));
					} else {
						break _v3$6;
					}
			}
		}
		return _new;
	});
var $elm$browser$Debugger$Expando$mergeListHelp = F2(
	function (olds, news) {
		var _v0 = _Utils_Tuple2(olds, news);
		if (!_v0.a.b) {
			return news;
		} else {
			if (!_v0.b.b) {
				return news;
			} else {
				var _v1 = _v0.a;
				var x = _v1.a;
				var xs = _v1.b;
				var _v2 = _v0.b;
				var y = _v2.a;
				var ys = _v2.b;
				return A2(
					$elm$core$List$cons,
					A2($elm$browser$Debugger$Expando$mergeHelp, x, y),
					A2($elm$browser$Debugger$Expando$mergeListHelp, xs, ys));
			}
		}
	});
var $elm$browser$Debugger$Expando$merge = F2(
	function (value, expando) {
		return A2(
			$elm$browser$Debugger$Expando$mergeHelp,
			expando,
			_Debugger_init(value));
	});
var $elm$browser$Debugger$Main$jumpUpdate = F3(
	function (update, index, model) {
		var history = $elm$browser$Debugger$Main$cachedHistory(model);
		var currentMsg = $elm$browser$Debugger$History$getRecentMsg(history);
		var currentModel = $elm$browser$Debugger$Main$getLatestModel(model.state);
		var _v0 = A3($elm$browser$Debugger$History$get, update, index, history);
		var indexModel = _v0.a;
		var indexMsg = _v0.b;
		return _Utils_update(
			model,
			{
				expandoModel: A2($elm$browser$Debugger$Expando$merge, indexModel, model.expandoModel),
				expandoMsg: A2($elm$browser$Debugger$Expando$merge, indexMsg, model.expandoMsg),
				state: A5($elm$browser$Debugger$Main$Paused, index, indexModel, currentModel, currentMsg, history)
			});
	});
var $elm$browser$Debugger$History$jsToElm = A2($elm$core$Basics$composeR, _Json_unwrap, _Debugger_unsafeCoerce);
var $elm$browser$Debugger$History$decoder = F2(
	function (initialModel, update) {
		var addMessage = F2(
			function (rawMsg, _v0) {
				var model = _v0.a;
				var history = _v0.b;
				var msg = $elm$browser$Debugger$History$jsToElm(rawMsg);
				return _Utils_Tuple2(
					A2(update, msg, model),
					A3($elm$browser$Debugger$History$add, msg, model, history));
			});
		var updateModel = function (rawMsgs) {
			return A3(
				$elm$core$List$foldl,
				addMessage,
				_Utils_Tuple2(
					initialModel,
					$elm$browser$Debugger$History$empty(initialModel)),
				rawMsgs);
		};
		return A2(
			$elm$json$Json$Decode$map,
			updateModel,
			$elm$json$Json$Decode$list($elm$json$Json$Decode$value));
	});
var $elm$browser$Debugger$History$getInitialModel = function (_v0) {
	var snapshots = _v0.snapshots;
	var recent = _v0.recent;
	var _v1 = A2($elm$core$Array$get, 0, snapshots);
	if (_v1.$ === 'Just') {
		var model = _v1.a.model;
		return model;
	} else {
		return recent.model;
	}
};
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$browser$Debugger$Main$loadNewHistory = F3(
	function (rawHistory, update, model) {
		var pureUserUpdate = F2(
			function (msg, userModel) {
				return A2(update, msg, userModel).a;
			});
		var initialUserModel = $elm$browser$Debugger$History$getInitialModel(model.history);
		var decoder = A2($elm$browser$Debugger$History$decoder, initialUserModel, pureUserUpdate);
		var _v0 = A2($elm$json$Json$Decode$decodeValue, decoder, rawHistory);
		if (_v0.$ === 'Err') {
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{overlay: $elm$browser$Debugger$Overlay$corruptImport}),
				$elm$core$Platform$Cmd$none);
		} else {
			var _v1 = _v0.a;
			var latestUserModel = _v1.a;
			var newHistory = _v1.b;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						expandoModel: $elm$browser$Debugger$Expando$init(latestUserModel),
						expandoMsg: $elm$browser$Debugger$Expando$init(
							$elm$browser$Debugger$History$getRecentMsg(newHistory)),
						history: newHistory,
						overlay: $elm$browser$Debugger$Overlay$none,
						state: $elm$browser$Debugger$Main$Running(latestUserModel)
					}),
				$elm$core$Platform$Cmd$none);
		}
	});
var $elm$browser$Debugger$Main$scroll = function (popout) {
	return A2(
		$elm$core$Task$perform,
		$elm$core$Basics$always($elm$browser$Debugger$Main$NoOp),
		_Debugger_scroll(popout));
};
var $elm$browser$Debugger$Main$scrollTo = F2(
	function (id, popout) {
		return A2(
			$elm$core$Task$perform,
			$elm$core$Basics$always($elm$browser$Debugger$Main$NoOp),
			A2(_Debugger_scrollTo, id, popout));
	});
var $elm$browser$Debugger$Main$setDragStatus = F2(
	function (status, layout) {
		if (layout.$ === 'Horizontal') {
			var x = layout.b;
			var y = layout.c;
			return A3($elm$browser$Debugger$Main$Horizontal, status, x, y);
		} else {
			var x = layout.b;
			var y = layout.c;
			return A3($elm$browser$Debugger$Main$Vertical, status, x, y);
		}
	});
var $elm$browser$Debugger$Main$swapLayout = function (layout) {
	if (layout.$ === 'Horizontal') {
		var s = layout.a;
		var x = layout.b;
		var y = layout.c;
		return A3($elm$browser$Debugger$Main$Vertical, s, x, y);
	} else {
		var s = layout.a;
		var x = layout.b;
		var y = layout.c;
		return A3($elm$browser$Debugger$Main$Horizontal, s, x, y);
	}
};
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$browser$Debugger$Expando$updateIndex = F3(
	function (n, func, list) {
		if (!list.b) {
			return _List_Nil;
		} else {
			var x = list.a;
			var xs = list.b;
			return (n <= 0) ? A2(
				$elm$core$List$cons,
				func(x),
				xs) : A2(
				$elm$core$List$cons,
				x,
				A3($elm$browser$Debugger$Expando$updateIndex, n - 1, func, xs));
		}
	});
var $elm$browser$Debugger$Expando$update = F2(
	function (msg, value) {
		switch (value.$) {
			case 'S':
				return value;
			case 'Primitive':
				return value;
			case 'Sequence':
				var seqType = value.a;
				var isClosed = value.b;
				var valueList = value.c;
				switch (msg.$) {
					case 'Toggle':
						return A3($elm$browser$Debugger$Expando$Sequence, seqType, !isClosed, valueList);
					case 'Index':
						if (msg.a.$ === 'None') {
							var _v3 = msg.a;
							var index = msg.b;
							var subMsg = msg.c;
							return A3(
								$elm$browser$Debugger$Expando$Sequence,
								seqType,
								isClosed,
								A3(
									$elm$browser$Debugger$Expando$updateIndex,
									index,
									$elm$browser$Debugger$Expando$update(subMsg),
									valueList));
						} else {
							return value;
						}
					default:
						return value;
				}
			case 'Dictionary':
				var isClosed = value.a;
				var keyValuePairs = value.b;
				switch (msg.$) {
					case 'Toggle':
						return A2($elm$browser$Debugger$Expando$Dictionary, !isClosed, keyValuePairs);
					case 'Index':
						var redirect = msg.a;
						var index = msg.b;
						var subMsg = msg.c;
						switch (redirect.$) {
							case 'None':
								return value;
							case 'Key':
								return A2(
									$elm$browser$Debugger$Expando$Dictionary,
									isClosed,
									A3(
										$elm$browser$Debugger$Expando$updateIndex,
										index,
										function (_v6) {
											var k = _v6.a;
											var v = _v6.b;
											return _Utils_Tuple2(
												A2($elm$browser$Debugger$Expando$update, subMsg, k),
												v);
										},
										keyValuePairs));
							default:
								return A2(
									$elm$browser$Debugger$Expando$Dictionary,
									isClosed,
									A3(
										$elm$browser$Debugger$Expando$updateIndex,
										index,
										function (_v7) {
											var k = _v7.a;
											var v = _v7.b;
											return _Utils_Tuple2(
												k,
												A2($elm$browser$Debugger$Expando$update, subMsg, v));
										},
										keyValuePairs));
						}
					default:
						return value;
				}
			case 'Record':
				var isClosed = value.a;
				var valueDict = value.b;
				switch (msg.$) {
					case 'Toggle':
						return A2($elm$browser$Debugger$Expando$Record, !isClosed, valueDict);
					case 'Index':
						return value;
					default:
						var field = msg.a;
						var subMsg = msg.b;
						return A2(
							$elm$browser$Debugger$Expando$Record,
							isClosed,
							A3(
								$elm$core$Dict$update,
								field,
								$elm$browser$Debugger$Expando$updateField(subMsg),
								valueDict));
				}
			default:
				var maybeName = value.a;
				var isClosed = value.b;
				var valueList = value.c;
				switch (msg.$) {
					case 'Toggle':
						return A3($elm$browser$Debugger$Expando$Constructor, maybeName, !isClosed, valueList);
					case 'Index':
						if (msg.a.$ === 'None') {
							var _v10 = msg.a;
							var index = msg.b;
							var subMsg = msg.c;
							return A3(
								$elm$browser$Debugger$Expando$Constructor,
								maybeName,
								isClosed,
								A3(
									$elm$browser$Debugger$Expando$updateIndex,
									index,
									$elm$browser$Debugger$Expando$update(subMsg),
									valueList));
						} else {
							return value;
						}
					default:
						return value;
				}
		}
	});
var $elm$browser$Debugger$Expando$updateField = F2(
	function (msg, maybeExpando) {
		if (maybeExpando.$ === 'Nothing') {
			return maybeExpando;
		} else {
			var expando = maybeExpando.a;
			return $elm$core$Maybe$Just(
				A2($elm$browser$Debugger$Expando$update, msg, expando));
		}
	});
var $elm$browser$Debugger$Main$Upload = function (a) {
	return {$: 'Upload', a: a};
};
var $elm$browser$Debugger$Main$upload = function (popout) {
	return A2(
		$elm$core$Task$perform,
		$elm$browser$Debugger$Main$Upload,
		_Debugger_upload(popout));
};
var $elm$browser$Debugger$Overlay$BadMetadata = function (a) {
	return {$: 'BadMetadata', a: a};
};
var $elm$browser$Debugger$Overlay$badMetadata = $elm$browser$Debugger$Overlay$BadMetadata;
var $elm$browser$Debugger$Main$withGoodMetadata = F2(
	function (model, func) {
		var _v0 = model.metadata;
		if (_v0.$ === 'Ok') {
			var metadata = _v0.a;
			return func(metadata);
		} else {
			var error = _v0.a;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						overlay: $elm$browser$Debugger$Overlay$badMetadata(error)
					}),
				$elm$core$Platform$Cmd$none);
		}
	});
var $elm$browser$Debugger$Main$wrapUpdate = F3(
	function (update, msg, model) {
		wrapUpdate:
		while (true) {
			switch (msg.$) {
				case 'NoOp':
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				case 'UserMsg':
					var userMsg = msg.a;
					var userModel = $elm$browser$Debugger$Main$getLatestModel(model.state);
					var newHistory = A3($elm$browser$Debugger$History$add, userMsg, userModel, model.history);
					var _v1 = A2(update, userMsg, userModel);
					var newUserModel = _v1.a;
					var userCmds = _v1.b;
					var commands = A2($elm$core$Platform$Cmd$map, $elm$browser$Debugger$Main$UserMsg, userCmds);
					var _v2 = model.state;
					if (_v2.$ === 'Running') {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									expandoModel: A2($elm$browser$Debugger$Expando$merge, newUserModel, model.expandoModel),
									expandoMsg: A2($elm$browser$Debugger$Expando$merge, userMsg, model.expandoMsg),
									history: newHistory,
									state: $elm$browser$Debugger$Main$Running(newUserModel)
								}),
							$elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										commands,
										$elm$browser$Debugger$Main$scroll(model.popout)
									])));
					} else {
						var index = _v2.a;
						var indexModel = _v2.b;
						var history = _v2.e;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									history: newHistory,
									state: A5($elm$browser$Debugger$Main$Paused, index, indexModel, newUserModel, userMsg, history)
								}),
							commands);
					}
				case 'TweakExpandoMsg':
					var eMsg = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								expandoMsg: A2($elm$browser$Debugger$Expando$update, eMsg, model.expandoMsg)
							}),
						$elm$core$Platform$Cmd$none);
				case 'TweakExpandoModel':
					var eMsg = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								expandoModel: A2($elm$browser$Debugger$Expando$update, eMsg, model.expandoModel)
							}),
						$elm$core$Platform$Cmd$none);
				case 'Resume':
					var _v3 = model.state;
					if (_v3.$ === 'Running') {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					} else {
						var userModel = _v3.c;
						var userMsg = _v3.d;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									expandoModel: A2($elm$browser$Debugger$Expando$merge, userModel, model.expandoModel),
									expandoMsg: A2($elm$browser$Debugger$Expando$merge, userMsg, model.expandoMsg),
									state: $elm$browser$Debugger$Main$Running(userModel)
								}),
							$elm$browser$Debugger$Main$scroll(model.popout));
					}
				case 'Jump':
					var index = msg.a;
					return _Utils_Tuple2(
						A3($elm$browser$Debugger$Main$jumpUpdate, update, index, model),
						$elm$core$Platform$Cmd$none);
				case 'SliderJump':
					var index = msg.a;
					return _Utils_Tuple2(
						A3($elm$browser$Debugger$Main$jumpUpdate, update, index, model),
						A2(
							$elm$browser$Debugger$Main$scrollTo,
							$elm$browser$Debugger$History$idForMessageIndex(index),
							model.popout));
				case 'Open':
					return _Utils_Tuple2(
						model,
						A2(
							$elm$core$Task$perform,
							$elm$core$Basics$always($elm$browser$Debugger$Main$NoOp),
							_Debugger_open(model.popout)));
				case 'Up':
					var _v4 = model.state;
					if (_v4.$ === 'Running') {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					} else {
						var i = _v4.a;
						var history = _v4.e;
						var targetIndex = i + 1;
						if (_Utils_cmp(
							targetIndex,
							$elm$browser$Debugger$History$size(history)) < 0) {
							var $temp$update = update,
								$temp$msg = $elm$browser$Debugger$Main$SliderJump(targetIndex),
								$temp$model = model;
							update = $temp$update;
							msg = $temp$msg;
							model = $temp$model;
							continue wrapUpdate;
						} else {
							var $temp$update = update,
								$temp$msg = $elm$browser$Debugger$Main$Resume,
								$temp$model = model;
							update = $temp$update;
							msg = $temp$msg;
							model = $temp$model;
							continue wrapUpdate;
						}
					}
				case 'Down':
					var _v5 = model.state;
					if (_v5.$ === 'Running') {
						var $temp$update = update,
							$temp$msg = $elm$browser$Debugger$Main$Jump(
							$elm$browser$Debugger$History$size(model.history) - 1),
							$temp$model = model;
						update = $temp$update;
						msg = $temp$msg;
						model = $temp$model;
						continue wrapUpdate;
					} else {
						var index = _v5.a;
						if (index > 0) {
							var $temp$update = update,
								$temp$msg = $elm$browser$Debugger$Main$SliderJump(index - 1),
								$temp$model = model;
							update = $temp$update;
							msg = $temp$msg;
							model = $temp$model;
							continue wrapUpdate;
						} else {
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						}
					}
				case 'Import':
					return A2(
						$elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (_v6) {
							return _Utils_Tuple2(
								model,
								$elm$browser$Debugger$Main$upload(model.popout));
						});
				case 'Export':
					return A2(
						$elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (metadata) {
							return _Utils_Tuple2(
								model,
								A2($elm$browser$Debugger$Main$download, metadata, model.history));
						});
				case 'Upload':
					var jsonString = msg.a;
					return A2(
						$elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (metadata) {
							var _v7 = A2($elm$browser$Debugger$Overlay$assessImport, metadata, jsonString);
							if (_v7.$ === 'Err') {
								var newOverlay = _v7.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{overlay: newOverlay}),
									$elm$core$Platform$Cmd$none);
							} else {
								var rawHistory = _v7.a;
								return A3($elm$browser$Debugger$Main$loadNewHistory, rawHistory, update, model);
							}
						});
				case 'OverlayMsg':
					var overlayMsg = msg.a;
					var _v8 = A2($elm$browser$Debugger$Overlay$close, overlayMsg, model.overlay);
					if (_v8.$ === 'Nothing') {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{overlay: $elm$browser$Debugger$Overlay$none}),
							$elm$core$Platform$Cmd$none);
					} else {
						var rawHistory = _v8.a;
						return A3($elm$browser$Debugger$Main$loadNewHistory, rawHistory, update, model);
					}
				case 'SwapLayout':
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								layout: $elm$browser$Debugger$Main$swapLayout(model.layout)
							}),
						$elm$core$Platform$Cmd$none);
				case 'DragStart':
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								layout: A2($elm$browser$Debugger$Main$setDragStatus, $elm$browser$Debugger$Main$Moving, model.layout)
							}),
						$elm$core$Platform$Cmd$none);
				case 'Drag':
					var info = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								layout: A2($elm$browser$Debugger$Main$drag, info, model.layout)
							}),
						$elm$core$Platform$Cmd$none);
				default:
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								layout: A2($elm$browser$Debugger$Main$setDragStatus, $elm$browser$Debugger$Main$Static, model.layout)
							}),
						$elm$core$Platform$Cmd$none);
			}
		}
	});
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$browser$Browser$element = _Browser_element;
var $author$project$Main$Mdc = function (a) {
	return {$: 'Mdc', a: a};
};
var $author$project$Main$SetModel = function (a) {
	return {$: 'SetModel', a: a};
};
var $author$project$Material$defaultModel = {button: $elm$core$Dict$empty, checkbox: $elm$core$Dict$empty, chip: $elm$core$Dict$empty, dialog: $elm$core$Dict$empty, drawer: $elm$core$Dict$empty, fab: $elm$core$Dict$empty, iconButton: $elm$core$Dict$empty, list: $elm$core$Dict$empty, menu: $elm$core$Dict$empty, radio: $elm$core$Dict$empty, ripple: $elm$core$Dict$empty, select: $elm$core$Dict$empty, slider: $elm$core$Dict$empty, snackbar: $elm$core$Dict$empty, _switch: $elm$core$Dict$empty, tabbar: $elm$core$Dict$empty, textfield: $elm$core$Dict$empty, topAppBar: $elm$core$Dict$empty};
var $elm$core$Basics$modBy = _Basics_modBy;
var $author$project$Main$fromSecondsToMinutesSeconds = function (secs) {
	if (secs < 0) {
		var secs_ = (-1) * secs;
		return {
			minutes: (secs_ / 60) | 0,
			seconds: A2($elm$core$Basics$modBy, 60, secs_),
			sign: '-'
		};
	} else {
		return {
			minutes: (secs / 60) | 0,
			seconds: A2($elm$core$Basics$modBy, 60, secs),
			sign: ''
		};
	}
};
var $author$project$Main$fromTimeSpansToInput = function (timeSpans) {
	return {
		dev: function () {
			var _v0 = $author$project$Main$fromSecondsToMinutesSeconds(timeSpans.dev);
			var minutes = _v0.minutes;
			var seconds = _v0.seconds;
			return {
				minutes: $elm$core$String$fromInt(minutes),
				seconds: $elm$core$String$fromInt(seconds)
			};
		}(),
		fix: function () {
			var _v1 = $author$project$Main$fromSecondsToMinutesSeconds(timeSpans.fix);
			var minutes = _v1.minutes;
			var seconds = _v1.seconds;
			return {
				minutes: $elm$core$String$fromInt(minutes),
				seconds: $elm$core$String$fromInt(seconds)
			};
		}(),
		rinse: function () {
			var _v2 = $author$project$Main$fromSecondsToMinutesSeconds(timeSpans.rinse);
			var minutes = _v2.minutes;
			var seconds = _v2.seconds;
			return {
				minutes: $elm$core$String$fromInt(minutes),
				seconds: $elm$core$String$fromInt(seconds)
			};
		}(),
		soak: function () {
			var _v3 = $author$project$Main$fromSecondsToMinutesSeconds(timeSpans.soak);
			var minutes = _v3.minutes;
			var seconds = _v3.seconds;
			return {
				minutes: $elm$core$String$fromInt(minutes),
				seconds: $elm$core$String$fromInt(seconds)
			};
		}(),
		stop: function () {
			var _v4 = $author$project$Main$fromSecondsToMinutesSeconds(timeSpans.stop);
			var minutes = _v4.minutes;
			var seconds = _v4.seconds;
			return {
				minutes: $elm$core$String$fromInt(minutes),
				seconds: $elm$core$String$fromInt(seconds)
			};
		}(),
		wet: function () {
			var _v5 = $author$project$Main$fromSecondsToMinutesSeconds(timeSpans.wet);
			var minutes = _v5.minutes;
			var seconds = _v5.seconds;
			return {
				minutes: $elm$core$String$fromInt(minutes),
				seconds: $elm$core$String$fromInt(seconds)
			};
		}()
	};
};
var $author$project$Material$init = function (_v0) {
	return $elm$core$Platform$Cmd$none;
};
var $author$project$Main$init = function (_v0) {
	var timeSpans = {dev: 5 * 60, fix: 10 * 60, rinse: 5 * 60, soak: 30, stop: 2 * 60, wet: 30};
	return _Utils_Tuple2(
		{
			appModel: $author$project$Main$SetModel(
				{
					input: $author$project$Main$fromTimeSpansToInput(timeSpans)
				}),
			drawerOpen: false,
			mdc: $author$project$Material$defaultModel
		},
		$author$project$Material$init($author$project$Main$Mdc));
};
var $author$project$Main$TickMsg = function (a) {
	return {$: 'TickMsg', a: a};
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$time$Time$Every = F2(
	function (a, b) {
		return {$: 'Every', a: a, b: b};
	});
var $elm$time$Time$State = F2(
	function (taggers, processes) {
		return {processes: processes, taggers: taggers};
	});
var $elm$time$Time$init = $elm$core$Task$succeed(
	A2($elm$time$Time$State, $elm$core$Dict$empty, $elm$core$Dict$empty));
var $elm$time$Time$addMySub = F2(
	function (_v0, state) {
		var interval = _v0.a;
		var tagger = _v0.b;
		var _v1 = A2($elm$core$Dict$get, interval, state);
		if (_v1.$ === 'Nothing') {
			return A3(
				$elm$core$Dict$insert,
				interval,
				_List_fromArray(
					[tagger]),
				state);
		} else {
			var taggers = _v1.a;
			return A3(
				$elm$core$Dict$insert,
				interval,
				A2($elm$core$List$cons, tagger, taggers),
				state);
		}
	});
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$setInterval = _Time_setInterval;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$time$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		if (!intervals.b) {
			return $elm$core$Task$succeed(processes);
		} else {
			var interval = intervals.a;
			var rest = intervals.b;
			var spawnTimer = $elm$core$Process$spawn(
				A2(
					$elm$time$Time$setInterval,
					interval,
					A2($elm$core$Platform$sendToSelf, router, interval)));
			var spawnRest = function (id) {
				return A3(
					$elm$time$Time$spawnHelp,
					router,
					rest,
					A3($elm$core$Dict$insert, interval, id, processes));
			};
			return A2($elm$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var $elm$time$Time$onEffects = F3(
	function (router, subs, _v0) {
		var processes = _v0.processes;
		var rightStep = F3(
			function (_v6, id, _v7) {
				var spawns = _v7.a;
				var existing = _v7.b;
				var kills = _v7.c;
				return _Utils_Tuple3(
					spawns,
					existing,
					A2(
						$elm$core$Task$andThen,
						function (_v5) {
							return kills;
						},
						$elm$core$Process$kill(id)));
			});
		var newTaggers = A3($elm$core$List$foldl, $elm$time$Time$addMySub, $elm$core$Dict$empty, subs);
		var leftStep = F3(
			function (interval, taggers, _v4) {
				var spawns = _v4.a;
				var existing = _v4.b;
				var kills = _v4.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, interval, spawns),
					existing,
					kills);
			});
		var bothStep = F4(
			function (interval, taggers, id, _v3) {
				var spawns = _v3.a;
				var existing = _v3.b;
				var kills = _v3.c;
				return _Utils_Tuple3(
					spawns,
					A3($elm$core$Dict$insert, interval, id, existing),
					kills);
			});
		var _v1 = A6(
			$elm$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			processes,
			_Utils_Tuple3(
				_List_Nil,
				$elm$core$Dict$empty,
				$elm$core$Task$succeed(_Utils_Tuple0)));
		var spawnList = _v1.a;
		var existingDict = _v1.b;
		var killTask = _v1.c;
		return A2(
			$elm$core$Task$andThen,
			function (newProcesses) {
				return $elm$core$Task$succeed(
					A2($elm$time$Time$State, newTaggers, newProcesses));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v2) {
					return A3($elm$time$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $elm$time$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _v0 = A2($elm$core$Dict$get, interval, state.taggers);
		if (_v0.$ === 'Nothing') {
			return $elm$core$Task$succeed(state);
		} else {
			var taggers = _v0.a;
			var tellTaggers = function (time) {
				return $elm$core$Task$sequence(
					A2(
						$elm$core$List$map,
						function (tagger) {
							return A2(
								$elm$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						taggers));
			};
			return A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$succeed(state);
				},
				A2($elm$core$Task$andThen, tellTaggers, $elm$time$Time$now));
		}
	});
var $elm$time$Time$subMap = F2(
	function (f, _v0) {
		var interval = _v0.a;
		var tagger = _v0.b;
		return A2(
			$elm$time$Time$Every,
			interval,
			A2($elm$core$Basics$composeL, f, tagger));
	});
_Platform_effectManagers['Time'] = _Platform_createManager($elm$time$Time$init, $elm$time$Time$onEffects, $elm$time$Time$onSelfMsg, 0, $elm$time$Time$subMap);
var $elm$time$Time$subscription = _Platform_leaf('Time');
var $elm$time$Time$every = F2(
	function (interval, tagger) {
		return $elm$time$Time$subscription(
			A2($elm$time$Time$Every, interval, tagger));
	});
var $author$project$Internal$Msg$MenuMsg = F2(
	function (a, b) {
		return {$: 'MenuMsg', a: a, b: b};
	});
var $author$project$Internal$Component$subs = F5(
	function (ctor, get, subscriptions, lift, model) {
		return $elm$core$Platform$Sub$batch(
			A3(
				$elm$core$Dict$foldl,
				F3(
					function (idx, state, ss) {
						return A2(
							$elm$core$List$cons,
							A2(
								$elm$core$Platform$Sub$map,
								A2(
									$elm$core$Basics$composeL,
									lift,
									ctor(idx)),
								subscriptions(state)),
							ss);
					}),
				_List_Nil,
				get(model)));
	});
var $author$project$Internal$Menu$Model$DocumentClick = {$: 'DocumentClick'};
var $elm$browser$Browser$Events$Document = {$: 'Document'};
var $elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 'MySub', a: a, b: b, c: c};
	});
var $elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {pids: pids, subs: subs};
	});
var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(
	A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty));
var $elm$browser$Browser$Events$nodeToKey = function (node) {
	if (node.$ === 'Document') {
		return 'd_';
	} else {
		return 'w_';
	}
};
var $elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			$elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var $elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {event: event, key: key};
	});
var $elm$browser$Browser$Events$spawn = F3(
	function (router, key, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var actualNode = function () {
			if (node.$ === 'Document') {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			$elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						$elm$core$Platform$sendToSelf,
						router,
						A2($elm$browser$Browser$Events$Event, key, event));
				}));
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _v6) {
				var deads = _v6.a;
				var lives = _v6.b;
				var news = _v6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						$elm$core$List$cons,
						A3($elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_v4, pid, _v5) {
				var deads = _v5.a;
				var lives = _v5.b;
				var news = _v5.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _v2, _v3) {
				var deads = _v3.a;
				var lives = _v3.b;
				var news = _v3.c;
				return _Utils_Tuple3(
					deads,
					A3($elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2($elm$core$List$map, $elm$browser$Browser$Events$addKey, subs);
		var _v0 = A6(
			$elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.pids,
			$elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, _List_Nil));
		var deadPids = _v0.a;
		var livePids = _v0.b;
		var makeNewPids = _v0.c;
		return A2(
			$elm$core$Task$andThen,
			function (pids) {
				return $elm$core$Task$succeed(
					A2(
						$elm$browser$Browser$Events$State,
						newSubs,
						A2(
							$elm$core$Dict$union,
							livePids,
							$elm$core$Dict$fromList(pids))));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$sequence(makeNewPids);
				},
				$elm$core$Task$sequence(
					A2($elm$core$List$map, $elm$core$Process$kill, deadPids))));
	});
var $elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _v0, state) {
		var key = _v0.key;
		var event = _v0.event;
		var toMessage = function (_v2) {
			var subKey = _v2.a;
			var _v3 = _v2.b;
			var node = _v3.a;
			var name = _v3.b;
			var decoder = _v3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
		};
		var messages = A2($elm$core$List$filterMap, toMessage, state.subs);
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Platform$sendToApp(router),
					messages)));
	});
var $elm$browser$Browser$Events$subMap = F2(
	function (func, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var decoder = _v0.c;
		return A3(
			$elm$browser$Browser$Events$MySub,
			node,
			name,
			A2($elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager($elm$browser$Browser$Events$init, $elm$browser$Browser$Events$onEffects, $elm$browser$Browser$Events$onSelfMsg, 0, $elm$browser$Browser$Events$subMap);
var $elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var $elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return $elm$browser$Browser$Events$subscription(
			A3($elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var $elm$browser$Browser$Events$onClick = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'click');
var $author$project$Internal$Menu$Implementation$subscriptions = function (model) {
	return $elm$browser$Browser$Events$onClick(
		$elm$json$Json$Decode$succeed($author$project$Internal$Menu$Model$DocumentClick));
};
var $author$project$Internal$Menu$Implementation$subs = A3(
	$author$project$Internal$Component$subs,
	$author$project$Internal$Msg$MenuMsg,
	function ($) {
		return $.menu;
	},
	$author$project$Internal$Menu$Implementation$subscriptions);
var $author$project$Internal$Msg$SelectMsg = F2(
	function (a, b) {
		return {$: 'SelectMsg', a: a, b: b};
	});
var $author$project$Internal$Select$Model$MenuMsg = function (a) {
	return {$: 'MenuMsg', a: a};
};
var $author$project$Internal$Select$Implementation$subscriptions = function (model) {
	return A2(
		$elm$core$Platform$Sub$map,
		$author$project$Internal$Select$Model$MenuMsg,
		$author$project$Internal$Menu$Implementation$subscriptions(model.menu));
};
var $author$project$Internal$Select$Implementation$subs = A3(
	$author$project$Internal$Component$subs,
	$author$project$Internal$Msg$SelectMsg,
	function ($) {
		return $.select;
	},
	$author$project$Internal$Select$Implementation$subscriptions);
var $author$project$Material$subscriptions = F2(
	function (lift, model) {
		return $elm$core$Platform$Sub$batch(
			_List_fromArray(
				[
					A2($author$project$Internal$Menu$Implementation$subs, lift, model.mdc),
					A2($author$project$Internal$Select$Implementation$subs, lift, model.mdc)
				]));
	});
var $author$project$Main$subscriptions = function (model) {
	var appModel = model.appModel;
	if (appModel.$ === 'SetModel') {
		return A2($author$project$Material$subscriptions, $author$project$Main$Mdc, model);
	} else {
		var state = appModel.a.state;
		if (state.$ === 'RunState') {
			return $elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						A2($elm$time$Time$every, 1000, $author$project$Main$TickMsg),
						A2($author$project$Material$subscriptions, $author$project$Main$Mdc, model)
					]));
		} else {
			return A2($author$project$Material$subscriptions, $author$project$Main$Mdc, model);
		}
	}
};
var $author$project$Main$PauseState = {$: 'PauseState'};
var $author$project$Main$RunModel = function (a) {
	return {$: 'RunModel', a: a};
};
var $author$project$Main$RunState = {$: 'RunState'};
var $author$project$Main$SoakStep = {$: 'SoakStep'};
var $author$project$Main$alert = _Platform_outgoingPort('alert', $elm$json$Json$Encode$string);
var $author$project$Main$fromInputToTimeSpans = function (input) {
	var _v0 = A2(
		$elm$core$List$map,
		$elm$core$String$toInt,
		_List_fromArray(
			[input.soak.minutes, input.soak.seconds, input.dev.minutes, input.dev.seconds, input.stop.minutes, input.stop.seconds, input.fix.minutes, input.fix.seconds, input.rinse.minutes, input.rinse.seconds, input.wet.minutes, input.wet.seconds]));
	if ((((((((((((((((((((((((_v0.b && (_v0.a.$ === 'Just')) && _v0.b.b) && (_v0.b.a.$ === 'Just')) && _v0.b.b.b) && (_v0.b.b.a.$ === 'Just')) && _v0.b.b.b.b) && (_v0.b.b.b.a.$ === 'Just')) && _v0.b.b.b.b.b) && (_v0.b.b.b.b.a.$ === 'Just')) && _v0.b.b.b.b.b.b) && (_v0.b.b.b.b.b.a.$ === 'Just')) && _v0.b.b.b.b.b.b.b) && (_v0.b.b.b.b.b.b.a.$ === 'Just')) && _v0.b.b.b.b.b.b.b.b) && (_v0.b.b.b.b.b.b.b.a.$ === 'Just')) && _v0.b.b.b.b.b.b.b.b.b) && (_v0.b.b.b.b.b.b.b.b.a.$ === 'Just')) && _v0.b.b.b.b.b.b.b.b.b.b) && (_v0.b.b.b.b.b.b.b.b.b.a.$ === 'Just')) && _v0.b.b.b.b.b.b.b.b.b.b.b) && (_v0.b.b.b.b.b.b.b.b.b.b.a.$ === 'Just')) && _v0.b.b.b.b.b.b.b.b.b.b.b.b) && (_v0.b.b.b.b.b.b.b.b.b.b.b.a.$ === 'Just')) && (!_v0.b.b.b.b.b.b.b.b.b.b.b.b.b)) {
		var skm = _v0.a.a;
		var _v1 = _v0.b;
		var sks = _v1.a.a;
		var _v2 = _v1.b;
		var dvm = _v2.a.a;
		var _v3 = _v2.b;
		var dvs = _v3.a.a;
		var _v4 = _v3.b;
		var stm = _v4.a.a;
		var _v5 = _v4.b;
		var sts = _v5.a.a;
		var _v6 = _v5.b;
		var fxm = _v6.a.a;
		var _v7 = _v6.b;
		var fxs = _v7.a.a;
		var _v8 = _v7.b;
		var rsm = _v8.a.a;
		var _v9 = _v8.b;
		var rss = _v9.a.a;
		var _v10 = _v9.b;
		var wtm = _v10.a.a;
		var _v11 = _v10.b;
		var wts = _v11.a.a;
		return $elm$core$Maybe$Just(
			{dev: (60 * dvm) + dvs, fix: (60 * fxm) + fxs, rinse: (60 * rsm) + rss, soak: (60 * skm) + sks, stop: (60 * stm) + sts, wet: (60 * wtm) + wts});
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Main$DevStep = {$: 'DevStep'};
var $author$project$Main$EndStep = {$: 'EndStep'};
var $author$project$Main$FixStep = {$: 'FixStep'};
var $author$project$Main$RinseStep = {$: 'RinseStep'};
var $author$project$Main$StopStep = {$: 'StopStep'};
var $author$project$Main$WetStep = {$: 'WetStep'};
var $author$project$Main$nextStep = function (step) {
	switch (step.$) {
		case 'SoakStep':
			return $author$project$Main$DevStep;
		case 'DevStep':
			return $author$project$Main$StopStep;
		case 'StopStep':
			return $author$project$Main$FixStep;
		case 'FixStep':
			return $author$project$Main$RinseStep;
		case 'RinseStep':
			return $author$project$Main$WetStep;
		case 'WetStep':
			return $author$project$Main$EndStep;
		default:
			return $author$project$Main$EndStep;
	}
};
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $author$project$Main$playAlarm = _Platform_outgoingPort(
	'playAlarm',
	function ($) {
		return $elm$json$Json$Encode$null;
	});
var $elm$json$Json$Encode$bool = _Json_wrap;
var $author$project$Main$setNoSleep = _Platform_outgoingPort('setNoSleep', $elm$json$Json$Encode$bool);
var $author$project$Main$stopAlarm = _Platform_outgoingPort(
	'stopAlarm',
	function ($) {
		return $elm$json$Json$Encode$null;
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $author$project$Internal$Dispatch$forward = function (msgs) {
	return $elm$core$Platform$Cmd$batch(
		A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeL,
				$elm$core$Task$perform($elm$core$Basics$identity),
				$elm$core$Task$succeed),
			msgs));
};
var $author$project$Internal$Msg$ButtonMsg = F2(
	function (a, b) {
		return {$: 'ButtonMsg', a: a, b: b};
	});
var $author$project$Internal$Ripple$Model$Idle = {$: 'Idle'};
var $author$project$Internal$Ripple$Model$defaultModel = {animationCounter: 0, animationState: $author$project$Internal$Ripple$Model$Idle, clientRect: $elm$core$Maybe$Nothing, focused: false};
var $author$project$Internal$Button$Model$defaultModel = {ripple: $author$project$Internal$Ripple$Model$defaultModel};
var $author$project$Internal$Component$indexed = F3(
	function (get_model, set_model, model0) {
		var set_ = F3(
			function (idx, store, model) {
				return A2(
					set_model,
					A3(
						$elm$core$Dict$insert,
						idx,
						model,
						get_model(store)),
					store);
			});
		var get_ = F2(
			function (idx, store) {
				return A2(
					$elm$core$Maybe$withDefault,
					model0,
					A2(
						$elm$core$Dict$get,
						idx,
						get_model(store)));
			});
		return {get: get_, set: set_};
	});
var $author$project$Internal$Button$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.button;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{button: x});
		}),
	$author$project$Internal$Button$Model$defaultModel);
var $author$project$Internal$Component$react = F8(
	function (get, set, ctor, update, lift, msg, idx, store) {
		return A2(
			$elm$core$Tuple$mapFirst,
			$elm$core$Maybe$map(
				A2(set, idx, store)),
			A3(
				update,
				A2(
					$elm$core$Basics$composeL,
					lift,
					ctor(idx)),
				msg,
				A2(get, idx, store)));
	});
var $author$project$Internal$Button$Model$RippleMsg = function (a) {
	return {$: 'RippleMsg', a: a};
};
var $elm$core$Process$sleep = _Process_sleep;
var $author$project$Internal$Helpers$delayedCmd = F2(
	function (time, msg) {
		return A2(
			$elm$core$Task$perform,
			$elm$core$Basics$always(msg),
			$elm$core$Process$sleep(time));
	});
var $author$project$Internal$Ripple$Model$Activate = F2(
	function (a, b) {
		return {$: 'Activate', a: a, b: b};
	});
var $author$project$Internal$Ripple$Model$Activated = function (a) {
	return {$: 'Activated', a: a};
};
var $author$project$Internal$Ripple$Model$ActivationEnded = function (a) {
	return {$: 'ActivationEnded', a: a};
};
var $author$project$Internal$Ripple$Model$Deactivated = function (a) {
	return {$: 'Deactivated', a: a};
};
var $author$project$Internal$Ripple$Model$DeactivationEnded = function (a) {
	return {$: 'DeactivationEnded', a: a};
};
var $author$project$Internal$Ripple$Model$Reactivate = F2(
	function (a, b) {
		return {$: 'Reactivate', a: a, b: b};
	});
var $author$project$Internal$Ripple$Implementation$normalizedEventCoords = F3(
	function (event, pageOffset, clientRect) {
		var _v0 = pageOffset;
		var x = _v0.x;
		var y = _v0.y;
		var documentX = x + clientRect.x;
		var documentY = x + clientRect.y;
		var _v1 = event.pagePoint;
		var pageX = _v1.pageX;
		var pageY = _v1.pageY;
		return {x: pageX - documentX, y: pageY - documentY};
	});
var $author$project$Internal$Ripple$Implementation$fgTranslationCoords = F2(
	function (isUnbounded, _v0) {
		var frame = _v0.frame;
		var activationEvent = _v0.activationEvent;
		var windowPageOffset = _v0.windowPageOffset;
		var wasActivatedByPointer = _v0.wasActivatedByPointer;
		var maxDimension = A2($elm$core$Basics$max, frame.width, frame.height);
		var initialSize = maxDimension * 0.6;
		var startPoint = function () {
			var _v1 = A3($author$project$Internal$Ripple$Implementation$normalizedEventCoords, activationEvent, windowPageOffset, frame);
			var x = _v1.x;
			var y = _v1.y;
			return {x: x - (initialSize / 2), y: y - (initialSize / 2)};
		}();
		var endPoint = {x: (frame.width - initialSize) / 2, y: (frame.height - initialSize) / 2};
		return {endPoint: endPoint, startPoint: startPoint};
	});
var $author$project$Internal$Ripple$Implementation$animateActivation = F4(
	function (isUnbounded, frame, windowPageOffset, activationEvent) {
		var wasActivatedByPointer = true;
		var _v0 = A2(
			$author$project$Internal$Ripple$Implementation$fgTranslationCoords,
			isUnbounded,
			{activationEvent: activationEvent, frame: frame, wasActivatedByPointer: wasActivatedByPointer, windowPageOffset: windowPageOffset});
		var startPoint = _v0.startPoint;
		var endPoint = _v0.endPoint;
		var translateEnd = isUnbounded ? '' : ($elm$core$String$fromFloat(endPoint.x) + ('px, ' + ($elm$core$String$fromFloat(endPoint.y) + 'px')));
		var translateStart = isUnbounded ? '' : ($elm$core$String$fromFloat(startPoint.x) + ('px, ' + ($elm$core$String$fromFloat(startPoint.y) + 'px')));
		return {translateEnd: translateEnd, translateStart: translateStart};
	});
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2(
					$elm$core$Task$onError,
					A2(
						$elm$core$Basics$composeL,
						A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
						$elm$core$Result$Err),
					A2(
						$elm$core$Task$andThen,
						A2(
							$elm$core$Basics$composeL,
							A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
							$elm$core$Result$Ok),
						task))));
	});
var $elm$browser$Browser$Dom$getElement = _Browser_getElement;
var $author$project$Internal$Ripple$Model$numbers = {deactivationTimeoutMs: 225, fgDeactivationMs: 150, initialOriginScale: 0.6, padding: 10, tapDelayMs: 300};
var $elm$core$Basics$pow = _Basics_pow;
var $elm$core$Basics$sqrt = _Basics_sqrt;
var $author$project$Internal$Ripple$Implementation$layoutInternal = F2(
	function (isUnbounded, frame) {
		var maxDim = A2($elm$core$Basics$max, frame.width, frame.height);
		var initialSize = $elm$core$Basics$floor(maxDim * $author$project$Internal$Ripple$Model$numbers.initialOriginScale);
		var hypotenuse = $elm$core$Basics$sqrt(
			A2($elm$core$Basics$pow, frame.width, 2) + A2($elm$core$Basics$pow, frame.height, 2));
		var boundedRadius = hypotenuse + $author$project$Internal$Ripple$Model$numbers.padding;
		var maxRadius = isUnbounded ? maxDim : boundedRadius;
		var fgScale = maxRadius / initialSize;
		return {fgScale: fgScale, initialSize: initialSize};
	});
var $author$project$Internal$Ripple$Implementation$update = F2(
	function (msg, model) {
		var _v0 = _Utils_Tuple2(msg, model.animationState);
		_v0$13:
		while (true) {
			switch (_v0.a.$) {
				case 'Focus':
					var _v1 = _v0.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{focused: true}),
						$elm$core$Platform$Cmd$none);
				case 'Blur':
					var _v2 = _v0.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{focused: false}),
						$elm$core$Platform$Cmd$none);
				case 'SetCssVariables':
					var _v3 = _v0.a;
					var isUnbounded = _v3.a;
					var clientRect = _v3.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								clientRect: $elm$core$Maybe$Just(clientRect)
							}),
						$elm$core$Platform$Cmd$none);
				case 'Activate0':
					if (_v0.b.$ === 'Idle') {
						var _v4 = _v0.a;
						var domId = _v4.a;
						var activateData = _v4.b;
						var _v5 = _v0.b;
						return _Utils_Tuple2(
							model,
							A2(
								$elm$core$Task$attempt,
								$author$project$Internal$Ripple$Model$Activate(activateData),
								$elm$browser$Browser$Dom$getElement(domId)));
					} else {
						var _v6 = _v0.a;
						var domId = _v6.a;
						var activateData = _v6.b;
						return _Utils_Tuple2(
							model,
							A2(
								$elm$core$Task$attempt,
								$author$project$Internal$Ripple$Model$Reactivate(activateData),
								$elm$browser$Browser$Dom$getElement(domId)));
					}
				case 'Reactivate':
					switch (_v0.b.$) {
						case 'Activated':
							var _v7 = _v0.a;
							var activateData = _v7.a;
							var element = _v7.b;
							var activationEvent = _v0.b.a.activationEvent;
							return _Utils_eq(activateData.event.eventType, activationEvent.eventType) ? _Utils_Tuple2(
								_Utils_update(
									model,
									{animationState: $author$project$Internal$Ripple$Model$Idle}),
								A2(
									$elm$core$Task$perform,
									function (_v8) {
										return A2($author$project$Internal$Ripple$Model$Activate, activateData, element);
									},
									$elm$core$Task$succeed(_Utils_Tuple0))) : _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						case 'Deactivated':
							var _v9 = _v0.a;
							var activateData = _v9.a;
							var element = _v9.b;
							var activationEvent = _v0.b.a.activationEvent;
							return _Utils_eq(activateData.event.eventType, activationEvent.eventType) ? _Utils_Tuple2(
								_Utils_update(
									model,
									{animationState: $author$project$Internal$Ripple$Model$Idle}),
								A2(
									$elm$core$Task$perform,
									function (_v10) {
										return A2($author$project$Internal$Ripple$Model$Activate, activateData, element);
									},
									$elm$core$Task$succeed(_Utils_Tuple0))) : _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						default:
							var _v11 = _v0.a;
							var activateData = _v11.a;
							var element = _v11.b;
							var _v12 = _v0.b;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{animationState: $author$project$Internal$Ripple$Model$Idle}),
								A2(
									$elm$core$Task$perform,
									function (_v13) {
										return A2($author$project$Internal$Ripple$Model$Activate, activateData, element);
									},
									$elm$core$Task$succeed(_Utils_Tuple0)));
					}
				case 'Activate':
					if (_v0.a.b.$ === 'Err') {
						var _v14 = _v0.a;
						var activateData = _v14.a;
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					} else {
						var _v15 = _v0.a;
						var activateData = _v15.a;
						var element = _v15.b.a.element;
						var viewport = _v15.b.a.viewport;
						var newAnimationCounter = model.animationCounter + 1;
						var _v16 = A4($author$project$Internal$Ripple$Implementation$animateActivation, activateData.isUnbounded, element, viewport, activateData.event);
						var translateStart = _v16.translateStart;
						var translateEnd = _v16.translateEnd;
						var _v17 = A2($author$project$Internal$Ripple$Implementation$layoutInternal, activateData.isUnbounded, element);
						var fgScale = _v17.fgScale;
						var initialSize = _v17.initialSize;
						var activatedData = {
							activationEvent: activateData.event,
							activationHasEnded: false,
							deactivated: false,
							fgScale: fgScale,
							frame: {height: element.height, left: element.x, top: element.y, width: element.width},
							initialSize: initialSize,
							translateEnd: translateEnd,
							translateStart: translateStart,
							wasElementMadeActive: activateData.wasElementMadeActive
						};
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									animationCounter: newAnimationCounter,
									animationState: $author$project$Internal$Ripple$Model$Activated(activatedData)
								}),
							A2(
								$elm$core$Task$perform,
								function (_v18) {
									return $author$project$Internal$Ripple$Model$ActivationEnded(newAnimationCounter);
								},
								$elm$core$Process$sleep($author$project$Internal$Ripple$Model$numbers.deactivationTimeoutMs)));
					}
				case 'ActivationEnded':
					if (_v0.b.$ === 'Activated') {
						var animationCount = _v0.a.a;
						var activatedData = _v0.b.a;
						if (_Utils_eq(animationCount, model.animationCounter)) {
							if (activatedData.deactivated) {
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											animationState: $author$project$Internal$Ripple$Model$Deactivated(activatedData)
										}),
									A2(
										$elm$core$Task$perform,
										function (_v19) {
											return $author$project$Internal$Ripple$Model$DeactivationEnded(model.animationCounter);
										},
										$elm$core$Process$sleep($author$project$Internal$Ripple$Model$numbers.tapDelayMs)));
							} else {
								var newActivatedData = _Utils_update(
									activatedData,
									{activationHasEnded: true});
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											animationState: $author$project$Internal$Ripple$Model$Activated(newActivatedData)
										}),
									$elm$core$Platform$Cmd$none);
							}
						} else {
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						}
					} else {
						break _v0$13;
					}
				case 'Deactivate':
					if (_v0.b.$ === 'Activated') {
						var _v20 = _v0.a;
						var activatedData = _v0.b.a;
						if (activatedData.activationHasEnded) {
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										animationState: $author$project$Internal$Ripple$Model$Deactivated(activatedData)
									}),
								A2(
									$elm$core$Task$perform,
									function (_v21) {
										return $author$project$Internal$Ripple$Model$DeactivationEnded(model.animationCounter);
									},
									$elm$core$Process$sleep($author$project$Internal$Ripple$Model$numbers.tapDelayMs)));
						} else {
							var newActivatedData = _Utils_update(
								activatedData,
								{deactivated: true});
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										animationState: $author$project$Internal$Ripple$Model$Activated(newActivatedData)
									}),
								$elm$core$Platform$Cmd$none);
						}
					} else {
						break _v0$13;
					}
				default:
					if (_v0.b.$ === 'Deactivated') {
						var animationCount = _v0.a.a;
						return _Utils_eq(animationCount, model.animationCounter) ? _Utils_Tuple2(
							_Utils_update(
								model,
								{animationState: $author$project$Internal$Ripple$Model$Idle}),
							$elm$core$Platform$Cmd$none) : _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					} else {
						break _v0$13;
					}
			}
		}
		return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
	});
var $author$project$Internal$Button$Implementation$update = F3(
	function (lift, msg, model) {
		if (msg.$ === 'RippleMsg') {
			var msg_ = msg.a;
			var _v1 = A2($author$project$Internal$Ripple$Implementation$update, msg_, model.ripple);
			var rippleState = _v1.a;
			var rippleCmd = _v1.b;
			return _Utils_Tuple2(
				$elm$core$Maybe$Just(
					_Utils_update(
						model,
						{ripple: rippleState})),
				A2(
					$elm$core$Platform$Cmd$map,
					A2($elm$core$Basics$composeL, lift, $author$project$Internal$Button$Model$RippleMsg),
					rippleCmd));
		} else {
			var doRipple = msg.a;
			var msg_ = msg.b;
			return _Utils_Tuple2(
				$elm$core$Maybe$Nothing,
				A2(
					$author$project$Internal$Helpers$delayedCmd,
					doRipple ? 150 : 0,
					msg_));
		}
	});
var $author$project$Internal$Button$Implementation$react = A4($author$project$Internal$Component$react, $author$project$Internal$Button$Implementation$getSet.get, $author$project$Internal$Button$Implementation$getSet.set, $author$project$Internal$Msg$ButtonMsg, $author$project$Internal$Button$Implementation$update);
var $author$project$Internal$Msg$CheckboxMsg = F2(
	function (a, b) {
		return {$: 'CheckboxMsg', a: a, b: b};
	});
var $author$project$Internal$Checkbox$Model$defaultModel = {animation: $elm$core$Maybe$Nothing, isFocused: false, lastKnownState: $elm$core$Maybe$Nothing};
var $author$project$Internal$Checkbox$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.checkbox;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{checkbox: x});
		}),
	$author$project$Internal$Checkbox$Model$defaultModel);
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Internal$Checkbox$Model$CheckedIndeterminate = {$: 'CheckedIndeterminate'};
var $author$project$Internal$Checkbox$Model$CheckedUnchecked = {$: 'CheckedUnchecked'};
var $author$project$Internal$Checkbox$Model$IndeterminateChecked = {$: 'IndeterminateChecked'};
var $author$project$Internal$Checkbox$Model$IndeterminateUnchecked = {$: 'IndeterminateUnchecked'};
var $author$project$Internal$Checkbox$Model$UncheckedChecked = {$: 'UncheckedChecked'};
var $author$project$Internal$Checkbox$Model$UncheckedIndeterminate = {$: 'UncheckedIndeterminate'};
var $author$project$Internal$Checkbox$Implementation$animationState = F2(
	function (oldState, state) {
		var _v0 = _Utils_Tuple2(oldState, state);
		_v0$6:
		while (true) {
			if (_v0.a.$ === 'Nothing') {
				if (_v0.b.$ === 'Just') {
					if (_v0.b.a.$ === 'Checked') {
						var _v5 = _v0.a;
						var _v6 = _v0.b.a;
						return $elm$core$Maybe$Just($author$project$Internal$Checkbox$Model$IndeterminateChecked);
					} else {
						var _v7 = _v0.a;
						var _v8 = _v0.b.a;
						return $elm$core$Maybe$Just($author$project$Internal$Checkbox$Model$IndeterminateUnchecked);
					}
				} else {
					break _v0$6;
				}
			} else {
				if (_v0.a.a.$ === 'Unchecked') {
					if (_v0.b.$ === 'Nothing') {
						var _v1 = _v0.a.a;
						var _v2 = _v0.b;
						return $elm$core$Maybe$Just($author$project$Internal$Checkbox$Model$UncheckedIndeterminate);
					} else {
						if (_v0.b.a.$ === 'Checked') {
							var _v9 = _v0.a.a;
							var _v10 = _v0.b.a;
							return $elm$core$Maybe$Just($author$project$Internal$Checkbox$Model$UncheckedChecked);
						} else {
							break _v0$6;
						}
					}
				} else {
					if (_v0.b.$ === 'Nothing') {
						var _v3 = _v0.a.a;
						var _v4 = _v0.b;
						return $elm$core$Maybe$Just($author$project$Internal$Checkbox$Model$CheckedIndeterminate);
					} else {
						if (_v0.b.a.$ === 'Unchecked') {
							var _v11 = _v0.a.a;
							var _v12 = _v0.b.a;
							return $elm$core$Maybe$Just($author$project$Internal$Checkbox$Model$CheckedUnchecked);
						} else {
							break _v0$6;
						}
					}
				}
			}
		}
		return $elm$core$Maybe$Nothing;
	});
var $author$project$Internal$Checkbox$Implementation$update = F3(
	function (_v0, msg, model) {
		switch (msg.$) {
			case 'NoOp':
				return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
			case 'SetFocus':
				var focus = msg.a;
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{isFocused: focus})),
					$elm$core$Platform$Cmd$none);
			case 'Init':
				var lastKnownState = msg.a;
				var state = msg.b;
				var animation = A2(
					$elm$core$Maybe$andThen,
					function (lastKnownState_) {
						return A2($author$project$Internal$Checkbox$Implementation$animationState, lastKnownState_, state);
					},
					lastKnownState);
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{
								animation: animation,
								lastKnownState: $elm$core$Maybe$Just(state)
							})),
					$elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{animation: $elm$core$Maybe$Nothing})),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Internal$Checkbox$Implementation$react = A4($author$project$Internal$Component$react, $author$project$Internal$Checkbox$Implementation$getSet.get, $author$project$Internal$Checkbox$Implementation$getSet.set, $author$project$Internal$Msg$CheckboxMsg, $author$project$Internal$Checkbox$Implementation$update);
var $author$project$Internal$Msg$ChipMsg = F2(
	function (a, b) {
		return {$: 'ChipMsg', a: a, b: b};
	});
var $author$project$Internal$Chip$Model$defaultModel = {ripple: $author$project$Internal$Ripple$Model$defaultModel};
var $author$project$Internal$Chip$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.chip;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{chip: x});
		}),
	$author$project$Internal$Chip$Model$defaultModel);
var $author$project$Internal$Chip$Model$RippleMsg = function (a) {
	return {$: 'RippleMsg', a: a};
};
var $author$project$Internal$Chip$Implementation$update = F3(
	function (lift, msg, model) {
		if (msg.$ === 'RippleMsg') {
			var msg_ = msg.a;
			var _v1 = A2($author$project$Internal$Ripple$Implementation$update, msg_, model.ripple);
			var ripple = _v1.a;
			var cmd = _v1.b;
			return _Utils_Tuple2(
				$elm$core$Maybe$Just(
					_Utils_update(
						model,
						{ripple: ripple})),
				A2(
					$elm$core$Platform$Cmd$map,
					A2($elm$core$Basics$composeL, lift, $author$project$Internal$Chip$Model$RippleMsg),
					cmd));
		} else {
			var msg_ = msg.a;
			return _Utils_Tuple2(
				$elm$core$Maybe$Nothing,
				A2($author$project$Internal$Helpers$delayedCmd, 150, msg_));
		}
	});
var $author$project$Internal$Chip$Implementation$react = A4($author$project$Internal$Component$react, $author$project$Internal$Chip$Implementation$getSet.get, $author$project$Internal$Chip$Implementation$getSet.set, $author$project$Internal$Msg$ChipMsg, $author$project$Internal$Chip$Implementation$update);
var $author$project$Internal$Msg$DialogMsg = F2(
	function (a, b) {
		return {$: 'DialogMsg', a: a, b: b};
	});
var $author$project$Internal$Dialog$Model$defaultModel = {animating: false, open: false};
var $author$project$Internal$Dialog$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.dialog;
	},
	F2(
		function (x, c) {
			return _Utils_update(
				c,
				{dialog: x});
		}),
	$author$project$Internal$Dialog$Model$defaultModel);
var $author$project$Internal$Dialog$Implementation$update = F3(
	function (_v0, msg, model) {
		switch (msg.$) {
			case 'NoOp':
				return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
			case 'StartAnimation':
				var isOpen = msg.a;
				return (!_Utils_eq(isOpen, model.open)) ? _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{animating: true, open: isOpen})),
					$elm$core$Platform$Cmd$none) : _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{animating: false})),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Internal$Dialog$Implementation$react = A4($author$project$Internal$Component$react, $author$project$Internal$Dialog$Implementation$getSet.get, $author$project$Internal$Dialog$Implementation$getSet.set, $author$project$Internal$Msg$DialogMsg, $author$project$Internal$Dialog$Implementation$update);
var $author$project$Internal$Msg$DrawerMsg = F2(
	function (a, b) {
		return {$: 'DrawerMsg', a: a, b: b};
	});
var $author$project$Internal$Drawer$Model$defaultModel = {animating: false, closeOnAnimationEnd: false, open: false};
var $author$project$Internal$Drawer$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.drawer;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{drawer: x});
		}),
	$author$project$Internal$Drawer$Model$defaultModel);
var $author$project$Internal$Drawer$Implementation$update = F3(
	function (lift, msg, model) {
		switch (msg.$) {
			case 'NoOp':
				return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
			case 'StartAnimation':
				var isOpen = msg.a;
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{animating: true, closeOnAnimationEnd: !isOpen, open: true})),
					$elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{
								animating: false,
								closeOnAnimationEnd: false,
								open: model.closeOnAnimationEnd ? false : model.open
							})),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Internal$Drawer$Implementation$react = A4($author$project$Internal$Component$react, $author$project$Internal$Drawer$Implementation$getSet.get, $author$project$Internal$Drawer$Implementation$getSet.set, $author$project$Internal$Msg$DrawerMsg, $author$project$Internal$Drawer$Implementation$update);
var $author$project$Internal$Msg$FabMsg = F2(
	function (a, b) {
		return {$: 'FabMsg', a: a, b: b};
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $author$project$Internal$Component$generalise = F4(
	function (update, lift, msg, model) {
		return A2(
			$elm$core$Tuple$mapSecond,
			$elm$core$Platform$Cmd$map(lift),
			A2(
				$elm$core$Tuple$mapFirst,
				$elm$core$Maybe$Just,
				A2(update, msg, model)));
	});
var $author$project$Internal$Fab$Model$defaultModel = {ripple: $author$project$Internal$Ripple$Model$defaultModel};
var $author$project$Internal$Fab$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.fab;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{fab: x});
		}),
	$author$project$Internal$Fab$Model$defaultModel);
var $author$project$Internal$Fab$Model$RippleMsg = function (a) {
	return {$: 'RippleMsg', a: a};
};
var $author$project$Internal$Fab$Implementation$update = F2(
	function (msg, model) {
		if (msg.$ === 'RippleMsg') {
			var msg_ = msg.a;
			var _v1 = A2($author$project$Internal$Ripple$Implementation$update, msg_, model.ripple);
			var rippleState = _v1.a;
			var rippleCmd = _v1.b;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{ripple: rippleState}),
				A2($elm$core$Platform$Cmd$map, $author$project$Internal$Fab$Model$RippleMsg, rippleCmd));
		} else {
			return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Internal$Fab$Implementation$react = A4(
	$author$project$Internal$Component$react,
	$author$project$Internal$Fab$Implementation$getSet.get,
	$author$project$Internal$Fab$Implementation$getSet.set,
	$author$project$Internal$Msg$FabMsg,
	$author$project$Internal$Component$generalise($author$project$Internal$Fab$Implementation$update));
var $author$project$Internal$Msg$IconButtonMsg = F2(
	function (a, b) {
		return {$: 'IconButtonMsg', a: a, b: b};
	});
var $author$project$Internal$IconButton$Model$defaultModel = {on: false, ripple: $author$project$Internal$Ripple$Model$defaultModel};
var $author$project$Internal$IconButton$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.iconButton;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{iconButton: x});
		}),
	$author$project$Internal$IconButton$Model$defaultModel);
var $author$project$Internal$IconButton$Model$RippleMsg = function (a) {
	return {$: 'RippleMsg', a: a};
};
var $author$project$Internal$IconButton$Implementation$update = F2(
	function (msg, model) {
		var msg_ = msg.a;
		var _v1 = A2($author$project$Internal$Ripple$Implementation$update, msg_, model.ripple);
		var ripple = _v1.a;
		var effects = _v1.b;
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{ripple: ripple}),
			A2($elm$core$Platform$Cmd$map, $author$project$Internal$IconButton$Model$RippleMsg, effects));
	});
var $author$project$Internal$IconButton$Implementation$react = A4(
	$author$project$Internal$Component$react,
	$author$project$Internal$IconButton$Implementation$getSet.get,
	$author$project$Internal$IconButton$Implementation$getSet.set,
	$author$project$Internal$Msg$IconButtonMsg,
	$author$project$Internal$Component$generalise($author$project$Internal$IconButton$Implementation$update));
var $author$project$Internal$Msg$ListMsg = F2(
	function (a, b) {
		return {$: 'ListMsg', a: a, b: b};
	});
var $author$project$Internal$List$Model$defaultModel = {focused: $elm$core$Maybe$Nothing, ripples: $elm$core$Dict$empty};
var $author$project$Internal$List$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.list;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{list: x});
		}),
	$author$project$Internal$List$Model$defaultModel);
var $author$project$Internal$List$Model$NoOp = {$: 'NoOp'};
var $author$project$Internal$List$Model$RippleMsg = F2(
	function (a, b) {
		return {$: 'RippleMsg', a: a, b: b};
	});
var $elm$browser$Browser$Dom$focus = _Browser_call('focus');
var $author$project$Internal$List$Implementation$send = function (msg) {
	return A2(
		$elm$core$Task$perform,
		$elm$core$Basics$identity,
		$elm$core$Task$succeed(msg));
};
var $author$project$Internal$List$Implementation$update = F3(
	function (lift, msg, model) {
		switch (msg.$) {
			case 'RippleMsg':
				var index = msg.a;
				var msg_ = msg.b;
				var _v1 = A2(
					$author$project$Internal$Ripple$Implementation$update,
					msg_,
					A2(
						$elm$core$Maybe$withDefault,
						$author$project$Internal$Ripple$Model$defaultModel,
						A2($elm$core$Dict$get, index, model.ripples)));
				var ripple = _v1.a;
				var effects = _v1.b;
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{
								ripples: A3($elm$core$Dict$insert, index, ripple, model.ripples)
							})),
					A2(
						$elm$core$Platform$Cmd$map,
						A2(
							$elm$core$Basics$composeL,
							lift,
							$author$project$Internal$List$Model$RippleMsg(index)),
						effects));
			case 'ResetFocusedItem':
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{focused: $elm$core$Maybe$Nothing})),
					$elm$core$Platform$Cmd$none);
			case 'FocusItem':
				var id = msg.b;
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{focused: $elm$core$Maybe$Nothing})),
					A2(
						$elm$core$Task$attempt,
						function (_v2) {
							return lift($author$project$Internal$List$Model$NoOp);
						},
						$elm$browser$Browser$Dom$focus(id)));
			case 'SelectItem':
				var index = msg.a;
				var m = msg.b;
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{focused: $elm$core$Maybe$Nothing})),
					$author$project$Internal$List$Implementation$send(
						m(index)));
			default:
				return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Internal$List$Implementation$react = A4($author$project$Internal$Component$react, $author$project$Internal$List$Implementation$getSet.get, $author$project$Internal$List$Implementation$getSet.set, $author$project$Internal$Msg$ListMsg, $author$project$Internal$List$Implementation$update);
var $author$project$Internal$Menu$Model$defaultModel = {animating: false, geometry: $elm$core$Maybe$Nothing, index: $elm$core$Maybe$Nothing, keyDownWithinMenu: false, list: $author$project$Internal$List$Model$defaultModel, open: false, quickOpen: $elm$core$Maybe$Nothing};
var $author$project$Internal$Menu$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.menu;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{menu: x});
		}),
	$author$project$Internal$Menu$Model$defaultModel);
var $author$project$Internal$Menu$Model$AnimationEnd = {$: 'AnimationEnd'};
var $author$project$Internal$Menu$Model$Close = {$: 'Close'};
var $author$project$Internal$Menu$Model$ListMsg = function (a) {
	return {$: 'ListMsg', a: a};
};
var $author$project$Internal$Menu$Model$NoOp = {$: 'NoOp'};
var $author$project$Internal$Menu$Model$Open = {$: 'Open'};
var $author$project$Internal$Menu$Implementation$update = F3(
	function (lift, msg, model) {
		update:
		while (true) {
			switch (msg.$) {
				case 'NoOp':
					return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
				case 'Toggle':
					var $temp$lift = lift,
						$temp$msg = model.open ? $author$project$Internal$Menu$Model$Close : $author$project$Internal$Menu$Model$Open,
						$temp$model = model;
					lift = $temp$lift;
					msg = $temp$msg;
					model = $temp$model;
					continue update;
				case 'Open':
					return (!model.open) ? _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{animating: true, geometry: $elm$core$Maybe$Nothing, open: true})),
						$elm$core$Platform$Cmd$none) : _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
				case 'Close':
					return model.open ? _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{animating: true, open: false})),
						A2($elm$core$Maybe$withDefault, false, model.quickOpen) ? A2(
							$author$project$Internal$Helpers$delayedCmd,
							70,
							lift($author$project$Internal$Menu$Model$AnimationEnd)) : A2(
							$author$project$Internal$Helpers$delayedCmd,
							0,
							lift($author$project$Internal$Menu$Model$AnimationEnd))) : _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
				case 'CloseDelayed':
					return _Utils_Tuple2(
						$elm$core$Maybe$Nothing,
						A2(
							$author$project$Internal$Helpers$delayedCmd,
							50,
							lift($author$project$Internal$Menu$Model$Close)));
				case 'Init':
					var config = msg.a;
					var geometry = msg.b;
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{
									geometry: $elm$core$Maybe$Just(geometry),
									quickOpen: $elm$core$Maybe$Just(config.quickOpen)
								})),
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									A2(
									$elm$core$Task$attempt,
									function (_v1) {
										return lift($author$project$Internal$Menu$Model$NoOp);
									},
									$elm$browser$Browser$Dom$focus(config.focusedItemId)),
									config.quickOpen ? A2(
									$author$project$Internal$Helpers$delayedCmd,
									120,
									lift($author$project$Internal$Menu$Model$AnimationEnd)) : A2(
									$author$project$Internal$Helpers$delayedCmd,
									0,
									lift($author$project$Internal$Menu$Model$AnimationEnd))
								])));
				case 'AnimationEnd':
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{animating: false})),
						$elm$core$Platform$Cmd$none);
				case 'DocumentClick':
					if (model.open && (!_Utils_eq(model.geometry, $elm$core$Maybe$Nothing))) {
						var $temp$lift = lift,
							$temp$msg = $author$project$Internal$Menu$Model$Close,
							$temp$model = model;
						lift = $temp$lift;
						msg = $temp$msg;
						model = $temp$model;
						continue update;
					} else {
						return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
					}
				case 'KeyDown':
					var shiftKey = msg.a.shiftKey;
					var altKey = msg.a.altKey;
					var ctrlKey = msg.a.ctrlKey;
					var metaKey = msg.a.metaKey;
					var key = msg.b;
					var keyCode = msg.c;
					var isSpace = (key === 'Space') || (keyCode === 32);
					var isEscape = (key === 'Escape') || (keyCode === 27);
					var isEnter = (key === 'Enter') || (keyCode === 13);
					return (isEscape || (isSpace || isEnter)) ? _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{keyDownWithinMenu: true})),
						$elm$core$Platform$Cmd$none) : _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
				case 'KeyUp':
					var shiftKey = msg.a.shiftKey;
					var altKey = msg.a.altKey;
					var ctrlKey = msg.a.ctrlKey;
					var metaKey = msg.a.metaKey;
					var key = msg.b;
					var keyCode = msg.c;
					var isSpace = (key === 'Space') || (keyCode === 32);
					var isEscape = (key === 'Escape') || (keyCode === 27);
					var isEnter = (key === 'Enter') || (keyCode === 13);
					return A2(
						$elm$core$Tuple$mapFirst,
						$elm$core$Maybe$map(
							function (newModel) {
								return _Utils_update(
									newModel,
									{keyDownWithinMenu: false});
							}),
						((isEscape || (isSpace || isEnter)) && ((!(altKey || (ctrlKey || metaKey))) && model.keyDownWithinMenu)) ? A3($author$project$Internal$Menu$Implementation$update, lift, $author$project$Internal$Menu$Model$Close, model) : _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none));
				default:
					var msg_ = msg.a;
					return A2(
						$elm$core$Tuple$mapFirst,
						function (maybeNewList) {
							if (maybeNewList.$ === 'Just') {
								var newList = maybeNewList.a;
								return $elm$core$Maybe$Just(
									_Utils_update(
										model,
										{list: newList}));
							} else {
								return $elm$core$Maybe$Nothing;
							}
						},
						A3(
							$author$project$Internal$List$Implementation$update,
							A2($elm$core$Basics$composeL, lift, $author$project$Internal$Menu$Model$ListMsg),
							msg_,
							model.list));
			}
		}
	});
var $author$project$Internal$Menu$Implementation$react = A4($author$project$Internal$Component$react, $author$project$Internal$Menu$Implementation$getSet.get, $author$project$Internal$Menu$Implementation$getSet.set, $author$project$Internal$Msg$MenuMsg, $author$project$Internal$Menu$Implementation$update);
var $author$project$Internal$Msg$RadioButtonMsg = F2(
	function (a, b) {
		return {$: 'RadioButtonMsg', a: a, b: b};
	});
var $author$project$Internal$RadioButton$Model$defaultModel = {isFocused: false, ripple: $author$project$Internal$Ripple$Model$defaultModel};
var $author$project$Internal$RadioButton$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.radio;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{radio: x});
		}),
	$author$project$Internal$RadioButton$Model$defaultModel);
var $author$project$Internal$RadioButton$Model$RippleMsg = function (a) {
	return {$: 'RippleMsg', a: a};
};
var $author$project$Internal$RadioButton$Implementation$update = F3(
	function (lift, msg, model) {
		switch (msg.$) {
			case 'RippleMsg':
				var msg_ = msg.a;
				var _v1 = A2($author$project$Internal$Ripple$Implementation$update, msg_, model.ripple);
				var ripple = _v1.a;
				var effects = _v1.b;
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{ripple: ripple})),
					A2(
						$elm$core$Platform$Cmd$map,
						A2($elm$core$Basics$composeL, lift, $author$project$Internal$RadioButton$Model$RippleMsg),
						effects));
			case 'NoOp':
				return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
			default:
				var focus = msg.a;
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{isFocused: focus})),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Internal$RadioButton$Implementation$react = A4($author$project$Internal$Component$react, $author$project$Internal$RadioButton$Implementation$getSet.get, $author$project$Internal$RadioButton$Implementation$getSet.set, $author$project$Internal$Msg$RadioButtonMsg, $author$project$Internal$RadioButton$Implementation$update);
var $author$project$Internal$Msg$RippleMsg = F2(
	function (a, b) {
		return {$: 'RippleMsg', a: a, b: b};
	});
var $author$project$Internal$Ripple$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.ripple;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{ripple: x});
		}),
	$author$project$Internal$Ripple$Model$defaultModel);
var $author$project$Internal$Ripple$Implementation$react = A4(
	$author$project$Internal$Component$react,
	$author$project$Internal$Ripple$Implementation$getSet.get,
	$author$project$Internal$Ripple$Implementation$getSet.set,
	$author$project$Internal$Msg$RippleMsg,
	$author$project$Internal$Component$generalise($author$project$Internal$Ripple$Implementation$update));
var $author$project$Internal$Select$Model$defaultModel = {focused: false, isDirty: false, menu: $author$project$Internal$Menu$Model$defaultModel, ripple: $author$project$Internal$Ripple$Model$defaultModel};
var $author$project$Internal$Select$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.select;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{select: x});
		}),
	$author$project$Internal$Select$Model$defaultModel);
var $author$project$Internal$Select$Model$NoOp = {$: 'NoOp'};
var $author$project$Internal$Select$Model$OpenMenu = function (a) {
	return {$: 'OpenMenu', a: a};
};
var $author$project$Internal$Select$Model$RippleMsg = function (a) {
	return {$: 'RippleMsg', a: a};
};
var $author$project$Internal$Menu$Model$Toggle = {$: 'Toggle'};
var $author$project$Internal$Helpers$cmd = function (msg) {
	return A2(
		$elm$core$Task$perform,
		$elm$core$Basics$identity,
		$elm$core$Task$succeed(msg));
};
var $author$project$Internal$Select$Implementation$update = F3(
	function (lift, msg, model) {
		update:
		while (true) {
			switch (msg.$) {
				case 'NoOp':
					return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
				case 'Change':
					var changedValue = msg.a;
					var dirty = changedValue !== '';
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{isDirty: dirty})),
						$elm$core$Platform$Cmd$none);
				case 'Blur':
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{focused: false})),
						$elm$core$Platform$Cmd$none);
				case 'Focus':
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{focused: true})),
						$elm$core$Platform$Cmd$none);
				case 'RippleMsg':
					var msg_ = msg.a;
					var _v1 = A2($author$project$Internal$Ripple$Implementation$update, msg_, model.ripple);
					var ripple = _v1.a;
					var effects = _v1.b;
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{ripple: ripple})),
						A2(
							$elm$core$Platform$Cmd$map,
							A2($elm$core$Basics$composeL, lift, $author$project$Internal$Select$Model$RippleMsg),
							effects));
				case 'KeyDown':
					var menuIndex = msg.a;
					var key = msg.b;
					var keyCode = msg.c;
					var isSpace = (key === 'Space') || (keyCode === 32);
					var isEscape = (key === 'Escape') || (keyCode === 27);
					var isEnter = (key === 'Enter') || (keyCode === 13);
					return (isEscape || (isSpace || isEnter)) ? _Utils_Tuple2(
						$elm$core$Maybe$Nothing,
						A2(
							$author$project$Internal$Helpers$delayedCmd,
							16,
							lift(
								$author$project$Internal$Select$Model$OpenMenu(menuIndex)))) : _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
				case 'OpenMenu':
					var menuIndex = msg.a;
					return _Utils_Tuple2(
						$elm$core$Maybe$Nothing,
						$author$project$Internal$Helpers$cmd(
							lift(
								$author$project$Internal$Select$Model$MenuMsg($author$project$Internal$Menu$Model$Open))));
				case 'ToggleMenu':
					var $temp$lift = lift,
						$temp$msg = $author$project$Internal$Select$Model$MenuMsg($author$project$Internal$Menu$Model$Toggle),
						$temp$model = model;
					lift = $temp$lift;
					msg = $temp$msg;
					model = $temp$model;
					continue update;
				case 'MenuSelection':
					var index = msg.a;
					var onSelect_ = msg.b;
					var v = msg.c;
					return _Utils_Tuple2(
						$elm$core$Maybe$Nothing,
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									$author$project$Internal$Helpers$cmd(
									onSelect_(v)),
									A2(
									$elm$core$Task$attempt,
									function (_v2) {
										return lift($author$project$Internal$Select$Model$NoOp);
									},
									$elm$browser$Browser$Dom$focus(index))
								])));
				default:
					var msg_ = msg.a;
					return A2(
						$elm$core$Tuple$mapFirst,
						function (maybeNewMenu) {
							if (maybeNewMenu.$ === 'Just') {
								var newMenu = maybeNewMenu.a;
								return $elm$core$Maybe$Just(
									_Utils_update(
										model,
										{menu: newMenu}));
							} else {
								return $elm$core$Maybe$Nothing;
							}
						},
						A3(
							$author$project$Internal$Menu$Implementation$update,
							A2($elm$core$Basics$composeL, lift, $author$project$Internal$Select$Model$MenuMsg),
							msg_,
							model.menu));
			}
		}
	});
var $author$project$Internal$Select$Implementation$react = A4($author$project$Internal$Component$react, $author$project$Internal$Select$Implementation$getSet.get, $author$project$Internal$Select$Implementation$getSet.set, $author$project$Internal$Msg$SelectMsg, $author$project$Internal$Select$Implementation$update);
var $author$project$Internal$Msg$SliderMsg = F2(
	function (a, b) {
		return {$: 'SliderMsg', a: a, b: b};
	});
var $author$project$Internal$Slider$Model$defaultModel = {active: false, activeValue: $elm$core$Maybe$Nothing, focus: false, geometry: $elm$core$Maybe$Nothing, inTransit: false, preventFocus: false};
var $author$project$Internal$Slider$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.slider;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{slider: x});
		}),
	$author$project$Internal$Slider$Model$defaultModel);
var $author$project$Internal$Slider$Model$ActualUp = {$: 'ActualUp'};
var $author$project$Internal$Slider$Model$Init = function (a) {
	return {$: 'Init', a: a};
};
var $author$project$Internal$Slider$Model$defaultGeometry = {
	discrete: false,
	max: 100,
	min: 0,
	rect: {left: 0, width: 0},
	step: $elm$core$Maybe$Nothing
};
var $author$project$Internal$Slider$Implementation$valueFromPageX = F2(
	function (geometry, pageX) {
		var xPos = pageX - geometry.rect.left;
		var isRtl = false;
		var pctComplete = isRtl ? (1 - (xPos / geometry.rect.width)) : (xPos / geometry.rect.width);
		return geometry.min + (pctComplete * (geometry.max - geometry.min));
	});
var $author$project$Internal$Slider$Implementation$update = F3(
	function (lift, msg, model) {
		update:
		while (true) {
			switch (msg.$) {
				case 'NoOp':
					return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
				case 'Focus':
					return (!model.preventFocus) ? _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{focus: true})),
						$elm$core$Platform$Cmd$none) : _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
				case 'Blur':
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{focus: false, preventFocus: false})),
						$elm$core$Platform$Cmd$none);
				case 'TransitionEnd':
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{inTransit: false})),
						$elm$core$Platform$Cmd$none);
				case 'InteractionStart':
					var pageX = msg.b.pageX;
					var geometry = A2($elm$core$Maybe$withDefault, $author$project$Internal$Slider$Model$defaultGeometry, model.geometry);
					var activeValue = A2($author$project$Internal$Slider$Implementation$valueFromPageX, geometry, pageX);
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{
									active: true,
									activeValue: $elm$core$Maybe$Just(activeValue),
									inTransit: true,
									preventFocus: true
								})),
						$elm$core$Platform$Cmd$none);
				case 'ThumbContainerPointer':
					var pageX = msg.b.pageX;
					var geometry = A2($elm$core$Maybe$withDefault, $author$project$Internal$Slider$Model$defaultGeometry, model.geometry);
					var activeValue = A2($author$project$Internal$Slider$Implementation$valueFromPageX, geometry, pageX);
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{
									active: true,
									activeValue: $elm$core$Maybe$Just(activeValue),
									inTransit: false,
									preventFocus: true
								})),
						$elm$core$Platform$Cmd$none);
				case 'Drag':
					var pageX = msg.a.pageX;
					if (model.active) {
						var geometry = A2($elm$core$Maybe$withDefault, $author$project$Internal$Slider$Model$defaultGeometry, model.geometry);
						var activeValue = A2($author$project$Internal$Slider$Implementation$valueFromPageX, geometry, pageX);
						return _Utils_Tuple2(
							$elm$core$Maybe$Just(
								_Utils_update(
									model,
									{
										activeValue: $elm$core$Maybe$Just(activeValue),
										inTransit: false
									})),
							$elm$core$Platform$Cmd$none);
					} else {
						return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
					}
				case 'Init':
					var geometry = msg.a;
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{
									geometry: $elm$core$Maybe$Just(geometry)
								})),
						$elm$core$Platform$Cmd$none);
				case 'Resize':
					var geometry = msg.a;
					var $temp$lift = lift,
						$temp$msg = $author$project$Internal$Slider$Model$Init(geometry),
						$temp$model = model;
					lift = $temp$lift;
					msg = $temp$msg;
					model = $temp$model;
					continue update;
				case 'KeyDown':
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{focus: true})),
						$elm$core$Platform$Cmd$none);
				case 'Up':
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(model),
						A2(
							$elm$core$Task$perform,
							lift,
							$elm$core$Task$succeed($author$project$Internal$Slider$Model$ActualUp)));
				default:
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(
							_Utils_update(
								model,
								{active: false, activeValue: $elm$core$Maybe$Nothing})),
						$elm$core$Platform$Cmd$none);
			}
		}
	});
var $author$project$Internal$Slider$Implementation$react = A4($author$project$Internal$Component$react, $author$project$Internal$Slider$Implementation$getSet.get, $author$project$Internal$Slider$Implementation$getSet.set, $author$project$Internal$Msg$SliderMsg, $author$project$Internal$Slider$Implementation$update);
var $author$project$Internal$Msg$SnackbarMsg = F2(
	function (a, b) {
		return {$: 'SnackbarMsg', a: a, b: b};
	});
var $author$project$Internal$Snackbar$Model$Inert = {$: 'Inert'};
var $author$project$Internal$Snackbar$Model$defaultModel = {open: false, queue: _List_Nil, seq: -1, state: $author$project$Internal$Snackbar$Model$Inert};
var $author$project$Internal$Snackbar$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.snackbar;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{snackbar: x});
		}),
	$author$project$Internal$Snackbar$Model$defaultModel);
var $author$project$Internal$Snackbar$Model$Clicked = {$: 'Clicked'};
var $author$project$Internal$Snackbar$Model$Move = F2(
	function (a, b) {
		return {$: 'Move', a: a, b: b};
	});
var $author$project$Internal$Snackbar$Model$Fading = function (a) {
	return {$: 'Fading', a: a};
};
var $author$project$Internal$Snackbar$Model$Timeout = {$: 'Timeout'};
var $author$project$Internal$Snackbar$Implementation$next = function (model) {
	return $elm$core$Platform$Cmd$map(
		$author$project$Internal$Snackbar$Model$Move(model.seq));
};
var $author$project$Internal$Snackbar$Model$Active = function (a) {
	return {$: 'Active', a: a};
};
var $author$project$Internal$Snackbar$Implementation$tryDequeue = function (model) {
	var _v0 = _Utils_Tuple2(model.state, model.queue);
	if ((_v0.a.$ === 'Inert') && _v0.b.b) {
		var _v1 = _v0.a;
		var _v2 = _v0.b;
		var c = _v2.a;
		var cs = _v2.b;
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{
					open: false,
					queue: cs,
					seq: model.seq + 1,
					state: $author$project$Internal$Snackbar$Model$Active(c)
				}),
			A2(
				$elm$core$Platform$Cmd$map,
				$author$project$Internal$Snackbar$Model$Move(model.seq + 1),
				A2($author$project$Internal$Helpers$delayedCmd, c.timeout, $author$project$Internal$Snackbar$Model$Timeout)));
	} else {
		return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
	}
};
var $author$project$Internal$Snackbar$Implementation$move = F2(
	function (transition, model) {
		var _v0 = _Utils_Tuple2(model.state, transition);
		if (_v0.b.$ === 'Clicked') {
			if (_v0.a.$ === 'Active') {
				var contents = _v0.a.a;
				var _v3 = _v0.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							state: $author$project$Internal$Snackbar$Model$Fading(contents)
						}),
					A2(
						$author$project$Internal$Snackbar$Implementation$next,
						model,
						A2($author$project$Internal$Helpers$delayedCmd, contents.fade, $author$project$Internal$Snackbar$Model$Timeout)));
			} else {
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			}
		} else {
			switch (_v0.a.$) {
				case 'Inert':
					var _v1 = _v0.a;
					var _v2 = _v0.b;
					return $author$project$Internal$Snackbar$Implementation$tryDequeue(model);
				case 'Active':
					var contents = _v0.a.a;
					var _v4 = _v0.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								state: $author$project$Internal$Snackbar$Model$Fading(contents)
							}),
						A2(
							$author$project$Internal$Snackbar$Implementation$next,
							model,
							A2($author$project$Internal$Helpers$delayedCmd, contents.fade, $author$project$Internal$Snackbar$Model$Timeout)));
				default:
					var contents = _v0.a.a;
					var _v5 = _v0.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{state: $author$project$Internal$Snackbar$Model$Inert}),
						A2(
							$author$project$Internal$Snackbar$Implementation$next,
							model,
							$author$project$Internal$Helpers$cmd($author$project$Internal$Snackbar$Model$Timeout)));
			}
		}
	});
var $author$project$Internal$Snackbar$Implementation$update = F3(
	function (fwd, msg, model) {
		switch (msg.$) {
			case 'Move':
				var seq = msg.a;
				var transition = msg.b;
				return _Utils_eq(seq, model.seq) ? A2(
					$elm$core$Tuple$mapSecond,
					$elm$core$Platform$Cmd$map(fwd),
					A2($author$project$Internal$Snackbar$Implementation$move, transition, model)) : _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 'Dismiss':
				var dismissOnAction = msg.a;
				var actionOnDismiss = msg.b;
				var fwdEffect = function () {
					if (actionOnDismiss.$ === 'Just') {
						var msg_ = actionOnDismiss.a;
						return $author$project$Internal$Helpers$cmd(msg_);
					} else {
						return $elm$core$Platform$Cmd$none;
					}
				}();
				return A2(
					$elm$core$Tuple$mapSecond,
					function (cmd) {
						return $elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[cmd, fwdEffect]));
					},
					dismissOnAction ? A3(
						$author$project$Internal$Snackbar$Implementation$update,
						fwd,
						A2($author$project$Internal$Snackbar$Model$Move, model.seq, $author$project$Internal$Snackbar$Model$Clicked),
						model) : _Utils_Tuple2(model, $elm$core$Platform$Cmd$none));
			default:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{open: true}),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Internal$Snackbar$Implementation$react = A4(
	$author$project$Internal$Component$react,
	$author$project$Internal$Snackbar$Implementation$getSet.get,
	$author$project$Internal$Snackbar$Implementation$getSet.set,
	$author$project$Internal$Msg$SnackbarMsg,
	F3(
		function (fwd, msg, model) {
			return A2(
				$elm$core$Tuple$mapFirst,
				$elm$core$Maybe$Just,
				A3($author$project$Internal$Snackbar$Implementation$update, fwd, msg, model));
		}));
var $author$project$Internal$Msg$SwitchMsg = F2(
	function (a, b) {
		return {$: 'SwitchMsg', a: a, b: b};
	});
var $author$project$Internal$Switch$Model$defaultModel = {isFocused: false, ripple: $author$project$Internal$Ripple$Model$defaultModel};
var $author$project$Internal$Switch$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $._switch;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{_switch: x});
		}),
	$author$project$Internal$Switch$Model$defaultModel);
var $author$project$Internal$Switch$Model$RippleMsg = function (a) {
	return {$: 'RippleMsg', a: a};
};
var $author$project$Internal$Switch$Implementation$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'RippleMsg':
				var msg_ = msg.a;
				var _v1 = A2($author$project$Internal$Ripple$Implementation$update, msg_, model.ripple);
				var rippleState = _v1.a;
				var rippleCmd = _v1.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{ripple: rippleState}),
					A2($elm$core$Platform$Cmd$map, $author$project$Internal$Switch$Model$RippleMsg, rippleCmd));
			case 'SetFocus':
				var focus = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{isFocused: focus}),
					$elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Internal$Switch$Implementation$react = A4(
	$author$project$Internal$Component$react,
	$author$project$Internal$Switch$Implementation$getSet.get,
	$author$project$Internal$Switch$Implementation$getSet.set,
	$author$project$Internal$Msg$SwitchMsg,
	$author$project$Internal$Component$generalise($author$project$Internal$Switch$Implementation$update));
var $author$project$Internal$Msg$TabBarMsg = F2(
	function (a, b) {
		return {$: 'TabBarMsg', a: a, b: b};
	});
var $author$project$Internal$TabBar$Model$defaultModel = {activeTab: 0, geometry: $elm$core$Maybe$Nothing, ripples: $elm$core$Dict$empty, translateOffset: 0};
var $author$project$Internal$TabBar$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.tabbar;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{tabbar: x});
		}),
	$author$project$Internal$TabBar$Model$defaultModel);
var $author$project$Internal$TabBar$Model$NoOp = {$: 'NoOp'};
var $author$project$Internal$TabBar$Model$RippleMsg = F2(
	function (a, b) {
		return {$: 'RippleMsg', a: a, b: b};
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $author$project$Internal$TabBar$Implementation$calculateScrollIncrement = F5(
	function (geometry, index, nextIndex, scrollPosition, barWidth) {
		var maybe_next_tab = $elm$core$List$head(
			A2($elm$core$List$drop, nextIndex, geometry.tabs));
		var extraScrollAmount = 20;
		if (maybe_next_tab.$ === 'Just') {
			var next_tab = maybe_next_tab.a;
			var relativeContentRight = next_tab.contentRight - scrollPosition;
			var relativeContentLeft = (next_tab.contentLeft - scrollPosition) - barWidth;
			var rightIncrement = relativeContentLeft + extraScrollAmount;
			var leftIncrement = relativeContentRight - extraScrollAmount;
			return (_Utils_cmp(nextIndex, index) < 0) ? A2($elm$core$Basics$min, leftIncrement, 0) : A2($elm$core$Basics$max, rightIncrement, 0);
		} else {
			return 0;
		}
	});
var $author$project$Internal$TabBar$Model$defaultGeometry = {
	scrollArea: {offsetWidth: 0},
	tabBar: {offsetWidth: 0},
	tabs: _List_Nil
};
var $author$project$Internal$TabBar$Implementation$findAdjacentTabIndexClosestToEdge = F4(
	function (index, tab_, scrollPosition, barWidth) {
		var rootRight = tab_.offsetLeft + tab_.offsetWidth;
		var rootLeft = tab_.offsetLeft;
		var relativeRootRight = (rootRight - scrollPosition) - barWidth;
		var relativeRootLeft = rootLeft - scrollPosition;
		var relativeRootDelta = relativeRootLeft + relativeRootRight;
		var rightEdgeIsCloser = (relativeRootRight > 0) || (relativeRootDelta > 0);
		var leftEdgeIsCloser = (relativeRootLeft < 0) || (relativeRootDelta < 0);
		return leftEdgeIsCloser ? (index - 1) : (rightEdgeIsCloser ? (index + 1) : (-1));
	});
var $elm$browser$Browser$Dom$setViewportOf = _Browser_setViewportOf;
var $author$project$Internal$TabBar$Implementation$update = F3(
	function (lift, msg, model) {
		switch (msg.$) {
			case 'RippleMsg':
				var index = msg.a;
				var msg_ = msg.b;
				var _v1 = A2(
					$author$project$Internal$Ripple$Implementation$update,
					msg_,
					A2(
						$elm$core$Maybe$withDefault,
						$author$project$Internal$Ripple$Model$defaultModel,
						A2($elm$core$Dict$get, index, model.ripples)));
				var ripple = _v1.a;
				var effects = _v1.b;
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{
								ripples: A3($elm$core$Dict$insert, index, ripple, model.ripples)
							})),
					A2(
						$elm$core$Platform$Cmd$map,
						A2(
							$elm$core$Basics$composeL,
							lift,
							$author$project$Internal$TabBar$Model$RippleMsg(index)),
						effects));
			case 'Dispatch':
				var msgs = msg.a;
				return _Utils_Tuple2(
					$elm$core$Maybe$Nothing,
					$author$project$Internal$Dispatch$forward(msgs));
			case 'NoOp':
				return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Platform$Cmd$none);
			case 'Init':
				var geometry = msg.a;
				return _Utils_Tuple2(
					function () {
						var tabBarWidth = geometry.tabBar.offsetWidth;
						var scrollAreaWidth = geometry.scrollArea.offsetWidth;
						var isOverflowing = _Utils_cmp(tabBarWidth, scrollAreaWidth) > 0;
						var translateOffset = (!isOverflowing) ? 0 : model.translateOffset;
						return $elm$core$Maybe$Just(
							_Utils_update(
								model,
								{
									geometry: $elm$core$Maybe$Just(geometry),
									translateOffset: translateOffset
								}));
					}(),
					$elm$core$Platform$Cmd$none);
			default:
				var domId = msg.a;
				var tab_index = msg.b;
				var scrollPosition = msg.c;
				var geometry = A2($elm$core$Maybe$withDefault, $author$project$Internal$TabBar$Model$defaultGeometry, model.geometry);
				var tabAtIndex = function (i) {
					return A2(
						$elm$core$Maybe$withDefault,
						{contentLeft: 0, contentRight: 0, offsetLeft: 0, offsetWidth: 0},
						$elm$core$List$head(
							A2($elm$core$List$drop, i, geometry.tabs)));
				};
				var tab_ = tabAtIndex(tab_index);
				var barWidth = geometry.tabBar.offsetWidth;
				var next_tab_index = A4($author$project$Internal$TabBar$Implementation$findAdjacentTabIndexClosestToEdge, tab_index, tab_, scrollPosition, barWidth);
				var scrollIncrement = A5($author$project$Internal$TabBar$Implementation$calculateScrollIncrement, geometry, tab_index, next_tab_index, scrollPosition, barWidth);
				var newScrollPosition = (!tab_index) ? 0 : (_Utils_eq(
					tab_index,
					$elm$core$List$length(geometry.tabs) - 1) ? geometry.scrollArea.offsetWidth : (scrollPosition + scrollIncrement));
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{activeTab: tab_index})),
					A2(
						$elm$core$Task$perform,
						lift,
						A2(
							$elm$core$Task$onError,
							function (_v3) {
								return $elm$core$Task$succeed($author$project$Internal$TabBar$Model$NoOp);
							},
							A2(
								$elm$core$Task$map,
								function (_v2) {
									return $author$project$Internal$TabBar$Model$NoOp;
								},
								A3($elm$browser$Browser$Dom$setViewportOf, domId + '__scroll-area', newScrollPosition, 0)))));
		}
	});
var $author$project$Internal$TabBar$Implementation$react = A4($author$project$Internal$Component$react, $author$project$Internal$TabBar$Implementation$getSet.get, $author$project$Internal$TabBar$Implementation$getSet.set, $author$project$Internal$Msg$TabBarMsg, $author$project$Internal$TabBar$Implementation$update);
var $author$project$Internal$Msg$TextFieldMsg = F2(
	function (a, b) {
		return {$: 'TextFieldMsg', a: a, b: b};
	});
var $author$project$Internal$TextField$Model$defaultModel = {focused: false, geometry: $elm$core$Maybe$Nothing, isDirty: false, value: $elm$core$Maybe$Nothing};
var $author$project$Internal$TextField$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.textfield;
	},
	F2(
		function (x, c) {
			return _Utils_update(
				c,
				{textfield: x});
		}),
	$author$project$Internal$TextField$Model$defaultModel);
var $author$project$Internal$TextField$Implementation$update = F3(
	function (lift, msg, model) {
		switch (msg.$) {
			case 'Input':
				var str = msg.a;
				var dirty = str !== '';
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{
								isDirty: dirty,
								value: $elm$core$Maybe$Just(str)
							})),
					$elm$core$Platform$Cmd$none);
			case 'Blur':
				var geometry = function () {
					var _v1 = model.value;
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						return model.geometry;
					}
				}();
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{focused: false, geometry: geometry})),
					$elm$core$Platform$Cmd$none);
			case 'Focus':
				var geometry = msg.a;
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(
						_Utils_update(
							model,
							{
								focused: true,
								geometry: $elm$core$Maybe$Just(geometry)
							})),
					$elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(model),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Internal$TextField$Implementation$react = A4($author$project$Internal$Component$react, $author$project$Internal$TextField$Implementation$getSet.get, $author$project$Internal$TextField$Implementation$getSet.set, $author$project$Internal$Msg$TextFieldMsg, $author$project$Internal$TextField$Implementation$update);
var $author$project$Internal$Msg$TopAppBarMsg = F2(
	function (a, b) {
		return {$: 'TopAppBarMsg', a: a, b: b};
	});
var $author$project$Internal$TopAppBar$Model$defaultModel = {currentAppBarOffsetTop: 0, isDockedShowing: true, lastScrollPosition: $elm$core$Maybe$Nothing, ripples: $elm$core$Dict$empty, styleTop: $elm$core$Maybe$Nothing, topAppBarHeight: $elm$core$Maybe$Nothing, wasDocked: true};
var $author$project$Internal$TopAppBar$Implementation$getSet = A3(
	$author$project$Internal$Component$indexed,
	function ($) {
		return $.topAppBar;
	},
	F2(
		function (x, y) {
			return _Utils_update(
				y,
				{topAppBar: x});
		}),
	$author$project$Internal$TopAppBar$Model$defaultModel);
var $author$project$Internal$TopAppBar$Model$RippleMsg = F2(
	function (a, b) {
		return {$: 'RippleMsg', a: a, b: b};
	});
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return $elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var $author$project$Internal$TopAppBar$Implementation$checkForUpdate = function (model) {
	return A2(
		$elm$core$Maybe$map,
		function (topAppBarHeight) {
			var offscreenBoundaryTop = -topAppBarHeight;
			var hasAnyPixelsOnscreen = _Utils_cmp(model.currentAppBarOffsetTop, offscreenBoundaryTop) > 0;
			var hasAnyPixelsOffscreen = model.currentAppBarOffsetTop < 0;
			var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;
			return partiallyShowing ? _Utils_Tuple2(
				_Utils_update(
					model,
					{wasDocked: false}),
				true) : ((!model.wasDocked) ? _Utils_Tuple2(
				_Utils_update(
					model,
					{wasDocked: true}),
				true) : ((!_Utils_eq(model.isDockedShowing, hasAnyPixelsOnscreen)) ? _Utils_Tuple2(
				_Utils_update(
					model,
					{isDockedShowing: hasAnyPixelsOnscreen}),
				true) : _Utils_Tuple2(model, false)));
		},
		model.topAppBarHeight);
};
var $author$project$Internal$TopAppBar$Implementation$moveTopAppBar = function (model) {
	return A2(
		$elm$core$Maybe$andThen,
		function (_v0) {
			var updatedModel = _v0.a;
			var partiallyShowing = _v0.b;
			return partiallyShowing ? A2(
				$elm$core$Maybe$map,
				function (topAppBarHeight) {
					var styleTop = function () {
						var maxTopAppBarHeight = 128;
						return (_Utils_cmp(
							$elm$core$Basics$abs(updatedModel.currentAppBarOffsetTop),
							topAppBarHeight) > 0) ? (-maxTopAppBarHeight) : updatedModel.currentAppBarOffsetTop;
					}();
					return _Utils_update(
						updatedModel,
						{
							styleTop: $elm$core$Maybe$Just(styleTop)
						});
				},
				updatedModel.topAppBarHeight) : $elm$core$Maybe$Just(updatedModel);
		},
		$author$project$Internal$TopAppBar$Implementation$checkForUpdate(model));
};
var $author$project$Internal$TopAppBar$Implementation$topAppBarScrollHandler = F2(
	function (scrollPosition, model) {
		return A2(
			$elm$core$Maybe$withDefault,
			model,
			A2(
				$elm$core$Maybe$andThen,
				$author$project$Internal$TopAppBar$Implementation$moveTopAppBar,
				A2(
					$elm$core$Maybe$map,
					function (_v0) {
						var topAppBarHeight = _v0.a;
						var lastScrollPosition = _v0.b;
						var isCurrentlyBeingResized = false;
						var currentScrollPosition = A2($elm$core$Basics$max, scrollPosition, 0);
						var diff = currentScrollPosition - lastScrollPosition;
						var currentAppBarOffsetTop = model.currentAppBarOffsetTop - diff;
						var updatedAppBarOffsetTop = (!isCurrentlyBeingResized) ? ((currentAppBarOffsetTop > 0) ? 0 : ((_Utils_cmp(
							$elm$core$Basics$abs(currentAppBarOffsetTop),
							topAppBarHeight) > 0) ? (-topAppBarHeight) : currentAppBarOffsetTop)) : model.currentAppBarOffsetTop;
						var updatedModel = _Utils_update(
							model,
							{
								currentAppBarOffsetTop: updatedAppBarOffsetTop,
								lastScrollPosition: $elm$core$Maybe$Just(currentScrollPosition)
							});
						return A2(
							$elm$core$Maybe$withDefault,
							updatedModel,
							$author$project$Internal$TopAppBar$Implementation$moveTopAppBar(updatedModel));
					},
					A3(
						$elm$core$Maybe$map2,
						F2(
							function (topAppBarHeight, lastScrollPosition) {
								return _Utils_Tuple2(topAppBarHeight, lastScrollPosition);
							}),
						model.topAppBarHeight,
						model.lastScrollPosition))));
	});
var $author$project$Internal$TopAppBar$Implementation$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'RippleMsg':
				var index = msg.a;
				var msg_ = msg.b;
				var _v1 = A2(
					$author$project$Internal$Ripple$Implementation$update,
					msg_,
					A2(
						$elm$core$Maybe$withDefault,
						$author$project$Internal$Ripple$Model$defaultModel,
						A2($elm$core$Dict$get, index, model.ripples)));
				var ripple = _v1.a;
				var effects = _v1.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							ripples: A3($elm$core$Dict$insert, index, ripple, model.ripples)
						}),
					A2(
						$elm$core$Platform$Cmd$map,
						$author$project$Internal$TopAppBar$Model$RippleMsg(index),
						effects));
			case 'Init':
				var scrollPosition = msg.a.scrollPosition;
				var topAppBarHeight = msg.a.topAppBarHeight;
				return _Utils_Tuple2(
					A2(
						$author$project$Internal$TopAppBar$Implementation$topAppBarScrollHandler,
						scrollPosition,
						_Utils_update(
							model,
							{
								lastScrollPosition: $elm$core$Maybe$Just(scrollPosition),
								topAppBarHeight: $elm$core$Maybe$Just(topAppBarHeight)
							})),
					$elm$core$Platform$Cmd$none);
			case 'Scroll':
				var scrollPosition = msg.a.scrollPosition;
				return _Utils_Tuple2(
					A2($author$project$Internal$TopAppBar$Implementation$topAppBarScrollHandler, scrollPosition, model),
					$elm$core$Platform$Cmd$none);
			default:
				var scrollPosition = msg.a.scrollPosition;
				var topAppBarHeight = msg.a.topAppBarHeight;
				var currentHeight = topAppBarHeight;
				var currentAppBarOffsetTop = model.currentAppBarOffsetTop - (topAppBarHeight - currentHeight);
				var updatedModel = (!_Utils_eq(
					$elm$core$Maybe$Just(topAppBarHeight),
					model.topAppBarHeight)) ? _Utils_update(
					model,
					{
						currentAppBarOffsetTop: currentAppBarOffsetTop,
						topAppBarHeight: $elm$core$Maybe$Just(currentHeight),
						wasDocked: false
					}) : model;
				return _Utils_Tuple2(
					A2($author$project$Internal$TopAppBar$Implementation$topAppBarScrollHandler, scrollPosition, updatedModel),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Internal$TopAppBar$Implementation$react = A4(
	$author$project$Internal$Component$react,
	$author$project$Internal$TopAppBar$Implementation$getSet.get,
	$author$project$Internal$TopAppBar$Implementation$getSet.set,
	$author$project$Internal$Msg$TopAppBarMsg,
	$author$project$Internal$Component$generalise($author$project$Internal$TopAppBar$Implementation$update));
var $author$project$Material$update_ = F3(
	function (lift, msg, store) {
		switch (msg.$) {
			case 'Dispatch':
				var msgs = msg.a;
				return _Utils_Tuple2(
					$elm$core$Maybe$Nothing,
					$author$project$Internal$Dispatch$forward(msgs));
			case 'ButtonMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$Button$Implementation$react, lift, msg_, idx, store);
			case 'CheckboxMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$Checkbox$Implementation$react, lift, msg_, idx, store);
			case 'ChipMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$Chip$Implementation$react, lift, msg_, idx, store);
			case 'DialogMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$Dialog$Implementation$react, lift, msg_, idx, store);
			case 'DrawerMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$Drawer$Implementation$react, lift, msg_, idx, store);
			case 'FabMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$Fab$Implementation$react, lift, msg_, idx, store);
			case 'IconButtonMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$IconButton$Implementation$react, lift, msg_, idx, store);
			case 'ListMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$List$Implementation$react, lift, msg_, idx, store);
			case 'MenuMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$Menu$Implementation$react, lift, msg_, idx, store);
			case 'RadioButtonMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$RadioButton$Implementation$react, lift, msg_, idx, store);
			case 'RippleMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$Ripple$Implementation$react, lift, msg_, idx, store);
			case 'SelectMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$Select$Implementation$react, lift, msg_, idx, store);
			case 'SliderMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$Slider$Implementation$react, lift, msg_, idx, store);
			case 'SnackbarMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$Snackbar$Implementation$react, lift, msg_, idx, store);
			case 'SwitchMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$Switch$Implementation$react, lift, msg_, idx, store);
			case 'TabBarMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$TabBar$Implementation$react, lift, msg_, idx, store);
			case 'TextFieldMsg':
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$TextField$Implementation$react, lift, msg_, idx, store);
			default:
				var idx = msg.a;
				var msg_ = msg.b;
				return A4($author$project$Internal$TopAppBar$Implementation$react, lift, msg_, idx, store);
		}
	});
var $author$project$Material$update = F3(
	function (lift, msg, container) {
		return A2(
			$elm$core$Tuple$mapFirst,
			$elm$core$Maybe$withDefault(container),
			A2(
				$elm$core$Tuple$mapFirst,
				$elm$core$Maybe$map(
					function (mdc) {
						return _Utils_update(
							container,
							{mdc: mdc});
					}),
				A3(
					$author$project$Material$update_,
					lift,
					msg,
					function ($) {
						return $.mdc;
					}(container))));
	});
var $author$project$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'Mdc':
				var msg_ = msg.a;
				return A3($author$project$Material$update, $author$project$Main$Mdc, msg_, model);
			case 'OpenDrawerMsg':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{drawerOpen: true}),
					$elm$core$Platform$Cmd$none);
			case 'CloseDrawerMsg':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{drawerOpen: false}),
					$elm$core$Platform$Cmd$none);
			default:
				var appModel = model.appModel;
				var _v1 = _Utils_Tuple2(msg, appModel);
				_v1$20:
				while (true) {
					switch (_v1.a.$) {
						case 'Mdc':
							var msg_ = _v1.a.a;
							return A3($author$project$Material$update, $author$project$Main$Mdc, msg_, model);
						case 'GoRunMsg':
							if (_v1.b.$ === 'SetModel') {
								var _v2 = _v1.a;
								var input = _v1.b.a.input;
								var _v3 = $author$project$Main$fromInputToTimeSpans(input);
								if (_v3.$ === 'Just') {
									var timeSpans = _v3.a;
									return _Utils_Tuple2(
										_Utils_update(
											model,
											{
												appModel: $author$project$Main$RunModel(
													{rest: timeSpans, state: $author$project$Main$RunState, step: $author$project$Main$SoakStep, timeSpans: timeSpans})
											}),
										$author$project$Main$setNoSleep(true));
								} else {
									return _Utils_Tuple2(
										model,
										$author$project$Main$alert('数字のみを入力してください'));
								}
							} else {
								break _v1$20;
							}
						case 'TickMsg':
							if (_v1.b.$ === 'RunModel') {
								var runModel = _v1.b.a;
								var _v4 = runModel;
								var timeSpans = _v4.timeSpans;
								var step = _v4.step;
								var rest = _v4.rest;
								switch (step.$) {
									case 'SoakStep':
										var rest1 = rest.soak - 1;
										var rest_ = _Utils_update(
											rest,
											{soak: rest1});
										return _Utils_Tuple2(
											_Utils_update(
												model,
												{
													appModel: $author$project$Main$RunModel(
														_Utils_update(
															runModel,
															{rest: rest_}))
												}),
											(!rest1) ? $author$project$Main$playAlarm(_Utils_Tuple0) : $elm$core$Platform$Cmd$none);
									case 'DevStep':
										var rest1 = rest.dev - 1;
										var rest_ = _Utils_update(
											rest,
											{dev: rest1});
										return _Utils_Tuple2(
											_Utils_update(
												model,
												{
													appModel: $author$project$Main$RunModel(
														_Utils_update(
															runModel,
															{rest: rest_}))
												}),
											(!rest1) ? $author$project$Main$playAlarm(_Utils_Tuple0) : $elm$core$Platform$Cmd$none);
									case 'StopStep':
										var rest1 = rest.stop - 1;
										var rest_ = _Utils_update(
											rest,
											{stop: rest1});
										return _Utils_Tuple2(
											_Utils_update(
												model,
												{
													appModel: $author$project$Main$RunModel(
														_Utils_update(
															runModel,
															{rest: rest_}))
												}),
											(!rest1) ? $author$project$Main$playAlarm(_Utils_Tuple0) : $elm$core$Platform$Cmd$none);
									case 'FixStep':
										var rest1 = rest.fix - 1;
										var rest_ = _Utils_update(
											rest,
											{fix: rest1});
										return _Utils_Tuple2(
											_Utils_update(
												model,
												{
													appModel: $author$project$Main$RunModel(
														_Utils_update(
															runModel,
															{rest: rest_}))
												}),
											(!rest1) ? $author$project$Main$playAlarm(_Utils_Tuple0) : $elm$core$Platform$Cmd$none);
									case 'RinseStep':
										var rest1 = rest.rinse - 1;
										var rest_ = _Utils_update(
											rest,
											{rinse: rest1});
										return _Utils_Tuple2(
											_Utils_update(
												model,
												{
													appModel: $author$project$Main$RunModel(
														_Utils_update(
															runModel,
															{rest: rest_}))
												}),
											(!rest1) ? $author$project$Main$playAlarm(_Utils_Tuple0) : $elm$core$Platform$Cmd$none);
									case 'WetStep':
										var rest1 = rest.wet - 1;
										var rest_ = _Utils_update(
											rest,
											{wet: rest1});
										return _Utils_Tuple2(
											_Utils_update(
												model,
												{
													appModel: $author$project$Main$RunModel(
														_Utils_update(
															runModel,
															{rest: rest_}))
												}),
											(!rest1) ? $author$project$Main$playAlarm(_Utils_Tuple0) : $elm$core$Platform$Cmd$none);
									default:
										return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
								}
							} else {
								break _v1$20;
							}
						case 'NextMsg':
							if (_v1.b.$ === 'RunModel') {
								var _v6 = _v1.a;
								var runModel = _v1.b.a;
								var step_ = $author$project$Main$nextStep(runModel.step);
								if (step_.$ === 'EndStep') {
									return _Utils_Tuple2(
										_Utils_update(
											model,
											{
												appModel: $author$project$Main$RunModel(
													_Utils_update(
														runModel,
														{state: $author$project$Main$PauseState, step: step_}))
											}),
										$elm$core$Platform$Cmd$batch(
											_List_fromArray(
												[
													$author$project$Main$stopAlarm(_Utils_Tuple0),
													$author$project$Main$setNoSleep(false)
												])));
								} else {
									return _Utils_Tuple2(
										_Utils_update(
											model,
											{
												appModel: $author$project$Main$RunModel(
													_Utils_update(
														runModel,
														{state: $author$project$Main$RunState, step: step_}))
											}),
										$elm$core$Platform$Cmd$batch(
											_List_fromArray(
												[
													$author$project$Main$stopAlarm(_Utils_Tuple0),
													$author$project$Main$setNoSleep(true)
												])));
								}
							} else {
								break _v1$20;
							}
						case 'GoSetMsg':
							if (_v1.b.$ === 'RunModel') {
								var _v8 = _v1.a;
								var timeSpans = _v1.b.a.timeSpans;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											appModel: $author$project$Main$SetModel(
												{
													input: $author$project$Main$fromTimeSpansToInput(timeSpans)
												})
										}),
									$elm$core$Platform$Cmd$batch(
										_List_fromArray(
											[
												$author$project$Main$stopAlarm(_Utils_Tuple0),
												$author$project$Main$setNoSleep(false)
											])));
							} else {
								break _v1$20;
							}
						case 'PauseMsg':
							if (_v1.b.$ === 'RunModel') {
								var _v9 = _v1.a;
								var runModel = _v1.b.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											appModel: $author$project$Main$RunModel(
												_Utils_update(
													runModel,
													{state: $author$project$Main$PauseState}))
										}),
									$elm$core$Platform$Cmd$batch(
										_List_fromArray(
											[
												$author$project$Main$stopAlarm(_Utils_Tuple0),
												$author$project$Main$setNoSleep(false)
											])));
							} else {
								break _v1$20;
							}
						case 'RestartMsg':
							if (_v1.b.$ === 'RunModel') {
								var _v10 = _v1.a;
								var runModel = _v1.b.a;
								var _v11 = runModel.step;
								if (_v11.$ === 'EndStep') {
									return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
								} else {
									return _Utils_Tuple2(
										_Utils_update(
											model,
											{
												appModel: $author$project$Main$RunModel(
													_Utils_update(
														runModel,
														{state: $author$project$Main$RunState}))
											}),
										$author$project$Main$setNoSleep(true));
								}
							} else {
								break _v1$20;
							}
						case 'InitMsg':
							if (_v1.b.$ === 'RunModel') {
								var _v12 = _v1.a;
								var runModel = _v1.b.a;
								var spans = runModel.timeSpans;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											appModel: $author$project$Main$RunModel(
												_Utils_update(
													runModel,
													{rest: spans, state: $author$project$Main$PauseState, step: $author$project$Main$SoakStep}))
										}),
									$elm$core$Platform$Cmd$batch(
										_List_fromArray(
											[
												$author$project$Main$stopAlarm(_Utils_Tuple0),
												$author$project$Main$setNoSleep(false)
											])));
							} else {
								break _v1$20;
							}
						case 'SetMsg':
							if (_v1.b.$ === 'SetModel') {
								switch (_v1.a.a.$) {
									case 'SoakMinutesSource':
										var _v13 = _v1.a;
										var _v14 = _v13.a;
										var value = _v13.b;
										var input = _v1.b.a.input;
										var timeInput = input.soak;
										return _Utils_Tuple2(
											_Utils_update(
												model,
												{
													appModel: $author$project$Main$SetModel(
														{
															input: _Utils_update(
																input,
																{
																	soak: _Utils_update(
																		timeInput,
																		{minutes: value})
																})
														})
												}),
											$elm$core$Platform$Cmd$none);
									case 'SoakSecondsSource':
										var _v15 = _v1.a;
										var _v16 = _v15.a;
										var value = _v15.b;
										var input = _v1.b.a.input;
										var timeInput = input.soak;
										return _Utils_Tuple2(
											_Utils_update(
												model,
												{
													appModel: $author$project$Main$SetModel(
														{
															input: _Utils_update(
																input,
																{
																	soak: _Utils_update(
																		timeInput,
																		{seconds: value})
																})
														})
												}),
											$elm$core$Platform$Cmd$none);
									case 'DevMinutesSource':
										var _v17 = _v1.a;
										var _v18 = _v17.a;
										var value = _v17.b;
										var input = _v1.b.a.input;
										var timeInput = input.dev;
										return _Utils_Tuple2(
											_Utils_update(
												model,
												{
													appModel: $author$project$Main$SetModel(
														{
															input: _Utils_update(
																input,
																{
																	dev: _Utils_update(
																		timeInput,
																		{minutes: value})
																})
														})
												}),
											$elm$core$Platform$Cmd$none);
									case 'DevSecondsSource':
										var _v19 = _v1.a;
										var _v20 = _v19.a;
										var value = _v19.b;
										var input = _v1.b.a.input;
										var timeInput = input.dev;
										return _Utils_Tuple2(
											_Utils_update(
												model,
												{
													appModel: $author$project$Main$SetModel(
														{
															input: _Utils_update(
																input,
																{
																	dev: _Utils_update(
																		timeInput,
																		{seconds: value})
																})
														})
												}),
											$elm$core$Platform$Cmd$none);
									case 'StopMinutesSource':
										var _v21 = _v1.a;
										var _v22 = _v21.a;
										var value = _v21.b;
										var input = _v1.b.a.input;
										var timeInput = input.stop;
										return _Utils_Tuple2(
											_Utils_update(
												model,
												{
													appModel: $author$project$Main$SetModel(
														{
															input: _Utils_update(
																input,
																{
																	stop: _Utils_update(
																		timeInput,
																		{minutes: value})
																})
														})
												}),
											$elm$core$Platform$Cmd$none);
									case 'StopSecondsSource':
										var _v23 = _v1.a;
										var _v24 = _v23.a;
										var value = _v23.b;
										var input = _v1.b.a.input;
										var timeInput = input.stop;
										return _Utils_Tuple2(
											_Utils_update(
												model,
												{
													appModel: $author$project$Main$SetModel(
														{
															input: _Utils_update(
																input,
																{
																	stop: _Utils_update(
																		timeInput,
																		{seconds: value})
																})
														})
												}),
											$elm$core$Platform$Cmd$none);
									case 'FixMinutesSource':
										var _v25 = _v1.a;
										var _v26 = _v25.a;
										var value = _v25.b;
										var input = _v1.b.a.input;
										var timeInput = input.fix;
										return _Utils_Tuple2(
											_Utils_update(
												model,
												{
													appModel: $author$project$Main$SetModel(
														{
															input: _Utils_update(
																input,
																{
																	fix: _Utils_update(
																		timeInput,
																		{minutes: value})
																})
														})
												}),
											$elm$core$Platform$Cmd$none);
									case 'FixSecondsSource':
										var _v27 = _v1.a;
										var _v28 = _v27.a;
										var value = _v27.b;
										var input = _v1.b.a.input;
										var timeInput = input.fix;
										return _Utils_Tuple2(
											_Utils_update(
												model,
												{
													appModel: $author$project$Main$SetModel(
														{
															input: _Utils_update(
																input,
																{
																	fix: _Utils_update(
																		timeInput,
																		{seconds: value})
																})
														})
												}),
											$elm$core$Platform$Cmd$none);
									case 'RinseMinutesSource':
										var _v29 = _v1.a;
										var _v30 = _v29.a;
										var value = _v29.b;
										var input = _v1.b.a.input;
										var timeInput = input.rinse;
										return _Utils_Tuple2(
											_Utils_update(
												model,
												{
													appModel: $author$project$Main$SetModel(
														{
															input: _Utils_update(
																input,
																{
																	rinse: _Utils_update(
																		timeInput,
																		{minutes: value})
																})
														})
												}),
											$elm$core$Platform$Cmd$none);
									case 'RinseSecondsSource':
										var _v31 = _v1.a;
										var _v32 = _v31.a;
										var value = _v31.b;
										var input = _v1.b.a.input;
										var timeInput = input.rinse;
										return _Utils_Tuple2(
											_Utils_update(
												model,
												{
													appModel: $author$project$Main$SetModel(
														{
															input: _Utils_update(
																input,
																{
																	rinse: _Utils_update(
																		timeInput,
																		{seconds: value})
																})
														})
												}),
											$elm$core$Platform$Cmd$none);
									case 'WetMinutesSource':
										var _v33 = _v1.a;
										var _v34 = _v33.a;
										var value = _v33.b;
										var input = _v1.b.a.input;
										var timeInput = input.wet;
										return _Utils_Tuple2(
											_Utils_update(
												model,
												{
													appModel: $author$project$Main$SetModel(
														{
															input: _Utils_update(
																input,
																{
																	wet: _Utils_update(
																		timeInput,
																		{minutes: value})
																})
														})
												}),
											$elm$core$Platform$Cmd$none);
									case 'WetSecondsSource':
										var _v35 = _v1.a;
										var _v36 = _v35.a;
										var value = _v35.b;
										var input = _v1.b.a.input;
										var timeInput = input.wet;
										return _Utils_Tuple2(
											_Utils_update(
												model,
												{
													appModel: $author$project$Main$SetModel(
														{
															input: _Utils_update(
																input,
																{
																	wet: _Utils_update(
																		timeInput,
																		{seconds: value})
																})
														})
												}),
											$elm$core$Platform$Cmd$none);
									default:
										break _v1$20;
								}
							} else {
								break _v1$20;
							}
						default:
							break _v1$20;
					}
				}
				return _Utils_Tuple2(
					model,
					$author$project$Main$alert('unexpected: update'));
		}
	});
var $author$project$Main$CloseDrawerMsg = {$: 'CloseDrawerMsg'};
var $author$project$Main$DevMinutesSource = {$: 'DevMinutesSource'};
var $author$project$Main$DevSecondsSource = {$: 'DevSecondsSource'};
var $author$project$Main$FixMinutesSource = {$: 'FixMinutesSource'};
var $author$project$Main$FixSecondsSource = {$: 'FixSecondsSource'};
var $author$project$Main$GoRunMsg = {$: 'GoRunMsg'};
var $author$project$Main$GoSetMsg = {$: 'GoSetMsg'};
var $author$project$Main$InitMsg = {$: 'InitMsg'};
var $author$project$Main$NextMsg = {$: 'NextMsg'};
var $author$project$Main$OpenDrawerMsg = {$: 'OpenDrawerMsg'};
var $author$project$Main$PauseMsg = {$: 'PauseMsg'};
var $author$project$Main$RestartMsg = {$: 'RestartMsg'};
var $author$project$Main$RinseMinutesSource = {$: 'RinseMinutesSource'};
var $author$project$Main$RinseSecondsSource = {$: 'RinseSecondsSource'};
var $author$project$Main$SetMsg = F2(
	function (a, b) {
		return {$: 'SetMsg', a: a, b: b};
	});
var $author$project$Main$SoakMinutesSource = {$: 'SoakMinutesSource'};
var $author$project$Main$SoakSecondsSource = {$: 'SoakSecondsSource'};
var $author$project$Main$StopMinutesSource = {$: 'StopMinutesSource'};
var $author$project$Main$StopSecondsSource = {$: 'StopSecondsSource'};
var $author$project$Main$WetMinutesSource = {$: 'WetMinutesSource'};
var $author$project$Main$WetSecondsSource = {$: 'WetSecondsSource'};
var $author$project$Internal$List$Implementation$HtmlList = function (a) {
	return {$: 'HtmlList', a: a};
};
var $author$project$Internal$List$Model$FocusItem = F2(
	function (a, b) {
		return {$: 'FocusItem', a: a, b: b};
	});
var $author$project$Internal$List$Model$SelectItem = F2(
	function (a, b) {
		return {$: 'SelectItem', a: a, b: b};
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $elm$virtual_dom$VirtualDom$Custom = function (a) {
	return {$: 'Custom', a: a};
};
var $elm$html$Html$Events$custom = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Custom(decoder));
	});
var $elm$core$Result$toMaybe = function (result) {
	if (result.$ === 'Ok') {
		var v = result.a;
		return $elm$core$Maybe$Just(v);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Internal$Dispatch$flatten = function (decoders) {
	var tryMergeStep = F3(
		function (value, decoder, result) {
			return A2(
				$elm$core$Maybe$withDefault,
				result,
				A2(
					$elm$core$Maybe$map,
					function (_v0) {
						var message = _v0.message;
						var stopPropagation = _v0.stopPropagation;
						var preventDefault = _v0.preventDefault;
						return {
							message: A2($elm$core$List$cons, message, result.message),
							preventDefault: preventDefault || result.preventDefault,
							stopPropagation: stopPropagation || result.stopPropagation
						};
					},
					$elm$core$Result$toMaybe(
						A2($elm$json$Json$Decode$decodeValue, decoder, value))));
		});
	var tryMerge = function (value) {
		return A3(
			$elm$core$List$foldl,
			tryMergeStep(value),
			{message: _List_Nil, preventDefault: false, stopPropagation: false},
			decoders);
	};
	return A2($elm$json$Json$Decode$map, tryMerge, $elm$json$Json$Decode$value);
};
var $author$project$Internal$Dispatch$toAttributes = function (_v0) {
	var config = _v0.a;
	var _v1 = config.lift;
	if (_v1.$ === 'Just') {
		var lift = _v1.a;
		return A2(
			$elm$core$List$map,
			function (_v3) {
				var event = _v3.a;
				var flatDecoder = _v3.b;
				return A2(
					$elm$html$Html$Events$custom,
					event,
					lift(flatDecoder));
			},
			$elm$core$Dict$toList(
				A2(
					$elm$core$Dict$map,
					function (_v2) {
						return $author$project$Internal$Dispatch$flatten;
					},
					config.decoders)));
	} else {
		return A2(
			$elm$core$List$concatMap,
			function (_v4) {
				var event = _v4.a;
				var decoders = _v4.b;
				return A2(
					$elm$core$List$map,
					$elm$html$Html$Events$custom(event),
					decoders);
			},
			$elm$core$Dict$toList(config.decoders));
	}
};
var $author$project$Internal$Options$addAttributes = F2(
	function (summary, attrs) {
		var styleText = A2(
			$elm$core$String$join,
			'; ',
			A2(
				$elm$core$List$map,
				function (_v0) {
					var key = _v0.a;
					var value = _v0.b;
					return A2(
						$elm$core$String$join,
						': ',
						_List_fromArray(
							[key, value]));
				},
				summary.css));
		var style = (styleText !== '') ? _List_fromArray(
			[
				A2($elm$html$Html$Attributes$attribute, 'style', styleText)
			]) : _List_Nil;
		var all = _Utils_ap(
			summary.attrs,
			_Utils_ap(
				style,
				_Utils_ap(
					A2($elm$core$List$map, $elm$html$Html$Attributes$class, summary.classes),
					_Utils_ap(
						attrs,
						_Utils_ap(
							summary.internal,
							$author$project$Internal$Dispatch$toAttributes(summary.dispatch))))));
		return all;
	});
var $author$project$Internal$Dispatch$Config = function (a) {
	return {$: 'Config', a: a};
};
var $author$project$Internal$Dispatch$add = F3(
	function (event, decoder, _v0) {
		var config = _v0.a;
		return $author$project$Internal$Dispatch$Config(
			_Utils_update(
				config,
				{
					decoders: A3(
						$elm$core$Dict$update,
						event,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Maybe$map(
								$elm$core$List$cons(decoder)),
							A2(
								$elm$core$Basics$composeR,
								$elm$core$Maybe$withDefault(
									_List_fromArray(
										[decoder])),
								$elm$core$Maybe$Just)),
						config.decoders)
				}));
	});
var $author$project$Internal$Dispatch$setLift = F2(
	function (lift, _v0) {
		var decoders = _v0.a.decoders;
		return $author$project$Internal$Dispatch$Config(
			{
				decoders: decoders,
				lift: $elm$core$Maybe$Just(lift)
			});
	});
var $author$project$Internal$Options$collect1 = F2(
	function (opt, acc) {
		switch (opt.$) {
			case 'Class':
				var x = opt.a;
				return _Utils_update(
					acc,
					{
						classes: A2($elm$core$List$cons, x, acc.classes)
					});
			case 'CSS':
				var x = opt.a;
				return _Utils_update(
					acc,
					{
						css: A2($elm$core$List$cons, x, acc.css)
					});
			case 'Attribute':
				var x = opt.a;
				return _Utils_update(
					acc,
					{
						attrs: A2($elm$core$List$cons, x, acc.attrs)
					});
			case 'Internal':
				var x = opt.a;
				return _Utils_update(
					acc,
					{
						internal: A2($elm$core$List$cons, x, acc.internal)
					});
			case 'Many':
				var opts = opt.a;
				return A3($elm$core$List$foldl, $author$project$Internal$Options$collect1, acc, opts);
			case 'Set':
				var g = opt.a;
				return _Utils_update(
					acc,
					{
						config: g(acc.config)
					});
			case 'Listener':
				var event = opt.a;
				var decoder = opt.b;
				return _Utils_update(
					acc,
					{
						dispatch: A3($author$project$Internal$Dispatch$add, event, decoder, acc.dispatch)
					});
			case 'Lift':
				var lift = opt.a;
				return _Utils_update(
					acc,
					{
						dispatch: A2($author$project$Internal$Dispatch$setLift, lift, acc.dispatch)
					});
			default:
				return acc;
		}
	});
var $author$project$Internal$Options$recollect = F2(
	function (summary, properties) {
		var reversed_summary = A3($elm$core$List$foldl, $author$project$Internal$Options$collect1, summary, properties);
		var new_summary = {
			attrs: $elm$core$List$reverse(reversed_summary.attrs),
			classes: $elm$core$List$reverse(reversed_summary.classes),
			config: reversed_summary.config,
			css: $elm$core$List$reverse(reversed_summary.css),
			dispatch: reversed_summary.dispatch,
			internal: $elm$core$List$reverse(reversed_summary.internal)
		};
		return new_summary;
	});
var $author$project$Internal$Options$apply = F4(
	function (summary, ctor, options, attrs) {
		return ctor(
			A2(
				$author$project$Internal$Options$addAttributes,
				A2($author$project$Internal$Options$recollect, summary, options),
				attrs));
	});
var $author$project$Internal$Options$Attribute = function (a) {
	return {$: 'Attribute', a: a};
};
var $author$project$Internal$Options$aria = F2(
	function (key, val) {
		return $author$project$Internal$Options$Attribute(
			A2($elm$html$Html$Attributes$attribute, 'aria-' + key, val));
	});
var $author$project$Internal$Options$Summary = F6(
	function (classes, css, attrs, internal, dispatch, config) {
		return {attrs: attrs, classes: classes, config: config, css: css, dispatch: dispatch, internal: internal};
	});
var $author$project$Internal$Dispatch$defaultConfig = $author$project$Internal$Dispatch$Config(
	{decoders: $elm$core$Dict$empty, lift: $elm$core$Maybe$Nothing});
var $author$project$Internal$Options$collect = A2(
	$elm$core$Basics$composeR,
	A5($author$project$Internal$Options$Summary, _List_Nil, _List_Nil, _List_Nil, _List_Nil, $author$project$Internal$Dispatch$defaultConfig),
	$author$project$Internal$Options$recollect);
var $author$project$Internal$Options$Class = function (a) {
	return {$: 'Class', a: a};
};
var $author$project$Internal$Options$cs = function (c) {
	return $author$project$Internal$Options$Class(c);
};
var $author$project$Internal$Options$data = F2(
	function (key, val) {
		return $author$project$Internal$Options$Attribute(
			A2($elm$html$Html$Attributes$attribute, 'data-' + key, val));
	});
var $author$project$Internal$List$Implementation$defaultConfig = {activated: false, dataValue: $elm$core$Maybe$Nothing, disabled: false, isInteractive: true, isRadioGroup: false, isSingleSelectionList: false, node: $elm$core$Maybe$Nothing, onSelectListItem: $elm$core$Maybe$Nothing, ripple: true, selected: false, selectedIndex: $elm$core$Maybe$Nothing, useActivated: false};
var $author$project$Internal$List$Implementation$disabledClass = $author$project$Internal$Options$cs('mdc-list-item--disabled');
var $author$project$Internal$List$Implementation$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var first = list.a;
				var rest = list.b;
				if (predicate(first)) {
					return $elm$core$Maybe$Just(first);
				} else {
					var $temp$predicate = predicate,
						$temp$list = rest;
					predicate = $temp$predicate;
					list = $temp$list;
					continue find;
				}
			}
		}
	});
var $elm$core$Array$toIndexedList = function (array) {
	var len = array.a;
	var helper = F2(
		function (entry, _v0) {
			var index = _v0.a;
			var list = _v0.b;
			return _Utils_Tuple2(
				index - 1,
				A2(
					$elm$core$List$cons,
					_Utils_Tuple2(index, entry),
					list));
		});
	return A3(
		$elm$core$Array$foldr,
		helper,
		_Utils_Tuple2(len - 1, _List_Nil),
		array).b;
};
var $author$project$Internal$List$Implementation$slicedIndexedList = F3(
	function (from, to, array) {
		return $elm$core$Array$toIndexedList(
			A3($elm$core$Array$slice, from, to, array));
	});
var $author$project$Internal$List$Implementation$firstNonEmptyId = F2(
	function (from, array) {
		var list = A3(
			$author$project$Internal$List$Implementation$slicedIndexedList,
			from,
			$elm$core$Array$length(array),
			array);
		var non_empty_id = A2(
			$author$project$Internal$List$Implementation$find,
			function (_v0) {
				var id = _v0.b;
				return id !== '';
			},
			list);
		return non_empty_id;
	});
var $author$project$Internal$Options$id = A2($elm$core$Basics$composeL, $author$project$Internal$Options$Attribute, $elm$html$Html$Attributes$id);
var $author$project$Internal$List$Implementation$lastNonEmptyId = F2(
	function (to, array) {
		var list = A3($author$project$Internal$List$Implementation$slicedIndexedList, 0, to, array);
		var non_empty_id = A2(
			$author$project$Internal$List$Implementation$find,
			function (_v0) {
				var i = _v0.a;
				var id = _v0.b;
				return id !== '';
			},
			$elm$core$List$reverse(list));
		return non_empty_id;
	});
var $author$project$Internal$List$Implementation$listItemClass = $author$project$Internal$Options$cs('mdc-list-item');
var $author$project$Internal$List$Implementation$listItemDomId = F2(
	function (domId, index) {
		return domId + ('--' + $elm$core$String$fromInt(index));
	});
var $author$project$Internal$Options$None = {$: 'None'};
var $author$project$Internal$Options$nop = $author$project$Internal$Options$None;
var $author$project$Internal$Ripple$Implementation$none = {interactionHandler: $author$project$Internal$Options$nop, properties: $author$project$Internal$Options$nop};
var $author$project$Internal$Options$Listener = F2(
	function (a, b) {
		return {$: 'Listener', a: a, b: b};
	});
var $author$project$Internal$Options$on = F2(
	function (event, decodeMessage) {
		return A2(
			$author$project$Internal$Options$Listener,
			event,
			A2(
				$elm$json$Json$Decode$map,
				function (message) {
					return {message: message, preventDefault: false, stopPropagation: false};
				},
				decodeMessage));
	});
var $author$project$Internal$Options$onClick = function (msg) {
	return A2(
		$author$project$Internal$Options$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $author$project$Internal$Options$onWithOptions = function (evt) {
	return $author$project$Internal$Options$Listener(evt);
};
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $author$project$Internal$Options$role = function (value) {
	return $author$project$Internal$Options$Attribute(
		A2($elm$html$Html$Attributes$attribute, 'role', value));
};
var $elm$html$Html$Attributes$tabindex = function (n) {
	return A2(
		_VirtualDom_attribute,
		'tabIndex',
		$elm$core$String$fromInt(n));
};
var $author$project$Internal$Options$tabindex = function (value) {
	return $author$project$Internal$Options$Attribute(
		$elm$html$Html$Attributes$tabindex(value));
};
var $author$project$Internal$Ripple$Model$Blur = {$: 'Blur'};
var $author$project$Internal$Ripple$Model$Deactivate = {$: 'Deactivate'};
var $author$project$Internal$Ripple$Model$Focus = {$: 'Focus'};
var $author$project$Internal$Ripple$Model$SetCssVariables = F2(
	function (a, b) {
		return {$: 'SetCssVariables', a: a, b: b};
	});
var $author$project$Internal$Ripple$Model$activationEventTypes = _List_fromArray(
	['touchstart', 'pointerdown', 'mousedown']);
var $author$project$Internal$Ripple$Model$cssClasses = {bgFocused: 'mdc-ripple-upgraded--background-focused', fgActivation: 'mdc-ripple-upgraded--foreground-activation', fgDeactivation: 'mdc-ripple-upgraded--foreground-deactivation', root: 'mdc-ripple-upgraded', unbounded: 'mdc-ripple-upgraded--unbounded'};
var $author$project$Internal$Options$CSS = function (a) {
	return {$: 'CSS', a: a};
};
var $author$project$Internal$Options$css = F2(
	function (key, value) {
		return $author$project$Internal$Options$CSS(
			_Utils_Tuple2(key, value));
	});
var $elm$core$Basics$round = _Basics_round;
var $author$project$Internal$Ripple$Model$strings = {varFgScale: '--mdc-ripple-fg-scale', varFgSize: '--mdc-ripple-fg-size', varFgTranslateEnd: '--mdc-ripple-fg-translate-end', varFgTranslateStart: '--mdc-ripple-fg-translate-start', varLeft: '--mdc-ripple-left', varTop: '--mdc-ripple-top'};
var $author$project$Internal$Ripple$Implementation$cssVariables = F2(
	function (isUnbounded, _v0) {
		var fgScale = _v0.fgScale;
		var translateStart = _v0.translateStart;
		var translateEnd = _v0.translateEnd;
		var initialSize = _v0.initialSize;
		var frame = _v0.frame;
		var unboundedCoords = isUnbounded ? {
			left: $elm$core$Basics$round((frame.width - initialSize) / 2),
			top: $elm$core$Basics$round((frame.height - initialSize) / 2)
		} : {left: 0, top: 0};
		var fgSize = $elm$core$String$fromInt(initialSize) + 'px';
		var variables = $elm$core$List$concat(
			_List_fromArray(
				[
					_List_fromArray(
					[
						A2($author$project$Internal$Options$css, $author$project$Internal$Ripple$Model$strings.varFgSize, fgSize),
						A2(
						$author$project$Internal$Options$css,
						$author$project$Internal$Ripple$Model$strings.varFgScale,
						$elm$core$String$fromFloat(fgScale))
					]),
					isUnbounded ? _List_fromArray(
					[
						A2(
						$author$project$Internal$Options$css,
						$author$project$Internal$Ripple$Model$strings.varTop,
						$elm$core$String$fromFloat(unboundedCoords.top) + 'px'),
						A2(
						$author$project$Internal$Options$css,
						$author$project$Internal$Ripple$Model$strings.varLeft,
						$elm$core$String$fromFloat(unboundedCoords.left) + 'px')
					]) : _List_fromArray(
					[
						A2($author$project$Internal$Options$css, $author$project$Internal$Ripple$Model$strings.varFgTranslateStart, translateStart),
						A2($author$project$Internal$Options$css, $author$project$Internal$Ripple$Model$strings.varFgTranslateEnd, translateEnd)
					])
				]));
		return variables;
	});
var $author$project$Internal$Ripple$Model$Activate0 = F2(
	function (a, b) {
		return {$: 'Activate0', a: a, b: b};
	});
var $author$project$Internal$Ripple$Model$Event = F2(
	function (eventType, pagePoint) {
		return {eventType: eventType, pagePoint: pagePoint};
	});
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$fail = _Json_fail;
var $author$project$Internal$Ripple$Implementation$decodeActivate = function (_v0) {
	var domId = _v0.domId;
	var isUnbounded = _v0.isUnbounded;
	var isActivated = _v0.isActivated;
	var previousActivationEvent = _v0.previousActivationEvent;
	var decodePagePoint = A3(
		$elm$json$Json$Decode$map2,
		F2(
			function (pageX, pageY) {
				return {pageX: pageX, pageY: pageY};
			}),
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['pageX']),
			$elm$json$Json$Decode$float),
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['pageY']),
			$elm$json$Json$Decode$float));
	var firstChangedTouch = A2(
		$elm$json$Json$Decode$andThen,
		function (changedTouches) {
			var _v3 = $elm$core$List$head(changedTouches);
			if (_v3.$ === 'Just') {
				var pagePoint = _v3.a;
				return $elm$json$Json$Decode$succeed(pagePoint);
			} else {
				return $elm$json$Json$Decode$fail('');
			}
		},
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['changedTouches']),
			$elm$json$Json$Decode$list(decodePagePoint)));
	var decodeIsSurfaceDisabled = $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$json$Json$Decode$map,
				$elm$core$Basics$always(true),
				A2(
					$elm$json$Json$Decode$at,
					_List_fromArray(
						['disabled']),
					$elm$json$Json$Decode$string)),
				$elm$json$Json$Decode$succeed(false)
			]));
	var decodeEventType = A2(
		$elm$json$Json$Decode$at,
		_List_fromArray(
			['type']),
		$elm$json$Json$Decode$string);
	var decodeIsSameInteraction = function () {
		if (previousActivationEvent.$ === 'Nothing') {
			return $elm$json$Json$Decode$succeed(false);
		} else {
			var event = previousActivationEvent.a;
			return A2(
				$elm$json$Json$Decode$map,
				$elm$core$Basics$eq(event.eventType),
				decodeEventType);
		}
	}();
	var decodeEvent = A2(
		$elm$json$Json$Decode$andThen,
		function (eventType) {
			if (eventType === 'touchstart') {
				return A2(
					$elm$json$Json$Decode$map,
					$author$project$Internal$Ripple$Model$Event(eventType),
					firstChangedTouch);
			} else {
				return A2(
					$elm$json$Json$Decode$map,
					$author$project$Internal$Ripple$Model$Event(eventType),
					decodePagePoint);
			}
		},
		decodeEventType);
	return A2(
		$elm$json$Json$Decode$andThen,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Maybe$map($elm$json$Json$Decode$succeed),
			$elm$core$Maybe$withDefault(
				$elm$json$Json$Decode$fail(''))),
		A4(
			$elm$json$Json$Decode$map3,
			F3(
				function (isSurfaceDisabled, isSameInteraction, event) {
					return (isActivated || (isSurfaceDisabled || isSameInteraction)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
						A2(
							$author$project$Internal$Ripple$Model$Activate0,
							domId,
							{event: event, isSurfaceDisabled: false, isUnbounded: isUnbounded, wasElementMadeActive: false}));
				}),
			decodeIsSurfaceDisabled,
			decodeIsSameInteraction,
			decodeEvent));
};
var $author$project$Internal$Ripple$Model$ClientRect = F4(
	function (top, left, width, height) {
		return {height: height, left: left, top: top, width: width};
	});
var $elm$json$Json$Decode$map4 = _Json_map4;
var $debois$elm_dom$DOM$offsetHeight = A2($elm$json$Json$Decode$field, 'offsetHeight', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$offsetLeft = A2($elm$json$Json$Decode$field, 'offsetLeft', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$offsetTop = A2($elm$json$Json$Decode$field, 'offsetTop', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$offsetWidth = A2($elm$json$Json$Decode$field, 'offsetWidth', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$target = function (decoder) {
	return A2($elm$json$Json$Decode$field, 'target', decoder);
};
var $author$project$Internal$Ripple$Implementation$decodeClientRect = $debois$elm_dom$DOM$target(
	A5($elm$json$Json$Decode$map4, $author$project$Internal$Ripple$Model$ClientRect, $debois$elm_dom$DOM$offsetTop, $debois$elm_dom$DOM$offsetLeft, $debois$elm_dom$DOM$offsetWidth, $debois$elm_dom$DOM$offsetHeight));
var $author$project$Internal$Options$Many = function (a) {
	return {$: 'Many', a: a};
};
var $author$project$Internal$Options$many = $author$project$Internal$Options$Many;
var $author$project$Material$Options$data = $author$project$Internal$Options$data;
var $author$project$Material$Options$many = $author$project$Internal$Options$many;
var $author$project$Material$Options$on = $author$project$Internal$Options$on;
var $author$project$Internal$GlobalEvents$listener = F2(
	function (name, decoder) {
		return $author$project$Material$Options$many(
			_List_fromArray(
				[
					A2($author$project$Material$Options$on, name, decoder),
					A2($author$project$Material$Options$data, name, '{}')
				]));
	});
var $author$project$Internal$GlobalEvents$onMouseUp = $author$project$Internal$GlobalEvents$listener('globalmouseup');
var $author$project$Internal$GlobalEvents$onPointerUp = $author$project$Internal$GlobalEvents$listener('globalpointerup');
var $author$project$Internal$GlobalEvents$onTick = $author$project$Internal$GlobalEvents$listener('globaltick');
var $author$project$Internal$GlobalEvents$onTouchEnd = $author$project$Internal$GlobalEvents$listener('globaltouchend');
var $author$project$Internal$Options$when = F2(
	function (guard, prop) {
		return guard ? prop : $author$project$Internal$Options$nop;
	});
var $author$project$Internal$Ripple$Implementation$view = F5(
	function (isUnbounded, domId, lift, model, options) {
		var focusHandler = A2(
			$author$project$Internal$Options$on,
			'focus',
			$elm$json$Json$Decode$succeed(
				lift($author$project$Internal$Ripple$Model$Focus)));
		var deactivateHandler = function (event) {
			var deactivate = $elm$json$Json$Decode$succeed(
				lift($author$project$Internal$Ripple$Model$Deactivate));
			return $author$project$Internal$Options$many(
				_List_fromArray(
					[
						$author$project$Internal$GlobalEvents$onTouchEnd(deactivate),
						$author$project$Internal$GlobalEvents$onMouseUp(deactivate),
						$author$project$Internal$GlobalEvents$onPointerUp(deactivate)
					]));
		};
		var blurHandler = A2(
			$author$project$Internal$Options$on,
			'blur',
			$elm$json$Json$Decode$succeed(
				lift($author$project$Internal$Ripple$Model$Blur)));
		var baseProperties = $author$project$Internal$Options$many(
			_List_fromArray(
				[
					$author$project$Internal$Options$id(domId),
					$author$project$Internal$Options$cs($author$project$Internal$Ripple$Model$cssClasses.root),
					A2(
					$author$project$Internal$Options$when,
					isUnbounded,
					$author$project$Internal$Options$cs($author$project$Internal$Ripple$Model$cssClasses.unbounded)),
					model.focused ? $author$project$Internal$Options$cs($author$project$Internal$Ripple$Model$cssClasses.bgFocused) : $author$project$Internal$Options$nop
				]));
		var baseInteractionHandler = $author$project$Internal$Options$many(
			_List_fromArray(
				[focusHandler, blurHandler]));
		var activateHandler = $author$project$Internal$Options$many(
			A2(
				$elm$core$List$map,
				function (tipe) {
					return A2(
						$author$project$Internal$Options$on,
						tipe,
						A2(
							$elm$json$Json$Decode$map,
							lift,
							$author$project$Internal$Ripple$Implementation$decodeActivate(
								{
									domId: domId,
									isActivated: function () {
										var _v3 = model.animationState;
										if (_v3.$ === 'Activated') {
											var activationState = _v3.a;
											return !activationState.deactivated;
										} else {
											return false;
										}
									}(),
									isUnbounded: isUnbounded,
									previousActivationEvent: function () {
										var _v4 = model.animationState;
										if (_v4.$ === 'Activated') {
											var activationEvent = _v4.a.activationEvent;
											return $elm$core$Maybe$Just(activationEvent);
										} else {
											return $elm$core$Maybe$Nothing;
										}
									}()
								})));
				},
				$author$project$Internal$Ripple$Model$activationEventTypes));
		var _v0 = model.animationState;
		switch (_v0.$) {
			case 'Idle':
				var interactionHandler = $author$project$Internal$Options$many(
					_List_fromArray(
						[baseInteractionHandler, activateHandler]));
				var cssVars = function () {
					var _v1 = model.clientRect;
					if (_v1.$ === 'Just') {
						var clientRect = _v1.a;
						var _v2 = A2($author$project$Internal$Ripple$Implementation$layoutInternal, isUnbounded, clientRect);
						var fgScale = _v2.fgScale;
						var initialSize = _v2.initialSize;
						return A2(
							$author$project$Internal$Ripple$Implementation$cssVariables,
							isUnbounded,
							{fgScale: fgScale, frame: clientRect, initialSize: initialSize, translateEnd: '0px', translateStart: '0px'});
					} else {
						return _List_Nil;
					}
				}();
				var properties = $author$project$Internal$Options$many(
					_List_fromArray(
						[
							baseProperties,
							$author$project$Internal$Options$many(cssVars),
							A2(
							$author$project$Internal$Options$when,
							_Utils_eq(model.clientRect, $elm$core$Maybe$Nothing),
							$author$project$Internal$GlobalEvents$onTick(
								A2(
									$elm$json$Json$Decode$map,
									A2(
										$elm$core$Basics$composeL,
										lift,
										$author$project$Internal$Ripple$Model$SetCssVariables(isUnbounded)),
									$author$project$Internal$Ripple$Implementation$decodeClientRect)))
						]));
				return {interactionHandler: interactionHandler, properties: properties};
			case 'Activated':
				var activatedData = _v0.a;
				var interactionHandler = $author$project$Internal$Options$many(
					_List_fromArray(
						[
							baseInteractionHandler,
							activateHandler,
							deactivateHandler(activatedData.activationEvent)
						]));
				var cssVars = A2(
					$author$project$Internal$Ripple$Implementation$cssVariables,
					isUnbounded,
					{fgScale: activatedData.fgScale, frame: activatedData.frame, initialSize: activatedData.initialSize, translateEnd: activatedData.translateEnd, translateStart: activatedData.translateStart});
				var properties = $author$project$Internal$Options$many(
					_List_fromArray(
						[
							baseProperties,
							$author$project$Internal$Options$many(cssVars),
							$author$project$Internal$Options$cs($author$project$Internal$Ripple$Model$cssClasses.fgActivation),
							A2(
							$author$project$Internal$Options$when,
							isUnbounded,
							A2($author$project$Internal$Options$data, 'mdc-ripple-is-unbounded', '1'))
						]));
				return {interactionHandler: interactionHandler, properties: properties};
			default:
				var activatedData = _v0.a;
				var interactionHandler = $author$project$Internal$Options$many(
					_List_fromArray(
						[baseInteractionHandler, activateHandler]));
				var cssVars = A2(
					$author$project$Internal$Ripple$Implementation$cssVariables,
					isUnbounded,
					{fgScale: activatedData.fgScale, frame: activatedData.frame, initialSize: activatedData.initialSize, translateEnd: activatedData.translateEnd, translateStart: activatedData.translateStart});
				var properties = $author$project$Internal$Options$many(
					_List_fromArray(
						[
							baseProperties,
							$author$project$Internal$Options$many(cssVars),
							$author$project$Internal$Options$cs($author$project$Internal$Ripple$Model$cssClasses.fgDeactivation)
						]));
				return {interactionHandler: interactionHandler, properties: properties};
		}
	});
var $author$project$Internal$List$Implementation$liView = F9(
	function (domId, lift, model, config, listItemIds, focusedIndex, index, options, children) {
		var tab_index = _Utils_eq(focusedIndex, index) ? 0 : (-1);
		var list_item_dom_id = A2($author$project$Internal$List$Implementation$listItemDomId, domId, index);
		var li_summary = A2($author$project$Internal$Options$collect, $author$project$Internal$List$Implementation$defaultConfig, options);
		var li_config = li_summary.config;
		var rippled = li_config.ripple && config.isInteractive;
		var ripple = rippled ? A5(
			$author$project$Internal$Ripple$Implementation$view,
			false,
			list_item_dom_id,
			A2(
				$elm$core$Basics$composeL,
				lift,
				$author$project$Internal$List$Model$RippleMsg(list_item_dom_id)),
			A2(
				$elm$core$Maybe$withDefault,
				$author$project$Internal$Ripple$Model$defaultModel,
				A2($elm$core$Dict$get, list_item_dom_id, model.ripples)),
			_List_Nil) : $author$project$Internal$Ripple$Implementation$none;
		var is_selected = function () {
			var _v9 = config.selectedIndex;
			if (_v9.$ === 'Just') {
				var i = _v9.a;
				return _Utils_eq(i, index);
			} else {
				return li_config.selected || li_config.activated;
			}
		}();
		return A5(
			$author$project$Internal$Options$apply,
			li_summary,
			A2($elm$core$Maybe$withDefault, $elm$html$Html$li, li_config.node),
			_List_fromArray(
				[
					$author$project$Internal$List$Implementation$listItemClass,
					A2(
					$author$project$Internal$Options$when,
					!rippled,
					$author$project$Internal$Options$id(list_item_dom_id)),
					A2(
					$author$project$Internal$Options$when,
					config.isInteractive,
					$author$project$Internal$Options$tabindex(tab_index)),
					A2(
					$author$project$Internal$Options$when,
					config.isSingleSelectionList && (is_selected && (!config.useActivated)),
					$author$project$Internal$Options$cs('mdc-list-item--selected')),
					A2(
					$author$project$Internal$Options$when,
					config.isSingleSelectionList && (is_selected && config.useActivated),
					$author$project$Internal$Options$cs('mdc-list-item--activated')),
					A2(
					$author$project$Internal$Options$when,
					config.isRadioGroup,
					A2(
						$author$project$Internal$Options$aria,
						'checked',
						is_selected ? 'true' : 'false')),
					A2(
					$author$project$Internal$Options$when,
					(!config.isRadioGroup) && config.isInteractive,
					A2(
						$author$project$Internal$Options$aria,
						'selected',
						is_selected ? 'true' : 'false')),
					A2(
					$author$project$Internal$Options$when,
					config.isSingleSelectionList,
					$author$project$Internal$Options$role('option')),
					A2(
					$author$project$Internal$Options$when,
					config.isRadioGroup,
					$author$project$Internal$Options$role('radio')),
					A2($author$project$Internal$Options$when, li_config.disabled, $author$project$Internal$List$Implementation$disabledClass),
					function () {
					var _v0 = li_config.dataValue;
					if (_v0.$ === 'Just') {
						var v = _v0.a;
						return A2($author$project$Internal$Options$data, 'value', v);
					} else {
						return $author$project$Internal$Options$nop;
					}
				}(),
					A2($author$project$Internal$Options$when, rippled, ripple.interactionHandler),
					A2($author$project$Internal$Options$when, rippled, ripple.properties),
					function () {
					var _v1 = config.onSelectListItem;
					if (_v1.$ === 'Just') {
						var onSelect = _v1.a;
						return (!li_config.disabled) ? $author$project$Internal$Options$onClick(
							onSelect(index)) : $author$project$Internal$Options$nop;
					} else {
						return $author$project$Internal$Options$nop;
					}
				}(),
					A2(
					$author$project$Internal$Options$onWithOptions,
					'keydown',
					A3(
						$elm$json$Json$Decode$map2,
						F2(
							function (key, keyCode) {
								var selectItem = _Utils_eq(
									key,
									$elm$core$Maybe$Just('Enter')) || ((keyCode === 13) || (_Utils_eq(
									key,
									$elm$core$Maybe$Just('Space')) || (keyCode === 32)));
								var _v2 = function () {
									if (_Utils_eq(
										key,
										$elm$core$Maybe$Just('ArrowDown')) || (keyCode === 40)) {
										var focusable_element = A2($author$project$Internal$List$Implementation$firstNonEmptyId, index + 1, listItemIds);
										if (focusable_element.$ === 'Just') {
											var _v4 = focusable_element.a;
											var next_index = _v4.a;
											var next_item = _v4.b;
											return _Utils_Tuple2(
												$elm$core$Maybe$Just(next_index),
												$elm$core$Maybe$Just(next_item));
										} else {
											return _Utils_Tuple2(
												$elm$core$Maybe$Just(index + 1),
												$elm$core$Maybe$Nothing);
										}
									} else {
										if (_Utils_eq(
											key,
											$elm$core$Maybe$Just('ArrowUp')) || (keyCode === 38)) {
											var focusable_element = A2($author$project$Internal$List$Implementation$lastNonEmptyId, index, listItemIds);
											if (focusable_element.$ === 'Just') {
												var _v6 = focusable_element.a;
												var previous_index = _v6.a;
												var previous_item = _v6.b;
												return _Utils_Tuple2(
													$elm$core$Maybe$Just(previous_index),
													$elm$core$Maybe$Just(previous_item));
											} else {
												return _Utils_Tuple2(
													$elm$core$Maybe$Just(index - 1),
													$elm$core$Maybe$Nothing);
											}
										} else {
											if (_Utils_eq(
												key,
												$elm$core$Maybe$Just('Home')) || (keyCode === 36)) {
												return _Utils_Tuple2(
													$elm$core$Maybe$Just(0),
													A2($elm$core$Array$get, 0, listItemIds));
											} else {
												if (_Utils_eq(
													key,
													$elm$core$Maybe$Just('End')) || (keyCode === 35)) {
													var last_index = $elm$core$Array$length(listItemIds) - 1;
													return _Utils_Tuple2(
														$elm$core$Maybe$Just(last_index),
														A2($elm$core$Array$get, last_index, listItemIds));
												} else {
													return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing);
												}
											}
										}
									}
								}();
								var index_to_focus = _v2.a;
								var id_to_focus = _v2.b;
								var msg = function () {
									if (selectItem) {
										var _v7 = config.onSelectListItem;
										if (_v7.$ === 'Just') {
											var onSelect = _v7.a;
											return A2($author$project$Internal$List$Model$SelectItem, index, onSelect);
										} else {
											return $author$project$Internal$List$Model$NoOp;
										}
									} else {
										var _v8 = _Utils_Tuple2(index_to_focus, id_to_focus);
										if ((_v8.a.$ === 'Just') && (_v8.b.$ === 'Just')) {
											var idx = _v8.a.a;
											var id = _v8.b.a;
											return A2($author$project$Internal$List$Model$FocusItem, idx, id);
										} else {
											return $author$project$Internal$List$Model$NoOp;
										}
									}
								}();
								return {
									message: lift(msg),
									preventDefault: (!_Utils_eq(index_to_focus, $elm$core$Maybe$Nothing)) || selectItem,
									stopPropagation: false
								};
							}),
						$elm$json$Json$Decode$oneOf(
							_List_fromArray(
								[
									A2(
									$elm$json$Json$Decode$map,
									$elm$core$Maybe$Just,
									A2(
										$elm$json$Json$Decode$at,
										_List_fromArray(
											['key']),
										$elm$json$Json$Decode$string)),
									$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
								])),
						A2(
							$elm$json$Json$Decode$at,
							_List_fromArray(
								['keyCode']),
							$elm$json$Json$Decode$int)))
				]),
			_List_Nil,
			children);
	});
var $author$project$Internal$List$Implementation$li = F2(
	function (options, children) {
		return {
			children: $author$project$Internal$List$Implementation$HtmlList(children),
			focusable: true,
			options: options,
			view: $author$project$Internal$List$Implementation$liView
		};
	});
var $author$project$Internal$Options$Set = function (a) {
	return {$: 'Set', a: a};
};
var $author$project$Internal$Options$option = $author$project$Internal$Options$Set;
var $author$project$Internal$List$Implementation$node = function (nodeFunc) {
	return $author$project$Internal$Options$option(
		function (config) {
			return _Utils_update(
				config,
				{
					node: $elm$core$Maybe$Just(nodeFunc)
				});
		});
};
var $author$project$Material$List$a = F2(
	function (options, items) {
		return A2(
			$author$project$Internal$List$Implementation$li,
			A2(
				$elm$core$List$cons,
				$author$project$Internal$List$Implementation$node($elm$html$Html$a),
				options),
			items);
	});
var $author$project$Internal$Icon$Implementation$node = function (ctor) {
	return $author$project$Internal$Options$option(
		function (config) {
			return _Utils_update(
				config,
				{node: ctor});
		});
};
var $author$project$Internal$Icon$Implementation$button = $author$project$Internal$Icon$Implementation$node('button');
var $author$project$Internal$Icon$Implementation$defaultConfig = {node: 'i'};
var $author$project$Internal$Icon$Implementation$view = F2(
	function (options, name) {
		var summary = A2($author$project$Internal$Options$collect, $author$project$Internal$Icon$Implementation$defaultConfig, options);
		var config = summary.config;
		return A5(
			$author$project$Internal$Options$apply,
			summary,
			$elm$html$Html$node(config.node),
			_List_fromArray(
				[
					$author$project$Internal$Options$cs('material-icons'),
					A2($author$project$Internal$Options$aria, 'hidden', 'true')
				]),
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text(name)
				]));
	});
var $author$project$Internal$TopAppBar$Implementation$actionItemView = F5(
	function (domId, lift, model, options, name) {
		var ripple = A5(
			$author$project$Internal$Ripple$Implementation$view,
			true,
			domId,
			A2(
				$elm$core$Basics$composeL,
				lift,
				$author$project$Internal$TopAppBar$Model$RippleMsg(domId)),
			A2(
				$elm$core$Maybe$withDefault,
				$author$project$Internal$Ripple$Model$defaultModel,
				A2($elm$core$Dict$get, domId, model.ripples)),
			_List_Nil);
		return A2(
			$author$project$Internal$Icon$Implementation$view,
			A2(
				$elm$core$List$cons,
				$author$project$Internal$Icon$Implementation$button,
				A2(
					$elm$core$List$cons,
					$author$project$Internal$Options$cs('mdc-icon-button'),
					A2(
						$elm$core$List$cons,
						ripple.interactionHandler,
						A2($elm$core$List$cons, ripple.properties, options)))),
			name);
	});
var $author$project$Internal$Msg$Dispatch = function (a) {
	return {$: 'Dispatch', a: a};
};
var $author$project$Internal$Options$Lift = function (a) {
	return {$: 'Lift', a: a};
};
var $author$project$Internal$Options$dispatch = function (lift) {
	return $author$project$Internal$Options$Lift(
		$elm$json$Json$Decode$map(
			function (_v0) {
				var message = _v0.message;
				var stopPropagation = _v0.stopPropagation;
				var preventDefault = _v0.preventDefault;
				return {
					message: lift(
						$author$project$Internal$Msg$Dispatch(message)),
					preventDefault: preventDefault,
					stopPropagation: stopPropagation
				};
			}));
};
var $author$project$Internal$Component$render = F3(
	function (get_model, view, ctor) {
		return F4(
			function (lift, idx, store, options) {
				return A3(
					view,
					A2(
						$elm$core$Basics$composeL,
						lift,
						ctor(idx)),
					A2(get_model, idx, store),
					A2(
						$elm$core$List$cons,
						$author$project$Internal$Options$dispatch(lift),
						options));
			});
	});
var $author$project$Internal$TopAppBar$Implementation$actionItem = F2(
	function (lift, index) {
		return A5(
			$author$project$Internal$Component$render,
			$author$project$Internal$TopAppBar$Implementation$getSet.get,
			$author$project$Internal$TopAppBar$Implementation$actionItemView(index),
			$author$project$Internal$Msg$TopAppBarMsg,
			lift,
			index);
	});
var $author$project$Material$Options$cs = $author$project$Internal$Options$cs;
var $author$project$Material$TopAppBar$actionItem = F5(
	function (lift, index, model, options, name) {
		return A5(
			$author$project$Internal$TopAppBar$Implementation$actionItem,
			lift,
			index,
			model,
			A2(
				$elm$core$List$cons,
				$author$project$Material$Options$cs('mdc-top-app-bar__action-item'),
				options),
			name);
	});
var $author$project$Internal$List$Implementation$activated = $author$project$Internal$Options$option(
	function (config) {
		return _Utils_update(
			config,
			{activated: true});
	});
var $author$project$Material$List$activated = $author$project$Internal$List$Implementation$activated;
var $author$project$Internal$TopAppBar$Implementation$alignEnd = $author$project$Internal$Options$cs('mdc-top-app-bar__section--align-end');
var $author$project$Material$TopAppBar$alignEnd = $author$project$Internal$TopAppBar$Implementation$alignEnd;
var $author$project$Internal$TopAppBar$Implementation$alignStart = $author$project$Internal$Options$cs('mdc-top-app-bar__section--align-start');
var $author$project$Material$TopAppBar$alignStart = $author$project$Internal$TopAppBar$Implementation$alignStart;
var $elm$virtual_dom$VirtualDom$mapAttribute = _VirtualDom_mapAttribute;
var $elm$html$Html$Attributes$map = $elm$virtual_dom$VirtualDom$mapAttribute;
var $author$project$Internal$Options$attribute = A2(
	$elm$core$Basics$composeL,
	$author$project$Internal$Options$Attribute,
	$elm$html$Html$Attributes$map($elm$core$Basics$never));
var $author$project$Material$Options$attribute = $author$project$Internal$Options$attribute;
var $author$project$Internal$Options$collect1_ = F2(
	function (options, acc) {
		switch (options.$) {
			case 'Class':
				var x = options.a;
				return _Utils_update(
					acc,
					{
						classes: A2($elm$core$List$cons, x, acc.classes)
					});
			case 'CSS':
				var x = options.a;
				return _Utils_update(
					acc,
					{
						css: A2($elm$core$List$cons, x, acc.css)
					});
			case 'Attribute':
				var x = options.a;
				return _Utils_update(
					acc,
					{
						attrs: A2($elm$core$List$cons, x, acc.attrs)
					});
			case 'Internal':
				var x = options.a;
				return _Utils_update(
					acc,
					{
						internal: A2($elm$core$List$cons, x, acc.internal)
					});
			case 'Listener':
				var event = options.a;
				var decoder = options.b;
				return _Utils_update(
					acc,
					{
						dispatch: A3($author$project$Internal$Dispatch$add, event, decoder, acc.dispatch)
					});
			case 'Many':
				var opts = options.a;
				return A3($elm$core$List$foldl, $author$project$Internal$Options$collect1_, acc, opts);
			case 'Lift':
				var lift = options.a;
				return _Utils_update(
					acc,
					{
						dispatch: A2($author$project$Internal$Dispatch$setLift, lift, acc.dispatch)
					});
			case 'Set':
				return acc;
			default:
				return acc;
		}
	});
var $author$project$Internal$Options$collect_ = A2(
	$elm$core$List$foldl,
	$author$project$Internal$Options$collect1_,
	A6($author$project$Internal$Options$Summary, _List_Nil, _List_Nil, _List_Nil, _List_Nil, $author$project$Internal$Dispatch$defaultConfig, _Utils_Tuple0));
var $author$project$Internal$Options$styled = F2(
	function (ctor, props) {
		return ctor(
			A2(
				$author$project$Internal$Options$addAttributes,
				$author$project$Internal$Options$collect_(props),
				_List_Nil));
	});
var $author$project$Internal$Drawer$Implementation$content = function (options) {
	return A2(
		$author$project$Internal$Options$styled,
		$elm$html$Html$div,
		A2(
			$elm$core$List$cons,
			$author$project$Internal$Options$cs('mdc-drawer__content'),
			options));
};
var $author$project$Internal$Drawer$Modal$Implementation$content = $author$project$Internal$Drawer$Implementation$content;
var $author$project$Material$Drawer$Modal$content = $author$project$Internal$Drawer$Modal$Implementation$content;
var $author$project$Main$fillZero = function (str) {
	return ($elm$core$String$length(str) < 2) ? ('0' + str) : str;
};
var $author$project$Internal$TopAppBar$Implementation$fixed = $author$project$Internal$Options$option(
	function (config) {
		return _Utils_update(
			config,
			{fixed: true});
	});
var $author$project$Material$TopAppBar$fixed = $author$project$Internal$TopAppBar$Implementation$fixed;
var $author$project$Internal$TopAppBar$Implementation$fixedAdjust = $author$project$Internal$Options$cs('mdc-top-app-bar--fixed-adjust');
var $author$project$Material$TopAppBar$fixedAdjust = $author$project$Internal$TopAppBar$Implementation$fixedAdjust;
var $author$project$Internal$List$Implementation$graphicClass = $author$project$Internal$Options$cs('mdc-list-item__graphic');
var $author$project$Internal$List$Implementation$graphicIcon = function (options) {
	return $author$project$Internal$Icon$Implementation$view(
		A2($elm$core$List$cons, $author$project$Internal$List$Implementation$graphicClass, options));
};
var $author$project$Material$List$graphicIcon = $author$project$Internal$List$Implementation$graphicIcon;
var $author$project$Internal$Fab$Implementation$icon = function (name) {
	return $author$project$Internal$Options$option(
		function (config) {
			return _Utils_update(
				config,
				{
					icon: $elm$core$Maybe$Just(name)
				});
		});
};
var $author$project$Material$Fab$icon = $author$project$Internal$Fab$Implementation$icon;
var $elm$html$Html$nav = _VirtualDom_node('nav');
var $author$project$Internal$List$Model$ResetFocusedItem = {$: 'ResetFocusedItem'};
var $author$project$Internal$List$Implementation$doListItemDomId = F3(
	function (domId, index, listItem) {
		return listItem.focusable ? A2($author$project$Internal$List$Implementation$listItemDomId, domId, index) : '';
	});
var $author$project$Internal$List$Implementation$findIndexHelp = F3(
	function (index, predicate, list) {
		findIndexHelp:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var first = list.a;
				var rest = list.b;
				if (predicate(first)) {
					return $elm$core$Maybe$Just(index);
				} else {
					var $temp$index = index + 1,
						$temp$predicate = predicate,
						$temp$list = rest;
					index = $temp$index;
					predicate = $temp$predicate;
					list = $temp$list;
					continue findIndexHelp;
				}
			}
		}
	});
var $author$project$Internal$List$Implementation$findIndex = $author$project$Internal$List$Implementation$findIndexHelp(0);
var $author$project$Internal$List$Implementation$liIsSelectedOrActivated = function (li_) {
	var li_summary = A2($author$project$Internal$Options$collect, $author$project$Internal$List$Implementation$defaultConfig, li_.options);
	var li_config = li_summary.config;
	return li_config.selected || li_config.activated;
};
var $author$project$Internal$List$Implementation$listItemView = F8(
	function (domId, lift, model, config, listItemsIds, focusedIndex, index, li_) {
		var _v0 = li_.children;
		if (_v0.$ === 'HtmlList') {
			var children = _v0.a;
			return A9(li_.view, domId, lift, model, config, listItemsIds, focusedIndex, index, li_.options, children);
		} else {
			var items = _v0.a;
			var groupDomId = domId + ('-' + $elm$core$String$fromInt(index));
			return A9(
				li_.view,
				domId,
				lift,
				model,
				config,
				listItemsIds,
				focusedIndex,
				index,
				li_.options,
				A2(
					$elm$core$List$indexedMap,
					A6($author$project$Internal$List$Implementation$listItemView, groupDomId, lift, model, config, listItemsIds, focusedIndex),
					items));
		}
	});
var $author$project$Internal$List$Implementation$nonInteractiveClass = $author$project$Internal$Options$cs('mdc-list--non-interactive');
var $elm$json$Json$Decode$maybe = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder),
				$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
			]));
};
var $author$project$Internal$List$Implementation$invertDecoder = function (decoder) {
	return A2(
		$elm$json$Json$Decode$andThen,
		function (maybe) {
			return _Utils_eq(maybe, $elm$core$Maybe$Nothing) ? $elm$json$Json$Decode$succeed(_Utils_Tuple0) : $elm$json$Json$Decode$fail('');
		},
		$elm$json$Json$Decode$maybe(decoder));
};
var $author$project$Internal$List$Implementation$succeedIfContainerOrChildOfContainer = function (targetId) {
	return A2(
		$elm$json$Json$Decode$andThen,
		function (id) {
			return _Utils_eq(id, targetId) ? $elm$json$Json$Decode$succeed(_Utils_Tuple0) : A2(
				$elm$json$Json$Decode$field,
				'parentNode',
				$author$project$Internal$List$Implementation$succeedIfContainerOrChildOfContainer(targetId));
		},
		A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$string));
};
var $author$project$Internal$List$Implementation$succeedIfLeavingList = function (targetId) {
	return $author$project$Internal$List$Implementation$invertDecoder(
		A2(
			$elm$json$Json$Decode$field,
			'relatedTarget',
			$author$project$Internal$List$Implementation$succeedIfContainerOrChildOfContainer(targetId)));
};
var $author$project$Internal$List$Implementation$ul = F5(
	function (domId, lift, model, options, items) {
		var listItemIds = $elm$core$Array$fromList(
			A2(
				$elm$core$List$indexedMap,
				$author$project$Internal$List$Implementation$doListItemDomId(domId),
				items));
		var summary = A2($author$project$Internal$Options$collect, $author$project$Internal$List$Implementation$defaultConfig, options);
		var config = summary.config;
		var focusedIndex = function () {
			var _v0 = model.focused;
			if (_v0.$ === 'Just') {
				var focused = _v0.a;
				return focused;
			} else {
				var _v1 = config.selectedIndex;
				if (_v1.$ === 'Just') {
					var index = _v1.a;
					return index;
				} else {
					var _v2 = A2($author$project$Internal$List$Implementation$findIndex, $author$project$Internal$List$Implementation$liIsSelectedOrActivated, items);
					if (_v2.$ === 'Just') {
						var i = _v2.a;
						return i;
					} else {
						return 0;
					}
				}
			}
		}();
		var list_nodes = A2(
			$elm$core$List$indexedMap,
			A6($author$project$Internal$List$Implementation$listItemView, domId, lift, model, config, listItemIds, focusedIndex),
			items);
		return A5(
			$author$project$Internal$Options$apply,
			summary,
			A2($elm$core$Maybe$withDefault, $elm$html$Html$ul, config.node),
			_List_fromArray(
				[
					$author$project$Internal$Options$cs('mdc-list'),
					A2($author$project$Internal$Options$when, !config.isInteractive, $author$project$Internal$List$Implementation$nonInteractiveClass),
					A2(
					$author$project$Internal$Options$when,
					config.isSingleSelectionList,
					$author$project$Internal$Options$role('listbox')),
					A2(
					$author$project$Internal$Options$when,
					config.isRadioGroup,
					$author$project$Internal$Options$role('radiogroup')),
					$author$project$Internal$Options$id(domId),
					A2(
					$author$project$Internal$Options$on,
					'focusout',
					A2(
						$elm$json$Json$Decode$map,
						$elm$core$Basics$always(
							lift($author$project$Internal$List$Model$ResetFocusedItem)),
						$author$project$Internal$List$Implementation$succeedIfLeavingList(domId)))
				]),
			_List_Nil,
			list_nodes);
	});
var $author$project$Internal$List$Implementation$view = F2(
	function (lift, domId) {
		return A5(
			$author$project$Internal$Component$render,
			$author$project$Internal$List$Implementation$getSet.get,
			$author$project$Internal$List$Implementation$ul(domId),
			$author$project$Internal$Msg$ListMsg,
			lift,
			domId);
	});
var $author$project$Material$List$nav = F5(
	function (lift, domId, model, options, items) {
		return A5(
			$author$project$Internal$List$Implementation$view,
			lift,
			domId,
			model,
			A2(
				$elm$core$List$cons,
				$author$project$Internal$List$Implementation$node($elm$html$Html$nav),
				options),
			items);
	});
var $author$project$Material$TopAppBar$navigationIcon = F5(
	function (lift, index, model, options, name) {
		return A5(
			$author$project$Internal$TopAppBar$Implementation$actionItem,
			lift,
			index,
			model,
			A2(
				$elm$core$List$cons,
				$author$project$Material$Options$cs('mdc-top-app-bar__navigation-icon'),
				options),
			name);
	});
var $author$project$Material$Options$onClick = $author$project$Internal$Options$onClick;
var $author$project$Internal$Drawer$Implementation$open = $author$project$Internal$Options$option(
	function (config) {
		return _Utils_update(
			config,
			{open: true});
	});
var $author$project$Internal$Drawer$Modal$Implementation$open = $author$project$Internal$Drawer$Implementation$open;
var $author$project$Material$Drawer$Modal$open = $author$project$Internal$Drawer$Modal$Implementation$open;
var $author$project$Internal$Fab$Implementation$ripple = $author$project$Internal$Options$option(
	function (config) {
		return _Utils_update(
			config,
			{ripple: true});
	});
var $author$project$Material$Fab$ripple = $author$project$Internal$Fab$Implementation$ripple;
var $author$project$Internal$Drawer$Modal$Implementation$scrim = function (options) {
	return A2(
		$author$project$Internal$Options$styled,
		$elm$html$Html$div,
		A2(
			$elm$core$List$cons,
			$author$project$Internal$Options$cs('mdc-drawer-scrim'),
			options));
};
var $author$project$Material$Drawer$Modal$scrim = $author$project$Internal$Drawer$Modal$Implementation$scrim;
var $elm$html$Html$section = _VirtualDom_node('section');
var $author$project$Internal$TopAppBar$Implementation$section = function (options) {
	return A2(
		$author$project$Internal$Options$styled,
		$elm$html$Html$section,
		A2(
			$elm$core$List$cons,
			$author$project$Internal$Options$cs('mdc-top-app-bar__section'),
			options));
};
var $author$project$Material$TopAppBar$section = $author$project$Internal$TopAppBar$Implementation$section;
var $author$project$Internal$List$Implementation$singleSelection = $author$project$Internal$Options$option(
	function (config) {
		return _Utils_update(
			config,
			{isRadioGroup: false, isSingleSelectionList: true});
	});
var $author$project$Material$List$singleSelection = $author$project$Internal$List$Implementation$singleSelection;
var $author$project$Main$stepClass = function (order) {
	switch (order.$) {
		case 'LT':
			return 'step-yet';
		case 'EQ':
			return 'step-current';
		default:
			return 'step-done';
	}
};
var $author$project$Main$stepOrder = F2(
	function (s0, s1) {
		var _v0 = _Utils_Tuple2(s0, s1);
		switch (_v0.a.$) {
			case 'SoakStep':
				if (_v0.b.$ === 'SoakStep') {
					var _v1 = _v0.a;
					var _v2 = _v0.b;
					return $elm$core$Basics$EQ;
				} else {
					var _v3 = _v0.a;
					return $elm$core$Basics$LT;
				}
			case 'DevStep':
				switch (_v0.b.$) {
					case 'SoakStep':
						var _v4 = _v0.a;
						var _v5 = _v0.b;
						return $elm$core$Basics$GT;
					case 'DevStep':
						var _v6 = _v0.a;
						var _v7 = _v0.b;
						return $elm$core$Basics$EQ;
					default:
						var _v8 = _v0.a;
						return $elm$core$Basics$LT;
				}
			case 'StopStep':
				switch (_v0.b.$) {
					case 'SoakStep':
						var _v9 = _v0.a;
						var _v10 = _v0.b;
						return $elm$core$Basics$GT;
					case 'DevStep':
						var _v11 = _v0.a;
						var _v12 = _v0.b;
						return $elm$core$Basics$GT;
					case 'StopStep':
						var _v13 = _v0.a;
						var _v14 = _v0.b;
						return $elm$core$Basics$EQ;
					default:
						var _v15 = _v0.a;
						return $elm$core$Basics$LT;
				}
			case 'FixStep':
				switch (_v0.b.$) {
					case 'FixStep':
						var _v16 = _v0.a;
						var _v17 = _v0.b;
						return $elm$core$Basics$EQ;
					case 'RinseStep':
						var _v18 = _v0.a;
						var _v19 = _v0.b;
						return $elm$core$Basics$LT;
					case 'WetStep':
						var _v20 = _v0.a;
						var _v21 = _v0.b;
						return $elm$core$Basics$LT;
					case 'EndStep':
						var _v22 = _v0.a;
						var _v23 = _v0.b;
						return $elm$core$Basics$LT;
					default:
						var _v24 = _v0.a;
						return $elm$core$Basics$GT;
				}
			case 'RinseStep':
				switch (_v0.b.$) {
					case 'RinseStep':
						var _v25 = _v0.a;
						var _v26 = _v0.b;
						return $elm$core$Basics$EQ;
					case 'WetStep':
						var _v27 = _v0.a;
						var _v28 = _v0.b;
						return $elm$core$Basics$LT;
					case 'EndStep':
						var _v29 = _v0.a;
						var _v30 = _v0.b;
						return $elm$core$Basics$LT;
					default:
						var _v31 = _v0.a;
						return $elm$core$Basics$GT;
				}
			case 'WetStep':
				switch (_v0.b.$) {
					case 'WetStep':
						var _v32 = _v0.a;
						var _v33 = _v0.b;
						return $elm$core$Basics$EQ;
					case 'EndStep':
						var _v34 = _v0.a;
						var _v35 = _v0.b;
						return $elm$core$Basics$LT;
					default:
						var _v36 = _v0.a;
						return $elm$core$Basics$GT;
				}
			default:
				if (_v0.b.$ === 'EndStep') {
					var _v37 = _v0.a;
					var _v38 = _v0.b;
					return $elm$core$Basics$EQ;
				} else {
					var _v39 = _v0.a;
					return $elm$core$Basics$GT;
				}
		}
	});
var $author$project$Material$Options$styled = $author$project$Internal$Options$styled;
var $elm$html$Html$table = _VirtualDom_node('table');
var $elm$html$Html$tbody = _VirtualDom_node('tbody');
var $elm$html$Html$td = _VirtualDom_node('td');
var $author$project$Internal$TopAppBar$Implementation$title = function (options) {
	return A2(
		$author$project$Internal$Options$styled,
		$elm$html$Html$span,
		A2(
			$elm$core$List$cons,
			$author$project$Internal$Options$cs('mdc-top-app-bar__title'),
			options));
};
var $author$project$Material$TopAppBar$title = $author$project$Internal$TopAppBar$Implementation$title;
var $elm$html$Html$tr = _VirtualDom_node('tr');
var $author$project$Internal$List$Implementation$useActivated = $author$project$Internal$Options$option(
	function (config) {
		return _Utils_update(
			config,
			{useActivated: true});
	});
var $author$project$Material$List$useActivated = $author$project$Internal$List$Implementation$useActivated;
var $author$project$Internal$Drawer$Modal$Implementation$className = 'mdc-drawer--modal';
var $author$project$Internal$Drawer$Model$EndAnimation = {$: 'EndAnimation'};
var $author$project$Internal$Drawer$Model$NoOp = {$: 'NoOp'};
var $author$project$Internal$Drawer$Model$StartAnimation = function (a) {
	return {$: 'StartAnimation', a: a};
};
var $elm$html$Html$aside = _VirtualDom_node('aside');
var $author$project$Internal$Drawer$Implementation$defaultConfig = {onClose: $elm$core$Maybe$Nothing, open: false};
var $author$project$Internal$Drawer$Implementation$view = F5(
	function (className, lift, model, options, nodes) {
		var summary = A2($author$project$Internal$Options$collect, $author$project$Internal$Drawer$Implementation$defaultConfig, options);
		var config = summary.config;
		var stateChanged = (!model.closeOnAnimationEnd) && (!_Utils_eq(config.open, model.open));
		return A3(
			$author$project$Internal$Options$styled,
			$elm$html$Html$aside,
			_Utils_ap(
				_List_fromArray(
					[
						$author$project$Internal$Options$cs('mdc-drawer'),
						$author$project$Internal$Options$cs(className),
						A2(
						$author$project$Internal$Options$when,
						stateChanged,
						$author$project$Internal$GlobalEvents$onTick(
							$elm$json$Json$Decode$succeed(
								lift(
									$author$project$Internal$Drawer$Model$StartAnimation(config.open))))),
						A2(
						$author$project$Internal$Options$when,
						config.open || model.open,
						$author$project$Internal$Options$cs('mdc-drawer--open')),
						A2(
						$author$project$Internal$Options$when,
						config.open && (stateChanged || model.animating),
						$author$project$Internal$Options$cs('mdc-drawer--animate')),
						A2(
						$author$project$Internal$Options$when,
						config.open && model.animating,
						$author$project$Internal$Options$cs('mdc-drawer--opening')),
						A2(
						$author$project$Internal$Options$when,
						(!config.open) && model.animating,
						$author$project$Internal$Options$cs('mdc-drawer--closing')),
						A2(
						$author$project$Internal$Options$when,
						model.animating,
						A2(
							$author$project$Internal$Options$on,
							'transitionend',
							$elm$json$Json$Decode$succeed(
								lift($author$project$Internal$Drawer$Model$EndAnimation)))),
						A2(
						$author$project$Internal$Options$when,
						(!$elm$core$String$isEmpty(className)) && (config.open || model.open),
						A2($author$project$Internal$Options$data, 'focustrap', '{}')),
						A2(
						$author$project$Internal$Options$on,
						'keydown',
						A3(
							$elm$json$Json$Decode$map2,
							F2(
								function (key, keyCode) {
									return (_Utils_eq(
										key,
										$elm$core$Maybe$Just('Escape')) || (keyCode === 27)) ? A2(
										$elm$core$Maybe$withDefault,
										lift($author$project$Internal$Drawer$Model$NoOp),
										config.onClose) : lift($author$project$Internal$Drawer$Model$NoOp);
								}),
							$elm$json$Json$Decode$oneOf(
								_List_fromArray(
									[
										A2(
										$elm$json$Json$Decode$map,
										$elm$core$Maybe$Just,
										A2(
											$elm$json$Json$Decode$at,
											_List_fromArray(
												['key']),
											$elm$json$Json$Decode$string)),
										$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
									])),
							A2(
								$elm$json$Json$Decode$at,
								_List_fromArray(
									['keyCode']),
								$elm$json$Json$Decode$int)))
					]),
				options),
			nodes);
	});
var $author$project$Internal$Drawer$Implementation$render = function (className) {
	return A3(
		$author$project$Internal$Component$render,
		$author$project$Internal$Drawer$Implementation$getSet.get,
		$author$project$Internal$Drawer$Implementation$view(className),
		$author$project$Internal$Msg$DrawerMsg);
};
var $author$project$Internal$Drawer$Modal$Implementation$view = $author$project$Internal$Drawer$Implementation$render($author$project$Internal$Drawer$Modal$Implementation$className);
var $author$project$Material$Drawer$Modal$view = $author$project$Internal$Drawer$Modal$Implementation$view;
var $author$project$Internal$Fab$Implementation$defaultConfig = {icon: $elm$core$Maybe$Nothing, ripple: false};
var $elm$html$Html$i = _VirtualDom_node('i');
var $author$project$Internal$Fab$Implementation$iconClass = $author$project$Internal$Options$cs('mdc-fab__icon');
var $author$project$Internal$Fab$Implementation$fab = F5(
	function (domId, lift, model, options, nodes) {
		var rippleInterface = A5(
			$author$project$Internal$Ripple$Implementation$view,
			false,
			domId,
			A2($elm$core$Basics$composeL, lift, $author$project$Internal$Fab$Model$RippleMsg),
			model.ripple,
			_List_Nil);
		var summary = A2($author$project$Internal$Options$collect, $author$project$Internal$Fab$Implementation$defaultConfig, options);
		var config = summary.config;
		var iconSpan = function () {
			var _v0 = config.icon;
			if (_v0.$ === 'Just') {
				var name = _v0.a;
				return A3(
					$author$project$Internal$Options$styled,
					$elm$html$Html$i,
					_List_fromArray(
						[
							$author$project$Internal$Fab$Implementation$iconClass,
							$author$project$Internal$Options$cs('material-icons')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(name)
						]));
			} else {
				return $elm$html$Html$text('');
			}
		}();
		return A5(
			$author$project$Internal$Options$apply,
			summary,
			$elm$html$Html$button,
			_List_fromArray(
				[
					$author$project$Internal$Options$cs('mdc-fab'),
					A3(
					$elm$core$Basics$composeL,
					$author$project$Internal$Options$when(config.ripple),
					$author$project$Internal$Options$many,
					_List_fromArray(
						[rippleInterface.interactionHandler, rippleInterface.properties]))
				]),
			_List_Nil,
			$elm$core$List$concat(
				_List_fromArray(
					[
						_List_fromArray(
						[
							A3(
							$author$project$Internal$Options$styled,
							$elm$html$Html$div,
							_List_fromArray(
								[
									$author$project$Internal$Options$cs('mdc-fab__ripple')
								]),
							_List_Nil),
							iconSpan
						]),
						nodes
					])));
	});
var $author$project$Internal$Fab$Implementation$view = F2(
	function (lift, domId) {
		return A5(
			$author$project$Internal$Component$render,
			$author$project$Internal$Fab$Implementation$getSet.get,
			$author$project$Internal$Fab$Implementation$fab(domId),
			$author$project$Internal$Msg$FabMsg,
			lift,
			domId);
	});
var $author$project$Material$Fab$view = $author$project$Internal$Fab$Implementation$view;
var $author$project$Internal$TopAppBar$Model$Init = function (a) {
	return {$: 'Init', a: a};
};
var $author$project$Internal$TopAppBar$Model$Resize = function (a) {
	return {$: 'Resize', a: a};
};
var $author$project$Internal$TopAppBar$Model$Scroll = function (a) {
	return {$: 'Scroll', a: a};
};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $author$project$Internal$TopAppBar$Implementation$cssClasses = {collapsed: 'mdc-top-app-bar--short-collapsed', dense: 'mdc-top-app-bar--dense', fixed: 'mdc-top-app-bar--fixed', prominent: 'mdc-top-app-bar--prominent', scrolled: 'mdc-top-app-bar--fixed-scrolled', _short: 'mdc-top-app-bar--short'};
var $author$project$Internal$TopAppBar$Model$defaultConfig = {collapsed: false, dense: false, fixed: false, prominent: false, _short: false};
var $author$project$Internal$TopAppBar$Implementation$getAppBarHeight = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'clientHeight']),
	$elm$json$Json$Decode$float);
var $author$project$Internal$TopAppBar$Implementation$getViewportScrollY = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'ownerDocument', 'defaultView', 'scrollY']),
	$elm$json$Json$Decode$float);
var $elm$html$Html$header = _VirtualDom_node('header');
var $author$project$Internal$GlobalEvents$onResize = $author$project$Internal$GlobalEvents$listener('globalresize');
var $author$project$Internal$GlobalEvents$onScroll = $author$project$Internal$GlobalEvents$listener('globalscroll');
var $author$project$Internal$TopAppBar$Implementation$row = function (options) {
	return A2(
		$author$project$Internal$Options$styled,
		$elm$html$Html$div,
		A2(
			$elm$core$List$cons,
			$author$project$Internal$Options$cs('mdc-top-app-bar__row'),
			options));
};
var $author$project$Internal$TopAppBar$Implementation$topAppBar = F4(
	function (lift, model, options, sections) {
		var top = A2($elm$core$Maybe$withDefault, 0, model.styleTop);
		var lastScrollPosition = A2($elm$core$Maybe$withDefault, 0, model.lastScrollPosition);
		var summary = A2($author$project$Internal$Options$collect, $author$project$Internal$TopAppBar$Model$defaultConfig, options);
		var config = summary.config;
		return A5(
			$author$project$Internal$Options$apply,
			summary,
			$elm$html$Html$header,
			_List_fromArray(
				[
					$author$project$Internal$Options$cs('mdc-top-app-bar'),
					A2(
					$author$project$Internal$Options$when,
					config.dense,
					$author$project$Internal$Options$cs($author$project$Internal$TopAppBar$Implementation$cssClasses.dense)),
					A2(
					$author$project$Internal$Options$when,
					config.fixed,
					$author$project$Internal$Options$cs($author$project$Internal$TopAppBar$Implementation$cssClasses.fixed)),
					A2(
					$author$project$Internal$Options$when,
					config.fixed && (lastScrollPosition > 0),
					$author$project$Internal$Options$cs($author$project$Internal$TopAppBar$Implementation$cssClasses.scrolled)),
					A2(
					$author$project$Internal$Options$when,
					config.prominent,
					$author$project$Internal$Options$cs($author$project$Internal$TopAppBar$Implementation$cssClasses.prominent)),
					A2(
					$author$project$Internal$Options$when,
					config._short,
					$author$project$Internal$Options$cs($author$project$Internal$TopAppBar$Implementation$cssClasses._short)),
					A2(
					$author$project$Internal$Options$when,
					config.collapsed || (config._short && (lastScrollPosition > 0)),
					$author$project$Internal$Options$cs($author$project$Internal$TopAppBar$Implementation$cssClasses.collapsed)),
					A2(
					$author$project$Internal$Options$when,
					(!config.fixed) && (!config._short),
					A2(
						$author$project$Internal$Options$css,
						'top',
						$elm$core$String$fromFloat(top) + 'px')),
					$author$project$Internal$GlobalEvents$onScroll(
					A2(
						$elm$json$Json$Decode$map,
						lift,
						A2(
							$elm$json$Json$Decode$map,
							function (scrollPosition) {
								return $author$project$Internal$TopAppBar$Model$Scroll(
									{scrollPosition: scrollPosition});
							},
							$author$project$Internal$TopAppBar$Implementation$getViewportScrollY))),
					$author$project$Internal$GlobalEvents$onResize(
					A2(
						$elm$json$Json$Decode$map,
						lift,
						A3(
							$elm$json$Json$Decode$map2,
							F2(
								function (scrollPosition, topAppBarHeight) {
									return $author$project$Internal$TopAppBar$Model$Resize(
										{scrollPosition: scrollPosition, topAppBarHeight: topAppBarHeight});
								}),
							$author$project$Internal$TopAppBar$Implementation$getViewportScrollY,
							$author$project$Internal$TopAppBar$Implementation$getAppBarHeight))),
					A2(
					$author$project$Internal$Options$when,
					A2(
						$elm$core$List$any,
						$elm$core$Basics$identity,
						_List_fromArray(
							[
								_Utils_eq(model.lastScrollPosition, $elm$core$Maybe$Nothing),
								_Utils_eq(model.topAppBarHeight, $elm$core$Maybe$Nothing)
							])),
					$author$project$Internal$GlobalEvents$onTick(
						A2(
							$elm$json$Json$Decode$map,
							lift,
							A3(
								$elm$json$Json$Decode$map2,
								F2(
									function (scrollPosition, topAppBarHeight) {
										return $author$project$Internal$TopAppBar$Model$Init(
											{scrollPosition: scrollPosition, topAppBarHeight: topAppBarHeight});
									}),
								$author$project$Internal$TopAppBar$Implementation$getViewportScrollY,
								$author$project$Internal$TopAppBar$Implementation$getAppBarHeight))))
				]),
			_List_Nil,
			_List_fromArray(
				[
					A2($author$project$Internal$TopAppBar$Implementation$row, _List_Nil, sections)
				]));
	});
var $author$project$Internal$TopAppBar$Implementation$view = A3($author$project$Internal$Component$render, $author$project$Internal$TopAppBar$Implementation$getSet.get, $author$project$Internal$TopAppBar$Implementation$topAppBar, $author$project$Internal$Msg$TopAppBarMsg);
var $author$project$Material$TopAppBar$view = $author$project$Internal$TopAppBar$Implementation$view;
var $author$project$Material$Options$when = $author$project$Internal$Options$when;
var $author$project$Main$view = function (model) {
	var appModel = model.appModel;
	if (appModel.$ === 'SetModel') {
		var setModel = appModel.a;
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A5(
					$author$project$Material$TopAppBar$view,
					$author$project$Main$Mdc,
					'top-app-bar',
					model.mdc,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$author$project$Material$TopAppBar$section,
							_List_fromArray(
								[$author$project$Material$TopAppBar$alignStart, $author$project$Material$TopAppBar$fixed]),
							_List_fromArray(
								[
									A5(
									$author$project$Material$TopAppBar$navigationIcon,
									$author$project$Main$Mdc,
									'menu',
									model.mdc,
									_List_fromArray(
										[
											$author$project$Material$Options$onClick($author$project$Main$OpenDrawerMsg)
										]),
									'menu'),
									A2(
									$author$project$Material$TopAppBar$title,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('Photo Film Dev')
										]))
								]))
						])),
					A5(
					$author$project$Material$Drawer$Modal$view,
					$author$project$Main$Mdc,
					'drawer',
					model.mdc,
					_List_fromArray(
						[
							A2($author$project$Material$Options$when, model.drawerOpen, $author$project$Material$Drawer$Modal$open)
						]),
					_List_fromArray(
						[
							A2(
							$author$project$Material$Drawer$Modal$content,
							_List_Nil,
							_List_fromArray(
								[
									A5(
									$author$project$Material$List$nav,
									$author$project$Main$Mdc,
									'drawer-list',
									model.mdc,
									_List_fromArray(
										[$author$project$Material$List$singleSelection, $author$project$Material$List$useActivated]),
									_List_fromArray(
										[
											A2(
											$author$project$Material$List$a,
											_List_fromArray(
												[
													$author$project$Material$List$activated,
													$author$project$Material$Options$attribute(
													$elm$html$Html$Attributes$href('/credit.html'))
												]),
											_List_fromArray(
												[
													A2($author$project$Material$List$graphicIcon, _List_Nil, 'copyright'),
													$elm$html$Html$text('クレジット')
												]))
										]))
								]))
						])),
					A2(
					$author$project$Material$Drawer$Modal$scrim,
					_List_fromArray(
						[
							$author$project$Material$Options$onClick($author$project$Main$CloseDrawerMsg)
						]),
					_List_Nil),
					A3(
					$author$project$Material$Options$styled,
					$elm$html$Html$div,
					_List_fromArray(
						[$author$project$Material$TopAppBar$fixedAdjust]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('content')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$table,
									_List_Nil,
									_List_fromArray(
										[
											A2(
											$elm$html$Html$tbody,
											_List_Nil,
											_List_fromArray(
												[
													A2(
													$elm$html$Html$tr,
													_List_Nil,
													_List_fromArray(
														[
															A2(
															$elm$html$Html$td,
															_List_fromArray(
																[
																	$elm$html$Html$Attributes$class('label')
																]),
															_List_fromArray(
																[
																	$elm$html$Html$text('前浴')
																])),
															A2(
															$elm$html$Html$td,
															_List_fromArray(
																[
																	$elm$html$Html$Attributes$class('input')
																]),
															_List_fromArray(
																[
																	A2(
																	$elm$html$Html$input,
																	_List_fromArray(
																		[
																			$elm$html$Html$Attributes$type_('number'),
																			$elm$html$Html$Attributes$min('0'),
																			$elm$html$Html$Attributes$max('59'),
																			$elm$html$Html$Attributes$value(setModel.input.soak.minutes),
																			$elm$html$Html$Events$onInput(
																			$author$project$Main$SetMsg($author$project$Main$SoakMinutesSource))
																		]),
																	_List_Nil),
																	$elm$html$Html$text('\' '),
																	A2(
																	$elm$html$Html$input,
																	_List_fromArray(
																		[
																			$elm$html$Html$Attributes$type_('number'),
																			$elm$html$Html$Attributes$min('0'),
																			$elm$html$Html$Attributes$max('59'),
																			$elm$html$Html$Attributes$value(setModel.input.soak.seconds),
																			$elm$html$Html$Events$onInput(
																			$author$project$Main$SetMsg($author$project$Main$SoakSecondsSource))
																		]),
																	_List_Nil)
																]))
														])),
													A2(
													$elm$html$Html$tr,
													_List_Nil,
													_List_fromArray(
														[
															A2(
															$elm$html$Html$td,
															_List_fromArray(
																[
																	$elm$html$Html$Attributes$class('label')
																]),
															_List_fromArray(
																[
																	$elm$html$Html$text('現像')
																])),
															A2(
															$elm$html$Html$td,
															_List_fromArray(
																[
																	$elm$html$Html$Attributes$class('input')
																]),
															_List_fromArray(
																[
																	A2(
																	$elm$html$Html$input,
																	_List_fromArray(
																		[
																			$elm$html$Html$Attributes$type_('number'),
																			$elm$html$Html$Attributes$min('0'),
																			$elm$html$Html$Attributes$max('59'),
																			$elm$html$Html$Attributes$value(setModel.input.dev.minutes),
																			$elm$html$Html$Events$onInput(
																			$author$project$Main$SetMsg($author$project$Main$DevMinutesSource))
																		]),
																	_List_Nil),
																	$elm$html$Html$text('\' '),
																	A2(
																	$elm$html$Html$input,
																	_List_fromArray(
																		[
																			$elm$html$Html$Attributes$type_('number'),
																			$elm$html$Html$Attributes$min('0'),
																			$elm$html$Html$Attributes$max('59'),
																			$elm$html$Html$Attributes$value(setModel.input.dev.seconds),
																			$elm$html$Html$Events$onInput(
																			$author$project$Main$SetMsg($author$project$Main$DevSecondsSource))
																		]),
																	_List_Nil)
																]))
														])),
													A2(
													$elm$html$Html$tr,
													_List_Nil,
													_List_fromArray(
														[
															A2(
															$elm$html$Html$td,
															_List_fromArray(
																[
																	$elm$html$Html$Attributes$class('label')
																]),
															_List_fromArray(
																[
																	$elm$html$Html$text('停止')
																])),
															A2(
															$elm$html$Html$td,
															_List_fromArray(
																[
																	$elm$html$Html$Attributes$class('input')
																]),
															_List_fromArray(
																[
																	A2(
																	$elm$html$Html$input,
																	_List_fromArray(
																		[
																			$elm$html$Html$Attributes$type_('number'),
																			$elm$html$Html$Attributes$min('0'),
																			$elm$html$Html$Attributes$max('59'),
																			$elm$html$Html$Attributes$value(setModel.input.stop.minutes),
																			$elm$html$Html$Events$onInput(
																			$author$project$Main$SetMsg($author$project$Main$StopMinutesSource))
																		]),
																	_List_Nil),
																	$elm$html$Html$text('\' '),
																	A2(
																	$elm$html$Html$input,
																	_List_fromArray(
																		[
																			$elm$html$Html$Attributes$type_('number'),
																			$elm$html$Html$Attributes$min('0'),
																			$elm$html$Html$Attributes$max('59'),
																			$elm$html$Html$Attributes$value(setModel.input.stop.seconds),
																			$elm$html$Html$Events$onInput(
																			$author$project$Main$SetMsg($author$project$Main$StopSecondsSource))
																		]),
																	_List_Nil)
																]))
														])),
													A2(
													$elm$html$Html$tr,
													_List_Nil,
													_List_fromArray(
														[
															A2(
															$elm$html$Html$td,
															_List_fromArray(
																[
																	$elm$html$Html$Attributes$class('label')
																]),
															_List_fromArray(
																[
																	$elm$html$Html$text('定着')
																])),
															A2(
															$elm$html$Html$td,
															_List_fromArray(
																[
																	$elm$html$Html$Attributes$class('input')
																]),
															_List_fromArray(
																[
																	A2(
																	$elm$html$Html$input,
																	_List_fromArray(
																		[
																			$elm$html$Html$Attributes$type_('number'),
																			$elm$html$Html$Attributes$min('0'),
																			$elm$html$Html$Attributes$max('59'),
																			$elm$html$Html$Attributes$value(setModel.input.fix.minutes),
																			$elm$html$Html$Events$onInput(
																			$author$project$Main$SetMsg($author$project$Main$FixMinutesSource))
																		]),
																	_List_Nil),
																	$elm$html$Html$text('\' '),
																	A2(
																	$elm$html$Html$input,
																	_List_fromArray(
																		[
																			$elm$html$Html$Attributes$type_('number'),
																			$elm$html$Html$Attributes$min('0'),
																			$elm$html$Html$Attributes$max('59'),
																			$elm$html$Html$Attributes$value(setModel.input.fix.seconds),
																			$elm$html$Html$Events$onInput(
																			$author$project$Main$SetMsg($author$project$Main$FixSecondsSource))
																		]),
																	_List_Nil)
																]))
														])),
													A2(
													$elm$html$Html$tr,
													_List_Nil,
													_List_fromArray(
														[
															A2(
															$elm$html$Html$td,
															_List_fromArray(
																[
																	$elm$html$Html$Attributes$class('label')
																]),
															_List_fromArray(
																[
																	$elm$html$Html$text('水洗')
																])),
															A2(
															$elm$html$Html$td,
															_List_fromArray(
																[
																	$elm$html$Html$Attributes$class('input')
																]),
															_List_fromArray(
																[
																	A2(
																	$elm$html$Html$input,
																	_List_fromArray(
																		[
																			$elm$html$Html$Attributes$type_('number'),
																			$elm$html$Html$Attributes$min('0'),
																			$elm$html$Html$Attributes$max('59'),
																			$elm$html$Html$Attributes$value(setModel.input.rinse.minutes),
																			$elm$html$Html$Events$onInput(
																			$author$project$Main$SetMsg($author$project$Main$RinseMinutesSource))
																		]),
																	_List_Nil),
																	$elm$html$Html$text('\' '),
																	A2(
																	$elm$html$Html$input,
																	_List_fromArray(
																		[
																			$elm$html$Html$Attributes$type_('number'),
																			$elm$html$Html$Attributes$min('0'),
																			$elm$html$Html$Attributes$max('59'),
																			$elm$html$Html$Attributes$value(setModel.input.rinse.seconds),
																			$elm$html$Html$Events$onInput(
																			$author$project$Main$SetMsg($author$project$Main$RinseSecondsSource))
																		]),
																	_List_Nil)
																]))
														])),
													A2(
													$elm$html$Html$tr,
													_List_Nil,
													_List_fromArray(
														[
															A2(
															$elm$html$Html$td,
															_List_fromArray(
																[
																	$elm$html$Html$Attributes$class('label')
																]),
															_List_fromArray(
																[
																	$elm$html$Html$text('防滴')
																])),
															A2(
															$elm$html$Html$td,
															_List_fromArray(
																[
																	$elm$html$Html$Attributes$class('input')
																]),
															_List_fromArray(
																[
																	A2(
																	$elm$html$Html$input,
																	_List_fromArray(
																		[
																			$elm$html$Html$Attributes$type_('number'),
																			$elm$html$Html$Attributes$min('0'),
																			$elm$html$Html$Attributes$max('59'),
																			$elm$html$Html$Attributes$value(setModel.input.wet.minutes),
																			$elm$html$Html$Events$onInput(
																			$author$project$Main$SetMsg($author$project$Main$WetMinutesSource))
																		]),
																	_List_Nil),
																	$elm$html$Html$text('\' '),
																	A2(
																	$elm$html$Html$input,
																	_List_fromArray(
																		[
																			$elm$html$Html$Attributes$type_('number'),
																			$elm$html$Html$Attributes$min('0'),
																			$elm$html$Html$Attributes$max('59'),
																			$elm$html$Html$Attributes$value(setModel.input.wet.seconds),
																			$elm$html$Html$Events$onInput(
																			$author$project$Main$SetMsg($author$project$Main$WetSecondsSource))
																		]),
																	_List_Nil)
																]))
														]))
												]))
										]))
								]))
						])),
					A5(
					$author$project$Material$Fab$view,
					$author$project$Main$Mdc,
					'fab',
					model.mdc,
					_List_fromArray(
						[
							$author$project$Material$Fab$ripple,
							$author$project$Material$Fab$icon('play_arrow'),
							$author$project$Material$Options$onClick($author$project$Main$GoRunMsg)
						]),
					_List_Nil)
				]));
	} else {
		var timeSpans = appModel.a.timeSpans;
		var step = appModel.a.step;
		var rest = appModel.a.rest;
		var state = appModel.a.state;
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A5(
					$author$project$Material$TopAppBar$view,
					$author$project$Main$Mdc,
					'top-app-bar',
					model.mdc,
					_List_fromArray(
						[$author$project$Material$TopAppBar$fixed]),
					_List_fromArray(
						[
							A2(
							$author$project$Material$TopAppBar$section,
							_List_fromArray(
								[$author$project$Material$TopAppBar$alignStart]),
							_List_fromArray(
								[
									A5(
									$author$project$Material$TopAppBar$navigationIcon,
									$author$project$Main$Mdc,
									'set',
									model.mdc,
									_List_fromArray(
										[
											$author$project$Material$Options$onClick($author$project$Main$GoSetMsg)
										]),
									'chevron_left'),
									A2(
									$author$project$Material$TopAppBar$title,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('Photo Film Dev')
										]))
								])),
							A2(
							$author$project$Material$TopAppBar$section,
							_List_fromArray(
								[$author$project$Material$TopAppBar$alignEnd]),
							_List_fromArray(
								[
									function () {
									if (state.$ === 'RunState') {
										return A5(
											$author$project$Material$TopAppBar$actionItem,
											$author$project$Main$Mdc,
											'pause',
											model.mdc,
											_List_fromArray(
												[
													$author$project$Material$Options$onClick($author$project$Main$PauseMsg)
												]),
											'pause');
									} else {
										return A5(
											$author$project$Material$TopAppBar$actionItem,
											$author$project$Main$Mdc,
											'restart',
											model.mdc,
											_List_fromArray(
												[
													$author$project$Material$Options$onClick($author$project$Main$RestartMsg)
												]),
											'play_arrow');
									}
								}(),
									A5(
									$author$project$Material$TopAppBar$actionItem,
									$author$project$Main$Mdc,
									'reset',
									model.mdc,
									_List_fromArray(
										[
											$author$project$Material$Options$onClick($author$project$Main$InitMsg)
										]),
									'undo')
								]))
						])),
					A3(
					$author$project$Material$Options$styled,
					$elm$html$Html$div,
					_List_fromArray(
						[$author$project$Material$TopAppBar$fixedAdjust]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('content')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$table,
									_List_Nil,
									_List_fromArray(
										[
											A2(
											$elm$html$Html$tbody,
											_List_Nil,
											_List_fromArray(
												[
													function () {
													var order = A2($author$project$Main$stepOrder, step, $author$project$Main$SoakStep);
													return A2(
														$elm$html$Html$tr,
														_List_Nil,
														_List_fromArray(
															[
																A2(
																$elm$html$Html$td,
																_List_fromArray(
																	[
																		$elm$html$Html$Attributes$class(
																		$author$project$Main$stepClass(order)),
																		$elm$html$Html$Attributes$class('label')
																	]),
																_List_fromArray(
																	[
																		$elm$html$Html$text('前浴')
																	])),
																function () {
																var _v2 = $author$project$Main$fromSecondsToMinutesSeconds(rest.soak);
																var sign = _v2.sign;
																var minutes = _v2.minutes;
																var seconds = _v2.seconds;
																return A2(
																	$elm$html$Html$td,
																	_Utils_ap(
																		_List_fromArray(
																			[
																				$elm$html$Html$Attributes$class(
																				$author$project$Main$stepClass(order)),
																				$elm$html$Html$Attributes$class('time')
																			]),
																		(sign === '') ? _List_fromArray(
																			[
																				$elm$html$Html$Attributes$class('rest-plus')
																			]) : _List_Nil),
																	_List_fromArray(
																		[
																			$elm$html$Html$text(
																			sign + ($elm$core$String$fromInt(minutes) + ('\' ' + $author$project$Main$fillZero(
																				$elm$core$String$fromInt(seconds)))))
																		]));
															}(),
																A2(
																$elm$html$Html$td,
																_List_fromArray(
																	[
																		$elm$html$Html$Attributes$class(
																		$author$project$Main$stepClass(order))
																	]),
																_List_fromArray(
																	[
																		$elm$html$Html$text('/')
																	])),
																A2(
																$elm$html$Html$td,
																_List_fromArray(
																	[
																		$elm$html$Html$Attributes$class(
																		$author$project$Main$stepClass(order)),
																		$elm$html$Html$Attributes$class('time')
																	]),
																_List_fromArray(
																	[
																		function () {
																		var _v3 = $author$project$Main$fromSecondsToMinutesSeconds(timeSpans.soak);
																		var minutes = _v3.minutes;
																		var seconds = _v3.seconds;
																		return $elm$html$Html$text(
																			$elm$core$String$fromInt(minutes) + ('\' ' + $author$project$Main$fillZero(
																				$elm$core$String$fromInt(seconds))));
																	}()
																	]))
															]));
												}(),
													function () {
													var order = A2($author$project$Main$stepOrder, step, $author$project$Main$DevStep);
													return A2(
														$elm$html$Html$tr,
														_List_Nil,
														_List_fromArray(
															[
																A2(
																$elm$html$Html$td,
																_List_fromArray(
																	[
																		$elm$html$Html$Attributes$class(
																		$author$project$Main$stepClass(order)),
																		$elm$html$Html$Attributes$class('label')
																	]),
																_List_fromArray(
																	[
																		$elm$html$Html$text('現像')
																	])),
																function () {
																var _v4 = $author$project$Main$fromSecondsToMinutesSeconds(rest.dev);
																var sign = _v4.sign;
																var minutes = _v4.minutes;
																var seconds = _v4.seconds;
																return A2(
																	$elm$html$Html$td,
																	_Utils_ap(
																		_List_fromArray(
																			[
																				$elm$html$Html$Attributes$class(
																				$author$project$Main$stepClass(order)),
																				$elm$html$Html$Attributes$class('time')
																			]),
																		(sign === '') ? _List_fromArray(
																			[
																				$elm$html$Html$Attributes$class('rest-plus')
																			]) : _List_Nil),
																	_List_fromArray(
																		[
																			$elm$html$Html$text(
																			sign + ($elm$core$String$fromInt(minutes) + ('\' ' + $author$project$Main$fillZero(
																				$elm$core$String$fromInt(seconds)))))
																		]));
															}(),
																A2(
																$elm$html$Html$td,
																_List_fromArray(
																	[
																		$elm$html$Html$Attributes$class(
																		$author$project$Main$stepClass(order))
																	]),
																_List_fromArray(
																	[
																		$elm$html$Html$text('/')
																	])),
																A2(
																$elm$html$Html$td,
																_List_fromArray(
																	[
																		$elm$html$Html$Attributes$class(
																		$author$project$Main$stepClass(order)),
																		$elm$html$Html$Attributes$class('time')
																	]),
																_List_fromArray(
																	[
																		function () {
																		var _v5 = $author$project$Main$fromSecondsToMinutesSeconds(timeSpans.dev);
																		var minutes = _v5.minutes;
																		var seconds = _v5.seconds;
																		return $elm$html$Html$text(
																			$elm$core$String$fromInt(minutes) + ('\' ' + $author$project$Main$fillZero(
																				$elm$core$String$fromInt(seconds))));
																	}()
																	]))
															]));
												}(),
													function () {
													var order = A2($author$project$Main$stepOrder, step, $author$project$Main$StopStep);
													return A2(
														$elm$html$Html$tr,
														_List_Nil,
														_List_fromArray(
															[
																A2(
																$elm$html$Html$td,
																_List_fromArray(
																	[
																		$elm$html$Html$Attributes$class(
																		$author$project$Main$stepClass(order)),
																		$elm$html$Html$Attributes$class('label')
																	]),
																_List_fromArray(
																	[
																		$elm$html$Html$text('停止')
																	])),
																function () {
																var _v6 = $author$project$Main$fromSecondsToMinutesSeconds(rest.stop);
																var sign = _v6.sign;
																var minutes = _v6.minutes;
																var seconds = _v6.seconds;
																return A2(
																	$elm$html$Html$td,
																	_Utils_ap(
																		_List_fromArray(
																			[
																				$elm$html$Html$Attributes$class(
																				$author$project$Main$stepClass(order)),
																				$elm$html$Html$Attributes$class('time')
																			]),
																		(sign === '') ? _List_fromArray(
																			[
																				$elm$html$Html$Attributes$class('rest-plus')
																			]) : _List_Nil),
																	_List_fromArray(
																		[
																			$elm$html$Html$text(
																			sign + ($elm$core$String$fromInt(minutes) + ('\' ' + $author$project$Main$fillZero(
																				$elm$core$String$fromInt(seconds)))))
																		]));
															}(),
																A2(
																$elm$html$Html$td,
																_List_fromArray(
																	[
																		$elm$html$Html$Attributes$class(
																		$author$project$Main$stepClass(order))
																	]),
																_List_fromArray(
																	[
																		$elm$html$Html$text('/')
																	])),
																A2(
																$elm$html$Html$td,
																_List_fromArray(
																	[
																		$elm$html$Html$Attributes$class(
																		$author$project$Main$stepClass(order)),
																		$elm$html$Html$Attributes$class('time')
																	]),
																_List_fromArray(
																	[
																		function () {
																		var _v7 = $author$project$Main$fromSecondsToMinutesSeconds(timeSpans.stop);
																		var minutes = _v7.minutes;
																		var seconds = _v7.seconds;
																		return $elm$html$Html$text(
																			$elm$core$String$fromInt(minutes) + ('\' ' + $author$project$Main$fillZero(
																				$elm$core$String$fromInt(seconds))));
																	}()
																	]))
															]));
												}(),
													function () {
													var order = A2($author$project$Main$stepOrder, step, $author$project$Main$FixStep);
													return A2(
														$elm$html$Html$tr,
														_List_Nil,
														_List_fromArray(
															[
																A2(
																$elm$html$Html$td,
																_List_fromArray(
																	[
																		$elm$html$Html$Attributes$class(
																		$author$project$Main$stepClass(order)),
																		$elm$html$Html$Attributes$class('label')
																	]),
																_List_fromArray(
																	[
																		$elm$html$Html$text('定着')
																	])),
																function () {
																var _v8 = $author$project$Main$fromSecondsToMinutesSeconds(rest.fix);
																var sign = _v8.sign;
																var minutes = _v8.minutes;
																var seconds = _v8.seconds;
																return A2(
																	$elm$html$Html$td,
																	_Utils_ap(
																		_List_fromArray(
																			[
																				$elm$html$Html$Attributes$class(
																				$author$project$Main$stepClass(order)),
																				$elm$html$Html$Attributes$class('time')
																			]),
																		(sign === '') ? _List_fromArray(
																			[
																				$elm$html$Html$Attributes$class('rest-plus')
																			]) : _List_Nil),
																	_List_fromArray(
																		[
																			$elm$html$Html$text(
																			sign + ($elm$core$String$fromInt(minutes) + ('\' ' + $author$project$Main$fillZero(
																				$elm$core$String$fromInt(seconds)))))
																		]));
															}(),
																A2(
																$elm$html$Html$td,
																_List_fromArray(
																	[
																		$elm$html$Html$Attributes$class(
																		$author$project$Main$stepClass(order))
																	]),
																_List_fromArray(
																	[
																		$elm$html$Html$text('/')
																	])),
																A2(
																$elm$html$Html$td,
																_List_fromArray(
																	[
																		$elm$html$Html$Attributes$class(
																		$author$project$Main$stepClass(order)),
																		$elm$html$Html$Attributes$class('time')
																	]),
																_List_fromArray(
																	[
																		function () {
																		var _v9 = $author$project$Main$fromSecondsToMinutesSeconds(timeSpans.fix);
																		var minutes = _v9.minutes;
																		var seconds = _v9.seconds;
																		return $elm$html$Html$text(
																			$elm$core$String$fromInt(minutes) + ('\' ' + $author$project$Main$fillZero(
																				$elm$core$String$fromInt(seconds))));
																	}()
																	]))
															]));
												}(),
													function () {
													var order = A2($author$project$Main$stepOrder, step, $author$project$Main$RinseStep);
													return A2(
														$elm$html$Html$tr,
														_List_Nil,
														_List_fromArray(
															[
																A2(
																$elm$html$Html$td,
																_List_fromArray(
																	[
																		$elm$html$Html$Attributes$class(
																		$author$project$Main$stepClass(order)),
																		$elm$html$Html$Attributes$class('label')
																	]),
																_List_fromArray(
																	[
																		$elm$html$Html$text('水洗')
																	])),
																function () {
																var _v10 = $author$project$Main$fromSecondsToMinutesSeconds(rest.rinse);
																var sign = _v10.sign;
																var minutes = _v10.minutes;
																var seconds = _v10.seconds;
																return A2(
																	$elm$html$Html$td,
																	_Utils_ap(
																		_List_fromArray(
																			[
																				$elm$html$Html$Attributes$class(
																				$author$project$Main$stepClass(order)),
																				$elm$html$Html$Attributes$class('time')
																			]),
																		(sign === '') ? _List_fromArray(
																			[
																				$elm$html$Html$Attributes$class('rest-plus')
																			]) : _List_Nil),
																	_List_fromArray(
																		[
																			$elm$html$Html$text(
																			sign + ($elm$core$String$fromInt(minutes) + ('\' ' + $author$project$Main$fillZero(
																				$elm$core$String$fromInt(seconds)))))
																		]));
															}(),
																A2(
																$elm$html$Html$td,
																_List_fromArray(
																	[
																		$elm$html$Html$Attributes$class(
																		$author$project$Main$stepClass(order))
																	]),
																_List_fromArray(
																	[
																		$elm$html$Html$text('/')
																	])),
																A2(
																$elm$html$Html$td,
																_List_fromArray(
																	[
																		$elm$html$Html$Attributes$class(
																		$author$project$Main$stepClass(order)),
																		$elm$html$Html$Attributes$class('time')
																	]),
																_List_fromArray(
																	[
																		function () {
																		var _v11 = $author$project$Main$fromSecondsToMinutesSeconds(timeSpans.rinse);
																		var minutes = _v11.minutes;
																		var seconds = _v11.seconds;
																		return $elm$html$Html$text(
																			$elm$core$String$fromInt(minutes) + ('\' ' + $author$project$Main$fillZero(
																				$elm$core$String$fromInt(seconds))));
																	}()
																	]))
															]));
												}(),
													function () {
													var order = A2($author$project$Main$stepOrder, step, $author$project$Main$WetStep);
													return A2(
														$elm$html$Html$tr,
														_List_Nil,
														_List_fromArray(
															[
																A2(
																$elm$html$Html$td,
																_List_fromArray(
																	[
																		$elm$html$Html$Attributes$class(
																		$author$project$Main$stepClass(order)),
																		$elm$html$Html$Attributes$class('label')
																	]),
																_List_fromArray(
																	[
																		$elm$html$Html$text('防滴')
																	])),
																function () {
																var _v12 = $author$project$Main$fromSecondsToMinutesSeconds(rest.wet);
																var sign = _v12.sign;
																var minutes = _v12.minutes;
																var seconds = _v12.seconds;
																return A2(
																	$elm$html$Html$td,
																	_Utils_ap(
																		_List_fromArray(
																			[
																				$elm$html$Html$Attributes$class(
																				$author$project$Main$stepClass(order)),
																				$elm$html$Html$Attributes$class('time')
																			]),
																		(sign === '') ? _List_fromArray(
																			[
																				$elm$html$Html$Attributes$class('rest-plus')
																			]) : _List_Nil),
																	_List_fromArray(
																		[
																			$elm$html$Html$text(
																			sign + ($elm$core$String$fromInt(minutes) + ('\' ' + $author$project$Main$fillZero(
																				$elm$core$String$fromInt(seconds)))))
																		]));
															}(),
																A2(
																$elm$html$Html$td,
																_List_fromArray(
																	[
																		$elm$html$Html$Attributes$class(
																		$author$project$Main$stepClass(order))
																	]),
																_List_fromArray(
																	[
																		$elm$html$Html$text('/')
																	])),
																A2(
																$elm$html$Html$td,
																_List_fromArray(
																	[
																		$elm$html$Html$Attributes$class(
																		$author$project$Main$stepClass(order)),
																		$elm$html$Html$Attributes$class('time')
																	]),
																_List_fromArray(
																	[
																		function () {
																		var _v13 = $author$project$Main$fromSecondsToMinutesSeconds(timeSpans.wet);
																		var minutes = _v13.minutes;
																		var seconds = _v13.seconds;
																		return $elm$html$Html$text(
																			$elm$core$String$fromInt(minutes) + ('\' ' + $author$project$Main$fillZero(
																				$elm$core$String$fromInt(seconds))));
																	}()
																	]))
															]));
												}()
												]))
										]))
								]))
						])),
					A5(
					$author$project$Material$Fab$view,
					$author$project$Main$Mdc,
					'fab',
					model.mdc,
					_List_fromArray(
						[
							$author$project$Material$Fab$ripple,
							$author$project$Material$Fab$icon('skip_next'),
							$author$project$Material$Options$onClick($author$project$Main$NextMsg)
						]),
					_List_Nil)
				]));
	}
};
var $author$project$Main$main = $elm$browser$Browser$element(
	{init: $author$project$Main$init, subscriptions: $author$project$Main$subscriptions, update: $author$project$Main$update, view: $author$project$Main$view});
_Platform_export({'Main':{'init':$author$project$Main$main(
	$elm$json$Json$Decode$succeed(
		{}))({"versions":{"elm":"0.19.1"},"types":{"message":"Main.Msg","aliases":{"Material.Msg":{"args":["m"],"type":"Internal.Msg.Msg m"},"Internal.Index.Index":{"args":[],"type":"String.String"},"Internal.Ripple.Model.ActivateData":{"args":[],"type":"{ event : Internal.Ripple.Model.Event, isSurfaceDisabled : Basics.Bool, wasElementMadeActive : Basics.Bool, isUnbounded : Basics.Bool }"},"Internal.Ripple.Model.ClientRect":{"args":[],"type":"{ top : Basics.Float, left : Basics.Float, width : Basics.Float, height : Basics.Float }"},"Browser.Dom.Element":{"args":[],"type":"{ scene : { width : Basics.Float, height : Basics.Float }, viewport : { x : Basics.Float, y : Basics.Float, width : Basics.Float, height : Basics.Float }, element : { x : Basics.Float, y : Basics.Float, width : Basics.Float, height : Basics.Float } }"},"Internal.Ripple.Model.Event":{"args":[],"type":"{ eventType : String.String, pagePoint : { pageX : Basics.Float, pageY : Basics.Float } }"},"Internal.Menu.Model.Geometry":{"args":[],"type":"{ viewport : Internal.Menu.Model.Viewport, viewportDistance : Internal.Menu.Model.ViewportDistance, anchor : { width : Basics.Float, height : Basics.Float }, menu : { width : Basics.Float, height : Basics.Float } }"},"Internal.Slider.Model.Geometry":{"args":[],"type":"{ rect : Internal.Slider.Model.Rect, discrete : Basics.Bool, step : Maybe.Maybe Basics.Float, min : Basics.Float, max : Basics.Float }"},"Internal.TabBar.Model.Geometry":{"args":[],"type":"{ tabs : List.List Internal.TabBar.Model.Tab, scrollArea : { offsetWidth : Basics.Float }, tabBar : { offsetWidth : Basics.Float } }"},"Internal.TextField.Model.Geometry":{"args":[],"type":"{ width : Basics.Float, height : Basics.Float, labelWidth : Basics.Float }"},"Internal.Keyboard.Key":{"args":[],"type":"String.String"},"Internal.Keyboard.KeyCode":{"args":[],"type":"Basics.Int"},"Internal.Keyboard.Meta":{"args":[],"type":"{ altKey : Basics.Bool, ctrlKey : Basics.Bool, metaKey : Basics.Bool, shiftKey : Basics.Bool }"},"Internal.Slider.Model.Rect":{"args":[],"type":"{ left : Basics.Float, width : Basics.Float }"},"Internal.TabBar.Model.Tab":{"args":[],"type":"{ offsetLeft : Basics.Float, offsetWidth : Basics.Float, contentLeft : Basics.Float, contentRight : Basics.Float }"},"Internal.Menu.Model.Viewport":{"args":[],"type":"{ width : Basics.Float, height : Basics.Float }"},"Internal.Menu.Model.ViewportDistance":{"args":[],"type":"{ top : Basics.Float, right : Basics.Float, left : Basics.Float, bottom : Basics.Float }"}},"unions":{"Main.Msg":{"args":[],"tags":{"Mdc":["Material.Msg Main.Msg"],"GoRunMsg":[],"GoSetMsg":[],"SetMsg":["Main.EventSource","String.String"],"TickMsg":["Time.Posix"],"NextMsg":[],"RestartMsg":[],"PauseMsg":[],"InitMsg":[],"OpenDrawerMsg":[],"CloseDrawerMsg":[]}},"Main.EventSource":{"args":[],"tags":{"SoakMinutesSource":[],"SoakSecondsSource":[],"DevMinutesSource":[],"DevSecondsSource":[],"StopMinutesSource":[],"StopSecondsSource":[],"FixMinutesSource":[],"FixSecondsSource":[],"RinseMinutesSource":[],"RinseSecondsSource":[],"WetMinutesSource":[],"WetSecondsSource":[],"IntervalMinutesSource":[],"IntervalSecondsSource":[]}},"Internal.Msg.Msg":{"args":["m"],"tags":{"Dispatch":["List.List m"],"ButtonMsg":["Internal.Index.Index","Internal.Button.Model.Msg m"],"CheckboxMsg":["Internal.Index.Index","Internal.Checkbox.Model.Msg"],"ChipMsg":["Internal.Index.Index","Internal.Chip.Model.Msg m"],"DialogMsg":["Internal.Index.Index","Internal.Dialog.Model.Msg"],"DrawerMsg":["Internal.Index.Index","Internal.Drawer.Model.Msg"],"FabMsg":["Internal.Index.Index","Internal.Fab.Model.Msg"],"IconButtonMsg":["Internal.Index.Index","Internal.IconButton.Model.Msg"],"ListMsg":["Internal.Index.Index","Internal.List.Model.Msg m"],"MenuMsg":["Internal.Index.Index","Internal.Menu.Model.Msg m"],"RadioButtonMsg":["Internal.Index.Index","Internal.RadioButton.Model.Msg"],"RippleMsg":["Internal.Index.Index","Internal.Ripple.Model.Msg"],"SelectMsg":["Internal.Index.Index","Internal.Select.Model.Msg m"],"SliderMsg":["Internal.Index.Index","Internal.Slider.Model.Msg m"],"SnackbarMsg":["Internal.Index.Index","Internal.Snackbar.Model.Msg m"],"SwitchMsg":["Internal.Index.Index","Internal.Switch.Model.Msg"],"TabBarMsg":["Internal.Index.Index","Internal.TabBar.Model.Msg m"],"TextFieldMsg":["Internal.Index.Index","Internal.TextField.Model.Msg"],"TopAppBarMsg":["Internal.Index.Index","Internal.TopAppBar.Model.Msg"]}},"Time.Posix":{"args":[],"tags":{"Posix":["Basics.Int"]}},"String.String":{"args":[],"tags":{"String":[]}},"Basics.Int":{"args":[],"tags":{"Int":[]}},"List.List":{"args":["a"],"tags":{}},"Internal.Button.Model.Msg":{"args":["m"],"tags":{"RippleMsg":["Internal.Ripple.Model.Msg"],"Click":["Basics.Bool","m"]}},"Internal.Checkbox.Model.Msg":{"args":[],"tags":{"NoOp":[],"Init":["Maybe.Maybe (Maybe.Maybe Internal.Checkbox.Model.State)","Maybe.Maybe Internal.Checkbox.Model.State"],"SetFocus":["Basics.Bool"],"AnimationEnd":[]}},"Internal.Chip.Model.Msg":{"args":["m"],"tags":{"RippleMsg":["Internal.Ripple.Model.Msg"],"Click":["m"]}},"Internal.Dialog.Model.Msg":{"args":[],"tags":{"NoOp":[],"StartAnimation":["Basics.Bool"],"EndAnimation":[]}},"Internal.Drawer.Model.Msg":{"args":[],"tags":{"NoOp":[],"StartAnimation":["Basics.Bool"],"EndAnimation":[]}},"Internal.Fab.Model.Msg":{"args":[],"tags":{"RippleMsg":["Internal.Ripple.Model.Msg"],"NoOp":[]}},"Internal.IconButton.Model.Msg":{"args":[],"tags":{"RippleMsg":["Internal.Ripple.Model.Msg"]}},"Internal.List.Model.Msg":{"args":["m"],"tags":{"NoOp":[],"RippleMsg":["String.String","Internal.Ripple.Model.Msg"],"FocusItem":["Basics.Int","String.String"],"ResetFocusedItem":[],"SelectItem":["Basics.Int","Basics.Int -> m"]}},"Internal.Menu.Model.Msg":{"args":["m"],"tags":{"NoOp":[],"Init":["{ quickOpen : Basics.Bool, index : Maybe.Maybe Basics.Int, focusedItemId : String.String }","Internal.Menu.Model.Geometry"],"AnimationEnd":[],"Open":[],"Close":[],"Toggle":[],"CloseDelayed":[],"DocumentClick":[],"KeyDown":["Internal.Keyboard.Meta","Internal.Keyboard.Key","Internal.Keyboard.KeyCode"],"KeyUp":["Internal.Keyboard.Meta","Internal.Keyboard.Key","Internal.Keyboard.KeyCode"],"ListMsg":["Internal.List.Model.Msg m"]}},"Internal.RadioButton.Model.Msg":{"args":[],"tags":{"RippleMsg":["Internal.Ripple.Model.Msg"],"NoOp":[],"SetFocus":["Basics.Bool"]}},"Internal.Ripple.Model.Msg":{"args":[],"tags":{"Focus":[],"Blur":[],"Activate0":["String.String","Internal.Ripple.Model.ActivateData"],"Activate":["Internal.Ripple.Model.ActivateData","Result.Result Browser.Dom.Error Browser.Dom.Element"],"Reactivate":["Internal.Ripple.Model.ActivateData","Result.Result Browser.Dom.Error Browser.Dom.Element"],"ActivationEnded":["Basics.Int"],"Deactivate":[],"DeactivationEnded":["Basics.Int"],"SetCssVariables":["Basics.Bool","Internal.Ripple.Model.ClientRect"]}},"Internal.Select.Model.Msg":{"args":["m"],"tags":{"NoOp":[],"Blur":[],"Focus":[],"Change":["String.String"],"RippleMsg":["Internal.Ripple.Model.Msg"],"KeyDown":["String.String","Internal.Keyboard.Key","Internal.Keyboard.KeyCode"],"OpenMenu":["String.String"],"ToggleMenu":[],"MenuSelection":["String.String","String.String -> m","String.String"],"MenuMsg":["Internal.Menu.Model.Msg m"]}},"Internal.Slider.Model.Msg":{"args":["m"],"tags":{"NoOp":[],"Init":["Internal.Slider.Model.Geometry"],"Resize":["Internal.Slider.Model.Geometry"],"InteractionStart":["String.String","{ pageX : Basics.Float }"],"KeyDown":[],"Focus":[],"Blur":[],"ThumbContainerPointer":["String.String","{ pageX : Basics.Float }"],"TransitionEnd":[],"Drag":["{ pageX : Basics.Float }"],"Up":[],"ActualUp":[]}},"Internal.Snackbar.Model.Msg":{"args":["m"],"tags":{"Move":["Basics.Int","Internal.Snackbar.Model.Transition"],"Dismiss":["Basics.Bool","Maybe.Maybe m"],"SetOpen":[]}},"Internal.Switch.Model.Msg":{"args":[],"tags":{"RippleMsg":["Internal.Ripple.Model.Msg"],"SetFocus":["Basics.Bool"],"NoOp":[]}},"Internal.TabBar.Model.Msg":{"args":["m"],"tags":{"NoOp":[],"Dispatch":["List.List m"],"RippleMsg":["Basics.Int","Internal.Ripple.Model.Msg"],"Init":["Internal.TabBar.Model.Geometry"],"SetActiveTab":["String.String","Basics.Int","Basics.Float"]}},"Internal.TextField.Model.Msg":{"args":[],"tags":{"Blur":[],"Focus":["Internal.TextField.Model.Geometry"],"Input":["String.String"],"NoOp":[]}},"Internal.TopAppBar.Model.Msg":{"args":[],"tags":{"RippleMsg":["String.String","Internal.Ripple.Model.Msg"],"Init":["{ scrollPosition : Basics.Float, topAppBarHeight : Basics.Float }"],"Resize":["{ scrollPosition : Basics.Float, topAppBarHeight : Basics.Float }"],"Scroll":["{ scrollPosition : Basics.Float }"]}},"Basics.Bool":{"args":[],"tags":{"True":[],"False":[]}},"Browser.Dom.Error":{"args":[],"tags":{"NotFound":["String.String"]}},"Basics.Float":{"args":[],"tags":{"Float":[]}},"Maybe.Maybe":{"args":["a"],"tags":{"Just":["a"],"Nothing":[]}},"Result.Result":{"args":["error","value"],"tags":{"Ok":["value"],"Err":["error"]}},"Internal.Checkbox.Model.State":{"args":[],"tags":{"Checked":[],"Unchecked":[]}},"Internal.Snackbar.Model.Transition":{"args":[],"tags":{"Timeout":[],"Clicked":[]}}}}})}});

//////////////////// HMR BEGIN ////////////////////

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Original Author: Flux Xu @fluxxu
*/

/*
    A note about the environment that this code runs in...

    assumed globals:
        - `module` (from Node.js module system and webpack)

    assumed in scope after injection into the Elm IIFE:
        - `scope` (has an 'Elm' property which contains the public Elm API)
        - various functions defined by Elm which we have to hook such as `_Platform_initialize` and `_Scheduler_binding`
 */

if (module.hot) {
    (function () {
        "use strict";

        //polyfill for IE: https://github.com/fluxxu/elm-hot-loader/issues/16
        if (typeof Object.assign != 'function') {
            Object.assign = function (target) {
                'use strict';
                if (target == null) {
                    throw new TypeError('Cannot convert undefined or null to object');
                }

                target = Object(target);
                for (var index = 1; index < arguments.length; index++) {
                    var source = arguments[index];
                    if (source != null) {
                        for (var key in source) {
                            if (Object.prototype.hasOwnProperty.call(source, key)) {
                                target[key] = source[key];
                            }
                        }
                    }
                }
                return target;
            };
        }

        // Elm 0.19.1 introduced a '$' prefix at the beginning of the symbols it emits,
        // and we check for `Maybe.Just` because we expect it to be present in all Elm programs.
        var elmVersion;
        if (typeof elm$core$Maybe$Just !== 'undefined')
            elmVersion = '0.19.0';
        else if (typeof $elm$core$Maybe$Just !== 'undefined')
            elmVersion = '0.19.1';
        else
            throw new Error("Could not determine Elm version");

        function elmSymbol(symbol) {
            try {
                switch (elmVersion) {
                    case '0.19.0':
                        return eval(symbol);
                    case '0.19.1':
                        return eval('$' + symbol);
                    default:
                        throw new Error('Cannot resolve ' + symbol + '. Elm version unknown!')
                }
            } catch (e) {
                if (e instanceof ReferenceError) {
                    return undefined;
                } else {
                    throw e;
                }
            }
        }

        var instances = module.hot.data
            ? module.hot.data.instances || {}
            : {};
        var uid = module.hot.data
            ? module.hot.data.uid || 0
            : 0;

        if (Object.keys(instances).length === 0) {
            log("[elm-hot] Enabled");
        }

        var cancellers = [];

        // These 2 variables act as dynamically-scoped variables which are set only when the
        // Elm module's hooked init function is called.
        var initializingInstance = null;
        var swappingInstance = null;

        module.hot.accept();
        module.hot.dispose(function (data) {
            data.instances = instances;
            data.uid = uid;

            // Cleanup pending async tasks

            // First, make sure that no new tasks can be started until we finish replacing the code
            _Scheduler_binding = function () {
                return _Scheduler_fail(new Error('[elm-hot] Inactive Elm instance.'))
            };

            // Second, kill pending tasks belonging to the old instance
            if (cancellers.length) {
                log('[elm-hot] Killing ' + cancellers.length + ' running processes...');
                try {
                    cancellers.forEach(function (cancel) {
                        cancel();
                    });
                } catch (e) {
                    console.warn('[elm-hot] Kill process error: ' + e.message);
                }
            }
        });

        function log(message) {
            if (module.hot.verbose) {
                console.log(message)
            }
        }

        function getId() {
            return ++uid;
        }

        function findPublicModules(parent, path) {
            var modules = [];
            for (var key in parent) {
                var child = parent[key];
                var currentPath = path ? path + '.' + key : key;
                if ('init' in child) {
                    modules.push({
                        path: currentPath,
                        module: child
                    });
                } else {
                    modules = modules.concat(findPublicModules(child, currentPath));
                }
            }
            return modules;
        }

        function registerInstance(domNode, flags, path, portSubscribes, portSends) {
            var id = getId();

            var instance = {
                id: id,
                path: path,
                domNode: domNode,
                flags: flags,
                portSubscribes: portSubscribes,
                portSends: portSends,
                lastState: null // last Elm app state (root model)
            };

            return instances[id] = instance
        }

        function isFullscreenApp() {
            // Returns true if the Elm app will take over the entire DOM body.
            return typeof elmSymbol("elm$browser$Browser$application") !== 'undefined'
                || typeof elmSymbol("elm$browser$Browser$document") !== 'undefined';
        }

        function wrapDomNode(node) {
            // When embedding an Elm app into a specific DOM node, Elm will replace the provided
            // DOM node with the Elm app's content. When the Elm app is compiled normally, the
            // original DOM node is reused (its attributes and content changes, but the object
            // in memory remains the same). But when compiled using `--debug`, Elm will completely
            // destroy the original DOM node and instead replace it with 2 brand new nodes: one
            // for your Elm app's content and the other for the Elm debugger UI. In this case,
            // if you held a reference to the DOM node provided for embedding, it would be orphaned
            // after Elm module initialization.
            //
            // So in order to make both cases consistent and isolate us from changes in how Elm
            // does this, we will insert a dummy node to wrap the node for embedding and hold
            // a reference to the dummy node.
            //
            // We will also put a tag on the dummy node so that the Elm developer knows who went
            // behind their back and rudely put stuff in their DOM.
            var dummyNode = document.createElement("div");
            dummyNode.setAttribute("data-elm-hot", "true");
            dummyNode.style.height = "inherit";
            var parentNode = node.parentNode;
            parentNode.replaceChild(dummyNode, node);
            dummyNode.appendChild(node);
            return dummyNode;
        }

        function wrapPublicModule(path, module) {
            var originalInit = module.init;
            if (originalInit) {
                module.init = function (args) {
                    var elm;
                    var portSubscribes = {};
                    var portSends = {};
                    var domNode = null;
                    var flags = null;
                    if (typeof args !== 'undefined') {
                        // normal case
                        domNode = args['node'] && !isFullscreenApp()
                            ? wrapDomNode(args['node'])
                            : document.body;
                        flags = args['flags'];
                    } else {
                        // rare case: Elm allows init to be called without any arguments at all
                        domNode = document.body;
                        flags = undefined
                    }
                    initializingInstance = registerInstance(domNode, flags, path, portSubscribes, portSends);
                    elm = originalInit(args);
                    wrapPorts(elm, portSubscribes, portSends);
                    initializingInstance = null;
                    return elm;
                };
            } else {
                console.error("Could not find a public module to wrap at path " + path)
            }
        }

        function swap(Elm, instance) {
            log('[elm-hot] Hot-swapping module: ' + instance.path);

            swappingInstance = instance;

            // remove from the DOM everything that had been created by the old Elm app
            var containerNode = instance.domNode;
            while (containerNode.lastChild) {
                containerNode.removeChild(containerNode.lastChild);
            }

            var m = getAt(instance.path.split('.'), Elm);
            var elm;
            if (m) {
                // prepare to initialize the new Elm module
                var args = {flags: instance.flags};
                if (containerNode === document.body) {
                    // fullscreen case: no additional args needed
                } else {
                    // embed case: provide a new node for Elm to use
                    var nodeForEmbed = document.createElement("div");
                    containerNode.appendChild(nodeForEmbed);
                    args['node'] = nodeForEmbed;
                }

                elm = m.init(args);

                Object.keys(instance.portSubscribes).forEach(function (portName) {
                    if (portName in elm.ports && 'subscribe' in elm.ports[portName]) {
                        var handlers = instance.portSubscribes[portName];
                        if (!handlers.length) {
                            return;
                        }
                        log('[elm-hot] Reconnect ' + handlers.length + ' handler(s) to port \''
                            + portName + '\' (' + instance.path + ').');
                        handlers.forEach(function (handler) {
                            elm.ports[portName].subscribe(handler);
                        });
                    } else {
                        delete instance.portSubscribes[portName];
                        log('[elm-hot] Port was removed: ' + portName);
                    }
                });

                Object.keys(instance.portSends).forEach(function (portName) {
                    if (portName in elm.ports && 'send' in elm.ports[portName]) {
                        log('[elm-hot] Replace old port send with the new send');
                        instance.portSends[portName] = elm.ports[portName].send;
                    } else {
                        delete instance.portSends[portName];
                        log('[elm-hot] Port was removed: ' + portName);
                    }
                });
            } else {
                log('[elm-hot] Module was removed: ' + instance.path);
            }

            swappingInstance = null;
        }

        function wrapPorts(elm, portSubscribes, portSends) {
            var portNames = Object.keys(elm.ports || {});
            //hook ports
            if (portNames.length) {
                // hook outgoing ports
                portNames
                    .filter(function (name) {
                        return 'subscribe' in elm.ports[name];
                    })
                    .forEach(function (portName) {
                        var port = elm.ports[portName];
                        var subscribe = port.subscribe;
                        var unsubscribe = port.unsubscribe;
                        elm.ports[portName] = Object.assign(port, {
                            subscribe: function (handler) {
                                log('[elm-hot] ports.' + portName + '.subscribe called.');
                                if (!portSubscribes[portName]) {
                                    portSubscribes[portName] = [handler];
                                } else {
                                    //TODO handle subscribing to single handler more than once?
                                    portSubscribes[portName].push(handler);
                                }
                                return subscribe.call(port, handler);
                            },
                            unsubscribe: function (handler) {
                                log('[elm-hot] ports.' + portName + '.unsubscribe called.');
                                var list = portSubscribes[portName];
                                if (list && list.indexOf(handler) !== -1) {
                                    list.splice(list.lastIndexOf(handler), 1);
                                } else {
                                    console.warn('[elm-hot] ports.' + portName + '.unsubscribe: handler not subscribed');
                                }
                                return unsubscribe.call(port, handler);
                            }
                        });
                    });

                // hook incoming ports
                portNames
                    .filter(function (name) {
                        return 'send' in elm.ports[name];
                    })
                    .forEach(function (portName) {
                        var port = elm.ports[portName];
                        portSends[portName] = port.send;
                        elm.ports[portName] = Object.assign(port, {
                            send: function (val) {
                                return portSends[portName].call(port, val);
                            }
                        });
                    });
            }
            return portSubscribes;
        }

        /*
        Breadth-first search for a `Browser.Navigation.Key` in the user's app model.
        Returns the key and keypath or null if not found.
        */
        function findNavKey(rootModel) {
            var queue = [];
            if (isDebuggerModel(rootModel)) {
                /*
                 Extract the user's app model from the Elm Debugger's model. The Elm debugger
                 can hold multiple references to the user's model (e.g. in its "history"). So
                 we must be careful to only search within the "state" part of the Debugger.
                */
                queue.push({value: rootModel['state'], keypath: ['state']});
            } else {
                queue.push({value: rootModel, keypath: []});
            }

            while (queue.length !== 0) {
                var item = queue.shift();

                if (typeof item.value === "undefined" || item.value === null) {
                    continue;
                }

                // The nav key is identified by a runtime tag added by the elm-hot injector.
                if (item.value.hasOwnProperty("elm-hot-nav-key")) {
                    // found it!
                    return item;
                }

                if (typeof item.value !== "object") {
                    continue;
                }

                for (var propName in item.value) {
                    if (!item.value.hasOwnProperty(propName)) continue;
                    var newKeypath = item.keypath.slice();
                    newKeypath.push(propName);
                    queue.push({value: item.value[propName], keypath: newKeypath})
                }
            }

            return null;
        }


        function isDebuggerModel(model) {
            // Up until elm/browser 1.0.2, the Elm debugger could be identified by a
            // property named "expando". But in version 1.0.2 that was renamed to "expandoModel"
            return model
                && (model.hasOwnProperty("expando") || model.hasOwnProperty("expandoModel"))
                && model.hasOwnProperty("state");
        }

        function getAt(keyPath, obj) {
            return keyPath.reduce(function (xs, x) {
                return (xs && xs[x]) ? xs[x] : null
            }, obj)
        }

        function removeNavKeyListeners(navKey) {
            window.removeEventListener('popstate', navKey.value);
            window.navigator.userAgent.indexOf('Trident') < 0 || window.removeEventListener('hashchange', navKey.value);
        }

        // hook program creation
        var initialize = _Platform_initialize;
        _Platform_initialize = function (flagDecoder, args, init, update, subscriptions, stepperBuilder) {
            var instance = initializingInstance || swappingInstance;
            var tryFirstRender = !!swappingInstance;

            var hookedInit = function (args) {
                var initialStateTuple = init(args);
                if (swappingInstance) {
                    var oldModel = swappingInstance.lastState;
                    var newModel = initialStateTuple.a;

                    if (typeof elmSymbol("elm$browser$Browser$application") !== 'undefined') {
                        var oldKeyLoc = findNavKey(oldModel);

                        // attempt to find the Browser.Navigation.Key in the newly-constructed model
                        // and bring it along with the rest of the old data.
                        var newKeyLoc = findNavKey(newModel);
                        var error = null;
                        if (newKeyLoc === null) {
                            error = "could not find Browser.Navigation.Key in the new app model";
                        } else if (oldKeyLoc === null) {
                            error = "could not find Browser.Navigation.Key in the old app model.";
                        } else if (newKeyLoc.keypath.toString() !== oldKeyLoc.keypath.toString()) {
                            error = "the location of the Browser.Navigation.Key in the model has changed.";
                        } else {
                            // remove event listeners attached to the old nav key
                            removeNavKeyListeners(oldKeyLoc.value);

                            // insert the new nav key into the old model in the exact same location
                            var parentKeyPath = oldKeyLoc.keypath.slice(0, -1);
                            var lastSegment = oldKeyLoc.keypath.slice(-1)[0];
                            var oldParent = getAt(parentKeyPath, oldModel);
                            oldParent[lastSegment] = newKeyLoc.value;
                        }

                        if (error !== null) {
                            console.error("[elm-hot] Hot-swapping " + instance.path + " not possible: " + error);
                            oldModel = newModel;
                        }
                    }

                    // the heart of the app state hot-swap
                    initialStateTuple.a = oldModel;

                    // ignore any Cmds returned by the init during hot-swap
                    initialStateTuple.b = elmSymbol("elm$core$Platform$Cmd$none");
                } else {
                    // capture the initial state for later
                    initializingInstance.lastState = initialStateTuple.a;
                }

                return initialStateTuple
            };

            var hookedStepperBuilder = function (sendToApp, model) {
                var result;
                // first render may fail if shape of model changed too much
                if (tryFirstRender) {
                    tryFirstRender = false;
                    try {
                        result = stepperBuilder(sendToApp, model)
                    } catch (e) {
                        throw new Error('[elm-hot] Hot-swapping ' + instance.path +
                            ' is not possible, please reload page. Error: ' + e.message)
                    }
                } else {
                    result = stepperBuilder(sendToApp, model)
                }

                return function (nextModel, isSync) {
                    if (instance) {
                        // capture the state after every step so that later we can restore from it during a hot-swap
                        instance.lastState = nextModel
                    }
                    return result(nextModel, isSync)
                }
            };

            return initialize(flagDecoder, args, hookedInit, update, subscriptions, hookedStepperBuilder)
        };

        // hook process creation
        var originalBinding = _Scheduler_binding;
        _Scheduler_binding = function (originalCallback) {
            return originalBinding(function () {
                // start the scheduled process, which may return a cancellation function.
                var cancel = originalCallback.apply(this, arguments);
                if (cancel) {
                    cancellers.push(cancel);
                    return function () {
                        cancellers.splice(cancellers.indexOf(cancel), 1);
                        return cancel();
                    };
                }
                return cancel;
            });
        };

        scope['_elm_hot_loader_init'] = function (Elm) {
            // swap instances
            var removedInstances = [];
            for (var id in instances) {
                var instance = instances[id];
                if (instance.domNode.parentNode) {
                    swap(Elm, instance);
                } else {
                    removedInstances.push(id);
                }
            }

            removedInstances.forEach(function (id) {
                delete instance[id];
            });

            // wrap all public modules
            var publicModules = findPublicModules(Elm);
            publicModules.forEach(function (m) {
                wrapPublicModule(m.path, m.module);
            });
        }
    })();

    scope['_elm_hot_loader_init'](scope['Elm']);
}
//////////////////// HMR END ////////////////////


}(this));
},{}],"../node_modules/nosleep.js/src/media.js":[function(require,module,exports) {
module.exports = {
  webm: 'data:video/webm;base64,GkXfo0AgQoaBAUL3gQFC8oEEQvOBCEKCQAR3ZWJtQoeBAkKFgQIYU4BnQI0VSalmQCgq17FAAw9CQE2AQAZ3aGFtbXlXQUAGd2hhbW15RIlACECPQAAAAAAAFlSua0AxrkAu14EBY8WBAZyBACK1nEADdW5khkAFVl9WUDglhohAA1ZQOIOBAeBABrCBCLqBCB9DtnVAIueBAKNAHIEAAIAwAQCdASoIAAgAAUAmJaQAA3AA/vz0AAA=',
  mp4: 'data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQADQGgcIQADQGgcAAAACQGeYUQn/wALKCEAA0BoHAAAAAkBnmNEJ/8ACykhAANAaBwhAANAaBwAAAANQZpoNExDP/6plgAMuSEAA0BoHAAAAAtBnoZFESwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBnqVEJ/8ACykhAANAaBwAAAAJAZ6nRCf/AAsoIQADQGgcIQADQGgcAAAADUGarDRMQz/+qZYADLghAANAaBwAAAALQZ7KRRUsK/8ACPkhAANAaBwAAAAJAZ7pRCf/AAsoIQADQGgcIQADQGgcAAAACQGe60Qn/wALKCEAA0BoHAAAAA1BmvA0TEM//qmWAAy5IQADQGgcIQADQGgcAAAAC0GfDkUVLCv/AAj5IQADQGgcAAAACQGfLUQn/wALKSEAA0BoHCEAA0BoHAAAAAkBny9EJ/8ACyghAANAaBwAAAANQZs0NExDP/6plgAMuCEAA0BoHAAAAAtBn1JFFSwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBn3FEJ/8ACyghAANAaBwAAAAJAZ9zRCf/AAsoIQADQGgcIQADQGgcAAAADUGbeDRMQz/+qZYADLkhAANAaBwAAAALQZ+WRRUsK/8ACPghAANAaBwhAANAaBwAAAAJAZ+1RCf/AAspIQADQGgcAAAACQGft0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bm7w0TEM//qmWAAy4IQADQGgcAAAAC0Gf2kUVLCv/AAj5IQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHAAAAAkBn/tEJ/8ACykhAANAaBwAAAANQZvgNExDP/6plgAMuSEAA0BoHCEAA0BoHAAAAAtBnh5FFSwr/wAI+CEAA0BoHAAAAAkBnj1EJ/8ACyghAANAaBwhAANAaBwAAAAJAZ4/RCf/AAspIQADQGgcAAAADUGaJDRMQz/+qZYADLghAANAaBwAAAALQZ5CRRUsK/8ACPkhAANAaBwhAANAaBwAAAAJAZ5hRCf/AAsoIQADQGgcAAAACQGeY0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bmmg0TEM//qmWAAy5IQADQGgcAAAAC0GehkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGepUQn/wALKSEAA0BoHAAAAAkBnqdEJ/8ACyghAANAaBwAAAANQZqsNExDP/6plgAMuCEAA0BoHCEAA0BoHAAAAAtBnspFFSwr/wAI+SEAA0BoHAAAAAkBnulEJ/8ACyghAANAaBwhAANAaBwAAAAJAZ7rRCf/AAsoIQADQGgcAAAADUGa8DRMQz/+qZYADLkhAANAaBwhAANAaBwAAAALQZ8ORRUsK/8ACPkhAANAaBwAAAAJAZ8tRCf/AAspIQADQGgcIQADQGgcAAAACQGfL0Qn/wALKCEAA0BoHAAAAA1BmzQ0TEM//qmWAAy4IQADQGgcAAAAC0GfUkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGfcUQn/wALKCEAA0BoHAAAAAkBn3NEJ/8ACyghAANAaBwhAANAaBwAAAANQZt4NExC//6plgAMuSEAA0BoHAAAAAtBn5ZFFSwr/wAI+CEAA0BoHCEAA0BoHAAAAAkBn7VEJ/8ACykhAANAaBwAAAAJAZ+3RCf/AAspIQADQGgcAAAADUGbuzRMQn/+nhAAYsAhAANAaBwhAANAaBwAAAAJQZ/aQhP/AAspIQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHAAACiFtb292AAAAbG12aGQAAAAA1YCCX9WAgl8AAAPoAAAH/AABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAGGlvZHMAAAAAEICAgAcAT////v7/AAAF+XRyYWsAAABcdGtoZAAAAAPVgIJf1YCCXwAAAAEAAAAAAAAH0AAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAygAAAMoAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAB9AAABdwAAEAAAAABXFtZGlhAAAAIG1kaGQAAAAA1YCCX9WAgl8AAV+QAAK/IFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAUcbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAE3HN0YmwAAACYc3RzZAAAAAAAAAABAAAAiGF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAygDKAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAyYXZjQwFNQCj/4QAbZ01AKOyho3ySTUBAQFAAAAMAEAAr8gDxgxlgAQAEaO+G8gAAABhzdHRzAAAAAAAAAAEAAAA8AAALuAAAABRzdHNzAAAAAAAAAAEAAAABAAAB8GN0dHMAAAAAAAAAPAAAAAEAABdwAAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAAC7gAAAAAQAAF3AAAAABAAAAAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAEEc3RzegAAAAAAAAAAAAAAPAAAAzQAAAAQAAAADQAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAANAAAADQAAAQBzdGNvAAAAAAAAADwAAAAwAAADZAAAA3QAAAONAAADoAAAA7kAAAPQAAAD6wAAA/4AAAQXAAAELgAABEMAAARcAAAEbwAABIwAAAShAAAEugAABM0AAATkAAAE/wAABRIAAAUrAAAFQgAABV0AAAVwAAAFiQAABaAAAAW1AAAFzgAABeEAAAX+AAAGEwAABiwAAAY/AAAGVgAABnEAAAaEAAAGnQAABrQAAAbPAAAG4gAABvUAAAcSAAAHJwAAB0AAAAdTAAAHcAAAB4UAAAeeAAAHsQAAB8gAAAfjAAAH9gAACA8AAAgmAAAIQQAACFQAAAhnAAAIhAAACJcAAAMsdHJhawAAAFx0a2hkAAAAA9WAgl/VgIJfAAAAAgAAAAAAAAf8AAAAAAAAAAAAAAABAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAACsm1kaWEAAAAgbWRoZAAAAADVgIJf1YCCXwAArEQAAWAAVcQAAAAAACdoZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU3RlcmVvAAAAAmNtaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAidzdGJsAAAAZ3N0c2QAAAAAAAAAAQAAAFdtcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAADNlc2RzAAAAAAOAgIAiAAIABICAgBRAFQAAAAADDUAAAAAABYCAgAISEAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAABYAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAGAAAAWAAAAXBzdGNvAAAAAAAAAFgAAAOBAAADhwAAA5oAAAOtAAADswAAA8oAAAPfAAAD5QAAA/gAAAQLAAAEEQAABCgAAAQ9AAAEUAAABFYAAARpAAAEgAAABIYAAASbAAAErgAABLQAAATHAAAE3gAABPMAAAT5AAAFDAAABR8AAAUlAAAFPAAABVEAAAVXAAAFagAABX0AAAWDAAAFmgAABa8AAAXCAAAFyAAABdsAAAXyAAAF+AAABg0AAAYgAAAGJgAABjkAAAZQAAAGZQAABmsAAAZ+AAAGkQAABpcAAAauAAAGwwAABskAAAbcAAAG7wAABwYAAAcMAAAHIQAABzQAAAc6AAAHTQAAB2QAAAdqAAAHfwAAB5IAAAeYAAAHqwAAB8IAAAfXAAAH3QAAB/AAAAgDAAAICQAACCAAAAg1AAAIOwAACE4AAAhhAAAIeAAACH4AAAiRAAAIpAAACKoAAAiwAAAItgAACLwAAAjCAAAAFnVkdGEAAAAObmFtZVN0ZXJlbwAAAHB1ZHRhAAAAaG1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAO2lsc3QAAAAzqXRvbwAAACtkYXRhAAAAAQAAAABIYW5kQnJha2UgMC4xMC4yIDIwMTUwNjExMDA='
}

},{}],"../node_modules/nosleep.js/src/index.js":[function(require,module,exports) {
const { webm, mp4 } = require('./media.js')

// Detect iOS browsers < version 10
const oldIOS = typeof navigator !== 'undefined' && parseFloat(
  ('' + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ''])[1])
    .replace('undefined', '3_2').replace('_', '.').replace('_', '')
) < 10 && !window.MSStream

class NoSleep {
  constructor () {
    if (oldIOS) {
      this.noSleepTimer = null
    } else {
      // Set up no sleep video element
      this.noSleepVideo = document.createElement('video')

      this.noSleepVideo.setAttribute('muted', '')
      this.noSleepVideo.setAttribute('title', 'No Sleep')
      this.noSleepVideo.setAttribute('playsinline', '')

      this._addSourceToVideo(this.noSleepVideo, 'webm', webm)
      this._addSourceToVideo(this.noSleepVideo, 'mp4', mp4)

      this.noSleepVideo.addEventListener('loadedmetadata', () => {
        if (this.noSleepVideo.duration <= 1) { // webm source
          this.noSleepVideo.setAttribute('loop', '')
        } else { // mp4 source
          this.noSleepVideo.addEventListener('timeupdate', () => {
            if (this.noSleepVideo.currentTime > 0.5) {
              this.noSleepVideo.currentTime = Math.random()
            }
          })
        }
      })
    }
  }

  _addSourceToVideo (element, type, dataURI) {
    var source = document.createElement('source')
    source.src = dataURI
    source.type = `video/${type}`
    element.appendChild(source)
  }

  enable () {
    if (oldIOS) {
      this.disable()
      console.warn(`
        NoSleep enabled for older iOS devices. This can interrupt
        active or long-running network requests from completing successfully.
        See https://github.com/richtr/NoSleep.js/issues/15 for more details.
      `)
      this.noSleepTimer = window.setInterval(() => {
        if (!document.hidden) {
          window.location.href = window.location.href.split('#')[0]
          window.setTimeout(window.stop, 0)
        }
      }, 15000)
    } else {
      this.noSleepVideo.play()
    }
  }

  disable () {
    if (oldIOS) {
      if (this.noSleepTimer) {
        console.warn(`
          NoSleep now disabled for older iOS devices.
        `)
        window.clearInterval(this.noSleepTimer)
        this.noSleepTimer = null
      }
    } else {
      this.noSleepVideo.pause()
    }
  }
};

module.exports = NoSleep

},{"./media.js":"../node_modules/nosleep.js/src/media.js"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/material-components-web/dist/material-components-web.min.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/material-components-web/dist/material-components-web.min.js":[function(require,module,exports) {
var define;
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.mdc=e():t.mdc=e()}(this,function(){return i={},r.m=n=[function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(Object.defineProperty(r,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),r.prototype.init=function(){},r.prototype.destroy=function(){},r);function r(t){void 0===t&&(t={}),this.adapter_=t}e.MDCFoundation=i,e.default=i},function(t,e,n){"use strict";var i=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,r,o=n.call(t),s=[];try{for(;(void 0===e||0<e--)&&!(i=o.next()).done;)s.push(i.value)}catch(t){r={error:t}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return s},r=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(i(arguments[e]));return t};Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),s=(a.attachTo=function(t){return new a(t,new o.MDCFoundation({}))},a.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},a.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},a.prototype.initialSyncWithDOM=function(){},a.prototype.destroy=function(){this.foundation_.destroy()},a.prototype.listen=function(t,e,n){this.root_.addEventListener(t,e,n)},a.prototype.unlisten=function(t,e,n){this.root_.removeEventListener(t,e,n)},a.prototype.emit=function(t,e,n){var i;void 0===n&&(n=!1),"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:n,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root_.dispatchEvent(i)},a);function a(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];this.root_=t,this.initialize.apply(this,r(n)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}e.MDCComponent=s,e.default=s},function(t,e,n){"use strict";function i(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}Object.defineProperty(e,"__esModule",{value:!0}),e.closest=function(t,e){if(t.closest)return t.closest(e);for(var n=t;n;){if(i(n,e))return n;n=n.parentElement}return null},e.matches=i},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(1),c=n(5),u=n(2),l=n(4),d=o(n(16)),p=(s=a.MDCComponent,r(_,s),_.attachTo=function(t,e){void 0===e&&(e={isUnbounded:void 0});var n=new _(t);return void 0!==e.isUnbounded&&(n.unbounded=e.isUnbounded),n},_.createAdapter=function(n){return{addClass:function(t){return n.root_.classList.add(t)},browserSupportsCssVars:function(){return d.supportsCssVariables(window)},computeBoundingRect:function(){return n.root_.getBoundingClientRect()},containsEventTarget:function(t){return n.root_.contains(t)},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,c.applyPassive())},deregisterInteractionHandler:function(t,e){return n.root_.removeEventListener(t,e,c.applyPassive())},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return u.matches(n.root_,":active")},isSurfaceDisabled:function(){return Boolean(n.disabled)},isUnbounded:function(){return Boolean(n.unbounded)},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,c.applyPassive())},registerInteractionHandler:function(t,e){return n.root_.addEventListener(t,e,c.applyPassive())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},removeClass:function(t){return n.root_.classList.remove(t)},updateCssVariable:function(t,e){return n.root_.style.setProperty(t,e)}}},Object.defineProperty(_.prototype,"unbounded",{get:function(){return Boolean(this.unbounded_)},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()},enumerable:!0,configurable:!0}),_.prototype.activate=function(){this.foundation_.activate()},_.prototype.deactivate=function(){this.foundation_.deactivate()},_.prototype.layout=function(){this.foundation_.layout()},_.prototype.getDefaultFoundation=function(){return new l.MDCRippleFoundation(_.createAdapter(this))},_.prototype.initialSyncWithDOM=function(){var t=this.root_;this.unbounded="mdcRippleIsUnbounded"in t.dataset},_.prototype.setUnbounded_=function(){this.foundation_.setUnbounded(Boolean(this.unbounded_))},_);function _(){var t=null!==s&&s.apply(this,arguments)||this;return t.disabled=!1,t}e.MDCRipple=p},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),c=n(37),u=n(16),l=["touchstart","pointerdown","mousedown","keydown"],d=["touchend","pointerup","mouseup","contextmenu"],p=[],_=(s=a.MDCFoundation,r(f,s),Object.defineProperty(f,"cssClasses",{get:function(){return c.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(f,"strings",{get:function(){return c.strings},enumerable:!0,configurable:!0}),Object.defineProperty(f,"numbers",{get:function(){return c.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(f,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),f.prototype.init=function(){var t=this,e=this.supportsPressRipple_();if(this.registerRootHandlers_(e),e){var n=f.cssClasses,i=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.addClass(i),t.adapter_.isUnbounded()&&(t.adapter_.addClass(r),t.layoutInternal_())})}},f.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(f.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(f.cssClasses.FG_DEACTIVATION));var e=f.cssClasses,n=e.ROOT,i=e.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.removeClass(n),t.adapter_.removeClass(i),t.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},f.prototype.activate=function(t){this.activate_(t)},f.prototype.deactivate=function(){this.deactivate_()},f.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})},f.prototype.setUnbounded=function(t){var e=f.cssClasses.UNBOUNDED;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)},f.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter_.addClass(f.cssClasses.BG_FOCUSED)})},f.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter_.removeClass(f.cssClasses.BG_FOCUSED)})},f.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},f.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},f.prototype.registerRootHandlers_=function(t){var e=this;t&&(l.forEach(function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},f.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):d.forEach(function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)})},f.prototype.deregisterRootHandlers_=function(){var e=this;l.forEach(function(t){e.adapter_.deregisterInteractionHandler(t,e.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},f.prototype.deregisterDeactivationHandlers_=function(){var e=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),d.forEach(function(t){e.adapter_.deregisterDocumentInteractionHandler(t,e.deactivateHandler_)})},f.prototype.removeCssVars_=function(){var e=this,n=f.strings;Object.keys(n).forEach(function(t){0===t.indexOf("VAR_")&&e.adapter_.updateCssVariable(n[t],null)})},f.prototype.activate_=function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var i=this.previousActivationEvent_;i&&void 0!==t&&i.type!==t.type||(n.isActivated=!0,n.isProgrammatic=void 0===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type),void 0!==t&&0<p.length&&p.some(function(t){return e.adapter_.containsEventTarget(t)})?this.resetActivationState_():(void 0!==t&&(p.push(t.target),this.registerDeactivationHandlers_(t)),n.wasElementMadeActive=this.checkElementMadeActive_(t),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){p=[],n.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(n.wasElementMadeActive=e.checkElementMadeActive_(t),n.wasElementMadeActive&&e.animateActivation_()),n.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())})))}}},f.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()},f.prototype.animateActivation_=function(){var t=this,e=f.strings,n=e.VAR_FG_TRANSLATE_START,i=e.VAR_FG_TRANSLATE_END,r=f.cssClasses,o=r.FG_DEACTIVATION,s=r.FG_ACTIVATION,a=f.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var c="",u="";if(!this.adapter_.isUnbounded()){var l=this.getFgTranslationCoordinates_(),d=l.startPoint,p=l.endPoint;c=d.x+"px, "+d.y+"px",u=p.x+"px, "+p.y+"px"}this.adapter_.updateCssVariable(n,c),this.adapter_.updateCssVariable(i,u),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(o),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout(function(){return t.activationTimerCallback_()},a)},f.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,n=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?u.getNormalizedEventCoords(n,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},f.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,e=f.cssClasses.FG_DEACTIVATION,n=this.activationState_,i=n.hasDeactivationUXRun,r=n.isActivated;!i&&r||!this.activationAnimationHasEnded_||(this.rmBoundedActivationClasses_(),this.adapter_.addClass(e),this.fgDeactivationRemovalTimer_=setTimeout(function(){t.adapter_.removeClass(e)},c.numbers.FG_DEACTIVATION_MS))},f.prototype.rmBoundedActivationClasses_=function(){var t=f.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},f.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return t.previousActivationEvent_=void 0},f.numbers.TAP_DELAY_MS)},f.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var n=o({},e);e.isProgrammatic?(requestAnimationFrame(function(){return t.animateDeactivation_(n)}),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(n),t.resetActivationState_()}))}},f.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,n=t.wasElementMadeActive;(e||n)&&this.runDeactivationUXLogicIfReady_()},f.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var e=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?e:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+f.numbers.PADDING;var n=Math.floor(e*f.numbers.INITIAL_ORIGIN_SCALE);this.adapter_.isUnbounded()&&n%2!=0?this.initialSize_=n-1:this.initialSize_=n,this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},f.prototype.updateLayoutCssVars_=function(){var t=f.strings,e=t.VAR_FG_SIZE,n=t.VAR_LEFT,i=t.VAR_TOP,r=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(e,this.initialSize_+"px"),this.adapter_.updateCssVariable(r,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(n,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(i,this.unboundedCoords_.top+"px"))},f);function f(t){var e=s.call(this,o({},f.defaultAdapter,t))||this;return e.activationAnimationHasEnded_=!1,e.activationTimer_=0,e.fgDeactivationRemovalTimer_=0,e.fgScale_="0",e.frame_={width:0,height:0},e.initialSize_=0,e.layoutFrame_=0,e.maxRadius_=0,e.unboundedCoords_={left:0,top:0},e.activationState_=e.defaultActivationState_(),e.activationTimerCallback_=function(){e.activationAnimationHasEnded_=!0,e.runDeactivationUXLogicIfReady_()},e.activateHandler_=function(t){return e.activate_(t)},e.deactivateHandler_=function(){return e.deactivate_()},e.focusHandler_=function(){return e.handleFocus()},e.blurHandler_=function(){return e.handleBlur()},e.resizeHandler_=function(){return e.layout()},e}e.MDCRippleFoundation=_,e.default=_},function(t,e,n){"use strict";var i;Object.defineProperty(e,"__esModule",{value:!0}),e.applyPassive=function(t,e){if(void 0===t&&(t=window),void 0===e&&(e=!1),void 0===i||e){var n=!1;try{t.document.addEventListener("test",function(){},{get passive(){return n=!0}})}catch(t){}i=n}return!!i&&{passive:!0}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cssClasses={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"};var i={CLOSED_EVENT:"MDCMenuSurface:closed",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")};e.strings=i;var r,o,s,a;e.numbers={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67},(o=r=r||{})[o.BOTTOM=1]="BOTTOM",o[o.CENTER=2]="CENTER",o[o.RIGHT=4]="RIGHT",o[o.FLIP_RTL=8]="FLIP_RTL",e.CornerBit=r,(a=s=s||{})[a.TOP_LEFT=0]="TOP_LEFT",a[a.TOP_RIGHT=4]="TOP_RIGHT",a[a.BOTTOM_LEFT=1]="BOTTOM_LEFT",a[a.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",a[a.TOP_START=8]="TOP_START",a[a.TOP_END=12]="TOP_END",a[a.BOTTOM_START=9]="BOTTOM_START",a[a.BOTTOM_END=13]="BOTTOM_END",e.Corner=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cssClasses={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"};e.numbers={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128};e.strings={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"}},function(t,e,n){"use strict";var i,r;Object.defineProperty(e,"__esModule",{value:!0}),(i=e.Direction||(e.Direction={}))[i.RIGHT=0]="RIGHT",i[i.LEFT=1]="LEFT",(r=e.EventSource||(e.EventSource={}))[r.PRIMARY=0]="PRIMARY",r[r.TRAILING=1]="TRAILING",r[r.NONE=2]="NONE",e.strings={ARIA_CHECKED:"aria-checked",ARROW_DOWN_KEY:"ArrowDown",ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",ARROW_UP_KEY:"ArrowUp",BACKSPACE_KEY:"Backspace",CHECKMARK_SELECTOR:".mdc-chip__checkmark",DELETE_KEY:"Delete",END_KEY:"End",ENTER_KEY:"Enter",ENTRY_ANIMATION_NAME:"mdc-chip-entry",HOME_KEY:"Home",INTERACTION_EVENT:"MDCChip:interaction",LEADING_ICON_SELECTOR:".mdc-chip__icon--leading",NAVIGATION_EVENT:"MDCChip:navigation",PRIMARY_ACTION_SELECTOR:".mdc-chip__primary-action",REMOVAL_EVENT:"MDCChip:removal",SELECTION_EVENT:"MDCChip:selection",SPACEBAR_KEY:" ",TAB_INDEX:"tabindex",TRAILING_ACTION_SELECTOR:".mdc-chip__trailing-action",TRAILING_ICON_INTERACTION_EVENT:"MDCChip:trailingIconInteraction",TRAILING_ICON_SELECTOR:".mdc-chip__icon--trailing"},e.cssClasses={CHECKMARK:"mdc-chip__checkmark",CHIP_EXIT:"mdc-chip--exit",DELETABLE:"mdc-chip--deletable",HIDDEN_LEADING_ICON:"mdc-chip__icon--leading-hidden",LEADING_ICON:"mdc-chip__icon--leading",PRIMARY_ACTION:"mdc-chip__primary-action",SELECTED:"mdc-chip--selected",TEXT:"mdc-chip__text",TRAILING_ACTION:"mdc-chip__trailing-action",TRAILING_ICON:"mdc-chip__icon--trailing"},e.navigationKeys=new Set,e.navigationKeys.add(e.strings.ARROW_LEFT_KEY),e.navigationKeys.add(e.strings.ARROW_RIGHT_KEY),e.navigationKeys.add(e.strings.ARROW_DOWN_KEY),e.navigationKeys.add(e.strings.ARROW_UP_KEY),e.navigationKeys.add(e.strings.END_KEY),e.navigationKeys.add(e.strings.HOME_KEY),e.jumpChipKeys=new Set,e.jumpChipKeys.add(e.strings.ARROW_UP_KEY),e.jumpChipKeys.add(e.strings.ARROW_DOWN_KEY),e.jumpChipKeys.add(e.strings.HOME_KEY),e.jumpChipKeys.add(e.strings.END_KEY)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",ROOT:"mdc-list"},r={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+(e.cssClasses=i).LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+i.LIST_ITEM_CLASS+" a\n  ",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+i.LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+i.LIST_ITEM_CLASS+" a,\n    ."+i.LIST_ITEM_CLASS+' input[type="radio"]:not(:disabled),\n    .'+i.LIST_ITEM_CLASS+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]'};e.strings=r;e.numbers={UNSET_INDEX:-1}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s=n(0),a=n(9),c=["input","button","textarea","select"];var u,l=(u=s.MDCFoundation,r(d,u),Object.defineProperty(d,"strings",{get:function(){return a.strings},enumerable:!0,configurable:!0}),Object.defineProperty(d,"cssClasses",{get:function(){return a.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(d,"numbers",{get:function(){return a.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(d,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){}}},enumerable:!0,configurable:!0}),d.prototype.layout=function(){0!==this.adapter_.getListItemCount()&&(this.adapter_.hasCheckboxAtIndex(0)?this.isCheckboxList_=!0:this.adapter_.hasRadioAtIndex(0)&&(this.isRadioList_=!0))},d.prototype.setWrapFocus=function(t){this.wrapFocus_=t},d.prototype.setVerticalOrientation=function(t){this.isVertical_=t},d.prototype.setSingleSelection=function(t){this.isSingleSelectionList_=t},d.prototype.setUseActivatedClass=function(t){this.useActivatedClass_=t},d.prototype.getSelectedIndex=function(){return this.selectedIndex_},d.prototype.setSelectedIndex=function(t){this.isIndexValid_(t)&&(this.isCheckboxList_?this.setCheckboxAtIndex_(t):this.isRadioList_?this.setRadioAtIndex_(t):this.setSingleSelectionAtIndex_(t))},d.prototype.handleFocusIn=function(t,e){0<=e&&this.adapter_.setTabIndexForListItemChildren(e,"0")},d.prototype.handleFocusOut=function(t,e){var n=this;0<=e&&this.adapter_.setTabIndexForListItemChildren(e,"-1"),setTimeout(function(){n.adapter_.isFocusInsideList()||n.setTabindexToFirstSelectedItem_()},0)},d.prototype.handleKeydown=function(t,e,n){var i="ArrowLeft"===t.key||37===t.keyCode,r="ArrowUp"===t.key||38===t.keyCode,o="ArrowRight"===t.key||39===t.keyCode,s="ArrowDown"===t.key||40===t.keyCode,a="Home"===t.key||36===t.keyCode,c="End"===t.key||35===t.keyCode,u="Enter"===t.key||13===t.keyCode,l="Space"===t.key||32===t.keyCode;if(this.adapter_.isRootFocused())r||c?(t.preventDefault(),this.focusLastElement()):(s||a)&&(t.preventDefault(),this.focusFirstElement());else{var d=this.adapter_.getFocusedElementIndex();if(!(-1===d&&(d=n)<0)){var p;if(this.isVertical_&&s||!this.isVertical_&&o)this.preventDefaultEvent_(t),p=this.focusNextElement(d);else if(this.isVertical_&&r||!this.isVertical_&&i)this.preventDefaultEvent_(t),p=this.focusPrevElement(d);else if(a)this.preventDefaultEvent_(t),p=this.focusFirstElement();else if(c)this.preventDefaultEvent_(t),p=this.focusLastElement();else if((u||l)&&e){var _=t.target;if(_&&"A"===_.tagName&&u)return;this.preventDefaultEvent_(t),this.isSelectableList_()&&this.setSelectedIndexOnAction_(d),this.adapter_.notifyAction(d)}this.focusedItemIndex_=d,void 0!==p&&(this.setTabindexAtIndex_(p),this.focusedItemIndex_=p)}}},d.prototype.handleClick=function(t,e){t!==a.numbers.UNSET_INDEX&&(this.isSelectableList_()&&this.setSelectedIndexOnAction_(t,e),this.adapter_.notifyAction(t),this.setTabindexAtIndex_(t),this.focusedItemIndex_=t)},d.prototype.focusNextElement=function(t){var e=t+1;if(this.adapter_.getListItemCount()<=e){if(!this.wrapFocus_)return t;e=0}return this.adapter_.focusItemAtIndex(e),e},d.prototype.focusPrevElement=function(t){var e=t-1;if(e<0){if(!this.wrapFocus_)return t;e=this.adapter_.getListItemCount()-1}return this.adapter_.focusItemAtIndex(e),e},d.prototype.focusFirstElement=function(){return this.adapter_.focusItemAtIndex(0),0},d.prototype.focusLastElement=function(){var t=this.adapter_.getListItemCount()-1;return this.adapter_.focusItemAtIndex(t),t},d.prototype.setEnabled=function(t,e){this.isIndexValid_(t)&&(e?(this.adapter_.removeClassForElementIndex(t,a.cssClasses.LIST_ITEM_DISABLED_CLASS),this.adapter_.setAttributeForElementIndex(t,a.strings.ARIA_DISABLED,"false")):(this.adapter_.addClassForElementIndex(t,a.cssClasses.LIST_ITEM_DISABLED_CLASS),this.adapter_.setAttributeForElementIndex(t,a.strings.ARIA_DISABLED,"true")))},d.prototype.preventDefaultEvent_=function(t){var e=(""+t.target.tagName).toLowerCase();-1===c.indexOf(e)&&t.preventDefault()},d.prototype.setSingleSelectionAtIndex_=function(t){if(this.selectedIndex_!==t){var e=a.cssClasses.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass_&&(e=a.cssClasses.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex_!==a.numbers.UNSET_INDEX&&this.adapter_.removeClassForElementIndex(this.selectedIndex_,e),this.adapter_.addClassForElementIndex(t,e),this.setAriaForSingleSelectionAtIndex_(t),this.selectedIndex_=t}},d.prototype.setAriaForSingleSelectionAtIndex_=function(t){this.selectedIndex_===a.numbers.UNSET_INDEX&&(this.ariaCurrentAttrValue_=this.adapter_.getAttributeForElementIndex(t,a.strings.ARIA_CURRENT));var e=null!==this.ariaCurrentAttrValue_,n=e?a.strings.ARIA_CURRENT:a.strings.ARIA_SELECTED;this.selectedIndex_!==a.numbers.UNSET_INDEX&&this.adapter_.setAttributeForElementIndex(this.selectedIndex_,n,"false");var i=e?this.ariaCurrentAttrValue_:"true";this.adapter_.setAttributeForElementIndex(t,n,i)},d.prototype.setRadioAtIndex_=function(t){this.adapter_.setCheckedCheckboxOrRadioAtIndex(t,!0),this.selectedIndex_!==a.numbers.UNSET_INDEX&&this.adapter_.setAttributeForElementIndex(this.selectedIndex_,a.strings.ARIA_CHECKED,"false"),this.adapter_.setAttributeForElementIndex(t,a.strings.ARIA_CHECKED,"true"),this.selectedIndex_=t},d.prototype.setCheckboxAtIndex_=function(t){for(var e=0;e<this.adapter_.getListItemCount();e++){var n=!1;0<=t.indexOf(e)&&(n=!0),this.adapter_.setCheckedCheckboxOrRadioAtIndex(e,n),this.adapter_.setAttributeForElementIndex(e,a.strings.ARIA_CHECKED,n?"true":"false")}this.selectedIndex_=t},d.prototype.setTabindexAtIndex_=function(t){this.focusedItemIndex_===a.numbers.UNSET_INDEX&&0!==t?this.adapter_.setAttributeForElementIndex(0,"tabindex","-1"):0<=this.focusedItemIndex_&&this.focusedItemIndex_!==t&&this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_,"tabindex","-1"),this.adapter_.setAttributeForElementIndex(t,"tabindex","0")},d.prototype.isSelectableList_=function(){return this.isSingleSelectionList_||this.isCheckboxList_||this.isRadioList_},d.prototype.setTabindexToFirstSelectedItem_=function(){var t=0;this.isSelectableList_()&&("number"==typeof this.selectedIndex_&&this.selectedIndex_!==a.numbers.UNSET_INDEX?t=this.selectedIndex_:function(t){return t instanceof Array}(this.selectedIndex_)&&0<this.selectedIndex_.length&&(t=this.selectedIndex_.reduce(function(t,e){return Math.min(t,e)}))),this.setTabindexAtIndex_(t)},d.prototype.isIndexValid_=function(t){var e=this;if(t instanceof Array){if(!this.isCheckboxList_)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return 0===t.length||t.some(function(t){return e.isIndexInRange_(t)})}if("number"!=typeof t)return!1;if(this.isCheckboxList_)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return this.isIndexInRange_(t)},d.prototype.isIndexInRange_=function(t){var e=this.adapter_.getListItemCount();return 0<=t&&t<e},d.prototype.setSelectedIndexOnAction_=function(t,e){void 0===e&&(e=!0),this.adapter_.listItemAtIndexHasClass(t,a.cssClasses.LIST_ITEM_DISABLED_CLASS)||(this.isCheckboxList_?this.toggleCheckboxAtIndex_(t,e):this.setSelectedIndex(t))},d.prototype.toggleCheckboxAtIndex_=function(e,t){var n=this.adapter_.isCheckboxCheckedAtIndex(e);t&&(n=!n,this.adapter_.setCheckedCheckboxOrRadioAtIndex(e,n)),this.adapter_.setAttributeForElementIndex(e,a.strings.ARIA_CHECKED,n?"true":"false");var i=this.selectedIndex_===a.numbers.UNSET_INDEX?[]:this.selectedIndex_.slice();n?i.push(e):i=i.filter(function(t){return t!==e}),this.selectedIndex_=i},d);function d(t){var e=u.call(this,o({},d.defaultAdapter,t))||this;return e.wrapFocus_=!1,e.isVertical_=!0,e.isSingleSelectionList_=!1,e.selectedIndex_=a.numbers.UNSET_INDEX,e.focusedItemIndex_=a.numbers.UNSET_INDEX,e.useActivatedClass_=!1,e.ariaCurrentAttrValue_=null,e.isCheckboxList_=!1,e.isRadioList_=!1,e}e.MDCListFoundation=l,e.default=l},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},d=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),g=n(6),c=(s=a.MDCFoundation,r(u,s),Object.defineProperty(u,"cssClasses",{get:function(){return g.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(u,"strings",{get:function(){return g.strings},enumerable:!0,configurable:!0}),Object.defineProperty(u,"numbers",{get:function(){return g.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(u,"Corner",{get:function(){return g.Corner},enumerable:!0,configurable:!0}),Object.defineProperty(u,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){}}},enumerable:!0,configurable:!0}),u.prototype.init=function(){var t=u.cssClasses,e=t.ROOT,n=t.OPEN;if(!this.adapter_.hasClass(e))throw new Error(e+" class required in root element.");this.adapter_.hasClass(n)&&(this.isOpen_=!0)},u.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId_),clearTimeout(this.closeAnimationEndTimerId_),cancelAnimationFrame(this.animationRequestId_)},u.prototype.setAnchorCorner=function(t){this.anchorCorner_=t},u.prototype.setAnchorMargin=function(t){this.anchorMargin_.top=t.top||0,this.anchorMargin_.right=t.right||0,this.anchorMargin_.bottom=t.bottom||0,this.anchorMargin_.left=t.left||0},u.prototype.setIsHoisted=function(t){this.isHoistedElement_=t},u.prototype.setFixedPosition=function(t){this.isFixedPosition_=t},u.prototype.setAbsolutePosition=function(t,e){this.position_.x=this.isFinite_(t)?t:0,this.position_.y=this.isFinite_(e)?e:0},u.prototype.setQuickOpen=function(t){this.isQuickOpen_=t},u.prototype.isOpen=function(){return this.isOpen_},u.prototype.open=function(){var t=this;this.adapter_.saveFocus(),this.isQuickOpen_||this.adapter_.addClass(u.cssClasses.ANIMATING_OPEN),this.animationRequestId_=requestAnimationFrame(function(){t.adapter_.addClass(u.cssClasses.OPEN),t.dimensions_=t.adapter_.getInnerDimensions(),t.autoPosition_(),t.isQuickOpen_?t.adapter_.notifyOpen():t.openAnimationEndTimerId_=setTimeout(function(){t.openAnimationEndTimerId_=0,t.adapter_.removeClass(u.cssClasses.ANIMATING_OPEN),t.adapter_.notifyOpen()},g.numbers.TRANSITION_OPEN_DURATION)}),this.isOpen_=!0},u.prototype.close=function(t){var e=this;void 0===t&&(t=!1),this.isQuickOpen_||this.adapter_.addClass(u.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){e.adapter_.removeClass(u.cssClasses.OPEN),e.isQuickOpen_?e.adapter_.notifyClose():e.closeAnimationEndTimerId_=setTimeout(function(){e.closeAnimationEndTimerId_=0,e.adapter_.removeClass(u.cssClasses.ANIMATING_CLOSED),e.adapter_.notifyClose()},g.numbers.TRANSITION_CLOSE_DURATION)}),this.isOpen_=!1,t||this.maybeRestoreFocus_()},u.prototype.handleBodyClick=function(t){var e=t.target;this.adapter_.isElementInContainer(e)||this.close()},u.prototype.handleKeydown=function(t){var e=t.keyCode;"Escape"!==t.key&&27!==e||this.close()},u.prototype.autoPosition_=function(){var t;this.measurements_=this.getAutoLayoutMeasurements_();var e=this.getOriginCorner_(),n=this.getMenuSurfaceMaxHeight_(e),i=this.hasBit_(e,g.CornerBit.BOTTOM)?"bottom":"top",r=this.hasBit_(e,g.CornerBit.RIGHT)?"right":"left",o=this.getHorizontalOriginOffset_(e),s=this.getVerticalOriginOffset_(e),a=this.measurements_,c=a.anchorSize,u=a.surfaceSize,l=((t={})[r]=o,t[i]=s,t);c.width/u.width>g.numbers.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(r="center"),(this.isHoistedElement_||this.isFixedPosition_)&&this.adjustPositionForHoistedElement_(l),this.adapter_.setTransformOrigin(r+" "+i),this.adapter_.setPosition(l),this.adapter_.setMaxHeight(n?n+"px":"")},u.prototype.getAutoLayoutMeasurements_=function(){var t=this.adapter_.getAnchorDimensions(),e=this.adapter_.getBodyDimensions(),n=this.adapter_.getWindowDimensions(),i=this.adapter_.getWindowScroll();return{anchorSize:t=t||{top:this.position_.y,right:this.position_.x,bottom:this.position_.y,left:this.position_.x,width:0,height:0},bodySize:e,surfaceSize:this.dimensions_,viewportDistance:{top:t.top,right:n.width-t.right,bottom:n.height-t.bottom,left:t.left},viewportSize:n,windowScroll:i}},u.prototype.getOriginCorner_=function(){var t=g.Corner.TOP_LEFT,e=this.measurements_,n=e.viewportDistance,i=e.anchorSize,r=e.surfaceSize,o=this.hasBit_(this.anchorCorner_,g.CornerBit.BOTTOM),s=o?n.top+i.height+this.anchorMargin_.bottom:n.top+this.anchorMargin_.top,a=o?n.bottom-this.anchorMargin_.bottom:n.bottom+i.height-this.anchorMargin_.top,c=r.height-s,u=r.height-a;0<u&&c<u&&(t=this.setBit_(t,g.CornerBit.BOTTOM));var l=this.adapter_.isRtl(),d=this.hasBit_(this.anchorCorner_,g.CornerBit.FLIP_RTL),p=this.hasBit_(this.anchorCorner_,g.CornerBit.RIGHT),_=p&&!l||!p&&d&&l,f=_?n.left+i.width+this.anchorMargin_.right:n.left+this.anchorMargin_.left,h=_?n.right-this.anchorMargin_.right:n.right+i.width-this.anchorMargin_.left,y=r.width-f,C=r.width-h;return(y<0&&_&&l||p&&!_&&y<0||0<C&&y<C)&&(t=this.setBit_(t,g.CornerBit.RIGHT)),t},u.prototype.getMenuSurfaceMaxHeight_=function(t){var e=this.measurements_.viewportDistance,n=0,i=this.hasBit_(t,g.CornerBit.BOTTOM),r=this.hasBit_(this.anchorCorner_,g.CornerBit.BOTTOM),o=u.numbers.MARGIN_TO_EDGE;return i?(n=e.top+this.anchorMargin_.top-o,r||(n+=this.measurements_.anchorSize.height)):(n=e.bottom-this.anchorMargin_.bottom+this.measurements_.anchorSize.height-o,r&&(n-=this.measurements_.anchorSize.height)),n},u.prototype.getHorizontalOriginOffset_=function(t){var e=this.measurements_.anchorSize,n=this.hasBit_(t,g.CornerBit.RIGHT),i=this.hasBit_(this.anchorCorner_,g.CornerBit.RIGHT);if(n){var r=i?e.width-this.anchorMargin_.left:this.anchorMargin_.right;return this.isHoistedElement_||this.isFixedPosition_?r-(this.measurements_.viewportSize.width-this.measurements_.bodySize.width):r}return i?e.width-this.anchorMargin_.right:this.anchorMargin_.left},u.prototype.getVerticalOriginOffset_=function(t){var e=this.measurements_.anchorSize,n=this.hasBit_(t,g.CornerBit.BOTTOM),i=this.hasBit_(this.anchorCorner_,g.CornerBit.BOTTOM);return n?i?e.height-this.anchorMargin_.top:-this.anchorMargin_.bottom:i?e.height+this.anchorMargin_.bottom:this.anchorMargin_.top},u.prototype.adjustPositionForHoistedElement_=function(t){var e,n,i=this.measurements_,r=i.windowScroll,o=i.viewportDistance,s=Object.keys(t);try{for(var a=d(s),c=a.next();!c.done;c=a.next()){var u=c.value,l=t[u]||0;l+=o[u],this.isFixedPosition_||("top"===u?l+=r.y:"bottom"===u?l-=r.y:"left"===u?l+=r.x:l-=r.x),t[u]=l}}catch(t){e={error:t}}finally{try{c&&!c.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}},u.prototype.maybeRestoreFocus_=function(){var t=this.adapter_.isFocused(),e=document.activeElement&&this.adapter_.isElementInContainer(document.activeElement);(t||e)&&this.adapter_.restoreFocus()},u.prototype.hasBit_=function(t,e){return Boolean(t&e)},u.prototype.setBit_=function(t,e){return t|e},u.prototype.isFinite_=function(t){return"number"==typeof t&&isFinite(t)},u);function u(t){var e=s.call(this,o({},u.defaultAdapter,t))||this;return e.isOpen_=!1,e.isQuickOpen_=!1,e.isHoistedElement_=!1,e.isFixedPosition_=!1,e.openAnimationEndTimerId_=0,e.closeAnimationEndTimerId_=0,e.animationRequestId_=0,e.anchorCorner_=g.Corner.TOP_START,e.anchorMargin_={top:0,right:0,bottom:0,left:0},e.position_={x:0,y:0},e}e.MDCMenuSurfaceFoundation=c,e.default=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cssClasses={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"};e.strings={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list",SELECTED_EVENT:"MDCMenu:selected"};var i,r;e.numbers={FOCUS_ROOT_INDEX:-1},(r=i=i||{})[r.NONE=0]="NONE",r[r.LIST_ROOT=1]="LIST_ROOT",r[r.FIRST_ITEM=2]="FIRST_ITEM",r[r.LAST_ITEM=3]="LAST_ITEM",e.DefaultFocusState=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cssClasses={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"};e.strings={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"};e.numbers={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),c=n(87),u=(s=a.MDCFoundation,r(l,s),Object.defineProperty(l,"cssClasses",{get:function(){return c.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(l,"strings",{get:function(){return c.strings},enumerable:!0,configurable:!0}),Object.defineProperty(l,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!0,configurable:!0}),l.prototype.computeContentClientRect=function(){return this.adapter_.computeContentClientRect()},l);function l(t){return s.call(this,o({},l.defaultAdapter,t))||this}e.MDCTabIndicatorFoundation=u,e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},a={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function c(t){return Boolean(t.document)&&"function"==typeof t.document.createElement}e.getCorrectPropertyName=function(t,e){if(c(t)&&e in s){var n=t.document.createElement("div"),i=s[e],r=i.standard,o=i.prefixed;return r in n.style?r:o}return e},e.getCorrectEventName=function(t,e){if(c(t)&&e in a){var n=t.document.createElement("div"),i=a[e],r=i.standard,o=i.prefixed;return i.cssProperty in n.style?r:o}return e}},function(t,e,n){"use strict";var s;Object.defineProperty(e,"__esModule",{value:!0}),e.supportsCssVariables=function(t,e){void 0===e&&(e=!1);var n=t.CSS,i=s;if("boolean"==typeof s&&!e)return s;if(!(n&&"function"==typeof n.supports))return!1;var r=n.supports("--css-vars","yes"),o=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return i=!(!r&&!o)&&!function(t){var e=t.document,n=e.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",e.head.appendChild(n);var i=t.getComputedStyle(n),r=null!==i&&"solid"===i.borderTopStyle;return n.parentNode&&n.parentNode.removeChild(n),r}(t),e||(s=i),i},e.getNormalizedEventCoords=function(t,e,n){if(!t)return{x:0,y:0};var i,r,o=e.x,s=e.y,a=o+n.left,c=s+n.top;if("touchstart"===t.type){var u=t;i=u.changedTouches[0].pageX-a,r=u.changedTouches[0].pageY-c}else{var l=t;i=l.pageX-a,r=l.pageY-c}return{x:i,y:r}}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),c=n(8),u={bottom:0,height:0,left:0,right:0,top:0,width:0},l=(s=a.MDCFoundation,r(d,s),Object.defineProperty(d,"strings",{get:function(){return c.strings},enumerable:!0,configurable:!0}),Object.defineProperty(d,"cssClasses",{get:function(){return c.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(d,"defaultAdapter",{get:function(){return{addClass:function(){},addClassToLeadingIcon:function(){},eventTargetHasClass:function(){return!1},focusPrimaryAction:function(){},focusTrailingAction:function(){},getCheckmarkBoundingClientRect:function(){return u},getComputedStyleValue:function(){return""},getRootBoundingClientRect:function(){return u},hasClass:function(){return!1},hasLeadingIcon:function(){return!1},hasTrailingAction:function(){return!1},isRTL:function(){return!1},notifyInteraction:function(){},notifyNavigation:function(){},notifyRemoval:function(){},notifySelection:function(){},notifyTrailingIconInteraction:function(){},removeClass:function(){},removeClassFromLeadingIcon:function(){},setPrimaryActionAttr:function(){},setStyleProperty:function(){},setTrailingActionAttr:function(){}}},enumerable:!0,configurable:!0}),d.prototype.isSelected=function(){return this.adapter_.hasClass(c.cssClasses.SELECTED)},d.prototype.setSelected=function(t){this.setSelected_(t),this.notifySelection_(t)},d.prototype.setSelectedFromChipSet=function(t,e){this.setSelected_(t),e&&this.notifyIgnoredSelection_(t)},d.prototype.getShouldRemoveOnTrailingIconClick=function(){return this.shouldRemoveOnTrailingIconClick_},d.prototype.setShouldRemoveOnTrailingIconClick=function(t){this.shouldRemoveOnTrailingIconClick_=t},d.prototype.getDimensions=function(){function t(){return e.adapter_.getRootBoundingClientRect()}var e=this;if(!this.adapter_.hasLeadingIcon()){var n=e.adapter_.getCheckmarkBoundingClientRect();if(n){var i=t();return{bottom:i.bottom,height:i.height,left:i.left,right:i.right,top:i.top,width:i.width+n.height}}}return t()},d.prototype.beginExit=function(){this.adapter_.addClass(c.cssClasses.CHIP_EXIT)},d.prototype.handleInteraction=function(t){this.shouldHandleInteraction_(t)&&(this.adapter_.notifyInteraction(),this.focusPrimaryAction_())},d.prototype.handleTransitionEnd=function(t){var e=this,n=this.adapter_.eventTargetHasClass(t.target,c.cssClasses.CHIP_EXIT),i="width"===t.propertyName,r="opacity"===t.propertyName;if(n&&r){var o=this.adapter_.getComputedStyleValue("width");requestAnimationFrame(function(){e.adapter_.setStyleProperty("width",o),e.adapter_.setStyleProperty("padding","0"),e.adapter_.setStyleProperty("margin","0"),requestAnimationFrame(function(){e.adapter_.setStyleProperty("width","0")})})}else if(n&&i&&(this.removeFocus_(),this.adapter_.notifyRemoval()),r){var s=this.adapter_.eventTargetHasClass(t.target,c.cssClasses.LEADING_ICON)&&this.adapter_.hasClass(c.cssClasses.SELECTED),a=this.adapter_.eventTargetHasClass(t.target,c.cssClasses.CHECKMARK)&&!this.adapter_.hasClass(c.cssClasses.SELECTED);return s?this.adapter_.addClassToLeadingIcon(c.cssClasses.HIDDEN_LEADING_ICON):a?this.adapter_.removeClassFromLeadingIcon(c.cssClasses.HIDDEN_LEADING_ICON):void 0}},d.prototype.handleTrailingIconInteraction=function(t){this.shouldHandleInteraction_(t)&&(this.adapter_.notifyTrailingIconInteraction(),this.removeChip_(t))},d.prototype.handleKeydown=function(t){if(this.shouldRemoveChip_(t))return this.removeChip_(t);var e=t.key;c.navigationKeys.has(e)&&(t.preventDefault(),this.focusNextAction_(t))},d.prototype.removeFocus=function(){this.adapter_.setPrimaryActionAttr(c.strings.TAB_INDEX,"-1"),this.adapter_.setTrailingActionAttr(c.strings.TAB_INDEX,"-1")},d.prototype.focusPrimaryAction=function(){this.focusPrimaryAction_()},d.prototype.focusTrailingAction=function(){if(!this.adapter_.hasTrailingAction())return this.focusPrimaryAction_();this.focusTrailingAction_()},d.prototype.focusNextAction_=function(t){var e=t.key,n=this.adapter_.hasTrailingAction(),i=this.getDirection_(e),r=this.getEvtSource_(t);if(!c.jumpChipKeys.has(e)&&n)return r===c.EventSource.PRIMARY&&i===c.Direction.RIGHT?this.focusTrailingAction_():r===c.EventSource.TRAILING&&i===c.Direction.LEFT?this.focusPrimaryAction_():void this.adapter_.notifyNavigation(e,c.EventSource.NONE);this.adapter_.notifyNavigation(e,r)},d.prototype.getEvtSource_=function(t){return this.adapter_.eventTargetHasClass(t.target,c.cssClasses.PRIMARY_ACTION)?c.EventSource.PRIMARY:this.adapter_.eventTargetHasClass(t.target,c.cssClasses.TRAILING_ACTION)?c.EventSource.TRAILING:c.EventSource.NONE},d.prototype.getDirection_=function(t){var e=this.adapter_.isRTL();return t===c.strings.ARROW_LEFT_KEY&&!e||t===c.strings.ARROW_RIGHT_KEY&&e?c.Direction.LEFT:c.Direction.RIGHT},d.prototype.focusPrimaryAction_=function(){this.adapter_.setPrimaryActionAttr(c.strings.TAB_INDEX,"0"),this.adapter_.focusPrimaryAction(),this.adapter_.setTrailingActionAttr(c.strings.TAB_INDEX,"-1")},d.prototype.focusTrailingAction_=function(){this.adapter_.setTrailingActionAttr(c.strings.TAB_INDEX,"0"),this.adapter_.focusTrailingAction(),this.adapter_.setPrimaryActionAttr(c.strings.TAB_INDEX,"-1")},d.prototype.removeFocus_=function(){this.adapter_.setTrailingActionAttr(c.strings.TAB_INDEX,"-1"),this.adapter_.setPrimaryActionAttr(c.strings.TAB_INDEX,"-1")},d.prototype.removeChip_=function(t){t.stopPropagation(),this.shouldRemoveOnTrailingIconClick_&&this.beginExit()},d.prototype.shouldHandleInteraction_=function(t){if("click"===t.type)return!0;var e=t;return e.key===c.strings.ENTER_KEY||e.key===c.strings.SPACEBAR_KEY},d.prototype.shouldRemoveChip_=function(t){return this.adapter_.hasClass(c.cssClasses.DELETABLE)&&(t.key===c.strings.BACKSPACE_KEY||t.key===c.strings.DELETE_KEY)},d.prototype.setSelected_=function(t){t?(this.adapter_.addClass(c.cssClasses.SELECTED),this.adapter_.setPrimaryActionAttr(c.strings.ARIA_CHECKED,"true")):(this.adapter_.removeClass(c.cssClasses.SELECTED),this.adapter_.setPrimaryActionAttr(c.strings.ARIA_CHECKED,"false"))},d.prototype.notifySelection_=function(t){this.adapter_.notifySelection(t,!1)},d.prototype.notifyIgnoredSelection_=function(t){this.adapter_.notifySelection(t,!0)},d);function d(t){var e=s.call(this,o({},d.defaultAdapter,t))||this;return e.shouldRemoveOnTrailingIconClick_=!0,e}e.MDCChipFoundation=l,e.default=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cssClasses={CELL:"mdc-data-table__cell",CELL_NUMERIC:"mdc-data-table__cell--numeric",CONTENT:"mdc-data-table__content",HEADER_ROW:"mdc-data-table__header-row",HEADER_ROW_CHECKBOX:"mdc-data-table__header-row-checkbox",ROOT:"mdc-data-table",ROW:"mdc-data-table__row",ROW_CHECKBOX:"mdc-data-table__row-checkbox",ROW_SELECTED:"mdc-data-table__row--selected"},e.strings={ARIA_SELECTED:"aria-selected",DATA_ROW_ID_ATTR:"data-row-id",HEADER_ROW_CHECKBOX_SELECTOR:"."+e.cssClasses.HEADER_ROW_CHECKBOX,ROW_CHECKBOX_SELECTOR:"."+e.cssClasses.ROW_CHECKBOX,ROW_SELECTED_SELECTOR:"."+e.cssClasses.ROW_SELECTED,ROW_SELECTOR:"."+e.cssClasses.ROW},e.events={ROW_SELECTION_CHANGED:"MDCDataTable:rowSelectionChanged",SELECTED_ALL:"MDCDataTable:selectedAll",UNSELECTED_ALL:"MDCDataTable:unselectedAll"}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(1),a=n(2),c=n(9),u=n(10),l=(o=s.MDCComponent,r(d,o),Object.defineProperty(d.prototype,"vertical",{set:function(t){this.foundation_.setVerticalOrientation(t)},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"listElements",{get:function(){return[].slice.call(this.root_.querySelectorAll("."+c.cssClasses.LIST_ITEM_CLASS))},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"wrapFocus",{set:function(t){this.foundation_.setWrapFocus(t)},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"singleSelection",{set:function(t){this.foundation_.setSingleSelection(t)},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"selectedIndex",{get:function(){return this.foundation_.getSelectedIndex()},set:function(t){this.foundation_.setSelectedIndex(t)},enumerable:!0,configurable:!0}),d.attachTo=function(t){return new d(t)},d.prototype.initialSyncWithDOM=function(){this.handleClick_=this.handleClickEvent_.bind(this),this.handleKeydown_=this.handleKeydownEvent_.bind(this),this.focusInEventListener_=this.handleFocusInEvent_.bind(this),this.focusOutEventListener_=this.handleFocusOutEvent_.bind(this),this.listen("keydown",this.handleKeydown_),this.listen("click",this.handleClick_),this.listen("focusin",this.focusInEventListener_),this.listen("focusout",this.focusOutEventListener_),this.layout(),this.initializeListType()},d.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown_),this.unlisten("click",this.handleClick_),this.unlisten("focusin",this.focusInEventListener_),this.unlisten("focusout",this.focusOutEventListener_)},d.prototype.layout=function(){var t=this.root_.getAttribute(c.strings.ARIA_ORIENTATION);this.vertical=t!==c.strings.ARIA_ORIENTATION_HORIZONTAL,[].slice.call(this.root_.querySelectorAll(".mdc-list-item:not([tabindex])")).forEach(function(t){t.setAttribute("tabindex","-1")}),[].slice.call(this.root_.querySelectorAll(c.strings.FOCUSABLE_CHILD_ELEMENTS)).forEach(function(t){return t.setAttribute("tabindex","-1")}),this.foundation_.layout()},d.prototype.initializeListType=function(){var e=this,t=this.root_.querySelectorAll(c.strings.ARIA_ROLE_CHECKBOX_SELECTOR),n=this.root_.querySelector("\n      ."+c.cssClasses.LIST_ITEM_ACTIVATED_CLASS+",\n      ."+c.cssClasses.LIST_ITEM_SELECTED_CLASS+"\n    "),i=this.root_.querySelector(c.strings.ARIA_CHECKED_RADIO_SELECTOR);if(t.length){var r=this.root_.querySelectorAll(c.strings.ARIA_CHECKED_CHECKBOX_SELECTOR);this.selectedIndex=[].map.call(r,function(t){return e.listElements.indexOf(t)})}else n?(n.classList.contains(c.cssClasses.LIST_ITEM_ACTIVATED_CLASS)&&this.foundation_.setUseActivatedClass(!0),this.singleSelection=!0,this.selectedIndex=this.listElements.indexOf(n)):i&&(this.selectedIndex=this.listElements.indexOf(i))},d.prototype.setEnabled=function(t,e){this.foundation_.setEnabled(t,e)},d.prototype.getDefaultFoundation=function(){var r=this,t={addClassForElementIndex:function(t,e){var n=r.listElements[t];n&&n.classList.add(e)},focusItemAtIndex:function(t){var e=r.listElements[t];e&&e.focus()},getAttributeForElementIndex:function(t,e){return r.listElements[t].getAttribute(e)},getFocusedElementIndex:function(){return r.listElements.indexOf(document.activeElement)},getListItemCount:function(){return r.listElements.length},hasCheckboxAtIndex:function(t){return!!r.listElements[t].querySelector(c.strings.CHECKBOX_SELECTOR)},hasRadioAtIndex:function(t){return!!r.listElements[t].querySelector(c.strings.RADIO_SELECTOR)},isCheckboxCheckedAtIndex:function(t){return r.listElements[t].querySelector(c.strings.CHECKBOX_SELECTOR).checked},isFocusInsideList:function(){return r.root_.contains(document.activeElement)},isRootFocused:function(){return document.activeElement===r.root_},listItemAtIndexHasClass:function(t,e){return r.listElements[t].classList.contains(e)},notifyAction:function(t){r.emit(c.strings.ACTION_EVENT,{index:t},!0)},removeClassForElementIndex:function(t,e){var n=r.listElements[t];n&&n.classList.remove(e)},setAttributeForElementIndex:function(t,e,n){var i=r.listElements[t];i&&i.setAttribute(e,n)},setCheckedCheckboxOrRadioAtIndex:function(t,e){var n=r.listElements[t].querySelector(c.strings.CHECKBOX_RADIO_SELECTOR);n.checked=e;var i=document.createEvent("Event");i.initEvent("change",!0,!0),n.dispatchEvent(i)},setTabIndexForListItemChildren:function(t,e){var n=r.listElements[t];[].slice.call(n.querySelectorAll(c.strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX)).forEach(function(t){return t.setAttribute("tabindex",e)})}};return new u.MDCListFoundation(t)},d.prototype.getListItemIndex_=function(t){var e=t.target,n=a.closest(e,"."+c.cssClasses.LIST_ITEM_CLASS+", ."+c.cssClasses.ROOT);return n&&a.matches(n,"."+c.cssClasses.LIST_ITEM_CLASS)?this.listElements.indexOf(n):-1},d.prototype.handleFocusInEvent_=function(t){var e=this.getListItemIndex_(t);this.foundation_.handleFocusIn(t,e)},d.prototype.handleFocusOutEvent_=function(t){var e=this.getListItemIndex_(t);this.foundation_.handleFocusOut(t,e)},d.prototype.handleKeydownEvent_=function(t){var e=this.getListItemIndex_(t),n=t.target;this.foundation_.handleKeydown(t,n.classList.contains(c.cssClasses.LIST_ITEM_CLASS),e)},d.prototype.handleClickEvent_=function(t){var e=this.getListItemIndex_(t),n=t.target,i=!a.matches(n,c.strings.CHECKBOX_RADIO_SELECTOR);this.foundation_.handleClick(e,i)},d);function d(){return null!==o&&o.apply(this,arguments)||this}e.MDCList=l},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),c=n(49),u=(s=a.MDCFoundation,r(l,s),Object.defineProperty(l,"strings",{get:function(){return c.strings},enumerable:!0,configurable:!0}),Object.defineProperty(l,"cssClasses",{get:function(){return c.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(l,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!0,configurable:!0}),l.prototype.destroy=function(){this.animationFrame_&&cancelAnimationFrame(this.animationFrame_),this.animationTimer_&&clearTimeout(this.animationTimer_)},l.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter_.addClass(c.cssClasses.OPEN),this.adapter_.addClass(c.cssClasses.ANIMATE),this.runNextAnimationFrame_(function(){t.adapter_.addClass(c.cssClasses.OPENING)}),this.adapter_.saveFocus())},l.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter_.addClass(c.cssClasses.CLOSING)},l.prototype.isOpen=function(){return this.adapter_.hasClass(c.cssClasses.OPEN)},l.prototype.isOpening=function(){return this.adapter_.hasClass(c.cssClasses.OPENING)||this.adapter_.hasClass(c.cssClasses.ANIMATE)},l.prototype.isClosing=function(){return this.adapter_.hasClass(c.cssClasses.CLOSING)},l.prototype.handleKeydown=function(t){var e=t.keyCode;"Escape"!==t.key&&27!==e||this.close()},l.prototype.handleTransitionEnd=function(t){var e=c.cssClasses.OPENING,n=c.cssClasses.CLOSING,i=c.cssClasses.OPEN,r=c.cssClasses.ANIMATE,o=c.cssClasses.ROOT;this.isElement_(t.target)&&this.adapter_.elementHasClass(t.target,o)&&(this.isClosing()?(this.adapter_.removeClass(i),this.closed_(),this.adapter_.restoreFocus(),this.adapter_.notifyClose()):(this.adapter_.focusActiveNavigationItem(),this.opened_(),this.adapter_.notifyOpen()),this.adapter_.removeClass(r),this.adapter_.removeClass(e),this.adapter_.removeClass(n))},l.prototype.opened_=function(){},l.prototype.closed_=function(){},l.prototype.runNextAnimationFrame_=function(t){var e=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame(function(){e.animationFrame_=0,clearTimeout(e.animationTimer_),e.animationTimer_=setTimeout(t,0)})},l.prototype.isElement_=function(t){return Boolean(t.classList)},l);function l(t){var e=s.call(this,o({},l.defaultAdapter,t))||this;return e.animationFrame_=0,e.animationTimer_=0,e}e.MDCDismissibleDrawerFoundation=u,e.default=u},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(1),a=n(22),c=(o=s.MDCComponent,r(u,o),u.attachTo=function(t){return new u(t)},u.prototype.shake=function(t){this.foundation_.shake(t)},u.prototype.float=function(t){this.foundation_.float(t)},u.prototype.getWidth=function(){return this.foundation_.getWidth()},u.prototype.getDefaultFoundation=function(){var n=this,t={addClass:function(t){return n.root_.classList.add(t)},removeClass:function(t){return n.root_.classList.remove(t)},getWidth:function(){return n.root_.scrollWidth},registerInteractionHandler:function(t,e){return n.listen(t,e)},deregisterInteractionHandler:function(t,e){return n.unlisten(t,e)}};return new a.MDCFloatingLabelFoundation(t)},u);function u(){return null!==o&&o.apply(this,arguments)||this}e.MDCFloatingLabel=c},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),c=n(51),u=(s=a.MDCFoundation,r(l,s),Object.defineProperty(l,"cssClasses",{get:function(){return c.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(l,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),l.prototype.init=function(){this.adapter_.registerInteractionHandler("animationend",this.shakeAnimationEndHandler_)},l.prototype.destroy=function(){this.adapter_.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler_)},l.prototype.getWidth=function(){return this.adapter_.getWidth()},l.prototype.shake=function(t){var e=l.cssClasses.LABEL_SHAKE;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)},l.prototype.float=function(t){var e=l.cssClasses,n=e.LABEL_FLOAT_ABOVE,i=e.LABEL_SHAKE;t?this.adapter_.addClass(n):(this.adapter_.removeClass(n),this.adapter_.removeClass(i))},l.prototype.handleShakeAnimationEnd_=function(){var t=l.cssClasses.LABEL_SHAKE;this.adapter_.removeClass(t)},l);function l(t){var e=s.call(this,o({},l.defaultAdapter,t))||this;return e.shakeAnimationEndHandler_=function(){return e.handleShakeAnimationEnd_()},e}e.MDCFloatingLabelFoundation=u,e.default=u},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(1),a=n(58),c=(o=s.MDCComponent,r(u,o),u.attachTo=function(t){return new u(t)},u.prototype.activate=function(){this.foundation_.activate()},u.prototype.deactivate=function(){this.foundation_.deactivate()},u.prototype.setRippleCenter=function(t){this.foundation_.setRippleCenter(t)},u.prototype.getDefaultFoundation=function(){var n=this,t={addClass:function(t){return n.root_.classList.add(t)},removeClass:function(t){return n.root_.classList.remove(t)},hasClass:function(t){return n.root_.classList.contains(t)},setStyle:function(t,e){return n.root_.style.setProperty(t,e)},registerEventHandler:function(t,e){return n.listen(t,e)},deregisterEventHandler:function(t,e){return n.unlisten(t,e)}};return new a.MDCLineRippleFoundation(t)},u);function u(){return null!==o&&o.apply(this,arguments)||this}e.MDCLineRipple=c},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(1),a=n(22),c=n(25),u=n(66),l=(o=s.MDCComponent,r(d,o),d.attachTo=function(t){return new d(t)},d.prototype.initialSyncWithDOM=function(){this.notchElement_=this.root_.querySelector(c.strings.NOTCH_ELEMENT_SELECTOR);var t=this.root_.querySelector("."+a.MDCFloatingLabelFoundation.cssClasses.ROOT);t?(t.style.transitionDuration="0s",this.root_.classList.add(c.cssClasses.OUTLINE_UPGRADED),requestAnimationFrame(function(){t.style.transitionDuration=""})):this.root_.classList.add(c.cssClasses.NO_LABEL)},d.prototype.notch=function(t){this.foundation_.notch(t)},d.prototype.closeNotch=function(){this.foundation_.closeNotch()},d.prototype.getDefaultFoundation=function(){var e=this,t={addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},setNotchWidthProperty:function(t){return e.notchElement_.style.setProperty("width",t+"px")},removeNotchWidthProperty:function(){return e.notchElement_.style.removeProperty("width")}};return new u.MDCNotchedOutlineFoundation(t)},d);function d(){return null!==o&&o.apply(this,arguments)||this}e.MDCNotchedOutline=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.strings={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"};e.numbers={NOTCH_ELEMENT_PADDING:8};e.cssClasses={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={ACTIVATED:"mdc-select--activated",DISABLED:"mdc-select--disabled",FOCUSED:"mdc-select--focused",INVALID:"mdc-select--invalid",OUTLINED:"mdc-select--outlined",REQUIRED:"mdc-select--required",ROOT:"mdc-select",SELECTED_ITEM_CLASS:"mdc-list-item--selected",WITH_LEADING_ICON:"mdc-select--with-leading-icon"},r={ARIA_CONTROLS:"aria-controls",ARIA_SELECTED_ATTR:"aria-selected",CHANGE_EVENT:"MDCSelect:change",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-select__icon",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",MENU_SELECTOR:".mdc-select__menu",OUTLINE_SELECTOR:".mdc-notched-outline",SELECTED_ITEM_SELECTOR:"."+(e.cssClasses=i).SELECTED_ITEM_CLASS,SELECTED_TEXT_SELECTOR:".mdc-select__selected-text",SELECT_ANCHOR_SELECTOR:".mdc-select__anchor",VALUE_ATTR:"data-value"};e.strings=r;e.numbers={LABEL_SCALE:.75,UNSET_INDEX:-1}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cssClasses={ACTIVE:"mdc-slider--active",DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",FOCUS:"mdc-slider--focus",HAS_TRACK_MARKER:"mdc-slider--display-markers",IN_TRANSIT:"mdc-slider--in-transit",IS_DISCRETE:"mdc-slider--discrete"};e.strings={ARIA_DISABLED:"aria-disabled",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",CHANGE_EVENT:"MDCSlider:change",INPUT_EVENT:"MDCSlider:input",PIN_VALUE_MARKER_SELECTOR:".mdc-slider__pin-value-marker",STEP_DATA_ATTR:"data-step",THUMB_CONTAINER_SELECTOR:".mdc-slider__thumb-container",TRACK_MARKER_CONTAINER_SELECTOR:".mdc-slider__track-marker-container",TRACK_SELECTOR:".mdc-slider__track"};e.numbers={PAGE_FACTOR:4}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cssClasses={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"};e.strings={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});function i(t){this.adapter_=t}e.MDCTabScrollerRTL=i,e.default=i},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),c=n(89),u=(s=a.MDCFoundation,r(l,s),Object.defineProperty(l,"cssClasses",{get:function(){return c.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(l,"strings",{get:function(){return c.strings},enumerable:!0,configurable:!0}),Object.defineProperty(l,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!0,configurable:!0}),l.prototype.handleClick=function(){this.adapter_.notifyInteracted()},l.prototype.isActive=function(){return this.adapter_.hasClass(c.cssClasses.ACTIVE)},l.prototype.setFocusOnActivate=function(t){this.focusOnActivate_=t},l.prototype.activate=function(t){this.adapter_.addClass(c.cssClasses.ACTIVE),this.adapter_.setAttr(c.strings.ARIA_SELECTED,"true"),this.adapter_.setAttr(c.strings.TABINDEX,"0"),this.adapter_.activateIndicator(t),this.focusOnActivate_&&this.adapter_.focus()},l.prototype.deactivate=function(){this.isActive()&&(this.adapter_.removeClass(c.cssClasses.ACTIVE),this.adapter_.setAttr(c.strings.ARIA_SELECTED,"false"),this.adapter_.setAttr(c.strings.TABINDEX,"-1"),this.adapter_.deactivateIndicator())},l.prototype.computeDimensions=function(){var t=this.adapter_.getOffsetWidth(),e=this.adapter_.getOffsetLeft(),n=this.adapter_.getContentOffsetWidth(),i=this.adapter_.getContentOffsetLeft();return{contentLeft:e+i,contentRight:e+i+n,rootLeft:e,rootRight:e+t}},l);function l(t){var e=s.call(this,o({},l.defaultAdapter,t))||this;return e.focusOnActivate_=!0,e}e.MDCTabFoundation=u,e.default=u},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),c=n(93),u=(s=a.MDCFoundation,r(l,s),Object.defineProperty(l,"cssClasses",{get:function(){return c.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(l,"strings",{get:function(){return c.strings},enumerable:!0,configurable:!0}),Object.defineProperty(l,"defaultAdapter",{get:function(){return{setContent:function(){}}},enumerable:!0,configurable:!0}),l.prototype.setCounterValue=function(t,e){t=Math.min(t,e),this.adapter_.setContent(t+" / "+e)},l);function l(t){return s.call(this,o({},l.defaultAdapter,t))||this}e.MDCTextFieldCharacterCounterFoundation=u,e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.strings={ARIA_CONTROLS:"aria-controls",ICON_SELECTOR:".mdc-text-field__icon",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline"};e.cssClasses={DENSE:"mdc-text-field--dense",DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",FULLWIDTH:"mdc-text-field--fullwidth",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon"};e.numbers={DENSE_LABEL_SCALE:.923,LABEL_SCALE:.75};e.VALIDATION_ATTR_WHITELIST=["pattern","min","max","required","step","minlength","maxlength"];e.ALWAYS_FLOAT_TYPES=["color","date","datetime-local","month","range","time","week"]},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),c=n(96),u=(s=a.MDCFoundation,r(l,s),Object.defineProperty(l,"cssClasses",{get:function(){return c.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(l,"strings",{get:function(){return c.strings},enumerable:!0,configurable:!0}),Object.defineProperty(l,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!0,configurable:!0}),l.prototype.setContent=function(t){this.adapter_.setContent(t)},l.prototype.setPersistent=function(t){t?this.adapter_.addClass(c.cssClasses.HELPER_TEXT_PERSISTENT):this.adapter_.removeClass(c.cssClasses.HELPER_TEXT_PERSISTENT)},l.prototype.setValidation=function(t){t?this.adapter_.addClass(c.cssClasses.HELPER_TEXT_VALIDATION_MSG):this.adapter_.removeClass(c.cssClasses.HELPER_TEXT_VALIDATION_MSG)},l.prototype.showToScreenReader=function(){this.adapter_.removeAttr(c.strings.ARIA_HIDDEN)},l.prototype.setValidity=function(t){var e=this.adapter_.hasClass(c.cssClasses.HELPER_TEXT_PERSISTENT),n=this.adapter_.hasClass(c.cssClasses.HELPER_TEXT_VALIDATION_MSG)&&!t;n?this.adapter_.setAttr(c.strings.ROLE,"alert"):this.adapter_.removeAttr(c.strings.ROLE),e||n||this.hide_()},l.prototype.hide_=function(){this.adapter_.setAttr(c.strings.ARIA_HIDDEN,"true")},l);function l(t){return s.call(this,o({},l.defaultAdapter,t))||this}e.MDCTextFieldHelperTextFoundation=u,e.default=u},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(7),a=n(35),c=(o=a.MDCTopAppBarBaseFoundation,r(u,o),u.prototype.destroy=function(){o.prototype.destroy.call(this),this.adapter_.setStyle("top","")},u.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter_.getViewportScrollY(),0),e=t-this.lastScrollPosition_;this.lastScrollPosition_=t,this.isCurrentlyBeingResized_||(this.currentAppBarOffsetTop_-=e,0<this.currentAppBarOffsetTop_?this.currentAppBarOffsetTop_=0:Math.abs(this.currentAppBarOffsetTop_)>this.topAppBarHeight_&&(this.currentAppBarOffsetTop_=-this.topAppBarHeight_),this.moveTopAppBar_())},u.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId_||(this.resizeThrottleId_=setTimeout(function(){t.resizeThrottleId_=0,t.throttledResizeHandler_()},s.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized_=!0,this.resizeDebounceId_&&clearTimeout(this.resizeDebounceId_),this.resizeDebounceId_=setTimeout(function(){t.handleTargetScroll(),t.isCurrentlyBeingResized_=!1,t.resizeDebounceId_=0},s.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},u.prototype.checkForUpdate_=function(){var t=-this.topAppBarHeight_,e=this.currentAppBarOffsetTop_<0,n=this.currentAppBarOffsetTop_>t,i=e&&n;if(i)this.wasDocked_=!1;else{if(!this.wasDocked_)return this.wasDocked_=!0;if(this.isDockedShowing_!==n)return this.isDockedShowing_=n,!0}return i},u.prototype.moveTopAppBar_=function(){if(this.checkForUpdate_()){var t=this.currentAppBarOffsetTop_;Math.abs(t)>=this.topAppBarHeight_&&(t=-s.numbers.MAX_TOP_APP_BAR_HEIGHT),this.adapter_.setStyle("top",t+"px")}},u.prototype.throttledResizeHandler_=function(){var t=this.adapter_.getTopAppBarHeight();this.topAppBarHeight_!==t&&(this.wasDocked_=!1,this.currentAppBarOffsetTop_-=this.topAppBarHeight_-t,this.topAppBarHeight_=t),this.handleTargetScroll()},u);function u(t){var e=o.call(this,t)||this;return e.wasDocked_=!0,e.isDockedShowing_=!0,e.currentAppBarOffsetTop_=0,e.isCurrentlyBeingResized_=!1,e.resizeThrottleId_=0,e.resizeDebounceId_=0,e.lastScrollPosition_=e.adapter_.getViewportScrollY(),e.topAppBarHeight_=e.adapter_.getTopAppBarHeight(),e}e.MDCTopAppBarFoundation=c,e.default=c},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),c=n(7),u=(s=a.MDCFoundation,r(l,s),Object.defineProperty(l,"strings",{get:function(){return c.strings},enumerable:!0,configurable:!0}),Object.defineProperty(l,"cssClasses",{get:function(){return c.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(l,"numbers",{get:function(){return c.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(l,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!0,configurable:!0}),l.prototype.handleTargetScroll=function(){},l.prototype.handleWindowResize=function(){},l.prototype.handleNavigationClick=function(){this.adapter_.notifyNavigationIconClicked()},l);function l(t){return s.call(this,o({},l.defaultAdapter,t))||this}e.MDCTopAppBarBaseFoundation=u,e.default=u},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(15),c=n(1),u=n(5),l=n(2),d=n(3),p=n(4),_=n(38),f=["checked","indeterminate"],h=(s=c.MDCComponent,r(y,s),y.attachTo=function(t){return new y(t)},Object.defineProperty(y.prototype,"ripple",{get:function(){return this.ripple_},enumerable:!0,configurable:!0}),Object.defineProperty(y.prototype,"checked",{get:function(){return this.nativeControl_.checked},set:function(t){this.nativeControl_.checked=t},enumerable:!0,configurable:!0}),Object.defineProperty(y.prototype,"indeterminate",{get:function(){return this.nativeControl_.indeterminate},set:function(t){this.nativeControl_.indeterminate=t},enumerable:!0,configurable:!0}),Object.defineProperty(y.prototype,"disabled",{get:function(){return this.nativeControl_.disabled},set:function(t){this.foundation_.setDisabled(t)},enumerable:!0,configurable:!0}),Object.defineProperty(y.prototype,"value",{get:function(){return this.nativeControl_.value},set:function(t){this.nativeControl_.value=t},enumerable:!0,configurable:!0}),y.prototype.initialSyncWithDOM=function(){var t=this;this.handleChange_=function(){return t.foundation_.handleChange()},this.handleAnimationEnd_=function(){return t.foundation_.handleAnimationEnd()},this.nativeControl_.addEventListener("change",this.handleChange_),this.listen(a.getCorrectEventName(window,"animationend"),this.handleAnimationEnd_),this.installPropertyChangeHooks_()},y.prototype.destroy=function(){this.ripple_.destroy(),this.nativeControl_.removeEventListener("change",this.handleChange_),this.unlisten(a.getCorrectEventName(window,"animationend"),this.handleAnimationEnd_),this.uninstallPropertyChangeHooks_(),s.prototype.destroy.call(this)},y.prototype.getDefaultFoundation=function(){var n=this,t={addClass:function(t){return n.root_.classList.add(t)},forceLayout:function(){return n.root_.offsetWidth},hasNativeControl:function(){return!!n.nativeControl_},isAttachedToDOM:function(){return Boolean(n.root_.parentNode)},isChecked:function(){return n.checked},isIndeterminate:function(){return n.indeterminate},removeClass:function(t){return n.root_.classList.remove(t)},removeNativeControlAttr:function(t){return n.nativeControl_.removeAttribute(t)},setNativeControlAttr:function(t,e){return n.nativeControl_.setAttribute(t,e)},setNativeControlDisabled:function(t){return n.nativeControl_.disabled=t}};return new _.MDCCheckboxFoundation(t)},y.prototype.createRipple_=function(){var n=this,t=o({},d.MDCRipple.createAdapter(this),{deregisterInteractionHandler:function(t,e){return n.nativeControl_.removeEventListener(t,e,u.applyPassive())},isSurfaceActive:function(){return l.matches(n.nativeControl_,":active")},isUnbounded:function(){return!0},registerInteractionHandler:function(t,e){return n.nativeControl_.addEventListener(t,e,u.applyPassive())}});return new d.MDCRipple(this.root_,new p.MDCRippleFoundation(t))},y.prototype.installPropertyChangeHooks_=function(){var r=this,o=this.nativeControl_,s=Object.getPrototypeOf(o);f.forEach(function(t){var e=Object.getOwnPropertyDescriptor(s,t);if(C(e)){var n=e.get,i={configurable:e.configurable,enumerable:e.enumerable,get:n,set:function(t){e.set.call(o,t),r.foundation_.handleChange()}};Object.defineProperty(o,t,i)}})},y.prototype.uninstallPropertyChangeHooks_=function(){var n=this.nativeControl_,i=Object.getPrototypeOf(n);f.forEach(function(t){var e=Object.getOwnPropertyDescriptor(i,t);C(e)&&Object.defineProperty(n,t,e)})},Object.defineProperty(y.prototype,"nativeControl_",{get:function(){var t=_.MDCCheckboxFoundation.strings.NATIVE_CONTROL_SELECTOR,e=this.root_.querySelector(t);if(!e)throw new Error("Checkbox component requires a "+t+" element");return e},enumerable:!0,configurable:!0}),y);function y(){var t=null!==s&&s.apply(this,arguments)||this;return t.ripple_=t.createRipple_(),t}function C(t){return!!t&&"function"==typeof t.set}e.MDCCheckbox=h},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cssClasses={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},e.strings={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},e.numbers={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),p=n(39),c=(s=a.MDCFoundation,r(_,s),Object.defineProperty(_,"cssClasses",{get:function(){return p.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(_,"strings",{get:function(){return p.strings},enumerable:!0,configurable:!0}),Object.defineProperty(_,"numbers",{get:function(){return p.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(_,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},hasNativeControl:function(){return!1},isAttachedToDOM:function(){return!1},isChecked:function(){return!1},isIndeterminate:function(){return!1},removeClass:function(){},removeNativeControlAttr:function(){},setNativeControlAttr:function(){},setNativeControlDisabled:function(){}}},enumerable:!0,configurable:!0}),_.prototype.init=function(){this.currentCheckState_=this.determineCheckState_(),this.updateAriaChecked_(),this.adapter_.addClass(p.cssClasses.UPGRADED)},_.prototype.destroy=function(){clearTimeout(this.animEndLatchTimer_)},_.prototype.setDisabled=function(t){this.adapter_.setNativeControlDisabled(t),t?this.adapter_.addClass(p.cssClasses.DISABLED):this.adapter_.removeClass(p.cssClasses.DISABLED)},_.prototype.handleAnimationEnd=function(){var t=this;this.enableAnimationEndHandler_&&(clearTimeout(this.animEndLatchTimer_),this.animEndLatchTimer_=setTimeout(function(){t.adapter_.removeClass(t.currentAnimationClass_),t.enableAnimationEndHandler_=!1},p.numbers.ANIM_END_LATCH_MS))},_.prototype.handleChange=function(){this.transitionCheckState_()},_.prototype.transitionCheckState_=function(){if(this.adapter_.hasNativeControl()){var t=this.currentCheckState_,e=this.determineCheckState_();if(t!==e){this.updateAriaChecked_();var n=p.strings.TRANSITION_STATE_UNCHECKED,i=p.cssClasses.SELECTED;e===n?this.adapter_.removeClass(i):this.adapter_.addClass(i),0<this.currentAnimationClass_.length&&(clearTimeout(this.animEndLatchTimer_),this.adapter_.forceLayout(),this.adapter_.removeClass(this.currentAnimationClass_)),this.currentAnimationClass_=this.getTransitionAnimationClass_(t,e),this.currentCheckState_=e,this.adapter_.isAttachedToDOM()&&0<this.currentAnimationClass_.length&&(this.adapter_.addClass(this.currentAnimationClass_),this.enableAnimationEndHandler_=!0)}}},_.prototype.determineCheckState_=function(){var t=p.strings.TRANSITION_STATE_INDETERMINATE,e=p.strings.TRANSITION_STATE_CHECKED,n=p.strings.TRANSITION_STATE_UNCHECKED;return this.adapter_.isIndeterminate()?t:this.adapter_.isChecked()?e:n},_.prototype.getTransitionAnimationClass_=function(t,e){var n=p.strings.TRANSITION_STATE_INIT,i=p.strings.TRANSITION_STATE_CHECKED,r=p.strings.TRANSITION_STATE_UNCHECKED,o=_.cssClasses,s=o.ANIM_UNCHECKED_CHECKED,a=o.ANIM_UNCHECKED_INDETERMINATE,c=o.ANIM_CHECKED_UNCHECKED,u=o.ANIM_CHECKED_INDETERMINATE,l=o.ANIM_INDETERMINATE_CHECKED,d=o.ANIM_INDETERMINATE_UNCHECKED;switch(t){case n:return e===r?"":e===i?l:d;case r:return e===i?s:a;case i:return e===r?c:u;default:return e===i?l:d}},_.prototype.updateAriaChecked_=function(){this.adapter_.isIndeterminate()?this.adapter_.setNativeControlAttr(p.strings.ARIA_CHECKED_ATTR,p.strings.ARIA_CHECKED_INDETERMINATE_VALUE):this.adapter_.removeNativeControlAttr(p.strings.ARIA_CHECKED_ATTR)},_);function _(t){var e=s.call(this,o({},_.defaultAdapter,t))||this;return e.currentCheckState_=p.strings.TRANSITION_STATE_INIT,e.currentAnimationClass_="",e.animEndLatchTimer_=0,e.enableAnimationEndHandler_=!1,e}e.MDCCheckboxFoundation=c,e.default=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cssClasses={ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",BACKGROUND:"mdc-checkbox__background",CHECKED:"mdc-checkbox--checked",CHECKMARK:"mdc-checkbox__checkmark",CHECKMARK_PATH:"mdc-checkbox__checkmark-path",DISABLED:"mdc-checkbox--disabled",INDETERMINATE:"mdc-checkbox--indeterminate",MIXEDMARK:"mdc-checkbox__mixedmark",NATIVE_CONTROL:"mdc-checkbox__native-control",ROOT:"mdc-checkbox",SELECTED:"mdc-checkbox--selected",UPGRADED:"mdc-checkbox--upgraded"},e.strings={ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed",NATIVE_CONTROL_SELECTOR:".mdc-checkbox__native-control",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_INDETERMINATE:"indeterminate",TRANSITION_STATE_INIT:"init",TRANSITION_STATE_UNCHECKED:"unchecked"},e.numbers={ANIM_END_LATCH_MS:250}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(1),c=n(3),u=n(4),l=n(8),d=n(17),p=["click","keydown"],_=(s=a.MDCComponent,r(f,s),Object.defineProperty(f.prototype,"selected",{get:function(){return this.foundation_.isSelected()},set:function(t){this.foundation_.setSelected(t)},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"shouldRemoveOnTrailingIconClick",{get:function(){return this.foundation_.getShouldRemoveOnTrailingIconClick()},set:function(t){this.foundation_.setShouldRemoveOnTrailingIconClick(t)},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"ripple",{get:function(){return this.ripple_},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"id",{get:function(){return this.root_.id},enumerable:!0,configurable:!0}),f.attachTo=function(t){return new f(t)},f.prototype.initialize=function(t){var e=this;void 0===t&&(t=function(t,e){return new c.MDCRipple(t,e)}),this.leadingIcon_=this.root_.querySelector(l.strings.LEADING_ICON_SELECTOR),this.trailingIcon_=this.root_.querySelector(l.strings.TRAILING_ICON_SELECTOR),this.checkmark_=this.root_.querySelector(l.strings.CHECKMARK_SELECTOR),this.primaryAction_=this.root_.querySelector(l.strings.PRIMARY_ACTION_SELECTOR),this.trailingAction_=this.root_.querySelector(l.strings.TRAILING_ACTION_SELECTOR);var n=o({},c.MDCRipple.createAdapter(this),{computeBoundingRect:function(){return e.foundation_.getDimensions()}});this.ripple_=t(this.root_,new u.MDCRippleFoundation(n))},f.prototype.initialSyncWithDOM=function(){var e=this;this.handleInteraction_=function(t){return e.foundation_.handleInteraction(t)},this.handleTransitionEnd_=function(t){return e.foundation_.handleTransitionEnd(t)},this.handleTrailingIconInteraction_=function(t){return e.foundation_.handleTrailingIconInteraction(t)},this.handleKeydown_=function(t){return e.foundation_.handleKeydown(t)},p.forEach(function(t){e.listen(t,e.handleInteraction_)}),this.listen("transitionend",this.handleTransitionEnd_),this.listen("keydown",this.handleKeydown_),this.trailingIcon_&&p.forEach(function(t){e.trailingIcon_.addEventListener(t,e.handleTrailingIconInteraction_)})},f.prototype.destroy=function(){var e=this;this.ripple_.destroy(),p.forEach(function(t){e.unlisten(t,e.handleInteraction_)}),this.unlisten("transitionend",this.handleTransitionEnd_),this.unlisten("keydown",this.handleKeydown_),this.trailingIcon_&&p.forEach(function(t){e.trailingIcon_.removeEventListener(t,e.handleTrailingIconInteraction_)}),s.prototype.destroy.call(this)},f.prototype.beginExit=function(){this.foundation_.beginExit()},f.prototype.getDefaultFoundation=function(){var n=this,t={addClass:function(t){return n.root_.classList.add(t)},addClassToLeadingIcon:function(t){n.leadingIcon_&&n.leadingIcon_.classList.add(t)},eventTargetHasClass:function(t,e){return!!t&&t.classList.contains(e)},focusPrimaryAction:function(){n.primaryAction_&&n.primaryAction_.focus()},focusTrailingAction:function(){n.trailingAction_&&n.trailingAction_.focus()},getCheckmarkBoundingClientRect:function(){return n.checkmark_?n.checkmark_.getBoundingClientRect():null},getComputedStyleValue:function(t){return window.getComputedStyle(n.root_).getPropertyValue(t)},getRootBoundingClientRect:function(){return n.root_.getBoundingClientRect()},hasClass:function(t){return n.root_.classList.contains(t)},hasLeadingIcon:function(){return!!n.leadingIcon_},hasTrailingAction:function(){return!!n.trailingAction_},isRTL:function(){return"rtl"===window.getComputedStyle(n.root_).getPropertyValue("direction")},notifyInteraction:function(){return n.emit(l.strings.INTERACTION_EVENT,{chipId:n.id},!0)},notifyNavigation:function(t,e){return n.emit(l.strings.NAVIGATION_EVENT,{chipId:n.id,key:t,source:e},!0)},notifyRemoval:function(){n.emit(l.strings.REMOVAL_EVENT,{chipId:n.id,root:n.root_},!0)},notifySelection:function(t,e){return n.emit(l.strings.SELECTION_EVENT,{chipId:n.id,selected:t,shouldIgnore:e},!0)},notifyTrailingIconInteraction:function(){return n.emit(l.strings.TRAILING_ICON_INTERACTION_EVENT,{chipId:n.id},!0)},removeClass:function(t){return n.root_.classList.remove(t)},removeClassFromLeadingIcon:function(t){n.leadingIcon_&&n.leadingIcon_.classList.remove(t)},setPrimaryActionAttr:function(t,e){n.primaryAction_&&n.primaryAction_.setAttribute(t,e)},setStyleProperty:function(t,e){return n.root_.style.setProperty(t,e)},setTrailingActionAttr:function(t,e){n.trailingAction_&&n.trailingAction_.setAttribute(t,e)}};return new d.MDCChipFoundation(t)},f.prototype.setSelectedFromChipSet=function(t,e){this.foundation_.setSelectedFromChipSet(t,e)},f.prototype.focusPrimaryAction=function(){this.foundation_.focusPrimaryAction()},f.prototype.focusTrailingAction=function(){this.foundation_.focusTrailingAction()},f.prototype.removeFocus=function(){this.foundation_.removeFocus()},f.prototype.remove=function(){var t=this.root_.parentNode;null!==t&&t.removeChild(this.root_)},f);function f(){return null!==s&&s.apply(this,arguments)||this}e.MDCChip=_},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),u=n(8),c=n(42),l=(s=a.MDCFoundation,r(d,s),Object.defineProperty(d,"strings",{get:function(){return c.strings},enumerable:!0,configurable:!0}),Object.defineProperty(d,"cssClasses",{get:function(){return c.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(d,"defaultAdapter",{get:function(){return{focusChipPrimaryActionAtIndex:function(){},focusChipTrailingActionAtIndex:function(){},getChipListCount:function(){return-1},getIndexOfChipById:function(){return-1},hasClass:function(){return!1},isRTL:function(){return!1},removeChipAtIndex:function(){},removeFocusFromChipAtIndex:function(){},selectChipAtIndex:function(){}}},enumerable:!0,configurable:!0}),d.prototype.getSelectedChipIds=function(){return this.selectedChipIds_.slice()},d.prototype.select=function(t){this.select_(t,!1)},d.prototype.handleChipInteraction=function(t){var e=this.adapter_.getIndexOfChipById(t);this.removeFocusFromChipsExcept_(e),(this.adapter_.hasClass(c.cssClasses.CHOICE)||this.adapter_.hasClass(c.cssClasses.FILTER))&&this.toggleSelect_(t)},d.prototype.handleChipSelection=function(t,e,n){if(!n){var i=0<=this.selectedChipIds_.indexOf(t);e&&!i?this.select(t):!e&&i&&this.deselect_(t)}},d.prototype.handleChipRemoval=function(t){var e=this.adapter_.getIndexOfChipById(t);this.deselectAndNotifyClients_(t),this.adapter_.removeChipAtIndex(e);var n=this.adapter_.getChipListCount()-1,i=Math.min(e,n);this.removeFocusFromChipsExcept_(i),this.adapter_.focusChipTrailingActionAtIndex(i)},d.prototype.handleChipNavigation=function(t,e,n){var i=this.adapter_.getChipListCount()-1,r=this.adapter_.getIndexOfChipById(t);if(-1!==r&&u.navigationKeys.has(e)){var o=this.adapter_.isRTL(),s=e===u.strings.ARROW_RIGHT_KEY&&!o||e===u.strings.ARROW_LEFT_KEY&&o||e===u.strings.ARROW_DOWN_KEY,a=e===u.strings.HOME_KEY,c=e===u.strings.END_KEY;s?r++:a?r=0:c?r=i:r--,r<0||i<r||(this.removeFocusFromChipsExcept_(r),this.focusChipAction_(r,e,n))}},d.prototype.focusChipAction_=function(t,e,n){var i=u.jumpChipKeys.has(e);if(i&&n===u.EventSource.PRIMARY)return this.adapter_.focusChipPrimaryActionAtIndex(t);if(i&&n===u.EventSource.TRAILING)return this.adapter_.focusChipTrailingActionAtIndex(t);var r=this.getDirection_(e);return r===u.Direction.LEFT?this.adapter_.focusChipTrailingActionAtIndex(t):r===u.Direction.RIGHT?this.adapter_.focusChipPrimaryActionAtIndex(t):void 0},d.prototype.getDirection_=function(t){var e=this.adapter_.isRTL();return t===u.strings.ARROW_LEFT_KEY&&!e||t===u.strings.ARROW_RIGHT_KEY&&e?u.Direction.LEFT:u.Direction.RIGHT},d.prototype.deselect_=function(t,e){void 0===e&&(e=!1);var n=this.selectedChipIds_.indexOf(t);if(0<=n){this.selectedChipIds_.splice(n,1);var i=this.adapter_.getIndexOfChipById(t);this.adapter_.selectChipAtIndex(i,!1,e)}},d.prototype.deselectAndNotifyClients_=function(t){this.deselect_(t,!0)},d.prototype.toggleSelect_=function(t){0<=this.selectedChipIds_.indexOf(t)?this.deselectAndNotifyClients_(t):this.selectAndNotifyClients_(t)},d.prototype.removeFocusFromChipsExcept_=function(t){for(var e=this.adapter_.getChipListCount(),n=0;n<e;n++)n!==t&&this.adapter_.removeFocusFromChipAtIndex(n)},d.prototype.selectAndNotifyClients_=function(t){this.select_(t,!0)},d.prototype.select_=function(t,e){if(!(0<=this.selectedChipIds_.indexOf(t))){if(this.adapter_.hasClass(c.cssClasses.CHOICE)&&0<this.selectedChipIds_.length){var n=this.selectedChipIds_[0],i=this.adapter_.getIndexOfChipById(n);this.selectedChipIds_=[],this.adapter_.selectChipAtIndex(i,!1,e)}this.selectedChipIds_.push(t);var r=this.adapter_.getIndexOfChipById(t);this.adapter_.selectChipAtIndex(r,!0,e)}},d);function d(t){var e=s.call(this,o({},d.defaultAdapter,t))||this;return e.selectedChipIds_=[],e}e.MDCChipSetFoundation=l,e.default=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.strings={CHIP_SELECTOR:".mdc-chip"},e.cssClasses={CHOICE:"mdc-chip-set--choice",FILTER:"mdc-chip-set--filter"}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},s=this&&this.__awaiter||function(o,s,a,c){return new(a=a||Promise)(function(t,e){function n(t){try{r(c.next(t))}catch(t){e(t)}}function i(t){try{r(c.throw(t))}catch(t){e(t)}}function r(e){e.done?t(e.value):new a(function(t){t(e.value)}).then(n,i)}r((c=c.apply(o,s||[])).next())})},a=this&&this.__generator||function(n,i){var r,o,s,t,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,o&&(s=2&e[0]?o.return:e[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,e[1])).done)return s;switch(o=0,s&&(e=[2&e[0],s.value]),e[0]){case 0:case 1:s=e;break;case 4:return a.label++,{value:e[1],done:!1};case 5:a.label++,o=e[1],e=[0];continue;case 7:e=a.ops.pop(),a.trys.pop();continue;default:if(!(s=0<(s=a.trys).length&&s[s.length-1])&&(6===e[0]||2===e[0])){a=0;continue}if(3===e[0]&&(!s||e[1]>s[0]&&e[1]<s[3])){a.label=e[1];break}if(6===e[0]&&a.label<s[1]){a.label=s[1],s=e;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(e);break}s[2]&&a.ops.pop(),a.trys.pop();continue}e=i.call(n,a)}catch(t){e=[6,t],o=0}finally{r=s=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}};Object.defineProperty(e,"__esModule",{value:!0});var c,u=n(0),l=n(18),d=(c=u.MDCFoundation,r(p,c),Object.defineProperty(p,"defaultAdapter",{get:function(){return{addClassAtRowIndex:function(){},getRowCount:function(){return 0},getRowElements:function(){return[]},getRowIdAtIndex:function(){return""},getRowIndexByChildElement:function(){return 0},getSelectedRowCount:function(){return 0},isCheckboxAtRowIndexChecked:function(){return!1},isHeaderRowCheckboxChecked:function(){return!1},isRowsSelectable:function(){return!1},notifyRowSelectionChanged:function(){},notifySelectedAll:function(){},notifyUnselectedAll:function(){},registerHeaderRowCheckbox:function(){},registerRowCheckboxes:function(){},removeClassAtRowIndex:function(){},setAttributeAtRowIndex:function(){},setHeaderRowCheckboxChecked:function(){},setHeaderRowCheckboxIndeterminate:function(){},setRowCheckboxCheckedAtIndex:function(){}}},enumerable:!0,configurable:!0}),p.prototype.layout=function(){this.adapter_.isRowsSelectable()&&(this.adapter_.registerHeaderRowCheckbox(),this.adapter_.registerRowCheckboxes(),this.setHeaderRowCheckboxState_())},p.prototype.layoutAsync=function(){return s(this,void 0,void 0,function(){return a(this,function(t){switch(t.label){case 0:return this.adapter_.isRowsSelectable()?[4,this.adapter_.registerHeaderRowCheckbox()]:[3,3];case 1:return t.sent(),[4,this.adapter_.registerRowCheckboxes()];case 2:t.sent(),this.setHeaderRowCheckboxState_(),t.label=3;case 3:return[2]}})})},p.prototype.getRows=function(){return this.adapter_.getRowElements()},p.prototype.setSelectedRowIds=function(t){for(var e=0;e<this.adapter_.getRowCount();e++){var n=this.adapter_.getRowIdAtIndex(e),i=!1;n&&0<=t.indexOf(n)&&(i=!0),this.adapter_.setRowCheckboxCheckedAtIndex(e,i),this.selectRowAtIndex_(e,i)}this.setHeaderRowCheckboxState_()},p.prototype.getSelectedRowIds=function(){for(var t=[],e=0;e<this.adapter_.getRowCount();e++)this.adapter_.isCheckboxAtRowIndexChecked(e)&&t.push(this.adapter_.getRowIdAtIndex(e));return t},p.prototype.handleHeaderRowCheckboxChange=function(){for(var t=this.adapter_.isHeaderRowCheckboxChecked(),e=0;e<this.adapter_.getRowCount();e++)this.adapter_.setRowCheckboxCheckedAtIndex(e,t),this.selectRowAtIndex_(e,t);t?this.adapter_.notifySelectedAll():this.adapter_.notifyUnselectedAll()},p.prototype.handleRowCheckboxChange=function(t){var e=this.adapter_.getRowIndexByChildElement(t.target);if(-1!==e){var n=this.adapter_.isCheckboxAtRowIndexChecked(e);this.selectRowAtIndex_(e,n),this.setHeaderRowCheckboxState_();var i=this.adapter_.getRowIdAtIndex(e);this.adapter_.notifyRowSelectionChanged({rowId:i,rowIndex:e,selected:n})}},p.prototype.setHeaderRowCheckboxState_=function(){this.adapter_.getSelectedRowCount()===this.adapter_.getRowCount()?(this.adapter_.setHeaderRowCheckboxChecked(!0),this.adapter_.setHeaderRowCheckboxIndeterminate(!1)):(0===this.adapter_.getSelectedRowCount()?this.adapter_.setHeaderRowCheckboxIndeterminate(!1):this.adapter_.setHeaderRowCheckboxIndeterminate(!0),this.adapter_.setHeaderRowCheckboxChecked(!1))},p.prototype.selectRowAtIndex_=function(t,e){e?(this.adapter_.addClassAtRowIndex(t,l.cssClasses.ROW_SELECTED),this.adapter_.setAttributeAtRowIndex(t,l.strings.ARIA_SELECTED,"true")):(this.adapter_.removeClassAtRowIndex(t,l.cssClasses.ROW_SELECTED),this.adapter_.setAttributeAtRowIndex(t,l.strings.ARIA_SELECTED,"false"))},p);function p(t){return c.call(this,o({},p.defaultAdapter,t))||this}e.MDCDataTableFoundation=d},function(t,e,n){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(114));e.createFocusTrapInstance=function(t,e,n){return void 0===e&&(e=r.default),e(t,{clickOutsideDeactivates:!0,escapeDeactivates:!1,initialFocus:n})},e.isScrollable=function(t){return!!t&&t.scrollHeight>t.offsetHeight},e.areTopsMisaligned=function(t){var e=new Set;return[].forEach.call(t,function(t){return e.add(t.offsetTop)}),1<e.size}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),c=n(46),u=(s=a.MDCFoundation,r(l,s),Object.defineProperty(l,"cssClasses",{get:function(){return c.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(l,"strings",{get:function(){return c.strings},enumerable:!0,configurable:!0}),Object.defineProperty(l,"numbers",{get:function(){return c.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(l,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){}}},enumerable:!0,configurable:!0}),l.prototype.init=function(){this.adapter_.hasClass(c.cssClasses.STACKED)&&this.setAutoStackButtons(!1)},l.prototype.destroy=function(){this.isOpen_&&this.close(c.strings.DESTROY_ACTION),this.animationTimer_&&(clearTimeout(this.animationTimer_),this.handleAnimationTimerEnd_()),this.layoutFrame_&&(cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=0)},l.prototype.open=function(){var t=this;this.isOpen_=!0,this.adapter_.notifyOpening(),this.adapter_.addClass(c.cssClasses.OPENING),this.runNextAnimationFrame_(function(){t.adapter_.addClass(c.cssClasses.OPEN),t.adapter_.addBodyClass(c.cssClasses.SCROLL_LOCK),t.layout(),t.animationTimer_=setTimeout(function(){t.handleAnimationTimerEnd_(),t.adapter_.trapFocus(t.adapter_.getInitialFocusEl()),t.adapter_.notifyOpened()},c.numbers.DIALOG_ANIMATION_OPEN_TIME_MS)})},l.prototype.close=function(t){var e=this;void 0===t&&(t=""),this.isOpen_&&(this.isOpen_=!1,this.adapter_.notifyClosing(t),this.adapter_.addClass(c.cssClasses.CLOSING),this.adapter_.removeClass(c.cssClasses.OPEN),this.adapter_.removeBodyClass(c.cssClasses.SCROLL_LOCK),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout(function(){e.adapter_.releaseFocus(),e.handleAnimationTimerEnd_(),e.adapter_.notifyClosed(t)},c.numbers.DIALOG_ANIMATION_CLOSE_TIME_MS))},l.prototype.isOpen=function(){return this.isOpen_},l.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction_},l.prototype.setEscapeKeyAction=function(t){this.escapeKeyAction_=t},l.prototype.getScrimClickAction=function(){return this.scrimClickAction_},l.prototype.setScrimClickAction=function(t){this.scrimClickAction_=t},l.prototype.getAutoStackButtons=function(){return this.autoStackButtons_},l.prototype.setAutoStackButtons=function(t){this.autoStackButtons_=t},l.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})},l.prototype.handleClick=function(t){if(this.adapter_.eventTargetMatches(t.target,c.strings.SCRIM_SELECTOR)&&""!==this.scrimClickAction_)this.close(this.scrimClickAction_);else{var e=this.adapter_.getActionFromEvent(t);e&&this.close(e)}},l.prototype.handleKeydown=function(t){var e="Enter"===t.key||13===t.keyCode;if(e&&!this.adapter_.getActionFromEvent(t)){var n=!this.adapter_.eventTargetMatches(t.target,c.strings.SUPPRESS_DEFAULT_PRESS_SELECTOR);e&&n&&this.adapter_.clickDefaultButton()}},l.prototype.handleDocumentKeydown=function(t){"Escape"!==t.key&&27!==t.keyCode||""===this.escapeKeyAction_||this.close(this.escapeKeyAction_)},l.prototype.layoutInternal_=function(){this.autoStackButtons_&&this.detectStackedButtons_(),this.detectScrollableContent_()},l.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter_.removeClass(c.cssClasses.OPENING),this.adapter_.removeClass(c.cssClasses.CLOSING)},l.prototype.runNextAnimationFrame_=function(t){var e=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame(function(){e.animationFrame_=0,clearTimeout(e.animationTimer_),e.animationTimer_=setTimeout(t,0)})},l.prototype.detectStackedButtons_=function(){this.adapter_.removeClass(c.cssClasses.STACKED);var t=this.adapter_.areButtonsStacked();t&&this.adapter_.addClass(c.cssClasses.STACKED),t!==this.areButtonsStacked_&&(this.adapter_.reverseButtons(),this.areButtonsStacked_=t)},l.prototype.detectScrollableContent_=function(){this.adapter_.removeClass(c.cssClasses.SCROLLABLE),this.adapter_.isContentScrollable()&&this.adapter_.addClass(c.cssClasses.SCROLLABLE)},l);function l(t){var e=s.call(this,o({},l.defaultAdapter,t))||this;return e.isOpen_=!1,e.animationFrame_=0,e.animationTimer_=0,e.layoutFrame_=0,e.escapeKeyAction_=c.strings.CLOSE_ACTION,e.scrimClickAction_=c.strings.CLOSE_ACTION,e.autoStackButtons_=!0,e.areButtonsStacked_=!1,e}e.MDCDialogFoundation=u,e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cssClasses={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked"},e.strings={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},e.numbers={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150}},function(t,e,n){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(48));e.createFocusTrapInstance=function(t,e){return void 0===e&&(e=r.default),e(t,{clickOutsideDeactivates:!0,escapeDeactivates:!1,initialFocus:void 0,returnFocusOnDeactivate:!1})}},function(t,e,n){var i,g=n(120),m=n(121),v=(i=[],{activateTrap:function(t){if(0<i.length){var e=i[i.length-1];e!==t&&e.pause()}var n=i.indexOf(t);-1===n||i.splice(n,1),i.push(t)},deactivateTrap:function(t){var e=i.indexOf(t);-1!==e&&i.splice(e,1),0<i.length&&i[i.length-1].unpause()}});function E(t){return setTimeout(t,0)}t.exports=function(t,e){var i=document,n="string"==typeof t?i.querySelector(t):t,r=m({returnFocusOnDeactivate:!0,escapeDeactivates:!0},e),o={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},s={activate:function(t){if(o.active)return;y(),o.active=!0,o.paused=!1,o.nodeFocusedBeforeActivation=i.activeElement;var e=t&&t.onActivate?t.onActivate:r.onActivate;e&&e();return c(),s},deactivate:a,pause:function(){if(o.paused||!o.active)return;o.paused=!0,u()},unpause:function(){if(!o.paused||!o.active)return;o.paused=!1,y(),c()}};return s;function a(t){if(o.active){u(),o.active=!1,o.paused=!1,v.deactivateTrap(s);var e=t&&void 0!==t.onDeactivate?t.onDeactivate:r.onDeactivate;return e&&e(),(t&&void 0!==t.returnFocus?t.returnFocus:r.returnFocusOnDeactivate)&&E(function(){C(o.nodeFocusedBeforeActivation)}),s}}function c(){if(o.active)return v.activateTrap(s),E(function(){C(d())}),i.addEventListener("focusin",_,!0),i.addEventListener("mousedown",p,{capture:!0,passive:!1}),i.addEventListener("touchstart",p,{capture:!0,passive:!1}),i.addEventListener("click",h,{capture:!0,passive:!1}),i.addEventListener("keydown",f,{capture:!0,passive:!1}),s}function u(){if(o.active)return i.removeEventListener("focusin",_,!0),i.removeEventListener("mousedown",p,!0),i.removeEventListener("touchstart",p,!0),i.removeEventListener("click",h,!0),i.removeEventListener("keydown",f,!0),s}function l(t){var e=r[t],n=e;if(!e)return null;if("string"==typeof e&&!(n=i.querySelector(e)))throw new Error("`"+t+"` refers to no known node");if("function"==typeof e&&!(n=e()))throw new Error("`"+t+"` did not return a node");return n}function d(){var t;if(!(t=null!==l("initialFocus")?l("initialFocus"):n.contains(i.activeElement)?i.activeElement:o.firstTabbableNode||l("fallbackFocus")))throw new Error("You can't have a focus-trap without at least one focusable element");return t}function p(t){n.contains(t.target)||(r.clickOutsideDeactivates?a({returnFocus:!g.isFocusable(t.target)}):t.preventDefault())}function _(t){n.contains(t.target)||t.target instanceof Document||(t.stopImmediatePropagation(),C(o.mostRecentlyFocusedNode||d()))}function f(t){if(!1!==r.escapeDeactivates&&function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}(t))return t.preventDefault(),void a();!function(t){return"Tab"===t.key||9===t.keyCode}(t)||function(t){if(y(),t.shiftKey&&t.target===o.firstTabbableNode)return t.preventDefault(),C(o.lastTabbableNode);if(!t.shiftKey&&t.target===o.lastTabbableNode)t.preventDefault(),C(o.firstTabbableNode)}(t)}function h(t){r.clickOutsideDeactivates||n.contains(t.target)||(t.preventDefault(),t.stopImmediatePropagation())}function y(){var t=g(n);o.firstTabbableNode=t[0]||d(),o.lastTabbableNode=t[t.length-1]||d()}function C(t){t!==i.activeElement&&(t&&t.focus?(t.focus(),function(t){return t.tagName&&"input"===t.tagName.toLowerCase()&&"function"==typeof t.select}(o.mostRecentlyFocusedNode=t)&&t.select()):C(d()))}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cssClasses={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"};e.strings={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim"}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(20),a=(o=s.MDCDismissibleDrawerFoundation,r(c,o),c.prototype.handleScrimClick=function(){this.close()},c.prototype.opened_=function(){this.adapter_.trapFocus()},c.prototype.closed_=function(){this.adapter_.releaseFocus()},c);function c(){return null!==o&&o.apply(this,arguments)||this}e.MDCModalDrawerFoundation=a,e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cssClasses={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),c=n(53),u=(s=a.MDCFoundation,r(l,s),Object.defineProperty(l,"cssClasses",{get:function(){return c.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(l,"strings",{get:function(){return c.strings},enumerable:!0,configurable:!0}),Object.defineProperty(l,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),l.prototype.init=function(){this.adapter_.registerInteractionHandler("click",this.clickHandler_)},l.prototype.destroy=function(){this.adapter_.deregisterInteractionHandler("click",this.clickHandler_)},l.prototype.handleClick_=function(){var t=this;this.adapter_.activateInputRipple(),requestAnimationFrame(function(){return t.adapter_.deactivateInputRipple()})},l);function l(t){var e=s.call(this,o({},l.defaultAdapter,t))||this;return e.clickHandler_=function(){return e.handleClick_()},e}e.MDCFormFieldFoundation=u,e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cssClasses={ROOT:"mdc-form-field"},e.strings={LABEL_SELECTOR:".mdc-form-field > label"}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),c=n(55),u=(s=a.MDCFoundation,r(l,s),Object.defineProperty(l,"strings",{get:function(){return c.strings},enumerable:!0,configurable:!0}),Object.defineProperty(l,"defaultAdapter",{get:function(){return{deregisterResizeHandler:function(){},getNumberOfTiles:function(){return 0},getOffsetWidth:function(){return 0},getOffsetWidthForTileAtIndex:function(){return 0},registerResizeHandler:function(){},setStyleForTilesElement:function(){}}},enumerable:!0,configurable:!0}),l.prototype.init=function(){this.alignCenter(),this.adapter_.registerResizeHandler(this.resizeHandler_)},l.prototype.destroy=function(){this.adapter_.deregisterResizeHandler(this.resizeHandler_)},l.prototype.alignCenter=function(){var t=this;cancelAnimationFrame(this.resizeFrame_),this.resizeFrame_=requestAnimationFrame(function(){t.alignCenter_(),t.resizeFrame_=0})},l.prototype.alignCenter_=function(){if(0!==this.adapter_.getNumberOfTiles()){var t=this.adapter_.getOffsetWidth(),e=this.adapter_.getOffsetWidthForTileAtIndex(0),n=e*Math.floor(t/e);this.adapter_.setStyleForTilesElement("width",n+"px")}},l);function l(t){var e=s.call(this,o({},l.defaultAdapter,t))||this;return e.resizeFrame_=0,e.resizeHandler_=e.alignCenter.bind(e),e}e.MDCGridListFoundation=u,e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.strings={TILES_SELECTOR:".mdc-grid-list__tiles",TILE_SELECTOR:".mdc-grid-tile"}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),c=n(57),u=(s=a.MDCFoundation,r(l,s),Object.defineProperty(l,"cssClasses",{get:function(){return c.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(l,"strings",{get:function(){return c.strings},enumerable:!0,configurable:!0}),Object.defineProperty(l,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},setAttr:function(){}}},enumerable:!0,configurable:!0}),l.prototype.init=function(){this.adapter_.setAttr(c.strings.ARIA_PRESSED,""+this.isOn())},l.prototype.handleClick=function(){this.toggle(),this.adapter_.notifyChange({isOn:this.isOn()})},l.prototype.isOn=function(){return this.adapter_.hasClass(c.cssClasses.ICON_BUTTON_ON)},l.prototype.toggle=function(t){void 0===t&&(t=!this.isOn()),t?this.adapter_.addClass(c.cssClasses.ICON_BUTTON_ON):this.adapter_.removeClass(c.cssClasses.ICON_BUTTON_ON),this.adapter_.setAttr(c.strings.ARIA_PRESSED,""+t)},l);function l(t){return s.call(this,o({},l.defaultAdapter,t))||this}e.MDCIconButtonToggleFoundation=u,e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cssClasses={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},e.strings={ARIA_PRESSED:"aria-pressed",CHANGE_EVENT:"MDCIconButtonToggle:change"}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),c=n(59),u=(s=a.MDCFoundation,r(l,s),Object.defineProperty(l,"cssClasses",{get:function(){return c.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(l,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!0,configurable:!0}),l.prototype.init=function(){this.adapter_.registerEventHandler("transitionend",this.transitionEndHandler_)},l.prototype.destroy=function(){this.adapter_.deregisterEventHandler("transitionend",this.transitionEndHandler_)},l.prototype.activate=function(){this.adapter_.removeClass(c.cssClasses.LINE_RIPPLE_DEACTIVATING),this.adapter_.addClass(c.cssClasses.LINE_RIPPLE_ACTIVE)},l.prototype.setRippleCenter=function(t){this.adapter_.setStyle("transform-origin",t+"px center")},l.prototype.deactivate=function(){this.adapter_.addClass(c.cssClasses.LINE_RIPPLE_DEACTIVATING)},l.prototype.handleTransitionEnd=function(t){var e=this.adapter_.hasClass(c.cssClasses.LINE_RIPPLE_DEACTIVATING);"opacity"===t.propertyName&&e&&(this.adapter_.removeClass(c.cssClasses.LINE_RIPPLE_ACTIVE),this.adapter_.removeClass(c.cssClasses.LINE_RIPPLE_DEACTIVATING))},l);function l(t){var e=s.call(this,o({},l.defaultAdapter,t))||this;return e.transitionEndHandler_=function(t){return e.handleTransitionEnd(t)},e}e.MDCLineRippleFoundation=u,e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cssClasses={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(15),c=n(0),u=n(61),l=(s=c.MDCFoundation,r(d,s),Object.defineProperty(d,"cssClasses",{get:function(){return u.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(d,"strings",{get:function(){return u.strings},enumerable:!0,configurable:!0}),Object.defineProperty(d,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},getBuffer:function(){return null},getPrimaryBar:function(){return null},hasClass:function(){return!1},removeClass:function(){},setStyle:function(){}}},enumerable:!0,configurable:!0}),d.prototype.init=function(){this.isDeterminate_=!this.adapter_.hasClass(u.cssClasses.INDETERMINATE_CLASS),this.isReversed_=this.adapter_.hasClass(u.cssClasses.REVERSED_CLASS),this.progress_=0,this.buffer_=1},d.prototype.setDeterminate=function(t){this.isDeterminate_=t,this.isDeterminate_?(this.adapter_.removeClass(u.cssClasses.INDETERMINATE_CLASS),this.setScale_(this.adapter_.getPrimaryBar(),this.progress_),this.setScale_(this.adapter_.getBuffer(),this.buffer_)):(this.isReversed_&&(this.adapter_.removeClass(u.cssClasses.REVERSED_CLASS),this.adapter_.forceLayout(),this.adapter_.addClass(u.cssClasses.REVERSED_CLASS)),this.adapter_.addClass(u.cssClasses.INDETERMINATE_CLASS),this.setScale_(this.adapter_.getPrimaryBar(),1),this.setScale_(this.adapter_.getBuffer(),1))},d.prototype.setProgress=function(t){this.progress_=t,this.isDeterminate_&&this.setScale_(this.adapter_.getPrimaryBar(),t)},d.prototype.setBuffer=function(t){this.buffer_=t,this.isDeterminate_&&this.setScale_(this.adapter_.getBuffer(),t)},d.prototype.setReverse=function(t){this.isReversed_=t,this.isDeterminate_||(this.adapter_.removeClass(u.cssClasses.INDETERMINATE_CLASS),this.adapter_.forceLayout(),this.adapter_.addClass(u.cssClasses.INDETERMINATE_CLASS)),this.isReversed_?this.adapter_.addClass(u.cssClasses.REVERSED_CLASS):this.adapter_.removeClass(u.cssClasses.REVERSED_CLASS)},d.prototype.open=function(){this.adapter_.removeClass(u.cssClasses.CLOSED_CLASS)},d.prototype.close=function(){this.adapter_.addClass(u.cssClasses.CLOSED_CLASS)},d.prototype.setScale_=function(t,e){if(t){var n="scaleX("+e+")";this.adapter_.setStyle(t,a.getCorrectPropertyName(window,"transform"),n)}},d);function d(t){return s.call(this,o({},d.defaultAdapter,t))||this}e.MDCLinearProgressFoundation=l,e.default=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cssClasses={CLOSED_CLASS:"mdc-linear-progress--closed",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed"},e.strings={BUFFER_SELECTOR:".mdc-linear-progress__buffer",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"}},function(t,e,n){"use strict";var i;Object.defineProperty(e,"__esModule",{value:!0}),e.getTransformPropertyName=function(t,e){if(void 0===e&&(e=!1),void 0===i||e){var n=t.document.createElement("div");i="transform"in n.style?"transform":"webkitTransform"}return i}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(1),c=n(6),u=n(11),l=o(n(62)),d=(s=a.MDCComponent,r(p,s),p.attachTo=function(t){return new p(t)},p.prototype.initialSyncWithDOM=function(){var e=this,t=this.root_.parentElement;this.anchorElement=t&&t.classList.contains(c.cssClasses.ANCHOR)?t:null,this.root_.classList.contains(c.cssClasses.FIXED)&&this.setFixedPosition(!0),this.handleKeydown_=function(t){return e.foundation_.handleKeydown(t)},this.handleBodyClick_=function(t){return e.foundation_.handleBodyClick(t)},this.registerBodyClickListener_=function(){return document.body.addEventListener("click",e.handleBodyClick_)},this.deregisterBodyClickListener_=function(){return document.body.removeEventListener("click",e.handleBodyClick_)},this.listen("keydown",this.handleKeydown_),this.listen(c.strings.OPENED_EVENT,this.registerBodyClickListener_),this.listen(c.strings.CLOSED_EVENT,this.deregisterBodyClickListener_)},p.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown_),this.unlisten(c.strings.OPENED_EVENT,this.registerBodyClickListener_),this.unlisten(c.strings.CLOSED_EVENT,this.deregisterBodyClickListener_),s.prototype.destroy.call(this)},p.prototype.isOpen=function(){return this.foundation_.isOpen()},p.prototype.open=function(){this.foundation_.open()},p.prototype.close=function(t){void 0===t&&(t=!1),this.foundation_.close(t)},Object.defineProperty(p.prototype,"quickOpen",{set:function(t){this.foundation_.setQuickOpen(t)},enumerable:!0,configurable:!0}),p.prototype.setIsHoisted=function(t){this.foundation_.setIsHoisted(t)},p.prototype.setMenuSurfaceAnchorElement=function(t){this.anchorElement=t},p.prototype.setFixedPosition=function(t){t?this.root_.classList.add(c.cssClasses.FIXED):this.root_.classList.remove(c.cssClasses.FIXED),this.foundation_.setFixedPosition(t)},p.prototype.setAbsolutePosition=function(t,e){this.foundation_.setAbsolutePosition(t,e),this.setIsHoisted(!0)},p.prototype.setAnchorCorner=function(t){this.foundation_.setAnchorCorner(t)},p.prototype.setAnchorMargin=function(t){this.foundation_.setAnchorMargin(t)},p.prototype.getDefaultFoundation=function(){var n=this,t={addClass:function(t){return n.root_.classList.add(t)},removeClass:function(t){return n.root_.classList.remove(t)},hasClass:function(t){return n.root_.classList.contains(t)},hasAnchor:function(){return!!n.anchorElement},notifyClose:function(){return n.emit(u.MDCMenuSurfaceFoundation.strings.CLOSED_EVENT,{})},notifyOpen:function(){return n.emit(u.MDCMenuSurfaceFoundation.strings.OPENED_EVENT,{})},isElementInContainer:function(t){return n.root_.contains(t)},isRtl:function(){return"rtl"===getComputedStyle(n.root_).getPropertyValue("direction")},setTransformOrigin:function(t){var e=l.getTransformPropertyName(window)+"-origin";n.root_.style.setProperty(e,t)},isFocused:function(){return document.activeElement===n.root_},saveFocus:function(){n.previousFocus_=document.activeElement},restoreFocus:function(){n.root_.contains(document.activeElement)&&n.previousFocus_&&n.previousFocus_.focus&&n.previousFocus_.focus()},getInnerDimensions:function(){return{width:n.root_.offsetWidth,height:n.root_.offsetHeight}},getAnchorDimensions:function(){return n.anchorElement?n.anchorElement.getBoundingClientRect():null},getWindowDimensions:function(){return{width:window.innerWidth,height:window.innerHeight}},getBodyDimensions:function(){return{width:document.body.clientWidth,height:document.body.clientHeight}},getWindowScroll:function(){return{x:window.pageXOffset,y:window.pageYOffset}},setPosition:function(t){n.root_.style.left="left"in t?t.left+"px":"",n.root_.style.right="right"in t?t.right+"px":"",n.root_.style.top="top"in t?t.top+"px":"",n.root_.style.bottom="bottom"in t?t.bottom+"px":""},setMaxHeight:function(t){n.root_.style.maxHeight=t}};return new u.MDCMenuSurfaceFoundation(t)},p);function p(){return null!==s&&s.apply(this,arguments)||this}e.MDCMenuSurface=d},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(1),a=n(2),c=n(19),u=n(10),l=n(63),d=n(11),p=n(12),_=n(65),f=(o=s.MDCComponent,r(h,o),h.attachTo=function(t){return new h(t)},h.prototype.initialize=function(t,e){void 0===t&&(t=function(t){return new l.MDCMenuSurface(t)}),void 0===e&&(e=function(t){return new c.MDCList(t)}),this.menuSurfaceFactory_=t,this.listFactory_=e},h.prototype.initialSyncWithDOM=function(){var e=this;this.menuSurface_=this.menuSurfaceFactory_(this.root_);var t=this.root_.querySelector(p.strings.LIST_SELECTOR);t?(this.list_=this.listFactory_(t),this.list_.wrapFocus=!0):this.list_=null,this.handleKeydown_=function(t){return e.foundation_.handleKeydown(t)},this.handleItemAction_=function(t){return e.foundation_.handleItemAction(e.items[t.detail.index])},this.handleMenuSurfaceOpened_=function(){return e.foundation_.handleMenuSurfaceOpened()},this.menuSurface_.listen(d.MDCMenuSurfaceFoundation.strings.OPENED_EVENT,this.handleMenuSurfaceOpened_),this.listen("keydown",this.handleKeydown_),this.listen(u.MDCListFoundation.strings.ACTION_EVENT,this.handleItemAction_)},h.prototype.destroy=function(){this.list_&&this.list_.destroy(),this.menuSurface_.destroy(),this.menuSurface_.unlisten(d.MDCMenuSurfaceFoundation.strings.OPENED_EVENT,this.handleMenuSurfaceOpened_),this.unlisten("keydown",this.handleKeydown_),this.unlisten(u.MDCListFoundation.strings.ACTION_EVENT,this.handleItemAction_),o.prototype.destroy.call(this)},Object.defineProperty(h.prototype,"open",{get:function(){return this.menuSurface_.isOpen()},set:function(t){t?this.menuSurface_.open():this.menuSurface_.close()},enumerable:!0,configurable:!0}),Object.defineProperty(h.prototype,"wrapFocus",{get:function(){return!!this.list_&&this.list_.wrapFocus},set:function(t){this.list_&&(this.list_.wrapFocus=t)},enumerable:!0,configurable:!0}),Object.defineProperty(h.prototype,"items",{get:function(){return this.list_?this.list_.listElements:[]},enumerable:!0,configurable:!0}),Object.defineProperty(h.prototype,"quickOpen",{set:function(t){this.menuSurface_.quickOpen=t},enumerable:!0,configurable:!0}),h.prototype.setDefaultFocusState=function(t){this.foundation_.setDefaultFocusState(t)},h.prototype.setAnchorCorner=function(t){this.menuSurface_.setAnchorCorner(t)},h.prototype.setAnchorMargin=function(t){this.menuSurface_.setAnchorMargin(t)},h.prototype.setSelectedIndex=function(t){this.foundation_.setSelectedIndex(t)},h.prototype.setEnabled=function(t,e){this.foundation_.setEnabled(t,e)},h.prototype.getOptionByIndex=function(t){return t<this.items.length?this.items[t]:null},h.prototype.setFixedPosition=function(t){this.menuSurface_.setFixedPosition(t)},h.prototype.setIsHoisted=function(t){this.menuSurface_.setIsHoisted(t)},h.prototype.setAbsolutePosition=function(t,e){this.menuSurface_.setAbsolutePosition(t,e)},h.prototype.setAnchorElement=function(t){this.menuSurface_.anchorElement=t},h.prototype.getDefaultFoundation=function(){var i=this,t={addClassToElementAtIndex:function(t,e){i.items[t].classList.add(e)},removeClassFromElementAtIndex:function(t,e){i.items[t].classList.remove(e)},addAttributeToElementAtIndex:function(t,e,n){i.items[t].setAttribute(e,n)},removeAttributeFromElementAtIndex:function(t,e){i.items[t].removeAttribute(e)},elementContainsClass:function(t,e){return t.classList.contains(e)},closeSurface:function(t){return i.menuSurface_.close(t)},getElementIndex:function(t){return i.items.indexOf(t)},notifySelected:function(t){return i.emit(p.strings.SELECTED_EVENT,{index:t.index,item:i.items[t.index]})},getMenuItemCount:function(){return i.items.length},focusItemAtIndex:function(t){return i.items[t].focus()},focusListRoot:function(){return i.root_.querySelector(p.strings.LIST_SELECTOR).focus()},isSelectableItemAtIndex:function(t){return!!a.closest(i.items[t],"."+p.cssClasses.MENU_SELECTION_GROUP)},getSelectedSiblingOfItemAtIndex:function(t){var e=a.closest(i.items[t],"."+p.cssClasses.MENU_SELECTION_GROUP).querySelector("."+p.cssClasses.MENU_SELECTED_LIST_ITEM);return e?i.items.indexOf(e):-1}};return new _.MDCMenuFoundation(t)},h);function h(){return null!==o&&o.apply(this,arguments)||this}e.MDCMenu=f},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),c=n(9),u=n(11),l=n(12),d=(s=a.MDCFoundation,r(p,s),Object.defineProperty(p,"cssClasses",{get:function(){return l.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(p,"strings",{get:function(){return l.strings},enumerable:!0,configurable:!0}),Object.defineProperty(p,"numbers",{get:function(){return l.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(p,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!0,configurable:!0}),p.prototype.destroy=function(){this.closeAnimationEndTimerId_&&clearTimeout(this.closeAnimationEndTimerId_),this.adapter_.closeSurface()},p.prototype.handleKeydown=function(t){var e=t.key,n=t.keyCode;"Tab"!==e&&9!==n||this.adapter_.closeSurface(!0)},p.prototype.handleItemAction=function(e){var n=this,t=this.adapter_.getElementIndex(e);t<0||(this.adapter_.notifySelected({index:t}),this.adapter_.closeSurface(),this.closeAnimationEndTimerId_=setTimeout(function(){var t=n.adapter_.getElementIndex(e);n.adapter_.isSelectableItemAtIndex(t)&&n.setSelectedIndex(t)},u.MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION))},p.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState_){case l.DefaultFocusState.FIRST_ITEM:this.adapter_.focusItemAtIndex(0);break;case l.DefaultFocusState.LAST_ITEM:this.adapter_.focusItemAtIndex(this.adapter_.getMenuItemCount()-1);break;case l.DefaultFocusState.NONE:break;default:this.adapter_.focusListRoot()}},p.prototype.setDefaultFocusState=function(t){this.defaultFocusState_=t},p.prototype.setSelectedIndex=function(t){if(this.validatedIndex_(t),!this.adapter_.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var e=this.adapter_.getSelectedSiblingOfItemAtIndex(t);0<=e&&(this.adapter_.removeAttributeFromElementAtIndex(e,l.strings.ARIA_CHECKED_ATTR),this.adapter_.removeClassFromElementAtIndex(e,l.cssClasses.MENU_SELECTED_LIST_ITEM)),this.adapter_.addClassToElementAtIndex(t,l.cssClasses.MENU_SELECTED_LIST_ITEM),this.adapter_.addAttributeToElementAtIndex(t,l.strings.ARIA_CHECKED_ATTR,"true")},p.prototype.setEnabled=function(t,e){this.validatedIndex_(t),e?(this.adapter_.removeClassFromElementAtIndex(t,c.cssClasses.LIST_ITEM_DISABLED_CLASS),this.adapter_.addAttributeToElementAtIndex(t,l.strings.ARIA_DISABLED_ATTR,"false")):(this.adapter_.addClassToElementAtIndex(t,c.cssClasses.LIST_ITEM_DISABLED_CLASS),this.adapter_.addAttributeToElementAtIndex(t,l.strings.ARIA_DISABLED_ATTR,"true"))},p.prototype.validatedIndex_=function(t){var e=this.adapter_.getMenuItemCount();if(!(0<=t&&t<e))throw new Error("MDCMenuFoundation: No list item at specified index.")},p);function p(t){var e=s.call(this,o({},p.defaultAdapter,t))||this;return e.closeAnimationEndTimerId_=0,e.defaultFocusState_=l.DefaultFocusState.LIST_ROOT,e}e.MDCMenuFoundation=d,e.default=d},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),c=n(25),u=(s=a.MDCFoundation,r(l,s),Object.defineProperty(l,"strings",{get:function(){return c.strings},enumerable:!0,configurable:!0}),Object.defineProperty(l,"cssClasses",{get:function(){return c.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(l,"numbers",{get:function(){return c.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(l,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!0,configurable:!0}),l.prototype.notch=function(t){var e=l.cssClasses.OUTLINE_NOTCHED;0<t&&(t+=c.numbers.NOTCH_ELEMENT_PADDING),this.adapter_.setNotchWidthProperty(t),this.adapter_.addClass(e)},l.prototype.closeNotch=function(){var t=l.cssClasses.OUTLINE_NOTCHED;this.adapter_.removeClass(t),this.adapter_.removeNotchWidthProperty()},l);function l(t){return s.call(this,o({},l.defaultAdapter,t))||this}e.MDCNotchedOutlineFoundation=u,e.default=u},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),c=n(68),u=(s=a.MDCFoundation,r(l,s),Object.defineProperty(l,"cssClasses",{get:function(){return c.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(l,"strings",{get:function(){return c.strings},enumerable:!0,configurable:!0}),Object.defineProperty(l,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!0,configurable:!0}),l.prototype.setDisabled=function(t){var e=l.cssClasses.DISABLED;this.adapter_.setNativeControlDisabled(t),t?this.adapter_.addClass(e):this.adapter_.removeClass(e)},l);function l(t){return s.call(this,o({},l.defaultAdapter,t))||this}e.MDCRadioFoundation=u,e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.strings={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"};e.cssClasses={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),c=n(6),u=n(26),l=(s=a.MDCFoundation,r(d,s),Object.defineProperty(d,"cssClasses",{get:function(){return u.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(d,"numbers",{get:function(){return u.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(d,"strings",{get:function(){return u.strings},enumerable:!0,configurable:!0}),Object.defineProperty(d,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},activateBottomLine:function(){},deactivateBottomLine:function(){},getSelectedMenuItem:function(){return null},hasLabel:function(){return!1},floatLabel:function(){},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){},setRippleCenter:function(){},notifyChange:function(){},setSelectedText:function(){},isSelectedTextFocused:function(){return!1},getSelectedTextAttr:function(){return""},setSelectedTextAttr:function(){},openMenu:function(){},closeMenu:function(){},getAnchorElement:function(){return null},setMenuAnchorElement:function(){},setMenuAnchorCorner:function(){},setMenuWrapFocus:function(){},setAttributeAtIndex:function(){},removeAttributeAtIndex:function(){},focusMenuItemAtIndex:function(){},getMenuItemCount:function(){return 0},getMenuItemValues:function(){return[]},getMenuItemTextAtIndex:function(){return""},getMenuItemAttr:function(){return""},addClassAtIndex:function(){},removeClassAtIndex:function(){}}},enumerable:!0,configurable:!0}),d.prototype.getSelectedIndex=function(){return this.selectedIndex_},d.prototype.setSelectedIndex=function(t,e){if(void 0===e&&(e=!1),!(t>=this.adapter_.getMenuItemCount())){var n=this.selectedIndex_;this.selectedIndex_=t,this.selectedIndex_===u.numbers.UNSET_INDEX?this.adapter_.setSelectedText(""):this.adapter_.setSelectedText(this.adapter_.getMenuItemTextAtIndex(this.selectedIndex_).trim()),n!==u.numbers.UNSET_INDEX&&(this.adapter_.removeClassAtIndex(n,u.cssClasses.SELECTED_ITEM_CLASS),this.adapter_.removeAttributeAtIndex(n,u.strings.ARIA_SELECTED_ATTR)),this.selectedIndex_!==u.numbers.UNSET_INDEX&&(this.adapter_.addClassAtIndex(this.selectedIndex_,u.cssClasses.SELECTED_ITEM_CLASS),this.adapter_.setAttributeAtIndex(this.selectedIndex_,u.strings.ARIA_SELECTED_ATTR,"true")),this.layout(),e&&this.adapter_.closeMenu(),this.handleChange()}},d.prototype.setValue=function(t){var e=this.menuItemValues_.indexOf(t);this.setSelectedIndex(e),this.handleChange()},d.prototype.getValue=function(){var t=this.adapter_.getSelectedMenuItem();return t&&this.adapter_.getMenuItemAttr(t,u.strings.VALUE_ATTR)||""},d.prototype.getDisabled=function(){return this.disabled_},d.prototype.setDisabled=function(t){this.disabled_=t,this.disabled_?(this.adapter_.addClass(u.cssClasses.DISABLED),this.adapter_.closeMenu()):this.adapter_.removeClass(u.cssClasses.DISABLED),this.leadingIcon_&&this.leadingIcon_.setDisabled(this.disabled_),this.adapter_.setSelectedTextAttr("tabindex",this.disabled_?"-1":"0"),this.adapter_.setSelectedTextAttr("aria-disabled",this.disabled_.toString())},d.prototype.setHelperTextContent=function(t){this.helperText_&&this.helperText_.setContent(t)},d.prototype.layout=function(){if(this.adapter_.hasLabel()){var t=0<this.getValue().length;this.notchOutline(t)}},d.prototype.handleMenuOpened=function(){if(0!==this.adapter_.getMenuItemValues().length){this.adapter_.addClass(u.cssClasses.ACTIVATED);var t=0<=this.selectedIndex_?this.selectedIndex_:0;this.adapter_.focusMenuItemAtIndex(t)}},d.prototype.handleMenuClosed=function(){this.adapter_.removeClass(u.cssClasses.ACTIVATED),this.isMenuOpen_=!1,this.adapter_.setSelectedTextAttr("aria-expanded","false"),this.adapter_.isSelectedTextFocused()||this.blur_()},d.prototype.handleChange=function(){this.updateLabel_(),this.adapter_.notifyChange(this.getValue()),this.adapter_.hasClass(u.cssClasses.REQUIRED)&&(this.setValid(this.isValid()),this.helperText_&&this.helperText_.setValidity(this.isValid()))},d.prototype.handleMenuItemAction=function(t){this.setSelectedIndex(t,!0)},d.prototype.handleFocus=function(){this.adapter_.addClass(u.cssClasses.FOCUSED),this.adapter_.hasLabel()&&(this.adapter_.floatLabel(!0),this.notchOutline(!0)),this.adapter_.activateBottomLine(),this.helperText_&&this.helperText_.showToScreenReader()},d.prototype.handleBlur=function(){this.isMenuOpen_||this.blur_()},d.prototype.handleClick=function(t){this.isMenuOpen_||(this.adapter_.setRippleCenter(t),this.adapter_.openMenu(),this.isMenuOpen_=!0,this.adapter_.setSelectedTextAttr("aria-expanded","true"))},d.prototype.handleKeydown=function(t){if(!this.isMenuOpen_){var e="Enter"===t.key||13===t.keyCode,n="Space"===t.key||32===t.keyCode,i="ArrowUp"===t.key||38===t.keyCode,r="ArrowDown"===t.key||40===t.keyCode;this.adapter_.hasClass(u.cssClasses.FOCUSED)&&(e||n||i||r)&&(this.adapter_.openMenu(),this.isMenuOpen_=!0,this.adapter_.setSelectedTextAttr("aria-expanded","true"),t.preventDefault())}},d.prototype.notchOutline=function(t){if(this.adapter_.hasOutline()){var e=this.adapter_.hasClass(u.cssClasses.FOCUSED);if(t){var n=u.numbers.LABEL_SCALE,i=this.adapter_.getLabelWidth()*n;this.adapter_.notchOutline(i)}else e||this.adapter_.closeOutline()}},d.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon_&&this.leadingIcon_.setAriaLabel(t)},d.prototype.setLeadingIconContent=function(t){this.leadingIcon_&&this.leadingIcon_.setContent(t)},d.prototype.setValid=function(t){this.adapter_.setSelectedTextAttr("aria-invalid",(!t).toString()),t?this.adapter_.removeClass(u.cssClasses.INVALID):this.adapter_.addClass(u.cssClasses.INVALID)},d.prototype.isValid=function(){return!(this.adapter_.hasClass(u.cssClasses.REQUIRED)&&!this.adapter_.hasClass(u.cssClasses.DISABLED))||this.selectedIndex_!==u.numbers.UNSET_INDEX&&(0!==this.selectedIndex_||Boolean(this.getValue()))},d.prototype.setRequired=function(t){t?this.adapter_.addClass(u.cssClasses.REQUIRED):this.adapter_.removeClass(u.cssClasses.REQUIRED),this.adapter_.setSelectedTextAttr("aria-required",t.toString())},d.prototype.getRequired=function(){return"true"===this.adapter_.getSelectedTextAttr("aria-required")},d.prototype.init=function(){var t=this.adapter_.getAnchorElement();t&&(this.adapter_.setMenuAnchorElement(t),this.adapter_.setMenuAnchorCorner(c.Corner.BOTTOM_START)),this.adapter_.setMenuWrapFocus(!1);var e=this.getValue();e&&this.setValue(e),this.updateLabel_()},d.prototype.updateLabel_=function(){var t=0<this.getValue().length;this.adapter_.hasLabel()&&(this.notchOutline(t),this.adapter_.hasClass(u.cssClasses.FOCUSED)||this.adapter_.floatLabel(t))},d.prototype.blur_=function(){this.adapter_.removeClass(u.cssClasses.FOCUSED),this.updateLabel_(),this.adapter_.deactivateBottomLine(),this.adapter_.hasClass(u.cssClasses.REQUIRED)&&(this.setValid(this.isValid()),this.helperText_&&this.helperText_.setValidity(this.isValid()))},d);function d(t,e){void 0===e&&(e={});var n=s.call(this,o({},d.defaultAdapter,t))||this;return n.selectedIndex_=u.numbers.UNSET_INDEX,n.disabled_=!1,n.isMenuOpen_=!1,n.leadingIcon_=e.leadingIcon,n.helperText_=e.helperText,n.menuItemValues_=n.adapter_.getMenuItemValues(),n}e.MDCSelectFoundation=l,e.default=l},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(1),a=n(71),c=(o=s.MDCComponent,r(u,o),u.attachTo=function(t){return new u(t)},Object.defineProperty(u.prototype,"foundation",{get:function(){return this.foundation_},enumerable:!0,configurable:!0}),u.prototype.getDefaultFoundation=function(){var n=this,t={addClass:function(t){return n.root_.classList.add(t)},removeClass:function(t){return n.root_.classList.remove(t)},hasClass:function(t){return n.root_.classList.contains(t)},setAttr:function(t,e){return n.root_.setAttribute(t,e)},removeAttr:function(t){return n.root_.removeAttribute(t)},setContent:function(t){n.root_.textContent=t}};return new a.MDCSelectHelperTextFoundation(t)},u);function u(){return null!==o&&o.apply(this,arguments)||this}e.MDCSelectHelperText=c},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),c=n(72),u=(s=a.MDCFoundation,r(l,s),Object.defineProperty(l,"cssClasses",{get:function(){return c.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(l,"strings",{get:function(){return c.strings},enumerable:!0,configurable:!0}),Object.defineProperty(l,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!0,configurable:!0}),l.prototype.setContent=function(t){this.adapter_.setContent(t)},l.prototype.setPersistent=function(t){t?this.adapter_.addClass(c.cssClasses.HELPER_TEXT_PERSISTENT):this.adapter_.removeClass(c.cssClasses.HELPER_TEXT_PERSISTENT)},l.prototype.setValidation=function(t){t?this.adapter_.addClass(c.cssClasses.HELPER_TEXT_VALIDATION_MSG):this.adapter_.removeClass(c.cssClasses.HELPER_TEXT_VALIDATION_MSG)},l.prototype.showToScreenReader=function(){this.adapter_.removeAttr(c.strings.ARIA_HIDDEN)},l.prototype.setValidity=function(t){var e=this.adapter_.hasClass(c.cssClasses.HELPER_TEXT_PERSISTENT),n=this.adapter_.hasClass(c.cssClasses.HELPER_TEXT_VALIDATION_MSG)&&!t;n?this.adapter_.setAttr(c.strings.ROLE,"alert"):this.adapter_.removeAttr(c.strings.ROLE),e||n||this.hide_()},l.prototype.hide_=function(){this.adapter_.setAttr(c.strings.ARIA_HIDDEN,"true")},l);function l(t){return s.call(this,o({},l.defaultAdapter,t))||this}e.MDCSelectHelperTextFoundation=u,e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.strings={ARIA_HIDDEN:"aria-hidden",ROLE:"role"};e.cssClasses={HELPER_TEXT_PERSISTENT:"mdc-select-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-select-helper-text--validation-msg"}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(1),a=n(74),c=(o=s.MDCComponent,r(u,o),u.attachTo=function(t){return new u(t)},Object.defineProperty(u.prototype,"foundation",{get:function(){return this.foundation_},enumerable:!0,configurable:!0}),u.prototype.getDefaultFoundation=function(){var n=this,t={getAttr:function(t){return n.root_.getAttribute(t)},setAttr:function(t,e){return n.root_.setAttribute(t,e)},removeAttr:function(t){return n.root_.removeAttribute(t)},setContent:function(t){n.root_.textContent=t},registerInteractionHandler:function(t,e){return n.listen(t,e)},deregisterInteractionHandler:function(t,e){return n.unlisten(t,e)},notifyIconAction:function(){return n.emit(a.MDCSelectIconFoundation.strings.ICON_EVENT,{},!0)}};return new a.MDCSelectIconFoundation(t)},u);function u(){return null!==o&&o.apply(this,arguments)||this}e.MDCSelectIcon=c},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),c=n(75),u=["click","keydown"],l=(s=a.MDCFoundation,r(d,s),Object.defineProperty(d,"strings",{get:function(){return c.strings},enumerable:!0,configurable:!0}),Object.defineProperty(d,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!0,configurable:!0}),d.prototype.init=function(){var e=this;this.savedTabIndex_=this.adapter_.getAttr("tabindex"),u.forEach(function(t){e.adapter_.registerInteractionHandler(t,e.interactionHandler_)})},d.prototype.destroy=function(){var e=this;u.forEach(function(t){e.adapter_.deregisterInteractionHandler(t,e.interactionHandler_)})},d.prototype.setDisabled=function(t){this.savedTabIndex_&&(t?(this.adapter_.setAttr("tabindex","-1"),this.adapter_.removeAttr("role")):(this.adapter_.setAttr("tabindex",this.savedTabIndex_),this.adapter_.setAttr("role",c.strings.ICON_ROLE)))},d.prototype.setAriaLabel=function(t){this.adapter_.setAttr("aria-label",t)},d.prototype.setContent=function(t){this.adapter_.setContent(t)},d.prototype.handleInteraction=function(t){var e="Enter"===t.key||13===t.keyCode;"click"!==t.type&&!e||this.adapter_.notifyIconAction()},d);function d(t){var e=s.call(this,o({},d.defaultAdapter,t))||this;return e.savedTabIndex_=null,e.interactionHandler_=function(t){return e.handleInteraction(t)},e}e.MDCSelectIconFoundation=l,e.default=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.strings={ICON_EVENT:"MDCSelect:icon",ICON_ROLE:"button"}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(15),c=n(0),u=n(27),l=["mousedown","pointerdown","touchstart"],d=["mouseup","pointerup","touchend"],p={mousedown:"mousemove",pointerdown:"pointermove",touchstart:"touchmove"},_="ArrowDown",f="ArrowLeft",h="ArrowRight",y="ArrowUp",C="End",g="Home",m="PageDown",v="PageUp",E=(s=c.MDCFoundation,r(b,s),Object.defineProperty(b,"cssClasses",{get:function(){return u.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(b,"strings",{get:function(){return u.strings},enumerable:!0,configurable:!0}),Object.defineProperty(b,"numbers",{get:function(){return u.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(b,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},getAttribute:function(){return null},setAttribute:function(){},removeAttribute:function(){},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabIndex:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerThumbContainerInteractionHandler:function(){},deregisterThumbContainerInteractionHandler:function(){},registerBodyInteractionHandler:function(){},deregisterBodyInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},notifyInput:function(){},notifyChange:function(){},setThumbContainerStyleProperty:function(){},setTrackStyleProperty:function(){},setMarkerValue:function(){},setTrackMarkers:function(){},isRTL:function(){return!1}}},enumerable:!0,configurable:!0}),b.prototype.init=function(){var e=this;this.isDiscrete_=this.adapter_.hasClass(u.cssClasses.IS_DISCRETE),this.hasTrackMarker_=this.adapter_.hasClass(u.cssClasses.HAS_TRACK_MARKER),l.forEach(function(t){e.adapter_.registerInteractionHandler(t,e.interactionStartHandler_),e.adapter_.registerThumbContainerInteractionHandler(t,e.thumbContainerPointerHandler_)}),this.adapter_.registerInteractionHandler("keydown",this.keydownHandler_),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_),this.adapter_.registerResizeHandler(this.resizeHandler_),this.layout(),this.isDiscrete_&&0===this.getStep()&&(this.step_=1)},b.prototype.destroy=function(){var e=this;l.forEach(function(t){e.adapter_.deregisterInteractionHandler(t,e.interactionStartHandler_),e.adapter_.deregisterThumbContainerInteractionHandler(t,e.thumbContainerPointerHandler_)}),this.adapter_.deregisterInteractionHandler("keydown",this.keydownHandler_),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.deregisterResizeHandler(this.resizeHandler_)},b.prototype.setupTrackMarker=function(){this.isDiscrete_&&this.hasTrackMarker_&&0!==this.getStep()&&this.adapter_.setTrackMarkers(this.getStep(),this.getMax(),this.getMin())},b.prototype.layout=function(){this.rect_=this.adapter_.computeBoundingRect(),this.updateUIForCurrentValue_()},b.prototype.getValue=function(){return this.value_},b.prototype.setValue=function(t){this.setValue_(t,!1)},b.prototype.getMax=function(){return this.max_},b.prototype.setMax=function(t){if(t<this.min_)throw new Error("Cannot set max to be less than the slider's minimum value");this.max_=t,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(u.strings.ARIA_VALUEMAX,String(this.max_)),this.setupTrackMarker()},b.prototype.getMin=function(){return this.min_},b.prototype.setMin=function(t){if(t>this.max_)throw new Error("Cannot set min to be greater than the slider's maximum value");this.min_=t,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(u.strings.ARIA_VALUEMIN,String(this.min_)),this.setupTrackMarker()},b.prototype.getStep=function(){return this.step_},b.prototype.setStep=function(t){if(t<0)throw new Error("Step cannot be set to a negative number");this.isDiscrete_&&("number"!=typeof t||t<1)&&(t=1),this.step_=t,this.setValue_(this.value_,!1,!0),this.setupTrackMarker()},b.prototype.isDisabled=function(){return this.disabled_},b.prototype.setDisabled=function(t){this.disabled_=t,this.toggleClass_(u.cssClasses.DISABLED,this.disabled_),this.disabled_?(this.savedTabIndex_=this.adapter_.getTabIndex(),this.adapter_.setAttribute(u.strings.ARIA_DISABLED,"true"),this.adapter_.removeAttribute("tabindex")):(this.adapter_.removeAttribute(u.strings.ARIA_DISABLED),isNaN(this.savedTabIndex_)||this.adapter_.setAttribute("tabindex",String(this.savedTabIndex_)))},b.prototype.handleDown_=function(t){var n=this;if(!this.disabled_){this.preventFocusState_=!0,this.setInTransit_(!this.handlingThumbTargetEvt_),this.handlingThumbTargetEvt_=!1,this.setActive_(!0);var i=function(t){n.handleMove_(t)},r=p[t.type],e=function e(){n.handleUp_(),n.adapter_.deregisterBodyInteractionHandler(r,i),d.forEach(function(t){return n.adapter_.deregisterBodyInteractionHandler(t,e)})};this.adapter_.registerBodyInteractionHandler(r,i),d.forEach(function(t){return n.adapter_.registerBodyInteractionHandler(t,e)}),this.setValueFromEvt_(t)}},b.prototype.handleMove_=function(t){t.preventDefault(),this.setValueFromEvt_(t)},b.prototype.handleUp_=function(){this.setActive_(!1),this.adapter_.notifyChange()},b.prototype.getPageX_=function(t){return t.targetTouches&&0<t.targetTouches.length?t.targetTouches[0].pageX:t.pageX},b.prototype.setValueFromEvt_=function(t){var e=this.getPageX_(t),n=this.computeValueFromPageX_(e);this.setValue_(n,!0)},b.prototype.computeValueFromPageX_=function(t){var e=this.max_,n=this.min_,i=(t-this.rect_.left)/this.rect_.width;return this.adapter_.isRTL()&&(i=1-i),n+i*(e-n)},b.prototype.handleKeydown_=function(t){var e=this.getKeyId_(t),n=this.getValueForKeyId_(e);isNaN(n)||(t.preventDefault(),this.adapter_.addClass(u.cssClasses.FOCUS),this.setValue_(n,!0),this.adapter_.notifyChange())},b.prototype.getKeyId_=function(t){return t.key===f||37===t.keyCode?f:t.key===h||39===t.keyCode?h:t.key===y||38===t.keyCode?y:t.key===_||40===t.keyCode?_:t.key===g||36===t.keyCode?g:t.key===C||35===t.keyCode?C:t.key===v||33===t.keyCode?v:t.key===m||34===t.keyCode?m:""},b.prototype.getValueForKeyId_=function(t){var e=this.max_,n=this.min_,i=this.step_||(e-n)/100;switch(!this.adapter_.isRTL()||t!==f&&t!==h||(i=-i),t){case f:case _:return this.value_-i;case h:case y:return this.value_+i;case g:return this.min_;case C:return this.max_;case v:return this.value_+i*u.numbers.PAGE_FACTOR;case m:return this.value_-i*u.numbers.PAGE_FACTOR;default:return NaN}},b.prototype.handleFocus_=function(){this.preventFocusState_||this.adapter_.addClass(u.cssClasses.FOCUS)},b.prototype.handleBlur_=function(){this.preventFocusState_=!1,this.adapter_.removeClass(u.cssClasses.FOCUS)},b.prototype.setValue_=function(t,e,n){if(void 0===n&&(n=!1),t!==this.value_||n){var i=this.min_,r=this.max_,o=t===i||t===r;this.step_&&!o&&(t=this.quantize_(t)),t<i?t=i:r<t&&(t=r),this.value_=t,this.adapter_.setAttribute(u.strings.ARIA_VALUENOW,String(this.value_)),this.updateUIForCurrentValue_(),e&&(this.adapter_.notifyInput(),this.isDiscrete_&&this.adapter_.setMarkerValue(t))}},b.prototype.quantize_=function(t){return Math.round(t/this.step_)*this.step_},b.prototype.updateUIForCurrentValue_=function(){var e=this,t=this.max_,n=this.min_,i=(this.value_-n)/(t-n),r=i*this.rect_.width;this.adapter_.isRTL()&&(r=this.rect_.width-r);var o=a.getCorrectPropertyName(window,"transform"),s=a.getCorrectEventName(window,"transitionend");this.inTransit_&&this.adapter_.registerThumbContainerInteractionHandler(s,function t(){e.setInTransit_(!1),e.adapter_.deregisterThumbContainerInteractionHandler(s,t)}),requestAnimationFrame(function(){e.adapter_.setThumbContainerStyleProperty(o,"translateX("+r+"px) translateX(-50%)"),e.adapter_.setTrackStyleProperty(o,"scaleX("+i+")")})},b.prototype.setActive_=function(t){this.active_=t,this.toggleClass_(u.cssClasses.ACTIVE,this.active_)},b.prototype.setInTransit_=function(t){this.inTransit_=t,this.toggleClass_(u.cssClasses.IN_TRANSIT,this.inTransit_)},b.prototype.toggleClass_=function(t,e){e?this.adapter_.addClass(t):this.adapter_.removeClass(t)},b);function b(t){var e=s.call(this,o({},b.defaultAdapter,t))||this;return e.savedTabIndex_=NaN,e.active_=!1,e.inTransit_=!1,e.isDiscrete_=!1,e.hasTrackMarker_=!1,e.handlingThumbTargetEvt_=!1,e.min_=0,e.max_=100,e.step_=0,e.value_=0,e.disabled_=!1,e.preventFocusState_=!1,e.thumbContainerPointerHandler_=function(){return e.handlingThumbTargetEvt_=!0},e.interactionStartHandler_=function(t){return e.handleDown_(t)},e.keydownHandler_=function(t){return e.handleKeydown_(t)},e.focusHandler_=function(){return e.handleFocus_()},e.blurHandler_=function(){return e.handleBlur_()},e.resizeHandler_=function(){return e.layout()},e}e.MDCSliderFoundation=E,e.default=E},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(13),r=i.numbers.ARIA_LIVE_DELAY_MS,o=i.strings.ARIA_LIVE_LABEL_TEXT_ATTR;e.announce=function(t,e){void 0===e&&(e=t);var n=t.getAttribute("aria-live"),i=e.textContent.trim();i&&n&&(t.setAttribute("aria-live","off"),e.textContent="",e.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>',e.setAttribute(o,i),setTimeout(function(){t.setAttribute("aria-live",n),e.removeAttribute(o),e.textContent=i},r))}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),c=n(13),u=c.cssClasses.OPENING,l=c.cssClasses.OPEN,d=c.cssClasses.CLOSING,p=c.strings.REASON_ACTION,_=c.strings.REASON_DISMISS,f=(s=a.MDCFoundation,r(h,s),Object.defineProperty(h,"cssClasses",{get:function(){return c.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(h,"strings",{get:function(){return c.strings},enumerable:!0,configurable:!0}),Object.defineProperty(h,"numbers",{get:function(){return c.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(h,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!0,configurable:!0}),h.prototype.destroy=function(){this.clearAutoDismissTimer_(),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=0,this.adapter_.removeClass(u),this.adapter_.removeClass(l),this.adapter_.removeClass(d)},h.prototype.open=function(){var e=this;this.clearAutoDismissTimer_(),this.isOpen_=!0,this.adapter_.notifyOpening(),this.adapter_.removeClass(d),this.adapter_.addClass(u),this.adapter_.announce(),this.runNextAnimationFrame_(function(){e.adapter_.addClass(l),e.animationTimer_=setTimeout(function(){var t=e.getTimeoutMs();e.handleAnimationTimerEnd_(),e.adapter_.notifyOpened(),t!==c.numbers.INDETERMINATE&&(e.autoDismissTimer_=setTimeout(function(){e.close(_)},t))},c.numbers.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},h.prototype.close=function(t){var e=this;void 0===t&&(t=""),this.isOpen_&&(cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,this.clearAutoDismissTimer_(),this.isOpen_=!1,this.adapter_.notifyClosing(t),this.adapter_.addClass(c.cssClasses.CLOSING),this.adapter_.removeClass(c.cssClasses.OPEN),this.adapter_.removeClass(c.cssClasses.OPENING),clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout(function(){e.handleAnimationTimerEnd_(),e.adapter_.notifyClosed(t)},c.numbers.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},h.prototype.isOpen=function(){return this.isOpen_},h.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs_},h.prototype.setTimeoutMs=function(t){var e=c.numbers.MIN_AUTO_DISMISS_TIMEOUT_MS,n=c.numbers.MAX_AUTO_DISMISS_TIMEOUT_MS,i=c.numbers.INDETERMINATE;if(!(t===c.numbers.INDETERMINATE||t<=n&&e<=t))throw new Error("\n        timeoutMs must be an integer in the range "+e+"–"+n+"\n        (or "+i+" to disable), but got '"+t+"'");this.autoDismissTimeoutMs_=t},h.prototype.getCloseOnEscape=function(){return this.closeOnEscape_},h.prototype.setCloseOnEscape=function(t){this.closeOnEscape_=t},h.prototype.handleKeyDown=function(t){"Escape"!==t.key&&27!==t.keyCode||!this.getCloseOnEscape()||this.close(_)},h.prototype.handleActionButtonClick=function(t){this.close(p)},h.prototype.handleActionIconClick=function(t){this.close(_)},h.prototype.clearAutoDismissTimer_=function(){clearTimeout(this.autoDismissTimer_),this.autoDismissTimer_=0},h.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter_.removeClass(c.cssClasses.OPENING),this.adapter_.removeClass(c.cssClasses.CLOSING)},h.prototype.runNextAnimationFrame_=function(t){var e=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame(function(){e.animationFrame_=0,clearTimeout(e.animationTimer_),e.animationTimer_=setTimeout(t,0)})},h);function h(t){var e=s.call(this,o({},h.defaultAdapter,t))||this;return e.isOpen_=!1,e.animationFrame_=0,e.animationTimer_=0,e.autoDismissTimer_=0,e.autoDismissTimeoutMs_=c.numbers.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,e.closeOnEscape_=!0,e}e.MDCSnackbarFoundation=f,e.default=f},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),c=n(80),u=(s=a.MDCFoundation,r(l,s),Object.defineProperty(l,"strings",{get:function(){return c.strings},enumerable:!0,configurable:!0}),Object.defineProperty(l,"cssClasses",{get:function(){return c.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(l,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlChecked:function(){},setNativeControlDisabled:function(){}}},enumerable:!0,configurable:!0}),l.prototype.setChecked=function(t){this.adapter_.setNativeControlChecked(t),this.updateCheckedStyling_(t)},l.prototype.setDisabled=function(t){this.adapter_.setNativeControlDisabled(t),t?this.adapter_.addClass(c.cssClasses.DISABLED):this.adapter_.removeClass(c.cssClasses.DISABLED)},l.prototype.handleChange=function(t){var e=t.target;this.updateCheckedStyling_(e.checked)},l.prototype.updateCheckedStyling_=function(t){t?this.adapter_.addClass(c.cssClasses.CHECKED):this.adapter_.removeClass(c.cssClasses.CHECKED)},l);function l(t){return s.call(this,o({},l.defaultAdapter,t))||this}e.MDCSwitchFoundation=u,e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cssClasses={CHECKED:"mdc-switch--checked",DISABLED:"mdc-switch--disabled"};e.strings={NATIVE_CONTROL_SELECTOR:".mdc-switch__native-control",RIPPLE_SURFACE_SELECTOR:".mdc-switch__thumb-underlay"}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(1),c=n(5),u=n(2),l=n(82),d=o(n(83)),p=(s=a.MDCComponent,r(_,s),_.attachTo=function(t){return new _(t)},_.prototype.initialize=function(){this.area_=this.root_.querySelector(l.MDCTabScrollerFoundation.strings.AREA_SELECTOR),this.content_=this.root_.querySelector(l.MDCTabScrollerFoundation.strings.CONTENT_SELECTOR)},_.prototype.initialSyncWithDOM=function(){var e=this;this.handleInteraction_=function(){return e.foundation_.handleInteraction()},this.handleTransitionEnd_=function(t){return e.foundation_.handleTransitionEnd(t)},this.area_.addEventListener("wheel",this.handleInteraction_,c.applyPassive()),this.area_.addEventListener("touchstart",this.handleInteraction_,c.applyPassive()),this.area_.addEventListener("pointerdown",this.handleInteraction_,c.applyPassive()),this.area_.addEventListener("mousedown",this.handleInteraction_,c.applyPassive()),this.area_.addEventListener("keydown",this.handleInteraction_,c.applyPassive()),this.content_.addEventListener("transitionend",this.handleTransitionEnd_)},_.prototype.destroy=function(){s.prototype.destroy.call(this),this.area_.removeEventListener("wheel",this.handleInteraction_,c.applyPassive()),this.area_.removeEventListener("touchstart",this.handleInteraction_,c.applyPassive()),this.area_.removeEventListener("pointerdown",this.handleInteraction_,c.applyPassive()),this.area_.removeEventListener("mousedown",this.handleInteraction_,c.applyPassive()),this.area_.removeEventListener("keydown",this.handleInteraction_,c.applyPassive()),this.content_.removeEventListener("transitionend",this.handleTransitionEnd_)},_.prototype.getDefaultFoundation=function(){var n=this,t={eventTargetMatchesSelector:function(t,e){return u.matches(t,e)},addClass:function(t){return n.root_.classList.add(t)},removeClass:function(t){return n.root_.classList.remove(t)},addScrollAreaClass:function(t){return n.area_.classList.add(t)},setScrollAreaStyleProperty:function(t,e){return n.area_.style.setProperty(t,e)},setScrollContentStyleProperty:function(t,e){return n.content_.style.setProperty(t,e)},getScrollContentStyleValue:function(t){return window.getComputedStyle(n.content_).getPropertyValue(t)},setScrollAreaScrollLeft:function(t){return n.area_.scrollLeft=t},getScrollAreaScrollLeft:function(){return n.area_.scrollLeft},getScrollContentOffsetWidth:function(){return n.content_.offsetWidth},getScrollAreaOffsetWidth:function(){return n.area_.offsetWidth},computeScrollAreaClientRect:function(){return n.area_.getBoundingClientRect()},computeScrollContentClientRect:function(){return n.content_.getBoundingClientRect()},computeHorizontalScrollbarHeight:function(){return d.computeHorizontalScrollbarHeight(document)}};return new l.MDCTabScrollerFoundation(t)},_.prototype.getScrollPosition=function(){return this.foundation_.getScrollPosition()},_.prototype.getScrollContentWidth=function(){return this.content_.offsetWidth},_.prototype.incrementScroll=function(t){this.foundation_.incrementScroll(t)},_.prototype.scrollTo=function(t){this.foundation_.scrollTo(t)},_);function _(){return null!==s&&s.apply(this,arguments)||this}e.MDCTabScroller=p},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},s=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,r,o=n.call(t),s=[];try{for(;(void 0===e||0<e--)&&!(i=o.next()).done;)s.push(i.value)}catch(t){r={error:t}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return s};Object.defineProperty(e,"__esModule",{value:!0});var a,c=n(0),u=n(28),l=n(152),d=n(153),p=n(154),_=(a=c.MDCFoundation,r(f,a),Object.defineProperty(f,"cssClasses",{get:function(){return u.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(f,"strings",{get:function(){return u.strings},enumerable:!0,configurable:!0}),Object.defineProperty(f,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!0,configurable:!0}),f.prototype.init=function(){var t=this.adapter_.computeHorizontalScrollbarHeight();this.adapter_.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter_.addScrollAreaClass(f.cssClasses.SCROLL_AREA_SCROLL)},f.prototype.getScrollPosition=function(){if(this.isRTL_())return this.computeCurrentScrollPositionRTL_();var t=this.calculateCurrentTranslateX_();return this.adapter_.getScrollAreaScrollLeft()-t},f.prototype.handleInteraction=function(){this.isAnimating_&&this.stopScrollAnimation_()},f.prototype.handleTransitionEnd=function(t){var e=t.target;this.isAnimating_&&this.adapter_.eventTargetMatchesSelector(e,f.strings.CONTENT_SELECTOR)&&(this.isAnimating_=!1,this.adapter_.removeClass(f.cssClasses.ANIMATING))},f.prototype.incrementScroll=function(t){0!==t&&this.animate_(this.getIncrementScrollOperation_(t))},f.prototype.incrementScrollImmediate=function(t){if(0!==t){var e=this.getIncrementScrollOperation_(t);0!==e.scrollDelta&&(this.stopScrollAnimation_(),this.adapter_.setScrollAreaScrollLeft(e.finalScrollPosition))}},f.prototype.scrollTo=function(t){if(this.isRTL_())return this.scrollToRTL_(t);this.scrollTo_(t)},f.prototype.getRTLScroller=function(){return this.rtlScrollerInstance_||(this.rtlScrollerInstance_=this.rtlScrollerFactory_()),this.rtlScrollerInstance_},f.prototype.calculateCurrentTranslateX_=function(){var t=this.adapter_.getScrollContentStyleValue("transform");if("none"===t)return 0;var e=/\((.+?)\)/.exec(t);if(!e)return 0;var n=e[1],i=s(n.split(","),6),r=(i[0],i[1],i[2],i[3],i[4]);return i[5],parseFloat(r)},f.prototype.clampScrollValue_=function(t){var e=this.calculateScrollEdges_();return Math.min(Math.max(e.left,t),e.right)},f.prototype.computeCurrentScrollPositionRTL_=function(){var t=this.calculateCurrentTranslateX_();return this.getRTLScroller().getScrollPositionRTL(t)},f.prototype.calculateScrollEdges_=function(){return{left:0,right:this.adapter_.getScrollContentOffsetWidth()-this.adapter_.getScrollAreaOffsetWidth()}},f.prototype.scrollTo_=function(t){var e=this.getScrollPosition(),n=this.clampScrollValue_(t),i=n-e;this.animate_({finalScrollPosition:n,scrollDelta:i})},f.prototype.scrollToRTL_=function(t){var e=this.getRTLScroller().scrollToRTL(t);this.animate_(e)},f.prototype.getIncrementScrollOperation_=function(t){if(this.isRTL_())return this.getRTLScroller().incrementScrollRTL(t);var e=this.getScrollPosition(),n=t+e,i=this.clampScrollValue_(n);return{finalScrollPosition:i,scrollDelta:i-e}},f.prototype.animate_=function(t){var e=this;0!==t.scrollDelta&&(this.stopScrollAnimation_(),this.adapter_.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter_.setScrollContentStyleProperty("transform","translateX("+t.scrollDelta+"px)"),this.adapter_.computeScrollAreaClientRect(),requestAnimationFrame(function(){e.adapter_.addClass(f.cssClasses.ANIMATING),e.adapter_.setScrollContentStyleProperty("transform","none")}),this.isAnimating_=!0)},f.prototype.stopScrollAnimation_=function(){this.isAnimating_=!1;var t=this.getAnimatingScrollPosition_();this.adapter_.removeClass(f.cssClasses.ANIMATING),this.adapter_.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter_.setScrollAreaScrollLeft(t)},f.prototype.getAnimatingScrollPosition_=function(){var t=this.calculateCurrentTranslateX_(),e=this.adapter_.getScrollAreaScrollLeft();return this.isRTL_()?this.getRTLScroller().getAnimatingScrollPosition(e,t):e-t},f.prototype.rtlScrollerFactory_=function(){var t=this.adapter_.getScrollAreaScrollLeft();this.adapter_.setScrollAreaScrollLeft(t-1);var e=this.adapter_.getScrollAreaScrollLeft();if(e<0)return this.adapter_.setScrollAreaScrollLeft(t),new d.MDCTabScrollerRTLNegative(this.adapter_);var n=this.adapter_.computeScrollAreaClientRect(),i=this.adapter_.computeScrollContentClientRect(),r=Math.round(i.right-n.right);return this.adapter_.setScrollAreaScrollLeft(t),r===e?new p.MDCTabScrollerRTLReverse(this.adapter_):new l.MDCTabScrollerRTLDefault(this.adapter_)},f.prototype.isRTL_=function(){return"rtl"===this.adapter_.getScrollContentStyleValue("direction")},f);function f(t){var e=a.call(this,o({},f.defaultAdapter,t))||this;return e.isAnimating_=!1,e}e.MDCTabScrollerFoundation=_,e.default=_},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(28);e.computeHorizontalScrollbarHeight=function(t,e){if(void 0===e&&(e=!0),e&&void 0!==r)return r;var n=t.createElement("div");n.classList.add(o.cssClasses.SCROLL_TEST),t.body.appendChild(n);var i=n.offsetHeight-n.clientHeight;return t.body.removeChild(n),e&&(r=i),i}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=this&&this.__assign||function(){return(s=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o,a=n(1),c=n(3),u=n(4),l=n(85),d=n(30),p=(o=a.MDCComponent,r(_,o),_.attachTo=function(t){return new _(t)},_.prototype.initialize=function(t,e){void 0===t&&(t=function(t,e){return new c.MDCRipple(t,e)}),void 0===e&&(e=function(t){return new l.MDCTabIndicator(t)}),this.id=this.root_.id;var n=this.root_.querySelector(d.MDCTabFoundation.strings.RIPPLE_SELECTOR),i=s({},c.MDCRipple.createAdapter(this),{addClass:function(t){return n.classList.add(t)},removeClass:function(t){return n.classList.remove(t)},updateCssVariable:function(t,e){return n.style.setProperty(t,e)}}),r=new u.MDCRippleFoundation(i);this.ripple_=t(this.root_,r);var o=this.root_.querySelector(d.MDCTabFoundation.strings.TAB_INDICATOR_SELECTOR);this.tabIndicator_=e(o),this.content_=this.root_.querySelector(d.MDCTabFoundation.strings.CONTENT_SELECTOR)},_.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick_=function(){return t.foundation_.handleClick()},this.listen("click",this.handleClick_)},_.prototype.destroy=function(){this.unlisten("click",this.handleClick_),this.ripple_.destroy(),o.prototype.destroy.call(this)},_.prototype.getDefaultFoundation=function(){var n=this,t={setAttr:function(t,e){return n.root_.setAttribute(t,e)},addClass:function(t){return n.root_.classList.add(t)},removeClass:function(t){return n.root_.classList.remove(t)},hasClass:function(t){return n.root_.classList.contains(t)},activateIndicator:function(t){return n.tabIndicator_.activate(t)},deactivateIndicator:function(){return n.tabIndicator_.deactivate()},notifyInteracted:function(){return n.emit(d.MDCTabFoundation.strings.INTERACTED_EVENT,{tabId:n.id},!0)},getOffsetLeft:function(){return n.root_.offsetLeft},getOffsetWidth:function(){return n.root_.offsetWidth},getContentOffsetLeft:function(){return n.content_.offsetLeft},getContentOffsetWidth:function(){return n.content_.offsetWidth},focus:function(){return n.root_.focus()}};return new d.MDCTabFoundation(t)},Object.defineProperty(_.prototype,"active",{get:function(){return this.foundation_.isActive()},enumerable:!0,configurable:!0}),Object.defineProperty(_.prototype,"focusOnActivate",{set:function(t){this.foundation_.setFocusOnActivate(t)},enumerable:!0,configurable:!0}),_.prototype.activate=function(t){this.foundation_.activate(t)},_.prototype.deactivate=function(){this.foundation_.deactivate()},_.prototype.computeIndicatorClientRect=function(){return this.tabIndicator_.computeContentClientRect()},_.prototype.computeDimensions=function(){return this.foundation_.computeDimensions()},_.prototype.focus=function(){this.root_.focus()},_);function _(){return null!==o&&o.apply(this,arguments)||this}e.MDCTab=p},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(1),a=n(86),c=n(14),u=n(88),l=(o=s.MDCComponent,r(d,o),d.attachTo=function(t){return new d(t)},d.prototype.initialize=function(){this.content_=this.root_.querySelector(c.MDCTabIndicatorFoundation.strings.CONTENT_SELECTOR)},d.prototype.computeContentClientRect=function(){return this.foundation_.computeContentClientRect()},d.prototype.getDefaultFoundation=function(){var n=this,t={addClass:function(t){return n.root_.classList.add(t)},removeClass:function(t){return n.root_.classList.remove(t)},computeContentClientRect:function(){return n.content_.getBoundingClientRect()},setContentStyleProperty:function(t,e){return n.content_.style.setProperty(t,e)}};return this.root_.classList.contains(c.MDCTabIndicatorFoundation.cssClasses.FADE)?new a.MDCFadingTabIndicatorFoundation(t):new u.MDCSlidingTabIndicatorFoundation(t)},d.prototype.activate=function(t){this.foundation_.activate(t)},d.prototype.deactivate=function(){this.foundation_.deactivate()},d);function d(){return null!==o&&o.apply(this,arguments)||this}e.MDCTabIndicator=l},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(14),a=(o=s.MDCTabIndicatorFoundation,r(c,o),c.prototype.activate=function(){this.adapter_.addClass(s.MDCTabIndicatorFoundation.cssClasses.ACTIVE)},c.prototype.deactivate=function(){this.adapter_.removeClass(s.MDCTabIndicatorFoundation.cssClasses.ACTIVE)},c);function c(){return null!==o&&o.apply(this,arguments)||this}e.MDCFadingTabIndicatorFoundation=a,e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cssClasses={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"};e.strings={CONTENT_SELECTOR:".mdc-tab-indicator__content"}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(14),a=(o=s.MDCTabIndicatorFoundation,r(c,o),c.prototype.activate=function(t){if(t){var e=this.computeContentClientRect(),n=t.width/e.width,i=t.left-e.left;this.adapter_.addClass(s.MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION),this.adapter_.setContentStyleProperty("transform","translateX("+i+"px) scaleX("+n+")"),this.computeContentClientRect(),this.adapter_.removeClass(s.MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION),this.adapter_.addClass(s.MDCTabIndicatorFoundation.cssClasses.ACTIVE),this.adapter_.setContentStyleProperty("transform","")}else this.adapter_.addClass(s.MDCTabIndicatorFoundation.cssClasses.ACTIVE)},c.prototype.deactivate=function(){this.adapter_.removeClass(s.MDCTabIndicatorFoundation.cssClasses.ACTIVE)},c);function c(){return null!==o&&o.apply(this,arguments)||this}e.MDCSlidingTabIndicatorFoundation=a,e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cssClasses={ACTIVE:"mdc-tab--active"};e.strings={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s=n(0),u=n(91),a=new Set;a.add(u.strings.ARROW_LEFT_KEY),a.add(u.strings.ARROW_RIGHT_KEY),a.add(u.strings.END_KEY),a.add(u.strings.HOME_KEY),a.add(u.strings.ENTER_KEY),a.add(u.strings.SPACE_KEY);var c=new Map;c.set(u.numbers.ARROW_LEFT_KEYCODE,u.strings.ARROW_LEFT_KEY),c.set(u.numbers.ARROW_RIGHT_KEYCODE,u.strings.ARROW_RIGHT_KEY),c.set(u.numbers.END_KEYCODE,u.strings.END_KEY),c.set(u.numbers.HOME_KEYCODE,u.strings.HOME_KEY),c.set(u.numbers.ENTER_KEYCODE,u.strings.ENTER_KEY),c.set(u.numbers.SPACE_KEYCODE,u.strings.SPACE_KEY);var l,d=(l=s.MDCFoundation,r(p,l),Object.defineProperty(p,"strings",{get:function(){return u.strings},enumerable:!0,configurable:!0}),Object.defineProperty(p,"numbers",{get:function(){return u.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(p,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!0,configurable:!0}),p.prototype.setUseAutomaticActivation=function(t){this.useAutomaticActivation_=t},p.prototype.activateTab=function(t){var e,n=this.adapter_.getPreviousActiveTabIndex();this.indexIsInRange_(t)&&t!==n&&(-1!==n&&(this.adapter_.deactivateTabAtIndex(n),e=this.adapter_.getTabIndicatorClientRectAtIndex(n)),this.adapter_.activateTabAtIndex(t,e),this.scrollIntoView(t),this.adapter_.notifyTabActivated(t))},p.prototype.handleKeyDown=function(t){var e=this.getKeyFromEvent_(t);if(void 0!==e)if(this.isActivationKey_(e)||t.preventDefault(),this.useAutomaticActivation_){if(this.isActivationKey_(e))return;var n=this.determineTargetFromKey_(this.adapter_.getPreviousActiveTabIndex(),e);this.adapter_.setActiveTab(n),this.scrollIntoView(n)}else{var i=this.adapter_.getFocusedTabIndex();this.isActivationKey_(e)?this.adapter_.setActiveTab(i):(n=this.determineTargetFromKey_(i,e),this.adapter_.focusTabAtIndex(n),this.scrollIntoView(n))}},p.prototype.handleTabInteraction=function(t){this.adapter_.setActiveTab(this.adapter_.getIndexOfTabById(t.detail.tabId))},p.prototype.scrollIntoView=function(t){if(this.indexIsInRange_(t))return 0===t?this.adapter_.scrollTo(0):t===this.adapter_.getTabListLength()-1?this.adapter_.scrollTo(this.adapter_.getScrollContentWidth()):this.isRTL_()?this.scrollIntoViewRTL_(t):void this.scrollIntoView_(t)},p.prototype.determineTargetFromKey_=function(t,e){var n=this.isRTL_(),i=this.adapter_.getTabListLength()-1,r=e===u.strings.END_KEY,o=e===u.strings.ARROW_LEFT_KEY&&!n||e===u.strings.ARROW_RIGHT_KEY&&n,s=e===u.strings.ARROW_RIGHT_KEY&&!n||e===u.strings.ARROW_LEFT_KEY&&n,a=t;return r?a=i:o?a-=1:s?a+=1:a=0,a<0?a=i:i<a&&(a=0),a},p.prototype.calculateScrollIncrement_=function(t,e,n,i){var r=this.adapter_.getTabDimensionsAtIndex(e),o=r.contentLeft-n-i,s=r.contentRight-n-u.numbers.EXTRA_SCROLL_AMOUNT,a=o+u.numbers.EXTRA_SCROLL_AMOUNT;return e<t?Math.min(s,0):Math.max(a,0)},p.prototype.calculateScrollIncrementRTL_=function(t,e,n,i,r){var o=this.adapter_.getTabDimensionsAtIndex(e),s=r-o.contentLeft-n,a=r-o.contentRight-n-i+u.numbers.EXTRA_SCROLL_AMOUNT,c=s-u.numbers.EXTRA_SCROLL_AMOUNT;return t<e?Math.max(a,0):Math.min(c,0)},p.prototype.findAdjacentTabIndexClosestToEdge_=function(t,e,n,i){var r=e.rootLeft-n,o=e.rootRight-n-i,s=r+o;return r<0||s<0?t-1:0<o||0<s?t+1:-1},p.prototype.findAdjacentTabIndexClosestToEdgeRTL_=function(t,e,n,i,r){var o=r-e.rootLeft-i-n,s=r-e.rootRight-n,a=o+s;return 0<o||0<a?t+1:s<0||a<0?t-1:-1},p.prototype.getKeyFromEvent_=function(t){return a.has(t.key)?t.key:c.get(t.keyCode)},p.prototype.isActivationKey_=function(t){return t===u.strings.SPACE_KEY||t===u.strings.ENTER_KEY},p.prototype.indexIsInRange_=function(t){return 0<=t&&t<this.adapter_.getTabListLength()},p.prototype.isRTL_=function(){return this.adapter_.isRTL()},p.prototype.scrollIntoView_=function(t){var e=this.adapter_.getScrollPosition(),n=this.adapter_.getOffsetWidth(),i=this.adapter_.getTabDimensionsAtIndex(t),r=this.findAdjacentTabIndexClosestToEdge_(t,i,e,n);if(this.indexIsInRange_(r)){var o=this.calculateScrollIncrement_(t,r,e,n);this.adapter_.incrementScroll(o)}},p.prototype.scrollIntoViewRTL_=function(t){var e=this.adapter_.getScrollPosition(),n=this.adapter_.getOffsetWidth(),i=this.adapter_.getTabDimensionsAtIndex(t),r=this.adapter_.getScrollContentWidth(),o=this.findAdjacentTabIndexClosestToEdgeRTL_(t,i,e,n,r);if(this.indexIsInRange_(o)){var s=this.calculateScrollIncrementRTL_(t,o,e,n,r);this.adapter_.incrementScroll(s)}},p);function p(t){var e=l.call(this,o({},p.defaultAdapter,t))||this;return e.useAutomaticActivation_=!1,e}e.MDCTabBarFoundation=d,e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.strings={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"};e.numbers={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(1),a=n(31),c=(o=s.MDCComponent,r(u,o),u.attachTo=function(t){return new u(t)},Object.defineProperty(u.prototype,"foundation",{get:function(){return this.foundation_},enumerable:!0,configurable:!0}),u.prototype.getDefaultFoundation=function(){var e=this,t={setContent:function(t){e.root_.textContent=t}};return new a.MDCTextFieldCharacterCounterFoundation(t)},u);function u(){return null!==o&&o.apply(this,arguments)||this}e.MDCTextFieldCharacterCounter=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={ROOT:"mdc-text-field-character-counter"},r={ROOT_SELECTOR:"."+(e.cssClasses=i).ROOT};e.strings=r},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),c=n(32),u=["mousedown","touchstart"],l=["click","keydown"],d=(s=a.MDCFoundation,r(p,s),Object.defineProperty(p,"cssClasses",{get:function(){return c.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(p,"strings",{get:function(){return c.strings},enumerable:!0,configurable:!0}),Object.defineProperty(p,"numbers",{get:function(){return c.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(p.prototype,"shouldAlwaysFloat_",{get:function(){var t=this.getNativeInput_().type;return 0<=c.ALWAYS_FLOAT_TYPES.indexOf(t)},enumerable:!0,configurable:!0}),Object.defineProperty(p.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat_||this.isFocused_||!!this.getValue()||this.isBadInput_()},enumerable:!0,configurable:!0}),Object.defineProperty(p.prototype,"shouldShake",{get:function(){return!this.isFocused_&&!this.isValid()&&!!this.getValue()},enumerable:!0,configurable:!0}),Object.defineProperty(p,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!0,configurable:!0}),p.prototype.init=function(){var e=this;this.adapter_.isFocused()?this.inputFocusHandler_():this.adapter_.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter_.floatLabel(!0)),this.adapter_.registerInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter_.registerInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter_.registerInputInteractionHandler("input",this.inputInputHandler_),u.forEach(function(t){e.adapter_.registerInputInteractionHandler(t,e.setPointerXOffset_)}),l.forEach(function(t){e.adapter_.registerTextFieldInteractionHandler(t,e.textFieldInteractionHandler_)}),this.validationObserver_=this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_),this.setCharacterCounter_(this.getValue().length)},p.prototype.destroy=function(){var e=this;this.adapter_.deregisterInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter_.deregisterInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter_.deregisterInputInteractionHandler("input",this.inputInputHandler_),u.forEach(function(t){e.adapter_.deregisterInputInteractionHandler(t,e.setPointerXOffset_)}),l.forEach(function(t){e.adapter_.deregisterTextFieldInteractionHandler(t,e.textFieldInteractionHandler_)}),this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_)},p.prototype.handleTextFieldInteraction=function(){var t=this.adapter_.getNativeInput();t&&t.disabled||(this.receivedUserInput_=!0)},p.prototype.handleValidationAttributeChange=function(t){var e=this;t.some(function(t){return-1<c.VALIDATION_ATTR_WHITELIST.indexOf(t)&&(e.styleValidity_(!0),!0)}),-1<t.indexOf("maxlength")&&this.setCharacterCounter_(this.getValue().length)},p.prototype.notchOutline=function(t){if(this.adapter_.hasOutline())if(t){var e=this.adapter_.hasClass(c.cssClasses.DENSE)?c.numbers.DENSE_LABEL_SCALE:c.numbers.LABEL_SCALE,n=this.adapter_.getLabelWidth()*e;this.adapter_.notchOutline(n)}else this.adapter_.closeOutline()},p.prototype.activateFocus=function(){this.isFocused_=!0,this.styleFocused_(this.isFocused_),this.adapter_.activateLineRipple(),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake)),this.helperText_&&this.helperText_.showToScreenReader()},p.prototype.setTransformOrigin=function(t){var e=t.touches,n=e?e[0]:t,i=n.target.getBoundingClientRect(),r=n.clientX-i.left;this.adapter_.setLineRippleTransformOrigin(r)},p.prototype.handleInput=function(){this.autoCompleteFocus(),this.setCharacterCounter_(this.getValue().length)},p.prototype.autoCompleteFocus=function(){this.receivedUserInput_||this.activateFocus()},p.prototype.deactivateFocus=function(){this.isFocused_=!1,this.adapter_.deactivateLineRipple();var t=this.isValid();this.styleValidity_(t),this.styleFocused_(this.isFocused_),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput_=!1)},p.prototype.getValue=function(){return this.getNativeInput_().value},p.prototype.setValue=function(t){this.getValue()!==t&&(this.getNativeInput_().value=t),this.setCharacterCounter_(t.length);var e=this.isValid();this.styleValidity_(e),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake))},p.prototype.isValid=function(){return this.useNativeValidation_?this.isNativeInputValid_():this.isValid_},p.prototype.setValid=function(t){this.isValid_=t,this.styleValidity_(t);var e=!t&&!this.isFocused_&&!!this.getValue();this.adapter_.hasLabel()&&this.adapter_.shakeLabel(e)},p.prototype.setUseNativeValidation=function(t){this.useNativeValidation_=t},p.prototype.isDisabled=function(){return this.getNativeInput_().disabled},p.prototype.setDisabled=function(t){this.getNativeInput_().disabled=t,this.styleDisabled_(t)},p.prototype.setHelperTextContent=function(t){this.helperText_&&this.helperText_.setContent(t)},p.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon_&&this.leadingIcon_.setAriaLabel(t)},p.prototype.setLeadingIconContent=function(t){this.leadingIcon_&&this.leadingIcon_.setContent(t)},p.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon_&&this.trailingIcon_.setAriaLabel(t)},p.prototype.setTrailingIconContent=function(t){this.trailingIcon_&&this.trailingIcon_.setContent(t)},p.prototype.setCharacterCounter_=function(t){if(this.characterCounter_){var e=this.getNativeInput_().maxLength;if(-1===e)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter_.setCounterValue(t,e)}},p.prototype.isBadInput_=function(){return this.getNativeInput_().validity.badInput||!1},p.prototype.isNativeInputValid_=function(){return this.getNativeInput_().validity.valid},p.prototype.styleValidity_=function(t){var e=p.cssClasses.INVALID;t?this.adapter_.removeClass(e):this.adapter_.addClass(e),this.helperText_&&this.helperText_.setValidity(t)},p.prototype.styleFocused_=function(t){var e=p.cssClasses.FOCUSED;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)},p.prototype.styleDisabled_=function(t){var e=p.cssClasses,n=e.DISABLED,i=e.INVALID;t?(this.adapter_.addClass(n),this.adapter_.removeClass(i)):this.adapter_.removeClass(n),this.leadingIcon_&&this.leadingIcon_.setDisabled(t),this.trailingIcon_&&this.trailingIcon_.setDisabled(t)},p.prototype.getNativeInput_=function(){return(this.adapter_?this.adapter_.getNativeInput():null)||{disabled:!1,maxLength:-1,type:"input",validity:{badInput:!1,valid:!0},value:""}},p);function p(t,e){void 0===e&&(e={});var n=s.call(this,o({},p.defaultAdapter,t))||this;return n.isFocused_=!1,n.receivedUserInput_=!1,n.isValid_=!0,n.useNativeValidation_=!0,n.helperText_=e.helperText,n.characterCounter_=e.characterCounter,n.leadingIcon_=e.leadingIcon,n.trailingIcon_=e.trailingIcon,n.inputFocusHandler_=function(){return n.activateFocus()},n.inputBlurHandler_=function(){return n.deactivateFocus()},n.inputInputHandler_=function(){return n.handleInput()},n.setPointerXOffset_=function(t){return n.setTransformOrigin(t)},n.textFieldInteractionHandler_=function(){return n.handleTextFieldInteraction()},n.validationAttributeChangeHandler_=function(t){return n.handleValidationAttributeChange(t)},n}e.MDCTextFieldFoundation=d,e.default=d},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(1),a=n(33),c=(o=s.MDCComponent,r(u,o),u.attachTo=function(t){return new u(t)},Object.defineProperty(u.prototype,"foundation",{get:function(){return this.foundation_},enumerable:!0,configurable:!0}),u.prototype.getDefaultFoundation=function(){var n=this,t={addClass:function(t){return n.root_.classList.add(t)},removeClass:function(t){return n.root_.classList.remove(t)},hasClass:function(t){return n.root_.classList.contains(t)},setAttr:function(t,e){return n.root_.setAttribute(t,e)},removeAttr:function(t){return n.root_.removeAttribute(t)},setContent:function(t){n.root_.textContent=t}};return new a.MDCTextFieldHelperTextFoundation(t)},u);function u(){return null!==o&&o.apply(this,arguments)||this}e.MDCTextFieldHelperText=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},r={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+(e.cssClasses=i).ROOT};e.strings=r},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(1),a=n(98),c=(o=s.MDCComponent,r(u,o),u.attachTo=function(t){return new u(t)},Object.defineProperty(u.prototype,"foundation",{get:function(){return this.foundation_},enumerable:!0,configurable:!0}),u.prototype.getDefaultFoundation=function(){var n=this,t={getAttr:function(t){return n.root_.getAttribute(t)},setAttr:function(t,e){return n.root_.setAttribute(t,e)},removeAttr:function(t){return n.root_.removeAttribute(t)},setContent:function(t){n.root_.textContent=t},registerInteractionHandler:function(t,e){return n.listen(t,e)},deregisterInteractionHandler:function(t,e){return n.unlisten(t,e)},notifyIconAction:function(){return n.emit(a.MDCTextFieldIconFoundation.strings.ICON_EVENT,{},!0)}};return new a.MDCTextFieldIconFoundation(t)},u);function u(){return null!==o&&o.apply(this,arguments)||this}e.MDCTextFieldIcon=c},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(0),c=n(99),u=["click","keydown"],l=(s=a.MDCFoundation,r(d,s),Object.defineProperty(d,"strings",{get:function(){return c.strings},enumerable:!0,configurable:!0}),Object.defineProperty(d,"cssClasses",{get:function(){return c.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(d,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!0,configurable:!0}),d.prototype.init=function(){var e=this;this.savedTabIndex_=this.adapter_.getAttr("tabindex"),u.forEach(function(t){e.adapter_.registerInteractionHandler(t,e.interactionHandler_)})},d.prototype.destroy=function(){var e=this;u.forEach(function(t){e.adapter_.deregisterInteractionHandler(t,e.interactionHandler_)})},d.prototype.setDisabled=function(t){this.savedTabIndex_&&(t?(this.adapter_.setAttr("tabindex","-1"),this.adapter_.removeAttr("role")):(this.adapter_.setAttr("tabindex",this.savedTabIndex_),this.adapter_.setAttr("role",c.strings.ICON_ROLE)))},d.prototype.setAriaLabel=function(t){this.adapter_.setAttr("aria-label",t)},d.prototype.setContent=function(t){this.adapter_.setContent(t)},d.prototype.handleInteraction=function(t){var e="Enter"===t.key||13===t.keyCode;"click"!==t.type&&!e||this.adapter_.notifyIconAction()},d);function d(t){var e=s.call(this,o({},d.defaultAdapter,t))||this;return e.savedTabIndex_=null,e.interactionHandler_=function(t){return e.handleInteraction(t)},e}e.MDCTextFieldIconFoundation=l,e.default=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.strings={ICON_EVENT:"MDCTextField:icon",ICON_ROLE:"button"};e.cssClasses={ROOT:"mdc-text-field__icon"}},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(7),a=n(34),c=(o=a.MDCTopAppBarFoundation,r(u,o),u.prototype.handleTargetScroll=function(){this.adapter_.getViewportScrollY()<=0?this.wasScrolled_&&(this.adapter_.removeClass(s.cssClasses.FIXED_SCROLLED_CLASS),this.wasScrolled_=!1):this.wasScrolled_||(this.adapter_.addClass(s.cssClasses.FIXED_SCROLLED_CLASS),this.wasScrolled_=!0)},u);function u(){var t=null!==o&&o.apply(this,arguments)||this;return t.wasScrolled_=!1,t}e.MDCFixedTopAppBarFoundation=c,e.default=c},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(7),a=n(35),c=(o=a.MDCTopAppBarBaseFoundation,r(u,o),Object.defineProperty(u.prototype,"isCollapsed",{get:function(){return this.isCollapsed_},enumerable:!0,configurable:!0}),u.prototype.init=function(){o.prototype.init.call(this),0<this.adapter_.getTotalActionItems()&&this.adapter_.addClass(s.cssClasses.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter_.hasClass(s.cssClasses.SHORT_COLLAPSED_CLASS))},u.prototype.setAlwaysCollapsed=function(t){this.isAlwaysCollapsed_=!!t,this.isAlwaysCollapsed_?this.collapse_():this.maybeCollapseBar_()},u.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed_},u.prototype.handleTargetScroll=function(){this.maybeCollapseBar_()},u.prototype.maybeCollapseBar_=function(){this.isAlwaysCollapsed_||(this.adapter_.getViewportScrollY()<=0?this.isCollapsed_&&this.uncollapse_():this.isCollapsed_||this.collapse_())},u.prototype.uncollapse_=function(){this.adapter_.removeClass(s.cssClasses.SHORT_COLLAPSED_CLASS),this.isCollapsed_=!1},u.prototype.collapse_=function(){this.adapter_.addClass(s.cssClasses.SHORT_COLLAPSED_CLASS),this.isCollapsed_=!0},u);function u(t){var e=o.call(this,t)||this;return e.isCollapsed_=!1,e.isAlwaysCollapsed_=!1,e}e.MDCShortTopAppBarFoundation=c,e.default=c},function(t,e,n){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=i(n(103));e.autoInit=o.default;var s=r(n(105));e.base=s;var a=r(n(106));e.checkbox=a;var c=r(n(107));e.chips=c;var u=r(n(111));e.dataTable=u;var l=r(n(113));e.dialog=l;var d=r(n(118));e.dom=d;var p=r(n(119));e.drawer=p;var _=r(n(123));e.floatingLabel=_;var f=r(n(124));e.formField=f;var h=r(n(126));e.gridList=h;var y=r(n(128));e.iconButton=y;var C=r(n(130));e.lineRipple=C;var g=r(n(131));e.linearProgress=g;var m=r(n(133));e.list=m;var v=r(n(134));e.menuSurface=v;var E=r(n(135));e.menu=E;var b=r(n(136));e.notchedOutline=b;var T=r(n(137));e.radio=T;var O=r(n(139));e.ripple=O;var A=r(n(140));e.select=A;var I=r(n(144));e.slider=I;var S=r(n(146));e.snackbar=S;var L=r(n(148));e.switchControl=L;var R=r(n(150));e.tabBar=R;var D=r(n(155));e.tabIndicator=D;var M=r(n(156));e.tabScroller=M;var P=r(n(157));e.tab=P;var N=r(n(158));e.textField=N;var w=r(n(163));e.topAppBar=w,o.default.register("MDCCheckbox",a.MDCCheckbox),o.default.register("MDCChip",c.MDCChip),o.default.register("MDCChipSet",c.MDCChipSet),o.default.register("MDCDataTable",u.MDCDataTable),o.default.register("MDCDialog",l.MDCDialog),o.default.register("MDCDrawer",p.MDCDrawer),o.default.register("MDCFloatingLabel",_.MDCFloatingLabel),o.default.register("MDCFormField",f.MDCFormField),o.default.register("MDCGridList",h.MDCGridList),o.default.register("MDCIconButtonToggle",y.MDCIconButtonToggle),o.default.register("MDCLineRipple",C.MDCLineRipple),o.default.register("MDCLinearProgress",g.MDCLinearProgress),o.default.register("MDCList",m.MDCList),o.default.register("MDCMenu",E.MDCMenu),o.default.register("MDCMenuSurface",v.MDCMenuSurface),o.default.register("MDCNotchedOutline",b.MDCNotchedOutline),o.default.register("MDCRadio",T.MDCRadio),o.default.register("MDCRipple",O.MDCRipple),o.default.register("MDCSelect",A.MDCSelect),o.default.register("MDCSlider",I.MDCSlider),o.default.register("MDCSnackbar",S.MDCSnackbar),o.default.register("MDCSwitch",L.MDCSwitch),o.default.register("MDCTabBar",R.MDCTabBar),o.default.register("MDCTextField",N.MDCTextField),o.default.register("MDCTopAppBar",w.MDCTopAppBar)},function(t,e,n){"use strict";var d=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(104),p=i.strings.AUTO_INIT_ATTR,_=i.strings.AUTO_INIT_STATE_ATTR,f=i.strings.INITIALIZED_STATE,h={},r=console.warn.bind(console);function o(t){var e,n;void 0===t&&(t=document);var i=[],r=[].slice.call(t.querySelectorAll("["+p+"]"));r=r.filter(function(t){return t.getAttribute(_)!==f});try{for(var o=d(r),s=o.next();!s.done;s=o.next()){var a=s.value,c=a.getAttribute(p);if(!c)throw new Error("(mdc-auto-init) Constructor name must be given.");var u=h[c];if("function"!=typeof u)throw new Error("(mdc-auto-init) Could not find constructor in registry for "+c);var l=u.attachTo(a);Object.defineProperty(a,c,{configurable:!0,enumerable:!1,value:l,writable:!1}),i.push(l),a.setAttribute(_,f)}}catch(t){e={error:t}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}return function(t,e,n){var i;void 0===n&&(n=!1),"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:n,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),document.dispatchEvent(i)}("MDCAutoInit:End",{}),i}(e.mdcAutoInit=o).register=function(t,e,n){if(void 0===n&&(n=r),"function"!=typeof e)throw new Error("(mdc-auto-init) Invalid Constructor value: "+e+". Expected function.");var i=h[t];i&&n("(mdc-auto-init) Overriding registration for "+t+" with "+e+". Was: "+i),h[t]=e},o.deregister=function(t){delete h[t]},o.deregisterAll=function(){Object.keys(h).forEach(this.deregister,this)},e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.strings={AUTO_INIT_ATTR:"data-mdc-auto-init",AUTO_INIT_STATE_ATTR:"data-mdc-auto-init-state",INITIALIZED_STATE:"initialized"}},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(1)),i(e(0))},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(36)),i(e(39)),i(e(38))},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(108)),i(e(109))},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(40)),i(e(17));var r=e(8);n.chipCssClasses=r.cssClasses,n.chipStrings=r.strings},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(110)),i(e(41));var r=e(42);n.chipSetCssClasses=r.cssClasses,n.chipSetStrings=r.strings},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(1),a=n(40),c=n(17),u=n(41),l=c.MDCChipFoundation.strings,d=l.INTERACTION_EVENT,p=l.SELECTION_EVENT,_=l.REMOVAL_EVENT,f=l.NAVIGATION_EVENT,h=u.MDCChipSetFoundation.strings.CHIP_SELECTOR,y=0,C=(o=s.MDCComponent,r(g,o),g.attachTo=function(t){return new g(t)},Object.defineProperty(g.prototype,"chips",{get:function(){return this.chips_.slice()},enumerable:!0,configurable:!0}),Object.defineProperty(g.prototype,"selectedChipIds",{get:function(){return this.foundation_.getSelectedChipIds()},enumerable:!0,configurable:!0}),g.prototype.initialize=function(t){void 0===t&&(t=function(t){return new a.MDCChip(t)}),this.chipFactory_=t,this.chips_=this.instantiateChips_(this.chipFactory_)},g.prototype.initialSyncWithDOM=function(){var e=this;this.chips_.forEach(function(t){t.id&&t.selected&&e.foundation_.select(t.id)}),this.handleChipInteraction_=function(t){return e.foundation_.handleChipInteraction(t.detail.chipId)},this.handleChipSelection_=function(t){e.foundation_.handleChipSelection(t.detail.chipId,t.detail.selected,t.detail.shouldIgnore)},this.handleChipRemoval_=function(t){return e.foundation_.handleChipRemoval(t.detail.chipId)},this.handleChipNavigation_=function(t){return e.foundation_.handleChipNavigation(t.detail.chipId,t.detail.key,t.detail.source)},this.listen(d,this.handleChipInteraction_),this.listen(p,this.handleChipSelection_),this.listen(_,this.handleChipRemoval_),this.listen(f,this.handleChipNavigation_)},g.prototype.destroy=function(){this.chips_.forEach(function(t){t.destroy()}),this.unlisten(d,this.handleChipInteraction_),this.unlisten(p,this.handleChipSelection_),this.unlisten(_,this.handleChipRemoval_),this.unlisten(f,this.handleChipNavigation_),o.prototype.destroy.call(this)},g.prototype.addChip=function(t){t.id=t.id||"mdc-chip-"+ ++y,this.chips_.push(this.chipFactory_(t))},g.prototype.getDefaultFoundation=function(){var i=this,t={focusChipPrimaryActionAtIndex:function(t){i.chips_[t].focusPrimaryAction()},focusChipTrailingActionAtIndex:function(t){i.chips_[t].focusTrailingAction()},getChipListCount:function(){return i.chips_.length},getIndexOfChipById:function(t){return i.findChipIndex_(t)},hasClass:function(t){return i.root_.classList.contains(t)},isRTL:function(){return"rtl"===window.getComputedStyle(i.root_).getPropertyValue("direction")},removeChipAtIndex:function(t){0<=t&&t<i.chips_.length&&(i.chips_[t].destroy(),i.chips_[t].remove(),i.chips_.splice(t,1))},removeFocusFromChipAtIndex:function(t){i.chips_[t].removeFocus()},selectChipAtIndex:function(t,e,n){0<=t&&t<i.chips_.length&&i.chips_[t].setSelectedFromChipSet(e,n)}};return new u.MDCChipSetFoundation(t)},g.prototype.instantiateChips_=function(e){return[].slice.call(this.root_.querySelectorAll(h)).map(function(t){return t.id=t.id||"mdc-chip-"+ ++y,e(t)})},g.prototype.findChipIndex_=function(t){for(var e=0;e<this.chips_.length;e++)if(this.chips_[e].id===t)return e;return-1},g);function g(){return null!==o&&o.apply(this,arguments)||this}e.MDCChipSet=C},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(112)),i(e(43)),i(e(18))},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(1),a=n(36),c=n(2),u=n(18),l=n(43),d=(o=s.MDCComponent,r(p,o),p.attachTo=function(t){return new p(t)},p.prototype.initialize=function(t){void 0===t&&(t=function(t){return new a.MDCCheckbox(t)}),this.checkboxFactory_=t},p.prototype.initialSyncWithDOM=function(){var e=this;this.headerRow_=this.root_.querySelector("."+u.cssClasses.HEADER_ROW),this.handleHeaderRowCheckboxChange_=function(){return e.foundation_.handleHeaderRowCheckboxChange()},this.headerRow_.addEventListener("change",this.handleHeaderRowCheckboxChange_),this.content_=this.root_.querySelector("."+u.cssClasses.CONTENT),this.handleRowCheckboxChange_=function(t){return e.foundation_.handleRowCheckboxChange(t)},this.content_.addEventListener("change",this.handleRowCheckboxChange_),this.layout()},p.prototype.layout=function(){this.foundation_.layout()},p.prototype.getRows=function(){return this.foundation_.getRows()},p.prototype.getSelectedRowIds=function(){return this.foundation_.getSelectedRowIds()},p.prototype.setSelectedRowIds=function(t){this.foundation_.setSelectedRowIds(t)},p.prototype.destroy=function(){this.headerRow_.removeEventListener("change",this.handleHeaderRowCheckboxChange_),this.content_.removeEventListener("change",this.handleRowCheckboxChange_),this.headerRowCheckbox_.destroy(),this.rowCheckboxList_.forEach(function(t){return t.destroy()})},p.prototype.getDefaultFoundation=function(){var i=this,t={addClassAtRowIndex:function(t,e){return i.getRows()[t].classList.add(e)},getRowCount:function(){return i.getRows().length},getRowElements:function(){return[].slice.call(i.root_.querySelectorAll(u.strings.ROW_SELECTOR))},getRowIdAtIndex:function(t){return i.getRows()[t].getAttribute(u.strings.DATA_ROW_ID_ATTR)},getRowIndexByChildElement:function(t){return i.getRows().indexOf(c.closest(t,u.strings.ROW_SELECTOR))},getSelectedRowCount:function(){return i.root_.querySelectorAll(u.strings.ROW_SELECTED_SELECTOR).length},isCheckboxAtRowIndexChecked:function(t){return i.rowCheckboxList_[t].checked},isHeaderRowCheckboxChecked:function(){return i.headerRowCheckbox_.checked},isRowsSelectable:function(){return!!i.root_.querySelector(u.strings.ROW_CHECKBOX_SELECTOR)},notifyRowSelectionChanged:function(t){i.emit(u.events.ROW_SELECTION_CHANGED,{row:i.getRowByIndex_(t.rowIndex),rowId:i.getRowIdByIndex_(t.rowIndex),rowIndex:t.rowIndex,selected:t.selected},!0)},notifySelectedAll:function(){return i.emit(u.events.SELECTED_ALL,{},!0)},notifyUnselectedAll:function(){return i.emit(u.events.UNSELECTED_ALL,{},!0)},registerHeaderRowCheckbox:function(){i.headerRowCheckbox_&&i.headerRowCheckbox_.destroy();var t=i.root_.querySelector(u.strings.HEADER_ROW_CHECKBOX_SELECTOR);i.headerRowCheckbox_=i.checkboxFactory_(t)},registerRowCheckboxes:function(){i.rowCheckboxList_&&i.rowCheckboxList_.forEach(function(t){return t.destroy()}),i.rowCheckboxList_=[],i.getRows().forEach(function(t){var e=i.checkboxFactory_(t.querySelector(u.strings.ROW_CHECKBOX_SELECTOR));i.rowCheckboxList_.push(e)})},removeClassAtRowIndex:function(t,e){i.getRows()[t].classList.remove(e)},setAttributeAtRowIndex:function(t,e,n){i.getRows()[t].setAttribute(e,n)},setHeaderRowCheckboxChecked:function(t){i.headerRowCheckbox_.checked=t},setHeaderRowCheckboxIndeterminate:function(t){i.headerRowCheckbox_.indeterminate=t},setRowCheckboxCheckedAtIndex:function(t,e){i.rowCheckboxList_[t].checked=e}};return new l.MDCDataTableFoundation(t)},p.prototype.getRowByIndex_=function(t){return this.getRows()[t]},p.prototype.getRowIdByIndex_=function(t){return this.getRowByIndex_(t).getAttribute(u.strings.DATA_ROW_ID_ATTR)},p);function p(){return null!==o&&o.apply(this,arguments)||this}e.MDCDataTable=d},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(n,"__esModule",{value:!0});var o=r(e(44));n.util=o,i(e(117)),i(e(46)),i(e(45))},function(t,e,n){var i,g=n(115),m=n(116),v=(i=[],{activateTrap:function(t){if(0<i.length){var e=i[i.length-1];e!==t&&e.pause()}var n=i.indexOf(t);-1===n||i.splice(n,1),i.push(t)},deactivateTrap:function(t){var e=i.indexOf(t);-1!==e&&i.splice(e,1),0<i.length&&i[i.length-1].unpause()}});function E(t){return setTimeout(t,0)}t.exports=function(t,e){var i=document,n="string"==typeof t?i.querySelector(t):t,r=m({returnFocusOnDeactivate:!0,escapeDeactivates:!0},e),o={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},s={activate:function(t){if(o.active)return;y(),o.active=!0,o.paused=!1,o.nodeFocusedBeforeActivation=i.activeElement;var e=t&&t.onActivate?t.onActivate:r.onActivate;e&&e();return c(),s},deactivate:a,pause:function(){if(o.paused||!o.active)return;o.paused=!0,u()},unpause:function(){if(!o.paused||!o.active)return;o.paused=!1,y(),c()}};return s;function a(t){if(o.active){u(),o.active=!1,o.paused=!1,v.deactivateTrap(s);var e=t&&void 0!==t.onDeactivate?t.onDeactivate:r.onDeactivate;return e&&e(),(t&&void 0!==t.returnFocus?t.returnFocus:r.returnFocusOnDeactivate)&&E(function(){C(o.nodeFocusedBeforeActivation)}),s}}function c(){if(o.active)return v.activateTrap(s),E(function(){C(d())}),i.addEventListener("focusin",_,!0),i.addEventListener("mousedown",p,{capture:!0,passive:!1}),i.addEventListener("touchstart",p,{capture:!0,passive:!1}),i.addEventListener("click",h,{capture:!0,passive:!1}),i.addEventListener("keydown",f,{capture:!0,passive:!1}),s}function u(){if(o.active)return i.removeEventListener("focusin",_,!0),i.removeEventListener("mousedown",p,!0),i.removeEventListener("touchstart",p,!0),i.removeEventListener("click",h,!0),i.removeEventListener("keydown",f,!0),s}function l(t){var e=r[t],n=e;if(!e)return null;if("string"==typeof e&&!(n=i.querySelector(e)))throw new Error("`"+t+"` refers to no known node");if("function"==typeof e&&!(n=e()))throw new Error("`"+t+"` did not return a node");return n}function d(){var t;if(!(t=null!==l("initialFocus")?l("initialFocus"):n.contains(i.activeElement)?i.activeElement:o.firstTabbableNode||l("fallbackFocus")))throw new Error("You can't have a focus-trap without at least one focusable element");return t}function p(t){n.contains(t.target)||(r.clickOutsideDeactivates?a({returnFocus:!g.isFocusable(t.target)}):t.preventDefault())}function _(t){n.contains(t.target)||t.target instanceof Document||(t.stopImmediatePropagation(),C(o.mostRecentlyFocusedNode||d()))}function f(t){if(!1!==r.escapeDeactivates&&function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}(t))return t.preventDefault(),void a();!function(t){return"Tab"===t.key||9===t.keyCode}(t)||function(t){if(y(),t.shiftKey&&t.target===o.firstTabbableNode)return t.preventDefault(),C(o.lastTabbableNode);if(!t.shiftKey&&t.target===o.lastTabbableNode)t.preventDefault(),C(o.firstTabbableNode)}(t)}function h(t){r.clickOutsideDeactivates||n.contains(t.target)||(t.preventDefault(),t.stopImmediatePropagation())}function y(){var t=g(n);o.firstTabbableNode=t[0]||d(),o.lastTabbableNode=t[t.length-1]||d()}function C(t){t!==i.activeElement&&(t&&t.focus?(t.focus(),function(t){return t.tagName&&"input"===t.tagName.toLowerCase()&&"function"==typeof t.select}(o.mostRecentlyFocusedNode=t)&&t.select()):C(d()))}}},function(t,e){var n=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],c=n.join(","),u="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function i(t,e){e=e||{};var n,i,r,o=[],s=[],a=t.querySelectorAll(c);for(e.includeContainer&&u.call(t,c)&&(a=Array.prototype.slice.apply(a)).unshift(t),n=0;n<a.length;n++)l(i=a[n])&&(0===(r=d(i))?o.push(i):s.push({documentOrder:n,tabIndex:r,node:i}));return s.sort(p).map(function(t){return t.node}).concat(o)}function l(t){return!(!r(t)||function(t){return function(t){return s(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var e=function(t){for(var e=0;e<t.length;e++)if(t[e].checked)return t[e]}(t.ownerDocument.querySelectorAll('input[type="radio"][name="'+t.name+'"]'));return!e||e===t}(t)}(t)||d(t)<0)}function r(t){return!(t.disabled||function(t){return s(t)&&"hidden"===t.type}(t)||function(t){return null===t.offsetParent||"hidden"===getComputedStyle(t).visibility}(t))}i.isTabbable=function(t){if(!t)throw new Error("No node provided");return!1!==u.call(t,c)&&l(t)},i.isFocusable=function(t){if(!t)throw new Error("No node provided");return!1!==u.call(t,o)&&r(t)};var o=n.concat("iframe").join(",");function d(t){var e=parseInt(t.getAttribute("tabindex"),10);return isNaN(e)?function(t){return"true"===t.contentEditable}(t)?0:t.tabIndex:e}function p(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex}function s(t){return"INPUT"===t.tagName}t.exports=i},function(t,e){t.exports=function(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];for(var i in n)r.call(n,i)&&(t[i]=n[i])}return t};var r=Object.prototype.hasOwnProperty},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}},o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var s,c=n(1),u=n(2),l=n(3),d=n(45),p=o(n(44)),_=d.MDCDialogFoundation.strings,f=(s=c.MDCComponent,r(h,s),Object.defineProperty(h.prototype,"isOpen",{get:function(){return this.foundation_.isOpen()},enumerable:!0,configurable:!0}),Object.defineProperty(h.prototype,"escapeKeyAction",{get:function(){return this.foundation_.getEscapeKeyAction()},set:function(t){this.foundation_.setEscapeKeyAction(t)},enumerable:!0,configurable:!0}),Object.defineProperty(h.prototype,"scrimClickAction",{get:function(){return this.foundation_.getScrimClickAction()},set:function(t){this.foundation_.setScrimClickAction(t)},enumerable:!0,configurable:!0}),Object.defineProperty(h.prototype,"autoStackButtons",{get:function(){return this.foundation_.getAutoStackButtons()},set:function(t){this.foundation_.setAutoStackButtons(t)},enumerable:!0,configurable:!0}),h.attachTo=function(t){return new h(t)},h.prototype.initialize=function(t){var e,n,i=this.root_.querySelector(_.CONTAINER_SELECTOR);if(!i)throw new Error("Dialog component requires a "+_.CONTAINER_SELECTOR+" container element");this.container_=i,this.content_=this.root_.querySelector(_.CONTENT_SELECTOR),this.buttons_=[].slice.call(this.root_.querySelectorAll(_.BUTTON_SELECTOR)),this.defaultButton_=this.root_.querySelector("["+_.BUTTON_DEFAULT_ATTRIBUTE+"]"),this.focusTrapFactory_=t,this.buttonRipples_=[];try{for(var r=a(this.buttons_),o=r.next();!o.done;o=r.next()){var s=o.value;this.buttonRipples_.push(new l.MDCRipple(s))}}catch(t){e={error:t}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}},h.prototype.initialSyncWithDOM=function(){var e=this;this.focusTrap_=p.createFocusTrapInstance(this.container_,this.focusTrapFactory_,this.getInitialFocusEl_()||void 0),this.handleClick_=this.foundation_.handleClick.bind(this.foundation_),this.handleKeydown_=this.foundation_.handleKeydown.bind(this.foundation_),this.handleDocumentKeydown_=this.foundation_.handleDocumentKeydown.bind(this.foundation_),this.handleLayout_=this.layout.bind(this);var t=["resize","orientationchange"];this.handleOpening_=function(){t.forEach(function(t){return window.addEventListener(t,e.handleLayout_)}),document.addEventListener("keydown",e.handleDocumentKeydown_)},this.handleClosing_=function(){t.forEach(function(t){return window.removeEventListener(t,e.handleLayout_)}),document.removeEventListener("keydown",e.handleDocumentKeydown_)},this.listen("click",this.handleClick_),this.listen("keydown",this.handleKeydown_),this.listen(_.OPENING_EVENT,this.handleOpening_),this.listen(_.CLOSING_EVENT,this.handleClosing_)},h.prototype.destroy=function(){this.unlisten("click",this.handleClick_),this.unlisten("keydown",this.handleKeydown_),this.unlisten(_.OPENING_EVENT,this.handleOpening_),this.unlisten(_.CLOSING_EVENT,this.handleClosing_),this.handleClosing_(),this.buttonRipples_.forEach(function(t){return t.destroy()}),s.prototype.destroy.call(this)},h.prototype.layout=function(){this.foundation_.layout()},h.prototype.open=function(){this.foundation_.open()},h.prototype.close=function(t){void 0===t&&(t=""),this.foundation_.close(t)},h.prototype.getDefaultFoundation=function(){var e=this,t={addBodyClass:function(t){return document.body.classList.add(t)},addClass:function(t){return e.root_.classList.add(t)},areButtonsStacked:function(){return p.areTopsMisaligned(e.buttons_)},clickDefaultButton:function(){return e.defaultButton_&&e.defaultButton_.click()},eventTargetMatches:function(t,e){return!!t&&u.matches(t,e)},getActionFromEvent:function(t){if(!t.target)return"";var e=u.closest(t.target,"["+_.ACTION_ATTRIBUTE+"]");return e&&e.getAttribute(_.ACTION_ATTRIBUTE)},getInitialFocusEl:function(){return e.getInitialFocusEl_()},hasClass:function(t){return e.root_.classList.contains(t)},isContentScrollable:function(){return p.isScrollable(e.content_)},notifyClosed:function(t){return e.emit(_.CLOSED_EVENT,t?{action:t}:{})},notifyClosing:function(t){return e.emit(_.CLOSING_EVENT,t?{action:t}:{})},notifyOpened:function(){return e.emit(_.OPENED_EVENT,{})},notifyOpening:function(){return e.emit(_.OPENING_EVENT,{})},releaseFocus:function(){return e.focusTrap_.deactivate()},removeBodyClass:function(t){return document.body.classList.remove(t)},removeClass:function(t){return e.root_.classList.remove(t)},reverseButtons:function(){e.buttons_.reverse(),e.buttons_.forEach(function(t){t.parentElement.appendChild(t)})},trapFocus:function(){return e.focusTrap_.activate()}};return new d.MDCDialogFoundation(t)},h.prototype.getInitialFocusEl_=function(){return document.querySelector("["+_.INITIAL_FOCUS_ATTRIBUTE+"]")},h);function h(){return null!==s&&s.apply(this,arguments)||this}e.MDCDialog=f},function(t,e,n){"use strict";var i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(5));e.events=r;var o=i(n(2));e.ponyfill=o},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(n,"__esModule",{value:!0});var o=r(e(47));n.util=o,i(e(122)),i(e(49)),i(e(20)),i(e(50))},function(t,e){var n=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],c=n.join(","),u="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function i(t,e){e=e||{};var n,i,r,o=[],s=[],a=t.querySelectorAll(c);for(e.includeContainer&&u.call(t,c)&&(a=Array.prototype.slice.apply(a)).unshift(t),n=0;n<a.length;n++)l(i=a[n])&&(0===(r=d(i))?o.push(i):s.push({documentOrder:n,tabIndex:r,node:i}));return s.sort(p).map(function(t){return t.node}).concat(o)}function l(t){return!(!r(t)||function(t){return function(t){return s(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var e=function(t){for(var e=0;e<t.length;e++)if(t[e].checked)return t[e]}(t.ownerDocument.querySelectorAll('input[type="radio"][name="'+t.name+'"]'));return!e||e===t}(t)}(t)||d(t)<0)}function r(t){return!(t.disabled||function(t){return s(t)&&"hidden"===t.type}(t)||function(t){return null===t.offsetParent||"hidden"===getComputedStyle(t).visibility}(t))}i.isTabbable=function(t){if(!t)throw new Error("No node provided");return!1!==u.call(t,c)&&l(t)},i.isFocusable=function(t){if(!t)throw new Error("No node provided");return!1!==u.call(t,o)&&r(t)};var o=n.concat("iframe").join(",");function d(t){var e=parseInt(t.getAttribute("tabindex"),10);return isNaN(e)?function(t){return"true"===t.contentEditable}(t)?0:t.tabIndex:e}function p(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex}function s(t){return"INPUT"===t.tagName}t.exports=i},function(t,e){t.exports=function(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];for(var i in n)r.call(n,i)&&(t[i]=n[i])}return t};var r=Object.prototype.hasOwnProperty},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},s=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var a,c=n(1),u=n(19),l=n(10),d=o(n(48)),p=n(20),_=n(50),f=s(n(47)),h=p.MDCDismissibleDrawerFoundation.cssClasses,y=p.MDCDismissibleDrawerFoundation.strings,C=(a=c.MDCComponent,r(g,a),g.attachTo=function(t){return new g(t)},Object.defineProperty(g.prototype,"open",{get:function(){return this.foundation_.isOpen()},set:function(t){t?this.foundation_.open():this.foundation_.close()},enumerable:!0,configurable:!0}),Object.defineProperty(g.prototype,"list",{get:function(){return this.list_},enumerable:!0,configurable:!0}),g.prototype.initialize=function(t,e){void 0===t&&(t=d.default),void 0===e&&(e=function(t){return new u.MDCList(t)});var n=this.root_.querySelector("."+l.MDCListFoundation.cssClasses.ROOT);n&&(this.list_=e(n),this.list_.wrapFocus=!0),this.focusTrapFactory_=t},g.prototype.initialSyncWithDOM=function(){var e=this,t=h.MODAL,n=y.SCRIM_SELECTOR;this.scrim_=this.root_.parentNode.querySelector(n),this.scrim_&&this.root_.classList.contains(t)&&(this.handleScrimClick_=function(){return e.foundation_.handleScrimClick()},this.scrim_.addEventListener("click",this.handleScrimClick_),this.focusTrap_=f.createFocusTrapInstance(this.root_,this.focusTrapFactory_)),this.handleKeydown_=function(t){return e.foundation_.handleKeydown(t)},this.handleTransitionEnd_=function(t){return e.foundation_.handleTransitionEnd(t)},this.listen("keydown",this.handleKeydown_),this.listen("transitionend",this.handleTransitionEnd_)},g.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown_),this.unlisten("transitionend",this.handleTransitionEnd_),this.list_&&this.list_.destroy();var t=h.MODAL;this.scrim_&&this.handleScrimClick_&&this.root_.classList.contains(t)&&(this.scrim_.removeEventListener("click",this.handleScrimClick_),this.open=!1)},g.prototype.getDefaultFoundation=function(){var e=this,t={addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},hasClass:function(t){return e.root_.classList.contains(t)},elementHasClass:function(t,e){return t.classList.contains(e)},saveFocus:function(){return e.previousFocus_=document.activeElement},restoreFocus:function(){var t=e.previousFocus_;t&&t.focus&&e.root_.contains(document.activeElement)&&t.focus()},focusActiveNavigationItem:function(){var t=e.root_.querySelector("."+l.MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS);t&&t.focus()},notifyClose:function(){return e.emit(y.CLOSE_EVENT,{},!0)},notifyOpen:function(){return e.emit(y.OPEN_EVENT,{},!0)},trapFocus:function(){return e.focusTrap_.activate()},releaseFocus:function(){return e.focusTrap_.deactivate()}},n=h.DISMISSIBLE,i=h.MODAL;if(this.root_.classList.contains(n))return new p.MDCDismissibleDrawerFoundation(t);if(this.root_.classList.contains(i))return new _.MDCModalDrawerFoundation(t);throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are "+n+" and "+i+".")},g);function g(){return null!==a&&a.apply(this,arguments)||this}e.MDCDrawer=C},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(21)),i(e(51)),i(e(22))},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(125)),i(e(53)),i(e(52))},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(1),a=n(52),c=(o=s.MDCComponent,r(u,o),u.attachTo=function(t){return new u(t)},Object.defineProperty(u.prototype,"input",{get:function(){return this.input_},set:function(t){this.input_=t},enumerable:!0,configurable:!0}),Object.defineProperty(u.prototype,"label_",{get:function(){var t=a.MDCFormFieldFoundation.strings.LABEL_SELECTOR;return this.root_.querySelector(t)},enumerable:!0,configurable:!0}),u.prototype.getDefaultFoundation=function(){var n=this,t={activateInputRipple:function(){n.input_&&n.input_.ripple&&n.input_.ripple.activate()},deactivateInputRipple:function(){n.input_&&n.input_.ripple&&n.input_.ripple.deactivate()},deregisterInteractionHandler:function(t,e){n.label_&&n.label_.removeEventListener(t,e)},registerInteractionHandler:function(t,e){n.label_&&n.label_.addEventListener(t,e)}};return new a.MDCFormFieldFoundation(t)},u);function u(){return null!==o&&o.apply(this,arguments)||this}e.MDCFormField=c},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(127)),i(e(55)),i(e(54))},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(1),a=n(54),c=(o=s.MDCComponent,r(u,o),u.attachTo=function(t){return new u(t)},u.prototype.getDefaultFoundation=function(){var n=this,t={deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getNumberOfTiles:function(){return n.root_.querySelectorAll(a.MDCGridListFoundation.strings.TILE_SELECTOR).length},getOffsetWidth:function(){return n.root_.offsetWidth},getOffsetWidthForTileAtIndex:function(t){return n.root_.querySelectorAll(a.MDCGridListFoundation.strings.TILE_SELECTOR)[t].offsetWidth},registerResizeHandler:function(t){return window.addEventListener("resize",t)},setStyleForTilesElement:function(t,e){n.root_.querySelector(a.MDCGridListFoundation.strings.TILES_SELECTOR).style[t]=e}};return new a.MDCGridListFoundation(t)},u);function u(){return null!==o&&o.apply(this,arguments)||this}e.MDCGridList=c},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(129)),i(e(57)),i(e(56))},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(1),a=n(3),c=n(56),u=c.MDCIconButtonToggleFoundation.strings,l=(o=s.MDCComponent,r(d,o),d.attachTo=function(t){return new d(t)},d.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick_=function(){return t.foundation_.handleClick()},this.listen("click",this.handleClick_)},d.prototype.destroy=function(){this.unlisten("click",this.handleClick_),this.ripple_.destroy(),o.prototype.destroy.call(this)},d.prototype.getDefaultFoundation=function(){var n=this,t={addClass:function(t){return n.root_.classList.add(t)},hasClass:function(t){return n.root_.classList.contains(t)},notifyChange:function(t){return n.emit(u.CHANGE_EVENT,t)},removeClass:function(t){return n.root_.classList.remove(t)},setAttr:function(t,e){return n.root_.setAttribute(t,e)}};return new c.MDCIconButtonToggleFoundation(t)},Object.defineProperty(d.prototype,"ripple",{get:function(){return this.ripple_},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"on",{get:function(){return this.foundation_.isOn()},set:function(t){this.foundation_.toggle(t)},enumerable:!0,configurable:!0}),d.prototype.createRipple_=function(){var t=new a.MDCRipple(this.root_);return t.unbounded=!0,t},d);function d(){var t=null!==o&&o.apply(this,arguments)||this;return t.ripple_=t.createRipple_(),t}e.MDCIconButtonToggle=l},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(23)),i(e(59)),i(e(58))},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(132)),i(e(61)),i(e(60))},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(1),a=n(60),c=(o=s.MDCComponent,r(u,o),u.attachTo=function(t){return new u(t)},Object.defineProperty(u.prototype,"determinate",{set:function(t){this.foundation_.setDeterminate(t)},enumerable:!0,configurable:!0}),Object.defineProperty(u.prototype,"progress",{set:function(t){this.foundation_.setProgress(t)},enumerable:!0,configurable:!0}),Object.defineProperty(u.prototype,"buffer",{set:function(t){this.foundation_.setBuffer(t)},enumerable:!0,configurable:!0}),Object.defineProperty(u.prototype,"reverse",{set:function(t){this.foundation_.setReverse(t)},enumerable:!0,configurable:!0}),u.prototype.open=function(){this.foundation_.open()},u.prototype.close=function(){this.foundation_.close()},u.prototype.getDefaultFoundation=function(){var e=this,t={addClass:function(t){return e.root_.classList.add(t)},forceLayout:function(){return e.root_.offsetWidth},getBuffer:function(){return e.root_.querySelector(a.MDCLinearProgressFoundation.strings.BUFFER_SELECTOR)},getPrimaryBar:function(){return e.root_.querySelector(a.MDCLinearProgressFoundation.strings.PRIMARY_BAR_SELECTOR)},hasClass:function(t){return e.root_.classList.contains(t)},removeClass:function(t){return e.root_.classList.remove(t)},setStyle:function(t,e,n){return t.style.setProperty(e,n)}};return new a.MDCLinearProgressFoundation(t)},u);function u(){return null!==o&&o.apply(this,arguments)||this}e.MDCLinearProgress=c},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(19)),i(e(9)),i(e(10))},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(n,"__esModule",{value:!0});var o=r(e(62));n.util=o,i(e(63)),i(e(6)),i(e(11))},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0});var r=e(6);n.Corner=r.Corner,i(e(64)),i(e(12)),i(e(65))},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(24)),i(e(25)),i(e(66))},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(138)),i(e(68)),i(e(67))},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(1),c=n(5),u=n(3),l=n(4),d=n(67),p=(s=a.MDCComponent,r(_,s),_.attachTo=function(t){return new _(t)},Object.defineProperty(_.prototype,"checked",{get:function(){return this.nativeControl_.checked},set:function(t){this.nativeControl_.checked=t},enumerable:!0,configurable:!0}),Object.defineProperty(_.prototype,"disabled",{get:function(){return this.nativeControl_.disabled},set:function(t){this.foundation_.setDisabled(t)},enumerable:!0,configurable:!0}),Object.defineProperty(_.prototype,"value",{get:function(){return this.nativeControl_.value},set:function(t){this.nativeControl_.value=t},enumerable:!0,configurable:!0}),Object.defineProperty(_.prototype,"ripple",{get:function(){return this.ripple_},enumerable:!0,configurable:!0}),_.prototype.destroy=function(){this.ripple_.destroy(),s.prototype.destroy.call(this)},_.prototype.getDefaultFoundation=function(){var e=this,t={addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},setNativeControlDisabled:function(t){return e.nativeControl_.disabled=t}};return new d.MDCRadioFoundation(t)},_.prototype.createRipple_=function(){var n=this,t=o({},u.MDCRipple.createAdapter(this),{registerInteractionHandler:function(t,e){return n.nativeControl_.addEventListener(t,e,c.applyPassive())},deregisterInteractionHandler:function(t,e){return n.nativeControl_.removeEventListener(t,e,c.applyPassive())},isSurfaceActive:function(){return!1},isUnbounded:function(){return!0}});return new u.MDCRipple(this.root_,new l.MDCRippleFoundation(t))},Object.defineProperty(_.prototype,"nativeControl_",{get:function(){var t=d.MDCRadioFoundation.strings.NATIVE_CONTROL_SELECTOR,e=this.root_.querySelector(t);if(!e)throw new Error("Radio component requires a "+t+" element");return e},enumerable:!0,configurable:!0}),_);function _(){var t=null!==s&&s.apply(this,arguments)||this;return t.ripple_=t.createRipple_(),t}e.MDCRadio=p},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(n,"__esModule",{value:!0});var o=r(e(16));n.util=o,i(e(3)),i(e(37)),i(e(4))},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(141)),i(e(26)),i(e(69)),i(e(142)),i(e(143))},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},s=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var a,c=n(1),d=n(21),p=n(23),u=s(n(6)),_=n(64),l=s(n(12)),f=n(24),h=n(3),y=n(4),C=n(26),g=n(69),m=n(70),v=n(73),E=(a=c.MDCComponent,r(b,a),b.attachTo=function(t){return new b(t)},b.prototype.initialize=function(t,e,n,i,r,o){if(void 0===t&&(t=function(t){return new d.MDCFloatingLabel(t)}),void 0===e&&(e=function(t){return new p.MDCLineRipple(t)}),void 0===n&&(n=function(t){return new f.MDCNotchedOutline(t)}),void 0===i&&(i=function(t){return new _.MDCMenu(t)}),void 0===r&&(r=function(t){return new v.MDCSelectIcon(t)}),void 0===o&&(o=function(t){return new m.MDCSelectHelperText(t)}),this.selectAnchor_=this.root_.querySelector(C.strings.SELECT_ANCHOR_SELECTOR),this.selectedText_=this.root_.querySelector(C.strings.SELECTED_TEXT_SELECTOR),!this.selectedText_)throw new Error("MDCSelect: Missing required element: The following selector must be present: '"+C.strings.SELECTED_TEXT_SELECTOR+"'");if(this.selectedText_.hasAttribute(C.strings.ARIA_CONTROLS)){var s=document.getElementById(this.selectedText_.getAttribute(C.strings.ARIA_CONTROLS));s&&(this.helperText_=o(s))}this.menuSetup_(i);var a=this.root_.querySelector(C.strings.LABEL_SELECTOR);this.label_=a?t(a):null;var c=this.root_.querySelector(C.strings.LINE_RIPPLE_SELECTOR);this.lineRipple_=c?e(c):null;var u=this.root_.querySelector(C.strings.OUTLINE_SELECTOR);this.outline_=u?n(u):null;var l=this.root_.querySelector(C.strings.LEADING_ICON_SELECTOR);l&&(this.leadingIcon_=r(l)),this.root_.classList.contains(C.cssClasses.OUTLINED)||(this.ripple_=this.createRipple_())},b.prototype.initialSyncWithDOM=function(){var e=this;this.handleChange_=function(){return e.foundation_.handleChange()},this.handleFocus_=function(){return e.foundation_.handleFocus()},this.handleBlur_=function(){return e.foundation_.handleBlur()},this.handleClick_=function(t){e.selectedText_.focus(),e.foundation_.handleClick(e.getNormalizedXCoordinate_(t))},this.handleKeydown_=function(t){return e.foundation_.handleKeydown(t)},this.handleMenuItemAction_=function(t){return e.foundation_.handleMenuItemAction(t.detail.index)},this.handleMenuOpened_=function(){return e.foundation_.handleMenuOpened()},this.handleMenuClosed_=function(){return e.foundation_.handleMenuClosed()},this.selectedText_.addEventListener("focus",this.handleFocus_),this.selectedText_.addEventListener("blur",this.handleBlur_),this.selectedText_.addEventListener("click",this.handleClick_),this.selectedText_.addEventListener("keydown",this.handleKeydown_),this.menu_.listen(u.strings.CLOSED_EVENT,this.handleMenuClosed_),this.menu_.listen(u.strings.OPENED_EVENT,this.handleMenuOpened_),this.menu_.listen(l.strings.SELECTED_EVENT,this.handleMenuItemAction_),this.foundation_.init(),this.disabled=this.root_.classList.contains(C.cssClasses.DISABLED)},b.prototype.destroy=function(){this.selectedText_.removeEventListener("change",this.handleChange_),this.selectedText_.removeEventListener("focus",this.handleFocus_),this.selectedText_.removeEventListener("blur",this.handleBlur_),this.selectedText_.removeEventListener("keydown",this.handleKeydown_),this.selectedText_.removeEventListener("click",this.handleClick_),this.menu_.unlisten(u.strings.CLOSED_EVENT,this.handleMenuClosed_),this.menu_.unlisten(u.strings.OPENED_EVENT,this.handleMenuOpened_),this.menu_.unlisten(l.strings.SELECTED_EVENT,this.handleMenuItemAction_),this.menu_.destroy(),this.ripple_&&this.ripple_.destroy(),this.outline_&&this.outline_.destroy(),this.leadingIcon_&&this.leadingIcon_.destroy(),this.helperText_&&this.helperText_.destroy(),a.prototype.destroy.call(this)},Object.defineProperty(b.prototype,"value",{get:function(){return this.foundation_.getValue()},set:function(t){this.foundation_.setValue(t)},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"selectedIndex",{get:function(){return this.foundation_.getSelectedIndex()},set:function(t){this.foundation_.setSelectedIndex(t,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"disabled",{get:function(){return this.foundation_.getDisabled()},set:function(t){this.foundation_.setDisabled(t)},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"leadingIconAriaLabel",{set:function(t){this.foundation_.setLeadingIconAriaLabel(t)},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"leadingIconContent",{set:function(t){this.foundation_.setLeadingIconContent(t)},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"helperTextContent",{set:function(t){this.foundation_.setHelperTextContent(t)},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"valid",{get:function(){return this.foundation_.isValid()},set:function(t){this.foundation_.setValid(t)},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"required",{get:function(){return this.foundation_.getRequired()},set:function(t){this.foundation_.setRequired(t)},enumerable:!0,configurable:!0}),b.prototype.layout=function(){this.foundation_.layout()},b.prototype.getDefaultFoundation=function(){var t=o({},this.getSelectAdapterMethods_(),this.getCommonAdapterMethods_(),this.getOutlineAdapterMethods_(),this.getLabelAdapterMethods_());return new g.MDCSelectFoundation(t,this.getFoundationMap_())},b.prototype.menuSetup_=function(t){this.menuElement_=this.root_.querySelector(C.strings.MENU_SELECTOR),this.menu_=t(this.menuElement_)},b.prototype.createRipple_=function(){var n=this,t=o({},h.MDCRipple.createAdapter({root_:this.selectAnchor_}),{registerInteractionHandler:function(t,e){return n.selectedText_.addEventListener(t,e)},deregisterInteractionHandler:function(t,e){return n.selectedText_.removeEventListener(t,e)}});return new h.MDCRipple(this.selectAnchor_,new y.MDCRippleFoundation(t))},b.prototype.getSelectAdapterMethods_=function(){var i=this;return{getSelectedMenuItem:function(){return i.menuElement_.querySelector(C.strings.SELECTED_ITEM_SELECTOR)},getMenuItemAttr:function(t,e){return t.getAttribute(e)},setSelectedText:function(t){return i.selectedText_.textContent=t},isSelectedTextFocused:function(){return document.activeElement===i.selectedText_},getSelectedTextAttr:function(t){return i.selectedText_.getAttribute(t)},setSelectedTextAttr:function(t,e){return i.selectedText_.setAttribute(t,e)},openMenu:function(){return i.menu_.open=!0},closeMenu:function(){return i.menu_.open=!1},getAnchorElement:function(){return i.root_.querySelector(C.strings.SELECT_ANCHOR_SELECTOR)},setMenuAnchorElement:function(t){return i.menu_.setAnchorElement(t)},setMenuAnchorCorner:function(t){return i.menu_.setAnchorCorner(t)},setMenuWrapFocus:function(t){return i.menu_.wrapFocus=t},setAttributeAtIndex:function(t,e,n){return i.menu_.items[t].setAttribute(e,n)},removeAttributeAtIndex:function(t,e){return i.menu_.items[t].removeAttribute(e)},focusMenuItemAtIndex:function(t){return i.menu_.items[t].focus()},getMenuItemCount:function(){return i.menu_.items.length},getMenuItemValues:function(){return i.menu_.items.map(function(t){return t.getAttribute(C.strings.VALUE_ATTR)||""})},getMenuItemTextAtIndex:function(t){return i.menu_.items[t].textContent},addClassAtIndex:function(t,e){return i.menu_.items[t].classList.add(e)},removeClassAtIndex:function(t,e){return i.menu_.items[t].classList.remove(e)}}},b.prototype.getCommonAdapterMethods_=function(){var n=this;return{addClass:function(t){return n.root_.classList.add(t)},removeClass:function(t){return n.root_.classList.remove(t)},hasClass:function(t){return n.root_.classList.contains(t)},setRippleCenter:function(t){return n.lineRipple_&&n.lineRipple_.setRippleCenter(t)},activateBottomLine:function(){return n.lineRipple_&&n.lineRipple_.activate()},deactivateBottomLine:function(){return n.lineRipple_&&n.lineRipple_.deactivate()},notifyChange:function(t){var e=n.selectedIndex;n.emit(C.strings.CHANGE_EVENT,{value:t,index:e},!0)}}},b.prototype.getOutlineAdapterMethods_=function(){var e=this;return{hasOutline:function(){return Boolean(e.outline_)},notchOutline:function(t){return e.outline_&&e.outline_.notch(t)},closeOutline:function(){return e.outline_&&e.outline_.closeNotch()}}},b.prototype.getLabelAdapterMethods_=function(){var e=this;return{hasLabel:function(){return!!e.label_},floatLabel:function(t){return e.label_&&e.label_.float(t)},getLabelWidth:function(){return e.label_?e.label_.getWidth():0}}},b.prototype.getNormalizedXCoordinate_=function(t){var e=t.target.getBoundingClientRect();return(this.isTouchEvent_(t)?t.touches[0].clientX:t.clientX)-e.left},b.prototype.isTouchEvent_=function(t){return Boolean(t.touches)},b.prototype.getFoundationMap_=function(){return{helperText:this.helperText_?this.helperText_.foundation:void 0,leadingIcon:this.leadingIcon_?this.leadingIcon_.foundation:void 0}},b);function b(){return null!==a&&a.apply(this,arguments)||this}e.MDCSelect=E},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(70)),i(e(71));var r=e(72);n.helperTextCssClasses=r.cssClasses,n.helperTextStrings=r.strings},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(73)),i(e(74));var r=e(75);n.iconStrings=r.strings},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(145)),i(e(27)),i(e(76))},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(1),a=n(5),c=n(27),u=n(76),l=(o=s.MDCComponent,r(d,o),d.attachTo=function(t){return new d(t)},Object.defineProperty(d.prototype,"value",{get:function(){return this.foundation_.getValue()},set:function(t){this.foundation_.setValue(t)},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"min",{get:function(){return this.foundation_.getMin()},set:function(t){this.foundation_.setMin(t)},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"max",{get:function(){return this.foundation_.getMax()},set:function(t){this.foundation_.setMax(t)},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"step",{get:function(){return this.foundation_.getStep()},set:function(t){this.foundation_.setStep(t)},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"disabled",{get:function(){return this.foundation_.isDisabled()},set:function(t){this.foundation_.setDisabled(t)},enumerable:!0,configurable:!0}),d.prototype.initialize=function(){this.thumbContainer_=this.root_.querySelector(c.strings.THUMB_CONTAINER_SELECTOR),this.track_=this.root_.querySelector(c.strings.TRACK_SELECTOR),this.pinValueMarker_=this.root_.querySelector(c.strings.PIN_VALUE_MARKER_SELECTOR),this.trackMarkerContainer_=this.root_.querySelector(c.strings.TRACK_MARKER_CONTAINER_SELECTOR)},d.prototype.getDefaultFoundation=function(){var o=this,t={hasClass:function(t){return o.root_.classList.contains(t)},addClass:function(t){return o.root_.classList.add(t)},removeClass:function(t){return o.root_.classList.remove(t)},getAttribute:function(t){return o.root_.getAttribute(t)},setAttribute:function(t,e){return o.root_.setAttribute(t,e)},removeAttribute:function(t){return o.root_.removeAttribute(t)},computeBoundingRect:function(){return o.root_.getBoundingClientRect()},getTabIndex:function(){return o.root_.tabIndex},registerInteractionHandler:function(t,e){return o.listen(t,e,a.applyPassive())},deregisterInteractionHandler:function(t,e){return o.unlisten(t,e,a.applyPassive())},registerThumbContainerInteractionHandler:function(t,e){o.thumbContainer_.addEventListener(t,e,a.applyPassive())},deregisterThumbContainerInteractionHandler:function(t,e){o.thumbContainer_.removeEventListener(t,e,a.applyPassive())},registerBodyInteractionHandler:function(t,e){return document.body.addEventListener(t,e)},deregisterBodyInteractionHandler:function(t,e){return document.body.removeEventListener(t,e)},registerResizeHandler:function(t){return window.addEventListener("resize",t)},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},notifyInput:function(){return o.emit(c.strings.INPUT_EVENT,o)},notifyChange:function(){return o.emit(c.strings.CHANGE_EVENT,o)},setThumbContainerStyleProperty:function(t,e){o.thumbContainer_.style.setProperty(t,e)},setTrackStyleProperty:function(t,e){return o.track_.style.setProperty(t,e)},setMarkerValue:function(t){return o.pinValueMarker_.innerText=t.toLocaleString()},setTrackMarkers:function(t,e,n){var i=t.toLocaleString(),r="linear-gradient(to right, currentColor 2px, transparent 0) 0 center / calc((100% - 2px) / (("+e.toLocaleString()+" - "+n.toLocaleString()+") / "+i+")) 100% repeat-x";o.trackMarkerContainer_.style.setProperty("background",r)},isRTL:function(){return"rtl"===getComputedStyle(o.root_).direction}};return new u.MDCSliderFoundation(t)},d.prototype.initialSyncWithDOM=function(){var t=this.parseFloat_(this.root_.getAttribute(c.strings.ARIA_VALUENOW),this.value),e=this.parseFloat_(this.root_.getAttribute(c.strings.ARIA_VALUEMIN),this.min),n=this.parseFloat_(this.root_.getAttribute(c.strings.ARIA_VALUEMAX),this.max);e>=this.max?(this.max=n,this.min=e):(this.min=e,this.max=n),this.step=this.parseFloat_(this.root_.getAttribute(c.strings.STEP_DATA_ATTR),this.step),this.value=t,this.disabled=this.root_.hasAttribute(c.strings.ARIA_DISABLED)&&"false"!==this.root_.getAttribute(c.strings.ARIA_DISABLED),this.foundation_.setupTrackMarker()},d.prototype.layout=function(){this.foundation_.layout()},d.prototype.stepUp=function(t){void 0===t&&(t=this.step||1),this.value+=t},d.prototype.stepDown=function(t){void 0===t&&(t=this.step||1),this.value-=t},d.prototype.parseFloat_=function(t,e){var n=parseFloat(t);return"number"==typeof n&&isFinite(n)?n:e},d);function d(){return null!==o&&o.apply(this,arguments)||this}e.MDCSlider=l},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(n,"__esModule",{value:!0});var o=r(e(77));n.util=o,i(e(147)),i(e(13)),i(e(78))},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(1),c=n(2),u=n(13),l=n(78),d=o(n(77)),p=u.strings.SURFACE_SELECTOR,_=u.strings.LABEL_SELECTOR,f=u.strings.ACTION_SELECTOR,h=u.strings.DISMISS_SELECTOR,y=u.strings.OPENING_EVENT,C=u.strings.OPENED_EVENT,g=u.strings.CLOSING_EVENT,m=u.strings.CLOSED_EVENT,v=(s=a.MDCComponent,r(E,s),E.attachTo=function(t){return new E(t)},E.prototype.initialize=function(t){void 0===t&&(t=function(){return d.announce}),this.announce_=t()},E.prototype.initialSyncWithDOM=function(){var n=this;this.surfaceEl_=this.root_.querySelector(p),this.labelEl_=this.root_.querySelector(_),this.actionEl_=this.root_.querySelector(f),this.handleKeyDown_=function(t){return n.foundation_.handleKeyDown(t)},this.handleSurfaceClick_=function(t){var e=t.target;n.isActionButton_(e)?n.foundation_.handleActionButtonClick(t):n.isActionIcon_(e)&&n.foundation_.handleActionIconClick(t)},this.registerKeyDownHandler_(this.handleKeyDown_),this.registerSurfaceClickHandler_(this.handleSurfaceClick_)},E.prototype.destroy=function(){s.prototype.destroy.call(this),this.deregisterKeyDownHandler_(this.handleKeyDown_),this.deregisterSurfaceClickHandler_(this.handleSurfaceClick_)},E.prototype.open=function(){this.foundation_.open()},E.prototype.close=function(t){void 0===t&&(t=""),this.foundation_.close(t)},E.prototype.getDefaultFoundation=function(){var e=this,t={addClass:function(t){return e.root_.classList.add(t)},announce:function(){return e.announce_(e.labelEl_)},notifyClosed:function(t){return e.emit(m,t?{reason:t}:{})},notifyClosing:function(t){return e.emit(g,t?{reason:t}:{})},notifyOpened:function(){return e.emit(C,{})},notifyOpening:function(){return e.emit(y,{})},removeClass:function(t){return e.root_.classList.remove(t)}};return new l.MDCSnackbarFoundation(t)},Object.defineProperty(E.prototype,"timeoutMs",{get:function(){return this.foundation_.getTimeoutMs()},set:function(t){this.foundation_.setTimeoutMs(t)},enumerable:!0,configurable:!0}),Object.defineProperty(E.prototype,"closeOnEscape",{get:function(){return this.foundation_.getCloseOnEscape()},set:function(t){this.foundation_.setCloseOnEscape(t)},enumerable:!0,configurable:!0}),Object.defineProperty(E.prototype,"isOpen",{get:function(){return this.foundation_.isOpen()},enumerable:!0,configurable:!0}),Object.defineProperty(E.prototype,"labelText",{get:function(){return this.labelEl_.textContent},set:function(t){this.labelEl_.textContent=t},enumerable:!0,configurable:!0}),Object.defineProperty(E.prototype,"actionButtonText",{get:function(){return this.actionEl_.textContent},set:function(t){this.actionEl_.textContent=t},enumerable:!0,configurable:!0}),E.prototype.registerKeyDownHandler_=function(t){this.listen("keydown",t)},E.prototype.deregisterKeyDownHandler_=function(t){this.unlisten("keydown",t)},E.prototype.registerSurfaceClickHandler_=function(t){this.surfaceEl_.addEventListener("click",t)},E.prototype.deregisterSurfaceClickHandler_=function(t){this.surfaceEl_.removeEventListener("click",t)},E.prototype.isActionButton_=function(t){return Boolean(c.closest(t,f))},E.prototype.isActionIcon_=function(t){return Boolean(c.closest(t,h))},E);function E(){return null!==s&&s.apply(this,arguments)||this}e.MDCSnackbar=v},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(149)),i(e(80)),i(e(79))},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},s=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,r,o=n.call(t),s=[];try{for(;(void 0===e||0<e--)&&!(i=o.next()).done;)s.push(i.value)}catch(t){r={error:t}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return s},a=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(s(arguments[e]));return t};Object.defineProperty(e,"__esModule",{value:!0});var c,u=n(1),l=n(5),d=n(2),p=n(3),_=n(4),f=n(79),h=(c=u.MDCComponent,r(y,c),y.attachTo=function(t){return new y(t)},y.prototype.destroy=function(){c.prototype.destroy.call(this),this.ripple_.destroy(),this.nativeControl_.removeEventListener("change",this.changeHandler_)},y.prototype.initialSyncWithDOM=function(){var i=this;this.changeHandler_=function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return(t=i.foundation_).handleChange.apply(t,a(e))},this.nativeControl_.addEventListener("change",this.changeHandler_),this.checked=this.checked},y.prototype.getDefaultFoundation=function(){var e=this,t={addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},setNativeControlChecked:function(t){return e.nativeControl_.checked=t},setNativeControlDisabled:function(t){return e.nativeControl_.disabled=t}};return new f.MDCSwitchFoundation(t)},Object.defineProperty(y.prototype,"ripple",{get:function(){return this.ripple_},enumerable:!0,configurable:!0}),Object.defineProperty(y.prototype,"checked",{get:function(){return this.nativeControl_.checked},set:function(t){this.foundation_.setChecked(t)},enumerable:!0,configurable:!0}),Object.defineProperty(y.prototype,"disabled",{get:function(){return this.nativeControl_.disabled},set:function(t){this.foundation_.setDisabled(t)},enumerable:!0,configurable:!0}),y.prototype.createRipple_=function(){var n=this,t=f.MDCSwitchFoundation.strings.RIPPLE_SURFACE_SELECTOR,i=this.root_.querySelector(t),e=o({},p.MDCRipple.createAdapter(this),{addClass:function(t){return i.classList.add(t)},computeBoundingRect:function(){return i.getBoundingClientRect()},deregisterInteractionHandler:function(t,e){n.nativeControl_.removeEventListener(t,e,l.applyPassive())},isSurfaceActive:function(){return d.matches(n.nativeControl_,":active")},isUnbounded:function(){return!0},registerInteractionHandler:function(t,e){n.nativeControl_.addEventListener(t,e,l.applyPassive())},removeClass:function(t){return i.classList.remove(t)},updateCssVariable:function(t,e){i.style.setProperty(t,e)}});return new p.MDCRipple(this.root_,new _.MDCRippleFoundation(e))},Object.defineProperty(y.prototype,"nativeControl_",{get:function(){var t=f.MDCSwitchFoundation.strings.NATIVE_CONTROL_SELECTOR;return this.root_.querySelector(t)},enumerable:!0,configurable:!0}),y);function y(){var t=null!==c&&c.apply(this,arguments)||this;return t.ripple_=t.createRipple_(),t}e.MDCSwitch=h},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(151)),i(e(91)),i(e(90))},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(1),a=n(81),c=n(84),u=n(30),l=n(90),d=l.MDCTabBarFoundation.strings,p=0,_=(o=s.MDCComponent,r(f,o),f.attachTo=function(t){return new f(t)},Object.defineProperty(f.prototype,"focusOnActivate",{set:function(e){this.tabList_.forEach(function(t){return t.focusOnActivate=e})},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"useAutomaticActivation",{set:function(t){this.foundation_.setUseAutomaticActivation(t)},enumerable:!0,configurable:!0}),f.prototype.initialize=function(t,e){void 0===t&&(t=function(t){return new c.MDCTab(t)}),void 0===e&&(e=function(t){return new a.MDCTabScroller(t)}),this.tabList_=this.instantiateTabs_(t),this.tabScroller_=this.instantiateTabScroller_(e)},f.prototype.initialSyncWithDOM=function(){var e=this;this.handleTabInteraction_=function(t){return e.foundation_.handleTabInteraction(t)},this.handleKeyDown_=function(t){return e.foundation_.handleKeyDown(t)},this.listen(u.MDCTabFoundation.strings.INTERACTED_EVENT,this.handleTabInteraction_),this.listen("keydown",this.handleKeyDown_);for(var t=0;t<this.tabList_.length;t++)if(this.tabList_[t].active){this.scrollIntoView(t);break}},f.prototype.destroy=function(){o.prototype.destroy.call(this),this.unlisten(u.MDCTabFoundation.strings.INTERACTED_EVENT,this.handleTabInteraction_),this.unlisten("keydown",this.handleKeyDown_),this.tabList_.forEach(function(t){return t.destroy()}),this.tabScroller_&&this.tabScroller_.destroy()},f.prototype.getDefaultFoundation=function(){var n=this,t={scrollTo:function(t){return n.tabScroller_.scrollTo(t)},incrementScroll:function(t){return n.tabScroller_.incrementScroll(t)},getScrollPosition:function(){return n.tabScroller_.getScrollPosition()},getScrollContentWidth:function(){return n.tabScroller_.getScrollContentWidth()},getOffsetWidth:function(){return n.root_.offsetWidth},isRTL:function(){return"rtl"===window.getComputedStyle(n.root_).getPropertyValue("direction")},setActiveTab:function(t){return n.foundation_.activateTab(t)},activateTabAtIndex:function(t,e){return n.tabList_[t].activate(e)},deactivateTabAtIndex:function(t){return n.tabList_[t].deactivate()},focusTabAtIndex:function(t){return n.tabList_[t].focus()},getTabIndicatorClientRectAtIndex:function(t){return n.tabList_[t].computeIndicatorClientRect()},getTabDimensionsAtIndex:function(t){return n.tabList_[t].computeDimensions()},getPreviousActiveTabIndex:function(){for(var t=0;t<n.tabList_.length;t++)if(n.tabList_[t].active)return t;return-1},getFocusedTabIndex:function(){var t=n.getTabElements_(),e=document.activeElement;return t.indexOf(e)},getIndexOfTabById:function(t){for(var e=0;e<n.tabList_.length;e++)if(n.tabList_[e].id===t)return e;return-1},getTabListLength:function(){return n.tabList_.length},notifyTabActivated:function(t){return n.emit(d.TAB_ACTIVATED_EVENT,{index:t},!0)}};return new l.MDCTabBarFoundation(t)},f.prototype.activateTab=function(t){this.foundation_.activateTab(t)},f.prototype.scrollIntoView=function(t){this.foundation_.scrollIntoView(t)},f.prototype.getTabElements_=function(){return[].slice.call(this.root_.querySelectorAll(d.TAB_SELECTOR))},f.prototype.instantiateTabs_=function(e){return this.getTabElements_().map(function(t){return t.id=t.id||"mdc-tab-"+ ++p,e(t)})},f.prototype.instantiateTabScroller_=function(t){var e=this.root_.querySelector(d.TAB_SCROLLER_SELECTOR);return e?t(e):null},f);function f(){return null!==o&&o.apply(this,arguments)||this}e.MDCTabBar=_},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(29),a=(o=s.MDCTabScrollerRTL,r(c,o),c.prototype.getScrollPositionRTL=function(){var t=this.adapter_.getScrollAreaScrollLeft(),e=this.calculateScrollEdges_().right;return Math.round(e-t)},c.prototype.scrollToRTL=function(t){var e=this.calculateScrollEdges_(),n=this.adapter_.getScrollAreaScrollLeft(),i=this.clampScrollValue_(e.right-t);return{finalScrollPosition:i,scrollDelta:i-n}},c.prototype.incrementScrollRTL=function(t){var e=this.adapter_.getScrollAreaScrollLeft(),n=this.clampScrollValue_(e-t);return{finalScrollPosition:n,scrollDelta:n-e}},c.prototype.getAnimatingScrollPosition=function(t){return t},c.prototype.calculateScrollEdges_=function(){return{left:0,right:this.adapter_.getScrollContentOffsetWidth()-this.adapter_.getScrollAreaOffsetWidth()}},c.prototype.clampScrollValue_=function(t){var e=this.calculateScrollEdges_();return Math.min(Math.max(e.left,t),e.right)},c);function c(){return null!==o&&o.apply(this,arguments)||this}e.MDCTabScrollerRTLDefault=a,e.default=a},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(29),a=(o=s.MDCTabScrollerRTL,r(c,o),c.prototype.getScrollPositionRTL=function(t){var e=this.adapter_.getScrollAreaScrollLeft();return Math.round(t-e)},c.prototype.scrollToRTL=function(t){var e=this.adapter_.getScrollAreaScrollLeft(),n=this.clampScrollValue_(-t);return{finalScrollPosition:n,scrollDelta:n-e}},c.prototype.incrementScrollRTL=function(t){var e=this.adapter_.getScrollAreaScrollLeft(),n=this.clampScrollValue_(e-t);return{finalScrollPosition:n,scrollDelta:n-e}},c.prototype.getAnimatingScrollPosition=function(t,e){return t-e},c.prototype.calculateScrollEdges_=function(){var t=this.adapter_.getScrollContentOffsetWidth();return{left:this.adapter_.getScrollAreaOffsetWidth()-t,right:0}},c.prototype.clampScrollValue_=function(t){var e=this.calculateScrollEdges_();return Math.max(Math.min(e.right,t),e.left)},c);function c(){return null!==o&&o.apply(this,arguments)||this}e.MDCTabScrollerRTLNegative=a,e.default=a},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(29),a=(o=s.MDCTabScrollerRTL,r(c,o),c.prototype.getScrollPositionRTL=function(t){var e=this.adapter_.getScrollAreaScrollLeft();return Math.round(e-t)},c.prototype.scrollToRTL=function(t){var e=this.adapter_.getScrollAreaScrollLeft(),n=this.clampScrollValue_(t);return{finalScrollPosition:n,scrollDelta:e-n}},c.prototype.incrementScrollRTL=function(t){var e=this.adapter_.getScrollAreaScrollLeft(),n=this.clampScrollValue_(e+t);return{finalScrollPosition:n,scrollDelta:e-n}},c.prototype.getAnimatingScrollPosition=function(t,e){return t+e},c.prototype.calculateScrollEdges_=function(){return{left:this.adapter_.getScrollContentOffsetWidth()-this.adapter_.getScrollAreaOffsetWidth(),right:0}},c.prototype.clampScrollValue_=function(t){var e=this.calculateScrollEdges_();return Math.min(Math.max(e.right,t),e.left)},c);function c(){return null!==o&&o.apply(this,arguments)||this}e.MDCTabScrollerRTLReverse=a,e.default=a},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(85)),i(e(87)),i(e(14)),i(e(86)),i(e(88))},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(n,"__esModule",{value:!0});var o=r(e(83));n.util=o,i(e(81)),i(e(28)),i(e(82))},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(84)),i(e(89)),i(e(30))},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(159)),i(e(32)),i(e(94)),i(e(160)),i(e(161)),i(e(162))},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},s=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var a,c=n(1),u=n(5),l=s(n(2)),C=n(21),g=n(23),m=n(24),v=n(3),d=n(4),E=n(92),b=n(31),T=n(32),p=n(94),O=n(95),A=n(33),I=n(97),_=(a=c.MDCComponent,r(f,a),f.attachTo=function(t){return new f(t)},f.prototype.initialize=function(t,e,n,i,r,o,s){void 0===t&&(t=function(t,e){return new v.MDCRipple(t,e)}),void 0===e&&(e=function(t){return new g.MDCLineRipple(t)}),void 0===n&&(n=function(t){return new O.MDCTextFieldHelperText(t)}),void 0===i&&(i=function(t){return new E.MDCTextFieldCharacterCounter(t)}),void 0===r&&(r=function(t){return new I.MDCTextFieldIcon(t)}),void 0===o&&(o=function(t){return new C.MDCFloatingLabel(t)}),void 0===s&&(s=function(t){return new m.MDCNotchedOutline(t)}),this.input_=this.root_.querySelector(T.strings.INPUT_SELECTOR);var a=this.root_.querySelector(T.strings.LABEL_SELECTOR);this.label_=a?o(a):null;var c=this.root_.querySelector(T.strings.LINE_RIPPLE_SELECTOR);this.lineRipple_=c?e(c):null;var u=this.root_.querySelector(T.strings.OUTLINE_SELECTOR);this.outline_=u?s(u):null;var l=A.MDCTextFieldHelperTextFoundation.strings,d=this.root_.nextElementSibling,p=d&&d.classList.contains(T.cssClasses.HELPER_LINE),_=p&&d&&d.querySelector(l.ROOT_SELECTOR);this.helperText_=_?n(_):null;var f=b.MDCTextFieldCharacterCounterFoundation.strings,h=this.root_.querySelector(f.ROOT_SELECTOR);!h&&p&&d&&(h=d.querySelector(f.ROOT_SELECTOR)),this.characterCounter_=h?i(h):null,this.leadingIcon_=null,this.trailingIcon_=null;var y=this.root_.querySelectorAll(T.strings.ICON_SELECTOR);0<y.length&&(1<y.length?(this.leadingIcon_=r(y[0]),this.trailingIcon_=r(y[1])):this.root_.classList.contains(T.cssClasses.WITH_LEADING_ICON)?this.leadingIcon_=r(y[0]):this.trailingIcon_=r(y[0])),this.ripple=this.createRipple_(t)},f.prototype.destroy=function(){this.ripple&&this.ripple.destroy(),this.lineRipple_&&this.lineRipple_.destroy(),this.helperText_&&this.helperText_.destroy(),this.characterCounter_&&this.characterCounter_.destroy(),this.leadingIcon_&&this.leadingIcon_.destroy(),this.trailingIcon_&&this.trailingIcon_.destroy(),this.label_&&this.label_.destroy(),this.outline_&&this.outline_.destroy(),a.prototype.destroy.call(this)},f.prototype.initialSyncWithDOM=function(){this.disabled=this.input_.disabled},Object.defineProperty(f.prototype,"value",{get:function(){return this.foundation_.getValue()},set:function(t){this.foundation_.setValue(t)},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"disabled",{get:function(){return this.foundation_.isDisabled()},set:function(t){this.foundation_.setDisabled(t)},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"valid",{get:function(){return this.foundation_.isValid()},set:function(t){this.foundation_.setValid(t)},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"required",{get:function(){return this.input_.required},set:function(t){this.input_.required=t},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"pattern",{get:function(){return this.input_.pattern},set:function(t){this.input_.pattern=t},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"minLength",{get:function(){return this.input_.minLength},set:function(t){this.input_.minLength=t},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"maxLength",{get:function(){return this.input_.maxLength},set:function(t){t<0?this.input_.removeAttribute("maxLength"):this.input_.maxLength=t},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"min",{get:function(){return this.input_.min},set:function(t){this.input_.min=t},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"max",{get:function(){return this.input_.max},set:function(t){this.input_.max=t},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"step",{get:function(){return this.input_.step},set:function(t){this.input_.step=t},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"helperTextContent",{set:function(t){this.foundation_.setHelperTextContent(t)},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"leadingIconAriaLabel",{set:function(t){this.foundation_.setLeadingIconAriaLabel(t)},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"leadingIconContent",{set:function(t){this.foundation_.setLeadingIconContent(t)},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"trailingIconAriaLabel",{set:function(t){this.foundation_.setTrailingIconAriaLabel(t)},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"trailingIconContent",{set:function(t){this.foundation_.setTrailingIconContent(t)},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,"useNativeValidation",{set:function(t){this.foundation_.setUseNativeValidation(t)},enumerable:!0,configurable:!0}),f.prototype.focus=function(){this.input_.focus()},f.prototype.layout=function(){var t=this.foundation_.shouldFloat;this.foundation_.notchOutline(t)},f.prototype.getDefaultFoundation=function(){var t=o({},this.getRootAdapterMethods_(),this.getInputAdapterMethods_(),this.getLabelAdapterMethods_(),this.getLineRippleAdapterMethods_(),this.getOutlineAdapterMethods_());return new p.MDCTextFieldFoundation(t,this.getFoundationMap_())},f.prototype.getRootAdapterMethods_=function(){var n=this;return{addClass:function(t){return n.root_.classList.add(t)},removeClass:function(t){return n.root_.classList.remove(t)},hasClass:function(t){return n.root_.classList.contains(t)},registerTextFieldInteractionHandler:function(t,e){return n.listen(t,e)},deregisterTextFieldInteractionHandler:function(t,e){return n.unlisten(t,e)},registerValidationAttributeChangeHandler:function(e){var t=new MutationObserver(function(t){return e(function(t){return t.map(function(t){return t.attributeName}).filter(function(t){return t})}(t))});return t.observe(n.input_,{attributes:!0}),t},deregisterValidationAttributeChangeHandler:function(t){return t.disconnect()}}},f.prototype.getInputAdapterMethods_=function(){var n=this;return{getNativeInput:function(){return n.input_},isFocused:function(){return document.activeElement===n.input_},registerInputInteractionHandler:function(t,e){return n.input_.addEventListener(t,e,u.applyPassive())},deregisterInputInteractionHandler:function(t,e){return n.input_.removeEventListener(t,e,u.applyPassive())}}},f.prototype.getLabelAdapterMethods_=function(){var e=this;return{floatLabel:function(t){return e.label_&&e.label_.float(t)},getLabelWidth:function(){return e.label_?e.label_.getWidth():0},hasLabel:function(){return Boolean(e.label_)},shakeLabel:function(t){return e.label_&&e.label_.shake(t)}}},f.prototype.getLineRippleAdapterMethods_=function(){var e=this;return{activateLineRipple:function(){e.lineRipple_&&e.lineRipple_.activate()},deactivateLineRipple:function(){e.lineRipple_&&e.lineRipple_.deactivate()},setLineRippleTransformOrigin:function(t){e.lineRipple_&&e.lineRipple_.setRippleCenter(t)}}},f.prototype.getOutlineAdapterMethods_=function(){var e=this;return{closeOutline:function(){return e.outline_&&e.outline_.closeNotch()},hasOutline:function(){return Boolean(e.outline_)},notchOutline:function(t){return e.outline_&&e.outline_.notch(t)}}},f.prototype.getFoundationMap_=function(){return{characterCounter:this.characterCounter_?this.characterCounter_.foundation:void 0,helperText:this.helperText_?this.helperText_.foundation:void 0,leadingIcon:this.leadingIcon_?this.leadingIcon_.foundation:void 0,trailingIcon:this.trailingIcon_?this.trailingIcon_.foundation:void 0}},f.prototype.createRipple_=function(t){var n=this,e=this.root_.classList.contains(T.cssClasses.TEXTAREA),i=this.root_.classList.contains(T.cssClasses.OUTLINED);if(e||i)return null;var r=o({},v.MDCRipple.createAdapter(this),{isSurfaceActive:function(){return l.matches(n.input_,":active")},registerInteractionHandler:function(t,e){return n.input_.addEventListener(t,e,u.applyPassive())},deregisterInteractionHandler:function(t,e){return n.input_.removeEventListener(t,e,u.applyPassive())}});return t(this.root_,new d.MDCRippleFoundation(r))},f);function f(){return null!==a&&a.apply(this,arguments)||this}e.MDCTextField=_},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(92)),i(e(31));var r=e(93);n.characterCountCssClasses=r.cssClasses,n.characterCountStrings=r.strings},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(95)),i(e(33));var r=e(96);n.helperTextCssClasses=r.cssClasses,n.helperTextStrings=r.strings},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(97)),i(e(98));var r=e(99);n.iconCssClasses=r.cssClasses,n.iconStrings=r.strings},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(164)),i(e(7)),i(e(35)),i(e(100)),i(e(101)),i(e(34))},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(1),a=n(3),c=n(7),u=n(100),l=n(101),d=n(34),p=(o=s.MDCComponent,r(_,o),_.attachTo=function(t){return new _(t)},_.prototype.initialize=function(n){void 0===n&&(n=function(t){return a.MDCRipple.attachTo(t)}),this.navIcon_=this.root_.querySelector(c.strings.NAVIGATION_ICON_SELECTOR);var t=[].slice.call(this.root_.querySelectorAll(c.strings.ACTION_ITEM_SELECTOR));this.navIcon_&&t.push(this.navIcon_),this.iconRipples_=t.map(function(t){var e=n(t);return e.unbounded=!0,e}),this.scrollTarget_=window},_.prototype.initialSyncWithDOM=function(){this.handleNavigationClick_=this.foundation_.handleNavigationClick.bind(this.foundation_),this.handleWindowResize_=this.foundation_.handleWindowResize.bind(this.foundation_),this.handleTargetScroll_=this.foundation_.handleTargetScroll.bind(this.foundation_),this.scrollTarget_.addEventListener("scroll",this.handleTargetScroll_),this.navIcon_&&this.navIcon_.addEventListener("click",this.handleNavigationClick_);var t=this.root_.classList.contains(c.cssClasses.FIXED_CLASS);this.root_.classList.contains(c.cssClasses.SHORT_CLASS)||t||window.addEventListener("resize",this.handleWindowResize_)},_.prototype.destroy=function(){this.iconRipples_.forEach(function(t){return t.destroy()}),this.scrollTarget_.removeEventListener("scroll",this.handleTargetScroll_),this.navIcon_&&this.navIcon_.removeEventListener("click",this.handleNavigationClick_);var t=this.root_.classList.contains(c.cssClasses.FIXED_CLASS);this.root_.classList.contains(c.cssClasses.SHORT_CLASS)||t||window.removeEventListener("resize",this.handleWindowResize_),o.prototype.destroy.call(this)},_.prototype.setScrollTarget=function(t){this.scrollTarget_.removeEventListener("scroll",this.handleTargetScroll_),this.scrollTarget_=t,this.handleTargetScroll_=this.foundation_.handleTargetScroll.bind(this.foundation_),this.scrollTarget_.addEventListener("scroll",this.handleTargetScroll_)},_.prototype.getDefaultFoundation=function(){var n=this,t={hasClass:function(t){return n.root_.classList.contains(t)},addClass:function(t){return n.root_.classList.add(t)},removeClass:function(t){return n.root_.classList.remove(t)},setStyle:function(t,e){return n.root_.style.setProperty(t,e)},getTopAppBarHeight:function(){return n.root_.clientHeight},notifyNavigationIconClicked:function(){return n.emit(c.strings.NAVIGATION_EVENT,{})},getViewportScrollY:function(){var t=n.scrollTarget_,e=n.scrollTarget_;return void 0!==t.pageYOffset?t.pageYOffset:e.scrollTop},getTotalActionItems:function(){return n.root_.querySelectorAll(c.strings.ACTION_ITEM_SELECTOR).length}};return this.root_.classList.contains(c.cssClasses.SHORT_CLASS)?new l.MDCShortTopAppBarFoundation(t):this.root_.classList.contains(c.cssClasses.FIXED_CLASS)?new u.MDCFixedTopAppBarFoundation(t):new d.MDCTopAppBarFoundation(t)},_);function _(){return null!==o&&o.apply(this,arguments)||this}e.MDCTopAppBar=p}],r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=102);function r(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}var n,i});
},{}],"../node_modules/elm-mdc/elm-mdc.js":[function(require,module,exports) {
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(o) {
    if (t[o]) return t[o].exports;
    var a = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(a.exports, a, a.exports, n), a.l = !0, a.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var a in e) n.d(o, a, function (t) {
      return e[t];
    }.bind(null, a));
    return o;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 0);
}([function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.computeHorizontalScrollbarHeight = d;
  var o,
      a,
      r,
      i,
      c = l(n(1)),
      u = l(n(4));

  function l(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }

  function d(e) {
    var t = e.createElement("div");
    t.classList.add("mdc-tab-scroller__test"), e.body.appendChild(t);
    var n = t.offsetHeight - t.clientHeight;
    return e.body.removeChild(t), n;
  }

  !function () {
    if (!window.ElmFocusTrap) {
      window.ElmFocusTrap = {
        activeTrap: null
      };

      var e = function (e, t) {
        if (null === window.ElmFocusTrap.activeTrap) {
          var n = null;
          if (e.querySelector && "" !== e.dataset.focustrap && "{}" !== e.dataset.focustrap) try {
            n = e.querySelector("." + e.dataset.focustrap);
          } catch (e) {}

          try {
            var o = (0, c.default)(e, {
              initialFocus: n,
              clickOutsideDeactivates: !0,
              escapeDeactivates: !1
            }).activate();
            window.ElmFocusTrap.activeTrap = {
              node: e,
              focusTrap: o
            }, t && document.body.classList.add("mdc-dialog-scroll-lock");
          } catch (e) {}
        }
      },
          t = function (e) {
        null !== window.ElmFocusTrap.activeTrap && window.ElmFocusTrap.activeTrap.node === e && (window.ElmFocusTrap.activeTrap.focusTrap.deactivate(), window.ElmFocusTrap.activeTrap = null, document.body.classList.remove("mdc-dialog-scroll-lock"));
      };

      new MutationObserver(function (n) {
        for (var o = 0; o < n.length; o++) {
          var a = n[o];
          if ("childList" === a.type) for (var r = 0; r < a.removedNodes.length; r++) {
            var i = a.removedNodes[r];
            if (i.dataset) if (void 0 !== i.dataset.focustrap) t(i);else {
              var c = i.querySelector("[data-focustrap]");
              if (void 0 === c) continue;
              t(c);
            }
          }

          if ("attributes" === a.type) {
            var u = a.target;
            if (!u.dataset) continue;
            void 0 === u.dataset.focustrap ? t(u) : e(u, u.classList.contains("mdc-dialog"));
          }
        }
      }).observe(document.body, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["data-focustrap"]
      });
    }
  }(), o = function (e, t, n) {
    for (var o = function (e, t) {
      return e.querySelectorAll("[data-" + t + "]");
    }(e, t), a = 0; a < o.length; a++) {
      var r = new u.default(t);
      r = n(o[a], r), o[a].dispatchEvent(r);
    }
  }, new MutationObserver(function (e) {
    for (var t = 0; t < e.length; t++) {
      if ("childList" === e[t].type) for (var n = e[t].addedNodes, a = function (e) {
        var t = n[e];
        if (!t.dataset) return "continue";

        if (void 0 !== t.dataset.globaltick) {
          var a = new u.default("globaltick");
          t.dispatchEvent(a);
        }

        if (!t.querySelector) return "continue";
        o(t, "globaltick", function (e, n) {
          return JSON.parse(t.dataset.globaltick || "{}").targetRect && (n.targetRect = e.getBoundingClientRect()), JSON.parse(t.dataset.globaltick || "{}").parentRect && (n.parentRect = e.parentElement.getBoundingClientRect()), n;
        });
      }, r = 0; r < n.length; r++) a(r);

      if ("attributes" === e[t].type) {
        var i = e[t].target;
        if (!i.dataset) continue;

        if (void 0 !== i.dataset.globaltick) {
          var c = new u.default("globaltick");
          JSON.parse(i.dataset.globaltick || "{}").targetRect && (c.targetRect = i.getBoundingClientRect()), JSON.parse(i.dataset.globaltick || "{}").parentRect && (c.parentRect = i.parentElement.getBoundingClientRect()), i.dispatchEvent(c);
        }
      }
    }
  }).observe(document.body, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["data-globaltick"]
  }), document.addEventListener("scroll", function (e) {
    o(document, "globalscroll", function (e, t) {
      return t;
    });
  }), window.addEventListener("resize", function (e) {
    o(document, "globalresize", function (e, t) {
      return t;
    });
  }), document.addEventListener("mouseup", function (e) {
    o(document, "globalmouseup", function (t, n) {
      return n.pageX = e.pageX, n.pageY = e.pageY, n;
    });
  }), document.addEventListener("pointerup", function (e) {
    o(document, "globalpointerup", function (t, n) {
      return n.pageX = e.pageX, n.pageY = e.pageY, n;
    });
  }), document.addEventListener("touchend", function (e) {
    o(document, "globaltouchend", function (t, n) {
      return n.changedTouches = e.changedTouches, n;
    });
  }), document.addEventListener("mousemove", function (e) {
    o(document, "globalmousemove", function (t, n) {
      return n.pageX = e.pageX, n.pageY = e.pageY, n;
    });
  }), document.addEventListener("pointermove", function (e) {
    o(document, "globalpointermove", function (t, n) {
      return n.pageX = e.pageX, n.pageY = e.pageY, n;
    });
  }), document.addEventListener("touchmove", function (e) {
    o(document, "globaltouchmove", function (t, n) {
      return n.targetTouches = e.targetTouches, n;
    });
  }), a = document, r = d(a), (i = a.createElement("style")).innerHTML = ":root { --elm-mdc-horizontal-scrollbar-height: " + r + "px; }", a.head.appendChild(i);
}, function (e, t, n) {
  var o,
      a = n(2),
      r = n(3),
      i = (o = [], {
    activateTrap: function (e) {
      if (o.length > 0) {
        var t = o[o.length - 1];
        t !== e && t.pause();
      }

      var n = o.indexOf(e);
      -1 === n ? o.push(e) : (o.splice(n, 1), o.push(e));
    },
    deactivateTrap: function (e) {
      var t = o.indexOf(e);
      -1 !== t && o.splice(t, 1), o.length > 0 && o[o.length - 1].unpause();
    }
  });

  function c(e) {
    return setTimeout(e, 0);
  }

  e.exports = function (e, t) {
    var n = document,
        o = "string" == typeof e ? n.querySelector(e) : e,
        u = r({
      returnFocusOnDeactivate: !0,
      escapeDeactivates: !0
    }, t),
        l = {
      firstTabbableNode: null,
      lastTabbableNode: null,
      nodeFocusedBeforeActivation: null,
      mostRecentlyFocusedNode: null,
      active: !1,
      paused: !1
    },
        d = {
      activate: function (e) {
        if (!l.active) {
          E(), l.active = !0, l.paused = !1, l.nodeFocusedBeforeActivation = n.activeElement;
          var t = e && e.onActivate ? e.onActivate : u.onActivate;
          return t && t(), f(), d;
        }
      },
      deactivate: s,
      pause: function () {
        !l.paused && l.active && (l.paused = !0, p());
      },
      unpause: function () {
        l.paused && l.active && (l.paused = !1, f());
      }
    };
    return d;

    function s(e) {
      if (l.active) {
        p(), l.active = !1, l.paused = !1, i.deactivateTrap(d);
        var t = e && void 0 !== e.onDeactivate ? e.onDeactivate : u.onDeactivate;
        return t && t(), (e && void 0 !== e.returnFocus ? e.returnFocus : u.returnFocusOnDeactivate) && c(function () {
          w(l.nodeFocusedBeforeActivation);
        }), d;
      }
    }

    function f() {
      if (l.active) return i.activateTrap(d), E(), c(function () {
        w(b());
      }), n.addEventListener("focusin", g, !0), n.addEventListener("mousedown", m, !0), n.addEventListener("touchstart", m, !0), n.addEventListener("click", y, !0), n.addEventListener("keydown", h, !0), d;
    }

    function p() {
      if (l.active) return n.removeEventListener("focusin", g, !0), n.removeEventListener("mousedown", m, !0), n.removeEventListener("touchstart", m, !0), n.removeEventListener("click", y, !0), n.removeEventListener("keydown", h, !0), d;
    }

    function v(e) {
      var t = u[e],
          o = t;
      if (!t) return null;
      if ("string" == typeof t && !(o = n.querySelector(t))) throw new Error("`" + e + "` refers to no known node");
      if ("function" == typeof t && !(o = t())) throw new Error("`" + e + "` did not return a node");
      return o;
    }

    function b() {
      var e;
      if (!(e = null !== v("initialFocus") ? v("initialFocus") : o.contains(n.activeElement) ? n.activeElement : l.firstTabbableNode || v("fallbackFocus"))) throw new Error("You can't have a focus-trap without at least one focusable element");
      return e;
    }

    function m(e) {
      o.contains(e.target) || (u.clickOutsideDeactivates ? s({
        returnFocus: !a.isFocusable(e.target)
      }) : e.preventDefault());
    }

    function g(e) {
      o.contains(e.target) || e.target instanceof Document || (e.stopImmediatePropagation(), w(l.mostRecentlyFocusedNode || b()));
    }

    function h(e) {
      if (!1 !== u.escapeDeactivates && function (e) {
        return "Escape" === e.key || "Esc" === e.key || 27 === e.keyCode;
      }(e)) return e.preventDefault(), void s();
      (function (e) {
        return "Tab" === e.key || 9 === e.keyCode;
      })(e) && function (e) {
        if (E(), e.shiftKey && e.target === l.firstTabbableNode) return e.preventDefault(), void w(l.lastTabbableNode);
        e.shiftKey || e.target !== l.lastTabbableNode || (e.preventDefault(), w(l.firstTabbableNode));
      }(e);
    }

    function y(e) {
      u.clickOutsideDeactivates || o.contains(e.target) || (e.preventDefault(), e.stopImmediatePropagation());
    }

    function E() {
      var e = a(o);
      l.firstTabbableNode = e[0] || b(), l.lastTabbableNode = e[e.length - 1] || b();
    }

    function w(e) {
      e !== n.activeElement && (e && e.focus ? (e.focus(), l.mostRecentlyFocusedNode = e, function (e) {
        return e.tagName && "input" === e.tagName.toLowerCase() && "function" == typeof e.select;
      }(e) && e.select()) : w(b()));
    }
  };
}, function (e, t) {
  var n = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'],
      o = n.join(","),
      a = "undefined" == typeof Element ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

  function r(e, t) {
    t = t || {};
    var n,
        r,
        c,
        u = [],
        s = [],
        p = new f(e.ownerDocument || e),
        v = e.querySelectorAll(o);

    for (t.includeContainer && a.call(e, o) && (v = Array.prototype.slice.apply(v)).unshift(e), n = 0; n < v.length; n++) i(r = v[n], p) && (0 === (c = l(r)) ? u.push(r) : s.push({
      documentOrder: n,
      tabIndex: c,
      node: r
    }));

    return s.sort(d).map(function (e) {
      return e.node;
    }).concat(u);
  }

  function i(e, t) {
    return !(!c(e, t) || function (e) {
      return function (e) {
        return s(e) && "radio" === e.type;
      }(e) && !function (e) {
        if (!e.name) return !0;

        var t = function (e) {
          for (var t = 0; t < e.length; t++) if (e[t].checked) return e[t];
        }(e.ownerDocument.querySelectorAll('input[type="radio"][name="' + e.name + '"]'));

        return !t || t === e;
      }(e);
    }(e) || l(e) < 0);
  }

  function c(e, t) {
    return t = t || new f(e.ownerDocument || e), !(e.disabled || function (e) {
      return s(e) && "hidden" === e.type;
    }(e) || t.isUntouchable(e));
  }

  r.isTabbable = function (e, t) {
    if (!e) throw new Error("No node provided");
    return !1 !== a.call(e, o) && i(e, t);
  }, r.isFocusable = function (e, t) {
    if (!e) throw new Error("No node provided");
    return !1 !== a.call(e, u) && c(e, t);
  };
  var u = n.concat("iframe").join(",");

  function l(e) {
    var t = parseInt(e.getAttribute("tabindex"), 10);
    return isNaN(t) ? function (e) {
      return "true" === e.contentEditable;
    }(e) ? 0 : e.tabIndex : t;
  }

  function d(e, t) {
    return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
  }

  function s(e) {
    return "INPUT" === e.tagName;
  }

  function f(e) {
    this.doc = e, this.cache = [];
  }

  f.prototype.hasDisplayNone = function (e, t) {
    if (e.nodeType !== Node.ELEMENT_NODE) return !1;

    var n = function (e, t) {
      for (var n = 0, o = e.length; n < o; n++) if (t(e[n])) return e[n];
    }(this.cache, function (t) {
      return t === e;
    });

    if (n) return n[1];
    var o = !1;
    return "none" === (t = t || this.doc.defaultView.getComputedStyle(e)).display ? o = !0 : e.parentNode && (o = this.hasDisplayNone(e.parentNode)), this.cache.push([e, o]), o;
  }, f.prototype.isUntouchable = function (e) {
    if (e === this.doc.documentElement) return !1;
    var t = this.doc.defaultView.getComputedStyle(e);
    return !!this.hasDisplayNone(e, t) || "hidden" === t.visibility;
  }, e.exports = r;
}, function (e, t) {
  e.exports = function () {
    for (var e = {}, t = 0; t < arguments.length; t++) {
      var o = arguments[t];

      for (var a in o) n.call(o, a) && (e[a] = o[a]);
    }

    return e;
  };

  var n = Object.prototype.hasOwnProperty;
}, function (e, t, n) {
  (function (t) {
    var n = t.CustomEvent;
    e.exports = function () {
      try {
        var e = new n("cat", {
          detail: {
            foo: "bar"
          }
        });
        return "cat" === e.type && "bar" === e.detail.foo;
      } catch (e) {}

      return !1;
    }() ? n : "undefined" != typeof document && "function" == typeof document.createEvent ? function (e, t) {
      var n = document.createEvent("CustomEvent");
      return t ? n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail) : n.initCustomEvent(e, !1, !1, void 0), n;
    } : function (e, t) {
      var n = document.createEventObject();
      return n.type = e, t ? (n.bubbles = Boolean(t.bubbles), n.cancelable = Boolean(t.cancelable), n.detail = t.detail) : (n.bubbles = !1, n.cancelable = !1, n.detail = void 0), n;
    };
  }).call(this, n(5));
}, function (e, t) {
  var n;

  n = function () {
    return this;
  }();

  try {
    n = n || new Function("return this")();
  } catch (e) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
  }

  e.exports = n;
}]);
},{}],"mdc-override.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"main.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"shim.js":[function(require,module,exports) {
'use strict';

var _Main = require("./Main.elm");

var _nosleep = _interopRequireDefault(require("nosleep.js"));

require("material-components-web/dist/material-components-web.min.css");

require("material-components-web/dist/material-components-web.min.js");

require("elm-mdc/elm-mdc.js");

require("./mdc-override.css");

require("./main.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alarm = document.getElementById('alarm');
var noSleep = new _nosleep.default();

var app = _Main.Elm.Main.init({
  node: document.querySelector('main'),
  flags: {}
});

app.ports.playAlarm.subscribe(function () {
  alarm.play();
});
app.ports.stopAlarm.subscribe(function () {
  alarm.pause();
  alarm.currentTime = 0;
});
app.ports.alert.subscribe(function (msg) {
  window.alert(msg);
});
app.ports.setNoSleep.subscribe(function (active) {
  if (active) {
    noSleep.enable();
  } else {
    noSleep.disable();
  }
});
},{"./Main.elm":"Main.elm","nosleep.js":"../node_modules/nosleep.js/src/index.js","material-components-web/dist/material-components-web.min.css":"../node_modules/material-components-web/dist/material-components-web.min.css","material-components-web/dist/material-components-web.min.js":"../node_modules/material-components-web/dist/material-components-web.min.js","elm-mdc/elm-mdc.js":"../node_modules/elm-mdc/elm-mdc.js","./mdc-override.css":"mdc-override.css","./main.css":"main.css"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63452" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","shim.js"], null)
//# sourceMappingURL=/shim.9121b6a0.js.map