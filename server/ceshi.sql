# Host: localhost  (Version: 5.5.47)
# Date: 2016-10-26 22:07:41
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "ceshi"
#

DROP TABLE IF EXISTS `ceshi`;
CREATE TABLE `ceshi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `url` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

#
# Data for table "ceshi"
#

/*!40000 ALTER TABLE `ceshi` DISABLE KEYS */;
INSERT INTO `ceshi` VALUES (1,'刘涛-红颜旧','hyj.mp4'),(2,'大王叫我来巡山','dwjwlxs.mp4'),(3,'喜欢你','xhn.mp4'),(4,'海阔天空','hktk.mp4'),(5,'光辉岁月','ghsy.mp4');
/*!40000 ALTER TABLE `ceshi` ENABLE KEYS */;
