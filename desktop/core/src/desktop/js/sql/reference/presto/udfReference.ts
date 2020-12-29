import { UdfCategory, UdfCategoryFunctions } from 'sql/reference/types';
import I18n from 'utils/i18n';


const SCALAR_FUNCTIONS: UdfCategoryFunctions = {
  "abs": {
    "arguments": [
      [
        {
          "type": "DOUBLE"
        }
      ]
    ],
    "description": "Returns the absolute value.",
    "draggable": "abs()",
    "name": "abs",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "abs(DOUBLE a)"
  },
  "acos": {
    "arguments": [
      [
        {
          "type": "DECIMAL"
        },
        {
          "type": "DOUBLE"
        }
      ]
    ],
    "description": "Returns the arccosine of a if -1\u003c=a\u003c=1 or NULL otherwise.",
    "draggable": "acos()",
    "name": "acos",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "acos(DECIMAL|DOUBLE a)"
  },
  "all_match": {
    "arguments": [
      [
        {
          "type": "array(T)"
        }
      ],
      [
        {
          "type": "function(T,boolean)"
        }
      ]
    ],
    "description": "Returns true if all elements of the array match the given predicate",
    "draggable": "all_match()",
    "name": "all_match",
    "returnTypes": [
      "boolean"
    ],
    "signature": "all_match(array(T), function(T,boolean))"
  },
  "any_match": {
    "arguments": [
      [
        {
          "type": "array(T)"
        }
      ],
      [
        {
          "type": "function(T,boolean)"
        }
      ]
    ],
    "description": "Returns true if the array contains one or more elements that match the given predicate",
    "draggable": "any_match()",
    "name": "any_match",
    "returnTypes": [
      "boolean"
    ],
    "signature": "any_match(array(T), function(T,boolean))"
  },
  "array_average": {
    "arguments": [
      [
        {
          "type": "array(double)"
        }
      ]
    ],
    "description": "Returns the average of all array elements, or null if the array is empty. Ignores null elements.",
    "draggable": "array_average()",
    "name": "array_average",
    "returnTypes": [
      "double"
    ],
    "signature": "array_average(array(double))"
  },
  "array_distinct": {
    "arguments": [
      [
        {
          "type": "array(E)"
        }
      ]
    ],
    "description": "Remove duplicate values from the given array",
    "draggable": "array_distinct()",
    "name": "array_distinct",
    "returnTypes": [
      "array(E)"
    ],
    "signature": "array_distinct(array(E))"
  },
  "array_except": {
    "arguments": [
      [
        {
          "type": "array(E)"
        }
      ],
      [
        {
          "type": "array(E)"
        }
      ]
    ],
    "description": "Returns an array of elements that are in the first array but not the second, without duplicates.",
    "draggable": "array_except()",
    "name": "array_except",
    "returnTypes": [
      "array(E)"
    ],
    "signature": "array_except(array(E), array(E))"
  },
  "array_intersect": {
    "arguments": [
      [
        {
          "type": "array(E)"
        }
      ],
      [
        {
          "type": "array(E)"
        }
      ]
    ],
    "description": "Intersects elements of the two given arrays",
    "draggable": "array_intersect()",
    "name": "array_intersect",
    "returnTypes": [
      "array(E)"
    ],
    "signature": "array_intersect(array(E), array(E))"
  },
  "array_join": {
    "arguments": [
      [
        {
          "type": "array(T)"
        }
      ],
      [
        {
          "type": "varchar"
        }
      ],
      [
        {
          "type": "varchar"
        }
      ]
    ],
    "description": "Concatenates the elements of the given array using a delimiter and an optional string to replace nulls",
    "draggable": "array_join()",
    "name": "array_join",
    "returnTypes": [
      "varchar"
    ],
    "signature": "array_join(array(T), varchar, varchar)"
  },
  "array_max": {
    "arguments": [
      [
        {
          "type": "array(T)"
        }
      ]
    ],
    "description": "Get maximum value of array",
    "draggable": "array_max()",
    "name": "array_max",
    "returnTypes": [
      "T"
    ],
    "signature": "array_max(array(T))"
  },
  "array_min": {
    "arguments": [
      [
        {
          "type": "array(T)"
        }
      ]
    ],
    "description": "Get minimum value of array",
    "draggable": "array_min()",
    "name": "array_min",
    "returnTypes": [
      "T"
    ],
    "signature": "array_min(array(T))"
  },
  "array_position": {
    "arguments": [
      [
        {
          "type": "array(T)"
        }
      ],
      [
        {
          "type": "T"
        }
      ]
    ],
    "description": "Returns the position of the first occurrence of the given value in array (or 0 if not found)",
    "draggable": "array_position()",
    "name": "array_position",
    "returnTypes": [
      "bigint"
    ],
    "signature": "array_position(array(T), T)"
  },
  "array_remove": {
    "arguments": [
      [
        {
          "type": "array(E)"
        }
      ],
      [
        {
          "type": "E"
        }
      ]
    ],
    "description": "Remove specified values from the given array",
    "draggable": "array_remove()",
    "name": "array_remove",
    "returnTypes": [
      "array(E)"
    ],
    "signature": "array_remove(array(E), E)"
  },
  "array_sort": {
    "arguments": [
      [
        {
          "type": "array(T)"
        }
      ],
      [
        {
          "type": "function(T,T,integer)"
        }
      ]
    ],
    "description": "Sorts the given array with a lambda comparator.",
    "draggable": "array_sort()",
    "name": "array_sort",
    "returnTypes": [
      "array(T)"
    ],
    "signature": "array_sort(array(T), function(T,T,integer))"
  },
  "array_sum": {
    "arguments": [
      [
        {
          "type": "array(double)"
        }
      ]
    ],
    "description": "Returns the sum of all array elements, or 0 if the array is empty. Ignores null elements.",
    "draggable": "array_sum()",
    "name": "array_sum",
    "returnTypes": [
      "double"
    ],
    "signature": "array_sum(array(double))"
  },
  "array_union": {
    "arguments": [
      [
        {
          "type": "array(E)"
        }
      ],
      [
        {
          "type": "array(E)"
        }
      ]
    ],
    "description": "Union elements of the two given arrays",
    "draggable": "array_union()",
    "name": "array_union",
    "returnTypes": [
      "array(E)"
    ],
    "signature": "array_union(array(E), array(E))"
  },
  "arrays_overlap": {
    "arguments": [
      [
        {
          "type": "array(E)"
        }
      ],
      [
        {
          "type": "array(E)"
        }
      ]
    ],
    "description": "Returns true if arrays have common elements",
    "draggable": "arrays_overlap()",
    "name": "arrays_overlap",
    "returnTypes": [
      "boolean"
    ],
    "signature": "arrays_overlap(array(E), array(E))"
  },
  "asin": {
    "arguments": [
      [
        {
          "type": "DECIMAL"
        },
        {
          "type": "DOUBLE"
        }
      ]
    ],
    "description": "Returns the arc sin of a if -1\u003c=a\u003c=1 or NULL otherwise.",
    "draggable": "asin()",
    "name": "asin",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "asin(DECIMAL|DOUBLE a)"
  },
  "atan": {
    "arguments": [
      [
        {
          "type": "DECIMAL"
        },
        {
          "type": "DOUBLE"
        }
      ]
    ],
    "description": "Returns the arctangent of a.",
    "draggable": "atan()",
    "name": "atan",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "atan(DECIMAL|DOUBLE a)"
  },
  "atan2": {
    "arguments": [
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "arc tangent of given fraction",
    "draggable": "atan2()",
    "name": "atan2",
    "returnTypes": [
      "double"
    ],
    "signature": "atan2(double, double)"
  },
  "bar": {
    "arguments": [
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "color"
        }
      ],
      [
        {
          "type": "color"
        }
      ]
    ],
    "description": "",
    "draggable": "bar()",
    "name": "bar",
    "returnTypes": [
      "varchar"
    ],
    "signature": "bar(double, bigint, color, color)"
  },
  "beta_cdf": {
    "arguments": [
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "Beta cdf given the a, b parameters and value",
    "draggable": "beta_cdf()",
    "name": "beta_cdf",
    "returnTypes": [
      "double"
    ],
    "signature": "beta_cdf(double, double, double)"
  },
  "bing_tile": {
    "arguments": [
      [
        {
          "type": "varchar"
        }
      ]
    ],
    "description": "Creates a Bing tile from a QuadKey",
    "draggable": "bing_tile()",
    "name": "bing_tile",
    "returnTypes": [
      "BingTile"
    ],
    "signature": "bing_tile(varchar)"
  },
  "bing_tile_at": {
    "arguments": [
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "integer"
        }
      ]
    ],
    "description": "Given a (latitude, longitude) point, returns the containing Bing tile at the specified zoom level",
    "draggable": "bing_tile_at()",
    "name": "bing_tile_at",
    "returnTypes": [
      "BingTile"
    ],
    "signature": "bing_tile_at(double, double, integer)"
  },
  "bing_tile_children": {
    "arguments": [
      [
        {
          "type": "BingTile"
        }
      ],
      [
        {
          "type": "integer"
        }
      ]
    ],
    "description": "Return the children for the given zoom level for a Bing tile",
    "draggable": "bing_tile_children()",
    "name": "bing_tile_children",
    "returnTypes": [
      "array(BingTile)"
    ],
    "signature": "bing_tile_children(BingTile, integer)"
  },
  "bing_tile_coordinates": {
    "arguments": [
      [
        {
          "type": "BingTile"
        }
      ]
    ],
    "description": "Given a Bing tile, returns XY coordinates of the tile",
    "draggable": "bing_tile_coordinates()",
    "name": "bing_tile_coordinates",
    "returnTypes": [
      "row(x integer",
      "y integer)"
    ],
    "signature": "bing_tile_coordinates(BingTile)"
  },
  "bing_tile_parent": {
    "arguments": [
      [
        {
          "type": "BingTile"
        }
      ],
      [
        {
          "type": "integer"
        }
      ]
    ],
    "description": "Return the parent for the given zoom level for a Bing tile",
    "draggable": "bing_tile_parent()",
    "name": "bing_tile_parent",
    "returnTypes": [
      "BingTile"
    ],
    "signature": "bing_tile_parent(BingTile, integer)"
  },
  "bing_tile_polygon": {
    "arguments": [
      [
        {
          "type": "BingTile"
        }
      ]
    ],
    "description": "Given a Bing tile, returns the polygon representation of the tile",
    "draggable": "bing_tile_polygon()",
    "name": "bing_tile_polygon",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "bing_tile_polygon(BingTile)"
  },
  "bing_tile_quadkey": {
    "arguments": [
      [
        {
          "type": "BingTile"
        }
      ]
    ],
    "description": "Given a Bing tile, returns its QuadKey",
    "draggable": "bing_tile_quadkey()",
    "name": "bing_tile_quadkey",
    "returnTypes": [
      "varchar"
    ],
    "signature": "bing_tile_quadkey(BingTile)"
  },
  "bing_tile_zoom_level": {
    "arguments": [
      [
        {
          "type": "BingTile"
        }
      ]
    ],
    "description": "Given a Bing tile, returns zoom level of the tile",
    "draggable": "bing_tile_zoom_level()",
    "name": "bing_tile_zoom_level",
    "returnTypes": [
      "tinyint"
    ],
    "signature": "bing_tile_zoom_level(BingTile)"
  },
  "bing_tiles_around": {
    "arguments": [
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "integer"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "Given a (latitude, longitude) point, a radius in kilometers and a zoom level, returns a minimum set of Bing tiles at specified zoom level that cover a circle of specified radius around the specified point.",
    "draggable": "bing_tiles_around()",
    "name": "bing_tiles_around",
    "returnTypes": [
      "array(BingTile)"
    ],
    "signature": "bing_tiles_around(double, double, integer, double)"
  },
  "bit_count": {
    "arguments": [
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "count number of set bits in 2\u0027s complement representation",
    "draggable": "bit_count()",
    "name": "bit_count",
    "returnTypes": [
      "bigint"
    ],
    "signature": "bit_count(bigint, bigint)"
  },
  "bitwise_and": {
    "arguments": [
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "bitwise AND in 2\u0027s complement arithmetic",
    "draggable": "bitwise_and()",
    "name": "bitwise_and",
    "returnTypes": [
      "bigint"
    ],
    "signature": "bitwise_and(bigint, bigint)"
  },
  "bitwise_arithmetic_shift_right": {
    "arguments": [
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "arithmetic shift right operation",
    "draggable": "bitwise_arithmetic_shift_right()",
    "name": "bitwise_arithmetic_shift_right",
    "returnTypes": [
      "bigint"
    ],
    "signature": "bitwise_arithmetic_shift_right(bigint, bigint)"
  },
  "bitwise_logical_shift_right": {
    "arguments": [
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "logical shift right operation with specified bits",
    "draggable": "bitwise_logical_shift_right()",
    "name": "bitwise_logical_shift_right",
    "returnTypes": [
      "bigint"
    ],
    "signature": "bitwise_logical_shift_right(bigint, bigint, bigint)"
  },
  "bitwise_not": {
    "arguments": [
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "bitwise NOT in 2\u0027s complement arithmetic",
    "draggable": "bitwise_not()",
    "name": "bitwise_not",
    "returnTypes": [
      "bigint"
    ],
    "signature": "bitwise_not(bigint)"
  },
  "bitwise_or": {
    "arguments": [
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "bitwise OR in 2\u0027s complement arithmetic",
    "draggable": "bitwise_or()",
    "name": "bitwise_or",
    "returnTypes": [
      "bigint"
    ],
    "signature": "bitwise_or(bigint, bigint)"
  },
  "bitwise_shift_left": {
    "arguments": [
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "shift left operation with specified bits",
    "draggable": "bitwise_shift_left()",
    "name": "bitwise_shift_left",
    "returnTypes": [
      "bigint"
    ],
    "signature": "bitwise_shift_left(bigint, bigint, bigint)"
  },
  "bitwise_xor": {
    "arguments": [
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "bitwise XOR in 2\u0027s complement arithmetic",
    "draggable": "bitwise_xor()",
    "name": "bitwise_xor",
    "returnTypes": [
      "bigint"
    ],
    "signature": "bitwise_xor(bigint, bigint)"
  },
  "cardinality": {
    "arguments": [
      [
        {
          "type": "map(K,V)"
        }
      ]
    ],
    "description": "Returns the cardinality (the number of key-value pairs) of the map",
    "draggable": "cardinality()",
    "name": "cardinality",
    "returnTypes": [
      "bigint"
    ],
    "signature": "cardinality(map(K,V))"
  },
  "cbrt": {
    "arguments": [
      [
        {
          "type": "DOUBLE"
        }
      ]
    ],
    "description": "Returns the cube root of a double value.",
    "draggable": "cbft()",
    "name": "cbrt",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "cbft(DOUBLE a)"
  },
  "ceil": {
    "arguments": [
      [
        {
          "type": "DOUBLE"
        }
      ]
    ],
    "description": "Returns the minimum BIGINT value that is equal to or greater than a.",
    "draggable": "ceil()",
    "name": "ceil",
    "returnTypes": [
      "BIGINT"
    ],
    "signature": "ceil(DOUBLE a)"
  },
  "ceiling": {
    "arguments": [
      [
        {
          "type": "DOUBLE"
        }
      ]
    ],
    "description": "Returns the minimum BIGINT value that is equal to or greater than a.",
    "draggable": "ceiling()",
    "name": "ceiling",
    "returnTypes": [
      "BIGINT"
    ],
    "signature": "ceiling(DOUBLE a)"
  },
  "char2hexint": {
    "arguments": [
      [
        {
          "type": "varchar"
        }
      ]
    ],
    "description": "Returns the hexadecimal representation of the UTF-16BE encoding of the argument",
    "draggable": "char2hexint()",
    "name": "char2hexint",
    "returnTypes": [
      "varchar"
    ],
    "signature": "char2hexint(varchar)"
  },
  "chr": {
    "arguments": [
      [
        {
          "type": "BIGINT"
        },
        {
          "type": "DOUBLE"
        }
      ]
    ],
    "description": "Returns the ASCII character having the binary equivalent to a (as of Hive 1.3.0 and 2.1.0). If a is larger than 256 the result is equivalent to chr(a % 256). Example: select chr(88); returns \"X\".",
    "draggable": "chr()",
    "name": "chr",
    "returnTypes": [
      "STRING"
    ],
    "signature": "chr(BIGINT|DOUBLE a)"
  },
  "classify": {
    "arguments": [
      [
        {
          "type": "map(bigint,double)"
        }
      ],
      [
        {
          "type": "Classifier(varchar)"
        }
      ]
    ],
    "description": "",
    "draggable": "classify()",
    "name": "classify",
    "returnTypes": [
      "varchar"
    ],
    "signature": "classify(map(bigint,double), Classifier(varchar))"
  },
  "codepoint": {
    "arguments": [
      [
        {
          "type": "varchar(1)"
        }
      ]
    ],
    "description": "returns Unicode code point of a single character string",
    "draggable": "codepoint()",
    "name": "codepoint",
    "returnTypes": [
      "integer"
    ],
    "signature": "codepoint(varchar(1))"
  },
  "color": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ]
    ],
    "description": "",
    "draggable": "color()",
    "name": "color",
    "returnTypes": [
      "color"
    ],
    "signature": "color(varchar(x))"
  },
  "combinations": {
    "arguments": [
      [
        {
          "type": "array(T)"
        }
      ],
      [
        {
          "type": "integer"
        }
      ]
    ],
    "description": "Returns n-element combinations from array",
    "draggable": "combinations()",
    "name": "combinations",
    "returnTypes": [
      "array(array(T))"
    ],
    "signature": "combinations(array(T), integer)"
  },
  "concat": {
    "arguments": [
      [
        {
          "multiple": true,
          "type": "STRING"
        },
        {
          "multiple": true,
          "type": "BINARY"
        }
      ]
    ],
    "description": "Returns the string or bytes resulting from concatenating the strings or bytes passed in as parameters in order. For example, concat(\u0027foo\u0027, \u0027bar\u0027) results in \u0027foobar\u0027. Note that this function can take any number of input strings.",
    "draggable": "concat()",
    "name": "concat",
    "returnTypes": [
      "STRING"
    ],
    "signature": "concat(STRING|BINARY a, STRING|BINARY b...)"
  },
  "contains": {
    "arguments": [
      [
        {
          "type": "array(T)"
        }
      ],
      [
        {
          "type": "T"
        }
      ]
    ],
    "description": "Determines whether given value exists in the array",
    "draggable": "contains()",
    "name": "contains",
    "returnTypes": [
      "boolean"
    ],
    "signature": "contains(array(T), T)"
  },
  "cos": {
    "arguments": [
      [
        {
          "type": "DECIMAL"
        },
        {
          "type": "DOUBLE"
        }
      ]
    ],
    "description": "Returns the cosine of a (a is in radians).",
    "draggable": "cos()",
    "name": "cos",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "cos(DECIMAL|DOUBLE a)"
  },
  "cosh": {
    "arguments": [
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "hyperbolic cosine",
    "draggable": "cosh()",
    "name": "cosh",
    "returnTypes": [
      "double"
    ],
    "signature": "cosh(double)"
  },
  "cosine_similarity": {
    "arguments": [
      [
        {
          "type": "map(varchar,double)"
        }
      ],
      [
        {
          "type": "map(varchar,double)"
        }
      ]
    ],
    "description": "cosine similarity between the given sparse vectors",
    "draggable": "cosine_similarity()",
    "name": "cosine_similarity",
    "returnTypes": [
      "double"
    ],
    "signature": "cosine_similarity(map(varchar,double), map(varchar,double))"
  },
  "crc32": {
    "arguments": [
      [
        {
          "type": "STRING"
        },
        {
          "type": "BINARY"
        }
      ]
    ],
    "description": "Computes a cyclic redundancy check value for string or binary argument and returns bigint value (as of Hive 1.3.0). Example: crc32(\u0027ABC\u0027) = 2743272264.",
    "draggable": "crc32()",
    "name": "crc32",
    "returnTypes": [
      "BIGINT"
    ],
    "signature": "crc32(STRING|BINARY a)"
  },
  "current_date": {
    "arguments": [],
    "description": "Returns the current date at the start of query evaluation (as of Hive 1.2.0). All calls of current_date within the same query return the same value.",
    "draggable": "current_date",
    "name": "current_date",
    "returnTypes": [
      "DATE"
    ],
    "signature": "current_date"
  },
  "current_time": {
    "arguments": [
      [
        {
          "type": ""
        }
      ]
    ],
    "description": "current time with time zone",
    "draggable": "current_time()",
    "name": "current_time",
    "returnTypes": [
      "time with time zone"
    ],
    "signature": "current_time()"
  },
  "current_timestamp": {
    "arguments": [],
    "description": "Returns the current timestamp at the start of query evaluation (as of Hive 1.2.0). All calls of current_timestamp within the same query return the same value.",
    "draggable": "current_timestamp()",
    "name": "current_timestamp",
    "returnTypes": [
      "TIMESTAMP"
    ],
    "signature": "current_timestamp()"
  },
  "current_timezone": {
    "arguments": [
      [
        {
          "type": ""
        }
      ]
    ],
    "description": "current time zone",
    "draggable": "current_timezone()",
    "name": "current_timezone",
    "returnTypes": [
      "varchar"
    ],
    "signature": "current_timezone()"
  },
  "date": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ]
    ],
    "description": "",
    "draggable": "date()",
    "name": "date",
    "returnTypes": [
      "date"
    ],
    "signature": "date(varchar(x))"
  },
  "date_add": {
    "arguments": [
      [
        {
          "type": "DATE"
        },
        {
          "type": "STRING"
        }
      ],
      [
        {
          "type": "INT"
        }
      ]
    ],
    "description": "Adds a number of days to startdate: date_add(\u00272008-12-31\u0027, 1) = \u00272009-01-01\u0027. T = pre 2.1.0: STRING, 2.1.0 on: DATE",
    "draggable": "date_add()",
    "name": "date_add",
    "returnTypes": [
      "T"
    ],
    "signature": "date_add(DATE startdate, INT days)"
  },
  "date_diff": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "timestamp"
        }
      ],
      [
        {
          "type": "timestamp"
        }
      ]
    ],
    "description": "difference of the given times in the given unit",
    "draggable": "date_diff()",
    "name": "date_diff",
    "returnTypes": [
      "bigint"
    ],
    "signature": "date_diff(varchar(x), timestamp, timestamp)"
  },
  "date_format": {
    "arguments": [
      [
        {
          "type": "DATE"
        },
        {
          "type": "STRING"
        },
        {
          "type": "TIMESTAMP"
        }
      ],
      [
        {
          "type": "STRING"
        }
      ]
    ],
    "description": "Converts a date/timestamp/string to a value of string in the format specified by the date format fmt (as of Hive 1.2.0). Supported formats are Java SimpleDateFormat formats - https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html. The second argument fmt should be constant. Example: date_format(\u00272015-04-08\u0027, \u0027y\u0027) = \u00272015\u0027.",
    "draggable": "date_format()",
    "name": "date_format",
    "returnTypes": [
      "STRING"
    ],
    "signature": "date_format(DATE|TIMESTAMP|STRING ts, STRING fmt)"
  },
  "date_parse": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "varchar(y)"
        }
      ]
    ],
    "description": "",
    "draggable": "date_parse()",
    "name": "date_parse",
    "returnTypes": [
      "timestamp"
    ],
    "signature": "date_parse(varchar(x), varchar(y))"
  },
  "date_trunc": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "timestamp with time zone"
        }
      ]
    ],
    "description": "truncate to the specified precision",
    "draggable": "date_trunc()",
    "name": "date_trunc",
    "returnTypes": [
      "timestamp with time zone"
    ],
    "signature": "date_trunc(varchar(x), timestamp with time zone)"
  },
  "day": {
    "arguments": [
      [
        {
          "type": "STRING"
        }
      ]
    ],
    "description": "Returns the day part of a date or a timestamp string: day(\u00271970-11-01 00:00:00\u0027) = 1, day(\u00271970-11-01\u0027) = 1.",
    "draggable": "day()",
    "name": "day",
    "returnTypes": [
      "INT"
    ],
    "signature": "day(STRING date)"
  },
  "day_of_month": {
    "arguments": [
      [
        {
          "type": "timestamp with time zone"
        }
      ]
    ],
    "description": "day of the month of the given timestamp",
    "draggable": "day_of_month()",
    "name": "day_of_month",
    "returnTypes": [
      "bigint"
    ],
    "signature": "day_of_month(timestamp with time zone)"
  },
  "day_of_week": {
    "arguments": [
      [
        {
          "type": "timestamp with time zone"
        }
      ]
    ],
    "description": "day of the week of the given timestamp",
    "draggable": "day_of_week()",
    "name": "day_of_week",
    "returnTypes": [
      "bigint"
    ],
    "signature": "day_of_week(timestamp with time zone)"
  },
  "day_of_year": {
    "arguments": [
      [
        {
          "type": "timestamp with time zone"
        }
      ]
    ],
    "description": "day of the year of the given timestamp",
    "draggable": "day_of_year()",
    "name": "day_of_year",
    "returnTypes": [
      "bigint"
    ],
    "signature": "day_of_year(timestamp with time zone)"
  },
  "degrees": {
    "arguments": [
      [
        {
          "type": "DECIMAL"
        },
        {
          "type": "DOUBLE"
        }
      ]
    ],
    "description": "Converts value of a from radians to degrees.",
    "draggable": "degrees()",
    "name": "degrees",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "degrees(DECIMAL|DOUBLE a)"
  },
  "dow": {
    "arguments": [
      [
        {
          "type": "timestamp with time zone"
        }
      ]
    ],
    "description": "day of the week of the given timestamp",
    "draggable": "dow()",
    "name": "dow",
    "returnTypes": [
      "bigint"
    ],
    "signature": "dow(timestamp with time zone)"
  },
  "doy": {
    "arguments": [
      [
        {
          "type": "timestamp with time zone"
        }
      ]
    ],
    "description": "day of the year of the given timestamp",
    "draggable": "doy()",
    "name": "doy",
    "returnTypes": [
      "bigint"
    ],
    "signature": "doy(timestamp with time zone)"
  },
  "e": {
    "arguments": [
      []
    ],
    "description": "Returns the value of e.",
    "draggable": "e()",
    "name": "e",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "e()"
  },
  "element_at": {
    "arguments": [
      [
        {
          "type": "map(K,V)"
        }
      ],
      [
        {
          "type": "K"
        }
      ]
    ],
    "description": "Get value for the given key, or null if it does not exist",
    "draggable": "element_at()",
    "name": "element_at",
    "returnTypes": [
      "V"
    ],
    "signature": "element_at(map(K,V), K)"
  },
  "empty_approx_set": {
    "arguments": [
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "an empty HyperLogLog instance with the specified max standard error",
    "draggable": "empty_approx_set()",
    "name": "empty_approx_set",
    "returnTypes": [
      "HyperLogLog"
    ],
    "signature": "empty_approx_set(double)"
  },
  "exp": {
    "arguments": [
      [
        {
          "type": "DECIMAL"
        },
        {
          "type": "DOUBLE"
        }
      ]
    ],
    "description": "Returns e^a where e is the base of the natural logarithm.",
    "draggable": "exp()",
    "name": "exp",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "exp(DECIMAL|DOUBLE a)"
  },
  "expand_envelope": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "Returns the bounding rectangle of a Geometry expanded by distance.",
    "draggable": "expand_envelope()",
    "name": "expand_envelope",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "expand_envelope(Geometry, double)"
  },
  "features": {
    "arguments": [
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "",
    "draggable": "features()",
    "name": "features",
    "returnTypes": [
      "map(bigint",
      "double)"
    ],
    "signature": "features(double, double, double, double, double, double, double, double, double, double)"
  },
  "filter": {
    "arguments": [
      [
        {
          "type": "array(T)"
        }
      ],
      [
        {
          "type": "function(T,boolean)"
        }
      ]
    ],
    "description": "return array containing elements that match the given predicate",
    "draggable": "filter()",
    "name": "filter",
    "returnTypes": [
      "array(T)"
    ],
    "signature": "filter(array(T), function(T,boolean))"
  },
  "flatten": {
    "arguments": [
      [
        {
          "type": "array(array(E))"
        }
      ]
    ],
    "description": "Flattens the given array",
    "draggable": "flatten()",
    "name": "flatten",
    "returnTypes": [
      "array(E)"
    ],
    "signature": "flatten(array(array(E)))"
  },
  "flatten_geometry_collections": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Recursively flattens GeometryCollections",
    "draggable": "flatten_geometry_collections()",
    "name": "flatten_geometry_collections",
    "returnTypes": [
      "array(Geometry)"
    ],
    "signature": "flatten_geometry_collections(Geometry)"
  },
  "floor": {
    "arguments": [
      [
        {
          "type": "DOUBLE"
        }
      ]
    ],
    "description": "Returns the maximum BIGINT value that is equal to or less than a.",
    "draggable": "floor()",
    "name": "floor",
    "returnTypes": [
      "BIGINT"
    ],
    "signature": "floor(DOUBLE a)"
  },
  "fnv1_32": {
    "arguments": [
      [
        {
          "type": "varbinary"
        }
      ]
    ],
    "description": "compute fnv-1 32 bit",
    "draggable": "fnv1_32()",
    "name": "fnv1_32",
    "returnTypes": [
      "bigint"
    ],
    "signature": "fnv1_32(varbinary)"
  },
  "fnv1_64": {
    "arguments": [
      [
        {
          "type": "varbinary"
        }
      ]
    ],
    "description": "compute fnv-1 64 bit",
    "draggable": "fnv1_64()",
    "name": "fnv1_64",
    "returnTypes": [
      "bigint"
    ],
    "signature": "fnv1_64(varbinary)"
  },
  "fnv1a_32": {
    "arguments": [
      [
        {
          "type": "varbinary"
        }
      ]
    ],
    "description": "compute fnv-1a 32 bit",
    "draggable": "fnv1a_32()",
    "name": "fnv1a_32",
    "returnTypes": [
      "bigint"
    ],
    "signature": "fnv1a_32(varbinary)"
  },
  "fnv1a_64": {
    "arguments": [
      [
        {
          "type": "varbinary"
        }
      ]
    ],
    "description": "compute fnv-1a 64 bit",
    "draggable": "fnv1a_64()",
    "name": "fnv1a_64",
    "returnTypes": [
      "bigint"
    ],
    "signature": "fnv1a_64(varbinary)"
  },
  "format_datetime": {
    "arguments": [
      [
        {
          "type": "timestamp"
        }
      ],
      [
        {
          "type": "varchar(x)"
        }
      ]
    ],
    "description": "formats the given time by the given format",
    "draggable": "format_datetime()",
    "name": "format_datetime",
    "returnTypes": [
      "varchar"
    ],
    "signature": "format_datetime(timestamp, varchar(x))"
  },
  "from_base": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "convert a string in the given base to a number",
    "draggable": "from_base()",
    "name": "from_base",
    "returnTypes": [
      "bigint"
    ],
    "signature": "from_base(varchar(x), bigint)"
  },
  "from_base64": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ]
    ],
    "description": "decode base64 encoded binary data",
    "draggable": "from_base64()",
    "name": "from_base64",
    "returnTypes": [
      "varbinary"
    ],
    "signature": "from_base64(varchar(x))"
  },
  "from_base64url": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ]
    ],
    "description": "decode URL safe base64 encoded binary data",
    "draggable": "from_base64url()",
    "name": "from_base64url",
    "returnTypes": [
      "varbinary"
    ],
    "signature": "from_base64url(varchar(x))"
  },
  "from_big_endian_32": {
    "arguments": [
      [
        {
          "type": "varbinary"
        }
      ]
    ],
    "description": "decode bigint value from a 32-bit 2\u0027s complement big endian varbinary",
    "draggable": "from_big_endian_32()",
    "name": "from_big_endian_32",
    "returnTypes": [
      "integer"
    ],
    "signature": "from_big_endian_32(varbinary)"
  },
  "from_big_endian_64": {
    "arguments": [
      [
        {
          "type": "varbinary"
        }
      ]
    ],
    "description": "decode bigint value from a 64-bit 2\u0027s complement big endian varbinary",
    "draggable": "from_big_endian_64()",
    "name": "from_big_endian_64",
    "returnTypes": [
      "bigint"
    ],
    "signature": "from_big_endian_64(varbinary)"
  },
  "from_hex": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ]
    ],
    "description": "decode hex encoded binary data",
    "draggable": "from_hex()",
    "name": "from_hex",
    "returnTypes": [
      "varbinary"
    ],
    "signature": "from_hex(varchar(x))"
  },
  "from_ieee754_32": {
    "arguments": [
      [
        {
          "type": "varbinary"
        }
      ]
    ],
    "description": "decode the 32-bit big-endian binary in IEEE 754 single-precision floating-point format",
    "draggable": "from_ieee754_32()",
    "name": "from_ieee754_32",
    "returnTypes": [
      "real"
    ],
    "signature": "from_ieee754_32(varbinary)"
  },
  "from_ieee754_64": {
    "arguments": [
      [
        {
          "type": "varbinary"
        }
      ]
    ],
    "description": "decode the 64-bit big-endian binary in IEEE 754 double-precision floating-point format",
    "draggable": "from_ieee754_64()",
    "name": "from_ieee754_64",
    "returnTypes": [
      "double"
    ],
    "signature": "from_ieee754_64(varbinary)"
  },
  "from_iso8601_date": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ]
    ],
    "description": "",
    "draggable": "from_iso8601_date()",
    "name": "from_iso8601_date",
    "returnTypes": [
      "date"
    ],
    "signature": "from_iso8601_date(varchar(x))"
  },
  "from_iso8601_timestamp": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ]
    ],
    "description": "",
    "draggable": "from_iso8601_timestamp()",
    "name": "from_iso8601_timestamp",
    "returnTypes": [
      "timestamp with time zone"
    ],
    "signature": "from_iso8601_timestamp(varchar(x))"
  },
  "from_unixtime": {
    "arguments": [
      [
        {
          "type": "BIGINT"
        }
      ],
      [
        {
          "optional": true,
          "type": "STRING"
        }
      ]
    ],
    "description": "Converts the number of seconds from unix epoch (1970-01-01 00:00:00 UTC) to a string representing the timestamp of that moment in the current system time zone in the format of \u00271970-01-01 00:00:00\u0027",
    "draggable": "from_unixtime()",
    "name": "from_unixtime",
    "returnTypes": [
      "BIGINT"
    ],
    "signature": "from_unixtime(BIGINT unixtime [, STRING format])"
  },
  "from_utf8": {
    "arguments": [
      [
        {
          "type": "varbinary"
        }
      ],
      [
        {
          "type": "varchar(x)"
        }
      ]
    ],
    "description": "decodes the UTF-8 encoded string",
    "draggable": "from_utf8()",
    "name": "from_utf8",
    "returnTypes": [
      "varchar"
    ],
    "signature": "from_utf8(varbinary, varchar(x))"
  },
  "geometry_as_geojson": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns geo JSON string based on the input geometry",
    "draggable": "geometry_as_geojson()",
    "name": "geometry_as_geojson",
    "returnTypes": [
      "varchar"
    ],
    "signature": "geometry_as_geojson(Geometry)"
  },
  "geometry_from_geojson": {
    "arguments": [
      [
        {
          "type": "varchar"
        }
      ]
    ],
    "description": "Returns a geometry from a geo JSON string",
    "draggable": "geometry_from_geojson()",
    "name": "geometry_from_geojson",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "geometry_from_geojson(varchar)"
  },
  "geometry_invalid_reason": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns the reason for why the input geometry is not valid. Returns null if the input is valid.",
    "draggable": "geometry_invalid_reason()",
    "name": "geometry_invalid_reason",
    "returnTypes": [
      "varchar"
    ],
    "signature": "geometry_invalid_reason(Geometry)"
  },
  "geometry_nearest_points": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ],
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Return the closest points on the two geometries",
    "draggable": "geometry_nearest_points()",
    "name": "geometry_nearest_points",
    "returnTypes": [
      "array(Geometry)"
    ],
    "signature": "geometry_nearest_points(Geometry, Geometry)"
  },
  "geometry_to_bing_tiles": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ],
      [
        {
          "type": "integer"
        }
      ]
    ],
    "description": "Given a geometry and a zoom level, returns the minimum set of Bing tiles of that zoom level that fully covers that geometry",
    "draggable": "geometry_to_bing_tiles()",
    "name": "geometry_to_bing_tiles",
    "returnTypes": [
      "array(BingTile)"
    ],
    "signature": "geometry_to_bing_tiles(Geometry, integer)"
  },
  "geometry_to_dissolved_bing_tiles": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ],
      [
        {
          "type": "integer"
        }
      ]
    ],
    "description": "Given a geometry and a maximum zoom level, returns the minimum set of dissolved Bing tiles that fully covers that geometry",
    "draggable": "geometry_to_dissolved_bing_tiles()",
    "name": "geometry_to_dissolved_bing_tiles",
    "returnTypes": [
      "array(BingTile)"
    ],
    "signature": "geometry_to_dissolved_bing_tiles(Geometry, integer)"
  },
  "geometry_union": {
    "arguments": [
      [
        {
          "type": "array(Geometry)"
        }
      ]
    ],
    "description": "Returns a geometry that represents the point set union of the input geometries.",
    "draggable": "geometry_union()",
    "name": "geometry_union",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "geometry_union(array(Geometry))"
  },
  "great_circle_distance": {
    "arguments": [
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "Calculates the great-circle distance between two points on the Earth\u0027s surface in kilometers",
    "draggable": "great_circle_distance()",
    "name": "great_circle_distance",
    "returnTypes": [
      "double"
    ],
    "signature": "great_circle_distance(double, double, double, double)"
  },
  "greatest": {
    "arguments": [
      [
        {
          "multiple": true,
          "type": "T"
        }
      ]
    ],
    "description": "Returns the greatest value of the list of values. Fixed to return NULL when one or more arguments are NULL, and strict type restriction relaxed, consistent with \"\u003e\" operator.",
    "draggable": "greatest()",
    "name": "greatest",
    "returnTypes": [
      "T"
    ],
    "signature": "greatest(T a1, T a2, ...)"
  },
  "hamming_distance": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "varchar(y)"
        }
      ]
    ],
    "description": "computes Hamming distance between two strings",
    "draggable": "hamming_distance()",
    "name": "hamming_distance",
    "returnTypes": [
      "bigint"
    ],
    "signature": "hamming_distance(varchar(x), varchar(y))"
  },
  "hash_counts": {
    "arguments": [
      [
        {
          "type": "SetDigest"
        }
      ]
    ],
    "description": "",
    "draggable": "hash_counts()",
    "name": "hash_counts",
    "returnTypes": [
      "varchar"
    ],
    "signature": "hash_counts(SetDigest)"
  },
  "hmac_md5": {
    "arguments": [
      [
        {
          "type": "varbinary"
        }
      ],
      [
        {
          "type": "varbinary"
        }
      ]
    ],
    "description": "Compute HMAC with MD5",
    "draggable": "hmac_md5()",
    "name": "hmac_md5",
    "returnTypes": [
      "varbinary"
    ],
    "signature": "hmac_md5(varbinary, varbinary)"
  },
  "hmac_sha1": {
    "arguments": [
      [
        {
          "type": "varbinary"
        }
      ],
      [
        {
          "type": "varbinary"
        }
      ]
    ],
    "description": "Compute HMAC with SHA1",
    "draggable": "hmac_sha1()",
    "name": "hmac_sha1",
    "returnTypes": [
      "varbinary"
    ],
    "signature": "hmac_sha1(varbinary, varbinary)"
  },
  "hmac_sha256": {
    "arguments": [
      [
        {
          "type": "varbinary"
        }
      ],
      [
        {
          "type": "varbinary"
        }
      ]
    ],
    "description": "Compute HMAC with SHA256",
    "draggable": "hmac_sha256()",
    "name": "hmac_sha256",
    "returnTypes": [
      "varbinary"
    ],
    "signature": "hmac_sha256(varbinary, varbinary)"
  },
  "hmac_sha512": {
    "arguments": [
      [
        {
          "type": "varbinary"
        }
      ],
      [
        {
          "type": "varbinary"
        }
      ]
    ],
    "description": "Compute HMAC with SHA512",
    "draggable": "hmac_sha512()",
    "name": "hmac_sha512",
    "returnTypes": [
      "varbinary"
    ],
    "signature": "hmac_sha512(varbinary, varbinary)"
  },
  "hour": {
    "arguments": [
      [
        {
          "type": "STRING"
        }
      ]
    ],
    "description": "Returns the hour of the timestamp: hour(\u00272009-07-30 12:58:59\u0027) = 12, hour(\u002712:58:59\u0027) = 12.",
    "draggable": "hour()",
    "name": "hour",
    "returnTypes": [
      "INT"
    ],
    "signature": "hour(STRING date)"
  },
  "index": {
    "arguments": [
      [
        {
          "type": "varchar"
        }
      ],
      [
        {
          "type": "varchar"
        }
      ]
    ],
    "description": "Returns index of first occurrence of a substring (or 0 if not found)",
    "draggable": "index()",
    "name": "index",
    "returnTypes": [
      "bigint"
    ],
    "signature": "index(varchar, varchar)"
  },
  "infinity": {
    "arguments": [
      [
        {
          "type": ""
        }
      ]
    ],
    "description": "Infinity",
    "draggable": "infinity()",
    "name": "infinity",
    "returnTypes": [
      "double"
    ],
    "signature": "infinity()"
  },
  "intersection_cardinality": {
    "arguments": [
      [
        {
          "type": "SetDigest"
        }
      ],
      [
        {
          "type": "SetDigest"
        }
      ]
    ],
    "description": "",
    "draggable": "intersection_cardinality()",
    "name": "intersection_cardinality",
    "returnTypes": [
      "bigint"
    ],
    "signature": "intersection_cardinality(SetDigest, SetDigest)"
  },
  "inverse_beta_cdf": {
    "arguments": [
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "inverse of Beta cdf given a, b parameters and probability",
    "draggable": "inverse_beta_cdf()",
    "name": "inverse_beta_cdf",
    "returnTypes": [
      "double"
    ],
    "signature": "inverse_beta_cdf(double, double, double)"
  },
  "inverse_normal_cdf": {
    "arguments": [
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "inverse of normal cdf given a mean, std, and probability",
    "draggable": "inverse_normal_cdf()",
    "name": "inverse_normal_cdf",
    "returnTypes": [
      "double"
    ],
    "signature": "inverse_normal_cdf(double, double, double)"
  },
  "ip_prefix": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "IP prefix for a given IP address and subnet size",
    "draggable": "ip_prefix()",
    "name": "ip_prefix",
    "returnTypes": [
      "ipprefix"
    ],
    "signature": "ip_prefix(varchar(x), bigint)"
  },
  "ip_subnet_max": {
    "arguments": [
      [
        {
          "type": "ipprefix"
        }
      ]
    ],
    "description": "Largest IP address for a given IP prefix",
    "draggable": "ip_subnet_max()",
    "name": "ip_subnet_max",
    "returnTypes": [
      "ipaddress"
    ],
    "signature": "ip_subnet_max(ipprefix)"
  },
  "ip_subnet_min": {
    "arguments": [
      [
        {
          "type": "ipprefix"
        }
      ]
    ],
    "description": "Smallest IP address for a given IP prefix",
    "draggable": "ip_subnet_min()",
    "name": "ip_subnet_min",
    "returnTypes": [
      "ipaddress"
    ],
    "signature": "ip_subnet_min(ipprefix)"
  },
  "ip_subnet_range": {
    "arguments": [
      [
        {
          "type": "ipprefix"
        }
      ]
    ],
    "description": "Array of smallest and largest IP address in the subnet of the given IP prefix",
    "draggable": "ip_subnet_range()",
    "name": "ip_subnet_range",
    "returnTypes": [
      "array(IPADDRESS)"
    ],
    "signature": "ip_subnet_range(ipprefix)"
  },
  "is_finite": {
    "arguments": [
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "test if value is finite",
    "draggable": "is_finite()",
    "name": "is_finite",
    "returnTypes": [
      "boolean"
    ],
    "signature": "is_finite(double)"
  },
  "is_infinite": {
    "arguments": [
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "test if value is infinite",
    "draggable": "is_infinite()",
    "name": "is_infinite",
    "returnTypes": [
      "boolean"
    ],
    "signature": "is_infinite(double)"
  },
  "is_json_scalar": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ]
    ],
    "description": "",
    "draggable": "is_json_scalar()",
    "name": "is_json_scalar",
    "returnTypes": [
      "boolean"
    ],
    "signature": "is_json_scalar(varchar(x))"
  },
  "is_nan": {
    "arguments": [
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "test if value is not-a-number",
    "draggable": "is_nan()",
    "name": "is_nan",
    "returnTypes": [
      "boolean"
    ],
    "signature": "is_nan(double)"
  },
  "is_subnet_of": {
    "arguments": [
      [
        {
          "type": "ipprefix"
        }
      ],
      [
        {
          "type": "ipprefix"
        }
      ]
    ],
    "description": "Is the second IP prefix in the subnet of the first IP prefix",
    "draggable": "is_subnet_of()",
    "name": "is_subnet_of",
    "returnTypes": [
      "boolean"
    ],
    "signature": "is_subnet_of(ipprefix, ipprefix)"
  },
  "jaccard_index": {
    "arguments": [
      [
        {
          "type": "SetDigest"
        }
      ],
      [
        {
          "type": "SetDigest"
        }
      ]
    ],
    "description": "",
    "draggable": "jaccard_index()",
    "name": "jaccard_index",
    "returnTypes": [
      "double"
    ],
    "signature": "jaccard_index(SetDigest, SetDigest)"
  },
  "json_array_contains": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "varchar(y)"
        }
      ]
    ],
    "description": "",
    "draggable": "json_array_contains()",
    "name": "json_array_contains",
    "returnTypes": [
      "boolean"
    ],
    "signature": "json_array_contains(varchar(x), varchar(y))"
  },
  "json_array_get": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "",
    "draggable": "json_array_get()",
    "name": "json_array_get",
    "returnTypes": [
      "json"
    ],
    "signature": "json_array_get(varchar(x), bigint)"
  },
  "json_array_length": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ]
    ],
    "description": "",
    "draggable": "json_array_length()",
    "name": "json_array_length",
    "returnTypes": [
      "bigint"
    ],
    "signature": "json_array_length(varchar(x))"
  },
  "json_extract": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "JsonPath"
        }
      ]
    ],
    "description": "",
    "draggable": "json_extract()",
    "name": "json_extract",
    "returnTypes": [
      "json"
    ],
    "signature": "json_extract(varchar(x), JsonPath)"
  },
  "json_extract_scalar": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "JsonPath"
        }
      ]
    ],
    "description": "",
    "draggable": "json_extract_scalar()",
    "name": "json_extract_scalar",
    "returnTypes": [
      "varchar(x)"
    ],
    "signature": "json_extract_scalar(varchar(x), JsonPath)"
  },
  "json_format": {
    "arguments": [
      [
        {
          "type": "json"
        }
      ]
    ],
    "description": "",
    "draggable": "json_format()",
    "name": "json_format",
    "returnTypes": [
      "varchar"
    ],
    "signature": "json_format(json)"
  },
  "json_parse": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ]
    ],
    "description": "",
    "draggable": "json_parse()",
    "name": "json_parse",
    "returnTypes": [
      "json"
    ],
    "signature": "json_parse(varchar(x))"
  },
  "json_size": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "JsonPath"
        }
      ]
    ],
    "description": "",
    "draggable": "json_size()",
    "name": "json_size",
    "returnTypes": [
      "bigint"
    ],
    "signature": "json_size(varchar(x), JsonPath)"
  },
  "least": {
    "arguments": [
      [
        {
          "multiple": true,
          "type": "T"
        }
      ]
    ],
    "description": "Returns the least value of the list of values. Fixed to return NULL when one or more arguments are NULL, and strict type restriction relaxed, consistent with \"\u003c\" operator.",
    "draggable": "least()",
    "name": "least",
    "returnTypes": [
      "T"
    ],
    "signature": "least(T a1, T a2, ...)"
  },
  "length": {
    "arguments": [
      [
        {
          "type": "STRING"
        }
      ]
    ],
    "description": "Returns the length of the string.",
    "draggable": "length()",
    "name": "length",
    "returnTypes": [
      "INT"
    ],
    "signature": "length(STRING a)"
  },
  "levenshtein_distance": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "varchar(y)"
        }
      ]
    ],
    "description": "computes Levenshtein distance between two strings",
    "draggable": "levenshtein_distance()",
    "name": "levenshtein_distance",
    "returnTypes": [
      "bigint"
    ],
    "signature": "levenshtein_distance(varchar(x), varchar(y))"
  },
  "line_interpolate_point": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "Returns the point in the line at the fractional length.",
    "draggable": "line_interpolate_point()",
    "name": "line_interpolate_point",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "line_interpolate_point(Geometry, double)"
  },
  "line_locate_point": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ],
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns a float between 0 and 1 representing the location of the closest point on the LineString to the given Point, as a fraction of total 2d line length.",
    "draggable": "line_locate_point()",
    "name": "line_locate_point",
    "returnTypes": [
      "double"
    ],
    "signature": "line_locate_point(Geometry, Geometry)"
  },
  "ln": {
    "arguments": [
      [
        {
          "type": "DECIMAL"
        },
        {
          "type": "DOUBLE"
        }
      ]
    ],
    "description": "Returns the natural logarithm of the argument a",
    "draggable": "ln()",
    "name": "ln",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "ln(DECIMAL|DOUBLE a)"
  },
  "localtime": {
    "arguments": [
      [
        {
          "type": ""
        }
      ]
    ],
    "description": "current time without time zone",
    "draggable": "localtime()",
    "name": "localtime",
    "returnTypes": [
      "time"
    ],
    "signature": "localtime()"
  },
  "localtimestamp": {
    "arguments": [
      [
        {
          "type": ""
        }
      ]
    ],
    "description": "current timestamp without time zone",
    "draggable": "localtimestamp()",
    "name": "localtimestamp",
    "returnTypes": [
      "timestamp"
    ],
    "signature": "localtimestamp()"
  },
  "log10": {
    "arguments": [
      [
        {
          "type": "DECIMAL"
        },
        {
          "type": "DOUBLE"
        }
      ]
    ],
    "description": "Returns the base-10 logarithm of the argument a.",
    "draggable": "log10()",
    "name": "log10",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "log10(DECIMAL|DOUBLE a)"
  },
  "log2": {
    "arguments": [
      [
        {
          "type": "DECIMAL"
        },
        {
          "type": "DOUBLE"
        }
      ]
    ],
    "description": "Returns the base-2 logarithm of the argument a.",
    "draggable": "log2()",
    "name": "log2",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "log2(DECIMAL|DOUBLE a)"
  },
  "lower": {
    "arguments": [
      [
        {
          "type": "STRING"
        }
      ]
    ],
    "description": "Returns the string resulting from converting all characters of B to lower case. For example, lower(\u0027fOoBaR\u0027) results in \u0027foobar\u0027.",
    "draggable": "lower()",
    "name": "lower",
    "returnTypes": [
      "STRING"
    ],
    "signature": "lower(STRING a)"
  },
  "lpad": {
    "arguments": [
      [
        {
          "type": "STRING"
        }
      ],
      [
        {
          "type": "INT"
        }
      ],
      [
        {
          "type": "STRING"
        }
      ]
    ],
    "description": "Returns str, left-padded with pad to a length of len.",
    "draggable": "lpad()",
    "name": "lpad",
    "returnTypes": [
      "STRING"
    ],
    "signature": "lpad(STRING str, INT len, STRING pad)"
  },
  "ltrim": {
    "arguments": [
      [
        {
          "type": "STRING"
        }
      ]
    ],
    "description": "Returns the string resulting from trimming spaces from the beginning(left hand side) of A. For example, ltrim(\u0027 foobar \u0027) results in \u0027foobar \u0027.",
    "draggable": "ltrim()",
    "name": "ltrim",
    "returnTypes": [
      "STRING"
    ],
    "signature": "ltrim(STRING a)"
  },
  "map": {
    "arguments": [
      [
        {
          "multiple": true,
          "type": "T"
        }
      ]
    ],
    "description": "Creates a map with the given key/value pairs.",
    "draggable": "map()",
    "name": "map",
    "returnTypes": [
      "MAP"
    ],
    "signature": "map(key1, value1, ...)"
  },
  "map_concat": {
    "arguments": [
      [
        {
          "type": "map(K,V)"
        }
      ]
    ],
    "description": "Concatenates given maps",
    "draggable": "map_concat()",
    "name": "map_concat",
    "returnTypes": [
      "map(K",
      "V)"
    ],
    "signature": "map_concat(map(K,V))"
  },
  "map_entries": {
    "arguments": [
      [
        {
          "type": "map(K,V)"
        }
      ]
    ],
    "description": "construct an array of entries from a given map",
    "draggable": "map_entries()",
    "name": "map_entries",
    "returnTypes": [
      "array(row(K",
      "V))"
    ],
    "signature": "map_entries(map(K,V))"
  },
  "map_filter": {
    "arguments": [
      [
        {
          "type": "map(K,V)"
        }
      ],
      [
        {
          "type": "function(K,V,boolean)"
        }
      ]
    ],
    "description": "return map containing entries that match the given predicate",
    "draggable": "map_filter()",
    "name": "map_filter",
    "returnTypes": [
      "map(K",
      "V)"
    ],
    "signature": "map_filter(map(K,V), function(K,V,boolean))"
  },
  "map_from_entries": {
    "arguments": [
      [
        {
          "type": "array(row(K,V))"
        }
      ]
    ],
    "description": "construct a map from an array of entries",
    "draggable": "map_from_entries()",
    "name": "map_from_entries",
    "returnTypes": [
      "map(K",
      "V)"
    ],
    "signature": "map_from_entries(array(row(K,V)))"
  },
  "map_keys": {
    "arguments": [
      [
        {
          "type": "MAP"
        }
      ]
    ],
    "description": "Returns an unordered array containing the keys of the input map.",
    "draggable": "array\u003cK.V\u003e map_keys()",
    "name": "map_keys",
    "returnTypes": [
      "ARRAY"
    ],
    "signature": "array\u003cK.V\u003e map_keys(Map\u003cK.V\u003e a)"
  },
  "map_normalize": {
    "arguments": [
      [
        {
          "type": "map(varchar,double)"
        }
      ]
    ],
    "description": "Returns the map with the same keys but all non-null values are scaled proportionally so that the sum of values becomes 1.",
    "draggable": "map_normalize()",
    "name": "map_normalize",
    "returnTypes": [
      "map(varchar",
      "double)"
    ],
    "signature": "map_normalize(map(varchar,double))"
  },
  "map_values": {
    "arguments": [
      [
        {
          "type": "MAP"
        }
      ]
    ],
    "description": "Returns an unordered array containing the values of the input map.",
    "draggable": "array\u003cK.V\u003e map_values()",
    "name": "map_values",
    "returnTypes": [
      "ARRAY"
    ],
    "signature": "array\u003cK.V\u003e map_values(Map\u003cK.V\u003e a)"
  },
  "map_zip_with": {
    "arguments": [
      [
        {
          "type": "map(K,V1)"
        }
      ],
      [
        {
          "type": "map(K,V2)"
        }
      ],
      [
        {
          "type": "function(K,V1,V2,V3)"
        }
      ]
    ],
    "description": "merge two maps into a single map by applying the lambda function to the pair of values with the same key",
    "draggable": "map_zip_with()",
    "name": "map_zip_with",
    "returnTypes": [
      "map(K",
      "V3)"
    ],
    "signature": "map_zip_with(map(K,V1), map(K,V2), function(K,V1,V2,V3))"
  },
  "md5": {
    "arguments": [
      [
        {
          "type": "STRING"
        },
        {
          "type": "BINARY"
        }
      ]
    ],
    "description": "Calculates an MD5 128-bit checksum for the string or binary (as of Hive 1.3.0). The value is returned as a string of 32 hex digits, or NULL if the argument was NULL. Example: md5(\u0027ABC\u0027) = \u0027902fbdd2b1df0c4f70b4a5d23525e932\u0027.",
    "draggable": "md5()",
    "name": "md5",
    "returnTypes": [
      "STRING"
    ],
    "signature": "md5(STRING|BINARY a)"
  },
  "merge_hll": {
    "arguments": [
      [
        {
          "type": "array(HyperLogLog)"
        }
      ]
    ],
    "description": "merge the contents of an array of HyperLogLogs",
    "draggable": "merge_hll()",
    "name": "merge_hll",
    "returnTypes": [
      "HyperLogLog"
    ],
    "signature": "merge_hll(array(HyperLogLog))"
  },
  "merge_khll": {
    "arguments": [
      [
        {
          "type": "array(KHyperLogLog)"
        }
      ]
    ],
    "description": "",
    "draggable": "merge_khll()",
    "name": "merge_khll",
    "returnTypes": [
      "KHyperLogLog"
    ],
    "signature": "merge_khll(array(KHyperLogLog))"
  },
  "millisecond": {
    "arguments": [
      [
        {
          "type": "timestamp with time zone"
        }
      ]
    ],
    "description": "millisecond of the second of the given timestamp",
    "draggable": "millisecond()",
    "name": "millisecond",
    "returnTypes": [
      "bigint"
    ],
    "signature": "millisecond(timestamp with time zone)"
  },
  "minute": {
    "arguments": [
      [
        {
          "type": "STRING"
        }
      ]
    ],
    "description": "Returns the minute of the timestamp.",
    "draggable": "minute()",
    "name": "minute",
    "returnTypes": [
      "INT"
    ],
    "signature": "minute(STRING date)"
  },
  "mod": {
    "arguments": [
      [
        {
          "type": "tinyint"
        }
      ],
      [
        {
          "type": "tinyint"
        }
      ]
    ],
    "description": "remainder of given quotient",
    "draggable": "mod()",
    "name": "mod",
    "returnTypes": [
      "tinyint"
    ],
    "signature": "mod(tinyint, tinyint)"
  },
  "month": {
    "arguments": [
      [
        {
          "type": "STRING"
        }
      ]
    ],
    "description": "Returns the month part of a date or a timestamp string: month(\u00271970-11-01 00:00:00\u0027) = 11, month(\u00271970-11-01\u0027) = 11.",
    "draggable": "month()",
    "name": "month",
    "returnTypes": [
      "INT"
    ],
    "signature": "month(STRING date)"
  },
  "multimap_from_entries": {
    "arguments": [
      [
        {
          "type": "array(row(K,V))"
        }
      ]
    ],
    "description": "construct a multimap from an array of entries",
    "draggable": "multimap_from_entries()",
    "name": "multimap_from_entries",
    "returnTypes": [
      "map(K",
      "array(V))"
    ],
    "signature": "multimap_from_entries(array(row(K,V)))"
  },
  "nan": {
    "arguments": [
      [
        {
          "type": ""
        }
      ]
    ],
    "description": "constant representing not-a-number",
    "draggable": "nan()",
    "name": "nan",
    "returnTypes": [
      "double"
    ],
    "signature": "nan()"
  },
  "ngrams": {
    "arguments": [
      [
        {
          "type": "ARRAY"
        }
      ],
      [
        {
          "type": "INT"
        }
      ],
      [
        {
          "type": "INT"
        }
      ],
      [
        {
          "type": "INT"
        }
      ]
    ],
    "description": "Returns the top-k N-grams from a set of tokenized sentences, such as those returned by the sentences() UDAF.",
    "draggable": "array\u003cstruct\u003cSTRING, DOUBLE\u003e\u003e ngrams()",
    "name": "ngrams",
    "returnTypes": [
      "ARRAY"
    ],
    "signature": "array\u003cstruct\u003cSTRING, DOUBLE\u003e\u003e ngrams(Array\u003cArray\u003cSTRING\u003e\u003e a, INT n, INT k, INT pf)"
  },
  "none_match": {
    "arguments": [
      [
        {
          "type": "array(T)"
        }
      ],
      [
        {
          "type": "function(T,boolean)"
        }
      ]
    ],
    "description": "Returns true if all elements of the array don\u0027t match the given predicate",
    "draggable": "none_match()",
    "name": "none_match",
    "returnTypes": [
      "boolean"
    ],
    "signature": "none_match(array(T), function(T,boolean))"
  },
  "normal_cdf": {
    "arguments": [
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "normal cdf given a mean, standard deviation, and value",
    "draggable": "normal_cdf()",
    "name": "normal_cdf",
    "returnTypes": [
      "double"
    ],
    "signature": "normal_cdf(double, double, double)"
  },
  "normalize": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "varchar(y)"
        }
      ]
    ],
    "description": "transforms the string to normalized form",
    "draggable": "normalize()",
    "name": "normalize",
    "returnTypes": [
      "varchar"
    ],
    "signature": "normalize(varchar(x), varchar(y))"
  },
  "now": {
    "arguments": [
      [
        {
          "type": ""
        }
      ]
    ],
    "description": "current timestamp with time zone",
    "draggable": "now()",
    "name": "now",
    "returnTypes": [
      "timestamp with time zone"
    ],
    "signature": "now()"
  },
  "objectid": {
    "arguments": [
      [
        {
          "type": "varchar"
        }
      ]
    ],
    "description": "mongodb ObjectId from the given string",
    "draggable": "objectid()",
    "name": "objectid",
    "returnTypes": [
      "ObjectId"
    ],
    "signature": "objectid(varchar)"
  },
  "parse_datetime": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "varchar(y)"
        }
      ]
    ],
    "description": "parses the specified date/time by the given format",
    "draggable": "parse_datetime()",
    "name": "parse_datetime",
    "returnTypes": [
      "timestamp with time zone"
    ],
    "signature": "parse_datetime(varchar(x), varchar(y))"
  },
  "parse_duration": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ]
    ],
    "description": "convert duration string to an interval",
    "draggable": "parse_duration()",
    "name": "parse_duration",
    "returnTypes": [
      "interval day to second"
    ],
    "signature": "parse_duration(varchar(x))"
  },
  "parse_presto_data_size": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ]
    ],
    "description": "converts data size string to bytes",
    "draggable": "parse_presto_data_size()",
    "name": "parse_presto_data_size",
    "returnTypes": [
      "decimal(38",
      "0)"
    ],
    "signature": "parse_presto_data_size(varchar(x))"
  },
  "pi": {
    "arguments": [],
    "description": "Returns the value of pi.",
    "draggable": "pi()",
    "name": "pi",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "pi()"
  },
  "pow": {
    "arguments": [
      [
        {
          "type": "DOUBLE"
        }
      ],
      [
        {
          "type": "DOUBLE"
        }
      ]
    ],
    "description": "Returns a^p",
    "draggable": "pow()",
    "name": "pow",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "pow(DOUBLE a, DOUBLE p)"
  },
  "power": {
    "arguments": [
      [
        {
          "type": "DOUBLE"
        }
      ],
      [
        {
          "type": "DOUBLE"
        }
      ]
    ],
    "description": "Returns a^p",
    "draggable": "power()",
    "name": "power",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "power(DOUBLE a, DOUBLE p)"
  },
  "quantile_at_value": {
    "arguments": [
      [
        {
          "type": "qdigest(real)"
        }
      ],
      [
        {
          "type": "real"
        }
      ]
    ],
    "description": "Given an input x between min/max values of qdigest, find which quantile is represented by that value",
    "draggable": "quantile_at_value()",
    "name": "quantile_at_value",
    "returnTypes": [
      "double"
    ],
    "signature": "quantile_at_value(qdigest(real), real)"
  },
  "quarter": {
    "arguments": [
      [
        {
          "type": "DATE"
        },
        {
          "type": "STRING"
        },
        {
          "type": "TIMESTAMP"
        }
      ]
    ],
    "description": "Returns the quarter of the year for a date, timestamp, or string in the range 1 to 4. Example: quarter(\u00272015-04-08\u0027) = 2.",
    "draggable": "quarter()",
    "name": "quarter",
    "returnTypes": [
      "INT"
    ],
    "signature": "quarter(DATE|TIMESTAMP|STRING a)"
  },
  "radians": {
    "arguments": [
      [
        {
          "type": "DECIMAL"
        },
        {
          "type": "DOUBLE"
        }
      ]
    ],
    "description": "Converts value of a from degrees to radians.",
    "draggable": "radians()",
    "name": "radians",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "radians(DECIMAL|DOUBLE a)"
  },
  "rand": {
    "arguments": [
      [
        {
          "optional": true,
          "type": "INT"
        }
      ]
    ],
    "description": "Returns a random number (that changes from row to row) that is distributed uniformly from 0 to 1. Specifying the seed will make sure the generated random number sequence is deterministic.",
    "draggable": "rand()",
    "name": "rand",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "rand([INT seed])"
  },
  "random": {
    "arguments": [
      [
        {
          "type": "tinyint"
        }
      ]
    ],
    "description": "a pseudo-random number between 0 and value (exclusive)",
    "draggable": "random()",
    "name": "random",
    "returnTypes": [
      "tinyint"
    ],
    "signature": "random(tinyint)"
  },
  "reduce": {
    "arguments": [
      [
        {
          "type": "array(T)"
        }
      ],
      [
        {
          "type": "S"
        }
      ],
      [
        {
          "type": "function(S,T,S)"
        }
      ],
      [
        {
          "type": "function(S,R)"
        }
      ]
    ],
    "description": "Reduce elements of the array into a single value",
    "draggable": "reduce()",
    "name": "reduce",
    "returnTypes": [
      "R"
    ],
    "signature": "reduce(array(T), S, function(S,T,S), function(S,R))"
  },
  "regexp_extract": {
    "arguments": [
      [
        {
          "type": "STRING"
        }
      ],
      [
        {
          "type": "STRING"
        }
      ],
      [
        {
          "type": "INT"
        }
      ]
    ],
    "description": "Returns the string extracted using the pattern. For example, regexp_extract(\u0027foothebar\u0027, \u0027foo(.*?)(bar)\u0027, 2) returns \u0027bar.\u0027 Note that some care is necessary in using predefined character classes: using \u0027\\s\u0027 as the second argument will match the letter s; \u0027\\\\s\u0027 is necessary to match whitespace, etc. The \u0027index\u0027 parameter is the Java regex Matcher group() method index.",
    "draggable": "regexp_extract()",
    "name": "regexp_extract",
    "returnTypes": [
      "STRING"
    ],
    "signature": "regexp_extract(STRING subject, STRING pattern, INT index)"
  },
  "regexp_extract_all": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "JoniRegExp"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "group(s) extracted using the given pattern",
    "draggable": "regexp_extract_all()",
    "name": "regexp_extract_all",
    "returnTypes": [
      "array(varchar(x))"
    ],
    "signature": "regexp_extract_all(varchar(x), JoniRegExp, bigint)"
  },
  "regexp_like": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "JoniRegExp"
        }
      ]
    ],
    "description": "returns whether the pattern is contained within the string",
    "draggable": "regexp_like()",
    "name": "regexp_like",
    "returnTypes": [
      "boolean"
    ],
    "signature": "regexp_like(varchar(x), JoniRegExp)"
  },
  "regexp_replace": {
    "arguments": [
      [
        {
          "type": "STRING"
        }
      ],
      [
        {
          "type": "STRING"
        }
      ],
      [
        {
          "type": "STRING"
        }
      ]
    ],
    "description": "Returns the string resulting from replacing all substrings in INITIAL_STRING that match the java regular expression syntax defined in PATTERN with instances of REPLACEMENT. For example, regexp_replace(\"foobar\", \"oo|ar\", \"\") returns \u0027fb.\u0027 Note that some care is necessary in using predefined character classes: using \u0027\\s\u0027 as the second argument will match the letter s; \u0027\\\\s\u0027 is necessary to match whitespace, etc.",
    "draggable": "regexp_replace()",
    "name": "regexp_replace",
    "returnTypes": [
      "STRING"
    ],
    "signature": "regexp_replace(STRING initial_string, STRING pattern, STRING replacement)"
  },
  "regexp_split": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "JoniRegExp"
        }
      ]
    ],
    "description": "returns array of strings split by pattern",
    "draggable": "regexp_split()",
    "name": "regexp_split",
    "returnTypes": [
      "array(varchar(x))"
    ],
    "signature": "regexp_split(varchar(x), JoniRegExp)"
  },
  "regress": {
    "arguments": [
      [
        {
          "type": "map(bigint,double)"
        }
      ],
      [
        {
          "type": "Regressor"
        }
      ]
    ],
    "description": "",
    "draggable": "regress()",
    "name": "regress",
    "returnTypes": [
      "double"
    ],
    "signature": "regress(map(bigint,double), Regressor)"
  },
  "reidentification_potential": {
    "arguments": [
      [
        {
          "type": "KHyperLogLog"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "",
    "draggable": "reidentification_potential()",
    "name": "reidentification_potential",
    "returnTypes": [
      "double"
    ],
    "signature": "reidentification_potential(KHyperLogLog, bigint)"
  },
  "render": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "color"
        }
      ]
    ],
    "description": "",
    "draggable": "render()",
    "name": "render",
    "returnTypes": [
      "varchar(y)"
    ],
    "signature": "render(varchar(x), color)"
  },
  "repeat": {
    "arguments": [
      [
        {
          "type": "STRING"
        }
      ],
      [
        {
          "type": "INT"
        }
      ]
    ],
    "description": "Repeats str n times.",
    "draggable": "repeat()",
    "name": "repeat",
    "returnTypes": [
      "STRING"
    ],
    "signature": "repeat(STRING str, INT n)"
  },
  "replace": {
    "arguments": [
      [
        {
          "type": "STRING"
        }
      ],
      [
        {
          "type": "STRING"
        }
      ],
      [
        {
          "type": "STRING"
        }
      ]
    ],
    "description": "Returns the string a with all non-overlapping occurrences of old replaced with new (as of Hive 1.3.0 and 2.1.0). Example: select replace(\"ababab\", \"abab\", \"Z\"); returns \"Zab\".",
    "draggable": "replace()",
    "name": "replace",
    "returnTypes": [
      "STRING"
    ],
    "signature": "replace(STRING a, STRING old, STRING new)"
  },
  "reverse": {
    "arguments": [
      [
        {
          "type": "STRING"
        }
      ]
    ],
    "description": "Returns the reversed string.",
    "draggable": "reverse()",
    "name": "reverse",
    "returnTypes": [
      "STRING"
    ],
    "signature": "reverse(STRING a)"
  },
  "rgb": {
    "arguments": [
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "",
    "draggable": "rgb()",
    "name": "rgb",
    "returnTypes": [
      "color"
    ],
    "signature": "rgb(bigint, bigint, bigint)"
  },
  "round": {
    "arguments": [
      [
        {
          "type": "DOUBLE"
        }
      ],
      [
        {
          "optional": true,
          "type": "INT"
        }
      ]
    ],
    "description": "Returns the rounded BIGINT value of a or a rounded to d decimal places.",
    "draggable": "round()",
    "name": "round",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "round(DOUBLE a [, INT d])"
  },
  "rpad": {
    "arguments": [
      [
        {
          "type": "STRING"
        }
      ],
      [
        {
          "type": "INT"
        }
      ],
      [
        {
          "type": "STRING"
        }
      ]
    ],
    "description": "Returns str, right-padded with pad to a length of len.",
    "draggable": "rpad()",
    "name": "rpad",
    "returnTypes": [
      "STRING"
    ],
    "signature": "rpad(STRING str, INT len, STRING pad)"
  },
  "rtrim": {
    "arguments": [
      [
        {
          "type": "STRING"
        }
      ]
    ],
    "description": "Returns the string resulting from trimming spaces from the end(right hand side) of A. For example, rtrim(\u0027 foobar \u0027) results in \u0027 foobar\u0027.",
    "draggable": "rtrim()",
    "name": "rtrim",
    "returnTypes": [
      "STRING"
    ],
    "signature": "rtrim(STRING a)"
  },
  "scale_qdigest": {
    "arguments": [
      [
        {
          "type": "qdigest(real)"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "Scale a quantile digest according to a new weight",
    "draggable": "scale_qdigest()",
    "name": "scale_qdigest",
    "returnTypes": [
      "qdigest(real)"
    ],
    "signature": "scale_qdigest(qdigest(real), double)"
  },
  "second": {
    "arguments": [
      [
        {
          "type": "STRING"
        }
      ]
    ],
    "description": "Returns the second of the timestamp.",
    "draggable": "second()",
    "name": "second",
    "returnTypes": [
      "INT"
    ],
    "signature": "second(STRING date)"
  },
  "sequence": {
    "arguments": [
      [
        {
          "type": "timestamp"
        }
      ],
      [
        {
          "type": "timestamp"
        }
      ],
      [
        {
          "type": "interval year to month"
        }
      ]
    ],
    "description": "",
    "draggable": "sequence()",
    "name": "sequence",
    "returnTypes": [
      "array(timestamp)"
    ],
    "signature": "sequence(timestamp, timestamp, interval year to month)"
  },
  "sha1": {
    "arguments": [
      [
        {
          "type": "STRING"
        },
        {
          "type": "BINARY"
        }
      ]
    ],
    "description": "Calculates the SHA-1 digest for string or binary and returns the value as a hex string (as of Hive 1.3.0). Example: sha1(\u0027ABC\u0027) = \u00273c01bdbb26f358bab27f267924aa2c9a03fcfdb8\u0027.",
    "draggable": "sha1()",
    "name": "sha1",
    "returnTypes": [
      "STRING"
    ],
    "signature": "sha1(STRING|BINARY a)"
  },
  "sha256": {
    "arguments": [
      [
        {
          "type": "varbinary"
        }
      ]
    ],
    "description": "compute sha256 hash",
    "draggable": "sha256()",
    "name": "sha256",
    "returnTypes": [
      "varbinary"
    ],
    "signature": "sha256(varbinary)"
  },
  "sha512": {
    "arguments": [
      [
        {
          "type": "varbinary"
        }
      ]
    ],
    "description": "compute sha512 hash",
    "draggable": "sha512()",
    "name": "sha512",
    "returnTypes": [
      "varbinary"
    ],
    "signature": "sha512(varbinary)"
  },
  "shuffle": {
    "arguments": [
      [
        {
          "type": "array(E)"
        }
      ]
    ],
    "description": "Generates a random permutation of the given array.",
    "draggable": "shuffle()",
    "name": "shuffle",
    "returnTypes": [
      "array(E)"
    ],
    "signature": "shuffle(array(E))"
  },
  "sign": {
    "arguments": [
      [
        {
          "type": "DOUBLE"
        },
        {
          "type": "INT"
        }
      ]
    ],
    "description": "Returns the sign of a as \u00271.0\u0027 (if a is positive) or \u0027-1.0\u0027 (if a is negative), \u00270.0\u0027 otherwise. The decimal version returns INT instead of DOUBLE.",
    "draggable": "sign()",
    "name": "sign",
    "returnTypes": [
      "T"
    ],
    "signature": "sign(T\u003cDOUBLE|INT\u003e a)"
  },
  "simplify_geometry": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "Returns a \"simplified\" version of the given geometry",
    "draggable": "simplify_geometry()",
    "name": "simplify_geometry",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "simplify_geometry(Geometry, double)"
  },
  "sin": {
    "arguments": [
      [
        {
          "type": "DECIMAL"
        },
        {
          "type": "DOUBLE"
        }
      ]
    ],
    "description": "Returns the sine of a (a is in radians).",
    "draggable": "sin()",
    "name": "sin",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "sin(DECIMAL|DOUBLE a)"
  },
  "slice": {
    "arguments": [
      [
        {
          "type": "array(E)"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "Subsets an array given an offset (1-indexed) and length",
    "draggable": "slice()",
    "name": "slice",
    "returnTypes": [
      "array(E)"
    ],
    "signature": "slice(array(E), bigint, bigint)"
  },
  "spatial_partitions": {
    "arguments": [
      [
        {
          "type": "KdbTree"
        }
      ],
      [
        {
          "type": "SphericalGeography"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "Returns an array of spatial partition IDs for a geometry representing a set of points within specified distance from the input geometry",
    "draggable": "spatial_partitions()",
    "name": "spatial_partitions",
    "returnTypes": [
      "array(integer)"
    ],
    "signature": "spatial_partitions(KdbTree, SphericalGeography, double)"
  },
  "split": {
    "arguments": [
      [
        {
          "type": "STRING"
        }
      ],
      [
        {
          "type": "STRING"
        }
      ]
    ],
    "description": "Splits str around pat (pat is a regular expression).",
    "draggable": "array\u003cSTRING\u003e split()",
    "name": "split",
    "returnTypes": [
      "ARRAY"
    ],
    "signature": "array\u003cSTRING\u003e split(STRING str, STRING pat)"
  },
  "split_part": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "varchar(y)"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "splits a string by a delimiter and returns the specified field (counting from one)",
    "draggable": "split_part()",
    "name": "split_part",
    "returnTypes": [
      "varchar(x)"
    ],
    "signature": "split_part(varchar(x), varchar(y), bigint)"
  },
  "split_to_map": {
    "arguments": [
      [
        {
          "type": "varchar"
        }
      ],
      [
        {
          "type": "varchar"
        }
      ],
      [
        {
          "type": "varchar"
        }
      ],
      [
        {
          "type": "function(varchar,varchar,varchar,varchar)"
        }
      ]
    ],
    "description": "creates a map using entryDelimiter and keyValueDelimiter along with a lambda to handle duplicate keys",
    "draggable": "split_to_map()",
    "name": "split_to_map",
    "returnTypes": [
      "map(varchar",
      "varchar)"
    ],
    "signature": "split_to_map(varchar, varchar, varchar, function(varchar,varchar,varchar,varchar))"
  },
  "split_to_multimap": {
    "arguments": [
      [
        {
          "type": "varchar"
        }
      ],
      [
        {
          "type": "varchar"
        }
      ],
      [
        {
          "type": "varchar"
        }
      ]
    ],
    "description": "creates a multimap by splitting a string into key/value pairs",
    "draggable": "split_to_multimap()",
    "name": "split_to_multimap",
    "returnTypes": [
      "map(varchar",
      "array(varchar))"
    ],
    "signature": "split_to_multimap(varchar, varchar, varchar)"
  },
  "spooky_hash_v2_32": {
    "arguments": [
      [
        {
          "type": "varbinary"
        }
      ]
    ],
    "description": "compute SpookyHashV2 32-bit hash",
    "draggable": "spooky_hash_v2_32()",
    "name": "spooky_hash_v2_32",
    "returnTypes": [
      "varbinary"
    ],
    "signature": "spooky_hash_v2_32(varbinary)"
  },
  "spooky_hash_v2_64": {
    "arguments": [
      [
        {
          "type": "varbinary"
        }
      ]
    ],
    "description": "compute SpookyHashV2 64-bit hash",
    "draggable": "spooky_hash_v2_64()",
    "name": "spooky_hash_v2_64",
    "returnTypes": [
      "varbinary"
    ],
    "signature": "spooky_hash_v2_64(varbinary)"
  },
  "sqrt": {
    "arguments": [
      [
        {
          "type": "DECIMAL"
        },
        {
          "type": "DOUBLE"
        }
      ]
    ],
    "description": "Returns the square root of a",
    "draggable": "sqrt()",
    "name": "sqrt",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "sqrt(DECIMAL|DOUBLE a)"
  },
  "st_area": {
    "arguments": [
      [
        {
          "type": "SphericalGeography"
        }
      ]
    ],
    "description": "Returns the area of a geometry on the Earth\u0027s surface using spherical model",
    "draggable": "st_area()",
    "name": "st_area",
    "returnTypes": [
      "double"
    ],
    "signature": "st_area(SphericalGeography)"
  },
  "st_asbinary": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns the Well-Known Binary (WKB) representation of the geometry",
    "draggable": "st_asbinary()",
    "name": "st_asbinary",
    "returnTypes": [
      "varbinary"
    ],
    "signature": "st_asbinary(Geometry)"
  },
  "st_astext": {
    "arguments": [
      [
        {
          "type": "SphericalGeography"
        }
      ]
    ],
    "description": "Returns the Well-Known Text (WKT) representation of the geometry",
    "draggable": "st_astext()",
    "name": "st_astext",
    "returnTypes": [
      "varchar"
    ],
    "signature": "st_astext(SphericalGeography)"
  },
  "st_boundary": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns the closure of the combinatorial boundary of this Geometry",
    "draggable": "st_boundary()",
    "name": "st_boundary",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "st_boundary(Geometry)"
  },
  "st_buffer": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "Returns the geometry that represents all points whose distance from the specified geometry is less than or equal to the specified distance",
    "draggable": "st_buffer()",
    "name": "st_buffer",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "st_buffer(Geometry, double)"
  },
  "st_centroid": {
    "arguments": [
      [
        {
          "type": "SphericalGeography"
        }
      ]
    ],
    "description": "Returns the Point value that is the mathematical centroid of a Spherical Geography",
    "draggable": "st_centroid()",
    "name": "st_centroid",
    "returnTypes": [
      "SphericalGeography"
    ],
    "signature": "st_centroid(SphericalGeography)"
  },
  "st_contains": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ],
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns TRUE if and only if no points of right lie in the exterior of left, and at least one point of the interior of left lies in the interior of right",
    "draggable": "st_contains()",
    "name": "st_contains",
    "returnTypes": [
      "boolean"
    ],
    "signature": "st_contains(Geometry, Geometry)"
  },
  "st_convexhull": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns the minimum convex geometry that encloses all input geometries",
    "draggable": "st_convexhull()",
    "name": "st_convexhull",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "st_convexhull(Geometry)"
  },
  "st_coorddim": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Return the coordinate dimension of the Geometry",
    "draggable": "st_coorddim()",
    "name": "st_coorddim",
    "returnTypes": [
      "tinyint"
    ],
    "signature": "st_coorddim(Geometry)"
  },
  "st_crosses": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ],
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns TRUE if the supplied geometries have some, but not all, interior points in common",
    "draggable": "st_crosses()",
    "name": "st_crosses",
    "returnTypes": [
      "boolean"
    ],
    "signature": "st_crosses(Geometry, Geometry)"
  },
  "st_difference": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ],
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns the Geometry value that represents the point set difference of two geometries",
    "draggable": "st_difference()",
    "name": "st_difference",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "st_difference(Geometry, Geometry)"
  },
  "st_dimension": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns the inherent dimension of this Geometry object, which must be less than or equal to the coordinate dimension",
    "draggable": "st_dimension()",
    "name": "st_dimension",
    "returnTypes": [
      "tinyint"
    ],
    "signature": "st_dimension(Geometry)"
  },
  "st_disjoint": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ],
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns TRUE if the Geometries do not spatially intersect - if they do not share any space together",
    "draggable": "st_disjoint()",
    "name": "st_disjoint",
    "returnTypes": [
      "boolean"
    ],
    "signature": "st_disjoint(Geometry, Geometry)"
  },
  "st_distance": {
    "arguments": [
      [
        {
          "type": "SphericalGeography"
        }
      ],
      [
        {
          "type": "SphericalGeography"
        }
      ]
    ],
    "description": "Returns the great-circle distance in meters between two SphericalGeography points.",
    "draggable": "st_distance()",
    "name": "st_distance",
    "returnTypes": [
      "double"
    ],
    "signature": "st_distance(SphericalGeography, SphericalGeography)"
  },
  "st_endpoint": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns the last point of a LINESTRING geometry as a Point",
    "draggable": "st_endpoint()",
    "name": "st_endpoint",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "st_endpoint(Geometry)"
  },
  "st_envelope": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns the bounding rectangular polygon of a Geometry",
    "draggable": "st_envelope()",
    "name": "st_envelope",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "st_envelope(Geometry)"
  },
  "st_envelopeaspts": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns the lower left and upper right corners of bounding rectangular polygon of a Geometry",
    "draggable": "st_envelopeaspts()",
    "name": "st_envelopeaspts",
    "returnTypes": [
      "array(Geometry)"
    ],
    "signature": "st_envelopeaspts(Geometry)"
  },
  "st_equals": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ],
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns TRUE if the given geometries represent the same geometry",
    "draggable": "st_equals()",
    "name": "st_equals",
    "returnTypes": [
      "boolean"
    ],
    "signature": "st_equals(Geometry, Geometry)"
  },
  "st_exteriorring": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns a line string representing the exterior ring of the POLYGON",
    "draggable": "st_exteriorring()",
    "name": "st_exteriorring",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "st_exteriorring(Geometry)"
  },
  "st_geometries": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns an array of geometries in the specified collection",
    "draggable": "st_geometries()",
    "name": "st_geometries",
    "returnTypes": [
      "array(Geometry)"
    ],
    "signature": "st_geometries(Geometry)"
  },
  "st_geometryfromtext": {
    "arguments": [
      [
        {
          "type": "varchar"
        }
      ]
    ],
    "description": "Returns a Geometry type object from Well-Known Text representation (WKT)",
    "draggable": "st_geometryfromtext()",
    "name": "st_geometryfromtext",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "st_geometryfromtext(varchar)"
  },
  "st_geometryn": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ],
      [
        {
          "type": "integer"
        }
      ]
    ],
    "description": "Returns the geometry element at the specified index (indices started with 1)",
    "draggable": "st_geometryn()",
    "name": "st_geometryn",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "st_geometryn(Geometry, integer)"
  },
  "st_geometrytype": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns the type of the geometry",
    "draggable": "st_geometrytype()",
    "name": "st_geometrytype",
    "returnTypes": [
      "varchar"
    ],
    "signature": "st_geometrytype(Geometry)"
  },
  "st_geomfrombinary": {
    "arguments": [
      [
        {
          "type": "varbinary"
        }
      ]
    ],
    "description": "Returns a Geometry type object from Well-Known Binary representation (WKB)",
    "draggable": "st_geomfrombinary()",
    "name": "st_geomfrombinary",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "st_geomfrombinary(varbinary)"
  },
  "st_interiorringn": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ],
      [
        {
          "type": "integer"
        }
      ]
    ],
    "description": "Returns the interior ring element at the specified index (indices start at 1)",
    "draggable": "st_interiorringn()",
    "name": "st_interiorringn",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "st_interiorringn(Geometry, integer)"
  },
  "st_interiorrings": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns an array of interior rings of a polygon",
    "draggable": "st_interiorrings()",
    "name": "st_interiorrings",
    "returnTypes": [
      "array(Geometry)"
    ],
    "signature": "st_interiorrings(Geometry)"
  },
  "st_intersection": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ],
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns the Geometry value that represents the point set intersection of two Geometries",
    "draggable": "st_intersection()",
    "name": "st_intersection",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "st_intersection(Geometry, Geometry)"
  },
  "st_intersects": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ],
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns TRUE if the Geometries spatially intersect in 2D - (share any portion of space) and FALSE if they don\u0027t (they are Disjoint)",
    "draggable": "st_intersects()",
    "name": "st_intersects",
    "returnTypes": [
      "boolean"
    ],
    "signature": "st_intersects(Geometry, Geometry)"
  },
  "st_isclosed": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns TRUE if the LineString or Multi-LineString\u0027s start and end points are coincident",
    "draggable": "st_isclosed()",
    "name": "st_isclosed",
    "returnTypes": [
      "boolean"
    ],
    "signature": "st_isclosed(Geometry)"
  },
  "st_isempty": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns TRUE if this Geometry is an empty geometrycollection, polygon, point etc",
    "draggable": "st_isempty()",
    "name": "st_isempty",
    "returnTypes": [
      "boolean"
    ],
    "signature": "st_isempty(Geometry)"
  },
  "st_isring": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns TRUE if and only if the line is closed and simple",
    "draggable": "st_isring()",
    "name": "st_isring",
    "returnTypes": [
      "boolean"
    ],
    "signature": "st_isring(Geometry)"
  },
  "st_issimple": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns TRUE if this Geometry has no anomalous geometric points, such as self intersection or self tangency",
    "draggable": "st_issimple()",
    "name": "st_issimple",
    "returnTypes": [
      "boolean"
    ],
    "signature": "st_issimple(Geometry)"
  },
  "st_isvalid": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns true if the input geometry is well formed",
    "draggable": "st_isvalid()",
    "name": "st_isvalid",
    "returnTypes": [
      "boolean"
    ],
    "signature": "st_isvalid(Geometry)"
  },
  "st_length": {
    "arguments": [
      [
        {
          "type": "SphericalGeography"
        }
      ]
    ],
    "description": "Returns the great-circle length in meters of a linestring or multi-linestring on Earth\u0027s surface",
    "draggable": "st_length()",
    "name": "st_length",
    "returnTypes": [
      "double"
    ],
    "signature": "st_length(SphericalGeography)"
  },
  "st_linefromtext": {
    "arguments": [
      [
        {
          "type": "varchar"
        }
      ]
    ],
    "description": "Returns a Geometry type LineString object from Well-Known Text representation (WKT)",
    "draggable": "st_linefromtext()",
    "name": "st_linefromtext",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "st_linefromtext(varchar)"
  },
  "st_linestring": {
    "arguments": [
      [
        {
          "type": "array(Geometry)"
        }
      ]
    ],
    "description": "Returns a LineString from an array of points",
    "draggable": "st_linestring()",
    "name": "st_linestring",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "st_linestring(array(Geometry))"
  },
  "st_multipoint": {
    "arguments": [
      [
        {
          "type": "array(Geometry)"
        }
      ]
    ],
    "description": "Returns a multi-point geometry formed from input points",
    "draggable": "st_multipoint()",
    "name": "st_multipoint",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "st_multipoint(array(Geometry))"
  },
  "st_numgeometries": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns the cardinality of the geometry collection",
    "draggable": "st_numgeometries()",
    "name": "st_numgeometries",
    "returnTypes": [
      "integer"
    ],
    "signature": "st_numgeometries(Geometry)"
  },
  "st_numinteriorring": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns the cardinality of the collection of interior rings of a polygon",
    "draggable": "st_numinteriorring()",
    "name": "st_numinteriorring",
    "returnTypes": [
      "bigint"
    ],
    "signature": "st_numinteriorring(Geometry)"
  },
  "st_numpoints": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns the number of points in a Geometry",
    "draggable": "st_numpoints()",
    "name": "st_numpoints",
    "returnTypes": [
      "bigint"
    ],
    "signature": "st_numpoints(Geometry)"
  },
  "st_overlaps": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ],
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns TRUE if the Geometries share space, are of the same dimension, but are not completely contained by each other",
    "draggable": "st_overlaps()",
    "name": "st_overlaps",
    "returnTypes": [
      "boolean"
    ],
    "signature": "st_overlaps(Geometry, Geometry)"
  },
  "st_point": {
    "arguments": [
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "Returns a Geometry type Point object with the given coordinate values",
    "draggable": "st_point()",
    "name": "st_point",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "st_point(double, double)"
  },
  "st_pointn": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ],
      [
        {
          "type": "integer"
        }
      ]
    ],
    "description": "Returns the vertex of a linestring at the specified index (indices started with 1) ",
    "draggable": "st_pointn()",
    "name": "st_pointn",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "st_pointn(Geometry, integer)"
  },
  "st_points": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns an array of points in a geometry",
    "draggable": "st_points()",
    "name": "st_points",
    "returnTypes": [
      "array(Geometry)"
    ],
    "signature": "st_points(Geometry)"
  },
  "st_polygon": {
    "arguments": [
      [
        {
          "type": "varchar"
        }
      ]
    ],
    "description": "Returns a Geometry type Polygon object from Well-Known Text representation (WKT)",
    "draggable": "st_polygon()",
    "name": "st_polygon",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "st_polygon(varchar)"
  },
  "st_relate": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ],
      [
        {
          "type": "Geometry"
        }
      ],
      [
        {
          "type": "varchar"
        }
      ]
    ],
    "description": "Returns TRUE if this Geometry is spatially related to another Geometry",
    "draggable": "st_relate()",
    "name": "st_relate",
    "returnTypes": [
      "boolean"
    ],
    "signature": "st_relate(Geometry, Geometry, varchar)"
  },
  "st_startpoint": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns the first point of a LINESTRING geometry as a Point",
    "draggable": "st_startpoint()",
    "name": "st_startpoint",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "st_startpoint(Geometry)"
  },
  "st_symdifference": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ],
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns the Geometry value that represents the point set symmetric difference of two Geometries",
    "draggable": "st_symdifference()",
    "name": "st_symdifference",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "st_symdifference(Geometry, Geometry)"
  },
  "st_touches": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ],
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns TRUE if the geometries have at least one point in common, but their interiors do not intersect",
    "draggable": "st_touches()",
    "name": "st_touches",
    "returnTypes": [
      "boolean"
    ],
    "signature": "st_touches(Geometry, Geometry)"
  },
  "st_union": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ],
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns a geometry that represents the point set union of the input geometries.",
    "draggable": "st_union()",
    "name": "st_union",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "st_union(Geometry, Geometry)"
  },
  "st_within": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ],
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns TRUE if the geometry A is completely inside geometry B",
    "draggable": "st_within()",
    "name": "st_within",
    "returnTypes": [
      "boolean"
    ],
    "signature": "st_within(Geometry, Geometry)"
  },
  "st_x": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Return the X coordinate of the point",
    "draggable": "st_x()",
    "name": "st_x",
    "returnTypes": [
      "double"
    ],
    "signature": "st_x(Geometry)"
  },
  "st_xmax": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns X maxima of a bounding box of a Geometry",
    "draggable": "st_xmax()",
    "name": "st_xmax",
    "returnTypes": [
      "double"
    ],
    "signature": "st_xmax(Geometry)"
  },
  "st_xmin": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns X minima of a bounding box of a Geometry",
    "draggable": "st_xmin()",
    "name": "st_xmin",
    "returnTypes": [
      "double"
    ],
    "signature": "st_xmin(Geometry)"
  },
  "st_y": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Return the Y coordinate of the point",
    "draggable": "st_y()",
    "name": "st_y",
    "returnTypes": [
      "double"
    ],
    "signature": "st_y(Geometry)"
  },
  "st_ymax": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns Y maxima of a bounding box of a Geometry",
    "draggable": "st_ymax()",
    "name": "st_ymax",
    "returnTypes": [
      "double"
    ],
    "signature": "st_ymax(Geometry)"
  },
  "st_ymin": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns Y minima of a bounding box of a Geometry",
    "draggable": "st_ymin()",
    "name": "st_ymin",
    "returnTypes": [
      "double"
    ],
    "signature": "st_ymin(Geometry)"
  },
  "strpos": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "varchar(y)"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "returns index of n-th occurrence of a substring (or 0 if not found)",
    "draggable": "strpos()",
    "name": "strpos",
    "returnTypes": [
      "bigint"
    ],
    "signature": "strpos(varchar(x), varchar(y), bigint)"
  },
  "strrpos": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "varchar(y)"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "returns index of n-th occurrence of a substring from the end of the string (or 0 if not found)",
    "draggable": "strrpos()",
    "name": "strrpos",
    "returnTypes": [
      "bigint"
    ],
    "signature": "strrpos(varchar(x), varchar(y), bigint)"
  },
  "substr": {
    "arguments": [
      [
        {
          "type": "STRING"
        },
        {
          "type": "BINARY"
        }
      ],
      [
        {
          "type": "INT"
        }
      ],
      [
        {
          "optional": true,
          "type": "INT"
        }
      ]
    ],
    "description": "Returns the substring or slice of the byte array of A starting from start position till the end of string A or with optional length len. For example, substr(\u0027foobar\u0027, 4) results in \u0027bar\u0027",
    "draggable": "substr()",
    "name": "substr",
    "returnTypes": [
      "STRING"
    ],
    "signature": "substr(STRING|BINARY A, INT start [, INT len]) "
  },
  "substring": {
    "arguments": [
      [
        {
          "type": "STRING"
        },
        {
          "type": "BINARY"
        }
      ],
      [
        {
          "type": "INT"
        }
      ],
      [
        {
          "optional": true,
          "type": "INT"
        }
      ]
    ],
    "description": "Returns the substring or slice of the byte array of A starting from start position till the end of string A or with optional length len. For example, substr(\u0027foobar\u0027, 4) results in \u0027bar\u0027",
    "draggable": "substring()",
    "name": "substring",
    "returnTypes": [
      "STRING"
    ],
    "signature": "substring(STRING|BINARY a, INT start [, INT len])"
  },
  "tan": {
    "arguments": [
      [
        {
          "type": "DECIMAL"
        },
        {
          "type": "DOUBLE"
        }
      ]
    ],
    "description": "Returns the tangent of a (a is in radians).",
    "draggable": "tan()",
    "name": "tan",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "tan(DECIMAL|DOUBLE a)"
  },
  "tanh": {
    "arguments": [
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "hyperbolic tangent",
    "draggable": "tanh()",
    "name": "tanh",
    "returnTypes": [
      "double"
    ],
    "signature": "tanh(double)"
  },
  "timezone_hour": {
    "arguments": [
      [
        {
          "type": "timestamp with time zone"
        }
      ]
    ],
    "description": "time zone hour of the given timestamp",
    "draggable": "timezone_hour()",
    "name": "timezone_hour",
    "returnTypes": [
      "bigint"
    ],
    "signature": "timezone_hour(timestamp with time zone)"
  },
  "timezone_minute": {
    "arguments": [
      [
        {
          "type": "timestamp with time zone"
        }
      ]
    ],
    "description": "time zone minute of the given timestamp",
    "draggable": "timezone_minute()",
    "name": "timezone_minute",
    "returnTypes": [
      "bigint"
    ],
    "signature": "timezone_minute(timestamp with time zone)"
  },
  "to_base": {
    "arguments": [
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "convert a number to a string in the given base",
    "draggable": "to_base()",
    "name": "to_base",
    "returnTypes": [
      "varchar(64)"
    ],
    "signature": "to_base(bigint, bigint)"
  },
  "to_base64": {
    "arguments": [
      [
        {
          "type": "varbinary"
        }
      ]
    ],
    "description": "encode binary data as base64",
    "draggable": "to_base64()",
    "name": "to_base64",
    "returnTypes": [
      "varchar"
    ],
    "signature": "to_base64(varbinary)"
  },
  "to_base64url": {
    "arguments": [
      [
        {
          "type": "varbinary"
        }
      ]
    ],
    "description": "encode binary data as base64 using the URL safe alphabet",
    "draggable": "to_base64url()",
    "name": "to_base64url",
    "returnTypes": [
      "varchar"
    ],
    "signature": "to_base64url(varbinary)"
  },
  "to_big_endian_32": {
    "arguments": [
      [
        {
          "type": "integer"
        }
      ]
    ],
    "description": "encode value as a 32-bit 2\u0027s complement big endian varbinary",
    "draggable": "to_big_endian_32()",
    "name": "to_big_endian_32",
    "returnTypes": [
      "varbinary"
    ],
    "signature": "to_big_endian_32(integer)"
  },
  "to_big_endian_64": {
    "arguments": [
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "encode value as a 64-bit 2\u0027s complement big endian varbinary",
    "draggable": "to_big_endian_64()",
    "name": "to_big_endian_64",
    "returnTypes": [
      "varbinary"
    ],
    "signature": "to_big_endian_64(bigint)"
  },
  "to_char": {
    "arguments": [
      [
        {
          "type": "timestamp with time zone"
        }
      ],
      [
        {
          "type": "varchar"
        }
      ]
    ],
    "description": "Formats a timestamp",
    "draggable": "to_char()",
    "name": "to_char",
    "returnTypes": [
      "varchar"
    ],
    "signature": "to_char(timestamp with time zone, varchar)"
  },
  "to_date": {
    "arguments": [
      [
        {
          "type": "STRING"
        }
      ]
    ],
    "description": "Returns the date part of a timestamp string, example to_date(\u00271970-01-01 00:00:00\u0027). T = pre 2.1.0: STRING 2.1.0 on: DATE",
    "draggable": "to_date()",
    "name": "to_date",
    "returnTypes": [
      "T"
    ],
    "signature": "to_date(STRING timestamp)"
  },
  "to_geometry": {
    "arguments": [
      [
        {
          "type": "SphericalGeography"
        }
      ]
    ],
    "description": "Converts a SphericalGeography object to a Geometry object.",
    "draggable": "to_geometry()",
    "name": "to_geometry",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "to_geometry(SphericalGeography)"
  },
  "to_hex": {
    "arguments": [
      [
        {
          "type": "varbinary"
        }
      ]
    ],
    "description": "encode binary data as hex",
    "draggable": "to_hex()",
    "name": "to_hex",
    "returnTypes": [
      "varchar"
    ],
    "signature": "to_hex(varbinary)"
  },
  "to_ieee754_32": {
    "arguments": [
      [
        {
          "type": "real"
        }
      ]
    ],
    "description": "encode value as a big endian varbinary according to IEEE 754 single-precision floating-point format",
    "draggable": "to_ieee754_32()",
    "name": "to_ieee754_32",
    "returnTypes": [
      "varbinary"
    ],
    "signature": "to_ieee754_32(real)"
  },
  "to_ieee754_64": {
    "arguments": [
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "encode value as a big endian varbinary according to IEEE 754 double-precision floating-point format",
    "draggable": "to_ieee754_64()",
    "name": "to_ieee754_64",
    "returnTypes": [
      "varbinary"
    ],
    "signature": "to_ieee754_64(double)"
  },
  "to_iso8601": {
    "arguments": [
      [
        {
          "type": "timestamp with time zone"
        }
      ]
    ],
    "description": "",
    "draggable": "to_iso8601()",
    "name": "to_iso8601",
    "returnTypes": [
      "varchar(35)"
    ],
    "signature": "to_iso8601(timestamp with time zone)"
  },
  "to_milliseconds": {
    "arguments": [
      [
        {
          "type": "interval day to second"
        }
      ]
    ],
    "description": "",
    "draggable": "to_milliseconds()",
    "name": "to_milliseconds",
    "returnTypes": [
      "bigint"
    ],
    "signature": "to_milliseconds(interval day to second)"
  },
  "to_spherical_geography": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Converts a Geometry object to a SphericalGeography object",
    "draggable": "to_spherical_geography()",
    "name": "to_spherical_geography",
    "returnTypes": [
      "SphericalGeography"
    ],
    "signature": "to_spherical_geography(Geometry)"
  },
  "to_timestamp": {
    "arguments": [
      [
        {
          "type": "varchar"
        }
      ],
      [
        {
          "type": "varchar"
        }
      ]
    ],
    "description": "Converts a string to a TIMESTAMP data type",
    "draggable": "to_timestamp()",
    "name": "to_timestamp",
    "returnTypes": [
      "timestamp"
    ],
    "signature": "to_timestamp(varchar, varchar)"
  },
  "to_unixtime": {
    "arguments": [
      [
        {
          "type": "timestamp with time zone"
        }
      ]
    ],
    "description": "",
    "draggable": "to_unixtime()",
    "name": "to_unixtime",
    "returnTypes": [
      "double"
    ],
    "signature": "to_unixtime(timestamp with time zone)"
  },
  "to_utf8": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ]
    ],
    "description": "encodes the string to UTF-8",
    "draggable": "to_utf8()",
    "name": "to_utf8",
    "returnTypes": [
      "varbinary"
    ],
    "signature": "to_utf8(varchar(x))"
  },
  "transform": {
    "arguments": [
      [
        {
          "type": "array(T)"
        }
      ],
      [
        {
          "type": "function(T,U)"
        }
      ]
    ],
    "description": "apply lambda to each element of the array",
    "draggable": "transform()",
    "name": "transform",
    "returnTypes": [
      "array(U)"
    ],
    "signature": "transform(array(T), function(T,U))"
  },
  "transform_keys": {
    "arguments": [
      [
        {
          "type": "map(K1,V)"
        }
      ],
      [
        {
          "type": "function(K1,V,K2)"
        }
      ]
    ],
    "description": "apply lambda to each entry of the map and transform the key",
    "draggable": "transform_keys()",
    "name": "transform_keys",
    "returnTypes": [
      "map(K2",
      "V)"
    ],
    "signature": "transform_keys(map(K1,V), function(K1,V,K2))"
  },
  "transform_values": {
    "arguments": [
      [
        {
          "type": "map(K,V1)"
        }
      ],
      [
        {
          "type": "function(K,V1,V2)"
        }
      ]
    ],
    "description": "apply lambda to each entry of the map and transform the value",
    "draggable": "transform_values()",
    "name": "transform_values",
    "returnTypes": [
      "map(K",
      "V2)"
    ],
    "signature": "transform_values(map(K,V1), function(K,V1,V2))"
  },
  "trim": {
    "arguments": [
      [
        {
          "type": "STRING"
        }
      ]
    ],
    "description": "Returns the string resulting from trimming spaces from both ends of A. For example, trim(\u0027 foobar \u0027) results in \u0027foobar\u0027",
    "draggable": "trim()",
    "name": "trim",
    "returnTypes": [
      "STRING"
    ],
    "signature": "trim(STRING a)"
  },
  "truncate": {
    "arguments": [
      [
        {
          "type": "real"
        }
      ],
      [
        {
          "type": "integer"
        }
      ]
    ],
    "description": "truncate to float by dropping digits after decimal point",
    "draggable": "truncate()",
    "name": "truncate",
    "returnTypes": [
      "real"
    ],
    "signature": "truncate(real, integer)"
  },
  "typeof": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ]
    ],
    "description": "textual representation of expression type",
    "draggable": "typeof()",
    "name": "typeof",
    "returnTypes": [
      "varchar"
    ],
    "signature": "typeof(T)"
  },
  "uniqueness_distribution": {
    "arguments": [
      [
        {
          "type": "KHyperLogLog"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "",
    "draggable": "uniqueness_distribution()",
    "name": "uniqueness_distribution",
    "returnTypes": [
      "map(bigint",
      "double)"
    ],
    "signature": "uniqueness_distribution(KHyperLogLog, bigint)"
  },
  "upper": {
    "arguments": [
      [
        {
          "type": "STRING"
        }
      ]
    ],
    "description": "Returns the string resulting from converting all characters of A to upper case. For example, upper(\u0027fOoBaR\u0027) results in \u0027FOOBAR\u0027.",
    "draggable": "upper()",
    "name": "upper",
    "returnTypes": [
      "STRING"
    ],
    "signature": "upper(STRING a)"
  },
  "url_decode": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ]
    ],
    "description": "unescape a URL-encoded string",
    "draggable": "url_decode()",
    "name": "url_decode",
    "returnTypes": [
      "varchar(x)"
    ],
    "signature": "url_decode(varchar(x))"
  },
  "url_encode": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ]
    ],
    "description": "escape a string for use in URL query parameter names and values",
    "draggable": "url_encode()",
    "name": "url_encode",
    "returnTypes": [
      "varchar(y)"
    ],
    "signature": "url_encode(varchar(x))"
  },
  "url_extract_fragment": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ]
    ],
    "description": "extract fragment from url",
    "draggable": "url_extract_fragment()",
    "name": "url_extract_fragment",
    "returnTypes": [
      "varchar(x)"
    ],
    "signature": "url_extract_fragment(varchar(x))"
  },
  "url_extract_host": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ]
    ],
    "description": "extract host from url",
    "draggable": "url_extract_host()",
    "name": "url_extract_host",
    "returnTypes": [
      "varchar(x)"
    ],
    "signature": "url_extract_host(varchar(x))"
  },
  "url_extract_parameter": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "varchar(y)"
        }
      ]
    ],
    "description": "extract query parameter from url",
    "draggable": "url_extract_parameter()",
    "name": "url_extract_parameter",
    "returnTypes": [
      "varchar(x)"
    ],
    "signature": "url_extract_parameter(varchar(x), varchar(y))"
  },
  "url_extract_path": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ]
    ],
    "description": "extract part from url",
    "draggable": "url_extract_path()",
    "name": "url_extract_path",
    "returnTypes": [
      "varchar(x)"
    ],
    "signature": "url_extract_path(varchar(x))"
  },
  "url_extract_port": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ]
    ],
    "description": "extract port from url",
    "draggable": "url_extract_port()",
    "name": "url_extract_port",
    "returnTypes": [
      "bigint"
    ],
    "signature": "url_extract_port(varchar(x))"
  },
  "url_extract_protocol": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ]
    ],
    "description": "extract protocol from url",
    "draggable": "url_extract_protocol()",
    "name": "url_extract_protocol",
    "returnTypes": [
      "varchar(x)"
    ],
    "signature": "url_extract_protocol(varchar(x))"
  },
  "url_extract_query": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ]
    ],
    "description": "extract query from url",
    "draggable": "url_extract_query()",
    "name": "url_extract_query",
    "returnTypes": [
      "varchar(x)"
    ],
    "signature": "url_extract_query(varchar(x))"
  },
  "uuid": {
    "arguments": [
      [
        {
          "type": ""
        }
      ]
    ],
    "description": "Returns a randomly generated UUID",
    "draggable": "uuid()",
    "name": "uuid",
    "returnTypes": [
      "varchar"
    ],
    "signature": "uuid()"
  },
  "value_at_quantile": {
    "arguments": [
      [
        {
          "type": "qdigest(real)"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "Given an input q between [0, 1], find the value whose rank in the sorted sequence of the n values represented by the qdigest is qn.",
    "draggable": "value_at_quantile()",
    "name": "value_at_quantile",
    "returnTypes": [
      "real"
    ],
    "signature": "value_at_quantile(qdigest(real), double)"
  },
  "values_at_quantiles": {
    "arguments": [
      [
        {
          "type": "qdigest(real)"
        }
      ],
      [
        {
          "type": "array(double)"
        }
      ]
    ],
    "description": "For each input q between [0, 1], find the value whose rank in the sorted sequence of the n values represented by the qdigest is qn.",
    "draggable": "values_at_quantiles()",
    "name": "values_at_quantiles",
    "returnTypes": [
      "array(real)"
    ],
    "signature": "values_at_quantiles(qdigest(real), array(double))"
  },
  "week": {
    "arguments": [
      [
        {
          "type": "timestamp with time zone"
        }
      ]
    ],
    "description": "week of the year of the given timestamp",
    "draggable": "week()",
    "name": "week",
    "returnTypes": [
      "bigint"
    ],
    "signature": "week(timestamp with time zone)"
  },
  "week_of_year": {
    "arguments": [
      [
        {
          "type": "timestamp with time zone"
        }
      ]
    ],
    "description": "week of the year of the given timestamp",
    "draggable": "week_of_year()",
    "name": "week_of_year",
    "returnTypes": [
      "bigint"
    ],
    "signature": "week_of_year(timestamp with time zone)"
  },
  "width_bucket": {
    "arguments": [
      [
        {
          "type": "NUMBER"
        },
        {
          "type": "NUMBER"
        },
        {
          "type": "NUMBER"
        },
        {
          "type": "INT"
        }
      ]
    ],
    "description": "Returns an integer between 0 and num_buckets+1 by mapping expr into the ith equally sized bucket. Buckets are made by dividing [min_value, max_value] into equally sized regions. If expr \u003c min_value, return 1, if expr \u003e max_value return num_buckets+1. (as of Hive 3.0.0)",
    "draggable": "width_bucket()",
    "name": "width_bucket",
    "returnTypes": [
      "INT"
    ],
    "signature": "width_bucket(NUMBER expr, NUMBER min_value, NUMBER max_value, INT num_buckets)"
  },
  "wilson_interval_lower": {
    "arguments": [
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "binomial confidence interval lower bound using Wilson score",
    "draggable": "wilson_interval_lower()",
    "name": "wilson_interval_lower",
    "returnTypes": [
      "double"
    ],
    "signature": "wilson_interval_lower(bigint, bigint, double)"
  },
  "wilson_interval_upper": {
    "arguments": [
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "binomial confidence interval upper bound using Wilson score",
    "draggable": "wilson_interval_upper()",
    "name": "wilson_interval_upper",
    "returnTypes": [
      "double"
    ],
    "signature": "wilson_interval_upper(bigint, bigint, double)"
  },
  "word_stem": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "varchar(2)"
        }
      ]
    ],
    "description": "returns the stem of a word in the given language",
    "draggable": "word_stem()",
    "name": "word_stem",
    "returnTypes": [
      "varchar(x)"
    ],
    "signature": "word_stem(varchar(x), varchar(2))"
  },
  "xxhash64": {
    "arguments": [
      [
        {
          "type": "varbinary"
        }
      ]
    ],
    "description": "compute xxhash64 hash",
    "draggable": "xxhash64()",
    "name": "xxhash64",
    "returnTypes": [
      "varbinary"
    ],
    "signature": "xxhash64(varbinary)"
  },
  "year": {
    "arguments": [
      [
        {
          "type": "STRING"
        }
      ]
    ],
    "description": "Returns the year part of a date or a timestamp string: year(\u00271970-01-01 00:00:00\u0027) = 1970, year(\u00271970-01-01\u0027) = 1970",
    "draggable": "year()",
    "name": "year",
    "returnTypes": [
      "INT"
    ],
    "signature": "year(STRING date)"
  },
  "year_of_week": {
    "arguments": [
      [
        {
          "type": "timestamp with time zone"
        }
      ]
    ],
    "description": "year of the ISO week of the given timestamp",
    "draggable": "year_of_week()",
    "name": "year_of_week",
    "returnTypes": [
      "bigint"
    ],
    "signature": "year_of_week(timestamp with time zone)"
  },
  "yow": {
    "arguments": [
      [
        {
          "type": "timestamp with time zone"
        }
      ]
    ],
    "description": "year of the ISO week of the given timestamp",
    "draggable": "yow()",
    "name": "yow",
    "returnTypes": [
      "bigint"
    ],
    "signature": "yow(timestamp with time zone)"
  },
  "zip": {
    "arguments": [
      [
        {
          "type": "array(T1)"
        }
      ],
      [
        {
          "type": "array(T2)"
        }
      ],
      [
        {
          "type": "array(T3)"
        }
      ],
      [
        {
          "type": "array(T4)"
        }
      ],
      [
        {
          "type": "array(T5)"
        }
      ]
    ],
    "description": "Merges the given arrays, element-wise, into a single array of rows.",
    "draggable": "zip()",
    "name": "zip",
    "returnTypes": [
      "array(row(T1",
      "T2",
      "T3",
      "T4",
      "T5))"
    ],
    "signature": "zip(array(T1), array(T2), array(T3), array(T4), array(T5))"
  },
  "zip_with": {
    "arguments": [
      [
        {
          "type": "array(T)"
        }
      ],
      [
        {
          "type": "array(U)"
        }
      ],
      [
        {
          "type": "function(T,U,R)"
        }
      ]
    ],
    "description": "merge two arrays, element-wise, into a single array using the lambda function",
    "draggable": "zip_with()",
    "name": "zip_with",
    "returnTypes": [
      "array(R)"
    ],
    "signature": "zip_with(array(T), array(U), function(T,U,R))"
  }
};

