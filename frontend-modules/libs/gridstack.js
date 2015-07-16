
function initiateDraggableGrid(locs) {
    var options = {
        cell_height: 340,
        vertical_margin: 10,
        resizable: false,
        //allowed_grids: [0, 4, 8]
    };

    var curNode = {x:0, y:0};
    for(var i in locs){
        var loc = locs[i];

        var $gs = $(loc);
        $gs.gridstack(options);

        $gs.on('onStartMove', function (e, node) {
            curNode.x = node.x;
            curNode.y = node.y;
        });

        $gs.on('onFinishDrop', function (e, node) {
            var o = $(node.el);
            if(options.allowed_grids && options.allowed_grids.indexOf(node.x) < 0){
                o.attr('data-gs-x', curNode.x).attr('data-gs-y', curNode.y);
            }
            console.log("onFinishDrop");
        });

        $gs.on('onMove', function (e, node) {
            console.log(node.x + " ++ " + node.y);
        });
    }
}