// Generated from Sql.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import SqlListener from './SqlListener.js';
const serializedATN = [4,1,41,244,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,
0,72,8,0,1,1,1,1,1,2,1,2,3,2,78,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,
88,8,3,1,4,1,4,1,4,1,4,3,4,94,8,4,1,4,1,4,1,5,1,5,1,6,1,6,3,6,102,8,6,1,
7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,
1,14,1,14,1,14,1,14,3,14,124,8,14,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,
1,16,3,16,135,8,16,1,17,1,17,1,17,5,17,140,8,17,10,17,12,17,143,9,17,1,17,
3,17,146,8,17,1,17,3,17,149,8,17,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,
1,22,1,22,1,23,1,23,1,23,1,23,1,24,1,24,1,24,3,24,168,8,24,1,24,1,24,1,24,
3,24,173,8,24,1,24,1,24,1,25,1,25,1,25,5,25,180,8,25,10,25,12,25,183,9,25,
1,25,5,25,186,8,25,10,25,12,25,189,9,25,1,25,1,25,5,25,193,8,25,10,25,12,
25,196,9,25,1,25,3,25,199,8,25,1,26,1,26,1,26,1,26,3,26,205,8,26,1,27,1,
27,1,27,1,27,3,27,211,8,27,1,28,1,28,1,29,1,29,3,29,217,8,29,1,29,1,29,1,
29,1,29,5,29,223,8,29,10,29,12,29,226,9,29,1,29,3,29,229,8,29,1,29,1,29,
3,29,233,8,29,1,29,3,29,236,8,29,1,30,5,30,239,8,30,10,30,12,30,242,9,30,
1,30,0,0,31,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,
44,46,48,50,52,54,56,58,60,0,13,1,0,11,12,1,0,14,15,1,0,16,17,1,0,18,19,
1,0,20,21,1,0,22,23,1,0,24,25,1,0,26,27,1,0,28,29,1,0,30,31,2,0,3,3,6,6,
1,0,32,33,2,0,38,39,41,41,246,0,71,1,0,0,0,2,73,1,0,0,0,4,77,1,0,0,0,6,87,
1,0,0,0,8,89,1,0,0,0,10,97,1,0,0,0,12,99,1,0,0,0,14,103,1,0,0,0,16,105,1,
0,0,0,18,107,1,0,0,0,20,109,1,0,0,0,22,111,1,0,0,0,24,114,1,0,0,0,26,117,
1,0,0,0,28,123,1,0,0,0,30,125,1,0,0,0,32,134,1,0,0,0,34,136,1,0,0,0,36,150,
1,0,0,0,38,152,1,0,0,0,40,154,1,0,0,0,42,156,1,0,0,0,44,158,1,0,0,0,46,160,
1,0,0,0,48,164,1,0,0,0,50,176,1,0,0,0,52,204,1,0,0,0,54,210,1,0,0,0,56,212,
1,0,0,0,58,214,1,0,0,0,60,240,1,0,0,0,62,63,5,1,0,0,63,64,3,2,1,0,64,65,
5,1,0,0,65,72,1,0,0,0,66,67,5,2,0,0,67,68,3,2,1,0,68,69,5,2,0,0,69,72,1,
0,0,0,70,72,3,2,1,0,71,62,1,0,0,0,71,66,1,0,0,0,71,70,1,0,0,0,72,1,1,0,0,
0,73,74,5,41,0,0,74,3,1,0,0,0,75,78,1,0,0,0,76,78,5,41,0,0,77,75,1,0,0,0,
77,76,1,0,0,0,78,5,1,0,0,0,79,80,5,3,0,0,80,88,5,4,0,0,81,82,5,3,0,0,82,
88,5,5,0,0,83,84,5,6,0,0,84,88,5,7,0,0,85,86,5,6,0,0,86,88,5,5,0,0,87,79,
1,0,0,0,87,81,1,0,0,0,87,83,1,0,0,0,87,85,1,0,0,0,88,7,1,0,0,0,89,90,5,8,
0,0,90,93,5,39,0,0,91,92,5,9,0,0,92,94,5,39,0,0,93,91,1,0,0,0,93,94,1,0,
0,0,94,95,1,0,0,0,95,96,5,10,0,0,96,9,1,0,0,0,97,98,7,0,0,0,98,11,1,0,0,
0,99,101,3,2,1,0,100,102,3,8,4,0,101,100,1,0,0,0,101,102,1,0,0,0,102,13,
1,0,0,0,103,104,5,13,0,0,104,15,1,0,0,0,105,106,7,1,0,0,106,17,1,0,0,0,107,
108,7,2,0,0,108,19,1,0,0,0,109,110,7,3,0,0,110,21,1,0,0,0,111,112,3,16,8,
0,112,113,3,20,10,0,113,23,1,0,0,0,114,115,3,18,9,0,115,116,3,20,10,0,116,
25,1,0,0,0,117,118,7,4,0,0,118,27,1,0,0,0,119,120,7,5,0,0,120,124,5,38,0,
0,121,124,5,39,0,0,122,124,5,40,0,0,123,119,1,0,0,0,123,121,1,0,0,0,123,
122,1,0,0,0,124,29,1,0,0,0,125,126,7,6,0,0,126,127,5,38,0,0,127,31,1,0,0,
0,128,135,3,22,11,0,129,135,3,14,7,0,130,135,3,10,5,0,131,135,3,28,14,0,
132,135,3,6,3,0,133,135,3,2,1,0,134,128,1,0,0,0,134,129,1,0,0,0,134,130,
1,0,0,0,134,131,1,0,0,0,134,132,1,0,0,0,134,133,1,0,0,0,135,33,1,0,0,0,136,
137,3,0,0,0,137,141,3,12,6,0,138,140,3,32,16,0,139,138,1,0,0,0,140,143,1,
0,0,0,141,139,1,0,0,0,141,142,1,0,0,0,142,145,1,0,0,0,143,141,1,0,0,0,144,
146,3,30,15,0,145,144,1,0,0,0,145,146,1,0,0,0,146,148,1,0,0,0,147,149,5,
9,0,0,148,147,1,0,0,0,148,149,1,0,0,0,149,35,1,0,0,0,150,151,7,7,0,0,151,
37,1,0,0,0,152,153,7,8,0,0,153,39,1,0,0,0,154,155,7,9,0,0,155,41,1,0,0,0,
156,157,7,10,0,0,157,43,1,0,0,0,158,159,7,11,0,0,159,45,1,0,0,0,160,161,
3,40,20,0,161,162,3,42,21,0,162,163,3,44,22,0,163,47,1,0,0,0,164,165,3,36,
18,0,165,167,3,38,19,0,166,168,3,46,23,0,167,166,1,0,0,0,167,168,1,0,0,0,
168,172,1,0,0,0,169,170,3,0,0,0,170,171,5,34,0,0,171,173,1,0,0,0,172,169,
1,0,0,0,172,173,1,0,0,0,173,174,1,0,0,0,174,175,3,0,0,0,175,49,1,0,0,0,176,
177,3,48,24,0,177,181,5,8,0,0,178,180,3,34,17,0,179,178,1,0,0,0,180,183,
1,0,0,0,181,179,1,0,0,0,181,182,1,0,0,0,182,187,1,0,0,0,183,181,1,0,0,0,
184,186,3,58,29,0,185,184,1,0,0,0,186,189,1,0,0,0,187,185,1,0,0,0,187,188,
1,0,0,0,188,190,1,0,0,0,189,187,1,0,0,0,190,194,5,10,0,0,191,193,3,52,26,
0,192,191,1,0,0,0,193,196,1,0,0,0,194,192,1,0,0,0,194,195,1,0,0,0,195,198,
1,0,0,0,196,194,1,0,0,0,197,199,5,35,0,0,198,197,1,0,0,0,198,199,1,0,0,0,
199,51,1,0,0,0,200,201,5,41,0,0,201,202,5,36,0,0,202,205,7,12,0,0,203,205,
5,41,0,0,204,200,1,0,0,0,204,203,1,0,0,0,205,53,1,0,0,0,206,211,3,22,11,
0,207,211,3,24,12,0,208,211,3,20,10,0,209,211,3,26,13,0,210,206,1,0,0,0,
210,207,1,0,0,0,210,208,1,0,0,0,210,209,1,0,0,0,211,55,1,0,0,0,212,213,3,
0,0,0,213,57,1,0,0,0,214,216,3,54,27,0,215,217,3,56,28,0,216,215,1,0,0,0,
216,217,1,0,0,0,217,218,1,0,0,0,218,219,5,8,0,0,219,224,3,0,0,0,220,221,
5,9,0,0,221,223,3,0,0,0,222,220,1,0,0,0,223,226,1,0,0,0,224,222,1,0,0,0,
224,225,1,0,0,0,225,228,1,0,0,0,226,224,1,0,0,0,227,229,5,41,0,0,228,227,
1,0,0,0,228,229,1,0,0,0,229,230,1,0,0,0,230,232,5,10,0,0,231,233,3,2,1,0,
232,231,1,0,0,0,232,233,1,0,0,0,233,235,1,0,0,0,234,236,5,9,0,0,235,234,
1,0,0,0,235,236,1,0,0,0,236,59,1,0,0,0,237,239,3,50,25,0,238,237,1,0,0,0,
239,242,1,0,0,0,240,238,1,0,0,0,240,241,1,0,0,0,241,61,1,0,0,0,242,240,1,
0,0,0,24,71,77,87,93,101,123,134,141,145,148,167,172,181,187,194,198,204,
210,216,224,228,232,235,240];


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
                            "'exists'", "'EXISTS'", "'.'", "':;'", "'='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "SPACE", "STRING", 
                             "INT", "Float", "ID" ];
    static ruleNames = [ "fieldName", "id", "value", "notNUll", "size", 
                         "unsigned", "typeRange", "autoIncrement", "primary", 
                         "unique", "key", "primaryKey", "uniqueKey", "indexKey", 
                         "defaultValue", "comment", "property", "fieldDefine", 
                         "create", "table", "iff", "not", "exists", "ifNotExists", 
                         "createTable", "statement", "options", "keyType", 
                         "keyName", "index", "init" ];

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
	        this.state = 71;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 62;
	            this.match(SqlParser.T__0);
	            this.state = 63;
	            this.id();
	            this.state = 64;
	            this.match(SqlParser.T__0);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 66;
	            this.match(SqlParser.T__1);
	            this.state = 67;
	            this.id();
	            this.state = 68;
	            this.match(SqlParser.T__1);
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 70;
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
	        this.state = 73;
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
	        this.state = 77;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case -1:
	            this.enterOuterAlt(localctx, 1);

	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 76;
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
	        this.state = 87;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 79;
	            this.match(SqlParser.T__2);
	            this.state = 80;
	            this.match(SqlParser.T__3);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 81;
	            this.match(SqlParser.T__2);
	            this.state = 82;
	            this.match(SqlParser.T__4);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 83;
	            this.match(SqlParser.T__5);
	            this.state = 84;
	            this.match(SqlParser.T__6);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 85;
	            this.match(SqlParser.T__5);
	            this.state = 86;
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
	        this.state = 89;
	        this.match(SqlParser.T__7);
	        this.state = 90;
	        this.match(SqlParser.INT);
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 91;
	            this.match(SqlParser.T__8);
	            this.state = 92;
	            this.match(SqlParser.INT);
	        }

	        this.state = 95;
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
	        this.state = 97;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.id();
	        this.state = 101;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 100;
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
	        this.state = 103;
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
	        this.state = 105;
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
	        this.state = 107;
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
	        this.state = 109;
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



	primaryKey() {
	    let localctx = new PrimaryKeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, SqlParser.RULE_primaryKey);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.primary();
	        this.state = 112;
	        this.key();
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



	uniqueKey() {
	    let localctx = new UniqueKeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, SqlParser.RULE_uniqueKey);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.unique();
	        this.state = 115;
	        this.key();
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
	    this.enterRule(localctx, 26, SqlParser.RULE_indexKey);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
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
	    this.enterRule(localctx, 28, SqlParser.RULE_defaultValue);
	    var _la = 0;
	    try {
	        this.state = 123;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	        case 23:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 119;
	            _la = this._input.LA(1);
	            if(!(_la===22 || _la===23)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 120;
	            this.match(SqlParser.STRING);
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 121;
	            this.match(SqlParser.INT);
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 122;
	            this.match(SqlParser.Float);
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



	comment() {
	    let localctx = new CommentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, SqlParser.RULE_comment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        _la = this._input.LA(1);
	        if(!(_la===24 || _la===25)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 126;
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
	    this.enterRule(localctx, 32, SqlParser.RULE_property);
	    try {
	        this.state = 134;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 128;
	            this.primaryKey();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 129;
	            this.autoIncrement();
	            break;
	        case 11:
	        case 12:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 130;
	            this.unsigned();
	            break;
	        case 22:
	        case 23:
	        case 39:
	        case 40:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 131;
	            this.defaultValue();
	            break;
	        case 3:
	        case 6:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 132;
	            this.notNUll();
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 133;
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
	    this.enterRule(localctx, 34, SqlParser.RULE_fieldDefine);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.fieldName();
	        this.state = 137;
	        this.typeRange();
	        this.state = 141;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 138;
	                this.property(); 
	            }
	            this.state = 143;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===24 || _la===25) {
	            this.state = 144;
	            this.comment();
	        }

	        this.state = 148;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 147;
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
	    this.enterRule(localctx, 36, SqlParser.RULE_create);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
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
	    this.enterRule(localctx, 38, SqlParser.RULE_table);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
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
	    this.enterRule(localctx, 40, SqlParser.RULE_iff);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
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
	    this.enterRule(localctx, 42, SqlParser.RULE_not);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
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
	    this.enterRule(localctx, 44, SqlParser.RULE_exists);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
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
	    this.enterRule(localctx, 46, SqlParser.RULE_ifNotExists);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.iff();
	        this.state = 161;
	        this.not();
	        this.state = 162;
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
	    this.enterRule(localctx, 48, SqlParser.RULE_createTable);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.create();
	        this.state = 165;
	        this.table();
	        this.state = 167;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===30 || _la===31) {
	            this.state = 166;
	            this.ifNotExists();
	        }

	        this.state = 172;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        if(la_===1) {
	            this.state = 169;
	            localctx.dbName = this.fieldName();
	            this.state = 170;
	            this.match(SqlParser.T__33);

	        }
	        this.state = 174;
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
	    this.enterRule(localctx, 50, SqlParser.RULE_statement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this.createTable();
	        this.state = 177;
	        this.match(SqlParser.T__7);
	        this.state = 181;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===2 || _la===41) {
	            this.state = 178;
	            this.fieldDefine();
	            this.state = 183;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 187;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4177920) !== 0)) {
	            this.state = 184;
	            this.index();
	            this.state = 189;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 190;
	        this.match(SqlParser.T__9);
	        this.state = 194;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===41) {
	            this.state = 191;
	            this.options();
	            this.state = 196;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 198;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 197;
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
	    this.enterRule(localctx, 52, SqlParser.RULE_options);
	    var _la = 0;
	    try {
	        this.state = 204;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 200;
	            this.match(SqlParser.ID);
	            this.state = 201;
	            this.match(SqlParser.T__35);
	            this.state = 202;
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
	            this.state = 203;
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
	    this.enterRule(localctx, 54, SqlParser.RULE_keyType);
	    try {
	        this.state = 210;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 206;
	            this.primaryKey();
	            break;
	        case 16:
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 207;
	            this.uniqueKey();
	            break;
	        case 18:
	        case 19:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 208;
	            this.key();
	            break;
	        case 20:
	        case 21:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 209;
	            this.indexKey();
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



	keyName() {
	    let localctx = new KeyNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, SqlParser.RULE_keyName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
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
	    this.enterRule(localctx, 58, SqlParser.RULE_index);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this.keyType();
	        this.state = 216;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1 || _la===2 || _la===41) {
	            this.state = 215;
	            this.keyName();
	        }

	        this.state = 218;
	        this.match(SqlParser.T__7);
	        this.state = 219;
	        this.fieldName();
	        this.state = 224;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 220;
	            this.match(SqlParser.T__8);
	            this.state = 221;
	            this.fieldName();
	            this.state = 226;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 228;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 227;
	            this.match(SqlParser.ID);
	        }

	        this.state = 230;
	        this.match(SqlParser.T__9);
	        this.state = 232;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 231;
	            this.id();
	        }

	        this.state = 235;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 234;
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
	    this.enterRule(localctx, 60, SqlParser.RULE_init);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===26 || _la===27) {
	            this.state = 237;
	            this.statement();
	            this.state = 242;
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
SqlParser.RULE_primaryKey = 11;
SqlParser.RULE_uniqueKey = 12;
SqlParser.RULE_indexKey = 13;
SqlParser.RULE_defaultValue = 14;
SqlParser.RULE_comment = 15;
SqlParser.RULE_property = 16;
SqlParser.RULE_fieldDefine = 17;
SqlParser.RULE_create = 18;
SqlParser.RULE_table = 19;
SqlParser.RULE_iff = 20;
SqlParser.RULE_not = 21;
SqlParser.RULE_exists = 22;
SqlParser.RULE_ifNotExists = 23;
SqlParser.RULE_createTable = 24;
SqlParser.RULE_statement = 25;
SqlParser.RULE_options = 26;
SqlParser.RULE_keyType = 27;
SqlParser.RULE_keyName = 28;
SqlParser.RULE_index = 29;
SqlParser.RULE_init = 30;

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



class PrimaryKeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_primaryKey;
    }

	primary() {
	    return this.getTypedRuleContext(PrimaryContext,0);
	};

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterPrimaryKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitPrimaryKey(this);
		}
	}


}



class UniqueKeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlParser.RULE_uniqueKey;
    }

	unique() {
	    return this.getTypedRuleContext(UniqueContext,0);
	};

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.enterUniqueKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitUniqueKey(this);
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

	primaryKey() {
	    return this.getTypedRuleContext(PrimaryKeyContext,0);
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

	primaryKey() {
	    return this.getTypedRuleContext(PrimaryKeyContext,0);
	};

	uniqueKey() {
	    return this.getTypedRuleContext(UniqueKeyContext,0);
	};

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	indexKey() {
	    return this.getTypedRuleContext(IndexKeyContext,0);
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
	        listener.enterIndex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlListener ) {
	        listener.exitIndex(this);
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
SqlParser.PrimaryKeyContext = PrimaryKeyContext; 
SqlParser.UniqueKeyContext = UniqueKeyContext; 
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
SqlParser.InitContext = InitContext; 