const AGGREGATE_FUNCTIONS: UdfCategoryFunctions = {
  "approx_distinct": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "",
    "draggable": "approx_distinct()",
    "name": "approx_distinct",
    "returnTypes": [
      "bigint"
    ],
    "signature": "approx_distinct(T, double)"
  },
  "approx_most_frequent": {
    "arguments": [
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "varchar"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "",
    "draggable": "approx_most_frequent()",
    "name": "approx_most_frequent",
    "returnTypes": [
      "map(varchar",
      "bigint)"
    ],
    "signature": "approx_most_frequent(bigint, varchar, bigint)"
  },
  "approx_percentile": {
    "arguments": [
      [
        {
          "type": "real"
        }
      ],
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "",
    "draggable": "approx_percentile()",
    "name": "approx_percentile",
    "returnTypes": [
      "real"
    ],
    "signature": "approx_percentile(real, double, double)"
  },
  "approx_set": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "",
    "draggable": "approx_set()",
    "name": "approx_set",
    "returnTypes": [
      "HyperLogLog"
    ],
    "signature": "approx_set(varchar(x), double)"
  },
  "arbitrary": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ]
    ],
    "description": "return an arbitrary non-null input value",
    "draggable": "arbitrary()",
    "name": "arbitrary",
    "returnTypes": [
      "T"
    ],
    "signature": "arbitrary(T)"
  },
  "array_agg": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ]
    ],
    "description": "return an array of values",
    "draggable": "array_agg()",
    "name": "array_agg",
    "returnTypes": [
      "array(T)"
    ],
    "signature": "array_agg(T)"
  },
  "avg": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ]
    ],
    "description": "Returns the average of the elements in the group or the average of the distinct values of the column in the group.",
    "draggable": "avg()",
    "name": "avg",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "avg(col)"
  },
  "bitwise_and_agg": {
    "arguments": [
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "",
    "draggable": "bitwise_and_agg()",
    "name": "bitwise_and_agg",
    "returnTypes": [
      "bigint"
    ],
    "signature": "bitwise_and_agg(bigint)"
  },
  "bitwise_or_agg": {
    "arguments": [
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "",
    "draggable": "bitwise_or_agg()",
    "name": "bitwise_or_agg",
    "returnTypes": [
      "bigint"
    ],
    "signature": "bitwise_or_agg(bigint)"
  },
  "bool_and": {
    "arguments": [
      [
        {
          "type": "boolean"
        }
      ]
    ],
    "description": "",
    "draggable": "bool_and()",
    "name": "bool_and",
    "returnTypes": [
      "boolean"
    ],
    "signature": "bool_and(boolean)"
  },
  "bool_or": {
    "arguments": [
      [
        {
          "type": "boolean"
        }
      ]
    ],
    "description": "",
    "draggable": "bool_or()",
    "name": "bool_or",
    "returnTypes": [
      "boolean"
    ],
    "signature": "bool_or(boolean)"
  },
  "checksum": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ]
    ],
    "description": "Checksum of the given values",
    "draggable": "checksum()",
    "name": "checksum",
    "returnTypes": [
      "varbinary"
    ],
    "signature": "checksum(T)"
  },
  "classification_fall_out": {
    "arguments": [
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "boolean"
        }
      ],
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "Computes fall-out (false-positive rate) for binary classification",
    "draggable": "classification_fall_out()",
    "name": "classification_fall_out",
    "returnTypes": [
      "array(double)"
    ],
    "signature": "classification_fall_out(bigint, boolean, double, double)"
  },
  "classification_miss_rate": {
    "arguments": [
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "boolean"
        }
      ],
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "Computes miss-rate (false-negative rate) for binary classification",
    "draggable": "classification_miss_rate()",
    "name": "classification_miss_rate",
    "returnTypes": [
      "array(double)"
    ],
    "signature": "classification_miss_rate(bigint, boolean, double, double)"
  },
  "classification_precision": {
    "arguments": [
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "boolean"
        }
      ],
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "Computes precision for precision-recall curves",
    "draggable": "classification_precision()",
    "name": "classification_precision",
    "returnTypes": [
      "array(double)"
    ],
    "signature": "classification_precision(bigint, boolean, double, double)"
  },
  "classification_recall": {
    "arguments": [
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "boolean"
        }
      ],
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "Computes recall (true-positive rate) for binary classification",
    "draggable": "classification_recall()",
    "name": "classification_recall",
    "returnTypes": [
      "array(double)"
    ],
    "signature": "classification_recall(bigint, boolean, double, double)"
  },
  "classification_thresholds": {
    "arguments": [
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "boolean"
        }
      ],
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "Computes thresholds for metrics of binary classification",
    "draggable": "classification_thresholds()",
    "name": "classification_thresholds",
    "returnTypes": [
      "array(double)"
    ],
    "signature": "classification_thresholds(bigint, boolean, double, double)"
  },
  "convex_hull_agg": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns a geometry that is the convex hull of all the geometries in the set.",
    "draggable": "convex_hull_agg()",
    "name": "convex_hull_agg",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "convex_hull_agg(Geometry)"
  },
  "corr": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ],
      [
        {
          "type": "T"
        }
      ]
    ],
    "description": "Returns the Pearson coefficient of correlation of a pair of a numeric columns in the group.",
    "draggable": "corr()",
    "name": "corr",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "corr(col1, col2)"
  },
  "count": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ]
    ],
    "description": "count(*) - Returns the total number of retrieved rows, including rows containing NULL values. count(expr) - Returns the number of rows for which the supplied expression is non-NULL. count(DISTINCT expr[, expr]) - Returns the number of rows for which the supplied expression(s) are unique and non-NULL. Execution of this can be optimized with hive.optimize.distinct.rewrite.",
    "draggable": "count()",
    "name": "count",
    "returnTypes": [
      "BIGINT"
    ],
    "signature": "count([DISTINCT] col)"
  },
  "count_if": {
    "arguments": [
      [
        {
          "type": "boolean"
        }
      ]
    ],
    "description": "",
    "draggable": "count_if()",
    "name": "count_if",
    "returnTypes": [
      "bigint"
    ],
    "signature": "count_if(boolean)"
  },
  "covar_pop": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ],
      [
        {
          "type": "T"
        }
      ]
    ],
    "description": "Returns the population covariance of a pair of numeric columns in the group.",
    "draggable": "covar_pop()",
    "name": "covar_pop",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "covar_pop(col1, col2)"
  },
  "covar_samp": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ],
      [
        {
          "type": "T"
        }
      ]
    ],
    "description": "Returns the sample covariance of a pair of a numeric columns in the group.",
    "draggable": "covar_samp()",
    "name": "covar_samp",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "covar_samp(col1, col2)"
  },
  "differential_entropy": {
    "arguments": [
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "varchar"
        }
      ],
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "Computes differential entropy based on random-variable samples",
    "draggable": "differential_entropy()",
    "name": "differential_entropy",
    "returnTypes": [
      "double"
    ],
    "signature": "differential_entropy(bigint, double, double, varchar, double, double)"
  },
  "entropy": {
    "arguments": [
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "Takes non-negative count inputs, and computes the log-2 entropy of their fractions when normalized to sum to 1.",
    "draggable": "entropy()",
    "name": "entropy",
    "returnTypes": [
      "double"
    ],
    "signature": "entropy(bigint)"
  },
  "evaluate_classifier_predictions": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "varchar(y)"
        }
      ]
    ],
    "description": "",
    "draggable": "evaluate_classifier_predictions()",
    "name": "evaluate_classifier_predictions",
    "returnTypes": [
      "varchar"
    ],
    "signature": "evaluate_classifier_predictions(varchar(x), varchar(y))"
  },
  "every": {
    "arguments": [
      [
        {
          "type": "boolean"
        }
      ]
    ],
    "description": "",
    "draggable": "every()",
    "name": "every",
    "returnTypes": [
      "boolean"
    ],
    "signature": "every(boolean)"
  },
  "geometric_mean": {
    "arguments": [
      [
        {
          "type": "real"
        }
      ]
    ],
    "description": "",
    "draggable": "geometric_mean()",
    "name": "geometric_mean",
    "returnTypes": [
      "real"
    ],
    "signature": "geometric_mean(real)"
  },
  "geometry_union_agg": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "Returns a geometry that represents the point set union of the input geometries.",
    "draggable": "geometry_union_agg()",
    "name": "geometry_union_agg",
    "returnTypes": [
      "Geometry"
    ],
    "signature": "geometry_union_agg(Geometry)"
  },
  "histogram": {
    "arguments": [
      [
        {
          "type": "K"
        }
      ]
    ],
    "description": "Count the number of times each value occurs",
    "draggable": "histogram()",
    "name": "histogram",
    "returnTypes": [
      "map(K",
      "bigint)"
    ],
    "signature": "histogram(K)"
  },
  "khyperloglog_agg": {
    "arguments": [
      [
        {
          "type": "varchar(x)"
        }
      ],
      [
        {
          "type": "varchar(y)"
        }
      ]
    ],
    "description": "",
    "draggable": "khyperloglog_agg()",
    "name": "khyperloglog_agg",
    "returnTypes": [
      "KHyperLogLog"
    ],
    "signature": "khyperloglog_agg(varchar(x), varchar(y))"
  },
  "kurtosis": {
    "arguments": [
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "Returns the (excess) kurtosis of the argument",
    "draggable": "kurtosis()",
    "name": "kurtosis",
    "returnTypes": [
      "double"
    ],
    "signature": "kurtosis(double)"
  },
  "learn_classifier": {
    "arguments": [
      [
        {
          "type": "varchar"
        }
      ],
      [
        {
          "type": "map(bigint,double)"
        }
      ]
    ],
    "description": "",
    "draggable": "learn_classifier()",
    "name": "learn_classifier",
    "returnTypes": [
      "Classifier(varchar)"
    ],
    "signature": "learn_classifier(varchar, map(bigint,double))"
  },
  "learn_libsvm_classifier": {
    "arguments": [
      [
        {
          "type": "varchar"
        }
      ],
      [
        {
          "type": "map(bigint,double)"
        }
      ],
      [
        {
          "type": "varchar"
        }
      ]
    ],
    "description": "",
    "draggable": "learn_libsvm_classifier()",
    "name": "learn_libsvm_classifier",
    "returnTypes": [
      "Classifier(varchar)"
    ],
    "signature": "learn_libsvm_classifier(varchar, map(bigint,double), varchar)"
  },
  "learn_libsvm_regressor": {
    "arguments": [
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "map(bigint,double)"
        }
      ],
      [
        {
          "type": "varchar"
        }
      ]
    ],
    "description": "",
    "draggable": "learn_libsvm_regressor()",
    "name": "learn_libsvm_regressor",
    "returnTypes": [
      "Regressor"
    ],
    "signature": "learn_libsvm_regressor(double, map(bigint,double), varchar)"
  },
  "learn_regressor": {
    "arguments": [
      [
        {
          "type": "double"
        }
      ],
      [
        {
          "type": "map(bigint,double)"
        }
      ]
    ],
    "description": "",
    "draggable": "learn_regressor()",
    "name": "learn_regressor",
    "returnTypes": [
      "Regressor"
    ],
    "signature": "learn_regressor(double, map(bigint,double))"
  },
  "make_set_digest": {
    "arguments": [
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "",
    "draggable": "make_set_digest()",
    "name": "make_set_digest",
    "returnTypes": [
      "SetDigest"
    ],
    "signature": "make_set_digest(bigint)"
  },
  "map_agg": {
    "arguments": [
      [
        {
          "type": "K"
        }
      ],
      [
        {
          "type": "V"
        }
      ]
    ],
    "description": "Aggregates all the rows (key/value pairs) into a single map",
    "draggable": "map_agg()",
    "name": "map_agg",
    "returnTypes": [
      "map(K",
      "V)"
    ],
    "signature": "map_agg(K, V)"
  },
  "map_union": {
    "arguments": [
      [
        {
          "type": "map(K,V)"
        }
      ]
    ],
    "description": "Aggregate all the maps into a single map",
    "draggable": "map_union()",
    "name": "map_union",
    "returnTypes": [
      "map(K",
      "V)"
    ],
    "signature": "map_union(map(K,V))"
  },
  "max": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ]
    ],
    "description": "Returns the maximum value of the column in the group.",
    "draggable": "max()",
    "name": "max",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "max(col)"
  },
  "max_by": {
    "arguments": [
      [
        {
          "type": "V"
        }
      ],
      [
        {
          "type": "K"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "Returns the values of the first argument associated with the maximum values of the second argument",
    "draggable": "max_by()",
    "name": "max_by",
    "returnTypes": [
      "array(V)"
    ],
    "signature": "max_by(V, K, bigint)"
  },
  "merge": {
    "arguments": [
      [
        {
          "type": "qdigest(T)"
        }
      ]
    ],
    "description": "Merges the input quantile digests into a single quantile digest",
    "draggable": "merge()",
    "name": "merge",
    "returnTypes": [
      "qdigest(T)"
    ],
    "signature": "merge(qdigest(T))"
  },
  "merge_set_digest": {
    "arguments": [
      [
        {
          "type": "SetDigest"
        }
      ]
    ],
    "description": "",
    "draggable": "merge_set_digest()",
    "name": "merge_set_digest",
    "returnTypes": [
      "SetDigest"
    ],
    "signature": "merge_set_digest(SetDigest)"
  },
  "min": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ]
    ],
    "description": "Returns the minimum of the column in the group.",
    "draggable": "min()",
    "name": "min",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "min(col)"
  },
  "min_by": {
    "arguments": [
      [
        {
          "type": "V"
        }
      ],
      [
        {
          "type": "K"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "Returns the values of the first argument associated with the minimum values of the second argument",
    "draggable": "min_by()",
    "name": "min_by",
    "returnTypes": [
      "array(V)"
    ],
    "signature": "min_by(V, K, bigint)"
  },
  "multimap_agg": {
    "arguments": [
      [
        {
          "type": "K"
        }
      ],
      [
        {
          "type": "V"
        }
      ]
    ],
    "description": "Aggregates all the rows (key/value pairs) into a single multimap",
    "draggable": "multimap_agg()",
    "name": "multimap_agg",
    "returnTypes": [
      "map(K",
      "array(V))"
    ],
    "signature": "multimap_agg(K, V)"
  },
  "numeric_histogram": {
    "arguments": [
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "real"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "",
    "draggable": "numeric_histogram()",
    "name": "numeric_histogram",
    "returnTypes": [
      "map(real",
      "real)"
    ],
    "signature": "numeric_histogram(bigint, real, double)"
  },
  "qdigest_agg": {
    "arguments": [
      [
        {
          "type": "V"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ],
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "Returns a qdigest from the set of reals, bigints, doubles",
    "draggable": "qdigest_agg()",
    "name": "qdigest_agg",
    "returnTypes": [
      "qdigest(V)"
    ],
    "signature": "qdigest_agg(V, bigint, double)"
  },
  "reduce_agg": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ],
      [
        {
          "type": "S"
        }
      ],
      [
        {
          "type": "function(S,T,S)"
        }
      ],
      [
        {
          "type": "function(S,S,S)"
        }
      ]
    ],
    "description": "Reduce input elements into a single value",
    "draggable": "reduce_agg()",
    "name": "reduce_agg",
    "returnTypes": [
      "S"
    ],
    "signature": "reduce_agg(T, S, function(S,T,S), function(S,S,S))"
  },
  "regr_intercept": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ],
      [
        {
          "type": "T"
        }
      ]
    ],
    "description": "Returns the y-intercept of the linear regression line, i.e. the value of b in the equation dependent = a * independent + b. As of Hive 2.2.0.",
    "draggable": "regr_intercept()",
    "name": "regr_intercept",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "regr_intercept(T independent, T dependent)"
  },
  "regr_slope": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ],
      [
        {
          "type": "T"
        }
      ]
    ],
    "description": "Returns the slope of the linear regression line, i.e. the value of a in the equation dependent = a * independent + b. As of Hive 2.2.0.",
    "draggable": "regr_slope()",
    "name": "regr_slope",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "regr_slope(T independent, T dependent)"
  },
  "set_agg": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ]
    ],
    "description": "return an array of values",
    "draggable": "set_agg()",
    "name": "set_agg",
    "returnTypes": [
      "array(T)"
    ],
    "signature": "set_agg(T)"
  },
  "set_union": {
    "arguments": [
      [
        {
          "type": "array(T)"
        }
      ]
    ],
    "description": "Given a column of array type, return an array of all the unique values contained in each of the arrays in the column",
    "draggable": "set_union()",
    "name": "set_union",
    "returnTypes": [
      "array(T)"
    ],
    "signature": "set_union(array(T))"
  },
  "skewness": {
    "arguments": [
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "Returns the skewness of the argument",
    "draggable": "skewness()",
    "name": "skewness",
    "returnTypes": [
      "double"
    ],
    "signature": "skewness(double)"
  },
  "spatial_partitioning": {
    "arguments": [
      [
        {
          "type": "Geometry"
        }
      ]
    ],
    "description": "",
    "draggable": "spatial_partitioning()",
    "name": "spatial_partitioning",
    "returnTypes": [
      "varchar"
    ],
    "signature": "spatial_partitioning(Geometry)"
  },
  "stddev": {
    "arguments": [
      [
        {
          "type": "double"
        }
      ]
    ],
    "description": "Returns the sample standard deviation of the argument",
    "draggable": "stddev()",
    "name": "stddev",
    "returnTypes": [
      "double"
    ],
    "signature": "stddev(double)"
  },
  "stddev_pop": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ]
    ],
    "description": "Returns the standard deviation of a numeric column in the group.",
    "draggable": "stddev_pop()",
    "name": "stddev_pop",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "stddev_pop(col)"
  },
  "stddev_samp": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ]
    ],
    "description": "Returns the unbiased sample standard deviation of a numeric column in the group.",
    "draggable": "stddev_samp()",
    "name": "stddev_samp",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "stddev_samp(col)"
  },
  "sum": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ]
    ],
    "description": "Returns the sum of the elements in the group or the sum of the distinct values of the column in the group.",
    "draggable": "sum()",
    "name": "sum",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "sum(col)"
  },
  "var_pop": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ]
    ],
    "description": "Returns the variance of a numeric column in the group.",
    "draggable": "var_pop()",
    "name": "var_pop",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "var_pop(col)"
  },
  "var_samp": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ]
    ],
    "description": "Returns the unbiased sample variance of a numeric column in the group.",
    "draggable": "var_samp()",
    "name": "var_samp",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "var_samp(col)"
  },
  "variance": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ]
    ],
    "description": "Returns the variance of a numeric column in the group.",
    "draggable": "variance()",
    "name": "variance",
    "returnTypes": [
      "DOUBLE"
    ],
    "signature": "variance(col)"
  }
};

