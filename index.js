var redis = require('redis');

var redisClient = redis.createClient(
	process.env.LETTUCE_REDIS_HOST || '127.0.0.1',
	process.env.LETTUCE_REDIS_PORT || 6379
);

var lock = require('redis-lock')(redisClient);
var jsonify = require('redis-jsonify');

module.exports.client = redisClient;
module.exports.lock = lock;
module.exports.json = jsonify(redisClient);

