/**
 * @file Parser
 * @author Alexander Rose <alexander.rose@weirdbyte.de>
 * @private
 */


import { Debug, Log } from "../globals.js";
import { defaults } from "../utils.js";


function Parser( streamer, params ){

    var p = params || {};

    this.streamer = streamer;

    this.name = defaults( p.name, "" );
    this.path = defaults( p.path, "" );

}

Parser.prototype = {

    constructor: Parser,
    type: "",

    __objName: "",

    parse: function( callback ){

        var self = this;

        this.streamer.read( function(){
            self._beforeParse();
            self._parse( function(){
                self._afterParse();
                callback( self[ self.__objName ] );
            } );
        } );

        return this[ this.__objName ];

    },

    _parse: function( callback ){

        Log.warn( "Parser._parse not implemented" );
        callback();

    },

    _beforeParse: function(){},

    _afterParse: function(){

        if( Debug ) Log.log( this[ this.__objName ] );

    }

};


export default Parser;