const WINDOW_FUNCTIONS: UdfCategoryFunctions = {
  "cume_dist": {
    "arguments": [
      [
        {
          "multiple": true,
          "optional": true,
          "type": "T"
        }
      ]
    ],
    "description": "",
    "draggable": "cume_dist()",
    "name": "cume_dist",
    "returnTypes": [
      "T"
    ],
    "signature": "cume_dist()"
  },
  "dense_rank": {
    "arguments": [],
    "description": "Returns an ascending sequence of integers, starting with 1. The output sequence produces duplicate integers for duplicate values of the ORDER BY expressions.",
    "draggable": "dense_rank() OVER()",
    "name": "dense_rank",
    "returnTypes": [
      "INT"
    ],
    "signature": "dense_rank() OVER([partition_by_clause] order_by_clause)"
  },
  "first_value": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ]
    ],
    "description": "Returns the expression value from the first row in the window. The return value is NULL if the input expression is NULL.",
    "draggable": "first_value() OVER()",
    "name": "first_value",
    "returnTypes": [
      "T"
    ],
    "signature": "first_value(expr) OVER([partition_by_clause] order_by_clause [window_clause])"
  },
  "lag": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ],
      [
        {
          "optional": true,
          "type": "INT"
        }
      ],
      [
        {
          "optional": true,
          "type": "T"
        }
      ]
    ],
    "description": "This function returns the value of an expression using column values from a preceding row. You specify an integer offset, which designates a row position some number of rows previous to the current row. Any column references in the expression argument refer to column values from that prior row.",
    "draggable": "lag() OVER()",
    "name": "lag",
    "returnTypes": [
      "T"
    ],
    "signature": "lag(expr [, offset] [, default]) OVER ([partition_by_clause] order_by_clause)"
  },
  "last_value": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ]
    ],
    "description": "Returns the expression value from the last row in the window. The return value is NULL if the input expression is NULL.",
    "draggable": "last_value() OVER()",
    "name": "last_value",
    "returnTypes": [
      "T"
    ],
    "signature": "last_value(expr) OVER([partition_by_clause] order_by_clause [window_clause])"
  },
  "lead": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ],
      [
        {
          "optional": true,
          "type": "INT"
        }
      ],
      [
        {
          "optional": true,
          "type": "T"
        }
      ]
    ],
    "description": "This function returns the value of an expression using column values from a following row. You specify an integer offset, which designates a row position some number of rows after to the current row. Any column references in the expression argument refer to column values from that later row.",
    "draggable": "lead() OVER()",
    "name": "lead",
    "returnTypes": [
      "T"
    ],
    "signature": "lead(expr [, offset] [, default]) OVER([partition_by_clause] order_by_clause)"
  },
  "nth_value": {
    "arguments": [
      [
        {
          "type": "T"
        }
      ],
      [
        {
          "type": "bigint"
        }
      ]
    ],
    "description": "",
    "draggable": "nth_value()",
    "name": "nth_value",
    "returnTypes": [
      "T"
    ],
    "signature": "nth_value(T, bigint)"
  },
  "ntile": {
    "arguments": [
      [
        {
          "multiple": true,
          "optional": true,
          "type": "T"
        }
      ]
    ],
    "description": "",
    "draggable": "ntile()",
    "name": "ntile",
    "returnTypes": [
      "T"
    ],
    "signature": "ntile()"
  },
  "percent_rank": {
    "arguments": [
      [
        {
          "multiple": true,
          "optional": true,
          "type": "T"
        }
      ]
    ],
    "description": "",
    "draggable": "percent_rank()",
    "name": "percent_rank",
    "returnTypes": [
      "T"
    ],
    "signature": "percent_rank()"
  },
  "rank": {
    "arguments": [],
    "description": "Returns an ascending sequence of integers, starting with 1. The output sequence produces duplicate integers for duplicate values of the ORDER BY expressions. After generating duplicate output values for the \"tied\" input values, the function increments the sequence by the number of tied values.",
    "draggable": "rank() OVER()",
    "name": "rank",
    "returnTypes": [
      "INT"
    ],
    "signature": "rank() OVER([partition_by_clause] order_by_clause)"
  },
  "row_number": {
    "arguments": [],
    "description": "Returns an ascending sequence of integers, starting with 1. Starts the sequence over for each group produced by the PARTITIONED BY clause. The output sequence includes different values for duplicate input values. Therefore, the sequence never contains any duplicates or gaps, regardless of duplicate input values.",
    "draggable": "row_number() OVER()",
    "name": "row_number",
    "returnTypes": [
      "INT"
    ],
    "signature": "row_number() OVER([partition_by_clause] order_by_clause)"
  }
};


export const UDF_CATEGORIES: UdfCategory[] = [
    { name: I18n('Aggregate'), isAggregate: true, functions: AGGREGATE_FUNCTIONS },
    { name: I18n('Window'), isAnalytic: true, functions: WINDOW_FUNCTIONS },
    { name: I18n('Scalar'), functions: SCALAR_FUNCTIONS },
];
