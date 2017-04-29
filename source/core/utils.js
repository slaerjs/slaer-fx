
/*!
Extends {out} from one or more other objects (L <-- R).
This function preserves any existing keys.

@returns out
*/
export function extend(out) {
  var i = arguments.length;

  while (0 <-- i) {
    for (var key in arguments[i]) {
      // Preserve exxisting keys
      if (typeof out[key] === 'undefined') {
        out[key] = arguments[i][key];
      }
    }
  }

  return out;
};

/*!
Merges one or more objects over {out} (L --> R)
This function overwrites any existing properties.

@returns out
*/
export function merge(out) {
  for (var i = 1, N = arguments.length; i < N; i++) {
    for (var key in arguments[i]) {
      out[key] = arguments[i][key];
    }
  }

  return out;
};

/*!
Extends an object based on the results from a merge operation.
*/
export function mergeExtend(out) {
  // FIXME: Use ES2015 spread syntax
  return extend(out, merge.apply(null, [{}].concat(Array.prototype.slice.call(arguments, 1))));
}
