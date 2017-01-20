<?php

$conn = mysql_connect("localhost","root","root");
mysql_query("set names utf8");
mysql_select_db("ceshi");
$rs = mysql_query("select name,url from ceshi");
$row=array();
while ($ret = mysql_fetch_array($rs,MYSQL_ASSOC)){
    $row[]=$ret;
}


foreach ($row as $k=>$v){
    $v['key']=$k;
    $row[$k]=$v;
}
echo json_encode($row);