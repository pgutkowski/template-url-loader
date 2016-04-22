var Parser = require("fastparse");
var loaderUtils = require("loader-utils")

module.exports = function(source) {
    this.cacheable;
    parser = new Parser({
    	"source" : {
    		"template" : "template",
    	},
    	"template" : {
    			"((Url)\\s*:\\s*\\'.*?\\')" : function(match, name, index){
        			this.results.push({
        				start: index,
        				length: name.length,
        				name : name,
        			})
        			return "source";
        		}    
    		
    	},
    	"comment": {
    		"\\*/": "source",
    	},
    	// The "linecomment" state 
    	"linecomment": {
    		"\\n+": "source"
    	}
    });
    
    var results = parser.parse("source", source, {results: []}).results;
    
    var config = getLoaderConfig(this);
    
    results.forEach(function(result){
    	var url = result.name.substring((result.name.indexOf("\'")+1), result.name.length);
    	source = source.replace(result.name, (":require('./"+config.path+url+")"));
    });
    
    return source;
    
    function getLoaderConfig(context) {
    	return loaderUtils.getLoaderConfig(context, "path");
    }
};