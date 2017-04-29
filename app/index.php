<?php
require_once('php/conf.php');

$manifest = file_exists("manifest.json") ? json_decode(file_get_contents("manifest.json"), true) : null;
function getFileName($fileName) {
    global $manifest;
    return $manifest ? $manifest[$fileName] : $fileName;
}
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Title of the document</title>
    <link rel="stylesheet" href="<?php echo getFileName("main.css"); ?>" />
</head>

<body>
    Hello <?php echo HELLO; ?>
    <script src="<?php echo getFileName("manifest.js"); ?>"></script>
    <script src="<?php echo getFileName("vendor.js"); ?>"></script>
    <script src="<?php echo getFileName("main.js"); ?>"></script>
</body>

</html>
