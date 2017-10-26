var sbgnviz = require('sbgnviz');
var filesaverjs = require('filesaverjs');
var jQuery = $ = require('jquery');
var cytoscape = require('cytoscape');

// Get cy extension instances
var cyPanzoom = require('cytoscape-panzoom');
var cyQtip = require('cytoscape-qtip');
var cyCoseBilkent = require('cytoscape-cose-bilkent');
var cyUndoRedo = require('cytoscape-undo-redo');
var cyClipboard = require('cytoscape-clipboard');
var cyContextMenus = require('cytoscape-context-menus');
var cyExpandCollapse = require('cytoscape-expand-collapse');
var cyEdgeBendEditing = require('cytoscape-edge-bend-editing');
var cyViewUtilities = require('cytoscape-view-utilities');

// Register cy extensions
cyPanzoom( cytoscape, $ );
cyQtip( cytoscape, $ );
cyCoseBilkent( cytoscape );
cyUndoRedo( cytoscape );
cyClipboard( cytoscape, $ );
cyContextMenus( cytoscape, $ );
cyExpandCollapse( cytoscape, $ );
cyEdgeBendEditing( cytoscape, $ );
cyViewUtilities( cytoscape, $ );

// Libraries to pass sbgnviz
var libs = {};

libs.filesaverjs = filesaverjs;
libs.jQuery = jQuery;
libs.cytoscape = cytoscape;

$(document).ready(function ()
{
  sbgnviz.register(libs);

  var sb1 = window.sb1 = sbgnviz({
    networkContainerSelector: '#sbgn-network-container1',
    // whether to fit label to nodes
    fitLabelsToNodes: function () {
      return false;
    },
    // dynamic label size it may be 'small', 'regular', 'large'
    dynamicLabelSize: function () {
      return 'regular';
    },
    // percentage used to calculate compound paddings
    compoundPadding: function () {
      return 10;
    },
    undoable: false
  });

  sb1.loadSample('sample2.xml', 'app/samples/');

  sb1.getCy().undoRedo();

  sb1.getCy().viewUtilities({
    node: {
      highlighted: {
        'border-width': '5px'
      }, // styles for when nodes are highlighted.
      unhighlighted: {// styles for when nodes are unhighlighted.
        'opacity': function (ele) {
          return ele.css('opacity');
        }
      }
    },
    edge: {
      highlighted: {
        'width': '5px'
      }, // styles for when edges are highlighted.
      unhighlighted: {// styles for when edges are unhighlighted.
        'opacity': function (ele) {
          return ele.css('opacity');
        }
      }
    }
  });

  sb1.getCy().expandCollapse({undoable: false});

  var sb2 = window.sb2 = sbgnviz({
    networkContainerSelector: '#sbgn-network-container2',
    // whether to fit label to nodes
    fitLabelsToNodes: function () {
      return false;
    },
    // dynamic label size it may be 'small', 'regular', 'large'
    dynamicLabelSize: function () {
      return 'regular';
    },
    // percentage used to calculate compound paddings
    compoundPadding: function () {
      return 10;
    },
    undoable: false
  });

  sb2.loadSample('sample2.xml', 'app/samples/');

  sb2.getCy().undoRedo();

  sb2.getCy().viewUtilities({
    node: {
      highlighted: {
        'border-width': '10px'
      }, // styles for when nodes are highlighted.
      unhighlighted: {// styles for when nodes are unhighlighted.
        'opacity': function (ele) {
          return ele.css('opacity');
        }
      }
    },
    edge: {
      highlighted: {
        'width': '10px'
      }, // styles for when edges are highlighted.
      unhighlighted: {// styles for when edges are unhighlighted.
        'opacity': function (ele) {
          return ele.css('opacity');
        }
      }
    }
  });

  sb2.getCy().expandCollapse({undoable: false});
});
