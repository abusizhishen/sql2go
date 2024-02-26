// Generated from Sql.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import SqlListener from './SqlListener.js';
const serializedATN = [4,1,41,284,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
1,0,1,0,3,0,74,8,0,1,1,1,1,1,2,1,2,3,2,80,8,2,1,3,1,3,1,3,1,3,3,3,86,8,3,
1,3,1,3,1,4,1,4,1,5,1,5,3,5,94,8,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,
1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,3,13,118,
8,13,1,14,1,14,1,14,5,14,123,8,14,10,14,12,14,126,9,14,1,14,3,14,129,8,14,
1,14,3,14,132,8,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,1,19,1,20,
1,20,1,20,1,20,1,21,1,21,1,22,1,22,1,22,3,22,153,8,22,1,22,1,22,1,22,3,22,
158,8,22,1,22,1,22,1,23,1,23,1,23,5,23,165,8,23,10,23,12,23,168,9,23,1,23,
5,23,171,8,23,10,23,12,23,174,9,23,1,23,5,23,177,8,23,10,23,12,23,180,9,
23,1,23,1,23,5,23,184,8,23,10,23,12,23,187,9,23,1,23,3,23,190,8,23,1,24,
1,24,1,24,3,24,195,8,24,1,24,1,24,5,24,199,8,24,10,24,12,24,202,9,24,1,24,
3,24,205,8,24,1,25,1,25,3,25,209,8,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,
3,26,218,8,26,3,26,220,8,26,1,27,1,27,1,27,3,27,225,8,27,1,27,3,27,228,8,
27,1,28,1,28,1,29,1,29,3,29,234,8,29,1,29,1,29,1,29,1,29,5,29,240,8,29,10,
29,12,29,243,9,29,1,29,3,29,246,8,29,1,29,1,29,3,29,250,8,29,1,29,3,29,253,
8,29,1,30,1,30,5,30,257,8,30,10,30,12,30,260,9,30,1,30,1,30,1,30,1,30,5,
30,266,8,30,10,30,12,30,269,9,30,1,30,1,30,3,30,273,8,30,1,30,3,30,276,8,
30,1,31,5,31,279,8,31,10,31,12,31,282,9,31,1,31,0,0,32,0,2,4,6,8,10,12,14,
16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,
0,15,1,0,6,7,1,0,9,10,1,0,11,12,1,0,13,14,1,0,15,16,1,0,17,18,1,0,37,40,
1,0,19,20,1,0,21,22,1,0,23,24,1,0,25,26,1,0,27,28,1,0,29,30,1,0,31,32,2,
0,37,38,40,40,293,0,73,1,0,0,0,2,75,1,0,0,0,4,79,1,0,0,0,6,81,1,0,0,0,8,
89,1,0,0,0,10,91,1,0,0,0,12,95,1,0,0,0,14,97,1,0,0,0,16,99,1,0,0,0,18,101,
1,0,0,0,20,103,1,0,0,0,22,105,1,0,0,0,24,108,1,0,0,0,26,117,1,0,0,0,28,119,
1,0,0,0,30,133,1,0,0,0,32,135,1,0,0,0,34,137,1,0,0,0,36,139,1,0,0,0,38,141,
1,0,0,0,40,143,1,0,0,0,42,147,1,0,0,0,44,149,1,0,0,0,46,161,1,0,0,0,48,191,
1,0,0,0,50,208,1,0,0,0,52,219,1,0,0,0,54,224,1,0,0,0,56,229,1,0,0,0,58,231,
1,0,0,0,60,258,1,0,0,0,62,280,1,0,0,0,64,65,5,1,0,0,65,66,3,2,1,0,66,67,
5,1,0,0,67,74,1,0,0,0,68,69,5,2,0,0,69,70,3,2,1,0,70,71,5,2,0,0,71,74,1,
0,0,0,72,74,3,2,1,0,73,64,1,0,0,0,73,68,1,0,0,0,73,72,1,0,0,0,74,1,1,0,0,
0,75,76,5,40,0,0,76,3,1,0,0,0,77,80,1,0,0,0,78,80,5,40,0,0,79,77,1,0,0,0,
79,78,1,0,0,0,80,5,1,0,0,0,81,82,5,3,0,0,82,85,5,38,0,0,83,84,5,4,0,0,84,
86,5,38,0,0,85,83,1,0,0,0,85,86,1,0,0,0,86,87,1,0,0,0,87,88,5,5,0,0,88,7,
1,0,0,0,89,90,7,0,0,0,90,9,1,0,0,0,91,93,3,2,1,0,92,94,3,6,3,0,93,92,1,0,
0,0,93,94,1,0,0,0,94,11,1,0,0,0,95,96,5,8,0,0,96,13,1,0,0,0,97,98,7,1,0,
0,98,15,1,0,0,0,99,100,7,2,0,0,100,17,1,0,0,0,101,102,7,3,0,0,102,19,1,0,
0,0,103,104,7,4,0,0,104,21,1,0,0,0,105,106,7,5,0,0,106,107,7,6,0,0,107,23,
1,0,0,0,108,109,7,7,0,0,109,110,5,37,0,0,110,25,1,0,0,0,111,118,3,14,7,0,
112,118,3,12,6,0,113,118,3,8,4,0,114,118,3,22,11,0,115,118,3,2,1,0,116,118,
3,36,18,0,117,111,1,0,0,0,117,112,1,0,0,0,117,113,1,0,0,0,117,114,1,0,0,
0,117,115,1,0,0,0,117,116,1,0,0,0,118,27,1,0,0,0,119,120,3,0,0,0,120,124,
3,10,5,0,121,123,3,26,13,0,122,121,1,0,0,0,123,126,1,0,0,0,124,122,1,0,0,
0,124,125,1,0,0,0,125,128,1,0,0,0,126,124,1,0,0,0,127,129,3,24,12,0,128,
127,1,0,0,0,128,129,1,0,0,0,129,131,1,0,0,0,130,132,5,4,0,0,131,130,1,0,
0,0,131,132,1,0,0,0,132,29,1,0,0,0,133,134,7,8,0,0,134,31,1,0,0,0,135,136,
7,9,0,0,136,33,1,0,0,0,137,138,7,10,0,0,138,35,1,0,0,0,139,140,7,11,0,0,
140,37,1,0,0,0,141,142,7,12,0,0,142,39,1,0,0,0,143,144,3,34,17,0,144,145,
3,36,18,0,145,146,3,38,19,0,146,41,1,0,0,0,147,148,7,13,0,0,148,43,1,0,0,
0,149,150,3,30,15,0,150,152,3,32,16,0,151,153,3,40,20,0,152,151,1,0,0,0,
152,153,1,0,0,0,153,157,1,0,0,0,154,155,3,0,0,0,155,156,5,33,0,0,156,158,
1,0,0,0,157,154,1,0,0,0,157,158,1,0,0,0,158,159,1,0,0,0,159,160,3,0,0,0,
160,45,1,0,0,0,161,162,3,44,22,0,162,166,5,3,0,0,163,165,3,28,14,0,164,163,
1,0,0,0,165,168,1,0,0,0,166,164,1,0,0,0,166,167,1,0,0,0,167,172,1,0,0,0,
168,166,1,0,0,0,169,171,3,58,29,0,170,169,1,0,0,0,171,174,1,0,0,0,172,170,
1,0,0,0,172,173,1,0,0,0,173,178,1,0,0,0,174,172,1,0,0,0,175,177,3,60,30,
0,176,175,1,0,0,0,177,180,1,0,0,0,178,176,1,0,0,0,178,179,1,0,0,0,179,181,
1,0,0,0,180,178,1,0,0,0,181,185,5,5,0,0,182,184,3,52,26,0,183,182,1,0,0,
0,184,187,1,0,0,0,185,183,1,0,0,0,185,186,1,0,0,0,186,189,1,0,0,0,187,185,
1,0,0,0,188,190,5,34,0,0,189,188,1,0,0,0,189,190,1,0,0,0,190,47,1,0,0,0,
191,192,3,30,15,0,192,194,3,42,21,0,193,195,3,40,20,0,194,193,1,0,0,0,194,
195,1,0,0,0,195,196,1,0,0,0,196,200,3,0,0,0,197,199,3,52,26,0,198,197,1,
0,0,0,199,202,1,0,0,0,200,198,1,0,0,0,200,201,1,0,0,0,201,204,1,0,0,0,202,
200,1,0,0,0,203,205,5,34,0,0,204,203,1,0,0,0,204,205,1,0,0,0,205,49,1,0,
0,0,206,209,3,46,23,0,207,209,3,48,24,0,208,206,1,0,0,0,208,207,1,0,0,0,
209,51,1,0,0,0,210,211,5,40,0,0,211,212,5,35,0,0,212,220,7,14,0,0,213,220,
5,40,0,0,214,220,5,17,0,0,215,217,5,18,0,0,216,218,5,37,0,0,217,216,1,0,
0,0,217,218,1,0,0,0,218,220,1,0,0,0,219,210,1,0,0,0,219,213,1,0,0,0,219,
214,1,0,0,0,219,215,1,0,0,0,220,53,1,0,0,0,221,225,3,14,7,0,222,225,3,16,
8,0,223,225,3,20,10,0,224,221,1,0,0,0,224,222,1,0,0,0,224,223,1,0,0,0,225,
227,1,0,0,0,226,228,3,18,9,0,227,226,1,0,0,0,227,228,1,0,0,0,228,55,1,0,
0,0,229,230,3,0,0,0,230,57,1,0,0,0,231,233,3,54,27,0,232,234,3,56,28,0,233,
232,1,0,0,0,233,234,1,0,0,0,234,235,1,0,0,0,235,236,5,3,0,0,236,241,3,0,
0,0,237,238,5,4,0,0,238,240,3,0,0,0,239,237,1,0,0,0,240,243,1,0,0,0,241,
239,1,0,0,0,241,242,1,0,0,0,242,245,1,0,0,0,243,241,1,0,0,0,244,246,5,40,
0,0,245,244,1,0,0,0,245,246,1,0,0,0,246,247,1,0,0,0,247,249,5,5,0,0,248,
250,3,2,1,0,249,248,1,0,0,0,249,250,1,0,0,0,250,252,1,0,0,0,251,253,5,4,
0,0,252,251,1,0,0,0,252,253,1,0,0,0,253,59,1,0,0,0,254,257,5,40,0,0,255,
257,3,54,27,0,256,254,1,0,0,0,256,255,1,0,0,0,257,260,1,0,0,0,258,256,1,
0,0,0,258,259,1,0,0,0,259,261,1,0,0,0,260,258,1,0,0,0,261,262,5,3,0,0,262,
267,3,0,0,0,263,264,5,4,0,0,264,266,3,0,0,0,265,263,1,0,0,0,266,269,1,0,
0,0,267,265,1,0,0,0,267,268,1,0,0,0,268,270,1,0,0,0,269,267,1,0,0,0,270,
272,5,5,0,0,271,273,3,2,1,0,272,271,1,0,0,0,272,273,1,0,0,0,273,275,1,0,
0,0,274,276,5,4,0,0,275,274,1,0,0,0,275,276,1,0,0,0,276,61,1,0,0,0,277,279,
3,50,25,0,278,277,1,0,0,0,279,282,1,0,0,0,280,278,1,0,0,0,280,281,1,0,0,
0,281,63,1,0,0,0,282,280,1,0,0,0,34,73,79,85,93,117,124,128,131,152,157,
166,172,178,185,189,194,200,204,208,217,219,224,227,233,241,245,249,252,
256,258,267,272,275,280];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SqlParser extends antlr4.Parser {

    static grammarFileName = "Sql.g4";
    static literalNames = [ null, "'`'", "'''", "'('", "','", "')'", "'unsigned'", 
                            "'UNSIGNED'", "'AUTO_INCREMENT'", "'PRIMARY'", 
                            "'primary'", "'UNIQUE'", "'unique'", "'key'", 
                            "'KEY'", "'index'", "'INDEX'", "'default'", 
                            "'DEFAULT'", "'COMMENT'", "'comment'", "'create'", 
                            "'CREATE'", "'table'", "'TABLE'", "'if'", "'IF'", 
                            "'not'", "'NOT'", "'exists'", "'EXISTS'", "'database'", 
                            "'DATABASE'", "'.'", "';'", "'='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, "SPACE", "STRING", 
                             "INT", "Float", "ID", "CommentLine" ];
    static ruleNames = [ "fieldName", "id", "value", "size", "unsigned", 
                         "typeRange", "autoIncrement", "primary", "unique", 
                         "key", "indexKey", "defaultValue", "comment", "property", 
                         "fieldDefine", "create", "table", "iff", "not", 
                         "exists", "ifNotExists", "database", "createTable", 
                         "createTableStatement", "createDatabase", "statement", 
                         "options", "keyType", "keyName", "indexDefine", 
                         "other_stat", "init" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SqlParser.ruleNames;
        this.literalNames = SqlParser.literalNames;
        this.symbolicNames = SqlParser.symbolicNames;
    }



	fieldName() {
	    let localctx = new FieldNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SqlParser.RULE_fieldName);
	    try {
	        this.state = 73;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.match(SqlParser.T__0);
	            this.state = 65;
	            this.id();
	            this.state = 66;
	            this.match(SqlParser.T__0);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 68;
	            this.match(SqlParser.T__1);
	            this.state = 69;
	            this.id();
	            this.state = 70;
	            this.match(SqlParser.T__1);
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 72;
	            this.id();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	id() {
	    let localctx = new IdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SqlParser.RULE_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(SqlParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SqlParser.RULE_value);
	    try {
	        this.state = 79;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case -1:
	            this.enterOuterAlt(localctx, 1);

	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 78;
	            this.match(SqlParser.ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	size() {
	    let localctx = new SizeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SqlParser.RULE_size);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(SqlParser.T__2);
	        this.state = 82;
	        this.match(SqlParser.INT);
	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 83;
	            this.match(SqlParser.T__3);
	            this.state = 84;
	            this.match(SqlParser.INT);
	        }

	        this.state = 87;
	        this.match(SqlParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unsigned() {
	    let localctx = new UnsignedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SqlParser.RULE_unsigned);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        _la = this._input.LA(1);
	        if(!(_la===6 || _la===7)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeRange() {
	    let localctx = new TypeRangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SqlParser.RULE_typeRange);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.id();
	        this.state = 93;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        if(la_===1) {
	            this.state = 92;
	            this.size();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	autoIncrement() {
	    let localctx = new AutoIncrementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SqlParser.RULE_autoIncrement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(SqlParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SqlParser.RULE_primary);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        _la = this._input.LA(1);
	        if(!(_la===9 || _la===10)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unique() {
	    let localctx = new UniqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SqlParser.RULE_unique);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        _la = this._input.LA(1);
	        if(!(_la===11 || _la===12)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	key() {
	    let localctx = new KeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SqlParser.RULE_key);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        _la = this._input.LA(1);
	        if(!(_la===13 || _la===14)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	indexKey() {
	    let localctx = new IndexKeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, SqlParser.RULE_indexKey);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        _la = this._input.LA(1);
	        if(!(_la===15 || _la===16)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	defaultValue() {
	    let localctx = new DefaultValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, SqlParser.RULE_defaultValue);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        _la = this._input.LA(1);
	        if(!(_la===17 || _la===18)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 106;
	        _la = this._input.LA(1);
	        if(!(((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 15) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comment() {
	    let localctx = new CommentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, SqlParser.RULE_comment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        _la = this._input.LA(1);
	        if(!(_la===19 || _la===20)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 109;
	        this.match(SqlParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	property() {
	    let localctx = new PropertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, SqlParser.RULE_property);
	    try {
	        this.state = 117;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 111;
	            this.primary();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 112;
	            this.autoIncrement();
	            break;
	        case 6:
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 113;
	            this.unsigned();
	            break;
	        case 17:
	        case 18:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 114;
	            this.defaultValue();
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 115;
	            this.id();
	            break;
	        case 27:
	        case 28:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 116;
	            this.not();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fieldDefine() {
	    let localctx = new FieldDefineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, SqlParser.RULE_fieldDefine);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.fieldName();
	        this.state = 120;
	        this.typeRange();
	        this.state = 124;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 121;
	                this.property(); 
	            }
	            this.state = 126;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	        this.state = 128;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19 || _la===20) {
	            this.state = 127;
	            this.comment();
	        }

	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 130;
	            this.match(SqlParser.T__3);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	create() {
	    let localctx = new CreateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, SqlParser.RULE_create);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        _la = this._input.LA(1);
	        if(!(_la===21 || _la===22)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	table() {
	    let localctx = new TableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, SqlParser.RULE_table);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        _la = this._input.LA(1);
	        if(!(_la===23 || _la===24)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	iff() {
	    let localctx = new IffContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, SqlParser.RULE_iff);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        _la = this._input.LA(1);
	        if(!(_la===25 || _la===26)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	not() {
	    let localctx = new NotContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, SqlParser.RULE_not);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        _la = this._input.LA(1);
	        if(!(_la===27 || _la===28)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exists() {
	    let localctx = new ExistsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, SqlParser.RULE_exists);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        _la = this._input.LA(1);
	        if(!(_la===29 || _la===30)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifNotExists() {
	    let localctx = new IfNotExistsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, SqlParser.RULE_ifNotExists);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this.iff();
	        this.state = 144;
	        this.not();
	        this.state = 145;
	        this.exists();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	database() {
	    let localctx = new DatabaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, SqlParser.RULE_database);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        _la = this._input.LA(1);
	        if(!(_la===31 || _la===32)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	createTable() {
	    let localctx = new CreateTableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, SqlParser.RULE_createTable);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.create();
	        this.state = 150;
	        this.table();
	        this.state = 152;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25 || _la===26) {
	            this.state = 151;
	            this.ifNotExists();
	        }

	        this.state = 157;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 154;
	            localctx.dbName = this.fieldName();
	            this.state = 155;
	            this.match(SqlParser.T__32);

	        }
	        this.state = 159;
	        localctx.tableName = this.fieldName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	createTableStatement() {
	    let localctx = new CreateTableStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, SqlParser.RULE_createTableStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this.createTable();
	        this.state = 162;
	        this.match(SqlParser.T__2);
	        this.state = 166;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 163;
	                this.fieldDefine(); 
	            }
	            this.state = 168;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	        this.state = 172;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 169;
	                this.indexDefine(); 
	            }
	            this.state = 174;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	        this.state = 178;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 105992) !== 0) || _la===40) {
	            this.state = 175;
	            this.other_stat();
	            this.state = 180;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 181;
	        this.match(SqlParser.T__4);
	        this.state = 185;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 8388611) !== 0)) {
	            this.state = 182;
	            this.options();
	            this.state = 187;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 189;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 188;
	            this.match(SqlParser.T__33);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	createDatabase() {
	    let localctx = new CreateDatabaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, SqlParser.RULE_createDatabase);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        this.create();
	        this.state = 192;
	        this.database();
	        this.state = 194;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25 || _la===26) {
	            this.state = 193;
	            this.ifNotExists();
	        }

	        this.state = 196;
	        localctx.dbName = this.fieldName();
	        this.state = 200;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 8388611) !== 0)) {
	            this.state = 197;
	            this.options();
	            this.state = 202;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 204;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 203;
	            this.match(SqlParser.T__33);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, SqlParser.RULE_statement);
	    try {
	        this.state = 208;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 206;
	            this.createTableStatement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 207;
	            this.createDatabase();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	options() {
	    let localctx = new OptionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, SqlParser.RULE_options);
	    var _la = 0;
	    try {
	        this.state = 219;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 210;
	            this.match(SqlParser.ID);
	            this.state = 211;
	            this.match(SqlParser.T__34);
	            this.state = 212;
	            _la = this._input.LA(1);
	            if(!(((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 11) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 213;
	            this.match(SqlParser.ID);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 214;
	            this.match(SqlParser.T__16);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 215;
	            this.match(SqlParser.T__17);
	            this.state = 217;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===37) {
	                this.state = 216;
	                this.match(SqlParser.STRING);
	            }

	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	keyType() {
	    let localctx = new KeyTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, SqlParser.RULE_keyType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	        case 10:
	            this.state = 221;
	            this.primary();
	            break;
	        case 11:
	        case 12:
	            this.state = 222;
	            this.unique();
	            break;
	        case 15:
	        case 16:
	            this.state = 223;
	            this.indexKey();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 227;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13 || _la===14) {
	            this.state = 226;
	            this.key();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	keyName() {
	    let localctx = new KeyNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, SqlParser.RULE_keyName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        this.fieldName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	indexDefine() {
	    let localctx = new IndexDefineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, SqlParser.RULE_indexDefine);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this.keyType();
	        this.state = 233;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1 || _la===2 || _la===40) {
	            this.state = 232;
	            this.keyName();
	        }

	        this.state = 235;
	        this.match(SqlParser.T__2);
	        this.state = 236;
	        this.fieldName();
	        this.state = 241;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 237;
	            this.match(SqlParser.T__3);
	            this.state = 238;
	            this.fieldName();
	            this.state = 243;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 245;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===40) {
	            this.state = 244;
	            this.match(SqlParser.ID);
	        }

	        this.state = 247;
	        this.match(SqlParser.T__4);
	        this.state = 249;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        if(la_===1) {
	            this.state = 248;
	            this.id();

	        }
	        this.state = 252;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 251;
	            this.match(SqlParser.T__3);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	other_stat() {
	    let localctx = new Other_statContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, SqlParser.RULE_other_stat);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 9)) & ~0x1f) === 0 && ((1 << (_la - 9)) & 2147483855) !== 0)) {
	            this.state = 256;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 40:
	                this.state = 254;
	                this.match(SqlParser.ID);
	                break;
	            case 9:
	            case 10:
	            case 11:
	            case 12:
	            case 15:
	            case 16:
	                this.state = 255;
	                this.keyType();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 260;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 261;
	        this.match(SqlParser.T__2);
	        this.state = 262;
	        this.fieldName();
	        this.state = 267;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 263;
	            this.match(SqlParser.T__3);
	            this.state = 264;
	            this.fieldName();
	            this.state = 269;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 270;
	        this.match(SqlParser.T__4);
	        this.state = 272;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        if(la_===1) {
	            this.state = 271;
	            this.id();

	        }
	        this.state = 275;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 274;
	            this.match(SqlParser.T__3);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	init() {
	    let localctx = new InitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, SqlParser.RULE_init);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===21 || _la===22) {
	            this.state = 277;
	            this.statement();
	            this.state = 282;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SqlParser.EOF = antlr4.Token.EOF;
SqlParser.T__0 = 1;
SqlParser.T__1 = 2;
SqlParser.T__2 = 3;
SqlParser.T__3 = 4;
SqlParser.T__4 = 5;
SqlParser.T__5 = 6;
SqlParser.T__6 = 7;
SqlParser.T__7 = 8;
SqlParser.T__8 = 9;
SqlParser.T__9 = 10;
SqlParser.T__10 = 11;
SqlParser.T__11 = 12;
SqlParser.T__12 = 13;
SqlParser.T__13 = 14;
SqlParser.T__14 = 15;
SqlParser.T__15 = 16;
SqlParser.T__16 = 17;
SqlParser.T__17 = 18;
SqlParser.T__18 = 19;
SqlParser.T__19 = 20;
SqlParser.T__20 = 21;
SqlParser.T__21 = 22;
SqlParser.T__22 = 23;
SqlParser.T__23 = 24;
SqlParser.T__24 = 25;
SqlParser.T__25 = 26;
SqlParser.T__26 = 27;
SqlParser.T__27 = 28;
SqlParser.T__28 = 29;
SqlParser.T__29 = 30;
SqlParser.T__30 = 31;
SqlParser.T__31 = 32;
SqlParser.T__32 = 33;
SqlParser.T__33 = 34;
SqlParser.T__34 = 35;
SqlParser.SPACE = 36;
SqlParser.STRING = 37;
SqlParser.INT = 38;
SqlParser.Float = 39;
SqlParser.ID = 40;
SqlParser.CommentLine = 41;

SqlParser.RULE_fieldName = 0;
SqlParser.RULE_id = 1;
SqlParser.RULE_value = 2;
SqlParser.RULE_size = 3;
SqlParser.RULE_unsigned = 4;
SqlParser.RULE_typeRange = 5;
SqlParser.RULE_autoIncrement = 6;
SqlParser.RULE_primary = 7;
SqlParser.RULE_unique = 8;
SqlParser.RULE_key = 9;
SqlParser.RULE_indexKey = 10;
SqlParser.RULE_defaultValue = 11;
SqlParser.RULE_comment = 12;
SqlParser.RULE_property = 13;
SqlParser.RULE_fieldDefine = 14;
SqlParser.RULE_create = 15;
SqlParser.RULE_table = 16;
SqlParser.RULE_iff = 17;
SqlParser.RULE_not = 18;
SqlParser.RULE_exists = 19;
SqlParser.RULE_ifNotExists = 20;
SqlParser.RULE_database = 21;
SqlParser.RULE_createTable = 22;
SqlParser.RULE_createTableStatement = 23;
SqlParser.RULE_createDatabase = 24;
SqlParser.RULE_statement = 25;
SqlParser.RULE_options = 26;
SqlParser.RULE_keyType = 27;
SqlParser.RULE_keyName = 28;
SqlParser.RULE_indexDefine = 29;
SqlParser.RULE_other_stat = 30;
SqlParser.RULE_init = 31;

class FieldNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_fieldName;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterFieldName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitFieldName(this);
		}
	}


}



class IdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_id;
    }

	ID() {
	    return this.getToken(SqlParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitId(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_value;
    }

	ID() {
	    return this.getToken(SqlParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitValue(this);
		}
	}


}



class SizeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_size;
    }

	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SqlParser.INT);
	    } else {
	        return this.getToken(SqlParser.INT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterSize(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitSize(this);
		}
	}


}



class UnsignedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_unsigned;
    }


	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterUnsigned(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitUnsigned(this);
		}
	}


}



class TypeRangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_typeRange;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	size() {
	    return this.getTypedRuleContext(SizeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterTypeRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitTypeRange(this);
		}
	}


}



class AutoIncrementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_autoIncrement;
    }


	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterAutoIncrement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitAutoIncrement(this);
		}
	}


}



