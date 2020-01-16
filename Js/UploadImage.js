var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.file.path;
            var newpath = 'C:/Users/nille/Documents/Image Viewer/Images/' + files.file.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err)
                    throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    }
    else {
        fs.readFile('../admin.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
}).listen(8080);
//# sourceMappingURL=UploadImage.js.map