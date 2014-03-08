ALTER TABLE `lh_gallery_images` ADD INDEX  (  `aid` ,  `pwidth` ,  `pheight` , `pid` );
ALTER TABLE `lh_gallery_images` ADD INDEX ( `aid` ,  `pwidth` ,  `pheight` , `hits`, `pid` ) ;
ALTER TABLE `lh_gallery_images` ADD INDEX ( `aid` ,  `pwidth` ,  `pheight` , `mtime`, `pid` ) ;
ALTER TABLE `lh_gallery_images` ADD INDEX (  `aid` ,  `pwidth` ,  `pheight` ,  `pic_rating` ,  `votes`, `pid` ) ;
ALTER TABLE `lh_gallery_images` ADD INDEX (  `aid` ,  `pwidth` ,  `pheight` ,  `comtime`, `pid` ) ;
ALTER TABLE `lh_gallery_images` ADD INDEX (  `pwidth` ,  `pheight` ,  `pid` ) ;
ALTER TABLE `lh_gallery_images` ADD INDEX (  `pwidth` ,  `pheight` ,  `mtime` ,  `pid` ) ;
ALTER TABLE `lh_gallery_images` ADD INDEX (  `pwidth` ,  `pheight` ,  `comtime` ,  `pid` ) ;
ALTER TABLE `lh_gallery_images` ADD INDEX (  `pwidth` ,  `pheight` ,  `hits` ,  `pid` ) ;
ALTER TABLE `lh_gallery_images` ADD INDEX (  `pwidth` ,  `pheight` ,  `pic_rating` ,  `votes` ,  `pid` ) ;