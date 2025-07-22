<!DOCTYPE html>
<html>
<body>
<?php
$a = $_POST["input_a"];
$b = $_POST["input_b"];
$c = $_POST["input_c"];

// the name of the file you're writing to
$myFile = "/home/josh/Desktop/data.txt";

// opens the file for appending (file must already exist)
$fh = fopen($myFile, 'a');

// Makes a CSV list of your post data
$comma_delmited_list = implode(",", $_POST) . "\n";

// Write to the file
fwrite($fh, $comma_delmited_list);

// You're done
fclose($fh);

echo $a;
?>
</body>
</html>
