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


// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.multiline) { flags += 'm'; }
	if (options.caseInsensitive) { flags += 'i'; }

	try
	{
		return $elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return $elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;
var $elm$core$List$cons = _List_cons;
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
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
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
var $elm$json$Json$Decode$andThen = _Json_andThen;
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
var $author$project$Model$EditModel = function (a) {
	return {$: 'EditModel', a: a};
};
var $author$project$Text$Japanese = {$: 'Japanese'};
var $author$project$Msg$Mdc = function (a) {
	return {$: 'Mdc', a: a};
};
var $author$project$Model$NotLoggedIn = {$: 'NotLoggedIn'};
var $author$project$Material$defaultModel = {button: $elm$core$Dict$empty, checkbox: $elm$core$Dict$empty, chip: $elm$core$Dict$empty, dialog: $elm$core$Dict$empty, drawer: $elm$core$Dict$empty, fab: $elm$core$Dict$empty, iconButton: $elm$core$Dict$empty, list: $elm$core$Dict$empty, menu: $elm$core$Dict$empty, radio: $elm$core$Dict$empty, ripple: $elm$core$Dict$empty, select: $elm$core$Dict$empty, slider: $elm$core$Dict$empty, snackbar: $elm$core$Dict$empty, _switch: $elm$core$Dict$empty, tabbar: $elm$core$Dict$empty, textfield: $elm$core$Dict$empty, topAppBar: $elm$core$Dict$empty};
var $author$project$Material$init = function (_v0) {
	return $elm$core$Platform$Cmd$none;
};
var $elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 'Seed', a: a, b: b};
	});
var $elm$random$Random$next = function (_v0) {
	var state0 = _v0.a;
	var incr = _v0.b;
	return A2($elm$random$Random$Seed, ((state0 * 1664525) + incr) >>> 0, incr);
};
var $elm$random$Random$initialSeed = function (x) {
	var _v0 = $elm$random$Random$next(
		A2($elm$random$Random$Seed, 0, 1013904223));
	var state1 = _v0.a;
	var incr = _v0.b;
	var state2 = (state1 + x) >>> 0;
	return $elm$random$Random$next(
		A2($elm$random$Random$Seed, state2, incr));
};
var $author$project$Model$TimeInput = F2(
	function (minutes, seconds) {
		return {minutes: minutes, seconds: seconds};
	});
var $author$project$Model$initialTimeInputs = {
	dev: A2($author$project$Model$TimeInput, '5', '0'),
	fix: A2($author$project$Model$TimeInput, '10', '0'),
	rinse: A2($author$project$Model$TimeInput, '5', '0'),
	soak: A2($author$project$Model$TimeInput, '0', '30'),
	stop: A2($author$project$Model$TimeInput, '2', '0'),
	wet: A2($author$project$Model$TimeInput, '0', '30')
};
var $author$project$Main$init = function (_v0) {
	var seed = _v0.seed;
	return _Utils_Tuple2(
		{
			appModel: $author$project$Model$EditModel(
				{drawerOpen: false, loadingProgressOpen: false, logInDialogOpen: false, logInDialogSelected: $elm$core$Maybe$Nothing, nameTextFieldOpen: false}),
			lang: $author$project$Text$Japanese,
			loggedIn: $author$project$Model$NotLoggedIn,
			mdc: $author$project$Material$defaultModel,
			recipeName: '',
			seed: $elm$random$Random$initialSeed(seed),
			timeInputs: $author$project$Model$initialTimeInputs
		},
		$author$project$Material$init($author$project$Msg$Mdc));
};
var $author$project$Msg$Error = function (a) {
	return {$: 'Error', a: a};
};
var $author$project$Msg$Error$Foreign = function (a) {
	return {$: 'Foreign', a: a};
};
var $author$project$Msg$Error$RecipeDecoder = function (a) {
	return {$: 'RecipeDecoder', a: a};
};
var $author$project$Msg$RecipesChanged = function (a) {
	return {$: 'RecipesChanged', a: a};
};
var $author$project$Msg$Tick = function (a) {
	return {$: 'Tick', a: a};
};
var $author$project$Msg$UserChanged = function (a) {
	return {$: 'UserChanged', a: a};
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$json$Json$Decode$array = _Json_decodeArray;
var $author$project$Port$changeRecipesSub = _Platform_incomingPort(
	'changeRecipesSub',
	$elm$json$Json$Decode$array(
		A2(
			$elm$json$Json$Decode$andThen,
			function (timeInputs) {
				return A2(
					$elm$json$Json$Decode$andThen,
					function (name) {
						return A2(
							$elm$json$Json$Decode$andThen,
							function (id) {
								return $elm$json$Json$Decode$succeed(
									{id: id, name: name, timeInputs: timeInputs});
							},
							A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$string));
					},
					A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string));
			},
			A2(
				$elm$json$Json$Decode$field,
				'timeInputs',
				A2(
					$elm$json$Json$Decode$andThen,
					function (wet) {
						return A2(
							$elm$json$Json$Decode$andThen,
							function (stop) {
								return A2(
									$elm$json$Json$Decode$andThen,
									function (soak) {
										return A2(
											$elm$json$Json$Decode$andThen,
											function (rinse) {
												return A2(
													$elm$json$Json$Decode$andThen,
													function (fix) {
														return A2(
															$elm$json$Json$Decode$andThen,
															function (dev) {
																return $elm$json$Json$Decode$succeed(
																	{dev: dev, fix: fix, rinse: rinse, soak: soak, stop: stop, wet: wet});
															},
															A2(
																$elm$json$Json$Decode$field,
																'dev',
																A2(
																	$elm$json$Json$Decode$andThen,
																	function (seconds) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (minutes) {
																				return $elm$json$Json$Decode$succeed(
																					{minutes: minutes, seconds: seconds});
																			},
																			A2($elm$json$Json$Decode$field, 'minutes', $elm$json$Json$Decode$string));
																	},
																	A2($elm$json$Json$Decode$field, 'seconds', $elm$json$Json$Decode$string))));
													},
													A2(
														$elm$json$Json$Decode$field,
														'fix',
														A2(
															$elm$json$Json$Decode$andThen,
															function (seconds) {
																return A2(
																	$elm$json$Json$Decode$andThen,
																	function (minutes) {
																		return $elm$json$Json$Decode$succeed(
																			{minutes: minutes, seconds: seconds});
																	},
																	A2($elm$json$Json$Decode$field, 'minutes', $elm$json$Json$Decode$string));
															},
															A2($elm$json$Json$Decode$field, 'seconds', $elm$json$Json$Decode$string))));
											},
											A2(
												$elm$json$Json$Decode$field,
												'rinse',
												A2(
													$elm$json$Json$Decode$andThen,
													function (seconds) {
														return A2(
															$elm$json$Json$Decode$andThen,
															function (minutes) {
																return $elm$json$Json$Decode$succeed(
																	{minutes: minutes, seconds: seconds});
															},
															A2($elm$json$Json$Decode$field, 'minutes', $elm$json$Json$Decode$string));
													},
													A2($elm$json$Json$Decode$field, 'seconds', $elm$json$Json$Decode$string))));
									},
									A2(
										$elm$json$Json$Decode$field,
										'soak',
										A2(
											$elm$json$Json$Decode$andThen,
											function (seconds) {
												return A2(
													$elm$json$Json$Decode$andThen,
													function (minutes) {
														return $elm$json$Json$Decode$succeed(
															{minutes: minutes, seconds: seconds});
													},
													A2($elm$json$Json$Decode$field, 'minutes', $elm$json$Json$Decode$string));
											},
											A2($elm$json$Json$Decode$field, 'seconds', $elm$json$Json$Decode$string))));
							},
							A2(
								$elm$json$Json$Decode$field,
								'stop',
								A2(
									$elm$json$Json$Decode$andThen,
									function (seconds) {
										return A2(
											$elm$json$Json$Decode$andThen,
											function (minutes) {
												return $elm$json$Json$Decode$succeed(
													{minutes: minutes, seconds: seconds});
											},
											A2($elm$json$Json$Decode$field, 'minutes', $elm$json$Json$Decode$string));
									},
									A2($elm$json$Json$Decode$field, 'seconds', $elm$json$Json$Decode$string))));
					},
					A2(
						$elm$json$Json$Decode$field,
						'wet',
						A2(
							$elm$json$Json$Decode$andThen,
							function (seconds) {
								return A2(
									$elm$json$Json$Decode$andThen,
									function (minutes) {
										return $elm$json$Json$Decode$succeed(
											{minutes: minutes, seconds: seconds});
									},
									A2($elm$json$Json$Decode$field, 'minutes', $elm$json$Json$Decode$string));
							},
							A2($elm$json$Json$Decode$field, 'seconds', $elm$json$Json$Decode$string))))))));
var $arowM$elm_form_decoder$Form$Decoder$Decoder = function (a) {
	return {$: 'Decoder', a: a};
};
var $arowM$elm_form_decoder$Form$Decoder$custom = $arowM$elm_form_decoder$Form$Decoder$Decoder;
var $elm$core$Elm$JsArray$indexedMap = _JsArray_indexedMap;
var $elm$core$Array$indexedMap = F2(
	function (func, _v0) {
		var len = _v0.a;
		var tree = _v0.c;
		var tail = _v0.d;
		var initialBuilder = {
			nodeList: _List_Nil,
			nodeListSize: 0,
			tail: A3(
				$elm$core$Elm$JsArray$indexedMap,
				func,
				$elm$core$Array$tailIndex(len),
				tail)
		};
		var helper = F2(
			function (node, builder) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldl, helper, builder, subTree);
				} else {
					var leaf = node.a;
					var offset = builder.nodeListSize * $elm$core$Array$branchFactor;
					var mappedLeaf = $elm$core$Array$Leaf(
						A3($elm$core$Elm$JsArray$indexedMap, func, offset, leaf));
					return {
						nodeList: A2($elm$core$List$cons, mappedLeaf, builder.nodeList),
						nodeListSize: builder.nodeListSize + 1,
						tail: builder.tail
					};
				}
			});
		return A2(
			$elm$core$Array$builderToArray,
			true,
			A3($elm$core$Elm$JsArray$foldl, helper, initialBuilder, tree));
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $arowM$elm_form_decoder$Form$Decoder$pushArrayResult = F2(
	function (r1, r2) {
		var _v0 = _Utils_Tuple2(r1, r2);
		if (_v0.a.$ === 'Err') {
			if (_v0.b.$ === 'Err') {
				var err = _v0.a.a;
				var errs = _v0.b.a;
				return $elm$core$Result$Err(
					_Utils_ap(err, errs));
			} else {
				var err = _v0.a.a;
				return $elm$core$Result$Err(err);
			}
		} else {
			if (_v0.b.$ === 'Err') {
				var errs = _v0.b.a;
				return $elm$core$Result$Err(errs);
			} else {
				var b = _v0.a.a;
				var bs = _v0.b.a;
				return $elm$core$Result$Ok(
					A2($elm$core$Array$push, b, bs));
			}
		}
	});
var $arowM$elm_form_decoder$Form$Decoder$run = F2(
	function (_v0, a) {
		var f = _v0.a;
		return f(a);
	});
var $arowM$elm_form_decoder$Form$Decoder$runWithTag = F3(
	function (tag, d, a) {
		return A2(
			$elm$core$Result$mapError,
			$elm$core$List$map(
				function (err) {
					return _Utils_Tuple2(tag, err);
				}),
			A2($arowM$elm_form_decoder$Form$Decoder$run, d, a));
	});
var $arowM$elm_form_decoder$Form$Decoder$arrayOf = function (d) {
	return $arowM$elm_form_decoder$Form$Decoder$custom(
		A2(
			$elm$core$Basics$composeL,
			A2(
				$elm$core$Basics$composeL,
				$elm$core$Result$mapError($elm$core$List$reverse),
				A2(
					$elm$core$Array$foldl,
					$arowM$elm_form_decoder$Form$Decoder$pushArrayResult,
					$elm$core$Result$Ok(
						$elm$core$Array$fromList(_List_Nil)))),
			$elm$core$Array$indexedMap(
				function (n) {
					return A2($arowM$elm_form_decoder$Form$Decoder$runWithTag, n, d);
				})));
};
var $arowM$elm_form_decoder$Form$Decoder$mapError = F2(
	function (f, _v0) {
		var g = _v0.a;
		return $arowM$elm_form_decoder$Form$Decoder$custom(
			A2(
				$elm$core$Basics$composeL,
				$elm$core$Result$mapError(
					$elm$core$List$map(f)),
				g));
	});
var $arowM$elm_form_decoder$Form$Decoder$array = A2(
	$elm$core$Basics$composeL,
	$arowM$elm_form_decoder$Form$Decoder$mapError($elm$core$Tuple$second),
	$arowM$elm_form_decoder$Form$Decoder$arrayOf);
var $author$project$Model$Recipe = F3(
	function (id, name, timeInputs) {
		return {id: id, name: name, timeInputs: timeInputs};
	});
var $author$project$Model$UuidError = function (a) {
	return {$: 'UuidError', a: a};
};
var $TSFoster$elm_uuid$UUID$WrongFormat = {$: 'WrongFormat'};
var $TSFoster$elm_uuid$UUID$WrongLength = {$: 'WrongLength'};
var $elm$core$String$endsWith = _String_endsWith;
var $TSFoster$elm_uuid$UUID$IsNil = {$: 'IsNil'};
var $TSFoster$elm_uuid$UUID$NoVersion = {$: 'NoVersion'};
var $TSFoster$elm_uuid$UUID$UUID = F4(
	function (a, b, c, d) {
		return {$: 'UUID', a: a, b: b, c: c, d: d};
	});
var $TSFoster$elm_uuid$UUID$UnsupportedVariant = {$: 'UnsupportedVariant'};
var $TSFoster$elm_uuid$UUID$isVariant1 = function (_v0) {
	var c = _v0.c;
	return (c >>> 30) === 2;
};
var $TSFoster$elm_uuid$UUID$version = function (_v0) {
	var b = _v0.b;
	return 15 & (b >>> 12);
};
var $TSFoster$elm_uuid$UUID$fromInt32s = F4(
	function (a, b, c, d) {
		var wouldBeUUID = A4($TSFoster$elm_uuid$UUID$UUID, a, b, c, d);
		return ((!a) && ((!b) && ((!c) && (!d)))) ? $elm$core$Result$Err($TSFoster$elm_uuid$UUID$IsNil) : (($TSFoster$elm_uuid$UUID$version(wouldBeUUID) > 5) ? $elm$core$Result$Err($TSFoster$elm_uuid$UUID$NoVersion) : ((!$TSFoster$elm_uuid$UUID$isVariant1(wouldBeUUID)) ? $elm$core$Result$Err($TSFoster$elm_uuid$UUID$UnsupportedVariant) : $elm$core$Result$Ok(wouldBeUUID)));
	});
var $TSFoster$elm_uuid$UUID$forceUnsigned = $elm$core$Bitwise$shiftRightZfBy(0);
var $elm$core$Bitwise$or = _Bitwise_or;
var $TSFoster$elm_uuid$UUID$nibbleValuesToU32 = F8(
	function (a, b, c, d, e, f, g, h) {
		return $TSFoster$elm_uuid$UUID$forceUnsigned((a << 28) | ((b << 24) | ((c << 20) | ((d << 16) | ((e << 12) | ((f << 8) | ((g << 4) | h)))))));
	});
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $elm$core$String$toLower = _String_toLower;
var $TSFoster$elm_uuid$UUID$toNibbleValue = function (_char) {
	switch (_char.valueOf()) {
		case '0':
			return $elm$core$Maybe$Just(0);
		case '1':
			return $elm$core$Maybe$Just(1);
		case '2':
			return $elm$core$Maybe$Just(2);
		case '3':
			return $elm$core$Maybe$Just(3);
		case '4':
			return $elm$core$Maybe$Just(4);
		case '5':
			return $elm$core$Maybe$Just(5);
		case '6':
			return $elm$core$Maybe$Just(6);
		case '7':
			return $elm$core$Maybe$Just(7);
		case '8':
			return $elm$core$Maybe$Just(8);
		case '9':
			return $elm$core$Maybe$Just(9);
		case 'a':
			return $elm$core$Maybe$Just(10);
		case 'b':
			return $elm$core$Maybe$Just(11);
		case 'c':
			return $elm$core$Maybe$Just(12);
		case 'd':
			return $elm$core$Maybe$Just(13);
		case 'e':
			return $elm$core$Maybe$Just(14);
		case 'f':
			return $elm$core$Maybe$Just(15);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $TSFoster$elm_uuid$UUID$fromString = function (string) {
	var normalized = function (str) {
		return A2($elm$core$String$startsWith, 'urn:uuid:', str) ? A2($elm$core$String$dropLeft, 9, str) : ((A2($elm$core$String$startsWith, '{', str) && A2($elm$core$String$endsWith, '}', str)) ? A3($elm$core$String$slice, 1, -1, str) : str);
	}(
		$elm$core$String$toLower(
			A3(
				$elm$core$String$replace,
				'-',
				'',
				A3(
					$elm$core$String$replace,
					' ',
					'',
					A3(
						$elm$core$String$replace,
						'\t',
						'',
						A3($elm$core$String$replace, '\n', '', string))))));
	if ($elm$core$String$length(normalized) !== 32) {
		return $elm$core$Result$Err($TSFoster$elm_uuid$UUID$WrongLength);
	} else {
		var _v0 = A2(
			$elm$core$List$filterMap,
			$TSFoster$elm_uuid$UUID$toNibbleValue,
			$elm$core$String$toList(normalized));
		if ((((((((((((((((((((((((((((((((_v0.b && _v0.b.b) && _v0.b.b.b) && _v0.b.b.b.b) && _v0.b.b.b.b.b) && _v0.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b) && (!_v0.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b)) {
			var a1 = _v0.a;
			var _v1 = _v0.b;
			var a2 = _v1.a;
			var _v2 = _v1.b;
			var a3 = _v2.a;
			var _v3 = _v2.b;
			var a4 = _v3.a;
			var _v4 = _v3.b;
			var a5 = _v4.a;
			var _v5 = _v4.b;
			var a6 = _v5.a;
			var _v6 = _v5.b;
			var a7 = _v6.a;
			var _v7 = _v6.b;
			var a8 = _v7.a;
			var _v8 = _v7.b;
			var b1 = _v8.a;
			var _v9 = _v8.b;
			var b2 = _v9.a;
			var _v10 = _v9.b;
			var b3 = _v10.a;
			var _v11 = _v10.b;
			var b4 = _v11.a;
			var _v12 = _v11.b;
			var b5 = _v12.a;
			var _v13 = _v12.b;
			var b6 = _v13.a;
			var _v14 = _v13.b;
			var b7 = _v14.a;
			var _v15 = _v14.b;
			var b8 = _v15.a;
			var _v16 = _v15.b;
			var c1 = _v16.a;
			var _v17 = _v16.b;
			var c2 = _v17.a;
			var _v18 = _v17.b;
			var c3 = _v18.a;
			var _v19 = _v18.b;
			var c4 = _v19.a;
			var _v20 = _v19.b;
			var c5 = _v20.a;
			var _v21 = _v20.b;
			var c6 = _v21.a;
			var _v22 = _v21.b;
			var c7 = _v22.a;
			var _v23 = _v22.b;
			var c8 = _v23.a;
			var _v24 = _v23.b;
			var d1 = _v24.a;
			var _v25 = _v24.b;
			var d2 = _v25.a;
			var _v26 = _v25.b;
			var d3 = _v26.a;
			var _v27 = _v26.b;
			var d4 = _v27.a;
			var _v28 = _v27.b;
			var d5 = _v28.a;
			var _v29 = _v28.b;
			var d6 = _v29.a;
			var _v30 = _v29.b;
			var d7 = _v30.a;
			var _v31 = _v30.b;
			var d8 = _v31.a;
			return A4(
				$TSFoster$elm_uuid$UUID$fromInt32s,
				A8($TSFoster$elm_uuid$UUID$nibbleValuesToU32, a1, a2, a3, a4, a5, a6, a7, a8),
				A8($TSFoster$elm_uuid$UUID$nibbleValuesToU32, b1, b2, b3, b4, b5, b6, b7, b8),
				A8($TSFoster$elm_uuid$UUID$nibbleValuesToU32, c1, c2, c3, c4, c5, c6, c7, c8),
				A8($TSFoster$elm_uuid$UUID$nibbleValuesToU32, d1, d2, d3, d4, d5, d6, d7, d8));
		} else {
			return $elm$core$Result$Err($TSFoster$elm_uuid$UUID$WrongFormat);
		}
	}
};
var $arowM$elm_form_decoder$Form$Decoder$identity = $arowM$elm_form_decoder$Form$Decoder$custom($elm$core$Result$Ok);
var $arowM$elm_form_decoder$Form$Decoder$lift = F2(
	function (f, _v0) {
		var g = _v0.a;
		return $arowM$elm_form_decoder$Form$Decoder$custom(
			A2($elm$core$Basics$composeL, g, f));
	});
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $arowM$elm_form_decoder$Form$Decoder$field = F2(
	function (_v0, _v1) {
		var f = _v0.a;
		var g = _v1.a;
		return $arowM$elm_form_decoder$Form$Decoder$custom(
			function (i) {
				var _v2 = _Utils_Tuple2(
					g(i),
					f(i));
				if (_v2.a.$ === 'Ok') {
					var h = _v2.a.a;
					var res = _v2.b;
					return A2($elm$core$Result$map, h, res);
				} else {
					if (_v2.b.$ === 'Err') {
						var gErr = _v2.a.a;
						var fErr = _v2.b.a;
						return $elm$core$Result$Err(
							_Utils_ap(gErr, fErr));
					} else {
						var gErr = _v2.a.a;
						return $elm$core$Result$Err(gErr);
					}
				}
			});
	});
var $arowM$elm_form_decoder$Form$Decoder$top = function (f) {
	return $arowM$elm_form_decoder$Form$Decoder$custom(
		function (_v0) {
			return $elm$core$Result$Ok(f);
		});
};
var $arowM$elm_form_decoder$Form$Decoder$map3 = F4(
	function (f, d1, d2, d3) {
		return A2(
			$arowM$elm_form_decoder$Form$Decoder$field,
			d3,
			A2(
				$arowM$elm_form_decoder$Form$Decoder$field,
				d2,
				A2(
					$arowM$elm_form_decoder$Form$Decoder$field,
					d1,
					$arowM$elm_form_decoder$Form$Decoder$top(f))));
	});
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $author$project$Port$recipeDecoder = A4(
	$arowM$elm_form_decoder$Form$Decoder$map3,
	$author$project$Model$Recipe,
	A2(
		$arowM$elm_form_decoder$Form$Decoder$lift,
		function ($) {
			return $.id;
		},
		A2(
			$arowM$elm_form_decoder$Form$Decoder$mapError,
			$author$project$Model$UuidError,
			$arowM$elm_form_decoder$Form$Decoder$custom(
				A2(
					$elm$core$Basics$composeL,
					$elm$core$Result$mapError($elm$core$List$singleton),
					$TSFoster$elm_uuid$UUID$fromString)))),
	A2(
		$arowM$elm_form_decoder$Form$Decoder$lift,
		function ($) {
			return $.name;
		},
		$arowM$elm_form_decoder$Form$Decoder$identity),
	A2(
		$arowM$elm_form_decoder$Form$Decoder$lift,
		function ($) {
			return $.timeInputs;
		},
		$arowM$elm_form_decoder$Form$Decoder$identity));
var $author$project$Port$recipesDecoder = $arowM$elm_form_decoder$Form$Decoder$array($author$project$Port$recipeDecoder);
var $author$project$Port$inRecipes = $arowM$elm_form_decoder$Form$Decoder$run($author$project$Port$recipesDecoder);
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)),
			string);
	});
var $elm$core$String$fromList = _String_fromList;
var $TSFoster$elm_uuid$UUID$toHex = F2(
	function (acc, _int) {
		toHex:
		while (true) {
			if (!_int) {
				return $elm$core$String$fromList(acc);
			} else {
				var _char = function () {
					var _v0 = 15 & _int;
					switch (_v0) {
						case 0:
							return _Utils_chr('0');
						case 1:
							return _Utils_chr('1');
						case 2:
							return _Utils_chr('2');
						case 3:
							return _Utils_chr('3');
						case 4:
							return _Utils_chr('4');
						case 5:
							return _Utils_chr('5');
						case 6:
							return _Utils_chr('6');
						case 7:
							return _Utils_chr('7');
						case 8:
							return _Utils_chr('8');
						case 9:
							return _Utils_chr('9');
						case 10:
							return _Utils_chr('a');
						case 11:
							return _Utils_chr('b');
						case 12:
							return _Utils_chr('c');
						case 13:
							return _Utils_chr('d');
						case 14:
							return _Utils_chr('e');
						default:
							return _Utils_chr('f');
					}
				}();
				var $temp$acc = A2($elm$core$List$cons, _char, acc),
					$temp$int = _int >>> 4;
				acc = $temp$acc;
				_int = $temp$int;
				continue toHex;
			}
		}
	});
var $TSFoster$elm_uuid$UUID$toString = function (_v0) {
	var a = _v0.a;
	var b = _v0.b;
	var c = _v0.c;
	var d = _v0.d;
	return A3(
		$elm$core$String$padLeft,
		8,
		_Utils_chr('0'),
		A2($TSFoster$elm_uuid$UUID$toHex, _List_Nil, a)) + ('-' + (A3(
		$elm$core$String$padLeft,
		4,
		_Utils_chr('0'),
		A2($TSFoster$elm_uuid$UUID$toHex, _List_Nil, b >>> 16)) + ('-' + (A3(
		$elm$core$String$padLeft,
		4,
		_Utils_chr('0'),
		A2($TSFoster$elm_uuid$UUID$toHex, _List_Nil, 65535 & b)) + ('-' + (A3(
		$elm$core$String$padLeft,
		4,
		_Utils_chr('0'),
		A2($TSFoster$elm_uuid$UUID$toHex, _List_Nil, c >>> 16)) + ('-' + (A3(
		$elm$core$String$padLeft,
		4,
		_Utils_chr('0'),
		A2($TSFoster$elm_uuid$UUID$toHex, _List_Nil, 65535 & c)) + A3(
		$elm$core$String$padLeft,
		8,
		_Utils_chr('0'),
		A2($TSFoster$elm_uuid$UUID$toHex, _List_Nil, d))))))))));
};
var $author$project$Sub$changeRecipes = F2(
	function (errMsg, msg) {
		var msg_ = function (recipes) {
			var _v0 = $author$project$Port$inRecipes(recipes);
			if (_v0.$ === 'Ok') {
				var recipes_ = _v0.a;
				return msg(
					$elm$core$Dict$fromList(
						A2(
							$elm$core$List$map,
							function (r) {
								return _Utils_Tuple2(
									$TSFoster$elm_uuid$UUID$toString(r.id),
									r);
							},
							$elm$core$Array$toList(recipes_))));
			} else {
				var err = _v0.a;
				return errMsg(err);
			}
		};
		return $author$project$Port$changeRecipesSub(msg_);
	});
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $author$project$Port$changeUserSub = _Platform_incomingPort(
	'changeUserSub',
	$elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
				A2(
				$elm$json$Json$Decode$map,
				$elm$core$Maybe$Just,
				A2(
					$elm$json$Json$Decode$andThen,
					function (uid) {
						return A2(
							$elm$json$Json$Decode$andThen,
							function (displayName) {
								return $elm$json$Json$Decode$succeed(
									{displayName: displayName, uid: uid});
							},
							A2($elm$json$Json$Decode$field, 'displayName', $elm$json$Json$Decode$string));
					},
					A2($elm$json$Json$Decode$field, 'uid', $elm$json$Json$Decode$string)))
			])));
var $author$project$Sub$changeUser = $author$project$Port$changeUserSub;
var $author$project$Port$errorSub = _Platform_incomingPort('errorSub', $elm$json$Json$Decode$string);
var $author$project$Sub$error = $author$project$Port$errorSub;
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
	if (appModel.$ === 'EditModel') {
		return $elm$core$Platform$Sub$batch(
			_List_fromArray(
				[
					A2($author$project$Material$subscriptions, $author$project$Msg$Mdc, model),
					$author$project$Sub$changeUser($author$project$Msg$UserChanged),
					A2(
					$author$project$Sub$changeRecipes,
					A2($elm$core$Basics$composeL, $author$project$Msg$Error, $author$project$Msg$Error$RecipeDecoder),
					$author$project$Msg$RecipesChanged),
					$author$project$Sub$error(
					A2($elm$core$Basics$composeL, $author$project$Msg$Error, $author$project$Msg$Error$Foreign))
				]));
	} else {
		var state = appModel.a.state;
		if (state.$ === 'RunState') {
			return $elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						A2($elm$time$Time$every, 1000, $author$project$Msg$Tick),
						A2($author$project$Material$subscriptions, $author$project$Msg$Mdc, model),
						$author$project$Sub$error(
						A2($elm$core$Basics$composeL, $author$project$Msg$Error, $author$project$Msg$Error$Foreign))
					]));
		} else {
			return $elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						A2($author$project$Material$subscriptions, $author$project$Msg$Mdc, model),
						$author$project$Sub$error(
						A2($elm$core$Basics$composeL, $author$project$Msg$Error, $author$project$Msg$Error$Foreign))
					]));
		}
	}
};
var $author$project$Port$alertCmd = _Platform_outgoingPort('alertCmd', $elm$json$Json$Encode$string);
var $author$project$Cmd$alert = $author$project$Port$alertCmd;
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Port$outRecipe = function (_v0) {
	var id = _v0.id;
	var name = _v0.name;
	var timeInputs = _v0.timeInputs;
	return {
		id: $TSFoster$elm_uuid$UUID$toString(id),
		name: name,
		timeInputs: timeInputs
	};
};
var $author$project$Port$setRecipeCmd = _Platform_outgoingPort(
	'setRecipeCmd',
	function ($) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'id',
					$elm$json$Json$Encode$string($.id)),
					_Utils_Tuple2(
					'name',
					$elm$json$Json$Encode$string($.name)),
					_Utils_Tuple2(
					'timeInputs',
					function ($) {
						return $elm$json$Json$Encode$object(
							_List_fromArray(
								[
									_Utils_Tuple2(
									'dev',
									function ($) {
										return $elm$json$Json$Encode$object(
											_List_fromArray(
												[
													_Utils_Tuple2(
													'minutes',
													$elm$json$Json$Encode$string($.minutes)),
													_Utils_Tuple2(
													'seconds',
													$elm$json$Json$Encode$string($.seconds))
												]));
									}($.dev)),
									_Utils_Tuple2(
									'fix',
									function ($) {
										return $elm$json$Json$Encode$object(
											_List_fromArray(
												[
													_Utils_Tuple2(
													'minutes',
													$elm$json$Json$Encode$string($.minutes)),
													_Utils_Tuple2(
													'seconds',
													$elm$json$Json$Encode$string($.seconds))
												]));
									}($.fix)),
									_Utils_Tuple2(
									'rinse',
									function ($) {
										return $elm$json$Json$Encode$object(
											_List_fromArray(
												[
													_Utils_Tuple2(
													'minutes',
													$elm$json$Json$Encode$string($.minutes)),
													_Utils_Tuple2(
													'seconds',
													$elm$json$Json$Encode$string($.seconds))
												]));
									}($.rinse)),
									_Utils_Tuple2(
									'soak',
									function ($) {
										return $elm$json$Json$Encode$object(
											_List_fromArray(
												[
													_Utils_Tuple2(
													'minutes',
													$elm$json$Json$Encode$string($.minutes)),
													_Utils_Tuple2(
													'seconds',
													$elm$json$Json$Encode$string($.seconds))
												]));
									}($.soak)),
									_Utils_Tuple2(
									'stop',
									function ($) {
										return $elm$json$Json$Encode$object(
											_List_fromArray(
												[
													_Utils_Tuple2(
													'minutes',
													$elm$json$Json$Encode$string($.minutes)),
													_Utils_Tuple2(
													'seconds',
													$elm$json$Json$Encode$string($.seconds))
												]));
									}($.stop)),
									_Utils_Tuple2(
									'wet',
									function ($) {
										return $elm$json$Json$Encode$object(
											_List_fromArray(
												[
													_Utils_Tuple2(
													'minutes',
													$elm$json$Json$Encode$string($.minutes)),
													_Utils_Tuple2(
													'seconds',
													$elm$json$Json$Encode$string($.seconds))
												]));
									}($.wet))
								]));
					}($.timeInputs))
				]));
	});
var $author$project$Cmd$setRecipe = A2($elm$core$Basics$composeL, $author$project$Port$setRecipeCmd, $author$project$Port$outRecipe);
var $author$project$Update$changeName = F2(
	function (name, model) {
		var _v0 = model.appModel;
		if (_v0.$ === 'EditModel') {
			var recipe = function () {
				var _v2 = model.loggedIn;
				if (_v2.$ === 'LoggedIn') {
					var loggedIn_ = _v2.a;
					return A2(
						$elm$core$Maybe$andThen,
						function (id) {
							return A2(
								$elm$core$Dict$get,
								$TSFoster$elm_uuid$UUID$toString(id),
								loggedIn_.recipes);
						},
						loggedIn_.recipeId);
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}();
			if (recipe.$ === 'Nothing') {
				return _Utils_Tuple2(
					model,
					$author$project$Cmd$alert('unexpected: Update.changeName'));
			} else {
				var recipe_ = recipe.a;
				return _Utils_Tuple2(
					model,
					$author$project$Cmd$setRecipe(
						_Utils_update(
							recipe_,
							{name: name})));
			}
		} else {
			return _Utils_Tuple2(
				model,
				$author$project$Cmd$alert('unexpected: Update.changeName'));
		}
	});
var $author$project$Model$Step$get = function (step) {
	switch (step.$) {
		case 'Soak':
			return function ($) {
				return $.soak;
			};
		case 'Dev':
			return function ($) {
				return $.dev;
			};
		case 'Stop':
			return function ($) {
				return $.stop;
			};
		case 'Fix':
			return function ($) {
				return $.fix;
			};
		case 'Rinse':
			return function ($) {
				return $.rinse;
			};
		default:
			return function ($) {
				return $.wet;
			};
	}
};
var $author$project$Model$Step$set = F3(
	function (step, value, record) {
		switch (step.$) {
			case 'Soak':
				return _Utils_update(
					record,
					{soak: value});
			case 'Dev':
				return _Utils_update(
					record,
					{dev: value});
			case 'Stop':
				return _Utils_update(
					record,
					{stop: value});
			case 'Fix':
				return _Utils_update(
					record,
					{fix: value});
			case 'Rinse':
				return _Utils_update(
					record,
					{rinse: value});
			default:
				return _Utils_update(
					record,
					{wet: value});
		}
	});
var $author$project$Model$TimeHand$set = F3(
	function (hand, value, record) {
		if (hand.$ === 'Minutes') {
			return _Utils_update(
				record,
				{minutes: value});
		} else {
			return _Utils_update(
				record,
				{seconds: value});
		}
	});
var $author$project$Update$changeTime = F4(
	function (step, timeHand, value, model) {
		var _v0 = model.appModel;
		if (_v0.$ === 'EditModel') {
			var editModel = _v0.a;
			var _new = function (timeInputs) {
				return A3(
					$author$project$Model$Step$set,
					step,
					A3(
						$author$project$Model$TimeHand$set,
						timeHand,
						value,
						A2($author$project$Model$Step$get, step, timeInputs)),
					timeInputs);
			};
			var _v1 = model.loggedIn;
			if (_v1.$ === 'LoggedIn') {
				var loggedIn_ = _v1.a;
				var _v2 = loggedIn_.recipeId;
				if (_v2.$ === 'Just') {
					var recipeId = _v2.a;
					var _v3 = A2(
						$elm$core$Dict$get,
						$TSFoster$elm_uuid$UUID$toString(recipeId),
						loggedIn_.recipes);
					if (_v3.$ === 'Just') {
						var recipe = _v3.a;
						return _Utils_Tuple2(
							model,
							$author$project$Cmd$setRecipe(
								_Utils_update(
									recipe,
									{
										timeInputs: _new(recipe.timeInputs)
									})));
					} else {
						return _Utils_Tuple2(
							model,
							$author$project$Cmd$alert('undexpected: Update.changeTime'));
					}
				} else {
					return _Utils_Tuple2(
						model,
						$author$project$Cmd$alert('undexpected: Update.changeTime'));
				}
			} else {
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							timeInputs: _new(model.timeInputs)
						}),
					$elm$core$Platform$Cmd$none);
			}
		} else {
			return _Utils_Tuple2(
				model,
				$author$project$Cmd$alert('unexpected: Update.changeTime'));
		}
	});
var $author$project$Msg$Show = {$: 'Show'};
var $author$project$Update$drawer = F2(
	function (visible, model) {
		var _v0 = model.appModel;
		if (_v0.$ === 'EditModel') {
			var editModel = _v0.a;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						appModel: $author$project$Model$EditModel(
							_Utils_update(
								editModel,
								{
									drawerOpen: _Utils_eq(visible, $author$project$Msg$Show)
								}))
					}),
				$elm$core$Platform$Cmd$none);
		} else {
			return _Utils_Tuple2(
				model,
				$author$project$Cmd$alert('unexpected: update'));
		}
	});
var $author$project$Update$error = F2(
	function (err, model) {
		if (err.$ === 'RecipeDecoder') {
			return _Utils_Tuple2(
				model,
				$author$project$Cmd$alert('unable to decode a recipe'));
		} else {
			var err_ = err.a;
			return _Utils_Tuple2(
				model,
				$author$project$Cmd$alert(err_));
		}
	});
var $elm$json$Json$Encode$bool = _Json_wrap;
var $author$project$Port$setNoSleepCmd = _Platform_outgoingPort('setNoSleepCmd', $elm$json$Json$Encode$bool);
var $author$project$Cmd$setNoSleep = $author$project$Port$setNoSleepCmd;
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $author$project$Port$stopAlarmCmd = _Platform_outgoingPort(
	'stopAlarmCmd',
	function ($) {
		return $elm$json$Json$Encode$null;
	});
var $author$project$Cmd$stopAlarm = $author$project$Port$stopAlarmCmd(_Utils_Tuple0);
var $author$project$Update$goEdit = function (model) {
	var _v0 = model.appModel;
	if (_v0.$ === 'RunModel') {
		var runModel = _v0.a;
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{
					appModel: $author$project$Model$EditModel(
						{drawerOpen: false, loadingProgressOpen: false, logInDialogOpen: false, logInDialogSelected: $elm$core$Maybe$Nothing, nameTextFieldOpen: false})
				}),
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[
						$author$project$Cmd$stopAlarm,
						$author$project$Cmd$setNoSleep(false)
					])));
	} else {
		return _Utils_Tuple2(
			model,
			$author$project$Cmd$alert('unexpected: Update.goEdit'));
	}
};
var $author$project$Model$RunModel = function (a) {
	return {$: 'RunModel', a: a};
};
var $author$project$Model$RunState = {$: 'RunState'};
var $author$project$Model$RunStep$Soak = {$: 'Soak'};
var $author$project$Text$badInput = function (lang) {
	return '入力を処理できませんでした';
};
var $author$project$Model$TimeSpans = F6(
	function (soak, dev, stop, fix, rinse, wet) {
		return {dev: dev, fix: fix, rinse: rinse, soak: soak, stop: stop, wet: wet};
	});
