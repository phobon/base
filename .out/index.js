'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var styledSystem = require('styled-system');
var React = require('react');
var React__default = _interopDefault(React);
var reactDom = require('react-dom');

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

var checkPropTypes_1 = checkPropTypes;

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var fullWidth = function fullWidth(props) {
  return props.fullWidth && styled.css(["width:100%;"]);
};

var fullHeight = function fullHeight(props) {
  return props.fullHeight && styled.css(["height:100%;"]);
};

var round = function round(props) {
  return props.round && styled.css(["border-radius:100%;"]);
};

var Box = styled__default.div.withConfig({
  displayName: "Box",
  componentId: "jyr2uv-0"
})(["display:flex;box-sizing:border-box;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], styledSystem.borders, styledSystem.borderRadius, styledSystem.borderColor, styledSystem.space, styledSystem.color, styledSystem.fontSize, styledSystem.alignItems, styledSystem.alignSelf, styledSystem.justifyContent, styledSystem.justifySelf, styledSystem.flexDirection, styledSystem.flex, styledSystem.flexWrap, styledSystem.order, styledSystem.gridColumn, styledSystem.gridRow, styledSystem.gridArea, styledSystem.zIndex, styledSystem.position, fullWidth, fullHeight, round, styledSystem.width, styledSystem.minWidth, styledSystem.maxWidth, styledSystem.height, styledSystem.minHeight, styledSystem.maxHeight, styledSystem.position, styledSystem.zIndex, styledSystem.top, styledSystem.left, styledSystem.bottom, styledSystem.right);
Box.displayName = 'Box';
Box.propTypes = _objectSpread({}, styledSystem.space.propTypes, styledSystem.color.propTypes, styledSystem.alignItems.propTypes, styledSystem.alignSelf.propTypes, styledSystem.justifyContent.propTypes, styledSystem.justifySelf.propTypes, styledSystem.flexDirection.propTypes, styledSystem.flex.propTypes, styledSystem.flexWrap.propTypes, styledSystem.order.propTypes, styledSystem.fontSize.propTypes, styledSystem.borderRadius.propTypes, styledSystem.width.propTypes, styledSystem.minWidth.propTypes, styledSystem.maxWidth.propTypes, styledSystem.height.propTypes, styledSystem.minHeight.propTypes, styledSystem.maxHeight.propTypes, styledSystem.borders.propTypes, styledSystem.borderColor.propTypes, styledSystem.zIndex.propTypes, styledSystem.position.propTypes, styledSystem.gridColumn.propTypes, styledSystem.gridRow.propTypes, styledSystem.gridArea.propTypes, styledSystem.top.propTypes, styledSystem.bottom.propTypes, styledSystem.left.propTypes, styledSystem.right.propTypes, {
  fullWidth: propTypes.bool,
  fullHeight: propTypes.bool,
  round: propTypes.bool
});
Box.defaultProps = {
  flex: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  m: 0,
  p: 0,
  color: 'foreground',
  fullWidth: false,
  fullHeight: false,
  borderRadius: 0
};

var Flex = styled__default(Box).withConfig({
  displayName: "Flex",
  componentId: "sc-1sba99t-0"
})([""]);
Flex.defaultProps = Object.assign({}, Box.defaultProps, {
  flex: '1 0 0%'
});
Flex.displayName = 'Flex';

var Grid = styled__default(Box).withConfig({
  displayName: "Grid",
  componentId: "sc-1y0kzo4-0"
})(["display:grid;flex:unset;", " ", " ", " ", " ", " ", " ", " ", " ", ""], styledSystem.gridGap, styledSystem.gridRowGap, styledSystem.gridColumnGap, styledSystem.gridAutoFlow, styledSystem.gridAutoRows, styledSystem.gridAutoColumns, styledSystem.gridTemplateAreas, styledSystem.gridTemplateRows, styledSystem.gridTemplateColumns);
Grid.displayName = 'Grid';

var direction = function direction(props) {
  return props.scrollDirection === 'vertical' ? styled.css(["overflow-y:scroll;flex-direction:column;width:100%;"]) : styled.css(["overflow-x:scroll;height:100%;"]);
};

var childDirection = function childDirection(props) {
  return props.scrollDirection === 'vertical' ? styled.css(["flex-direction:column;width:100%;top:0;left:0;right:0;"]) : styled.css(["height:100%;top:0;left:0;bottom:0;"]);
};

var minimalStyle = function minimalStyle(props) {
  return props.minimal && styled.css(["&:hover{&::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,0.4);}}&::-webkit-scrollbar{width:", "px;}&::-webkit-scrollbar-track{background:0;border-radius:", "px;}&::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,0.2);border-radius:", "px;&:hover{background-color:rgba(0,0,0,0.4);}}"], props.theme.space[2], props.theme.radii[3], props.theme.radii[3]);
};

var ScrollableFlex = styled__default(Flex).withConfig({
  displayName: "Scrollable__ScrollableFlex",
  componentId: "sc-1iirxsm-0"
})(["position:relative;overflow:hidden;", " flex:1 1 0px;> div{position:absolute;", "}", ""], direction, childDirection, minimalStyle);

var Scrollable = function Scrollable(_ref) {
  var minimal = _ref.minimal,
      scrollDirection = _ref.scrollDirection,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["minimal", "scrollDirection", "children"]);

  return React__default.createElement(ScrollableFlex, {
    minimal: minimal,
    scrollDirection: scrollDirection
  }, React__default.createElement(Flex, _extends({
    alignItems: "flex-start",
    justifyContent: "flex-start"
  }, props), children));
};

Scrollable.displayName = 'Scrollable';
Scrollable.propTypes = _objectSpread({}, Flex.propTypes, {
  /** Display a minimal scrollable */
  minimal: propTypes.bool,
  scrollDirection: propTypes.oneOf(['vertical', 'horizontal'])
});
Scrollable.defaultProps = {
  minimal: false,
  scrollDirection: 'vertical'
};

var boxShadow = function boxShadow(props) {
  var boxShadows = {
    none: styled.css(["box-shadow:0;"]),
    s: styled.css(["box-shadow:", ";"], props.theme.boxShadows[0]),
    m: styled.css(["box-shadow:", ";"], props.theme.boxShadows[1]),
    l: styled.css(["box-shadow:", ";"], props.theme.boxShadows[2]),
    xl: styled.css(["box-shadow:", ";"], props.theme.boxShadows[3]),
    xxl: styled.css(["box-shadow:", ";"], props.theme.boxShadows[4])
  };
  return boxShadows[props.boxShadowSize];
};

var Card = styled__default(Box).withConfig({
  displayName: "Card",
  componentId: "sc-13spmwf-0"
})(["position:relative;&::before{position:absolute;content:'';width:100%;height:100%;", " pointer-events:none;border-radius:inherit;opacity:", ";left:0;top:0;transition:opacity 180ms ease-out;}"], boxShadow, function (props) {
  return props.boxShadowIntensity;
});
Card.displayName = 'Card';
Card.propTypes = _objectSpread({}, Box.propTypes, {
  boxShadowSize: propTypes.oneOf(['none', 's', 'm', 'l', 'xl']),
  boxShadowIntensity: propTypes.number
});
Card.defaultProps = Object.assign({}, Box.defaultProps, {
  bg: 'background',
  borderRadius: 3,
  boxShadowSize: 'l',
  boxShadowIntensity: 1
});

var BoxList = styled__default(Box).attrs(function (props) {
  return {
    as: props.as ? props.as : 'ul'
  };
}).withConfig({
  displayName: "BoxList",
  componentId: "sc-1vokxsa-0"
})([""]);
BoxList.displayName = 'BoxList';

var BoxListItem = styled__default(Box).attrs(function (props) {
  return {
    as: 'li'
  };
}).withConfig({
  displayName: "BoxListItem",
  componentId: "sc-9cnc7b-0"
})([""]);
BoxListItem.displayName = 'BoxListItem';

var fullWidth$1 = function fullWidth(props) {
  return props.fullWidth && 'width: 100%';
};

var fullHeight$1 = function fullHeight(props) {
  return props.fullHeight && 'height: 100%';
};

var Text = styled__default.div.withConfig({
  displayName: "Text",
  componentId: "sc-8esh7q-0"
})(["box-sizing:border-box;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ";", ";"], styledSystem.space, styledSystem.width, styledSystem.height, styledSystem.minWidth, styledSystem.maxWidth, styledSystem.color, styledSystem.fontSize, styledSystem.lineHeight, styledSystem.textAlign, styledSystem.fontWeight, styledSystem.fontFamily, styledSystem.textStyle, styledSystem.position, styledSystem.zIndex, styledSystem.top, styledSystem.bottom, styledSystem.left, styledSystem.right, styledSystem.gridColumn, styledSystem.gridRow, styledSystem.gridArea, fullWidth$1, fullHeight$1);
Text.displayName = 'Text';
Text.propTypes = _objectSpread({}, styledSystem.space.propTypes, styledSystem.color.propTypes, styledSystem.fontSize.propTypes, styledSystem.fontFamily.propTypes, styledSystem.lineHeight.propTypes, styledSystem.width.propTypes, styledSystem.height.propTypes, styledSystem.minWidth.propTypes, styledSystem.maxWidth.propTypes, styledSystem.textAlign.propTypes, styledSystem.fontWeight.propTypes, styledSystem.textStyle.propTypes, styledSystem.gridColumn.propTypes, styledSystem.gridRow.propTypes, styledSystem.gridArea.propTypes, {
  fullWidth: propTypes.bool,
  fullHeight: propTypes.bool
});
Text.defaultProps = {
  color: 'foreground',
  fontSize: 1,
  textAlign: 'left',
  lineHeight: 4
};

var defaultProps = {
  color: 'grayscale.2',
  m: 0,
  fontWeight: 'light',
  lineHeight: 0,
  fontSize: 7,
  textAlign: 'left'
};
var H1 = styled__default(Text).attrs(function (props) {
  return {
    as: 'h1'
  };
}).withConfig({
  displayName: "Heading__H1",
  componentId: "sc-1vj0lx5-0"
})([""]);
H1.displayName = 'Heading.H1';
H1.defaultProps = defaultProps;
var H2 = styled__default(Text).attrs(function (props) {
  return {
    as: 'h2'
  };
}).withConfig({
  displayName: "Heading__H2",
  componentId: "sc-1vj0lx5-1"
})([""]);
H2.displayName = 'Heading.H2';
H2.defaultProps = Object.assign({}, defaultProps, {
  fontSize: 6,
  lineHeight: 1
});
var H3 = styled__default(Text).attrs(function (props) {
  return {
    as: 'h3'
  };
}).withConfig({
  displayName: "Heading__H3",
  componentId: "sc-1vj0lx5-2"
})([""]);
H3.displayName = 'Heading.H3';
H3.defaultProps = Object.assign({}, defaultProps, {
  fontSize: 5,
  lineHeight: 1
});
var H4 = styled__default(Text).attrs(function (props) {
  return {
    as: 'h4'
  };
}).withConfig({
  displayName: "Heading__H4",
  componentId: "sc-1vj0lx5-3"
})([""]);
H4.displayName = 'Heading.H4';
H4.defaultProps = Object.assign({}, defaultProps, {
  fontSize: 4,
  lineHeight: 2
});
var H5 = styled__default(Text).attrs(function (props) {
  return {
    as: 'h5'
  };
}).withConfig({
  displayName: "Heading__H5",
  componentId: "sc-1vj0lx5-4"
})([""]);
H5.displayName = 'Heading.H5';
H5.defaultProps = Object.assign({}, defaultProps, {
  fontSize: 3,
  lineHeight: 3
});
var H6 = styled__default(Text).attrs(function (props) {
  return {
    as: 'h6'
  };
}).withConfig({
  displayName: "Heading__H6",
  componentId: "sc-1vj0lx5-5"
})([""]);
H6.displayName = 'Heading.H6';
H6.defaultProps = Object.assign({}, defaultProps, {
  fontSize: 2,
  lineHeight: 4
});

var Heading = function Heading(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React__default.createElement(H3, props, children);
};

Heading.propTypes = {
  children: propTypes.node
};
Heading.defaultProps = {
  children: null
};
Heading.H1 = H1;
Heading.H2 = H2;
Heading.H3 = H3;
Heading.H4 = H4;
Heading.H5 = H5;
Heading.H6 = H6;

var TruncateText = styled__default(Text).withConfig({
  displayName: "Truncate__TruncateText",
  componentId: "sc-3j0n78-0"
})(["overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"]);
var TruncateContainer = styled__default(Flex).withConfig({
  displayName: "Truncate__TruncateContainer",
  componentId: "sc-3j0n78-1"
})(["min-width:0;max-width:100%;"]);

var Truncate = function Truncate(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React__default.createElement(TruncateContainer, {
    justifyContent: "flex-start"
  }, React__default.createElement(TruncateText, props, children));
};

Truncate.displayName = 'Truncate';
Truncate.propTypes = {
  children: propTypes.node
};
Truncate.defaultProps = {
  children: null
};

var responsive = function responsive(props) {
  return props.responsive && styled.css(["width:100%;height:auto;"]);
};

var round$1 = function round(props) {
  return props.round && styled.css(["border-radius:100%;"]);
};

var Image = styled__default.img.withConfig({
  displayName: "Image",
  componentId: "bzb3ww-0"
})(["", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], styledSystem.space, styledSystem.width, styledSystem.height, styledSystem.borderRadius, styledSystem.position, styledSystem.zIndex, styledSystem.top, styledSystem.left, styledSystem.bottom, styledSystem.right, responsive, round$1, styledSystem.gridColumn, styledSystem.gridRow, styledSystem.gridArea);
Image.displayName = 'Image';
Image.propTypes = _objectSpread({}, styledSystem.space.propTypes, styledSystem.width.propTypes, styledSystem.height.propTypes, styledSystem.borderRadius.propTypes, styledSystem.gridColumn.propTypes, styledSystem.gridRow.propTypes, styledSystem.gridArea.propTypes, {
  responsive: propTypes.bool,
  round: propTypes.bool
});
Image.defaultProps = {
  borderRadius: 0
};

var Vector = styled__default(Image).attrs(function (props) {
  return {
    as: 'svg',
    xmlns: 'http://www.w3.org/2000/svg'
  };
}).withConfig({
  displayName: "Vector",
  componentId: "sc-1cfwhg6-0"
})(["fill:", ";"], function (props) {
  return styledSystem.themeGet("colors.".concat(props.color), '#FFF');
});
Vector.defaultProps = {
  color: 'foreground'
};
Vector.displayName = 'Vector';

var Link = styled__default(Text).attrs(function (props) {
  return {
    as: 'a'
  };
}).withConfig({
  displayName: "Link",
  componentId: "sc-29ctdo-0"
})(["text-decoration:", ";position:relative;&:hover{color:", ";text-decoration:underline;}&:visited,&:focus{text-decoration:none;}&:focus{outline:0;&::after{position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;content:\"\";box-shadow:0 0 0 2px ", ";border-radius:", "px;pointer-events:none;}}"], function (props) {
  return props.clean ? 'none' : 'underline dotted';
}, function (props) {
  return props.theme.colors.accent[3];
}, function (props) {
  return props.theme.colors.guidance.focus;
}, function (props) {
  return props.theme.radii[2];
});
Link.displayName = 'Link';
Link.propTypes = _objectSpread({}, Text.propTypes, {
  clean: propTypes.bool,
  active: propTypes.bool
});
Link.defaultProps = Object.assign({}, Text.defaultProps, {
  color: 'accent.1',
  fontSize: 1,
  textAlign: 'left',
  active: false
});

var showSeparator = function showSeparator(props) {
  return props.showSeparator ? styled.css(["border-bottom:1px dashed ", ";"], props.theme.colors.grayscale[5]) : styled.css(["border-bottom:1px solid transparent;"]);
};

var StyledTable = styled__default.table.withConfig({
  displayName: "Table__StyledTable",
  componentId: "sc-1fbhr5n-0"
})(["", " width:100%;border-spacing:0;border-collapse:separate;color:", ";box-sizing:border-box;border-bottom:2px solid ", ";th,td{vertical-align:top;text-align:left;box-sizing:border-box;&:last-child{padding-right:0;}&.cell--numeric{text-align:right;}&.cell--fill{width:100%;}&.cell--truncate{position:relative;> *{position:absolute;left:0;right:", "px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}}&.cell--disabled{opacity:0.3;}}thead{background-color:", ";th{font-size:", "px;color:", ";font-weight:", ";white-space:pre;padding-top:", "px;padding-bottom:", "px;padding-right:", "px;border-bottom:2px solid ", ";&:first-child{padding-left:", "px;border-radius:", "px 0 0 0;}&:last-child{padding-right:", "px;border-radius:0 ", "px 0 0;}}}tbody{tr{td{text-align:left;padding-top:", "px;padding-bottom:", "px;padding-right:", "px;", " &:first-child{padding-left:", "px;}&:last-child{padding-right:", "px;}}&:first-child{td{padding-top:", "px;}}&:last-child{td{border-bottom:0;padding-bottom:", "px;}}}}"], styledSystem.space, function (props) {
  return props.theme.colors.foreground;
}, function (props) {
  return props.theme.colors.grayscale[5];
}, function (props) {
  return props.theme.space[3];
}, function (props) {
  return props.theme.colors.grayscale[6];
}, function (props) {
  return props.theme.fontSizes[1];
}, function (props) {
  return props.theme.colors.grayscale[2];
}, function (props) {
  return props.theme.fontWeights.normal;
}, function (props) {
  return props.theme.space[2];
}, function (props) {
  return props.theme.space[2];
}, function (props) {
  return props.theme.space[3];
}, function (props) {
  return props.theme.colors.grayscale[5];
}, function (props) {
  return props.theme.space[3];
}, function (props) {
  return props.theme.radii[3];
}, function (props) {
  return props.theme.space[3];
}, function (props) {
  return props.theme.radii[3];
}, function (props) {
  return props.theme.space[2];
}, function (props) {
  return props.theme.space[2];
}, function (props) {
  return props.theme.space[props.space];
}, showSeparator, function (props) {
  return props.theme.space[3];
}, function (props) {
  return props.theme.space[3];
}, function (props) {
  return props.theme.space[2];
}, function (props) {
  return props.theme.space[2];
});
var Col = styled__default.col.withConfig({
  displayName: "Table__Col",
  componentId: "sc-1fbhr5n-1"
})(["", " ", ""], styledSystem.space, styledSystem.width);

var Table = function Table(_ref) {
  var id = _ref.id,
      columns = _ref.columns,
      rows = _ref.rows,
      props = _objectWithoutProperties(_ref, ["id", "columns", "rows"]);

  var cols = columns.map(function (c, i) {
    return React__default.createElement(Col, _extends({
      key: "".concat(id, "__col__").concat(i)
    }, c));
  });
  var header = columns.map(function (c, i) {
    return React__default.createElement("th", {
      key: "".concat(id, "__header__").concat(i),
      className: "".concat(c.type === 'numeric' ? 'cell--numeric' : '')
    }, c.label);
  });
  var rowItems = rows.map(function (r) {
    var cells = r.cells.map(function (c, i) {
      var _columns$i = columns[i],
          fill = _columns$i.fill,
          truncate = _columns$i.truncate,
          rest = _objectWithoutProperties(_columns$i, ["fill", "truncate"]);

      var cell = "".concat(fill ? 'cell--fill' : '', " \n        ").concat(truncate ? 'cell--truncate' : '', " \n        ").concat(r.disabled ? 'cell--disabled' : '');
      return React__default.createElement("td", {
        key: "".concat(r.id, "-cell__").concat(i),
        className: cell,
        style: rest
      }, React__default.createElement("span", null, c.content));
    });
    return React__default.createElement("tr", null, cells);
  });
  return React__default.createElement(StyledTable, props, React__default.createElement("colgroup", null, cols), React__default.createElement("thead", null, React__default.createElement("tr", null, header)), React__default.createElement("tbody", null, rowItems));
};

Table.displayName = 'Table';
Table.propTypes = _objectSpread({}, styledSystem.space.propTypes, {
  space: propTypes.number,
  showSeparator: propTypes.bool,
  columns: propTypes.object,
  rows: propTypes.array
});
Table.defaultProps = {
  showSeparator: true,
  space: 5,
  columns: null,
  rows: null
};

var Label = styled__default(Text).attrs(function (props) {
  return {
    as: 'label'
  };
}).withConfig({
  displayName: "Label",
  componentId: "sc-1ect0ge-0"
})(["display:flex;flex:none;align-items:center;justify-content:center;"]);
Label.displayName = 'Label';
Label.defaultProps = Object.assign({}, Text.defaultProps, {
  color: 'grayscale.2',
  fontSize: 0
});

var labelBorder = function labelBorder(props) {
  var color = props.error ? props.theme.colors.reds[3] : styledSystem.themeGet("colors.".concat(props.borderColor))(props);
  return styled.css(["border:2px solid ", ";"], color || props.borderColor);
};

var labelBackground = function labelBackground(props) {
  var color = styledSystem.themeGet("colors.".concat(props.color))(props);
  return styled.css(["background-color:", ";"], color || props.color);
};

var CheckboxContainer = styled__default.div.withConfig({
  displayName: "Checkbox__CheckboxContainer",
  componentId: "sc-1ot43va-0"
})(["display:flex;flex:none;align-items:flex-start;justify-content:flex-start;position:relative;height:", "px;min-width:", "px;", " ", " ", " ", " label{height:100%;&::before{content:\"\";opacity:0.7;transition:80ms opacity ease-out;position:absolute;left:0;top:0;width:", "px;height:", "px;", " border-radius:", "px;box-sizing:content-box;}&::after{content:\"\";position:absolute;opacity:0;left:0;top:0;width:", "px;height:", "px;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' preserveAspectRatio='xMinYMid' stroke-width='2' stroke='white' fill='none' stroke-miterlimit='10' stroke-dashoffset='0' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 9.5L5.5 12L13 4.5'/%3E%3C/svg%3E\");background-position:50% 50%;background-repeat:no-repeat;transition:80ms opacity ease-out;pointer-events:none;box-sizing:content-box;}}input[type=\"checkbox\"]{margin:0;opacity:0;label::after{content:none;}&:checked + label::after{opacity:1;}&:checked + label::before{opacity:0.9;", " ", "}&:focus + label::before{outline:0;opacity:1;border:2px solid ", ";}&:disabled + label{opacity:0.5;pointer-events:none;}}&:hover{label{&::before{opacity:1;}}}"], function (props) {
  return props.theme.space[props.size] + 4;
}, function (props) {
  return props.theme.space[props.size] + 4;
}, styledSystem.space, styledSystem.gridColumn, styledSystem.gridRow, styledSystem.gridArea, function (props) {
  return props.theme.space[props.size];
}, function (props) {
  return props.theme.space[props.size];
}, labelBorder, function (props) {
  return props.theme.radii[3];
}, function (props) {
  return props.theme.space[props.size] + 4;
}, function (props) {
  return props.theme.space[props.size] + 4;
}, labelBorder, labelBackground, function (props) {
  return props.theme.colors.guidance.focus;
});

var Checkbox = function Checkbox(_ref) {
  var id = _ref.id,
      label = _ref.label,
      labelColor = _ref.labelColor,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      checked = _ref.checked,
      required = _ref.required,
      fontSize = _ref.fontSize,
      fontWeight = _ref.fontWeight,
      textStyle = _ref.textStyle,
      name = _ref.name,
      size = _ref.size,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["id", "label", "labelColor", "onChange", "disabled", "checked", "required", "fontSize", "fontWeight", "textStyle", "name", "size", "className"]);

  return React__default.createElement(CheckboxContainer, _extends({}, props, {
    size: size,
    disabled: disabled,
    className: className
  }), React__default.createElement("input", {
    type: "checkbox",
    id: id,
    onChange: onChange,
    disabled: disabled,
    required: required,
    className: className,
    checked: checked,
    name: name
  }), React__default.createElement(Label, {
    color: labelColor,
    fontSize: fontSize,
    fontWeight: fontWeight,
    textStyle: textStyle,
    htmlFor: id,
    ml: label ? size : 0
  }, label));
};

Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = _objectSpread({}, styledSystem.space.propTypes, styledSystem.gridColumn.propTypes, styledSystem.gridRow.propTypes, styledSystem.gridArea.propTypes, {
  id: propTypes.string.isRequired,
  label: propTypes.string,
  labelColor: propTypes.string,
  color: propTypes.string,
  borderColor: propTypes.string,
  size: propTypes.number
});
Checkbox.defaultProps = {
  label: null,
  labelColor: 'foreground',
  color: 'accent.3',
  borderColor: 'grayscale.4',
  size: 3
};

var isError = function isError(props) {
  return props.error && styled.css(["border:2px solid ", ";&:hover{border:2px solid ", ";}"], props.theme.colors.reds[3], props.theme.colors.reds[3]);
};

var TextInput = styled__default.input.withConfig({
  displayName: "TextInput",
  componentId: "p7hmrn-0"
})(["box-sizing:border-box;position:relative;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " padding-left:", "px;padding-right:", "px;line-height:", "px;width:", ";height:38px;&::-webkit-input-placeholder{color:", ";}&:focus{outline:0;border:2px solid ", ";padding-left:", "px;padding-right:", "px;}&:disabled{opacity:0.5;pointer-events:none;background-color:", ";border:1px solid ", ";}", ""], styledSystem.color, styledSystem.space, styledSystem.fontSize, styledSystem.width, styledSystem.borderRadius, styledSystem.border, styledSystem.borderColor, styledSystem.gridColumn, styledSystem.gridRow, styledSystem.gridArea, function (props) {
  return props.theme.space[2];
}, function (props) {
  return props.theme.space[2];
}, function (props) {
  return props.theme.fontSizes[props.fontSize];
}, function (props) {
  return props.fullWidth ? '100%' : null;
}, function (props) {
  return props.theme.colors.grayscale[5];
}, function (props) {
  return props.theme.colors.guidance.focus;
}, function (props) {
  return props.theme.space[2] - 1;
}, function (props) {
  return props.theme.space[2] - 1;
}, function (props) {
  return props.theme.colors.grayscale[6];
}, function (props) {
  return props.theme.colors.grayscale[5];
}, isError);
TextInput.displayName = 'TextInput';
TextInput.propTypes = _objectSpread({}, styledSystem.color.propTypes, styledSystem.space.propTypes, styledSystem.borderRadius.propTypes, styledSystem.fontSize.propTypes, styledSystem.width.propTypes, styledSystem.gridColumn.propTypes, styledSystem.gridRow.propTypes, styledSystem.gridArea.propTypes, {
  disabled: propTypes.bool,
  error: propTypes.any,
  fullWidth: propTypes.bool
});
TextInput.defaultProps = {
  disabled: false,
  error: false,
  fullWidth: false,
  borderRadius: 3,
  px: 2,
  fontSize: 1,
  bg: 'background',
  border: '1px solid',
  borderColor: 'grayscale.5'
};

var NumberInput = styled__default(TextInput).attrs(function (props) {
  return {
    type: 'number'
  };
}).withConfig({
  displayName: "NumberInput",
  componentId: "sc-1su9kfn-0"
})([""]);
NumberInput.displayName = 'NumberInput';

var TextArea = styled__default(TextInput).attrs(function (props) {
  return {
    as: 'textarea'
  };
}).withConfig({
  displayName: "TextArea",
  componentId: "sc-9ceov9-0"
})([""]);
TextArea.displayName = 'TextArea';
TextArea.defaultProps = Object.assign({}, TextInput.defaultProps, {
  py: 2
});

var PasswordInput = styled__default(TextInput).attrs(function (props) {
  return {
    type: 'password'
  };
}).withConfig({
  displayName: "PasswordInput",
  componentId: "puzpzl-0"
})([""]);
PasswordInput.displayName = 'PasswordInput';

var Select = styled__default(TextInput).attrs(function (props) {
  return {
    as: 'select'
  };
}).withConfig({
  displayName: "Select",
  componentId: "sc-1khmrxn-0"
})([""]);
Select.displayName = 'Select';

var labelBorder$1 = function labelBorder(props) {
  if (props.error) {
    return styled.css(["border:2px solid ", ";"], props.theme.colors.reds[3]);
  }

  var color = styledSystem.themeGet("colors.".concat(props.borderColor))(props);
  return styled.css(["border:2px solid ", ";"], color || props.borderColor);
};

var labelBackground$1 = function labelBackground(props) {
  var color = styledSystem.themeGet("colors.".concat(props.color))(props);
  return styled.css(["background-color:", ";"], color || props.color);
};

var RadioContainer = styled__default.div.withConfig({
  displayName: "Radio__RadioContainer",
  componentId: "sc-1ia4812-0"
})(["display:flex;flex:none;align-items:flex-start;justify-content:flex-start;position:relative;height:", "px;min-width:", "px;", " ", " ", " ", " label{height:100%;&::before{content:\"\";opacity:0.7;transition:80ms opacity ease-out;position:absolute;left:0;top:0;width:", "px;height:", "px;", " border-radius:100%;box-sizing:content-box;}&::after{content:\"\";position:absolute;opacity:0;left:0;top:0;width:", "px;height:", "px;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Ccircle cx='8' cy='8' r='4' fill='white'/%3E%3C/svg%3E\");background-position:50% 50%;background-repeat:no-repeat;transition:80ms opacity ease-out;pointer-events:none;box-sizing:content-box;}}input[type=\"radio\"]{margin:0;opacity:0;label::after{content:none;}&:checked + label::after{opacity:1;}&:checked + label::before{opacity:0.9;", " ", "}&:focus + label::before{outline:0;opacity:1;border:2px solid ", ";}&:disabled + label{opacity:0.5;pointer-events:none;}}&:hover{label{&::before{opacity:1;}}}"], function (props) {
  return props.theme.space[props.size] + 4;
}, function (props) {
  return props.theme.space[props.size] + 4;
}, styledSystem.space, styledSystem.gridColumn, styledSystem.gridRow, styledSystem.gridArea, function (props) {
  return props.theme.space[props.size];
}, function (props) {
  return props.theme.space[props.size];
}, labelBorder$1, function (props) {
  return props.theme.space[props.size] + 4;
}, function (props) {
  return props.theme.space[props.size] + 4;
}, labelBorder$1, labelBackground$1, function (props) {
  return props.theme.colors.guidance.focus;
});

var Radio = function Radio(_ref) {
  var id = _ref.id,
      label = _ref.label,
      labelColor = _ref.labelColor,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      checked = _ref.checked,
      required = _ref.required,
      fontSize = _ref.fontSize,
      fontWeight = _ref.fontWeight,
      textStyle = _ref.textStyle,
      name = _ref.name,
      size = _ref.size,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["id", "label", "labelColor", "onChange", "disabled", "checked", "required", "fontSize", "fontWeight", "textStyle", "name", "size", "className"]);

  return React__default.createElement(RadioContainer, _extends({}, props, {
    size: size,
    disabled: disabled,
    className: className
  }), React__default.createElement("input", {
    type: "radio",
    id: id,
    onChange: onChange,
    disabled: disabled,
    required: required,
    className: className,
    checked: checked,
    name: name
  }), React__default.createElement(Label, {
    color: labelColor,
    fontSize: fontSize,
    fontWeight: fontWeight,
    textStyle: textStyle,
    htmlFor: id,
    ml: label ? size : 0
  }, label));
};

Radio.displayName = 'Radio';
Radio.propTypes = _objectSpread({}, styledSystem.space.propTypes, styledSystem.gridColumn.propTypes, styledSystem.gridRow.propTypes, styledSystem.gridArea.propTypes, {
  id: propTypes.string.isRequired,
  label: propTypes.string,
  labelColor: propTypes.string,
  color: propTypes.string,
  borderColor: propTypes.string,
  size: propTypes.number
});
Radio.defaultProps = {
  label: null,
  labelColor: 'foreground',
  color: 'accent.3',
  borderColor: 'grayscale.4',
  size: 3
};

// Once this is 'fixed', these should be moved back there.

var buttonVariant = function buttonVariant(props) {
  var tertiary = styled.css(["background-color:", ";border-color:transparent;color:", ";fill:", ";&:hover{background-color:", ";}"], props.theme.colors.background, props.theme.colors.grayscale[1], props.theme.colors.grayscale[1], props.theme.colors.grayscale[5]);
  var buttonVariants = {
    primary: styled.css(["background-color:", ";border-color:", ";color:white;fill:white;&:hover{background-color:", ";color:white;fill:white;}"], props.theme.colors.accent[1], props.theme.colors.accent[1], props.theme.colors.accent[0]),
    secondary: styled.css(["background-color:", ";border-color:", ";color:", ";fill:", ";&:hover{background-color:", ";}"], props.theme.colors.grayscale[6], props.theme.colors.grayscale[5], props.theme.colors.grayscale[1], props.theme.colors.grayscale[1], props.theme.colors.grayscale[5]),
    tertiary: tertiary,
    warning: styled.css(["background-color:", ";border-color:", ";color:", ";fill:", ";&:hover{background-color:", ";color:", ";fill:", ";}"], props.theme.colors.guidance.warning[1], props.theme.colors.guidance.warning[0], props.theme.colors.guidance.warning[0], props.theme.colors.guidance.warning[0], props.theme.colors.oranges[5], props.theme.colors.guidance.warning[0], props.theme.colors.guidance.warning[0]),
    danger: styled.css(["background-color:", ";border-color:", ";color:", ";fill:", ";&:hover{background-color:", ";color:", ";fill:", ";}"], props.theme.colors.guidance.error[1], props.theme.colors.guidance.error[0], props.theme.colors.guidance.error[0], props.theme.colors.guidance.error[0], props.theme.colors.reds[5], props.theme.colors.guidance.error[0], props.theme.colors.guidance.error[0]),
    success: styled.css(["background-color:", ";border-color:", ";color:", ";fill:", ";&:hover{background-color:", ";color:", ";fill:", ";}"], props.theme.colors.guidance.success[1], props.theme.colors.guidance.success[0], props.theme.colors.guidance.success[0], props.theme.colors.guidance.success[0], props.theme.colors.greens[5], props.theme.colors.guidance.success[0], props.theme.colors.guidance.success[0]),
    subtle: tertiary,
    link: styled.css(["background-color:transparent;border:0;color:", ";fill:", ";padding:0;text-decoration:underline dotted;&:hover{color:", ";fill:", ";text-decoration:underline;}"], props.theme.colors.grayscale[1], props.theme.colors.grayscale[1], props.theme.colors.accent[1], props.theme.colors.accent[1])
  };
  return buttonVariants[props.variant];
};

var isToggled = function isToggled(props) {
  if (!props.isToggled) {
    return '';
  }

  var tertiary = styled.css(["background-color:", ";&:hover{background-color:", ";}"], props.theme.colors.grayscale[5], props.theme.colors.grayscale[6]);
  var isToggledVariants = {
    primary: styled.css(["background-color:", ";&:hover{background-color:", ";}"], props.theme.colors.accent[0], props.theme.colors.accent[1]),
    secondary: styled.css(["background-color:", ";&:hover{background-color:", ";}"], props.theme.colors.grayscale[5], props.theme.colors.grayscale[6]),
    tertiary: tertiary,
    warning: styled.css(["background-color:", ";&:hover{background-color:", ";}"], props.theme.colors.oranges[5], props.theme.colors.guidance.warning[1]),
    danger: styled.css(["background-color:", ";&:hover{background-color:", ";}"], props.theme.colors.reds[5], props.theme.colors.guidance.error[1]),
    success: styled.css(["background-color:", ";&:hover{background-color:", ";}"], props.theme.colors.greens[5], props.theme.colors.guidance.success[1]),
    subtle: tertiary,
    link: styled.css(["color:", ";fill:", ";text-decoration:underline;&:hover{color:", ";fill:", ";text-decoration:underline dotted;}"], props.theme.colors.accent[1], props.theme.colors.accent[1], props.theme.colors.grayscale[1], props.theme.colors.grayscale[1])
  };
  return isToggledVariants[props.variant];
};

var fullWidth$2 = function fullWidth(props) {
  return props.fullWidth && styled.css(["width:100%;"]);
};

var fullHeight$2 = function fullHeight(props) {
  return props.fullHeight && styled.css(["height:100%;"]);
};

var size = function size(props) {
  var sizes = {
    s: styled.css(["min-width:", "px;height:", "px;padding-left:", "px;padding-right:", "px;"], props.theme.space[4], props.theme.space[4], props.theme.space[props.pl || 2], props.theme.space[props.pr || 2]),
    m: styled.css(["min-width:", "px;height:", "px;padding-left:", "px;padding-right:", "px;"], props.theme.space[5], props.theme.space[5], props.theme.space[props.pl || 3], props.theme.space[props.pr || 3]),
    l: styled.css(["min-width:", "px;height:", "px;padding-left:", "px;padding-right:", "px;"], props.theme.space[6], props.theme.space[6], props.theme.space[props.pl || 3], props.theme.space[props.pr || 3])
  };
  return sizes[props.size];
};

var Button = styled__default.button.attrs(function (props) {
  return {
    disabled: props.isDisabled
  };
}).withConfig({
  displayName: "Button",
  componentId: "sc-353pnt-0"
})(["box-sizing:border-box;display:flex;flex:none;position:relative;", " ", " border:0;cursor:pointer;transition:border-color 180ms ease-out,background-color 180ms ease-out,color 180ms ease-out,fill 180ms ease-out,transform 180ms ease-out,opacity 180ms ease-out;", " ", " ", " ", " ", " ", " ", " &:focus{outline:0;&::after{position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;content:\"\";box-shadow:0 0 0 2px ", ";border-radius:", "px;pointer-events:none;z-index:1;}}", " ", " ", " ", " ", " ", " &:disabled{opacity:0.5;background-color:", ";border:0;color:", ";fill:", ";pointer-events:none;}"], styledSystem.alignItems, styledSystem.justifyContent, styledSystem.fontSize, size, styledSystem.space, styledSystem.width, styledSystem.height, fullWidth$2, fullHeight$2, function (props) {
  return props.theme.colors.guidance.focus;
}, function (props) {
  return props.theme.radii[props.borderRadius];
}, buttonVariant, styledSystem.color, styledSystem.border, styledSystem.borderColor, styledSystem.borderRadius, isToggled, function (props) {
  return props.theme.colors.grayscale[6];
}, function (props) {
  return props.theme.colors.grayscale[4];
}, function (props) {
  return props.theme.colors.grayscale[4];
});
Button.displayName = 'Button';
Button.propTypes = _objectSpread({}, styledSystem.space.propTypes, styledSystem.color.propTypes, styledSystem.width.propTypes, styledSystem.height.propTypes, styledSystem.borderRadius.propTypes, styledSystem.borderColor.propTypes, styledSystem.alignItems.propTypes, styledSystem.justifyContent.propTypes, styledSystem.fontSize.propTypes, {
  isToggled: propTypes.bool,
  isDisabled: propTypes.bool,
  fullWidth: propTypes.bool,
  fullHeight: propTypes.bool,
  variant: propTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger', 'warning', 'success', 'subtle', 'link']),
  size: propTypes.oneOf(['s', 'm', 'l']),
  type: propTypes.string
});
Button.defaultProps = {
  width: 'initial',
  fontSize: 1,
  borderRadius: 3,
  borderColor: 'grayscale.5',
  isToggled: false,
  isDisabled: false,
  variant: 'secondary',
  alignItems: 'center',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
  size: 'm',
  type: 'button'
};

var CircleButton = styled__default(Button).withConfig({
  displayName: "CircleButton",
  componentId: "v894jg-0"
})(["padding:0;border-radius:50%;"]);
CircleButton.displayName = 'CircleButton';
CircleButton.defaultProps = Object.assign({}, Button.defaultProps, {
  isToggled: false,
  isDisabled: false,
  alignItems: 'center',
  justifyContent: 'center',
  size: 'm'
});

var SquareButton = styled__default(Button).withConfig({
  displayName: "SquareButton",
  componentId: "ah7hw2-0"
})(["padding:0;"]);
SquareButton.displayName = 'SquareButton';
SquareButton.defaultProps = Object.assign({}, Button.defaultProps, {
  isToggled: false,
  isDisabled: false,
  alignItems: 'center',
  justifyContent: 'center',
  size: 'm'
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  :root, body {\n    width: 100%;\n    height: 100%;\n\n    margin: 0;\n    padding: 0;\n\n    font-size: 8px;\n    overflow-x: hidden;\n  }\n\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1.43;\n\n    // Specific layout resets.\n    display: flex;\n    flex: none;\n    flex-direction: column;\n  }\n\n  *, ::before, ::after {\n    box-sizing: border-box;\n  }\n\n  a,\n  a:hover,\n  a:visited {\n    text-decoration: none;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n  }\n\n  code,\n  kbd {\n    font-family: \"SF Mono\", \"Segoe UI Mono\", \"Roboto Mono\", \"Ubuntu Mono\", Menlo, Courier, monospace;\n  }\n\n  template {\n    display: none;\n  }\n\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  main,\n  menu,\n  nav,\n  section {\n    display: block;\n  }\n\n  html,\n  body,\n  p,\n  div,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  ul,\n  ol,\n  dl,\n  img,\n  pre,\n  form,\n  fieldset {\n    margin: 0;\n    padding: 0;\n  }\n\n  img,\n  fieldset {\n    border: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Normalize = styled.createGlobalStyle(_templateObject());

var breakpoints = ['40em', '52em', '64em'];

var easeInOut = 'cubic-bezier(0.5, 0, 0.25, 1)';
var easeOut = 'cubic-bezier(0, 0, 0.25, 1)';
var easeIn = 'cubic-bezier(0.5, 0, 1, 1)';
var timingFunctions = {
  easeInOut: easeInOut,
  easeOut: easeOut,
  easeIn: easeIn
};

var fonts = {
  default: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  monospace: 'SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Courier, monospace'
};

var fontSizes = [12, 14, 16, 18, 22, 26, 30, 34];

var fontWeights = {
  light: 400,
  normal: 500,
  bold: 700
};

var letterSpacings = {
  normal: 'normal',
  caps: '0.25em'
};

var lineHeights = [1, 1.125, 1.25, 1.4, 1.5];

// A set of common text styles that can be consumed by a Text component.
var textStyles = {
  caps: {
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  monospace: {
    fontFamily: '"SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Courier, monospace;'
  },
  italic: {
    fontStyle: 'italic'
  }
};

var boxShadows = ['0 1px 3px hsla(0, 0%, 0%, .12), 0 1px 2px hsla(0, 0%, 0%, .24)', '0 3px 6px hsla(0, 0%, 0%, .15), 0 2px 4px hsla(0, 0%, 0%, .12)', '0 10px 20px hsla(0, 0%, 0%, .15), 0 3px 6px hsla(0, 0%, 0%, .10)', '0 15px 25px hsla(0, 0%, 0%, .15), 0 5px 10px hsla(0, 0%, 0%, .2)', '0 20px 40px hsla(0, 0%, 0%, .2)'];

var space = [0, // 0
4, // 1
8, // 2
16, // 3
24, // 4
32, // 5
48, // 6
64, // 7
96, // 8
128, // 9
192, // 10
256, // 11
384, // 12
512, // 13
640];

var radii = [0, 1, 2, 4, 8, 16, 9999];

var white = 'hsl(0, 0%, 100%)';
var black = 'hsl(0, 0%, 0%)';
var focus = 'hsl(211, 97%, 61%)';
var grayscale = ['var(--c-grayscale-0, hsl(228, 34%, 11%))', 'var(--c-grayscale-1, hsl(227, 14%, 25%))', 'var(--c-grayscale-2, hsl(229, 8%, 38%))', 'var(--c-grayscale-3, hsl(226, 5%, 51%))', 'var(--c-grayscale-4, hsl(228, 6%, 65%))', 'var(--c-grayscale-5, hsl(223, 6%, 78%))', 'var(--c-grayscale-6, hsl(220, 7%, 91%))'];
var colour = {
  accent: ['var(--c-accent-0, hsl(197, 100%, 17%))', 'var(--c-accent-1, hsl(197, 94%, 25%))', 'var(--c-accent-2, hsl(197, 81%, 33%))', 'var(--c-accent-3, hsl(197, 69%, 40%))', 'var(--c-accent-4, hsl(197, 59%, 56%))', 'var(--c-accent-5, hsl(197, 72%, 74%))', 'var(--c-accent-6, hsl(199, 84%, 90%))'],
  grayscale: ['hsl(228, 34%, 11%)', 'hsl(227, 14%, 25%)', 'hsl(229, 8%, 38%)', 'hsl(226, 5%, 51%)', 'hsl(228, 6%, 65%)', 'hsl(223, 6%, 78%)', 'hsl(220, 7%, 91%)', 'hsl(220, 6%, 96%)'],
  reverseGrayscale: ['hsl(220, 6%, 96%)', 'hsl(220, 7%, 91%)', 'hsl(223, 6%, 78%)', 'hsl(228, 6%, 65%)', 'hsl(226, 5%, 51%)', 'hsl(229, 8%, 38%)', 'hsl(227, 14%, 25%)', 'hsl(228, 34%, 11%)'],
  greens: ['hsl(173, 100%, 15%)', 'hsl(173, 100%, 21%)', 'hsl(173, 93%, 28%)', 'hsl(173, 81%, 35%)', 'hsl(173, 48%, 50%)', 'hsl(173, 53%, 65%)', 'hsl(172, 58%, 81%)'],
  oranges: ['hsl(34, 83%, 28%)', 'hsl(31, 68%, 40%)', 'hsl(29, 65%, 54%)', 'hsl(27, 87%, 67%)', 'hsl(26, 98%, 75%)', 'hsl(28, 100%, 82%)', 'hsl(29, 100%, 89%)'],
  reds: ['hsl(8, 96%, 27%)', 'hsl(8, 78%, 38%)', 'hsl(7, 67%, 51%)', 'hsl(7, 77%, 61%)', 'hsl(6, 87%, 71%)', 'hsl(7, 96%, 80%)', 'hsl(7, 100%, 88%)'],
  blues: ['hsl(197, 100%, 17%)', 'hsl(197, 94%, 25%)', 'hsl(197, 81%, 33%)', 'hsl(197, 69%, 40%)', 'hsl(197, 59%, 56%)', 'hsl(197, 72%, 74%)', 'hsl(199, 84%, 90%)'],
  purples: ['hsl(283, 38%, 25%)', 'hsl(284, 34%, 37%)', 'hsl(284, 30%, 48%)', 'hsl(283, 37%, 60%)', 'hsl(283, 38%, 72%)', 'hsl(283, 38%, 84%)', 'hsl(285, 40%, 96%)']
};
var palettes = ['greens', 'oranges', 'reds', 'blues', 'purples'];
var randomA11y = function randomA11y() {
  var r = Math.floor(Math.random() * palettes.length);
  var palette = palettes[r];
  return [colour[palette][0], colour[palette][5]];
};
var randomColor = function randomColor() {
  var r = Math.floor(Math.random() * palettes.length);
  var palette = palettes[r];
  var item = Math.floor(Math.random() * palette.length);
  return colour[palette][item];
};

var lightSwatch = {
  background: "var(--c-background, ".concat(white, ")"),
  foreground: "var(--c-foreground, ".concat(grayscale[0], ")"),
  grayscale: _toConsumableArray(grayscale)
}; // Construct a base colors object to use in a theme.

var baseColors = {
  // Primary palettes
  black: black,
  white: white,
  accent: _toConsumableArray(colour.accent),
  // Secondary palettes
  blues: _toConsumableArray(colour.blues),
  reds: _toConsumableArray(colour.reds),
  oranges: _toConsumableArray(colour.oranges),
  greens: _toConsumableArray(colour.greens),
  purples: _toConsumableArray(colour.purples),
  // Guidance palettes
  guidance: {
    info: [colour.blues[0], colour.blues[6]],
    error: [colour.reds[0], colour.reds[6]],
    warning: [colour.oranges[0], colour.oranges[6]],
    success: [colour.greens[0], colour.greens[6]],
    focus: focus
  }
};
var lightColors = Object.assign({}, baseColors, lightSwatch); // Construct a base theme with values we want.

var baseTheme = {
  breakpoints: breakpoints,
  timingFunctions: timingFunctions,
  fonts: fonts,
  fontSizes: fontSizes,
  fontWeights: fontWeights,
  letterSpacings: letterSpacings,
  lineHeights: lineHeights,
  radii: radii,
  boxShadows: boxShadows,
  space: space,
  textStyles: textStyles
};
var lightTheme = Object.assign({}, baseTheme, {
  colors: lightColors
});

var reverseGrayscale = [].concat(_toConsumableArray(colour.grayscale.slice(1)), [lightTheme.colors.white]);
reverseGrayscale.reverse();

var getTheme = function getTheme(type) {
  var themeDefinitions = {
    light: {
      foreground: colour.grayscale[0],
      background: lightTheme.colors.white,
      grayscale: _toConsumableArray(colour.grayscale)
    },
    dark: {
      foreground: lightTheme.colors.white,
      background: colour.grayscale[0],
      grayscale: reverseGrayscale
    }
  };
  return themeDefinitions[type];
};

var changeTheme = function changeTheme(type) {
  var root = document.querySelector(':root');
  var newTheme = getTheme(type, root);
  root.style.setProperty('--c-foreground', newTheme.foreground);
  root.style.setProperty('--c-background', newTheme.background);
  newTheme.grayscale.forEach(function (c, i) {
    root.style.setProperty("--c-grayscale-".concat(i), c);
  });
};
changeTheme.defaultProps = {
  type: 'light'
};
var changeAccent = function changeAccent(colour$$1) {
  var root = document.querySelector(':root');

  var newColours = _toConsumableArray(lightTheme.colors[colour$$1]);

  newColours.forEach(function (c, i) {
    root.style.setProperty("--c-accent-".concat(i), c);
  });
};

var getWindowSize = function getWindowSize() {
  return {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight
  };
};
/**
 * Hook to query the current window size. Triggers on window resize.
 */


var useWindowSize = function useWindowSize() {
  var _useState = React.useState(getWindowSize()),
      _useState2 = _slicedToArray(_useState, 2),
      windowSize = _useState2[0],
      setWindowSize = _useState2[1];

  var handleResize = React.useCallback(function () {
    return setWindowSize(getWindowSize());
  }, []);
  React.useEffect(function () {
    window.addEventListener('resize', handleResize);
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, []);
  return windowSize;
};

var selector = '#base__portal';

var usePortal = function usePortal(child) {
  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      container = _useState2[0],
      setContainer = _useState2[1];

  if (typeof window === 'undefined') {
    return null;
  }

  if (!container) {
    var c = document.querySelector(selector);

    if (!c) {
      c = document.createElement('div');
      c.setAttribute('id', selector);
      c.style.cssText = 'left:0;top:0;right:0;bottom:0;position:fixed;pointer-events:none;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;';
      document.querySelector('body').appendChild(c);
    }

    setContainer(c);
  }

  return container && reactDom.createPortal(child, container);
};

// Adapted from https://overreacted.io/making-setinterval-declarative-with-react-hooks/ by Dan Abramov

var useInterval = function useInterval(callback, delay) {
  var savedCallback = React.useRef(); // Remember the latest callback.

  React.useEffect(function () {
    savedCallback.current = callback;
  }); // Set up the interval.

  React.useEffect(function () {
    var tick = function tick() {
      savedCallback.current();
    };

    if (delay !== null) {
      var id = setInterval(tick, delay);
      return function () {
        return clearInterval(id);
      };
    }
  }, [delay]);
};

var themeDefinitions = {
  light: {
    foreground: colour.grayscale[0],
    background: lightTheme.colors.white,
    grayscale: _toConsumableArray(colour.grayscale)
  },
  dark: {
    foreground: 'hsl(220, 4%, 98%)',
    background: 'hsl(228, 34%, 9%)',
    grayscale: _toConsumableArray(colour.reverseGrayscale)
  }
};

var useTheme = function useTheme() {
  var _useState = React.useState('light'),
      _useState2 = _slicedToArray(_useState, 2),
      theme = _useState2[0],
      setTheme = _useState2[1];

  React.useEffect(function () {
    return void requestAnimationFrame(function () {
      var root = document.querySelector(':root');
      var newTheme = themeDefinitions[theme];
      root.style.setProperty('--c-foreground', newTheme.foreground);
      root.style.setProperty('--c-background', newTheme.background);
      newTheme.grayscale.forEach(function (c, i) {
        root.style.setProperty("--c-grayscale-".concat(i), c);
      });
    }, [theme]);
  });
  return [theme, setTheme];
};

var useAccent = function useAccent() {
  var _useState = React.useState('blues'),
      _useState2 = _slicedToArray(_useState, 2),
      accent = _useState2[0],
      setAccent = _useState2[1];

  React.useEffect(function () {
    return void requestAnimationFrame(function () {
      var root = document.querySelector(':root');

      var newColours = _toConsumableArray(colour[accent]);

      newColours.forEach(function (c, i) {
        root.style.setProperty("--c-accent-".concat(i), c);
      });
    }, [accent]);
  });
  return [accent, setAccent];
};

exports.Box = Box;
exports.Flex = Flex;
exports.Scrollable = Scrollable;
exports.Grid = Grid;
exports.Card = Card;
exports.BoxList = BoxList;
exports.BoxListItem = BoxListItem;
exports.Heading = Heading;
exports.Text = Text;
exports.Truncate = Truncate;
exports.Image = Image;
exports.Vector = Vector;
exports.Link = Link;
exports.Table = Table;
exports.Checkbox = Checkbox;
exports.TextInput = TextInput;
exports.NumberInput = NumberInput;
exports.PasswordInput = PasswordInput;
exports.Label = Label;
exports.Select = Select;
exports.TextArea = TextArea;
exports.Radio = Radio;
exports.Button = Button;
exports.CircleButton = CircleButton;
exports.SquareButton = SquareButton;
exports.Normalize = Normalize;
exports.changeTheme = changeTheme;
exports.changeAccent = changeAccent;
exports.theme = lightTheme;
exports.randomA11y = randomA11y;
exports.randomColor = randomColor;
exports.useInterval = useInterval;
exports.usePortal = usePortal;
exports.useWindowSize = useWindowSize;
exports.useTheme = useTheme;
exports.useAccent = useAccent;
