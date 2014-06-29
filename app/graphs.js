// Generated by CoffeeScript 1.7.1
"use strict";
var Graph, Node, data, graph, graphs, node_data, nodes, num, to_dict, zip;

zip = function() {
  var arr, i, length, lengthArray, _i, _results;
  lengthArray = (function() {
    var _i, _len, _results;
    _results = [];
    for (_i = 0, _len = arguments.length; _i < _len; _i++) {
      arr = arguments[_i];
      _results.push(arr.length);
    }
    return _results;
  }).apply(this, arguments);
  length = Math.min.apply(Math, lengthArray);
  _results = [];
  for (i = _i = 0; 0 <= length ? _i < length : _i > length; i = 0 <= length ? ++_i : --_i) {
    _results.push((function() {
      var _j, _len, _results1;
      _results1 = [];
      for (_j = 0, _len = arguments.length; _j < _len; _j++) {
        arr = arguments[_j];
        _results1.push(arr[i]);
      }
      return _results1;
    }).apply(this, arguments));
  }
  return _results;
};

to_dict = function(keys, values) {
  return values.map(function(value) {
    var val;
    val = {};
    zip(value, keys).map(function(k) {
      return k.reduce(function(a, b) {
        val[b] = a;
        return val;
      });
    });
    return val;
  });
};

graphs = {};

graphs.Graph = Graph = (function() {
  function Graph(nodes, edges) {
    this.nodes = nodes;
    this.edges = edges;
  }

  return Graph;

})();

graphs.Node = Node = (function() {
  function Node(data) {
    this.data = data;
  }

  return Node;

})();

graphs.Edge = Node = (function() {
  function Node(data) {
    this.data = data;
  }

  return Node;

})();

data = zip((function() {
  var _i, _results;
  _results = [];
  for (num = _i = 1; _i <= 10; num = ++_i) {
    _results.push(num);
  }
  return _results;
})(), (function() {
  var _i, _results;
  _results = [];
  for (num = _i = 1; _i <= 10; num = ++_i) {
    _results.push("foo_" + num);
  }
  return _results;
})());

node_data = to_dict(["id", "name"], data);

nodes = node_data.map(function(dict) {
  return new graphs.Node(dict);
});

graph = new graphs.Graph([node]);
