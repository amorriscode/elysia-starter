// @bun
// node_modules/elysia/dist/bun/index.js
var eW = Object.create;
var { defineProperty: S6, getPrototypeOf: $X, getOwnPropertyNames: YX } = Object;
var WX = Object.prototype.hasOwnProperty;
var Q1 = ($, Y, W) => {
  W = $ != null ? eW($X($)) : {};
  const X = Y || !$ || !$.__esModule ? S6(W, "default", { value: $, enumerable: true }) : W;
  for (let Z of YX($))
    if (!WX.call(X, Z))
      S6(X, Z, { get: () => $[Z], enumerable: true });
  return X;
};
var J0 = ($, Y) => () => (Y || $((Y = { exports: {} }).exports, Y), Y.exports);
var b6 = J0((O7, a$) => {
  var s1 = function() {
  }, QX = function($, Y, W) {
    this.fn = $, this.context = Y, this.once = W || false;
  }, I6 = function($, Y, W, X, Z) {
    if (typeof W !== "function")
      throw new TypeError("The listener must be a function");
    var Q = new QX(W, X || $, Z), J = V0 ? V0 + Y : Y;
    if (!$._events[J])
      $._events[J] = Q, $._eventsCount++;
    else if (!$._events[J].fn)
      $._events[J].push(Q);
    else
      $._events[J] = [$._events[J], Q];
    return $;
  }, K$ = function($, Y) {
    if (--$._eventsCount === 0)
      $._events = new s1;
    else
      delete $._events[Y];
  }, G0 = function() {
    this._events = new s1, this._eventsCount = 0;
  }, ZX = Object.prototype.hasOwnProperty, V0 = "~";
  if (Object.create) {
    if (s1.prototype = Object.create(null), !new s1().__proto__)
      V0 = false;
  }
  G0.prototype.eventNames = function $() {
    var Y = [], W, X;
    if (this._eventsCount === 0)
      return Y;
    for (X in W = this._events)
      if (ZX.call(W, X))
        Y.push(V0 ? X.slice(1) : X);
    if (Object.getOwnPropertySymbols)
      return Y.concat(Object.getOwnPropertySymbols(W));
    return Y;
  };
  G0.prototype.listeners = function $(Y) {
    var W = V0 ? V0 + Y : Y, X = this._events[W];
    if (!X)
      return [];
    if (X.fn)
      return [X.fn];
    for (var Z = 0, Q = X.length, J = new Array(Q);Z < Q; Z++)
      J[Z] = X[Z].fn;
    return J;
  };
  G0.prototype.listenerCount = function $(Y) {
    var W = V0 ? V0 + Y : Y, X = this._events[W];
    if (!X)
      return 0;
    if (X.fn)
      return 1;
    return X.length;
  };
  G0.prototype.emit = function $(Y, W, X, Z, Q, J) {
    var z = V0 ? V0 + Y : Y;
    if (!this._events[z])
      return false;
    var U = this._events[z], D = arguments.length, B, j;
    if (U.fn) {
      if (U.once)
        this.removeListener(Y, U.fn, undefined, true);
      switch (D) {
        case 1:
          return U.fn.call(U.context), true;
        case 2:
          return U.fn.call(U.context, W), true;
        case 3:
          return U.fn.call(U.context, W, X), true;
        case 4:
          return U.fn.call(U.context, W, X, Z), true;
        case 5:
          return U.fn.call(U.context, W, X, Z, Q), true;
        case 6:
          return U.fn.call(U.context, W, X, Z, Q, J), true;
      }
      for (j = 1, B = new Array(D - 1);j < D; j++)
        B[j - 1] = arguments[j];
      U.fn.apply(U.context, B);
    } else {
      var b = U.length, S;
      for (j = 0;j < b; j++) {
        if (U[j].once)
          this.removeListener(Y, U[j].fn, undefined, true);
        switch (D) {
          case 1:
            U[j].fn.call(U[j].context);
            break;
          case 2:
            U[j].fn.call(U[j].context, W);
            break;
          case 3:
            U[j].fn.call(U[j].context, W, X);
            break;
          case 4:
            U[j].fn.call(U[j].context, W, X, Z);
            break;
          default:
            if (!B)
              for (S = 1, B = new Array(D - 1);S < D; S++)
                B[S - 1] = arguments[S];
            U[j].fn.apply(U[j].context, B);
        }
      }
    }
    return true;
  };
  G0.prototype.on = function $(Y, W, X) {
    return I6(this, Y, W, X, false);
  };
  G0.prototype.once = function $(Y, W, X) {
    return I6(this, Y, W, X, true);
  };
  G0.prototype.removeListener = function $(Y, W, X, Z) {
    var Q = V0 ? V0 + Y : Y;
    if (!this._events[Q])
      return this;
    if (!W)
      return K$(this, Q), this;
    var J = this._events[Q];
    if (J.fn) {
      if (J.fn === W && (!Z || J.once) && (!X || J.context === X))
        K$(this, Q);
    } else {
      for (var z = 0, U = [], D = J.length;z < D; z++)
        if (J[z].fn !== W || Z && !J[z].once || X && J[z].context !== X)
          U.push(J[z]);
      if (U.length)
        this._events[Q] = U.length === 1 ? U[0] : U;
      else
        K$(this, Q);
    }
    return this;
  };
  G0.prototype.removeAllListeners = function $(Y) {
    var W;
    if (Y) {
      if (W = V0 ? V0 + Y : Y, this._events[W])
        K$(this, W);
    } else
      this._events = new s1, this._eventsCount = 0;
    return this;
  };
  G0.prototype.off = G0.prototype.removeListener;
  G0.prototype.addListener = G0.prototype.on;
  G0.prefixed = V0;
  G0.EventEmitter = G0;
  if (typeof a$ !== "undefined")
    a$.exports = G0;
});
var x0 = J0((d6) => {
  var JX = function($) {
    return j$($) && (Symbol.asyncIterator in $);
  }, zX = function($) {
    return j$($) && (Symbol.iterator in $);
  }, HX = function($) {
    return ArrayBuffer.isView($);
  }, qX = function($) {
    return $ instanceof Promise;
  }, MX = function($) {
    return $ instanceof Uint8Array;
  }, NX = function($) {
    return $ instanceof Date && Number.isFinite($.getTime());
  }, FX = function($, Y) {
    return Y in $;
  }, UX = function($) {
    return j$($) && f6($.constructor) && $.constructor.name === "Object";
  }, j$ = function($) {
    return $ !== null && typeof $ === "object";
  }, AX = function($) {
    return Array.isArray($) && !ArrayBuffer.isView($);
  }, E6 = function($) {
    return $ === undefined;
  }, V6 = function($) {
    return $ === null;
  }, x6 = function($) {
    return typeof $ === "boolean";
  }, e$ = function($) {
    return typeof $ === "number";
  }, BX = function($) {
    return e$($) && Number.isInteger($);
  }, k6 = function($) {
    return typeof $ === "bigint";
  }, g6 = function($) {
    return typeof $ === "string";
  }, f6 = function($) {
    return typeof $ === "function";
  }, T6 = function($) {
    return typeof $ === "symbol";
  }, DX = function($) {
    return k6($) || x6($) || V6($) || e$($) || g6($) || T6($) || E6($);
  };
  Object.defineProperty(d6, "__esModule", { value: true });
  d6.IsValueType = d6.IsSymbol = d6.IsFunction = d6.IsString = d6.IsBigInt = d6.IsInteger = d6.IsNumber = d6.IsBoolean = d6.IsNull = d6.IsUndefined = d6.IsArray = d6.IsObject = d6.IsPlainObject = d6.HasPropertyKey = d6.IsDate = d6.IsUint8Array = d6.IsPromise = d6.IsTypedArray = d6.IsIterator = d6.IsAsyncIterator = undefined;
  d6.IsAsyncIterator = JX;
  d6.IsIterator = zX;
  d6.IsTypedArray = HX;
  d6.IsPromise = qX;
  d6.IsUint8Array = MX;
  d6.IsDate = NX;
  d6.HasPropertyKey = FX;
  d6.IsPlainObject = UX;
  d6.IsObject = j$;
  d6.IsArray = AX;
  d6.IsUndefined = E6;
  d6.IsNull = V6;
  d6.IsBoolean = x6;
  d6.IsNumber = e$;
  d6.IsInteger = BX;
  d6.IsBigInt = k6;
  d6.IsString = g6;
  d6.IsFunction = f6;
  d6.IsSymbol = T6;
  d6.IsValueType = DX;
});
var f0 = J0((m6) => {
  Object.defineProperty(m6, "__esModule", { value: true });
  m6.Type = m6.JsonType = m6.JavaScriptTypeBuilder = m6.JsonTypeBuilder = m6.TypeBuilder = m6.TypeBuilderError = m6.TransformEncodeBuilder = m6.TransformDecodeBuilder = m6.TemplateLiteralDslParser = m6.TemplateLiteralGenerator = m6.TemplateLiteralGeneratorError = m6.TemplateLiteralFinite = m6.TemplateLiteralFiniteError = m6.TemplateLiteralParser = m6.TemplateLiteralParserError = m6.TemplateLiteralResolver = m6.TemplateLiteralPattern = m6.TemplateLiteralPatternError = m6.UnionResolver = m6.KeyArrayResolver = m6.KeyArrayResolverError = m6.KeyResolver = m6.ObjectMap = m6.Intrinsic = m6.IndexedAccessor = m6.TypeClone = m6.TypeExtends = m6.TypeExtendsResult = m6.TypeExtendsError = m6.ExtendsUndefined = m6.TypeGuard = m6.TypeGuardUnknownTypeError = m6.ValueGuard = m6.FormatRegistry = m6.TypeBoxError = m6.TypeRegistry = m6.PatternStringExact = m6.PatternNumberExact = m6.PatternBooleanExact = m6.PatternString = m6.PatternNumber = m6.PatternBoolean = m6.Kind = m6.Hint = m6.Optional = m6.Readonly = m6.Transform = undefined;
  m6.Transform = Symbol.for("TypeBox.Transform");
  m6.Readonly = Symbol.for("TypeBox.Readonly");
  m6.Optional = Symbol.for("TypeBox.Optional");
  m6.Hint = Symbol.for("TypeBox.Hint");
  m6.Kind = Symbol.for("TypeBox.Kind");
  m6.PatternBoolean = "(true|false)";
  m6.PatternNumber = "(0|[1-9][0-9]*)";
  m6.PatternString = "(.*)";
  m6.PatternBooleanExact = `^${m6.PatternBoolean}$`;
  m6.PatternNumberExact = `^${m6.PatternNumber}$`;
  m6.PatternStringExact = `^${m6.PatternString}$`;
  var $8;
  (function($) {
    const Y = new Map;
    function W() {
      return new Map(Y);
    }
    $.Entries = W;
    function X() {
      return Y.clear();
    }
    $.Clear = X;
    function Z(U) {
      return Y.delete(U);
    }
    $.Delete = Z;
    function Q(U) {
      return Y.has(U);
    }
    $.Has = Q;
    function J(U, D) {
      Y.set(U, D);
    }
    $.Set = J;
    function z(U) {
      return Y.get(U);
    }
    $.Get = z;
  })($8 || (m6.TypeRegistry = $8 = {}));

  class $1 extends Error {
    constructor($) {
      super($);
    }
  }
  m6.TypeBoxError = $1;
  var v6;
  (function($) {
    const Y = new Map;
    function W() {
      return new Map(Y);
    }
    $.Entries = W;
    function X() {
      return Y.clear();
    }
    $.Clear = X;
    function Z(U) {
      return Y.delete(U);
    }
    $.Delete = Z;
    function Q(U) {
      return Y.has(U);
    }
    $.Has = Q;
    function J(U, D) {
      Y.set(U, D);
    }
    $.Set = J;
    function z(U) {
      return Y.get(U);
    }
    $.Get = z;
  })(v6 || (m6.FormatRegistry = v6 = {}));
  var V;
  (function($) {
    function Y(D) {
      return Array.isArray(D);
    }
    $.IsArray = Y;
    function W(D) {
      return typeof D === "bigint";
    }
    $.IsBigInt = W;
    function X(D) {
      return typeof D === "boolean";
    }
    $.IsBoolean = X;
    function Z(D) {
      return D === null;
    }
    $.IsNull = Z;
    function Q(D) {
      return typeof D === "number";
    }
    $.IsNumber = Q;
    function J(D) {
      return typeof D === "object" && D !== null;
    }
    $.IsObject = J;
    function z(D) {
      return typeof D === "string";
    }
    $.IsString = z;
    function U(D) {
      return D === undefined;
    }
    $.IsUndefined = U;
  })(V || (m6.ValueGuard = V = {}));

  class i6 extends $1 {
  }
  m6.TypeGuardUnknownTypeError = i6;
  var A;
  (function($) {
    function Y(M) {
      try {
        return new RegExp(M), true;
      } catch {
        return false;
      }
    }
    function W(M) {
      if (!V.IsString(M))
        return false;
      for (let l = 0;l < M.length; l++) {
        const S0 = M.charCodeAt(l);
        if (S0 >= 7 && S0 <= 13 || S0 === 27 || S0 === 127)
          return false;
      }
      return true;
    }
    function X(M) {
      return J(M) || X0(M);
    }
    function Z(M) {
      return V.IsUndefined(M) || V.IsBigInt(M);
    }
    function Q(M) {
      return V.IsUndefined(M) || V.IsNumber(M);
    }
    function J(M) {
      return V.IsUndefined(M) || V.IsBoolean(M);
    }
    function z(M) {
      return V.IsUndefined(M) || V.IsString(M);
    }
    function U(M) {
      return V.IsUndefined(M) || V.IsString(M) && W(M) && Y(M);
    }
    function D(M) {
      return V.IsUndefined(M) || V.IsString(M) && W(M);
    }
    function B(M) {
      return V.IsUndefined(M) || X0(M);
    }
    function j(M) {
      return _(M, "Any") && z(M.$id);
    }
    $.TAny = j;
    function b(M) {
      return _(M, "Array") && M.type === "array" && z(M.$id) && X0(M.items) && Q(M.minItems) && Q(M.maxItems) && J(M.uniqueItems) && B(M.contains) && Q(M.minContains) && Q(M.maxContains);
    }
    $.TArray = b;
    function S(M) {
      return _(M, "AsyncIterator") && M.type === "AsyncIterator" && z(M.$id) && X0(M.items);
    }
    $.TAsyncIterator = S;
    function N(M) {
      return _(M, "BigInt") && M.type === "bigint" && z(M.$id) && Z(M.exclusiveMaximum) && Z(M.exclusiveMinimum) && Z(M.maximum) && Z(M.minimum) && Z(M.multipleOf);
    }
    $.TBigInt = N;
    function O(M) {
      return _(M, "Boolean") && M.type === "boolean" && z(M.$id);
    }
    $.TBoolean = O;
    function P(M) {
      return _(M, "Constructor") && M.type === "Constructor" && z(M.$id) && V.IsArray(M.parameters) && M.parameters.every((l) => X0(l)) && X0(M.returns);
    }
    $.TConstructor = P;
    function F(M) {
      return _(M, "Date") && M.type === "Date" && z(M.$id) && Q(M.exclusiveMaximumTimestamp) && Q(M.exclusiveMinimumTimestamp) && Q(M.maximumTimestamp) && Q(M.minimumTimestamp) && Q(M.multipleOfTimestamp);
    }
    $.TDate = F;
    function w(M) {
      return _(M, "Function") && M.type === "Function" && z(M.$id) && V.IsArray(M.parameters) && M.parameters.every((l) => X0(l)) && X0(M.returns);
    }
    $.TFunction = w;
    function I(M) {
      return _(M, "Integer") && M.type === "integer" && z(M.$id) && Q(M.exclusiveMaximum) && Q(M.exclusiveMinimum) && Q(M.maximum) && Q(M.minimum) && Q(M.multipleOf);
    }
    $.TInteger = I;
    function G(M) {
      return _(M, "Intersect") && (V.IsString(M.type) && M.type !== "object" ? false : true) && V.IsArray(M.allOf) && M.allOf.every((l) => X0(l) && !w0(l)) && z(M.type) && (J(M.unevaluatedProperties) || B(M.unevaluatedProperties)) && z(M.$id);
    }
    $.TIntersect = G;
    function k(M) {
      return _(M, "Iterator") && M.type === "Iterator" && z(M.$id) && X0(M.items);
    }
    $.TIterator = k;
    function _(M, l) {
      return e(M) && M[m6.Kind] === l;
    }
    $.TKindOf = _;
    function e(M) {
      return V.IsObject(M) && (m6.Kind in M) && V.IsString(M[m6.Kind]);
    }
    $.TKind = e;
    function o(M) {
      return b0(M) && V.IsString(M.const);
    }
    $.TLiteralString = o;
    function r(M) {
      return b0(M) && V.IsNumber(M.const);
    }
    $.TLiteralNumber = r;
    function g0(M) {
      return b0(M) && V.IsBoolean(M.const);
    }
    $.TLiteralBoolean = g0;
    function b0(M) {
      return _(M, "Literal") && z(M.$id) && (V.IsBoolean(M.const) || V.IsNumber(M.const) || V.IsString(M.const));
    }
    $.TLiteral = b0;
    function E0(M) {
      return _(M, "Never") && V.IsObject(M.not) && Object.getOwnPropertyNames(M.not).length === 0;
    }
    $.TNever = E0;
    function H0(M) {
      return _(M, "Not") && X0(M.not);
    }
    $.TNot = H0;
    function z0(M) {
      return _(M, "Null") && M.type === "null" && z(M.$id);
    }
    $.TNull = z0;
    function u0(M) {
      return _(M, "Number") && M.type === "number" && z(M.$id) && Q(M.exclusiveMaximum) && Q(M.exclusiveMinimum) && Q(M.maximum) && Q(M.minimum) && Q(M.multipleOf);
    }
    $.TNumber = u0;
    function a0(M) {
      return _(M, "Object") && M.type === "object" && z(M.$id) && V.IsObject(M.properties) && X(M.additionalProperties) && Q(M.minProperties) && Q(M.maxProperties) && Object.entries(M.properties).every(([l, S0]) => W(l) && X0(S0));
    }
    $.TObject = a0;
    function v0(M) {
      return _(M, "Promise") && M.type === "Promise" && z(M.$id) && X0(M.item);
    }
    $.TPromise = v0;
    function R(M) {
      return _(M, "Record") && M.type === "object" && z(M.$id) && X(M.additionalProperties) && V.IsObject(M.patternProperties) && ((l) => {
        const S0 = Object.getOwnPropertyNames(l.patternProperties);
        return S0.length === 1 && Y(S0[0]) && V.IsObject(l.patternProperties) && X0(l.patternProperties[S0[0]]);
      })(M);
    }
    $.TRecord = R;
    function f(M) {
      return V.IsObject(M) && (m6.Hint in M) && M[m6.Hint] === "Recursive";
    }
    $.TRecursive = f;
    function i(M) {
      return _(M, "Ref") && z(M.$id) && V.IsString(M.$ref);
    }
    $.TRef = i;
    function n(M) {
      return _(M, "String") && M.type === "string" && z(M.$id) && Q(M.minLength) && Q(M.maxLength) && U(M.pattern) && D(M.format);
    }
    $.TString = n;
    function q0(M) {
      return _(M, "Symbol") && M.type === "symbol" && z(M.$id);
    }
    $.TSymbol = q0;
    function B0(M) {
      return _(M, "TemplateLiteral") && M.type === "string" && V.IsString(M.pattern) && M.pattern[0] === "^" && M.pattern[M.pattern.length - 1] === "$";
    }
    $.TTemplateLiteral = B0;
    function D0(M) {
      return _(M, "This") && z(M.$id) && V.IsString(M.$ref);
    }
    $.TThis = D0;
    function w0(M) {
      return V.IsObject(M) && (m6.Transform in M);
    }
    $.TTransform = w0;
    function M0(M) {
      return _(M, "Tuple") && M.type === "array" && z(M.$id) && V.IsNumber(M.minItems) && V.IsNumber(M.maxItems) && M.minItems === M.maxItems && (V.IsUndefined(M.items) && V.IsUndefined(M.additionalItems) && M.minItems === 0 || V.IsArray(M.items) && M.items.every((l) => X0(l)));
    }
    $.TTuple = M0;
    function B1(M) {
      return _(M, "Undefined") && M.type === "undefined" && z(M.$id);
    }
    $.TUndefined = B1;
    function K(M) {
      return E(M) && M.anyOf.every((l) => o(l) || r(l));
    }
    $.TUnionLiteral = K;
    function E(M) {
      return _(M, "Union") && z(M.$id) && V.IsObject(M) && V.IsArray(M.anyOf) && M.anyOf.every((l) => X0(l));
    }
    $.TUnion = E;
    function L(M) {
      return _(M, "Uint8Array") && M.type === "Uint8Array" && z(M.$id) && Q(M.minByteLength) && Q(M.maxByteLength);
    }
    $.TUint8Array = L;
    function p(M) {
      return _(M, "Unknown") && z(M.$id);
    }
    $.TUnknown = p;
    function T(M) {
      return _(M, "Unsafe");
    }
    $.TUnsafe = T;
    function d(M) {
      return _(M, "Void") && M.type === "void" && z(M.$id);
    }
    $.TVoid = d;
    function W0(M) {
      return V.IsObject(M) && M[m6.Readonly] === "Readonly";
    }
    $.TReadonly = W0;
    function j0(M) {
      return V.IsObject(M) && M[m6.Optional] === "Optional";
    }
    $.TOptional = j0;
    function X0(M) {
      return V.IsObject(M) && (j(M) || b(M) || O(M) || N(M) || S(M) || P(M) || F(M) || w(M) || I(M) || G(M) || k(M) || b0(M) || E0(M) || H0(M) || z0(M) || u0(M) || a0(M) || v0(M) || R(M) || i(M) || n(M) || q0(M) || B0(M) || D0(M) || M0(M) || B1(M) || E(M) || L(M) || p(M) || T(M) || d(M) || e(M) && $8.Has(M[m6.Kind]));
    }
    $.TSchema = X0;
  })(A || (m6.TypeGuard = A = {}));
  var p6;
  (function($) {
    function Y(W) {
      return W[m6.Kind] === "Intersect" ? W.allOf.every((X) => Y(X)) : W[m6.Kind] === "Union" ? W.anyOf.some((X) => Y(X)) : W[m6.Kind] === "Undefined" ? true : W[m6.Kind] === "Not" ? !Y(W.not) : false;
    }
    $.Check = Y;
  })(p6 || (m6.ExtendsUndefined = p6 = {}));

  class Z8 extends $1 {
  }
  m6.TypeExtendsError = Z8;
  var C;
  (function($) {
    $[$.Union = 0] = "Union", $[$.True = 1] = "True", $[$.False = 2] = "False";
  })(C || (m6.TypeExtendsResult = C = {}));
  var j1;
  (function($) {
    function Y(H) {
      return H === C.False ? H : C.True;
    }
    function W(H) {
      throw new Z8(H);
    }
    function X(H) {
      return A.TNever(H) || A.TIntersect(H) || A.TUnion(H) || A.TUnknown(H) || A.TAny(H);
    }
    function Z(H, q) {
      return A.TNever(q) ? _(H, q) : A.TIntersect(q) ? w(H, q) : A.TUnion(q) ? s$(H, q) : A.TUnknown(q) ? O6(H, q) : A.TAny(q) ? Q(H, q) : W("StructuralRight");
    }
    function Q(H, q) {
      return C.True;
    }
    function J(H, q) {
      return A.TIntersect(q) ? w(H, q) : A.TUnion(q) && q.anyOf.some(($0) => A.TAny($0) || A.TUnknown($0)) ? C.True : A.TUnion(q) ? C.Union : A.TUnknown(q) ? C.True : A.TAny(q) ? C.True : C.Union;
    }
    function z(H, q) {
      return A.TUnknown(H) ? C.False : A.TAny(H) ? C.Union : A.TNever(H) ? C.True : C.False;
    }
    function U(H, q) {
      return A.TObject(q) && B0(q) ? C.True : X(q) ? Z(H, q) : !A.TArray(q) ? C.False : Y(Q0(H.items, q.items));
    }
    function D(H, q) {
      return X(q) ? Z(H, q) : !A.TAsyncIterator(q) ? C.False : Y(Q0(H.items, q.items));
    }
    function B(H, q) {
      return X(q) ? Z(H, q) : A.TObject(q) ? M0(H, q) : A.TRecord(q) ? p(H, q) : A.TBigInt(q) ? C.True : C.False;
    }
    function j(H, q) {
      return A.TLiteral(H) && V.IsBoolean(H.const) ? C.True : A.TBoolean(H) ? C.True : C.False;
    }
    function b(H, q) {
      return X(q) ? Z(H, q) : A.TObject(q) ? M0(H, q) : A.TRecord(q) ? p(H, q) : A.TBoolean(q) ? C.True : C.False;
    }
    function S(H, q) {
      return X(q) ? Z(H, q) : A.TObject(q) ? M0(H, q) : !A.TConstructor(q) ? C.False : H.parameters.length > q.parameters.length ? C.False : !H.parameters.every(($0, h0) => Y(Q0(q.parameters[h0], $0)) === C.True) ? C.False : Y(Q0(H.returns, q.returns));
    }
    function N(H, q) {
      return X(q) ? Z(H, q) : A.TObject(q) ? M0(H, q) : A.TRecord(q) ? p(H, q) : A.TDate(q) ? C.True : C.False;
    }
    function O(H, q) {
      return X(q) ? Z(H, q) : A.TObject(q) ? M0(H, q) : !A.TFunction(q) ? C.False : H.parameters.length > q.parameters.length ? C.False : !H.parameters.every(($0, h0) => Y(Q0(q.parameters[h0], $0)) === C.True) ? C.False : Y(Q0(H.returns, q.returns));
    }
    function P(H, q) {
      return A.TLiteral(H) && V.IsNumber(H.const) ? C.True : A.TNumber(H) || A.TInteger(H) ? C.True : C.False;
    }
    function F(H, q) {
      return A.TInteger(q) || A.TNumber(q) ? C.True : X(q) ? Z(H, q) : A.TObject(q) ? M0(H, q) : A.TRecord(q) ? p(H, q) : C.False;
    }
    function w(H, q) {
      return q.allOf.every(($0) => Q0(H, $0) === C.True) ? C.True : C.False;
    }
    function I(H, q) {
      return H.allOf.some(($0) => Q0($0, q) === C.True) ? C.True : C.False;
    }
    function G(H, q) {
      return X(q) ? Z(H, q) : !A.TIterator(q) ? C.False : Y(Q0(H.items, q.items));
    }
    function k(H, q) {
      return A.TLiteral(q) && q.const === H.const ? C.True : X(q) ? Z(H, q) : A.TObject(q) ? M0(H, q) : A.TRecord(q) ? p(H, q) : A.TString(q) ? d(H, q) : A.TNumber(q) ? b0(H, q) : A.TInteger(q) ? P(H, q) : A.TBoolean(q) ? j(H, q) : C.False;
    }
    function _(H, q) {
      return C.False;
    }
    function e(H, q) {
      return C.True;
    }
    function o(H) {
      let [q, $0] = [H, 0];
      while (true) {
        if (!A.TNot(q))
          break;
        q = q.not, $0 += 1;
      }
      return $0 % 2 === 0 ? q : m6.Type.Unknown();
    }
    function r(H, q) {
      return A.TNot(H) ? Q0(o(H), q) : A.TNot(q) ? Q0(H, o(q)) : W("Invalid fallthrough for Not");
    }
    function g0(H, q) {
      return X(q) ? Z(H, q) : A.TObject(q) ? M0(H, q) : A.TRecord(q) ? p(H, q) : A.TNull(q) ? C.True : C.False;
    }
    function b0(H, q) {
      return A.TLiteralNumber(H) ? C.True : A.TNumber(H) || A.TInteger(H) ? C.True : C.False;
    }
    function E0(H, q) {
      return X(q) ? Z(H, q) : A.TObject(q) ? M0(H, q) : A.TRecord(q) ? p(H, q) : A.TInteger(q) || A.TNumber(q) ? C.True : C.False;
    }
    function H0(H, q) {
      return Object.getOwnPropertyNames(H.properties).length === q;
    }
    function z0(H) {
      return B0(H);
    }
    function u0(H) {
      return H0(H, 0) || H0(H, 1) && ("description" in H.properties) && A.TUnion(H.properties.description) && H.properties.description.anyOf.length === 2 && (A.TString(H.properties.description.anyOf[0]) && A.TUndefined(H.properties.description.anyOf[1]) || A.TString(H.properties.description.anyOf[1]) && A.TUndefined(H.properties.description.anyOf[0]));
    }
    function a0(H) {
      return H0(H, 0);
    }
    function v0(H) {
      return H0(H, 0);
    }
    function R(H) {
      return H0(H, 0);
    }
    function f(H) {
      return H0(H, 0);
    }
    function i(H) {
      return B0(H);
    }
    function n(H) {
      const q = m6.Type.Number();
      return H0(H, 0) || H0(H, 1) && ("length" in H.properties) && Y(Q0(H.properties.length, q)) === C.True;
    }
    function q0(H) {
      return H0(H, 0);
    }
    function B0(H) {
      const q = m6.Type.Number();
      return H0(H, 0) || H0(H, 1) && ("length" in H.properties) && Y(Q0(H.properties.length, q)) === C.True;
    }
    function D0(H) {
      const q = m6.Type.Function([m6.Type.Any()], m6.Type.Any());
      return H0(H, 0) || H0(H, 1) && ("then" in H.properties) && Y(Q0(H.properties.then, q)) === C.True;
    }
    function w0(H, q) {
      return Q0(H, q) === C.False ? C.False : A.TOptional(H) && !A.TOptional(q) ? C.False : C.True;
    }
    function M0(H, q) {
      return A.TUnknown(H) ? C.False : A.TAny(H) ? C.Union : A.TNever(H) || A.TLiteralString(H) && z0(q) || A.TLiteralNumber(H) && a0(q) || A.TLiteralBoolean(H) && v0(q) || A.TSymbol(H) && u0(q) || A.TBigInt(H) && R(q) || A.TString(H) && z0(q) || A.TSymbol(H) && u0(q) || A.TNumber(H) && a0(q) || A.TInteger(H) && a0(q) || A.TBoolean(H) && v0(q) || A.TUint8Array(H) && i(q) || A.TDate(H) && f(q) || A.TConstructor(H) && q0(q) || A.TFunction(H) && n(q) ? C.True : A.TRecord(H) && A.TString(E(H)) ? (() => {
        return q[m6.Hint] === "Record" ? C.True : C.False;
      })() : A.TRecord(H) && A.TNumber(E(H)) ? (() => {
        return H0(q, 0) ? C.True : C.False;
      })() : C.False;
    }
    function B1(H, q) {
      return X(q) ? Z(H, q) : A.TRecord(q) ? p(H, q) : !A.TObject(q) ? C.False : (() => {
        for (let $0 of Object.getOwnPropertyNames(q.properties)) {
          if (!($0 in H.properties))
            return C.False;
          if (w0(H.properties[$0], q.properties[$0]) === C.False)
            return C.False;
        }
        return C.True;
      })();
    }
    function K(H, q) {
      return X(q) ? Z(H, q) : A.TObject(q) && D0(q) ? C.True : !A.TPromise(q) ? C.False : Y(Q0(H.item, q.item));
    }
    function E(H) {
      return m6.PatternNumberExact in H.patternProperties ? m6.Type.Number() : (m6.PatternStringExact in H.patternProperties) ? m6.Type.String() : W("Unknown record key pattern");
    }
    function L(H) {
      return m6.PatternNumberExact in H.patternProperties ? H.patternProperties[m6.PatternNumberExact] : (m6.PatternStringExact in H.patternProperties) ? H.patternProperties[m6.PatternStringExact] : W("Unable to get record value schema");
    }
    function p(H, q) {
      const [$0, h0] = [E(q), L(q)];
      return A.TLiteralString(H) && A.TNumber($0) && Y(Q0(H, h0)) === C.True ? C.True : A.TUint8Array(H) && A.TNumber($0) ? Q0(H, h0) : A.TString(H) && A.TNumber($0) ? Q0(H, h0) : A.TArray(H) && A.TNumber($0) ? Q0(H, h0) : A.TObject(H) ? (() => {
        for (let aW of Object.getOwnPropertyNames(H.properties))
          if (w0(h0, H.properties[aW]) === C.False)
            return C.False;
        return C.True;
      })() : C.False;
    }
    function T(H, q) {
      return X(q) ? Z(H, q) : A.TObject(q) ? M0(H, q) : !A.TRecord(q) ? C.False : Q0(L(H), L(q));
    }
    function d(H, q) {
      return A.TLiteral(H) && V.IsString(H.const) ? C.True : A.TString(H) ? C.True : C.False;
    }
    function W0(H, q) {
      return X(q) ? Z(H, q) : A.TObject(q) ? M0(H, q) : A.TRecord(q) ? p(H, q) : A.TString(q) ? C.True : C.False;
    }
    function j0(H, q) {
      return X(q) ? Z(H, q) : A.TObject(q) ? M0(H, q) : A.TRecord(q) ? p(H, q) : A.TSymbol(q) ? C.True : C.False;
    }
    function X0(H, q) {
      return A.TTemplateLiteral(H) ? Q0(J1.Resolve(H), q) : A.TTemplateLiteral(q) ? Q0(H, J1.Resolve(q)) : W("Invalid fallthrough for TemplateLiteral");
    }
    function M(H, q) {
      return A.TArray(q) && H.items !== undefined && H.items.every(($0) => Q0($0, q.items) === C.True);
    }
    function l(H, q) {
      return A.TNever(H) ? C.True : A.TUnknown(H) ? C.False : A.TAny(H) ? C.Union : C.False;
    }
    function S0(H, q) {
      return X(q) ? Z(H, q) : A.TObject(q) && B0(q) ? C.True : A.TArray(q) && M(H, q) ? C.True : !A.TTuple(q) ? C.False : V.IsUndefined(H.items) && !V.IsUndefined(q.items) || !V.IsUndefined(H.items) && V.IsUndefined(q.items) ? C.False : V.IsUndefined(H.items) && !V.IsUndefined(q.items) ? C.True : H.items.every(($0, h0) => Q0($0, q.items[h0]) === C.True) ? C.True : C.False;
    }
    function l$(H, q) {
      return X(q) ? Z(H, q) : A.TObject(q) ? M0(H, q) : A.TRecord(q) ? p(H, q) : A.TUint8Array(q) ? C.True : C.False;
    }
    function t$(H, q) {
      return X(q) ? Z(H, q) : A.TObject(q) ? M0(H, q) : A.TRecord(q) ? p(H, q) : A.TVoid(q) ? tW(H, q) : A.TUndefined(q) ? C.True : C.False;
    }
    function s$(H, q) {
      return q.anyOf.some(($0) => Q0(H, $0) === C.True) ? C.True : C.False;
    }
    function cW(H, q) {
      return H.anyOf.every(($0) => Q0($0, q) === C.True) ? C.True : C.False;
    }
    function O6(H, q) {
      return C.True;
    }
    function lW(H, q) {
      return A.TNever(q) ? _(H, q) : A.TIntersect(q) ? w(H, q) : A.TUnion(q) ? s$(H, q) : A.TAny(q) ? Q(H, q) : A.TString(q) ? d(H, q) : A.TNumber(q) ? b0(H, q) : A.TInteger(q) ? P(H, q) : A.TBoolean(q) ? j(H, q) : A.TArray(q) ? z(H, q) : A.TTuple(q) ? l(H, q) : A.TObject(q) ? M0(H, q) : A.TUnknown(q) ? C.True : C.False;
    }
    function tW(H, q) {
      return A.TUndefined(H) ? C.True : A.TUndefined(H) ? C.True : C.False;
    }
    function sW(H, q) {
      return A.TIntersect(q) ? w(H, q) : A.TUnion(q) ? s$(H, q) : A.TUnknown(q) ? O6(H, q) : A.TAny(q) ? Q(H, q) : A.TObject(q) ? M0(H, q) : A.TVoid(q) ? C.True : C.False;
    }
    function Q0(H, q) {
      return A.TTemplateLiteral(H) || A.TTemplateLiteral(q) ? X0(H, q) : A.TNot(H) || A.TNot(q) ? r(H, q) : A.TAny(H) ? J(H, q) : A.TArray(H) ? U(H, q) : A.TBigInt(H) ? B(H, q) : A.TBoolean(H) ? b(H, q) : A.TAsyncIterator(H) ? D(H, q) : A.TConstructor(H) ? S(H, q) : A.TDate(H) ? N(H, q) : A.TFunction(H) ? O(H, q) : A.TInteger(H) ? F(H, q) : A.TIntersect(H) ? I(H, q) : A.TIterator(H) ? G(H, q) : A.TLiteral(H) ? k(H, q) : A.TNever(H) ? e(H, q) : A.TNull(H) ? g0(H, q) : A.TNumber(H) ? E0(H, q) : A.TObject(H) ? B1(H, q) : A.TRecord(H) ? T(H, q) : A.TString(H) ? W0(H, q) : A.TSymbol(H) ? j0(H, q) : A.TTuple(H) ? S0(H, q) : A.TPromise(H) ? K(H, q) : A.TUint8Array(H) ? l$(H, q) : A.TUndefined(H) ? t$(H, q) : A.TUnion(H) ? cW(H, q) : A.TUnknown(H) ? lW(H, q) : A.TVoid(H) ? sW(H, q) : W(`Unknown left type operand '${H[m6.Kind]}'`);
    }
    function rW(H, q) {
      return Q0(H, q);
    }
    $.Extends = rW;
  })(j1 || (m6.TypeExtends = j1 = {}));
  var m;
  (function($) {
    function Y(J) {
      const z = Object.getOwnPropertyNames(J).reduce((D, B) => ({ ...D, [B]: X(J[B]) }), {}), U = Object.getOwnPropertySymbols(J).reduce((D, B) => ({ ...D, [B]: X(J[B]) }), {});
      return { ...z, ...U };
    }
    function W(J) {
      return J.map((z) => X(z));
    }
    function X(J) {
      return V.IsArray(J) ? W(J) : V.IsObject(J) ? Y(J) : J;
    }
    function Z(J) {
      return J.map((z) => Q(z));
    }
    $.Rest = Z;
    function Q(J, z = {}) {
      return { ...X(J), ...z };
    }
    $.Type = Q;
  })(m || (m6.TypeClone = m = {}));
  var Y8;
  (function($) {
    function Y(S) {
      return S.map((N) => {
        const { [m6.Optional]: O, ...P } = m.Type(N);
        return P;
      });
    }
    function W(S) {
      return S.every((N) => A.TOptional(N));
    }
    function X(S) {
      return S.some((N) => A.TOptional(N));
    }
    function Z(S) {
      return W(S.allOf) ? m6.Type.Optional(m6.Type.Intersect(Y(S.allOf))) : S;
    }
    function Q(S) {
      return X(S.anyOf) ? m6.Type.Optional(m6.Type.Union(Y(S.anyOf))) : S;
    }
    function J(S) {
      return S[m6.Kind] === "Intersect" ? Z(S) : S[m6.Kind] === "Union" ? Q(S) : S;
    }
    function z(S, N) {
      const O = S.allOf.reduce((P, F) => {
        const w = j(F, N);
        return w[m6.Kind] === "Never" ? P : [...P, w];
      }, []);
      return J(m6.Type.Intersect(O));
    }
    function U(S, N) {
      const O = S.anyOf.map((P) => j(P, N));
      return J(m6.Type.Union(O));
    }
    function D(S, N) {
      const O = S.properties[N];
      return V.IsUndefined(O) ? m6.Type.Never() : m6.Type.Union([O]);
    }
    function B(S, N) {
      const O = S.items;
      if (V.IsUndefined(O))
        return m6.Type.Never();
      const P = O[N];
      if (V.IsUndefined(P))
        return m6.Type.Never();
      return P;
    }
    function j(S, N) {
      return S[m6.Kind] === "Intersect" ? z(S, N) : S[m6.Kind] === "Union" ? U(S, N) : S[m6.Kind] === "Object" ? D(S, N) : S[m6.Kind] === "Tuple" ? B(S, N) : m6.Type.Never();
    }
    function b(S, N, O = {}) {
      const P = N.map((F) => j(S, F.toString()));
      return J(m6.Type.Union(P, O));
    }
    $.Resolve = b;
  })(Y8 || (m6.IndexedAccessor = Y8 = {}));
  var V1;
  (function($) {
    function Y(B) {
      const [j, b] = [B.slice(0, 1), B.slice(1)];
      return `${j.toLowerCase()}${b}`;
    }
    function W(B) {
      const [j, b] = [B.slice(0, 1), B.slice(1)];
      return `${j.toUpperCase()}${b}`;
    }
    function X(B) {
      return B.toUpperCase();
    }
    function Z(B) {
      return B.toLowerCase();
    }
    function Q(B, j) {
      const b = f1.ParseExact(B.pattern);
      if (!T1.Check(b))
        return { ...B, pattern: J(B.pattern, j) };
      const O = [...d1.Generate(b)].map((w) => m6.Type.Literal(w)), P = z(O, j), F = m6.Type.Union(P);
      return m6.Type.TemplateLiteral([F]);
    }
    function J(B, j) {
      return typeof B === "string" ? j === "Uncapitalize" ? Y(B) : j === "Capitalize" ? W(B) : j === "Uppercase" ? X(B) : j === "Lowercase" ? Z(B) : B : B.toString();
    }
    function z(B, j) {
      if (B.length === 0)
        return [];
      const [b, ...S] = B;
      return [D(b, j), ...z(S, j)];
    }
    function U(B, j) {
      return A.TTemplateLiteral(B) ? Q(B, j) : A.TUnion(B) ? m6.Type.Union(z(B.anyOf, j)) : A.TLiteral(B) ? m6.Type.Literal(J(B.const, j)) : B;
    }
    function D(B, j) {
      return U(B, j);
    }
    $.Map = D;
  })(V1 || (m6.Intrinsic = V1 = {}));
  var x1;
  (function($) {
    function Y(J, z) {
      return m6.Type.Intersect(J.allOf.map((U) => Z(U, z)), { ...J });
    }
    function W(J, z) {
      return m6.Type.Union(J.anyOf.map((U) => Z(U, z)), { ...J });
    }
    function X(J, z) {
      return z(J);
    }
    function Z(J, z) {
      return J[m6.Kind] === "Intersect" ? Y(J, z) : J[m6.Kind] === "Union" ? W(J, z) : J[m6.Kind] === "Object" ? X(J, z) : J;
    }
    function Q(J, z, U) {
      return { ...Z(m.Type(J), z), ...U };
    }
    $.Map = Q;
  })(x1 || (m6.ObjectMap = x1 = {}));
  var P$;
  (function($) {
    function Y(D) {
      return D[0] === "^" && D[D.length - 1] === "$" ? D.slice(1, D.length - 1) : D;
    }
    function W(D, B) {
      return D.allOf.reduce((j, b) => [...j, ...J(b, B)], []);
    }
    function X(D, B) {
      const j = D.anyOf.map((b) => J(b, B));
      return [...j.reduce((b, S) => S.map((N) => j.every((O) => O.includes(N)) ? b.add(N) : b)[0], new Set)];
    }
    function Z(D, B) {
      return Object.getOwnPropertyNames(D.properties);
    }
    function Q(D, B) {
      return B.includePatterns ? Object.getOwnPropertyNames(D.patternProperties) : [];
    }
    function J(D, B) {
      return A.TIntersect(D) ? W(D, B) : A.TUnion(D) ? X(D, B) : A.TObject(D) ? Z(D, B) : A.TRecord(D) ? Q(D, B) : [];
    }
    function z(D, B) {
      return [...new Set(J(D, B))];
    }
    $.ResolveKeys = z;
    function U(D) {
      return `^(${z(D, { includePatterns: true }).map((b) => `(${Y(b)})`).join("|")})$`;
    }
    $.ResolvePattern = U;
  })(P$ || (m6.KeyResolver = P$ = {}));

  class Q8 extends $1 {
  }
  m6.KeyArrayResolverError = Q8;
  var r1;
  (function($) {
    function Y(W) {
      return Array.isArray(W) ? W : A.TUnionLiteral(W) ? W.anyOf.map((X) => X.const.toString()) : A.TLiteral(W) ? [W.const] : A.TTemplateLiteral(W) ? (() => {
        const X = f1.ParseExact(W.pattern);
        if (!T1.Check(X))
          throw new Q8("Cannot resolve keys from infinite template expression");
        return [...d1.Generate(X)];
      })() : [];
    }
    $.Resolve = Y;
  })(r1 || (m6.KeyArrayResolver = r1 = {}));
  var W8;
  (function($) {
    function* Y(X) {
      for (let Z of X.anyOf)
        if (Z[m6.Kind] === "Union")
          yield* Y(Z);
        else
          yield Z;
    }
    function W(X) {
      return m6.Type.Union([...Y(X)], { ...X });
    }
    $.Resolve = W;
  })(W8 || (m6.UnionResolver = W8 = {}));

  class J8 extends $1 {
  }
  m6.TemplateLiteralPatternError = J8;
  var O$;
  (function($) {
    function Y(Q) {
      throw new J8(Q);
    }
    function W(Q) {
      return Q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function X(Q, J) {
      return A.TTemplateLiteral(Q) ? Q.pattern.slice(1, Q.pattern.length - 1) : A.TUnion(Q) ? `(${Q.anyOf.map((z) => X(z, J)).join("|")})` : A.TNumber(Q) ? `${J}${m6.PatternNumber}` : A.TInteger(Q) ? `${J}${m6.PatternNumber}` : A.TBigInt(Q) ? `${J}${m6.PatternNumber}` : A.TString(Q) ? `${J}${m6.PatternString}` : A.TLiteral(Q) ? `${J}${W(Q.const.toString())}` : A.TBoolean(Q) ? `${J}${m6.PatternBoolean}` : Y(`Unexpected Kind '${Q[m6.Kind]}'`);
    }
    function Z(Q) {
      return `^${Q.map((J) => X(J, "")).join("")}\$`;
    }
    $.Create = Z;
  })(O$ || (m6.TemplateLiteralPattern = O$ = {}));
  var J1;
  (function($) {
    function Y(W) {
      const X = f1.ParseExact(W.pattern);
      if (!T1.Check(X))
        return m6.Type.String();
      const Z = [...d1.Generate(X)].map((Q) => m6.Type.Literal(Q));
      return m6.Type.Union(Z);
    }
    $.Resolve = Y;
  })(J1 || (m6.TemplateLiteralResolver = J1 = {}));

  class S$ extends $1 {
  }
  m6.TemplateLiteralParserError = S$;
  var f1;
  (function($) {
    function Y(S, N, O) {
      return S[N] === O && S.charCodeAt(N - 1) !== 92;
    }
    function W(S, N) {
      return Y(S, N, "(");
    }
    function X(S, N) {
      return Y(S, N, ")");
    }
    function Z(S, N) {
      return Y(S, N, "|");
    }
    function Q(S) {
      if (!(W(S, 0) && X(S, S.length - 1)))
        return false;
      let N = 0;
      for (let O = 0;O < S.length; O++) {
        if (W(S, O))
          N += 1;
        if (X(S, O))
          N -= 1;
        if (N === 0 && O !== S.length - 1)
          return false;
      }
      return true;
    }
    function J(S) {
      return S.slice(1, S.length - 1);
    }
    function z(S) {
      let N = 0;
      for (let O = 0;O < S.length; O++) {
        if (W(S, O))
          N += 1;
        if (X(S, O))
          N -= 1;
        if (Z(S, O) && N === 0)
          return true;
      }
      return false;
    }
    function U(S) {
      for (let N = 0;N < S.length; N++)
        if (W(S, N))
          return true;
      return false;
    }
    function D(S) {
      let [N, O] = [0, 0];
      const P = [];
      for (let w = 0;w < S.length; w++) {
        if (W(S, w))
          N += 1;
        if (X(S, w))
          N -= 1;
        if (Z(S, w) && N === 0) {
          const I = S.slice(O, w);
          if (I.length > 0)
            P.push(j(I));
          O = w + 1;
        }
      }
      const F = S.slice(O);
      if (F.length > 0)
        P.push(j(F));
      if (P.length === 0)
        return { type: "const", const: "" };
      if (P.length === 1)
        return P[0];
      return { type: "or", expr: P };
    }
    function B(S) {
      function N(F, w) {
        if (!W(F, w))
          throw new S$("TemplateLiteralParser: Index must point to open parens");
        let I = 0;
        for (let G = w;G < F.length; G++) {
          if (W(F, G))
            I += 1;
          if (X(F, G))
            I -= 1;
          if (I === 0)
            return [w, G];
        }
        throw new S$("TemplateLiteralParser: Unclosed group parens in expression");
      }
      function O(F, w) {
        for (let I = w;I < F.length; I++)
          if (W(F, I))
            return [w, I];
        return [w, F.length];
      }
      const P = [];
      for (let F = 0;F < S.length; F++)
        if (W(S, F)) {
          const [w, I] = N(S, F), G = S.slice(w, I + 1);
          P.push(j(G)), F = I;
        } else {
          const [w, I] = O(S, F), G = S.slice(w, I);
          if (G.length > 0)
            P.push(j(G));
          F = I - 1;
        }
      return P.length === 0 ? { type: "const", const: "" } : P.length === 1 ? P[0] : { type: "and", expr: P };
    }
    function j(S) {
      return Q(S) ? j(J(S)) : z(S) ? D(S) : U(S) ? B(S) : { type: "const", const: S };
    }
    $.Parse = j;
    function b(S) {
      return j(S.slice(1, S.length - 1));
    }
    $.ParseExact = b;
  })(f1 || (m6.TemplateLiteralParser = f1 = {}));

  class z8 extends $1 {
  }
  m6.TemplateLiteralFiniteError = z8;
  var T1;
  (function($) {
    function Y(J) {
      throw new z8(J);
    }
    function W(J) {
      return J.type === "or" && J.expr.length === 2 && J.expr[0].type === "const" && J.expr[0].const === "0" && J.expr[1].type === "const" && J.expr[1].const === "[1-9][0-9]*";
    }
    function X(J) {
      return J.type === "or" && J.expr.length === 2 && J.expr[0].type === "const" && J.expr[0].const === "true" && J.expr[1].type === "const" && J.expr[1].const === "false";
    }
    function Z(J) {
      return J.type === "const" && J.const === ".*";
    }
    function Q(J) {
      return X(J) ? true : W(J) || Z(J) ? false : J.type === "and" ? J.expr.every((z) => Q(z)) : J.type === "or" ? J.expr.every((z) => Q(z)) : J.type === "const" ? true : Y("Unknown expression type");
    }
    $.Check = Q;
  })(T1 || (m6.TemplateLiteralFinite = T1 = {}));

  class H8 extends $1 {
  }
  m6.TemplateLiteralGeneratorError = H8;
  var d1;
  (function($) {
    function* Y(J) {
      if (J.length === 1)
        return yield* J[0];
      for (let z of J[0])
        for (let U of Y(J.slice(1)))
          yield `${z}${U}`;
    }
    function* W(J) {
      return yield* Y(J.expr.map((z) => [...Q(z)]));
    }
    function* X(J) {
      for (let z of J.expr)
        yield* Q(z);
    }
    function* Z(J) {
      return yield J.const;
    }
    function* Q(J) {
      return J.type === "and" ? yield* W(J) : J.type === "or" ? yield* X(J) : J.type === "const" ? yield* Z(J) : (() => {
        throw new H8("Unknown expression");
      })();
    }
    $.Generate = Q;
  })(d1 || (m6.TemplateLiteralGenerator = d1 = {}));
  var X8;
  (function($) {
    function* Y(Q) {
      const J = Q.trim().replace(/"|'/g, "");
      return J === "boolean" ? yield m6.Type.Boolean() : J === "number" ? yield m6.Type.Number() : J === "bigint" ? yield m6.Type.BigInt() : J === "string" ? yield m6.Type.String() : yield (() => {
        const z = J.split("|").map((U) => m6.Type.Literal(U.trim()));
        return z.length === 0 ? m6.Type.Never() : z.length === 1 ? z[0] : m6.Type.Union(z);
      })();
    }
    function* W(Q) {
      if (Q[1] !== "{") {
        const J = m6.Type.Literal("$"), z = X(Q.slice(1));
        return yield* [J, ...z];
      }
      for (let J = 2;J < Q.length; J++)
        if (Q[J] === "}") {
          const z = Y(Q.slice(2, J)), U = X(Q.slice(J + 1));
          return yield* [...z, ...U];
        }
      yield m6.Type.Literal(Q);
    }
    function* X(Q) {
      for (let J = 0;J < Q.length; J++)
        if (Q[J] === "$") {
          const z = m6.Type.Literal(Q.slice(0, J)), U = W(Q.slice(J));
          return yield* [z, ...U];
        }
      yield m6.Type.Literal(Q);
    }
    function Z(Q) {
      return [...X(Q)];
    }
    $.Parse = Z;
  })(X8 || (m6.TemplateLiteralDslParser = X8 = {}));

  class q8 {
    constructor($) {
      this.schema = $;
    }
    Decode($) {
      return new M8(this.schema, $);
    }
  }
  m6.TransformDecodeBuilder = q8;

  class M8 {
    constructor($, Y) {
      this.schema = $, this.decode = Y;
    }
    Encode($) {
      const Y = m.Type(this.schema);
      return A.TTransform(Y) ? (() => {
        const Z = { Encode: (Q) => Y[m6.Transform].Encode($(Q)), Decode: (Q) => this.decode(Y[m6.Transform].Decode(Q)) };
        return { ...Y, [m6.Transform]: Z };
      })() : (() => {
        const W = { Decode: this.decode, Encode: $ };
        return { ...Y, [m6.Transform]: W };
      })();
    }
  }
  m6.TransformEncodeBuilder = M8;
  var TX = 0;

  class N8 extends $1 {
  }
  m6.TypeBuilderError = N8;

  class F8 {
    Create($) {
      return $;
    }
    Throw($) {
      throw new N8($);
    }
    Discard($, Y) {
      return Y.reduce((W, X) => {
        const { [X]: Z, ...Q } = W;
        return Q;
      }, $);
    }
    Strict($) {
      return JSON.parse(JSON.stringify($));
    }
  }
  m6.TypeBuilder = F8;

  class L$ extends F8 {
    ReadonlyOptional($) {
      return this.Readonly(this.Optional($));
    }
    Readonly($) {
      return { ...m.Type($), [m6.Readonly]: "Readonly" };
    }
    Optional($) {
      return { ...m.Type($), [m6.Optional]: "Optional" };
    }
    Any($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "Any" });
    }
    Array($, Y = {}) {
      return this.Create({ ...Y, [m6.Kind]: "Array", type: "array", items: m.Type($) });
    }
    Boolean($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "Boolean", type: "boolean" });
    }
    Capitalize($, Y = {}) {
      return { ...V1.Map(m.Type($), "Capitalize"), ...Y };
    }
    Composite($, Y) {
      const W = m6.Type.Intersect($, {}), Z = P$.ResolveKeys(W, { includePatterns: false }).reduce((Q, J) => ({ ...Q, [J]: m6.Type.Index(W, [J]) }), {});
      return m6.Type.Object(Z, Y);
    }
    Enum($, Y = {}) {
      const W = Object.getOwnPropertyNames($).filter((Q) => isNaN(Q)).map((Q) => $[Q]), Z = [...new Set(W)].map((Q) => m6.Type.Literal(Q));
      return this.Union(Z, { ...Y, [m6.Hint]: "Enum" });
    }
    Extends($, Y, W, X, Z = {}) {
      switch (j1.Extends($, Y)) {
        case C.Union:
          return this.Union([m.Type(W, Z), m.Type(X, Z)]);
        case C.True:
          return m.Type(W, Z);
        case C.False:
          return m.Type(X, Z);
      }
    }
    Exclude($, Y, W = {}) {
      return A.TTemplateLiteral($) ? this.Exclude(J1.Resolve($), Y, W) : A.TTemplateLiteral(Y) ? this.Exclude($, J1.Resolve(Y), W) : A.TUnion($) ? (() => {
        const X = $.anyOf.filter((Z) => j1.Extends(Z, Y) === C.False);
        return X.length === 1 ? m.Type(X[0], W) : this.Union(X, W);
      })() : j1.Extends($, Y) !== C.False ? this.Never(W) : m.Type($, W);
    }
    Extract($, Y, W = {}) {
      return A.TTemplateLiteral($) ? this.Extract(J1.Resolve($), Y, W) : A.TTemplateLiteral(Y) ? this.Extract($, J1.Resolve(Y), W) : A.TUnion($) ? (() => {
        const X = $.anyOf.filter((Z) => j1.Extends(Z, Y) !== C.False);
        return X.length === 1 ? m.Type(X[0], W) : this.Union(X, W);
      })() : j1.Extends($, Y) !== C.False ? m.Type($, W) : this.Never(W);
    }
    Index($, Y, W = {}) {
      return A.TArray($) && A.TNumber(Y) ? (() => {
        return m.Type($.items, W);
      })() : A.TTuple($) && A.TNumber(Y) ? (() => {
        const Z = (V.IsUndefined($.items) ? [] : $.items).map((Q) => m.Type(Q));
        return this.Union(Z, W);
      })() : (() => {
        const X = r1.Resolve(Y), Z = m.Type($);
        return Y8.Resolve(Z, X, W);
      })();
    }
    Integer($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "Integer", type: "integer" });
    }
    Intersect($, Y = {}) {
      if ($.length === 0)
        return m6.Type.Never();
      if ($.length === 1)
        return m.Type($[0], Y);
      if ($.some((Q) => A.TTransform(Q)))
        this.Throw("Cannot intersect transform types");
      const W = $.every((Q) => A.TObject(Q)), X = m.Rest($), Z = A.TSchema(Y.unevaluatedProperties) ? { unevaluatedProperties: m.Type(Y.unevaluatedProperties) } : {};
      return Y.unevaluatedProperties === false || A.TSchema(Y.unevaluatedProperties) || W ? this.Create({ ...Y, ...Z, [m6.Kind]: "Intersect", type: "object", allOf: X }) : this.Create({ ...Y, ...Z, [m6.Kind]: "Intersect", allOf: X });
    }
    KeyOf($, Y = {}) {
      return A.TRecord($) ? (() => {
        const W = Object.getOwnPropertyNames($.patternProperties)[0];
        return W === m6.PatternNumberExact ? this.Number(Y) : W === m6.PatternStringExact ? this.String(Y) : this.Throw("Unable to resolve key type from Record key pattern");
      })() : A.TTuple($) ? (() => {
        const X = (V.IsUndefined($.items) ? [] : $.items).map((Z, Q) => m6.Type.Literal(Q.toString()));
        return this.Union(X, Y);
      })() : A.TArray($) ? (() => {
        return this.Number(Y);
      })() : (() => {
        const W = P$.ResolveKeys($, { includePatterns: false });
        if (W.length === 0)
          return this.Never(Y);
        const X = W.map((Z) => this.Literal(Z));
        return this.Union(X, Y);
      })();
    }
    Literal($, Y = {}) {
      return this.Create({ ...Y, [m6.Kind]: "Literal", const: $, type: typeof $ });
    }
    Lowercase($, Y = {}) {
      return { ...V1.Map(m.Type($), "Lowercase"), ...Y };
    }
    Never($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "Never", not: {} });
    }
    Not($, Y) {
      return this.Create({ ...Y, [m6.Kind]: "Not", not: m.Type($) });
    }
    Null($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "Null", type: "null" });
    }
    Number($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "Number", type: "number" });
    }
    Object($, Y = {}) {
      const W = Object.getOwnPropertyNames($), X = W.filter((z) => A.TOptional($[z])), Z = W.filter((z) => !X.includes(z)), Q = A.TSchema(Y.additionalProperties) ? { additionalProperties: m.Type(Y.additionalProperties) } : {}, J = W.reduce((z, U) => ({ ...z, [U]: m.Type($[U]) }), {});
      return Z.length > 0 ? this.Create({ ...Y, ...Q, [m6.Kind]: "Object", type: "object", properties: J, required: Z }) : this.Create({ ...Y, ...Q, [m6.Kind]: "Object", type: "object", properties: J });
    }
    Omit($, Y, W = {}) {
      const X = r1.Resolve(Y);
      return x1.Map(this.Discard(m.Type($), ["$id", m6.Transform]), (Z) => {
        if (V.IsArray(Z.required)) {
          if (Z.required = Z.required.filter((Q) => !X.includes(Q)), Z.required.length === 0)
            delete Z.required;
        }
        for (let Q of Object.getOwnPropertyNames(Z.properties))
          if (X.includes(Q))
            delete Z.properties[Q];
        return this.Create(Z);
      }, W);
    }
    Partial($, Y = {}) {
      return x1.Map(this.Discard(m.Type($), ["$id", m6.Transform]), (W) => {
        const X = Object.getOwnPropertyNames(W.properties).reduce((Z, Q) => {
          return { ...Z, [Q]: this.Optional(W.properties[Q]) };
        }, {});
        return this.Object(X, this.Discard(W, ["required"]));
      }, Y);
    }
    Pick($, Y, W = {}) {
      const X = r1.Resolve(Y);
      return x1.Map(this.Discard(m.Type($), ["$id", m6.Transform]), (Z) => {
        if (V.IsArray(Z.required)) {
          if (Z.required = Z.required.filter((Q) => X.includes(Q)), Z.required.length === 0)
            delete Z.required;
        }
        for (let Q of Object.getOwnPropertyNames(Z.properties))
          if (!X.includes(Q))
            delete Z.properties[Q];
        return this.Create(Z);
      }, W);
    }
    Record($, Y, W = {}) {
      return A.TTemplateLiteral($) ? (() => {
        const X = f1.ParseExact($.pattern);
        return T1.Check(X) ? this.Object([...d1.Generate(X)].reduce((Z, Q) => ({ ...Z, [Q]: m.Type(Y) }), {}), W) : this.Create({ ...W, [m6.Kind]: "Record", type: "object", patternProperties: { [$.pattern]: m.Type(Y) } });
      })() : A.TUnion($) ? (() => {
        const X = W8.Resolve($);
        if (A.TUnionLiteral(X)) {
          const Z = X.anyOf.reduce((Q, J) => ({ ...Q, [J.const]: m.Type(Y) }), {});
          return this.Object(Z, { ...W, [m6.Hint]: "Record" });
        } else
          this.Throw("Record key of type union contains non-literal types");
      })() : A.TLiteral($) ? (() => {
        return V.IsString($.const) || V.IsNumber($.const) ? this.Object({ [$.const]: m.Type(Y) }, W) : this.Throw("Record key of type literal is not of type string or number");
      })() : A.TInteger($) || A.TNumber($) ? (() => {
        return this.Create({ ...W, [m6.Kind]: "Record", type: "object", patternProperties: { [m6.PatternNumberExact]: m.Type(Y) } });
      })() : A.TString($) ? (() => {
        const X = V.IsUndefined($.pattern) ? m6.PatternStringExact : $.pattern;
        return this.Create({ ...W, [m6.Kind]: "Record", type: "object", patternProperties: { [X]: m.Type(Y) } });
      })() : this.Never();
    }
    Recursive($, Y = {}) {
      if (V.IsUndefined(Y.$id))
        Y.$id = `T${TX++}`;
      const W = $({ [m6.Kind]: "This", $ref: `${Y.$id}` });
      return W.$id = Y.$id, this.Create({ ...Y, [m6.Hint]: "Recursive", ...W });
    }
    Ref($, Y = {}) {
      if (V.IsString($))
        return this.Create({ ...Y, [m6.Kind]: "Ref", $ref: $ });
      if (V.IsUndefined($.$id))
        this.Throw("Reference target type must specify an $id");
      return this.Create({ ...Y, [m6.Kind]: "Ref", $ref: $.$id });
    }
    Required($, Y = {}) {
      return x1.Map(this.Discard(m.Type($), ["$id", m6.Transform]), (W) => {
        const X = Object.getOwnPropertyNames(W.properties).reduce((Z, Q) => {
          return { ...Z, [Q]: this.Discard(W.properties[Q], [m6.Optional]) };
        }, {});
        return this.Object(X, W);
      }, Y);
    }
    Rest($) {
      return A.TTuple($) && !V.IsUndefined($.items) ? m.Rest($.items) : A.TIntersect($) ? m.Rest($.allOf) : A.TUnion($) ? m.Rest($.anyOf) : [];
    }
    String($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "String", type: "string" });
    }
    TemplateLiteral($, Y = {}) {
      const W = V.IsString($) ? O$.Create(X8.Parse($)) : O$.Create($);
      return this.Create({ ...Y, [m6.Kind]: "TemplateLiteral", type: "string", pattern: W });
    }
    Transform($) {
      return new q8($);
    }
    Tuple($, Y = {}) {
      const [W, X, Z] = [false, $.length, $.length], Q = m.Rest($), J = $.length > 0 ? { ...Y, [m6.Kind]: "Tuple", type: "array", items: Q, additionalItems: W, minItems: X, maxItems: Z } : { ...Y, [m6.Kind]: "Tuple", type: "array", minItems: X, maxItems: Z };
      return this.Create(J);
    }
    Uncapitalize($, Y = {}) {
      return { ...V1.Map(m.Type($), "Uncapitalize"), ...Y };
    }
    Union($, Y = {}) {
      return A.TTemplateLiteral($) ? J1.Resolve($) : (() => {
        const W = $;
        if (W.length === 0)
          return this.Never(Y);
        if (W.length === 1)
          return this.Create(m.Type(W[0], Y));
        const X = m.Rest(W);
        return this.Create({ ...Y, [m6.Kind]: "Union", anyOf: X });
      })();
    }
    Unknown($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "Unknown" });
    }
    Unsafe($ = {}) {
      return this.Create({ ...$, [m6.Kind]: $[m6.Kind] || "Unsafe" });
    }
    Uppercase($, Y = {}) {
      return { ...V1.Map(m.Type($), "Uppercase"), ...Y };
    }
  }
  m6.JsonTypeBuilder = L$;

  class U8 extends L$ {
    AsyncIterator($, Y = {}) {
      return this.Create({ ...Y, [m6.Kind]: "AsyncIterator", type: "AsyncIterator", items: m.Type($) });
    }
    Awaited($, Y = {}) {
      const W = (X) => X.length > 0 ? (() => {
        const [Z, ...Q] = X;
        return [this.Awaited(Z), ...W(Q)];
      })() : X;
      return A.TIntersect($) ? m6.Type.Intersect(W($.allOf)) : A.TUnion($) ? m6.Type.Union(W($.anyOf)) : A.TPromise($) ? this.Awaited($.item) : m.Type($, Y);
    }
    BigInt($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "BigInt", type: "bigint" });
    }
    ConstructorParameters($, Y = {}) {
      return this.Tuple([...$.parameters], { ...Y });
    }
    Constructor($, Y, W) {
      const [X, Z] = [m.Rest($), m.Type(Y)];
      return this.Create({ ...W, [m6.Kind]: "Constructor", type: "Constructor", parameters: X, returns: Z });
    }
    Date($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "Date", type: "Date" });
    }
    Function($, Y, W) {
      const [X, Z] = [m.Rest($), m.Type(Y)];
      return this.Create({ ...W, [m6.Kind]: "Function", type: "Function", parameters: X, returns: Z });
    }
    InstanceType($, Y = {}) {
      return m.Type($.returns, Y);
    }
    Iterator($, Y = {}) {
      return this.Create({ ...Y, [m6.Kind]: "Iterator", type: "Iterator", items: m.Type($) });
    }
    Parameters($, Y = {}) {
      return this.Tuple($.parameters, { ...Y });
    }
    Promise($, Y = {}) {
      return this.Create({ ...Y, [m6.Kind]: "Promise", type: "Promise", item: m.Type($) });
    }
    RegExp($, Y = {}) {
      const W = V.IsString($) ? $ : $.source;
      return this.Create({ ...Y, [m6.Kind]: "String", type: "string", pattern: W });
    }
    RegEx($, Y = {}) {
      return this.RegExp($, Y);
    }
    ReturnType($, Y = {}) {
      return m.Type($.returns, Y);
    }
    Symbol($) {
      return this.Create({ ...$, [m6.Kind]: "Symbol", type: "symbol" });
    }
    Undefined($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "Undefined", type: "undefined" });
    }
    Uint8Array($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "Uint8Array", type: "Uint8Array" });
    }
    Void($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "Void", type: "void" });
    }
  }
  m6.JavaScriptTypeBuilder = U8;
  m6.JsonType = new L$;
  m6.Type = new U8;
});
var P8 = J0((n6) => {
  var w8 = function($, Y) {
    switch (Y) {
      case y.ValueErrorType.ArrayContains:
        return "Expected array to contain at least one matching value";
      case y.ValueErrorType.ArrayMaxContains:
        return `Expected array to contain no more than ${$.maxContains} matching values`;
      case y.ValueErrorType.ArrayMinContains:
        return `Expected array to contain at least ${$.minContains} matching values`;
      case y.ValueErrorType.ArrayMaxItems:
        return `Expected array length to be less or equal to ${$.maxItems}`;
      case y.ValueErrorType.ArrayMinItems:
        return `Expected array length to be greater or equal to ${$.minItems}`;
      case y.ValueErrorType.ArrayUniqueItems:
        return "Expected array elements to be unique";
      case y.ValueErrorType.Array:
        return "Expected array";
      case y.ValueErrorType.AsyncIterator:
        return "Expected AsyncIterator";
      case y.ValueErrorType.BigIntExclusiveMaximum:
        return `Expected bigint to be less than ${$.exclusiveMaximum}`;
      case y.ValueErrorType.BigIntExclusiveMinimum:
        return `Expected bigint to be greater than ${$.exclusiveMinimum}`;
      case y.ValueErrorType.BigIntMaximum:
        return `Expected bigint to be less or equal to ${$.maximum}`;
      case y.ValueErrorType.BigIntMinimum:
        return `Expected bigint to be greater or equal to ${$.minimum}`;
      case y.ValueErrorType.BigIntMultipleOf:
        return `Expected bigint to be a multiple of ${$.multipleOf}`;
      case y.ValueErrorType.BigInt:
        return "Expected bigint";
      case y.ValueErrorType.Boolean:
        return "Expected boolean";
      case y.ValueErrorType.DateExclusiveMinimumTimestamp:
        return `Expected Date timestamp to be greater than ${$.exclusiveMinimumTimestamp}`;
      case y.ValueErrorType.DateExclusiveMaximumTimestamp:
        return `Expected Date timestamp to be less than ${$.exclusiveMaximumTimestamp}`;
      case y.ValueErrorType.DateMinimumTimestamp:
        return `Expected Date timestamp to be greater or equal to ${$.minimumTimestamp}`;
      case y.ValueErrorType.DateMaximumTimestamp:
        return `Expected Date timestamp to be less or equal to ${$.maximumTimestamp}`;
      case y.ValueErrorType.DateMultipleOfTimestamp:
        return `Expected Date timestamp to be a multiple of ${$.multipleOfTimestamp}`;
      case y.ValueErrorType.Date:
        return "Expected Date";
      case y.ValueErrorType.Function:
        return "Expected function";
      case y.ValueErrorType.IntegerExclusiveMaximum:
        return `Expected integer to be less than ${$.exclusiveMaximum}`;
      case y.ValueErrorType.IntegerExclusiveMinimum:
        return `Expected integer to be greater than ${$.exclusiveMinimum}`;
      case y.ValueErrorType.IntegerMaximum:
        return `Expected integer to be less or equal to ${$.maximum}`;
      case y.ValueErrorType.IntegerMinimum:
        return `Expected integer to be greater or equal to ${$.minimum}`;
      case y.ValueErrorType.IntegerMultipleOf:
        return `Expected integer to be a multiple of ${$.multipleOf}`;
      case y.ValueErrorType.Integer:
        return "Expected integer";
      case y.ValueErrorType.IntersectUnevaluatedProperties:
        return "Unexpected property";
      case y.ValueErrorType.Intersect:
        return "Expected all values to match";
      case y.ValueErrorType.Iterator:
        return "Expected Iterator";
      case y.ValueErrorType.Literal:
        return `Expected ${typeof $.const === "string" ? `'${$.const}'` : $.const}`;
      case y.ValueErrorType.Never:
        return "Never";
      case y.ValueErrorType.Not:
        return "Value should not match";
      case y.ValueErrorType.Null:
        return "Expected null";
      case y.ValueErrorType.NumberExclusiveMaximum:
        return `Expected number to be less than ${$.exclusiveMaximum}`;
      case y.ValueErrorType.NumberExclusiveMinimum:
        return `Expected number to be greater than ${$.exclusiveMinimum}`;
      case y.ValueErrorType.NumberMaximum:
        return `Expected number to be less or equal to ${$.maximum}`;
      case y.ValueErrorType.NumberMinimum:
        return `Expected number to be greater or equal to ${$.minimum}`;
      case y.ValueErrorType.NumberMultipleOf:
        return `Expected number to be a multiple of ${$.multipleOf}`;
      case y.ValueErrorType.Number:
        return "Expected number";
      case y.ValueErrorType.Object:
        return "Expected object";
      case y.ValueErrorType.ObjectAdditionalProperties:
        return "Unexpected property";
      case y.ValueErrorType.ObjectMaxProperties:
        return `Expected object to have no more than ${$.maxProperties} properties`;
      case y.ValueErrorType.ObjectMinProperties:
        return `Expected object to have at least ${$.minProperties} properties`;
      case y.ValueErrorType.ObjectRequiredProperty:
        return "Required property";
      case y.ValueErrorType.Promise:
        return "Expected Promise";
      case y.ValueErrorType.StringFormatUnknown:
        return `Unknown format '${$.format}'`;
      case y.ValueErrorType.StringFormat:
        return `Expected string to match '${$.format}' format`;
      case y.ValueErrorType.StringMaxLength:
        return `Expected string length less or equal to ${$.maxLength}`;
      case y.ValueErrorType.StringMinLength:
        return `Expected string length greater or equal to ${$.minLength}`;
      case y.ValueErrorType.StringPattern:
        return `Expected string to match '${$.pattern}'`;
      case y.ValueErrorType.String:
        return "Expected string";
      case y.ValueErrorType.Symbol:
        return "Expected symbol";
      case y.ValueErrorType.TupleLength:
        return `Expected tuple to have ${$.maxItems || 0} elements`;
      case y.ValueErrorType.Tuple:
        return "Expected tuple";
      case y.ValueErrorType.Uint8ArrayMaxByteLength:
        return `Expected byte length less or equal to ${$.maxByteLength}`;
      case y.ValueErrorType.Uint8ArrayMinByteLength:
        return `Expected byte length greater or equal to ${$.minByteLength}`;
      case y.ValueErrorType.Uint8Array:
        return "Expected Uint8Array";
      case y.ValueErrorType.Undefined:
        return "Expected undefined";
      case y.ValueErrorType.Union:
        return "Expected union value";
      case y.ValueErrorType.Void:
        return "Expected void";
      case y.ValueErrorType.Kind:
        return `Expected kind '${$[z1.Kind]}'`;
      default:
        return "Unknown error type";
    }
  };
  Object.defineProperty(n6, "__esModule", { value: true });
  n6.DefaultErrorFunction = n6.TypeSystemPolicy = n6.TypeSystemErrorFunction = n6.TypeSystem = n6.TypeSystemDuplicateFormat = n6.TypeSystemDuplicateTypeKind = undefined;
  var C$ = x0(), y = $$(), z1 = f0();

  class K8 extends z1.TypeBoxError {
    constructor($) {
      super(`Duplicate type kind '${$}' detected`);
    }
  }
  n6.TypeSystemDuplicateTypeKind = K8;

  class j8 extends z1.TypeBoxError {
    constructor($) {
      super(`Duplicate string format '${$}' detected`);
    }
  }
  n6.TypeSystemDuplicateFormat = j8;
  var u6;
  (function($) {
    function Y(X, Z) {
      if (z1.TypeRegistry.Has(X))
        throw new K8(X);
      return z1.TypeRegistry.Set(X, Z), (Q = {}) => z1.Type.Unsafe({ ...Q, [z1.Kind]: X });
    }
    $.Type = Y;
    function W(X, Z) {
      if (z1.FormatRegistry.Has(X))
        throw new j8(X);
      return z1.FormatRegistry.Set(X, Z), X;
    }
    $.Format = W;
  })(u6 || (n6.TypeSystem = u6 = {}));
  var h6;
  (function($) {
    let Y = w8;
    function W() {
      Y = w8;
    }
    $.Reset = W;
    function X(Q) {
      Y = Q;
    }
    $.Set = X;
    function Z() {
      return Y;
    }
    $.Get = Z;
  })(h6 || (n6.TypeSystemErrorFunction = h6 = {}));
  var o6;
  (function($) {
    $.ExactOptionalPropertyTypes = false, $.AllowArrayObject = false, $.AllowNaN = false, $.AllowNullVoid = false;
    function Y(J, z) {
      return $.ExactOptionalPropertyTypes ? z in J : J[z] !== undefined;
    }
    $.IsExactOptionalProperty = Y;
    function W(J) {
      const z = (0, C$.IsObject)(J);
      return $.AllowArrayObject ? z : z && !(0, C$.IsArray)(J);
    }
    $.IsObjectLike = W;
    function X(J) {
      return W(J) && !(J instanceof Date) && !(J instanceof Uint8Array);
    }
    $.IsRecordLike = X;
    function Z(J) {
      const z = (0, C$.IsNumber)(J);
      return $.AllowNaN ? z : z && Number.isFinite(J);
    }
    $.IsNumberLike = Z;
    function Q(J) {
      const z = (0, C$.IsUndefined)(J);
      return $.AllowNullVoid ? z || J === null : z;
    }
    $.IsVoidLike = Q;
  })(o6 || (n6.TypeSystemPolicy = o6 = {}));
  n6.DefaultErrorFunction = w8;
});
var D1 = J0((l6) => {
  var IZ = function($, Y) {
    const W = Y.findIndex((X) => X.$id === $.$ref);
    if (W === -1)
      throw new O8($);
    return Y[W];
  };
  Object.defineProperty(l6, "__esModule", { value: true });
  l6.Deref = l6.TypeDereferenceError = undefined;
  var CZ = f0();

  class O8 extends CZ.TypeBoxError {
    constructor($) {
      super(`Unable to dereference schema with $id '${$.$id}'`);
      this.schema = $;
    }
  }
  l6.TypeDereferenceError = O8;
  l6.Deref = IZ;
});
var Y$ = J0((e6) => {
  function* EZ($) {
    const Y = $ === 0 ? 1 : Math.ceil(Math.floor(Math.log2($) + 1) / 8);
    for (let W = 0;W < Y; W++)
      yield $ >> 8 * (Y - 1 - W) & 255;
  }
  var VZ = function($) {
    R0(T0.Array);
    for (let Y of $)
      v1(Y);
  }, xZ = function($) {
    R0(T0.Boolean), R0($ ? 1 : 0);
  }, kZ = function($) {
    R0(T0.BigInt), r6.setBigInt64(0, $);
    for (let Y of a6)
      R0(Y);
  }, gZ = function($) {
    R0(T0.Date), v1($.getTime());
  }, fZ = function($) {
    R0(T0.Null);
  }, TZ = function($) {
    R0(T0.Number), r6.setFloat64(0, $);
    for (let Y of a6)
      R0(Y);
  }, dZ = function($) {
    R0(T0.Object);
    for (let Y of globalThis.Object.keys($).sort())
      v1(Y), v1($[Y]);
  }, yZ = function($) {
    R0(T0.String);
    for (let Y = 0;Y < $.length; Y++)
      for (let W of EZ($.charCodeAt(Y)))
        R0(W);
  }, vZ = function($) {
    R0(T0.Symbol), v1($.description);
  }, pZ = function($) {
    R0(T0.Uint8Array);
    for (let Y = 0;Y < $.length; Y++)
      R0($[Y]);
  }, iZ = function($) {
    return R0(T0.Undefined);
  }, v1 = function($) {
    if ((0, o0.IsArray)($))
      return VZ($);
    if ((0, o0.IsBoolean)($))
      return xZ($);
    if ((0, o0.IsBigInt)($))
      return kZ($);
    if ((0, o0.IsDate)($))
      return gZ($);
    if ((0, o0.IsNull)($))
      return fZ($);
    if ((0, o0.IsNumber)($))
      return TZ($);
    if ((0, o0.IsPlainObject)($))
      return dZ($);
    if ((0, o0.IsString)($))
      return yZ($);
    if ((0, o0.IsSymbol)($))
      return vZ($);
    if ((0, o0.IsUint8Array)($))
      return pZ($);
    if ((0, o0.IsUndefined)($))
      return iZ($);
    throw new S8($);
  }, R0 = function($) {
    y1 = y1 ^ _Z[$], y1 = y1 * GZ % RZ;
  }, mZ = function($) {
    return y1 = BigInt("14695981039346656037"), v1($), y1;
  };
  Object.defineProperty(e6, "__esModule", { value: true });
  e6.Hash = e6.ByteMarker = e6.ValueHashError = undefined;
  var o0 = x0();

  class S8 extends Error {
    constructor($) {
      super("Unable to hash value");
      this.value = $;
    }
  }
  e6.ValueHashError = S8;
  var T0;
  (function($) {
    $[$.Undefined = 0] = "Undefined", $[$.Null = 1] = "Null", $[$.Boolean = 2] = "Boolean", $[$.Number = 3] = "Number", $[$.String = 4] = "String", $[$.Object = 5] = "Object", $[$.Array = 6] = "Array", $[$.Date = 7] = "Date", $[$.Uint8Array = 8] = "Uint8Array", $[$.Symbol = 9] = "Symbol", $[$.BigInt = 10] = "BigInt";
  })(T0 || (e6.ByteMarker = T0 = {}));
  var y1 = BigInt("14695981039346656037"), [GZ, RZ] = [BigInt("1099511628211"), BigInt("2") ** BigInt("64")], _Z = Array.from({ length: 256 }).map(($, Y) => BigInt(Y)), s6 = new Float64Array(1), r6 = new DataView(s6.buffer), a6 = new Uint8Array(s6.buffer);
  e6.Hash = mZ;
});
var $$ = J0((WY) => {
  var t = function($) {
    return $ !== undefined;
  }, g = function($, Y, W, X) {
    return { type: $, schema: Y, path: W, value: X, message: p1.TypeSystemErrorFunction.Get()(Y, $) };
  };
  function* nZ($, Y, W, X) {
  }
  function* cZ($, Y, W, X) {
    if (!(0, U0.IsArray)(X))
      return yield g(x.Array, $, W, X);
    if (t($.minItems) && !(X.length >= $.minItems))
      yield g(x.ArrayMinItems, $, W, X);
    if (t($.maxItems) && !(X.length <= $.maxItems))
      yield g(x.ArrayMaxItems, $, W, X);
    for (let J = 0;J < X.length; J++)
      yield* L0($.items, Y, `${W}/${J}`, X[J]);
    if ($.uniqueItems === true && !function() {
      const J = new Set;
      for (let z of X) {
        const U = (0, oZ.Hash)(z);
        if (J.has(U))
          return false;
        else
          J.add(U);
      }
      return true;
    }())
      yield g(x.ArrayUniqueItems, $, W, X);
    if (!(t($.contains) || t($.minContains) || t($.maxContains)))
      return;
    const Z = t($.contains) ? $.contains : p0.Type.Never(), Q = X.reduce((J, z, U) => L0(Z, Y, `${W}${U}`, z).next().done === true ? J + 1 : J, 0);
    if (Q === 0)
      yield g(x.ArrayContains, $, W, X);
    if ((0, U0.IsNumber)($.minContains) && Q < $.minContains)
      yield g(x.ArrayMinContains, $, W, X);
    if ((0, U0.IsNumber)($.maxContains) && Q > $.maxContains)
      yield g(x.ArrayMaxContains, $, W, X);
  }
  function* lZ($, Y, W, X) {
    if (!(0, U0.IsAsyncIterator)(X))
      yield g(x.AsyncIterator, $, W, X);
  }
  function* tZ($, Y, W, X) {
    if (!(0, U0.IsBigInt)(X))
      return yield g(x.BigInt, $, W, X);
    if (t($.exclusiveMaximum) && !(X < $.exclusiveMaximum))
      yield g(x.BigIntExclusiveMaximum, $, W, X);
    if (t($.exclusiveMinimum) && !(X > $.exclusiveMinimum))
      yield g(x.BigIntExclusiveMinimum, $, W, X);
    if (t($.maximum) && !(X <= $.maximum))
      yield g(x.BigIntMaximum, $, W, X);
    if (t($.minimum) && !(X >= $.minimum))
      yield g(x.BigIntMinimum, $, W, X);
    if (t($.multipleOf) && X % $.multipleOf !== BigInt(0))
      yield g(x.BigIntMultipleOf, $, W, X);
  }
  function* sZ($, Y, W, X) {
    if (!(0, U0.IsBoolean)(X))
      yield g(x.Boolean, $, W, X);
  }
  function* rZ($, Y, W, X) {
    yield* L0($.returns, Y, W, X.prototype);
  }
  function* aZ($, Y, W, X) {
    if (!(0, U0.IsDate)(X))
      return yield g(x.Date, $, W, X);
    if (t($.exclusiveMaximumTimestamp) && !(X.getTime() < $.exclusiveMaximumTimestamp))
      yield g(x.DateExclusiveMaximumTimestamp, $, W, X);
    if (t($.exclusiveMinimumTimestamp) && !(X.getTime() > $.exclusiveMinimumTimestamp))
      yield g(x.DateExclusiveMinimumTimestamp, $, W, X);
    if (t($.maximumTimestamp) && !(X.getTime() <= $.maximumTimestamp))
      yield g(x.DateMaximumTimestamp, $, W, X);
    if (t($.minimumTimestamp) && !(X.getTime() >= $.minimumTimestamp))
      yield g(x.DateMinimumTimestamp, $, W, X);
    if (t($.multipleOfTimestamp) && X.getTime() % $.multipleOfTimestamp !== 0)
      yield g(x.DateMultipleOfTimestamp, $, W, X);
  }
  function* eZ($, Y, W, X) {
    if (!(0, U0.IsFunction)(X))
      yield g(x.Function, $, W, X);
  }
  function* $Q($, Y, W, X) {
    if (!(0, U0.IsInteger)(X))
      return yield g(x.Integer, $, W, X);
    if (t($.exclusiveMaximum) && !(X < $.exclusiveMaximum))
      yield g(x.IntegerExclusiveMaximum, $, W, X);
    if (t($.exclusiveMinimum) && !(X > $.exclusiveMinimum))
      yield g(x.IntegerExclusiveMinimum, $, W, X);
    if (t($.maximum) && !(X <= $.maximum))
      yield g(x.IntegerMaximum, $, W, X);
    if (t($.minimum) && !(X >= $.minimum))
      yield g(x.IntegerMinimum, $, W, X);
    if (t($.multipleOf) && X % $.multipleOf !== 0)
      yield g(x.IntegerMultipleOf, $, W, X);
  }
  function* YQ($, Y, W, X) {
    for (let Z of $.allOf) {
      const Q = L0(Z, Y, W, X).next();
      if (!Q.done)
        yield g(x.Intersect, $, W, X), yield Q.value;
    }
    if ($.unevaluatedProperties === false) {
      const Z = new RegExp(p0.KeyResolver.ResolvePattern($));
      for (let Q of Object.getOwnPropertyNames(X))
        if (!Z.test(Q))
          yield g(x.IntersectUnevaluatedProperties, $, `${W}/${Q}`, X);
    }
    if (typeof $.unevaluatedProperties === "object") {
      const Z = new RegExp(p0.KeyResolver.ResolvePattern($));
      for (let Q of Object.getOwnPropertyNames(X))
        if (!Z.test(Q)) {
          const J = L0($.unevaluatedProperties, Y, `${W}/${Q}`, X[Q]).next();
          if (!J.done)
            yield J.value;
        }
    }
  }
  function* WQ($, Y, W, X) {
    if (!(0, U0.IsIterator)(X))
      yield g(x.Iterator, $, W, X);
  }
  function* XQ($, Y, W, X) {
    if (X !== $.const)
      yield g(x.Literal, $, W, X);
  }
  function* ZQ($, Y, W, X) {
    yield g(x.Never, $, W, X);
  }
  function* QQ($, Y, W, X) {
    if (L0($.not, Y, W, X).next().done === true)
      yield g(x.Not, $, W, X);
  }
  function* JQ($, Y, W, X) {
    if (!(0, U0.IsNull)(X))
      yield g(x.Null, $, W, X);
  }
  function* zQ($, Y, W, X) {
    if (!p1.TypeSystemPolicy.IsNumberLike(X))
      return yield g(x.Number, $, W, X);
    if (t($.exclusiveMaximum) && !(X < $.exclusiveMaximum))
      yield g(x.NumberExclusiveMaximum, $, W, X);
    if (t($.exclusiveMinimum) && !(X > $.exclusiveMinimum))
      yield g(x.NumberExclusiveMinimum, $, W, X);
    if (t($.maximum) && !(X <= $.maximum))
      yield g(x.NumberMaximum, $, W, X);
    if (t($.minimum) && !(X >= $.minimum))
      yield g(x.NumberMinimum, $, W, X);
    if (t($.multipleOf) && X % $.multipleOf !== 0)
      yield g(x.NumberMultipleOf, $, W, X);
  }
  function* HQ($, Y, W, X) {
    if (!p1.TypeSystemPolicy.IsObjectLike(X))
      return yield g(x.Object, $, W, X);
    if (t($.minProperties) && !(Object.getOwnPropertyNames(X).length >= $.minProperties))
      yield g(x.ObjectMinProperties, $, W, X);
    if (t($.maxProperties) && !(Object.getOwnPropertyNames(X).length <= $.maxProperties))
      yield g(x.ObjectMaxProperties, $, W, X);
    const Z = Array.isArray($.required) ? $.required : [], Q = Object.getOwnPropertyNames($.properties), J = Object.getOwnPropertyNames(X);
    for (let z of Z) {
      if (J.includes(z))
        continue;
      yield g(x.ObjectRequiredProperty, $.properties[z], `${W}/${z}`, undefined);
    }
    if ($.additionalProperties === false) {
      for (let z of J)
        if (!Q.includes(z))
          yield g(x.ObjectAdditionalProperties, $, `${W}/${z}`, X[z]);
    }
    if (typeof $.additionalProperties === "object")
      for (let z of J) {
        if (Q.includes(z))
          continue;
        yield* L0($.additionalProperties, Y, `${W}/${z}`, X[z]);
      }
    for (let z of Q) {
      const U = $.properties[z];
      if ($.required && $.required.includes(z)) {
        if (yield* L0(U, Y, `${W}/${z}`, X[z]), p0.ExtendsUndefined.Check($) && !(z in X))
          yield g(x.ObjectRequiredProperty, U, `${W}/${z}`, undefined);
      } else if (p1.TypeSystemPolicy.IsExactOptionalProperty(X, z))
        yield* L0(U, Y, `${W}/${z}`, X[z]);
    }
  }
  function* qQ($, Y, W, X) {
    if (!(0, U0.IsPromise)(X))
      yield g(x.Promise, $, W, X);
  }
  function* MQ($, Y, W, X) {
    if (!p1.TypeSystemPolicy.IsRecordLike(X))
      return yield g(x.Object, $, W, X);
    if (t($.minProperties) && !(Object.getOwnPropertyNames(X).length >= $.minProperties))
      yield g(x.ObjectMinProperties, $, W, X);
    if (t($.maxProperties) && !(Object.getOwnPropertyNames(X).length <= $.maxProperties))
      yield g(x.ObjectMaxProperties, $, W, X);
    const [Z, Q] = Object.entries($.patternProperties)[0], J = new RegExp(Z);
    for (let [z, U] of Object.entries(X))
      if (J.test(z))
        yield* L0(Q, Y, `${W}/${z}`, U);
    if (typeof $.additionalProperties === "object") {
      for (let [z, U] of Object.entries(X))
        if (!J.test(z))
          yield* L0($.additionalProperties, Y, `${W}/${z}`, U);
    }
    if ($.additionalProperties === false)
      for (let [z, U] of Object.entries(X)) {
        if (J.test(z))
          continue;
        return yield g(x.ObjectAdditionalProperties, $, `${W}/${z}`, U);
      }
  }
  function* NQ($, Y, W, X) {
    yield* L0((0, YY.Deref)($, Y), Y, W, X);
  }
  function* FQ($, Y, W, X) {
    if (!(0, U0.IsString)(X))
      return yield g(x.String, $, W, X);
    if (t($.minLength) && !(X.length >= $.minLength))
      yield g(x.StringMinLength, $, W, X);
    if (t($.maxLength) && !(X.length <= $.maxLength))
      yield g(x.StringMaxLength, $, W, X);
    if ((0, U0.IsString)($.pattern)) {
      if (!new RegExp($.pattern).test(X))
        yield g(x.StringPattern, $, W, X);
    }
    if ((0, U0.IsString)($.format)) {
      if (!p0.FormatRegistry.Has($.format))
        yield g(x.StringFormatUnknown, $, W, X);
      else if (!p0.FormatRegistry.Get($.format)(X))
        yield g(x.StringFormat, $, W, X);
    }
  }
  function* UQ($, Y, W, X) {
    if (!(0, U0.IsSymbol)(X))
      yield g(x.Symbol, $, W, X);
  }
  function* AQ($, Y, W, X) {
    if (!(0, U0.IsString)(X))
      return yield g(x.String, $, W, X);
    if (!new RegExp($.pattern).test(X))
      yield g(x.StringPattern, $, W, X);
  }
  function* BQ($, Y, W, X) {
    yield* L0((0, YY.Deref)($, Y), Y, W, X);
  }
  function* DQ($, Y, W, X) {
    if (!(0, U0.IsArray)(X))
      return yield g(x.Tuple, $, W, X);
    if ($.items === undefined && X.length !== 0)
      return yield g(x.TupleLength, $, W, X);
    if (X.length !== $.maxItems)
      return yield g(x.TupleLength, $, W, X);
    if (!$.items)
      return;
    for (let Z = 0;Z < $.items.length; Z++)
      yield* L0($.items[Z], Y, `${W}/${Z}`, X[Z]);
  }
  function* wQ($, Y, W, X) {
    if (!(0, U0.IsUndefined)(X))
      yield g(x.Undefined, $, W, X);
  }
  function* KQ($, Y, W, X) {
    let Z = 0;
    for (let Q of $.anyOf) {
      const J = [...L0(Q, Y, W, X)];
      if (J.length === 0)
        return;
      Z += J.length;
    }
    if (Z > 0)
      yield g(x.Union, $, W, X);
  }
  function* jQ($, Y, W, X) {
    if (!(0, U0.IsUint8Array)(X))
      return yield g(x.Uint8Array, $, W, X);
    if (t($.maxByteLength) && !(X.length <= $.maxByteLength))
      yield g(x.Uint8ArrayMaxByteLength, $, W, X);
    if (t($.minByteLength) && !(X.length >= $.minByteLength))
      yield g(x.Uint8ArrayMinByteLength, $, W, X);
  }
  function* PQ($, Y, W, X) {
  }
  function* OQ($, Y, W, X) {
    if (!p1.TypeSystemPolicy.IsVoidLike(X))
      yield g(x.Void, $, W, X);
  }
  function* SQ($, Y, W, X) {
    if (!p0.TypeRegistry.Get($[p0.Kind])($, X))
      yield g(x.Kind, $, W, X);
  }
  function* L0($, Y, W, X) {
    const Z = t($.$id) ? [...Y, $] : Y, Q = $;
    switch (Q[p0.Kind]) {
      case "Any":
        return yield* nZ(Q, Z, W, X);
      case "Array":
        return yield* cZ(Q, Z, W, X);
      case "AsyncIterator":
        return yield* lZ(Q, Z, W, X);
      case "BigInt":
        return yield* tZ(Q, Z, W, X);
      case "Boolean":
        return yield* sZ(Q, Z, W, X);
      case "Constructor":
        return yield* rZ(Q, Z, W, X);
      case "Date":
        return yield* aZ(Q, Z, W, X);
      case "Function":
        return yield* eZ(Q, Z, W, X);
      case "Integer":
        return yield* $Q(Q, Z, W, X);
      case "Intersect":
        return yield* YQ(Q, Z, W, X);
      case "Iterator":
        return yield* WQ(Q, Z, W, X);
      case "Literal":
        return yield* XQ(Q, Z, W, X);
      case "Never":
        return yield* ZQ(Q, Z, W, X);
      case "Not":
        return yield* QQ(Q, Z, W, X);
      case "Null":
        return yield* JQ(Q, Z, W, X);
      case "Number":
        return yield* zQ(Q, Z, W, X);
      case "Object":
        return yield* HQ(Q, Z, W, X);
      case "Promise":
        return yield* qQ(Q, Z, W, X);
      case "Record":
        return yield* MQ(Q, Z, W, X);
      case "Ref":
        return yield* NQ(Q, Z, W, X);
      case "String":
        return yield* FQ(Q, Z, W, X);
      case "Symbol":
        return yield* UQ(Q, Z, W, X);
      case "TemplateLiteral":
        return yield* AQ(Q, Z, W, X);
      case "This":
        return yield* BQ(Q, Z, W, X);
      case "Tuple":
        return yield* DQ(Q, Z, W, X);
      case "Undefined":
        return yield* wQ(Q, Z, W, X);
      case "Union":
        return yield* KQ(Q, Z, W, X);
      case "Uint8Array":
        return yield* jQ(Q, Z, W, X);
      case "Unknown":
        return yield* PQ(Q, Z, W, X);
      case "Void":
        return yield* OQ(Q, Z, W, X);
      default:
        if (!p0.TypeRegistry.Has(Q[p0.Kind]))
          throw new L8($);
        return yield* SQ(Q, Z, W, X);
    }
  }
  var LQ = function(...$) {
    const Y = $.length === 3 ? L0($[0], $[1], "", $[2]) : L0($[0], [], "", $[1]);
    return new C8(Y);
  };
  Object.defineProperty(WY, "__esModule", { value: true });
  WY.Errors = WY.ValueErrorIterator = WY.ValueErrorsUnknownTypeError = WY.ValueErrorType = undefined;
  var U0 = x0(), p1 = P8(), YY = D1(), oZ = Y$(), p0 = f0(), x;
  (function($) {
    $[$.ArrayContains = 0] = "ArrayContains", $[$.ArrayMaxContains = 1] = "ArrayMaxContains", $[$.ArrayMaxItems = 2] = "ArrayMaxItems", $[$.ArrayMinContains = 3] = "ArrayMinContains", $[$.ArrayMinItems = 4] = "ArrayMinItems", $[$.ArrayUniqueItems = 5] = "ArrayUniqueItems", $[$.Array = 6] = "Array", $[$.AsyncIterator = 7] = "AsyncIterator", $[$.BigIntExclusiveMaximum = 8] = "BigIntExclusiveMaximum", $[$.BigIntExclusiveMinimum = 9] = "BigIntExclusiveMinimum", $[$.BigIntMaximum = 10] = "BigIntMaximum", $[$.BigIntMinimum = 11] = "BigIntMinimum", $[$.BigIntMultipleOf = 12] = "BigIntMultipleOf", $[$.BigInt = 13] = "BigInt", $[$.Boolean = 14] = "Boolean", $[$.DateExclusiveMaximumTimestamp = 15] = "DateExclusiveMaximumTimestamp", $[$.DateExclusiveMinimumTimestamp = 16] = "DateExclusiveMinimumTimestamp", $[$.DateMaximumTimestamp = 17] = "DateMaximumTimestamp", $[$.DateMinimumTimestamp = 18] = "DateMinimumTimestamp", $[$.DateMultipleOfTimestamp = 19] = "DateMultipleOfTimestamp", $[$.Date = 20] = "Date", $[$.Function = 21] = "Function", $[$.IntegerExclusiveMaximum = 22] = "IntegerExclusiveMaximum", $[$.IntegerExclusiveMinimum = 23] = "IntegerExclusiveMinimum", $[$.IntegerMaximum = 24] = "IntegerMaximum", $[$.IntegerMinimum = 25] = "IntegerMinimum", $[$.IntegerMultipleOf = 26] = "IntegerMultipleOf", $[$.Integer = 27] = "Integer", $[$.IntersectUnevaluatedProperties = 28] = "IntersectUnevaluatedProperties", $[$.Intersect = 29] = "Intersect", $[$.Iterator = 30] = "Iterator", $[$.Kind = 31] = "Kind", $[$.Literal = 32] = "Literal", $[$.Never = 33] = "Never", $[$.Not = 34] = "Not", $[$.Null = 35] = "Null", $[$.NumberExclusiveMaximum = 36] = "NumberExclusiveMaximum", $[$.NumberExclusiveMinimum = 37] = "NumberExclusiveMinimum", $[$.NumberMaximum = 38] = "NumberMaximum", $[$.NumberMinimum = 39] = "NumberMinimum", $[$.NumberMultipleOf = 40] = "NumberMultipleOf", $[$.Number = 41] = "Number", $[$.ObjectAdditionalProperties = 42] = "ObjectAdditionalProperties", $[$.ObjectMaxProperties = 43] = "ObjectMaxProperties", $[$.ObjectMinProperties = 44] = "ObjectMinProperties", $[$.ObjectRequiredProperty = 45] = "ObjectRequiredProperty", $[$.Object = 46] = "Object", $[$.Promise = 47] = "Promise", $[$.StringFormatUnknown = 48] = "StringFormatUnknown", $[$.StringFormat = 49] = "StringFormat", $[$.StringMaxLength = 50] = "StringMaxLength", $[$.StringMinLength = 51] = "StringMinLength", $[$.StringPattern = 52] = "StringPattern", $[$.String = 53] = "String", $[$.Symbol = 54] = "Symbol", $[$.TupleLength = 55] = "TupleLength", $[$.Tuple = 56] = "Tuple", $[$.Uint8ArrayMaxByteLength = 57] = "Uint8ArrayMaxByteLength", $[$.Uint8ArrayMinByteLength = 58] = "Uint8ArrayMinByteLength", $[$.Uint8Array = 59] = "Uint8Array", $[$.Undefined = 60] = "Undefined", $[$.Union = 61] = "Union", $[$.Void = 62] = "Void";
  })(x || (WY.ValueErrorType = x = {}));

  class L8 extends p0.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  WY.ValueErrorsUnknownTypeError = L8;

  class C8 {
    constructor($) {
      this.iterator = $;
    }
    [Symbol.iterator]() {
      return this.iterator;
    }
    First() {
      const $ = this.iterator.next();
      return $.done ? undefined : $.value;
    }
  }
  WY.ValueErrorIterator = C8;
  WY.Errors = LQ;
});
var I$ = J0((O1) => {
  var GQ = O1 && O1.__createBinding || (Object.create ? function($, Y, W, X) {
    if (X === undefined)
      X = W;
    var Z = Object.getOwnPropertyDescriptor(Y, W);
    if (!Z || ("get" in Z ? !Y.__esModule : Z.writable || Z.configurable))
      Z = { enumerable: true, get: function() {
        return Y[W];
      } };
    Object.defineProperty($, X, Z);
  } : function($, Y, W, X) {
    if (X === undefined)
      X = W;
    $[X] = Y[W];
  }), RQ = O1 && O1.__exportStar || function($, Y) {
    for (var W in $)
      if (W !== "default" && !Object.prototype.hasOwnProperty.call(Y, W))
        GQ(Y, $, W);
  };
  Object.defineProperty(O1, "__esModule", { value: true });
  RQ($$(), O1);
});
var b$ = J0((QY) => {
  Object.defineProperty(QY, "__esModule", { value: true });
  QY.ValuePointer = QY.ValuePointerRootDeleteError = QY.ValuePointerRootSetError = undefined;

  class I8 extends Error {
    constructor($, Y, W) {
      super("Cannot set root value");
      this.value = $, this.path = Y, this.update = W;
    }
  }
  QY.ValuePointerRootSetError = I8;

  class b8 extends Error {
    constructor($, Y) {
      super("Cannot delete root value");
      this.value = $, this.path = Y;
    }
  }
  QY.ValuePointerRootDeleteError = b8;
  var ZY;
  (function($) {
    function Y(z) {
      return z.indexOf("~") === -1 ? z : z.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    function* W(z) {
      if (z === "")
        return;
      let [U, D] = [0, 0];
      for (let B = 0;B < z.length; B++)
        if (z.charAt(B) === "/")
          if (B === 0)
            U = B + 1;
          else
            D = B, yield Y(z.slice(U, D)), U = B + 1;
        else
          D = B;
      yield Y(z.slice(U));
    }
    $.Format = W;
    function X(z, U, D) {
      if (U === "")
        throw new I8(z, U, D);
      let [B, j, b] = [null, z, ""];
      for (let S of W(U)) {
        if (j[S] === undefined)
          j[S] = {};
        B = j, j = j[S], b = S;
      }
      B[b] = D;
    }
    $.Set = X;
    function Z(z, U) {
      if (U === "")
        throw new b8(z, U);
      let [D, B, j] = [null, z, ""];
      for (let b of W(U)) {
        if (B[b] === undefined || B[b] === null)
          return;
        D = B, B = B[b], j = b;
      }
      if (Array.isArray(D)) {
        const b = parseInt(j);
        D.splice(b, 1);
      } else
        delete D[j];
    }
    $.Delete = Z;
    function Q(z, U) {
      if (U === "")
        return true;
      let [D, B, j] = [null, z, ""];
      for (let b of W(U)) {
        if (B[b] === undefined)
          return false;
        D = B, B = B[b], j = b;
      }
      return Object.getOwnPropertyNames(D).includes(j);
    }
    $.Has = Q;
    function J(z, U) {
      if (U === "")
        return z;
      let D = z;
      for (let B of W(U)) {
        if (D[B] === undefined)
          return;
        D = D[B];
      }
      return D;
    }
    $.Get = J;
  })(ZY || (QY.ValuePointer = ZY = {}));
});
var i1 = J0((zY) => {
  var VQ = function($) {
    return [...Object.getOwnPropertyNames($), ...Object.getOwnPropertySymbols($)].reduce((W, X) => ({ ...W, [X]: G8($[X]) }), {});
  }, xQ = function($) {
    return $.map((Y) => G8(Y));
  }, kQ = function($) {
    return $.slice();
  }, gQ = function($) {
    return new Date($.toISOString());
  }, fQ = function($) {
    return $;
  }, G8 = function($) {
    if ((0, W$.IsArray)($))
      return xQ($);
    if ((0, W$.IsDate)($))
      return gQ($);
    if ((0, W$.IsPlainObject)($))
      return VQ($);
    if ((0, W$.IsTypedArray)($))
      return kQ($);
    if ((0, W$.IsValueType)($))
      return fQ($);
    throw new Error("ValueClone: Unable to clone value");
  };
  Object.defineProperty(zY, "__esModule", { value: true });
  zY.Clone = undefined;
  var W$ = x0();
  zY.Clone = G8;
});
var V8 = J0((NY) => {
  var X$ = function($, Y) {
    return { type: "update", path: $, value: Y };
  }, qY = function($, Y) {
    return { type: "insert", path: $, value: Y };
  }, MY = function($) {
    return { type: "delete", path: $ };
  };
  function* TQ($, Y, W) {
    if (!(0, _0.IsPlainObject)(W))
      return yield X$($, W);
    const X = [...Object.keys(Y), ...Object.getOwnPropertySymbols(Y)], Z = [...Object.keys(W), ...Object.getOwnPropertySymbols(W)];
    for (let Q of X) {
      if ((0, _0.IsSymbol)(Q))
        throw new m1(Q);
      if ((0, _0.IsUndefined)(W[Q]) && Z.includes(Q))
        yield X$(`${$}/${String(Q)}`, undefined);
    }
    for (let Q of Z) {
      if ((0, _0.IsUndefined)(Y[Q]) || (0, _0.IsUndefined)(W[Q]))
        continue;
      if ((0, _0.IsSymbol)(Q))
        throw new m1(Q);
      yield* G$(`${$}/${String(Q)}`, Y[Q], W[Q]);
    }
    for (let Q of Z) {
      if ((0, _0.IsSymbol)(Q))
        throw new m1(Q);
      if ((0, _0.IsUndefined)(Y[Q]))
        yield qY(`${$}/${String(Q)}`, W[Q]);
    }
    for (let Q of X.reverse()) {
      if ((0, _0.IsSymbol)(Q))
        throw new m1(Q);
      if ((0, _0.IsUndefined)(W[Q]) && !Z.includes(Q))
        yield MY(`${$}/${String(Q)}`);
    }
  }
  function* dQ($, Y, W) {
    if (!(0, _0.IsArray)(W))
      return yield X$($, W);
    for (let X = 0;X < Math.min(Y.length, W.length); X++)
      yield* G$(`${$}/${X}`, Y[X], W[X]);
    for (let X = 0;X < W.length; X++) {
      if (X < Y.length)
        continue;
      yield qY(`${$}/${X}`, W[X]);
    }
    for (let X = Y.length - 1;X >= 0; X--) {
      if (X < W.length)
        continue;
      yield MY(`${$}/${X}`);
    }
  }
  function* yQ($, Y, W) {
    if (!(0, _0.IsTypedArray)(W) || Y.length !== W.length || Object.getPrototypeOf(Y).constructor.name !== Object.getPrototypeOf(W).constructor.name)
      return yield X$($, W);
    for (let X = 0;X < Math.min(Y.length, W.length); X++)
      yield* G$(`${$}/${X}`, Y[X], W[X]);
  }
  function* vQ($, Y, W) {
    if (Y === W)
      return;
    yield X$($, W);
  }
  function* G$($, Y, W) {
    if ((0, _0.IsPlainObject)(Y))
      return yield* TQ($, Y, W);
    if ((0, _0.IsArray)(Y))
      return yield* dQ($, Y, W);
    if ((0, _0.IsTypedArray)(Y))
      return yield* yQ($, Y, W);
    if ((0, _0.IsValueType)(Y))
      return yield* vQ($, Y, W);
    throw new E8(Y);
  }
  var pQ = function($, Y) {
    return [...G$("", $, Y)];
  }, iQ = function($) {
    return $.length > 0 && $[0].path === "" && $[0].type === "update";
  }, mQ = function($) {
    return $.length === 0;
  }, uQ = function($, Y) {
    if (iQ(Y))
      return (0, _8.Clone)(Y[0].value);
    if (mQ(Y))
      return (0, _8.Clone)($);
    const W = (0, _8.Clone)($);
    for (let X of Y)
      switch (X.type) {
        case "insert": {
          R8.ValuePointer.Set(W, X.path, X.value);
          break;
        }
        case "update": {
          R8.ValuePointer.Set(W, X.path, X.value);
          break;
        }
        case "delete": {
          R8.ValuePointer.Delete(W, X.path);
          break;
        }
      }
    return W;
  };
  Object.defineProperty(NY, "__esModule", { value: true });
  NY.Patch = NY.Diff = NY.ValueDeltaUnableToDiffUnknownValue = NY.ValueDeltaObjectWithSymbolKeyError = NY.Edit = NY.Delete = NY.Update = NY.Insert = undefined;
  var _0 = x0(), i0 = f0(), R8 = b$(), _8 = i1();
  NY.Insert = i0.Type.Object({ type: i0.Type.Literal("insert"), path: i0.Type.String(), value: i0.Type.Unknown() });
  NY.Update = i0.Type.Object({ type: i0.Type.Literal("update"), path: i0.Type.String(), value: i0.Type.Unknown() });
  NY.Delete = i0.Type.Object({ type: i0.Type.Literal("delete"), path: i0.Type.String() });
  NY.Edit = i0.Type.Union([NY.Insert, NY.Update, NY.Delete]);

  class m1 extends Error {
    constructor($) {
      super("Cannot diff objects with symbol keys");
      this.key = $;
    }
  }
  NY.ValueDeltaObjectWithSymbolKeyError = m1;

  class E8 extends Error {
    constructor($) {
      super("Unable to create diff edits for unknown value");
      this.value = $;
    }
  }
  NY.ValueDeltaUnableToDiffUnknownValue = E8;
  NY.Diff = pQ;
  NY.Patch = uQ;
});
var jY = J0((wY) => {
  var lQ = function($, Y, W, X) {
    if (!(0, d0.IsPlainObject)(W))
      R$.ValuePointer.Set($, Y, (0, x8.Clone)(X));
    else {
      const Z = Object.keys(W), Q = Object.keys(X);
      for (let J of Z)
        if (!Q.includes(J))
          delete W[J];
      for (let J of Q)
        if (!Z.includes(J))
          W[J] = null;
      for (let J of Q)
        f8($, `${Y}/${J}`, W[J], X[J]);
    }
  }, tQ = function($, Y, W, X) {
    if (!(0, d0.IsArray)(W))
      R$.ValuePointer.Set($, Y, (0, x8.Clone)(X));
    else {
      for (let Z = 0;Z < X.length; Z++)
        f8($, `${Y}/${Z}`, W[Z], X[Z]);
      W.splice(X.length);
    }
  }, sQ = function($, Y, W, X) {
    if ((0, d0.IsTypedArray)(W) && W.length === X.length)
      for (let Z = 0;Z < W.length; Z++)
        W[Z] = X[Z];
    else
      R$.ValuePointer.Set($, Y, (0, x8.Clone)(X));
  }, rQ = function($, Y, W, X) {
    if (W === X)
      return;
    R$.ValuePointer.Set($, Y, X);
  }, f8 = function($, Y, W, X) {
    if ((0, d0.IsArray)(X))
      return tQ($, Y, W, X);
    if ((0, d0.IsTypedArray)(X))
      return sQ($, Y, W, X);
    if ((0, d0.IsPlainObject)(X))
      return lQ($, Y, W, X);
    if ((0, d0.IsValueType)(X))
      return rQ($, Y, W, X);
  }, DY = function($) {
    return (0, d0.IsTypedArray)($) || (0, d0.IsValueType)($);
  }, aQ = function($, Y) {
    return (0, d0.IsPlainObject)($) && (0, d0.IsArray)(Y) || (0, d0.IsArray)($) && (0, d0.IsPlainObject)(Y);
  }, eQ = function($, Y) {
    if (DY($) || DY(Y))
      throw new g8;
    if (aQ($, Y))
      throw new k8;
    f8($, "", $, Y);
  };
  Object.defineProperty(wY, "__esModule", { value: true });
  wY.Mutate = wY.ValueMutateInvalidRootMutationError = wY.ValueMutateTypeMismatchError = undefined;
  var d0 = x0(), R$ = b$(), x8 = i1();

  class k8 extends Error {
    constructor() {
      super("Cannot assign due type mismatch of assignable values");
    }
  }
  wY.ValueMutateTypeMismatchError = k8;

  class g8 extends Error {
    constructor() {
      super("Only object and array types can be mutated at the root level");
    }
  }
  wY.ValueMutateInvalidRootMutationError = g8;
  wY.Mutate = eQ;
});
var SY = J0((PY) => {
  var W4 = function($, Y) {
    if (!(0, H1.IsPlainObject)(Y))
      return false;
    const W = [...Object.keys($), ...Object.getOwnPropertySymbols($)], X = [...Object.keys(Y), ...Object.getOwnPropertySymbols(Y)];
    if (W.length !== X.length)
      return false;
    return W.every((Z) => _$($[Z], Y[Z]));
  }, X4 = function($, Y) {
    return (0, H1.IsDate)(Y) && $.getTime() === Y.getTime();
  }, Z4 = function($, Y) {
    if (!(0, H1.IsArray)(Y) || $.length !== Y.length)
      return false;
    return $.every((W, X) => _$(W, Y[X]));
  }, Q4 = function($, Y) {
    if (!(0, H1.IsTypedArray)(Y) || $.length !== Y.length || Object.getPrototypeOf($).constructor.name !== Object.getPrototypeOf(Y).constructor.name)
      return false;
    return $.every((W, X) => _$(W, Y[X]));
  }, J4 = function($, Y) {
    return $ === Y;
  }, _$ = function($, Y) {
    if ((0, H1.IsPlainObject)($))
      return W4($, Y);
    if ((0, H1.IsDate)($))
      return X4($, Y);
    if ((0, H1.IsTypedArray)($))
      return Q4($, Y);
    if ((0, H1.IsArray)($))
      return Z4($, Y);
    if ((0, H1.IsValueType)($))
      return J4($, Y);
    throw new Error("ValueEquals: Unable to compare value");
  };
  Object.defineProperty(PY, "__esModule", { value: true });
  PY.Equal = undefined;
  var H1 = x0();
  PY.Equal = _$;
});
var E$ = J0((q1) => {
  var z4 = q1 && q1.__createBinding || (Object.create ? function($, Y, W, X) {
    if (X === undefined)
      X = W;
    var Z = Object.getOwnPropertyDescriptor(Y, W);
    if (!Z || ("get" in Z ? !Y.__esModule : Z.writable || Z.configurable))
      Z = { enumerable: true, get: function() {
        return Y[W];
      } };
    Object.defineProperty($, X, Z);
  } : function($, Y, W, X) {
    if (X === undefined)
      X = W;
    $[X] = Y[W];
  }), H4 = q1 && q1.__exportStar || function($, Y) {
    for (var W in $)
      if (W !== "default" && !Object.prototype.hasOwnProperty.call(Y, W))
        z4(Y, $, W);
  };
  Object.defineProperty(q1, "__esModule", { value: true });
  q1.ValueErrorType = undefined;
  var q4 = $$();
  Object.defineProperty(q1, "ValueErrorType", { enumerable: true, get: function() {
    return q4.ValueErrorType;
  } });
  H4(P8(), q1);
});
var Q$ = J0((CY) => {
  var N4 = function($) {
    return $[C0.Kind] === "Any" || $[C0.Kind] === "Unknown";
  }, s = function($) {
    return $ !== undefined;
  }, F4 = function($, Y, W) {
    return true;
  }, U4 = function($, Y, W) {
    if (!(0, A0.IsArray)(W))
      return false;
    if (s($.minItems) && !(W.length >= $.minItems))
      return false;
    if (s($.maxItems) && !(W.length <= $.maxItems))
      return false;
    if (!W.every((Q) => I0($.items, Y, Q)))
      return false;
    if ($.uniqueItems === true && !function() {
      const Q = new Set;
      for (let J of W) {
        const z = (0, M4.Hash)(J);
        if (Q.has(z))
          return false;
        else
          Q.add(z);
      }
      return true;
    }())
      return false;
    if (!(s($.contains) || (0, A0.IsNumber)($.minContains) || (0, A0.IsNumber)($.maxContains)))
      return true;
    const X = s($.contains) ? $.contains : C0.Type.Never(), Z = W.reduce((Q, J) => I0(X, Y, J) ? Q + 1 : Q, 0);
    if (Z === 0)
      return false;
    if ((0, A0.IsNumber)($.minContains) && Z < $.minContains)
      return false;
    if ((0, A0.IsNumber)($.maxContains) && Z > $.maxContains)
      return false;
    return true;
  }, A4 = function($, Y, W) {
    return (0, A0.IsAsyncIterator)(W);
  }, B4 = function($, Y, W) {
    if (!(0, A0.IsBigInt)(W))
      return false;
    if (s($.exclusiveMaximum) && !(W < $.exclusiveMaximum))
      return false;
    if (s($.exclusiveMinimum) && !(W > $.exclusiveMinimum))
      return false;
    if (s($.maximum) && !(W <= $.maximum))
      return false;
    if (s($.minimum) && !(W >= $.minimum))
      return false;
    if (s($.multipleOf) && W % $.multipleOf !== BigInt(0))
      return false;
    return true;
  }, D4 = function($, Y, W) {
    return (0, A0.IsBoolean)(W);
  }, w4 = function($, Y, W) {
    return I0($.returns, Y, W.prototype);
  }, K4 = function($, Y, W) {
    if (!(0, A0.IsDate)(W))
      return false;
    if (s($.exclusiveMaximumTimestamp) && !(W.getTime() < $.exclusiveMaximumTimestamp))
      return false;
    if (s($.exclusiveMinimumTimestamp) && !(W.getTime() > $.exclusiveMinimumTimestamp))
      return false;
    if (s($.maximumTimestamp) && !(W.getTime() <= $.maximumTimestamp))
      return false;
    if (s($.minimumTimestamp) && !(W.getTime() >= $.minimumTimestamp))
      return false;
    if (s($.multipleOfTimestamp) && W.getTime() % $.multipleOfTimestamp !== 0)
      return false;
    return true;
  }, j4 = function($, Y, W) {
    return (0, A0.IsFunction)(W);
  }, P4 = function($, Y, W) {
    if (!(0, A0.IsInteger)(W))
      return false;
    if (s($.exclusiveMaximum) && !(W < $.exclusiveMaximum))
      return false;
    if (s($.exclusiveMinimum) && !(W > $.exclusiveMinimum))
      return false;
    if (s($.maximum) && !(W <= $.maximum))
      return false;
    if (s($.minimum) && !(W >= $.minimum))
      return false;
    if (s($.multipleOf) && W % $.multipleOf !== 0)
      return false;
    return true;
  }, O4 = function($, Y, W) {
    const X = $.allOf.every((Z) => I0(Z, Y, W));
    if ($.unevaluatedProperties === false) {
      const Z = new RegExp(C0.KeyResolver.ResolvePattern($)), Q = Object.getOwnPropertyNames(W).every((J) => Z.test(J));
      return X && Q;
    } else if (C0.TypeGuard.TSchema($.unevaluatedProperties)) {
      const Z = new RegExp(C0.KeyResolver.ResolvePattern($)), Q = Object.getOwnPropertyNames(W).every((J) => Z.test(J) || I0($.unevaluatedProperties, Y, W[J]));
      return X && Q;
    } else
      return X;
  }, S4 = function($, Y, W) {
    return (0, A0.IsIterator)(W);
  }, L4 = function($, Y, W) {
    return W === $.const;
  }, C4 = function($, Y, W) {
    return false;
  }, I4 = function($, Y, W) {
    return !I0($.not, Y, W);
  }, b4 = function($, Y, W) {
    return (0, A0.IsNull)(W);
  }, G4 = function($, Y, W) {
    if (!Z$.TypeSystemPolicy.IsNumberLike(W))
      return false;
    if (s($.exclusiveMaximum) && !(W < $.exclusiveMaximum))
      return false;
    if (s($.exclusiveMinimum) && !(W > $.exclusiveMinimum))
      return false;
    if (s($.minimum) && !(W >= $.minimum))
      return false;
    if (s($.maximum) && !(W <= $.maximum))
      return false;
    if (s($.multipleOf) && W % $.multipleOf !== 0)
      return false;
    return true;
  }, R4 = function($, Y, W) {
    if (!Z$.TypeSystemPolicy.IsObjectLike(W))
      return false;
    if (s($.minProperties) && !(Object.getOwnPropertyNames(W).length >= $.minProperties))
      return false;
    if (s($.maxProperties) && !(Object.getOwnPropertyNames(W).length <= $.maxProperties))
      return false;
    const X = Object.getOwnPropertyNames($.properties);
    for (let Z of X) {
      const Q = $.properties[Z];
      if ($.required && $.required.includes(Z)) {
        if (!I0(Q, Y, W[Z]))
          return false;
        if ((C0.ExtendsUndefined.Check(Q) || N4(Q)) && !(Z in W))
          return false;
      } else if (Z$.TypeSystemPolicy.IsExactOptionalProperty(W, Z) && !I0(Q, Y, W[Z]))
        return false;
    }
    if ($.additionalProperties === false) {
      const Z = Object.getOwnPropertyNames(W);
      if ($.required && $.required.length === X.length && Z.length === X.length)
        return true;
      else
        return Z.every((Q) => X.includes(Q));
    } else if (typeof $.additionalProperties === "object")
      return Object.getOwnPropertyNames(W).every((Q) => X.includes(Q) || I0($.additionalProperties, Y, W[Q]));
    else
      return true;
  }, _4 = function($, Y, W) {
    return (0, A0.IsPromise)(W);
  }, E4 = function($, Y, W) {
    if (!Z$.TypeSystemPolicy.IsRecordLike(W))
      return false;
    if (s($.minProperties) && !(Object.getOwnPropertyNames(W).length >= $.minProperties))
      return false;
    if (s($.maxProperties) && !(Object.getOwnPropertyNames(W).length <= $.maxProperties))
      return false;
    const [X, Z] = Object.entries($.patternProperties)[0], Q = new RegExp(X), J = Object.entries(W).every(([D, B]) => {
      return Q.test(D) ? I0(Z, Y, B) : true;
    }), z = typeof $.additionalProperties === "object" ? Object.entries(W).every(([D, B]) => {
      return !Q.test(D) ? I0($.additionalProperties, Y, B) : true;
    }) : true, U = $.additionalProperties === false ? Object.getOwnPropertyNames(W).every((D) => {
      return Q.test(D);
    }) : true;
    return J && z && U;
  }, V4 = function($, Y, W) {
    return I0((0, LY.Deref)($, Y), Y, W);
  }, x4 = function($, Y, W) {
    if (!(0, A0.IsString)(W))
      return false;
    if (s($.minLength)) {
      if (!(W.length >= $.minLength))
        return false;
    }
    if (s($.maxLength)) {
      if (!(W.length <= $.maxLength))
        return false;
    }
    if (s($.pattern)) {
      if (!new RegExp($.pattern).test(W))
        return false;
    }
    if (s($.format)) {
      if (!C0.FormatRegistry.Has($.format))
        return false;
      return C0.FormatRegistry.Get($.format)(W);
    }
    return true;
  }, k4 = function($, Y, W) {
    return (0, A0.IsSymbol)(W);
  }, g4 = function($, Y, W) {
    return (0, A0.IsString)(W) && new RegExp($.pattern).test(W);
  }, f4 = function($, Y, W) {
    return I0((0, LY.Deref)($, Y), Y, W);
  }, T4 = function($, Y, W) {
    if (!(0, A0.IsArray)(W))
      return false;
    if ($.items === undefined && W.length !== 0)
      return false;
    if (W.length !== $.maxItems)
      return false;
    if (!$.items)
      return true;
    for (let X = 0;X < $.items.length; X++)
      if (!I0($.items[X], Y, W[X]))
        return false;
    return true;
  }, d4 = function($, Y, W) {
    return (0, A0.IsUndefined)(W);
  }, y4 = function($, Y, W) {
    return $.anyOf.some((X) => I0(X, Y, W));
  }, v4 = function($, Y, W) {
    if (!(0, A0.IsUint8Array)(W))
      return false;
    if (s($.maxByteLength) && !(W.length <= $.maxByteLength))
      return false;
    if (s($.minByteLength) && !(W.length >= $.minByteLength))
      return false;
    return true;
  }, p4 = function($, Y, W) {
    return true;
  }, i4 = function($, Y, W) {
    return Z$.TypeSystemPolicy.IsVoidLike(W);
  }, m4 = function($, Y, W) {
    if (!C0.TypeRegistry.Has($[C0.Kind]))
      return false;
    return C0.TypeRegistry.Get($[C0.Kind])($, W);
  }, I0 = function($, Y, W) {
    const X = s($.$id) ? [...Y, $] : Y, Z = $;
    switch (Z[C0.Kind]) {
      case "Any":
        return F4(Z, X, W);
      case "Array":
        return U4(Z, X, W);
      case "AsyncIterator":
        return A4(Z, X, W);
      case "BigInt":
        return B4(Z, X, W);
      case "Boolean":
        return D4(Z, X, W);
      case "Constructor":
        return w4(Z, X, W);
      case "Date":
        return K4(Z, X, W);
      case "Function":
        return j4(Z, X, W);
      case "Integer":
        return P4(Z, X, W);
      case "Intersect":
        return O4(Z, X, W);
      case "Iterator":
        return S4(Z, X, W);
      case "Literal":
        return L4(Z, X, W);
      case "Never":
        return C4(Z, X, W);
      case "Not":
        return I4(Z, X, W);
      case "Null":
        return b4(Z, X, W);
      case "Number":
        return G4(Z, X, W);
      case "Object":
        return R4(Z, X, W);
      case "Promise":
        return _4(Z, X, W);
      case "Record":
        return E4(Z, X, W);
      case "Ref":
        return V4(Z, X, W);
      case "String":
        return x4(Z, X, W);
      case "Symbol":
        return k4(Z, X, W);
      case "TemplateLiteral":
        return g4(Z, X, W);
      case "This":
        return f4(Z, X, W);
      case "Tuple":
        return T4(Z, X, W);
      case "Undefined":
        return d4(Z, X, W);
      case "Union":
        return y4(Z, X, W);
      case "Uint8Array":
        return v4(Z, X, W);
      case "Unknown":
        return p4(Z, X, W);
      case "Void":
        return i4(Z, X, W);
      default:
        if (!C0.TypeRegistry.Has(Z[C0.Kind]))
          throw new T8(Z);
        return m4(Z, X, W);
    }
  }, u4 = function(...$) {
    return $.length === 3 ? I0($[0], $[1], $[2]) : I0($[0], [], $[1]);
  };
  Object.defineProperty(CY, "__esModule", { value: true });
  CY.Check = CY.ValueCheckUnknownTypeError = undefined;
  var A0 = x0(), Z$ = E$(), LY = D1(), M4 = Y$(), C0 = f0();

  class T8 extends C0.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  CY.ValueCheckUnknownTypeError = T8;
  CY.Check = u4;
});
var u8 = J0((_Y) => {
  var n4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return {};
  }, c4 = function($, Y) {
    if ($.uniqueItems === true && !(0, a.HasPropertyKey)($, "default"))
      throw new Error("ValueCreate.Array: Array with the uniqueItems constraint requires a default value");
    else if (("contains" in $) && !(0, a.HasPropertyKey)($, "default"))
      throw new Error("ValueCreate.Array: Array with the contains constraint requires a default value");
    else if ("default" in $)
      return $.default;
    else if ($.minItems !== undefined)
      return Array.from({ length: $.minItems }).map((W) => {
        return y0($.items, Y);
      });
    else
      return [];
  }, l4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return async function* () {
      }();
  }, t4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return BigInt(0);
  }, s4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return false;
  }, r4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else {
      const W = y0($.returns, Y);
      if (typeof W === "object" && !Array.isArray(W))
        return class {
          constructor() {
            for (let [X, Z] of Object.entries(W)) {
              const Q = this;
              Q[X] = Z;
            }
          }
        };
      else
        return class {
        };
    }
  }, a4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else if ($.minimumTimestamp !== undefined)
      return new Date($.minimumTimestamp);
    else
      return new Date(0);
  }, e4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return () => y0($.returns, Y);
  }, $J = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else if ($.minimum !== undefined)
      return $.minimum;
    else
      return 0;
  }, YJ = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else {
      const W = $.allOf.reduce((X, Z) => {
        const Q = y0(Z, Y);
        return typeof Q === "object" ? { ...X, ...Q } : Q;
      }, {});
      if (!(0, o4.Check)($, Y, W))
        throw new p8($);
      return W;
    }
  }, WJ = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return function* () {
      }();
  }, XJ = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return $.const;
  }, ZJ = function($, Y) {
    throw new y8($);
  }, QJ = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      throw new v8($);
  }, JJ = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return null;
  }, zJ = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else if ($.minimum !== undefined)
      return $.minimum;
    else
      return 0;
  }, HJ = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else {
      const W = new Set($.required);
      return $.default || Object.entries($.properties).reduce((X, [Z, Q]) => {
        return W.has(Z) ? { ...X, [Z]: y0(Q, Y) } : { ...X };
      }, {});
    }
  }, qJ = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return Promise.resolve(y0($.item, Y));
  }, MJ = function($, Y) {
    const [W, X] = Object.entries($.patternProperties)[0];
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else if (!(W === k0.PatternStringExact || W === k0.PatternNumberExact))
      return W.slice(1, W.length - 1).split("|").reduce((Q, J) => {
        return { ...Q, [J]: y0(X, Y) };
      }, {});
    else
      return {};
  }, NJ = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return y0((0, GY.Deref)($, Y), Y);
  }, FJ = function($, Y) {
    if ($.pattern !== undefined)
      if (!(0, a.HasPropertyKey)($, "default"))
        throw new Error("ValueCreate.String: String types with patterns must specify a default value");
      else
        return $.default;
    else if ($.format !== undefined)
      if (!(0, a.HasPropertyKey)($, "default"))
        throw new Error("ValueCreate.String: String types with formats must specify a default value");
      else
        return $.default;
    else if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else if ($.minLength !== undefined)
      return Array.from({ length: $.minLength }).map(() => ".").join("");
    else
      return "";
  }, UJ = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else if ("value" in $)
      return Symbol.for($.value);
    else
      return Symbol();
  }, AJ = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    const W = k0.TemplateLiteralParser.ParseExact($.pattern);
    if (!k0.TemplateLiteralFinite.Check(W))
      throw new i8($);
    return k0.TemplateLiteralGenerator.Generate(W).next().value;
  }, BJ = function($, Y) {
    if (RY++ > bY)
      throw new m8($, bY);
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return y0((0, GY.Deref)($, Y), Y);
  }, DJ = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    if ($.items === undefined)
      return [];
    else
      return Array.from({ length: $.minItems }).map((W, X) => y0($.items[X], Y));
  }, wJ = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return;
  }, KJ = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else if ($.anyOf.length === 0)
      throw new Error("ValueCreate.Union: Cannot create Union with zero variants");
    else
      return y0($.anyOf[0], Y);
  }, jJ = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else if ($.minByteLength !== undefined)
      return new Uint8Array($.minByteLength);
    else
      return new Uint8Array(0);
  }, PJ = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return {};
  }, OJ = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return;
  }, SJ = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      throw new Error("User defined types must specify a default value");
  }, y0 = function($, Y) {
    const W = (0, a.IsString)($.$id) ? [...Y, $] : Y, X = $;
    switch (X[k0.Kind]) {
      case "Any":
        return n4(X, W);
      case "Array":
        return c4(X, W);
      case "AsyncIterator":
        return l4(X, W);
      case "BigInt":
        return t4(X, W);
      case "Boolean":
        return s4(X, W);
      case "Constructor":
        return r4(X, W);
      case "Date":
        return a4(X, W);
      case "Function":
        return e4(X, W);
      case "Integer":
        return $J(X, W);
      case "Intersect":
        return YJ(X, W);
      case "Iterator":
        return WJ(X, W);
      case "Literal":
        return XJ(X, W);
      case "Never":
        return ZJ(X, W);
      case "Not":
        return QJ(X, W);
      case "Null":
        return JJ(X, W);
      case "Number":
        return zJ(X, W);
      case "Object":
        return HJ(X, W);
      case "Promise":
        return qJ(X, W);
      case "Record":
        return MJ(X, W);
      case "Ref":
        return NJ(X, W);
      case "String":
        return FJ(X, W);
      case "Symbol":
        return UJ(X, W);
      case "TemplateLiteral":
        return AJ(X, W);
      case "This":
        return BJ(X, W);
      case "Tuple":
        return DJ(X, W);
      case "Undefined":
        return wJ(X, W);
      case "Union":
        return KJ(X, W);
      case "Uint8Array":
        return jJ(X, W);
      case "Unknown":
        return PJ(X, W);
      case "Void":
        return OJ(X, W);
      default:
        if (!k0.TypeRegistry.Has(X[k0.Kind]))
          throw new d8(X);
        return SJ(X, W);
    }
  }, LJ = function(...$) {
    return RY = 0, $.length === 2 ? y0($[0], $[1]) : y0($[0], []);
  };
  Object.defineProperty(_Y, "__esModule", { value: true });
  _Y.Create = _Y.ValueCreateRecursiveInstantiationError = _Y.ValueCreateTempateLiteralTypeError = _Y.ValueCreateIntersectTypeError = _Y.ValueCreateNotTypeError = _Y.ValueCreateNeverTypeError = _Y.ValueCreateUnknownTypeError = undefined;
  var a = x0(), o4 = Q$(), GY = D1(), k0 = f0();

  class d8 extends k0.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  _Y.ValueCreateUnknownTypeError = d8;

  class y8 extends k0.TypeBoxError {
    constructor($) {
      super("Never types cannot be created");
      this.schema = $;
    }
  }
  _Y.ValueCreateNeverTypeError = y8;

  class v8 extends k0.TypeBoxError {
    constructor($) {
      super("Not types must have a default value");
      this.schema = $;
    }
  }
  _Y.ValueCreateNotTypeError = v8;

  class p8 extends k0.TypeBoxError {
    constructor($) {
      super("Intersect produced invalid value. Consider using a default value.");
      this.schema = $;
    }
  }
  _Y.ValueCreateIntersectTypeError = p8;

  class i8 extends k0.TypeBoxError {
    constructor($) {
      super("Can only create template literal values from patterns that produce finite sequences. Consider using a default value.");
      this.schema = $;
    }
  }
  _Y.ValueCreateTempateLiteralTypeError = i8;

  class m8 extends k0.TypeBoxError {
    constructor($, Y) {
      super("Value cannot be created as recursive type may produce value of infinite size. Consider using a default.");
      this.schema = $, this.recursiveMaxDepth = Y;
    }
  }
  _Y.ValueCreateRecursiveInstantiationError = m8;
  var bY = 512, RY = 0;
  _Y.Create = LJ;
});
var dY = J0((fY) => {
  var kY = function($, Y, W) {
    return (0, m0.Check)($, Y, W) ? (0, u1.Clone)(W) : (0, N1.Create)($, Y);
  }, o8 = function($, Y, W) {
    return (0, m0.Check)($, Y, W) ? W : (0, N1.Create)($, Y);
  }, EJ = function($, Y, W) {
    if ((0, m0.Check)($, Y, W))
      return (0, u1.Clone)(W);
    const X = (0, w1.IsArray)(W) ? (0, u1.Clone)(W) : (0, N1.Create)($, Y), Z = (0, w1.IsNumber)($.minItems) && X.length < $.minItems ? [...X, ...Array.from({ length: $.minItems - X.length }, () => null)] : X, J = ((0, w1.IsNumber)($.maxItems) && Z.length > $.maxItems ? Z.slice(0, $.maxItems) : Z).map((U) => Y1($.items, Y, U));
    if ($.uniqueItems !== true)
      return J;
    const z = [...new Set(J)];
    if (!(0, m0.Check)($, Y, z))
      throw new n8($, z);
    return z;
  }, VJ = function($, Y, W) {
    if ((0, m0.Check)($, Y, W))
      return (0, N1.Create)($, Y);
    const X = new Set($.returns.required || []), Z = function() {
    };
    for (let [Q, J] of Object.entries($.returns.properties)) {
      if (!X.has(Q) && W.prototype[Q] === undefined)
        continue;
      Z.prototype[Q] = Y1(J, Y, W.prototype[Q]);
    }
    return Z;
  }, xJ = function($, Y, W) {
    const X = (0, N1.Create)($, Y), Z = (0, w1.IsPlainObject)(X) && (0, w1.IsPlainObject)(W) ? { ...X, ...W } : W;
    return (0, m0.Check)($, Y, Z) ? Z : (0, N1.Create)($, Y);
  }, kJ = function($, Y, W) {
    throw new c8($);
  }, gJ = function($, Y, W) {
    if ((0, m0.Check)($, Y, W))
      return W;
    if (W === null || typeof W !== "object")
      return (0, N1.Create)($, Y);
    const X = new Set($.required || []), Z = {};
    for (let [Q, J] of Object.entries($.properties)) {
      if (!X.has(Q) && W[Q] === undefined)
        continue;
      Z[Q] = Y1(J, Y, W[Q]);
    }
    if (typeof $.additionalProperties === "object") {
      const Q = Object.getOwnPropertyNames($.properties);
      for (let J of Object.getOwnPropertyNames(W)) {
        if (Q.includes(J))
          continue;
        Z[J] = Y1($.additionalProperties, Y, W[J]);
      }
    }
    return Z;
  }, fJ = function($, Y, W) {
    if ((0, m0.Check)($, Y, W))
      return (0, u1.Clone)(W);
    if (W === null || typeof W !== "object" || Array.isArray(W) || W instanceof Date)
      return (0, N1.Create)($, Y);
    const X = Object.getOwnPropertyNames($.patternProperties)[0], Z = $.patternProperties[X], Q = {};
    for (let [J, z] of Object.entries(W))
      Q[J] = Y1(Z, Y, z);
    return Q;
  }, TJ = function($, Y, W) {
    return Y1((0, VY.Deref)($, Y), Y, W);
  }, dJ = function($, Y, W) {
    return Y1((0, VY.Deref)($, Y), Y, W);
  }, yJ = function($, Y, W) {
    if ((0, m0.Check)($, Y, W))
      return (0, u1.Clone)(W);
    if (!(0, w1.IsArray)(W))
      return (0, N1.Create)($, Y);
    if ($.items === undefined)
      return [];
    return $.items.map((X, Z) => Y1(X, Y, W[Z]));
  }, vJ = function($, Y, W) {
    return (0, m0.Check)($, Y, W) ? (0, u1.Clone)(W) : h8.Create($, Y, W);
  }, Y1 = function($, Y, W) {
    const X = (0, w1.IsString)($.$id) ? [...Y, $] : Y, Z = $;
    switch ($[M1.Kind]) {
      case "Array":
        return EJ(Z, X, W);
      case "Constructor":
        return VJ(Z, X, W);
      case "Intersect":
        return xJ(Z, X, W);
      case "Never":
        return kJ(Z, X, W);
      case "Object":
        return gJ(Z, X, W);
      case "Record":
        return fJ(Z, X, W);
      case "Ref":
        return TJ(Z, X, W);
      case "This":
        return dJ(Z, X, W);
      case "Tuple":
        return yJ(Z, X, W);
      case "Union":
        return vJ(Z, X, W);
      case "Date":
      case "Symbol":
      case "Uint8Array":
        return kY($, Y, W);
      case "Any":
      case "AsyncIterator":
      case "BigInt":
      case "Boolean":
      case "Function":
      case "Integer":
      case "Iterator":
      case "Literal":
      case "Not":
      case "Null":
      case "Number":
      case "Promise":
      case "String":
      case "TemplateLiteral":
      case "Undefined":
      case "Unknown":
      case "Void":
        return o8(Z, X, W);
      default:
        if (!M1.TypeRegistry.Has(Z[M1.Kind]))
          throw new l8(Z);
        return o8(Z, X, W);
    }
  }, gY = function(...$) {
    return $.length === 3 ? Y1($[0], $[1], $[2]) : Y1($[0], [], $[1]);
  };
  Object.defineProperty(fY, "__esModule", { value: true });
  fY.Cast = fY.Default = fY.DefaultClone = fY.ValueCastUnknownTypeError = fY.ValueCastRecursiveTypeError = fY.ValueCastNeverTypeError = fY.ValueCastArrayUniqueItemsTypeError = undefined;
  var w1 = x0(), N1 = u8(), m0 = Q$(), u1 = i1(), VY = D1(), M1 = f0();

  class n8 extends M1.TypeBoxError {
    constructor($, Y) {
      super("Array cast produced invalid data due to uniqueItems constraint");
      this.schema = $, this.value = Y;
    }
  }
  fY.ValueCastArrayUniqueItemsTypeError = n8;

  class c8 extends M1.TypeBoxError {
    constructor($) {
      super("Never types cannot be cast");
      this.schema = $;
    }
  }
  fY.ValueCastNeverTypeError = c8;

  class xY extends M1.TypeBoxError {
    constructor($) {
      super("Cannot cast recursive schemas");
      this.schema = $;
    }
  }
  fY.ValueCastRecursiveTypeError = xY;

  class l8 extends M1.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  fY.ValueCastUnknownTypeError = l8;
  var h8;
  (function($) {
    function Y(Z, Q, J) {
      if (Z[M1.Kind] === "Object" && typeof J === "object" && !(0, w1.IsNull)(J)) {
        const z = Z, U = Object.getOwnPropertyNames(J), D = Object.entries(z.properties), [B, j] = [1 / D.length, D.length];
        return D.reduce((b, [S, N]) => {
          const O = N[M1.Kind] === "Literal" && N.const === J[S] ? j : 0, P = (0, m0.Check)(N, Q, J[S]) ? B : 0, F = U.includes(S) ? B : 0;
          return b + (O + P + F);
        }, 0);
      } else
        return (0, m0.Check)(Z, Q, J) ? 1 : 0;
    }
    function W(Z, Q, J) {
      let [z, U] = [Z.anyOf[0], 0];
      for (let D of Z.anyOf) {
        const B = Y(D, Q, J);
        if (B > U)
          z = D, U = B;
      }
      return z;
    }
    function X(Z, Q, J) {
      if ("default" in Z)
        return Z.default;
      else {
        const z = W(Z, Q, J);
        return gY(z, Q, J);
      }
    }
    $.Create = X;
  })(h8 || (h8 = {}));
  fY.DefaultClone = kY;
  fY.Default = o8;
  fY.Cast = gY;
});
var hY = J0((mY) => {
  var V$ = function($) {
    return (0, Z0.IsString)($) && !isNaN($) && !isNaN(parseFloat($));
  }, lJ = function($) {
    return (0, Z0.IsBigInt)($) || (0, Z0.IsBoolean)($) || (0, Z0.IsNumber)($);
  }, J$ = function($) {
    return $ === true || (0, Z0.IsNumber)($) && $ === 1 || (0, Z0.IsBigInt)($) && $ === BigInt("1") || (0, Z0.IsString)($) && ($.toLowerCase() === "true" || $ === "1");
  }, z$ = function($) {
    return $ === false || (0, Z0.IsNumber)($) && ($ === 0 || Object.is($, -0)) || (0, Z0.IsBigInt)($) && $ === BigInt("0") || (0, Z0.IsString)($) && ($.toLowerCase() === "false" || $ === "0" || $ === "-0");
  }, tJ = function($) {
    return (0, Z0.IsString)($) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test($);
  }, sJ = function($) {
    return (0, Z0.IsString)($) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test($);
  }, rJ = function($) {
    return (0, Z0.IsString)($) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test($);
  }, aJ = function($) {
    return (0, Z0.IsString)($) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test($);
  }, eJ = function($) {
    return (0, Z0.IsString)($) && /^\d\d\d\d-[0-1]\d-[0-3]\d$/i.test($);
  }, $9 = function($, Y) {
    const W = pY($);
    return W === Y ? W : $;
  }, Y9 = function($, Y) {
    const W = iY($);
    return W === Y ? W : $;
  }, W9 = function($, Y) {
    const W = vY($);
    return W === Y ? W : $;
  }, X9 = function($, Y) {
    if (typeof $.const === "string")
      return $9(Y, $.const);
    else if (typeof $.const === "number")
      return Y9(Y, $.const);
    else if (typeof $.const === "boolean")
      return W9(Y, $.const);
    else
      return (0, nJ.Clone)(Y);
  }, vY = function($) {
    return J$($) ? true : z$($) ? false : $;
  }, Z9 = function($) {
    return V$($) ? BigInt(parseInt($)) : (0, Z0.IsNumber)($) ? BigInt($ | 0) : z$($) ? BigInt(0) : J$($) ? BigInt(1) : $;
  }, pY = function($) {
    return lJ($) ? $.toString() : (0, Z0.IsSymbol)($) && $.description !== undefined ? $.description.toString() : $;
  }, iY = function($) {
    return V$($) ? parseFloat($) : J$($) ? 1 : z$($) ? 0 : $;
  }, Q9 = function($) {
    return V$($) ? parseInt($) : (0, Z0.IsNumber)($) ? $ | 0 : J$($) ? 1 : z$($) ? 0 : $;
  }, J9 = function($) {
    return (0, Z0.IsString)($) && $.toLowerCase() === "null" ? null : $;
  }, z9 = function($) {
    return (0, Z0.IsString)($) && $ === "undefined" ? undefined : $;
  }, H9 = function($) {
    return (0, Z0.IsDate)($) ? $ : (0, Z0.IsNumber)($) ? new Date($) : J$($) ? new Date(1) : z$($) ? new Date(0) : V$($) ? new Date(parseInt($)) : sJ($) ? new Date(`1970-01-01T${$}.000Z`) : tJ($) ? new Date(`1970-01-01T${$}`) : aJ($) ? new Date(`${$}.000Z`) : rJ($) ? new Date($) : eJ($) ? new Date(`${$}T00:00:00.000Z`) : $;
  }, t8 = function($) {
    return $;
  }, q9 = function($, Y, W) {
    if ((0, Z0.IsArray)(W))
      return W.map((X) => n0($.items, Y, X));
    return W;
  }, M9 = function($, Y, W) {
    return Z9(W);
  }, N9 = function($, Y, W) {
    return vY(W);
  }, F9 = function($, Y, W) {
    return H9(W);
  }, U9 = function($, Y, W) {
    return Q9(W);
  }, A9 = function($, Y, W) {
    return $.allOf.every((X) => h1.TypeGuard.TObject(X)) ? n0(h1.Type.Composite($.allOf), Y, W) : n0($.allOf[0], Y, W);
  }, B9 = function($, Y, W) {
    return X9($, W);
  }, D9 = function($, Y, W) {
    return J9(W);
  }, w9 = function($, Y, W) {
    return iY(W);
  }, K9 = function($, Y, W) {
    if ((0, Z0.IsObject)(W))
      return Object.getOwnPropertyNames($.properties).reduce((X, Z) => {
        return W[Z] !== undefined ? { ...X, [Z]: n0($.properties[Z], Y, W[Z]) } : { ...X };
      }, W);
    return W;
  }, j9 = function($, Y, W) {
    const X = Object.getOwnPropertyNames($.patternProperties)[0], Z = $.patternProperties[X], Q = {};
    for (let [J, z] of Object.entries(W))
      Q[J] = n0(Z, Y, z);
    return Q;
  }, P9 = function($, Y, W) {
    return n0((0, yY.Deref)($, Y), Y, W);
  }, O9 = function($, Y, W) {
    return pY(W);
  }, S9 = function($, Y, W) {
    return (0, Z0.IsString)(W) || (0, Z0.IsNumber)(W) ? Symbol(W) : W;
  }, L9 = function($, Y, W) {
    return n0((0, yY.Deref)($, Y), Y, W);
  }, C9 = function($, Y, W) {
    if ((0, Z0.IsArray)(W) && !(0, Z0.IsUndefined)($.items))
      return W.map((X, Z) => {
        return Z < $.items.length ? n0($.items[Z], Y, X) : X;
      });
    return W;
  }, I9 = function($, Y, W) {
    return z9(W);
  }, b9 = function($, Y, W) {
    for (let X of $.anyOf) {
      const Z = n0(X, Y, W);
      if ((0, cJ.Check)(X, Y, Z))
        return Z;
    }
    return W;
  }, n0 = function($, Y, W) {
    const X = (0, Z0.IsString)($.$id) ? [...Y, $] : Y, Z = $;
    switch ($[h1.Kind]) {
      case "Array":
        return q9(Z, X, W);
      case "BigInt":
        return M9(Z, X, W);
      case "Boolean":
        return N9(Z, X, W);
      case "Date":
        return F9(Z, X, W);
      case "Integer":
        return U9(Z, X, W);
      case "Intersect":
        return A9(Z, X, W);
      case "Literal":
        return B9(Z, X, W);
      case "Null":
        return D9(Z, X, W);
      case "Number":
        return w9(Z, X, W);
      case "Object":
        return K9(Z, X, W);
      case "Record":
        return j9(Z, X, W);
      case "Ref":
        return P9(Z, X, W);
      case "String":
        return O9(Z, X, W);
      case "Symbol":
        return S9(Z, X, W);
      case "This":
        return L9(Z, X, W);
      case "Tuple":
        return C9(Z, X, W);
      case "Undefined":
        return I9(Z, X, W);
      case "Union":
        return b9(Z, X, W);
      case "Any":
      case "AsyncIterator":
      case "Constructor":
      case "Function":
      case "Iterator":
      case "Never":
      case "Promise":
      case "TemplateLiteral":
      case "Uint8Array":
      case "Unknown":
      case "Void":
        return t8(W);
      default:
        if (!h1.TypeRegistry.Has(Z[h1.Kind]))
          throw new s8(Z);
        return t8(W);
    }
  }, G9 = function(...$) {
    return $.length === 3 ? n0($[0], $[1], $[2]) : n0($[0], [], $[1]);
  };
  Object.defineProperty(mY, "__esModule", { value: true });
  mY.Convert = mY.Default = mY.ValueConvertUnknownTypeError = undefined;
  var Z0 = x0(), nJ = i1(), cJ = Q$(), yY = D1(), h1 = f0();

  class s8 extends h1.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  mY.ValueConvertUnknownTypeError = s8;
  mY.Default = t8;
  mY.Convert = G9;
});
var e8 = J0((sY) => {
  Object.defineProperty(sY, "__esModule", { value: true });
  sY.EncodeTransform = sY.DecodeTransform = sY.HasTransform = sY.TransformEncodeError = sY.TransformDecodeError = sY.TransformEncodeCheckError = sY.TransformDecodeCheckError = sY.TransformUnknownTypeError = undefined;
  var c0 = x0(), o1 = D1(), h = f0();

  class H$ extends h.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  sY.TransformUnknownTypeError = H$;

  class lY extends h.TypeBoxError {
    constructor($, Y, W) {
      super("Unable to decode due to invalid value");
      this.schema = $, this.value = Y, this.error = W;
    }
  }
  sY.TransformDecodeCheckError = lY;

  class tY extends h.TypeBoxError {
    constructor($, Y, W) {
      super("Unable to encode due to invalid value");
      this.schema = $, this.value = Y, this.error = W;
    }
  }
  sY.TransformEncodeCheckError = tY;

  class r8 extends h.TypeBoxError {
    constructor($, Y, W) {
      super(`${W instanceof Error ? W.message : "Unknown error"}`);
      this.schema = $, this.value = Y;
    }
  }
  sY.TransformDecodeError = r8;

  class a8 extends h.TypeBoxError {
    constructor($, Y, W) {
      super(`${W instanceof Error ? W.message : "Unknown error"}`);
      this.schema = $, this.value = Y;
    }
  }
  sY.TransformEncodeError = a8;
  var oY;
  (function($) {
    function Y(w, I) {
      return h.TypeGuard.TTransform(w) || O(w.items, I);
    }
    function W(w, I) {
      return h.TypeGuard.TTransform(w) || O(w.items, I);
    }
    function X(w, I) {
      return h.TypeGuard.TTransform(w) || O(w.returns, I) || w.parameters.some((G) => O(G, I));
    }
    function Z(w, I) {
      return h.TypeGuard.TTransform(w) || O(w.returns, I) || w.parameters.some((G) => O(G, I));
    }
    function Q(w, I) {
      return h.TypeGuard.TTransform(w) || h.TypeGuard.TTransform(w.unevaluatedProperties) || w.allOf.some((G) => O(G, I));
    }
    function J(w, I) {
      return h.TypeGuard.TTransform(w) || O(w.items, I);
    }
    function z(w, I) {
      return h.TypeGuard.TTransform(w) || O(w.not, I);
    }
    function U(w, I) {
      return h.TypeGuard.TTransform(w) || Object.values(w.properties).some((G) => O(G, I)) || h.TypeGuard.TSchema(w.additionalProperties) && O(w.additionalProperties, I);
    }
    function D(w, I) {
      return h.TypeGuard.TTransform(w) || O(w.item, I);
    }
    function B(w, I) {
      const G = Object.getOwnPropertyNames(w.patternProperties)[0], k = w.patternProperties[G];
      return h.TypeGuard.TTransform(w) || O(k, I) || h.TypeGuard.TSchema(w.additionalProperties) && h.TypeGuard.TTransform(w.additionalProperties);
    }
    function j(w, I) {
      if (h.TypeGuard.TTransform(w))
        return true;
      return O((0, o1.Deref)(w, I), I);
    }
    function b(w, I) {
      if (h.TypeGuard.TTransform(w))
        return true;
      return O((0, o1.Deref)(w, I), I);
    }
    function S(w, I) {
      return h.TypeGuard.TTransform(w) || h.TypeGuard.TSchema(w.items) && w.items.some((G) => O(G, I));
    }
    function N(w, I) {
      return h.TypeGuard.TTransform(w) || w.anyOf.some((G) => O(G, I));
    }
    function O(w, I) {
      const G = (0, c0.IsString)(w.$id) ? [...I, w] : I, k = w;
      if (w.$id && P.has(w.$id))
        return false;
      if (w.$id)
        P.add(w.$id);
      switch (w[h.Kind]) {
        case "Array":
          return Y(k, G);
        case "AsyncIterator":
          return W(k, G);
        case "Constructor":
          return X(k, G);
        case "Function":
          return Z(k, G);
        case "Intersect":
          return Q(k, G);
        case "Iterator":
          return J(k, G);
        case "Not":
          return z(k, G);
        case "Object":
          return U(k, G);
        case "Promise":
          return D(k, G);
        case "Record":
          return B(k, G);
        case "Ref":
          return j(k, G);
        case "This":
          return b(k, G);
        case "Tuple":
          return S(k, G);
        case "Union":
          return N(k, G);
        case "Any":
        case "BigInt":
        case "Boolean":
        case "Date":
        case "Integer":
        case "Literal":
        case "Never":
        case "Null":
        case "Number":
        case "String":
        case "Symbol":
        case "TemplateLiteral":
        case "Undefined":
        case "Uint8Array":
        case "Unknown":
        case "Void":
          return h.TypeGuard.TTransform(w);
        default:
          if (!h.TypeRegistry.Has(k[h.Kind]))
            throw new H$(k);
          return h.TypeGuard.TTransform(w);
      }
    }
    const P = new Set;
    function F(w, I) {
      return P.clear(), O(w, I);
    }
    $.Has = F;
  })(oY || (sY.HasTransform = oY = {}));
  var nY;
  (function($) {
    function Y(N, O) {
      try {
        return h.TypeGuard.TTransform(N) ? N[h.Transform].Decode(O) : O;
      } catch (P) {
        throw new r8(N, O, P);
      }
    }
    function W(N, O, P) {
      const F = P.map((w) => j(N.items, O, w));
      return Y(N, F);
    }
    function X(N, O, P) {
      if (!(0, c0.IsPlainObject)(P) || (0, c0.IsValueType)(P))
        return Y(N, P);
      const F = h.KeyResolver.ResolveKeys(N, { includePatterns: false }), w = Object.entries(P).reduce((G, [k, _]) => {
        return !F.includes(k) ? { ...G, [k]: _ } : { ...G, [k]: Y(h.IndexedAccessor.Resolve(N, [k]), _) };
      }, {});
      if (!h.TypeGuard.TTransform(N.unevaluatedProperties))
        return Y(N, w);
      const I = Object.entries(w).reduce((G, [k, _]) => {
        return F.includes(k) ? { ...G, [k]: _ } : { ...G, [k]: Y(N.unevaluatedProperties, _) };
      }, {});
      return Y(N, I);
    }
    function Z(N, O, P) {
      const F = j(N.not, O, P);
      return Y(N, F);
    }
    function Q(N, O, P) {
      if (!(0, c0.IsPlainObject)(P))
        return Y(N, P);
      const F = Object.entries(P).reduce((G, [k, _]) => {
        return !(k in N.properties) ? { ...G, [k]: _ } : { ...G, [k]: j(N.properties[k], O, _) };
      }, {});
      if (!h.TypeGuard.TSchema(N.additionalProperties))
        return Y(N, F);
      const w = N.additionalProperties, I = Object.entries(F).reduce((G, [k, _]) => {
        return k in N.properties ? { ...G, [k]: _ } : { ...G, [k]: j(w, O, _) };
      }, {});
      return Y(N, I);
    }
    function J(N, O, P) {
      if (!(0, c0.IsPlainObject)(P))
        return Y(N, P);
      const F = Object.getOwnPropertyNames(N.patternProperties)[0], w = N.patternProperties[F], I = new RegExp(F), G = Object.entries(P).reduce((e, [o, r]) => {
        return !I.test(o) ? { ...e, [o]: r } : { ...e, [o]: j(w, O, r) };
      }, {});
      if (!h.TypeGuard.TSchema(N.additionalProperties))
        return Y(N, G);
      const k = N.additionalProperties, _ = Object.entries(G).reduce((e, [o, r]) => {
        return I.test(o) ? { ...e, [o]: r } : { ...e, [o]: j(k, O, r) };
      }, {});
      return Y(N, _);
    }
    function z(N, O, P) {
      const F = (0, o1.Deref)(N, O), w = j(F, O, P);
      return Y(N, w);
    }
    function U(N, O, P) {
      const F = (0, o1.Deref)(N, O), w = j(F, O, P);
      return Y(N, w);
    }
    function D(N, O, P) {
      const F = (0, c0.IsArray)(N.items) ? N.items.map((w, I) => j(w, O, P[I])) : [];
      return Y(N, F);
    }
    function B(N, O, P) {
      const F = Y(N, P);
      for (let w of N.anyOf) {
        if (!b(w, O, F))
          continue;
        return j(w, O, F);
      }
      return F;
    }
    function j(N, O, P) {
      const F = typeof N.$id === "string" ? [...O, N] : O, w = N;
      switch (N[h.Kind]) {
        case "Array":
          return W(w, F, P);
        case "Intersect":
          return X(w, F, P);
        case "Not":
          return Z(w, F, P);
        case "Object":
          return Q(w, F, P);
        case "Record":
          return J(w, F, P);
        case "Ref":
          return z(w, F, P);
        case "Symbol":
          return Y(w, P);
        case "This":
          return U(w, F, P);
        case "Tuple":
          return D(w, F, P);
        case "Union":
          return B(w, F, P);
        case "Any":
        case "AsyncIterator":
        case "BigInt":
        case "Boolean":
        case "Constructor":
        case "Date":
        case "Function":
        case "Integer":
        case "Iterator":
        case "Literal":
        case "Never":
        case "Null":
        case "Number":
        case "Promise":
        case "String":
        case "TemplateLiteral":
        case "Undefined":
        case "Uint8Array":
        case "Unknown":
        case "Void":
          return Y(w, P);
        default:
          if (!h.TypeRegistry.Has(w[h.Kind]))
            throw new H$(w);
          return Y(w, P);
      }
    }
    let b = () => false;
    function S(N, O, P, F) {
      return b = F, j(N, O, P);
    }
    $.Decode = S;
  })(nY || (sY.DecodeTransform = nY = {}));
  var cY;
  (function($) {
    function Y(N, O) {
      try {
        return h.TypeGuard.TTransform(N) ? N[h.Transform].Encode(O) : O;
      } catch (P) {
        throw new a8(N, O, P);
      }
    }
    function W(N, O, P) {
      return Y(N, P).map((w) => j(N.items, O, w));
    }
    function X(N, O, P) {
      const F = Y(N, P);
      if (!(0, c0.IsPlainObject)(P) || (0, c0.IsValueType)(P))
        return F;
      const w = h.KeyResolver.ResolveKeys(N, { includePatterns: false }), I = Object.entries(F).reduce((G, [k, _]) => {
        return !w.includes(k) ? { ...G, [k]: _ } : { ...G, [k]: Y(h.IndexedAccessor.Resolve(N, [k]), _) };
      }, {});
      if (!h.TypeGuard.TTransform(N.unevaluatedProperties))
        return Y(N, I);
      return Object.entries(I).reduce((G, [k, _]) => {
        return w.includes(k) ? { ...G, [k]: _ } : { ...G, [k]: Y(N.unevaluatedProperties, _) };
      }, {});
    }
    function Z(N, O, P) {
      const F = Y(N, P);
      return Y(N.not, F);
    }
    function Q(N, O, P) {
      const F = Y(N, P);
      if (!(0, c0.IsPlainObject)(P))
        return F;
      const w = Object.entries(F).reduce((G, [k, _]) => {
        return !(k in N.properties) ? { ...G, [k]: _ } : { ...G, [k]: j(N.properties[k], O, _) };
      }, {});
      if (!h.TypeGuard.TSchema(N.additionalProperties))
        return w;
      const I = N.additionalProperties;
      return Object.entries(w).reduce((G, [k, _]) => {
        return k in N.properties ? { ...G, [k]: _ } : { ...G, [k]: j(I, O, _) };
      }, {});
    }
    function J(N, O, P) {
      const F = Y(N, P);
      if (!(0, c0.IsPlainObject)(P))
        return F;
      const w = Object.getOwnPropertyNames(N.patternProperties)[0], I = N.patternProperties[w], G = new RegExp(w), k = Object.entries(F).reduce((e, [o, r]) => {
        return !G.test(o) ? { ...e, [o]: r } : { ...e, [o]: j(I, O, r) };
      }, {});
      if (!h.TypeGuard.TSchema(N.additionalProperties))
        return Y(N, k);
      const _ = N.additionalProperties;
      return Object.entries(k).reduce((e, [o, r]) => {
        return G.test(o) ? { ...e, [o]: r } : { ...e, [o]: j(_, O, r) };
      }, {});
    }
    function z(N, O, P) {
      const F = (0, o1.Deref)(N, O), w = j(F, O, P);
      return Y(N, w);
    }
    function U(N, O, P) {
      const F = (0, o1.Deref)(N, O), w = j(F, O, P);
      return Y(N, w);
    }
    function D(N, O, P) {
      const F = Y(N, P);
      return (0, c0.IsArray)(N.items) ? N.items.map((w, I) => j(w, O, F[I])) : [];
    }
    function B(N, O, P) {
      for (let F of N.anyOf) {
        if (!b(F, O, P))
          continue;
        const w = j(F, O, P);
        return Y(N, w);
      }
      return Y(N, P);
    }
    function j(N, O, P) {
      const F = typeof N.$id === "string" ? [...O, N] : O, w = N;
      switch (N[h.Kind]) {
        case "Array":
          return W(w, F, P);
        case "Intersect":
          return X(w, F, P);
        case "Not":
          return Z(w, F, P);
        case "Object":
          return Q(w, F, P);
        case "Record":
          return J(w, F, P);
        case "Ref":
          return z(w, F, P);
        case "This":
          return U(w, F, P);
        case "Tuple":
          return D(w, F, P);
        case "Union":
          return B(w, F, P);
        case "Any":
        case "AsyncIterator":
        case "BigInt":
        case "Boolean":
        case "Constructor":
        case "Date":
        case "Function":
        case "Integer":
        case "Iterator":
        case "Literal":
        case "Never":
        case "Null":
        case "Number":
        case "Promise":
        case "String":
        case "Symbol":
        case "TemplateLiteral":
        case "Undefined":
        case "Uint8Array":
        case "Unknown":
        case "Void":
          return Y(w, P);
        default:
          if (!h.TypeRegistry.Has(w[h.Kind]))
            throw new H$(w);
          return Y(w, P);
      }
    }
    let b = () => false;
    function S(N, O, P, F) {
      return b = F, j(N, O, P);
    }
    $.Encode = S;
  })(cY || (sY.EncodeTransform = cY = {}));
});
var JW = J0((ZW) => {
  Object.defineProperty(ZW, "__esModule", { value: true });
  ZW.Value = undefined;
  var aY = I$(), d9 = jY(), y9 = Y$(), v9 = SY(), eY = dY(), p9 = i1(), $W = hY(), YW = u8(), x$ = Q$(), WW = V8(), k$ = e8(), XW;
  (function($) {
    function Y(...N) {
      return eY.Cast.apply(eY, N);
    }
    $.Cast = Y;
    function W(...N) {
      return YW.Create.apply(YW, N);
    }
    $.Create = W;
    function X(...N) {
      return x$.Check.apply(x$, N);
    }
    $.Check = X;
    function Z(...N) {
      return $W.Convert.apply($W, N);
    }
    $.Convert = Z;
    function Q(N) {
      return p9.Clone(N);
    }
    $.Clone = Q;
    function J(...N) {
      const [O, P, F] = N.length === 3 ? [N[0], N[1], N[2]] : [N[0], [], N[1]];
      if (!X(O, P, F))
        throw new k$.TransformDecodeCheckError(O, F, U(O, P, F).First());
      return k$.DecodeTransform.Decode(O, P, F, x$.Check);
    }
    $.Decode = J;
    function z(...N) {
      const [O, P, F] = N.length === 3 ? [N[0], N[1], N[2]] : [N[0], [], N[1]], w = k$.EncodeTransform.Encode(O, P, F, x$.Check);
      if (!X(O, P, w))
        throw new k$.TransformEncodeCheckError(O, F, U(O, P, F).First());
      return w;
    }
    $.Encode = z;
    function U(...N) {
      return aY.Errors.apply(aY, N);
    }
    $.Errors = U;
    function D(N, O) {
      return v9.Equal(N, O);
    }
    $.Equal = D;
    function B(N, O) {
      return WW.Diff(N, O);
    }
    $.Diff = B;
    function j(N) {
      return y9.Hash(N);
    }
    $.Hash = j;
    function b(N, O) {
      return WW.Patch(N, O);
    }
    $.Patch = b;
    function S(N, O) {
      d9.Mutate(N, O);
    }
    $.Mutate = S;
  })(XW || (ZW.Value = XW = {}));
});
var $6 = J0((W1) => {
  Object.defineProperty(W1, "__esModule", { value: true });
  W1.Value = W1.ValuePointer = W1.Delete = W1.Update = W1.Insert = W1.Edit = W1.ValueErrorIterator = W1.ValueErrorType = undefined;
  var zW = I$();
  Object.defineProperty(W1, "ValueErrorType", { enumerable: true, get: function() {
    return zW.ValueErrorType;
  } });
  Object.defineProperty(W1, "ValueErrorIterator", { enumerable: true, get: function() {
    return zW.ValueErrorIterator;
  } });
  var g$ = V8();
  Object.defineProperty(W1, "Edit", { enumerable: true, get: function() {
    return g$.Edit;
  } });
  Object.defineProperty(W1, "Insert", { enumerable: true, get: function() {
    return g$.Insert;
  } });
  Object.defineProperty(W1, "Update", { enumerable: true, get: function() {
    return g$.Update;
  } });
  Object.defineProperty(W1, "Delete", { enumerable: true, get: function() {
    return g$.Delete;
  } });
  var i9 = b$();
  Object.defineProperty(W1, "ValuePointer", { enumerable: true, get: function() {
    return i9.ValuePointer;
  } });
  var m9 = JW();
  Object.defineProperty(W1, "Value", { enumerable: true, get: function() {
    return m9.Value;
  } });
});
var UW = J0((NW) => {
  Object.defineProperty(NW, "__esModule", { value: true });
  NW.TypeCompiler = NW.Policy = NW.TypeCompilerTypeGuardError = NW.TypeCompilerUnknownTypeError = NW.TypeCheck = undefined;
  var N$ = e8(), c = x0(), r9 = $$(), F$ = E$(), a9 = D1(), e9 = Y$(), F0 = f0();

  class Q6 {
    constructor($, Y, W, X) {
      this.schema = $, this.references = Y, this.checkFunc = W, this.code = X, this.hasTransform = N$.HasTransform.Has($, Y);
    }
    Code() {
      return this.code;
    }
    Errors($) {
      return (0, r9.Errors)(this.schema, this.references, $);
    }
    Check($) {
      return this.checkFunc($);
    }
    Decode($) {
      if (!this.checkFunc($))
        throw new N$.TransformDecodeCheckError(this.schema, $, this.Errors($).First());
      return this.hasTransform ? N$.DecodeTransform.Decode(this.schema, this.references, $, (Y, W, X) => this.Check(X)) : $;
    }
    Encode($) {
      const Y = this.hasTransform ? N$.EncodeTransform.Encode(this.schema, this.references, $, (W, X, Z) => this.Check(Z)) : $;
      if (!this.checkFunc(Y))
        throw new N$.TransformEncodeCheckError(this.schema, $, this.Errors($).First());
      return Y;
    }
  }
  NW.TypeCheck = Q6;
  var F1;
  (function($) {
    function Y(Q) {
      return Q === 36;
    }
    $.DollarSign = Y;
    function W(Q) {
      return Q === 95;
    }
    $.IsUnderscore = W;
    function X(Q) {
      return Q >= 65 && Q <= 90 || Q >= 97 && Q <= 122;
    }
    $.IsAlpha = X;
    function Z(Q) {
      return Q >= 48 && Q <= 57;
    }
    $.IsNumeric = Z;
  })(F1 || (F1 = {}));
  var v$;
  (function($) {
    function Y(Q) {
      if (Q.length === 0)
        return false;
      return F1.IsNumeric(Q.charCodeAt(0));
    }
    function W(Q) {
      if (Y(Q))
        return false;
      for (let J = 0;J < Q.length; J++) {
        const z = Q.charCodeAt(J);
        if (!(F1.IsAlpha(z) || F1.IsNumeric(z) || F1.DollarSign(z) || F1.IsUnderscore(z)))
          return false;
      }
      return true;
    }
    function X(Q) {
      return Q.replace(/'/g, "\\'");
    }
    function Z(Q, J) {
      return W(J) ? `${Q}.${J}` : `${Q}['${X(J)}']`;
    }
    $.Encode = Z;
  })(v$ || (v$ = {}));
  var X6;
  (function($) {
    function Y(W) {
      const X = [];
      for (let Z = 0;Z < W.length; Z++) {
        const Q = W.charCodeAt(Z);
        if (F1.IsNumeric(Q) || F1.IsAlpha(Q))
          X.push(W.charAt(Z));
        else
          X.push(`_${Q}_`);
      }
      return X.join("").replace(/__/g, "_");
    }
    $.Encode = Y;
  })(X6 || (X6 = {}));
  var Z6;
  (function($) {
    function Y(W) {
      return W.replace(/'/g, "\\'");
    }
    $.Escape = Y;
  })(Z6 || (Z6 = {}));

  class J6 extends F0.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  NW.TypeCompilerUnknownTypeError = J6;

  class p$ extends F0.TypeBoxError {
    constructor($) {
      super("Preflight validation check failed to guard for the given schema");
      this.schema = $;
    }
  }
  NW.TypeCompilerTypeGuardError = p$;
  var L1;
  (function($) {
    function Y(J, z, U) {
      return F$.TypeSystemPolicy.ExactOptionalPropertyTypes ? `('${z}' in ${J} ? ${U} : true)` : `(${v$.Encode(J, z)} !== undefined ? ${U} : true)`;
    }
    $.IsExactOptionalProperty = Y;
    function W(J) {
      return !F$.TypeSystemPolicy.AllowArrayObject ? `(typeof ${J} === 'object' && ${J} !== null && !Array.isArray(${J}))` : `(typeof ${J} === 'object' && ${J} !== null)`;
    }
    $.IsObjectLike = W;
    function X(J) {
      return !F$.TypeSystemPolicy.AllowArrayObject ? `(typeof ${J} === 'object' && ${J} !== null && !Array.isArray(${J}) && !(${J} instanceof Date) && !(${J} instanceof Uint8Array))` : `(typeof ${J} === 'object' && ${J} !== null && !(${J} instanceof Date) && !(${J} instanceof Uint8Array))`;
    }
    $.IsRecordLike = X;
    function Z(J) {
      return !F$.TypeSystemPolicy.AllowNaN ? `(typeof ${J} === 'number' && Number.isFinite(${J}))` : `typeof ${J} === 'number'`;
    }
    $.IsNumberLike = Z;
    function Q(J) {
      return F$.TypeSystemPolicy.AllowNullVoid ? `(${J} === undefined || ${J} === null)` : `${J} === undefined`;
    }
    $.IsVoidLike = Q;
  })(L1 || (NW.Policy = L1 = {}));
  var MW;
  (function($) {
    function Y(K) {
      return K[F0.Kind] === "Any" || K[F0.Kind] === "Unknown";
    }
    function* W(K, E, L) {
      yield "true";
    }
    function* X(K, E, L) {
      yield `Array.isArray(${L})`;
      const [p, T] = [B0("value", "any"), B0("acc", "number")];
      if ((0, c.IsNumber)(K.maxItems))
        yield `${L}.length <= ${K.maxItems}`;
      if ((0, c.IsNumber)(K.minItems))
        yield `${L}.length >= ${K.minItems}`;
      const d = f(K.items, E, "value");
      if (yield `${L}.every((${p}) => ${d})`, F0.TypeGuard.TSchema(K.contains) || (0, c.IsNumber)(K.minContains) || (0, c.IsNumber)(K.maxContains)) {
        const W0 = F0.TypeGuard.TSchema(K.contains) ? K.contains : F0.Type.Never(), j0 = f(W0, E, "value"), X0 = (0, c.IsNumber)(K.minContains) ? [`(count >= ${K.minContains})`] : [], M = (0, c.IsNumber)(K.maxContains) ? [`(count <= ${K.maxContains})`] : [], l = `const count = value.reduce((${T}, ${p}) => ${j0} ? acc + 1 : acc, 0)`, S0 = ["(count > 0)", ...X0, ...M].join(" && ");
        yield `((${p}) => { ${l}; return ${S0}})(${L})`;
      }
      if (K.uniqueItems === true)
        yield `((${p}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${L})`;
    }
    function* Z(K, E, L) {
      yield `(typeof value === 'object' && Symbol.asyncIterator in ${L})`;
    }
    function* Q(K, E, L) {
      if (yield `(typeof ${L} === 'bigint')`, (0, c.IsBigInt)(K.exclusiveMaximum))
        yield `${L} < BigInt(${K.exclusiveMaximum})`;
      if ((0, c.IsBigInt)(K.exclusiveMinimum))
        yield `${L} > BigInt(${K.exclusiveMinimum})`;
      if ((0, c.IsBigInt)(K.maximum))
        yield `${L} <= BigInt(${K.maximum})`;
      if ((0, c.IsBigInt)(K.minimum))
        yield `${L} >= BigInt(${K.minimum})`;
      if ((0, c.IsBigInt)(K.multipleOf))
        yield `(${L} % BigInt(${K.multipleOf})) === 0`;
    }
    function* J(K, E, L) {
      yield `(typeof ${L} === 'boolean')`;
    }
    function* z(K, E, L) {
      yield* v0(K.returns, E, `${L}.prototype`);
    }
    function* U(K, E, L) {
      if (yield `(${L} instanceof Date) && Number.isFinite(${L}.getTime())`, (0, c.IsNumber)(K.exclusiveMaximumTimestamp))
        yield `${L}.getTime() < ${K.exclusiveMaximumTimestamp}`;
      if ((0, c.IsNumber)(K.exclusiveMinimumTimestamp))
        yield `${L}.getTime() > ${K.exclusiveMinimumTimestamp}`;
      if ((0, c.IsNumber)(K.maximumTimestamp))
        yield `${L}.getTime() <= ${K.maximumTimestamp}`;
      if ((0, c.IsNumber)(K.minimumTimestamp))
        yield `${L}.getTime() >= ${K.minimumTimestamp}`;
      if ((0, c.IsNumber)(K.multipleOfTimestamp))
        yield `(${L}.getTime() % ${K.multipleOfTimestamp}) === 0`;
    }
    function* D(K, E, L) {
      yield `(typeof ${L} === 'function')`;
    }
    function* B(K, E, L) {
      if (yield `(typeof ${L} === 'number' && Number.isInteger(${L}))`, (0, c.IsNumber)(K.exclusiveMaximum))
        yield `${L} < ${K.exclusiveMaximum}`;
      if ((0, c.IsNumber)(K.exclusiveMinimum))
        yield `${L} > ${K.exclusiveMinimum}`;
      if ((0, c.IsNumber)(K.maximum))
        yield `${L} <= ${K.maximum}`;
      if ((0, c.IsNumber)(K.minimum))
        yield `${L} >= ${K.minimum}`;
      if ((0, c.IsNumber)(K.multipleOf))
        yield `(${L} % ${K.multipleOf}) === 0`;
    }
    function* j(K, E, L) {
      const p = K.allOf.map((T) => f(T, E, L)).join(" && ");
      if (K.unevaluatedProperties === false) {
        const T = n(`${new RegExp(F0.KeyResolver.ResolvePattern(K))};`), d = `Object.getOwnPropertyNames(${L}).every(key => ${T}.test(key))`;
        yield `(${p} && ${d})`;
      } else if (F0.TypeGuard.TSchema(K.unevaluatedProperties)) {
        const T = n(`${new RegExp(F0.KeyResolver.ResolvePattern(K))};`), d = `Object.getOwnPropertyNames(${L}).every(key => ${T}.test(key) || ${f(K.unevaluatedProperties, E, `${L}[key]`)})`;
        yield `(${p} && ${d})`;
      } else
        yield `(${p})`;
    }
    function* b(K, E, L) {
      yield `(typeof value === 'object' && Symbol.iterator in ${L})`;
    }
    function* S(K, E, L) {
      if (typeof K.const === "number" || typeof K.const === "boolean")
        yield `(${L} === ${K.const})`;
      else
        yield `(${L} === '${Z6.Escape(K.const)}')`;
    }
    function* N(K, E, L) {
      yield "false";
    }
    function* O(K, E, L) {
      yield `(!${f(K.not, E, L)})`;
    }
    function* P(K, E, L) {
      yield `(${L} === null)`;
    }
    function* F(K, E, L) {
      if (yield L1.IsNumberLike(L), (0, c.IsNumber)(K.exclusiveMaximum))
        yield `${L} < ${K.exclusiveMaximum}`;
      if ((0, c.IsNumber)(K.exclusiveMinimum))
        yield `${L} > ${K.exclusiveMinimum}`;
      if ((0, c.IsNumber)(K.maximum))
        yield `${L} <= ${K.maximum}`;
      if ((0, c.IsNumber)(K.minimum))
        yield `${L} >= ${K.minimum}`;
      if ((0, c.IsNumber)(K.multipleOf))
        yield `(${L} % ${K.multipleOf}) === 0`;
    }
    function* w(K, E, L) {
      if (yield L1.IsObjectLike(L), (0, c.IsNumber)(K.minProperties))
        yield `Object.getOwnPropertyNames(${L}).length >= ${K.minProperties}`;
      if ((0, c.IsNumber)(K.maxProperties))
        yield `Object.getOwnPropertyNames(${L}).length <= ${K.maxProperties}`;
      const p = Object.getOwnPropertyNames(K.properties);
      for (let T of p) {
        const d = v$.Encode(L, T), W0 = K.properties[T];
        if (K.required && K.required.includes(T)) {
          if (yield* v0(W0, E, d), F0.ExtendsUndefined.Check(W0) || Y(W0))
            yield `('${T}' in ${L})`;
        } else {
          const j0 = f(W0, E, d);
          yield L1.IsExactOptionalProperty(L, T, j0);
        }
      }
      if (K.additionalProperties === false)
        if (K.required && K.required.length === p.length)
          yield `Object.getOwnPropertyNames(${L}).length === ${p.length}`;
        else {
          const T = `[${p.map((d) => `'${d}'`).join(", ")}]`;
          yield `Object.getOwnPropertyNames(${L}).every(key => ${T}.includes(key))`;
        }
      if (typeof K.additionalProperties === "object") {
        const T = f(K.additionalProperties, E, `${L}[key]`), d = `[${p.map((W0) => `'${W0}'`).join(", ")}]`;
        yield `(Object.getOwnPropertyNames(${L}).every(key => ${d}.includes(key) || ${T}))`;
      }
    }
    function* I(K, E, L) {
      yield `(typeof value === 'object' && typeof ${L}.then === 'function')`;
    }
    function* G(K, E, L) {
      if (yield L1.IsRecordLike(L), (0, c.IsNumber)(K.minProperties))
        yield `Object.getOwnPropertyNames(${L}).length >= ${K.minProperties}`;
      if ((0, c.IsNumber)(K.maxProperties))
        yield `Object.getOwnPropertyNames(${L}).length <= ${K.maxProperties}`;
      const [p, T] = Object.entries(K.patternProperties)[0], d = n(`${new RegExp(p)}`), W0 = f(T, E, "value"), j0 = F0.TypeGuard.TSchema(K.additionalProperties) ? f(K.additionalProperties, E, L) : K.additionalProperties === false ? "false" : "true", X0 = `(${d}.test(key) ? ${W0} : ${j0})`;
      yield `(Object.entries(${L}).every(([key, value]) => ${X0}))`;
    }
    function* k(K, E, L) {
      const p = (0, a9.Deref)(K, E);
      if (R.functions.has(K.$ref))
        return yield `${i(K.$ref)}(${L})`;
      yield* v0(p, E, L);
    }
    function* _(K, E, L) {
      if (yield `(typeof ${L} === 'string')`, (0, c.IsNumber)(K.maxLength))
        yield `${L}.length <= ${K.maxLength}`;
      if ((0, c.IsNumber)(K.minLength))
        yield `${L}.length >= ${K.minLength}`;
      if (K.pattern !== undefined)
        yield `${n(`${new RegExp(K.pattern)};`)}.test(${L})`;
      if (K.format !== undefined)
        yield `format('${K.format}', ${L})`;
    }
    function* e(K, E, L) {
      yield `(typeof ${L} === 'symbol')`;
    }
    function* o(K, E, L) {
      yield `(typeof ${L} === 'string')`, yield `${n(`${new RegExp(K.pattern)};`)}.test(${L})`;
    }
    function* r(K, E, L) {
      yield `${i(K.$ref)}(${L})`;
    }
    function* g0(K, E, L) {
      if (yield `Array.isArray(${L})`, K.items === undefined)
        return yield `${L}.length === 0`;
      yield `(${L}.length === ${K.maxItems})`;
      for (let p = 0;p < K.items.length; p++)
        yield `${f(K.items[p], E, `${L}[${p}]`)}`;
    }
    function* b0(K, E, L) {
      yield `${L} === undefined`;
    }
    function* E0(K, E, L) {
      yield `(${K.anyOf.map((T) => f(T, E, L)).join(" || ")})`;
    }
    function* H0(K, E, L) {
      if (yield `${L} instanceof Uint8Array`, (0, c.IsNumber)(K.maxByteLength))
        yield `(${L}.length <= ${K.maxByteLength})`;
      if ((0, c.IsNumber)(K.minByteLength))
        yield `(${L}.length >= ${K.minByteLength})`;
    }
    function* z0(K, E, L) {
      yield "true";
    }
    function* u0(K, E, L) {
      yield L1.IsVoidLike(L);
    }
    function* a0(K, E, L) {
      const p = R.instances.size;
      R.instances.set(p, K), yield `kind('${K[F0.Kind]}', ${p}, ${L})`;
    }
    function* v0(K, E, L, p = true) {
      const T = (0, c.IsString)(K.$id) ? [...E, K] : E, d = K;
      if (p && (0, c.IsString)(K.$id)) {
        const W0 = i(K.$id);
        if (R.functions.has(W0))
          return yield `${W0}(${L})`;
        else {
          const j0 = q0(W0, K, E, "value", false);
          return R.functions.set(W0, j0), yield `${W0}(${L})`;
        }
      }
      switch (d[F0.Kind]) {
        case "Any":
          return yield* W(d, T, L);
        case "Array":
          return yield* X(d, T, L);
        case "AsyncIterator":
          return yield* Z(d, T, L);
        case "BigInt":
          return yield* Q(d, T, L);
        case "Boolean":
          return yield* J(d, T, L);
        case "Constructor":
          return yield* z(d, T, L);
        case "Date":
          return yield* U(d, T, L);
        case "Function":
          return yield* D(d, T, L);
        case "Integer":
          return yield* B(d, T, L);
        case "Intersect":
          return yield* j(d, T, L);
        case "Iterator":
          return yield* b(d, T, L);
        case "Literal":
          return yield* S(d, T, L);
        case "Never":
          return yield* N(d, T, L);
        case "Not":
          return yield* O(d, T, L);
        case "Null":
          return yield* P(d, T, L);
        case "Number":
          return yield* F(d, T, L);
        case "Object":
          return yield* w(d, T, L);
        case "Promise":
          return yield* I(d, T, L);
        case "Record":
          return yield* G(d, T, L);
        case "Ref":
          return yield* k(d, T, L);
        case "String":
          return yield* _(d, T, L);
        case "Symbol":
          return yield* e(d, T, L);
        case "TemplateLiteral":
          return yield* o(d, T, L);
        case "This":
          return yield* r(d, T, L);
        case "Tuple":
          return yield* g0(d, T, L);
        case "Undefined":
          return yield* b0(d, T, L);
        case "Union":
          return yield* E0(d, T, L);
        case "Uint8Array":
          return yield* H0(d, T, L);
        case "Unknown":
          return yield* z0(d, T, L);
        case "Void":
          return yield* u0(d, T, L);
        default:
          if (!F0.TypeRegistry.Has(d[F0.Kind]))
            throw new J6(K);
          return yield* a0(d, T, L);
      }
    }
    const R = { language: "javascript", functions: new Map, variables: new Map, instances: new Map };
    function f(K, E, L, p = true) {
      return `(${[...v0(K, E, L, p)].join(" && ")})`;
    }
    function i(K) {
      return `check_${X6.Encode(K)}`;
    }
    function n(K) {
      const E = `local_${R.variables.size}`;
      return R.variables.set(E, `const ${E} = ${K}`), E;
    }
    function q0(K, E, L, p, T = true) {
      const [d, W0] = ["\n", (l) => "".padStart(l, " ")], j0 = B0("value", "any"), X0 = D0("boolean"), M = [...v0(E, L, p, T)].map((l) => `${W0(4)}${l}`).join(` &&${d}`);
      return `function ${K}(${j0})${X0} {${d}${W0(2)}return (${d}${M}${d}${W0(2)})\n}`;
    }
    function B0(K, E) {
      const L = R.language === "typescript" ? `: ${E}` : "";
      return `${K}${L}`;
    }
    function D0(K) {
      return R.language === "typescript" ? `: ${K}` : "";
    }
    function w0(K, E, L) {
      const p = q0("check", K, E, "value"), T = B0("value", "any"), d = D0("boolean"), W0 = [...R.functions.values()], j0 = [...R.variables.values()], X0 = (0, c.IsString)(K.$id) ? `return function check(${T})${d} {\n  return ${i(K.$id)}(value)\n}` : `return ${p}`;
      return [...j0, ...W0, X0].join("\n");
    }
    function M0(...K) {
      const E = { language: "javascript" }, [L, p, T] = K.length === 2 && (0, c.IsArray)(K[1]) ? [K[0], K[1], E] : K.length === 2 && !(0, c.IsArray)(K[1]) ? [K[0], [], K[1]] : K.length === 3 ? [K[0], K[1], K[2]] : K.length === 1 ? [K[0], [], E] : [null, [], E];
      if (R.language = T.language, R.variables.clear(), R.functions.clear(), R.instances.clear(), !F0.TypeGuard.TSchema(L))
        throw new p$(L);
      for (let d of p)
        if (!F0.TypeGuard.TSchema(d))
          throw new p$(d);
      return w0(L, p, T);
    }
    $.Code = M0;
    function B1(K, E = []) {
      const L = M0(K, E, { language: "javascript" }), p = globalThis.Function("kind", "format", "hash", L), T = new Map(R.instances);
      function d(M, l, S0) {
        if (!F0.TypeRegistry.Has(M) || !T.has(l))
          return false;
        const l$ = F0.TypeRegistry.Get(M), t$ = T.get(l);
        return l$(t$, S0);
      }
      function W0(M, l) {
        if (!F0.FormatRegistry.Has(M))
          return false;
        return F0.FormatRegistry.Get(M)(l);
      }
      function j0(M) {
        return (0, e9.Hash)(M);
      }
      const X0 = p(d, W0, j0);
      return new Q6(K, E, X0, L);
    }
    $.Compile = B1;
  })(MW || (NW.TypeCompiler = MW = {}));
});
var BW = J0((l0) => {
  var Z7 = l0 && l0.__createBinding || (Object.create ? function($, Y, W, X) {
    if (X === undefined)
      X = W;
    var Z = Object.getOwnPropertyDescriptor(Y, W);
    if (!Z || ("get" in Z ? !Y.__esModule : Z.writable || Z.configurable))
      Z = { enumerable: true, get: function() {
        return Y[W];
      } };
    Object.defineProperty($, X, Z);
  } : function($, Y, W, X) {
    if (X === undefined)
      X = W;
    $[X] = Y[W];
  }), Q7 = l0 && l0.__exportStar || function($, Y) {
    for (var W in $)
      if (W !== "default" && !Object.prototype.hasOwnProperty.call(Y, W))
        Z7(Y, $, W);
  };
  Object.defineProperty(l0, "__esModule", { value: true });
  l0.ValueErrorIterator = l0.ValueErrorType = undefined;
  var AW = I$();
  Object.defineProperty(l0, "ValueErrorType", { enumerable: true, get: function() {
    return AW.ValueErrorType;
  } });
  Object.defineProperty(l0, "ValueErrorIterator", { enumerable: true, get: function() {
    return AW.ValueErrorIterator;
  } });
  Q7(UW(), l0);
});
var bW = J0((K5, IW) => {
  var H7 = function($) {
    var Y = $.indexOf("%");
    if (Y === -1)
      return $;
    var W = $.length, X = "", Z = 0, Q = 0, J = Y, z = LW;
    while (Y > -1 && Y < W) {
      var U = CW($[Y + 1], 4), D = CW($[Y + 2], 0), B = U | D, j = U6[B];
      if (z = U6[256 + z + j], Q = Q << 6 | B & U6[364 + j], z === LW)
        X += $.slice(Z, J), X += Q <= 65535 ? String.fromCharCode(Q) : String.fromCharCode(55232 + (Q >> 10), 56320 + (Q & 1023)), Q = 0, Z = Y + 3, Y = J = $.indexOf("%", Z);
      else if (z === z7)
        return null;
      else {
        if (Y += 3, Y < W && $.charCodeAt(Y) === 37)
          continue;
        return null;
      }
    }
    return X + $.slice(Z);
  }, CW = function($, Y) {
    var W = q7[$];
    return W === undefined ? 255 : W << Y;
  }, LW = 12, z7 = 0, U6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 7, 10, 9, 9, 9, 11, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 24, 36, 48, 60, 72, 84, 96, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 63, 63, 63, 0, 31, 15, 15, 15, 7, 7, 7], q7 = { "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
  IW.exports = H7;
});
var VW = J0((j5, EW) => {
  var M7 = function($) {
    const Y = new _W;
    if (typeof $ !== "string")
      return Y;
    let W = $.length, X = "", Z = "", Q = -1, J = -1, z = false, U = false, D = false, B = false, j = false, b = 0;
    for (let S = 0;S < W + 1; S++)
      if (b = S !== W ? $.charCodeAt(S) : 38, b === 38) {
        if (j = J > Q, !j)
          J = S;
        if (X = $.slice(Q + 1, J), j || X.length > 0) {
          if (D)
            X = X.replace(RW, " ");
          if (z)
            X = GW(X) || X;
          if (j) {
            if (Z = $.slice(J + 1, S), B)
              Z = Z.replace(RW, " ");
            if (U)
              Z = GW(Z) || Z;
          }
          const N = Y[X];
          if (N === undefined)
            Y[X] = Z;
          else if (N.pop)
            N.push(Z);
          else
            Y[X] = [N, Z];
        }
        Z = "", Q = S, J = S, z = false, U = false, D = false, B = false;
      } else if (b === 61)
        if (J <= Q)
          J = S;
        else
          U = true;
      else if (b === 43)
        if (J > Q)
          B = true;
        else
          D = true;
      else if (b === 37)
        if (J > Q)
          U = true;
        else
          z = true;
    return Y;
  }, GW = bW(), RW = /\+/g, _W = function() {
  };
  _W.prototype = Object.create(null);
  EW.exports = M7;
});
var kW = J0((P5, xW) => {
  var F7 = function($) {
    const Y = $.length;
    if (Y === 0)
      return "";
    let W = "", X = 0, Z = 0;
    $:
      for (;Z < Y; Z++) {
        let Q = $.charCodeAt(Z);
        while (Q < 128) {
          if (N7[Q] !== 1) {
            if (X < Z)
              W += $.slice(X, Z);
            X = Z + 1, W += Z1[Q];
          }
          if (++Z === Y)
            break $;
          Q = $.charCodeAt(Z);
        }
        if (X < Z)
          W += $.slice(X, Z);
        if (Q < 2048) {
          X = Z + 1, W += Z1[192 | Q >> 6] + Z1[128 | Q & 63];
          continue;
        }
        if (Q < 55296 || Q >= 57344) {
          X = Z + 1, W += Z1[224 | Q >> 12] + Z1[128 | Q >> 6 & 63] + Z1[128 | Q & 63];
          continue;
        }
        if (++Z, Z >= Y)
          throw new Error("URI malformed");
        const J = $.charCodeAt(Z) & 1023;
        X = Z + 1, Q = 65536 + ((Q & 1023) << 10 | J), W += Z1[240 | Q >> 18] + Z1[128 | Q >> 12 & 63] + Z1[128 | Q >> 6 & 63] + Z1[128 | Q & 63];
      }
    if (X === 0)
      return $;
    if (X < Y)
      return W + $.slice(X);
    return W;
  }, Z1 = Array.from({ length: 256 }, ($, Y) => "%" + ((Y < 16 ? "0" : "") + Y.toString(16)).toUpperCase()), N7 = new Int8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0]);
  xW.exports = { encodeString: F7 };
});
var TW = J0((O5, fW) => {
  var gW = function($) {
    const Y = typeof $;
    if (Y === "string")
      return A6($);
    else if (Y === "bigint")
      return $.toString();
    else if (Y === "boolean")
      return $ ? "true" : "false";
    else if (Y === "number" && Number.isFinite($))
      return $ < 1000000000000000000000 ? "" + $ : A6("" + $);
    return "";
  }, U7 = function($) {
    let Y = "";
    if ($ === null || typeof $ !== "object")
      return Y;
    const W = "&", X = Object.keys($), Z = X.length;
    let Q = 0;
    for (let J = 0;J < Z; J++) {
      const z = X[J], U = $[z], D = A6(z) + "=";
      if (J)
        Y += W;
      if (Array.isArray(U)) {
        Q = U.length;
        for (let B = 0;B < Q; B++) {
          if (B)
            Y += W;
          Y += D, Y += gW(U[B]);
        }
      } else
        Y += D, Y += gW(U);
    }
    return Y;
  }, { encodeString: A6 } = kW();
  fW.exports = U7;
});
var B6 = J0((S5, B$) => {
  var dW = VW(), yW = TW(), vW = { parse: dW, stringify: yW };
  B$.exports = vW;
  B$.exports.default = vW;
  B$.exports.parse = dW;
  B$.exports.stringify = yW;
});
var _1 = ($, Y) => ({ part: $, store: null, inert: Y !== undefined ? new Map(Y.map((W) => [W.part.charCodeAt(0), W])) : null, params: null, wildcardStore: null });
var L6 = ($, Y) => ({ ...$, part: Y });
var C6 = ($) => ({ paramName: $, store: null, inert: null });

