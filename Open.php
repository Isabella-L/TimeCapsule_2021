<!doctype html>
<html>
    <head>
       <title>TimeCapsulse Deomo</title>
    </head>
    <body>

    <h1>TimeCapsulse Demo</h1>


    <form action = "page1.php" method = "get">
         key: <input type = "text" name = "search_key">
         <input type = "submit">
   </form>
   

    <?php
    date_default_timezone_set('Singapore');
    $current_date = date('Y-m-d', time());
    $the_key = $_GET["search_key"];

    $conn = mysqli_connect('localhost','root','root','TimeCapsulse');

    /*
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
     }
     echo "Connected successfully";*/

     $query = "SELECT * FROM Capsulses WHERE search_key = '$the_key'";
     //$query = 'SELECT * FROM Capsulses';
     $result = mysqli_query ($conn, $query);

     echo mysqli_num_rows($result);
     echo ' result(s) is/are found';
     echo '<br><br>';

     //echo $result;

     while ($record = mysqli_fetch_assoc($result))
     {
        if ($current_date > $record['open_time'])
          {
            echo '<pre>';
            //print_r($record);
            //echo'<h2>'.$record['name'].'</h2>';
            echo'<h2>'.$record['title'].'</h2>';
            echo $record['message'];

            echo '<br>';
            echo '</pre>';
           
          }
         else
           {
            echo '<br>';
            echo 'Curren date is: '  ;  echo $current_date;  echo '<br>';
            echo 'The open date is: ';   echo $record['open_time'];   echo '<br>';
            echo '<h2>'. $record['not_yet_message'].'</h2>';
           }
     }
     

    ?>
    </body>
</html>