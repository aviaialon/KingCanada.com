<?php $this->renderPartial('products::listing_table', array(
	'products' 	=> $this->getViewData('products'),
	'apiUrl' 	=> $this->getViewData('apiUrl')
)); ?>