class E1 {
  root = {};
  history = [];
  static regex = { static: /:.+?(?=\/|$)/, params: /:.+?(?=\/|$)/g };
  add($, Y, W) {
    let X;
    if (typeof Y != "string")
      throw TypeError("Route path must be a string");
    Y === "" ? Y = "/" : Y[0] !== "/" && (Y = `/${Y}`), this.history.push([$, Y, W]);
    let Z = Y[Y.length - 1] === "*";
    Z && (Y = Y.slice(0, -1));
    let Q = Y.split(E1.regex.static), J = Y.match(E1.regex.params) || [];
    Q[Q.length - 1] === "" && Q.pop(), X = this.root[$] ? this.root[$] : this.root[$] = _1("/");
    let z = 0;
    for (let U = 0;U < Q.length; ++U) {
      let D = Q[U];
      if (U > 0) {
        let B = J[z++].slice(1);
        if (X.params === null)
          X.params = C6(B);
        else if (X.params.paramName !== B)
          throw Error(`Cannot create route "${Y}" with parameter "${B}" because a route already exists with a different parameter name ("${X.params.paramName}") in the same location`);
        let j = X.params;
        if (j.inert === null) {
          X = j.inert = _1(D);
          continue;
        }
        X = j.inert;
      }
      for (let B = 0;; ) {
        if (B === D.length) {
          if (B < X.part.length) {
            let j = L6(X, X.part.slice(B));
            Object.assign(X, _1(D, [j]));
          }
          break;
        }
        if (B === X.part.length) {
          if (X.inert === null)
            X.inert = new Map;
          else if (X.inert.has(D.charCodeAt(B))) {
            X = X.inert.get(D.charCodeAt(B)), D = D.slice(B), B = 0;
            continue;
          }
          let j = _1(D.slice(B));
          X.inert.set(D.charCodeAt(B), j), X = j;
          break;
        }
        if (D[B] !== X.part[B]) {
          let j = L6(X, X.part.slice(B)), b = _1(D.slice(B));
          Object.assign(X, _1(X.part.slice(0, B), [j, b])), X = b;
          break;
        }
        ++B;
      }
    }
    if (z < J.length) {
      let U = J[z], D = U.slice(1);
      if (X.params === null)
        X.params = C6(D);
      else if (X.params.paramName !== D)
        throw Error(`Cannot create route "${Y}" with parameter "${D}" because a route already exists with a different parameter name ("${X.params.paramName}") in the same location`);
      return X.params.store === null && (X.params.store = W), X.params.store;
    }
    return Z ? (X.wildcardStore === null && (X.wildcardStore = W), X.wildcardStore) : (X.store === null && (X.store = W), X.store);
  }
  find($, Y) {
    let W = this.root[$];
    return W ? r$(Y, Y.length, W, 0) : null;
  }
}
var r$ = ($, Y, W, X) => {
  let Z = W?.part, Q = X + Z.length;
  if (Z.length > 1) {
    if (Q > Y)
      return null;
    if (Z.length < 15) {
      for (let J = 1, z = X + 1;J < Z.length; ++J, ++z)
        if (Z.charCodeAt(J) !== $.charCodeAt(z))
          return null;
    } else if ($.substring(X, Q) !== Z)
      return null;
  }
  if (Q === Y)
    return W.store !== null ? { store: W.store, params: {} } : W.wildcardStore !== null ? { store: W.wildcardStore, params: { "*": "" } } : null;
  if (W.inert !== null) {
    let J = W.inert.get($.charCodeAt(Q));
    if (J !== undefined) {
      let z = r$($, Y, J, Q);
      if (z !== null)
        return z;
    }
  }
  if (W.params !== null) {
    let J = W.params, z = $.indexOf("/", Q);
    if (z !== Q) {
      if (z === -1 || z >= Y) {
        if (J.store !== null) {
          let U = {};
          return U[J.paramName] = $.substring(Q, Y), { store: J.store, params: U };
        }
      } else if (J.inert !== null) {
        let U = r$($, Y, J.inert, z);
        if (U !== null)
          return U.params[J.paramName] = $.substring(Q, z), U;
      }
    }
  }
  return W.wildcardStore !== null ? { store: W.wildcardStore, params: { "*": $.substring(Q, Y) } } : null;
};
var G6 = Q1(b6(), 1);
var R6 = G6.default;
var _6 = ($, Y) => {
  return async function W(X) {
    const Z = X.id;
    if (X.event === "request" && X.type === "begin") {
      const Q = () => {
        let O, P, F = -1;
        const w = [], I = [];
        let G = false;
        const k = new Promise((o) => {
          O = (r) => {
            if (G)
              return;
            else
              G = true;
            o(r);
          };
        });
        let _ = false;
        const e = new Promise((o) => {
          P = (r) => {
            if (_)
              return;
            else
              _ = true;
            if (F === -1)
              F = 0;
            for (;F < I.length; F++) {
              let g0;
              const b0 = { name: "anonymous", time: performance.now(), skip: true, end: new Promise((E0) => {
                E0(g0);
              }), children: [] };
              g0 = performance.now(), w[F](b0);
            }
            o(r);
          };
        });
        return { signal: k, consumeChild(o) {
          switch (o.type) {
            case "begin":
              w[++F]({ name: o.name, time: o.time, skip: false, end: new Promise((r) => {
                I.push(r);
              }) });
              break;
            case "end":
              I[F](o.time);
              break;
          }
        }, consume(o) {
          switch (o.type) {
            case "begin":
              const r = [], g0 = o.unit ?? 0;
              for (let b0 = 0;b0 < g0; b0++) {
                let E0;
                r.push(new Promise((H0) => {
                  E0 = H0;
                })), w.push(E0);
              }
              O({ name: o.name, time: o.time, skip: false, end: e, children: r });
              break;
            case "end":
              P(o.time);
              break;
          }
        }, resolve() {
          if (G && _)
            return;
          let o;
          const r = { name: "anonymous", time: performance.now(), skip: true, end: new Promise((g0) => {
            g0(o);
          }), children: [] };
          o = performance.now(), O(r), P(o);
        } };
      }, J = Q(), z = Q(), U = Q(), D = Q(), B = Q(), j = Q(), b = Q(), S = Q();
      J.consume(X);
      const N = (O) => {
        if (O.id === Z)
          switch (O.event) {
            case "request":
              J.consume(O);
              break;
            case "request.unit":
              J.consumeChild(O);
              break;
            case "parse":
              z.consume(O);
              break;
            case "parse.unit":
              z.consumeChild(O);
              break;
            case "transform":
              U.consume(O);
              break;
            case "transform.unit":
              U.consumeChild(O);
              break;
            case "beforeHandle":
              D.consume(O);
              break;
            case "beforeHandle.unit":
              D.consumeChild(O);
              break;
            case "handle":
              B.consume(O);
              break;
            case "afterHandle":
              j.consume(O);
              break;
            case "afterHandle.unit":
              j.consumeChild(O);
              break;
            case "error":
              b.consume(O);
              break;
            case "error.unit":
              b.consumeChild(O);
              break;
            case "response":
              if (O.type === "begin")
                J.resolve(), z.resolve(), U.resolve(), D.resolve(), B.resolve(), j.resolve(), b.resolve();
              else
                $.off("event", N);
              S.consume(O);
              break;
            case "response.unit":
              S.consumeChild(O);
              break;
          }
      };
      $.on("event", N), await Y({ id: X.id, context: X.ctx, set: X.ctx?.set, store: X.ctx?.store, time: X.time, request: J.signal, parse: z.signal, transform: U.signal, beforeHandle: D.signal, handle: B.signal, afterHandle: j.signal, error: b.signal, response: S.signal }), $.emit(`res${Z}`, undefined);
    }
  };
};
var Y6 = Q1($6(), 1);
var HW = typeof Bun !== "undefined" ? Bun.env : typeof process !== "undefined" ? process?.env : undefined;
var n1 = Symbol("ErrorCode");
var q$ = (HW?.NODE_ENV ?? HW?.ENV) === "production";