var $arowM$elm_form_decoder$Form$Decoder$always = function (a) {
	return $arowM$elm_form_decoder$Form$Decoder$custom(
		function (_v0) {
			return $elm$core$Result$Ok(a);
		});
};
var $author$project$Model$NotInt = {$: 'NotInt'};
var $author$project$Model$OutOfRange = {$: 'OutOfRange'};
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (result.$ === 'Ok') {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $arowM$elm_form_decoder$Form$Decoder$assert = F2(
	function (v, _v0) {
		var f = _v0.a;
		return $arowM$elm_form_decoder$Form$Decoder$custom(
			function (a) {
				return A2(
					$elm$core$Result$andThen,
					function (x) {
						return A2(
							$elm$core$Result$map,
							function (_v1) {
								return x;
							},
							A2($arowM$elm_form_decoder$Form$Decoder$run, v, x));
					},
					f(a));
			});
	});
var $elm$core$Result$fromMaybe = F2(
	function (err, maybe) {
		if (maybe.$ === 'Just') {
			var v = maybe.a;
			return $elm$core$Result$Ok(v);
		} else {
			return $elm$core$Result$Err(err);
		}
	});
var $arowM$elm_form_decoder$Form$Decoder$int = function (err) {
	return $arowM$elm_form_decoder$Form$Decoder$custom(
		A2(
			$elm$core$Basics$composeL,
			$elm$core$Result$fromMaybe(
				_List_fromArray(
					[err])),
			$elm$core$String$toInt));
};
var $arowM$elm_form_decoder$Form$Decoder$map2 = F3(
	function (f, d1, d2) {
		return A2(
			$arowM$elm_form_decoder$Form$Decoder$field,
			d2,
			A2(
				$arowM$elm_form_decoder$Form$Decoder$field,
				d1,
				$arowM$elm_form_decoder$Form$Decoder$top(f)));
	});
var $arowM$elm_form_decoder$Form$Decoder$maxBound = F2(
	function (err, bound) {
		return $arowM$elm_form_decoder$Form$Decoder$custom(
			function (n) {
				return (_Utils_cmp(n, bound) < 1) ? $elm$core$Result$Ok(_Utils_Tuple0) : $elm$core$Result$Err(
					_List_fromArray(
						[err]));
			});
	});
var $arowM$elm_form_decoder$Form$Decoder$minBound = F2(
	function (err, bound) {
		return $arowM$elm_form_decoder$Form$Decoder$custom(
			function (n) {
				return (_Utils_cmp(n, bound) > -1) ? $elm$core$Result$Ok(_Utils_Tuple0) : $elm$core$Result$Err(
					_List_fromArray(
						[err]));
			});
	});
var $author$project$Model$timeInputDecoder = A3(
	$arowM$elm_form_decoder$Form$Decoder$map2,
	F2(
		function (m, s) {
			return (60 * m) + s;
		}),
	A2(
		$arowM$elm_form_decoder$Form$Decoder$lift,
		function ($) {
			return $.minutes;
		},
		A2(
			$arowM$elm_form_decoder$Form$Decoder$assert,
			A2($arowM$elm_form_decoder$Form$Decoder$minBound, $author$project$Model$OutOfRange, 0),
			$arowM$elm_form_decoder$Form$Decoder$int($author$project$Model$NotInt))),
	A2(
		$arowM$elm_form_decoder$Form$Decoder$lift,
		function ($) {
			return $.seconds;
		},
		A2(
			$arowM$elm_form_decoder$Form$Decoder$assert,
			A2($arowM$elm_form_decoder$Form$Decoder$maxBound, $author$project$Model$OutOfRange, 59),
			A2(
				$arowM$elm_form_decoder$Form$Decoder$assert,
				A2($arowM$elm_form_decoder$Form$Decoder$minBound, $author$project$Model$OutOfRange, 0),
				$arowM$elm_form_decoder$Form$Decoder$int($author$project$Model$NotInt)))));
var $author$project$Model$timeInputsDecoder = A2(
	$arowM$elm_form_decoder$Form$Decoder$field,
	A2(
		$arowM$elm_form_decoder$Form$Decoder$lift,
		function ($) {
			return $.wet;
		},
		$author$project$Model$timeInputDecoder),
	A2(
		$arowM$elm_form_decoder$Form$Decoder$field,
		A2(
			$arowM$elm_form_decoder$Form$Decoder$lift,
			function ($) {
				return $.rinse;
			},
			$author$project$Model$timeInputDecoder),
		A2(
			$arowM$elm_form_decoder$Form$Decoder$field,
			A2(
				$arowM$elm_form_decoder$Form$Decoder$lift,
				function ($) {
					return $.fix;
				},
				$author$project$Model$timeInputDecoder),
			A2(
				$arowM$elm_form_decoder$Form$Decoder$field,
				A2(
					$arowM$elm_form_decoder$Form$Decoder$lift,
					function ($) {
						return $.stop;
					},
					$author$project$Model$timeInputDecoder),
				A2(
					$arowM$elm_form_decoder$Form$Decoder$field,
					A2(
						$arowM$elm_form_decoder$Form$Decoder$lift,
						function ($) {
							return $.dev;
						},
						$author$project$Model$timeInputDecoder),
					A2(
						$arowM$elm_form_decoder$Form$Decoder$field,
						A2(
							$arowM$elm_form_decoder$Form$Decoder$lift,
							function ($) {
								return $.soak;
							},
							$author$project$Model$timeInputDecoder),
						$arowM$elm_form_decoder$Form$Decoder$always($author$project$Model$TimeSpans)))))));
var $author$project$Model$fromTimeInputsToTimeSpans = $arowM$elm_form_decoder$Form$Decoder$run($author$project$Model$timeInputsDecoder);
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Text$inputNumber = function (lang) {
	return '数値を入力してください';
};
var $author$project$Text$outOfRange = function (lang) {
	return '秒は0～59、分は0以上の数値を入力してください';
};
var $author$project$Update$goRun = function (model) {
	var timeInputs = function () {
		var _v5 = model.loggedIn;
		if (_v5.$ === 'LoggedIn') {
			var loggedIn_ = _v5.a;
			return A2(
				$elm$core$Maybe$andThen,
				A2(
					$elm$core$Basics$composeL,
					$elm$core$Maybe$Just,
					function ($) {
						return $.timeInputs;
					}),
				A2(
					$elm$core$Maybe$andThen,
					function (recipeId) {
						return A2(
							$elm$core$Dict$get,
							$TSFoster$elm_uuid$UUID$toString(recipeId),
							loggedIn_.recipes);
					},
					loggedIn_.recipeId));
		} else {
			return $elm$core$Maybe$Just(model.timeInputs);
		}
	}();
	if (timeInputs.$ === 'Just') {
		var timeInputs_ = timeInputs.a;
		var _v1 = $author$project$Model$fromTimeInputsToTimeSpans(timeInputs_);
		if (_v1.$ === 'Ok') {
			var timeSpans = _v1.a;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						appModel: $author$project$Model$RunModel(
							{rest: timeSpans, state: $author$project$Model$RunState, step: $author$project$Model$RunStep$Soak, timeSpans: timeSpans})
					}),
				$author$project$Cmd$setNoSleep(true));
		} else {
			var errs = _v1.a;
			var _v2 = $elm$core$List$head(errs);
			if (_v2.$ === 'Just') {
				if (_v2.a.$ === 'NotInt') {
					var _v3 = _v2.a;
					return _Utils_Tuple2(
						model,
						$author$project$Cmd$alert(
							$author$project$Text$inputNumber(model.lang)));
				} else {
					var _v4 = _v2.a;
					return _Utils_Tuple2(
						model,
						$author$project$Cmd$alert(
							$author$project$Text$outOfRange(model.lang)));
				}
			} else {
				return _Utils_Tuple2(
					model,
					$author$project$Cmd$alert(
						$author$project$Text$badInput(model.lang)));
			}
		}
	} else {
		return _Utils_Tuple2(
			model,
			$author$project$Cmd$alert('unexpected: update'));
	}
};
var $author$project$Model$PauseState = {$: 'PauseState'};
var $author$project$Update$init = function (model) {
	var _v0 = model.appModel;
	if (_v0.$ === 'RunModel') {
		var runModel = _v0.a;
		var spans = runModel.timeSpans;
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{
					appModel: $author$project$Model$RunModel(
						_Utils_update(
							runModel,
							{rest: spans, state: $author$project$Model$PauseState, step: $author$project$Model$RunStep$Soak}))
				}),
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[
						$author$project$Cmd$stopAlarm,
						$author$project$Cmd$setNoSleep(false)
					])));
	} else {
		return _Utils_Tuple2(
			model,
			$author$project$Cmd$alert('unexpected: Update.init'));
	}
};
var $author$project$Update$inputName = F2(
	function (name, model) {
		var _v0 = model.appModel;
		if (_v0.$ === 'EditModel') {
			var editModel = _v0.a;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{recipeName: name}),
				$elm$core$Platform$Cmd$none);
		} else {
			return _Utils_Tuple2(
				model,
				$author$project$Cmd$alert('unexpected: Update.inputName'));
		}
	});
var $author$project$Update$inputTime = F4(
	function (step, timeHand, value, model) {
		var _v0 = model.appModel;
		if (_v0.$ === 'EditModel') {
			var editModel = _v0.a;
			var timeInputs = A3(
				$author$project$Model$Step$set,
				step,
				A3(
					$author$project$Model$TimeHand$set,
					timeHand,
					value,
					A2($author$project$Model$Step$get, step, model.timeInputs)),
				model.timeInputs);
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{timeInputs: timeInputs}),
				$elm$core$Platform$Cmd$none);
		} else {
			return _Utils_Tuple2(
				model,
				$author$project$Cmd$alert('unexpected: Update.inputTime'));
		}
	});
var $author$project$Port$logInWithGoogleCmd = _Platform_outgoingPort(
	'logInWithGoogleCmd',
	function ($) {
		return $elm$json$Json$Encode$null;
	});
var $author$project$Cmd$logInWithGoogle = $author$project$Port$logInWithGoogleCmd(_Utils_Tuple0);
var $author$project$Port$logInWithTwitterCmd = _Platform_outgoingPort(
	'logInWithTwitterCmd',
	function ($) {
		return $elm$json$Json$Encode$null;
	});
var $author$project$Cmd$logInWithTwitter = $author$project$Port$logInWithTwitterCmd(_Utils_Tuple0);
var $author$project$Update$logIn = F2(
	function (provider, model) {
		var _v0 = model.appModel;
		if (_v0.$ === 'EditModel') {
			var editModel = _v0.a;
			var model_ = _Utils_update(
				model,
				{
					appModel: $author$project$Model$EditModel(
						_Utils_update(
							editModel,
							{loadingProgressOpen: true}))
				});
			if (provider.$ === 'Google') {
				return _Utils_Tuple2(model_, $author$project$Cmd$logInWithGoogle);
			} else {
				return _Utils_Tuple2(model_, $author$project$Cmd$logInWithTwitter);
			}
		} else {
			return _Utils_Tuple2(
				model,
				$author$project$Cmd$alert('unexpected: Update.logIn'));
		}
	});
var $author$project$Update$logInDialog = F2(
	function (visible, model) {
		var _v0 = model.appModel;
		if (_v0.$ === 'EditModel') {
			var editModel = _v0.a;
			if (visible.$ === 'Show') {
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							appModel: $author$project$Model$EditModel(
								_Utils_update(
									editModel,
									{logInDialogOpen: true, logInDialogSelected: $elm$core$Maybe$Nothing}))
						}),
					$elm$core$Platform$Cmd$none);
			} else {
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							appModel: $author$project$Model$EditModel(
								_Utils_update(
									editModel,
									{logInDialogOpen: false}))
						}),
					$elm$core$Platform$Cmd$none);
			}
		} else {
			return _Utils_Tuple2(
				model,
				$author$project$Cmd$alert('unexpected: Update.logInDialog'));
		}
	});
var $author$project$Update$logInDialogList = F2(
	function (selected, model) {
		var _v0 = model.appModel;
		if (_v0.$ === 'EditModel') {
			var editModel = _v0.a;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						appModel: $author$project$Model$EditModel(
							_Utils_update(
								editModel,
								{
									logInDialogSelected: $elm$core$Maybe$Just(selected)
								}))
					}),
				$elm$core$Platform$Cmd$none);
		} else {
			return _Utils_Tuple2(
				model,
				$author$project$Cmd$alert('unexpected: Update.logInDialog'));
		}
	});
var $author$project$Port$logOutCmd = _Platform_outgoingPort(
	'logOutCmd',
	function ($) {
		return $elm$json$Json$Encode$null;
	});
var $author$project$Cmd$logOut = $author$project$Port$logOutCmd(_Utils_Tuple0);
var $author$project$Update$logOut = function (model) {
	var _v0 = model.appModel;
	if (_v0.$ === 'EditModel') {
		return _Utils_Tuple2(model, $author$project$Cmd$logOut);
	} else {
		return _Utils_Tuple2(
			model,
			$author$project$Cmd$alert('unexpected: Update.logIn'));
	}
};
var $author$project$Model$LoggedIn = function (a) {
	return {$: 'LoggedIn', a: a};
};
var $author$project$Update$loggedIn = F2(
	function (user, model) {
		if (user.$ === 'Just') {
			var user_ = user.a;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						loggedIn: $author$project$Model$LoggedIn(
							{recipeId: $elm$core$Maybe$Nothing, recipes: $elm$core$Dict$empty, user: user_})
					}),
				$elm$core$Platform$Cmd$none);
		} else {
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{loggedIn: $author$project$Model$NotLoggedIn}),
				$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Update$nameTextField = F2(
	function (visible, model) {
		var _v0 = model.appModel;
		if (_v0.$ === 'EditModel') {
			var editModel = _v0.a;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						appModel: $author$project$Model$EditModel(
							_Utils_update(
								editModel,
								{
									nameTextFieldOpen: _Utils_eq(visible, $author$project$Msg$Show)
								}))
					}),
				$elm$core$Platform$Cmd$none);
		} else {
			return _Utils_Tuple2(
				model,
				$author$project$Cmd$alert('unexpected: update'));
		}
	});
var $elm$random$Random$Generator = function (a) {
	return {$: 'Generator', a: a};
};
var $elm$random$Random$map = F2(
	function (func, _v0) {
		var genA = _v0.a;
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v1 = genA(seed0);
				var a = _v1.a;
				var seed1 = _v1.b;
				return _Utils_Tuple2(
					func(a),
					seed1);
			});
	});
var $elm$random$Random$map4 = F5(
	function (func, _v0, _v1, _v2, _v3) {
		var genA = _v0.a;
		var genB = _v1.a;
		var genC = _v2.a;
		var genD = _v3.a;
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v4 = genA(seed0);
				var a = _v4.a;
				var seed1 = _v4.b;
				var _v5 = genB(seed1);
				var b = _v5.a;
				var seed2 = _v5.b;
				var _v6 = genC(seed2);
				var c = _v6.a;
				var seed3 = _v6.b;
				var _v7 = genD(seed3);
				var d = _v7.a;
				var seed4 = _v7.b;
				return _Utils_Tuple2(
					A4(func, a, b, c, d),
					seed4);
			});
	});
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $elm$random$Random$peel = function (_v0) {
	var state = _v0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var $elm$random$Random$int = F2(
	function (a, b) {
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v0 = (_Utils_cmp(a, b) < 0) ? _Utils_Tuple2(a, b) : _Utils_Tuple2(b, a);
				var lo = _v0.a;
				var hi = _v0.b;
				var range = (hi - lo) + 1;
				if (!((range - 1) & range)) {
					return _Utils_Tuple2(
						(((range - 1) & $elm$random$Random$peel(seed0)) >>> 0) + lo,
						$elm$random$Random$next(seed0));
				} else {
					var threshhold = (((-range) >>> 0) % range) >>> 0;
					var accountForBias = function (seed) {
						accountForBias:
						while (true) {
							var x = $elm$random$Random$peel(seed);
							var seedN = $elm$random$Random$next(seed);
							if (_Utils_cmp(x, threshhold) < 0) {
								var $temp$seed = seedN;
								seed = $temp$seed;
								continue accountForBias;
							} else {
								return _Utils_Tuple2((x % range) + lo, seedN);
							}
						}
					};
					return accountForBias(seed0);
				}
			});
	});
var $elm$random$Random$maxInt = 2147483647;
var $elm$random$Random$minInt = -2147483648;
var $TSFoster$elm_uuid$UUID$randomU32 = A2(
	$elm$random$Random$map,
	$TSFoster$elm_uuid$UUID$forceUnsigned,
	A2($elm$random$Random$int, $elm$random$Random$minInt, $elm$random$Random$maxInt));
var $TSFoster$elm_uuid$UUID$toVariant1 = function (_v0) {
	var a = _v0.a;
	var b = _v0.b;
	var c = _v0.c;
	var d = _v0.d;
	return A4(
		$TSFoster$elm_uuid$UUID$UUID,
		a,
		b,
		$TSFoster$elm_uuid$UUID$forceUnsigned(2147483648 | (1073741823 & c)),
		d);
};
var $TSFoster$elm_uuid$UUID$toVersion = F2(
	function (v, _v0) {
		var a = _v0.a;
		var b = _v0.b;
		var c = _v0.c;
		var d = _v0.d;
		return A4(
			$TSFoster$elm_uuid$UUID$UUID,
			a,
			$TSFoster$elm_uuid$UUID$forceUnsigned((v << 12) | (4294905855 & b)),
			c,
			d);
	});
var $TSFoster$elm_uuid$UUID$generator = A2(
	$elm$random$Random$map,
	A2(
		$elm$core$Basics$composeR,
		$TSFoster$elm_uuid$UUID$toVersion(4),
		$TSFoster$elm_uuid$UUID$toVariant1),
	A5($elm$random$Random$map4, $TSFoster$elm_uuid$UUID$UUID, $TSFoster$elm_uuid$UUID$randomU32, $TSFoster$elm_uuid$UUID$randomU32, $TSFoster$elm_uuid$UUID$randomU32, $TSFoster$elm_uuid$UUID$randomU32));
var $author$project$Text$newRecipe = function (lang) {
	return '新規レシピ';
};
var $elm$random$Random$step = F2(
	function (_v0, seed) {
		var generator = _v0.a;
		return generator(seed);
	});
var $author$project$Update$newRecipe = function (model) {
	var _v0 = _Utils_Tuple2(model.loggedIn, model.appModel);
	if ((_v0.a.$ === 'LoggedIn') && (_v0.b.$ === 'EditModel')) {
		var loggedIn_ = _v0.a.a;
		var editModel = _v0.b.a;
		var _v1 = A2($elm$random$Random$step, $TSFoster$elm_uuid$UUID$generator, model.seed);
		var uuid = _v1.a;
		var seed_ = _v1.b;
		var model_ = _Utils_update(
			model,
			{
				appModel: $author$project$Model$EditModel(
					_Utils_update(
						editModel,
						{drawerOpen: false})),
				loggedIn: $author$project$Model$LoggedIn(
					_Utils_update(
						loggedIn_,
						{
							recipeId: $elm$core$Maybe$Just(uuid)
						})),
				recipeName: $author$project$Text$newRecipe(model.lang),
				seed: seed_
			});
		var recipe = {
			id: uuid,
			name: $author$project$Text$newRecipe(model.lang),
			timeInputs: $author$project$Model$initialTimeInputs
		};
		return _Utils_Tuple2(
			model_,
			$author$project$Cmd$setRecipe(recipe));
	} else {
		return _Utils_Tuple2(
			model,
			$author$project$Cmd$alert('unexpected: Update.newRecipe'));
	}
};
var $author$project$Model$RunStep$End = {$: 'End'};
var $author$project$Model$RunStep$Dev = {$: 'Dev'};
var $author$project$Model$RunStep$Fix = {$: 'Fix'};
var $author$project$Model$RunStep$Rinse = {$: 'Rinse'};
var $author$project$Model$RunStep$Stop = {$: 'Stop'};
var $author$project$Model$RunStep$Wet = {$: 'Wet'};
var $author$project$Model$RunStep$fromInt = function (value) {
	switch (value) {
		case 0:
			return $elm$core$Maybe$Just($author$project$Model$RunStep$Soak);
		case 1:
			return $elm$core$Maybe$Just($author$project$Model$RunStep$Dev);
		case 2:
			return $elm$core$Maybe$Just($author$project$Model$RunStep$Stop);
		case 3:
			return $elm$core$Maybe$Just($author$project$Model$RunStep$Fix);
		case 4:
			return $elm$core$Maybe$Just($author$project$Model$RunStep$Rinse);
		case 5:
			return $elm$core$Maybe$Just($author$project$Model$RunStep$Wet);
		case 6:
			return $elm$core$Maybe$Just($author$project$Model$RunStep$End);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Model$RunStep$toInt = function (step) {
	switch (step.$) {
		case 'Soak':
			return 0;
		case 'Dev':
			return 1;
		case 'Stop':
			return 2;
		case 'Fix':
			return 3;
		case 'Rinse':
			return 4;
		case 'Wet':
			return 5;
		default:
			return 6;
	}
};
var $author$project$Model$RunStep$next = function (step) {
	var _v0 = $author$project$Model$RunStep$fromInt(
		$author$project$Model$RunStep$toInt(step) + 1);
	if (_v0.$ === 'Just') {
		var step_ = _v0.a;
		return step_;
	} else {
		return step;
	}
};
var $author$project$Update$next = function (model) {
	var _v0 = model.appModel;
	if (_v0.$ === 'RunModel') {
		var runModel = _v0.a;
		var step_ = $author$project$Model$RunStep$next(runModel.step);
		return _Utils_eq(step_, $author$project$Model$RunStep$End) ? _Utils_Tuple2(
			_Utils_update(
				model,
				{
					appModel: $author$project$Model$RunModel(
						_Utils_update(
							runModel,
							{state: $author$project$Model$PauseState, step: step_}))
				}),
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[
						$author$project$Cmd$stopAlarm,
						$author$project$Cmd$setNoSleep(false)
					]))) : _Utils_Tuple2(
			_Utils_update(
				model,
				{
					appModel: $author$project$Model$RunModel(
						_Utils_update(
							runModel,
							{state: $author$project$Model$RunState, step: step_}))
				}),
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[
						$author$project$Cmd$stopAlarm,
						$author$project$Cmd$setNoSleep(true)
					])));
	} else {
		return _Utils_Tuple2(
			model,
			$author$project$Cmd$alert('unexpected: Update.next'));
	}
};
var $author$project$Update$pause = function (model) {
	var _v0 = model.appModel;
	if (_v0.$ === 'RunModel') {
		var runModel = _v0.a;
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{
					appModel: $author$project$Model$RunModel(
						_Utils_update(
							runModel,
							{state: $author$project$Model$PauseState}))
				}),
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[
						$author$project$Cmd$stopAlarm,
						$author$project$Cmd$setNoSleep(false)
					])));
	} else {
		return _Utils_Tuple2(
			model,
			$author$project$Cmd$alert('unexpected: Update.pause'));
	}
};
var $author$project$Update$recipesChanged = F2(
	function (recipes, model) {
		var _v0 = model.loggedIn;
		if (_v0.$ === 'LoggedIn') {
			var loggedIn_ = _v0.a;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						loggedIn: $author$project$Model$LoggedIn(
							_Utils_update(
								loggedIn_,
								{recipes: recipes}))
					}),
				$elm$core$Platform$Cmd$none);
		} else {
			return _Utils_Tuple2(
				model,
				$author$project$Cmd$alert('unexpected: Update.recipesChanged'));
		}
	});
var $author$project$Update$restart = function (model) {
	var _v0 = model.appModel;
	if (_v0.$ === 'RunModel') {
		var runModel = _v0.a;
		var _v1 = runModel.step;
		if (_v1.$ === 'End') {
			return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		} else {
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						appModel: $author$project$Model$RunModel(
							_Utils_update(
								runModel,
								{state: $author$project$Model$RunState}))
					}),
				$author$project$Cmd$setNoSleep(true));
		}
	} else {
		return _Utils_Tuple2(
			model,
			$author$project$Cmd$alert('unexpected: Update.restart'));
	}
};
var $author$project$Update$selectRecipe = F2(
	function (recipe, model) {
		var _v0 = _Utils_Tuple2(model.loggedIn, model.appModel);
		if ((_v0.a.$ === 'LoggedIn') && (_v0.b.$ === 'EditModel')) {
			var loggedIn_ = _v0.a.a;
			var editModel = _v0.b.a;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						appModel: $author$project$Model$EditModel(
							_Utils_update(
								editModel,
								{drawerOpen: false})),
						loggedIn: $author$project$Model$LoggedIn(
							_Utils_update(
								loggedIn_,
								{
									recipeId: $elm$core$Maybe$Just(recipe.id)
								})),
						recipeName: recipe.name,
						timeInputs: recipe.timeInputs
					}),
				$elm$core$Platform$Cmd$none);
		} else {
			return _Utils_Tuple2(
				model,
				$author$project$Cmd$alert('unexpected: Update.selectRecipe'));
		}
	});
var $author$project$Model$Step$Dev = {$: 'Dev'};
var $author$project$Model$Step$Fix = {$: 'Fix'};
var $author$project$Model$Step$Rinse = {$: 'Rinse'};
var $author$project$Model$Step$Soak = {$: 'Soak'};
var $author$project$Model$Step$Stop = {$: 'Stop'};
var $author$project$Model$Step$Wet = {$: 'Wet'};
var $author$project$Model$fromRunStepToStep = function (step) {
	switch (step.$) {
		case 'Soak':
			return $elm$core$Maybe$Just($author$project$Model$Step$Soak);
		case 'Dev':
			return $elm$core$Maybe$Just($author$project$Model$Step$Dev);
		case 'Stop':
			return $elm$core$Maybe$Just($author$project$Model$Step$Stop);
		case 'Fix':
			return $elm$core$Maybe$Just($author$project$Model$Step$Fix);
		case 'Rinse':
			return $elm$core$Maybe$Just($author$project$Model$Step$Rinse);
		case 'Wet':
			return $elm$core$Maybe$Just($author$project$Model$Step$Wet);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Port$playAlarmCmd = _Platform_outgoingPort(
	'playAlarmCmd',
	function ($) {
		return $elm$json$Json$Encode$null;
	});
var $author$project$Cmd$playAlarm = $author$project$Port$playAlarmCmd(_Utils_Tuple0);
var $author$project$Update$tick = function (model) {
	var _v0 = model.appModel;
	if (_v0.$ === 'RunModel') {
		var runModel = _v0.a;
		var _v1 = runModel;
		var timeSpans = _v1.timeSpans;
		var step = _v1.step;
		var rest = _v1.rest;
		var _v2 = $author$project$Model$fromRunStepToStep(step);
		if (_v2.$ === 'Just') {
			var step_ = _v2.a;
			var rest1 = A2($author$project$Model$Step$get, step_, rest);
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						appModel: $author$project$Model$RunModel(
							_Utils_update(
								runModel,
								{
									rest: A3($author$project$Model$Step$set, step_, rest1 - 1, rest)
								}))
					}),
				(!rest1) ? $author$project$Cmd$playAlarm : $elm$core$Platform$Cmd$none);
		} else {
			return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		}
	} else {
		return _Utils_Tuple2(
			model,
			$author$project$Cmd$alert('unexpected: Update.tick'));
	}
};
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
				var mdcMsg = msg.a;
				return A3($author$project$Material$update, $author$project$Msg$Mdc, mdcMsg, model);
			case 'Drawer':
				var visible = msg.a;
				return A2($author$project$Update$drawer, visible, model);
			case 'NewRecipe':
				return $author$project$Update$newRecipe(model);
			case 'SelectRecipe':
				var recipe = msg.a;
				return A2($author$project$Update$selectRecipe, recipe, model);
			case 'NameTextField':
				var visible = msg.a;
				return A2($author$project$Update$nameTextField, visible, model);
			case 'GoRun':
				return $author$project$Update$goRun(model);
			case 'Tick':
				return $author$project$Update$tick(model);
			case 'Next':
				return $author$project$Update$next(model);
			case 'GoEdit':
				return $author$project$Update$goEdit(model);
			case 'Pause':
				return $author$project$Update$pause(model);
			case 'Restart':
				return $author$project$Update$restart(model);
			case 'Init':
				return $author$project$Update$init(model);
			case 'Input':
				if (msg.a.$ === 'Name') {
					var _v1 = msg.a;
					var value = msg.b;
					return A2($author$project$Update$inputName, value, model);
				} else {
					var _v3 = msg.a;
					var step = _v3.a;
					var timeHand = _v3.b;
					var value = msg.b;
					return A4($author$project$Update$inputTime, step, timeHand, value, model);
				}
			case 'Change':
				if (msg.a.$ === 'Name') {
					var _v2 = msg.a;
					var value = msg.b;
					return A2($author$project$Update$changeName, value, model);
				} else {
					var _v4 = msg.a;
					var step = _v4.a;
					var timeHand = _v4.b;
					var value = msg.b;
					return A4($author$project$Update$changeTime, step, timeHand, value, model);
				}
			case 'LogIn':
				var provider = msg.a;
				return A2($author$project$Update$logIn, provider, model);
			case 'LogOut':
				return $author$project$Update$logOut(model);
			case 'UserChanged':
				var user = msg.a;
				return A2($author$project$Update$loggedIn, user, model);
			case 'LogInDialog':
				var visible = msg.a;
				return A2($author$project$Update$logInDialog, visible, model);
			case 'SelectLogInDialogListItem':
				var selected = msg.a;
				return A2($author$project$Update$logInDialogList, selected, model);
			case 'RecipesChanged':
				var recipes = msg.a;
				return A2($author$project$Update$recipesChanged, recipes, model);
			default:
				var err = msg.a;
				return A2($author$project$Update$error, err, model);
		}
	});
