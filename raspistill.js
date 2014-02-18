exports.data = function (cb) {
	var util = require('util');
	var exec = require('child_process').exec;
	var res = {};
	
	exec("cd /home/pi && /usr/bin/sudo /usr/bin/raspistill -o still.jpg -t 1 -w 640 -h 480 -ev 10 -ISO 800 -n -ex auto -q 100", function (err, stdout) {
		res.result = stdout.split('\n');
		cb(res);
	});
};

exports.manage_post = function (post, cb) {
	cb(0, null);
};

exports.updatetime = 5 * 60 * 1000;
exports.title = 'Camera Image';
exports.columns = 4;