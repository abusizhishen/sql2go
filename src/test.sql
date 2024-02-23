CREATE TABLE `stat_alarm` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT "主键id",
    `name` varchar(16) NOT NULL DEFAULT "" COMMENT "国家",
    `age` varchar(16) NOT NULL DEFAULT "" COMMENT "省",
    `gender` varchar(16) NOT NULL DEFAULT "" COMMENT "市",
    `img` varchar(16) NOT NULL DEFAULT "" COMMENT "区",
    `created_at` tinyint(17) unsigned NOT NULL DEFAULT "1" COMMENT "日期类型：1周2月",
    `updated_at` text NOT NULL COMMENT "数据"
)