<!doctype html>
<html>
<head>
<meta charset="utf-8">
<?php $this->renderPartial('scripts::script_assets', $this->get()); ?>
</head>

<body class="<?php echo ($this->getMvcRequest('controller')); ?> <?php echo ($this->getMvcRequest('rawAction')); ?>">
	<div class="product_container">
		${CONTENT}
    </div>
</body>
</html>