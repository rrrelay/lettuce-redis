var redis = require('redis');

var redisClient = redis.createClient(
	process.env.LETTUCE_REDIS_PORT || 6379,
	process.env.LETTUCE_REDIS_HOST || '127.0.0.1'
);

var password = process.env.LETTUCE_REDIS_PASSWORD;
if (password){
	redisClient.auth(password);
}

var lock = require('redis-lock')(redisClient);

module.exports.client = redisClient;
module.exports.lock = lock;