var $author$project$Msg$Change = F2(
	function (a, b) {
		return {$: 'Change', a: a, b: b};
	});
var $author$project$Msg$Input = F2(
	function (a, b) {
		return {$: 'Input', a: a, b: b};
	});
var $author$project$Model$TimeHand$Minutes = {$: 'Minutes'};
var $author$project$Model$TimeHand$Seconds = {$: 'Seconds'};
var $author$project$Msg$Component$Time = F2(
	function (a, b) {
		return {$: 'Time', a: a, b: b};
	});
var $author$project$Internal$Options$Attribute = function (a) {
	return {$: 'Attribute', a: a};
};
var $elm$virtual_dom$VirtualDom$mapAttribute = _VirtualDom_mapAttribute;
var $elm$html$Html$Attributes$map = $elm$virtual_dom$VirtualDom$mapAttribute;
var $author$project$Internal$Options$attribute = A2(
	$elm$core$Basics$composeL,
	$author$project$Internal$Options$Attribute,
	$elm$html$Html$Attributes$map($elm$core$Basics$never));
var $author$project$Material$Options$attribute = $author$project$Internal$Options$attribute;
var $author$project$Text$dev = function (lang) {
	return '現像';
};
var $author$project$Text$fix = function (lang) {
	return '定着';
};
var $author$project$Text$rinse = function (lang) {
	return '水洗';
};
var $author$project$Text$soak = function (lang) {
	return '前浴';
};
var $author$project$Text$stop = function (lang) {
	return '停止';
};
var $author$project$Text$wet = function (lang) {
	return '防滴';
};
var $author$project$View$contentRowLabel = F2(
	function (step, lang) {
		switch (step.$) {
			case 'Soak':
				return $author$project$Text$soak(lang);
			case 'Dev':
				return $author$project$Text$dev(lang);
			case 'Stop':
				return $author$project$Text$stop(lang);
			case 'Fix':
				return $author$project$Text$fix(lang);
			case 'Rinse':
				return $author$project$Text$rinse(lang);
			default:
				return $author$project$Text$wet(lang);
		}
	});
var $author$project$Internal$Options$Class = function (a) {
	return {$: 'Class', a: a};
};
var $author$project$Internal$Options$cs = function (c) {
	return $author$project$Internal$Options$Class(c);
};
var $author$project$Material$Options$cs = $author$project$Internal$Options$cs;
var $author$project$Internal$Options$Set = function (a) {
	return {$: 'Set', a: a};
};
var $author$project$Internal$Options$option = $author$project$Internal$Options$Set;
var $author$project$Internal$Options$nativeControl = function (options) {
	return $author$project$Internal$Options$option(
		function (config) {
			return _Utils_update(
				config,
				{
					nativeControl: _Utils_ap(config.nativeControl, options)
				});
		});
};
var $author$project$Internal$TextField$Implementation$nativeControl = $author$project$Internal$Options$nativeControl;
var $author$project$Material$TextField$nativeControl = $author$project$Internal$TextField$Implementation$nativeControl;
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
var $author$project$Internal$Options$onChange = function (f) {
	return A2(
		$author$project$Internal$Options$on,
		'change',
		A2($elm$json$Json$Decode$map, f, $elm$html$Html$Events$targetValue));
};
var $author$project$Material$Options$onChange = $author$project$Internal$Options$onChange;
var $author$project$Internal$Options$onInput = function (f) {
	return A2(
		$author$project$Internal$Options$on,
		'input',
		A2($elm$json$Json$Decode$map, f, $elm$html$Html$Events$targetValue));
};
var $author$project$Material$Options$onInput = $author$project$Internal$Options$onInput;
var $elm$html$Html$td = _VirtualDom_node('td');
var $author$project$Model$Step$toString = function (step) {
	switch (step.$) {
		case 'Soak':
			return 'soak';
		case 'Dev':
			return 'dev';
		case 'Stop':
			return 'stop';
		case 'Fix':
			return 'fix';
		case 'Rinse':
			return 'rinse';
		default:
			return 'wet';
	}
};
var $elm$html$Html$tr = _VirtualDom_node('tr');
var $author$project$Internal$TextField$Implementation$type_ = function (value_) {
	return $author$project$Internal$Options$option(
		function (config) {
			return _Utils_update(
				config,
				{
					type_: $elm$core$Maybe$Just(value_)
				});
		});
};
var $author$project$Material$TextField$type_ = $author$project$Internal$TextField$Implementation$type_;
var $author$project$Internal$TextField$Implementation$value = function (value_) {
	return $author$project$Internal$Options$option(
		function (config) {
			return _Utils_update(
				config,
				{
					value: $elm$core$Maybe$Just(value_)
				});
		});
};
var $author$project$Material$TextField$value = $author$project$Internal$TextField$Implementation$value;
var $author$project$Internal$Options$internalId = function (id_) {
	return $author$project$Internal$Options$option(
		function (config) {
			return _Utils_update(
				config,
				{id_: id_});
		});
};
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
var $author$project$Internal$TextField$Model$Blur = {$: 'Blur'};
var $author$project$Internal$TextField$Model$Focus = function (a) {
	return {$: 'Focus', a: a};
};
var $author$project$Internal$TextField$Model$Input = function (a) {
	return {$: 'Input', a: a};
};
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
var $author$project$Internal$Dispatch$clear = function (_v0) {
	var config = _v0.a;
	return $author$project$Internal$Dispatch$Config(
		_Utils_update(
			config,
			{decoders: $elm$core$Dict$empty}));
};
var $author$project$Internal$Options$applyNativeControl = F3(
	function (summary, ctor, options) {
		return ctor(
			A2(
				$author$project$Internal$Options$addAttributes,
				A2(
					$author$project$Internal$Options$recollect,
					{
						attrs: _List_Nil,
						classes: _List_Nil,
						config: _Utils_Tuple0,
						css: _List_Nil,
						dispatch: $author$project$Internal$Dispatch$clear(summary.dispatch),
						internal: _List_Nil
					},
					_Utils_ap(summary.config.nativeControl, options)),
				_List_Nil));
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
var $elm$html$Html$Attributes$cols = function (n) {
	return A2(
		_VirtualDom_attribute,
		'cols',
		$elm$core$String$fromInt(n));
};
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {index: index, match: match, number: number, submatches: submatches};
	});
var $elm$regex$Regex$contains = _Regex_contains;
var $author$project$Internal$TextField$Model$Geometry = F3(
	function (width, height, labelWidth) {
		return {height: height, labelWidth: labelWidth, width: width};
	});
var $debois$elm_dom$DOM$childNode = function (idx) {
	return $elm$json$Json$Decode$at(
		_List_fromArray(
			[
				'childNodes',
				$elm$core$String$fromInt(idx)
			]));
};
var $debois$elm_dom$DOM$offsetHeight = A2($elm$json$Json$Decode$field, 'offsetHeight', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$offsetWidth = A2($elm$json$Json$Decode$field, 'offsetWidth', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$parentElement = function (decoder) {
	return A2($elm$json$Json$Decode$field, 'parentElement', decoder);
};
var $debois$elm_dom$DOM$target = function (decoder) {
	return A2($elm$json$Json$Decode$field, 'target', decoder);
};
var $author$project$Internal$TextField$Implementation$decodeGeometry = $debois$elm_dom$DOM$target(
	$debois$elm_dom$DOM$parentElement(
		A4(
			$elm$json$Json$Decode$map3,
			$author$project$Internal$TextField$Model$Geometry,
			A2($debois$elm_dom$DOM$childNode, 2, $debois$elm_dom$DOM$offsetWidth),
			A2($debois$elm_dom$DOM$childNode, 2, $debois$elm_dom$DOM$offsetHeight),
			A2($debois$elm_dom$DOM$childNode, 1, $debois$elm_dom$DOM$offsetWidth))));
var $author$project$Internal$TextField$Implementation$defaultConfig = {
	cols: $elm$core$Maybe$Nothing,
	defaultValue: $elm$core$Maybe$Nothing,
	disabled: false,
	fullWidth: false,
	id_: '',
	invalid: false,
	labelFloat: false,
	labelText: $elm$core$Maybe$Nothing,
	leadingIcon: $elm$core$Maybe$Nothing,
	nativeControl: _List_Nil,
	onLeadingIconClick: $elm$core$Maybe$Nothing,
	onTrailingIconClick: $elm$core$Maybe$Nothing,
	outlined: false,
	pattern: $elm$core$Maybe$Nothing,
	placeholder: $elm$core$Maybe$Nothing,
	required: false,
	rows: $elm$core$Maybe$Nothing,
	textarea: false,
	trailingIcon: $elm$core$Maybe$Nothing,
	type_: $elm$core$Maybe$Just('text'),
	value: $elm$core$Maybe$Nothing
};
var $author$project$Internal$TextField$Model$defaultGeometry = {height: 0, labelWidth: 0, width: 0};
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $elm$html$Html$Attributes$for = $elm$html$Html$Attributes$stringProperty('htmlFor');
var $author$project$Internal$Options$for = A2($elm$core$Basics$composeL, $author$project$Internal$Options$Attribute, $elm$html$Html$Attributes$for);
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{caseInsensitive: false, multiline: false},
		string);
};
var $elm$html$Html$i = _VirtualDom_node('i');
var $author$project$Internal$Options$None = {$: 'None'};
var $author$project$Internal$Options$nop = $author$project$Internal$Options$None;
var $author$project$Internal$Options$onClick = function (msg) {
	return A2(
		$author$project$Internal$Options$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $author$project$Internal$Options$role = function (value) {
	return $author$project$Internal$Options$Attribute(
		A2($elm$html$Html$Attributes$attribute, 'role', value));
};
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
var $author$project$Internal$Options$when = F2(
	function (guard, prop) {
		return guard ? prop : $author$project$Internal$Options$nop;
	});
var $author$project$Internal$TextField$Implementation$iconView = F3(
	function (lift, icon, handler) {
		if (icon.$ === 'Just') {
			var name = icon.a;
			return A3(
				$author$project$Internal$Options$styled,
				$elm$html$Html$i,
				_List_fromArray(
					[
						$author$project$Internal$Options$cs('material-icons mdc-text-field__icon'),
						A2(
						$author$project$Internal$Options$when,
						!_Utils_eq(handler, $elm$core$Maybe$Nothing),
						$author$project$Internal$Options$tabindex(0)),
						A2(
						$author$project$Internal$Options$when,
						!_Utils_eq(handler, $elm$core$Maybe$Nothing),
						$author$project$Internal$Options$role('button')),
						A2(
						$elm$core$Maybe$withDefault,
						$author$project$Internal$Options$nop,
						A2($elm$core$Maybe$map, $author$project$Internal$Options$onClick, handler))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(name)
					]));
		} else {
			return $elm$html$Html$text('');
		}
	});
var $author$project$Internal$Options$id = A2($elm$core$Basics$composeL, $author$project$Internal$Options$Attribute, $elm$html$Html$Attributes$id);
var $elm$html$Html$label = _VirtualDom_node('label');
var $author$project$Internal$Options$Many = function (a) {
	return {$: 'Many', a: a};
};
var $author$project$Internal$Options$many = $author$project$Internal$Options$Many;
var $author$project$Internal$Options$onBlur = function (msg) {
	return A2(
		$author$project$Internal$Options$on,
		'blur',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Attributes$placeholder = $elm$html$Html$Attributes$stringProperty('placeholder');
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$property = $elm$virtual_dom$VirtualDom$property;
var $elm$html$Html$Attributes$rows = function (n) {
	return A2(
		_VirtualDom_attribute,
		'rows',
		$elm$core$String$fromInt(n));
};
var $elm$html$Html$textarea = _VirtualDom_node('textarea');
var $author$project$Internal$TextField$Implementation$textField = F5(
	function (domId, lift, model, options, list) {
		var summary = A2($author$project$Internal$Options$collect, $author$project$Internal$TextField$Implementation$defaultConfig, options);
		var config = summary.config;
		var focused = model.focused && (!config.disabled);
		var isDirty = model.isDirty || A2(
			$elm$core$Maybe$withDefault,
			false,
			A2(
				$elm$core$Maybe$map,
				$elm$core$Basics$neq(''),
				config.value));
		var htmlLabel = A3(
			$author$project$Internal$Options$styled,
			$elm$html$Html$label,
			_List_fromArray(
				[
					$author$project$Internal$Options$cs('mdc-floating-label'),
					A2(
					$author$project$Internal$Options$when,
					focused || isDirty,
					$author$project$Internal$Options$cs('mdc-floating-label--float-above')),
					$author$project$Internal$Options$for(config.id_)
				]),
			function () {
				var _v1 = config.labelText;
				if (_v1.$ === 'Just') {
					var str = _v1.a;
					return _List_fromArray(
						[
							$elm$html$Html$text(str)
						]);
				} else {
					return _List_Nil;
				}
			}());
		var isInvalid = config.invalid || function () {
			var _v0 = config.pattern;
			if (_v0.$ === 'Just') {
				var pattern_ = _v0.a;
				return A2(
					$elm$core$Maybe$withDefault,
					false,
					A3(
						$elm$core$Maybe$map2,
						function (regex) {
							return A2(
								$elm$core$Basics$composeL,
								$elm$core$Basics$not,
								$elm$regex$Regex$contains(regex));
						},
						$elm$regex$Regex$fromString('^' + (pattern_ + '$')),
						model.value));
			} else {
				return false;
			}
		}();
		var leadingIcon_ = A3($author$project$Internal$TextField$Implementation$iconView, lift, config.leadingIcon, config.onLeadingIconClick);
		var trailingIcon_ = A3($author$project$Internal$TextField$Implementation$iconView, lift, config.trailingIcon, config.onTrailingIconClick);
		return A5(
			$author$project$Internal$Options$apply,
			summary,
			$elm$html$Html$div,
			_List_fromArray(
				[
					$author$project$Internal$Options$cs('mdc-text-field'),
					A2(
					$author$project$Internal$Options$when,
					focused,
					$author$project$Internal$Options$cs('mdc-text-field--focused')),
					A2(
					$author$project$Internal$Options$when,
					config.disabled,
					$author$project$Internal$Options$cs('mdc-text-field--disabled')),
					A2(
					$author$project$Internal$Options$when,
					config.fullWidth,
					$author$project$Internal$Options$cs('mdc-text-field--fullwidth')),
					A2(
					$author$project$Internal$Options$when,
					isInvalid,
					$author$project$Internal$Options$cs('mdc-text-field--invalid')),
					A2(
					$author$project$Internal$Options$when,
					config.textarea,
					$author$project$Internal$Options$cs('mdc-text-field--textarea')),
					A2(
					$author$project$Internal$Options$when,
					config.outlined && (!config.textarea),
					$author$project$Internal$Options$cs('mdc-text-field--outlined')),
					A2(
					$author$project$Internal$Options$when,
					!_Utils_eq(config.leadingIcon, $elm$core$Maybe$Nothing),
					$author$project$Internal$Options$cs('mdc-text-field--with-leading-icon')),
					A2(
					$author$project$Internal$Options$when,
					!_Utils_eq(config.trailingIcon, $elm$core$Maybe$Nothing),
					$author$project$Internal$Options$cs('mdc-text-field--with-trailing-icon'))
				]),
			_List_Nil,
			_Utils_ap(
				list,
				_List_fromArray(
					[
						leadingIcon_,
						A4(
						$author$project$Internal$Options$applyNativeControl,
						summary,
						config.textarea ? $elm$html$Html$textarea : $elm$html$Html$input,
						_List_fromArray(
							[
								$author$project$Internal$Options$cs('mdc-text-field__input'),
								$author$project$Internal$Options$id(config.id_),
								(config.outlined && (!config.textarea)) ? A2(
								$author$project$Internal$Options$on,
								'focus',
								A2(
									$elm$json$Json$Decode$map,
									A2($elm$core$Basics$composeL, lift, $author$project$Internal$TextField$Model$Focus),
									$author$project$Internal$TextField$Implementation$decodeGeometry)) : A2(
								$author$project$Internal$Options$on,
								'focus',
								$elm$json$Json$Decode$succeed(
									lift(
										$author$project$Internal$TextField$Model$Focus($author$project$Internal$TextField$Model$defaultGeometry)))),
								$author$project$Internal$Options$onBlur(
								lift($author$project$Internal$TextField$Model$Blur)),
								$author$project$Internal$Options$onInput(
								A2($elm$core$Basics$composeL, lift, $author$project$Internal$TextField$Model$Input)),
								A3(
								$elm$core$Basics$composeL,
								A2(
									$elm$core$Basics$composeL,
									$author$project$Internal$Options$many,
									$elm$core$List$map($author$project$Internal$Options$attribute)),
								$elm$core$List$filterMap($elm$core$Basics$identity),
								_List_fromArray(
									[
										((!config.textarea) ? $elm$core$Maybe$Just : $elm$core$Basics$always($elm$core$Maybe$Nothing))(
										$elm$html$Html$Attributes$type_(
											A2($elm$core$Maybe$withDefault, 'text', config.type_))),
										(config.disabled ? $elm$core$Maybe$Just : $elm$core$Basics$always($elm$core$Maybe$Nothing))(
										$elm$html$Html$Attributes$disabled(true)),
										(config.required ? $elm$core$Maybe$Just : $elm$core$Basics$always($elm$core$Maybe$Nothing))(
										A2(
											$elm$html$Html$Attributes$property,
											'required',
											$elm$json$Json$Encode$bool(true))),
										((!_Utils_eq(config.pattern, $elm$core$Maybe$Nothing)) ? $elm$core$Maybe$Just : $elm$core$Basics$always($elm$core$Maybe$Nothing))(
										A2(
											$elm$html$Html$Attributes$property,
											'pattern',
											$elm$json$Json$Encode$string(
												A2($elm$core$Maybe$withDefault, '', config.pattern)))),
										((!_Utils_eq(config.value, $elm$core$Maybe$Nothing)) ? $elm$core$Maybe$Just : $elm$core$Basics$always($elm$core$Maybe$Nothing))(
										$elm$html$Html$Attributes$value(
											A2($elm$core$Maybe$withDefault, '', config.value)))
									])),
								A2(
								$author$project$Internal$Options$when,
								!_Utils_eq(config.placeholder, $elm$core$Maybe$Nothing),
								$author$project$Internal$Options$attribute(
									$elm$html$Html$Attributes$placeholder(
										A2($elm$core$Maybe$withDefault, '', config.placeholder)))),
								A2(
								$author$project$Internal$Options$when,
								config.textarea && (!_Utils_eq(config.rows, $elm$core$Maybe$Nothing)),
								$author$project$Internal$Options$attribute(
									$elm$html$Html$Attributes$rows(
										A2($elm$core$Maybe$withDefault, 0, config.rows)))),
								A2(
								$author$project$Internal$Options$when,
								config.textarea && (!_Utils_eq(config.cols, $elm$core$Maybe$Nothing)),
								$author$project$Internal$Options$attribute(
									$elm$html$Html$Attributes$cols(
										A2($elm$core$Maybe$withDefault, 0, config.cols))))
							]),
						_List_Nil),
						((!config.fullWidth) && ((!config.outlined) && (!config.textarea))) ? htmlLabel : $elm$html$Html$text(''),
						trailingIcon_,
						((!config.outlined) && (!config.textarea)) ? A3(
						$author$project$Internal$Options$styled,
						$elm$html$Html$div,
						_List_fromArray(
							[
								$author$project$Internal$Options$cs('mdc-line-ripple'),
								A2(
								$author$project$Internal$Options$when,
								model.focused,
								$author$project$Internal$Options$cs('mdc-line-ripple--active'))
							]),
						_List_Nil) : $elm$html$Html$text(''),
						(config.outlined || config.textarea) ? A3(
						$author$project$Internal$Options$styled,
						$elm$html$Html$div,
						_List_fromArray(
							[
								$author$project$Internal$Options$cs('mdc-notched-outline'),
								A2(
								$author$project$Internal$Options$when,
								focused || isDirty,
								$author$project$Internal$Options$cs('mdc-notched-outline--notched'))
							]),
						_List_fromArray(
							[
								A3(
								$author$project$Internal$Options$styled,
								$elm$html$Html$div,
								_List_fromArray(
									[
										$author$project$Internal$Options$cs('mdc-notched-outline__leading')
									]),
								_List_Nil),
								A3(
								$author$project$Internal$Options$styled,
								$elm$html$Html$div,
								_List_fromArray(
									[
										$author$project$Internal$Options$cs('mdc-notched-outline__notch')
									]),
								_List_fromArray(
									[htmlLabel])),
								A3(
								$author$project$Internal$Options$styled,
								$elm$html$Html$div,
								_List_fromArray(
									[
										$author$project$Internal$Options$cs('mdc-notched-outline__trailing')
									]),
								_List_Nil)
							])) : $elm$html$Html$text('')
					])));
	});
var $author$project$Internal$TextField$Implementation$view = F4(
	function (lift, domId, store, options) {
		return A7(
			$author$project$Internal$Component$render,
			$author$project$Internal$TextField$Implementation$getSet.get,
			$author$project$Internal$TextField$Implementation$textField(domId),
			$author$project$Internal$Msg$TextFieldMsg,
			lift,
			domId,
			store,
			A2(
				$elm$core$List$cons,
				$author$project$Internal$Options$internalId(domId),
				options));
	});
var $author$project$Material$TextField$view = $author$project$Internal$TextField$Implementation$view;
var $author$project$View$editContentRow = F4(
	function (rowStep, lang, timeInputs, mdc) {
		var label = $author$project$View$contentRowLabel(rowStep);
		var _v0 = A2($author$project$Model$Step$get, rowStep, timeInputs);
		var minutes = _v0.minutes;
		var seconds = _v0.seconds;
		return A2(
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
							$elm$html$Html$text(
							label(lang))
						])),
					A2(
					$elm$html$Html$td,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('input')
						]),
					_List_fromArray(
						[
							A5(
							$author$project$Material$TextField$view,
							$author$project$Msg$Mdc,
							'input-' + ($author$project$Model$Step$toString(rowStep) + '-minutes'),
							mdc,
							_List_fromArray(
								[
									$author$project$Material$Options$cs('input-time'),
									$author$project$Material$TextField$type_('number'),
									$author$project$Material$TextField$nativeControl(
									_List_fromArray(
										[
											$author$project$Material$Options$attribute(
											$elm$html$Html$Attributes$min('0'))
										])),
									$author$project$Material$TextField$value(minutes),
									$author$project$Material$Options$onInput(
									$author$project$Msg$Input(
										A2($author$project$Msg$Component$Time, rowStep, $author$project$Model$TimeHand$Minutes))),
									$author$project$Material$Options$onChange(
									$author$project$Msg$Change(
										A2($author$project$Msg$Component$Time, rowStep, $author$project$Model$TimeHand$Minutes)))
								]),
							_List_Nil),
							$elm$html$Html$text('\' '),
							A5(
							$author$project$Material$TextField$view,
							$author$project$Msg$Mdc,
							'input-' + ($author$project$Model$Step$toString(rowStep) + '-seconds'),
							mdc,
							_List_fromArray(
								[
									$author$project$Material$Options$cs('input-time'),
									$author$project$Material$TextField$type_('number'),
									$author$project$Material$TextField$nativeControl(
									_List_fromArray(
										[
											$author$project$Material$Options$attribute(
											$elm$html$Html$Attributes$min('0')),
											$author$project$Material$Options$attribute(
											$elm$html$Html$Attributes$max('59'))
										])),
									$author$project$Material$TextField$value(seconds),
									$author$project$Material$Options$onInput(
									$author$project$Msg$Input(
										A2($author$project$Msg$Component$Time, rowStep, $author$project$Model$TimeHand$Seconds))),
									$author$project$Material$Options$onChange(
									$author$project$Msg$Change(
										A2($author$project$Msg$Component$Time, rowStep, $author$project$Model$TimeHand$Seconds)))
								]),
							_List_Nil),
							$elm$html$Html$text('\"')
						]))
				]));
	});
var $author$project$Internal$TopAppBar$Implementation$fixedAdjust = $author$project$Internal$Options$cs('mdc-top-app-bar--fixed-adjust');
var $author$project$Material$TopAppBar$fixedAdjust = $author$project$Internal$TopAppBar$Implementation$fixedAdjust;
var $author$project$Text$noRecipe = function (lang) {
	return 'レシピを選択してください';
};
var $author$project$Model$Step$fromInt = function (value) {
	switch (value) {
		case 0:
			return $elm$core$Maybe$Just($author$project$Model$Step$Soak);
		case 1:
			return $elm$core$Maybe$Just($author$project$Model$Step$Dev);
		case 2:
			return $elm$core$Maybe$Just($author$project$Model$Step$Stop);
		case 3:
			return $elm$core$Maybe$Just($author$project$Model$Step$Fix);
		case 4:
			return $elm$core$Maybe$Just($author$project$Model$Step$Rinse);
		case 5:
			return $elm$core$Maybe$Just($author$project$Model$Step$Wet);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Model$Step$toInt = function (step) {
	switch (step.$) {
		case 'Soak':
			return 0;
		case 'Dev':
			return 1;
		case 'Stop':
			return 2;
		case 'Fix':
			return 3;
		case 'Rinse':
			return 4;
		default:
			return 5;
	}
};
var $author$project$Model$Step$range = F2(
	function (b, e) {
		return A2(
			$elm$core$List$filterMap,
			$author$project$Model$Step$fromInt,
			A2(
				$elm$core$List$range,
				$author$project$Model$Step$toInt(b),
				$author$project$Model$Step$toInt(e)));
	});
var $author$project$Model$Sign$Plus = {$: 'Plus'};
var $author$project$Model$RunStep$compare = F2(
	function (step0, step1) {
		return A2(
			$elm$core$Basics$compare,
			$author$project$Model$RunStep$toInt(step0),
			$author$project$Model$RunStep$toInt(step1));
	});
var $author$project$View$fillZero = function (str) {
	return ($elm$core$String$length(str) < 2) ? ('0' + str) : str;
};
var $author$project$Model$Sign$Minus = {$: 'Minus'};
var $elm$core$Basics$modBy = _Basics_modBy;
var $author$project$Model$fromSecondsToMinutesSeconds = function (secs) {
	if (secs < 0) {
		var secs_ = (-1) * secs;
		return {
			minutes: (secs_ / 60) | 0,
			seconds: A2($elm$core$Basics$modBy, 60, secs_),
			sign: $author$project$Model$Sign$Minus
		};
	} else {
		return {
			minutes: (secs / 60) | 0,
			seconds: A2($elm$core$Basics$modBy, 60, secs),
			sign: $author$project$Model$Sign$Plus
		};
	}
};
var $author$project$Model$fromStepToRunStep = function (step) {
	switch (step.$) {
		case 'Soak':
			return $author$project$Model$RunStep$Soak;
		case 'Dev':
			return $author$project$Model$RunStep$Dev;
		case 'Stop':
			return $author$project$Model$RunStep$Stop;
		case 'Fix':
			return $author$project$Model$RunStep$Fix;
		case 'Rinse':
			return $author$project$Model$RunStep$Rinse;
		default:
			return $author$project$Model$RunStep$Wet;
	}
};
var $author$project$View$stepClass = function (order) {
	switch (order.$) {
		case 'LT':
			return 'step-yet';
		case 'EQ':
			return 'step-current';
		default:
			return 'step-done';
	}
};
var $author$project$Model$Sign$toString = function (sign) {
	if (sign.$ === 'Plus') {
		return '';
	} else {
		return '-';
	}
};
var $author$project$View$runContentRow = F3(
	function (rowStep, lang, _v0) {
		var timeSpans = _v0.timeSpans;
		var step = _v0.step;
		var rest = _v0.rest;
		var state = _v0.state;
		var timeSpan = A2($author$project$Model$Step$get, rowStep, timeSpans);
		var rest1 = A2($author$project$Model$Step$get, rowStep, rest);
		var order = A2(
			$author$project$Model$RunStep$compare,
			step,
			$author$project$Model$fromStepToRunStep(rowStep));
		var label = A2($author$project$View$contentRowLabel, rowStep, lang);
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
							$author$project$View$stepClass(order)),
							$elm$html$Html$Attributes$class('label')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(label)
						])),
					function () {
					var _v1 = $author$project$Model$fromSecondsToMinutesSeconds(rest1);
					var sign = _v1.sign;
					var minutes = _v1.minutes;
					var seconds = _v1.seconds;
					return A2(
						$elm$html$Html$td,
						_Utils_ap(
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class(
									$author$project$View$stepClass(order)),
									$elm$html$Html$Attributes$class('time')
								]),
							_Utils_eq(sign, $author$project$Model$Sign$Plus) ? _List_fromArray(
								[
									$elm$html$Html$Attributes$class('rest-plus')
								]) : _List_Nil),
						_List_fromArray(
							[
								$elm$html$Html$text(
								$author$project$Model$Sign$toString(sign) + ($elm$core$String$fromInt(minutes) + ('\' ' + ($author$project$View$fillZero(
									$elm$core$String$fromInt(seconds)) + '\"'))))
							]));
				}(),
					A2(
					$elm$html$Html$td,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							$author$project$View$stepClass(order))
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
							$author$project$View$stepClass(order)),
							$elm$html$Html$Attributes$class('time')
						]),
					_List_fromArray(
						[
							function () {
							var _v2 = $author$project$Model$fromSecondsToMinutesSeconds(timeSpan);
							var minutes = _v2.minutes;
							var seconds = _v2.seconds;
							return $elm$html$Html$text(
								$elm$core$String$fromInt(minutes) + ('\' ' + ($author$project$View$fillZero(
									$elm$core$String$fromInt(seconds)) + '\"')));
						}()
						]))
				]));
	});
