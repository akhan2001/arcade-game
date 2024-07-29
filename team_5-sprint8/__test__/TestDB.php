<?php declare(strict_types=1);

use PHPUnit\Framework\TestCase;

require $_SERVER['DOCUMENT_ROOT']."getscores.php";

final class TestDB extends TestCase
{
    //Add Test Cases Here or Create Test functions, following the test* naming convention
    public function testException(): void
    {
       print("test");        
      
       echo(test);
    }

}


