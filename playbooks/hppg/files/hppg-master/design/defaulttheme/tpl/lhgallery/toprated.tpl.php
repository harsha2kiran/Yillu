<div class="header-list">

<?php include_once(erLhcoreClassDesign::designtpl('lhgallery/resolution_box.tpl.php'));?>

<h1><?=erTranslationClassLhTranslation::getInstance()->getTranslation('gallery/toprated','Top rated images')?></h1>
</div>
<? if ($pages->items_total > 0) { ?>
         
<? 
    $items = erLhcoreClassModelGalleryImage::getImages(array('ignore_fields' => array('filesize','total_filesize','ctime','owner_id','pic_rating','votes','caption','keywords','pic_raw_ip','approved','mtime','comtime','anaglyph','rtime'),'smart_select' => true,'disable_sql_cache' => true,'filter' => $filterArray,'sort' => 'pic_rating DESC, votes DESC, pid DESC','offset' => $pages->low, 'limit' => $pages->items_per_page));
?>   
   
<?php include_once(erLhcoreClassDesign::designtpl('lhgallery/image_list.tpl.php'));?> 
          
<? } else { ?>

<p><?=erTranslationClassLhTranslation::getInstance()->getTranslation('gallery/toprated','No records')?>.</p>

<? } ?>