var $author$project$Material$Options$styled = $author$project$Internal$Options$styled;
var $elm$html$Html$table = _VirtualDom_node('table');
var $elm$html$Html$tbody = _VirtualDom_node('tbody');
var $author$project$View$content = function (model) {
	var _v0 = model.appModel;
	if (_v0.$ === 'EditModel') {
		var editModel = _v0.a;
		return _List_fromArray(
			[
				A3(
				$author$project$Material$Options$styled,
				$elm$html$Html$div,
				_List_fromArray(
					[$author$project$Material$TopAppBar$fixedAdjust]),
				_List_fromArray(
					[
						function () {
						var timeInputs = function () {
							var _v2 = model.loggedIn;
							if (_v2.$ === 'LoggedIn') {
								var loggedIn = _v2.a;
								return A2(
									$elm$core$Maybe$map,
									function (_v3) {
										return model.timeInputs;
									},
									loggedIn.recipeId);
							} else {
								return $elm$core$Maybe$Just(model.timeInputs);
							}
						}();
						if (timeInputs.$ === 'Just') {
							var timeInputs_ = timeInputs.a;
							return A2(
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
												A2(
													$elm$core$List$map,
													function (step) {
														return A4($author$project$View$editContentRow, step, model.lang, timeInputs_, model.mdc);
													},
													A2($author$project$Model$Step$range, $author$project$Model$Step$Soak, $author$project$Model$Step$Wet)))
											]))
									]));
						} else {
							return A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('no-recipe')
									]),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$p,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text(
												$author$project$Text$noRecipe(model.lang))
											]))
									]));
						}
					}()
					]))
			]);
	} else {
		var runModel = _v0.a;
		return _List_fromArray(
			[
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
										A2(
											$elm$core$List$map,
											function (step) {
												return A3($author$project$View$runContentRow, step, model.lang, runModel);
											},
											A2($author$project$Model$Step$range, $author$project$Model$Step$Soak, $author$project$Model$Step$Wet)))
									]))
							]))
					]))
			]);
	}
};
var $author$project$Msg$Drawer = function (a) {
	return {$: 'Drawer', a: a};
};
var $author$project$Msg$Hide = {$: 'Hide'};
var $author$project$Msg$LogInDialog = function (a) {
	return {$: 'LogInDialog', a: a};
};
var $author$project$Msg$LogOut = {$: 'LogOut'};
var $author$project$Msg$NewRecipe = {$: 'NewRecipe'};
var $author$project$Msg$SelectRecipe = function (a) {
	return {$: 'SelectRecipe', a: a};
};
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
var $author$project$Internal$Options$aria = F2(
	function (key, val) {
		return $author$project$Internal$Options$Attribute(
			A2($elm$html$Html$Attributes$attribute, 'aria-' + key, val));
	});
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
var $author$project$Internal$Ripple$Implementation$none = {interactionHandler: $author$project$Internal$Options$nop, properties: $author$project$Internal$Options$nop};
var $author$project$Internal$Options$onWithOptions = function (evt) {
	return $author$project$Internal$Options$Listener(evt);
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
var $debois$elm_dom$DOM$offsetLeft = A2($elm$json$Json$Decode$field, 'offsetLeft', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$offsetTop = A2($elm$json$Json$Decode$field, 'offsetTop', $elm$json$Json$Decode$float);
var $author$project$Internal$Ripple$Implementation$decodeClientRect = $debois$elm_dom$DOM$target(
	A5($elm$json$Json$Decode$map4, $author$project$Internal$Ripple$Model$ClientRect, $debois$elm_dom$DOM$offsetTop, $debois$elm_dom$DOM$offsetLeft, $debois$elm_dom$DOM$offsetWidth, $debois$elm_dom$DOM$offsetHeight));
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
var $author$project$Internal$List$Implementation$activated = $author$project$Internal$Options$option(
	function (config) {
		return _Utils_update(
			config,
			{activated: true});
	});
var $author$project$Material$List$activated = $author$project$Internal$List$Implementation$activated;
var $author$project$Text$addRecipe = function (lang) {
	return '追加';
};
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
var $author$project$Text$credit = function (lang) {
	return 'クレジット';
};
var $author$project$Internal$List$Implementation$asListItemView = F9(
	function (domId, lift, model, config, listItemsIds, focusedIndex, index, options, children) {
		var summary = A2($author$project$Internal$Options$collect, $author$project$Internal$List$Implementation$defaultConfig, options);
		return A5(
			$author$project$Internal$Options$apply,
			summary,
			A2($elm$core$Maybe$withDefault, $elm$html$Html$div, summary.config.node),
			_List_Nil,
			_List_Nil,
			children);
	});
var $author$project$Internal$List$Implementation$asListItem = F3(
	function (dom_node, options, children) {
		return {
			children: $author$project$Internal$List$Implementation$HtmlList(children),
			focusable: false,
			options: A2(
				$elm$core$List$cons,
				$author$project$Internal$List$Implementation$node(dom_node),
				options),
			view: $author$project$Internal$List$Implementation$asListItemView
		};
	});
var $author$project$Internal$List$Implementation$divider = function (options) {
	return A2(
		$author$project$Internal$List$Implementation$asListItem,
		$elm$html$Html$li,
		A2(
			$elm$core$List$cons,
			$author$project$Internal$Options$cs('mdc-list-divider'),
			A2(
				$elm$core$List$cons,
				$author$project$Internal$Options$role('separator'),
				options)));
};
var $author$project$Material$List$divider = $author$project$Internal$List$Implementation$divider;
var $author$project$Internal$List$Implementation$graphicClass = $author$project$Internal$Options$cs('mdc-list-item__graphic');
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
var $author$project$Internal$List$Implementation$graphicIcon = function (options) {
	return $author$project$Internal$Icon$Implementation$view(
		A2($elm$core$List$cons, $author$project$Internal$List$Implementation$graphicClass, options));
};
var $author$project$Material$List$graphicIcon = $author$project$Internal$List$Implementation$graphicIcon;
var $elm$html$Html$h3 = _VirtualDom_node('h3');
var $elm$html$Html$header = _VirtualDom_node('header');
var $author$project$Internal$Drawer$Implementation$header = function (options) {
	return A2(
		$author$project$Internal$Options$styled,
		$elm$html$Html$header,
		A2(
			$elm$core$List$cons,
			$author$project$Internal$Options$cs('mdc-drawer__header'),
			options));
};
var $author$project$Internal$Drawer$Modal$Implementation$header = $author$project$Internal$Drawer$Implementation$header;
var $author$project$Material$Drawer$Modal$header = $author$project$Internal$Drawer$Modal$Implementation$header;
var $author$project$Material$List$li = $author$project$Internal$List$Implementation$li;
var $author$project$Text$logIn = function (lang) {
	return 'ログイン';
};
var $author$project$Text$logOut = function (lang) {
	return 'ログアウト';
};
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
var $author$project$Text$notLoggedIn = function (lang) {
	return '未ログイン';
};
var $author$project$Internal$Button$Implementation$onClick = function (handler) {
	return $author$project$Internal$Options$option(
		function (options) {
			return _Utils_update(
				options,
				{
					onClick: $elm$core$Maybe$Just(handler)
				});
		});
};
var $author$project$Material$Button$onClick = $author$project$Internal$Button$Implementation$onClick;
var $author$project$Material$Options$onClick = $author$project$Internal$Options$onClick;
var $author$project$Internal$Drawer$Implementation$open = $author$project$Internal$Options$option(
	function (config) {
		return _Utils_update(
			config,
			{open: true});
	});
var $author$project$Internal$Drawer$Modal$Implementation$open = $author$project$Internal$Drawer$Implementation$open;
var $author$project$Material$Drawer$Modal$open = $author$project$Internal$Drawer$Modal$Implementation$open;
var $author$project$Internal$Button$Implementation$ripple = $author$project$Internal$Options$option(
	function (options) {
		return _Utils_update(
			options,
			{ripple: true});
	});
var $author$project$Material$Button$ripple = $author$project$Internal$Button$Implementation$ripple;
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
var $author$project$Internal$List$Implementation$singleSelection = $author$project$Internal$Options$option(
	function (config) {
		return _Utils_update(
			config,
			{isRadioGroup: false, isSingleSelectionList: true});
	});
var $author$project$Material$List$singleSelection = $author$project$Internal$List$Implementation$singleSelection;
var $author$project$Internal$Drawer$Implementation$title = $author$project$Internal$Options$cs('mdc-drawer__title');
var $author$project$Internal$Drawer$Modal$Implementation$title = $author$project$Internal$Drawer$Implementation$title;
var $author$project$Material$Drawer$Modal$title = $author$project$Internal$Drawer$Modal$Implementation$title;
var $author$project$Internal$List$Implementation$useActivated = $author$project$Internal$Options$option(
	function (config) {
		return _Utils_update(
			config,
			{useActivated: true});
	});
var $author$project$Material$List$useActivated = $author$project$Internal$List$Implementation$useActivated;
var $author$project$Internal$Button$Model$Click = F2(
	function (a, b) {
		return {$: 'Click', a: a, b: b};
	});
var $author$project$Internal$Button$Implementation$defaultConfig = {disabled: false, icon: $elm$core$Maybe$Nothing, link: $elm$core$Maybe$Nothing, onClick: $elm$core$Maybe$Nothing, ripple: false, trailingIcon: false};
var $author$project$Internal$Button$Implementation$button = F5(
	function (domId, lift, model, options, nodes) {
		var rippleInterface = A5(
			$author$project$Internal$Ripple$Implementation$view,
			false,
			domId,
			A2($elm$core$Basics$composeL, lift, $author$project$Internal$Button$Model$RippleMsg),
			model.ripple,
			_List_Nil);
		var summary = A2($author$project$Internal$Options$collect, $author$project$Internal$Button$Implementation$defaultConfig, options);
		var config = summary.config;
		return A5(
			$author$project$Internal$Options$apply,
			summary,
			(!_Utils_eq(config.link, $elm$core$Maybe$Nothing)) ? $elm$html$Html$a : $elm$html$Html$button,
			_List_fromArray(
				[
					$author$project$Internal$Options$cs('mdc-button'),
					A2(
					$author$project$Internal$Options$when,
					(!_Utils_eq(config.link, $elm$core$Maybe$Nothing)) && (!config.disabled),
					$author$project$Internal$Options$attribute(
						$elm$html$Html$Attributes$href(
							A2($elm$core$Maybe$withDefault, '', config.link)))),
					A2(
					$author$project$Internal$Options$when,
					config.disabled,
					$author$project$Internal$Options$attribute(
						$elm$html$Html$Attributes$disabled(true))),
					A2(
					$author$project$Internal$Options$when,
					config.disabled,
					$author$project$Internal$Options$cs('mdc-button--disabled')),
					A3(
					$elm$core$Basics$composeL,
					$author$project$Internal$Options$when(config.ripple),
					$author$project$Internal$Options$many,
					_List_fromArray(
						[rippleInterface.interactionHandler, rippleInterface.properties])),
					A2(
					$elm$core$Maybe$withDefault,
					$author$project$Internal$Options$nop,
					A2(
						$elm$core$Maybe$map,
						A2(
							$elm$core$Basics$composeL,
							A2($elm$core$Basics$composeL, $author$project$Internal$Options$onClick, lift),
							$author$project$Internal$Button$Model$Click(config.ripple)),
						config.onClick))
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
									$author$project$Internal$Options$cs('mdc-button__ripple')
								]),
							_List_Nil)
						]),
						(!config.trailingIcon) ? A2(
						$elm$core$Maybe$withDefault,
						_List_Nil,
						A2(
							$elm$core$Maybe$map,
							function (icon_) {
								return _List_fromArray(
									[
										A2(
										$author$project$Internal$Icon$Implementation$view,
										_List_fromArray(
											[
												$author$project$Internal$Options$cs('mdc-button__icon')
											]),
										icon_)
									]);
							},
							config.icon)) : _List_Nil,
						_List_fromArray(
						[
							A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('mdc-button__label')
								]),
							nodes)
						]),
						config.trailingIcon ? A2(
						$elm$core$Maybe$withDefault,
						_List_Nil,
						A2(
							$elm$core$Maybe$map,
							function (icon_) {
								return _List_fromArray(
									[
										A2(
										$author$project$Internal$Icon$Implementation$view,
										_List_fromArray(
											[
												$author$project$Internal$Options$cs('mdc-button__icon')
											]),
										icon_)
									]);
							},
							config.icon)) : _List_Nil
					])));
	});
var $author$project$Internal$Button$Implementation$view = F2(
	function (lift, index) {
		return A5(
			$author$project$Internal$Component$render,
			$author$project$Internal$Button$Implementation$getSet.get,
			$author$project$Internal$Button$Implementation$button(index),
			$author$project$Internal$Msg$ButtonMsg,
			lift,
			index);
	});
var $author$project$Material$Button$view = $author$project$Internal$Button$Implementation$view;
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
var $author$project$Material$Options$when = $author$project$Internal$Options$when;
var $author$project$View$drawer = function (model) {
	var _v0 = model.appModel;
	if (_v0.$ === 'EditModel') {
		var editModel = _v0.a;
		return _List_fromArray(
			[
				A5(
				$author$project$Material$Drawer$Modal$view,
				$author$project$Msg$Mdc,
				'drawer',
				model.mdc,
				_List_fromArray(
					[
						A2($author$project$Material$Options$when, editModel.drawerOpen, $author$project$Material$Drawer$Modal$open)
					]),
				_List_fromArray(
					[
						A2(
						$author$project$Material$Drawer$Modal$header,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$i,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('material-icons'),
										A2($elm$html$Html$Attributes$style, 'font-size', '46px'),
										A2($elm$html$Html$Attributes$style, 'margin-right', '12px'),
										A2($elm$html$Html$Attributes$style, 'vertical-align', 'text-bottom')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('face')
									])),
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'width', '165px'),
										A2($elm$html$Html$Attributes$style, 'display', 'inline-block')
									]),
								_List_fromArray(
									[
										A3(
										$author$project$Material$Options$styled,
										$elm$html$Html$h3,
										_List_fromArray(
											[$author$project$Material$Drawer$Modal$title]),
										_List_fromArray(
											[
												$elm$html$Html$text(
												function () {
													var _v1 = model.loggedIn;
													if (_v1.$ === 'LoggedIn') {
														var loggedIn = _v1.a;
														return loggedIn.user.displayName;
													} else {
														return $author$project$Text$notLoggedIn(model.lang);
													}
												}())
											])),
										A2(
										$elm$html$Html$div,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'text-align', 'right'),
												A2($elm$html$Html$Attributes$style, 'margin-top', '8px')
											]),
										_List_fromArray(
											[
												function () {
												var _v2 = model.loggedIn;
												if (_v2.$ === 'LoggedIn') {
													return A5(
														$author$project$Material$Button$view,
														$author$project$Msg$Mdc,
														'log-out',
														model.mdc,
														_List_fromArray(
															[
																$author$project$Material$Button$ripple,
																$author$project$Material$Button$onClick($author$project$Msg$LogOut)
															]),
														_List_fromArray(
															[
																$elm$html$Html$text(
																$author$project$Text$logOut(model.lang))
															]));
												} else {
													return A5(
														$author$project$Material$Button$view,
														$author$project$Msg$Mdc,
														'log-in',
														model.mdc,
														_List_fromArray(
															[
																$author$project$Material$Button$ripple,
																$author$project$Material$Button$onClick(
																$author$project$Msg$LogInDialog($author$project$Msg$Show))
															]),
														_List_fromArray(
															[
																$elm$html$Html$text(
																$author$project$Text$logIn(model.lang))
															]));
												}
											}()
											]))
									]))
							])),
						A2(
						$author$project$Material$Drawer$Modal$content,
						_List_Nil,
						_List_fromArray(
							[
								A5(
								$author$project$Material$List$nav,
								$author$project$Msg$Mdc,
								'drawer-list',
								model.mdc,
								_List_fromArray(
									[$author$project$Material$List$singleSelection, $author$project$Material$List$useActivated]),
								_Utils_ap(
									function () {
										var _v3 = model.loggedIn;
										if (_v3.$ === 'LoggedIn') {
											var loggedIn = _v3.a;
											return _Utils_ap(
												A2(
													$elm$core$List$map,
													function (_v4) {
														var id = _v4.a;
														var recipe = _v4.b;
														return A2(
															$author$project$Material$List$li,
															_Utils_ap(
																_List_fromArray(
																	[
																		$author$project$Material$Options$onClick(
																		$author$project$Msg$SelectRecipe(recipe))
																	]),
																_Utils_eq(
																	$elm$core$Maybe$Just(id),
																	A2($elm$core$Maybe$map, $TSFoster$elm_uuid$UUID$toString, loggedIn.recipeId)) ? _List_fromArray(
																	[$author$project$Material$List$activated]) : _List_Nil),
															_List_fromArray(
																[
																	A2($author$project$Material$List$graphicIcon, _List_Nil, 'timer'),
																	$elm$html$Html$text(recipe.name)
																]));
													},
													$elm$core$Dict$toList(loggedIn.recipes)),
												_List_fromArray(
													[
														A2(
														$author$project$Material$List$li,
														_List_fromArray(
															[
																$author$project$Material$Options$onClick($author$project$Msg$NewRecipe)
															]),
														_List_fromArray(
															[
																A2($author$project$Material$List$graphicIcon, _List_Nil, 'add_circle_outline'),
																$elm$html$Html$text(
																$author$project$Text$addRecipe(model.lang))
															])),
														A2($author$project$Material$List$divider, _List_Nil, _List_Nil)
													]));
										} else {
											return _List_Nil;
										}
									}(),
									_List_fromArray(
										[
											A2(
											$author$project$Material$List$a,
											_List_fromArray(
												[
													$author$project$Material$Options$attribute(
													$elm$html$Html$Attributes$href('/credit.html'))
												]),
											_List_fromArray(
												[
													A2($author$project$Material$List$graphicIcon, _List_Nil, 'copyright'),
													$elm$html$Html$text(
													$author$project$Text$credit(model.lang))
												]))
										])))
							]))
					])),
				A2(
				$author$project$Material$Drawer$Modal$scrim,
				_List_fromArray(
					[
						$author$project$Material$Options$onClick(
						$author$project$Msg$Drawer($author$project$Msg$Hide))
					]),
				_List_Nil)
			]);
	} else {
		return _List_Nil;
	}
};
var $author$project$Msg$GoRun = {$: 'GoRun'};
var $author$project$Msg$Next = {$: 'Next'};
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
var $author$project$Internal$Fab$Implementation$ripple = $author$project$Internal$Options$option(
	function (config) {
		return _Utils_update(
			config,
			{ripple: true});
	});
var $author$project$Material$Fab$ripple = $author$project$Internal$Fab$Implementation$ripple;
var $author$project$Internal$Fab$Implementation$defaultConfig = {icon: $elm$core$Maybe$Nothing, ripple: false};
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
var $author$project$View$fab = function (model) {
	var _v0 = model.appModel;
	if (_v0.$ === 'EditModel') {
		var show = function () {
			var _v1 = model.loggedIn;
			if (_v1.$ === 'LoggedIn') {
				var loggedIn = _v1.a;
				var _v2 = A2(
					$elm$core$Maybe$andThen,
					function (recipeId) {
						return A2(
							$elm$core$Dict$get,
							$TSFoster$elm_uuid$UUID$toString(recipeId),
							loggedIn.recipes);
					},
					loggedIn.recipeId);
				if (_v2.$ === 'Just') {
					return true;
				} else {
					return false;
				}
			} else {
				return true;
			}
		}();
		return show ? _List_fromArray(
			[
				A5(
				$author$project$Material$Fab$view,
				$author$project$Msg$Mdc,
				'fab',
				model.mdc,
				_List_fromArray(
					[
						$author$project$Material$Fab$ripple,
						$author$project$Material$Fab$icon('play_arrow'),
						$author$project$Material$Options$onClick($author$project$Msg$GoRun)
					]),
				_List_Nil)
			]) : _List_Nil;
	} else {
		return _List_fromArray(
			[
				A5(
				$author$project$Material$Fab$view,
				$author$project$Msg$Mdc,
				'fab',
				model.mdc,
				_List_fromArray(
					[
						$author$project$Material$Fab$ripple,
						$author$project$Material$Fab$icon('skip_next'),
						$author$project$Material$Options$onClick($author$project$Msg$Next)
					]),
				_List_Nil)
			]);
	}
};
var $perzanko$elm_loading$Loading$Circle = {$: 'Circle'};
var $perzanko$elm_loading$Loading$On = {$: 'On'};
var $perzanko$elm_loading$Loading$defaultConfig = {className: '', color: '#74b4c9', size: 30, speed: 1};
var $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles = F2(
	function (_v0, styles) {
		var newStyles = _v0.b;
		var classname = _v0.c;
		return $elm$core$List$isEmpty(newStyles) ? styles : A3($elm$core$Dict$insert, classname, newStyles, styles);
	});
