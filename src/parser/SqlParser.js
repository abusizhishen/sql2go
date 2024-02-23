// Generated from Sql.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import SqlListener from './SqlListener.js';
const serializedATN = [4,1,41,266,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,70,8,0,
1,1,1,1,1,2,1,2,3,2,76,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,86,8,3,1,
4,1,4,1,4,1,4,3,4,92,8,4,1,4,1,4,1,5,1,5,1,6,1,6,3,6,100,8,6,1,7,1,7,1,8,
1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,13,1,14,1,14,
1,14,1,14,1,14,1,14,3,14,124,8,14,1,15,1,15,1,15,5,15,129,8,15,10,15,12,
15,132,9,15,1,15,3,15,135,8,15,1,15,3,15,138,8,15,1,16,1,16,1,17,1,17,1,
18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,21,1,21,1,22,1,22,1,22,3,22,157,
8,22,1,22,1,22,1,22,3,22,162,8,22,1,22,1,22,1,23,1,23,1,23,5,23,169,8,23,
10,23,12,23,172,9,23,1,23,5,23,175,8,23,10,23,12,23,178,9,23,1,23,5,23,181,
8,23,10,23,12,23,184,9,23,1,23,1,23,5,23,188,8,23,10,23,12,23,191,9,23,1,
23,3,23,194,8,23,1,24,1,24,1,24,1,24,3,24,200,8,24,1,25,1,25,1,25,3,25,205,
8,25,1,25,3,25,208,8,25,1,26,1,26,1,27,5,27,213,8,27,10,27,12,27,216,9,27,
1,27,1,27,1,27,1,27,5,27,222,8,27,10,27,12,27,225,9,27,1,27,3,27,228,8,27,
1,27,1,27,3,27,232,8,27,1,27,3,27,235,8,27,1,28,1,28,5,28,239,8,28,10,28,
12,28,242,9,28,1,28,1,28,1,28,1,28,5,28,248,8,28,10,28,12,28,251,9,28,1,
28,1,28,3,28,255,8,28,1,28,3,28,258,8,28,1,29,5,29,261,8,29,10,29,12,29,
264,9,29,1,29,0,0,30,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
38,40,42,44,46,48,50,52,54,56,58,0,14,1,0,11,12,1,0,14,15,1,0,16,17,1,0,
18,19,1,0,20,21,1,0,22,23,1,0,38,41,1,0,24,25,1,0,26,27,1,0,28,29,1,0,30,
31,2,0,3,3,6,6,1,0,32,33,2,0,38,39,41,41,273,0,69,1,0,0,0,2,71,1,0,0,0,4,
75,1,0,0,0,6,85,1,0,0,0,8,87,1,0,0,0,10,95,1,0,0,0,12,97,1,0,0,0,14,101,
1,0,0,0,16,103,1,0,0,0,18,105,1,0,0,0,20,107,1,0,0,0,22,109,1,0,0,0,24,111,
1,0,0,0,26,114,1,0,0,0,28,123,1,0,0,0,30,125,1,0,0,0,32,139,1,0,0,0,34,141,
1,0,0,0,36,143,1,0,0,0,38,145,1,0,0,0,40,147,1,0,0,0,42,149,1,0,0,0,44,153,
1,0,0,0,46,165,1,0,0,0,48,199,1,0,0,0,50,204,1,0,0,0,52,209,1,0,0,0,54,214,
1,0,0,0,56,240,1,0,0,0,58,262,1,0,0,0,60,61,5,1,0,0,61,62,3,2,1,0,62,63,
5,1,0,0,63,70,1,0,0,0,64,65,5,2,0,0,65,66,3,2,1,0,66,67,5,2,0,0,67,70,1,
0,0,0,68,70,3,2,1,0,69,60,1,0,0,0,69,64,1,0,0,0,69,68,1,0,0,0,70,1,1,0,0,
0,71,72,5,41,0,0,72,3,1,0,0,0,73,76,1,0,0,0,74,76,5,41,0,0,75,73,1,0,0,0,
75,74,1,0,0,0,76,5,1,0,0,0,77,78,5,3,0,0,78,86,5,4,0,0,79,80,5,3,0,0,80,
86,5,5,0,0,81,82,5,6,0,0,82,86,5,7,0,0,83,84,5,6,0,0,84,86,5,5,0,0,85,77,
1,0,0,0,85,79,1,0,0,0,85,81,1,0,0,0,85,83,1,0,0,0,86,7,1,0,0,0,87,88,5,8,
0,0,88,91,5,39,0,0,89,90,5,9,0,0,90,92,5,39,0,0,91,89,1,0,0,0,91,92,1,0,
0,0,92,93,1,0,0,0,93,94,5,10,0,0,94,9,1,0,0,0,95,96,7,0,0,0,96,11,1,0,0,
0,97,99,3,2,1,0,98,100,3,8,4,0,99,98,1,0,0,0,99,100,1,0,0,0,100,13,1,0,0,
0,101,102,5,13,0,0,102,15,1,0,0,0,103,104,7,1,0,0,104,17,1,0,0,0,105,106,
7,2,0,0,106,19,1,0,0,0,107,108,7,3,0,0,108,21,1,0,0,0,109,110,7,4,0,0,110,
23,1,0,0,0,111,112,7,5,0,0,112,113,7,6,0,0,113,25,1,0,0,0,114,115,7,7,0,
0,115,116,5,38,0,0,116,27,1,0,0,0,117,124,3,16,8,0,118,124,3,14,7,0,119,
124,3,10,5,0,120,124,3,24,12,0,121,124,3,6,3,0,122,124,3,2,1,0,123,117,1,
0,0,0,123,118,1,0,0,0,123,119,1,0,0,0,123,120,1,0,0,0,123,121,1,0,0,0,123,
122,1,0,0,0,124,29,1,0,0,0,125,126,3,0,0,0,126,130,3,12,6,0,127,129,3,28,
14,0,128,127,1,0,0,0,129,132,1,0,0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,
134,1,0,0,0,132,130,1,0,0,0,133,135,3,26,13,0,134,133,1,0,0,0,134,135,1,
0,0,0,135,137,1,0,0,0,136,138,5,9,0,0,137,136,1,0,0,0,137,138,1,0,0,0,138,
31,1,0,0,0,139,140,7,8,0,0,140,33,1,0,0,0,141,142,7,9,0,0,142,35,1,0,0,0,
143,144,7,10,0,0,144,37,1,0,0,0,145,146,7,11,0,0,146,39,1,0,0,0,147,148,
7,12,0,0,148,41,1,0,0,0,149,150,3,36,18,0,150,151,3,38,19,0,151,152,3,40,
20,0,152,43,1,0,0,0,153,154,3,32,16,0,154,156,3,34,17,0,155,157,3,42,21,
0,156,155,1,0,0,0,156,157,1,0,0,0,157,161,1,0,0,0,158,159,3,0,0,0,159,160,
5,34,0,0,160,162,1,0,0,0,161,158,1,0,0,0,161,162,1,0,0,0,162,163,1,0,0,0,
163,164,3,0,0,0,164,45,1,0,0,0,165,166,3,44,22,0,166,170,5,8,0,0,167,169,
3,30,15,0,168,167,1,0,0,0,169,172,1,0,0,0,170,168,1,0,0,0,170,171,1,0,0,
0,171,176,1,0,0,0,172,170,1,0,0,0,173,175,3,54,27,0,174,173,1,0,0,0,175,
178,1,0,0,0,176,174,1,0,0,0,176,177,1,0,0,0,177,182,1,0,0,0,178,176,1,0,
0,0,179,181,3,56,28,0,180,179,1,0,0,0,181,184,1,0,0,0,182,180,1,0,0,0,182,
183,1,0,0,0,183,185,1,0,0,0,184,182,1,0,0,0,185,189,5,10,0,0,186,188,3,48,
24,0,187,186,1,0,0,0,188,191,1,0,0,0,189,187,1,0,0,0,189,190,1,0,0,0,190,
193,1,0,0,0,191,189,1,0,0,0,192,194,5,35,0,0,193,192,1,0,0,0,193,194,1,0,
0,0,194,47,1,0,0,0,195,196,5,41,0,0,196,197,5,36,0,0,197,200,7,13,0,0,198,
200,5,41,0,0,199,195,1,0,0,0,199,198,1,0,0,0,200,49,1,0,0,0,201,205,3,16,
8,0,202,205,3,18,9,0,203,205,3,22,11,0,204,201,1,0,0,0,204,202,1,0,0,0,204,
203,1,0,0,0,205,207,1,0,0,0,206,208,3,20,10,0,207,206,1,0,0,0,207,208,1,
0,0,0,208,51,1,0,0,0,209,210,3,0,0,0,210,53,1,0,0,0,211,213,3,2,1,0,212,
211,1,0,0,0,213,216,1,0,0,0,214,212,1,0,0,0,214,215,1,0,0,0,215,217,1,0,
0,0,216,214,1,0,0,0,217,218,5,8,0,0,218,223,3,0,0,0,219,220,5,9,0,0,220,
222,3,0,0,0,221,219,1,0,0,0,222,225,1,0,0,0,223,221,1,0,0,0,223,224,1,0,
0,0,224,227,1,0,0,0,225,223,1,0,0,0,226,228,5,41,0,0,227,226,1,0,0,0,227,
228,1,0,0,0,228,229,1,0,0,0,229,231,5,10,0,0,230,232,3,2,1,0,231,230,1,0,
0,0,231,232,1,0,0,0,232,234,1,0,0,0,233,235,5,9,0,0,234,233,1,0,0,0,234,
235,1,0,0,0,235,55,1,0,0,0,236,239,5,41,0,0,237,239,3,50,25,0,238,236,1,
0,0,0,238,237,1,0,0,0,239,242,1,0,0,0,240,238,1,0,0,0,240,241,1,0,0,0,241,
243,1,0,0,0,242,240,1,0,0,0,243,244,5,8,0,0,244,249,3,0,0,0,245,246,5,9,
0,0,246,248,3,0,0,0,247,245,1,0,0,0,248,251,1,0,0,0,249,247,1,0,0,0,249,
250,1,0,0,0,250,252,1,0,0,0,251,249,1,0,0,0,252,254,5,10,0,0,253,255,3,2,
1,0,254,253,1,0,0,0,254,255,1,0,0,0,255,257,1,0,0,0,256,258,5,9,0,0,257,
256,1,0,0,0,257,258,1,0,0,0,258,57,1,0,0,0,259,261,3,46,23,0,260,259,1,0,
0,0,261,264,1,0,0,0,262,260,1,0,0,0,262,263,1,0,0,0,263,59,1,0,0,0,264,262,
1,0,0,0,30,69,75,85,91,99,123,130,134,137,156,161,170,176,182,189,193,199,
204,207,214,223,227,231,234,238,240,249,254,257,262];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SqlParser extends antlr4.Parser {

    static grammarFileName = "Sql.g4";
    static literalNames = [ null, "'`'", "'''", "'NOT'", "'NULL'", "'null'", 
                            "'not'", "'NUll'", "'('", "','", "')'", "'unsigned'", 
                            "'UNSIGNED'", "'AUTO_INCREMENT'", "'PRIMARY'", 
                            "'primary'", "'UNIQUE'", "'unique'", "'key'", 
                            "'KEY'", "'index'", "'INDEX'", "'default'", 
                            "'DEFAULT'", "'COMMENT'", "'comment'", "'create'", 
                            "'CREATE'", "'table'", "'TABLE'", "'if'", "'IF'", 
                            "'exists'", "'EXISTS'", "'.'", "';'", "'='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "SPACE", "STRING", 
                             "INT", "Float", "ID" ];
    static ruleNames = [ "fieldName", "id", "value", "notNUll", "size", 
                         "unsigned", "typeRange", "autoIncrement", "primary", 
                         "unique", "key", "indexKey", "defaultValue", "comment", 
                         "property", "fieldDefine", "create", "table", "iff", 
                         "not", "exists", "ifNotExists", "createTable", 
                         "statement", "options", "keyType", "keyName", "index", 
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
	        this.state = 69;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 60;
	            this.match(SqlParser.T__0);
	            this.state = 61;
	            this.id();
	            this.state = 62;
	            this.match(SqlParser.T__0);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 64;
	            this.match(SqlParser.T__1);
	            this.state = 65;
	            this.id();
	            this.state = 66;
	            this.match(SqlParser.T__1);
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 68;
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
	        this.state = 71;
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
	        this.state = 75;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case -1:
	            this.enterOuterAlt(localctx, 1);

	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 74;
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



	notNUll() {
	    let localctx = new NotNUllContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SqlParser.RULE_notNUll);
	    try {
	        this.state = 85;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 77;
	            this.match(SqlParser.T__2);
	            this.state = 78;
	            this.match(SqlParser.T__3);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 79;
	            this.match(SqlParser.T__2);
	            this.state = 80;
	            this.match(SqlParser.T__4);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 81;
	            this.match(SqlParser.T__5);
	            this.state = 82;
	            this.match(SqlParser.T__6);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 83;
	            this.match(SqlParser.T__5);
	            this.state = 84;
	            this.match(SqlParser.T__4);
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



	size() {
	    let localctx = new SizeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SqlParser.RULE_size);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(SqlParser.T__7);
	        this.state = 88;
	        this.match(SqlParser.INT);
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 89;
	            this.match(SqlParser.T__8);
	            this.state = 90;
	            this.match(SqlParser.INT);
	        }

	        this.state = 93;
	        this.match(SqlParser.T__9);
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
	    this.enterRule(localctx, 10, SqlParser.RULE_unsigned);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
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



	typeRange() {
	    let localctx = new TypeRangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SqlParser.RULE_typeRange);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.id();
	        this.state = 99;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        if(la_===1) {
	            this.state = 98;
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
	    this.enterRule(localctx, 14, SqlParser.RULE_autoIncrement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(SqlParser.T__12);
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
	    this.enterRule(localctx, 16, SqlParser.RULE_primary);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        _la = this._input.LA(1);
	        if(!(_la===14 || _la===15)) {
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
	    this.enterRule(localctx, 18, SqlParser.RULE_unique);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        _la = this._input.LA(1);
	        if(!(_la===16 || _la===17)) {
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
	    this.enterRule(localctx, 20, SqlParser.RULE_key);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        _la = this._input.LA(1);
	        if(!(_la===18 || _la===19)) {
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
	    this.enterRule(localctx, 22, SqlParser.RULE_indexKey);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        _la = this._input.LA(1);
	        if(!(_la===20 || _la===21)) {
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
	    this.enterRule(localctx, 24, SqlParser.RULE_defaultValue);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        _la = this._input.LA(1);
	        if(!(_la===22 || _la===23)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 112;
	        _la = this._input.LA(1);
	        if(!(((((_la - 38)) & ~0x1f) === 0 && ((1 << (_la - 38)) & 15) !== 0))) {
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
	    this.enterRule(localctx, 26, SqlParser.RULE_comment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        _la = this._input.LA(1);
	        if(!(_la===24 || _la===25)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 115;
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
	    this.enterRule(localctx, 28, SqlParser.RULE_property);
	    try {
	        this.state = 123;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 117;
	            this.primary();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 118;
	            this.autoIncrement();
	            break;
	        case 11:
	        case 12:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 119;
	            this.unsigned();
	            break;
	        case 22:
	        case 23:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 120;
	            this.defaultValue();
	            break;
	        case 3:
	        case 6:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 121;
	            this.notNUll();
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 122;
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



	fieldDefine() {
	    let localctx = new FieldDefineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, SqlParser.RULE_fieldDefine);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.fieldName();
	        this.state = 126;
	        this.typeRange();
	        this.state = 130;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 127;
	                this.property(); 
	            }
	            this.state = 132;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===24 || _la===25) {
	            this.state = 133;
	            this.comment();
	        }

	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 136;
	            this.match(SqlParser.T__8);
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
	    this.enterRule(localctx, 32, SqlParser.RULE_create);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        _la = this._input.LA(1);
	        if(!(_la===26 || _la===27)) {
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
	    this.enterRule(localctx, 34, SqlParser.RULE_table);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        _la = this._input.LA(1);
	        if(!(_la===28 || _la===29)) {
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
	    this.enterRule(localctx, 36, SqlParser.RULE_iff);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        _la = this._input.LA(1);
	        if(!(_la===30 || _la===31)) {
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
	    this.enterRule(localctx, 38, SqlParser.RULE_not);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        _la = this._input.LA(1);
	        if(!(_la===3 || _la===6)) {
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
	    this.enterRule(localctx, 40, SqlParser.RULE_exists);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        _la = this._input.LA(1);
	        if(!(_la===32 || _la===33)) {
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
	    this.enterRule(localctx, 42, SqlParser.RULE_ifNotExists);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.iff();
	        this.state = 150;
	        this.not();
	        this.state = 151;
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



	createTable() {
	    let localctx = new CreateTableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, SqlParser.RULE_createTable);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.create();
	        this.state = 154;
	        this.table();
	        this.state = 156;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===30 || _la===31) {
	            this.state = 155;
	            this.ifNotExists();
	        }

	        this.state = 161;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 158;
	            localctx.dbName = this.fieldName();
	            this.state = 159;
	            this.match(SqlParser.T__33);

	        }
	        this.state = 163;
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, SqlParser.RULE_statement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        this.createTable();
	        this.state = 166;
	        this.match(SqlParser.T__7);
	        this.state = 170;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 167;
	                this.fieldDefine(); 
	            }
	            this.state = 172;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	        this.state = 176;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 173;
	                this.index(); 
	            }
	            this.state = 178;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
	        }

	        this.state = 182;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3391744) !== 0) || _la===41) {
	            this.state = 179;
	            this.other_stat();
	            this.state = 184;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 185;
	        this.match(SqlParser.T__9);
	        this.state = 189;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===41) {
	            this.state = 186;
	            this.options();
	            this.state = 191;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 193;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 192;
	            this.match(SqlParser.T__34);
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
	    this.enterRule(localctx, 48, SqlParser.RULE_options);
	    var _la = 0;
	    try {
	        this.state = 199;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 195;
	            this.match(SqlParser.ID);
	            this.state = 196;
	            this.match(SqlParser.T__35);
	            this.state = 197;
	            _la = this._input.LA(1);
	            if(!(((((_la - 38)) & ~0x1f) === 0 && ((1 << (_la - 38)) & 11) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 198;
	            this.match(SqlParser.ID);
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
	    this.enterRule(localctx, 50, SqlParser.RULE_keyType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 204;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	        case 15:
	            this.state = 201;
	            this.primary();
	            break;
	        case 16:
	        case 17:
	            this.state = 202;
	            this.unique();
	            break;
	        case 20:
	        case 21:
	            this.state = 203;
	            this.indexKey();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 207;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18 || _la===19) {
	            this.state = 206;
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
	    this.enterRule(localctx, 52, SqlParser.RULE_keyName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
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



	index() {
	    let localctx = new IndexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, SqlParser.RULE_index);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===41) {
	            this.state = 211;
	            this.id();
	            this.state = 216;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 217;
	        this.match(SqlParser.T__7);
	        this.state = 218;
	        this.fieldName();
	        this.state = 223;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 219;
	            this.match(SqlParser.T__8);
	            this.state = 220;
	            this.fieldName();
	            this.state = 225;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 227;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 226;
	            this.match(SqlParser.ID);
	        }

	        this.state = 229;
	        this.match(SqlParser.T__9);
	        this.state = 231;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        if(la_===1) {
	            this.state = 230;
	            this.id();

	        }
	        this.state = 234;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 233;
	            this.match(SqlParser.T__8);
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
	    this.enterRule(localctx, 56, SqlParser.RULE_other_stat);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 134217935) !== 0)) {
	            this.state = 238;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 41:
	                this.state = 236;
	                this.match(SqlParser.ID);
	                break;
	            case 14:
	            case 15:
	            case 16:
	            case 17:
	            case 20:
	            case 21:
	                this.state = 237;
	                this.keyType();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 242;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 243;
	        this.match(SqlParser.T__7);
	        this.state = 244;
	        this.fieldName();
	        this.state = 249;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 245;
	            this.match(SqlParser.T__8);
	            this.state = 246;
	            this.fieldName();
	            this.state = 251;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 252;
	        this.match(SqlParser.T__9);
	        this.state = 254;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        if(la_===1) {
	            this.state = 253;
	            this.id();

	        }
	        this.state = 257;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 256;
	            this.match(SqlParser.T__8);
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
	    this.enterRule(localctx, 58, SqlParser.RULE_init);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===26 || _la===27) {
	            this.state = 259;
	            this.statement();
	            this.state = 264;
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
SqlParser.T__35 = 36;
SqlParser.SPACE = 37;
SqlParser.STRING = 38;
SqlParser.INT = 39;
SqlParser.Float = 40;
SqlParser.ID = 41;

SqlParser.RULE_fieldName = 0;
SqlParser.RULE_id = 1;
SqlParser.RULE_value = 2;
SqlParser.RULE_notNUll = 3;
SqlParser.RULE_size = 4;
SqlParser.RULE_unsigned = 5;
SqlParser.RULE_typeRange = 6;
SqlParser.RULE_autoIncrement = 7;
SqlParser.RULE_primary = 8;
SqlParser.RULE_unique = 9;
SqlParser.RULE_key = 10;
SqlParser.RULE_indexKey = 11;
SqlParser.RULE_defaultValue = 12;
SqlParser.RULE_comment = 13;
SqlParser.RULE_property = 14;
SqlParser.RULE_fieldDefine = 15;
SqlParser.RULE_create = 16;
SqlParser.RULE_table = 17;
SqlParser.RULE_iff = 18;
SqlParser.RULE_not = 19;
SqlParser.RULE_exists = 20;
SqlParser.RULE_ifNotExists = 21;
SqlParser.RULE_createTable = 22;
SqlParser.RULE_statement = 23;
SqlParser.RULE_options = 24;
SqlParser.RULE_keyType = 25;
SqlParser.RULE_keyName = 26;
SqlParser.RULE_index = 27;
SqlParser.RULE_other_stat = 28;
SqlParser.RULE_init = 29;

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



class NotNUllContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_notNUll;
    }


	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterNotNUll(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitNotNUll(this);
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

	notNUll() {
	    return this.getTypedRuleContext(NotNUllContext,0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
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

	index = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IndexContext);
	    } else {
	        return this.getTypedRuleContext(IndexContext,i);
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



class IndexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_index;
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

	id = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdContext);
	    } else {
	        return this.getTypedRuleContext(IdContext,i);
	    }
	};

	ID() {
	    return this.getToken(SqlParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterIndex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitIndex(this);
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
SqlParser.NotNUllContext = NotNUllContext; 
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
SqlParser.CreateTableContext = CreateTableContext; 
SqlParser.StatementContext = StatementContext; 
SqlParser.OptionsContext = OptionsContext; 
SqlParser.KeyTypeContext = KeyTypeContext; 
SqlParser.KeyNameContext = KeyNameContext; 
SqlParser.IndexContext = IndexContext; 
SqlParser.Other_statContext = Other_statContext; 
SqlParser.InitContext = InitContext; 