class f$ extends Error {
  code = "INTERNAL_SERVER_ERROR";
  status = 500;
  constructor($) {
    super($ ?? "INTERNAL_SERVER_ERROR");
  }
}

class S1 extends Error {
  code = "NOT_FOUND";
  status = 404;
  constructor($) {
    super($ ?? "NOT_FOUND");
  }
}
class M$ extends Error {
  $;
  code = "INVALID_COOKIE_SIGNATURE";
  status = 400;
  constructor($, Y) {
    super(Y ?? `"${$}" has invalid cookie signature`);
    this.key = $;
  }
}

class P0 extends Error {
  $;
  Y;
  W;
  code = "VALIDATION";
  status = 400;
  constructor($, Y, W) {
    const X = q$ ? undefined : Y.Errors(W).First(), Z = X?.schema.error ? typeof X.schema.error === "function" ? X.schema.error($, Y, W) : X.schema.error : undefined, Q = q$ ? Z ?? `Invalid ${$ ?? X?.schema.error ?? X?.message}` : Z ?? `Invalid ${$}, '${X?.path?.slice(1) || "type"}': ${X?.message}` + "\n\nExpected: " + JSON.stringify(Y6.Value.Create(Y.schema), null, 2) + "\n\nFound: " + JSON.stringify(W, null, 2);
    super(Q);
    this.type = $;
    this.validator = Y;
    this.value = W;
    Object.setPrototypeOf(this, P0.prototype);
  }
  get all() {
    return [...this.validator.Errors(this.value)];
  }
  get model() {
    return Y6.Value.Create(this.validator.schema);
  }
  toResponse($) {
    return new Response(this.message, { status: 400, headers: $ });
  }
}
var W6 = { open($) {
  $.data.open?.($);
}, message($, Y) {
  $.data.message?.($, Y);
}, drain($) {
  $.data.drain?.($);
}, close($, Y, W) {
  $.data.close?.($, Y, W);
} };