var $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute = function (_v0) {
	var val = _v0.a;
	return val;
};
var $elm$virtual_dom$VirtualDom$keyedNodeNS = F2(
	function (namespace, tag) {
		return A2(
			_VirtualDom_keyedNodeNS,
			namespace,
			_VirtualDom_noScript(tag));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml = F2(
	function (_v6, _v7) {
		var key = _v6.a;
		var html = _v6.b;
		var pairs = _v7.a;
		var styles = _v7.b;
		switch (html.$) {
			case 'Unstyled':
				var vdom = html.a;
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					styles);
			case 'Node':
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v9 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v9.a;
				var finalStyles = _v9.b;
				var vdom = A3(
					$elm$virtual_dom$VirtualDom$node,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			case 'NodeNS':
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v10 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v10.a;
				var finalStyles = _v10.b;
				var vdom = A4(
					$elm$virtual_dom$VirtualDom$nodeNS,
					ns,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			case 'KeyedNode':
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v11 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v11.a;
				var finalStyles = _v11.b;
				var vdom = A3(
					$elm$virtual_dom$VirtualDom$keyedNode,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			default:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v12 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v12.a;
				var finalStyles = _v12.b;
				var vdom = A4(
					$elm$virtual_dom$VirtualDom$keyedNodeNS,
					ns,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml = F2(
	function (html, _v0) {
		var nodes = _v0.a;
		var styles = _v0.b;
		switch (html.$) {
			case 'Unstyled':
				var vdomNode = html.a;
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					styles);
			case 'Node':
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v2 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v2.a;
				var finalStyles = _v2.b;
				var vdomNode = A3(
					$elm$virtual_dom$VirtualDom$node,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			case 'NodeNS':
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v3 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v3.a;
				var finalStyles = _v3.b;
				var vdomNode = A4(
					$elm$virtual_dom$VirtualDom$nodeNS,
					ns,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			case 'KeyedNode':
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v4 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v4.a;
				var finalStyles = _v4.b;
				var vdomNode = A3(
					$elm$virtual_dom$VirtualDom$keyedNode,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			default:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v5 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v5.a;
				var finalStyles = _v5.b;
				var vdomNode = A4(
					$elm$virtual_dom$VirtualDom$keyedNodeNS,
					ns,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					finalStyles);
		}
	});
var $elm$core$Dict$singleton = F2(
	function (key, value) {
		return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
	});
var $rtfeldman$elm_css$VirtualDom$Styled$stylesFromPropertiesHelp = F2(
	function (candidate, properties) {
		stylesFromPropertiesHelp:
		while (true) {
			if (!properties.b) {
				return candidate;
			} else {
				var _v1 = properties.a;
				var styles = _v1.b;
				var classname = _v1.c;
				var rest = properties.b;
				if ($elm$core$String$isEmpty(classname)) {
					var $temp$candidate = candidate,
						$temp$properties = rest;
					candidate = $temp$candidate;
					properties = $temp$properties;
					continue stylesFromPropertiesHelp;
				} else {
					var $temp$candidate = $elm$core$Maybe$Just(
						_Utils_Tuple2(classname, styles)),
						$temp$properties = rest;
					candidate = $temp$candidate;
					properties = $temp$properties;
					continue stylesFromPropertiesHelp;
				}
			}
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties = function (properties) {
	var _v0 = A2($rtfeldman$elm_css$VirtualDom$Styled$stylesFromPropertiesHelp, $elm$core$Maybe$Nothing, properties);
	if (_v0.$ === 'Nothing') {
		return $elm$core$Dict$empty;
	} else {
		var _v1 = _v0.a;
		var classname = _v1.a;
		var styles = _v1.b;
		return A2($elm$core$Dict$singleton, classname, styles);
	}
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
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $rtfeldman$elm_css$Css$Structure$compactHelp = F2(
	function (declaration, _v0) {
		var keyframesByName = _v0.a;
		var declarations = _v0.b;
		switch (declaration.$) {
			case 'StyleBlockDeclaration':
				var _v2 = declaration.a;
				var properties = _v2.c;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 'MediaRule':
				var styleBlocks = declaration.b;
				return A2(
					$elm$core$List$all,
					function (_v3) {
						var properties = _v3.c;
						return $elm$core$List$isEmpty(properties);
					},
					styleBlocks) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 'SupportsRule':
				var otherDeclarations = declaration.b;
				return $elm$core$List$isEmpty(otherDeclarations) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 'DocumentRule':
				return _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 'PageRule':
				var properties = declaration.b;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 'FontFace':
				var properties = declaration.a;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 'Keyframes':
				var record = declaration.a;
				return $elm$core$String$isEmpty(record.declaration) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					A3($elm$core$Dict$insert, record.name, record.declaration, keyframesByName),
					declarations);
			case 'Viewport':
				var properties = declaration.a;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 'CounterStyle':
				var properties = declaration.a;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			default:
				var tuples = declaration.a;
				return A2(
					$elm$core$List$all,
					function (_v4) {
						var properties = _v4.b;
						return $elm$core$List$isEmpty(properties);
					},
					tuples) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
		}
	});
var $rtfeldman$elm_css$Css$Structure$Keyframes = function (a) {
	return {$: 'Keyframes', a: a};
};
var $rtfeldman$elm_css$Css$Structure$withKeyframeDeclarations = F2(
	function (keyframesByName, compactedDeclarations) {
		return A2(
			$elm$core$List$append,
			A2(
				$elm$core$List$map,
				function (_v0) {
					var name = _v0.a;
					var decl = _v0.b;
					return $rtfeldman$elm_css$Css$Structure$Keyframes(
						{declaration: decl, name: name});
				},
				$elm$core$Dict$toList(keyframesByName)),
			compactedDeclarations);
	});
var $rtfeldman$elm_css$Css$Structure$compactStylesheet = function (_v0) {
	var charset = _v0.charset;
	var imports = _v0.imports;
	var namespaces = _v0.namespaces;
	var declarations = _v0.declarations;
	var _v1 = A3(
		$elm$core$List$foldr,
		$rtfeldman$elm_css$Css$Structure$compactHelp,
		_Utils_Tuple2($elm$core$Dict$empty, _List_Nil),
		declarations);
	var keyframesByName = _v1.a;
	var compactedDeclarations = _v1.b;
	var finalDeclarations = A2($rtfeldman$elm_css$Css$Structure$withKeyframeDeclarations, keyframesByName, compactedDeclarations);
	return {charset: charset, declarations: finalDeclarations, imports: imports, namespaces: namespaces};
};
var $rtfeldman$elm_css$Css$Structure$Output$charsetToString = function (charset) {
	return A2(
		$elm$core$Maybe$withDefault,
		'',
		A2(
			$elm$core$Maybe$map,
			function (str) {
				return '@charset \"' + (str + '\"');
			},
			charset));
};
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString = function (expression) {
	return '(' + (expression.feature + (A2(
		$elm$core$Maybe$withDefault,
		'',
		A2(
			$elm$core$Maybe$map,
			$elm$core$Basics$append(': '),
			expression.value)) + ')'));
};
var $rtfeldman$elm_css$Css$Structure$Output$mediaTypeToString = function (mediaType) {
	switch (mediaType.$) {
		case 'Print':
			return 'print';
		case 'Screen':
			return 'screen';
		default:
			return 'speech';
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString = function (mediaQuery) {
	var prefixWith = F3(
		function (str, mediaType, expressions) {
			return str + (' ' + A2(
				$elm$core$String$join,
				' and ',
				A2(
					$elm$core$List$cons,
					$rtfeldman$elm_css$Css$Structure$Output$mediaTypeToString(mediaType),
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString, expressions))));
		});
	switch (mediaQuery.$) {
		case 'AllQuery':
			var expressions = mediaQuery.a;
			return A2(
				$elm$core$String$join,
				' and ',
				A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString, expressions));
		case 'OnlyQuery':
			var mediaType = mediaQuery.a;
			var expressions = mediaQuery.b;
			return A3(prefixWith, 'only', mediaType, expressions);
		case 'NotQuery':
			var mediaType = mediaQuery.a;
			var expressions = mediaQuery.b;
			return A3(prefixWith, 'not', mediaType, expressions);
		default:
			var str = mediaQuery.a;
			return str;
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$importMediaQueryToString = F2(
	function (name, mediaQuery) {
		return '@import \"' + (name + ($rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString(mediaQuery) + '\"'));
	});
var $rtfeldman$elm_css$Css$Structure$Output$importToString = function (_v0) {
	var name = _v0.a;
	var mediaQueries = _v0.b;
	return A2(
		$elm$core$String$join,
		'\n',
		A2(
			$elm$core$List$map,
			$rtfeldman$elm_css$Css$Structure$Output$importMediaQueryToString(name),
			mediaQueries));
};
var $rtfeldman$elm_css$Css$Structure$Output$namespaceToString = function (_v0) {
	var prefix = _v0.a;
	var str = _v0.b;
	return '@namespace ' + (prefix + ('\"' + (str + '\"')));
};
var $rtfeldman$elm_css$Css$Structure$Output$spaceIndent = '    ';
var $rtfeldman$elm_css$Css$Structure$Output$indent = function (str) {
	return _Utils_ap($rtfeldman$elm_css$Css$Structure$Output$spaceIndent, str);
};
var $rtfeldman$elm_css$Css$Structure$Output$noIndent = '';
var $rtfeldman$elm_css$Css$Structure$Output$emitProperty = function (str) {
	return str + ';';
};
var $rtfeldman$elm_css$Css$Structure$Output$emitProperties = function (properties) {
	return A2(
		$elm$core$String$join,
		'\n',
		A2(
			$elm$core$List$map,
			A2($elm$core$Basics$composeL, $rtfeldman$elm_css$Css$Structure$Output$indent, $rtfeldman$elm_css$Css$Structure$Output$emitProperty),
			properties));
};
var $elm$core$String$append = _String_append;
var $rtfeldman$elm_css$Css$Structure$Output$pseudoElementToString = function (_v0) {
	var str = _v0.a;
	return '::' + str;
};
var $rtfeldman$elm_css$Css$Structure$Output$combinatorToString = function (combinator) {
	switch (combinator.$) {
		case 'AdjacentSibling':
			return '+';
		case 'GeneralSibling':
			return '~';
		case 'Child':
			return '>';
		default:
			return '';
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString = function (repeatableSimpleSelector) {
	switch (repeatableSimpleSelector.$) {
		case 'ClassSelector':
			var str = repeatableSimpleSelector.a;
			return '.' + str;
		case 'IdSelector':
			var str = repeatableSimpleSelector.a;
			return '#' + str;
		case 'PseudoClassSelector':
			var str = repeatableSimpleSelector.a;
			return ':' + str;
		default:
			var str = repeatableSimpleSelector.a;
			return '[' + (str + ']');
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString = function (simpleSelectorSequence) {
	switch (simpleSelectorSequence.$) {
		case 'TypeSelectorSequence':
			var str = simpleSelectorSequence.a.a;
			var repeatableSimpleSelectors = simpleSelectorSequence.b;
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$cons,
					str,
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, repeatableSimpleSelectors)));
		case 'UniversalSelectorSequence':
			var repeatableSimpleSelectors = simpleSelectorSequence.a;
			return $elm$core$List$isEmpty(repeatableSimpleSelectors) ? '*' : A2(
				$elm$core$String$join,
				'',
				A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, repeatableSimpleSelectors));
		default:
			var str = simpleSelectorSequence.a;
			var repeatableSimpleSelectors = simpleSelectorSequence.b;
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$cons,
					str,
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, repeatableSimpleSelectors)));
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$selectorChainToString = function (_v0) {
	var combinator = _v0.a;
	var sequence = _v0.b;
	return A2(
		$elm$core$String$join,
		' ',
		_List_fromArray(
			[
				$rtfeldman$elm_css$Css$Structure$Output$combinatorToString(combinator),
				$rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString(sequence)
			]));
};
var $rtfeldman$elm_css$Css$Structure$Output$selectorToString = function (_v0) {
	var simpleSelectorSequence = _v0.a;
	var chain = _v0.b;
	var pseudoElement = _v0.c;
	var segments = A2(
		$elm$core$List$cons,
		$rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString(simpleSelectorSequence),
		A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$selectorChainToString, chain));
	var pseudoElementsString = A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			[
				A2(
				$elm$core$Maybe$withDefault,
				'',
				A2($elm$core$Maybe$map, $rtfeldman$elm_css$Css$Structure$Output$pseudoElementToString, pseudoElement))
			]));
	return A2(
		$elm$core$String$append,
		A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$filter,
				A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty),
				segments)),
		pseudoElementsString);
};
var $rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock = F2(
	function (indentLevel, _v0) {
		var firstSelector = _v0.a;
		var otherSelectors = _v0.b;
		var properties = _v0.c;
		var selectorStr = A2(
			$elm$core$String$join,
			', ',
			A2(
				$elm$core$List$map,
				$rtfeldman$elm_css$Css$Structure$Output$selectorToString,
				A2($elm$core$List$cons, firstSelector, otherSelectors)));
		return A2(
			$elm$core$String$join,
			'',
			_List_fromArray(
				[
					selectorStr,
					' {\n',
					indentLevel,
					$rtfeldman$elm_css$Css$Structure$Output$emitProperties(properties),
					'\n',
					indentLevel,
					'}'
				]));
	});
var $rtfeldman$elm_css$Css$Structure$Output$prettyPrintDeclaration = function (decl) {
	switch (decl.$) {
		case 'StyleBlockDeclaration':
			var styleBlock = decl.a;
			return A2($rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock, $rtfeldman$elm_css$Css$Structure$Output$noIndent, styleBlock);
		case 'MediaRule':
			var mediaQueries = decl.a;
			var styleBlocks = decl.b;
			var query = A2(
				$elm$core$String$join,
				',\n',
				A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString, mediaQueries));
			var blocks = A2(
				$elm$core$String$join,
				'\n\n',
				A2(
					$elm$core$List$map,
					A2(
						$elm$core$Basics$composeL,
						$rtfeldman$elm_css$Css$Structure$Output$indent,
						$rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock($rtfeldman$elm_css$Css$Structure$Output$spaceIndent)),
					styleBlocks));
			return '@media ' + (query + (' {\n' + (blocks + '\n}')));
		case 'SupportsRule':
			return 'TODO';
		case 'DocumentRule':
			return 'TODO';
		case 'PageRule':
			return 'TODO';
		case 'FontFace':
			return 'TODO';
		case 'Keyframes':
			var name = decl.a.name;
			var declaration = decl.a.declaration;
			return '@keyframes ' + (name + (' {\n' + (declaration + '\n}')));
		case 'Viewport':
			return 'TODO';
		case 'CounterStyle':
			return 'TODO';
		default:
			return 'TODO';
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$prettyPrint = function (_v0) {
	var charset = _v0.charset;
	var imports = _v0.imports;
	var namespaces = _v0.namespaces;
	var declarations = _v0.declarations;
	return A2(
		$elm$core$String$join,
		'\n\n',
		A2(
			$elm$core$List$filter,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty),
			_List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$Output$charsetToString(charset),
					A2(
					$elm$core$String$join,
					'\n',
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$importToString, imports)),
					A2(
					$elm$core$String$join,
					'\n',
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$namespaceToString, namespaces)),
					A2(
					$elm$core$String$join,
					'\n\n',
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$prettyPrintDeclaration, declarations))
				])));
};
var $rtfeldman$elm_css$Css$Structure$CounterStyle = function (a) {
	return {$: 'CounterStyle', a: a};
};
var $rtfeldman$elm_css$Css$Structure$FontFace = function (a) {
	return {$: 'FontFace', a: a};
};
var $rtfeldman$elm_css$Css$Structure$PageRule = F2(
	function (a, b) {
		return {$: 'PageRule', a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$Selector = F3(
	function (a, b, c) {
		return {$: 'Selector', a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$Css$Structure$StyleBlock = F3(
	function (a, b, c) {
		return {$: 'StyleBlock', a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration = function (a) {
	return {$: 'StyleBlockDeclaration', a: a};
};
var $rtfeldman$elm_css$Css$Structure$SupportsRule = F2(
	function (a, b) {
		return {$: 'SupportsRule', a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$Viewport = function (a) {
	return {$: 'Viewport', a: a};
};
var $rtfeldman$elm_css$Css$Structure$MediaRule = F2(
	function (a, b) {
		return {$: 'MediaRule', a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$mapLast = F2(
	function (update, list) {
		if (!list.b) {
			return list;
		} else {
			if (!list.b.b) {
				var only = list.a;
				return _List_fromArray(
					[
						update(only)
					]);
			} else {
				var first = list.a;
				var rest = list.b;
				return A2(
					$elm$core$List$cons,
					first,
					A2($rtfeldman$elm_css$Css$Structure$mapLast, update, rest));
			}
		}
	});
var $rtfeldman$elm_css$Css$Structure$withPropertyAppended = F2(
	function (property, _v0) {
		var firstSelector = _v0.a;
		var otherSelectors = _v0.b;
		var properties = _v0.c;
		return A3(
			$rtfeldman$elm_css$Css$Structure$StyleBlock,
			firstSelector,
			otherSelectors,
			_Utils_ap(
				properties,
				_List_fromArray(
					[property])));
	});
var $rtfeldman$elm_css$Css$Structure$appendProperty = F2(
	function (property, declarations) {
		if (!declarations.b) {
			return declarations;
		} else {
			if (!declarations.b.b) {
				switch (declarations.a.$) {
					case 'StyleBlockDeclaration':
						var styleBlock = declarations.a.a;
						return _List_fromArray(
							[
								$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
								A2($rtfeldman$elm_css$Css$Structure$withPropertyAppended, property, styleBlock))
							]);
					case 'MediaRule':
						var _v1 = declarations.a;
						var mediaQueries = _v1.a;
						var styleBlocks = _v1.b;
						return _List_fromArray(
							[
								A2(
								$rtfeldman$elm_css$Css$Structure$MediaRule,
								mediaQueries,
								A2(
									$rtfeldman$elm_css$Css$Structure$mapLast,
									$rtfeldman$elm_css$Css$Structure$withPropertyAppended(property),
									styleBlocks))
							]);
					default:
						return declarations;
				}
			} else {
				var first = declarations.a;
				var rest = declarations.b;
				return A2(
					$elm$core$List$cons,
					first,
					A2($rtfeldman$elm_css$Css$Structure$appendProperty, property, rest));
			}
		}
	});
var $rtfeldman$elm_css$Css$Structure$appendToLastSelector = F2(
	function (f, styleBlock) {
		if (!styleBlock.b.b) {
			var only = styleBlock.a;
			var properties = styleBlock.c;
			return _List_fromArray(
				[
					A3($rtfeldman$elm_css$Css$Structure$StyleBlock, only, _List_Nil, properties),
					A3(
					$rtfeldman$elm_css$Css$Structure$StyleBlock,
					f(only),
					_List_Nil,
					_List_Nil)
				]);
		} else {
			var first = styleBlock.a;
			var rest = styleBlock.b;
			var properties = styleBlock.c;
			var newRest = A2($elm$core$List$map, f, rest);
			var newFirst = f(first);
			return _List_fromArray(
				[
					A3($rtfeldman$elm_css$Css$Structure$StyleBlock, first, rest, properties),
					A3($rtfeldman$elm_css$Css$Structure$StyleBlock, newFirst, newRest, _List_Nil)
				]);
		}
	});
var $rtfeldman$elm_css$Css$Structure$applyPseudoElement = F2(
	function (pseudo, _v0) {
		var sequence = _v0.a;
		var selectors = _v0.b;
		return A3(
			$rtfeldman$elm_css$Css$Structure$Selector,
			sequence,
			selectors,
			$elm$core$Maybe$Just(pseudo));
	});
var $rtfeldman$elm_css$Css$Structure$appendPseudoElementToLastSelector = F2(
	function (pseudo, styleBlock) {
		return A2(
			$rtfeldman$elm_css$Css$Structure$appendToLastSelector,
			$rtfeldman$elm_css$Css$Structure$applyPseudoElement(pseudo),
			styleBlock);
	});
var $rtfeldman$elm_css$Css$Structure$CustomSelector = F2(
	function (a, b) {
		return {$: 'CustomSelector', a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$TypeSelectorSequence = F2(
	function (a, b) {
		return {$: 'TypeSelectorSequence', a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence = function (a) {
	return {$: 'UniversalSelectorSequence', a: a};
};
var $rtfeldman$elm_css$Css$Structure$appendRepeatable = F2(
	function (selector, sequence) {
		switch (sequence.$) {
			case 'TypeSelectorSequence':
				var typeSelector = sequence.a;
				var list = sequence.b;
				return A2(
					$rtfeldman$elm_css$Css$Structure$TypeSelectorSequence,
					typeSelector,
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
			case 'UniversalSelectorSequence':
				var list = sequence.a;
				return $rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
			default:
				var str = sequence.a;
				var list = sequence.b;
				return A2(
					$rtfeldman$elm_css$Css$Structure$CustomSelector,
					str,
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
		}
	});
var $rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator = F2(
	function (selector, list) {
		if (!list.b) {
			return _List_Nil;
		} else {
			if (!list.b.b) {
				var _v1 = list.a;
				var combinator = _v1.a;
				var sequence = _v1.b;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						combinator,
						A2($rtfeldman$elm_css$Css$Structure$appendRepeatable, selector, sequence))
					]);
			} else {
				var first = list.a;
				var rest = list.b;
				return A2(
					$elm$core$List$cons,
					first,
					A2($rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator, selector, rest));
			}
		}
	});
var $rtfeldman$elm_css$Css$Structure$appendRepeatableSelector = F2(
	function (repeatableSimpleSelector, selector) {
		if (!selector.b.b) {
			var sequence = selector.a;
			var pseudoElement = selector.c;
			return A3(
				$rtfeldman$elm_css$Css$Structure$Selector,
				A2($rtfeldman$elm_css$Css$Structure$appendRepeatable, repeatableSimpleSelector, sequence),
				_List_Nil,
				pseudoElement);
		} else {
			var firstSelector = selector.a;
			var tuples = selector.b;
			var pseudoElement = selector.c;
			return A3(
				$rtfeldman$elm_css$Css$Structure$Selector,
				firstSelector,
				A2($rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator, repeatableSimpleSelector, tuples),
				pseudoElement);
		}
	});
var $rtfeldman$elm_css$Css$Structure$appendRepeatableToLastSelector = F2(
	function (selector, styleBlock) {
		return A2(
			$rtfeldman$elm_css$Css$Structure$appendToLastSelector,
			$rtfeldman$elm_css$Css$Structure$appendRepeatableSelector(selector),
			styleBlock);
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors = function (declarations) {
	collectSelectors:
	while (true) {
		if (!declarations.b) {
			return _List_Nil;
		} else {
			if (declarations.a.$ === 'StyleBlockDeclaration') {
				var _v1 = declarations.a.a;
				var firstSelector = _v1.a;
				var otherSelectors = _v1.b;
				var rest = declarations.b;
				return _Utils_ap(
					A2($elm$core$List$cons, firstSelector, otherSelectors),
					$rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(rest));
			} else {
				var rest = declarations.b;
				var $temp$declarations = rest;
				declarations = $temp$declarations;
				continue collectSelectors;
			}
		}
	}
};
var $rtfeldman$elm_css$Css$Structure$DocumentRule = F5(
	function (a, b, c, d, e) {
		return {$: 'DocumentRule', a: a, b: b, c: c, d: d, e: e};
	});
var $rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock = F2(
	function (update, declarations) {
		_v0$12:
		while (true) {
			if (!declarations.b) {
				return declarations;
			} else {
				if (!declarations.b.b) {
					switch (declarations.a.$) {
						case 'StyleBlockDeclaration':
							var styleBlock = declarations.a.a;
							return A2(
								$elm$core$List$map,
								$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration,
								update(styleBlock));
						case 'MediaRule':
							if (declarations.a.b.b) {
								if (!declarations.a.b.b.b) {
									var _v1 = declarations.a;
									var mediaQueries = _v1.a;
									var _v2 = _v1.b;
									var styleBlock = _v2.a;
									return _List_fromArray(
										[
											A2(
											$rtfeldman$elm_css$Css$Structure$MediaRule,
											mediaQueries,
											update(styleBlock))
										]);
								} else {
									var _v3 = declarations.a;
									var mediaQueries = _v3.a;
									var _v4 = _v3.b;
									var first = _v4.a;
									var rest = _v4.b;
									var _v5 = A2(
										$rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock,
										update,
										_List_fromArray(
											[
												A2($rtfeldman$elm_css$Css$Structure$MediaRule, mediaQueries, rest)
											]));
									if ((_v5.b && (_v5.a.$ === 'MediaRule')) && (!_v5.b.b)) {
										var _v6 = _v5.a;
										var newMediaQueries = _v6.a;
										var newStyleBlocks = _v6.b;
										return _List_fromArray(
											[
												A2(
												$rtfeldman$elm_css$Css$Structure$MediaRule,
												newMediaQueries,
												A2($elm$core$List$cons, first, newStyleBlocks))
											]);
									} else {
										var newDeclarations = _v5;
										return newDeclarations;
									}
								}
							} else {
								break _v0$12;
							}
						case 'SupportsRule':
							var _v7 = declarations.a;
							var str = _v7.a;
							var nestedDeclarations = _v7.b;
							return _List_fromArray(
								[
									A2(
									$rtfeldman$elm_css$Css$Structure$SupportsRule,
									str,
									A2($rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, update, nestedDeclarations))
								]);
						case 'DocumentRule':
							var _v8 = declarations.a;
							var str1 = _v8.a;
							var str2 = _v8.b;
							var str3 = _v8.c;
							var str4 = _v8.d;
							var styleBlock = _v8.e;
							return A2(
								$elm$core$List$map,
								A4($rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4),
								update(styleBlock));
						case 'PageRule':
							var _v9 = declarations.a;
							return declarations;
						case 'FontFace':
							return declarations;
						case 'Keyframes':
							return declarations;
						case 'Viewport':
							return declarations;
						case 'CounterStyle':
							return declarations;
						default:
							return declarations;
					}
				} else {
					break _v0$12;
				}
			}
		}
		var first = declarations.a;
		var rest = declarations.b;
		return A2(
			$elm$core$List$cons,
			first,
			A2($rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, update, rest));
	});
var $Skinney$murmur3$Murmur3$HashData = F4(
	function (shift, seed, hash, charsProcessed) {
		return {charsProcessed: charsProcessed, hash: hash, seed: seed, shift: shift};
	});
var $Skinney$murmur3$Murmur3$c1 = 3432918353;
var $Skinney$murmur3$Murmur3$c2 = 461845907;
var $Skinney$murmur3$Murmur3$multiplyBy = F2(
	function (b, a) {
		return ((a & 65535) * b) + ((((a >>> 16) * b) & 65535) << 16);
	});
var $Skinney$murmur3$Murmur3$rotlBy = F2(
	function (b, a) {
		return (a << b) | (a >>> (32 - b));
	});
var $Skinney$murmur3$Murmur3$finalize = function (data) {
	var acc = (!(!data.hash)) ? (data.seed ^ A2(
		$Skinney$murmur3$Murmur3$multiplyBy,
		$Skinney$murmur3$Murmur3$c2,
		A2(
			$Skinney$murmur3$Murmur3$rotlBy,
			15,
			A2($Skinney$murmur3$Murmur3$multiplyBy, $Skinney$murmur3$Murmur3$c1, data.hash)))) : data.seed;
	var h0 = acc ^ data.charsProcessed;
	var h1 = A2($Skinney$murmur3$Murmur3$multiplyBy, 2246822507, h0 ^ (h0 >>> 16));
	var h2 = A2($Skinney$murmur3$Murmur3$multiplyBy, 3266489909, h1 ^ (h1 >>> 13));
	return (h2 ^ (h2 >>> 16)) >>> 0;
};
var $elm$core$String$foldl = _String_foldl;
var $Skinney$murmur3$Murmur3$mix = F2(
	function (h1, k1) {
		return A2(
			$Skinney$murmur3$Murmur3$multiplyBy,
			5,
			A2(
				$Skinney$murmur3$Murmur3$rotlBy,
				13,
				h1 ^ A2(
					$Skinney$murmur3$Murmur3$multiplyBy,
					$Skinney$murmur3$Murmur3$c2,
					A2(
						$Skinney$murmur3$Murmur3$rotlBy,
						15,
						A2($Skinney$murmur3$Murmur3$multiplyBy, $Skinney$murmur3$Murmur3$c1, k1))))) + 3864292196;
	});
var $Skinney$murmur3$Murmur3$hashFold = F2(
	function (c, data) {
		var res = data.hash | ((255 & $elm$core$Char$toCode(c)) << data.shift);
		var _v0 = data.shift;
		if (_v0 === 24) {
			return {
				charsProcessed: data.charsProcessed + 1,
				hash: 0,
				seed: A2($Skinney$murmur3$Murmur3$mix, data.seed, res),
				shift: 0
			};
		} else {
			return {charsProcessed: data.charsProcessed + 1, hash: res, seed: data.seed, shift: data.shift + 8};
		}
	});
var $Skinney$murmur3$Murmur3$hashString = F2(
	function (seed, str) {
		return $Skinney$murmur3$Murmur3$finalize(
			A3(
				$elm$core$String$foldl,
				$Skinney$murmur3$Murmur3$hashFold,
				A4($Skinney$murmur3$Murmur3$HashData, 0, seed, 0, 0),
				str));
	});
var $rtfeldman$elm_css$Hash$murmurSeed = 15739;
var $rtfeldman$elm_hex$Hex$unsafeToDigit = function (num) {
	unsafeToDigit:
	while (true) {
		switch (num) {
			case 0:
				return _Utils_chr('0');
			case 1:
				return _Utils_chr('1');
			case 2:
				return _Utils_chr('2');
			case 3:
				return _Utils_chr('3');
			case 4:
				return _Utils_chr('4');
			case 5:
				return _Utils_chr('5');
			case 6:
				return _Utils_chr('6');
			case 7:
				return _Utils_chr('7');
			case 8:
				return _Utils_chr('8');
			case 9:
				return _Utils_chr('9');
			case 10:
				return _Utils_chr('a');
			case 11:
				return _Utils_chr('b');
			case 12:
				return _Utils_chr('c');
			case 13:
				return _Utils_chr('d');
			case 14:
				return _Utils_chr('e');
			case 15:
				return _Utils_chr('f');
			default:
				var $temp$num = num;
				num = $temp$num;
				continue unsafeToDigit;
		}
	}
};
var $rtfeldman$elm_hex$Hex$unsafePositiveToDigits = F2(
	function (digits, num) {
		unsafePositiveToDigits:
		while (true) {
			if (num < 16) {
				return A2(
					$elm$core$List$cons,
					$rtfeldman$elm_hex$Hex$unsafeToDigit(num),
					digits);
			} else {
				var $temp$digits = A2(
					$elm$core$List$cons,
					$rtfeldman$elm_hex$Hex$unsafeToDigit(
						A2($elm$core$Basics$modBy, 16, num)),
					digits),
					$temp$num = (num / 16) | 0;
				digits = $temp$digits;
				num = $temp$num;
				continue unsafePositiveToDigits;
			}
		}
	});
var $rtfeldman$elm_hex$Hex$toString = function (num) {
	return $elm$core$String$fromList(
		(num < 0) ? A2(
			$elm$core$List$cons,
			_Utils_chr('-'),
			A2($rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, -num)) : A2($rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, num));
};
var $rtfeldman$elm_css$Hash$fromString = function (str) {
	return A2(
		$elm$core$String$cons,
		_Utils_chr('_'),
		$rtfeldman$elm_hex$Hex$toString(
			A2($Skinney$murmur3$Murmur3$hashString, $rtfeldman$elm_css$Hash$murmurSeed, str)));
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$last = function (list) {
	last:
	while (true) {
		if (!list.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			if (!list.b.b) {
				var singleton = list.a;
				return $elm$core$Maybe$Just(singleton);
			} else {
				var rest = list.b;
				var $temp$list = rest;
				list = $temp$list;
				continue last;
			}
		}
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration = function (declarations) {
	lastDeclaration:
	while (true) {
		if (!declarations.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			if (!declarations.b.b) {
				var x = declarations.a;
				return $elm$core$Maybe$Just(
					_List_fromArray(
						[x]));
			} else {
				var xs = declarations.b;
				var $temp$declarations = xs;
				declarations = $temp$declarations;
				continue lastDeclaration;
			}
		}
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$oneOf = function (maybes) {
	oneOf:
	while (true) {
		if (!maybes.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var maybe = maybes.a;
			var rest = maybes.b;
			if (maybe.$ === 'Nothing') {
				var $temp$maybes = rest;
				maybes = $temp$maybes;
				continue oneOf;
			} else {
				return maybe;
			}
		}
	}
};
var $rtfeldman$elm_css$Css$Structure$FontFeatureValues = function (a) {
	return {$: 'FontFeatureValues', a: a};
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues = function (tuples) {
	var expandTuples = function (tuplesToExpand) {
		if (!tuplesToExpand.b) {
			return _List_Nil;
		} else {
			var properties = tuplesToExpand.a;
			var rest = tuplesToExpand.b;
			return A2(
				$elm$core$List$cons,
				properties,
				expandTuples(rest));
		}
	};
	var newTuples = expandTuples(tuples);
	return _List_fromArray(
		[
			$rtfeldman$elm_css$Css$Structure$FontFeatureValues(newTuples)
		]);
};
var $rtfeldman$elm_css$Css$Structure$styleBlockToMediaRule = F2(
	function (mediaQueries, declaration) {
		if (declaration.$ === 'StyleBlockDeclaration') {
			var styleBlock = declaration.a;
			return A2(
				$rtfeldman$elm_css$Css$Structure$MediaRule,
				mediaQueries,
				_List_fromArray(
					[styleBlock]));
		} else {
			return declaration;
		}
	});
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule = F5(
	function (str1, str2, str3, str4, declaration) {
		if (declaration.$ === 'StyleBlockDeclaration') {
			var structureStyleBlock = declaration.a;
			return A5($rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4, structureStyleBlock);
		} else {
			return declaration;
		}
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule = F2(
	function (mediaQueries, declaration) {
		switch (declaration.$) {
			case 'StyleBlockDeclaration':
				var structureStyleBlock = declaration.a;
				return A2(
					$rtfeldman$elm_css$Css$Structure$MediaRule,
					mediaQueries,
					_List_fromArray(
						[structureStyleBlock]));
			case 'MediaRule':
				var newMediaQueries = declaration.a;
				var structureStyleBlocks = declaration.b;
				return A2(
					$rtfeldman$elm_css$Css$Structure$MediaRule,
					_Utils_ap(mediaQueries, newMediaQueries),
					structureStyleBlocks);
			case 'SupportsRule':
				var str = declaration.a;
				var declarations = declaration.b;
				return A2(
					$rtfeldman$elm_css$Css$Structure$SupportsRule,
					str,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule(mediaQueries),
						declarations));
			case 'DocumentRule':
				var str1 = declaration.a;
				var str2 = declaration.b;
				var str3 = declaration.c;
				var str4 = declaration.d;
				var structureStyleBlock = declaration.e;
				return A5($rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4, structureStyleBlock);
			case 'PageRule':
				return declaration;
			case 'FontFace':
				return declaration;
			case 'Keyframes':
				return declaration;
			case 'Viewport':
				return declaration;
			case 'CounterStyle':
				return declaration;
			default:
				return declaration;
		}
	});
var $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet = function (_v0) {
	var declarations = _v0.a;
	return declarations;
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast = F4(
	function (nestedStyles, rest, f, declarations) {
		var withoutParent = function (decls) {
			return A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				$elm$core$List$tail(decls));
		};
		var nextResult = A2(
			$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
			rest,
			A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				$rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration(declarations)));
		var newDeclarations = function () {
			var _v14 = _Utils_Tuple2(
				$elm$core$List$head(nextResult),
				$rtfeldman$elm_css$Css$Preprocess$Resolve$last(declarations));
			if ((_v14.a.$ === 'Just') && (_v14.b.$ === 'Just')) {
				var nextResultParent = _v14.a.a;
				var originalParent = _v14.b.a;
				return _Utils_ap(
					A2(
						$elm$core$List$take,
						$elm$core$List$length(declarations) - 1,
						declarations),
					_List_fromArray(
						[
							(!_Utils_eq(originalParent, nextResultParent)) ? nextResultParent : originalParent
						]));
			} else {
				return declarations;
			}
		}();
		var insertStylesToNestedDecl = function (lastDecl) {
			return $elm$core$List$concat(
				A2(
					$rtfeldman$elm_css$Css$Structure$mapLast,
					$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles(nestedStyles),
					A2(
						$elm$core$List$map,
						$elm$core$List$singleton,
						A2($rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, f, lastDecl))));
		};
		var initialResult = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				$elm$core$Maybe$map,
				insertStylesToNestedDecl,
				$rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration(declarations)));
		return _Utils_ap(
			newDeclarations,
			_Utils_ap(
				withoutParent(initialResult),
				withoutParent(nextResult)));
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles = F2(
	function (styles, declarations) {
		if (!styles.b) {
			return declarations;
		} else {
			switch (styles.a.$) {
				case 'AppendProperty':
					var property = styles.a.a;
					var rest = styles.b;
					return A2(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						rest,
						A2($rtfeldman$elm_css$Css$Structure$appendProperty, property, declarations));
				case 'ExtendSelector':
					var _v4 = styles.a;
					var selector = _v4.a;
					var nestedStyles = _v4.b;
					var rest = styles.b;
					return A4(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast,
						nestedStyles,
						rest,
						$rtfeldman$elm_css$Css$Structure$appendRepeatableToLastSelector(selector),
						declarations);
				case 'NestSnippet':
					var _v5 = styles.a;
					var selectorCombinator = _v5.a;
					var snippets = _v5.b;
					var rest = styles.b;
					var chain = F2(
						function (_v9, _v10) {
							var originalSequence = _v9.a;
							var originalTuples = _v9.b;
							var originalPseudoElement = _v9.c;
							var newSequence = _v10.a;
							var newTuples = _v10.b;
							var newPseudoElement = _v10.c;
							return A3(
								$rtfeldman$elm_css$Css$Structure$Selector,
								originalSequence,
								_Utils_ap(
									originalTuples,
									A2(
										$elm$core$List$cons,
										_Utils_Tuple2(selectorCombinator, newSequence),
										newTuples)),
								$rtfeldman$elm_css$Css$Preprocess$Resolve$oneOf(
									_List_fromArray(
										[newPseudoElement, originalPseudoElement])));
						});
					var expandDeclaration = function (declaration) {
						switch (declaration.$) {
							case 'StyleBlockDeclaration':
								var _v7 = declaration.a;
								var firstSelector = _v7.a;
								var otherSelectors = _v7.b;
								var nestedStyles = _v7.c;
								var newSelectors = A2(
									$elm$core$List$concatMap,
									function (originalSelector) {
										return A2(
											$elm$core$List$map,
											chain(originalSelector),
											A2($elm$core$List$cons, firstSelector, otherSelectors));
									},
									$rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(declarations));
								var newDeclarations = function () {
									if (!newSelectors.b) {
										return _List_Nil;
									} else {
										var first = newSelectors.a;
										var remainder = newSelectors.b;
										return _List_fromArray(
											[
												$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
												A3($rtfeldman$elm_css$Css$Structure$StyleBlock, first, remainder, _List_Nil))
											]);
									}
								}();
								return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, nestedStyles, newDeclarations);
							case 'MediaRule':
								var mediaQueries = declaration.a;
								var styleBlocks = declaration.b;
								return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule, mediaQueries, styleBlocks);
							case 'SupportsRule':
								var str = declaration.a;
								var otherSnippets = declaration.b;
								return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule, str, otherSnippets);
							case 'DocumentRule':
								var str1 = declaration.a;
								var str2 = declaration.b;
								var str3 = declaration.c;
								var str4 = declaration.d;
								var styleBlock = declaration.e;
								return A2(
									$elm$core$List$map,
									A4($rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule, str1, str2, str3, str4),
									$rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
							case 'PageRule':
								var str = declaration.a;
								var properties = declaration.b;
								return _List_fromArray(
									[
										A2($rtfeldman$elm_css$Css$Structure$PageRule, str, properties)
									]);
							case 'FontFace':
								var properties = declaration.a;
								return _List_fromArray(
									[
										$rtfeldman$elm_css$Css$Structure$FontFace(properties)
									]);
							case 'Viewport':
								var properties = declaration.a;
								return _List_fromArray(
									[
										$rtfeldman$elm_css$Css$Structure$Viewport(properties)
									]);
							case 'CounterStyle':
								var properties = declaration.a;
								return _List_fromArray(
									[
										$rtfeldman$elm_css$Css$Structure$CounterStyle(properties)
									]);
							default:
								var tuples = declaration.a;
								return $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues(tuples);
						}
					};
					return $elm$core$List$concat(
						_Utils_ap(
							_List_fromArray(
								[
									A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, rest, declarations)
								]),
							A2(
								$elm$core$List$map,
								expandDeclaration,
								A2($elm$core$List$concatMap, $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets))));
				case 'WithPseudoElement':
					var _v11 = styles.a;
					var pseudoElement = _v11.a;
					var nestedStyles = _v11.b;
					var rest = styles.b;
					return A4(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast,
						nestedStyles,
						rest,
						$rtfeldman$elm_css$Css$Structure$appendPseudoElementToLastSelector(pseudoElement),
						declarations);
				case 'WithKeyframes':
					var str = styles.a.a;
					var rest = styles.b;
					var name = $rtfeldman$elm_css$Hash$fromString(str);
					var newProperty = 'animation-name:' + name;
					var newDeclarations = A2(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						rest,
						A2($rtfeldman$elm_css$Css$Structure$appendProperty, newProperty, declarations));
					return A2(
						$elm$core$List$append,
						newDeclarations,
						_List_fromArray(
							[
								$rtfeldman$elm_css$Css$Structure$Keyframes(
								{declaration: str, name: name})
							]));
				case 'WithMedia':
					var _v12 = styles.a;
					var mediaQueries = _v12.a;
					var nestedStyles = _v12.b;
					var rest = styles.b;
					var extraDeclarations = function () {
						var _v13 = $rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(declarations);
						if (!_v13.b) {
							return _List_Nil;
						} else {
							var firstSelector = _v13.a;
							var otherSelectors = _v13.b;
							return A2(
								$elm$core$List$map,
								$rtfeldman$elm_css$Css$Structure$styleBlockToMediaRule(mediaQueries),
								A2(
									$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
									nestedStyles,
									$elm$core$List$singleton(
										$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
											A3($rtfeldman$elm_css$Css$Structure$StyleBlock, firstSelector, otherSelectors, _List_Nil)))));
						}
					}();
					return _Utils_ap(
						A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, rest, declarations),
						extraDeclarations);
				default:
					var otherStyles = styles.a.a;
					var rest = styles.b;
					return A2(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						_Utils_ap(otherStyles, rest),
						declarations);
			}
		}
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock = function (_v2) {
	var firstSelector = _v2.a;
	var otherSelectors = _v2.b;
	var styles = _v2.c;
	return A2(
		$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
		styles,
		_List_fromArray(
			[
				$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
				A3($rtfeldman$elm_css$Css$Structure$StyleBlock, firstSelector, otherSelectors, _List_Nil))
			]));
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$extract = function (snippetDeclarations) {
	if (!snippetDeclarations.b) {
		return _List_Nil;
	} else {
		var first = snippetDeclarations.a;
		var rest = snippetDeclarations.b;
		return _Utils_ap(
			$rtfeldman$elm_css$Css$Preprocess$Resolve$toDeclarations(first),
			$rtfeldman$elm_css$Css$Preprocess$Resolve$extract(rest));
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule = F2(
	function (mediaQueries, styleBlocks) {
		var handleStyleBlock = function (styleBlock) {
			return A2(
				$elm$core$List$map,
				$rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule(mediaQueries),
				$rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
		};
		return A2($elm$core$List$concatMap, handleStyleBlock, styleBlocks);
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule = F2(
	function (str, snippets) {
		var declarations = $rtfeldman$elm_css$Css$Preprocess$Resolve$extract(
			A2($elm$core$List$concatMap, $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets));
		return _List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$Structure$SupportsRule, str, declarations)
			]);
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$toDeclarations = function (snippetDeclaration) {
	switch (snippetDeclaration.$) {
		case 'StyleBlockDeclaration':
			var styleBlock = snippetDeclaration.a;
			return $rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock);
		case 'MediaRule':
			var mediaQueries = snippetDeclaration.a;
			var styleBlocks = snippetDeclaration.b;
			return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule, mediaQueries, styleBlocks);
		case 'SupportsRule':
			var str = snippetDeclaration.a;
			var snippets = snippetDeclaration.b;
			return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule, str, snippets);
		case 'DocumentRule':
			var str1 = snippetDeclaration.a;
			var str2 = snippetDeclaration.b;
			var str3 = snippetDeclaration.c;
			var str4 = snippetDeclaration.d;
			var styleBlock = snippetDeclaration.e;
			return A2(
				$elm$core$List$map,
				A4($rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule, str1, str2, str3, str4),
				$rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
		case 'PageRule':
			var str = snippetDeclaration.a;
			var properties = snippetDeclaration.b;
			return _List_fromArray(
				[
					A2($rtfeldman$elm_css$Css$Structure$PageRule, str, properties)
				]);
		case 'FontFace':
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$FontFace(properties)
				]);
		case 'Viewport':
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$Viewport(properties)
				]);
		case 'CounterStyle':
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$CounterStyle(properties)
				]);
		default:
			var tuples = snippetDeclaration.a;
			return $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues(tuples);
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$toStructure = function (_v0) {
	var charset = _v0.charset;
	var imports = _v0.imports;
	var namespaces = _v0.namespaces;
	var snippets = _v0.snippets;
	var declarations = $rtfeldman$elm_css$Css$Preprocess$Resolve$extract(
		A2($elm$core$List$concatMap, $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets));
	return {charset: charset, declarations: declarations, imports: imports, namespaces: namespaces};
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$compileHelp = function (sheet) {
	return $rtfeldman$elm_css$Css$Structure$Output$prettyPrint(
		$rtfeldman$elm_css$Css$Structure$compactStylesheet(
			$rtfeldman$elm_css$Css$Preprocess$Resolve$toStructure(sheet)));
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$compile = function (styles) {
	return A2(
		$elm$core$String$join,
		'\n\n',
		A2($elm$core$List$map, $rtfeldman$elm_css$Css$Preprocess$Resolve$compileHelp, styles));
};
var $rtfeldman$elm_css$Css$Structure$ClassSelector = function (a) {
	return {$: 'ClassSelector', a: a};
};
var $rtfeldman$elm_css$Css$Preprocess$Snippet = function (a) {
	return {$: 'Snippet', a: a};
};
var $rtfeldman$elm_css$Css$Preprocess$StyleBlock = F3(
	function (a, b, c) {
		return {$: 'StyleBlock', a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$Css$Preprocess$StyleBlockDeclaration = function (a) {
	return {$: 'StyleBlockDeclaration', a: a};
};
var $rtfeldman$elm_css$VirtualDom$Styled$makeSnippet = F2(
	function (styles, sequence) {
		var selector = A3($rtfeldman$elm_css$Css$Structure$Selector, sequence, _List_Nil, $elm$core$Maybe$Nothing);
		return $rtfeldman$elm_css$Css$Preprocess$Snippet(
			_List_fromArray(
				[
					$rtfeldman$elm_css$Css$Preprocess$StyleBlockDeclaration(
					A3($rtfeldman$elm_css$Css$Preprocess$StyleBlock, selector, _List_Nil, styles))
				]));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$snippetFromPair = function (_v0) {
	var classname = _v0.a;
	var styles = _v0.b;
	return A2(
		$rtfeldman$elm_css$VirtualDom$Styled$makeSnippet,
		styles,
		$rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(
			_List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$ClassSelector(classname)
				])));
};
var $rtfeldman$elm_css$Css$Preprocess$stylesheet = function (snippets) {
	return {charset: $elm$core$Maybe$Nothing, imports: _List_Nil, namespaces: _List_Nil, snippets: snippets};
};
var $rtfeldman$elm_css$VirtualDom$Styled$toDeclaration = function (dict) {
	return $rtfeldman$elm_css$Css$Preprocess$Resolve$compile(
		$elm$core$List$singleton(
			$rtfeldman$elm_css$Css$Preprocess$stylesheet(
				A2(
					$elm$core$List$map,
					$rtfeldman$elm_css$VirtualDom$Styled$snippetFromPair,
					$elm$core$Dict$toList(dict)))));
};
var $rtfeldman$elm_css$VirtualDom$Styled$toStyleNode = function (styles) {
	return A3(
		$elm$virtual_dom$VirtualDom$node,
		'style',
		_List_Nil,
		$elm$core$List$singleton(
			$elm$virtual_dom$VirtualDom$text(
				$rtfeldman$elm_css$VirtualDom$Styled$toDeclaration(styles))));
};
var $rtfeldman$elm_css$VirtualDom$Styled$unstyle = F3(
	function (elemType, properties, children) {
		var unstyledProperties = A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = $rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _v0 = A3(
			$elm$core$List$foldl,
			$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			children);
		var childNodes = _v0.a;
		var styles = _v0.b;
		var styleNode = $rtfeldman$elm_css$VirtualDom$Styled$toStyleNode(styles);
		return A3(
			$elm$virtual_dom$VirtualDom$node,
			elemType,
			unstyledProperties,
			A2(
				$elm$core$List$cons,
				styleNode,
				$elm$core$List$reverse(childNodes)));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$containsKey = F2(
	function (key, pairs) {
		containsKey:
		while (true) {
			if (!pairs.b) {
				return false;
			} else {
				var _v1 = pairs.a;
				var str = _v1.a;
				var rest = pairs.b;
				if (_Utils_eq(key, str)) {
					return true;
				} else {
					var $temp$key = key,
						$temp$pairs = rest;
					key = $temp$key;
					pairs = $temp$pairs;
					continue containsKey;
				}
			}
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$getUnusedKey = F2(
	function (_default, pairs) {
		getUnusedKey:
		while (true) {
			if (!pairs.b) {
				return _default;
			} else {
				var _v1 = pairs.a;
				var firstKey = _v1.a;
				var rest = pairs.b;
				var newKey = '_' + firstKey;
				if (A2($rtfeldman$elm_css$VirtualDom$Styled$containsKey, newKey, rest)) {
					var $temp$default = newKey,
						$temp$pairs = rest;
					_default = $temp$default;
					pairs = $temp$pairs;
					continue getUnusedKey;
				} else {
					return newKey;
				}
			}
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode = F2(
	function (allStyles, keyedChildNodes) {
		var styleNodeKey = A2($rtfeldman$elm_css$VirtualDom$Styled$getUnusedKey, '_', keyedChildNodes);
		var finalNode = $rtfeldman$elm_css$VirtualDom$Styled$toStyleNode(allStyles);
		return _Utils_Tuple2(styleNodeKey, finalNode);
	});
var $rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyed = F3(
	function (elemType, properties, keyedChildren) {
		var unstyledProperties = A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = $rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _v0 = A3(
			$elm$core$List$foldl,
			$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			keyedChildren);
		var keyedChildNodes = _v0.a;
		var styles = _v0.b;
		var keyedStyleNode = A2($rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode, styles, keyedChildNodes);
		return A3(
			$elm$virtual_dom$VirtualDom$keyedNode,
			elemType,
			unstyledProperties,
			A2(
				$elm$core$List$cons,
				keyedStyleNode,
				$elm$core$List$reverse(keyedChildNodes)));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyedNS = F4(
	function (ns, elemType, properties, keyedChildren) {
		var unstyledProperties = A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = $rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _v0 = A3(
			$elm$core$List$foldl,
			$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			keyedChildren);
		var keyedChildNodes = _v0.a;
		var styles = _v0.b;
		var keyedStyleNode = A2($rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode, styles, keyedChildNodes);
		return A4(
			$elm$virtual_dom$VirtualDom$keyedNodeNS,
			ns,
			elemType,
			unstyledProperties,
			A2(
				$elm$core$List$cons,
				keyedStyleNode,
				$elm$core$List$reverse(keyedChildNodes)));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$unstyleNS = F4(
	function (ns, elemType, properties, children) {
		var unstyledProperties = A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = $rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _v0 = A3(
			$elm$core$List$foldl,
			$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			children);
		var childNodes = _v0.a;
		var styles = _v0.b;
		var styleNode = $rtfeldman$elm_css$VirtualDom$Styled$toStyleNode(styles);
		return A4(
			$elm$virtual_dom$VirtualDom$nodeNS,
			ns,
			elemType,
			unstyledProperties,
			A2(
				$elm$core$List$cons,
				styleNode,
				$elm$core$List$reverse(childNodes)));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$toUnstyled = function (vdom) {
	switch (vdom.$) {
		case 'Unstyled':
			var plainNode = vdom.a;
			return plainNode;
		case 'Node':
			var elemType = vdom.a;
			var properties = vdom.b;
			var children = vdom.c;
			return A3($rtfeldman$elm_css$VirtualDom$Styled$unstyle, elemType, properties, children);
		case 'NodeNS':
			var ns = vdom.a;
			var elemType = vdom.b;
			var properties = vdom.c;
			var children = vdom.d;
			return A4($rtfeldman$elm_css$VirtualDom$Styled$unstyleNS, ns, elemType, properties, children);
		case 'KeyedNode':
			var elemType = vdom.a;
			var properties = vdom.b;
			var children = vdom.c;
			return A3($rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyed, elemType, properties, children);
		default:
			var ns = vdom.a;
			var elemType = vdom.b;
			var properties = vdom.c;
			var children = vdom.d;
			return A4($rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyedNS, ns, elemType, properties, children);
	}
};
var $rtfeldman$elm_css$Html$Styled$toUnstyled = $rtfeldman$elm_css$VirtualDom$Styled$toUnstyled;
var $rtfeldman$elm_css$Css$Preprocess$ApplyStyles = function (a) {
	return {$: 'ApplyStyles', a: a};
};
var $rtfeldman$elm_css$Css$Preprocess$AppendProperty = function (a) {
	return {$: 'AppendProperty', a: a};
};
var $rtfeldman$elm_css$Css$Internal$property = F2(
	function (key, value) {
		return $rtfeldman$elm_css$Css$Preprocess$AppendProperty(key + (':' + value));
	});
var $rtfeldman$elm_css$Css$Internal$getOverloadedProperty = F3(
	function (functionName, desiredKey, style) {
		getOverloadedProperty:
		while (true) {
			switch (style.$) {
				case 'AppendProperty':
					var str = style.a;
					var key = A2(
						$elm$core$Maybe$withDefault,
						'',
						$elm$core$List$head(
							A2($elm$core$String$split, ':', str)));
					return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, key);
				case 'ExtendSelector':
					var selector = style.a;
					return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-selector'));
				case 'NestSnippet':
					var combinator = style.a;
					return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-combinator'));
				case 'WithPseudoElement':
					var pseudoElement = style.a;
					return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-pseudo-element setter'));
				case 'WithMedia':
					return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-media-query'));
				case 'WithKeyframes':
					return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-keyframes'));
				default:
					if (!style.a.b) {
						return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-empty-Style'));
					} else {
						if (!style.a.b.b) {
							var _v1 = style.a;
							var only = _v1.a;
							var $temp$functionName = functionName,
								$temp$desiredKey = desiredKey,
								$temp$style = only;
							functionName = $temp$functionName;
							desiredKey = $temp$desiredKey;
							style = $temp$style;
							continue getOverloadedProperty;
						} else {
							var _v2 = style.a;
							var first = _v2.a;
							var rest = _v2.b;
							var $temp$functionName = functionName,
								$temp$desiredKey = desiredKey,
								$temp$style = $rtfeldman$elm_css$Css$Preprocess$ApplyStyles(rest);
							functionName = $temp$functionName;
							desiredKey = $temp$desiredKey;
							style = $temp$style;
							continue getOverloadedProperty;
						}
					}
			}
		}
	});
var $rtfeldman$elm_css$Css$Internal$IncompatibleUnits = {$: 'IncompatibleUnits'};
var $rtfeldman$elm_css$Css$Structure$Compatible = {$: 'Compatible'};
var $rtfeldman$elm_css$Css$Internal$lengthConverter = F3(
	function (units, unitLabel, numericValue) {
		return {
			absoluteLength: $rtfeldman$elm_css$Css$Structure$Compatible,
			calc: $rtfeldman$elm_css$Css$Structure$Compatible,
			flexBasis: $rtfeldman$elm_css$Css$Structure$Compatible,
			fontSize: $rtfeldman$elm_css$Css$Structure$Compatible,
			length: $rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrAuto: $rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrAutoOrCoverOrContain: $rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrMinMaxDimension: $rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrNone: $rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrNoneOrMinMaxDimension: $rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrNumber: $rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrNumberOrAutoOrNoneOrContent: $rtfeldman$elm_css$Css$Structure$Compatible,
			numericValue: numericValue,
			textIndent: $rtfeldman$elm_css$Css$Structure$Compatible,
			unitLabel: unitLabel,
			units: units,
			value: _Utils_ap(
				$elm$core$String$fromFloat(numericValue),
				unitLabel)
		};
	});
var $rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty = A3($rtfeldman$elm_css$Css$Internal$lengthConverter, $rtfeldman$elm_css$Css$Internal$IncompatibleUnits, '', 0);
var $rtfeldman$elm_css$Css$alignItems = function (fn) {
	return A3(
		$rtfeldman$elm_css$Css$Internal$getOverloadedProperty,
		'alignItems',
		'align-items',
		fn($rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty));
};
var $rtfeldman$elm_css$Css$Preprocess$WithKeyframes = function (a) {
	return {$: 'WithKeyframes', a: a};
};
var $rtfeldman$elm_css$Css$property = F2(
	function (key, value) {
		return $rtfeldman$elm_css$Css$Preprocess$AppendProperty(key + (':' + value));
	});
var $rtfeldman$elm_css$Css$prop1 = F2(
	function (key, arg) {
		return A2($rtfeldman$elm_css$Css$property, key, arg.value);
	});
var $rtfeldman$elm_css$Css$animationName = function (arg) {
	return ((arg.value === 'none') || ((arg.value === 'inherit') || ((arg.value === 'unset') || (arg.value === 'initial')))) ? A2($rtfeldman$elm_css$Css$prop1, 'animation-name', arg) : $rtfeldman$elm_css$Css$Preprocess$WithKeyframes(arg.value);
};
var $rtfeldman$elm_css$Css$auto = {alignItemsOrAuto: $rtfeldman$elm_css$Css$Structure$Compatible, cursor: $rtfeldman$elm_css$Css$Structure$Compatible, flexBasis: $rtfeldman$elm_css$Css$Structure$Compatible, intOrAuto: $rtfeldman$elm_css$Css$Structure$Compatible, justifyContentOrAuto: $rtfeldman$elm_css$Css$Structure$Compatible, lengthOrAuto: $rtfeldman$elm_css$Css$Structure$Compatible, lengthOrAutoOrCoverOrContain: $rtfeldman$elm_css$Css$Structure$Compatible, lengthOrNumberOrAutoOrNoneOrContent: $rtfeldman$elm_css$Css$Structure$Compatible, overflow: $rtfeldman$elm_css$Css$Structure$Compatible, pointerEvents: $rtfeldman$elm_css$Css$Structure$Compatible, tableLayout: $rtfeldman$elm_css$Css$Structure$Compatible, textRendering: $rtfeldman$elm_css$Css$Structure$Compatible, touchAction: $rtfeldman$elm_css$Css$Structure$Compatible, value: 'auto'};
var $rtfeldman$elm_css$Css$backgroundColor = function (c) {
	return A2($rtfeldman$elm_css$Css$property, 'background-color', c.value);
};
var $rtfeldman$elm_css$Css$borderRadius = $rtfeldman$elm_css$Css$prop1('border-radius');
var $rtfeldman$elm_css$VirtualDom$Styled$Attribute = F3(
	function (a, b, c) {
		return {$: 'Attribute', a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$VirtualDom$Styled$property = F2(
	function (key, value) {
		return A3(
			$rtfeldman$elm_css$VirtualDom$Styled$Attribute,
			A2($elm$virtual_dom$VirtualDom$property, key, value),
			_List_Nil,
			'');
	});
var $rtfeldman$elm_css$Html$Styled$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			$rtfeldman$elm_css$VirtualDom$Styled$property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $rtfeldman$elm_css$Html$Styled$Attributes$class = $rtfeldman$elm_css$Html$Styled$Attributes$stringProperty('className');
var $rtfeldman$elm_css$VirtualDom$Styled$murmurSeed = 15739;
var $rtfeldman$elm_css$VirtualDom$Styled$getClassname = function (styles) {
	return $elm$core$List$isEmpty(styles) ? 'unstyled' : A2(
		$elm$core$String$cons,
		_Utils_chr('_'),
		$rtfeldman$elm_hex$Hex$toString(
			A2(
				$Skinney$murmur3$Murmur3$hashString,
				$rtfeldman$elm_css$VirtualDom$Styled$murmurSeed,
				$rtfeldman$elm_css$Css$Preprocess$Resolve$compile(
					$elm$core$List$singleton(
						$rtfeldman$elm_css$Css$Preprocess$stylesheet(
							$elm$core$List$singleton(
								A2(
									$rtfeldman$elm_css$VirtualDom$Styled$makeSnippet,
									styles,
									$rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(_List_Nil)))))))));
};
var $rtfeldman$elm_css$Html$Styled$Internal$css = function (styles) {
	var classname = $rtfeldman$elm_css$VirtualDom$Styled$getClassname(styles);
	var classProperty = A2(
		$elm$virtual_dom$VirtualDom$property,
		'className',
		$elm$json$Json$Encode$string(classname));
	return A3($rtfeldman$elm_css$VirtualDom$Styled$Attribute, classProperty, styles, classname);
};
var $rtfeldman$elm_css$Html$Styled$Attributes$css = $rtfeldman$elm_css$Html$Styled$Internal$css;
var $rtfeldman$elm_css$VirtualDom$Styled$Node = F3(
	function (a, b, c) {
		return {$: 'Node', a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$VirtualDom$Styled$node = $rtfeldman$elm_css$VirtualDom$Styled$Node;
var $rtfeldman$elm_css$Html$Styled$node = $rtfeldman$elm_css$VirtualDom$Styled$node;
var $rtfeldman$elm_css$Html$Styled$div = $rtfeldman$elm_css$Html$Styled$node('div');
var $rtfeldman$elm_css$Css$flexEnd = $rtfeldman$elm_css$Css$prop1('flex-end');
var $rtfeldman$elm_css$Css$height = $rtfeldman$elm_css$Css$prop1('height');
var $rtfeldman$elm_css$Css$withPrecedingHash = function (str) {
	return A2($elm$core$String$startsWith, '#', str) ? str : A2(
		$elm$core$String$cons,
		_Utils_chr('#'),
		str);
};
var $rtfeldman$elm_css$Css$erroneousHex = function (str) {
	return {
		alpha: 1,
		blue: 0,
		color: $rtfeldman$elm_css$Css$Structure$Compatible,
		green: 0,
		red: 0,
		value: $rtfeldman$elm_css$Css$withPrecedingHash(str)
	};
};
var $rtfeldman$elm_hex$Hex$fromStringHelp = F3(
	function (position, chars, accumulated) {
		fromStringHelp:
		while (true) {
			if (!chars.b) {
				return $elm$core$Result$Ok(accumulated);
			} else {
				var _char = chars.a;
				var rest = chars.b;
				switch (_char.valueOf()) {
					case '0':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated;
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '1':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + A2($elm$core$Basics$pow, 16, position);
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '2':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (2 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '3':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (3 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '4':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (4 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '5':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (5 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '6':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (6 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '7':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (7 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '8':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (8 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '9':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (9 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'a':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (10 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'b':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (11 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'c':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (12 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'd':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (13 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'e':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (14 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'f':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (15 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					default:
						var nonHex = _char;
						return $elm$core$Result$Err(
							$elm$core$String$fromChar(nonHex) + ' is not a valid hexadecimal character.');
				}
			}
		}
	});
var $rtfeldman$elm_hex$Hex$fromString = function (str) {
	if ($elm$core$String$isEmpty(str)) {
		return $elm$core$Result$Err('Empty strings are not valid hexadecimal strings.');
	} else {
		var result = function () {
			if (A2($elm$core$String$startsWith, '-', str)) {
				var list = A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					$elm$core$List$tail(
						$elm$core$String$toList(str)));
				return A2(
					$elm$core$Result$map,
					$elm$core$Basics$negate,
					A3(
						$rtfeldman$elm_hex$Hex$fromStringHelp,
						$elm$core$List$length(list) - 1,
						list,
						0));
			} else {
				return A3(
					$rtfeldman$elm_hex$Hex$fromStringHelp,
					$elm$core$String$length(str) - 1,
					$elm$core$String$toList(str),
					0);
			}
		}();
		var formatError = function (err) {
			return A2(
				$elm$core$String$join,
				' ',
				_List_fromArray(
					['\"' + (str + '\"'), 'is not a valid hexadecimal string because', err]));
		};
		return A2($elm$core$Result$mapError, formatError, result);
	}
};
var $rtfeldman$elm_css$Css$validHex = F5(
	function (str, _v0, _v1, _v2, _v3) {
		var r1 = _v0.a;
		var r2 = _v0.b;
		var g1 = _v1.a;
		var g2 = _v1.b;
		var b1 = _v2.a;
		var b2 = _v2.b;
		var a1 = _v3.a;
		var a2 = _v3.b;
		var toResult = A2(
			$elm$core$Basics$composeR,
			$elm$core$String$fromList,
			A2($elm$core$Basics$composeR, $elm$core$String$toLower, $rtfeldman$elm_hex$Hex$fromString));
		var results = _Utils_Tuple2(
			_Utils_Tuple2(
				toResult(
					_List_fromArray(
						[r1, r2])),
				toResult(
					_List_fromArray(
						[g1, g2]))),
			_Utils_Tuple2(
				toResult(
					_List_fromArray(
						[b1, b2])),
				toResult(
					_List_fromArray(
						[a1, a2]))));
		if ((((results.a.a.$ === 'Ok') && (results.a.b.$ === 'Ok')) && (results.b.a.$ === 'Ok')) && (results.b.b.$ === 'Ok')) {
			var _v5 = results.a;
			var red = _v5.a.a;
			var green = _v5.b.a;
			var _v6 = results.b;
			var blue = _v6.a.a;
			var alpha = _v6.b.a;
			return {
				alpha: alpha / 255,
				blue: blue,
				color: $rtfeldman$elm_css$Css$Structure$Compatible,
				green: green,
				red: red,
				value: $rtfeldman$elm_css$Css$withPrecedingHash(str)
			};
		} else {
			return $rtfeldman$elm_css$Css$erroneousHex(str);
		}
	});
var $rtfeldman$elm_css$Css$hex = function (str) {
	var withoutHash = A2($elm$core$String$startsWith, '#', str) ? A2($elm$core$String$dropLeft, 1, str) : str;
	var _v0 = $elm$core$String$toList(withoutHash);
	_v0$4:
	while (true) {
		if ((_v0.b && _v0.b.b) && _v0.b.b.b) {
			if (!_v0.b.b.b.b) {
				var r = _v0.a;
				var _v1 = _v0.b;
				var g = _v1.a;
				var _v2 = _v1.b;
				var b = _v2.a;
				return A5(
					$rtfeldman$elm_css$Css$validHex,
					str,
					_Utils_Tuple2(r, r),
					_Utils_Tuple2(g, g),
					_Utils_Tuple2(b, b),
					_Utils_Tuple2(
						_Utils_chr('f'),
						_Utils_chr('f')));
			} else {
				if (!_v0.b.b.b.b.b) {
					var r = _v0.a;
					var _v3 = _v0.b;
					var g = _v3.a;
					var _v4 = _v3.b;
					var b = _v4.a;
					var _v5 = _v4.b;
					var a = _v5.a;
					return A5(
						$rtfeldman$elm_css$Css$validHex,
						str,
						_Utils_Tuple2(r, r),
						_Utils_Tuple2(g, g),
						_Utils_Tuple2(b, b),
						_Utils_Tuple2(a, a));
				} else {
					if (_v0.b.b.b.b.b.b) {
						if (!_v0.b.b.b.b.b.b.b) {
							var r1 = _v0.a;
							var _v6 = _v0.b;
							var r2 = _v6.a;
							var _v7 = _v6.b;
							var g1 = _v7.a;
							var _v8 = _v7.b;
							var g2 = _v8.a;
							var _v9 = _v8.b;
							var b1 = _v9.a;
							var _v10 = _v9.b;
							var b2 = _v10.a;
							return A5(
								$rtfeldman$elm_css$Css$validHex,
								str,
								_Utils_Tuple2(r1, r2),
								_Utils_Tuple2(g1, g2),
								_Utils_Tuple2(b1, b2),
								_Utils_Tuple2(
									_Utils_chr('f'),
									_Utils_chr('f')));
						} else {
							if (_v0.b.b.b.b.b.b.b.b && (!_v0.b.b.b.b.b.b.b.b.b)) {
								var r1 = _v0.a;
								var _v11 = _v0.b;
								var r2 = _v11.a;
								var _v12 = _v11.b;
								var g1 = _v12.a;
								var _v13 = _v12.b;
								var g2 = _v13.a;
								var _v14 = _v13.b;
								var b1 = _v14.a;
								var _v15 = _v14.b;
								var b2 = _v15.a;
								var _v16 = _v15.b;
								var a1 = _v16.a;
								var _v17 = _v16.b;
								var a2 = _v17.a;
								return A5(
									$rtfeldman$elm_css$Css$validHex,
									str,
									_Utils_Tuple2(r1, r2),
									_Utils_Tuple2(g1, g2),
									_Utils_Tuple2(b1, b2),
									_Utils_Tuple2(a1, a2));
							} else {
								break _v0$4;
							}
						}
					} else {
						break _v0$4;
					}
				}
			}
		} else {
			break _v0$4;
		}
	}
	return $rtfeldman$elm_css$Css$erroneousHex(str);
};
var $rtfeldman$elm_css$Css$justifyContent = function (fn) {
	return A3(
		$rtfeldman$elm_css$Css$Internal$getOverloadedProperty,
		'justifyContent',
		'justify-content',
		fn($rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty));
};
var $rtfeldman$elm_css$Css$Internal$printKeyframeSelector = function (_v0) {
	var percentage = _v0.a;
	var properties = _v0.b;
	var propertiesStr = A2(
		$elm$core$String$join,
		'',
		A2(
			$elm$core$List$map,
			function (_v1) {
				var prop = _v1.a;
				return prop + ';';
			},
			properties));
	var percentageStr = $elm$core$String$fromInt(percentage) + '%';
	return percentageStr + (' {' + (propertiesStr + '}'));
};
var $rtfeldman$elm_css$Css$Internal$compileKeyframes = function (tuples) {
	return A2(
		$elm$core$String$join,
		'\n\n',
		A2($elm$core$List$map, $rtfeldman$elm_css$Css$Internal$printKeyframeSelector, tuples));
};
var $rtfeldman$elm_css$Css$Animations$keyframes = function (tuples) {
	return $elm$core$List$isEmpty(tuples) ? {keyframes: $rtfeldman$elm_css$Css$Structure$Compatible, none: $rtfeldman$elm_css$Css$Structure$Compatible, value: 'none'} : {
		keyframes: $rtfeldman$elm_css$Css$Structure$Compatible,
		none: $rtfeldman$elm_css$Css$Structure$Compatible,
		value: $rtfeldman$elm_css$Css$Internal$compileKeyframes(tuples)
	};
};
var $rtfeldman$elm_css$Css$prop2 = F3(
	function (key, argA, argB) {
		return A2(
			$rtfeldman$elm_css$Css$property,
			key,
			A2(
				$elm$core$String$join,
				' ',
				_List_fromArray(
					[argA.value, argB.value])));
	});
var $rtfeldman$elm_css$Css$margin2 = $rtfeldman$elm_css$Css$prop2('margin');
var $rtfeldman$elm_css$Css$position = $rtfeldman$elm_css$Css$prop1('position');
var $rtfeldman$elm_css$Css$Internal$Property = function (a) {
	return {$: 'Property', a: a};
};
var $rtfeldman$elm_css$Css$Animations$property = F2(
	function (key, value) {
		return $rtfeldman$elm_css$Css$Internal$Property(key + (':' + value));
	});
var $rtfeldman$elm_css$Css$PxUnits = {$: 'PxUnits'};
var $rtfeldman$elm_css$Css$px = A2($rtfeldman$elm_css$Css$Internal$lengthConverter, $rtfeldman$elm_css$Css$PxUnits, 'px');
var $rtfeldman$elm_css$Css$relative = {position: $rtfeldman$elm_css$Css$Structure$Compatible, value: 'relative'};
var $rtfeldman$elm_css$Css$spaceBetween = $rtfeldman$elm_css$Css$prop1('space-between');
var $rtfeldman$elm_css$Css$width = $rtfeldman$elm_css$Css$prop1('width');
var $perzanko$elm_loading$Loading$Bars$view = function (config) {
	var withSpeed = function (x) {
		return $elm$core$String$fromFloat(x / config.speed);
	};
	var outerStyle = _List_fromArray(
		[
			$rtfeldman$elm_css$Css$width(
			$rtfeldman$elm_css$Css$px(config.size)),
			$rtfeldman$elm_css$Css$height(
			$rtfeldman$elm_css$Css$px(config.size)),
			$rtfeldman$elm_css$Css$position($rtfeldman$elm_css$Css$relative),
			A2(
			$rtfeldman$elm_css$Css$margin2,
			$rtfeldman$elm_css$Css$px(0),
			$rtfeldman$elm_css$Css$auto),
			A2($rtfeldman$elm_css$Css$property, 'display', 'flex'),
			$rtfeldman$elm_css$Css$justifyContent($rtfeldman$elm_css$Css$spaceBetween),
			$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$flexEnd)
		]);
	var childStyle = _List_fromArray(
		[
			$rtfeldman$elm_css$Css$width(
			$rtfeldman$elm_css$Css$px(config.size / 3.5)),
			$rtfeldman$elm_css$Css$height(
			$rtfeldman$elm_css$Css$px(config.size / 3.5)),
			$rtfeldman$elm_css$Css$borderRadius(
			$rtfeldman$elm_css$Css$px(5)),
			$rtfeldman$elm_css$Css$backgroundColor(
			$rtfeldman$elm_css$Css$hex(config.color)),
			A2(
			$rtfeldman$elm_css$Css$property,
			'animation-duration',
			withSpeed(1.5) + 's'),
			A2($rtfeldman$elm_css$Css$property, 'animation-iteration-count', 'infinite'),
			A2($rtfeldman$elm_css$Css$property, 'animation-timing-function', 'ease-in-out'),
			$rtfeldman$elm_css$Css$animationName(
			$rtfeldman$elm_css$Css$Animations$keyframes(
				_List_fromArray(
					[
						_Utils_Tuple2(
						0,
						_List_fromArray(
							[
								A2(
								$rtfeldman$elm_css$Css$Animations$property,
								'height',
								$elm$core$String$fromFloat(config.size / 3.5) + 'px'),
								A2($rtfeldman$elm_css$Css$Animations$property, 'transform', 'translate3d(0,0,0)')
							])),
						_Utils_Tuple2(
						50,
						_List_fromArray(
							[
								A2(
								$rtfeldman$elm_css$Css$Animations$property,
								'height',
								$elm$core$String$fromFloat(config.size) + 'px'),
								A2($rtfeldman$elm_css$Css$Animations$property, 'transform', 'translate3d(0,0,0)')
							])),
						_Utils_Tuple2(
						100,
						_List_fromArray(
							[
								A2(
								$rtfeldman$elm_css$Css$Animations$property,
								'height',
								$elm$core$String$fromFloat(config.size / 3.5) + 'px'),
								A2($rtfeldman$elm_css$Css$Animations$property, 'transform', 'translate3d(0,0,0)')
							]))
					])))
		]);
	return A2(
		$rtfeldman$elm_css$Html$Styled$div,
		_List_fromArray(
			[
				$rtfeldman$elm_css$Html$Styled$Attributes$css(outerStyle),
				$rtfeldman$elm_css$Html$Styled$Attributes$class(config.className)
			]),
		_List_fromArray(
			[
				A2(
				$rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$Attributes$css(
						_Utils_ap(
							childStyle,
							_List_fromArray(
								[
									A2(
									$rtfeldman$elm_css$Css$property,
									'animation-delay',
									withSpeed(1) + 's')
								])))
					]),
				_List_Nil),
				A2(
				$rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$Attributes$css(
						_Utils_ap(
							childStyle,
							_List_fromArray(
								[
									A2(
									$rtfeldman$elm_css$Css$property,
									'animation-delay',
									withSpeed(0.5) + 's')
								])))
					]),
				_List_Nil),
				A2(
				$rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$Attributes$css(
						_Utils_ap(
							childStyle,
							_List_fromArray(
								[
									A2(
									$rtfeldman$elm_css$Css$property,
									'animation-delay',
									withSpeed(0.0000001) + 's')
								])))
					]),
				_List_Nil)
			]));
};
var $rtfeldman$elm_css$Css$block = {display: $rtfeldman$elm_css$Css$Structure$Compatible, value: 'block'};
var $rtfeldman$elm_css$Css$center = $rtfeldman$elm_css$Css$prop1('center');
var $rtfeldman$elm_css$Css$display = $rtfeldman$elm_css$Css$prop1('display');
var $rtfeldman$elm_css$Css$PercentageUnits = {$: 'PercentageUnits'};
var $rtfeldman$elm_css$Css$pct = A2($rtfeldman$elm_css$Css$Internal$lengthConverter, $rtfeldman$elm_css$Css$PercentageUnits, '%');
var $perzanko$elm_loading$Loading$BouncingBalls$view = function (config) {
	var withSpeed = function (x) {
		return $elm$core$String$fromFloat(x / config.speed);
	};
	var outerStyle = _List_fromArray(
		[
			$rtfeldman$elm_css$Css$width(
			$rtfeldman$elm_css$Css$px(config.size)),
			$rtfeldman$elm_css$Css$height(
			$rtfeldman$elm_css$Css$px(config.size)),
			$rtfeldman$elm_css$Css$position($rtfeldman$elm_css$Css$relative),
			A2(
			$rtfeldman$elm_css$Css$margin2,
			$rtfeldman$elm_css$Css$px(0),
			$rtfeldman$elm_css$Css$auto),
			A2($rtfeldman$elm_css$Css$property, 'display', 'flex'),
			$rtfeldman$elm_css$Css$justifyContent($rtfeldman$elm_css$Css$spaceBetween),
			$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$center)
		]);
	var childStyle = _List_fromArray(
		[
			$rtfeldman$elm_css$Css$display($rtfeldman$elm_css$Css$block),
			$rtfeldman$elm_css$Css$width(
			$rtfeldman$elm_css$Css$px(config.size / 3.5)),
			$rtfeldman$elm_css$Css$height(
			$rtfeldman$elm_css$Css$px(config.size / 3.5)),
			$rtfeldman$elm_css$Css$borderRadius(
			$rtfeldman$elm_css$Css$pct(100)),
			$rtfeldman$elm_css$Css$backgroundColor(
			$rtfeldman$elm_css$Css$hex(config.color)),
			A2(
			$rtfeldman$elm_css$Css$property,
			'animation-duration',
			withSpeed(0.6) + 's'),
			A2(
			$rtfeldman$elm_css$Css$property,
			'animation-delay',
			withSpeed(0.1) + 's'),
			A2($rtfeldman$elm_css$Css$property, 'animation-timing-function', 'linear'),
			A2($rtfeldman$elm_css$Css$property, 'animation-iteration-count', 'infinite'),
			$rtfeldman$elm_css$Css$animationName(
			$rtfeldman$elm_css$Css$Animations$keyframes(
				_List_fromArray(
					[
						_Utils_Tuple2(
						0,
						_List_fromArray(
							[
								A2($rtfeldman$elm_css$Css$Animations$property, 'transform', 'translate3d(0,0,0) translateZ(0) translate(0,0)')
							])),
						_Utils_Tuple2(
						50,
						_List_fromArray(
							[
								A2(
								$rtfeldman$elm_css$Css$Animations$property,
								'transform',
								'translate3d(0,0,0) translateZ(0) translate(0,' + ($elm$core$String$fromFloat(config.size / 3.5) + 'px)'))
							])),
						_Utils_Tuple2(
						100,
						_List_fromArray(
							[
								A2($rtfeldman$elm_css$Css$Animations$property, 'transform', 'translate3d(0,0,0) translateZ(0) translate(0,0)')
							]))
					])))
		]);
	return A2(
		$rtfeldman$elm_css$Html$Styled$div,
		_List_fromArray(
			[
				$rtfeldman$elm_css$Html$Styled$Attributes$css(outerStyle),
				$rtfeldman$elm_css$Html$Styled$Attributes$class(config.className)
			]),
		_List_fromArray(
			[
				A2(
				$rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$Attributes$css(
						_Utils_ap(
							childStyle,
							_List_fromArray(
								[
									A2(
									$rtfeldman$elm_css$Css$property,
									'animation-delay',
									withSpeed(0.1) + 's')
								])))
					]),
				_List_Nil),
				A2(
				$rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$Attributes$css(
						_Utils_ap(
							childStyle,
							_List_fromArray(
								[
									A2(
									$rtfeldman$elm_css$Css$property,
									'animation-delay',
									withSpeed(0.2) + 's')
								])))
					]),
				_List_Nil),
				A2(
				$rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$Attributes$css(
						_Utils_ap(
							childStyle,
							_List_fromArray(
								[
									A2(
									$rtfeldman$elm_css$Css$property,
									'animation-delay',
									withSpeed(0.3) + 's')
								])))
					]),
				_List_Nil)
			]));
};
var $rtfeldman$elm_css$Css$absolute = {position: $rtfeldman$elm_css$Css$Structure$Compatible, value: 'absolute'};
var $rtfeldman$elm_css$Css$left = $rtfeldman$elm_css$Css$prop1('left');
var $rtfeldman$elm_css$Css$UnitlessFloat = {$: 'UnitlessFloat'};
var $rtfeldman$elm_css$Css$num = function (val) {
	return {
		lengthOrNumber: $rtfeldman$elm_css$Css$Structure$Compatible,
		lengthOrNumberOrAutoOrNoneOrContent: $rtfeldman$elm_css$Css$Structure$Compatible,
		number: $rtfeldman$elm_css$Css$Structure$Compatible,
		numberOrInfinite: $rtfeldman$elm_css$Css$Structure$Compatible,
		numericValue: val,
		unitLabel: '',
		units: $rtfeldman$elm_css$Css$UnitlessFloat,
		value: $elm$core$String$fromFloat(val)
	};
};
var $rtfeldman$elm_css$Css$opacity = $rtfeldman$elm_css$Css$prop1('opacity');
var $rtfeldman$elm_css$Css$top = $rtfeldman$elm_css$Css$prop1('top');
var $perzanko$elm_loading$Loading$Circle$view = function (config) {
	var withSpeed = function (x) {
		return $elm$core$String$fromFloat(x / config.speed);
	};
	var outerStyle = _List_fromArray(
		[
			$rtfeldman$elm_css$Css$width(
			$rtfeldman$elm_css$Css$px(config.size)),
			$rtfeldman$elm_css$Css$height(
			$rtfeldman$elm_css$Css$px(config.size * 0.95)),
			$rtfeldman$elm_css$Css$position($rtfeldman$elm_css$Css$relative),
			A2(
			$rtfeldman$elm_css$Css$margin2,
			$rtfeldman$elm_css$Css$px(0),
			$rtfeldman$elm_css$Css$auto)
		]);
	var childStyle = _List_fromArray(
		[
			$rtfeldman$elm_css$Css$width(
			$rtfeldman$elm_css$Css$px(config.size - (2 * (config.size * 0.17)))),
			$rtfeldman$elm_css$Css$height(
			$rtfeldman$elm_css$Css$px(config.size - (2 * (config.size * 0.17)))),
			$rtfeldman$elm_css$Css$borderRadius(
			$rtfeldman$elm_css$Css$pct(50)),
			$rtfeldman$elm_css$Css$position($rtfeldman$elm_css$Css$absolute),
			$rtfeldman$elm_css$Css$top(
			$rtfeldman$elm_css$Css$px(0)),
			$rtfeldman$elm_css$Css$left(
			$rtfeldman$elm_css$Css$px(0)),
			A2(
			$rtfeldman$elm_css$Css$property,
			'animation-duration',
			withSpeed(1.33) + 's'),
			A2($rtfeldman$elm_css$Css$property, 'animation-timing-function', 'cubic-bezier(.51,.92,.24,1.15)'),
			A2($rtfeldman$elm_css$Css$property, 'animation-iteration-count', 'infinite'),
			$rtfeldman$elm_css$Css$animationName(
			$rtfeldman$elm_css$Css$Animations$keyframes(
				_List_fromArray(
					[
						_Utils_Tuple2(
						0,
						_List_fromArray(
							[
								A2($rtfeldman$elm_css$Css$Animations$property, 'transform', 'translate3d(0,0,0) rotate(0deg)')
							])),
						_Utils_Tuple2(
						100,
						_List_fromArray(
							[
								A2($rtfeldman$elm_css$Css$Animations$property, 'transform', 'translate3d(0,0,0) rotate(720deg)')
							]))
					])))
		]);
	return A2(
		$rtfeldman$elm_css$Html$Styled$div,
		_List_fromArray(
			[
				$rtfeldman$elm_css$Html$Styled$Attributes$css(outerStyle),
				$rtfeldman$elm_css$Html$Styled$Attributes$class(config.className)
			]),
		_List_fromArray(
			[
				A2(
				$rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$Attributes$css(
						$elm$core$List$concat(
							_List_fromArray(
								[
									childStyle,
									_List_fromArray(
									[
										A2(
										$rtfeldman$elm_css$Css$property,
										'border',
										$elm$core$String$fromFloat(config.size * 0.17) + ('px ' + (config.color + ' solid'))),
										$rtfeldman$elm_css$Css$opacity(
										$rtfeldman$elm_css$Css$num(0.25))
									])
								])))
					]),
				_List_Nil),
				A2(
				$rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$Attributes$css(
						$elm$core$List$concat(
							_List_fromArray(
								[
									childStyle,
									_List_fromArray(
									[
										A2(
										$rtfeldman$elm_css$Css$property,
										'border',
										$elm$core$String$fromFloat(config.size * 0.17) + 'px transparent solid'),
										A2(
										$rtfeldman$elm_css$Css$property,
										'border-top',
										$elm$core$String$fromFloat(config.size * 0.17) + ('px ' + (config.color + ' solid'))),
										$rtfeldman$elm_css$Css$opacity(
										$rtfeldman$elm_css$Css$num(0.8))
									])
								])))
					]),
				_List_Nil)
			]));
};
var $perzanko$elm_loading$Loading$DoubleBounce$view = function (config) {
	var outerStyle = _List_fromArray(
		[
			$rtfeldman$elm_css$Css$width(
			$rtfeldman$elm_css$Css$px(config.size)),
			$rtfeldman$elm_css$Css$height(
			$rtfeldman$elm_css$Css$px(config.size)),
			$rtfeldman$elm_css$Css$position($rtfeldman$elm_css$Css$relative),
			A2(
			$rtfeldman$elm_css$Css$margin2,
			$rtfeldman$elm_css$Css$px(0),
			$rtfeldman$elm_css$Css$auto)
		]);
	var innerStyle = _List_fromArray(
		[
			$rtfeldman$elm_css$Css$width(
			$rtfeldman$elm_css$Css$pct(100)),
			$rtfeldman$elm_css$Css$height(
			$rtfeldman$elm_css$Css$pct(100)),
			$rtfeldman$elm_css$Css$borderRadius(
			$rtfeldman$elm_css$Css$pct(50)),
			$rtfeldman$elm_css$Css$backgroundColor(
			$rtfeldman$elm_css$Css$hex(config.color)),
			$rtfeldman$elm_css$Css$opacity(
			$rtfeldman$elm_css$Css$num(0.6)),
			$rtfeldman$elm_css$Css$position($rtfeldman$elm_css$Css$absolute),
			$rtfeldman$elm_css$Css$top(
			$rtfeldman$elm_css$Css$px(0)),
			$rtfeldman$elm_css$Css$left(
			$rtfeldman$elm_css$Css$px(0)),
			$rtfeldman$elm_css$Css$animationName(
			$rtfeldman$elm_css$Css$Animations$keyframes(
				_List_fromArray(
					[
						_Utils_Tuple2(
						0,
						_List_fromArray(
							[
								A2($rtfeldman$elm_css$Css$Animations$property, 'transform', 'scale(0.0)')
							])),
						_Utils_Tuple2(
						50,
						_List_fromArray(
							[
								A2($rtfeldman$elm_css$Css$Animations$property, 'transform', 'scale(1.0)')
							])),
						_Utils_Tuple2(
						100,
						_List_fromArray(
							[
								A2($rtfeldman$elm_css$Css$Animations$property, 'transform', 'scale(0.0)')
							]))
					]))),
			A2(
			$rtfeldman$elm_css$Css$property,
			'animation-duration',
			$elm$core$String$fromFloat(2 / config.speed) + 's'),
			A2($rtfeldman$elm_css$Css$property, 'animation-timing-function', 'ease-in-out'),
			A2($rtfeldman$elm_css$Css$property, 'animation-iteration-count', 'infinite')
		]);
	return A2(
		$rtfeldman$elm_css$Html$Styled$div,
		_List_fromArray(
			[
				$rtfeldman$elm_css$Html$Styled$Attributes$css(outerStyle),
				$rtfeldman$elm_css$Html$Styled$Attributes$class(config.className)
			]),
		_List_fromArray(
			[
				A2(
				$rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$Attributes$css(innerStyle)
					]),
				_List_Nil),
				A2(
				$rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$Attributes$css(
						$elm$core$List$concat(
							_List_fromArray(
								[
									innerStyle,
									_List_fromArray(
									[
										A2(
										$rtfeldman$elm_css$Css$property,
										'animation-delay',
										'-' + ($elm$core$String$fromFloat(1 / config.speed) + 's'))
									])
								])))
					]),
				_List_Nil)
			]));
};
var $rtfeldman$elm_css$Css$Structure$PseudoElement = function (a) {
	return {$: 'PseudoElement', a: a};
};
var $rtfeldman$elm_css$Css$Preprocess$WithPseudoElement = F2(
	function (a, b) {
		return {$: 'WithPseudoElement', a: a, b: b};
	});
var $rtfeldman$elm_css$Css$pseudoElement = function (element) {
	return $rtfeldman$elm_css$Css$Preprocess$WithPseudoElement(
		$rtfeldman$elm_css$Css$Structure$PseudoElement(element));
};
var $rtfeldman$elm_css$Css$after = $rtfeldman$elm_css$Css$pseudoElement('after');
var $rtfeldman$elm_css$Css$before = $rtfeldman$elm_css$Css$pseudoElement('before');
var $rtfeldman$elm_css$Css$prop3 = F4(
	function (key, argA, argB, argC) {
		return A2(
			$rtfeldman$elm_css$Css$property,
			key,
			A2(
				$elm$core$String$join,
				' ',
				_List_fromArray(
					[argA.value, argB.value, argC.value])));
	});
var $rtfeldman$elm_css$Css$border3 = $rtfeldman$elm_css$Css$prop3('border');
var $rtfeldman$elm_css$Css$Animations$opacity = function (_v0) {
	var value = _v0.value;
	return $rtfeldman$elm_css$Css$Internal$Property('opacity:' + value);
};
var $rtfeldman$elm_css$Css$solid = {borderStyle: $rtfeldman$elm_css$Css$Structure$Compatible, textDecorationStyle: $rtfeldman$elm_css$Css$Structure$Compatible, value: 'solid'};
var $perzanko$elm_loading$Loading$Sonar$view = function (config) {
	var outerStyle = _List_fromArray(
		[
			$rtfeldman$elm_css$Css$width(
			$rtfeldman$elm_css$Css$px(config.size)),
			$rtfeldman$elm_css$Css$height(
			$rtfeldman$elm_css$Css$px(config.size)),
			$rtfeldman$elm_css$Css$position($rtfeldman$elm_css$Css$relative),
			A2(
			$rtfeldman$elm_css$Css$margin2,
			$rtfeldman$elm_css$Css$px(0),
			$rtfeldman$elm_css$Css$auto),
			$rtfeldman$elm_css$Css$before(
			_List_fromArray(
				[
					A2($rtfeldman$elm_css$Css$property, 'content', '\' \''),
					$rtfeldman$elm_css$Css$position($rtfeldman$elm_css$Css$absolute),
					$rtfeldman$elm_css$Css$borderRadius(
					$rtfeldman$elm_css$Css$pct(50)),
					$rtfeldman$elm_css$Css$width(
					$rtfeldman$elm_css$Css$px(config.size / 3)),
					$rtfeldman$elm_css$Css$height(
					$rtfeldman$elm_css$Css$px(config.size / 3)),
					A2(
					$rtfeldman$elm_css$Css$property,
					'top',
					'calc(50% - ' + ($elm$core$String$fromFloat(config.size / 6) + 'px)')),
					A2(
					$rtfeldman$elm_css$Css$property,
					'left',
					'calc(50% - ' + ($elm$core$String$fromFloat(config.size / 6) + 'px)')),
					$rtfeldman$elm_css$Css$backgroundColor(
					$rtfeldman$elm_css$Css$hex(config.color)),
					A2(
					$rtfeldman$elm_css$Css$property,
					'animation-duration',
					$elm$core$String$fromFloat(3 / config.speed) + 's'),
					A2($rtfeldman$elm_css$Css$property, 'animation-timing-funtion', 'linear'),
					A2($rtfeldman$elm_css$Css$property, 'animation-iteration-count', 'infinite'),
					$rtfeldman$elm_css$Css$animationName(
					$rtfeldman$elm_css$Css$Animations$keyframes(
						_List_fromArray(
							[
								_Utils_Tuple2(
								0,
								_List_fromArray(
									[
										$rtfeldman$elm_css$Css$Animations$opacity(
										$rtfeldman$elm_css$Css$num(1))
									])),
								_Utils_Tuple2(
								15,
								_List_fromArray(
									[
										$rtfeldman$elm_css$Css$Animations$opacity(
										$rtfeldman$elm_css$Css$num(1)),
										A2($rtfeldman$elm_css$Css$Animations$property, 'transform', 'scale(0.5)')
									])),
								_Utils_Tuple2(
								60,
								_List_fromArray(
									[
										A2($rtfeldman$elm_css$Css$Animations$property, 'transform', 'scale(4)'),
										$rtfeldman$elm_css$Css$Animations$opacity(
										$rtfeldman$elm_css$Css$num(0))
									])),
								_Utils_Tuple2(
								90,
								_List_fromArray(
									[
										$rtfeldman$elm_css$Css$Animations$opacity(
										$rtfeldman$elm_css$Css$num(0)),
										A2($rtfeldman$elm_css$Css$Animations$property, 'transform', 'scale(3)')
									])),
								_Utils_Tuple2(
								95,
								_List_fromArray(
									[
										$rtfeldman$elm_css$Css$Animations$opacity(
										$rtfeldman$elm_css$Css$num(1))
									])),
								_Utils_Tuple2(
								100,
								_List_fromArray(
									[
										$rtfeldman$elm_css$Css$Animations$opacity(
										$rtfeldman$elm_css$Css$num(1)),
										A2($rtfeldman$elm_css$Css$Animations$property, 'transform', 'scale(1)')
									]))
							])))
				])),
			$rtfeldman$elm_css$Css$after(
			_List_fromArray(
				[
					A2($rtfeldman$elm_css$Css$property, 'content', '\' \''),
					$rtfeldman$elm_css$Css$position($rtfeldman$elm_css$Css$absolute),
					$rtfeldman$elm_css$Css$borderRadius(
					$rtfeldman$elm_css$Css$pct(50)),
					$rtfeldman$elm_css$Css$width(
					$rtfeldman$elm_css$Css$px(config.size / 3)),
					$rtfeldman$elm_css$Css$height(
					$rtfeldman$elm_css$Css$px(config.size / 3)),
					A2(
					$rtfeldman$elm_css$Css$property,
					'top',
					'calc(50% - ' + ($elm$core$String$fromFloat(config.size / 6) + 'px)')),
					A2(
					$rtfeldman$elm_css$Css$property,
					'left',
					'calc(50% - ' + ($elm$core$String$fromFloat(config.size / 6) + 'px)')),
					A3(
					$rtfeldman$elm_css$Css$border3,
					$rtfeldman$elm_css$Css$px(1),
					$rtfeldman$elm_css$Css$solid,
					$rtfeldman$elm_css$Css$hex(config.color)),
					$rtfeldman$elm_css$Css$opacity(
					$rtfeldman$elm_css$Css$num(0)),
					A2(
					$rtfeldman$elm_css$Css$property,
					'animation-duration',
					$elm$core$String$fromFloat(3 / config.speed) + 's'),
					A2($rtfeldman$elm_css$Css$property, 'animation-timing-funtion', 'linear'),
					A2($rtfeldman$elm_css$Css$property, 'animation-iteration-count', 'infinite'),
					$rtfeldman$elm_css$Css$animationName(
					$rtfeldman$elm_css$Css$Animations$keyframes(
						_List_fromArray(
							[
								_Utils_Tuple2(
								0,
								_List_fromArray(
									[
										$rtfeldman$elm_css$Css$Animations$opacity(
										$rtfeldman$elm_css$Css$num(0)),
										A2($rtfeldman$elm_css$Css$Animations$property, 'transform', 'scale(1)')
									])),
								_Utils_Tuple2(
								30,
								_List_fromArray(
									[
										$rtfeldman$elm_css$Css$Animations$opacity(
										$rtfeldman$elm_css$Css$num(0)),
										A2($rtfeldman$elm_css$Css$Animations$property, 'transform', 'scale(1)')
									])),
								_Utils_Tuple2(
								60,
								_List_fromArray(
									[
										$rtfeldman$elm_css$Css$Animations$opacity(
										$rtfeldman$elm_css$Css$num(0.3))
									])),
								_Utils_Tuple2(
								90,
								_List_fromArray(
									[
										A2($rtfeldman$elm_css$Css$Animations$property, 'transform', 'scale(3)')
									])),
								_Utils_Tuple2(
								100,
								_List_fromArray(
									[
										$rtfeldman$elm_css$Css$Animations$opacity(
										$rtfeldman$elm_css$Css$num(0))
									]))
							])))
				]))
		]);
	return A2(
		$rtfeldman$elm_css$Html$Styled$div,
		_List_fromArray(
			[
				$rtfeldman$elm_css$Html$Styled$Attributes$css(outerStyle),
				$rtfeldman$elm_css$Html$Styled$Attributes$class(config.className)
			]),
		_List_Nil);
};
var $perzanko$elm_loading$Loading$Spinner$view = function (config) {
	var outerStyle = _List_fromArray(
		[
			$rtfeldman$elm_css$Css$width(
			$rtfeldman$elm_css$Css$px(config.size)),
			$rtfeldman$elm_css$Css$height(
			$rtfeldman$elm_css$Css$px(config.size)),
			$rtfeldman$elm_css$Css$position($rtfeldman$elm_css$Css$relative),
			A2(
			$rtfeldman$elm_css$Css$margin2,
			$rtfeldman$elm_css$Css$px(0),
			$rtfeldman$elm_css$Css$auto)
		]);
	var childs = A2($elm$core$List$range, 1, 12);
	var childStyle = _List_fromArray(
		[
			$rtfeldman$elm_css$Css$width(
			$rtfeldman$elm_css$Css$pct(100)),
			$rtfeldman$elm_css$Css$height(
			$rtfeldman$elm_css$Css$pct(100))
		]);
	var calcAnimationDelay = function (x) {
		return (x === 1) ? '0s' : ($elm$core$String$fromFloat(-((1.1 - (x / 10)) / config.speed)) + 's');
	};
	return A2(
		$rtfeldman$elm_css$Html$Styled$div,
		_List_fromArray(
			[
				$rtfeldman$elm_css$Html$Styled$Attributes$css(outerStyle),
				$rtfeldman$elm_css$Html$Styled$Attributes$class(config.className)
			]),
		_List_fromArray(
			[
				A2(
				$rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$Attributes$css(_List_Nil)
					]),
				A2(
					$elm$core$List$map,
					function (x) {
						return A2(
							$rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$width(
											$rtfeldman$elm_css$Css$pct(100)),
											$rtfeldman$elm_css$Css$height(
											$rtfeldman$elm_css$Css$pct(100)),
											$rtfeldman$elm_css$Css$position($rtfeldman$elm_css$Css$absolute),
											$rtfeldman$elm_css$Css$left(
											$rtfeldman$elm_css$Css$px(0)),
											$rtfeldman$elm_css$Css$top(
											$rtfeldman$elm_css$Css$px(0)),
											A2(
											$rtfeldman$elm_css$Css$property,
											'transform',
											'rotate(' + ($elm$core$String$fromInt((30 * x) - 30) + 'deg)')),
											$rtfeldman$elm_css$Css$before(
											_List_fromArray(
												[
													A2(
													$rtfeldman$elm_css$Css$property,
													'animation-delay',
													calcAnimationDelay(x)),
													A2($rtfeldman$elm_css$Css$property, 'content', '\' \''),
													$rtfeldman$elm_css$Css$display($rtfeldman$elm_css$Css$block),
													A2(
													$rtfeldman$elm_css$Css$margin2,
													$rtfeldman$elm_css$Css$px(0),
													$rtfeldman$elm_css$Css$auto),
													$rtfeldman$elm_css$Css$width(
													$rtfeldman$elm_css$Css$pct(15)),
													$rtfeldman$elm_css$Css$height(
													$rtfeldman$elm_css$Css$pct(15)),
													$rtfeldman$elm_css$Css$backgroundColor(
													$rtfeldman$elm_css$Css$hex(config.color)),
													$rtfeldman$elm_css$Css$borderRadius(
													$rtfeldman$elm_css$Css$pct(100)),
													A2(
													$rtfeldman$elm_css$Css$property,
													'animation-duration',
													$elm$core$String$fromFloat(1.2 / config.speed) + 's'),
													A2($rtfeldman$elm_css$Css$property, 'animation-iteration-count', 'infinite'),
													A2($rtfeldman$elm_css$Css$property, 'animation-fill-mode', 'both'),
													$rtfeldman$elm_css$Css$animationName(
													$rtfeldman$elm_css$Css$Animations$keyframes(
														_List_fromArray(
															[
																_Utils_Tuple2(
																0,
																_List_fromArray(
																	[
																		A2($rtfeldman$elm_css$Css$Animations$property, 'transform', 'scale(0.0)')
																	])),
																_Utils_Tuple2(
																40,
																_List_fromArray(
																	[
																		A2($rtfeldman$elm_css$Css$Animations$property, 'transform', 'scale(1.0)')
																	])),
																_Utils_Tuple2(
																80,
																_List_fromArray(
																	[
																		A2($rtfeldman$elm_css$Css$Animations$property, 'transform', 'scale(0.0)')
																	])),
																_Utils_Tuple2(
																100,
																_List_fromArray(
																	[
																		A2($rtfeldman$elm_css$Css$Animations$property, 'transform', 'scale(0.0)')
																	]))
															])))
												]))
										]))
								]),
							_List_Nil);
					},
					childs))
			]));
};
var $perzanko$elm_loading$Loading$render = F3(
	function (loaderType, config, loadingState) {
		var loader = function () {
			switch (loaderType.$) {
				case 'DoubleBounce':
					return $rtfeldman$elm_css$Html$Styled$toUnstyled(
						$perzanko$elm_loading$Loading$DoubleBounce$view(config));
				case 'Spinner':
					return $rtfeldman$elm_css$Html$Styled$toUnstyled(
						$perzanko$elm_loading$Loading$Spinner$view(config));
				case 'BouncingBalls':
					return $rtfeldman$elm_css$Html$Styled$toUnstyled(
						$perzanko$elm_loading$Loading$BouncingBalls$view(config));
				case 'Bars':
					return $rtfeldman$elm_css$Html$Styled$toUnstyled(
						$perzanko$elm_loading$Loading$Bars$view(config));
				case 'Circle':
					return $rtfeldman$elm_css$Html$Styled$toUnstyled(
						$perzanko$elm_loading$Loading$Circle$view(config));
				default:
					return $rtfeldman$elm_css$Html$Styled$toUnstyled(
						$perzanko$elm_loading$Loading$Sonar$view(config));
			}
		}();
		if (loadingState.$ === 'On') {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('loading')
					]),
				_List_fromArray(
					[loader]));
		} else {
			return $elm$html$Html$text(' ');
		}
	});
var $author$project$View$loadingProgress = function (model) {
	var _v0 = model.appModel;
	if (_v0.$ === 'EditModel') {
		var editModel = _v0.a;
		return editModel.loadingProgressOpen ? _List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('loading-progress')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								A3($perzanko$elm_loading$Loading$render, $perzanko$elm_loading$Loading$Circle, $perzanko$elm_loading$Loading$defaultConfig, $perzanko$elm_loading$Loading$On)
							]))
					]))
			]) : _List_Nil;
	} else {
		return _List_Nil;
	}
};
var $author$project$Msg$LogIn$Provider$Google = {$: 'Google'};
var $author$project$Msg$LogIn = function (a) {
	return {$: 'LogIn', a: a};
};
var $author$project$Msg$SelectLogInDialogListItem = function (a) {
	return {$: 'SelectLogInDialogListItem', a: a};
};
var $author$project$Msg$LogIn$Provider$Twitter = {$: 'Twitter'};
var $elm$html$Html$section = _VirtualDom_node('section');
var $author$project$Internal$Dialog$Implementation$content = function (options) {
	return A2(
		$author$project$Internal$Options$styled,
		$elm$html$Html$section,
		A2(
			$elm$core$List$cons,
			$author$project$Internal$Options$cs('mdc-dialog__content'),
			options));
};
var $author$project$Material$Dialog$content = $author$project$Internal$Dialog$Implementation$content;
var $author$project$Text$google = function (lang) {
	return 'Google';
};
var $elm$html$Html$h2 = _VirtualDom_node('h2');
var $author$project$Material$Options$nop = $author$project$Internal$Options$nop;
var $author$project$Internal$Dialog$Implementation$onClose = function (handler) {
	return $author$project$Internal$Options$option(
		function (config) {
			return _Utils_update(
				config,
				{
					onClose: $elm$core$Maybe$Just(handler)
				});
		});
};
var $author$project$Material$Dialog$onClose = $author$project$Internal$Dialog$Implementation$onClose;
var $author$project$Internal$List$Implementation$onSelectListItem = function (handler) {
	return $author$project$Internal$Options$option(
		function (config) {
			return _Utils_update(
				config,
				{
					onSelectListItem: $elm$core$Maybe$Just(handler)
				});
		});
};
var $author$project$Material$List$onSelectListItem = $author$project$Internal$List$Implementation$onSelectListItem;
var $author$project$Internal$Dialog$Implementation$open = $author$project$Internal$Options$option(
	function (config) {
		return _Utils_update(
			config,
			{open: true});
	});
var $author$project$Material$Dialog$open = $author$project$Internal$Dialog$Implementation$open;
var $author$project$Internal$List$Implementation$selectedIndex = function (index) {
	return $author$project$Internal$Options$option(
		function (config) {
			return _Utils_update(
				config,
				{
					selectedIndex: $elm$core$Maybe$Just(index)
				});
		});
};
var $author$project$Material$List$selectedIndex = $author$project$Internal$List$Implementation$selectedIndex;
var $author$project$Material$Options$tabindex = $author$project$Internal$Options$tabindex;
var $author$project$Internal$Dialog$Implementation$title = $author$project$Internal$Options$cs('mdc-dialog__title');
var $author$project$Material$Dialog$title = $author$project$Internal$Dialog$Implementation$title;
var $author$project$Text$twitter = function (lang) {
	return 'Twitter';
};
var $author$project$Material$List$ul = $author$project$Internal$List$Implementation$view;
var $author$project$Internal$Dialog$Model$EndAnimation = {$: 'EndAnimation'};
var $author$project$Internal$Dialog$Model$NoOp = {$: 'NoOp'};
var $author$project$Internal$Dialog$Model$StartAnimation = function (a) {
	return {$: 'StartAnimation', a: a};
};
var $author$project$Internal$Dialog$Implementation$checkScrimClick = $debois$elm_dom$DOM$target(
	A2(
		$elm$json$Json$Decode$map,
		function (className) {
			var hasClass = function (_class) {
				return A2($elm$core$String$contains, ' ' + (_class + ' '), ' ' + (className + ' '));
			};
			return hasClass('mdc-dialog__scrim') ? true : false;
		},
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['className']),
			$elm$json$Json$Decode$string)));
var $author$project$Internal$Dialog$Implementation$container = function (options) {
	return A2(
		$author$project$Internal$Options$styled,
		$elm$html$Html$div,
		A2(
			$elm$core$List$cons,
			$author$project$Internal$Options$cs('mdc-dialog__container'),
			options));
};
var $author$project$Internal$Dialog$Implementation$defaultConfig = {noScrim: false, onClose: $elm$core$Maybe$Nothing, open: false};
var $author$project$Internal$Dialog$Implementation$scrim = function (options) {
	return A2(
		$author$project$Internal$Options$styled,
		$elm$html$Html$div,
		A2(
			$elm$core$List$cons,
			$author$project$Internal$Options$cs('mdc-dialog__scrim'),
			options));
};
var $author$project$Internal$Dialog$Implementation$surface = function (options) {
	return A2(
		$author$project$Internal$Options$styled,
		$elm$html$Html$div,
		A2(
			$elm$core$List$cons,
			$author$project$Internal$Options$cs('mdc-dialog__surface'),
			options));
};
var $author$project$Internal$Dialog$Implementation$dialog = F4(
	function (lift, model, options, nodes) {
		var summary = A2($author$project$Internal$Options$collect, $author$project$Internal$Dialog$Implementation$defaultConfig, options);
		var config = summary.config;
		var stateChanged = !_Utils_eq(config.open, model.open);
		return A5(
			$author$project$Internal$Options$apply,
			summary,
			$elm$html$Html$div,
			_List_fromArray(
				[
					$author$project$Internal$Options$cs('mdc-dialog'),
					$author$project$Internal$Options$role('alertdialog'),
					A2($author$project$Internal$Options$aria, 'modal', 'true'),
					A2(
					$author$project$Internal$Options$when,
					stateChanged,
					$author$project$Internal$GlobalEvents$onTick(
						$elm$json$Json$Decode$succeed(
							lift(
								$author$project$Internal$Dialog$Model$StartAnimation(config.open))))),
					A2(
					$author$project$Internal$Options$when,
					model.open && config.open,
					$author$project$Internal$Options$cs('mdc-dialog--open')),
					A2(
					$author$project$Internal$Options$when,
					(config.open && stateChanged) || (config.open && model.animating),
					$author$project$Internal$Options$cs('mdc-dialog--opening')),
					A2(
					$author$project$Internal$Options$when,
					((!config.open) && stateChanged) || ((!config.open) && model.animating),
					$author$project$Internal$Options$cs('mdc-dialog--closing')),
					A2(
					$author$project$Internal$Options$when,
					model.animating,
					A2(
						$author$project$Internal$Options$on,
						'transitionend',
						$elm$json$Json$Decode$succeed(
							lift($author$project$Internal$Dialog$Model$EndAnimation)))),
					A3(
					$elm$core$Basics$composeL,
					$author$project$Internal$Options$when(model.open && (config.open && (!config.noScrim))),
					$author$project$Internal$Options$many,
					_List_fromArray(
						[
							A2($author$project$Internal$Options$data, 'focustrap', '{}'),
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
											lift($author$project$Internal$Dialog$Model$NoOp),
											config.onClose) : lift($author$project$Internal$Dialog$Model$NoOp);
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
						]))
				]),
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$author$project$Internal$Dialog$Implementation$container,
					_List_Nil,
					_List_fromArray(
						[
							A2($author$project$Internal$Dialog$Implementation$surface, _List_Nil, nodes)
						])),
					config.noScrim ? $elm$html$Html$text('') : A2(
					$author$project$Internal$Dialog$Implementation$scrim,
					_List_fromArray(
						[
							A2(
							$author$project$Internal$Options$on,
							'click',
							A2(
								$elm$json$Json$Decode$map,
								function (isScrimClick) {
									return isScrimClick ? A2(
										$elm$core$Maybe$withDefault,
										lift($author$project$Internal$Dialog$Model$NoOp),
										config.onClose) : lift($author$project$Internal$Dialog$Model$NoOp);
								},
								$author$project$Internal$Dialog$Implementation$checkScrimClick))
						]),
					_List_Nil)
				]));
	});
var $author$project$Internal$Dialog$Implementation$view = A3($author$project$Internal$Component$render, $author$project$Internal$Dialog$Implementation$getSet.get, $author$project$Internal$Dialog$Implementation$dialog, $author$project$Internal$Msg$DialogMsg);
var $author$project$Material$Dialog$view = $author$project$Internal$Dialog$Implementation$view;
var $author$project$Text$whichAuthProvider = function (lang) {
	return '次のサービスを使って認証します';
};
var $author$project$View$logInDialog = function (model) {
	var _v0 = model.appModel;
	if (_v0.$ === 'EditModel') {
		var editModel = _v0.a;
		return _List_fromArray(
			[
				A5(
				$author$project$Material$Dialog$view,
				$author$project$Msg$Mdc,
				'log-in-dialog',
				model.mdc,
				_List_fromArray(
					[
						A2($author$project$Material$Options$when, editModel.logInDialogOpen, $author$project$Material$Dialog$open),
						$author$project$Material$Dialog$onClose(
						$author$project$Msg$LogInDialog($author$project$Msg$Hide))
					]),
				_List_fromArray(
					[
						A3(
						$author$project$Material$Options$styled,
						$elm$html$Html$h2,
						_List_fromArray(
							[$author$project$Material$Dialog$title]),
						_List_fromArray(
							[
								$elm$html$Html$text(
								$author$project$Text$whichAuthProvider(model.lang))
							])),
						A2(
						$author$project$Material$Dialog$content,
						_List_Nil,
						_List_fromArray(
							[
								A5(
								$author$project$Material$List$ul,
								$author$project$Msg$Mdc,
								'log-in-dialog-list',
								model.mdc,
								_List_fromArray(
									[
										A2(
										$elm$core$Maybe$withDefault,
										$author$project$Material$Options$nop,
										A2($elm$core$Maybe$map, $author$project$Material$List$selectedIndex, editModel.logInDialogSelected)),
										$author$project$Material$List$onSelectListItem($author$project$Msg$SelectLogInDialogListItem)
									]),
								_List_fromArray(
									[
										A2(
										$author$project$Material$List$li,
										_List_fromArray(
											[
												$author$project$Material$Options$tabindex(0),
												$author$project$Material$Options$onClick(
												$author$project$Msg$LogIn($author$project$Msg$LogIn$Provider$Google))
											]),
										_List_fromArray(
											[
												$elm$html$Html$text(
												$author$project$Text$google(model.lang))
											])),
										A2(
										$author$project$Material$List$li,
										_List_fromArray(
											[
												$author$project$Material$Options$tabindex(0),
												$author$project$Material$Options$onClick(
												$author$project$Msg$LogIn($author$project$Msg$LogIn$Provider$Twitter))
											]),
										_List_fromArray(
											[
												$elm$html$Html$text(
												$author$project$Text$twitter(model.lang))
											]))
									]))
							]))
					]))
			]);
	} else {
		return _List_Nil;
	}
};
var $author$project$Msg$GoEdit = {$: 'GoEdit'};
var $author$project$Msg$Init = {$: 'Init'};
var $author$project$Msg$Component$Name = {$: 'Name'};
var $author$project$Msg$NameTextField = function (a) {
	return {$: 'NameTextField', a: a};
};
var $author$project$Msg$Pause = {$: 'Pause'};
var $author$project$Msg$Restart = {$: 'Restart'};
var $author$project$Internal$Icon$Implementation$node = function (ctor) {
	return $author$project$Internal$Options$option(
		function (config) {
			return _Utils_update(
				config,
				{node: ctor});
		});
};
var $author$project$Internal$Icon$Implementation$button = $author$project$Internal$Icon$Implementation$node('button');
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
var $author$project$Internal$TopAppBar$Implementation$alignEnd = $author$project$Internal$Options$cs('mdc-top-app-bar__section--align-end');
var $author$project$Material$TopAppBar$alignEnd = $author$project$Internal$TopAppBar$Implementation$alignEnd;
var $author$project$Internal$TopAppBar$Implementation$alignStart = $author$project$Internal$Options$cs('mdc-top-app-bar__section--align-start');
var $author$project$Material$TopAppBar$alignStart = $author$project$Internal$TopAppBar$Implementation$alignStart;
var $elm$html$Html$Attributes$autofocus = $elm$html$Html$Attributes$boolProperty('autofocus');
var $author$project$Internal$Options$autofocus = function (value) {
	return $author$project$Internal$Options$Attribute(
		$elm$html$Html$Attributes$autofocus(value));
};
var $author$project$Material$TextField$autofocus = $author$project$Material$TextField$nativeControl(
	_List_fromArray(
		[
			$author$project$Internal$Options$autofocus(true)
		]));
var $author$project$Material$Options$css = $author$project$Internal$Options$css;
var $Gizra$elm_keyboard_event$Keyboard$Event$decodeNonZero = A2(
	$elm$json$Json$Decode$andThen,
	function (code) {
		return (!code) ? $elm$json$Json$Decode$fail('code was zero') : $elm$json$Json$Decode$succeed(code);
	},
	$elm$json$Json$Decode$int);
var $Gizra$elm_keyboard_event$Keyboard$Event$decodeKeyCode = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2($elm$json$Json$Decode$field, 'keyCode', $Gizra$elm_keyboard_event$Keyboard$Event$decodeNonZero),
			A2($elm$json$Json$Decode$field, 'which', $Gizra$elm_keyboard_event$Keyboard$Event$decodeNonZero),
			A2($elm$json$Json$Decode$field, 'charCode', $Gizra$elm_keyboard_event$Keyboard$Event$decodeNonZero),
			$elm$json$Json$Decode$succeed(0)
		]));
var $author$project$Internal$TopAppBar$Implementation$fixed = $author$project$Internal$Options$option(
	function (config) {
		return _Utils_update(
			config,
			{fixed: true});
	});
var $author$project$Material$TopAppBar$fixed = $author$project$Internal$TopAppBar$Implementation$fixed;
var $author$project$Internal$TextField$Implementation$fullwidth = $author$project$Internal$Options$option(
	function (config) {
		return _Utils_update(
			config,
			{fullWidth: true});
	});
var $author$project$Material$TextField$fullwidth = $author$project$Internal$TextField$Implementation$fullwidth;
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
var $author$project$Internal$TextField$Implementation$onTrailingIconClick = function (handler) {
	return $author$project$Internal$Options$option(
		function (config) {
			return _Utils_update(
				config,
				{
					onTrailingIconClick: $elm$core$Maybe$Just(handler)
				});
		});
};
var $author$project$Material$TextField$onTrailingIconClick = $author$project$Internal$TextField$Implementation$onTrailingIconClick;
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
var $author$project$Internal$TextField$Implementation$trailingIcon = function (icon) {
	return $author$project$Internal$Options$option(
		function (config) {
			return _Utils_update(
				config,
				{
					trailingIcon: $elm$core$Maybe$Just(icon)
				});
		});
};
var $author$project$Material$TextField$trailingIcon = $author$project$Internal$TextField$Implementation$trailingIcon;
var $author$project$Internal$TopAppBar$Model$Init = function (a) {
	return {$: 'Init', a: a};
};
var $author$project$Internal$TopAppBar$Model$Resize = function (a) {
	return {$: 'Resize', a: a};
};
var $author$project$Internal$TopAppBar$Model$Scroll = function (a) {
	return {$: 'Scroll', a: a};
};
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
var $author$project$View$topAppBar = function (model) {
	var _v0 = model.appModel;
	if (_v0.$ === 'EditModel') {
		var editModel = _v0.a;
		return _List_fromArray(
			[
				A5(
				$author$project$Material$TopAppBar$view,
				$author$project$Msg$Mdc,
				'top-app-bar',
				model.mdc,
				_List_fromArray(
					[$author$project$Material$TopAppBar$fixed]),
				editModel.nameTextFieldOpen ? _List_fromArray(
					[
						A2(
						$author$project$Material$TopAppBar$section,
						_List_fromArray(
							[
								A2($author$project$Material$Options$css, 'background-color', 'white')
							]),
						_List_fromArray(
							[
								A5(
								$author$project$Material$TextField$view,
								$author$project$Msg$Mdc,
								'edit-name',
								model.mdc,
								_List_fromArray(
									[
										$author$project$Material$TextField$value(model.recipeName),
										$author$project$Material$TextField$trailingIcon('close'),
										$author$project$Material$TextField$fullwidth,
										$author$project$Material$TextField$autofocus,
										$author$project$Material$TextField$onTrailingIconClick(
										$author$project$Msg$NameTextField($author$project$Msg$Hide)),
										$author$project$Material$TextField$nativeControl(
										_List_fromArray(
											[
												A2($author$project$Material$Options$css, 'padding-left', '16px')
											])),
										$author$project$Material$Options$onInput(
										$author$project$Msg$Input($author$project$Msg$Component$Name)),
										$author$project$Material$Options$onChange(
										$author$project$Msg$Change($author$project$Msg$Component$Name)),
										A2(
										$author$project$Material$Options$on,
										'keypress',
										A2(
											$elm$json$Json$Decode$andThen,
											function (kc) {
												if (kc === 13) {
													return $elm$json$Json$Decode$succeed(
														$author$project$Msg$NameTextField($author$project$Msg$Hide));
												} else {
													return $elm$json$Json$Decode$fail('');
												}
											},
											$Gizra$elm_keyboard_event$Keyboard$Event$decodeKeyCode))
									]),
								_List_Nil)
							]))
					]) : _List_fromArray(
					[
						A2(
						$author$project$Material$TopAppBar$section,
						_List_fromArray(
							[$author$project$Material$TopAppBar$alignStart]),
						_List_fromArray(
							[
								A5(
								$author$project$Material$TopAppBar$navigationIcon,
								$author$project$Msg$Mdc,
								'menu',
								model.mdc,
								_List_fromArray(
									[
										$author$project$Material$Options$onClick(
										$author$project$Msg$Drawer($author$project$Msg$Show))
									]),
								'menu'),
								A2(
								$author$project$Material$TopAppBar$title,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text(model.recipeName)
									]))
							])),
						A2(
						$author$project$Material$TopAppBar$section,
						_List_fromArray(
							[$author$project$Material$TopAppBar$alignEnd]),
						function () {
							var _v2 = model.loggedIn;
							if (_v2.$ === 'NotLoggedIn') {
								return _List_Nil;
							} else {
								var loggedIn = _v2.a;
								var _v3 = loggedIn.recipeId;
								if (_v3.$ === 'Nothing') {
									return _List_Nil;
								} else {
									return _List_fromArray(
										[
											A5(
											$author$project$Material$TopAppBar$actionItem,
											$author$project$Msg$Mdc,
											'edit-name',
											model.mdc,
											_List_fromArray(
												[
													$author$project$Material$Options$onClick(
													$author$project$Msg$NameTextField($author$project$Msg$Show))
												]),
											'edit')
										]);
								}
							}
						}())
					]))
			]);
	} else {
		var timeSpans = _v0.a.timeSpans;
		var step = _v0.a.step;
		var rest = _v0.a.rest;
		var state = _v0.a.state;
		return _List_fromArray(
			[
				A5(
				$author$project$Material$TopAppBar$view,
				$author$project$Msg$Mdc,
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
								$author$project$Msg$Mdc,
								'set',
								model.mdc,
								_List_fromArray(
									[
										$author$project$Material$Options$onClick($author$project$Msg$GoEdit)
									]),
								'arrow_back'),
								A2(
								$author$project$Material$TopAppBar$title,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text(model.recipeName)
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
										$author$project$Msg$Mdc,
										'pause',
										model.mdc,
										_List_fromArray(
											[
												$author$project$Material$Options$onClick($author$project$Msg$Pause)
											]),
										'pause');
								} else {
									return A5(
										$author$project$Material$TopAppBar$actionItem,
										$author$project$Msg$Mdc,
										'restart',
										model.mdc,
										_List_fromArray(
											[
												$author$project$Material$Options$onClick($author$project$Msg$Restart)
											]),
										'play_arrow');
								}
							}(),
								A5(
								$author$project$Material$TopAppBar$actionItem,
								$author$project$Msg$Mdc,
								'reset',
								model.mdc,
								_List_fromArray(
									[
										$author$project$Material$Options$onClick($author$project$Msg$Init)
									]),
								'refresh')
							]))
					]))
			]);
	}
};
var $author$project$Main$view = function (model) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		_Utils_ap(
			$author$project$View$topAppBar(model),
			_Utils_ap(
				$author$project$View$drawer(model),
				_Utils_ap(
					$author$project$View$content(model),
					_Utils_ap(
						$author$project$View$fab(model),
						_Utils_ap(
							$author$project$View$logInDialog(model),
							$author$project$View$loadingProgress(model)))))));
};
var $author$project$Main$main = $elm$browser$Browser$element(
	{init: $author$project$Main$init, subscriptions: $author$project$Main$subscriptions, update: $author$project$Main$update, view: $author$project$Main$view});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (seed) {
			return $elm$json$Json$Decode$succeed(
				{seed: seed});
		},
		A2($elm$json$Json$Decode$field, 'seed', $elm$json$Json$Decode$int)))({"versions":{"elm":"0.19.1"},"types":{"message":"Msg.Msg","aliases":{"Msg.Component":{"args":[],"type":"Msg.Component.Component"},"Msg.Error":{"args":[],"type":"Msg.Error.Error"},"Msg.LogInProvider":{"args":[],"type":"Msg.LogIn.Provider.Provider"},"Material.Msg":{"args":["m"],"type":"Internal.Msg.Msg m"},"Model.Recipe":{"args":[],"type":"{ id : UUID.UUID, name : String.String, timeInputs : Model.TimeInputs }"},"Model.TimeInput":{"args":[],"type":"{ minutes : String.String, seconds : String.String }"},"Model.TimeInputs":{"args":[],"type":"{ soak : Model.TimeInput, dev : Model.TimeInput, stop : Model.TimeInput, fix : Model.TimeInput, rinse : Model.TimeInput, wet : Model.TimeInput }"},"Model.User":{"args":[],"type":"{ uid : String.String, displayName : String.String }"},"Internal.Index.Index":{"args":[],"type":"String.String"},"Model.Step":{"args":[],"type":"Model.Step.Step"},"Internal.Ripple.Model.ActivateData":{"args":[],"type":"{ event : Internal.Ripple.Model.Event, isSurfaceDisabled : Basics.Bool, wasElementMadeActive : Basics.Bool, isUnbounded : Basics.Bool }"},"Internal.Ripple.Model.ClientRect":{"args":[],"type":"{ top : Basics.Float, left : Basics.Float, width : Basics.Float, height : Basics.Float }"},"Browser.Dom.Element":{"args":[],"type":"{ scene : { width : Basics.Float, height : Basics.Float }, viewport : { x : Basics.Float, y : Basics.Float, width : Basics.Float, height : Basics.Float }, element : { x : Basics.Float, y : Basics.Float, width : Basics.Float, height : Basics.Float } }"},"Internal.Ripple.Model.Event":{"args":[],"type":"{ eventType : String.String, pagePoint : { pageX : Basics.Float, pageY : Basics.Float } }"},"Internal.Menu.Model.Geometry":{"args":[],"type":"{ viewport : Internal.Menu.Model.Viewport, viewportDistance : Internal.Menu.Model.ViewportDistance, anchor : { width : Basics.Float, height : Basics.Float }, menu : { width : Basics.Float, height : Basics.Float } }"},"Internal.Slider.Model.Geometry":{"args":[],"type":"{ rect : Internal.Slider.Model.Rect, discrete : Basics.Bool, step : Maybe.Maybe Basics.Float, min : Basics.Float, max : Basics.Float }"},"Internal.TabBar.Model.Geometry":{"args":[],"type":"{ tabs : List.List Internal.TabBar.Model.Tab, scrollArea : { offsetWidth : Basics.Float }, tabBar : { offsetWidth : Basics.Float } }"},"Internal.TextField.Model.Geometry":{"args":[],"type":"{ width : Basics.Float, height : Basics.Float, labelWidth : Basics.Float }"},"Internal.Keyboard.Key":{"args":[],"type":"String.String"},"Internal.Keyboard.KeyCode":{"args":[],"type":"Basics.Int"},"Internal.Keyboard.Meta":{"args":[],"type":"{ altKey : Basics.Bool, ctrlKey : Basics.Bool, metaKey : Basics.Bool, shiftKey : Basics.Bool }"},"Internal.Slider.Model.Rect":{"args":[],"type":"{ left : Basics.Float, width : Basics.Float }"},"Internal.TabBar.Model.Tab":{"args":[],"type":"{ offsetLeft : Basics.Float, offsetWidth : Basics.Float, contentLeft : Basics.Float, contentRight : Basics.Float }"},"Internal.Menu.Model.Viewport":{"args":[],"type":"{ width : Basics.Float, height : Basics.Float }"},"Internal.Menu.Model.ViewportDistance":{"args":[],"type":"{ top : Basics.Float, right : Basics.Float, left : Basics.Float, bottom : Basics.Float }"}},"unions":{"Msg.Msg":{"args":[],"tags":{"Mdc":["Material.Msg Msg.Msg"],"GoRun":[],"GoEdit":[],"Input":["Msg.Component","String.String"],"Change":["Msg.Component","String.String"],"Tick":["Time.Posix"],"Next":[],"Restart":[],"Pause":[],"Init":[],"Drawer":["Msg.Visible"],"NewRecipe":[],"SelectRecipe":["Model.Recipe"],"RecipesChanged":["Dict.Dict String.String Model.Recipe"],"NameTextField":["Msg.Visible"],"LogInDialog":["Msg.Visible"],"SelectLogInDialogListItem":["Basics.Int"],"LogIn":["Msg.LogInProvider"],"LogOut":[],"UserChanged":["Maybe.Maybe Model.User"],"Error":["Msg.Error"]}},"Msg.Component.Component":{"args":[],"tags":{"Name":[],"Time":["Model.Step","Model.TimeHand.TimeHand"]}},"Dict.Dict":{"args":["k","v"],"tags":{"RBNode_elm_builtin":["Dict.NColor","k","v","Dict.Dict k v","Dict.Dict k v"],"RBEmpty_elm_builtin":[]}},"Msg.Error.Error":{"args":[],"tags":{"RecipeDecoder":["List.List Model.RecipeDecoderError"],"Foreign":["String.String"]}},"Basics.Int":{"args":[],"tags":{"Int":[]}},"Maybe.Maybe":{"args":["a"],"tags":{"Just":["a"],"Nothing":[]}},"Internal.Msg.Msg":{"args":["m"],"tags":{"Dispatch":["List.List m"],"ButtonMsg":["Internal.Index.Index","Internal.Button.Model.Msg m"],"CheckboxMsg":["Internal.Index.Index","Internal.Checkbox.Model.Msg"],"ChipMsg":["Internal.Index.Index","Internal.Chip.Model.Msg m"],"DialogMsg":["Internal.Index.Index","Internal.Dialog.Model.Msg"],"DrawerMsg":["Internal.Index.Index","Internal.Drawer.Model.Msg"],"FabMsg":["Internal.Index.Index","Internal.Fab.Model.Msg"],"IconButtonMsg":["Internal.Index.Index","Internal.IconButton.Model.Msg"],"ListMsg":["Internal.Index.Index","Internal.List.Model.Msg m"],"MenuMsg":["Internal.Index.Index","Internal.Menu.Model.Msg m"],"RadioButtonMsg":["Internal.Index.Index","Internal.RadioButton.Model.Msg"],"RippleMsg":["Internal.Index.Index","Internal.Ripple.Model.Msg"],"SelectMsg":["Internal.Index.Index","Internal.Select.Model.Msg m"],"SliderMsg":["Internal.Index.Index","Internal.Slider.Model.Msg m"],"SnackbarMsg":["Internal.Index.Index","Internal.Snackbar.Model.Msg m"],"SwitchMsg":["Internal.Index.Index","Internal.Switch.Model.Msg"],"TabBarMsg":["Internal.Index.Index","Internal.TabBar.Model.Msg m"],"TextFieldMsg":["Internal.Index.Index","Internal.TextField.Model.Msg"],"TopAppBarMsg":["Internal.Index.Index","Internal.TopAppBar.Model.Msg"]}},"Time.Posix":{"args":[],"tags":{"Posix":["Basics.Int"]}},"Msg.LogIn.Provider.Provider":{"args":[],"tags":{"Google":[],"Twitter":[]}},"String.String":{"args":[],"tags":{"String":[]}},"UUID.UUID":{"args":[],"tags":{"UUID":["Basics.Int","Basics.Int","Basics.Int","Basics.Int"]}},"Msg.Visible":{"args":[],"tags":{"Show":[],"Hide":[]}},"List.List":{"args":["a"],"tags":{}},"Internal.Button.Model.Msg":{"args":["m"],"tags":{"RippleMsg":["Internal.Ripple.Model.Msg"],"Click":["Basics.Bool","m"]}},"Internal.Checkbox.Model.Msg":{"args":[],"tags":{"NoOp":[],"Init":["Maybe.Maybe (Maybe.Maybe Internal.Checkbox.Model.State)","Maybe.Maybe Internal.Checkbox.Model.State"],"SetFocus":["Basics.Bool"],"AnimationEnd":[]}},"Internal.Chip.Model.Msg":{"args":["m"],"tags":{"RippleMsg":["Internal.Ripple.Model.Msg"],"Click":["m"]}},"Internal.Dialog.Model.Msg":{"args":[],"tags":{"NoOp":[],"StartAnimation":["Basics.Bool"],"EndAnimation":[]}},"Internal.Drawer.Model.Msg":{"args":[],"tags":{"NoOp":[],"StartAnimation":["Basics.Bool"],"EndAnimation":[]}},"Internal.Fab.Model.Msg":{"args":[],"tags":{"RippleMsg":["Internal.Ripple.Model.Msg"],"NoOp":[]}},"Internal.IconButton.Model.Msg":{"args":[],"tags":{"RippleMsg":["Internal.Ripple.Model.Msg"]}},"Internal.List.Model.Msg":{"args":["m"],"tags":{"NoOp":[],"RippleMsg":["String.String","Internal.Ripple.Model.Msg"],"FocusItem":["Basics.Int","String.String"],"ResetFocusedItem":[],"SelectItem":["Basics.Int","Basics.Int -> m"]}},"Internal.Menu.Model.Msg":{"args":["m"],"tags":{"NoOp":[],"Init":["{ quickOpen : Basics.Bool, index : Maybe.Maybe Basics.Int, focusedItemId : String.String }","Internal.Menu.Model.Geometry"],"AnimationEnd":[],"Open":[],"Close":[],"Toggle":[],"CloseDelayed":[],"DocumentClick":[],"KeyDown":["Internal.Keyboard.Meta","Internal.Keyboard.Key","Internal.Keyboard.KeyCode"],"KeyUp":["Internal.Keyboard.Meta","Internal.Keyboard.Key","Internal.Keyboard.KeyCode"],"ListMsg":["Internal.List.Model.Msg m"]}},"Internal.RadioButton.Model.Msg":{"args":[],"tags":{"RippleMsg":["Internal.Ripple.Model.Msg"],"NoOp":[],"SetFocus":["Basics.Bool"]}},"Internal.Ripple.Model.Msg":{"args":[],"tags":{"Focus":[],"Blur":[],"Activate0":["String.String","Internal.Ripple.Model.ActivateData"],"Activate":["Internal.Ripple.Model.ActivateData","Result.Result Browser.Dom.Error Browser.Dom.Element"],"Reactivate":["Internal.Ripple.Model.ActivateData","Result.Result Browser.Dom.Error Browser.Dom.Element"],"ActivationEnded":["Basics.Int"],"Deactivate":[],"DeactivationEnded":["Basics.Int"],"SetCssVariables":["Basics.Bool","Internal.Ripple.Model.ClientRect"]}},"Internal.Select.Model.Msg":{"args":["m"],"tags":{"NoOp":[],"Blur":[],"Focus":[],"Change":["String.String"],"RippleMsg":["Internal.Ripple.Model.Msg"],"KeyDown":["String.String","Internal.Keyboard.Key","Internal.Keyboard.KeyCode"],"OpenMenu":["String.String"],"ToggleMenu":[],"MenuSelection":["String.String","String.String -> m","String.String"],"MenuMsg":["Internal.Menu.Model.Msg m"]}},"Internal.Slider.Model.Msg":{"args":["m"],"tags":{"NoOp":[],"Init":["Internal.Slider.Model.Geometry"],"Resize":["Internal.Slider.Model.Geometry"],"InteractionStart":["String.String","{ pageX : Basics.Float }"],"KeyDown":[],"Focus":[],"Blur":[],"ThumbContainerPointer":["String.String","{ pageX : Basics.Float }"],"TransitionEnd":[],"Drag":["{ pageX : Basics.Float }"],"Up":[],"ActualUp":[]}},"Internal.Snackbar.Model.Msg":{"args":["m"],"tags":{"Move":["Basics.Int","Internal.Snackbar.Model.Transition"],"Dismiss":["Basics.Bool","Maybe.Maybe m"],"SetOpen":[]}},"Internal.Switch.Model.Msg":{"args":[],"tags":{"RippleMsg":["Internal.Ripple.Model.Msg"],"SetFocus":["Basics.Bool"],"NoOp":[]}},"Internal.TabBar.Model.Msg":{"args":["m"],"tags":{"NoOp":[],"Dispatch":["List.List m"],"RippleMsg":["Basics.Int","Internal.Ripple.Model.Msg"],"Init":["Internal.TabBar.Model.Geometry"],"SetActiveTab":["String.String","Basics.Int","Basics.Float"]}},"Internal.TextField.Model.Msg":{"args":[],"tags":{"Blur":[],"Focus":["Internal.TextField.Model.Geometry"],"Input":["String.String"],"NoOp":[]}},"Internal.TopAppBar.Model.Msg":{"args":[],"tags":{"RippleMsg":["String.String","Internal.Ripple.Model.Msg"],"Init":["{ scrollPosition : Basics.Float, topAppBarHeight : Basics.Float }"],"Resize":["{ scrollPosition : Basics.Float, topAppBarHeight : Basics.Float }"],"Scroll":["{ scrollPosition : Basics.Float }"]}},"Dict.NColor":{"args":[],"tags":{"Red":[],"Black":[]}},"Model.RecipeDecoderError":{"args":[],"tags":{"UuidError":["UUID.Error"]}},"Model.Step.Step":{"args":[],"tags":{"Soak":[],"Dev":[],"Stop":[],"Fix":[],"Rinse":[],"Wet":[]}},"Model.TimeHand.TimeHand":{"args":[],"tags":{"Minutes":[],"Seconds":[]}},"Basics.Bool":{"args":[],"tags":{"True":[],"False":[]}},"Browser.Dom.Error":{"args":[],"tags":{"NotFound":["String.String"]}},"UUID.Error":{"args":[],"tags":{"WrongFormat":[],"WrongLength":[],"UnsupportedVariant":[],"IsNil":[],"NoVersion":[]}},"Basics.Float":{"args":[],"tags":{"Float":[]}},"Result.Result":{"args":["error","value"],"tags":{"Ok":["value"],"Err":["error"]}},"Internal.Checkbox.Model.State":{"args":[],"tags":{"Checked":[],"Unchecked":[]}},"Internal.Snackbar.Model.Transition":{"args":[],"tags":{"Timeout":[],"Clicked":[]}}}}})}});

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
  webm:
    "data:video/webm;base64,GkXfo0AgQoaBAUL3gQFC8oEEQvOBCEKCQAR3ZWJtQoeBAkKFgQIYU4BnQI0VSalmQCgq17FAAw9CQE2AQAZ3aGFtbXlXQUAGd2hhbW15RIlACECPQAAAAAAAFlSua0AxrkAu14EBY8WBAZyBACK1nEADdW5khkAFVl9WUDglhohAA1ZQOIOBAeBABrCBCLqBCB9DtnVAIueBAKNAHIEAAIAwAQCdASoIAAgAAUAmJaQAA3AA/vz0AAA=",
  mp4:
    "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQADQGgcIQADQGgcAAAACQGeYUQn/wALKCEAA0BoHAAAAAkBnmNEJ/8ACykhAANAaBwhAANAaBwAAAANQZpoNExDP/6plgAMuSEAA0BoHAAAAAtBnoZFESwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBnqVEJ/8ACykhAANAaBwAAAAJAZ6nRCf/AAsoIQADQGgcIQADQGgcAAAADUGarDRMQz/+qZYADLghAANAaBwAAAALQZ7KRRUsK/8ACPkhAANAaBwAAAAJAZ7pRCf/AAsoIQADQGgcIQADQGgcAAAACQGe60Qn/wALKCEAA0BoHAAAAA1BmvA0TEM//qmWAAy5IQADQGgcIQADQGgcAAAAC0GfDkUVLCv/AAj5IQADQGgcAAAACQGfLUQn/wALKSEAA0BoHCEAA0BoHAAAAAkBny9EJ/8ACyghAANAaBwAAAANQZs0NExDP/6plgAMuCEAA0BoHAAAAAtBn1JFFSwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBn3FEJ/8ACyghAANAaBwAAAAJAZ9zRCf/AAsoIQADQGgcIQADQGgcAAAADUGbeDRMQz/+qZYADLkhAANAaBwAAAALQZ+WRRUsK/8ACPghAANAaBwhAANAaBwAAAAJAZ+1RCf/AAspIQADQGgcAAAACQGft0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bm7w0TEM//qmWAAy4IQADQGgcAAAAC0Gf2kUVLCv/AAj5IQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHAAAAAkBn/tEJ/8ACykhAANAaBwAAAANQZvgNExDP/6plgAMuSEAA0BoHCEAA0BoHAAAAAtBnh5FFSwr/wAI+CEAA0BoHAAAAAkBnj1EJ/8ACyghAANAaBwhAANAaBwAAAAJAZ4/RCf/AAspIQADQGgcAAAADUGaJDRMQz/+qZYADLghAANAaBwAAAALQZ5CRRUsK/8ACPkhAANAaBwhAANAaBwAAAAJAZ5hRCf/AAsoIQADQGgcAAAACQGeY0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bmmg0TEM//qmWAAy5IQADQGgcAAAAC0GehkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGepUQn/wALKSEAA0BoHAAAAAkBnqdEJ/8ACyghAANAaBwAAAANQZqsNExDP/6plgAMuCEAA0BoHCEAA0BoHAAAAAtBnspFFSwr/wAI+SEAA0BoHAAAAAkBnulEJ/8ACyghAANAaBwhAANAaBwAAAAJAZ7rRCf/AAsoIQADQGgcAAAADUGa8DRMQz/+qZYADLkhAANAaBwhAANAaBwAAAALQZ8ORRUsK/8ACPkhAANAaBwAAAAJAZ8tRCf/AAspIQADQGgcIQADQGgcAAAACQGfL0Qn/wALKCEAA0BoHAAAAA1BmzQ0TEM//qmWAAy4IQADQGgcAAAAC0GfUkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGfcUQn/wALKCEAA0BoHAAAAAkBn3NEJ/8ACyghAANAaBwhAANAaBwAAAANQZt4NExC//6plgAMuSEAA0BoHAAAAAtBn5ZFFSwr/wAI+CEAA0BoHCEAA0BoHAAAAAkBn7VEJ/8ACykhAANAaBwAAAAJAZ+3RCf/AAspIQADQGgcAAAADUGbuzRMQn/+nhAAYsAhAANAaBwhAANAaBwAAAAJQZ/aQhP/AAspIQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHAAACiFtb292AAAAbG12aGQAAAAA1YCCX9WAgl8AAAPoAAAH/AABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAGGlvZHMAAAAAEICAgAcAT////v7/AAAF+XRyYWsAAABcdGtoZAAAAAPVgIJf1YCCXwAAAAEAAAAAAAAH0AAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAygAAAMoAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAB9AAABdwAAEAAAAABXFtZGlhAAAAIG1kaGQAAAAA1YCCX9WAgl8AAV+QAAK/IFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAUcbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAE3HN0YmwAAACYc3RzZAAAAAAAAAABAAAAiGF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAygDKAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAyYXZjQwFNQCj/4QAbZ01AKOyho3ySTUBAQFAAAAMAEAAr8gDxgxlgAQAEaO+G8gAAABhzdHRzAAAAAAAAAAEAAAA8AAALuAAAABRzdHNzAAAAAAAAAAEAAAABAAAB8GN0dHMAAAAAAAAAPAAAAAEAABdwAAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAAC7gAAAAAQAAF3AAAAABAAAAAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAEEc3RzegAAAAAAAAAAAAAAPAAAAzQAAAAQAAAADQAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAANAAAADQAAAQBzdGNvAAAAAAAAADwAAAAwAAADZAAAA3QAAAONAAADoAAAA7kAAAPQAAAD6wAAA/4AAAQXAAAELgAABEMAAARcAAAEbwAABIwAAAShAAAEugAABM0AAATkAAAE/wAABRIAAAUrAAAFQgAABV0AAAVwAAAFiQAABaAAAAW1AAAFzgAABeEAAAX+AAAGEwAABiwAAAY/AAAGVgAABnEAAAaEAAAGnQAABrQAAAbPAAAG4gAABvUAAAcSAAAHJwAAB0AAAAdTAAAHcAAAB4UAAAeeAAAHsQAAB8gAAAfjAAAH9gAACA8AAAgmAAAIQQAACFQAAAhnAAAIhAAACJcAAAMsdHJhawAAAFx0a2hkAAAAA9WAgl/VgIJfAAAAAgAAAAAAAAf8AAAAAAAAAAAAAAABAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAACsm1kaWEAAAAgbWRoZAAAAADVgIJf1YCCXwAArEQAAWAAVcQAAAAAACdoZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU3RlcmVvAAAAAmNtaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAidzdGJsAAAAZ3N0c2QAAAAAAAAAAQAAAFdtcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAADNlc2RzAAAAAAOAgIAiAAIABICAgBRAFQAAAAADDUAAAAAABYCAgAISEAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAABYAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAGAAAAWAAAAXBzdGNvAAAAAAAAAFgAAAOBAAADhwAAA5oAAAOtAAADswAAA8oAAAPfAAAD5QAAA/gAAAQLAAAEEQAABCgAAAQ9AAAEUAAABFYAAARpAAAEgAAABIYAAASbAAAErgAABLQAAATHAAAE3gAABPMAAAT5AAAFDAAABR8AAAUlAAAFPAAABVEAAAVXAAAFagAABX0AAAWDAAAFmgAABa8AAAXCAAAFyAAABdsAAAXyAAAF+AAABg0AAAYgAAAGJgAABjkAAAZQAAAGZQAABmsAAAZ+AAAGkQAABpcAAAauAAAGwwAABskAAAbcAAAG7wAABwYAAAcMAAAHIQAABzQAAAc6AAAHTQAAB2QAAAdqAAAHfwAAB5IAAAeYAAAHqwAAB8IAAAfXAAAH3QAAB/AAAAgDAAAICQAACCAAAAg1AAAIOwAACE4AAAhhAAAIeAAACH4AAAiRAAAIpAAACKoAAAiwAAAItgAACLwAAAjCAAAAFnVkdGEAAAAObmFtZVN0ZXJlbwAAAHB1ZHRhAAAAaG1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAO2lsc3QAAAAzqXRvbwAAACtkYXRhAAAAAQAAAABIYW5kQnJha2UgMC4xMC4yIDIwMTUwNjExMDA=",
};

},{}],"../node_modules/nosleep.js/src/index.js":[function(require,module,exports) {
const { webm, mp4 } = require("./media.js");

// Detect iOS browsers < version 10
const oldIOS =
  typeof navigator !== "undefined" &&
  parseFloat(
    (
      "" +
      (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(
        navigator.userAgent
      ) || [0, ""])[1]
    )
      .replace("undefined", "3_2")
      .replace("_", ".")
      .replace("_", "")
  ) < 10 &&
  !window.MSStream;

// Detect native Wake Lock API support
const nativeWakeLock = "wakeLock" in navigator;

class NoSleep {
  constructor() {
    if (nativeWakeLock) {
      this._wakeLock = null;
      const handleVisibilityChange = () => {
        if (this._wakeLock !== null && document.visibilityState === "visible") {
          this.enable();
        }
      };
      document.addEventListener("visibilitychange", handleVisibilityChange);
      document.addEventListener("fullscreenchange", handleVisibilityChange);
    } else if (oldIOS) {
      this.noSleepTimer = null;
    } else {
      // Set up no sleep video element
      this.noSleepVideo = document.createElement("video");

      this.noSleepVideo.setAttribute("title", "No Sleep");
      this.noSleepVideo.setAttribute("playsinline", "");

      this._addSourceToVideo(this.noSleepVideo, "webm", webm);
      this._addSourceToVideo(this.noSleepVideo, "mp4", mp4);

      this.noSleepVideo.addEventListener("loadedmetadata", () => {
        if (this.noSleepVideo.duration <= 1) {
          // webm source
          this.noSleepVideo.setAttribute("loop", "");
        } else {
          // mp4 source
          this.noSleepVideo.addEventListener("timeupdate", () => {
            if (this.noSleepVideo.currentTime > 0.5) {
              this.noSleepVideo.currentTime = Math.random();
            }
          });
        }
      });
    }
  }

  _addSourceToVideo(element, type, dataURI) {
    var source = document.createElement("source");
    source.src = dataURI;
    source.type = `video/${type}`;
    element.appendChild(source);
  }

  enable() {
    if (nativeWakeLock) {
      navigator.wakeLock
        .request("screen")
        .then((wakeLock) => {
          this._wakeLock = wakeLock;
          console.log("Wake Lock active.");
          this._wakeLock.addEventListener("release", () => {
            // ToDo: Potentially emit an event for the page to observe since
            // Wake Lock releases happen when page visibility changes.
            // (https://web.dev/wakelock/#wake-lock-lifecycle)
            console.log("Wake Lock released.");
          });
        })
        .catch((err) => {
          console.error(`${err.name}, ${err.message}`);
        });
    } else if (oldIOS) {
      this.disable();
      console.warn(`
        NoSleep enabled for older iOS devices. This can interrupt
        active or long-running network requests from completing successfully.
        See https://github.com/richtr/NoSleep.js/issues/15 for more details.
      `);
      this.noSleepTimer = window.setInterval(() => {
        if (!document.hidden) {
          window.location.href = window.location.href.split("#")[0];
          window.setTimeout(window.stop, 0);
        }
      }, 15000);
    } else {
      this.noSleepVideo.play();
    }
  }

  disable() {
    if (nativeWakeLock) {
      this._wakeLock.release();
      this._wakeLock = null;
    } else if (oldIOS) {
      if (this.noSleepTimer) {
        console.warn(`
          NoSleep now disabled for older iOS devices.
        `);
        window.clearInterval(this.noSleepTimer);
        this.noSleepTimer = null;
      }
    } else {
      this.noSleepVideo.pause();
    }
  }
}

module.exports = NoSleep;

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
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/elm-mdc/material-components-web.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/elm-mdc/elm-mdc.js":[function(require,module,exports) {
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

require("elm-mdc/material-components-web.css");

require("elm-mdc/elm-mdc.js");

require("./mdc-override.css");

require("./main.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alarm = document.getElementById('alarm');
var noSleep = new _nosleep.default();

var app = _Main.Elm.Main.init({
  node: document.querySelector('main'),
  flags: {
    seed: getRandomInt()
  }
});

app.ports.playAlarmCmd.subscribe(function () {
  alarm.play();
});
app.ports.stopAlarmCmd.subscribe(function () {
  alarm.pause();
  alarm.currentTime = 0;
});
app.ports.alertCmd.subscribe(function (msg) {
  window.alert(msg);
});
app.ports.setNoSleepCmd.subscribe(function (active) {
  if (active) {
    noSleep.enable();
  } else {
    noSleep.disable();
  }
});
var firebaseConfig = {
  apiKey: "AIzaSyBCK8J5FxwyfgLh4p1GZ-pVJxTOhX0dO6M",
  authDomain: "photo-film-dev.firebaseapp.com",
  databaseURL: "https://photo-film-dev.firebaseio.com",
  projectId: "photo-film-dev",
  storageBucket: "photo-film-dev.appspot.com",
  messagingSenderId: "817422079794",
  appId: "1:817422079794:web:407643ce7f88b9c4dc692b",
  measurementId: "G-SJ49DC922T"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var googleAuthProvider = new firebase.auth.GoogleAuthProvider();
var twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
var auth = firebase.auth();
var firestore = firebase.firestore();
app.ports.logInWithGoogleCmd.subscribe(function () {
  auth.signInWithRedirect(googleAuthProvider);
});
app.ports.logInWithTwitterCmd.subscribe(function () {
  auth.signInWithRedirect(twitterAuthProvider);
});
var unsubscribeRecipes = undefined;
auth.onAuthStateChanged(function (user) {
  if (user !== undefined && user) {
    var uid = user.uid,
        displayName = user.displayName;
    var elmUser = {
      uid: uid,
      displayName: displayName
    };
    app.ports.changeUserSub.send(elmUser);
    unsubscribeRecipes = firestore.collection('recipes').where('owner', '==', uid).onSnapshot(function (snapshot) {
      var recipes = [];
      snapshot.forEach(function (doc) {
        recipes.push(doc.data());
      });
      app.ports.changeRecipesSub.send(recipes);
    });
  } else {
    app.ports.changeUserSub.send(null);
  }
});
auth.getRedirectResult().catch(function (error) {
  console.log(error);
  app.ports.errorSub.send(error.toString());
});
app.ports.logOutCmd.subscribe(function () {
  unsubscribeRecipes();
  unsubscribeRecipes = undefined;
  auth.signOut().catch(function (error) {
    console.log(error);
    app.ports.errorSub.send(error);
  });
});
app.ports.setRecipeCmd.subscribe(function (recipe) {
  var user = auth.currentUser;
  recipe.owner = user.uid;
  firestore.collection('recipes').doc(recipe.id).set(recipe);
}); // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values

function getRandomInt() {
  var min = Math.ceil(0);
  var max = Math.floor(16777217); // https://stackoverflow.com/a/3793950/1567363

  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
},{"./Main.elm":"Main.elm","nosleep.js":"../node_modules/nosleep.js/src/index.js","elm-mdc/material-components-web.css":"../node_modules/elm-mdc/material-components-web.css","elm-mdc/elm-mdc.js":"../node_modules/elm-mdc/elm-mdc.js","./mdc-override.css":"mdc-override.css","./main.css":"main.css"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59785" + '/');

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