class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_primary;
    }


	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitPrimary(this);
		}
	}


}



class UniqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_unique;
    }


	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterUnique(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitUnique(this);
		}
	}


}



class KeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_key;
    }


	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitKey(this);
		}
	}


}



class IndexKeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_indexKey;
    }


	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterIndexKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitIndexKey(this);
		}
	}


}



class DefaultValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_defaultValue;
    }

	STRING() {
	    return this.getToken(SqlParser.STRING, 0);
	};

	INT() {
	    return this.getToken(SqlParser.INT, 0);
	};

	Float() {
	    return this.getToken(SqlParser.Float, 0);
	};

	ID() {
	    return this.getToken(SqlParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterDefaultValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitDefaultValue(this);
		}
	}


}



class CommentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_comment;
    }

	STRING() {
	    return this.getToken(SqlParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitComment(this);
		}
	}


}



class PropertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_property;
    }

	primary() {
	    return this.getTypedRuleContext(PrimaryContext,0);
	};

	autoIncrement() {
	    return this.getTypedRuleContext(AutoIncrementContext,0);
	};

	unsigned() {
	    return this.getTypedRuleContext(UnsignedContext,0);
	};

	defaultValue() {
	    return this.getTypedRuleContext(DefaultValueContext,0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	not() {
	    return this.getTypedRuleContext(NotContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterProperty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitProperty(this);
		}
	}


}



class FieldDefineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_fieldDefine;
    }

	fieldName() {
	    return this.getTypedRuleContext(FieldNameContext,0);
	};

	typeRange() {
	    return this.getTypedRuleContext(TypeRangeContext,0);
	};

	property = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PropertyContext);
	    } else {
	        return this.getTypedRuleContext(PropertyContext,i);
	    }
	};

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterFieldDefine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitFieldDefine(this);
		}
	}


}



class CreateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_create;
    }


	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterCreate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitCreate(this);
		}
	}


}



class TableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_table;
    }


	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterTable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitTable(this);
		}
	}


}



class IffContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_iff;
    }


	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterIff(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitIff(this);
		}
	}


}



class NotContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_not;
    }


	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterNot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitNot(this);
		}
	}


}



class ExistsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_exists;
    }


	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterExists(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitExists(this);
		}
	}


}



class IfNotExistsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_ifNotExists;
    }

	iff() {
	    return this.getTypedRuleContext(IffContext,0);
	};

	not() {
	    return this.getTypedRuleContext(NotContext,0);
	};

	exists() {
	    return this.getTypedRuleContext(ExistsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterIfNotExists(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitIfNotExists(this);
		}
	}


}



class DatabaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_database;
    }


	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterDatabase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitDatabase(this);
		}
	}


}



class CreateTableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_createTable;
        this.dbName = null;
        this.tableName = null;
    }

	create() {
	    return this.getTypedRuleContext(CreateContext,0);
	};

	table() {
	    return this.getTypedRuleContext(TableContext,0);
	};

	fieldName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldNameContext);
	    } else {
	        return this.getTypedRuleContext(FieldNameContext,i);
	    }
	};

	ifNotExists() {
	    return this.getTypedRuleContext(IfNotExistsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterCreateTable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitCreateTable(this);
		}
	}


}



class CreateTableStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_createTableStatement;
    }

	createTable() {
	    return this.getTypedRuleContext(CreateTableContext,0);
	};

	fieldDefine = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldDefineContext);
	    } else {
	        return this.getTypedRuleContext(FieldDefineContext,i);
	    }
	};

	indexDefine = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IndexDefineContext);
	    } else {
	        return this.getTypedRuleContext(IndexDefineContext,i);
	    }
	};

	other_stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Other_statContext);
	    } else {
	        return this.getTypedRuleContext(Other_statContext,i);
	    }
	};

	options = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OptionsContext);
	    } else {
	        return this.getTypedRuleContext(OptionsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterCreateTableStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitCreateTableStatement(this);
		}
	}


}



class CreateDatabaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_createDatabase;
        this.dbName = null;
    }

	create() {
	    return this.getTypedRuleContext(CreateContext,0);
	};

	database() {
	    return this.getTypedRuleContext(DatabaseContext,0);
	};

	fieldName() {
	    return this.getTypedRuleContext(FieldNameContext,0);
	};

	ifNotExists() {
	    return this.getTypedRuleContext(IfNotExistsContext,0);
	};

	options = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OptionsContext);
	    } else {
	        return this.getTypedRuleContext(OptionsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterCreateDatabase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitCreateDatabase(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_statement;
    }

	createTableStatement() {
	    return this.getTypedRuleContext(CreateTableStatementContext,0);
	};

	createDatabase() {
	    return this.getTypedRuleContext(CreateDatabaseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitStatement(this);
		}
	}


}



class OptionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_options;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SqlParser.ID);
	    } else {
	        return this.getToken(SqlParser.ID, i);
	    }
	};


	STRING() {
	    return this.getToken(SqlParser.STRING, 0);
	};

	INT() {
	    return this.getToken(SqlParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterOptions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitOptions(this);
		}
	}


}



class KeyTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_keyType;
    }

	primary() {
	    return this.getTypedRuleContext(PrimaryContext,0);
	};

	unique() {
	    return this.getTypedRuleContext(UniqueContext,0);
	};

	indexKey() {
	    return this.getTypedRuleContext(IndexKeyContext,0);
	};

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterKeyType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitKeyType(this);
		}
	}


}



class KeyNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_keyName;
    }

	fieldName() {
	    return this.getTypedRuleContext(FieldNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterKeyName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitKeyName(this);
		}
	}


}



class IndexDefineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_indexDefine;
    }

	keyType() {
	    return this.getTypedRuleContext(KeyTypeContext,0);
	};

	fieldName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldNameContext);
	    } else {
	        return this.getTypedRuleContext(FieldNameContext,i);
	    }
	};

	keyName() {
	    return this.getTypedRuleContext(KeyNameContext,0);
	};

	ID() {
	    return this.getToken(SqlParser.ID, 0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterIndexDefine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitIndexDefine(this);
		}
	}


}



class Other_statContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_other_stat;
    }

	fieldName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldNameContext);
	    } else {
	        return this.getTypedRuleContext(FieldNameContext,i);
	    }
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SqlParser.ID);
	    } else {
	        return this.getToken(SqlParser.ID, i);
	    }
	};


	keyType = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KeyTypeContext);
	    } else {
	        return this.getTypedRuleContext(KeyTypeContext,i);
	    }
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterOther_stat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitOther_stat(this);
		}
	}


}



class InitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_init;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterInit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitInit(this);
		}
	}


}




SqlParser.FieldNameContext = FieldNameContext; 
SqlParser.IdContext = IdContext; 
SqlParser.ValueContext = ValueContext; 
SqlParser.SizeContext = SizeContext; 
SqlParser.UnsignedContext = UnsignedContext; 
SqlParser.TypeRangeContext = TypeRangeContext; 
SqlParser.AutoIncrementContext = AutoIncrementContext; 
SqlParser.PrimaryContext = PrimaryContext; 
SqlParser.UniqueContext = UniqueContext; 
SqlParser.KeyContext = KeyContext; 
SqlParser.IndexKeyContext = IndexKeyContext; 
SqlParser.DefaultValueContext = DefaultValueContext; 
SqlParser.CommentContext = CommentContext; 
SqlParser.PropertyContext = PropertyContext; 
SqlParser.FieldDefineContext = FieldDefineContext; 
SqlParser.CreateContext = CreateContext; 
SqlParser.TableContext = TableContext; 
SqlParser.IffContext = IffContext; 
SqlParser.NotContext = NotContext; 
SqlParser.ExistsContext = ExistsContext; 
SqlParser.IfNotExistsContext = IfNotExistsContext; 
SqlParser.DatabaseContext = DatabaseContext; 
SqlParser.CreateTableContext = CreateTableContext; 
SqlParser.CreateTableStatementContext = CreateTableStatementContext; 
SqlParser.CreateDatabaseContext = CreateDatabaseContext; 
SqlParser.StatementContext = StatementContext; 
SqlParser.OptionsContext = OptionsContext; 
SqlParser.KeyTypeContext = KeyTypeContext; 
SqlParser.KeyNameContext = KeyNameContext; 
SqlParser.IndexDefineContext = IndexDefineContext; 
SqlParser.Other_statContext = Other_statContext; 
SqlParser.InitContext = InitContext; 
