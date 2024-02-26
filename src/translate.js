import SqlListener from "./parser/SqlListener";

export default class Listener extends SqlListener {
    fieldLengthMax = 0
    typeLengthMax = 0
    tagLengthMax = 0
    head = []
    rows = []
    jsonSwitch
    commentSwitch
    gormSwitch
    content = ""

    enterInit(ctx) {
    }

    enterStatement(ctx){

    }

    enterCreateTableStatement(ctx) {
        this.fieldLengthMax = 0
        this.typeLengthMax = 0
        this.tagLengthMax = 0
        this.head = []
        this.rows = []

        let tableName = ctx.createTable().tableName.getText()
        tableName = this.removeChar(tableName)
        tableName = this.toCamel(tableName)
        this.head.push("type", this.getFourSpace(), tableName, this.getFourSpace(), "struct", this.getFourSpace(), "{\n")
    }

    enterTa

    exitCreateTableStatement(ctx) {
        console.log("fieldMax: ", this.fieldLengthMax, "typeMax: ", this.typeLengthMax, "tagMax: ", this.tagLengthMax)
        this.content += this.head.join("")
        const repeat = 3
        for (let row of this.rows) {
            for (let idx = 0; idx < row.length; idx++) {
                // console.log("idx: ", idx, "str: ", row[idx])
                let str = row[idx]
                let space = " "
                if (idx === 0) {
                    space = space.repeat(repeat)
                } else if (idx === 1) {
                    space = space.repeat(repeat + this.fieldLengthMax - row[idx - 1].length)
                } else if (idx === 2) {
                    space = space.repeat(repeat + this.typeLengthMax - row[idx - 1].length)
                } else if (idx === 3) {
                    space = space.repeat(repeat + this.tagLengthMax - row[idx - 1].length)
                }

                this.content += space + str
            }
            this.content += "\n"
        }

        this.content += "}\n\n\n\n"
    }

    exitInit(ctx) {

    }

    enterTable(ctx) {

    }

    exitTable(ctx) {

    }

    exitFieldDefine(ctx) {
        let row = []
        let fieldName = ctx.fieldName().id().getText()
        let originFieldName = this.removeChar(fieldName)

        fieldName = this.toCamel(originFieldName)
        if (this.fieldLengthMax < fieldName.length) {
            this.fieldLengthMax = fieldName.length
        }

        row.push(fieldName)
        let typeRange = ctx.typeRange()
        let type = typeRange.id().getText()
        type = this.getType(type)
        if (type.length > this.typeLengthMax) {
            this.typeLengthMax = type.length
        }
        row.push(type)

        let tags = []
        let tag_length = 0
        if (this.jsonSwitch === true) {
            let tag = 'json:"' + originFieldName + '"'
            tag_length += tag.length
            tags.push(tag)
        }

        if (this.gormSwitch === true) {
            let tag = 'gorm:"' + originFieldName + '"'
            tag_length += tag.length
            tags.push(tag)
        }

        if (tags.length > 0) {
            if (tag_length > this.tagLengthMax) {
                this.tagLengthMax = tag_length
            }
            row.push("`" + tags.join(" ") + "`")
        }

        if (this.commentSwitch && ctx.comment() != null) {
            let str = ctx.comment().STRING().getText()
            row.push("// " + str.substring(1, str.length - 1))
        }

        this.rows.push(row)
    }

    enterValue(ctx) {
        let value = ctx.getText()
        console.log("value: ", value)
        return value
    }

    enterId(ctx) {
        return ctx.getText()
    }

    enterFieldName(ctx) {
        return ctx.id()
    }

    toGo() {
        return this.content
    }

    removeChar(str) {
        return str.replaceAll("`", '').replaceAll("'", '')
    }

    getFourSpace() {
        return '    '
    }

    getType(str) {
        str = str.toLowerCase()
        switch (str) {
            //str
            case "varchar":
                return "string"
            case "char":
                return "string"
            case "text":
                return "string"
            case "blob":
                return "string"

            //int
            case "tinyint":
                return "int"
            case "int":
                return "int"
            case "mediumint":
                return "int"
            case "bigint":
                return "int"

            //date
            case "datetime":
                return "time.Time"
            case "date":
                return "time.Time"
            case "timestamp":
                return "time.Time"
            case "decimal":
                return "float64"
            default:
                return str
        }
    }

    toCamel(s) {
        let arr = [...s]
        let str = ""
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "_") {
                continue
            }

            if (i === 0) {
                if (arr[i] >= 'a' && arr[i] <= 'z') {
                    arr[i] = arr[i].toUpperCase()
                }
                str += arr[i]
                continue
            }
            if (arr[i - 1] === "_" && arr[i] >= 'a' && arr[i] <= 'z') {
                arr[i] = arr[i].toUpperCase()
            }

            str += arr[i]
        }
        return str
    }
}
