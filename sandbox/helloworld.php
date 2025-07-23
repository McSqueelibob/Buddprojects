<!DOCTYPE html>
<html>
<body>
<?php
echo "<p>hello world 2</p>";
echo $_SERVER['HTTP_USER_AGENT']; 
?>
<form target="_blank" action="writer.php" method="post">
    <label for="variable_a">Your name:</label>
    <input name="variable_a" id="variable_a" type="text">

    <label for="variable_b">Your age:</label>
    <input name="variable_b" id="variable_b" type="text">

    <label for="variable_c">Your agc:</label>
    <input name="variable_c" id="variable_c" type="text">
    
    <button type="submit">Submit</button>
</form>
</body>
</html>
