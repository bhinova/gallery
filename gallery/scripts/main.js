$(() => {
    (function appendImages() {
        var dir = "images/";
        var imageNames = [1, 2, 3, 4];
        var extension = '.jpg';

        $.each(imageNames, function(i, val) {
            var parent = $('<a class="col-md-4" data-lightbox="image" href="' + dir + val + extension + '"></a>');
            $('<img src="' + dir + val + extension + '">').appendTo(parent);
            $('#gallery-images').append(parent);
        });
    })();

    console.log('test');
});