Test.Modules.IMAGE = {
    'add image': function(containerId) {
        var imageObj = new Image();
        imageObj.onload = function() {
            var stage = new Kinetic.Stage({
                container: containerId,
                width: 578,
                height: 200
            });
            var layer = new Kinetic.Layer({
                throttle: 999
            });
            darth = new Kinetic.Image({
                x: 200,
                y: 60,
                image: imageObj,
                width: 100,
                height: 100,
                offset: [50, 30],
                crop: [135, 7, 167, 134],
                draggable: true
            });

            layer.add(darth);
            stage.add(layer);

            darth.setHeight(200);
            layer.draw();

            darth.setHeight(100);
            layer.draw();

            test(darth.getX() === 200, 'x should be 200');
            test(darth.getY() === 60, 'y should be 60');
            test(darth.getWidth() === 100, 'width should be 100');
            test(darth.getHeight() === 100, 'height should be 100');
            test(darth.getOffset().x === 50, 'center offset x should be 50');
            test(darth.getOffset().y === 30, 'center offset y should be 30');
            test(Kinetic.Type._isElement(darth.getImage()), 'darth image should be an element');

            var crop = null;
            crop = darth.getCrop();
            test(crop.x === 135, 'crop x should be 135');
            test(crop.y === 7, 'crop y should be 7');
            test(crop.width === 167, 'crop width should be 167');
            test(crop.height === 134, 'crop height should be134');

            darth.setCrop(0, 1, 2, 3);
            crop = darth.getCrop();
            test(crop.x === 0, 'crop x should be 0');
            test(crop.y === 1, 'crop y should be 1');
            test(crop.width === 2, 'crop width should be2');
            test(crop.height === 3, 'crop height should be 3');

            darth.setCrop([4, 5, 6, 7]);
            crop = darth.getCrop();
            test(crop.x === 4, 'crop x should be 4');
            test(crop.y === 5, 'crop y should be 5');
            test(crop.width === 6, 'crop width should be 6');
            test(crop.height === 7, 'crop height should be 7');

            darth.setCrop({
                x: 8,
                y: 9,
                width: 10,
                height: 11
            });
            crop = darth.getCrop();
            test(crop.x === 8, 'crop x should be 8');
            test(crop.y === 9, 'crop y should be 9');
            test(crop.width === 10, 'crop width should be 10');
            test(crop.height === 11, 'crop height should be 11');

            darth.setCrop({
                x: 12
            });
            crop = darth.getCrop();
            test(crop.x === 12, 'crop x should be 12');
            test(crop.y === 9, 'crop y should be 9');
            test(crop.width === 10, 'crop width should be 10');
            test(crop.height === 11, 'crop height should be 11');

            darth.setCrop({
                y: 13
            });
            crop = darth.getCrop();
            test(crop.x === 12, 'crop x should be 12');
            test(crop.y === 13, 'crop y should be 13');
            test(crop.width === 10, 'crop width should be 10');
            test(crop.height === 11, 'crop height should be 11');

            darth.setCrop({
                width: 14
            });
            crop = darth.getCrop();
            test(crop.x === 12, 'crop x should be 12');
            test(crop.y === 13, 'crop y should be 13');
            test(crop.width === 14, 'crop width should be 14');
            test(crop.height === 11, 'crop height should be 11');

            darth.setCrop({
                height: 15
            });
            crop = darth.getCrop();
            test(crop.x === 12, 'crop x should be 12');
            test(crop.y === 13, 'crop y should be 13');
            test(crop.width === 14, 'crop width should be 14');
            test(crop.height === 15, 'crop height should be 15');

            darth.setAttrs({
                x: 200,
                y: 60,
                image: imageObj,
                width: 100,
                height: 100,
                offset: [50, 30],
                crop: [135, 7, 167, 134],
                draggable: true
            });

            //document.body.appendChild(layer.bufferCanvas.element)

        };
        imageObj.src = '../assets/darth-vader.jpg';
    },
    'grayscale image': function(containerId) {
        var imageObj = new Image();
        imageObj.onload = function() {
            var stage = new Kinetic.Stage({
                container: containerId,
                width: 578,
                height: 200
            });
            var layer = new Kinetic.Layer({
                throttle: 999
            });
            darth = new Kinetic.Image({
                x: 10,
                y: 10,
                image: imageObj,
                draggable: true
            });

            layer.add(darth);
            stage.add(layer);

            test(darth.getWidth() === 438, 'image width should be 438');
            test(darth.getHeight() === 300, 'image height should be 300');

            darth.applyFilter({
                filter: Kinetic.Filters.Grayscale,
                callback: function() {
                    layer.draw();
                    var dataUrl = layer.toDataURL();
                    //console.log(dataUrl);
                    warn(dataUrl === dataUrls['Filters - grayscale image'], 'problem with Grayscale filter.');
                }
            });
        };
        imageObj.src = '../assets/darth-vader.jpg';
    },
    'invert image': function(containerId) {
        var imageObj = new Image();
        imageObj.onload = function() {
            var stage = new Kinetic.Stage({
                container: containerId,
                width: 578,
                height: 200
            });
            var layer = new Kinetic.Layer({
                throttle: 999
            });
            darth = new Kinetic.Image({
                x: 10,
                y: 10,
                image: imageObj,
                draggable: true
            });

            layer.add(darth);
            stage.add(layer);

            test(darth.getWidth() === 438, 'image width should be 438');
            test(darth.getHeight() === 300, 'image height should be 300');

            darth.applyFilter({
                filter: Kinetic.Filters.Invert,
                callback: function() {
                    layer.draw();
                    var dataUrl = layer.toDataURL();
                    //console.log(dataUrl);
                    //warn(dataUrl === dataUrls['Filters - invert image'], 'problem with Invert filter.');
                }
            });
        };
        imageObj.src = '../assets/darth-vader.jpg';
    },
    'adjust image brightness': function(containerId) {
        var imageObj = new Image();
        imageObj.onload = function() {
            var stage = new Kinetic.Stage({
                container: containerId,
                width: 578,
                height: 200
            });
            var layer = new Kinetic.Layer({
                throttle: 999
            });
            darth = new Kinetic.Image({
                x: 10,
                y: 10,
                image: imageObj,
                draggable: true
            });

            layer.add(darth);
            stage.add(layer);

            test(darth.getWidth() === 438, 'image width should be 438');
            test(darth.getHeight() === 300, 'image height should be 300');

            darth.applyFilter({
                filter: Kinetic.Filters.Brighten,
                config: {
                    val: 100
                },
                callback: function() {
                    layer.draw();
                    var dataUrl = layer.toDataURL();
                    //console.log(dataUrl);
                    warn(dataUrl === dataUrls['Filters - adjust image brightness'], 'problem with Brighten filter.');
                }
            });
        };
        imageObj.src = '../assets/darth-vader.jpg';
    },
    'filter transformed image': function(containerId) {
        var urls = dataUrls['SHAPE - filter transformed image'];
        var imageObj = new Image();
        imageObj.onload = function() {
            var stage = new Kinetic.Stage({
                container: containerId,
                width: 578,
                height: 200
            });
            var layer = new Kinetic.Layer({
                throttle: 999
            });
            darth = new Kinetic.Image({
                x: 50,
                y: 50,
                //width: 438,
                //height: 300,
                image: imageObj,
                draggable: true,
                rotationDeg: 10,
                scale: 0.3
            });

            darth.setOffset(darth.getWidth() / 2, darth.getHeight() / 2);

            layer.add(darth);
            stage.add(layer);

            test(darth.getWidth() === 438, 'image width should be 438');
            test(darth.getHeight() === 300, 'image height should be 300');

            darth.applyFilter({
                filter: Kinetic.Filters.Grayscale,
                callback: function() {
                    //stage.start();
                    layer.draw();
                    warn(layer.toDataURL() === urls[0], 'data url is incorrect');
                }
            });
        };
        imageObj.src = '../assets/darth-vader.jpg';
    },
    'set image fill to color then image then linear gradient then back to image': function(containerId) {
        var imageObj = new Image();
        imageObj.onload = function() {
            var stage = new Kinetic.Stage({
                container: containerId,
                width: 578,
                height: 200
            });
            var layer = new Kinetic.Layer();
            var circle = new Kinetic.Circle({
                x: 200,
                y: 60,
                radius: 50,
                fill: 'blue'
            });

            layer.add(circle);
            stage.add(layer);

            test(circle.getFill() === 'blue', 'circle fill should be blue');

            circle.setFill({
                image: imageObj,
                repeat: 'no-repeat',
                offset: [-200, -70]
            });

            test(circle.getFill().image !== undefined, 'circle fill image should be defined');
            test(circle.getFill().repeat === 'no-repeat', 'circle fill repeat should be no-repeat');
            test(circle.getFill().offset.x === -200, 'circle fill offset x should be -200');
            test(circle.getFill().offset.y === -70, 'circle fill offset y should be -70');

            circle.setFill({
                start: {
                    x: -35,
                    y: -35
                },
                end: {
                    x: 35,
                    y: 35
                },
                colorStops: [0, 'red', 1, 'blue']
            });

            test(circle.getFill().image === undefined, 'circle fill image should be undefined');

            circle.setFill({
                image: imageObj,
                repeat: 'no-repeat',
                offset: [-200, -70]
            });

            layer.draw();
        };
        imageObj.src = '../assets/darth-vader.jpg';
    },
    'apply shadow to transparent image': function(containerId) {
        var imageObj = new Image();
        imageObj.onload = function() {
            var stage = new Kinetic.Stage({
                container: containerId,
                width: 578,
                height: 200
            });
            var layer = new Kinetic.Layer();
            var lion = new Kinetic.Image({
                x: 200,
                y: 40,
                image: imageObj,
                draggable: true,
                shadow: {
                    color: 'black',
                    blur: 10,
                    offset: [20, 20],
                    opacity: 0.2
                }
            });

            layer.add(lion);
            lion.createImageBuffer(function() {
                stage.add(layer);
            });
            //document.body.appendChild(layer.bufferCanvas.element);

        };
        imageObj.src = '../assets/lion.png';
    }
};
