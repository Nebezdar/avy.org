<?php

$dbConnection = pg_connect("host=localhost dbname=your_db user=your_user password=your_password");

function importCSV($filename) {
    global $dbConnection;
    
    if (($handle = fopen($filename, "r")) !== FALSE) {
        // Пропускаем заголовок
        fgetcsv($handle);
        
        while (($data = fgetcsv($handle)) !== FALSE) {
            $article = pg_escape_string($data[0]);
            $productType = pg_escape_string($data[1]);
            $category = pg_escape_string($data[2]);
            $series = pg_escape_string($data[3]);
            
            $query = "INSERT INTO products (article, product_type, category, series) 
                     VALUES ('$article', '$productType', '$category', '$series')
                     ON CONFLICT (article) DO UPDATE 
                     SET product_type = EXCLUDED.product_type,
                         category = EXCLUDED.category,
                         series = EXCLUDED.series";
                         
            pg_query($dbConnection, $query);
        }
        fclose($handle);
    }
}

importCSV("1.csv");
?> 