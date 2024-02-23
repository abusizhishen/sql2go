grammar Sql;

SPACE:     [ \t\r\n]+ -> skip;

STRING
   : '"' (SAFECODEPOINT|'\''|'\\"')*? '"'
   | '\'' (SAFECODEPOINT|'"'|'\'')*? '\''
   ;

//fragment ESC
//   : '\\' (["\\/bfnrt] | UNICODE)
//   ;
//fragment UNICODE
//   : 'u' HEX HEX HEX HEX
//   ;
//fragment HEX
//   : [0-9a-fA-F]
//   ;

fragment SAFECODEPOINT
   : [\u0000-\u001F]
   |[\u4e00-\u9fa5]
   //匹配这些中文标点符号 。 ？ ！ ， 、 ； ： “ ” ‘ ' （ ） 《 》 〈 〉 【 】 『 』 「 」 ﹃ ﹄ 〔 〕 … — ～ ﹏ ￥
   |[\u3002\uff1f\uff01\uff0c\u3001\uff1b\uff1a\u201c\u201d\u2018\u2019\uff08\uff09\u300a\u300b\u3008\u3009\u3010\u3011\u300e\u300f\u300c\u300d\ufe43\ufe44\u3014\u3015\u2026\u2014\uff5e\ufe4f\uffe5\uff0d\uff3f\u002d]
   |[`~!@#$%^&*()_+=[\]{}\\|;:,./<>?]
   |[0-9]
   |[A-Za-z]
   |' '
   ;


INT:[0-9]+;
Float:[0-9]+('.'[0-9]+)?;
ID:[a-zA-Z_][a-zA-Z_0-9]*;

fieldName:
'`' id '`'
| '\'' id '\''
|id
;

id:ID;

value:

|ID
;

notNUll:
    'NOT' 'NULL'
    |'NOT' 'null'
    |'not' 'NUll'
    |'not' 'null'
;
size: '(' INT (',' INT)? ')';
unsigned:'unsigned'|'UNSIGNED';
typeRange: id size?;
autoIncrement:'AUTO_INCREMENT';
primary:
    'PRIMARY'
    |'primary'
    ;
unique:
    'UNIQUE'
    |'unique'
    ;
key:
    'key'
    |'KEY'
    ;

primaryKey:primary key;
uniqueKey:unique key;
indexKey:'index'|'INDEX';

defaultValue: ('default'|'DEFAULT') STRING|INT|Float ;
comment: ('COMMENT'|'comment') STRING;

property:
    primaryKey
    |autoIncrement
    |unsigned
    |defaultValue
    |notNUll
    |id
;
fieldDefine: fieldName typeRange property* comment? ','? ;

create:'create'|'CREATE';
table:'table'|'TABLE';
iff:'if' |'IF';
not:'not'|'NOT';
exists:'exists'|'EXISTS';
ifNotExists: iff not exists;

createTable: create table ifNotExists? (dbName=fieldName '.' ) ? tableName= fieldName ;

statement:
    createTable '('
    fieldDefine*
    index*
 ')' options* ':;'?
;

options:
ID '=' (STRING|ID|INT)
|ID;

keyType:primaryKey|uniqueKey|key|indexKey;
keyName:fieldName;
index:keyType keyName? '(' fieldName (',' fieldName)* ID? ')' id? ','?;

init:statement*;