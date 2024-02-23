import Listener from "./translate";
import SqlLexer from "./parser/SqlLexer";
import SqlParser from "./parser/SqlParser";
import antlr4 from "antlr4";

export let parser =  (sql,jsonSwitch,commentSwitch,gormSwitch) =>{
    const chars = new antlr4.InputStream(sql);
    const lex = new SqlLexer(chars)
    const tokens = new antlr4.CommonTokenStream(lex);
    const p = new SqlParser(tokens);

    const tree = p.init();
    let l = new Listener()
    l.jsonSwitch = jsonSwitch;
    l.commentSwitch = commentSwitch;
    l.gormSwitch = gormSwitch;
    (new antlr4.tree.ParseTreeWalker).walk(l,tree)
    return l.toGo()
}
