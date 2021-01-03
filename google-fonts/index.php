<!DOCTYPE html>
<html lang="en-US">
<head>
<title>Google Fonts</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

<?php 
error_reporting(2);
$font_arr = array('Lato', 'Open Sans', 'Titillium Web', 'Roboto', 'Oxygen', 'Poppins', 'Montserrat', 'Exo 2');
isset($_GET['google_font']) && $_GET['google_font'] != '' ?  array_unshift($font_arr, $_GET['google_font']) : '';

for($i = 0; $i < count($font_arr); $i++) { ?>
	<link href="https://fonts.googleapis.com/css?family=<?php echo str_replace(' ', '+', $font_arr[$i]);?>:400,400,500,600,700,800,300italic,400italic,500italic,600italic,700italic,800italic" rel="stylesheet">
<?php } ?>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<style type="text/css">
	.the-font { font-size: 22px; font-weight: 400; }
</style>
<script type="text/javascript">
	var theFontSize = 22;
</script>

</head>

<body>

<div class="container">
	<div class="row">
		<div class="col-md-12">
			<div style="position: fixed; background-color: #fff; width: auto;">
				<br /><h1><a href="./" style="text-decoration: none;">Google Fonts</a><a href="https://fonts.google.com/" target="_blank">↗︎</a></h1>
					<form name="form1" id="form1" method="get" action="" style="display: inline;">
						<input name="google_font" value="<?php echo $_GET['google_font'];?>" style="font-size: 14px; margin: 2px 20px 0px 0px;" maxlength="100" size="22" placeholder="Enter Google Font Name" /> &nbsp;&nbsp;&nbsp;&nbsp;
					</form>
					<span style="font-size: 22px; cursor: pointer;" onclick="theFontSize = theFontSize + 1; jQuery('.the-font').css('font-size', theFontSize+'px')">A+&nbsp;&nbsp;&nbsp;&nbsp;</span>
					<span style="font-size: 18px; cursor: pointer; margin-top: 3px;" onclick="theFontSize = theFontSize - 1; jQuery('.the-font').css('font-size', theFontSize+'px')">A-&nbsp;&nbsp;&nbsp;&nbsp;</span>
				<hr /><br />
			</div>
		</div>
	</div>
	<br /><br /><br /><br /><br /><br /><br />

	<?php for($i = 0; $i < count($font_arr); $i++) { ?>
		<h3 style="font-family: '<?php echo $font_arr[$i]?>'" ><?php echo $font_arr[$i]?><a href="https://fonts.google.com/specimen/<?php echo str_replace(' ', '+', $font_arr[$i]);?>" target="_blank">↗︎</a></h3>
		<p style="font-family: '<?php echo $font_arr[$i]?>'" class="the-font">
			There are three reasons why I prefer jogging to other sports. One reason is that jogging is a cheap sport. I can practise it anywhere at any time with no need for a ball or any other equipment. Another reason why I prefer jogging is that it is friendly to my heart. I don’t have to exhaust myself or do excessive efforts while jogging. Finally, I prefer this sport because it is safe. It isn’t as risky as other sports like gymnastics, racing or horseback riding. For all these reasons, I consider jogging the best sport of all.
			<br />A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
			<br />a b c d e f g h i j k l m n o p q r s t u v w x y z
			<br />1 2 3 4 5 6 7 8 9 0 ` ~ ! @ # $ % ^ & * ( ) _ + { } [ ] \ | ; ' : " , . / < > ? 
		</p>
		<br /><hr /><br />
	<?php } ?>
</div>

</body>
</html>