class c1 {
  $;
  Y;
  validator;
  constructor($, Y) {
    this.raw = $;
    this.data = Y;
    this.validator = $.data.validator;
  }
  get publish() {
    return ($, Y = undefined, W) => {
      if (this.validator?.Check(Y) === false)
        throw new P0("message", this.validator, Y);
      if (typeof Y === "object")
        Y = JSON.stringify(Y);
      return this.raw.publish($, Y, W), this;
    };
  }
  get send() {
    return ($) => {
      if (this.validator?.Check($) === false)
        throw new P0("message", this.validator, $);
      if (typeof $ === "object")
        $ = JSON.stringify($);
      return this.raw.send($), this;
    };
  }
  get subscribe() {
    return ($) => {
      return this.raw.subscribe($), this;
    };
  }
  get unsubscribe() {
    return ($) => {
      return this.raw.unsubscribe($), this;
    };
  }
  get cork() {
    return ($) => {
      return this.raw.cork($), this;
    };
  }
  get close() {
    return () => {
      return this.raw.close(), this;
    };
  }
  get terminate() {
    return this.raw.terminate.bind(this.raw);
  }
  get isSubscribed() {
    return this.raw.isSubscribed.bind(this.raw);
  }
  get remoteAddress() {
    return this.raw.remoteAddress;
  }
}
var o9 = function($, Y) {
  if (typeof $ !== "string")
    throw new TypeError("argument str must be a string");
  var W = {}, X = Y || {}, Z = X.decode || c9, Q = 0;
  while (Q < $.length) {
    var J = $.indexOf("=", Q);
    if (J === -1)
      break;
    var z = $.indexOf(";", Q);
    if (z === -1)
      z = $.length;
    else if (z < J) {
      Q = $.lastIndexOf(";", J - 1) + 1;
      continue;
    }
    var U = $.slice(Q, J).trim();
    if (W[U] === undefined) {
      var D = $.slice(J + 1, z).trim();
      if (D.charCodeAt(0) === 34)
        D = D.slice(1, -1);
      W[U] = s9(D, Z);
    }
    Q = z + 1;
  }
  return W;
};
var n9 = function($, Y, W) {
  var X = W || {}, Z = X.encode || l9;
  if (typeof Z !== "function")
    throw new TypeError("option encode is invalid");
  if (!T$.test($))
    throw new TypeError("argument name is invalid");
  var Q = Z(Y);
  if (Q && !T$.test(Q))
    throw new TypeError("argument val is invalid");
  var J = $ + "=" + Q;
  if (X.maxAge != null) {
    var z = X.maxAge - 0;
    if (isNaN(z) || !isFinite(z))
      throw new TypeError("option maxAge is invalid");
    J += "; Max-Age=" + Math.floor(z);
  }
  if (X.domain) {
    if (!T$.test(X.domain))
      throw new TypeError("option domain is invalid");
    J += "; Domain=" + X.domain;
  }
  if (X.path) {
    if (!T$.test(X.path))
      throw new TypeError("option path is invalid");
    J += "; Path=" + X.path;
  }
  if (X.expires) {
    var U = X.expires;
    if (!t9(U) || isNaN(U.valueOf()))
      throw new TypeError("option expires is invalid");
    J += "; Expires=" + U.toUTCString();
  }
  if (X.httpOnly)
    J += "; HttpOnly";
  if (X.secure)
    J += "; Secure";
  if (X.priority) {
    var D = typeof X.priority === "string" ? X.priority.toLowerCase() : X.priority;
    switch (D) {
      case "low":
        J += "; Priority=Low";
        break;
      case "medium":
        J += "; Priority=Medium";
        break;
      case "high":
        J += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (X.sameSite) {
    var B = typeof X.sameSite === "string" ? X.sameSite.toLowerCase() : X.sameSite;
    switch (B) {
      case true:
        J += "; SameSite=Strict";
        break;
      case "lax":
        J += "; SameSite=Lax";
        break;
      case "strict":
        J += "; SameSite=Strict";
        break;
      case "none":
        J += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return J;
};
var c9 = function($) {
  return $.indexOf("%") !== -1 ? decodeURIComponent($) : $;
};
var l9 = function($) {
  return encodeURIComponent($);
};
var t9 = function($) {
  return h9.call($) === "[object Date]" || $ instanceof Date;
};
var s9 = function($, Y) {
  try {
    return Y($);
  } catch (W) {
    return $;
  }
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var d$ = o9;
var y$ = n9;
var h9 = Object.prototype.toString;
var T$ = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
var i$ = Q1(f0(), 1);
var U$ = Q1($6(), 1);
var H6 = Q1(BW(), 1);
var z6 = ($) => $ && typeof $ === "object" && !Array.isArray($);
var J7 = ($) => typeof $ === "function" && /^\s*class\s+/.test($.toString()) || $.toString().startsWith("[object ") || t0(Object.getPrototypeOf($));
var U1 = ($, Y, { skipKeys: W } = {}) => {
  if (z6($) && z6(Y))
    for (let [X, Z] of Object.entries(Y)) {
      if (W?.includes(X))
        continue;
      if (!z6(Z)) {
        $[X] = Z;
        continue;
      }
      if (!(X in $)) {
        $[X] = Z;
        continue;
      }
      if (J7(Z)) {
        $[X] = Z;
        continue;
      }
      $[X] = U1($[X], Z);
    }
  return $;
};
var DW = ($, Y) => U1($, Y, { skipKeys: ["properties"] });
var O0 = ($, Y) => {
  const W = [...Array.isArray($) ? $ : [$]], X = [];
  for (let Z of W)
    if (Z.$elysiaChecksum)
      X.push(Z.$elysiaChecksum);
  for (let Z of Array.isArray(Y) ? Y : [Y])
    if (!X.includes(Z?.$elysiaChecksum))
      W.push(Z);
  return W;
};
var C1 = ($, Y) => {
  return { body: Y?.body ?? $?.body, headers: Y?.headers ?? $?.headers, params: Y?.params ?? $?.params, query: Y?.query ?? $?.query, response: Y?.response ?? $?.response, type: $?.type || Y?.type, detail: U1(Y?.detail ?? {}, $?.detail ?? {}), parse: O0($?.parse ?? [], Y?.parse ?? []), transform: O0($?.transform ?? [], Y?.transform ?? []), beforeHandle: O0($?.beforeHandle ?? [], Y?.beforeHandle ?? []), afterHandle: O0($?.afterHandle ?? [], Y?.afterHandle ?? []), onResponse: O0($?.onResponse ?? [], Y?.onResponse ?? []), trace: O0($?.trace ?? [], Y?.trace ?? []), error: O0($?.error ?? [], Y?.error ?? []) };
};
var X1 = ($, { models: Y = {}, additionalProperties: W = false, dynamic: X = false }) => {
  if (!$)
    return;
  if (typeof $ === "string" && !($ in Y))
    return;
  const Z = typeof $ === "string" ? Y[$] : $;
  if (Z.type === "object" && ("additionalProperties" in Z) === false)
    Z.additionalProperties = W;
  if (X)
    return { schema: Z, references: "", checkFunc: () => {
    }, code: "", Check: (Q) => U$.Value.Check(Z, Q), Errors: (Q) => U$.Value.Errors(Z, Q), Code: () => "" };
  return H6.TypeCompiler.Compile(Z);
};
var q6 = ($, { models: Y = {}, additionalProperties: W = false, dynamic: X = false }) => {
  if (!$)
    return;
  if (typeof $ === "string" && !($ in Y))
    return;
  const Z = typeof $ === "string" ? Y[$] : $, Q = (z) => {
    if (X)
      return { schema: z, references: "", checkFunc: () => {
      }, code: "", Check: (U) => U$.Value.Check(z, U), Errors: (U) => U$.Value.Errors(z, U), Code: () => "" };
    return H6.TypeCompiler.Compile(z);
  };
  if (i$.Kind in Z) {
    if (("additionalProperties" in Z) === false)
      Z.additionalProperties = W;
    return { 200: Q(Z) };
  }
  const J = {};
  return Object.keys(Z).forEach((z) => {
    const U = Z[+z];
    if (typeof U === "string") {
      if (U in Y) {
        const D = Y[U];
        D.type === "object" && ("additionalProperties" in D), J[+z] = (i$.Kind in D) ? Q(D) : D;
      }
      return;
    }
    if (U.type === "object" && ("additionalProperties" in U) === false)
      U.additionalProperties = W;
    J[+z] = (i$.Kind in U) ? Q(U) : U;
  }), J;
};
var M6 = ($) => {
  let Y = 9;
  for (let W = 0;W < $.length; )
    Y = Math.imul(Y ^ $.charCodeAt(W++), 387420489);
  return Y = Y ^ Y >>> 9;
};
var m$ = ($, Y, W) => {
  const X = (Z) => {
    if (W)
      Z.$elysiaChecksum = W;
    return Z;
  };
  return { start: O0($.start, ("start" in Y ? Y.start ?? [] : []).map(X)), request: O0($.request, ("request" in Y ? Y.request ?? [] : []).map(X)), parse: O0($.parse, "parse" in Y ? Y?.parse ?? [] : []).map(X), transform: O0($.transform, (Y?.transform ?? []).map(X)), beforeHandle: O0($.beforeHandle, (Y?.beforeHandle ?? []).map(X)), afterHandle: O0($.afterHandle, (Y?.afterHandle ?? []).map(X)), onResponse: O0($.onResponse, (Y?.onResponse ?? []).map(X)), trace: O0($.trace, ("trace" in Y ? Y.trace ?? [] : []).map(X)), error: O0($.error, (Y?.error ?? []).map(X)), stop: O0($.stop, ("stop" in Y ? Y.stop ?? [] : []).map(X)) };
};
var wW = ($, Y = true) => {
  if (!$)
    return $;
  if (typeof $ === "function") {
    if (Y)
      $.$elysiaHookType = "global";
    else
      $.$elysiaHookType = undefined;
    return $;
  }
  return $.map((W) => {
    if (Y)
      W.$elysiaHookType = "global";
    else
      W.$elysiaHookType = undefined;
    return W;
  });
};
var l1 = ($) => {
  if (!$)
    return $;
  if (typeof $ === "function")
    return $.$elysiaHookType === "global" ? $ : undefined;
  return $.filter((Y) => Y.$elysiaHookType === "global");
};
var N6 = ($) => {
  return { ...$, type: $?.type, detail: $?.detail, parse: l1($?.parse), transform: l1($?.transform), beforeHandle: l1($?.beforeHandle), afterHandle: l1($?.afterHandle), onResponse: l1($?.onResponse), error: l1($?.error) };
};
var F6 = { Continue: 100, "Switching Protocols": 101, Processing: 102, "Early Hints": 103, OK: 200, Created: 201, Accepted: 202, "Non-Authoritative Information": 203, "No Content": 204, "Reset Content": 205, "Partial Content": 206, "Multi-Status": 207, "Already Reported": 208, "Multiple Choices": 300, "Moved Permanently": 301, Found: 302, "See Other": 303, "Not Modified": 304, "Temporary Redirect": 307, "Permanent Redirect": 308, "Bad Request": 400, Unauthorized: 401, "Payment Required": 402, Forbidden: 403, "Not Found": 404, "Method Not Allowed": 405, "Not Acceptable": 406, "Proxy Authentication Required": 407, "Request Timeout": 408, Conflict: 409, Gone: 410, "Length Required": 411, "Precondition Failed": 412, "Payload Too Large": 413, "URI Too Long": 414, "Unsupported Media Type": 415, "Range Not Satisfiable": 416, "Expectation Failed": 417, "I'm a teapot": 418, "Misdirected Request": 421, "Unprocessable Content": 422, Locked: 423, "Failed Dependency": 424, "Too Early": 425, "Upgrade Required": 426, "Precondition Required": 428, "Too Many Requests": 429, "Request Header Fields Too Large": 431, "Unavailable For Legal Reasons": 451, "Internal Server Error": 500, "Not Implemented": 501, "Bad Gateway": 502, "Service Unavailable": 503, "Gateway Timeout": 504, "HTTP Version Not Supported": 505, "Variant Also Negotiates": 506, "Insufficient Storage": 507, "Loop Detected": 508, "Not Extended": 510, "Network Authentication Required": 511 };
var KW = import.meta.require("crypto");
var I1 = function($, Y) {
  if (typeof $ != "string")
    throw new TypeError("Cookie value must be provided as a string.");
  if (Y == null)
    throw new TypeError("Secret key must be provided.");
  return $ + "." + KW.createHmac("sha256", Y).update($).digest("base64").replace(/\=+$/, "");
};
var u$ = function($, Y) {
  if (typeof $ != "string")
    throw new TypeError("Signed cookie string must be provided.");
  if (Y == null)
    throw new TypeError("Secret key must be provided.");
  var W = $.slice(0, $.lastIndexOf(".")), X = I1(W, Y), Z = Buffer.from(X), Q = Buffer.from($);
  return Z.length === Q.length && KW.timingSafeEqual(Z, Q) ? W : false;
};

class s0 {
  $;
  Y;
  name;
  setter;
  constructor($, Y = {}) {
    this._value = $;
    this.property = Y;
  }
  get() {
    return this._value;
  }
  get value() {
    return this._value;
  }
  set value($) {
    if (typeof $ === "object") {
      if (JSON.stringify(this.value) === JSON.stringify($))
        return;
    } else if (this.value === $)
      return;
    this._value = $, this.sync();
  }
  add($) {
    const Y = Object.assign(this.property, typeof $ === "function" ? $(Object.assign(this.property, this.value)) : $);
    if ("value" in Y)
      this._value = Y.value, delete Y.value;
    return this.property = Y, this.sync();
  }
  set($) {
    const Y = typeof $ === "function" ? $(Object.assign(this.property, this.value)) : $;
    if ("value" in Y)
      this._value = Y.value, delete Y.value;
    return this.property = Y, this.sync();
  }
  remove() {
    if (this.value === undefined)
      return;
    this.set({ value: "", expires: new Date });
  }
  get domain() {
    return this.property.domain;
  }
  set domain($) {
    if (this.property.domain === $)
      return;
    this.property.domain = $, this.sync();
  }
  get expires() {
    return this.property.expires;
  }
  set expires($) {
    if (this.property.expires?.getTime() === $?.getTime())
      return;
    this.property.expires = $, this.sync();
  }
  get httpOnly() {
    return this.property.httpOnly;
  }
  set httpOnly($) {
    if (this.property.domain === $)
      return;
    this.property.httpOnly = $, this.sync();
  }
  get maxAge() {
    return this.property.maxAge;
  }
  set maxAge($) {
    if (this.property.maxAge === $)
      return;
    this.property.maxAge = $, this.sync();
  }
  get path() {
    return this.property.path;
  }
  set path($) {
    if (this.property.path === $)
      return;
    this.property.path = $, this.sync();
  }
  get priority() {
    return this.property.priority;
  }
  set priority($) {
    if (this.property.priority === $)
      return;
    this.property.priority = $, this.sync();
  }
  get sameSite() {
    return this.property.sameSite;
  }
  set sameSite($) {
    if (this.property.sameSite === $)
      return;
    this.property.sameSite = $, this.sync();
  }
  get secure() {
    return this.property.secure;
  }
  set secure($) {
    if (this.property.secure === $)
      return;
    this.property.secure = $, this.sync();
  }
  toString() {
    return typeof this.value === "object" ? JSON.stringify(this.value) : this.value?.toString() ?? "";
  }
  sync() {
    if (!this.name || !this.setter)
      return this;
    if (!this.setter.cookie)
      this.setter.cookie = { [this.name]: Object.assign(this.property, { value: this.toString() }) };
    else
      this.setter.cookie[this.name] = Object.assign(this.property, { value: this.toString() });
    return this;
  }
}
var jW = ($, Y, W) => new Proxy($, { get(X, Z) {
  if (Z in X)
    return X[Z];
  const Q = new s0(undefined, W ? { ...W } : undefined);
  return Q.setter = Y, Q.name = Z, Q;
}, set(X, Z, Q) {
  if (!(Q instanceof s0))
    return false;
  if (!Y.cookie)
    Y.cookie = {};
  return Q.setter = Y, Q.name = Z, Q.sync(), X[Z] = Q, true;
} });
var h$ = ($, Y, { secret: W, sign: X, ...Z } = {}) => {
  if (!Y)
    return jW({}, $, Z);
  const Q = {}, J = typeof W === "string";
  if (X && X !== true && !Array.isArray(X))
    X = [X];
  const z = Object.keys(d$(Y));
  for (let U = 0;U < z.length; U++) {
    const D = z[U];
    let B = d$(Y)[D];
    if (X === true || X?.includes(D)) {
      if (!W)
        throw new Error("No secret is provided to cookie plugin");
      if (J) {
        if (B = u$(B, W), B === false)
          throw new M$(D);
      } else {
        let S = true;
        for (let N = 0;N < W.length; N++) {
          const O = u$(B, W[N]);
          if (O !== false) {
            B = O, S = false;
            break;
          }
        }
        if (S)
          throw new M$(D);
      }
    }
    const j = B.charCodeAt(0);
    if (j === 123 || j === 91)
      try {
        const S = new s0(JSON.parse(B));
        S.setter = $, S.name = D, Q[D] = S;
        continue;
      } catch {
      }
    if (!Number.isNaN(+B))
      B = +B;
    else if (B === "true")
      B = true;
    else if (B === "false")
      B = false;
    const b = new s0(B, Z);
    b.setter = $, b.name = D, Q[D] = b;
  }
  return jW(Q, $);
};
var PW = "toJSON" in new Headers;
var t0 = ($) => {
  for (let Y in $)
    return true;
  return false;
};
var OW = ($, Y) => {
  if (!$ || !Array.isArray(Y))
    return $;
  $.delete("Set-Cookie");
  for (let W = 0;W < Y.length; W++) {
    const X = Y[W].indexOf("=");
    $.append("Set-Cookie", `${Y[W].slice(0, X)}=${Y[W].slice(X + 1)}`);
  }
  return $;
};
var SW = ($) => {
  if (!$ || typeof $ !== "object" || !t0($))
    return;
  const Y = [];
  for (let [W, X] of Object.entries($)) {
    if (!W || !X)
      continue;
    if (Array.isArray(X.value))
      for (let Z = 0;Z < X.value.length; Z++) {
        let Q = X.value[Z];
        if (Q === undefined || Q === null)
          continue;
        if (typeof Q === "object")
          Q = JSON.stringify(Q);
        Y.push(y$(W, Q, X));
      }
    else {
      let Z = X.value;
      if (Z === undefined || Z === null)
        continue;
      if (typeof Z === "object")
        Z = JSON.stringify(Z);
      Y.push(y$(W, X.value, X));
    }
  }
  if (Y.length === 0)
    return;
  if (Y.length === 1)
    return Y[0];
  return Y;
};
var A1 = ($, Y) => {
  if (t0(Y.headers) || Y.status !== 200 || Y.redirect || Y.cookie) {
    if (typeof Y.status === "string")
      Y.status = F6[Y.status];
    if (Y.redirect) {
      if (Y.headers.Location = Y.redirect, !Y.status || Y.status < 300 || Y.status >= 400)
        Y.status = 302;
    }
    if (Y.cookie && t0(Y.cookie))
      Y.headers["Set-Cookie"] = SW(Y.cookie);
    if (Y.headers["Set-Cookie"] && Array.isArray(Y.headers["Set-Cookie"]))
      Y.headers = OW(new Headers(Y.headers), Y.headers["Set-Cookie"]);
    switch ($?.constructor?.name) {
      case "String":
      case "Blob":
        return new Response($, { status: Y.status, headers: Y.headers });
      case "Object":
      case "Array":
        return Response.json($, Y);
      case undefined:
        if (!$)
          return new Response("", Y);
        return Response.json($, Y);
      case "Response":
        const W = { ...Y.headers };
        if (PW)
          Y.headers = $.headers.toJSON();
        else
          for (let [Z, Q] of $.headers.entries())
            if (Z in Y.headers)
              Y.headers[Z] = Q;
        for (let Z in W)
          $.headers.append(Z, W[Z]);
        return $;
      case "Error":
        return A$($, Y);
      case "Promise":
        return $.then((Z) => A1(Z, Y));
      case "Function":
        return A1($(), Y);
      case "Number":
      case "Boolean":
        return new Response($.toString(), Y);
      case "Cookie":
        if ($ instanceof s0)
          return new Response($.value, Y);
        return new Response($?.toString(), Y);
      default:
        const X = JSON.stringify($);
        if (X.charCodeAt(0) === 123) {
          if (!Y.headers["Content-Type"])
            Y.headers["Content-Type"] = "application/json";
          return new Response(JSON.stringify($), Y);
        }
        return new Response(X, Y);
    }
  } else
    switch ($?.constructor?.name) {
      case "String":
      case "Blob":
        return new Response($);
      case "Object":
      case "Array":
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case undefined:
        if (!$)
          return new Response("");
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case "Response":
        return $;
      case "Error":
        return A$($, Y);
      case "Promise":
        return $.then((X) => {
          const Z = K1(X);
          if (Z !== undefined)
            return Z;
          return new Response("");
        });
      case "Function":
        return K1($());
      case "Number":
      case "Boolean":
        return new Response($.toString());
      case "Cookie":
        if ($ instanceof s0)
          return new Response($.value, Y);
        return new Response($?.toString(), Y);
      default:
        const W = JSON.stringify($);
        if (W.charCodeAt(0) === 123)
          return new Response(JSON.stringify($), { headers: { "Content-Type": "application/json" } });
        return new Response(W);
    }
};
var r0 = ($, Y) => {
  if ($ === undefined || $ === null)
    return;
  if (t0(Y.headers) || Y.status !== 200 || Y.redirect || Y.cookie) {
    if (typeof Y.status === "string")
      Y.status = F6[Y.status];
    if (Y.redirect) {
      if (Y.headers.Location = Y.redirect, !Y.status || Y.status < 300 || Y.status >= 400)
        Y.status = 302;
    }
    if (Y.cookie && t0(Y.cookie))
      Y.headers["Set-Cookie"] = SW(Y.cookie);
    if (Y.headers["Set-Cookie"] && Array.isArray(Y.headers["Set-Cookie"]))
      Y.headers = OW(new Headers(Y.headers), Y.headers["Set-Cookie"]);
    switch ($?.constructor?.name) {
      case "String":
      case "Blob":
        return new Response($, Y);
      case "Object":
      case "Array":
        return Response.json($, Y);
      case undefined:
        if (!$)
          return;
        return Response.json($, Y);
      case "Response":
        const W = Object.assign({}, Y.headers);
        if (PW)
          Y.headers = $.headers.toJSON();
        else
          for (let [Z, Q] of $.headers.entries())
            if (!(Z in Y.headers))
              Y.headers[Z] = Q;
        for (let Z in W)
          $.headers.append(Z, W[Z]);
        if ($.status !== Y.status)
          Y.status = $.status;
        return $;
      case "Promise":
        return $.then((Z) => {
          const Q = r0(Z, Y);
          if (Q !== undefined)
            return Q;
          return;
        });
      case "Error":
        return A$($, Y);
      case "Function":
        return r0($(), Y);
      case "Number":
      case "Boolean":
        return new Response($.toString(), Y);
      case "Cookie":
        if ($ instanceof s0)
          return new Response($.value, Y);
        return new Response($?.toString(), Y);
      default:
        const X = JSON.stringify($);
        if (X.charCodeAt(0) === 123) {
          if (!Y.headers["Content-Type"])
            Y.headers["Content-Type"] = "application/json";
          return new Response(JSON.stringify($), Y);
        }
        return new Response(X, Y);
    }
  } else
    switch ($?.constructor?.name) {
      case "String":
      case "Blob":
        return new Response($);
      case "Object":
      case "Array":
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case undefined:
        if (!$)
          return new Response("");
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case "Response":
        return $;
      case "Promise":
        return $.then((X) => {
          const Z = r0(X, Y);
          if (Z !== undefined)
            return Z;
          return;
        });
      case "Error":
        return A$($, Y);
      case "Function":
        return K1($());
      case "Number":
      case "Boolean":
        return new Response($.toString());
      case "Cookie":
        if ($ instanceof s0)
          return new Response($.value, Y);
        return new Response($?.toString(), Y);
      default:
        const W = JSON.stringify($);
        if (W.charCodeAt(0) === 123)
          return new Response(JSON.stringify($), { headers: { "Content-Type": "application/json" } });
        return new Response(W);
    }
};
var K1 = ($) => {
  switch ($?.constructor?.name) {
    case "String":
    case "Blob":
      return new Response($);
    case "Object":
    case "Array":
      return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
    case undefined:
      if (!$)
        return new Response("");
      return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
    case "Response":
      return $;
    case "Error":
      return A$($);
    case "Promise":
      return $.then((W) => {
        const X = K1(W);
        if (X !== undefined)
          return X;
        return new Response("");
      });
    case "Function":
      return K1($());
    case "Number":
    case "Boolean":
      return new Response($.toString());
    default:
      const Y = JSON.stringify($);
      if (Y.charCodeAt(0) === 123)
        return new Response(JSON.stringify($), { headers: { "Content-Type": "application/json" } });
      return new Response(Y);
  }
};
var A$ = ($, Y) => new Response(JSON.stringify({ name: $?.name, message: $?.message, cause: $?.cause }), { status: Y?.status !== 200 ? Y?.status ?? 500 : 500, headers: Y?.headers });
var pW = Q1(B6(), 1);
var A7 = new Headers().toJSON;
var iW = new RegExp(" (\\w+) = context", "g");
var mW = { value: 0 };
var uW = ({ hasTrace: $, hasTraceSet: Y = false, addFn: W, condition: X = {} }) => {
  if ($)
    return (Z, { name: Q, attribute: J = "", unit: z = 0 } = {}) => {
      const U = Z.indexOf("."), D = U === -1;
      if (Z !== "request" && Z !== "response" && !X[D ? Z : Z.slice(0, U)])
        return () => {
          if (Y && Z === "afterHandle")
            W("\nawait traceDone\n");
        };
      if (D)
        Q ||= Z;
      else
        Q ||= "anonymous";
      W("\n" + `reporter.emit('event', { 
					id,
					event: '${Z}',
					type: 'begin',
					name: '${Q}',
					time: performance.now(),
					${D ? `unit: ${z},` : ""}
					${J}
				})`.replace(/(\t| |\n)/g, "") + "\n");
      let B = false;
      return () => {
        if (B)
          return;
        if (B = true, W("\n" + `reporter.emit('event', {
							id,
							event: '${Z}',
							type: 'end',
							time: performance.now()
						})`.replace(/(\t| |\n)/g, "") + "\n"), Y && Z === "afterHandle")
          W("\nawait traceDone\n");
      };
    };
  else
    return () => () => {
    };
};
var D$ = ($) => {
  const Y = $.indexOf(")");
  if ($.charCodeAt(Y + 2) === 61 && $.charCodeAt(Y + 5) !== 123)
    return true;
  return $.includes("return");
};
var B7 = ($, { injectResponse: Y = "" } = {}) => ({ composeValidation: (W, X = `c.${W}`) => $ ? `c.set.status = 400; throw new ValidationError(
'${W}',
${W},
${X}
)` : `c.set.status = 400; return new ValidationError(
	'${W}',
	${W},
	${X}
).toResponse(c.set.headers)`, composeResponseValidation: (W = "r") => {
  const X = $ ? `throw new ValidationError(
'response',
response[c.set.status],
${W}
)` : `return new ValidationError(
'response',
response[c.set.status],
${W}
).toResponse(c.set.headers)`;
  return `\n${Y}
		if(response[c.set.status]?.Check(${W}) === false) { 
	if(!(response instanceof Error))
		${X}
}\n`;
} });
var K0 = ($, Y) => {
  if (Y = Y.trimStart(), Y = Y.replaceAll(/^async /g, ""), /^(\w+)\(/g.test(Y))
    Y = Y.slice(Y.indexOf("("));
  const W = Y.charCodeAt(0) === 40 || Y.startsWith("function") ? Y.slice(Y.indexOf("(") + 1, Y.indexOf(")")) : Y.slice(0, Y.indexOf("=") - 1);
  if (W === "")
    return false;
  const X = W.charCodeAt(0) === 123 ? W.indexOf("...") : -1;
  if (W.charCodeAt(0) === 123) {
    if (W.includes($))
      return true;
    if (X === -1)
      return false;
  }
  if (Y.match(new RegExp(`${W}(.${$}|\\["${$}"\\])`)))
    return true;
  const Z = X !== -1 ? W.slice(X + 3, W.indexOf(" ", X + 3)) : undefined;
  if (Y.match(new RegExp(`${Z}(.${$}|\\["${$}"\\])`)))
    return true;
  const Q = [W];
  if (Z)
    Q.push(Z);
  for (let z of Y.matchAll(iW))
    Q.push(z[1]);
  const J = new RegExp(`{.*?} = (${Q.join("|")})`, "g");
  for (let [z] of Y.matchAll(J))
    if (z.includes(`{ ${$}`) || z.includes(`, ${$}`))
      return true;
  return false;
};
var w$ = ($) => {
  if ($ = $.trimStart(), $ = $.replaceAll(/^async /g, ""), /^(\w+)\(/g.test($))
    $ = $.slice($.indexOf("("));
  const Y = $.charCodeAt(0) === 40 || $.startsWith("function") ? $.slice($.indexOf("(") + 1, $.indexOf(")")) : $.slice(0, $.indexOf("=") - 1);
  if (Y === "")
    return false;
  const W = Y.charCodeAt(0) === 123 ? Y.indexOf("...") : -1, X = W !== -1 ? Y.slice(W + 3, Y.indexOf(" ", W + 3)) : undefined, Z = [Y];
  if (X)
    Z.push(X);
  for (let J of $.matchAll(iW))
    Z.push(J[1]);
  for (let J of Z)
    if (new RegExp(`\\b\\w+\\([^)]*\\b${J}\\b[^)]*\\)`).test($))
      return true;
  const Q = new RegExp(`{.*?} = (${Z.join("|")})`, "g");
  for (let [J] of $.matchAll(Q))
    if (new RegExp(`\\b\\w+\\([^)]*\\b${J}\\b[^)]*\\)`).test($))
      return true;
  return false;
};
var t1 = Symbol.for("TypeBox.Kind");
var o$ = ($, Y) => {
  if (!Y)
    return;
  if ((t1 in Y) && Y[t1] === $)
    return true;
  if (Y.type === "object") {
    const W = Y.properties;
    for (let X of Object.keys(W)) {
      const Z = W[X];
      if (Z.type === "object") {
        if (o$($, Z))
          return true;
      } else if (Z.anyOf) {
        for (let Q = 0;Q < Z.anyOf.length; Q++)
          if (o$($, Z.anyOf[Q]))
            return true;
      }
      if ((t1 in Z) && Z[t1] === $)
        return true;
    }
    return false;
  }
  return Y.properties && (t1 in Y.properties) && Y.properties[t1] === $;
};
var D6 = Symbol.for("TypeBox.Transform");
var b1 = ($) => {
  if (!$)
    return;
  if ($.type === "object") {
    const Y = $.properties;
    for (let W of Object.keys(Y)) {
      const X = Y[W];
      if (X.type === "object") {
        if (b1(X))
          return true;
      } else if (X.anyOf) {
        for (let Q = 0;Q < X.anyOf.length; Q++)
          if (b1(X.anyOf[Q]))
            return true;
      }
      if (D6 in X)
        return true;
    }
    return false;
  }
  return (D6 in $) || $.properties && (D6 in $.properties);
};
var D7 = ($) => {
  if (!$)
    return;
  const Y = $?.schema;
  if (Y && ("anyOf" in Y)) {
    let W = false;
    const X = Y.anyOf[0].type;
    for (let Z of Y.anyOf)
      if (Z.type !== X) {
        W = true;
        break;
      }
    if (!W)
      return X;
  }
  return $.schema?.type;
};
var w7 = /(?:return|=>) \S*\(/g;
var N0 = ($) => {
  if ($.constructor.name === "AsyncFunction")
    return true;
  return $.toString().match(w7);
};
var hW = ({ path: $, method: Y, hooks: W, validator: X, handler: Z, handleError: Q, definitions: J, schema: z, onRequest: U, config: D, reporter: B }) => {
  const j = D.forceErrorEncapsulation || W.error.length > 0 || typeof Bun === "undefined" || W.onResponse.length > 0 || !!W.trace.length, b = W.onResponse.length ? `\n;(async () => {${W.onResponse.map((R, f) => `await res${f}(c)`).join(";")}})();\n` : "", S = W.trace.map((R) => R.toString());
  let N = false;
  if (w$(Z.toString()))
    N = true;
  if (!N)
    for (let [R, f] of Object.entries(W)) {
      if (!Array.isArray(f) || !f.length || !["parse", "transform", "beforeHandle", "afterHandle", "onResponse"].includes(R))
        continue;
      for (let i of f) {
        if (typeof i !== "function")
          continue;
        if (w$(i.toString())) {
          N = true;
          break;
        }
      }
      if (N)
        break;
    }
  const O = { parse: S.some((R) => K0("parse", R)), transform: S.some((R) => K0("transform", R)), handle: S.some((R) => K0("handle", R)), beforeHandle: S.some((R) => K0("beforeHandle", R)), afterHandle: S.some((R) => K0("afterHandle", R)), error: j || S.some((R) => K0("error", R)) }, P = W.trace.length > 0;
  let F = "";
  if (P)
    F += "\nconst id = c.$$requestId\n";
  F += j ? "try {\n" : "";
  const w = X || Y !== "GET" && Y !== "HEAD" ? [Z, ...W.transform, ...W.beforeHandle, ...W.afterHandle].map((R) => R.toString()) : [], I = N || Y !== "GET" && Y !== "HEAD" && W.type !== "none" && (!!X.body || !!W.type || w.some((R) => K0("body", R))), G = N || X.headers || w.some((R) => K0("headers", R)), k = N || X.cookie || w.some((R) => K0("cookie", R)), _ = X?.cookie?.schema;
  let e = "";
  if (_?.sign) {
    if (!_.secrets)
      throw new Error(`t.Cookie required secret which is not set in (${Y}) ${$}.`);
    const R = !_.secrets ? undefined : typeof _.secrets === "string" ? _.secrets : _.secrets[0];
    if (e += `const _setCookie = c.set.cookie
		if(_setCookie) {`, _.sign === true)
      e += `for(const [key, cookie] of Object.entries(_setCookie)) {
				c.set.cookie[key].value = signCookie(cookie.value, '${R}')
			}`;
    else
      for (let f of _.sign)
        e += `if(_setCookie['${f}']?.value) { c.set.cookie['${f}'].value = signCookie(_setCookie['${f}'].value, '${R}') }\n`;
    e += "}\n";
  }
  const { composeValidation: o, composeResponseValidation: r } = B7(j);
  if (G)
    F += A7 ? "c.headers = c.request.headers.toJSON()\n" : `c.headers = {}
                for (const [key, value] of c.request.headers.entries())
					c.headers[key] = value
				`;
  if (k) {
    const R = (i, n) => {
      const q0 = _?.[i] ?? n;
      if (!q0)
        return typeof n === "string" ? `${i}: "${n}",` : `${i}: ${n},`;
      if (typeof q0 === "string")
        return `${i}: '${q0}',`;
      if (q0 instanceof Date)
        return `${i}: new Date(${q0.getTime()}),`;
      return `${i}: ${q0},`;
    }, f = _ ? `{
			secret: ${_.secrets !== undefined ? typeof _.secrets === "string" ? `'${_.secrets}'` : "[" + _.secrets.reduce((i, n) => i + `'${n}',`, "") + "]" : "undefined"},
			sign: ${_.sign === true ? true : _.sign !== undefined ? "[" + _.sign.reduce((i, n) => i + `'${n}',`, "") + "]" : "undefined"},
			${R("domain")}
			${R("expires")}
			${R("httpOnly")}
			${R("maxAge")}
			${R("path", "/")}
			${R("priority")}
			${R("sameSite")}
			${R("secure")}
		}` : "undefined";
    if (G)
      F += `\nc.cookie = parseCookie(c.set, c.headers.cookie, ${f})\n`;
    else
      F += `\nc.cookie = parseCookie(c.set, c.request.headers.get('cookie'), ${f})\n`;
  }
  if (N || X.query || w.some((R) => K0("query", R)))
    F += `const url = c.request.url

		if(c.qi !== -1) {
			c.query ??= parseQuery(url.substring(c.qi + 1))
		} else {
			c.query ??= {}
		}
		`;
  const E0 = W.trace.map((R) => R.toString()).some((R) => K0("set", R) || w$(R));
  N || W.trace.some((R) => K0("set", R.toString()));
  const H0 = E0 || k || w.some((R) => K0("set", R)) || U.some((R) => K0("set", R.toString())), z0 = uW({ hasTrace: P, hasTraceSet: E0, condition: O, addFn: (R) => {
    F += R;
  } });
  if (P)
    F += "\nconst traceDone = new Promise(r => { reporter.once(`res${id}`, r) })\n";
  const u0 = I || E0 || N0(Z) || W.parse.length > 0 || W.afterHandle.some(N0) || W.beforeHandle.some(N0) || W.transform.some(N0), a0 = z0("parse", { unit: W.parse.length });
  if (I) {
    const R = D7(X?.body);
    if (W.type && !Array.isArray(W.type)) {
      if (W.type)
        switch (W.type) {
          case "json":
          case "application/json":
            F += "c.body = await c.request.json()\n";
            break;
          case "text":
          case "text/plain":
            F += "c.body = await c.request.text()\n";
            break;
          case "urlencoded":
          case "application/x-www-form-urlencoded":
            F += "c.body = parseQuery(await c.request.text())\n";
            break;
          case "arrayBuffer":
          case "application/octet-stream":
            F += "c.body = await c.request.arrayBuffer()\n";
            break;
          case "formdata":
          case "multipart/form-data":
            F += `c.body = {}

						const form = await c.request.formData()
						for (const key of form.keys()) {
							if (c.body[key])
								continue

							const value = form.getAll(key)
							if (value.length === 1)
								c.body[key] = value[0]
							else c.body[key] = value
						}\n`;
            break;
        }
      if (W.parse.length)
        F += "}}";
    } else {
      const i = (() => {
        if (W.parse.length && R && !Array.isArray(W.type)) {
          const n = X?.body?.schema;
          switch (R) {
            case "object":
              if (o$("File", n) || o$("Files", n))
                return `c.body = {}
		
								const form = await c.request.formData()
								for (const key of form.keys()) {
									if (c.body[key])
										continue
			
									const value = form.getAll(key)
									if (value.length === 1)
										c.body[key] = value[0]
									else c.body[key] = value
								}`;
              break;
            default:
              break;
          }
        }
      })();
      if (i)
        F += i;
      else {
        if (F += "\n", F += G ? "let contentType = c.headers['content-type']" : "let contentType = c.request.headers.get('content-type')", F += `
				if (contentType) {
					const index = contentType.indexOf(';')
					if (index !== -1) contentType = contentType.substring(0, index)\n`, W.parse.length) {
          F += "let used = false\n";
          const n = z0("parse", { unit: W.parse.length });
          for (let q0 = 0;q0 < W.parse.length; q0++) {
            const B0 = z0("parse.unit", { name: W.parse[q0].name }), D0 = `bo${q0}`;
            if (q0 !== 0)
              F += "if(!used) {\n";
            if (F += `let ${D0} = parse[${q0}](c, contentType)\n`, F += `if(${D0} instanceof Promise) ${D0} = await ${D0}\n`, F += `if(${D0} !== undefined) { c.body = ${D0}; used = true }\n`, B0(), q0 !== 0)
              F += "}";
          }
          n();
        }
        if (W.parse.length)
          F += "if (!used)";
        F += `
				switch (contentType) {
					case 'application/json':
						c.body = await c.request.json()
						break
				
					case 'text/plain':
						c.body = await c.request.text()
						break
				
					case 'application/x-www-form-urlencoded':
						c.body = parseQuery(await c.request.text())
						break
				
					case 'application/octet-stream':
						c.body = await c.request.arrayBuffer();
						break
				
					case 'multipart/form-data':
						c.body = {}
				
						const form = await c.request.formData()
						for (const key of form.keys()) {
							if (c.body[key])
								continue
				
							const value = form.getAll(key)
							if (value.length === 1)
								c.body[key] = value[0]
							else c.body[key] = value
						}
				
						break
					}\n`, F += "}\n";
      }
    }
    F += "\n";
  }
  if (a0(), W?.transform) {
    const R = z0("transform", { unit: W.transform.length });
    for (let f = 0;f < W.transform.length; f++) {
      const i = W.transform[f], n = z0("transform.unit", { name: i.name });
      if (i.$elysia === "derive")
        F += N0(W.transform[f]) ? `Object.assign(c, await transform[${f}](c));` : `Object.assign(c, transform[${f}](c));`;
      else
        F += N0(W.transform[f]) ? `await transform[${f}](c);` : `transform[${f}](c);`;
      n();
    }
    R();
  }
  if (X) {
    if (F += "\n", X.headers) {
      if (F += `if(headers.Check(c.headers) === false) {
				${o("headers")}
			}`, b1(X.headers.schema))
        F += "\nc.headers = headers.Decode(c.headers)\n";
    }
    if (X.params) {
      if (F += `if(params.Check(c.params) === false) {
				${o("params")}
			}`, b1(X.params.schema))
        F += "\nc.params = params.Decode(c.params)\n";
    }
    if (X.query) {
      if (F += `if(query.Check(c.query) === false) {
				${o("query")} 
			}`, b1(X.query.schema))
        F += "\nc.query = query.Decode(Object.assign({}, c.query))\n";
    }
    if (X.body) {
      if (F += `if(body.Check(c.body) === false) { 
				${o("body")}
			}`, b1(X.body.schema))
        F += "\nc.body = body.Decode(c.body)\n";
    }
    if (t0(X.cookie?.schema.properties ?? {})) {
      if (F += `const cookieValue = {}
			for(const [key, value] of Object.entries(c.cookie))
				cookieValue[key] = value.value

			if(cookie.Check(cookieValue) === false) {
				${o("cookie", "cookieValue")}
			}`, b1(X.cookie.schema))
        F += "\nc.cookie = params.Decode(c.cookie)\n";
    }
  }
  if (W?.beforeHandle) {
    const R = z0("beforeHandle", { unit: W.beforeHandle.length });
    for (let f = 0;f < W.beforeHandle.length; f++) {
      const i = z0("beforeHandle.unit", { name: W.beforeHandle[f].name }), n = `be${f}`;
      if (!D$(W.beforeHandle[f].toString()))
        F += N0(W.beforeHandle[f]) ? `await beforeHandle[${f}](c);\n` : `beforeHandle[${f}](c);\n`, i();
      else {
        F += N0(W.beforeHandle[f]) ? `let ${n} = await beforeHandle[${f}](c);\n` : `let ${n} = beforeHandle[${f}](c);\n`, i(), F += `if(${n} !== undefined) {\n`;
        const B0 = z0("afterHandle", { unit: W.transform.length });
        if (W.afterHandle) {
          const D0 = n;
          for (let w0 = 0;w0 < W.afterHandle.length; w0++) {
            const M0 = D$(W.afterHandle[w0].toString()), B1 = z0("afterHandle.unit", { name: W.afterHandle[w0].name });
            if (F += `c.response = ${D0}\n`, !M0)
              F += N0(W.afterHandle[w0]) ? `await afterHandle[${w0}](c, ${D0});\n` : `afterHandle[${w0}](c, ${D0});\n`;
            else {
              const K = `af${w0}`;
              F += N0(W.afterHandle[w0]) ? `const ${K} = await afterHandle[${w0}](c);\n` : `const ${K} = afterHandle[${w0}](c);\n`, F += `if(${K} !== undefined) { c.response = ${D0} = ${K} }\n`;
            }
            B1();
          }
        }
        if (B0(), X.response)
          F += r(n);
        F += e, F += `return mapEarlyResponse(${n}, c.set)}\n`;
      }
    }
    R();
  }
  if (W?.afterHandle.length) {
    const R = z0("handle", { name: Z.name });
    if (W.afterHandle.length)
      F += N0(Z) ? "let r = c.response = await handler(c);\n" : "let r = c.response = handler(c);\n";
    else
      F += N0(Z) ? "let r = await handler(c);\n" : "let r = handler(c);\n";
    R();
    const f = z0("afterHandle", { unit: W.afterHandle.length });
    for (let i = 0;i < W.afterHandle.length; i++) {
      const n = `af${i}`, q0 = D$(W.afterHandle[i].toString()), B0 = z0("afterHandle.unit", { name: W.afterHandle[i].name });
      if (!q0)
        F += N0(W.afterHandle[i]) ? `await afterHandle[${i}](c)\n` : `afterHandle[${i}](c)\n`, B0();
      else {
        if (X.response)
          F += N0(W.afterHandle[i]) ? `let ${n} = await afterHandle[${i}](c)\n` : `let ${n} = afterHandle[${i}](c)\n`;
        else
          F += N0(W.afterHandle[i]) ? `let ${n} = mapEarlyResponse(await afterHandle[${i}](c), c.set)\n` : `let ${n} = mapEarlyResponse(afterHandle[${i}](c), c.set)\n`;
        if (B0(), X.response)
          F += `if(${n} !== undefined) {`, F += r(n), F += `${n} = mapEarlyResponse(${n}, c.set)\n`, F += `if(${n}) {`, f(), F += `return ${n} } }`;
        else
          F += `if(${n}) {`, f(), F += `return ${n}}\n`;
      }
    }
    if (f(), F += "r = c.response\n", X.response)
      F += r();
    if (F += e, H0)
      F += "return mapResponse(r, c.set)\n";
    else
      F += "return mapCompactResponse(r)\n";
  } else {
    const R = z0("handle", { name: Z.name });
    if (X.response)
      if (F += N0(Z) ? "const r = await handler(c);\n" : "const r = handler(c);\n", R(), F += r(), z0("afterHandle")(), F += e, H0)
        F += "return mapResponse(r, c.set)\n";
      else
        F += "return mapCompactResponse(r)\n";
    else if (O.handle || k)
      if (F += N0(Z) ? "let r = await handler(c);\n" : "let r = handler(c);\n", R(), z0("afterHandle")(), F += e, H0)
        F += "return mapResponse(r, c.set)\n";
      else
        F += "return mapCompactResponse(r)\n";
    else {
      R();
      const f = N0(Z) ? "await handler(c) " : "handler(c)";
      if (z0("afterHandle")(), H0)
        F += `return mapResponse(${f}, c.set)\n`;
      else
        F += `return mapCompactResponse(${f})\n`;
    }
  }
  if (j || b) {
    if (F += `
} catch(error) {`, !u0)
      F += "return (async () => {";
    F += `const set = c.set

		if (!set.status || set.status < 300) set.status = 500
	`;
    const R = z0("error", { unit: W.error.length });
    if (W.error.length)
      for (let f = 0;f < W.error.length; f++) {
        const i = `er${f}`, n = z0("error.unit", { name: W.error[f].name });
        if (F += `\nlet ${i} = handleErrors[${f}](
					Object.assign(c, {
						error: error,
						code: error.code ?? error[ERROR_CODE] ?? "UNKNOWN"
					})
				)\n`, N0(W.error[f]))
          F += `if (${i} instanceof Promise) ${i} = await ${i}\n`;
        n(), F += `${i} = mapEarlyResponse(${i}, set)\n`, F += `if (${i}) {`, F += `return ${i} }\n`;
      }
    if (R(), F += "return handleError(c, error)\n\n", !u0)
      F += "})()";
    if (F += "}", b || P) {
      F += " finally { ";
      const f = z0("response", { unit: W.onResponse.length });
      F += b, f(), F += "}";
    }
  }
  return F = `const { 
		handler,
		handleError,
		hooks: {
			transform,
			beforeHandle,
			afterHandle,
			parse,
			error: handleErrors,
			onResponse
		},
		validator: {
			body,
			headers,
			params,
			query,
			response,
			cookie
		},
		utils: {
			mapResponse,
			mapCompactResponse,
			mapEarlyResponse,
			parseQuery
		},
		error: {
			NotFoundError,
			ValidationError,
			InternalServerError
		},
		schema,
		definitions,
		ERROR_CODE,
		reporter,
		requestId,
		parseCookie,
		signCookie
	} = hooks

	${W.onResponse.length ? `const ${W.onResponse.map((R, f) => `res${f} = onResponse[${f}]`).join(",")}` : ""}

	return ${u0 ? "async" : ""} function(c) {
		${z && J ? "c.schema = schema; c.defs = definitions;" : ""}
		${F}
	}`, Function("hooks", F)({ handler: Z, hooks: W, validator: X, handleError: Q, utils: { mapResponse: A1, mapCompactResponse: K1, mapEarlyResponse: r0, parseQuery: pW.parse }, error: { NotFoundError: S1, ValidationError: P0, InternalServerError: f$ }, schema: z, definitions: J, ERROR_CODE: n1, reporter: B, requestId: mW, parseCookie: h$, signCookie: I1 });
};
var w6 = ($) => {
  let Y = "", W = "";
  for (let j of Object.keys($.decorators))
    Y += `,${j}: app.decorators.${j}`;
  const { router: X, staticRouter: Z } = $, Q = $.event.trace.length > 0, J = `
	const route = find(request.method, path) ${X.root.ALL ? '?? find("ALL", path)' : ""}
	if (route === null)
		return ${$.event.error.length ? "app.handleError(ctx, notFound)" : `new Response(error404, {
					status: ctx.set.status === 200 ? 404 : ctx.set.status,
					headers: ctx.set.headers
				})`}

	ctx.params = route.params

	return route.store(ctx)`;
  let z = "";
  for (let [j, { code: b, all: S }] of Object.entries(Z.map))
    z += `case '${j}':\nswitch(request.method) {\n${b}\n${S ?? "default: break map"}}\n\n`;
  const U = $.event.request.some(N0);
  W += `const {
		app,
		app: { store, router, staticRouter },
		mapEarlyResponse,
		NotFoundError,
		requestId,
		reporter
	} = data

	const notFound = new NotFoundError()

	${$.event.request.length ? "const onRequest = app.event.request" : ""}

	${Z.variables}

	const find = router.find.bind(router)
	const handleError = app.handleError.bind(this)

	${$.event.error.length ? "" : "const error404 = notFound.message.toString()"}

	return ${U ? "async" : ""} function map(request) {
	`;
  const D = $.event.trace.map((j) => j.toString()), B = uW({ hasTrace: Q, hasTraceSet: $.event.trace.some((j) => {
    const b = j.toString();
    return K0("set", b) || w$(b);
  }), condition: { request: D.some((j) => K0("request", j) || w$(j)) }, addFn: (j) => {
    W += j;
  } });
  if ($.event.request.length) {
    W += `
			${Q ? "const id = +requestId.value++" : ""}

			const ctx = {
				request,
				store,
				set: {
					cookie: {},
					headers: {},
					status: 200
				}
				${Q ? ",$$requestId: +id" : ""}
				${Y}
			}
		`;
    const j = B("request", { attribute: "ctx", unit: $.event.request.length });
    W += "try {\n";
    for (let b = 0;b < $.event.request.length; b++) {
      const S = $.event.request[b], N = D$(S.toString()), O = N0(S), P = B("request.unit", { name: $.event.request[b].name }), F = `re${b}`;
      if (N)
        W += `const ${F} = mapEarlyResponse(
					${O ? "await" : ""} onRequest[${b}](ctx),
					ctx.set
				)\n`, P(), W += `if(${F}) return ${F}\n`;
      else
        W += `${O ? "await" : ""} onRequest[${b}](ctx)\n`, P();
    }
    W += `} catch (error) {
			return app.handleError(ctx, error)
		}`, j(), W += `
		const url = request.url,
		s = url.indexOf('/', 11),
		i = ctx.qi = url.indexOf('?', s + 1),
		path = ctx.path = i === -1 ? url.substring(s) : url.substring(s, i);`;
  } else
    W += `
		const url = request.url,
			s = url.indexOf('/', 11),
			qi = url.indexOf('?', s + 1),
			path = qi === -1
				? url.substring(s)
				: url.substring(s, qi)

		${Q ? "const id = +requestId.value++" : ""}

		const ctx = {
			request,
			store,
			qi,
			path,
			set: {
				headers: {},
				status: 200
			}
			${Q ? ",$$requestId: id" : ""}
			${Y}
		}`, B("request", { unit: $.event.request.length, attribute: D.some((j) => K0("context", j)) || D.some((j) => K0("store", j)) || D.some((j) => K0("set", j)) ? "ctx" : "" })();
  return W += `
		map: switch(path) {
			${z}

			default:
				break
		}

		${J}
	}`, $.handleError = K6($), Function("data", W)({ app: $, mapEarlyResponse: r0, NotFoundError: S1, reporter: $.reporter, requestId: mW });
};
var K6 = ($) => {
  let Y = `const {
		app: { event: { error: onError, onResponse: res } },
		mapResponse,
		ERROR_CODE
	} = inject

	return ${$.event.error.find(N0) ? "async" : ""} function(context, error) {
		const { set } = context
		`;
  for (let W = 0;W < $.event.error.length; W++) {
    const X = $.event.error[W], Z = `${N0(X) ? "await " : ""}onError[${W}](
			Object.assign(context, {
				code: error.code ?? error[ERROR_CODE] ?? 'UNKNOWN',
				error
			})
		)`;
    if (D$(X.toString()))
      Y += `const r${W} = ${Z}; if(r${W} !== undefined) return mapResponse(r${W}, set)\n`;
    else
      Y += Z + "\n";
  }
  return Y += `if(error.constructor.name === "ValidationError") {
		set.status = error.status ?? 400
		return new Response(
			error.message, 
			{ headers: set.headers, status: set.status }
		)
	} else {
		return new Response(error.message, { headers: set.headers, status: error.status ?? 500 })
	}
}`, Function("inject", Y)({ app: $, mapResponse: A1, ERROR_CODE: n1 });
};
var n$ = Q1(B6(), 1);
var j6 = ($) => async (Y) => {
  const W = { cookie: {}, status: 200, headers: {} };
  let X;
  if ($.decorators)
    X = $.decorators, X.request = Y, X.set = W, X.store = $.store;
  else
    X = { set: W, store: $.store, request: Y };
  const Z = Y.url, Q = Z.indexOf("/", 11), J = Z.indexOf("?", Q + 1), z = J === -1 ? Z.substring(Q) : Z.substring(Q, J);
  try {
    for (let P = 0;P < $.event.request.length; P++) {
      const F = $.event.request[P];
      let w = F(X);
      if (w instanceof Promise)
        w = await w;
      if (w = r0(w, W), w)
        return w;
    }
    const U = $.dynamicRouter.find(Y.method, z) ?? $.dynamicRouter.find("ALL", z);
    if (!U)
      throw new S1;
    const { handle: D, hooks: B, validator: j, content: b } = U.store;
    let S;
    if (Y.method !== "GET" && Y.method !== "HEAD")
      if (b)
        switch (b) {
          case "application/json":
            S = await Y.json();
            break;
          case "text/plain":
            S = await Y.text();
            break;
          case "application/x-www-form-urlencoded":
            S = n$.parse(await Y.text());
            break;
          case "application/octet-stream":
            S = await Y.arrayBuffer();
            break;
          case "multipart/form-data":
            S = {};
            const P = await Y.formData();
            for (let F of P.keys()) {
              if (S[F])
                continue;
              const w = P.getAll(F);
              if (w.length === 1)
                S[F] = w[0];
              else
                S[F] = w;
            }
            break;
        }
      else {
        let P = Y.headers.get("content-type");
        if (P) {
          const F = P.indexOf(";");
          if (F !== -1)
            P = P.slice(0, F);
          for (let w = 0;w < $.event.parse.length; w++) {
            let I = $.event.parse[w](X, P);
            if (I instanceof Promise)
              I = await I;
            if (I) {
              S = I;
              break;
            }
          }
          if (S === undefined)
            switch (P) {
              case "application/json":
                S = await Y.json();
                break;
              case "text/plain":
                S = await Y.text();
                break;
              case "application/x-www-form-urlencoded":
                S = n$.parse(await Y.text());
                break;
              case "application/octet-stream":
                S = await Y.arrayBuffer();
                break;
              case "multipart/form-data":
                S = {};
                const w = await Y.formData();
                for (let I of w.keys()) {
                  if (S[I])
                    continue;
                  const G = w.getAll(I);
                  if (G.length === 1)
                    S[I] = G[0];
                  else
                    S[I] = G;
                }
                break;
            }
        }
      }
    X.body = S, X.params = U?.params || undefined, X.query = J === -1 ? {} : n$.parse(Z.substring(J + 1)), X.headers = {};
    for (let [P, F] of Y.headers.entries())
      X.headers[P] = F;
    const N = j?.cookie?.schema;
    X.cookie = h$(X.set, X.headers.cookie, N ? { secret: N.secrets !== undefined ? typeof N.secrets === "string" ? N.secrets : N.secrets.join(",") : undefined, sign: N.sign === true ? true : N.sign !== undefined ? typeof N.sign === "string" ? N.sign : N.sign.join(",") : undefined } : undefined);
    for (let P = 0;P < B.transform.length; P++) {
      const F = B.transform[P](X);
      if (B.transform[P].$elysia === "derive")
        if (F instanceof Promise)
          Object.assign(X, await F);
        else
          Object.assign(X, F);
      else if (F instanceof Promise)
        await F;
    }
    if (j) {
      if (j.headers) {
        const P = {};
        for (let F in Y.headers)
          P[F] = Y.headers.get(F);
        if (j.headers.Check(P) === false)
          throw new P0("header", j.headers, P);
      }
      if (j.params?.Check(X.params) === false)
        throw new P0("params", j.params, X.params);
      if (j.query?.Check(X.query) === false)
        throw new P0("query", j.query, X.query);
      if (j.cookie) {
        const P = {};
        for (let [F, w] of Object.entries(X.cookie))
          P[F] = w.value;
        if (j.cookie?.Check(P) === false)
          throw new P0("cookie", j.cookie, P);
      }
      if (j.body?.Check(S) === false)
        throw new P0("body", j.body, S);
    }
    for (let P = 0;P < B.beforeHandle.length; P++) {
      let F = B.beforeHandle[P](X);
      if (F instanceof Promise)
        F = await F;
      if (F !== undefined) {
        X.response = F;
        for (let I = 0;I < B.afterHandle.length; I++) {
          let G = B.afterHandle[I](X);
          if (G instanceof Promise)
            G = await G;
          if (G)
            F = G;
        }
        const w = r0(F, X.set);
        if (w)
          return w;
      }
    }
    let O = D(X);
    if (O instanceof Promise)
      O = await O;
    if (!B.afterHandle.length) {
      const P = j?.response?.[O.status];
      if (P?.Check(O) === false)
        throw new P0("response", P, O);
    } else {
      X.response = O;
      for (let P = 0;P < B.afterHandle.length; P++) {
        let F = B.afterHandle[P](X);
        if (F instanceof Promise)
          F = await F;
        const w = r0(F, X.set);
        if (w !== undefined) {
          const I = j?.response?.[O.status];
          if (I?.Check(w) === false)
            throw new P0("response", I, w);
          return w;
        }
      }
    }
    if (X.set.cookie && N?.sign) {
      const P = !N.secrets ? undefined : typeof N.secrets === "string" ? N.secrets : N.secrets[0];
      if (N.sign === true)
        for (let [F, w] of Object.entries(X.set.cookie))
          X.set.cookie[F].value = I1(w.value, "${secret}");
      else
        for (let F of N.sign) {
          if (!(F in N.properties))
            continue;
          if (X.set.cookie[F]?.value)
            X.set.cookie[F].value = I1(X.set.cookie[F].value, P);
        }
    }
    return A1(O, X.set);
  } catch (U) {
    if (U.status)
      W.status = U.status;
    return $.handleError(X, U);
  } finally {
    for (let U of $.event.onResponse)
      await U(X);
  }
};
var oW = ($) => async (Y, W) => {
  const X = Object.assign(Y, W);
  X.set = Y.set;
  for (let Z = 0;Z < $.event.error.length; Z++) {
    let Q = $.event.error[Z](X);
    if (Q instanceof Promise)
      Q = await Q;
    if (Q !== undefined && Q !== null)
      return A1(Q, Y.set);
  }
  return new Response(typeof W.cause === "string" ? W.cause : W.message, { headers: Y.set.headers, status: W.status ?? 500 });
};
var G1 = Q1(E$(), 1);
var Y0 = Q1(f0(), 1);
try {
  G1.TypeSystem.Format("email", ($) => /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test($)), G1.TypeSystem.Format("uuid", ($) => /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test($)), G1.TypeSystem.Format("date", ($) => !Number.isNaN(new Date($).getTime())), G1.TypeSystem.Format("date-time", ($) => !Number.isNaN(new Date($).getTime()));
} catch ($) {
}
var nW = ($) => {
  if (typeof $ === "string")
    switch ($.slice(-1)) {
      case "k":
        return +$.slice(0, $.length - 1) * 1024;
      case "m":
        return +$.slice(0, $.length - 1) * 1048576;
      default:
        return +$;
    }
  return $;
};
var P6 = ($, Y) => {
  if (!(Y instanceof Blob))
    return false;
  if ($.minSize && Y.size < nW($.minSize))
    return false;
  if ($.maxSize && Y.size > nW($.maxSize))
    return false;
  if ($.extension)
    if (typeof $.extension === "string") {
      if (!Y.type.startsWith($.extension))
        return false;
    } else {
      for (let W = 0;W < $.extension.length; W++)
        if (Y.type.startsWith($.extension[W]))
          return true;
      return false;
    }
  return true;
};
var K7 = G1.TypeSystem.Type("Files", ($, Y) => {
  if (!Array.isArray(Y))
    return P6($, Y);
  if ($.minItems && Y.length < $.minItems)
    return false;
  if ($.maxItems && Y.length > $.maxItems)
    return false;
  for (let W = 0;W < Y.length; W++)
    if (!P6($, Y[W]))
      return false;
  return true;
});
Y0.FormatRegistry.Set("numeric", ($) => !isNaN(+$));
Y0.FormatRegistry.Set("ObjectString", ($) => {
  let Y = $.charCodeAt(0);
  if (Y === 9 || Y === 10 || Y === 32)
    Y = $.trimStart().charCodeAt(0);
  if (Y !== 123 && Y !== 91)
    return false;
  try {
    return JSON.parse($), true;
  } catch {
    return false;
  }
});
var R1 = { Numeric: ($) => Y0.Type.Transform(Y0.Type.Union([Y0.Type.String({ format: "numeric", default: 0 }), Y0.Type.Number($)])).Decode((Y) => {
  const W = +Y;
  if (isNaN(W))
    return Y;
  return W;
}).Encode((Y) => Y), ObjectString: ($, Y) => Y0.Type.Transform(Y0.Type.Union([Y0.Type.String({ format: "ObjectString", default: "" }), Y0.Type.Object($, Y)])).Decode((W) => {
  if (typeof W === "string")
    try {
      return JSON.parse(W);
    } catch {
      return W;
    }
  return W;
}).Encode((W) => JSON.stringify(W)), File: G1.TypeSystem.Type("File", P6), Files: ($ = {}) => Y0.Type.Transform(Y0.Type.Union([K7($)])).Decode((Y) => {
  if (Array.isArray(Y))
    return Y;
  return [Y];
}).Encode((Y) => Y), Nullable: ($) => Y0.Type.Union([Y0.Type.Null(), $]), MaybeEmpty: ($) => Y0.Type.Union([Y0.Type.Null(), Y0.Type.Undefined(), $]), Cookie: ($, Y) => Y0.Type.Object($, Y) };
Y0.Type.ObjectString = R1.ObjectString;
Y0.Type.Numeric = R1.Numeric;
Y0.Type.File = ($ = {}) => R1.File({ default: "File", ...$, extension: $?.type, type: "string", format: "binary" });
Y0.Type.Files = ($ = {}) => R1.Files({ ...$, elysiaMeta: "Files", default: "Files", extension: $?.type, type: "array", items: { ...$, default: "Files", type: "string", format: "binary" } });
Y0.Type.Nullable = ($) => R1.Nullable($);
Y0.Type.MaybeEmpty = R1.MaybeEmpty;
Y0.Type.Cookie = R1.Cookie;

class c$ {
  config;
  dependencies = {};
  store = {};
  decorators = {};
  definitions = { type: {}, error: {} };
  schema = {};
  event = { start: [], request: [], parse: [], transform: [], beforeHandle: [], afterHandle: [], onResponse: [], trace: [], error: [], stop: [] };
  reporter = new R6;
  server = null;
  getServer() {
    return this.server;
  }
  validator = null;
  router = new E1;
  routes = [];
  staticRouter = { handlers: [], variables: "", map: {}, all: "" };
  dynamicRouter = new E1;
  lazyLoadModules = [];
  path = "";
  constructor($) {
    this.config = { forceErrorEncapsulation: false, prefix: "", aot: true, strictPath: false, scoped: false, cookie: {}, ...$, seed: $?.seed === undefined ? "" : $?.seed };
  }
  add($, Y, W, X, { allowMeta: Z = false, skipPrefix: Q = false } = { allowMeta: false, skipPrefix: false }) {
    if (typeof Y === "string")
      Y = [Y];
    for (let J of Y) {
      if (J = J === "" ? J : J.charCodeAt(0) === 47 ? J : `/${J}`, this.config.prefix && !Q)
        J = this.config.prefix + J;
      if (X?.type)
        switch (X.type) {
          case "text":
            X.type = "text/plain";
            break;
          case "json":
            X.type = "application/json";
            break;
          case "formdata":
            X.type = "multipart/form-data";
            break;
          case "urlencoded":
            X.type = "application/x-www-form-urlencoded";
            break;
          case "arrayBuffer":
            X.type = "application/octet-stream";
            break;
          default:
            break;
        }
      const z = this.definitions.type;
      let U = X1(X?.cookie ?? this.validator?.cookie, { dynamic: !this.config.aot, models: z, additionalProperties: true });
      if (t0(this.config.cookie ?? {}))
        if (U)
          U.schema = DW(U.schema, this.config.cookie ?? {});
        else
          U = X1(Y0.Type.Cookie({}, this.config.cookie), { dynamic: !this.config.aot, models: z, additionalProperties: true });
      const D = { body: X1(X?.body ?? this.validator?.body, { dynamic: !this.config.aot, models: z }), headers: X1(X?.headers ?? this.validator?.headers, { dynamic: !this.config.aot, models: z, additionalProperties: true }), params: X1(X?.params ?? this.validator?.params, { dynamic: !this.config.aot, models: z }), query: X1(X?.query ?? this.validator?.query, { dynamic: !this.config.aot, models: z }), cookie: U, response: q6(X?.response ?? this.validator?.response, { dynamic: !this.config.aot, models: z }) }, B = C1(this.event, X), j = J.endsWith("/") ? J.slice(0, J.length - 1) : J + "/";
      if (this.config.aot === false) {
        if (this.dynamicRouter.add($, J, { validator: D, hooks: B, content: X?.type, handle: W }), this.config.strictPath === false)
          this.dynamicRouter.add($, j, { validator: D, hooks: B, content: X?.type, handle: W });
        this.routes.push({ method: $, path: J, composed: null, handler: W, hooks: B });
        return;
      }
      const b = hW({ path: J, method: $, hooks: B, validator: D, handler: W, handleError: this.handleError, onRequest: this.event.request, config: this.config, definitions: Z ? this.definitions.type : undefined, schema: Z ? this.schema : undefined, reporter: this.reporter }), S = this.routes.findIndex((N) => N.path === J && N.method === $);
      if (S !== -1)
        this.routes.splice(S, 1);
      if (this.routes.push({ method: $, path: J, composed: b, handler: W, hooks: B }), J.indexOf(":") === -1 && J.indexOf("*") === -1) {
        const N = this.staticRouter.handlers.length;
        if (this.staticRouter.handlers.push(b), this.staticRouter.variables += `const st${N} = staticRouter.handlers[${N}]\n`, !this.staticRouter.map[J])
          this.staticRouter.map[J] = { code: "" };
        if ($ === "ALL")
          this.staticRouter.map[J].all = `default: return st${N}(ctx)\n`;
        else
          this.staticRouter.map[J].code = `case '${$}': return st${N}(ctx)\n${this.staticRouter.map[J].code}`;
        if (!this.config.strictPath) {
          if (!this.staticRouter.map[j])
            this.staticRouter.map[j] = { code: "" };
          if ($ === "ALL")
            this.staticRouter.map[j].all = `default: return st${N}(ctx)\n`;
          else
            this.staticRouter.map[j].code = `case '${$}': return st${N}(ctx)\n${this.staticRouter.map[j].code}`;
        }
      } else if (this.router.add($, J, b), !this.config.strictPath)
        this.router.add($, J.endsWith("/") ? J.slice(0, J.length - 1) : J + "/", b);
    }
  }
  onStart($) {
    return this.on("start", $), this;
  }
  onRequest($) {
    return this.on("request", $), this;
  }
  onParse($) {
    return this.on("parse", $), this;
  }
  onTransform($) {
    return this.on("transform", $), this;
  }
  onBeforeHandle($) {
    return this.on("beforeHandle", $), this;
  }
  onAfterHandle($) {
    return this.on("afterHandle", $), this;
  }
  onResponse($) {
    return this.on("response", $), this;
  }
  trace($) {
    return this.reporter.on("event", _6(this.reporter, $)), this.on("trace", $), this;
  }
  addError($, Y) {
    return this.error($, Y);
  }
  error($, Y) {
    switch (typeof $) {
      case "string":
        return Y.prototype[n1] = $, this.definitions.error[$] = Y, this;
      case "function":
        return this.definitions.error = $(this.definitions.error), this;
    }
    for (let [W, X] of Object.entries($))
      X.prototype[n1] = W, this.definitions.error[W] = X;
    return this;
  }
  onError($) {
    return this.on("error", $), this;
  }
  onStop($) {
    return this.on("stop", $), this;
  }
  on($, Y) {
    for (let W of Array.isArray(Y) ? Y : [Y])
      switch (W = wW(W), $) {
        case "start":
          this.event.start.push(W);
          break;
        case "request":
          this.event.request.push(W);
          break;
        case "response":
          this.event.onResponse.push(W);
          break;
        case "parse":
          this.event.parse.splice(this.event.parse.length - 1, 0, W);
          break;
        case "transform":
          this.event.transform.push(W);
          break;
        case "beforeHandle":
          this.event.beforeHandle.push(W);
          break;
        case "afterHandle":
          this.event.afterHandle.push(W);
          break;
        case "trace":
          this.event.trace.push(W);
          break;
        case "error":
          this.event.error.push(W);
          break;
        case "stop":
          this.event.stop.push(W);
          break;
      }
    return this;
  }
  group($, Y, W) {
    const X = new c$({ ...this.config, prefix: "" });
    X.store = this.store;
    const Z = typeof Y === "object", Q = (Z ? W : Y)(X);
    if (this.decorators = U1(this.decorators, X.decorators), Q.event.request.length)
      this.event.request = [...this.event.request, ...Q.event.request];
    if (Q.event.onResponse.length)
      this.event.onResponse = [...this.event.onResponse, ...Q.event.onResponse];
    return this.model(Q.definitions.type), Object.values(X.routes).forEach(({ method: J, path: z, handler: U, hooks: D }) => {
      if (z = (Z ? "" : this.config.prefix) + $ + z, Z) {
        const B = Y, j = D;
        this.add(J, z, U, C1(B, { ...j, error: !j.error ? Q.event.error : Array.isArray(j.error) ? [...j.error, ...Q.event.error] : [j.error, ...Q.event.error] }));
      } else
        this.add(J, z, U, C1(D, { error: Q.event.error }), { skipPrefix: true });
    }), this;
  }
  guard($, Y) {
    if (!Y)
      return this.event = m$(this.event, $), this.validator = { body: $.body, headers: $.headers, params: $.params, query: $.query, response: $.response }, this;
    const W = new c$;
    W.store = this.store;
    const X = Y(W);
    if (this.decorators = U1(this.decorators, W.decorators), X.event.request.length)
      this.event.request = [...this.event.request, ...X.event.request];
    if (X.event.onResponse.length)
      this.event.onResponse = [...this.event.onResponse, ...X.event.onResponse];
    return this.model(X.definitions.type), Object.values(W.routes).forEach(({ method: Z, path: Q, handler: J, hooks: z }) => {
      this.add(Z, Q, J, C1($, { ...z, error: !z.error ? X.event.error : Array.isArray(z.error) ? [...z.error, ...X.event.error] : [z.error, ...X.event.error] }));
    }), this;
  }
  use($) {
    if ($ instanceof Promise)
      return this.lazyLoadModules.push($.then((Y) => {
        if (typeof Y === "function")
          return Y(this);
        if (typeof Y.default === "function")
          return Y.default(this);
        return this._use(Y);
      }).then((Y) => Y.compile())), this;
    else
      return this._use($);
    return this;
  }
  _use($) {
    if (typeof $ === "function") {
      const Z = $(this);
      if (Z instanceof Promise)
        return this.lazyLoadModules.push(Z.then((Q) => {
          if (typeof Q === "function")
            return Q(this);
          if (typeof Q.default === "function")
            return Q.default(this);
          return this._use(Q);
        }).then((Q) => Q.compile())), this;
      return Z;
    }
    const { name: Y, seed: W } = $.config;
    $.getServer = () => this.getServer();
    const X = $.config.scoped;
    if (X) {
      if (Y) {
        if (!(Y in this.dependencies))
          this.dependencies[Y] = [];
        const Q = W !== undefined ? M6(Y + JSON.stringify(W)) : 0;
        if (this.dependencies[Y].some((J) => Q === J))
          return this;
        this.dependencies[Y].push(Q);
      }
      if ($.model(this.definitions.type), $.error(this.definitions.error), $.onRequest((Q) => {
        Object.assign(Q, this.decorators), Object.assign(Q.store, this.store);
      }), $.event.trace = [...this.event.trace, ...$.event.trace], $.config.aot)
        $.compile();
      const Z = this.mount($.fetch);
      return this.routes = this.routes.concat(Z.routes), this;
    }
    this.decorate($.decorators), this.state($.store), this.model($.definitions.type), this.error($.definitions.error);
    for (let { method: Z, path: Q, handler: J, hooks: z } of Object.values($.routes))
      this.add(Z, Q, J, C1(z, { error: $.event.error }));
    if (!X)
      if (Y) {
        if (!(Y in this.dependencies))
          this.dependencies[Y] = [];
        const Z = W !== undefined ? M6(Y + JSON.stringify(W)) : 0;
        if (this.dependencies[Y].some((Q) => Z === Q))
          return this;
        this.dependencies[Y].push(Z), this.event = m$(this.event, N6($.event), Z);
      } else
        this.event = m$(this.event, N6($.event));
    return this;
  }
  mount($, Y) {
    if (typeof $ === "function" || $.length === 0 || $ === "/") {
      const Z = typeof $ === "function" ? $ : Y, Q = async ({ request: J, path: z }) => Z(new Request("http://a.cc" + z || "/", J));
      return this.all("/", Q, { type: "none" }), this.all("/*", Q, { type: "none" }), this;
    }
    const W = $.length, X = async ({ request: Z, path: Q }) => Y(new Request("http://a.cc" + Q.slice(W) || "/", Z));
    return this.all($, X, { type: "none" }), this.all($ + ($.endsWith("/") ? "*" : "/*"), X, { type: "none" }), this;
  }
  get($, Y, W) {
    return this.add("GET", $, Y, W), this;
  }
  post($, Y, W) {
    return this.add("POST", $, Y, W), this;
  }
  put($, Y, W) {
    return this.add("PUT", $, Y, W), this;
  }
  patch($, Y, W) {
    return this.add("PATCH", $, Y, W), this;
  }
  delete($, Y, W) {
    return this.add("DELETE", $, Y, W), this;
  }
  options($, Y, W) {
    return this.add("OPTIONS", $, Y, W), this;
  }
  all($, Y, W) {
    return this.add("ALL", $, Y, W), this;
  }
  head($, Y, W) {
    return this.add("HEAD", $, Y, W), this;
  }
  connect($, Y, W) {
    return this.add("CONNECT", $, Y, W), this;
  }
  ws($, Y) {
    const W = Y.transformMessage ? Array.isArray(Y.transformMessage) ? Y.transformMessage : [Y.transformMessage] : undefined;
    let X = null;
    const Z = X1(Y?.body, { models: this.definitions.type }), Q = X1(Y?.response, { models: this.definitions.type }), J = (z) => {
      const U = z.charCodeAt(0);
      if (U === 47 || U === 123)
        try {
          z = JSON.parse(z);
        } catch {
        }
      else if (!Number.isNaN(+z))
        z = +z;
      if (W?.length)
        for (let D = 0;D < W.length; D++) {
          const B = W[D](z);
          if (B !== undefined)
            z = B;
        }
      return z;
    };
    return this.get($, (z) => {
      const { set: U, path: D, qi: B, headers: j, query: b, params: S } = z;
      if (X === null)
        X = this.getServer();
      if (X?.upgrade(z.request, { headers: typeof Y.upgrade === "function" ? Y.upgrade(z) : Y.upgrade, data: { validator: Q, open(N) {
        Y.open?.(new c1(N, z));
      }, message: (N, O) => {
        const P = J(O);
        if (Z?.Check(P) === false)
          return void N.send(new P0("message", Z, P).message);
        Y.message?.(new c1(N, z), P);
      }, drain(N) {
        Y.drain?.(new c1(N, z));
      }, close(N, O, P) {
        Y.close?.(new c1(N, z), O, P);
      } } }))
        return;
      return U.status = 400, "Expected a websocket connection";
    }, { beforeHandle: Y.beforeHandle, transform: Y.transform, headers: Y.headers, params: Y.params, query: Y.query }), this;
  }
  route($, Y, W, { config: X, ...Z } = { config: { allowMeta: false } }) {
    return this.add($, Y, W, Z, X), this;
  }
  state($, Y) {
    switch (typeof $) {
      case "object":
        return this.store = U1(this.store, $), this;
      case "function":
        return this.store = $(this.store), this;
    }
    if (!($ in this.store))
      this.store[$] = Y;
    return this;
  }
  decorate($, Y) {
    switch (typeof $) {
      case "object":
        return this.decorators = U1(this.decorators, $), this;
      case "function":
        return this.decorators = $(this.decorators), this;
    }
    if (!($ in this.decorators))
      this.decorators[$] = Y;
    return this;
  }
  derive($) {
    return $.$elysia = "derive", this.onTransform($);
  }
  model($, Y) {
    switch (typeof $) {
      case "object":
        return Object.entries($).forEach(([W, X]) => {
          if (!(W in this.definitions.type))
            this.definitions.type[W] = X;
        }), this;
      case "function":
        return this.definitions.type = $(this.definitions.type), this;
    }
    return this.definitions.type[$] = Y, this;
  }
  mapDerive($) {
    return $.$elysia = "derive", this.onTransform($);
  }
  affix($, Y, W) {
    if (W === "")
      return this;
    const X = ["_", "-", " "], Z = (U) => U[0].toUpperCase() + U.slice(1), Q = $ === "prefix" ? (U, D) => X.includes(U.at(-1) ?? "") ? U + D : U + Z(D) : X.includes(W.at(-1) ?? "") ? (U, D) => D + U : (U, D) => D + Z(U), J = (U) => {
      const D = {};
      switch (U) {
        case "decorator":
          for (let B in this.decorators)
            D[Q(W, B)] = this.decorators[B];
          this.decorators = D;
          break;
        case "state":
          for (let B in this.store)
            D[Q(W, B)] = this.store[B];
          this.store = D;
          break;
        case "model":
          for (let B in this.definitions.type)
            D[Q(W, B)] = this.definitions.type[B];
          this.definitions.type = D;
          break;
        case "error":
          for (let B in this.definitions.error)
            D[Q(W, B)] = this.definitions.error[B];
          this.definitions.error = D;
          break;
      }
    }, z = Array.isArray(Y) ? Y : [Y];
    for (let U of z.some((D) => D === "all") ? ["decorator", "state", "model", "error"] : z)
      J(U);
    return this;
  }
  prefix($, Y) {
    return this.affix("prefix", $, Y);
  }
  suffix($, Y) {
    return this.affix("suffix", $, Y);
  }
  compile() {
    if (this.fetch = this.config.aot ? w6(this) : j6(this), typeof this.server?.reload === "function")
      this.server.reload({ ...this.server, fetch: this.fetch });
    return this;
  }
  handle = async ($) => this.fetch($);
  fetch = ($) => (this.fetch = this.config.aot ? w6(this) : j6(this))($);
  handleError = async ($, Y) => (this.handleError = this.config.aot ? K6(this) : oW(this))($, Y);
  outerErrorHandler = ($) => new Response($.message || $.name || "Error", { status: $?.status ?? 500 });
  listen = ($, Y) => {
    if (!Bun)
      throw new Error("Bun to run");
    if (this.compile(), typeof $ === "string") {
      if ($ = +$.trim(), Number.isNaN($))
        throw new Error("Port must be a numeric value");
    }
    const W = this.fetch, X = typeof $ === "object" ? { development: !q$, ...this.config.serve, ...$, websocket: { ...this.config.websocket, ...W6 }, fetch: W, error: this.outerErrorHandler } : { development: !q$, ...this.config.serve, websocket: { ...this.config.websocket, ...W6 }, port: $, fetch: W, error: this.outerErrorHandler };
    if (typeof Bun === "undefined")
      throw new Error(".listen() is designed to run on Bun only. If you are running Elysia in other environment please use a dedicated plugin or export the handler via Elysia.fetch");
    if (this.server = Bun?.serve(X), this.event.start.length)
      (async () => {
        const Z = Object.assign(this.decorators, { store: this.store, app: this });
        for (let Q = 0;Q < this.event.transform.length; Q++) {
          const J = this.event.transform[Q](Z);
          if (this.event.transform[Q].$elysia === "derive")
            if (J instanceof Promise)
              Object.assign(Z, await J);
            else
              Object.assign(Z, J);
        }
        for (let Q = 0;Q < this.event.start.length; Q++)
          this.event.start[Q](Z);
      })();
    if (Y)
      Y(this.server);
    return Promise.all(this.lazyLoadModules).then(() => {
      Bun?.gc(false);
    }), this;
  };
  stop = async () => {
    if (!this.server)
      throw new Error("Elysia isn't running. Call `app.listen` to start the server.");
    if (this.server.stop(), this.event.stop.length)
      (async () => {
        const $ = Object.assign(this.decorators, { store: this.store, app: this });
        for (let Y = 0;Y < this.event.transform.length; Y++) {
          const W = this.event.transform[Y]($);
          if (this.event.transform[Y].$elysia === "derive")
            if (W instanceof Promise)
              Object.assign($, await W);
            else
              Object.assign($, W);
        }
        for (let Y = 0;Y < this.event.stop.length; Y++)
          this.event.stop[Y]($);
      })();
  };
  get modules() {
    return Promise.all(this.lazyLoadModules);
  }
}
var export_t = Y0.Type;

// src/index.ts
var app = new c$().get("/", () => "Hello Elysia").listen(process.env.PORT ?? 3000);
console.log(`\uD83E\uDD8A Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
